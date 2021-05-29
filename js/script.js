jQuery(window).scroll(function () {
    var the_top = jQuery(document).scrollTop();
    if (the_top > 200) {
        jQuery('.scrolling').addClass('non-active');
    } else {
        jQuery('.scrolling').removeClass('non-active');
    }
});


$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 500);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
})