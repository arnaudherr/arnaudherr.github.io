$(document).ready(function() {


  if (Modernizr.touch){
    //
  }
  else {
    parallax();

    var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".bg").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('.bg').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
    $('body').mousemove(function (e) {

        $('.cursor').animate({
            'left': e.pageX + -18  + 'px',
            'top': e.pageY  + -18 + 'px'
        }, 0);

    });
    $('a').hover(function() {
    $( ".cursor" ).toggleClass('big_cursor')
  });
  }

  var tmax_opts = {
    delay: 0,
    repeat: 0,
    repeatDelay: 0,
    yoyo: false
  };
  var tmax_tl = new TimelineMax(tmax_opts),
    polylion_shapes = $('.transit > polygon'),
    polylion_stagger = 0.00475,
    polylion_duration = 1.8;
  var polylion_staggerFrom = {
    scale: 1,
    opacity: 1,
    transformOrigin: 'center center',
  };
  var polylion_staggerTo = {
    opacity: 0,
    scale: 0,
    ease: Elastic.easeInOut
  };
  tmax_tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);
  animeWhale()
  setTimeout(function () {
    $('.transitor').hide();
  }, 1100);
  setTimeout(function () {
    if (Modernizr.touch){
      //
    }
    else{
      cssAnimations.init();

    }
  }, 800);
})




var cssAnimations = (function() {
  'use strict';
  var scrollInterval,
    animationClass,
    animationActiveClass,
    animatedElements,
    delayedElements;
  var initiate = function() {
    if (!_cutTheMustard()) {
      return;
    }
    scrollInterval = 200;
    animationClass = "js-animate";
    animationActiveClass = "js-animate--active";
    animatedElements = document.querySelectorAll("[data-animation='animated']");
    delayedElements = document.querySelectorAll("[data-animation-delay]");
    _addDelays(delayedElements);
    _addAnimationClasses(animatedElements);
    window.addEventListener('load', _runAnimations(animatedElements), false);
    var throttledScroll = _throttle(function() {
      _runAnimations(animatedElements)
    }, scrollInterval);
    window.addEventListener('scroll', throttledScroll, false);
  };
  var _cutTheMustard = function() {
    return ('querySelector' in document && 'addEventListener' in window && 'classList' in document.createElement('div'));
  };
  var _addAnimationClasses = function(elements) {
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      el.classList.add(animationClass);
      var animationTypeClass = "js-animate--" + el.getAttribute('data-animation-type');
      el.classList.add(animationTypeClass);
    }
  };
  var _runAnimations = function(elements) {
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      if (_isInViewport(el) && !el.classList.contains(animationActiveClass)) {
        el.classList.add(animationActiveClass);
      }
    }
  };
  var _addDelays = function(elements) {
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var delay = el.getAttribute('data-animation-delay');
      var vendorPrefixes = ['WebkitAnimationDelay', 'animationDelay'];
      for (var j = 0; j < vendorPrefixes.length; j++) {
        el.style[vendorPrefixes[j]] = delay;
      }
    }
  };
  var _isInViewport = function(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 && (rect.bottom - rect.height) <= (window.innerHeight || document.documentElement.clientHeight));
  };

  var _debounce = function(func, threshold) {
    var timer = null;
    return function() {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(context, args);
      }, threshold);
    };
  };
  var _throttle = function(func, threshold, scope) {
    threshold || (threshold = 250);
    var last, deferTimer;
    return function() {
      var context = scope || this;
      var now = +new Date,
        args = arguments;
      if (last && now < last + threshold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function() {
          last = now;
          func.apply(context, args);
        }, threshold);
      } else {
        last = now;
        func.apply(context, args);
      }
    };
  };
  return {
    init: initiate
  };
})();

