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
/***/ function(module, exports) {

	(function () {
	    'use strict';
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
	    var LoadData = (function () {
	        function LoadData(url) {
	            this.loadWeather = new Promise(function (resolve, reject) {
	                fetch(url)
	                    .then(function (response) { return response.json(); })
	                    .then(function (body) { return resolve(body.list); })
	                    .catch(function (error) { return reject(error); });
	            });
	        }
	        return LoadData;
	    }());
	    var show_map = function (position) {
	        var latitude = position.coords.latitude, longitude = position.coords.longitude;
	        var URL = 'http://api.openweathermap.org/data/2.5/find?lat=' + latitude + '&lon=' + longitude + '&cnt=50&appid=f9ddf31de1f2a7aafa162e68b9ffc586';
	        var data = new LoadData(URL), docFragment = document.createDocumentFragment();
	        data.loadWeather
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
	    var init = function () { return navigator.geolocation.getCurrentPosition(show_map); };
	    init();
	})();


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map