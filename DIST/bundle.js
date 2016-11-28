/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var loadGoogleMapsAPI = __webpack_require__(1);
	var API_WEATHER_KEY = 'f9ddf31de1f2a7aafa162e68b9ffc586', API_GOOGLE_MAPS_KEY = 'AIzaSyBDOTuEovqWOhDmy2ClQvwXXMni-NLHUwI';
	var MainWeather = (function () {
	    function MainWeather() {
	    }
	    return MainWeather;
	}());
	var City = (function () {
	    function City() {
	    }
	    return City;
	}());
	var loadWeather = function (url) {
	    return new Promise(function (resolve, reject) {
	        fetch(url)
	            .then(function (response) { return response.json(); })
	            .then(function (body) { return resolve(body.list); })
	            .catch(function (error) { return reject(error); });
	    });
	};
	var show_map = function (position) {
	    var latitude = position.coords.latitude, longitude = position.coords.longitude;
	    var URL = 'http://api.openweathermap.org/data/2.5/find?lat=' + latitude + '&lon=' + longitude + '&cnt=10&appid=' + API_WEATHER_KEY;
	    var docFragment = document.createDocumentFragment();
	    weatherData = loadWeather(URL);
	    loadGoogleMapsAPI.default({ key: API_GOOGLE_MAPS_KEY }).then(function (googleMaps) {
	        var map = new googleMaps.Map(document.getElementById('map'), {
	            zoom: 8,
	            center: {
	                lat: latitude,
	                lng: longitude
	            }
	        });
	        new googleMaps.Marker({
	            position: {
	                lat: latitude,
	                lng: longitude
	            },
	            map: map
	        });
	    }).catch(function (err) {
	        var p = document.createElement('p');
	        p.innerHTML = 'Error: ' + err.message;
	        document.getElementById('map').appendChild(p);
	    });
	    weatherData
	        .then(function (data) {
	        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
	            var city = data_1[_i];
	            var div = document.createElement('div'), h3 = document.createElement('h3'), p = document.createElement('p');
	            h3.innerHTML = city.name;
	            p.innerHTML = city.main.temp;
	            div.appendChild(h3);
	            div.appendChild(p);
	            docFragment.appendChild(div);
	        }
	        document.getElementById('weather').appendChild(docFragment);
	    })
	        .catch(function (error) {
	        var p = document.createElement('p');
	        p.innerHTML = 'Error: ' + error.message;
	        document.getElementById('weather').appendChild(p);
	    });
	};
	var weatherData;
	var init = function () { return navigator.geolocation.getCurrentPosition(show_map); };
	init();


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var client = _ref.client;
	  var key = _ref.key;
	  var language = _ref.language;
	  var _ref$libraries = _ref.libraries;
	  var libraries = _ref$libraries === undefined ? [] : _ref$libraries;
	  var _ref$timeout = _ref.timeout;
	  var timeout = _ref$timeout === undefined ? 10000 : _ref$timeout;
	  var v = _ref.v;
	
	  var callbackName = '__googleMapsApiOnLoadCallback';
	
	  return new Promise(function (resolve, reject) {
	
	    // Exit if not running inside a browser.
	    if (typeof window === 'undefined') {
	      return reject(new Error('Can only load the Google Maps API in the browser'));
	    }
	
	    // Prepare the `script` tag to be inserted into the page.
	    var scriptElement = document.createElement('script');
	    var params = ['callback=' + callbackName];
	    if (client) params.push('client=' + client);
	    if (key) params.push('key=' + key);
	    if (language) params.push('language=' + language);
	    libraries = [].concat(libraries); // Ensure that `libraries` is an array
	    if (libraries.length) params.push('libraries=' + libraries.join(','));
	    if (v) params.push('v=' + v);
	    scriptElement.src = 'https://maps.googleapis.com/maps/api/js?' + params.join('&');
	
	    // Timeout if necessary.
	    var timeoutId = null;
	    if (timeout) {
	      timeoutId = setTimeout(function () {
	        window[callbackName] = function () {}; // Set the on load callback to a no-op.
	        reject(new Error('Could not load the Google Maps API'));
	      }, timeout);
	    }
	
	    // Hook up the on load callback.
	    window[callbackName] = function () {
	      if (timeoutId !== null) {
	        clearTimeout(timeoutId);
	      }
	      resolve(window.google.maps);
	      delete window[callbackName];
	    };
	
	    // Insert the `script` tag.
	    document.body.appendChild(scriptElement);
	  });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map