$('.hamburguer').click(function() {
	$('nav').fadeToggle(600);
	$('.hamburguer span').toggleClass('showBurger')
	$('nav ul li').each(function(i) {
		var elm = $(this);
		setTimeout(function() {
			elm.toggleClass('show_nav');
		}, i * 100);
	});
})
/*******/
$('nav ul li a').click(function(e) {
  e.preventDefault()
	var url = $(this).attr("href")
	$('nav').fadeToggle(600);
	$('.hamburguer span').toggleClass('showBurger')
	$('nav ul li').each(function(i) {
		var elm = $(this);
		setTimeout(function() {
			elm.toggleClass('show_nav');
		}, i * 100);
	});
loadContent(url)
});
function loadContent(url){
  var currentLocation = window.location.pathname;;
  if (url!=currentLocation){
  $('.transitor').show();
  var tmax_opts = {
    delay: 0,
    repeat: 0,
    repeatDelay: 0,
    yoyo: false
  };
  var tmax_tl = new TimelineMax(tmax_opts),
    polylion_shapes = $('.transit > polygon'),
    polylion_stagger = 0.00475,
    polylion_duration = 1.8;
  var polylion_staggerFrom = {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
  };
  var polylion_staggerTo = {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeInOut
  };
  tmax_tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);

  setTimeout(function () {
    window.location.href = url;

  }, 1800);

}
}
$('a').click(function(e) {
	e.preventDefault();
	var url = $(this).attr("href");
  loadContent(url)
})
$(document).ready(function() {

})
function animeWhale(){
  var tmax_opts = {
		delay: .3,
		repeat: 0,
		repeatDelay: 0.5,
		yoyo: false
	};
	var tmax_tl = new TimelineMax(tmax_opts),
		polylion_shapes = $('svg.polylion > g polygon'),
		polylion_stagger = 0.00475,
		polylion_duration = 1.8;
	var polylion_staggerFrom = {
		scale: 0,
		opacity: 0,
		transformOrigin: 'center center',
	};
	var polylion_staggerTo = {
		opacity: 1,
		scale: 1,
		ease: Elastic.easeInOut
	};
	tmax_tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);
	var polylion_shapes = $('svg.polylion > g polygon');
  setTimeout(function () {
    anime({
  		targets: [document.getElementById("wave_full")],
  		d: "M886.702432,50.6148196 C749.207204,68.2447576 659.835306,-8.15164554 595.212549,69.7139191 C530.589792,147.579484 434.343133,226.914196 376.595137,226.9142 C318.847141,226.914203 228.100291,174.024382 185.476771,218.099231 C142.85325,262.174079 21.8574502,337.101309 58.981161,410.559387 C96.1048719,484.017465 126.353832,575.105471 233.6001,539.845599 C340.846368,504.585726 443.967799,350.323766 530.589804,350.323769 C617.211809,350.323772 687.33434,310.656402 735.457681,254.828268 C783.581023,199.000135 888.077384,191.654324 888.077384,191.654324",
  		duration: 800,
  		loop: false,
  		easing: "easeInOutSine"
  	});
  }, 100);

	setTimeout(function() {
		anime({
			targets: [document.getElementById("wave_full")],
			d: "M891.702432,46.6148196 C754.207204,64.2447576 663.622758,-31.2507447 599.000001,46.6148199 C534.377244,124.480385 460.747995,201.999997 402.999999,202 C345.252004,202.000003 212.62352,157.925152 169.999999,202 C127.376479,246.074848 8.87628928,341.541936 46.0000001,415.000015 C83.123711,488.458093 133.753731,583.259887 240.999999,548.000015 C348.246268,512.740142 438.377994,375.000011 524.999999,375.000015 C611.622004,375.000018 692.87666,297.828133 741.000001,242 C789.123343,186.171866 893.077384,187.654324 893.077384,187.654324",
			duration: 2000,
			loop: true,
			direction: "alternate",
			easing: "easeInOutSine"
		});
		anime({
			targets: [document.getElementById("wave_border")],
			d: "M893,36 C893,36 878,34 846,34 C814,34 792.99997,33.0000002 753.99997,18.0000002 C714.99997,3.00000018 628,-15.9999986 588,28 C548,71.9999986 494,157.000001 429,174 C364,190.999999 336,175 263,153.999999 C190,132.999997 118.000001,189 80.0000009,252.999999 C42.0000009,316.999997 29.0000004,321 12.0000004,343.999999 C-4.99999957,366.999997 -4,426.000001 27,444 C58,461.999999 59,492.999971 80,527 C101,561.000029 130,602.999971 193,590 C256,577.000029 340.000001,526 372.000001,490.999999 C404.000001,455.999997 444,423.000001 487,407 C530,390.999999 590,390.000001 653,368 C716,345.999999 754.99997,269 770.99997,252.999999 C786.99997,236.999997 839,218.000001 895,218",
			duration: 2000,
			loop: true,
			direction: "alternate",
			easing: "linear"
		});
	}, 1000);
}


/*
To activate the parallax set parallax-container on parent and set parallax-item on each child...
data-velocity = speed
*/
function parallax(){
  $(window).scroll(function (event) {

      var scroll = $(window).scrollTop();
      // Do something
      var $window = $(window);
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
      var $element_to_paralax = $(".parallax-container");
      $.each($element_to_paralax, function() {
      console.log($('.parallax-item').attr('data-velocity'));
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = $element.offset().bottom;

      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport

      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
          $.each($('.parallax-item'),function(){
            $(this).addClass('parallax-it');
            parallaxIt(window_top_position, $(this), $(this).attr('data-velocity'));
          })


      }
    });

  });


}

function parallaxIt(e, target, movement) {
  var $this = $(".parallax-container");
  var relY = e - $this.offset().top;
  console.log('Yeaah');
  TweenMax.to(target, 1, {
    y: (relY - $this.height() / 2) / $this.height() * movement,

  });
}
