//sliders autoplay
	//intro slider
	$('#carousel_fade_intro').carousel({
	    interval: 4500,
	    pause: "false"
	})

	/*//Stop intro slider on last item
	var cnt = $('#carousel_fade_intro .item').length;
	$('#carousel_fade_intro').on('slid', '', function() {
	    cnt--;
	    if (cnt == 1) {
	        $('#carousel_fade_intro').carousel('pause');
	    }
	});
	*/
	
	
	//works sliders
	$('#carousel_horizontal_slide, #carousel_vertical_slide, #carousel_fade_1, #carousel_fade_2, #carousel_fade').carousel({
		interval: false
	});
	
	
	$('#carousel_fade').on('slid', '', function() {
	  var $this = $(this);

	  $this.children('.carousel-control').show();

	  if($('.carousel-inner .item:first').hasClass('active')) {
	    $this.children('.left.carousel-control').hide();
	  } else if($('.carousel-inner .item:last').hasClass('active')) {
	    $this.children('.right.carousel-control').hide();
	  }

	});

	$('#carousel_fade > .left.carousel-control').hide();


	
	
	$(window).on('scroll', function() {
		var scrollPos = $(this).scrollTop();
		if (scrollPos >= 100 && !$('header').hasClass('scrolled')) {
			$('header').addClass('scrolled');
		} else if (scrollPos < 100 && $('header').hasClass('scrolled')) {
			$('header').removeClass('scrolled');
		}
	});





//make section height of window
	$(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		});
	});

//custom scrollbar
	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);

//contact form
	$(document).ready(function() {
	var options = {
	target: '.alert',
	beforeSubmit: showRequest,
	success: showResponse
	};
	$('#contactForm').ajaxForm(options);
	});
	function showRequest(formData, jqForm, options) {
	var queryString = $.param(formData);
	return true;
	}
	function showResponse(responseText, statusText)  {
	}
	$.fn.clearForm = function() {
		return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
			return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = '';
		else if (type == 'checkbox' || type == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
		});
	};

//smooth scroll on page
	$(function() {
		$('#more a, .nav a, .nav li a, .brand, #footer li a').bind('click',function(event){
		var $anchor = $(this);

		$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
		});

		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -210
		}, 1500,'easeInOutExpo');

		event.preventDefault();
		});
	});
	
	
	//smooth scroll on page for intro
		$(function() {
			$('#intro a, #footer .brands').bind('click',function(event){
			var $anchor = $(this);

			$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh')
			});

			$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top -151
			}, 1500,'easeInOutExpo');

			event.preventDefault();
			});
		});

//gallery image hover tooltip trigger
	$("[data-thumb=tooltip]").tooltip();

//collapse menu on click on mobile and tablet devices
	$('.nav a').click(function () { $(".nav-collapse").collapse("hide") });