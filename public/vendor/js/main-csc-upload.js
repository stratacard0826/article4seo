function roundVal(val,dec){
	var result = Math.round(val*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}


var requestTimer;  //must be global.
var uploadCode = 0;
var uploadQuery = 0;
var filename;
var	bytes_uploaded;
var	bytes_total;
var est_sec;
var	rate_uploaded;
var fileInputs = 1;

var UP = function() {
    /* private variables */
   	var ifr = null;
    var startTime = null;
    var infoUpdated = 0;
    
    return {
        start: function() {
		var btn = $("#btnUpload");;
		btn.button('loading');
	
		startTime = new Date();
		infoUpdated = 0;
		this.requestInfo();
		$("#progressBar").show("fade");

        },
        stop: function(files) {
           if (typeof files == 'undefined' || files) {
		
					dimmer(1);
					var orderid = $('input[name="orderid"]').val();
					var btnCounter = $("#btnFilesClient");
					btnCounter.html('Loading...').attr('disabled','disabled');
					$.getJSON(htmlPath+'/?mode=http_response&cmd=html_files_btn&funcmode=Client&orderid='+orderid+'&rnd='+new Date(), function(data_txt) {
						
						$.getJSON(htmlPath+'/?mode=http_response&cmd=html_files&funcmode=Client&orderid='+orderid+'&rnd='+new Date(), function(data) {
							$("#blockFilesClient").html(data['html']);
							$("#blockFilesClient").show("fade",function(){
								btnCounter.html(data_txt['html']).removeAttr('disabled');
							});
							dimmer(0);
						});
						
					});
					
		
		
					$("#progressBar").hide("fade");
					$("#progressBar").html('0%');
					$("#progressBar").css('width','0%');
					var btn = $("#btnUpload");;
					btn.button('reset');
					
		   } 
		   else {
           }
           startTime = null;
        },
        requestInfo: function() {
			$.ajax({
				type: "POST",
				url: htmlPath+"/?mode=http_response&cmd=upload-info&ID="+uploadid+"&"+new Date(),
				dataType: "json",
				success: function(json){
					if (json['err'] == 0) {
						$("#progressBar").html(json['html']);
						$("#progressBar").css('width',json['html']);
					}

				}
			});
			this.updateInfo(bytes_uploaded,bytes_total,est_sec);
				
        },
        updateInfo: function(uploaded, total, estimatedSeconds) {
            if (startTime) {
                if (uploaded) {
                    infoUpdated++;
                    if (total > upload_max_filesize) {
						var $dialog = $('<div></div>')
							.html("Your file is too big. The maximum upload size is "+upload_max_filesize/(1024*1024)+" MB")
							.dialog({
								buttons: { "Ok": function() { $(this).dialog("close"); } },
								modal:true,
								autoOpen: false,
								title: 'Error'
						});
						$dialog.dialog('open');
                    } 
				} 
				window.setTimeout("UP.requestInfo()",1000);
            }
        }
    }
}()


function fileInputAdd(){
	if(fileInputs<50){
		var el = document.getElementById('fileInputBox');
		fileInputs++;
		var el_div = document.createElement("div");
		el_div.setAttribute("class", "input-group");
		el_div.setAttribute("style", "margin:5px");
		
		var el_input = document.createElement("input");
		el_input.setAttribute("class", "form-control");
		el_input.setAttribute("type", "file");
		el_input.setAttribute("name", "file"+fileInputs);
		el_input.setAttribute("id", "file"+fileInputs);
		el_input.setAttribute("onchange", "javascript:this.previousSibling.innerHTML=this.value;");
		el_input.setAttribute("data-filename-placement", "inside");
		
		var el_span_par = document.createElement("span");
		el_span_par.setAttribute("class", "input-group-btn lg");
		
		var el_span = document.createElement("i");
		el_span.setAttribute("class", "glyphicon glyphicon-minus");
	    
		var el_button = document.createElement("button");
		el_button.setAttribute("class", "btn btn-default btn-md removeButton");
		el_button.setAttribute("onclick", "javascript:fileInputRemove(this);");
		
		
		el_button.appendChild(el_span);
		el_span_par.appendChild(el_button);
		el_div.appendChild(el_input);
		el_div.appendChild(el_span_par);
		el.appendChild(el_div);
		$('#file'+fileInputs).bootstrapFileInput();
		//$('.file-inputs').bootstrapFileInput();							
	
	}
	else{
		var $dialog = $('<div></div>')
		.html("There are too many file inputs. Please reload the page.")
		.dialog({
			buttons: { "Ok": function() { $(this).dialog("close"); } },
			modal:true,
			autoOpen: false,
			title: 'Error'
		});
		$dialog.dialog('open');
	}
	$("#btnUpload").show('fade');
							
}
function fileInputRemove(obj){
	var el = obj.parentNode.parentNode;
	el.parentNode.removeChild(el);
	var elmain = document.getElementById('fileInputBox');
		
}
