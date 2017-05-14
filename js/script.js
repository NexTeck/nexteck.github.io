
$(window).scroll(function() {
    var scrollPos = $(window).scrollTop()
    var navbar = $('.navbar-default');
    var link = $('#navegacao > ul > li > a')

    if (scrollPos > 555) {
      navbar.addClass('change-color');
      link.css({
        color: '#fff'
      });

    } else {
      navbar.removeClass('change-color');
      link.css({
        color: '#777'
      });
    }
  });

$(".btn-more").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $('#welcome').offset().top 
    }, 600);
    
});

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});


/*
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

$('body').scrollspy({target: ".navbar-right"});*/
