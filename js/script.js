

AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



//=====================WEBP==========================================================
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    })



//==================СЛАЙДЕРЫ=============================================================================================================================
$(document).ready(function(){
  $('.Slider').slick({
    // prevArrow: <a class="prev">Пред</a>
    prevArrow:"<a class='slick-arrow slick-prev' >Пред</a>",
    nextArrow:"<a class='slick-arrow slick-next' >След</a>"
    
  });
  $('.project_col').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed:2000,
    arrows: false,
    variableWidth:true,
    infinite: true,
  });
  $('.partners__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed:2000,
    arrows: false,
    rows: 2,
    variableWidth:true,
    infinite: true,
  });

// ===================Функция изменения фона бокового блока============================================

  function Scroll() {
    let n = $(window).scrollTop();
    console.log(n)
    if (n > 1020 && n < 2490) {
      $('.aside').css('background', 'rgba(51, 51, 51, 1)');
    } else {
      $('.aside').css('background', 'rgba(51, 51, 51, 0.75)');
    }

  }
  Scroll();
  
  $(window).scroll(function() {
    Scroll();
  });
});
