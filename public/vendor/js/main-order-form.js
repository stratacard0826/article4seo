$(document).ready(function (){
	$('.selectpicker').select2({
		dropdownAutoWidth : true,
    	width: 'auto'
	});
	
})

$(document).ready(function(){
	$(document).on("click",".quoteClose",function(){
		$("#blockQuoteOrder").slideUp();
	});

	//init page
	$("#blockQuoteOrder").hide();
	$("#orderLoginBtn").click(function(){
		$("#modalLogin").modal();
	});

	$(".smsConfirm").hide();
	$(".smsAlert").hide();

	//init quote form
	if($("#formOrder").length){	
		if($('input[name="dueDateVal"]').val()!=='' && $('select[name="academiclevel"]').val()!=='' && $('select[name="type"]').val()!=='' && $('select[name="pages"]').val()!==''){
			quote();
		}
	}
	$(':checkbox').checkboxpicker({
		html: true,
		offLabel: '<span class="glyphicon glyphicon-remove">',
		onLabel: '<span class="glyphicon glyphicon-ok">'
	});

	$("#btnBackupEmail").click(function(){
		$(".backupEmail").toggle();
	});

	

    
    var datepicker = $('#dueDate').pickadate({
        min: new Date(),
        formatSubmit: 'yyyy-mm-dd',
        hiddenName: true,
        container: '#datepicker-body',
        onSet: function(item) {
            if ( 'select' in item ) setTimeout( timepicker.open, 0 )
        }
    }).pickadate('picker')

    
    var timepicker = $('#dueTime').pickatime({
        formatSubmit: 'HH:i',
        hiddenName: true,
        container: '#datepicker-body',
        onRender: function() {
            $('<button>back to date</button>').
                on('click', function() {
                    timepicker.close()
                    datepicker.open()
                }).prependTo( this.$root.find('.picker__box') )
        },
        onSet: function(item) {
            /*
            if ( 'select' in item ) setTimeout( function() {
                $datetime.
                    off('focus').
                    val( datepicker.get() + ' @ ' + timepicker.get() ).
                    focus().
                    on('focus', datepicker.open)
            }, 0 )
            */
            $datetime.val(datepicker.get() + ' @ ' + timepicker.get());
            $("#dueDateVal").val($('input[name="dueDate"]').val() + ' ' + $('input[name="dueTime"]').val());

            $('#formOrder').formValidation('revalidateField', 'dueDateVal');
        }
    }).pickatime('picker')

    if($('#dueDateVal').length){
	    var $datetime = $('#dueDateVal').
	        on('focus', datepicker.open).
	        on('click', function(event) {
	            event.stopPropagation();
	            datepicker.open();

	    });
	}


	$(".btn-calendar-on").on("click",function(){
		datepicker.open(false)
	});


		


	// The maximum number of options
    var MAX_OPTIONS = 20;

    $('#formOrder').formValidation({
        framework: 'bootstrap',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        autoFocus: true,
        disableSubmitButtons:false,
        fields: {
            clientTZName: {
				row: '.col-sm-8',
				excluded: false,
				validators: {
				    notEmpty: {
						message: 'Please confirm that your local time and timezone are correct'
				    }
				    
				}		
			},
			checkTZ: {
				row: '.col-sm-4',
				autoFocus: true,
				excluded: false,
				validators: {
				    notEmpty: {
						message: 'Please confirm that your local time and timezone are correct'
				    }
				}		
			},
			dueDateVal: {
				row: '.col-sm-6',
				excluded: false,
				validators: {
				    notEmpty: {
						message: 'The date is required'
				    },
				    remote: {
						message: 'Deadline is incorrect',
						url: htmlPath+'/?mode=http_response&cmd=check-dd',
						async: true,
				    }
				    
				}		
			},
			deadline_flexible: {
				row: '.col-sm-6',
				excluded: false,
				validators: {
				    notEmpty: {
						message: 'Deadline flexibility is required'
				    },
				}		
			},
			type: {
				row: '.col-sm-6',
				excluded: false,
				validators: {
				    notEmpty: {
						message: 'Project type is required'
				    },
				}		
			},
			pages: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
						message: 'Number of pages is required'
				    },
				    integer: {
						message: 'The value is not an integer'
				    }
				}		
			},
		    academiclevel: {
				row: '.col-sm-6',
				excluded: false,
				validators: {
				    notEmpty: {
						message: 'Quality level is required'
				    },
				}		
			},

			subject: {
				row: '.col-sm-6',
				excluded: false,
				validators: {
				    notEmpty: {
						message: 'Subject type is required'
				    },
				}		
			},
		    sources: {
				validators: {
				    notEmpty: {
					message: 'The number of sources is required and cannot be empty'
				    }
				}		
			},
		    coursename: {
				row: '.col-sm-6',
				validators: {
				    stringLength: {
					min: 2,
					max: 255,
					message: 'Title must be less than 255 characters'
				    }
				}
			    },
		    courselevel: {
				row: '.col-sm-6',
				validators: {
				    stringLength: {
					min: 2,
					max: 255,
					message: 'Course level must be less than 255 characters'
				    }
				}
			},
		    title: {
				validators: {
				    notEmpty: {
					message: 'Details is required'
				    },
				    stringLength: {
					min: 10,
					max: 512,
					message: 'Title must be between 10 and 512 characters long'
				    }
				}
			    },
			    
		    details: {
				validators: {
				    notEmpty: {
					message: 'Details is required'
				    },
				    stringLength: {
					min: 50,
					max: 65535,
					message: 'Details must be between 50 and 65535 characters long'
				    }
				}
			},
			style: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
					message: 'The style is required and cannot be empty'
				    }
				}		
			},
			sources: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
					message: 'The number of sources is required and cannot be empty'
				    }
				}		
			},
			'e_outline': {
				row: '.col-sm-4'
						
			},
			'e_abstract': {
				row: '.col-sm-4'
						
			},
			'add_files': {
				row: '.col-sm-4'
						
			},
			'pr_wr[]': {
				message: 'The username is not valid',
				validators: {
				    // The validator will create an Ajax request
				    // sending { username: 'its value' } to the back-end
				    remote: {
						message: 'writer ID does not exist',
						url: htmlPath+'/?mode=http_response&cmd=check-wr',
						delay: 2000,
						async: true,
				    },
				    notEmpty: {
						message: 'Please enter writer ID or remove field'
				    }
				}
			},
			'bl_wr[]': {
				message: 'The username is not valid',
				validators: {
				    // The validator will create an Ajax request
				    // sending { username: 'its value' } to the back-end
				    remote: {
						message: 'writer ID does not exist',
						url: htmlPath+'/?mode=http_response&cmd=check-wr',
						delay: 2000,
						async: true,
					},
				    notEmpty: {
						message: 'Please enter writer ID or remove field'
				    }
				}
			},
			'discount_code': {
				row: '.col-sm-6',
				validators: {
				    // The validator will create an Ajax request
				    // sending { username: 'its value' } to the back-end
				    remote: {
						message: 'the code does not exist',
						url: htmlPath+'/?mode=http_response&cmd=check-discount',
						delay: 2000,
						async: true,
				    }
				    
				}
			},
			
			
		    
	    }
    })
	// Add button click handler
    .on('click', '.addPR', function() {
        var $template = $('#prTemplate'),
            $clone    = $template
                            .clone()
                            .removeClass('hide')
                            .removeAttr('id')
                            .insertBefore($template),
            $option   = $clone.find('[name="pr_wr[]"]');

        // Add new field
        $('#formOrder').formValidation('addField', $option);
    })

    // Remove button click handler
    .on('click', '.removePR', function() {
        var $row    = $(this).parents('.form-group'),
            $option = $row.find('[name="pr_wr[]"]');

        // Remove element containing the option
        $row.remove();

        // Remove field
        $('#formOrder').formValidation('removeField', $option);


    	var data = $('input[name="pr_wr[]"]').serialize();
		$.ajax({
			type: "POST",
			url: htmlPath+"/?mode=http_response&cmd=store_session",
			data: data,
			success: function(jsonobj){
			
			}
		});
		// requote
		quote();

    })

    // Called after adding new field
    .on('added.field.bv', function(e, data) {
        // data.field   --> The field name
        // data.element --> The new field element
        // data.options --> The new field options

        if (data.field === 'pr_wr[]') {
            if ($('#formOrder').find(':visible[name="pr_wr[]"]').length >= MAX_OPTIONS) {
                $('#formOrder').find('.addButton').attr('disabled', 'disabled');
            }
        }
    })
    // Called after removing the field
    .on('removed.field.bv', function(e, data) {
    	if (data.field === 'pr_wr[]') {
			if ($('#formOrder').find(':visible[name="pr_wr[]"]').length < MAX_OPTIONS) {
                $('#formOrder').find('.addButton').removeAttr('disabled');
            }
        }
    })
    // Add button click handler
    .on('click', '.addBL', function() {
        var $template = $('#blTemplate'),
            $clone    = $template
                            .clone()
                            .removeClass('hide')
                            .removeAttr('id')
                            .insertBefore($template),
            $option   = $clone.find('[name="bl_wr[]"]');

        // Add new field
        $('#formOrder').bootstrapValidator('addField', $option);
    })

    // Remove button click handler
    .on('click', '.removeBL', function() {
        var $row    = $(this).parents('.form-group'),
            $option = $row.find('[name="bl_wr[]"]');

        // Remove element containing the option
        $row.remove();

        // Remove field
        $('#formOrder').bootstrapValidator('removeField', $option);
        var data = $('input[name="bl_wr[]"]').serialize();
		$.ajax({
			type: "POST",
			url: htmlPath+"/?mode=http_response&cmd=store_session",
			data: data,
			success: function(jsonobj){
			
			}
		});
    })
    // Called after adding new field
    .on('added.field.bv', function(e, data) {
        // data.field   --> The field name
        // data.element --> The new field element
        // data.options --> The new field options

        if (data.field === 'bl_wr[]') {
            if ($('#formOrder').find(':visible[name="bl_wr[]"]').length >= MAX_OPTIONS) {
                $('#formOrder').find('.addBL').attr('disabled', 'disabled');
            }
        }
    })

    // Called after removing the field
    .on('removed.field.bv', function(e, data) {
       if (data.field === 'bl_wr[]') {
            if ($('#formOrder').find(':visible[name="bl_wr[]"]').length < MAX_OPTIONS) {
                $('#formOrder').find('.addBL').removeAttr('disabled');
            }
        }
    })
    //
    // always enabled 1
    .on('err.field.fv', function(e, data) {
    	data.fv.disableSubmitButtons(false);
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getSubmitButton()) {
            data.fv.disableSubmitButtons(false);
        }
    })
    // always enabled 2
    //
    .on('err.form.fv', function(e) {
            dimmer(0);
            // Get the FormValidation instance
            var fv = $(e.target).data('formValidation');

            // Get the first invalid field
            var $firstInvalidField = fv.getInvalidFields()[0];
            //alert('test')
            // Do something with first invalid field
            // ...
            if($firstInvalidField.name == "checkTZ"){
            	
            	$('html, body').animate({
			        scrollTop: $("#checkTZBox").offset().top-100
			    }, 2);

            }
    })
	.on('success.field.fv', function(e, data) {
		if(data['field']=="pr_wr[]" || data['field']=="bl_wr[]"){
			if(data['field']=="pr_wr[]"){
				var data = $('input[name="pr_wr[]"]').serialize();
			}
			if(data['field']=="bl_wr[]"){
				var data = $('input[name="bl_wr[]"]').serialize();
			}
			$.ajax({
				type: "POST",
				url: htmlPath+"/?mode=http_response&cmd=store_session",
				data: data,
				success: function(jsonobj){
				
				}
			});
			quote();
		}
		else if(data['field']=="checkTZ"){
			var tzName = $('select[name="clientTZName"]').val();
			var data = "clientTZName="+tzName+"&checkTZ=on";
			$.ajax({
				type: "POST",
				url: htmlPath+"/?mode=http_response&cmd=store_session",
				data: data,
				success: function(jsonobj){
				
				}
			});
			$('#formOrder').formValidation('revalidateField', 'dueDateVal');
			
		}
		else if(data['field']=="discount_code" || data['field']=="dueDateVal" ){
			var inputName = data['field'];
			var inputValue = $("[name="+inputName+"]").val();
			var data = inputName+'='+inputValue
			$.ajax({
				type: "POST",
				url: htmlPath+"/?mode=http_response&cmd=store_session",
				data: data,
				success: function(jsonobj){
				
				}
			});
			quote();
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
	.on('prevalidate.form.fv', function(e) {
    	quote();
    })        
    .on('success.form.fv', function(e) {
		dimmer(1);
		e.preventDefault();
		var data = $("#formOrder").serialize();
		// send data to server
		$.ajax({
			type: "POST",
			url: htmlPath+'/?mode=http_response&cmd=submit-order-to-batch',
			data: data,
			dataType: "json",
			success: function(jsonobj){
				if (jsonobj['err']==0) {
					updateBatchHeader();
					$("#btnOrderSubmit").html('Submitted.');
					$("#btnOrderSubmit").addClass('disabled');
					$.getJSON(htmlPath+"/?mode=http_response&cmd=html-shopping-cart", function( data ) {
						$("#modalCart").find('.modal-body').html(data['html']);
						$("#modalCart").modal("show");
						updateBatchHeader();
						dimmer(0)
					});
				}
					
			}
		});
            
    });
    
	    
	

	
	
	
	$('input[name="dueDateVal"], select[name="academiclevel"], select[name="type"], select[name="payment_method"],select[name="pages"],input[name="discount_code"]').change(function(){
		if($('input[name="dueDateVal"]').val()!=='' && $('select[name="academiclevel"]').val()!=='' && $('select[name="type"]').val()!=='' && $('select[name="pages"]').val()!==''){
			quote();
		}
	});
	

	$(document).on("click","#quote__close",function(){
		$(".quote__box").slideUp('fast');
	});
	


	
	

	
});
function quote(){
	if($('input[name="dueDateVal"]').val()!=='' && $('select[name="academiclevel"]').val()!=='' && $('select[name="type"]').val()!=='' && $('select[name="pages"]').val()!==''){
		$("#blockQuoteOrder").slideUp();
		var data = $("#formOrder").serialize();
		$.ajax({
			type: "POST",
			url: htmlPath+'/?mode=http_response&cmd=html-quote-order',
			data: data,
			dataType: "json",
			success: function(jsonobj){
				$("#blockQuoteOrder").find('.blockQuoteBody').html(jsonobj['msg']);
				$("#blockQuoteOrder").slideDown();
				
			}
		});
	}
}



