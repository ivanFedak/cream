/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const btn = document.querySelector('.icon-menu'),
        btnMenu = document.querySelector('.menu__menu'),
        menu = document.querySelector('.menu__body');

  function menuToggle() {
    btn.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }

  btn.addEventListener('click', menuToggle);
  btnMenu.addEventListener('click', menuToggle);

  function closeModal(e) {
    const target = e.target;

    if (!target.closest('.menu__body') && !target.closest('.icon-menu') && !target.closest('.menu__menu')) {
      btn.classList.remove('_active');
      menu.classList.remove('_active');
      document.body.classList.remove('_lock');
    }
  }

  document.addEventListener('click', closeModal);
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/checkbox.js":
/*!************************************!*\
  !*** ./src/js/modules/checkbox.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const checkBox = () => {
  const checkBox = document.querySelectorAll('.buy-component__checkbox');
  checkBox.forEach(item => {
    const input = item.querySelector('input');

    if (input.checked == true) {
      item.classList.add('_active');
    }

    item.addEventListener('click', function (e) {
      if (item.classList.contains('_active')) {
        input.checked = false;
        console.log(1);
      } else {
        input.checked = true;
        console.log(2);
      }

      item.classList.toggle('_active');
    });
  });
  const checkBox2 = document.querySelectorAll('.where-component__checkbox');
  checkBox2.forEach(item => {
    const input = item.querySelector('input');

    if (input.checked == true) {
      item.classList.add('_active');
    }

    item.addEventListener('click', function (e) {
      if (item.classList.contains('_active')) {
        input.checked = false;
        console.log(1);
      } else {
        input.checked = true;
        console.log(2);
      }

      item.classList.toggle('_active');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkBox);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = () => {
  //BildSlider
  let sliders = document.querySelectorAll('._swiper');

  if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];

      if (!slider.classList.contains('swiper-bild')) {
        let slider_items = slider.children;

        if (slider_items) {
          for (let index = 0; index < slider_items.length; index++) {
            let el = slider_items[index];
            el.classList.add('swiper-slide');
          }
        }

        let slider_content = slider.innerHTML;
        let slider_wrapper = document.createElement('div');
        slider_wrapper.classList.add('swiper-wrapper');
        slider_wrapper.innerHTML = slider_content;
        slider.innerHTML = '';
        slider.appendChild(slider_wrapper);
        slider.classList.add('swiper-bild');

        if (slider.classList.contains('_swiper_scroll')) {
          let sliderScroll = document.createElement('div');
          sliderScroll.classList.add('swiper-scrollbar');
          slider.appendChild(sliderScroll);
        }
      }

      if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
      }
    }

    sliders_bild_callback();
  }

  function sliders_bild_callback(params) {}

  let sliderScrollItems = document.querySelectorAll('._swiper_scroll');

  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true
        }
      });
      sliderScroll.scrollbar.updateSize();
    }
  }

  function sliders_bild_callback(params) {} // let slider_about = new Swiper('.about__slider', {
  //     /*
  //     effect: 'fade',
  //     autoplay: {
  //         delay: 3000,
  //         disableOnInteraction: false,
  //     },
  //     */
  //     observer: true,
  //     observeParents: true,
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     autoHeight: true,
  //     speed: 800,
  //     //touchRatio: 0,
  //     //simulateTouch: false,
  //     //loop: true,
  //     //preloadImages: false,
  //     //lazy: true,
  //     // Dotts
  //     //pagination: {
  //     //	el: '.slider-quality__pagging',
  //     //	clickable: true,
  //     //},
  //     // Arrows
  //     navigation: {
  //         nextEl: '.about__more .more__item_next',
  //         prevEl: '.about__more .more__item_prev',
  //     },
  //     /*
  //     breakpoints: {
  //         320: {
  //             slidesPerView: 1,
  //             spaceBetween: 0,
  //             autoHeight: true,
  //         },
  //         768: {
  //             slidesPerView: 2,
  //             spaceBetween: 20,
  //         },
  //         992: {
  //             slidesPerView: 3,
  //             spaceBetween: 20,
  //         },
  //         1268: {
  //             slidesPerView: 4,
  //             spaceBetween: 30,
  //         },
  //     },
  //     */
  //     on: {
  //         lazyImageReady: function () {
  //             ibg();
  //         },
  //     }
  //     // And if we need scrollbar
  //     //scrollbar: {
  //     //	el: '.swiper-scrollbar',
  //     //},
  // });


  if (document.querySelector('.feedback-client__slider')) {
    new Swiper('.feedback-client__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      loop: true,
      watchOverflow: true,
      navigation: {
        nextEl: '.feedback-client .feedback-arrows__next',
        prevEl: '.feedback-client .feedback-arrows__prev'
      }
    });
  }

  if (window.innerWidth <= 576) {
    if (document.querySelector('.feedback-expert__slider')) {
      new Swiper('.feedback-expert__slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        loop: true,
        watchOverflow: true,
        navigation: {
          nextEl: '.feedback-expert .feedback-arrows__next',
          prevEl: '.feedback-expert .feedback-arrows__prev'
        }
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/spoller.js":
/*!***********************************!*\
  !*** ./src/js/modules/spoller.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const spoller = () => {
  //=================

  /*
  Для родителя слойлеров пишем атрибут data-spollers
  Для заголовков слойлеров пишем атрибут data-spoller
  Если нужно включать\выключать работу спойлеров на разных размерах экранов
  пишем параметры ширины и типа брейкпоинта.
  Например: 
  data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
  data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px
  
  Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
  */
  // SPOLLERS
  const spollersArray = document.querySelectorAll('[data-spollers]');

  if (spollersArray.length > 0) {
    // Получение обычных слойлеров
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
      return !item.dataset.spollers.split(",")[0];
    }); // Инициализация обычных слойлеров

    if (spollersRegular.length > 0) {
      initSpollers(spollersRegular);
    } // Получение слойлеров с медиа запросами


    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
      return item.dataset.spollers.split(",")[0];
    }); // Инициализация слойлеров с медиа запросами

    if (spollersMedia.length > 0) {
      const breakpointsArray = [];
      spollersMedia.forEach(item => {
        const params = item.dataset.spollers;
        const breakpoint = {};
        const paramsArray = params.split(",");
        breakpoint.value = paramsArray[0];
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
        breakpoint.item = item;
        breakpointsArray.push(breakpoint);
      }); // Получаем уникальные брейкпоинты

      let mediaQueries = breakpointsArray.map(function (item) {
        return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
      });
      mediaQueries = mediaQueries.filter(function (item, index, self) {
        return self.indexOf(item) === index;
      }); // Работаем с каждым брейкпоинтом

      mediaQueries.forEach(breakpoint => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]); // Объекты с нужными условиями

        const spollersArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        }); // Событие

        matchMedia.addListener(function () {
          initSpollers(spollersArray, matchMedia);
        });
        initSpollers(spollersArray, matchMedia);
      });
    } // Инициализация


    function initSpollers(spollersArray) {
      let matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      spollersArray.forEach(spollersBlock => {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;

        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add('_init');
          initSpollerBody(spollersBlock);
          spollersBlock.addEventListener("click", setSpollerAction);
        } else {
          spollersBlock.classList.remove('_init');
          initSpollerBody(spollersBlock, false);
          spollersBlock.removeEventListener("click", setSpollerAction);
        }
      });
    } // Работа с контентом


    function initSpollerBody(spollersBlock) {
      let hideSpollerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');

      if (spollerTitles.length > 0) {
        spollerTitles.forEach(spollerTitle => {
          if (hideSpollerBody) {
            spollerTitle.removeAttribute('tabindex');

            if (!spollerTitle.classList.contains('_active')) {
              spollerTitle.nextElementSibling.hidden = true;
            }
          } else {
            spollerTitle.setAttribute('tabindex', '-1');
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    }

    function setSpollerAction(e) {
      const el = e.target;

      if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
        const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
        const spollersBlock = spollerTitle.closest('[data-spollers]');
        const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;

        if (!spollersBlock.querySelectorAll('._slide').length) {
          if (oneSpoller && !spollerTitle.classList.contains('_active')) {
            hideSpollersBody(spollersBlock);
          }

          spollerTitle.classList.toggle('_active');

          _slideToggle(spollerTitle.nextElementSibling, 500);
        }

        e.preventDefault();
      }
    }

    function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');

      if (spollerActiveTitle) {
        spollerActiveTitle.classList.remove('_active');

        _slideUp(spollerActiveTitle.nextElementSibling, 500);
      }
    }
  } //=================
  //SlideToggle


  let _slideUp = function (target) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.hidden = true;
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  };

  let _slideDown = function (target) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');

      if (target.hidden) {
        target.hidden = false;
      }

      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  };

  let _slideToggle = function (target) {
    let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    if (target.hidden) {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (spoller);

/***/ }),

