$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
           $(".navbar").addClass("active1");
           $(".linkBorder").addClass("border_bottom1");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar").removeClass("active1");
           $(".linkBorder").removeClass("border_bottom1");
        }

		if ($(window).scrollTop() > 100 ) {
			$(".nav_menu a").addClass("active2");
		} else {
			$(".nav_menu a").removeClass("active2");
		}

		if ($(window).scrollTop() > 100 ) {
			$(".site_name").addClass("name1");
		} else {
			$(".site_name").removeClass("name1");
		}

		if ($(window).scrollTop() > 100 ) {
			$(".search_form").removeClass("border-white");
			$(".search_form").addClass("search_form form-control mr-sm-0 rounded-0 shadow-none border-dark border-right-0");
			$(".search_btn").removeClass('btn-outline-light');
			$(".search_btn").addClass('btn-outline-dark btn btn-sm my-sm-0 rounded-0 shadow-none');
		} else {
			$(".search_form").addClass("border-white");
			$(".search_form").removeClass("border-dark");
			$(".search_btn").addClass('btn-outline-light');
			$(".search_btn").removeClass('btn-outline-dark');
		}

		if ($(window).scrollTop() > 100 ) {
			$(".navbar-toggler").addClass("navbar-toggler2");
		} else {
			$(".navbar-toggler").removeClass("navbar-toggler2");
		}
	});
});

// -------------------------------------------------------------------------------slider
$(document).ready(function()
{


if($('.bbb_viewed_slider').length)
{
var viewedSlider = $('.bbb_viewed_slider');

viewedSlider.owlCarousel(
{
loop:true,
margin:0,
autoplay:true,
autoplayTimeout:2000,
nav:false,
dots:false,
responsive:
{
0:{items:1},
575:{items:2},
768:{items:3},
991:{items:3},
1000:{items:4},
1100:{items:4},
1400:{items:5},
1570:{items:6},
1640:{items:6},
1880:{items:8},
1980:{items:9},
}
});

if($('.bbb_viewed_prev').length)
{
var prev = $('.bbb_viewed_prev');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next').length)
{
var next = $('.bbb_viewed_next');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}


});
// -------------------------------------------------------------------------------slider