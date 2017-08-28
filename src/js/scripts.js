(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });

  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    autoplay: true,
    autoplayTimeout: 10000,
    items: 1,
    margin: 40,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    autoHeight: true
  });

  HelloWorldDevsTysonSteele.tourCarousel('.js-reviews-carousel', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    navText: [
      '<img src="assets/tour-left.png">',
      '<img src="assets/tour-right.png">'
    ],
    dots: true,
    margin: 30,
    slideBy: 1,
    responsive: {
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '39.155159,-77.210143', '39.155159,-77.210143');

  $('.faq__accordion').on('click', function () {
    $('.faq__body').collapse('hide');
    $(this).next('div').collapse('hide');
  });

}(jQuery, HelloWorldDevsTysonSteele));

