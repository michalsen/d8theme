(function ($) {
    $(function(){

      var htmhedobd = $('html, head, body');
      var bod = $('body');
      var mnav = $('.mobile-nav');
      var mtrig = $('.mobile-trigger');

      mtrig.on('click',function(){
        mnav.toggleClass('vis');
      });

    });
}(jQuery));
