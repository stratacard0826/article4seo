$(document).ready(function (){
	
	$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});



	$('.selectpicker').select2({
		dropdownAutoWidth : true,
    	width: 'auto'
	}); 
	window.crs.init();
	//init page
	$("#blockQuoteOrder").hide();
	$("#orderLoginBtn").click(function(){
		$("#modalLogin").modal();
	});

	$(".smsConfirm").hide();
	$(".smsAlert").hide();

	$(':checkbox').checkboxpicker({
		html: true,
		offLabel: '<span class="glyphicon glyphicon-remove">',
		onLabel: '<span class="glyphicon glyphicon-ok">'
	});

	$("#btnBackupEmail").click(function(){
		$(".backupEmail").toggle();
	});

	
	$('#selectRegionBlock').hide();
	
	if($(".cc_type_block").length){
		quote_checkout();
	}

/*
    var nowDateObj = new Date();
    var startDateObj = new Date(nowDateObj.getTime() + 3*3600*1000);;
    var startDateString = startDateObj.getFullYear() + "-"
            + (startDateObj.getMonth()+1)  + "-" 
            + startDateObj.getDate() + " "  
            + startDateObj.getHours() + ":"  
            + startDateObj.getMinutes() + ":" 
            + startDateObj.getSeconds();
    $('.datetime-picker').datetimepicker({
	    format: "yyyy-mm-dd hh:ii:ss",
	    autoclose: true,
	    showMeridian: true,
	    todayHighlight: true,
	    linkFormat: "yyyy-mm-dd hh:ii:ss",
	    linkField: "dueDateVal",
	    startDate: startDateString,
	    
    })
    .on('changeDate', function(ev){
	    //$("#dueDate").trigger('change');
	    $('#formOrder').formValidation('revalidateField', 'dueDate');
	    // Revalidate the date when user change it
	    /*
	    $.ajax({
		    type: "POST",
		    url: "?mode=http_response&cmd=store_session",
		    data: data,
		    success: function(jsonobj){
		    }
	    });
	    var data = 'key=dueDateVal&value='+$('input[name="dueDateVal"]').val();
	    $.ajax({
		    type: "POST",
		    url: "?mode=http_response&cmd=store_session",
		    data: data,
		    success: function(jsonobj){
		    }
	    });
  });
    
*/
    
	
	$('.add-emails a').click(function(event) {
		event.preventDefault();
		
		$('.backupEmail').toggle(function() {
		    $("#addEmail").html('Add backup e-mail');
			$("#addEmail").prev().toggleClass("icon-plus icon-minus");
		}, function() {
		    $("#addEmail").html('Remve backup e-mail');
			$("#addEmail").prev().toggleClass("icon-plus icon-minus");
		});


		
	});
	
	$("#clickAgree").click(function(){
		var content = ''

		var dlg = new BootstrapDialog({
	        type: BootstrapDialog.TYPE_DEFAULT,
	        draggable: true,
	        size: BootstrapDialog.SIZE_WIDE,
	        cssClass: 'dialog-terms',
	        title: 'Terms of Service',
	        message: $('<div class=\"modal-inner\"></div>').load(htmlPath+'/?mode=http_response&cmd=html-agreement'),
	        buttons: [
	        {
	            label: 'Close',
	            cssClass: 'btn-default',
	            id: 'btnClose',
	            action: function (dialog) {
	                dialog.close();
	            }
	        }
	        ]
	    }).open();








	});

	$(document).on("click",".btnCartDelete",function(){
		var orderid = $(this).data('orderid');

		alert(orderid)
	});

	


	if($("#phone").length){

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


		$(".crs-country").change(function(){
			var mycountry = $(this).val().toLowerCase();
			if(mycountry!=''){
				$("#phone").intlTelInput("setCountry", mycountry);
			}
		});



		$('#allow_calls').on("change",function(){
			var allow_calls = $('input[name="allow_calls"]').prop('checked');
			if(allow_calls==false){
				$('.allow_calls_hours_block').hide();
			}
			else{
				$('.allow_calls_hours_block').show();
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


	}



	

	
    $('#formCheckout').formValidation({
        framework: 'bootstrap',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        autoFocus: true,
        disableSubmitButtons:false,
        fields: {
            firstname: {
				row: '.col-sm-6',
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
		    lastname: {
				row: '.col-sm-6',
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
				row: '.col-sm-9',
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
		    payment_method: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
						message: 'Payment method is required'
				    }
				}
			},
			cc_name: {
				row: '.col-sm-4',
				validators: {
				    notEmpty: {
						message: 'Cardholder name is required'
				    }
				}
			},
			cc_number: {
				row: '.col-sm-5',
                validators: {
                    creditCard: {
                        message: 'The credit card number is not valid'
                    },
                    notEmpty: {
						message: 'Card number is required'
				    }
                }
            },
            cc_cvv: {
				row: '.col-sm-3',
                validators: {
                    integer: {
                        message: 'The value is not an integer'
                    },
                    notEmpty: {
						message: 'Card CVV is required'
				    }
                }
            },

            cc_type: {
				row: '.col-sm-6',
				validators: {
				    notEmpty: {
						message: 'Card type is required'
				    }
				}
			},
			expiry_month: {
				row: '.col-sm-3',
				validators: {
				    notEmpty: {
						message: 'Expiry month is required'
				    }
				}
			},
			expiry_year: {
				row: '.col-sm-2',
				validators: {
				    notEmpty: {
						message: 'Expiry year is required'
				    },
				    integer: {
                        message: 'The value is not an integer'
                    }
				}
			},
			billing_address: {
				row: '.col-sm-4',
				validators: {
				    notEmpty: {
						message: 'Billing address is required'
				    }
				}
			},
			billing_zip: {
				row: '.col-sm-3',
				validators: {
				    notEmpty: {
						message: 'Billing ZIP is required'
				    }
				}
			},
			tos_agree: {
				row: '.col-sm-3',
				excluded: false,
				validators: {
				    notEmpty: {
					message: 'You must read and agree with the terms of service'
				    }
				}
			},
	    }
    })
	.on('click', '.country-list', function() {
    	$('#formOrder').formValidation('revalidateField', 'phone');
	})
    
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
		else if(data['field']=="payment_method" || data['field']=="cc_type"){
			var ch = document.getElementsByName(data['field']);
			for (var i = ch.length; i--;) {
			    ch[i].onchange = function() {
			        
			        data = data['field']+"="+this.value;

			        switch(this.value){
			        	case "cc":
			        		$('.cc_type_block').show();
			        	break;
			        	case "pp":
			        		$('.cc_type_block').hide();
			        	break;
			        }



			        $.ajax({
						type: "POST",
						url: htmlPath+"/?mode=http_response&cmd=store_session",
						data: data,
						success: function(jsonobj){
						
						}
					});
			    }
			}	
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
	.on('success.form.fv', function(e) {
		dimmer(1);
		e.preventDefault();
		var data = $("#formCheckout").serialize();
		// send data to server
		$.ajax({
			type: "POST",
			url: htmlPath+'/?mode=http_response&cmd=submit-batch',
			data: data,
			dataType: "json",
			success: function(jsonobj){
				switch(jsonobj['payment_method']){
					case "cc":
						switch(jsonobj['err']){
							
							case 0:
								dimmer(0);
								/*
								var dlg = new BootstrapDialog({
							        type: BootstrapDialog.TYPE_SUCCESS,
							        draggable: true,
							        size: BootstrapDialog.SIZE_WIDE,
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
								            }
								        }
							        ]
							    	}).open();
							    */
							    alert(jsonobj['msg'])

							break;
							case 1:
								//alert(jsonobj['issuerurl'])


								$("<input type='hidden' value='"+jsonobj['parequest']+"' />")
								     .attr("name", "PaReq")
								     .prependTo("#formCheckout");

								$("<input type='hidden' value='"+jsonobj['session_id']+"' />")
								     .attr("name", "MD")
								     .prependTo("#formCheckout");

								$("<input type='hidden' value='"+jsonobj['termurl']+"' />")
								     .attr("name", "TermUrl")
								     .prependTo("#formCheckout");


								var $form = $(e.target),
                				fv  = $(e.target).data('formValidation');

								$form.attr('action', jsonobj['issuerurl']);

								fv.defaultSubmit();
							break;
							case 5:
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
							break;
						}
					break;

					case "pp":
						$('form[name="_xclick"]').submit();
					break;

				}
				
			}
		});
            
    });
    
	    
	

	
	
	
	

	$(document).on("click","#quote__close",function(){
		$(".quote__box").slideUp('fast');
	});
	$('#selectRegionBlock').hide();
	
	$("#selectCountry").change(function(){
		if($(this).val()!==''){
			$('#selectRegionBlock').show("fade");

		}
		else{
			$('#selectRegionBlock').hide();
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
		    		var dlg = new BootstrapDialog({
				        type: BootstrapDialog.TYPE_DANGER,
				        draggable: true,
				        size: BootstrapDialog.SIZE_WIDE,
				        cssClass: 'dialog-terms',
				        title: 'Error',
				        message: 'The code is incorrect. Please enter the code sent to your mobile number.',
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
		    }
	    });		



		$(".smsConfirm").show();
	});

	

	
});
function quote_checkout(){
	$("#blockQuoteOrder").slideUp();
	dimmer(1);
	$.ajax({
		type: "POST",
		url: htmlPath+'/?mode=http_response&cmd=html-quote-checkout',
		dataType: "json",
		success: function(jsonobj){
			$("#blockQuoteOrder").find('.blockQuoteBody').html(jsonobj['msg']);
			$("#blockQuoteOrder").slideDown();
			dimmer(0);
		}
	});
	
}