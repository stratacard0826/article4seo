$(document).ready(function(){
	
	
	$('#formReset').formValidation({
        framework: 'bootstrap',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        autoFocus: true,
        disableSubmitButtons:false,
        fields: {
            password: {
                row: '.col-sm-6',
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    callback: {
                        callback: function(value, validator, $field) {
                            var password = $field.val();
                            if (password == '') {
                                return true;
                            }

                            var result  = zxcvbn(password),
                                score   = result.score,
                                message = result.feedback.warning || 'The password is weak';

                            // Update the progress bar width and add alert class
                            var $bar = $('#strengthBar');
                            switch (score) {
                                case 0:
                                    $bar.attr('class', 'progress-bar progress-bar-danger')
                                        .css('width', '1%');
                                    break;
                                case 1:
                                    $bar.attr('class', 'progress-bar progress-bar-danger')
                                        .css('width', '25%');
                                    break;
                                case 2:
                                    $bar.attr('class', 'progress-bar progress-bar-danger')
                                        .css('width', '50%');
                                    break;
                                case 3:
                                    $bar.attr('class', 'progress-bar progress-bar-warning')
                                        .css('width', '75%');
                                    break;
                                case 4:
                                    $bar.attr('class', 'progress-bar progress-bar-success')
                                        .css('width', '100%');
                                    break;
                            }

                            // We will treat the password as an invalid one if the score is less than 3
                            if (score < 3) {
                                return {
                                    valid: false,
                                    message: message
                                }
                            }

                            return true;
                        }
                    }
                }
            },
            confirm_password: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
						message: 'The passwords do not match'
				    },
				    identical: {
						field: 'password',
						message: 'The passwords entered are not the same'
				    },
				    
				},
			},
	    }
    })
	.on('err.field.fv', function(e, data) {
        if (data.fv.getSubmitButton()) {
            data.fv.disableSubmitButtons(false);
        }
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getSubmitButton()) {
            data.fv.disableSubmitButtons(false);
        }
    })
    // always enabled 2
    //
    .on('err.form.fv', function(e) {
            // Get the FormValidation instance
            var fv = $(e.target).data('formValidation');

            // Get the first invalid field
            var $firstInvalidField = fv.getInvalidFields()[0];
            //alert('test')
            // Do something with first invalid field
            // ...
    })
	.on('success.form.fv', function(e) {
		dimmer(1);
		e.preventDefault();

		var data = $(e.target).serialize();

		$.ajax({
			type: "POST",
			url: htmlPath+'/?mode=http_response&cmd=submit-password-reset',
			data: data,
			dataType: "json",
			success: function(jsonobj){
				
					var dlg = new BootstrapDialog({
				        type: BootstrapDialog.TYPE_DANGER,
				        draggable: true,
				        size: BootstrapDialog.SIZE_WIDE,
				        cssClass: 'dialog-terms',
				        title: 'Error',
				        message: jsonobj['msg'],
				        buttons: [
				        {
				            label: 'OK',
				            cssClass: 'btn-default',
				            id: 'btnClose',
				            action: function (dialog) {
				                dialog.close();
				            }
				        }
				        ]
				    }).open();
					
				
			}
		});
		
            
    });



});