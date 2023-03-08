(function ($) {
  "use strict"
  jQuery(document).ready(function () {

    // mobile-menu
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991.99"
    });


    // ToTop [Hand-Code].
    $('.scrollup').on('click', function () {
      $("html").animate({
        "scrollTop": '0'
      }, 1200);
    });
    $(window).on('scroll', function () {
      var toTopVisible = $('html').scrollTop();
      if (toTopVisible > 500) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });

    // MouseHover Animation home 1
    var hoverLayer = $(".banner-area");
    var heroImgOne = $(".p-shape-1");
    var heroImgTwo = $(".p-shape-2");
    var heroImgThree = $(".p-shape-3");
    var heroImgFour = $(".p-shape-4");
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgOne.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 60;
      var valueY = (e.pageY * -1) / 80;
      heroImgTwo.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 40;
      var valueY = (e.pageY * -1) / 60;
      heroImgThree.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 80;
      var valueY = (e.pageY * -1) / 100;
      heroImgFour.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });


    // MouseHover Animation home 2
    var hoverLayer2 = $(".burger-promo-area");
    var heroImgfive = $(".bs1");
    var heroImgsix = $(".bs2");
    var heroImgseven = $(".bs5");
    var heroImgeight = $(".bs6");
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgfive.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 60;
      var valueY = (e.pageY * -1) / 80;
      heroImgsix.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 40;
      var valueY = (e.pageY * -1) / 60;
      heroImgseven.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 80;
      var valueY = (e.pageY * -1) / 100;
      heroImgeight.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });

    // MouseHover Animation home 3
    var hoverLayer3 = $(".snack-section");
    var heroImgnine = $(".ss1");
    var heroImgten = $(".ss2");
    var heroImgeleven = $(".ss3");
    var heroImgtweleve = $(".mss2");
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgtweleve.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 60;
      var valueY = (e.pageY * -1) / 80;
      heroImgnine.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 40;
      var valueY = (e.pageY * -1) / 60;
      heroImgten.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 80;
      var valueY = (e.pageY * -1) / 100;
      heroImgeleven.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });


    // MouseHover Animation home 4
    var iceHoverLayer = $(".hero-ice-area");
    var iceImage = $(".ice-lg-vec");

    iceHoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      iceImage.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });

    // about home 4
    var iceFloatLayer = $(".ice-about");
    var floatImg = $(".float-img1");
    var floatImg1 = $(".float-img2");
    var floatImg2 = $(".float-img3");

    iceFloatLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;

      floatImg.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
      floatImg1.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
      floatImg2.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
      });
    });

    // youtube popup
    $('.popup-youtube').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    // blog youtube popup
    $('.button-video').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    // ice youtube popup
    $('.ice-video-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    // testimonial 
    $('.testimonial-active').slick({
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // home3 testimonial 
    $('.ht-testi-active').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //   slider-gallery
    $('.slider-gallery-active').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,

          }
        }
      ]
    });
    //   slider-gallery
    $('.ins-gallery-active').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      centerMode: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,

          }
        }
      ]
    });

    // index-blog-slider-active
    $('.blog-slider-active').slick({
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    // blog-slider-active
    $('.blog-thumbnail-slider').slick({
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<i class="fas fa-reply prev-arrow"></i>',
      nextArrow: '<i class="fas fa-share next-arrow"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // main-gallery

    // init Isotope
    var $grid = $('.gallery-wrapper').isotope({
      // options
    });

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: 1
      }
    })
    $('.gallery-btn button').each(function () {
      $(this).click(function () {
        $(this).parent('.gallery-btn').find('button.active').removeClass('active');
        $(this).addClass('active');
      })
    }
    );

    // team-active
    $('.team-slider-active').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // food-price range-slider
    $(function () {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
      });
      $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
    });

    // Countdown 
    $('.countdown').downCount({
      date: '06/28/2025 12:00:00',
      offset: +6
    }, function () {
      alert('Countdown done!');
    });

    // food counter
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // home 4 ice slider
    $('.ice-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      arrows: true,
      prevArrow: '<i class="fas fa-long-arrow-alt-left slider-nav nav-left"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-right slider-nav nav-right"></i>',
      responsive: [{
        breakpoint: 576,
        settings: {
          arrows: false,
          autoplay: true,
          speed: 300
        }
      }]
    });
    $('.ice-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.ice-slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true

    });

    // ice slider refresh
    $(window).resize(function () {
      $('.ice-slider-nav').slick('refresh');
    });

    // home 4 ice single slider
    $('.ice-slider-active').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    });

    // ice gallery popup
    $('.ice-gal-popup').each(function () {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });

    // ice-gallery-slider-active
    $('.ice-gallery-slider-active').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    });

    // ice-brand-logo-slider
    $('.ice-brand-logo-slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 2,
      arrows: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        }
      ]

    });

    // dbl product gallery
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,


    });
  });

  jQuery(window).on('load', function () {

    // WOW JS
    new WOW().init();

    // Preloader
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);

  });
})(jQuery);
