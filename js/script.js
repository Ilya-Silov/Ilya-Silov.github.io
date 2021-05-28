jQuery(window).scroll(function () {
    var the_top = jQuery(document).scrollTop();
    if (the_top > 200) {
        jQuery('.scrolling').addClass('non-active');
    } else {
        jQuery('.scrolling').removeClass('non-active');
    }
});

$(document).ready(function() {
    $('a[href^="#"]').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
    scrollTop: $(el).offset().top}, 2000);
    return false;
    });
    });

   /*  или
    $(document).ready(function() {
        $('a[href^="#"]').click(function () { 
          elementClick = $(this).attr("href");
          destination = $(elementClick).offset().top;
          if($.browser.safari){
            $('body').animate( { scrollTop: destination }, 1100 );
          }else{
            $('html').animate( { scrollTop: destination }, 1100 );
          }
          return false;
        });
      }); */