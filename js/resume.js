(function($) {
  "use strict"; // Start of use strict

  function drawNavLine(index) {
    var items = $("li.nav-item");
    var sections = $("section.resume-section");

    for(var j=0; j<sections.length; j++) {
      if(j == index) {
        $(sections[j]).removeClass('hide');
        $(sections[j]).fadeIn( 300 );
      } else {
        $(sections[j]).addClass('hide');
      }
    }

    for(var i=0; i<items.length; i++) {
      if(i <= index) {
        if(i == index) {
          $(items[i].children[0]).addClass('focus');
          $(items[i].children[2]).addClass('focus');
          $(items[i].children[2].children[0]).addClass('active');
          $(items[i].children[1]).removeClass('active');
        } else {
          $(items[i].children[2]).removeClass('focus');
          $(items[i].children[0]).removeClass('focus');
          $(items[i].children[0]).addClass('active1');
          $(items[i].children[2]).addClass('active');
          $(items[i].children[2].children[0]).addClass('active');
          $(items[i].children[1]).addClass('active');
        }
      } else {
        $(items[i].children[2]).removeClass('active');
        $(items[i].children[2]).removeClass('focus');
        $(items[i].children[0]).removeClass('focus');
        $(items[i].children[0]).removeClass('active1');
        $(items[i].children[2].children[0]).removeClass('active');
        $(items[i].children[1]).removeClass('active');
      }
      console.log(items[i]);
    }
  }

  $('.content-wrapper').hide();

  $( ".loading" ).delay( 4000 ).fadeOut( 400, function() {
    $('.content-wrapper').show();
  });
  
  $('.second-loading-title').hide();
  $( ".first-loading-title" ).delay( 2000 ).fadeOut( 300, function() {
    $('.second-loading-title').show();
  });

  drawNavLine(0);

  $('html, body').animate({
    scrollTop: (0)
  }, 1000, "easeInOutExpo");
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      switch(this.hash) {
        case '#education':
          drawNavLine(0);
          // var dot = target.find(item);
          break;
        case '#skills':
          drawNavLine(1);
          break;
        case '#interests':
          drawNavLine(2);
          break;
        case '#awards':
          drawNavLine(3);
          break;
        default:

      }

      // if (target.length) {
      //   $('html, body').animate({
      //     scrollTop: (target.offset().top)
      //   }, 1000, "easeInOutExpo");
      //   return false;
      // }
    }
  });

  $('.connect-wrapper').show();

  $('#contact-button').click(function() {
    $('.connect-wrapper').hide();
    $('.contact-wrapper').show();
  });

  $('#submit-button').click(function() {
   
  });

  $('#close-button').click(function() {
    $('.connect-wrapper').show();
    $('.contact-wrapper').hide();
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
