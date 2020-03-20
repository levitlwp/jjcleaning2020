(function($) {
  "use strict";

  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on("scroll load", function() {
    if ($(".navbar").offset().top > 20) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $(document).on("click", "a.page-scroll", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top
          },
          600,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  /* Card Slider - Swiper */
  var cardSlider = new Swiper(".card-slider", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      // when window is <= 992px
      992: {
        slidesPerView: 2
      },
      // when window is <= 768px
      768: {
        slidesPerView: 1
      }
    }
  });

  /* Counter - CountTo */
  var a = 0;
  $(window).scroll(function() {
    if ($("#counter").length) {
      // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function() {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text()
          }).animate(
            {
              countNum: countTo
            },
            {
              duration: 2000,
              easing: "swing",
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            }
          );
        });
        a = 1;
      }
    }
  });

  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function() {
    if ($(this).val() != "") {
      $(this).addClass("notEmpty");
    } else {
      $(this).removeClass("notEmpty");
    }
  });

  /* Contact Form */
  $("#contactForm")
    .validator()
    .on("submit", function(event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        cformError();
        csubmitMSG(false, "Please fill all fields!");
      } else {
        // everything looks good!
        event.preventDefault();
        csubmitForm();
      }
    });

  /* Back To Top Button */
  // create the back to top button
  $("body").prepend(
    '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
  );
  var amountScrolled = 700;
  $(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("500");
    } else {
      $("a.back-to-top").fadeOut("500");
    }
  });

  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function() {
    $(this).blur();
  });
})(jQuery);
