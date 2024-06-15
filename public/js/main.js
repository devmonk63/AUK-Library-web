/*
document.addEventListener('DOMContentLoaded', function () {
  var headsElement = document.getElementById('heads');

  if (headsElement) {
    var initialOffset = headsElement.offsetTop;

    var handleScroll = function () {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition >= initialOffset) {
        headsElement.classList.add('sticky');
        headsElement.classList.remove('hidden');
      } else {
        headsElement.classList.remove('sticky');
        headsElement.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Get the element to be animated
  var fadeRightElement = document.querySelector('.fade-right-element');

  // Add the 'fade-right' class to trigger the animation
  fadeRightElement.classList.add('fade-right');
});

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  let currentIndex = 0;

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + 'vw';
    carousel.style.transform = 'translateX(' + translateValue + ')';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
  }

  // Change slides every 3 seconds (adjust as needed)
  setInterval(nextSlide, 6000);
});
*/
function mapSocialMediaToIconClass(handle) {
  switch (handle.toLowerCase()) {
    case 'facebook':
      return 'fa-fa-facebook';
    case 'twitter':
      return 'fa-fa-twitter';
    case 'linkedin':
      return 'fa-fa-linkedin';
    case 'instagram':
      return 'fa-fa-instagram';
    // Add more cases for other social media handles as needed
    default:
      return ''; // Return an empty string for handles without a known icon class
  }
}


$(function () {

  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {

    $('.js-clone-nav').each(function () {
      var $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });


    setTimeout(function () {

      var counter = 0;
      $('.site-mobile-menu .has-children').each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class': 'collapse',
          'id': 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

    $('body').on('click', '.arrow-collapse', function (e) {
      var $this = $(this);
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();

    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    })

    $('body').on('click', '.js-menu-toggle', function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    })

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  };
  siteMenuClone();

});