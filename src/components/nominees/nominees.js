import $ from 'jquery';

$(document).ready(function(){

	$(".nominees__link").mouseenter(function(){
        $(this).children($(".nominees__wrap")).css("top", "200px");
    });
    $(".nominees__link").mouseleave(function(){
       $(this).children($(".nominees__wrap")).css("top", "0");
    });

});
