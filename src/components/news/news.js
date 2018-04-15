import $ from 'jquery';

$(document).ready(function(){

	let windowWidth = $(window).width();
	let items = $('.news__item');

	if($(items).length > 4 && windowWidth > 992) {

			$('.news__list').slick({
				slidesToShow: 4
			});
	} 
	
	//Change opacity, when items more than 4
	let slickTrack = $('.slick-track');
	let active = $('.slick-active');

	let $first = active[0];
	let $second = active[1];
	let $third = active[2];
	let $fourth = active[3];

	if($(items).length > 4) {

		$($first).css('opacity','0.5');
		$($fourth).css('opacity','0.5');
	};

	$('.slick-prev').on('click', function() {
		slickTrack = $('.slick-track');
		active = $('.slick-active');

		$first = active[0];
		$second = active[1];
		$third = active[2];
		$fourth = active[3];

		$($first).css('opacity','0.5');
		$($fourth).css('opacity','0.5');
		$($second).css('opacity','1');
		$($third).css('opacity','1');

	});

	$('.slick-next').on('click', function() {
		slickTrack = $('.slick-track');
		active = $('.slick-active');

		$first = active[0];
		$second = active[1];
		$third = active[2];
		$fourth = active[3];

		$($first).css('opacity','0.5');
		$($fourth).css('opacity','0.5');
		$($second).css('opacity','1');
		$($third).css('opacity','1');

	});

	//Load more button

	let buttonLoadMore = $('.news__button.button');

	if($(items).length > 4 && $(window).width() <= 992) {

		//Show button Load more, when Items more than 4
			$(buttonLoadMore).css('display','block');
	
			console.log($(items).slice(0,3));


		$(function(){
			let lastItem = ($(items).length - 1);

			$(items).slice(0,3).show();
			$(buttonLoadMore).on('click', function(e){


				e.preventDefault();
				$('.news__item:hidden').slice(0,lastItem).slideDown("linear");

				if ($('.news__item:hidden').length == 0) {

					$(this).fadeOut('slow')
				};
			});
		});

	} else {
		$('.news__item').css('display', 'block');
		$(buttonLoadMore).css('display','none');
	};
});
