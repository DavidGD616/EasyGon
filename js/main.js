$(document).ready(function(){
    $('.aside-menu li:has(ul)').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();
            
        } else {
            $('.aside-menu li ul').slideUp();
            $('.aside-menu').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });

    $('.aside-menu li ul li a').click(function(){
        window.location.href = $(this).attr('href');
    });
});