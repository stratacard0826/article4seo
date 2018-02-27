$(document).ready(function(){


	$("#linkAddFriend").click(function(){
			dimmer(1);
	        
	        var dlg = new BootstrapDialog();
	        dlg.setTitle('Add A Friend');
	        dlg.setMessage(
	        	'test'
	         );
	        dlg.setType(BootstrapDialog.TYPE_DEFAULT);
	        dlg.setSize(BootstrapDialog.SIZE_LARGE);
	        dlg.open();

			/*
			var dlg = new BootstrapDialog({
		        type: BootstrapDialog.TYPE_DEFAULT,
		        draggable: true,
		        size: BootstrapDialog.SIZE_LARGE,
		        cssClass: 'dialog-terms',
		        title: 'Add A Friend',
		        message: function(dialog) {
	                var $message = $('<div></div>');
	                var pageToLoad = dialog.getData('pageToLoad');
	                $message.load(pageToLoad,function(){
	                	dimmer(0);
	                });
	        		
	                return $message;

            	},
            	data: {
                	'pageToLoad': htmlPath+'/?mode=http_response&cmd=html-form-add-friend',
            	},
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

		    //$("#linkAddFriend").html(jsonobj['html']);
	});



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

});


	
            
  

