$(document).ready(function(){
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

	$(".smsConfirm").hide();
	$(".smsAlert").hide();



	if(typeof ipCountry !== 'undefined'){
		var input = $("#phone"),
	        output = $("#output");

	    input.intlTelInput({
	        initialCountry: ipCountry,
	        nationalMode: true,
	        utilsScript: "js/utils.js" // just for formatting/placeholders etc
	    });
		// listen to "keyup", but also "change" to update when the user selects a country
		input.on("keyup change", function() {
		  var intlNumber = input.intlTelInput("getNumber");
		  if (intlNumber) {
		    output.text("International: " + intlNumber);
		  } else {
		    output.text("Please enter a number below");
		  }
		});

		// get the country data from the plugin
		var countryData = $.fn.intlTelInput.getCountryData(),
		  telInput = $("#phone"),
		  addressDropdown = $("#country");

		// init plugin
		telInput.intlTelInput({
		  utilsScript: "js/utils.js" // just for formatting/placeholders etc
		});

		// populate the country dropdown
		$.each(countryData, function(i, country) {

		  addressDropdown.append($("<option></option>").attr("value", country.iso2).text(country.name));
		});
		// set it's initial value
		var initialCountry = telInput.intlTelInput("getSelectedCountryData").iso2;
		addressDropdown.val(initialCountry);

		// listen to the telephone input for changes
		telInput.on("countrychange", function(e, countryData) {
		  addressDropdown.val(countryData.iso2);
		  //$('.selectpicker').selectpicker('render');

		});

		// listen to the address dropdown for changes
		addressDropdown.change(function() {
		  telInput.intlTelInput("setCountry", $(this).val());
		});
	}

	


	



	$(".faqA").hide();
	$(".faqBlockMain").hide();
	$("#blockID").hide();
	$("#blockResolution").hide();
	$("#blockCategory").hide();
	$(".blockRefund").hide();
	$("#blockAgreement").hide();
	$("#blockRevision").hide();

	$("#orderIDTrue").change(function(){
		$("#blockID").toggle(this.checked);
	});

	
	$("#slctType").change(function(){
		if( $(this).val()=="complaint" ){
			$("#blockCategory").slideDown();
			$("#blockResolution").slideDown();
			$("#blockAgreement").slideDown();

		}
		else{
			$("#blockCategory").slideUp();
			$("#blockResolution").slideUp();
			$("#blockAgreement").slideUp();
		}
	});


	$("#slctResolution").change(function(){
		if( $(this).val()=="refund" ){
			$(".blockRefund").slideDown();
			$("#blockRevision").slideUp();
		}
		else if( $(this).val()=="revision" || $(this).val()=="new_writer"){
			$(".blockRefund").slideUp();
			$("#blockRevision").slideDown();
		}
		else{
			$(".blockRefund").slideUp();
			$("#blockRevision").slideUp();
		}
	});





	$("#btn-sms-verify").click(function(e){
		dimmer(1);
		e.preventDefault();
		var phone = input.intlTelInput("getNumber");
		var data = 'phone='+phone;
		
	    $.ajax({
		    type: "POST",
		    url: htmlPath+"/?mode=http_response&cmd=sms-verify",
		    data: data,
		    dataType: "json",
		    success: function(jsonobj){
		    	dimmer(0);
		    	//alert(jsonobj['error_msg'])
		    	$(".smsConfirm").show();
		    }
	    });		



		
	});


	$("#btn-sms-verify-check").click(function(e){
		dimmer(1);
		e.preventDefault();
		var sms_pin = $('input[name="sms_pin"]').val();
		var data = 'sms_pin='+sms_pin;
		
	    $.ajax({
		    type: "POST",
		    url: htmlPath+"/?mode=http_response&cmd=sms-verify-check",
		    data: data,
		    dataType: "json",
		    success: function(jsonobj){
		    	dimmer(0);
		    	if(jsonobj['err']==0){
					$(".smsConfirm").hide();
					$(".smsAlert").next('span').html('verified successfully!')
					$(".smsAlert").show();
		    	}
		    	else{
		    		//alert('error');
		    	}
		    }
	    });		



		$(".smsConfirm").show();
	});


	$('#formSupport').formValidation({

        framework: 'bootstrap',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        onPreValidate: function(e) {
            	//alert('test')
        },
        autoFocus: true,
            
        fields: {


        	'firstname': {
			    row: '.col-sm-3',
			    validators: {
				notEmpty: {
				    message: 'First name is required'
				},
				stringLength: {
				    min: 1,
				    max: 20,
				    message: 'First name must be less than 20 characters'
				}
			    }
			},
			'lastname': {
			    row: '.col-sm-3',
			    validators: {
				notEmpty: {
				    message: 'Last name is required'
				},
				stringLength: {
				    min: 1,
				    max: 20,
				    message: 'Last name must be less than 20 characters'
				}
			    }
			},
			'email': {
				row: '.col-sm-6',
			    validators: {
				notEmpty: {
				    message: 'The email is required and cannot be empty'
				},
				emailAddress: {
				    message: 'The input is not a valid email address'
				}
			    }
			},
			'phone': {
			    validators: {
				notEmpty: {
				    message: 'The phone number is required'
				},
				numeric: {
				    message: 'The phone number must be digits'
				}
			    }
			},
			'subject': {
				row: '.col-sm-6',
			    validators: {
				notEmpty: {
				    message: 'Subject is required'
				},
				stringLength: {
				    min: 5,
				    max: 128,
				    message: 'Subject must be less than 128 characters'
				}
			    }
			},

			'phone': {
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
			'country': {
				row: '.col-sm-6',
			    validators: {
				notEmpty: {
				    message: 'Country is required'
				},
				}
			},
			'orderid': {
				row: '.col-sm-4',
				message: 'The order ID is not valid',
				validators: {
				    // The validator will create an Ajax request
				    // sending { username: 'its value' } to the back-end
				    remote: {
						message: 'order ID does not exist',
						url: htmlPath+'/?mode=http_response&cmd=validate-orderid',
						async:true,
				    }
				},
				onSuccess: function(e, data) {
                	if($("#orderid").val()!='' && $("#slctType option[value='complaint']").length==0){
                		$("#slctType").append('<option value="complaint">Complaint</option>');
                		$("#slctType").selectpicker('refresh');
                	}
                },

			},
			'slctType': {
			    row: '.col-sm-12',
			    validators: {
				notEmpty: {
				    message: 'This field is required'
				}
				
			    }
			},
			'slctCategory': {
			    row: '.col-sm-6',
			    validators: {
				notEmpty: {
				    message: 'This field is required'
				}
				
			    }
			},
			'slctResolution': {
				row: '.col-sm-6',
			    validators: {
				notEmpty: {
				    message: 'This field is required'
				}
				
			    }
			},
			'details': {
			    row: '.col-sm-12',
			    validators: {
				notEmpty: {
				    message: 'Details is required'
				},
				stringLength: {
				    min: 50,
				    max: 2048,
				    message: 'Details must be between 50 and 2048 characters long'
				}
			    }
			},
			
			'refundReason': {
			    row: '.col-sm-12',
			    validators: {
					notEmpty: {
					    message: 'Field is required'
					},
					stringLength: {
					    min: 5,
					    max: 128,
					    message: 'Field must be less than 128 characters'
					}
			    }
			},
			'refundAmount': {
			    row: '.col-sm-12',
			    validators: {
					notEmpty: {
					    message: 'Field is required'
					},
					stringLength: {
					    min: 5,
					    max: 128,
					    message: 'Field must be less than 128 characters'
					}
			    }
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
	.on('success.field.fv', function(e, data) {
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
		e.preventDefault();
		dimmer(1);
		var data = $("#formSupport").serialize();
		$.ajax({
			type: "POST",
			url: htmlPath+'/?mode=http_response&cmd=submit-support-form',
			data: data,
			dataType: "json",
			success: function(jsonobj){
				if (jsonobj['err']==0) {
					var dlg = new BootstrapDialog({
				        type: BootstrapDialog.TYPE_SUCCESS,
				        draggable: true,
				        size: BootstrapDialog.SIZE_WIDE,
				        cssClass: 'dialog-terms',
				        title: jsonobj['title'],
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
				    dimmer(0)
				}
				else{
					var dlg = new BootstrapDialog({
				        type: BootstrapDialog.TYPE_DANGER,
				        draggable: true,
				        size: BootstrapDialog.SIZE_WIDE,
				        cssClass: 'dialog-terms',
				        title: jsonobj['title'],
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
				    dimmer(0)
				}	
			}
		});
		
            
    });

});