/***/ "./src/js/modules/swiperSettings.js":
/*!******************************************!*\
  !*** ./src/js/modules/swiperSettings.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const sliderSettings = () => {
  if (window.innerWidth <= 576) {
    document.querySelector('.feedback-expert__slider').classList.add('_swiper');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sliderSettings);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const timer = () => {
  const hours = document.querySelector('.buy-component__hours'),
        minutes = document.querySelector('.buy-component__minutes'),
        seconds = document.querySelector('.buy-component__seconds');
  let time = 1800;
  let timeInterval = setInterval(updateClock, 1000);

  function updateClock() {
    let minute = Math.floor(time / 60);
    let second = time % 60;
    second = second < 10 ? "0" + second : second;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
    time--;

    if (minutes.innerHTML <= 0 && seconds.innerHTML <= 0) {
      clearInterval(timeInterval);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/services/default.js":
/*!************************************!*\
  !*** ./src/js/services/default.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const def = () => {
  var ua = window.navigator.userAgent;
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
  }

  if (isIE()) {
    document.querySelector('html').classList.add('ie');
  }

  if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
  }

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
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (def);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_spoller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/spoller */ "./src/js/modules/spoller.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _services_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/default */ "./src/js/services/default.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkbox */ "./src/js/modules/checkbox.js");
/* harmony import */ var _modules_swiperSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/swiperSettings */ "./src/js/modules/swiperSettings.js");








window.onload = function () {
  (0,_services_default__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_spoller__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_swiperSettings__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
}();
/******/ })()
;
//# sourceMappingURL=script.js.map