$(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".header-menu").slideToggle();
	});

	$(".scroll-bottom").click(function(){
		$.scrollTo($(".s-about"), 800, {
			offset: 30
		});
	});

	$(".scroll-to-about-us").click(function(){
		$.scrollTo($(".s-about"), 800, {
			offset: 30
		});
	});

	$(".scroll-to-contact").click(function(){
		$.scrollTo($(".s-contact"), 800, {
			offset: 30
		});
	});

	$('.slider-team').owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 300,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			500:{
				items:2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$('.services .services-item .h3').equalHeights();
	$('.services .services-item p').equalHeights();

	$(".scroll-to-services").click(function(){
		$.scrollTo($(".s-services"), 800, {
			offset: 30
		});
	});

	$(".scroll-to-portfolio").click(function(){
		$.scrollTo($(".s-work"), 800, {
			offset: 30
		});
	});

	$(".scroll-to-testimomials").click(function(){
		$.scrollTo($(".s-testimomials"), 800, {
			offset: 30
		});
	});

	$('.slider-clients').owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 300,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			500:{
				items:2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

	$('.only-web-design').click(function(){
		$(this).addClass('active');
		$('.photography').hide('slow');
		$('.only-photography').removeClass('active');
		$('.mobile-design').hide('slow');
		$('.web-design').show('slow');
		$('.only-mobile-design').removeClass('active');
		$('.its-all').removeClass('active');
	});

	$('.only-mobile-design').click(function(){
		$(this).addClass('active');
		$('.only-web-design').removeClass('active');
		$('.only-photography').removeClass('active')
		$('.its-all').removeClass('active')
		$('.web-design').hide('slow');
		$('.photography').hide('slow');
		$('.mobile-design').show('slow');
	});

	$('.only-photography').click(function(){
		$(this).addClass('active');
		$('.only-web-design').removeClass('active');
		$('.only-mobile-design').removeClass('active');
		$('.its-all').removeClass('active');
		$('.web-design').hide('slow');
		$('.mobile-design').hide('slow');
		$('.photography').show('slow');
	});

	$('.its-all').click(function(){
		$(this).addClass('active');
		$('.only-web-design').removeClass('active');
		$('.only-mobile-design').removeClass('active');
		$('.only-photography').removeClass('active');
		$('.photography').hide('slow');
		$('.photography').show('slow');
		$('.web-design').show('slow');
		$('.mobile-design').show('slow');
	});

	$('.icon-portfolio').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});

	$('.testimonials-slider').owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 800,
		responsiveClass: true,
		dots: true,
		items: 1
	});

	//E-mail Ajax Send
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$('.s-about .about-us').animated("fadeInRight");
	$('.s-team .h1').animated('fadeInLeft');
	$('.s-services .section-top').animated('fadeInLeft');
	$('.s-services .services .services-item').animated("zoomIn");
	$('.s-clients .section-top').animated('fadeInLeft');
	$('.s-work .section-top').animated('fadeInLeft');
	$('.s-work .portfolio').animated("zoomIn");
	$('.s-testimomials .section-top').animated('fadeInLeft');
	$('.s-contact .section-top').animated('fadeInLeft');
	$('.s-contact .callback').animated("zoomIn");
});


$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});
