
$(document).ready(function(){
	

	// media query event handler
	if (matchMedia) {
	  const mq = window.matchMedia("(min-width: 992px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {
		if (mq.matches) {
			$("#column-features").affix({
		        offset: {
		        	top:$(".navbar").outerHeight(true)+$(".swiper-container").outerHeight(true), 
		        	bottom:$(".footer").outerHeight(true)
		       	}
		    });

			
			
			$("#column-features").on('affix.bs.affix', function(){
				var column_features_width = $("#column-features").outerWidth(true);
				$("#column-features").width(column_features_width);
				$("#column-features").css('position','fixed');
		    });

			$("#column-features").on('affix-top.bs.affix', function(){
				$("#column-features").css('position','');
				
		    });
		    $("#column-features").on('affix-bottom.bs.affix', function(){
				$("#column-features").css('position','');
				
		    });
		} 
	}


	
	



    $(".button-menu .btn-open").click(function(){
        $(".overlay").show('fade');
    	$('body').css('overflow','hidden');
    });
    $(".button-menu .btn-close").click(function(){
        $(".overlay").hide();
    	$('body').css('overflow','inherit');
    });
    updateBatchHeader();
});










function dimmer(arg){
	if(arg==0){
		$("#ajaxLoad").hide();
		//$(document).removeClass('dim');
	}
	if(arg==1){
		$("#ajaxLoad").show();
		//$(document).removeClass('dim');
	}
}



/*Quote-> */
$(document).ready(function(){


	
	
	$("#header").headroom({
	    // vertical offset in px before element is first unpinned
	    offset : 250,
	    // scroll tolerance in px before state changes
	    tolerance : 50,
	    // or you can specify tolerance individually for up/down scroll
	    tolerance : {
	        down : 10,
	        up : 20
	        
	    },
	    // css classes to apply
	    classes : {
	        // when element is initialised
	        initial : "headroom--fixed",
	        // when scrolling up
	        pinned : "headroom--pinned",
	        // when scrolling down
	        unpinned : "headroom--unpinned",
	        // when above offset
	        top : "headroom--top",
	        // when below offset
	        notTop : "headroom--not-top",
	        // when at bottom of scoll area
	        bottom : "headroom--bottom",
	        // when not at bottom of scroll area
	        notBottom : "headroom--not-bottom"
	    },
	    // element to listen to scroll events on, defaults to `window`
	    // callback when pinned, `this` is headroom object
	    onPin : function() {},
	    // callback when unpinned, `this` is headroom object
	    onUnpin : function() {},
	    // callback when above offset, `this` is headroom object
	    onTop : function() {},
	    // callback when below offset, `this` is headroom object
	    onNotTop : function() {},
	    // callback when at bottom of page, `this` is headroom object
	    onBottom : function() {},
	    // callback when moving away from bottom of page, `this` is headroom object
	    onNotBottom : function() {}
	});

	// cart

	$(document).on("click", ".btn-cart-link", function(){
		dimmer(1);
		$.getJSON(htmlPath+"/?mode=http_response&cmd=html-shopping-cart", function( data ) {
			$("#modalCart").find('.modal-body').html(data['html']);
			$("#modalCart").modal("show");
			dimmer(0);
		});

	});


	// swiper
	

	if($("#slides-intro").length){
		var swiper = new Swiper('#slides-intro', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
	    });


		function sliderPause() {
			$('#sliderMainBtn').find('i').removeClass('fa-pause').addClass('fa-play');
		    
		    swiper.stopAutoplay();
		    $('#sliderMainBtn').one("click", sliderPlay);
		}

		function sliderPlay() {
			$('#sliderMainBtn').find('i').removeClass('fa-play').addClass('fa-pause');
			swiper.startAutoplay();
		    $('#sliderMainBtn').one("click", sliderPause);
		}
		$("#sliderMainBtn").one("click", sliderPause);

		

	}
	var ww = $(window).width() ;
	if (ww>1000) var slidesPerView = 3;
	if (ww>600 && ww<=1000) var slidesPerView = 2;
	if (ww<=600) var slidesPerView = 1;

    if($("#slides-feedback").length){
	    var swiper_fb = new Swiper('#slides-feedback', {
	        autoHeight:true,
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        slidesPerView: slidesPerView,
	        spaceBetween: 20,
	        paginationType: 'fraction',
	        parallax:true
	    });

	    $.getJSON(htmlPath+'/?mode=http_response&cmd=load-feedback', function(data){
			swiper_fb.appendSlide([
	            '<div class="swiper-slide">'+data['fb'][0]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][1]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][2]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][3]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][4]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][5]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][6]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][7]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][8]['text']+'</div>',
	            '<div class="swiper-slide">'+data['fb'][9]['text']+'</div>'
	        ]);
	        dimmer(0);    
		});

		swiper_fb.on('slideChangeStart', function () {
	    	if(swiper_fb.isEnd == true){
	    		var appendNumber = swiper_fb.activeIndex+1;
	    		dimmer(1);
	    		$.getJSON('?mode=http_response&cmd=load-feedback', function(data){
	    			swiper_fb.appendSlide([
			            '<div class="swiper-slide">'+data['fb'][0]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][1]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][2]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][3]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][4]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][5]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][6]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][7]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][8]['text']+'</div>',
			            '<div class="swiper-slide">'+data['fb'][9]['text']+'</div>'
			        ]);
			        dimmer(0);    
				});

	    	}
		});
	
		$(window).resize(function(){
		  var ww = $(window).width()
		  if (ww>1000) swiper_fb.params.slidesPerView = 3;
		  if (ww>600 && ww<=1000) swiper_fb.params.slidesPerView = 2;
		  if (ww<=600) swiper_fb.params.slidesPerView = 1;
		  //swiper_fb.reInit()
		})
		$(window).trigger('resize')
	}
	
	

	$('.myTip').tooltipster({
		theme: 'tooltipster-light',
		animation: 'fade',
   		delay: 0,
   		maxWidth: 640,
   		triggerClose: {
	        click: true,
	        scroll: true
	    }

	});

	

	$(document).on('click', '.close', function(){
		$('.alert').hide();
	});
	$("#btnTicket").click(function(){
		dimmer(1);
		$.get(htmlPath+"/?mode=http_response&cmd=html-ticket", function( data ) {
		  $("#modalTicket").find('.modal-title').html('Submit a Support Ticket');
		  $("#modalTicket").find('.modal-body').html(data);
		  $('#modalTicket').modal('show');
		  dimmer(0);
		});

		

	});
	$("#btnAgreement").click(function(){
		dimmer(1);
		$.get(htmlPath+"/?mode=http_response&cmd=html-agreement", function( data ) {
		  $("#modalAgreement").find('.modal-body').html(data);
		  $('#modalAgreement').modal('show');
		  dimmer(0);
		});

		

	});
	$("#btnLogin").click(function(){
		$('#modalLogin').modal('show');
		

	});

	$(".btnLogout").click(function(){
		$('#modalLogout').modal('show');
		

	});
	$(".btnStay").click(function(){
		//$('#modalLogout').modal('show');
		$(this).closest('.modal').modal('hide');

	});

	$("#btnLoginOver").click(function(){
		$(".overlay").hide();
		$('#modalLogin').modal('show');
		

	});


	$(".modal-reset").hide();
	$("#linkResetBack").hide();
	$("#linkReset").click(function(){
		$("#linkResetBack").show();
		$(".modal-login").hide();
		$(".modal-reset").show();
		$("#modalLogin .modal-title").html('Reset Password')
		$('input[name="resetCheck"]').val(true);
	});
	$("#linkResetBack").click(function(){
		$("#linkResetBack").hide();
		$(".modal-login").show();
		$(".modal-reset").hide();
		$("#modalLogin .modal-title").html('Log In')
		$('input[name="resetCheck"]').val(false);
	});


	$('#formLogin').formValidation({
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
                'loginEmail': {
					validators: {
					    notEmpty: {
							message: 'Email is required and cannot be empty'
					    },
					    emailAddress: {
							message: 'The input is not a valid email address'
					    }
					}
				},
				'loginPassword': {
					validators: {
					    notEmpty: {
							message: 'Password is required and cannot be empty'
					    },
					}
				},
			    
			}
        })
	.on('success.form.fv', function(e) {
		e.preventDefault();
		dimmer(1);
		var data = $("#formLogin").serialize();
		$.ajax({
			type: "POST",
			url: htmlPath+'/?mode=http_response&cmd=validate-login',
			data: data,
			dataType: "json",
			success: function(jsonobj){
				if(jsonobj['err']==0){
					var $form = $(e.target),
                	fv = $(e.target).data('formValidation');
                	fv.defaultSubmit();
				}
				else if(jsonobj['err']==1){
					$("#loginAlert").find('span').html(jsonobj['msg']);
					$("#loginAlert").slideDown();
					dimmer(0);
				}
				else if(jsonobj['err']==2){
					$("#resetAlert").find('span').html(jsonobj['msg']);
					$("#resetAlert").slideDown();
					dimmer(0);
				}
				
			}
		});
		        
	});

	$("#btnSupport").click(function(){
		dimmer(1);
		$.get(htmlPath+"/?mode=http_response&cmd=html-support", function( data ) {
		  $("#modalSupport").find('.modal-title').html('Support Center');
		  $("#modalSupport").find('.modal-body').html(data);
		  $('#modalSupport').modal('show');
		  dimmer(0);
		});	
	});

	$("#modalSupport .close").click(function(){
		$("#modalSupport").find('.modal-body').empty();
	});

	/*
	$.getJSON('?mode=http_response&cmd=load-feedback', function(data){
	    $('.testimonials-slider').append('<li><p class="testimonial-text">' + data['text'] + '</p><h4 class="author">' + data['author'] +'</h4></li>');

	});
	*/

	$("#btnLoadFeedback").click(function(){
	    $.getJSON('?mode=http_response&cmd=load-feedback', function(data){
		    $('.testimonials-slider').hide();
		    $('.testimonials-slider').empty();          
		    $('.testimonials-slider').append('<li><p class="testimonial-text">' + data['text'] + '</p><h4 class="author">' + data['author'] +'</h4></li>');
		    $('.testimonials-slider').show('fade');
	    });
	});


    
	$(document).on("click",".btnCartDelete",function(){
		var node = $(this);
		var orderid = $(this).data('orderid');
		
		OpenDialogForSelectionAdmItem('Remove Order', '<div class=\"modal-inner\">Are you sure you want to remove this order '+orderid+' from your cart?</div>', function() {
		    dimmer(1);

		    var data = 'orderid='+orderid;
			$.ajax({
				type: "POST",
				url: htmlPath+'/?mode=http_response&cmd=remove-order-from-batch',
				data: data,
				dataType: "json",
				success: function(jsonobj){
					$.getJSON(htmlPath+"/?mode=http_response&cmd=html-shopping-cart", function( data ) {
						//$("#modalCart").find('.modal-body').html(data['html']);
						//$("#modalCart").modal("show");
						node.closest('tr').fadeOut(300, function() { $(this).remove(); });
						updateBatchHeader();
						dimmer(0)
					});
				}
			});
		});

		
		
	});






	$('.tabs').tabslet({
		mouseevent: 'click',
		attribute: 'href',
		animation: true
	});
	$('.tabs').on("_before", function() {
	    jQuery(window).trigger('resize').trigger('scroll');
	});
	$('.tabs').on("_after", function() {
	    jQuery(window).trigger('resize').trigger('scroll');
	});
	


	



    
});



function updateBatchHeader(){
	$.get(htmlPath+'/?mode=http_response&cmd=batch-token&rnd='+new Date(), function(data) {
		$("#cart-holder").html(data);
		$('#cart-holder').show('fade');
		if($('input[name="page"]').val()=='checkout'){
			quote_checkout();
		}
	});	
	
}

function OpenDialogForSelectionAdmItem(title, content, callback) {
    var dlg = new BootstrapDialog({
    	type: BootstrapDialog.TYPE_DANGER,
	    draggable: true,
        title: title,
        message: content,
        onshown: function(dialog) {
            var tier = $('.bootstrap-dialog').length;
            dialog.$modal.prev(".modal-backdrop")
                .css("z-index", 1030 + tier * 30);
            dialog.$modal
                .css("z-index", 1040 + tier * 30);
        },
        buttons: [{
            label: 'Remove',
            cssClass: 'btn-danger',
            id: 'deletePhone',
            action: function (dialog) {
                if (callback !== "") { callback(); }
                dialog.close();
            }
        },
        {
            label: 'Close',
            cssClass: 'btn-primary',
            id: 'btnClose',
            action: function (dialog) {
                dialog.close();
            }
        }]
    }).open();
}
