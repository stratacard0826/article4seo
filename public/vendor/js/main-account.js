$(document).ready(function(){
	$(".smsConfirm").hide();
	$(".smsAlert").hide();
	$(".allow_calls_hours_block").hide();
	
	$('.selectpicker').select2({
		dropdownAutoWidth : true,
    	width: 'auto'
	}); 
	window.crs.init();

	

	$(':checkbox').checkboxpicker({
		html: true,
		offLabel: '<span class="glyphicon glyphicon-remove">',
		onLabel: '<span class="glyphicon glyphicon-ok">'
	});


	
	$.getJSON(htmlPath+"/?mode=http_response&cmd=html-account-profile", function( data ) {
        $("#blockProfile").html(data['html']);
        dimmer(0)
    });
	


	






	

	$(".btn-block-open").click(function(e){
		$(this).closest('.form-group').next().toggle();
	});







	$('#formAccountContacts').formValidation({
        framework: 'bootstrap',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        autoFocus: true,
        fields: {
            email: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
						message: 'The email is required and cannot be empty'
				    },
				    emailAddress: {
						message: 'The input is not a valid email address'
				    },
				    remote: {
						message: 'Email already exists',
						url: htmlPath+'/?mode=http_response&cmd=check-email',
						delay: 2000,
						async:true,
					},
					stringLength: {
						min: 1,
						max: 127,
						message: 'The e-mail input is incorrect'
				    }
				}
			},
		    confirm_email: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
					message: 'The email is required and cannot be empty'
				    },
				    identical: {
					field: 'email',
					message: 'The emails entered are not the same'
				    },
				    stringLength: {
					min: 1,
					max: 127,
					message: 'The e-mail input is incorrect'
				    }
				}
			},
		    

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



		    address: {
				row: '.col-sm-5',
				validators: {
				    notEmpty: {
					message: 'Address is required'
				    },
				    stringLength: {
					min: 5,
					max: 60,
					message: 'Address must be less than 60 characters'
				    }
				}
			    },
		    city: {
				row: '.col-sm-4',
				validators: {
				    notEmpty: {
					message: 'City is required'
				    },
				    stringLength: {
					min: 2,
					max: 30,
					message: 'City must be less than 20 characters'
				    }
				}
			    },
		    zip: {
				row: '.col-sm-3',
				validators: {
				    notEmpty: {
					message: 'Zip code is required'
				    },
				    stringLength: {
					min: 1,
					max: 10,
					message: 'Zip code must be less than 20 characters'
				    }
				}
			    },
		    phone: {
				validators: {
	                notEmpty: {
						message: 'The phone is required'
				    },
	                callback: {
                        message: 'The phone number is not valid',
                        callback: function(value, validator, $field) {
                            return {
                                valid: value === '' || $field.intlTelInput('isValidNumber'),
                                type: $field.intlTelInput('getNumberType')
                            };
                        }
                    }
	            }
			},
			allow_call_hours: {
				row: '.col-sm-4',
				validators: {
				    notEmpty: {
						message: 'The hours to call is required'
				    }
				}
			},
			sms_pin: {
				validators: {
				    notEmpty: {
						message: 'The pin is required'
				    }
				}		
			},
		    
		    state: {
				validators: {
				    notEmpty: {
					message: 'State is required'
				    }
				    
				}
			    },
		    country: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
						message: 'Country is required'
				    }
				}
			},
			region: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
						message: 'Region is required'
				    }
				}
			},
		    
			
	    }
    })
	.on('click', '.country-list', function() {
    	$('#formOrder').formValidation('revalidateField', 'phone');
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
    .on('success.field.fv', function(e, data) {
		if(data['field']=="confirm_email"){
			var inputName = data['field'];
			var inputValue = $("[name="+inputName+"]").val();
			var data = inputName+'='+inputValue;
			$.ajax({
				type: "POST",
				url: htmlPath+"/?mode=http_response&cmd=submit-batch-email",
				data: data,
				success: function(jsonobj){
				
				}
			});
			
		}
		else{

			var inputName = data['field'];
			var inputValue = $("[name="+inputName+"]").val();
			var inputType = $("[name="+inputName+"]").attr('type');
			if(inputType == "checkbox"){
				var value = this.checked;
			}
			if(inputName!=='' && inputValue!==''){
				var data = inputName+'='+inputValue;
				$.ajax({
					type: "POST",
					url: htmlPath+"/?mode=http_response&cmd=store_session",
					data: data,
					success: function(jsonobj){
					
					}
				});
			}
		}


	})
	.on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    })
	.on('success.validator.fv', function(e, data) {
        if (data.field === 'phone' && data.validator === 'callback' && data.element.val() !== '') {
            if (data.result.type !== intlTelInputUtils.numberType.MOBILE) {
                data.fv
                    // Mark the field as invalid
                    .updateStatus('phoneNumber', 'INVALID', 'callback')
                    // Update the message
                    .updateMessage('phoneNumber', 'callback', 'We accept the mobile numbers only');
            } 
            else {
                // Reset the message
                data.fv.updateMessage('phoneNumber', 'callback', 'The phone number is not valid');
            }
        }
	})
	.on('success.form.fv', function(e) {
		dimmer(1);
		e.preventDefault();

		var dlg = new BootstrapDialog({
	        type: BootstrapDialog.TYPE_DANGER,
	        draggable: true,
	        size: BootstrapDialog.SIZE_LARGE,
	        cssClass: 'dialog-terms',
	        title: 'ENTER PASSWORD',
	        message: '<input class=\"form-control\" type=\"password\" name=\"accountPassword\" placeholder=\"account password\"><div id=\"verifyAlert\" class=\"alert alert-danger fade in\" style=\"display:none;\"><a class=\"close\">&times;</a><span></span></div>',
	        buttons: [
		        {
		            label: 'VERIFY',
		            cssClass: 'btn-default',
		            id: 'btnClose',
		            action: function (dialog) {
		            	var loginEmail = $('input[name="accountEmail"]').val();
		            	var loginPassword = $('input[name="accountPassword"]').val();
						$.ajax({
							type: "POST",
							url: htmlPath+'/?mode=http_response&cmd=validate-login',
							data: 'resetCheck=false&loginEmail='+loginEmail+'&loginPassword='+loginPassword,
							dataType: "json",
							success: function(jsonobj){
								if(jsonobj['err']==0){
									dialog.close();
									var data = $(e.target).find("input[type='hidden'], :input:not(:hidden),  :input[type='checkbox']").serialize();
									$.ajax({
										type: "POST",
										url: htmlPath+'/?mode=http_response&cmd=submit-account-edit',
										data: data+'&phone='+input.intlTelInput("getNumber"),
										dataType: "json",
										success: function(jsonobj){
											
											var dlg = new BootstrapDialog({
										        type: BootstrapDialog.TYPE_DEFAULT,
										        draggable: true,
										        size: BootstrapDialog.SIZE_LARGE,
										        cssClass: 'dialog-terms',
										        title: 'Success!',
										        message: jsonobj['msg'],
										        buttons: [
											        {
											            label: 'OK',
											            cssClass: 'btn-default',
											            id: 'btnClose',
											            action: function (dialog) {
											                dialog.close();

											                $.getJSON(htmlPath+"/?mode=http_response&cmd=html-account-profile", function( data ) {
																$("#blockProfile").html(data['html']);
																dimmer(0)
															});
											            }
											        }
										        ]
										    }).open();
										    dimmer(0);
											
										}
									});


								}
								else{
									$("#verifyAlert").find('span').html('Incorrect password');
									$("#verifyAlert").slideDown();
									dimmer(0);
								}
								
							}
						});
		            }
		        }
	        ]
	    }).open();
	    dimmer(0);


/*
								
		*/
            
    });



});