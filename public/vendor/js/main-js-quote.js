$(document).ready(function(){	

	$('.selectpicker').select2({
		dropdownAutoWidth : true,
    	width: 'auto'
	}); 	

	
	if($('#dueDate').length){
		var datepicker = $('#dueDate').pickadate({
	        min: new Date(),
	        formatSubmit: 'yyyy-mm-dd',
	        hiddenName: true,
	        container: '#datepicker-body',
	        onSet: function(item) {
	            if ( 'select' in item ) setTimeout( timepicker.open, 0 )
	        }
	    }).pickadate('picker')
	}
    
    if($('#dueTime').length){
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
	            alert('test')
	            $("#dueDateVal").val($('input[name="dueDate"]').val() + ' ' + $('input[name="dueTime"]').val());
	            $('#formQuote').formValidation('revalidateField', 'dueDateVal');
	            
	        }
	    }).pickatime('picker');
	}

	if($('#dueDateVal-h').length){
	    var $datetime = $('#dueDateVal-h').
	        on('focus', datepicker.open).
	        on('click', function(event) {
	            event.stopPropagation();
	            datepicker.open();

	    });
	}

	$('#formQuote').formValidation({
            framework: 'bootstrap',
            autoFocus: true,
            fields: {
            	"clientTZName" : {
            		validators: {
					    notEmpty: {
							message: 'Date is required'
						}
					}
            	},
            	"dueDateVal": {
					excluded: false,
					validators: {
					    notEmpty: {
							message: 'Date is required'
						},
				
					    remote: {
							message: 'Deadline is incorrect',
							url: htmlPath+'/?mode=http_response&cmd=check-dd',
							async:true,
					    }
					}		
				},
			    
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
						e.preventDefault();
					}
				});
			}
        })
        .on('success.form.fv', function(e) {
			// Prevent form submission
			e.preventDefault();
			dimmer(1);
			var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
			var values = $("#formQuote").serialize();
			values = values+'&clientTZName='+tz;
			$.ajax({
				type: "POST",
				url: htmlPath+"/?mode=http_response&cmd=html-quote",
				data: values,
				dataType: "json",
				success: function(jsonres){
					$('#modalQuote').find('.modal-body').html(jsonres['msg']);
					$('#modalQuote').modal('show');
					$('#modalQuote').find('.modal-footer').show();
					dimmer(0);

				}
			});
	            
	});

    $(".btn-close-quote").click(function(){
    	$("#formQuote").data('formValidation').resetForm();
    });
});