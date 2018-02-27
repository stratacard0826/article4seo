$(document).ready(function(){
	
	$(window).bind('hashchange', function() {
		dimmer(1);
		var counter = window.location.hash.replace('#','');
		
		$("#blockMyOrders").hide();
		var clientid = $('input[name="clientid"]').val();
		var limit_page = 1;
		var limit = $('input[name="limit"]').val();
			
		$.ajax({
			type: "GET",
			url: htmlPath+"/?mode=http_response&cmd=html-writers&clientid="+clientid+"&counter="+counter+"&limit="+limit,
			dataType: "html",
			success: function(obj){
				//alert('iid'+clientid);
				$("#blockMyOrders").show('fade');
				$("#blockMyOrders").html(obj);
				dimmer(0);
				
			}
		});
		
		
	});




	$("#blockMyOrders").hide();
	var limit_page = 1;
	var limit = $('input[name="limit"]').val();
		
	$.ajax({
		type: "GET",
		url: htmlPath+"/?mode=http_response&cmd=html-writers&limit_page="+limit_page+"&limit="+limit+'&counter=1',
		dataType: "html",
		success: function(obj){
			//alert('iid'+clientid);
			$("#blockMyOrders").show('fade');
			$("#blockMyOrders").html(obj);
			//dimmer(0);
			
		}
	});
	
	$(document).on("change","#page_no",function(){
		var limit_page = $("#page_no").val();
		var clientid = $('input[name="clientid"]').val();
		var limit = $('input[name="limit"]').val();
			
		$.ajax({
			type: "GET",
			url: htmlPath+"/?mode=http_response&cmd=html-writers&clientid="+clientid+"&counter="+limit_page+"&limit="+limit,
			dataType: "html",
			success: function(obj){
				$("#blockMyOrders").show('fade');
				$("#blockMyOrders").html(obj);

				//dimmer(0);
				
			}
		});
	});


	$(document).on("input","#searchOrders",function(){
		
		$("#blockMyOrders").hide();
		var clientid = $('input[name="clientid"]').val();
		var limit_page = 1;
		var limit = $('input[name="limit"]').val();
		var search = $('input[name="searchOrders"]').val();
			
		$.ajax({
			type: "GET",
			url: htmlPath+"/?mode=http_response&cmd=html-writers&clientid="+clientid+"&limit_page="+limit_page+"&limit="+limit+"&search="+search,
			dataType: "html",
			success: function(obj){
				//alert('iid'+clientid);
				$("#blockMyOrders").show('fade');
				$("#blockMyOrders").html(obj);
				//dimmer(0);
				
			}
		});



	

	});		





});