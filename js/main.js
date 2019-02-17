/*global $, alert, console*/
			  
$(function () {
	
	'use strict';
	
	// Adjust Header Height
	
	var myHeader = $('.header'),
		
		mySlider = $('.bxslider');
	
	myHeader.height($(window).height());
	
	$(window).resize(function () {
		
		myHeader.height($(window).height());
		
		mySlider.each(function () {
		
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 3);
	});
		
	});
	
	// Add Active class on links
	
	$('.links li a').click(function () {
		
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	// Adjust Bxslider List Item Center
	
	mySlider.each(function () {
		
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
	});
	
	// Trigger the bx slider
	
	mySlider.bxSlider({
			
		pager: false
	});
	
	// Smooth Scroll to div
	
	$('.links li a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top
			
		},1000)
		
	});
	
	// Our Auto Slider Code
	
	(function autoSlider () {
		
		$('.slider .active').each(function () {
			
			if (!$(this).is(':last-child')) {
				
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass('active').next().addClass('active').fadeIn();
					
					autoSlider ();
				});
				
			} else {
				
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass('active');
					
					$('.slider div').eq(0).addClass('active').fadeIn();
					
					autoSlider ();
				});
			}
		});
		
	}());
	
	// Trigger MixitUp
	
	var mixer = mixitup('#container');
	 var mixer = mixitup(container);
	  var mixer = mixitup(container, {
	  selectors: {
	   target: '.blog-item'
	  },
	  animation: {
	   duration: 300
	  }
	 });
	
	// Adjust Shuffle Links
	
	$('.shuffle li').click(function(){
		
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	// Trigger Nice Scroll
	
	$('html').niceScroll({
		
		cursorcolor: '#1abc9c',
		
		cursorwidth: '7px',
		
		cursorborder: '1px solid #1abc9c',
		
		cursorborderradius: 10
		
	});
	
});