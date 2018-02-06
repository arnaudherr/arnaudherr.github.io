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
