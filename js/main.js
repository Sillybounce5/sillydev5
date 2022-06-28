jQuery(document).ready( function($){
	
	'use strict';
		
	/* /////////////////////////////////
		Detect Devices
   	   ///////////////////////////////// */
	
	
	var $window = $(window);
	var isMobile = navigator.userAgent.match(/Mobi/);
	var iOffset = ( $window.width() > 1800 ) ? -200 : -80;
		
	/* /////////////////////////////////
		Preloader Animation
   	   ///////////////////////////////// */
	
	$('.preloader').delay(300).fadeOut('slow');	
	
	/* /////////////////////////////////
		Nav Button
   	   ///////////////////////////////// */	

	$('#nav-btn').click(function(){		
		$(this).toggleClass('open');
		$('#nav-wrap').slideToggle('slow');		
	});	
	
	/* /////////////////////////////////
		Responsive YouTube and Vimeo video
   	   ///////////////////////////////// */	
	
	$(".responsive-video").fitVids();
	
	/* /////////////////////////////////
		Sticky Nav
   	   ///////////////////////////////// */	
	
	var stickyNav = $('#main-nav');
	navScroll();
	$window.on( 'scroll', function(){
		navScroll();
	});	
	function navScroll(){
		if ( $window.scrollTop() > 0) {
			stickyNav.addClass('sticky');
		} else {
			stickyNav.removeClass('sticky');
		}
	}	
	
	/* /////////////////////////////////
		One Page Nav
   	   ///////////////////////////////// */	
	
	$('#nav').onePageNav();	
	
	/* /////////////////////////////////
		Back to Top Button
   	   ///////////////////////////////// */	
	
	var offset = 800,
	offset_opacity = 1200,
	scroll_top_duration = 700,
	$back_to_top = $('.go-top');
	$window.scroll(function(){(
		$(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	/* /////////////////////////////////
		Scroll Reveal
	   ///////////////////////////////// */	
	
	window.sr = ScrollReveal();
	sr.reveal('.scroll-reveal', {
		duration: 1500,
		mobile: false,
		viewFactor: 0.3
	});
	
	/* /////////////////////////////////
		Testimonial carousel
   	   ///////////////////////////////// */	
	
	var testimonialOne = new Swiper('.testimonials-one', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
		dynamicBullets: true,
      },
	  spaceBetween: 50,
	  speed: 1000,
	  loop:true,
	  autoplay:true,
	  centeredSlides: true,
      breakpoints: {
        3000: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        2400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        }
      }
    });
	
	/* /////////////////////////////////
		Swiper carousel - Main banner
   	   ///////////////////////////////// */	
	
	var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
	  loop: true,
      navigation: {
        nextEl: '.fa-chevron-right',
        prevEl: '.fa-chevron-left',
      },
	  effect: 'fade',
	  fadeEffect: {
		crossFade: true
	  },
	  speed: 500,
	  autoplay:true
    });
	
	/* /////////////////////////////////
		Single project carousel
   	   ///////////////////////////////// */	
	
	var singleProjectCarousel = new Swiper('.single-project-carousel', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
		dynamicBullets: true,
      },
	  spaceBetween: 50,
	  speed: 1000,
	  loop:true,
	  autoplay:true,
	  centeredSlides: true,
      breakpoints: {
        3000: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        }
      }
    });
		
	/* /////////////////////////////////
		Portfolio items filter
   	   ///////////////////////////////// */
	
	$('#portfolio-sec').imagesLoaded( function() {
		if( $('.filtr-container').length ) {		
			var filterizd = $('.filtr-container').filterizr();	
			$('.filters-list li').on( 'click', function(){
				$(this).parent().children().removeClass('current');
				$(this).addClass('current');
			});
		}
	});
		
	/* /////////////////////////////////
		Magnific Popup
   	   ///////////////////////////////// */
	
	$('.lightbox').magnificPopup({
		removalDelay: 300
	});
	$('.lightbox-gallery').magnificPopup({
		removalDelay: 300,
		gallery: {
			enabled: true,
			preload: [1,1],
			navigateByImgClick: true,			
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button			
			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		}
	});
		
	/* /////////////////////////////////
		Social Sharing
   	   ///////////////////////////////// */
		 
	createFacebookShare ( $( '.share-list' ).find( '.facebook' ) );
	createTwitterShare ( $( '.share-list' ).find( '.twitter' ) );
	createLinkedinShare ( $( '.share-list' ).find( '.linkedin' ) );
	createGooglePlusShare ( $( '.share-list' ).find( '.google' ) );
	createPinterestShare ( $( '.share-list' ).find( '.pinterest' ) );
	createRedditShare ( $( '.share-list' ).find( '.reddit' ) );
	
	// facebook share link
	function createFacebookShare(item) {
		if (item.length && !item.attr('onclick')) {
		   item.attr('onclick', "window.open('https://www.facebook.com/sharer/sharer.php?display=popup&u=" + encodeURIComponent(window.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;");
		}
	}		
	// twitter share link
	function createTwitterShare(item) {
		if (item.length && !item.attr('onclick')) {
			var link_title = $('h1').text();
			item.attr('onclick', "window.open('https://twitter.com/intent/tweet?text=" + link_title + "&url=" + encodeURIComponent(window.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;");
		}
	}		
	// linkedin share link
	function createLinkedinShare(item) {
		if (item.length && !item.attr('onclick')) {
			var link_title = $('h1').text();
			item.attr('onclick', "window.open('https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location.href) + "&title=" + link_title + "&source=" + encodeURIComponent(window.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;");
		}
	}		
	// google plus share link
	 function createGooglePlusShare(item) {
		if (item.length && !item.attr('onclick')) {
			var link_title = $('h1').text();
			item.attr('onclick', "window.open('//plusone.google.com/_/+1/confirm?hl=en&url=" + encodeURIComponent(window.location.href) + "/&name=" + link_title + "', '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false;");
		}
	}		 
	//pinterest share link
	function createPinterestShare(item) {
		if (item.length && !item.attr('onclick')) {
			var thumb_url = $('.featured-img').attr('data-url');
			var link_title = $('h1').text();
			item.attr('onclick', "window.open('https://pinterest.com/pin/create/button/?url=" + encodeURIComponent(window.location.href) + "&description=" + link_title + "&media=" + thumb_url + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;");
		}
	}		
	//reddit share link
	function createRedditShare(item) {
		if (item.length && !item.attr('onclick')) {
			var link_title = $('h1').text();
			item.attr('onclick', "window.open('https://www.reddit.com/submit?url=" + encodeURIComponent(window.location.href) + "&title=" + link_title + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;");
		}
	}
		
	/* /////////////////////////////////
		Validate Contact Form
   	   ///////////////////////////////// */	

	$('#contact-form').validate({
	// Specify what the errors should look like
	// when they are dynamically added to the form
		errorElement: "span",
		errorPlacement: function(error, element) {
			error.insertAfter($(element));
		},
	
		// Add requirements to each of the fields
		rules: {
			name: {
				required: true,
				minlength: 5
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true,
				minlength: 8
			},
			message: {
				required: true,
				minlength: 20
			}
		},
		
		// Specify what error messages to display
		// when the user does something horrid
		messages: {
			name: {
				required: "Please enter your full name.",
				minlength: jQuery.format("At least {0} characters required.")
			},
			email: {
				required: "Email required.",
				email: "Please enter a valid email."
			},
			subject: {
				required: "Subject required.",
				minlength: jQuery.format("At least {0} characters required.")
			},
			message: {
				required: "Message required.",
				minlength: jQuery.format("At least {0} characters required.")
			}
		},
		
		// Use Ajax to send everything to send.php
		submitHandler: function(form) {
			$("#send").text("Sending...");
			$(form).ajaxSubmit({
				success: function(responseText, statusText, xhr, $form) {
					$("#response").html(responseText).hide().slideDown();
					$("#send").text("Send Message");
					$('#contact-form')[0].reset();
				}
			});
			return false;
		}
	});
	
	/* /////////////////////////////////
		Check if input is filled
   	   ///////////////////////////////// */	
	$('.form-control').on( 'blur', function(){
		if( hasValue( $(this) ) ) {
			$(this).addClass('-hasvalue');
		} else {
			$(this).removeClass('-hasvalue');
		}
	});
	function hasValue(elem) {
		return $(elem).filter(function() { return $(this).val(); }).length > 0;
	}
	
	/* /////////////////////////////////
		Smart sticky sidebar
   	   ///////////////////////////////// */		
	
	if ( $window.width() > 767 ) {
		$("#sticky").stick_in_parent();
	}

	
	/* /////////////////////////////////
		Do this only on desktop
   	   ///////////////////////////////// */
	
	if ( !isMobile ) {	
	
		/* /////////////////////////////////
			Init Parallax
		   ///////////////////////////////// */	

		$( '.parallax' ).parallaxie({
			speed: 0.5,
			size: 'cover',
			offset: iOffset
		});	
	
		/* /////////////////////////////////
			Text Parallax for Main Banner
		   ///////////////////////////////// */		
		
		$window.scroll(function(){
			$(".text-parallax").css("opacity", 1 - $(window).scrollTop() / 450);
		});
	
		/* /////////////////////////////////
			3D Tilt Effect
		   ///////////////////////////////// */	
		
		$('.js-tilt').tilt({
			perspective: 1000
		});
		
	} // !isMobile
	
});