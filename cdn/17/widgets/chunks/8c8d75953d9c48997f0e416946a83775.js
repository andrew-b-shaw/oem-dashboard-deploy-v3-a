"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-color-picker_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getUserAgentData),
/* harmony export */   "g": () => (/* binding */ getUserAgentString)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-color-picker_3.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-color-picker_3.entry.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_color_picker": () => (/* binding */ ColorPicker),
/* harmony export */   "calcite_color_picker_hex_input": () => (/* binding */ ColorPickerHexInput),
/* harmony export */   "calcite_color_picker_swatch": () => (/* binding */ ColorPickerSwatch)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _math_584fc665_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math-584fc665.js */ "./node_modules/@esri/calcite-components/dist/esm/math-584fc665.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _throttle_b7008174_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./throttle-b7008174.js */ "./node_modules/@esri/calcite-components/dist/esm/throttle-b7008174.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
















function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
/* MIT license */


var hasOwnProperty = Object.hasOwnProperty;

var reverseNames = Object.create(null);

// create a list of reverse color names
for (var name in colorName$1) {
	if (hasOwnProperty.call(colorName$1, name)) {
		reverseNames[colorName$1[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
	var keyword = /^(\w+)$/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			if (match[5]) {
				rgb[3] = parseFloat(match[4]) * 0.01;
			} else {
				rgb[3] = parseFloat(match[4]);
			}
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!hasOwnProperty.call(colorName$1, match[1])) {
			return null;
		}

		rgb = colorName$1[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = Math.round(num).toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */
/* eslint-disable no-mixed-operators */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(colorName)) {
	reverseKeywords[colorName[key]] = key;
}

const convert$1 = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

var conversions = convert$1;

// Hide .channels and .labels properties
for (const model of Object.keys(convert$1)) {
	if (!('channels' in convert$1[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert$1[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert$1[model].labels.length !== convert$1[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert$1[model];
	delete convert$1[model].channels;
	delete convert$1[model].labels;
	Object.defineProperty(convert$1[model], 'channels', {value: channels});
	Object.defineProperty(convert$1[model], 'labels', {value: labels});
}

convert$1.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert$1.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert$1.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert$1.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert$1.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert$1.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(colorName)) {
		const value = colorName[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert$1.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert$1.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert$1.rgb.lab = function (rgb) {
	const xyz = convert$1.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert$1.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert$1.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert$1.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert$1.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert$1.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert$1.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert$1.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert$1.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert$1.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert$1.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert$1.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};

convert$1.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert$1.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert$1.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert$1.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$1.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert$1.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert$1.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert$1.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert$1.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert$1.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert$1.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert$1.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert$1.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert$1.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert$1.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert$1.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert$1.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert$1.gray.hsv = convert$1.gray.hsl;

convert$1.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert$1.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert$1.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert$1.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert$1.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(colorConvert)) {
	hashedModelKeys[[...colorConvert[model].labels].sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = colorString.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const {labels} = colorConvert[this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to[self.model](args);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return colorString.to.rgb.percent(args);
	},

	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},

	object() {
		const result = {};
		const {channels} = colorConvert[this.model];
		const {labels} = colorConvert[this.model];

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},

	alpha(value) {
		if (value !== undefined) {
			return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(95.047)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(108.833)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	hexa(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return colorString.to.hex(rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		// https://www.w3.org/TR/WCAG/#contrast-enhanced
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(colorConvert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const {channels} = colorConvert[model];

	// Conversion methods
	Color.prototype[model] = function (...args) {
		if (this.model === model) {
			return new Color(this);
		}

		if (args.length > 0) {
			return new Color(args, model);
		}

		return new Color([...assertArray(colorConvert[this.model][model].raw(this.color)), this.valpha], model);
	};

	// 'static' construction methods
	Color[model] = function (...args) {
		let color = args[0];
		if (typeof color === 'number') {
			color = zeroArray(args, channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (value !== undefined) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

var color = Color;

const CSS$2 = {
  channel: "channel",
  channels: "channels",
  colorField: "color-field",
  colorFieldScope: "scope--color-field",
  colorMode: "color-mode",
  colorModeContainer: "color-mode-container",
  container: "container",
  control: "control",
  controlAndScope: "control-and-scope",
  controlSection: "control-section",
  deleteColor: "delete-color",
  header: "header",
  hexAndChannelsGroup: "hex-and-channels-group",
  hexOptions: "color-hex-options",
  hueScope: "scope--hue",
  hueSlider: "hue-slider",
  opacityScope: "scope--opacity",
  opacitySlider: "opacity-slider",
  preview: "preview",
  previewAndSliders: "preview-and-sliders",
  saveColor: "save-color",
  savedColor: "saved-color",
  savedColors: "saved-colors",
  savedColorsButtons: "saved-colors-buttons",
  savedColorsSection: "saved-colors-section",
  scope: "scope",
  section: "section",
  slider: "slider",
  sliders: "sliders",
  splitSection: "section--split"
};
const DEFAULT_COLOR$1 = color("#007AC2");
const DEFAULT_STORAGE_KEY_PREFIX = "calcite-color-";
const RGB_LIMITS = {
  r: 255,
  g: 255,
  b: 255
};
const HSV_LIMITS = {
  h: 360,
  s: 100,
  v: 100
};
const OPACITY_LIMITS = {
  min: 0,
  max: 100
};
const DIMENSIONS = {
  s: {
    slider: {
      height: 12,
      width: 104
    },
    colorField: {
      height: 80,
      width: 160
    },
    thumb: {
      radius: 10
    }
  },
  m: {
    slider: {
      height: 12,
      width: 204
    },
    colorField: {
      height: 150,
      width: 272
    },
    thumb: {
      radius: 10
    }
  },
  l: {
    slider: {
      height: 12,
      width: 384
    },
    colorField: {
      height: 200,
      width: 464
    },
    thumb: {
      radius: 10
    }
  }
};

const colorPickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-ui-foreground-1);display:inline-block;border:1px solid var(--calcite-ui-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.scope{position:absolute;z-index:var(--calcite-app-z-index);font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:16px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-ui-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index=\"3\"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index=\"3\"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index=\"3\"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}";

const throttleFor60FpsInMs = 16;
const ColorPicker = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteColorPickerChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteColorPickerChange", 6);
    this.calciteColorPickerInput = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteColorPickerInput", 6);
    this.internalColorUpdateContext = null;
    this.mode = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    this.shiftKeyChannelAdjustment = 0;
    this.handleTabActivate = (event) => {
      this.channelMode = event.currentTarget.getAttribute("data-color-mode");
      this.updateChannelsFromColor(this.color);
    };
    this.handleColorFieldScopeKeyDown = (event) => {
      const { key } = event;
      const arrowKeyToXYOffset = {
        ArrowUp: { x: 0, y: -10 },
        ArrowRight: { x: 10, y: 0 },
        ArrowDown: { x: 0, y: 10 },
        ArrowLeft: { x: -10, y: 0 }
      };
      if (arrowKeyToXYOffset[key]) {
        event.preventDefault();
        this.scopeOrientation = key === "ArrowDown" || key === "ArrowUp" ? "vertical" : "horizontal";
        this.captureColorFieldColor(this.colorFieldScopeLeft + arrowKeyToXYOffset[key].x || 0, this.colorFieldScopeTop + arrowKeyToXYOffset[key].y || 0, false);
      }
    };
    this.handleHueScopeKeyDown = (event) => {
      const modifier = event.shiftKey ? 10 : 1;
      const { key } = event;
      const arrowKeyToXOffset = {
        ArrowUp: 1,
        ArrowRight: 1,
        ArrowDown: -1,
        ArrowLeft: -1
      };
      if (arrowKeyToXOffset[key]) {
        event.preventDefault();
        const delta = arrowKeyToXOffset[key] * modifier;
        const hue = this.baseColorFieldColor.hue();
        const color = this.baseColorFieldColor.hue(hue + delta);
        this.internalColorSet(color, false);
      }
    };
    this.handleHexInputChange = (event) => {
      event.stopPropagation();
      const { allowEmpty, color: color$1 } = this;
      const input = event.target;
      const hex = input.value;
      if (allowEmpty && !hex) {
        this.internalColorSet(null);
        return;
      }
      const normalizedHex = color$1 && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(color$1, Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.mode)));
      if (hex !== normalizedHex) {
        this.internalColorSet(color(hex));
      }
    };
    this.handleSavedColorSelect = (event) => {
      const swatch = event.currentTarget;
      this.internalColorSet(color(swatch.color));
    };
    this.handleChannelInput = (event) => {
      const input = event.currentTarget;
      const channelIndex = Number(input.getAttribute("data-channel-index"));
      const isAlphaChannel = channelIndex === 3;
      const limit = isAlphaChannel
        ? OPACITY_LIMITS.max
        : this.channelMode === "rgb"
          ? RGB_LIMITS[Object.keys(RGB_LIMITS)[channelIndex]]
          : HSV_LIMITS[Object.keys(HSV_LIMITS)[channelIndex]];
      let inputValue;
      if (this.allowEmpty && !input.value) {
        inputValue = "";
      }
      else {
        const value = Number(input.value);
        const adjustedValue = value + this.shiftKeyChannelAdjustment;
        const clamped = (0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_7__.c)(adjustedValue, 0, limit);
        inputValue = clamped.toString();
      }
      input.value = inputValue;
      // TODO: refactor calcite-input so we don't need to sync the internals
      // https://github.com/Esri/calcite-components/issues/6100
      input.internalSyncChildElValue();
    };
    this.handleChannelChange = (event) => {
      const input = event.currentTarget;
      const channelIndex = Number(input.getAttribute("data-channel-index"));
      const channels = [...this.channels];
      const shouldClearChannels = this.allowEmpty && !input.value;
      if (shouldClearChannels) {
        this.channels = [null, null, null, null];
        this.internalColorSet(null);
        return;
      }
      const isAlphaChannel = channelIndex === 3;
      const value = Number(input.value);
      channels[channelIndex] = isAlphaChannel ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value) : value;
      this.updateColorFromChannels(channels);
    };
    this.handleSavedColorKeyDown = (event) => {
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.i)(event.key)) {
        event.preventDefault();
        this.handleSavedColorSelect(event);
      }
    };
    this.handleColorFieldPointerDown = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const { offsetX, offsetY } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.colorFieldRenderingContext,
        bounds: this.colorFieldRenderingContext.canvas.getBoundingClientRect()
      };
      this.captureColorFieldColor(offsetX, offsetY);
      this.colorFieldScopeNode.focus();
    };
    this.handleHueSliderPointerDown = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const { offsetX } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.hueSliderRenderingContext,
        bounds: this.hueSliderRenderingContext.canvas.getBoundingClientRect()
      };
      this.captureHueSliderColor(offsetX);
      this.hueScopeNode.focus();
    };
    this.handleOpacitySliderPointerDown = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const { offsetX } = event;
      document.addEventListener("pointermove", this.globalPointerMoveHandler);
      document.addEventListener("pointerup", this.globalPointerUpHandler, { once: true });
      this.activeCanvasInfo = {
        context: this.opacitySliderRenderingContext,
        bounds: this.opacitySliderRenderingContext.canvas.getBoundingClientRect()
      };
      this.captureOpacitySliderValue(offsetX);
      this.opacityScopeNode.focus();
    };
    this.globalPointerUpHandler = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const previouslyDragging = this.activeCanvasInfo;
      this.activeCanvasInfo = null;
      this.drawColorControls();
      if (previouslyDragging) {
        this.calciteColorPickerChange.emit();
      }
    };
    this.globalPointerMoveHandler = (event) => {
      const { activeCanvasInfo, el } = this;
      if (!el.isConnected || !activeCanvasInfo) {
        return;
      }
      const { context, bounds } = activeCanvasInfo;
      let samplingX;
      let samplingY;
      const { clientX, clientY } = event;
      if (context.canvas.matches(":hover")) {
        samplingX = clientX - bounds.x;
        samplingY = clientY - bounds.y;
      }
      else {
        // snap x and y to the closest edge
        if (clientX < bounds.x + bounds.width && clientX > bounds.x) {
          samplingX = clientX - bounds.x;
        }
        else if (clientX < bounds.x) {
          samplingX = 0;
        }
        else {
          samplingX = bounds.width - 1;
        }
        if (clientY < bounds.y + bounds.height && clientY > bounds.y) {
          samplingY = clientY - bounds.y;
        }
        else if (clientY < bounds.y) {
          samplingY = 0;
        }
        else {
          samplingY = bounds.height;
        }
      }
      if (context === this.colorFieldRenderingContext) {
        this.captureColorFieldColor(samplingX, samplingY, false);
      }
      else if (context === this.hueSliderRenderingContext) {
        this.captureHueSliderColor(samplingX);
      }
      else if (context === this.opacitySliderRenderingContext) {
        this.captureOpacitySliderValue(samplingX);
      }
    };
    this.storeColorFieldScope = (node) => {
      this.colorFieldScopeNode = node;
    };
    this.storeHueScope = (node) => {
      this.hueScopeNode = node;
    };
    this.renderChannelsTabTitle = (channelMode) => {
      const { channelMode: activeChannelMode, messages } = this;
      const selected = channelMode === activeChannelMode;
      const label = channelMode === "rgb" ? messages.rgb : messages.hsv;
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tab-title", { class: CSS$2.colorMode, "data-color-mode": channelMode, key: channelMode, onCalciteTabsActivate: this.handleTabActivate, selected: selected }, label));
    };
    this.renderChannelsTab = (channelMode) => {
      const { allowEmpty, channelMode: activeChannelMode, channels, messages, alphaChannel } = this;
      const selected = channelMode === activeChannelMode;
      const isRgb = channelMode === "rgb";
      const channelAriaLabels = isRgb
        ? [messages.red, messages.green, messages.blue]
        : [messages.hue, messages.saturation, messages.value];
      const direction = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
      const channelsToRender = alphaChannel ? channels : channels.slice(0, 3);
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tab", { class: CSS$2.control, key: channelMode, selected: selected }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.channels, dir: "ltr" }, channelsToRender.map((channelValue, index) => {
        const isAlphaChannel = index === 3;
        if (isAlphaChannel) {
          channelValue =
            allowEmpty && !channelValue ? channelValue : Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(channelValue);
        }
        /* the channel container is ltr, so we apply the host's direction */
        return this.renderChannel(channelValue, index, channelAriaLabels[index], direction, isAlphaChannel ? "%" : "");
      }))));
    };
    this.renderChannel = (value, index, ariaLabel, direction, suffix) => {
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { class: CSS$2.channel, "data-channel-index": index, dir: direction, key: index, label: ariaLabel, lang: this.effectiveLocale, numberButtonType: "none", numberingSystem: this.numberingSystem, onCalciteInputChange: this.handleChannelChange, onCalciteInputInput: this.handleChannelInput, onKeyDown: this.handleKeyDown, scale: this.scale === "l" ? "m" : "s",
        // workaround to ensure input borders overlap as desired
        // this is because the build transforms margin-left to its
        // logical-prop, which is undesired as channels are always ltr
        style: {
          marginLeft: index > 0 && !(this.scale === "s" && this.alphaChannel && index === 3) ? "-1px" : ""
        }, suffixText: suffix, type: "number", value: value?.toString() }));
    };
    this.deleteColor = () => {
      const colorToDelete = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.color, this.alphaChannel);
      const inStorage = this.savedColors.indexOf(colorToDelete) > -1;
      if (!inStorage) {
        return;
      }
      const savedColors = this.savedColors.filter((color) => color !== colorToDelete);
      this.savedColors = savedColors;
      const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.saveColor = () => {
      const colorToSave = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.color, this.alphaChannel);
      const alreadySaved = this.savedColors.indexOf(colorToSave) > -1;
      if (alreadySaved) {
        return;
      }
      const savedColors = [...this.savedColors, colorToSave];
      this.savedColors = savedColors;
      const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.drawColorControls = (0,_throttle_b7008174_js__WEBPACK_IMPORTED_MODULE_8__.t)((type = "all") => {
      if ((type === "all" || type === "color-field") && this.colorFieldRenderingContext) {
        this.drawColorField();
      }
      if ((type === "all" || type === "hue-slider") && this.hueSliderRenderingContext) {
        this.drawHueSlider();
      }
      if (this.alphaChannel &&
        (type === "all" || type === "opacity-slider") &&
        this.opacitySliderRenderingContext) {
        this.drawOpacitySlider();
      }
    }, throttleFor60FpsInMs);
    this.captureColorFieldColor = (x, y, skipEqual = true) => {
      const { dimensions: { colorField: { height, width } } } = this;
      const saturation = Math.round((HSV_LIMITS.s / width) * x);
      const value = Math.round((HSV_LIMITS.v / height) * (height - y));
      this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(saturation).value(value), skipEqual);
    };
    this.initColorField = (canvas) => {
      this.colorFieldRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("color-field");
      this.drawColorControls();
    };
    this.initHueSlider = (canvas) => {
      this.hueSliderRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("hue-slider");
      this.drawHueSlider();
    };
    this.initOpacitySlider = (canvas) => {
      this.opacitySliderRenderingContext = canvas.getContext("2d");
      this.updateCanvasSize("opacity-slider");
      this.drawOpacitySlider();
    };
    this.storeOpacityScope = (node) => {
      this.opacityScopeNode = node;
    };
    this.handleOpacityScopeKeyDown = (event) => {
      const modifier = event.shiftKey ? 10 : 1;
      const { key } = event;
      const arrowKeyToXOffset = {
        ArrowUp: 1,
        ArrowRight: 1,
        ArrowDown: -1,
        ArrowLeft: -1
      };
      if (arrowKeyToXOffset[key]) {
        event.preventDefault();
        const delta = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arrowKeyToXOffset[key] * modifier);
        this.captureHueSliderColor(this.opacityScopeLeft + delta);
      }
    };
    this.allowEmpty = false;
    this.alphaChannel = false;
    this.channelsDisabled = false;
    this.color = DEFAULT_COLOR$1;
    this.disabled = false;
    this.format = "auto";
    this.hideChannels = false;
    this.hexDisabled = false;
    this.hideHex = false;
    this.hideSaved = false;
    this.savedDisabled = false;
    this.scale = "m";
    this.storageId = undefined;
    this.messageOverrides = undefined;
    this.numberingSystem = undefined;
    this.value = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(DEFAULT_COLOR$1, this.alphaChannel));
    this.defaultMessages = undefined;
    this.channelMode = "rgb";
    this.channels = this.toChannels(DEFAULT_COLOR$1);
    this.dimensions = DIMENSIONS.m;
    this.effectiveLocale = "";
    this.messages = undefined;
    this.savedColors = [];
    this.colorFieldScopeTop = undefined;
    this.colorFieldScopeLeft = undefined;
    this.hueScopeLeft = undefined;
    this.opacityScopeLeft = undefined;
    this.scopeOrientation = undefined;
  }
  handleAlphaChannelChange(alphaChannel) {
    const { format } = this;
    if (alphaChannel && format !== "auto" && !Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(format)) {
      console.warn(`ignoring alphaChannel as the current format (${format}) does not support alpha`);
      this.alphaChannel = false;
    }
  }
  handleColorChange(color, oldColor) {
    this.drawColorControls();
    this.updateChannelsFromColor(color);
    this.previousColor = oldColor;
  }
  handleFormatChange(format) {
    this.setMode(format);
    this.internalColorSet(this.color, false, "internal");
  }
  handleScaleChange(scale = "m") {
    this.updateDimensions(scale);
    this.updateCanvasSize("all");
    this.drawColorControls();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleValueChange(value, oldValue) {
    const { allowEmpty, format } = this;
    const checkMode = !allowEmpty || value;
    let modeChanged = false;
    if (checkMode) {
      const nextMode = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
      if (!nextMode || (format !== "auto" && nextMode !== format)) {
        this.showIncompatibleColorWarning(value, format);
        this.value = oldValue;
        return;
      }
      modeChanged = this.mode !== nextMode;
      this.setMode(nextMode, this.internalColorUpdateContext === null);
    }
    const dragging = this.activeCanvasInfo;
    if (this.internalColorUpdateContext === "initial") {
      return;
    }
    if (this.internalColorUpdateContext === "user-interaction") {
      this.calciteColorPickerInput.emit();
      if (!dragging) {
        this.calciteColorPickerChange.emit();
      }
      return;
    }
    const color$1 = allowEmpty && !value
      ? null
      : color(value != null && typeof value === "object" && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.mode)
        ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)
        : value);
    const colorChanged = !Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(color$1, this.color);
    if (modeChanged || colorChanged) {
      this.internalColorSet(color$1, this.alphaChannel && !(this.mode.endsWith("a") || this.mode.endsWith("a-css")), "internal");
    }
  }
  get baseColorFieldColor() {
    return this.color || this.previousColor || DEFAULT_COLOR$1;
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  // using @Listen as a workaround for VDOM listener not firing
  handleChannelKeyUpOrDown(event) {
    this.shiftKeyChannelAdjustment = 0;
    const { key } = event;
    if ((key !== "ArrowUp" && key !== "ArrowDown") ||
      !event.composedPath().some((node) => node.classList?.contains(CSS$2.channel))) {
      return;
    }
    const { shiftKey } = event;
    event.preventDefault();
    if (!this.color) {
      this.internalColorSet(this.previousColor);
      event.stopPropagation();
      return;
    }
    // this gets applied to the input's up/down arrow increment/decrement
    const complementaryBump = 9;
    this.shiftKeyChannelAdjustment =
      key === "ArrowUp" && shiftKey
        ? complementaryBump
        : key === "ArrowDown" && shiftKey
          ? -complementaryBump
          : 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    const { allowEmpty, color: color$1, format, value } = this;
    const willSetNoColor = allowEmpty && !value;
    const parsedMode = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
    const valueIsCompatible = willSetNoColor || (format === "auto" && parsedMode) || format === parsedMode;
    const initialColor = willSetNoColor ? null : valueIsCompatible ? color(value) : color$1;
    if (!valueIsCompatible) {
      this.showIncompatibleColorWarning(value, format);
    }
    this.setMode(format, false);
    this.internalColorSet(initialColor, false, "initial");
    this.updateDimensions(this.scale);
    const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
    if (this.storageId && localStorage.getItem(storageKey)) {
      this.savedColors = JSON.parse(localStorage.getItem(storageKey));
    }
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  disconnectedCallback() {
    document.removeEventListener("pointermove", this.globalPointerMoveHandler);
    document.removeEventListener("pointerup", this.globalPointerUpHandler);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const { allowEmpty, channelsDisabled, color, colorFieldScopeLeft, colorFieldScopeTop, dimensions: { colorField: { width: colorFieldWidth }, slider: { width: sliderWidth }, thumb: { radius: thumbRadius } }, hexDisabled, hideChannels, hideHex, hideSaved, hueScopeLeft, messages, alphaChannel, opacityScopeLeft, savedColors, savedDisabled, scale, scopeOrientation } = this;
    const selectedColorInHex = color ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(color, alphaChannel) : null;
    const hueTop = thumbRadius;
    const hueLeft = hueScopeLeft ?? (sliderWidth * DEFAULT_COLOR$1.hue()) / HSV_LIMITS.h;
    const opacityTop = thumbRadius;
    const opacityLeft = opacityScopeLeft ??
      (colorFieldWidth * Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(DEFAULT_COLOR$1.alpha())) / OPACITY_LIMITS.max;
    const noColor = color === null;
    const vertical = scopeOrientation === "vertical";
    const noHex = hexDisabled || hideHex;
    const noChannels = channelsDisabled || hideChannels;
    const noSaved = savedDisabled || hideSaved;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.container }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.controlAndScope }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("canvas", { class: CSS$2.colorField, onPointerDown: this.handleColorFieldPointerDown,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.initColorField }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": vertical ? messages.value : messages.saturation, "aria-valuemax": vertical ? HSV_LIMITS.v : HSV_LIMITS.s, "aria-valuemin": "0", "aria-valuenow": (vertical ? color?.saturationv() : color?.value()) || "0", class: { [CSS$2.scope]: true, [CSS$2.colorFieldScope]: true }, onKeyDown: this.handleColorFieldScopeKeyDown, role: "slider", style: { top: `${colorFieldScopeTop || 0}px`, left: `${colorFieldScopeLeft || 0}px` }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeColorFieldScope })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.previewAndSliders }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-color-picker-swatch", { class: CSS$2.preview, color: selectedColorInHex, scale: "l" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.sliders }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.controlAndScope }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("canvas", { class: { [CSS$2.slider]: true, [CSS$2.hueSlider]: true }, onPointerDown: this.handleHueSliderPointerDown,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.initHueSlider }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": messages.hue, "aria-valuemax": HSV_LIMITS.h, "aria-valuemin": "0", "aria-valuenow": color?.round().hue() || DEFAULT_COLOR$1.round().hue(), class: { [CSS$2.scope]: true, [CSS$2.hueScope]: true }, onKeyDown: this.handleHueScopeKeyDown, role: "slider", style: { top: `${hueTop}px`, left: `${hueLeft}px` }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeHueScope })), alphaChannel ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.controlAndScope }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("canvas", { class: { [CSS$2.slider]: true, [CSS$2.opacitySlider]: true }, onPointerDown: this.handleOpacitySliderPointerDown,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.initOpacitySlider }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": messages.opacity, "aria-valuemax": OPACITY_LIMITS.max, "aria-valuemin": OPACITY_LIMITS.min, "aria-valuenow": (color || DEFAULT_COLOR$1).round().alpha(), class: { [CSS$2.scope]: true, [CSS$2.opacityScope]: true }, onKeyDown: this.handleOpacityScopeKeyDown, role: "slider", style: { top: `${opacityTop}px`, left: `${opacityLeft}px` }, tabindex: "0",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeOpacityScope }))) : null)), noHex && noChannels ? null : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS$2.controlSection]: true,
        [CSS$2.section]: true
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.hexAndChannelsGroup }, noHex ? null : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.hexOptions }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-color-picker-hex-input", { allowEmpty: allowEmpty, alphaChannel: alphaChannel, class: CSS$2.control, messages: messages, numberingSystem: this.numberingSystem, onCalciteColorPickerHexInputChange: this.handleHexInputChange, scale: scale, value: selectedColorInHex }))), noChannels ? null : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tabs", { class: {
        [CSS$2.colorModeContainer]: true,
        [CSS$2.splitSection]: true
      }, scale: scale === "l" ? "m" : "s" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-tab-nav", { slot: "title-group" }, this.renderChannelsTabTitle("rgb"), this.renderChannelsTabTitle("hsv")), this.renderChannelsTab("rgb"), this.renderChannelsTab("hsv")))))), noSaved ? null : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS$2.savedColorsSection]: true, [CSS$2.section]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.header }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, messages.saved), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.savedColorsButtons }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-button", { appearance: "transparent", class: CSS$2.deleteColor, disabled: noColor, iconStart: "minus", kind: "neutral", label: messages.deleteColor, onClick: this.deleteColor, scale: scale, type: "button" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-button", { appearance: "transparent", class: CSS$2.saveColor, disabled: noColor, iconStart: "plus", kind: "neutral", label: messages.saveColor, onClick: this.saveColor, scale: scale, type: "button" }))), savedColors.length > 0 ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.savedColors }, [
      ...savedColors.map((color) => ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-color-picker-swatch", { class: CSS$2.savedColor, color: color, key: color, onClick: this.handleSavedColorSelect, onKeyDown: this.handleSavedColorKeyDown, scale: scale, tabIndex: 0 })))
    ])) : null))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  showIncompatibleColorWarning(value, format) {
    console.warn(`ignoring color value (${value}) as it is not compatible with the current format (${format})`);
  }
  setMode(format, warn = true) {
    const mode = format === "auto" ? this.mode : format;
    this.mode = this.ensureCompatibleMode(mode, warn);
  }
  ensureCompatibleMode(mode, warn) {
    const { alphaChannel } = this;
    const isAlphaCompatible = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(mode);
    if (alphaChannel && !isAlphaCompatible) {
      const alphaMode = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(mode);
      if (warn) {
        console.warn(`setting format to (${alphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return alphaMode;
    }
    if (!alphaChannel && isAlphaCompatible) {
      const nonAlphaMode = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(mode);
      if (warn) {
        console.warn(`setting format to (${nonAlphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return nonAlphaMode;
    }
    return mode;
  }
  captureHueSliderColor(x) {
    const { dimensions: { slider: { width } } } = this;
    const hue = (360 / width) * x;
    this.internalColorSet(this.baseColorFieldColor.hue(hue), false);
  }
  captureOpacitySliderValue(x) {
    const { dimensions: { slider: { width } } } = this;
    const alpha = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((OPACITY_LIMITS.max / width) * x);
    this.internalColorSet(this.baseColorFieldColor.alpha(alpha), false);
  }
  internalColorSet(color, skipEqual = true, context = "user-interaction") {
    if (skipEqual && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(color, this.color)) {
      return;
    }
    this.internalColorUpdateContext = context;
    this.color = color;
    this.value = this.toValue(color);
    this.internalColorUpdateContext = null;
  }
  toValue(color, format = this.mode) {
    if (!color) {
      return null;
    }
    const hexMode = "hex";
    if (format.includes(hexMode)) {
      const hasAlpha = format === Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(color.round(), hasAlpha), hasAlpha);
    }
    if (format.includes("-css")) {
      const value = color[format.replace("-css", "").replace("a", "")]().round().string();
      // Color omits alpha values when alpha is 1
      const needToInjectAlpha = (format.endsWith("a") || format.endsWith("a-css")) && color.alpha() === 1;
      if (needToInjectAlpha) {
        const model = value.slice(0, 3);
        const values = value.slice(4, -1);
        return `${model}a(${values}, ${color.alpha()})`;
      }
      return value;
    }
    const colorObject = 
    /* Color() does not support hsva, hsla nor rgba, so we use the non-alpha mode */
    color[Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(format)]().round().object();
    if (format.endsWith("a")) {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colorObject);
    }
    return colorObject;
  }
  getSliderCapSpacing() {
    const { dimensions: { slider: { height }, thumb: { radius } } } = this;
    return radius * 2 - height;
  }
  updateDimensions(scale = "m") {
    this.dimensions = DIMENSIONS[scale];
  }
  drawColorField() {
    const context = this.colorFieldRenderingContext;
    const { dimensions: { colorField: { height, width } } } = this;
    context.fillStyle = this.baseColorFieldColor
      .hsv()
      .saturationv(100)
      .value(100)
      .alpha(1)
      .string();
    context.fillRect(0, 0, width, height);
    const whiteGradient = context.createLinearGradient(0, 0, width, 0);
    whiteGradient.addColorStop(0, "rgba(255,255,255,1)");
    whiteGradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = whiteGradient;
    context.fillRect(0, 0, width, height);
    const blackGradient = context.createLinearGradient(0, 0, 0, height);
    blackGradient.addColorStop(0, "rgba(0,0,0,0)");
    blackGradient.addColorStop(1, "rgba(0,0,0,1)");
    context.fillStyle = blackGradient;
    context.fillRect(0, 0, width, height);
    this.drawActiveColorFieldColor();
  }
  setCanvasContextSize(canvas, { height, width }) {
    if (!canvas) {
      return;
    }
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    const context = canvas.getContext("2d");
    context.scale(devicePixelRatio, devicePixelRatio);
  }
  updateCanvasSize(context = "all") {
    const { dimensions } = this;
    if (context === "all" || context === "color-field") {
      this.setCanvasContextSize(this.colorFieldRenderingContext?.canvas, dimensions.colorField);
    }
    const adjustedSliderDimensions = {
      width: dimensions.slider.width,
      height: dimensions.slider.height + (dimensions.thumb.radius - dimensions.slider.height / 2) * 2
    };
    if (context === "all" || context === "hue-slider") {
      this.setCanvasContextSize(this.hueSliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
    if (context === "all" || context === "opacity-slider") {
      this.setCanvasContextSize(this.opacitySliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
  }
  drawActiveColorFieldColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv();
    const { dimensions: { colorField: { height, width }, thumb: { radius } } } = this;
    const x = hsvColor.saturationv() / (HSV_LIMITS.s / width);
    const y = height - hsvColor.value() / (HSV_LIMITS.v / height);
    requestAnimationFrame(() => {
      this.colorFieldScopeLeft = x;
      this.colorFieldScopeTop = y;
    });
    this.drawThumb(this.colorFieldRenderingContext, radius, x, y, hsvColor);
  }
  drawThumb(context, radius, x, y, color) {
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const outlineWidth = 1;
    radius = radius - outlineWidth;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fillStyle = "#fff";
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = outlineWidth;
    context.stroke();
    context.beginPath();
    context.arc(x, y, radius - 3, startAngle, endAngle);
    context.fillStyle = color.rgb().alpha(1).string();
    context.fill();
  }
  drawActiveHueSliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv().saturationv(100).value(100);
    const { dimensions: { slider: { height, width }, thumb: { radius } } } = this;
    const x = hsvColor.hue() / (360 / width);
    const y = radius - height / 2 + height / 2;
    requestAnimationFrame(() => {
      this.hueScopeLeft = x;
    });
    this.drawThumb(this.hueSliderRenderingContext, radius, x, y, hsvColor);
  }
  drawHueSlider() {
    const context = this.hueSliderRenderingContext;
    const { dimensions: { slider: { height, width }, thumb: { radius: thumbRadius } } } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    const gradient = context.createLinearGradient(0, 0, width, 0);
    const hueSliderColorStopKeywords = ["red", "yellow", "lime", "cyan", "blue", "magenta", "red"];
    const offset = 1 / (hueSliderColorStopKeywords.length - 1);
    let currentOffset = 0;
    hueSliderColorStopKeywords.forEach((keyword) => {
      gradient.addColorStop(currentOffset, color(keyword).string());
      currentOffset += offset;
    });
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    this.drawSliderPath(context, height, width, x, y);
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveHueSliderColor();
  }
  drawOpacitySlider() {
    const context = this.opacitySliderRenderingContext;
    const { baseColorFieldColor: previousColor, dimensions: { slider: { height, width }, thumb: { radius: thumbRadius } } } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    const gradient = context.createLinearGradient(0, y, width, 0);
    const startColor = previousColor.rgb().alpha(0);
    const midColor = previousColor.rgb().alpha(0.5);
    const endColor = previousColor.rgb().alpha(1);
    gradient.addColorStop(0, startColor.string());
    gradient.addColorStop(0.5, midColor.string());
    gradient.addColorStop(1, endColor.string());
    this.drawSliderPath(context, height, width, x, y);
    const pattern = context.createPattern(this.getCheckeredBackgroundPattern(), "repeat");
    context.fillStyle = pattern;
    context.fill();
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveOpacitySliderColor();
  }
  drawSliderPath(context, height, width, x, y) {
    const radius = height / 2 + 1;
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }
  getCheckeredBackgroundPattern() {
    if (this.checkerPattern) {
      return this.checkerPattern;
    }
    const pattern = document.createElement("canvas");
    pattern.width = 10;
    pattern.height = 10;
    const patternContext = pattern.getContext("2d");
    patternContext.fillStyle = "#ccc";
    patternContext.fillRect(0, 0, 10, 10);
    patternContext.fillStyle = "#fff";
    patternContext.fillRect(0, 0, 5, 5);
    patternContext.fillRect(5, 5, 5, 5);
    this.checkerPattern = pattern;
    return pattern;
  }
  drawActiveOpacitySliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color;
    const { dimensions: { slider: { width }, thumb: { radius } } } = this;
    const x = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hsvColor.alpha()) / (OPACITY_LIMITS.max / width);
    const y = radius;
    requestAnimationFrame(() => {
      this.opacityScopeLeft = x;
    });
    this.drawThumb(this.opacitySliderRenderingContext, radius, x, y, hsvColor);
  }
  updateColorFromChannels(channels) {
    this.internalColorSet(color(channels, this.channelMode));
  }
  updateChannelsFromColor(color) {
    this.channels = color ? this.toChannels(color) : [null, null, null, null];
  }
  toChannels(color) {
    const { channelMode } = this;
    const channels = color[channelMode]()
      .array()
      .map((value, index) => {
      const isAlpha = index === 3;
      return isAlpha ? value : Math.floor(value);
    });
    if (channels.length === 3) {
      channels.push(1); // Color omits alpha when 1
    }
    return channels;
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "alphaChannel": ["handleAlphaChannelChange"],
    "color": ["handleColorChange"],
    "format": ["handleFormatChange"],
    "scale": ["handleScaleChange"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["handleValueChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ColorPicker.style = colorPickerCss;

const CSS$1 = {
  container: "container",
  hexInput: "hex-input",
  opacityInput: "opacity-input"
};

const colorPickerHexInputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}";

const DEFAULT_COLOR = color();
const ColorPickerHexInput = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteColorPickerHexInputChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteColorPickerHexInputChange", 6);
    this.onHexInputBlur = () => {
      const node = this.hexInputNode;
      const inputValue = node.value;
      const hex = `#${inputValue}`;
      const { allowEmpty, internalColor } = this;
      const willClearValue = allowEmpty && !inputValue;
      const isLonghand = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hex);
      // ensure modified pasted hex values are committed since we prevent default to remove the # char.
      this.onHexInputChange();
      if (willClearValue || (Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hex) && isLonghand)) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        allowEmpty && !internalColor
          ? ""
          : this.formatHexForInternalInput(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
          // always display hex input in RRGGBB format
          internalColor.object()));
    };
    this.onOpacityInputBlur = () => {
      const node = this.opacityInputNode;
      const inputValue = node.value;
      const { allowEmpty, internalColor } = this;
      const willClearValue = allowEmpty && !inputValue;
      if (willClearValue) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        allowEmpty && !internalColor ? "" : this.formatOpacityForInternalInput(internalColor);
    };
    this.onHexInputChange = () => {
      const nodeValue = this.hexInputNode.value;
      let value = nodeValue;
      if (value) {
        const normalized = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value, false);
        const preserveExistingAlpha = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(normalized) && this.alphaChannel;
        if (preserveExistingAlpha && this.internalColor) {
          const alphaHex = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.internalColor.hexa(), true).slice(-2);
          value = `${normalized + alphaHex}`;
        }
      }
      this.internalSetValue(value, this.value);
    };
    this.onOpacityInputChange = () => {
      const node = this.opacityInputNode;
      let value;
      if (!node.value) {
        value = node.value;
      }
      else {
        const alpha = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Number(node.value));
        value = this.internalColor?.alpha(alpha).hexa();
      }
      this.internalSetValue(value, this.value);
    };
    this.onInputKeyDown = (event) => {
      const { altKey, ctrlKey, metaKey, shiftKey } = event;
      const { alphaChannel, hexInputNode, internalColor, value } = this;
      const { key } = event;
      const composedPath = event.composedPath();
      if (key === "Tab" || key === "Enter") {
        if (composedPath.includes(hexInputNode)) {
          this.onHexInputChange();
        }
        else {
          this.onOpacityInputChange();
        }
        if (key === "Enter") {
          event.preventDefault();
        }
        return;
      }
      const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
      const oldValue = this.value;
      if (isNudgeKey) {
        if (!value) {
          this.internalSetValue(this.previousNonNullValue, oldValue);
          event.preventDefault();
          return;
        }
        const direction = key === "ArrowUp" ? 1 : -1;
        const bump = shiftKey ? 10 : 1;
        this.internalSetValue(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.nudgeRGBChannels(internalColor, bump * direction, composedPath.includes(hexInputNode) ? "rgb" : "a"), alphaChannel), oldValue);
        event.preventDefault();
        return;
      }
      const withModifiers = altKey || ctrlKey || metaKey;
      const singleChar = key.length === 1;
      const validHexChar = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(key);
      if (singleChar && !withModifiers && !validHexChar) {
        event.preventDefault();
      }
    };
    this.onHexInputPaste = (event) => {
      const hex = event.clipboardData.getData("text");
      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hex)) {
        event.preventDefault();
        this.hexInputNode.value = hex.slice(1);
        this.hexInputNode.internalSyncChildElValue();
      }
    };
    this.previousNonNullValue = this.value;
    this.storeHexInputRef = (node) => {
      this.hexInputNode = node;
    };
    this.storeOpacityInputRef = (node) => {
      this.opacityInputNode = node;
    };
    this.allowEmpty = false;
    this.alphaChannel = false;
    this.hexLabel = "Hex";
    this.messages = undefined;
    this.numberingSystem = undefined;
    this.scale = "m";
    this.value = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(DEFAULT_COLOR, this.alphaChannel), this.alphaChannel, true);
    this.internalColor = DEFAULT_COLOR;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { allowEmpty, alphaChannel, value } = this;
    if (value) {
      const normalized = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value, alphaChannel);
      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(normalized, alphaChannel)) {
        this.internalSetValue(normalized, normalized, false);
      }
      return;
    }
    if (allowEmpty) {
      this.internalSetValue(null, null, false);
    }
  }
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  handleValueChange(value, oldValue) {
    this.internalSetValue(value, oldValue, false);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { alphaChannel, hexLabel, internalColor, messages, scale, value } = this;
    const hexInputValue = this.formatHexForInternalInput(value);
    const opacityInputValue = this.formatOpacityForInternalInput(internalColor);
    const inputScale = scale === "l" ? "m" : "s";
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$1.container }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { class: CSS$1.hexInput, label: messages?.hex || hexLabel, maxLength: 6, numberingSystem: this.numberingSystem, onCalciteInputChange: this.onHexInputChange, onCalciteInternalInputBlur: this.onHexInputBlur, onKeyDown: this.onInputKeyDown, onPaste: this.onHexInputPaste, prefixText: "#", scale: inputScale, value: hexInputValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeHexInputRef }), alphaChannel ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input-number", { class: CSS$1.opacityInput, key: "opacity-input", label: messages?.opacity, max: OPACITY_LIMITS.max, maxLength: 3, min: OPACITY_LIMITS.min, numberButtonType: "none", numberingSystem: this.numberingSystem, onCalciteInputNumberChange: this.onOpacityInputChange, onCalciteInternalInputNumberBlur: this.onOpacityInputBlur, onKeyDown: this.onInputKeyDown, scale: inputScale, suffixText: "%", value: opacityInputValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeOpacityInputRef })) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.hexInputNode);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  internalSetValue(value, oldValue, emit = true) {
    if (value) {
      const { alphaChannel } = this;
      const normalized = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value, alphaChannel, alphaChannel);
      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(normalized, alphaChannel)) {
        const { internalColor: currentColor } = this;
        const nextColor = color(normalized);
        const normalizedLonghand = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nextColor, alphaChannel), alphaChannel);
        const changed = !currentColor ||
          normalizedLonghand !== Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(currentColor, alphaChannel), alphaChannel);
        this.internalColor = nextColor;
        this.previousNonNullValue = normalizedLonghand;
        this.value = normalizedLonghand;
        if (changed && emit) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    }
    else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;
      if (emit) {
        this.calciteColorPickerHexInputChange.emit();
      }
      return;
    }
    this.value = oldValue;
  }
  formatHexForInternalInput(hex) {
    return hex ? hex.replace("#", "").slice(0, 6) : "";
  }
  formatOpacityForInternalInput(color) {
    return color ? `${Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(color.alpha())}` : "";
  }
  nudgeRGBChannels(color$1, amount, context) {
    let nudgedChannels;
    const channels = color$1.array();
    const rgbChannels = channels.slice(0, 3);
    if (context === "rgb") {
      const nudgedRGBChannels = rgbChannels.map((channel) => channel + amount);
      nudgedChannels = [
        ...nudgedRGBChannels,
        this.alphaChannel ? channels[3] : undefined
      ];
    }
    else {
      const nudgedAlpha = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(color$1.alpha()) + amount);
      nudgedChannels = [...rgbChannels, nudgedAlpha];
    }
    return color(nudgedChannels);
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "value": ["handleValueChange"]
  }; }
};
ColorPickerHexInput.style = colorPickerHexInputCss;

const CSS = {
  swatch: "swatch",
  noColorSwatch: "swatch--no-color",
  checker: "checker"
};
const COLORS = {
  borderLight: "rgba(0, 0, 0, 0.3)",
  borderDark: "rgba(255, 255, 255, 0.15)"
};
const checkerSquareSize = 4;
const CHECKER_DIMENSIONS = {
  squareSize: checkerSquareSize,
  size: checkerSquareSize * 2
};

const colorPickerSwatchCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-ui-foreground-1)}.swatch--no-color line{stroke:var(--calcite-ui-danger)}.checker{fill:#cacaca}";

const ColorPickerSwatch = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.active = false;
    this.color = undefined;
    this.scale = "m";
  }
  handleColorChange(color$1) {
    this.internalColor = color$1 ? color(color$1) : null;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.handleColorChange(this.color);
  }
  render() {
    const isEmpty = !this.internalColor;
    const classes = {
      [CSS.swatch]: true,
      [CSS.noColorSwatch]: isEmpty
    };
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: classes, xmlns: "http://www.w3.org/2000/svg" }, this.renderSwatch()));
  }
  renderSwatch() {
    const { active, el, internalColor } = this;
    const borderRadius = active ? "100%" : "0";
    const theme = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.h)(el);
    const borderColor = theme === "light" ? COLORS.borderLight : COLORS.borderDark;
    const commonSwatchProps = {
      height: "100%",
      rx: borderRadius,
      stroke: borderColor,
      // stroke-width and clip-path are needed to hide overflowing portion of stroke
      // see https://stackoverflow.com/a/7273346/194216
      // using attribute to work around Stencil using the prop name vs the attribute when rendering
      ["stroke-width"]: "2",
      width: "100%"
    };
    const isEmpty = !internalColor;
    if (isEmpty) {
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("clipPath", { id: "shape" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { height: "100%", rx: borderRadius, width: "100%" })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { "clip-path": `inset(0 round ${borderRadius})`, rx: borderRadius, ...commonSwatchProps }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("line", { "clip-path": "url(#shape)", "stroke-width": "3", x1: "100%", x2: "0", y1: "0", y2: "100%" })));
    }
    const alpha = internalColor.alpha();
    const hex = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(internalColor);
    const hexa = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(internalColor, alpha < 1);
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, hexa), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("pattern", { height: CHECKER_DIMENSIONS.size, id: "checker", patternUnits: "userSpaceOnUse", width: CHECKER_DIMENSIONS.size, x: "0", y: "0" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: "0", y: "0" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { class: CSS.checker, height: CHECKER_DIMENSIONS.squareSize, width: CHECKER_DIMENSIONS.squareSize, x: CHECKER_DIMENSIONS.squareSize, y: CHECKER_DIMENSIONS.squareSize }))), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { fill: "url(#checker)", height: "100%", rx: borderRadius, width: "100%" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { fill: hex, style: {
        "clip-path": alpha < 1 ? "polygon(100% 0, 0 0, 0 100%)" : `inset(0 round ${borderRadius})`
      }, ...commonSwatchProps }), alpha < 1 ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { fill: hexa, key: "opacity-fill", style: { "clip-path": "polygon(100% 0, 100% 100%, 0 100%)" }, ...commonSwatchProps })) : null));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "color": ["handleColorChange"]
  }; }
};
ColorPickerSwatch.style = colorPickerSwatchCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectInteractive),
/* harmony export */   "d": () => (/* binding */ disconnectInteractive),
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test((0,_browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_0__.g)());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" stencil lifecycle method has been called).
 *
 * Requires "setUpLoadableComponent" and "setComponentLoaded" to be called first.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/math-584fc665.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/math-584fc665.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ clamp),
/* harmony export */   "d": () => (/* binding */ decimalPlaces)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/throttle-b7008174.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/throttle-b7008174.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_0__.i)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_0__.d)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGM4ZDc1OTUzZDljNDg5OTdmMGU0MTY5NDZhODM3NzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lIO0FBQ1E7QUFDbU47QUFDaE47QUFDbkU7QUFDMkQ7QUFDN0I7QUFDdkM7QUFDMkU7QUFDcEU7QUFDM0I7QUFDSztBQUNGO0FBQ0U7QUFDRDs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLFFBQVEsNEJBQTRCO0FBQ3BDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sNkJBQTZCO0FBQ3BDLFdBQVcsaUNBQWlDO0FBQzVDLFVBQVUsZ0NBQWdDO0FBQzFDLFdBQVcsaUNBQWlDO0FBQzVDLE9BQU8scUNB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QixRQUFRLE9BQU87QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFOztBQUU1RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELEVBQUUsVUFBVSxFQUFFO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhLGFBQWE7QUFDMUM7QUFDQSxnQkFBZ0IsYUFBYSxhQUFhO0FBQzFDO0FBQ0EsZ0JBQWdCLGFBQWEsYUFBYTtBQUMxQztBQUNBLGdCQUFnQixhQUFhLGFBQWE7QUFDMUM7QUFDQSxnQkFBZ0IsYUFBYSxhQUFhO0FBQzFDO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0RBQXdELHVDQUF1QztBQUMvRixzREFBc0QscUNBQXFDOztBQUUzRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyxRQUFRO0FBQ2pCO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLFNBQVMsVUFBVTtBQUNuQixTQUFTLFFBQVE7O0FBRWpCLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxVQUFVOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxxQkFBcUIsc0NBQXNDLGlCQUFpQiw4Q0FBOEMseUdBQXlHLFVBQVUsaUJBQWlCLG1DQUFtQyw0QkFBNEIsa0JBQWtCLCtCQUErQixZQUFZLDhDQUE4QyxpQkFBaUIsb0NBQW9DLDRCQUE0QixrQkFBa0IsaUJBQWlCLG9DQUFvQyxzQ0FBc0MsaUJBQWlCLDRCQUE0QixrQkFBa0Isd0NBQXdDLHdEQUF3RCwrQkFBK0IsOENBQThDLGtDQUFrQyxpQkFBaUIscUJBQXFCLGVBQWUsb0NBQW9DLGFBQWEsY0FBYyxzQkFBc0IsNkJBQTZCLHVDQUF1QyxjQUFjLFdBQVcsZ0RBQWdELHFCQUFxQiw0Q0FBNEMsbUJBQW1CLGtCQUFrQixhQUFhLGVBQWUsa0JBQWtCLE9BQU8sa0JBQWtCLG1DQUFtQyxzQ0FBc0MsMEJBQTBCLGFBQWEseUVBQXlFLG9QQUFvUCxvQkFBb0Isd0JBQXdCLGlCQUFpQix5Q0FBeUMsYUFBYSxtQkFBbUIsZUFBZSxTQUFTLG9EQUFvRCxtREFBbUQsdUJBQXVCLHdEQUF3RCxTQUFTLGFBQWEsc0JBQXNCLDhCQUE4Qix3REFBd0QscUJBQXFCLGFBQWEsbUJBQW1CLDRDQUE0QyxtQ0FBbUMsWUFBWSxRQUFRLGFBQWEsbUJBQW1CLDhCQUE4QiwrQkFBK0Isc0JBQXNCLHdEQUF3RCxVQUFVLGFBQWEsaUJBQWlCLG1DQUFtQyxrQkFBa0IsMkJBQTJCLGVBQWUsMEJBQTBCLGVBQWUsWUFBWSxvREFBb0Qsa0JBQWtCLDBCQUEwQixvREFBb0Qsa0JBQWtCLGNBQWMsYUFBYSxXQUFXLHdEQUF3RCw4Q0FBOEMsc0JBQXNCLGFBQWEsYUFBYSxpQkFBaUIsMEJBQTBCLGVBQWUsbUJBQW1CLDBDQUEwQyxtQkFBbUIsbUJBQW1CLG1GQUFtRiw2Q0FBNkMsbUJBQW1COztBQUUzcks7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEIsb0NBQW9DLHFEQUFXO0FBQy9DLG1DQUFtQyxxREFBVztBQUM5QztBQUNBLGdCQUFnQixrSkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakMsc0JBQXNCLGFBQWE7QUFDbkMscUJBQXFCLGFBQWE7QUFDbEMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrSkFBWSxDQUFDLGtKQUFNLFVBQVUsa0pBQWU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGtKQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbURBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQXNCO0FBQ2pDO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBLDRFQUE0RSxZQUFZO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1EQUFzQjtBQUNqQztBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0EsNEVBQTRFLFlBQVk7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQXNCO0FBQ2pDO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQSw0RUFBNEUsWUFBWTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtREFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBMkM7QUFDekQ7QUFDQTtBQUNBLGNBQWMscURBQUMsd0JBQXdCLDZJQUE2STtBQUNwTDtBQUNBO0FBQ0EsY0FBYywrRUFBK0U7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBYTtBQUNyQztBQUNBLGNBQWMscURBQUMsa0JBQWtCLDREQUE0RCxFQUFFLHFEQUFDLFVBQVUsbUNBQW1DO0FBQzdJO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxrSkFBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGNBQWMscURBQUMsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdFQUFnRTtBQUN6RTtBQUNBO0FBQ0EsNEJBQTRCLGtKQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkIsRUFBRSxlQUFlO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0pBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQixFQUFFLGVBQWU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWMsY0FBYyxjQUFjLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrSkFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0pBQVksQ0FBQyxrSkFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLDhDQUE4QyxrSkFBZTtBQUM3RCxtRUFBbUUsT0FBTztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0pBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGtKQUFlO0FBQzNFLFVBQVUsa0pBQWM7QUFDeEI7QUFDQSwwQkFBMEIsa0pBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0pBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFzQjtBQUMxQixZQUFZLDRDQUE0QztBQUN4RDtBQUNBLHVCQUF1QixrSkFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJCQUEyQixFQUFFLGVBQWU7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnSkFBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEIsSUFBSSxzREFBZ0I7QUFDcEIsSUFBSSxnSkFBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSx3REFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QixJQUFJLHNEQUFtQjtBQUN2QixJQUFJLGdKQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRGQUE0RixjQUFjLHdCQUF3QixZQUFZLG9CQUFvQixXQUFXLHVCQUF1QiwrSkFBK0o7QUFDL1csdUNBQXVDLGtKQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtKQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLFVBQVUsd0JBQXdCLEVBQUUscURBQUMsVUFBVSw4QkFBOEIsRUFBRSxxREFBQyxhQUFhO0FBQzFHO0FBQ0EsZ0NBQWdDLEdBQUcscURBQUMsVUFBVSxtT0FBbU8sb0RBQW9ELHlFQUF5RSxRQUFRLHdCQUF3QixjQUFjLHlCQUF5QixLQUFLO0FBQzFkO0FBQ0Esc0NBQXNDLElBQUkscURBQUMsVUFBVSxnQ0FBZ0MsRUFBRSxxREFBQyxrQ0FBa0MsNkRBQTZELEdBQUcscURBQUMsVUFBVSxzQkFBc0IsRUFBRSxxREFBQyxVQUFVLDhCQUE4QixFQUFFLHFEQUFDLGFBQWEsU0FBUywrQ0FBK0M7QUFDOVU7QUFDQSwrQkFBK0IsR0FBRyxxREFBQyxVQUFVLGtLQUFrSyw2Q0FBNkMsa0VBQWtFLFFBQVEsT0FBTyxjQUFjLFFBQVEsS0FBSztBQUN4VztBQUNBLCtCQUErQixvQkFBb0IscURBQUMsVUFBVSw4QkFBOEIsRUFBRSxxREFBQyxhQUFhLFNBQVMsbURBQW1EO0FBQ3hLO0FBQ0EsbUNBQW1DLEdBQUcscURBQUMsVUFBVSxnTEFBZ0wsaURBQWlELHNFQUFzRSxRQUFRLFdBQVcsY0FBYyxZQUFZLEtBQUs7QUFDMVk7QUFDQSxtQ0FBbUMsNENBQTRDLHFEQUFDLFVBQVU7QUFDMUY7QUFDQTtBQUNBLFNBQVMsRUFBRSxxREFBQyxVQUFVLGtDQUFrQyxrQkFBa0IscURBQUMsVUFBVSx5QkFBeUIsRUFBRSxxREFBQyxxQ0FBcUMsNk9BQTZPLDBCQUEwQixxREFBQyxtQkFBbUI7QUFDamI7QUFDQTtBQUNBLE9BQU8sb0NBQW9DLEVBQUUscURBQUMsc0JBQXNCLHFCQUFxQixnS0FBZ0sscURBQUMsVUFBVSxTQUFTLDJEQUEyRCxFQUFFLHFEQUFDLFVBQVUscUJBQXFCLEVBQUUscURBQUMsaUNBQWlDLHFEQUFDLFVBQVUsaUNBQWlDLEVBQUUscURBQUMscUJBQXFCLG1NQUFtTSxHQUFHLHFEQUFDLHFCQUFxQiw0TEFBNEwsK0JBQStCLHFEQUFDLFVBQVUsMEJBQTBCO0FBQzk2QixxQ0FBcUMscURBQUMsa0NBQWtDLDZKQUE2SjtBQUNyTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNLHFEQUFxRCxPQUFPO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQiw4QkFBOEIsa0pBQWU7QUFDN0M7QUFDQSx3QkFBd0Isa0pBQVc7QUFDbkM7QUFDQSwyQ0FBMkMsVUFBVSx5QkFBeUIsS0FBSztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrSkFBYztBQUN6QztBQUNBLDJDQUEyQyxhQUFhLHlCQUF5QixLQUFLO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxVQUFVLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWMsVUFBVSxZQUFZO0FBQ2hELGtCQUFrQixrSkFBYztBQUNoQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0pBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0pBQWlCO0FBQ25ELGFBQWEsa0pBQVksQ0FBQyxrSkFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU0sSUFBSSxPQUFPLElBQUksY0FBYztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrSkFBYztBQUN4QjtBQUNBLGFBQWEsa0pBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWMsVUFBVSxRQUFRLFdBQVcsYUFBYTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxjQUFjLG9CQUFvQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxjQUFjLGVBQWUsV0FBVyxhQUFhO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxVQUFVLGVBQWUsV0FBVyxhQUFhO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjLFVBQVUsZUFBZSxXQUFXLDBCQUEwQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQWtELFVBQVUsZUFBZSxXQUFXLDBCQUEwQjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxVQUFVLE9BQU8sV0FBVyxhQUFhO0FBQ25FLGNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6STNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRjs7Ozs7Ozs7Ozs7Ozs7OztBQzNEdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRTs7QUFFdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxXQUFXO0FBQzlCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsbUJBQW1CO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQVE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUV5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Jyb3dzZXItOTliYzYyY2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1jb2xvci1waWNrZXJfMy5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS04MDU4ZTMwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9tYXRoLTU4NGZjNjY1LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Rocm90dGxlLWI3MDA4MTc0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5mdW5jdGlvbiBnZXRVc2VyQWdlbnREYXRhKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG59XG5mdW5jdGlvbiBnZXRVc2VyQWdlbnRTdHJpbmcoKSB7XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgcmV0dXJuIHVhRGF0YT8uYnJhbmRzXG4gICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgOiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuXG5leHBvcnQgeyBnZXRVc2VyQWdlbnREYXRhIGFzIGEsIGdldFVzZXJBZ2VudFN0cmluZyBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBhIGFzIGdldEVsZW1lbnQsIEYgYXMgRnJhZ21lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgYiBhcyBnZXRFbGVtZW50RGlyLCBmIGFzIGZvY3VzRWxlbWVudCwgaCBhcyBnZXRNb2RlTmFtZSB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IEMgYXMgQ1NTQ29sb3JNb2RlLCBuIGFzIG5vcm1hbGl6ZUhleCwgYSBhcyBoZXhpZnksIG8gYXMgb3BhY2l0eVRvQWxwaGEsIGIgYXMgYWxwaGFUb09wYWNpdHksIGMgYXMgYWxwaGFDb21wYXRpYmxlLCBwIGFzIHBhcnNlTW9kZSwgZCBhcyBjb2xvckVxdWFsLCB0IGFzIHRvTm9uQWxwaGFNb2RlLCBlIGFzIG5vcm1hbGl6ZUFscGhhLCBmIGFzIHRvQWxwaGFNb2RlLCBnIGFzIG5vcm1hbGl6ZUNvbG9yLCBqIGFzIGlzTG9uZ2hhbmRIZXgsIGkgYXMgaXNWYWxpZEhleCwgciBhcyByZ2JUb0hleCwgayBhcyBoZXhDaGFyIH0gZnJvbSAnLi91dGlscy04NWI5NWU0Ni5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGMgYXMgY2xhbXAgfSBmcm9tICcuL21hdGgtNTg0ZmM2NjUuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgeyB0IGFzIHRocm90dGxlIH0gZnJvbSAnLi90aHJvdHRsZS1iNzAwODE3NC5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0ICcuL2RlYm91bmNlLTA5NTBhOWI4LmpzJztcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIGJhc2VkaXIsIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0ge1xuXHRcdHBhdGg6IGJhc2VkaXIsXG5cdFx0ZXhwb3J0czoge30sXG5cdFx0cmVxdWlyZTogZnVuY3Rpb24gKHBhdGgsIGJhc2UpIHtcblx0XHRcdHJldHVybiBjb21tb25qc1JlcXVpcmUoKTtcblx0XHR9XG5cdH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxuZnVuY3Rpb24gY29tbW9uanNSZXF1aXJlICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdEeW5hbWljIHJlcXVpcmVzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSBAcm9sbHVwL3BsdWdpbi1jb21tb25qcycpO1xufVxuXG52YXIgY29sb3JOYW1lJDEgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xuXG52YXIgaXNBcnJheWlzaCA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuXG52YXIgc2ltcGxlU3dpenpsZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuXG5cbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgc3dpenpsZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3dpenpsZShhcmdzKSB7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgYXJnID0gYXJnc1tpXTtcblxuXHRcdGlmIChpc0FycmF5aXNoKGFyZykpIHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tL2phdmFzY3JpcHQtYXJyYXktY29uY2F0LXZzLXB1c2gvOThcblx0XHRcdHJlc3VsdHMgPSBjb25jYXQuY2FsbChyZXN1bHRzLCBzbGljZS5jYWxsKGFyZykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goYXJnKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbnN3aXp6bGUud3JhcCA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmbihzd2l6emxlKGFyZ3VtZW50cykpO1xuXHR9O1xufTtcbn0pO1xuXG52YXIgY29sb3JTdHJpbmcgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiBNSVQgbGljZW5zZSAqL1xuXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHJldmVyc2VOYW1lcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbi8vIGNyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWUkMSkge1xuXHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb2xvck5hbWUkMSwgbmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lJDFbbmFtZV1dID0gbmFtZTtcblx0fVxufVxuXG52YXIgY3MgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0dG86IHt9LFxuXHRnZXQ6IHt9XG59O1xuXG5jcy5nZXQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHZhciBwcmVmaXggPSBzdHJpbmcuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCk7XG5cdHZhciB2YWw7XG5cdHZhciBtb2RlbDtcblx0c3dpdGNoIChwcmVmaXgpIHtcblx0XHRjYXNlICdoc2wnOlxuXHRcdFx0dmFsID0gY3MuZ2V0LmhzbChzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHNsJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2h3Yic6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdod2InO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhbCA9IGNzLmdldC5yZ2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ3JnYic7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGlmICghdmFsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4ge21vZGVsOiBtb2RlbCwgdmFsdWU6IHZhbH07XG59O1xuXG5jcy5nZXQucmdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGFiYnIgPSAvXiMoW2EtZjAtOV17Myw0fSkkL2k7XG5cdHZhciBoZXggPSAvXiMoW2EtZjAtOV17Nn0pKFthLWYwLTldezJ9KT8kL2k7XG5cdHZhciByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKSg/PVtcXHMsXSlcXHMqKD86LFxccyopPyhbKy1dP1xcZCspKD89W1xccyxdKVxccyooPzosXFxzKik/KFsrLV0/XFxkKylcXHMqKD86Wyx8XFwvXVxccyooWystXT9bXFxkXFwuXSspKCU/KVxccyopP1xcKSQvO1xuXHR2YXIgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKiw/XFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLD9cXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzpbLHxcXC9dXFxzKihbKy1dP1tcXGRcXC5dKykoJT8pXFxzKik/XFwpJC87XG5cdHZhciBrZXl3b3JkID0gL14oXFx3KykkLztcblxuXHR2YXIgcmdiID0gWzAsIDAsIDAsIDFdO1xuXHR2YXIgbWF0Y2g7XG5cdHZhciBpO1xuXHR2YXIgaGV4QWxwaGE7XG5cblx0aWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzJdO1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHQvLyBodHRwczovL2pzcGVyZi5jb20vc2xpY2UtdnMtc3Vic3RyLXZzLXN1YnN0cmluZy1tZXRob2RzLWxvbmctc3RyaW5nLzE5XG5cdFx0XHR2YXIgaTIgPSBpICogMjtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkyLCBpMiArIDIpLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUludChoZXhBbHBoYSwgMTYpIC8gMjU1O1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKSkge1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFszXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlSW50KGhleEFscGhhICsgaGV4QWxwaGEsIDE2KSAvIDI1NTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0aWYgKG1hdGNoWzVdKSB7XG5cdFx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pICogMC4wMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdGlmIChtYXRjaFs1XSkge1xuXHRcdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKSAqIDAuMDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRcdHJldHVybiBbMCwgMCwgMCwgMF07XG5cdFx0fVxuXG5cdFx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbG9yTmFtZSQxLCBtYXRjaFsxXSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZSQxW21hdGNoWzFdXTtcblx0XHRyZ2JbM10gPSAxO1xuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRyZ2JbaV0gPSBjbGFtcChyZ2JbaV0sIDAsIDI1NSk7XG5cdH1cblx0cmdiWzNdID0gY2xhbXAocmdiWzNdLCAwLCAxKTtcblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY3MuZ2V0LmhzbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dPyg/OlxcZHswLDN9XFwuKT9cXGQrKSg/OmRlZyk/XFxzKiw/XFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKiw/XFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OlssfFxcL11cXHMqKFsrLV0/KD89XFwuXFxkfFxcZCkoPzowfFsxLTldXFxkKik/KD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9ICgocGFyc2VGbG9hdChtYXRjaFsxXSkgJSAzNjApICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGR7MCwzfSg/OlxcLlxcZCspPykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT8oPz1cXC5cXGR8XFxkKSg/OjB8WzEtOV1cXGQqKT8oPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHNpbXBsZVN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHNpbXBsZVN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHNpbXBsZVN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHNpbXBsZVN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzaW1wbGVTd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBNYXRoLnJvdW5kKG51bSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxufSk7XG5cbnZhciBjb2xvck5hbWUgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xuXG4vKiBNSVQgbGljZW5zZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5cblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxuY29uc3QgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjb2xvck5hbWUpKSB7XG5cdHJldmVyc2VLZXl3b3Jkc1tjb2xvck5hbWVba2V5XV0gPSBrZXk7XG59XG5cbmNvbnN0IGNvbnZlcnQkMSA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbnZhciBjb252ZXJzaW9ucyA9IGNvbnZlcnQkMTtcblxuLy8gSGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yIChjb25zdCBtb2RlbCBvZiBPYmplY3Qua2V5cyhjb252ZXJ0JDEpKSB7XG5cdGlmICghKCdjaGFubmVscycgaW4gY29udmVydCQxW21vZGVsXSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0JDFbbW9kZWxdKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0fVxuXG5cdGlmIChjb252ZXJ0JDFbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnQkMVttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0fVxuXG5cdGNvbnN0IHtjaGFubmVscywgbGFiZWxzfSA9IGNvbnZlcnQkMVttb2RlbF07XG5cdGRlbGV0ZSBjb252ZXJ0JDFbbW9kZWxdLmNoYW5uZWxzO1xuXHRkZWxldGUgY29udmVydCQxW21vZGVsXS5sYWJlbHM7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0JDFbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0JDFbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcbn1cblxuY29udmVydCQxLnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0Y29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG5cdGxldCBoO1xuXHRsZXQgcztcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGNvbnN0IGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydCQxLnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGxldCByZGlmO1xuXHRsZXQgZ2RpZjtcblx0bGV0IGJkaWY7XG5cdGxldCBoO1xuXHRsZXQgcztcblxuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdGNvbnN0IGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdGNvbnN0IGRpZmZjID0gZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG5cdH07XG5cblx0aWYgKGRpZmYgPT09IDApIHtcblx0XHRoID0gMDtcblx0XHRzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdO1xuXHRjb25zdCBnID0gcmdiWzFdO1xuXHRsZXQgYiA9IHJnYlsyXTtcblx0Y29uc3QgaCA9IGNvbnZlcnQkMS5yZ2IuaHNsKHJnYilbMF07XG5cdGNvbnN0IHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydCQxLnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdGNvbnN0IGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0Y29uc3QgYyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRjb25zdCBtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdGNvbnN0IHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdC8qXG5cdFx0U2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG5cdCovXG5cdHJldHVybiAoXG5cdFx0KCh4WzBdIC0geVswXSkgKiogMikgK1xuXHRcdCgoeFsxXSAtIHlbMV0pICoqIDIpICtcblx0XHQoKHhbMl0gLSB5WzJdKSAqKiAyKVxuXHQpO1xufVxuXG5jb252ZXJ0JDEucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdGxldCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdGxldCBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yIChjb25zdCBrZXl3b3JkIG9mIE9iamVjdC5rZXlzKGNvbG9yTmFtZSkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGNvbG9yTmFtZVtrZXl3b3JkXTtcblxuXHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRjb25zdCBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0JDEua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY29sb3JOYW1lW2tleXdvcmRdO1xufTtcblxuY29udmVydCQxLnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdGxldCByID0gcmdiWzBdIC8gMjU1O1xuXHRsZXQgZyA9IHJnYlsxXSAvIDI1NTtcblx0bGV0IGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gQXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gKCgociArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/ICgoKGcgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyAoKChiICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHRjb25zdCB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHRjb25zdCB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHRjb25zdCB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgeHl6ID0gY29udmVydCQxLnJnYi54eXoocmdiKTtcblx0bGV0IHggPSB4eXpbMF07XG5cdGxldCB5ID0geHl6WzFdO1xuXHRsZXQgeiA9IHh5elsyXTtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcblx0Y29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG5cdGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0JDEuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0Y29uc3QgaCA9IGhzbFswXSAvIDM2MDtcblx0Y29uc3QgcyA9IGhzbFsxXSAvIDEwMDtcblx0Y29uc3QgbCA9IGhzbFsyXSAvIDEwMDtcblx0bGV0IHQyO1xuXHRsZXQgdDM7XG5cdGxldCB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0Y29uc3QgdDEgPSAyICogbCAtIHQyO1xuXG5cdGNvbnN0IHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQkMS5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdO1xuXHRsZXQgcyA9IGhzbFsxXSAvIDEwMDtcblx0bGV0IGwgPSBoc2xbMl0gLyAxMDA7XG5cdGxldCBzbWluID0gcztcblx0Y29uc3QgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdGNvbnN0IHYgPSAobCArIHMpIC8gMjtcblx0Y29uc3Qgc3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBoID0gaHN2WzBdIC8gNjA7XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGxldCB2ID0gaHN2WzJdIC8gMTAwO1xuXHRjb25zdCBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdGNvbnN0IGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0Y29uc3QgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHRjb25zdCBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdGNvbnN0IHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0JDEuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgaCA9IGhzdlswXTtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0Y29uc3QgdiA9IGhzdlsyXSAvIDEwMDtcblx0Y29uc3Qgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHRsZXQgc2w7XG5cdGxldCBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0Y29uc3QgbG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQkMS5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHRjb25zdCBoID0gaHdiWzBdIC8gMzYwO1xuXHRsZXQgd2ggPSBod2JbMV0gLyAxMDA7XG5cdGxldCBibCA9IGh3YlsyXSAvIDEwMDtcblx0Y29uc3QgcmF0aW8gPSB3aCArIGJsO1xuXHRsZXQgZjtcblxuXHQvLyBXaCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGNvbnN0IGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0Y29uc3QgdiA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdGNvbnN0IG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gTGluZWFyIGludGVycG9sYXRpb25cblxuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSxuby1tdWx0aS1zcGFjZXMgKi9cblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgIGcgPSBuOyAgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyAgZyA9IHY7ICBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgIGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47ICBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgIGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7ICBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0JDEuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHRjb25zdCBjID0gY215a1swXSAvIDEwMDtcblx0Y29uc3QgbSA9IGNteWtbMV0gLyAxMDA7XG5cdGNvbnN0IHkgPSBjbXlrWzJdIC8gMTAwO1xuXHRjb25zdCBrID0gY215a1szXSAvIDEwMDtcblxuXHRjb25zdCByID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGNvbnN0IGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0Y29uc3QgYiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0JDEueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0Y29uc3QgeCA9IHh5elswXSAvIDEwMDtcblx0Y29uc3QgeSA9IHh5elsxXSAvIDEwMDtcblx0Y29uc3QgeiA9IHh5elsyXSAvIDEwMDtcblx0bGV0IHI7XG5cdGxldCBnO1xuXHRsZXQgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBBc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChyICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChnICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIChiICoqICgxLjAgLyAyLjQpKSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0JDEueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0bGV0IHggPSB4eXpbMF07XG5cdGxldCB5ID0geHl6WzFdO1xuXHRsZXQgeiA9IHh5elsyXTtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcblx0Y29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG5cdGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0JDEubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0Y29uc3QgbCA9IGxhYlswXTtcblx0Y29uc3QgYSA9IGxhYlsxXTtcblx0Y29uc3QgYiA9IGxhYlsyXTtcblx0bGV0IHg7XG5cdGxldCB5O1xuXHRsZXQgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdGNvbnN0IHkyID0geSAqKiAzO1xuXHRjb25zdCB4MiA9IHggKiogMztcblx0Y29uc3QgejIgPSB6ICoqIDM7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQkMS5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHRjb25zdCBsID0gbGFiWzBdO1xuXHRjb25zdCBhID0gbGFiWzFdO1xuXHRjb25zdCBiID0gbGFiWzJdO1xuXHRsZXQgaDtcblxuXHRjb25zdCBociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0Y29uc3QgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydCQxLmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdGNvbnN0IGwgPSBsY2hbMF07XG5cdGNvbnN0IGMgPSBsY2hbMV07XG5cdGNvbnN0IGggPSBsY2hbMl07XG5cblx0Y29uc3QgaHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGNvbnN0IGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRjb25zdCBiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydCQxLnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncywgc2F0dXJhdGlvbiA9IG51bGwpIHtcblx0Y29uc3QgW3IsIGcsIGJdID0gYXJncztcblx0bGV0IHZhbHVlID0gc2F0dXJhdGlvbiA9PT0gbnVsbCA/IGNvbnZlcnQkMS5yZ2IuaHN2KGFyZ3MpWzJdIDogc2F0dXJhdGlvbjsgLy8gSHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0bGV0IGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydCQxLmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBPcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQkMS5yZ2IuYW5zaTE2KGNvbnZlcnQkMS5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IHIgPSBhcmdzWzBdO1xuXHRjb25zdCBnID0gYXJnc1sxXTtcblx0Y29uc3QgYiA9IGFyZ3NbMl07XG5cblx0Ly8gV2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHRjb25zdCBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydCQxLmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRsZXQgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gSGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0Y29uc3QgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdGNvbnN0IHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0Y29uc3QgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0Y29uc3QgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydCQxLmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gSGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHRjb25zdCBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdGxldCByZW07XG5cdGNvbnN0IHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHRjb25zdCBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0Y29uc3QgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQkMS5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0Y29uc3Qgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQkMS5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0bGV0IGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChjaGFyID0+IHtcblx0XHRcdHJldHVybiBjaGFyICsgY2hhcjtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdGNvbnN0IGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHRjb25zdCByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0Y29uc3QgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0Y29uc3QgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0JDEucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgciA9IHJnYlswXSAvIDI1NTtcblx0Y29uc3QgZyA9IHJnYlsxXSAvIDI1NTtcblx0Y29uc3QgYiA9IHJnYlsyXSAvIDI1NTtcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdGNvbnN0IGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHRsZXQgZ3JheXNjYWxlO1xuXHRsZXQgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWE7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXG5cdGNvbnN0IGMgPSBsIDwgMC41ID8gKDIuMCAqIHMgKiBsKSA6ICgyLjAgKiBzICogKDEuMCAtIGwpKTtcblxuXHRsZXQgZiA9IDA7XG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0JDEuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgcyA9IGhzdlsxXSAvIDEwMDtcblx0Y29uc3QgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHRjb25zdCBjID0gcyAqIHY7XG5cdGxldCBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQkMS5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBoID0gaGNnWzBdIC8gMzYwO1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0Y29uc3QgcHVyZSA9IFswLCAwLCAwXTtcblx0Y29uc3QgaGkgPSAoaCAlIDEpICogNjtcblx0Y29uc3QgdiA9IGhpICUgMTtcblx0Y29uc3QgdyA9IDEgLSB2O1xuXHRsZXQgbWcgPSAwO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQkMS5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGNvbnN0IHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0bGV0IGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0Y29uc3QgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHRsZXQgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cdGNvbnN0IHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdGNvbnN0IHcgPSBod2JbMV0gLyAxMDA7XG5cdGNvbnN0IGIgPSBod2JbMl0gLyAxMDA7XG5cdGNvbnN0IHYgPSAxIC0gYjtcblx0Y29uc3QgYyA9IHYgLSB3O1xuXHRsZXQgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydCQxLmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydCQxLnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQkMS5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0JDEuZ3JheS5oc2wgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydCQxLmdyYXkuaHN2ID0gY29udmVydCQxLmdyYXkuaHNsO1xuXG5jb252ZXJ0JDEuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0JDEuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQkMS5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0JDEuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRjb25zdCB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0Y29uc3QgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHRjb25zdCBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydCQxLnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG5cbi8qXG5cdFRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHRjb25zdCBncmFwaCA9IHt9O1xuXHQvLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG5cdGNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKGxldCBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0Y29uc3QgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdGNvbnN0IHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIFVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHRjb25zdCBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKGxldCBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRjb25zdCBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdGNvbnN0IG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdGNvbnN0IHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0bGV0IGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHRsZXQgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxudmFyIHJvdXRlID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb25zdCBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHRjb25zdCBjb252ZXJzaW9uID0ge307XG5cblx0Y29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKGxldCBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Y29uc3QgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHRjb25zdCBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIE5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuY29uc3QgY29udmVydCA9IHt9O1xuXG5jb25zdCBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0Y29uc3Qgd3JhcHBlZEZuID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRjb25zdCBhcmcwID0gYXJnc1swXTtcblx0XHRpZiAoYXJnMCA9PT0gdW5kZWZpbmVkIHx8IGFyZzAgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmcwO1xuXHRcdH1cblxuXHRcdGlmIChhcmcwLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBhcmcwO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBQcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdGNvbnN0IHdyYXBwZWRGbiA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Y29uc3QgYXJnMCA9IGFyZ3NbMF07XG5cblx0XHRpZiAoYXJnMCA9PT0gdW5kZWZpbmVkIHx8IGFyZzAgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmcwO1xuXHRcdH1cblxuXHRcdGlmIChhcmcwLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBhcmcwO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gV2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAobGV0IGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gUHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmcm9tTW9kZWwgPT4ge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHRjb25zdCByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHRjb25zdCByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaCh0b01vZGVsID0+IHtcblx0XHRjb25zdCBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbnZhciBjb2xvckNvbnZlcnQgPSBjb252ZXJ0O1xuXG5jb25zdCBza2lwcGVkTW9kZWxzID0gW1xuXHQvLyBUbyBiZSBob25lc3QsIEkgZG9uJ3QgcmVhbGx5IGZlZWwgbGlrZSBrZXl3b3JkIGJlbG9uZ3MgaW4gY29sb3IgY29udmVydCwgYnV0IGVoLlxuXHQna2V5d29yZCcsXG5cblx0Ly8gR3JheSBjb25mbGljdHMgd2l0aCBzb21lIG1ldGhvZCBuYW1lcywgYW5kIGhhcyBpdHMgb3duIG1ldGhvZCBkZWZpbmVkLlxuXHQnZ3JheScsXG5cblx0Ly8gU2hvdWxkbid0IHJlYWxseSBiZSBpbiBjb2xvci1jb252ZXJ0IGVpdGhlci4uLlxuXHQnaGV4Jyxcbl07XG5cbmNvbnN0IGhhc2hlZE1vZGVsS2V5cyA9IHt9O1xuZm9yIChjb25zdCBtb2RlbCBvZiBPYmplY3Qua2V5cyhjb2xvckNvbnZlcnQpKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tbLi4uY29sb3JDb252ZXJ0W21vZGVsXS5sYWJlbHNdLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn1cblxuY29uc3QgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqZWN0LCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmplY3QsIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29sb3JDb252ZXJ0KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbDogJyArIG1vZGVsKTtcblx0fVxuXG5cdGxldCBpO1xuXHRsZXQgY2hhbm5lbHM7XG5cblx0aWYgKG9iamVjdCA9PSBudWxsKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFswLCAwLCAwXTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSBpZiAob2JqZWN0IGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHR0aGlzLm1vZGVsID0gb2JqZWN0Lm1vZGVsO1xuXHRcdHRoaXMuY29sb3IgPSBbLi4ub2JqZWN0LmNvbG9yXTtcblx0XHR0aGlzLnZhbHBoYSA9IG9iamVjdC52YWxwaGE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycpIHtcblx0XHRjb25zdCByZXN1bHQgPSBjb2xvclN0cmluZy5nZXQob2JqZWN0KTtcblx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZzogJyArIG9iamVjdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IHJlc3VsdC5tb2RlbDtcblx0XHRjaGFubmVscyA9IGNvbG9yQ29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR0aGlzLmNvbG9yID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiByZXN1bHQudmFsdWVbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IHJlc3VsdC52YWx1ZVtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsIHx8ICdyZ2InO1xuXHRcdGNoYW5uZWxzID0gY29sb3JDb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdGNvbnN0IG5ld0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob2JqZWN0LCAwLCBjaGFubmVscyk7XG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShuZXdBcnJheSwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9iamVjdFtjaGFubmVsc10gPT09ICdudW1iZXInID8gb2JqZWN0W2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ251bWJlcicpIHtcblx0XHQvLyBUaGlzIGlzIGFsd2F5cyBSR0IgLSBjYW4gYmUgY29udmVydGVkIGxhdGVyIG9uLlxuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gW1xuXHRcdFx0KG9iamVjdCA+PiAxNikgJiAweEZGLFxuXHRcdFx0KG9iamVjdCA+PiA4KSAmIDB4RkYsXG5cdFx0XHRvYmplY3QgJiAweEZGLFxuXHRcdF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMudmFscGhhID0gMTtcblxuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXHRcdGlmICgnYWxwaGEnIGluIG9iamVjdCkge1xuXHRcdFx0a2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKCdhbHBoYScpLCAxKTtcblx0XHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9iamVjdC5hbHBoYSA9PT0gJ251bWJlcicgPyBvYmplY3QuYWxwaGEgOiAwO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhhc2hlZEtleXMgPSBrZXlzLnNvcnQoKS5qb2luKCcnKTtcblx0XHRpZiAoIShoYXNoZWRLZXlzIGluIGhhc2hlZE1vZGVsS2V5cykpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IGhhc2hlZE1vZGVsS2V5c1toYXNoZWRLZXlzXTtcblxuXHRcdGNvbnN0IHtsYWJlbHN9ID0gY29sb3JDb252ZXJ0W3RoaXMubW9kZWxdO1xuXHRcdGNvbnN0IGNvbG9yID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29sb3IucHVzaChvYmplY3RbbGFiZWxzW2ldXSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShjb2xvcik7XG5cdH1cblxuXHQvLyBQZXJmb3JtIGxpbWl0YXRpb25zIChjbGFtcGluZywgZXRjLilcblx0aWYgKGxpbWl0ZXJzW3RoaXMubW9kZWxdKSB7XG5cdFx0Y2hhbm5lbHMgPSBjb2xvckNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdGNvbnN0IGxpbWl0ID0gbGltaXRlcnNbdGhpcy5tb2RlbF1baV07XG5cdFx0XHRpZiAobGltaXQpIHtcblx0XHRcdFx0dGhpcy5jb2xvcltpXSA9IGxpbWl0KHRoaXMuY29sb3JbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRoaXMudmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy52YWxwaGEpKTtcblxuXHRpZiAoT2JqZWN0LmZyZWV6ZSkge1xuXHRcdE9iamVjdC5mcmVlemUodGhpcyk7XG5cdH1cbn1cblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJpbmcoKTtcblx0fSxcblxuXHR0b0pTT04oKSB7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5tb2RlbF0oKTtcblx0fSxcblxuXHRzdHJpbmcocGxhY2VzKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzLm1vZGVsIGluIGNvbG9yU3RyaW5nLnRvID8gdGhpcyA6IHRoaXMucmdiKCk7XG5cdFx0c2VsZiA9IHNlbGYucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHRjb25zdCBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogWy4uLnNlbGYuY29sb3IsIHRoaXMudmFscGhhXTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG9bc2VsZi5tb2RlbF0oYXJncyk7XG5cdH0sXG5cblx0cGVyY2VudFN0cmluZyhwbGFjZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcy5yZ2IoKS5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdGNvbnN0IGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBbLi4uc2VsZi5jb2xvciwgdGhpcy52YWxwaGFdO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5yZ2IucGVyY2VudChhcmdzKTtcblx0fSxcblxuXHRhcnJheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxwaGEgPT09IDEgPyBbLi4udGhpcy5jb2xvcl0gOiBbLi4udGhpcy5jb2xvciwgdGhpcy52YWxwaGFdO1xuXHR9LFxuXG5cdG9iamVjdCgpIHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRjb25zdCB7Y2hhbm5lbHN9ID0gY29sb3JDb252ZXJ0W3RoaXMubW9kZWxdO1xuXHRcdGNvbnN0IHtsYWJlbHN9ID0gY29sb3JDb252ZXJ0W3RoaXMubW9kZWxdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbbGFiZWxzW2ldXSA9IHRoaXMuY29sb3JbaV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXN1bHQuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdHVuaXRBcnJheSgpIHtcblx0XHRjb25zdCByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJnYlswXSAvPSAyNTU7XG5cdFx0cmdiWzFdIC89IDI1NTtcblx0XHRyZ2JbMl0gLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IucHVzaCh0aGlzLnZhbHBoYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHR1bml0T2JqZWN0KCkge1xuXHRcdGNvbnN0IHJnYiA9IHRoaXMucmdiKCkub2JqZWN0KCk7XG5cdFx0cmdiLnIgLz0gMjU1O1xuXHRcdHJnYi5nIC89IDI1NTtcblx0XHRyZ2IuYiAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0cm91bmQocGxhY2VzKSB7XG5cdFx0cGxhY2VzID0gTWF0aC5tYXgocGxhY2VzIHx8IDAsIDApO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoWy4uLnRoaXMuY29sb3IubWFwKHJvdW5kVG9QbGFjZShwbGFjZXMpKSwgdGhpcy52YWxwaGFdLCB0aGlzLm1vZGVsKTtcblx0fSxcblxuXHRhbHBoYSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKFsuLi50aGlzLmNvbG9yLCBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpXSwgdGhpcy5tb2RlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmFscGhhO1xuXHR9LFxuXG5cdC8vIFJnYlxuXHRyZWQ6IGdldHNldCgncmdiJywgMCwgbWF4Zm4oMjU1KSksXG5cdGdyZWVuOiBnZXRzZXQoJ3JnYicsIDEsIG1heGZuKDI1NSkpLFxuXHRibHVlOiBnZXRzZXQoJ3JnYicsIDIsIG1heGZuKDI1NSkpLFxuXG5cdGh1ZTogZ2V0c2V0KFsnaHNsJywgJ2hzdicsICdoc2wnLCAnaHdiJywgJ2hjZyddLCAwLCB2YWx1ZSA9PiAoKHZhbHVlICUgMzYwKSArIDM2MCkgJSAzNjApLFxuXG5cdHNhdHVyYXRpb25sOiBnZXRzZXQoJ2hzbCcsIDEsIG1heGZuKDEwMCkpLFxuXHRsaWdodG5lc3M6IGdldHNldCgnaHNsJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0c2F0dXJhdGlvbnY6IGdldHNldCgnaHN2JywgMSwgbWF4Zm4oMTAwKSksXG5cdHZhbHVlOiBnZXRzZXQoJ2hzdicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGNocm9tYTogZ2V0c2V0KCdoY2cnLCAxLCBtYXhmbigxMDApKSxcblx0Z3JheTogZ2V0c2V0KCdoY2cnLCAyLCBtYXhmbigxMDApKSxcblxuXHR3aGl0ZTogZ2V0c2V0KCdod2InLCAxLCBtYXhmbigxMDApKSxcblx0d2JsYWNrOiBnZXRzZXQoJ2h3YicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGN5YW46IGdldHNldCgnY215aycsIDAsIG1heGZuKDEwMCkpLFxuXHRtYWdlbnRhOiBnZXRzZXQoJ2NteWsnLCAxLCBtYXhmbigxMDApKSxcblx0eWVsbG93OiBnZXRzZXQoJ2NteWsnLCAyLCBtYXhmbigxMDApKSxcblx0YmxhY2s6IGdldHNldCgnY215aycsIDMsIG1heGZuKDEwMCkpLFxuXG5cdHg6IGdldHNldCgneHl6JywgMCwgbWF4Zm4oOTUuMDQ3KSksXG5cdHk6IGdldHNldCgneHl6JywgMSwgbWF4Zm4oMTAwKSksXG5cdHo6IGdldHNldCgneHl6JywgMiwgbWF4Zm4oMTA4LjgzMykpLFxuXG5cdGw6IGdldHNldCgnbGFiJywgMCwgbWF4Zm4oMTAwKSksXG5cdGE6IGdldHNldCgnbGFiJywgMSksXG5cdGI6IGdldHNldCgnbGFiJywgMiksXG5cblx0a2V5d29yZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3JDb252ZXJ0W3RoaXMubW9kZWxdLmtleXdvcmQodGhpcy5jb2xvcik7XG5cdH0sXG5cblx0aGV4KHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgodGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yKTtcblx0fSxcblxuXHRoZXhhKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsdWUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJnYkFycmF5ID0gdGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yO1xuXG5cdFx0bGV0IGFscGhhSGV4ID0gTWF0aC5yb3VuZCh0aGlzLnZhbHBoYSAqIDI1NSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdFx0aWYgKGFscGhhSGV4Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0YWxwaGFIZXggPSAnMCcgKyBhbHBoYUhleDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8uaGV4KHJnYkFycmF5KSArIGFscGhhSGV4O1xuXHR9LFxuXG5cdHJnYk51bWJlcigpIHtcblx0XHRjb25zdCByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJldHVybiAoKHJnYlswXSAmIDB4RkYpIDw8IDE2KSB8ICgocmdiWzFdICYgMHhGRikgPDwgOCkgfCAocmdiWzJdICYgMHhGRik7XG5cdH0sXG5cblx0bHVtaW5vc2l0eSgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0Y29uc3QgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblxuXHRcdGNvbnN0IGx1bSA9IFtdO1xuXHRcdGZvciAoY29uc3QgW2ksIGVsZW1lbnRdIG9mIHJnYi5lbnRyaWVzKCkpIHtcblx0XHRcdGNvbnN0IGNoYW4gPSBlbGVtZW50IC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wNDA0NSkgPyBjaGFuIC8gMTIuOTIgOiAoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40O1xuXHRcdH1cblxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3QoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdGNvbnN0IGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHRjb25zdCBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblxuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbChjb2xvcjIpIHtcblx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRy8jY29udHJhc3QtZW5oYW5jZWRcblx0XHRjb25zdCBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRpc0RhcmsoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdGNvbnN0IHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0Y29uc3QgeWlxID0gKHJnYlswXSAqIDIxMjYgKyByZ2JbMV0gKiA3MTUyICsgcmdiWzJdICogNzIyKSAvIDEwMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0aXNMaWdodCgpIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlKCkge1xuXHRcdGNvbnN0IHJnYiA9IHRoaXMucmdiKCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYi5jb2xvcltpXSA9IDI1NSAtIHJnYi5jb2xvcltpXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdGxpZ2h0ZW4ocmF0aW8pIHtcblx0XHRjb25zdCBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSArPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRhcmtlbihyYXRpbykge1xuXHRcdGNvbnN0IGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdIC09IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0c2F0dXJhdGUocmF0aW8pIHtcblx0XHRjb25zdCBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSArPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGUocmF0aW8pIHtcblx0XHRjb25zdCBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSAtPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHdoaXRlbihyYXRpbykge1xuXHRcdGNvbnN0IGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzFdICs9IGh3Yi5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0YmxhY2tlbihyYXRpbykge1xuXHRcdGNvbnN0IGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzJdICs9IGh3Yi5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0Z3JheXNjYWxlKCkge1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0Y29uc3QgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRjb25zdCB2YWx1ZSA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHJldHVybiBDb2xvci5yZ2IodmFsdWUsIHZhbHVlLCB2YWx1ZSk7XG5cdH0sXG5cblx0ZmFkZShyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhIC0gKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRvcGFxdWVyKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgKyAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdHJvdGF0ZShkZWdyZWVzKSB7XG5cdFx0Y29uc3QgaHNsID0gdGhpcy5oc2woKTtcblx0XHRsZXQgaHVlID0gaHNsLmNvbG9yWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdGhzbC5jb2xvclswXSA9IGh1ZTtcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdG1peChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHQvLyBQb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0XHRpZiAoIW1peGluQ29sb3IgfHwgIW1peGluQ29sb3IucmdiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50IHRvIFwibWl4XCIgd2FzIG5vdCBhIENvbG9yIGluc3RhbmNlLCBidXQgcmF0aGVyIGFuIGluc3RhbmNlIG9mICcgKyB0eXBlb2YgbWl4aW5Db2xvcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29sb3IxID0gbWl4aW5Db2xvci5yZ2IoKTtcblx0XHRjb25zdCBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdGNvbnN0IHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdGNvbnN0IHcgPSAyICogcCAtIDE7XG5cdFx0Y29uc3QgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHRjb25zdCB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMjtcblx0XHRjb25zdCB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiBDb2xvci5yZ2IoXG5cdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKCksXG5cdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9LFxufTtcblxuLy8gTW9kZWwgY29udmVyc2lvbiBtZXRob2RzIGFuZCBzdGF0aWMgY29uc3RydWN0b3JzXG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGNvbG9yQ29udmVydCkpIHtcblx0aWYgKHNraXBwZWRNb2RlbHMuaW5jbHVkZXMobW9kZWwpKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRjb25zdCB7Y2hhbm5lbHN9ID0gY29sb3JDb252ZXJ0W21vZGVsXTtcblxuXHQvLyBDb252ZXJzaW9uIG1ldGhvZHNcblx0Q29sb3IucHJvdG90eXBlW21vZGVsXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0aWYgKHRoaXMubW9kZWwgPT09IG1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmIChhcmdzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoYXJncywgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ29sb3IoWy4uLmFzc2VydEFycmF5KGNvbG9yQ29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKSwgdGhpcy52YWxwaGFdLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRsZXQgY29sb3IgPSBhcmdzWzBdO1xuXHRcdGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb2xvciA9IHplcm9BcnJheShhcmdzLCBjaGFubmVscyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiByb3VuZFRvKG51bWJlciwgcGxhY2VzKSB7XG5cdHJldHVybiBOdW1iZXIobnVtYmVyLnRvRml4ZWQocGxhY2VzKSk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG9QbGFjZShwbGFjZXMpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChudW1iZXIpIHtcblx0XHRyZXR1cm4gcm91bmRUbyhudW1iZXIsIHBsYWNlcyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldHNldChtb2RlbCwgY2hhbm5lbCwgbW9kaWZpZXIpIHtcblx0bW9kZWwgPSBBcnJheS5pc0FycmF5KG1vZGVsKSA/IG1vZGVsIDogW21vZGVsXTtcblxuXHRmb3IgKGNvbnN0IG0gb2YgbW9kZWwpIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9XG5cblx0bW9kZWwgPSBtb2RlbFswXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0bGV0IHJlc3VsdDtcblxuXHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsdWUgPSBtb2RpZmllcih2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCk7XG5cdFx0XHRyZXN1bHQuY29sb3JbY2hhbm5lbF0gPSB2YWx1ZTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsdWUpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuXG5mdW5jdGlvbiB6ZXJvQXJyYXkoYXJyYXksIGxlbmd0aCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHR5cGVvZiBhcnJheVtpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycmF5W2ldID0gMDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbnZhciBjb2xvciA9IENvbG9yO1xuXG5jb25zdCBDU1MkMiA9IHtcbiAgY2hhbm5lbDogXCJjaGFubmVsXCIsXG4gIGNoYW5uZWxzOiBcImNoYW5uZWxzXCIsXG4gIGNvbG9yRmllbGQ6IFwiY29sb3ItZmllbGRcIixcbiAgY29sb3JGaWVsZFNjb3BlOiBcInNjb3BlLS1jb2xvci1maWVsZFwiLFxuICBjb2xvck1vZGU6IFwiY29sb3ItbW9kZVwiLFxuICBjb2xvck1vZGVDb250YWluZXI6IFwiY29sb3ItbW9kZS1jb250YWluZXJcIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250cm9sOiBcImNvbnRyb2xcIixcbiAgY29udHJvbEFuZFNjb3BlOiBcImNvbnRyb2wtYW5kLXNjb3BlXCIsXG4gIGNvbnRyb2xTZWN0aW9uOiBcImNvbnRyb2wtc2VjdGlvblwiLFxuICBkZWxldGVDb2xvcjogXCJkZWxldGUtY29sb3JcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBoZXhBbmRDaGFubmVsc0dyb3VwOiBcImhleC1hbmQtY2hhbm5lbHMtZ3JvdXBcIixcbiAgaGV4T3B0aW9uczogXCJjb2xvci1oZXgtb3B0aW9uc1wiLFxuICBodWVTY29wZTogXCJzY29wZS0taHVlXCIsXG4gIGh1ZVNsaWRlcjogXCJodWUtc2xpZGVyXCIsXG4gIG9wYWNpdHlTY29wZTogXCJzY29wZS0tb3BhY2l0eVwiLFxuICBvcGFjaXR5U2xpZGVyOiBcIm9wYWNpdHktc2xpZGVyXCIsXG4gIHByZXZpZXc6IFwicHJldmlld1wiLFxuICBwcmV2aWV3QW5kU2xpZGVyczogXCJwcmV2aWV3LWFuZC1zbGlkZXJzXCIsXG4gIHNhdmVDb2xvcjogXCJzYXZlLWNvbG9yXCIsXG4gIHNhdmVkQ29sb3I6IFwic2F2ZWQtY29sb3JcIixcbiAgc2F2ZWRDb2xvcnM6IFwic2F2ZWQtY29sb3JzXCIsXG4gIHNhdmVkQ29sb3JzQnV0dG9uczogXCJzYXZlZC1jb2xvcnMtYnV0dG9uc1wiLFxuICBzYXZlZENvbG9yc1NlY3Rpb246IFwic2F2ZWQtY29sb3JzLXNlY3Rpb25cIixcbiAgc2NvcGU6IFwic2NvcGVcIixcbiAgc2VjdGlvbjogXCJzZWN0aW9uXCIsXG4gIHNsaWRlcjogXCJzbGlkZXJcIixcbiAgc2xpZGVyczogXCJzbGlkZXJzXCIsXG4gIHNwbGl0U2VjdGlvbjogXCJzZWN0aW9uLS1zcGxpdFwiXG59O1xuY29uc3QgREVGQVVMVF9DT0xPUiQxID0gY29sb3IoXCIjMDA3QUMyXCIpO1xuY29uc3QgREVGQVVMVF9TVE9SQUdFX0tFWV9QUkVGSVggPSBcImNhbGNpdGUtY29sb3ItXCI7XG5jb25zdCBSR0JfTElNSVRTID0ge1xuICByOiAyNTUsXG4gIGc6IDI1NSxcbiAgYjogMjU1XG59O1xuY29uc3QgSFNWX0xJTUlUUyA9IHtcbiAgaDogMzYwLFxuICBzOiAxMDAsXG4gIHY6IDEwMFxufTtcbmNvbnN0IE9QQUNJVFlfTElNSVRTID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwXG59O1xuY29uc3QgRElNRU5TSU9OUyA9IHtcbiAgczoge1xuICAgIHNsaWRlcjoge1xuICAgICAgaGVpZ2h0OiAxMixcbiAgICAgIHdpZHRoOiAxMDRcbiAgICB9LFxuICAgIGNvbG9yRmllbGQ6IHtcbiAgICAgIGhlaWdodDogODAsXG4gICAgICB3aWR0aDogMTYwXG4gICAgfSxcbiAgICB0aHVtYjoge1xuICAgICAgcmFkaXVzOiAxMFxuICAgIH1cbiAgfSxcbiAgbToge1xuICAgIHNsaWRlcjoge1xuICAgICAgaGVpZ2h0OiAxMixcbiAgICAgIHdpZHRoOiAyMDRcbiAgICB9LFxuICAgIGNvbG9yRmllbGQ6IHtcbiAgICAgIGhlaWdodDogMTUwLFxuICAgICAgd2lkdGg6IDI3MlxuICAgIH0sXG4gICAgdGh1bWI6IHtcbiAgICAgIHJhZGl1czogMTBcbiAgICB9XG4gIH0sXG4gIGw6IHtcbiAgICBzbGlkZXI6IHtcbiAgICAgIGhlaWdodDogMTIsXG4gICAgICB3aWR0aDogMzg0XG4gICAgfSxcbiAgICBjb2xvckZpZWxkOiB7XG4gICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgIHdpZHRoOiA0NjRcbiAgICB9LFxuICAgIHRodW1iOiB7XG4gICAgICByYWRpdXM6IDEwXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjb2xvclBpY2tlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nOjhweH06aG9zdChbc2NhbGU9c10pIC5jb250YWluZXJ7aW5saW5lLXNpemU6MTYwcHh9Omhvc3QoW3NjYWxlPXNdKSAuc2F2ZWQtY29sb3Jze2dhcDowLjI1cmVtO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsLCAyMHB4KX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZzoxMnB4fTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lcntpbmxpbmUtc2l6ZToyNzJweH06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZzoxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pIC5jb250YWluZXJ7aW5saW5lLXNpemU6NDY0cHh9Omhvc3QoW3NjYWxlPWxdKSAuc2VjdGlvbjpmaXJzdC1vZi10eXBle3BhZGRpbmctYmxvY2stc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9Omhvc3QoW3NjYWxlPWxdKSAuc2F2ZWQtY29sb3Jze2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maWxsLCAzMnB4KX06aG9zdChbc2NhbGU9bF0pIC5jb250cm9sLXNlY3Rpb257ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpiYXNlbGluZTtmbGV4LXdyYXA6d3JhcH06aG9zdChbc2NhbGU9bF0pIC5jb2xvci1oZXgtb3B0aW9uc3tkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH06aG9zdChbc2NhbGU9bF0pIC5jb2xvci1tb2RlLWNvbnRhaW5lcntmbGV4LXNocmluazozfS5jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX0uY29udHJvbC1hbmQtc2NvcGV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3RvdWNoLWFjdGlvbjpub25lfS5zY29wZXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0uc2NvcGU6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICk7b3V0bGluZS1vZmZzZXQ6MTZweH0uaGV4LWFuZC1jaGFubmVscy1ncm91cHtpbmxpbmUtc2l6ZToxMDAlfS5oZXgtYW5kLWNoYW5uZWxzLWdyb3VwLC5jb250cm9sLXNlY3Rpb257ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6d3JhcH0uc2VjdGlvbntwYWRkaW5nLWJsb2NrOjAgdmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9LnNlY3Rpb246Zmlyc3Qtb2YtdHlwZXtwYWRkaW5nLWJsb2NrLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29sb3ItcGlja2VyLXNwYWNpbmcpfS5zbGlkZXJze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKX0ucHJldmlldy1hbmQtc2xpZGVyc3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1jb2xvci1waWNrZXItc3BhY2luZyl9LmNvbG9yLWhleC1vcHRpb25zLC5zZWN0aW9uLS1zcGxpdHtmbGV4LWdyb3c6MX0uaGVhZGVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jb2xvci1tb2RlLWNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29sb3ItcGlja2VyLXNwYWNpbmcpfS5jaGFubmVsc3tkaXNwbGF5OmZsZXg7cm93LWdhcDowLjEyNXJlbX0uY2hhbm5lbFtkYXRhLWNoYW5uZWwtaW5kZXg9XFxcIjNcXFwiXXtpbmxpbmUtc2l6ZToxNTlweH06aG9zdChbc2NhbGU9c10pIC5jaGFubmVsc3tmbGV4LXdyYXA6d3JhcH06aG9zdChbc2NhbGU9c10pIC5jaGFubmVse2ZsZXgtYmFzaXM6MzAlO2ZsZXgtZ3JvdzoxfTpob3N0KFtzY2FsZT1zXSkgLmNoYW5uZWxbZGF0YS1jaGFubmVsLWluZGV4PVxcXCIzXFxcIl17aW5saW5lLXNpemU6dW5zZXQ7bWFyZ2luLWlubGluZS1zdGFydDp1bnNldH06aG9zdChbc2NhbGU9bF0pIC5jaGFubmVsW2RhdGEtY2hhbm5lbC1pbmRleD1cXFwiM1xcXCJde2lubGluZS1zaXplOjEzMXB4fS5zYXZlZC1jb2xvcnN7ZGlzcGxheTpncmlkO2dhcDowLjVyZW07cGFkZGluZy1ibG9jay1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbG9yLXBpY2tlci1zcGFjaW5nKTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCwgMjRweCl9LnNhdmVkLWNvbG9ycy1idXR0b25ze2Rpc3BsYXk6ZmxleH0uc2F2ZWQtY29sb3J7b3V0bGluZS1vZmZzZXQ6MDtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyfS5zYXZlZC1jb2xvcjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtvdXRsaW5lLW9mZnNldDoycHh9LnNhdmVkLWNvbG9yOmhvdmVye3RyYW5zaXRpb246b3V0bGluZS1jb2xvciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdCkgZWFzZS1pbi1vdXQ7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMik7b3V0bGluZS1vZmZzZXQ6MnB4fVwiO1xuXG5jb25zdCB0aHJvdHRsZUZvcjYwRnBzSW5NcyA9IDE2O1xuY29uc3QgQ29sb3JQaWNrZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbG9yUGlja2VyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29sb3JQaWNrZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJJbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbG9yUGlja2VySW5wdXRcIiwgNik7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5tb2RlID0gQ1NTQ29sb3JNb2RlLkhFWDtcbiAgICB0aGlzLnNoaWZ0S2V5Q2hhbm5lbEFkanVzdG1lbnQgPSAwO1xuICAgIHRoaXMuaGFuZGxlVGFiQWN0aXZhdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY2hhbm5lbE1vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sb3ItbW9kZVwiKTtcbiAgICAgIHRoaXMudXBkYXRlQ2hhbm5lbHNGcm9tQ29sb3IodGhpcy5jb2xvcik7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbG9yRmllbGRTY29wZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IGFycm93S2V5VG9YWU9mZnNldCA9IHtcbiAgICAgICAgQXJyb3dVcDogeyB4OiAwLCB5OiAtMTAgfSxcbiAgICAgICAgQXJyb3dSaWdodDogeyB4OiAxMCwgeTogMCB9LFxuICAgICAgICBBcnJvd0Rvd246IHsgeDogMCwgeTogMTAgfSxcbiAgICAgICAgQXJyb3dMZWZ0OiB7IHg6IC0xMCwgeTogMCB9XG4gICAgICB9O1xuICAgICAgaWYgKGFycm93S2V5VG9YWU9mZnNldFtrZXldKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2NvcGVPcmllbnRhdGlvbiA9IGtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBrZXkgPT09IFwiQXJyb3dVcFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICAgIHRoaXMuY2FwdHVyZUNvbG9yRmllbGRDb2xvcih0aGlzLmNvbG9yRmllbGRTY29wZUxlZnQgKyBhcnJvd0tleVRvWFlPZmZzZXRba2V5XS54IHx8IDAsIHRoaXMuY29sb3JGaWVsZFNjb3BlVG9wICsgYXJyb3dLZXlUb1hZT2Zmc2V0W2tleV0ueSB8fCAwLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUh1ZVNjb3BlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXIgPSBldmVudC5zaGlmdEtleSA/IDEwIDogMTtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IGFycm93S2V5VG9YT2Zmc2V0ID0ge1xuICAgICAgICBBcnJvd1VwOiAxLFxuICAgICAgICBBcnJvd1JpZ2h0OiAxLFxuICAgICAgICBBcnJvd0Rvd246IC0xLFxuICAgICAgICBBcnJvd0xlZnQ6IC0xXG4gICAgICB9O1xuICAgICAgaWYgKGFycm93S2V5VG9YT2Zmc2V0W2tleV0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBhcnJvd0tleVRvWE9mZnNldFtrZXldICogbW9kaWZpZXI7XG4gICAgICAgIGNvbnN0IGh1ZSA9IHRoaXMuYmFzZUNvbG9yRmllbGRDb2xvci5odWUoKTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3IuaHVlKGh1ZSArIGRlbHRhKTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KGNvbG9yLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhleElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHsgYWxsb3dFbXB0eSwgY29sb3I6IGNvbG9yJDEgfSA9IHRoaXM7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IGhleCA9IGlucHV0LnZhbHVlO1xuICAgICAgaWYgKGFsbG93RW1wdHkgJiYgIWhleCkge1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRIZXggPSBjb2xvciQxICYmIG5vcm1hbGl6ZUhleChoZXhpZnkoY29sb3IkMSwgYWxwaGFDb21wYXRpYmxlKHRoaXMubW9kZSkpKTtcbiAgICAgIGlmIChoZXggIT09IG5vcm1hbGl6ZWRIZXgpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KGNvbG9yKGhleCkpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTYXZlZENvbG9yU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzd2F0Y2ggPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgdGhpcy5pbnRlcm5hbENvbG9yU2V0KGNvbG9yKHN3YXRjaC5jb2xvcikpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFubmVsSW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGNoYW5uZWxJbmRleCA9IE51bWJlcihpbnB1dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNoYW5uZWwtaW5kZXhcIikpO1xuICAgICAgY29uc3QgaXNBbHBoYUNoYW5uZWwgPSBjaGFubmVsSW5kZXggPT09IDM7XG4gICAgICBjb25zdCBsaW1pdCA9IGlzQWxwaGFDaGFubmVsXG4gICAgICAgID8gT1BBQ0lUWV9MSU1JVFMubWF4XG4gICAgICAgIDogdGhpcy5jaGFubmVsTW9kZSA9PT0gXCJyZ2JcIlxuICAgICAgICAgID8gUkdCX0xJTUlUU1tPYmplY3Qua2V5cyhSR0JfTElNSVRTKVtjaGFubmVsSW5kZXhdXVxuICAgICAgICAgIDogSFNWX0xJTUlUU1tPYmplY3Qua2V5cyhIU1ZfTElNSVRTKVtjaGFubmVsSW5kZXhdXTtcbiAgICAgIGxldCBpbnB1dFZhbHVlO1xuICAgICAgaWYgKHRoaXMuYWxsb3dFbXB0eSAmJiAhaW5wdXQudmFsdWUpIHtcbiAgICAgICAgaW5wdXRWYWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCBhZGp1c3RlZFZhbHVlID0gdmFsdWUgKyB0aGlzLnNoaWZ0S2V5Q2hhbm5lbEFkanVzdG1lbnQ7XG4gICAgICAgIGNvbnN0IGNsYW1wZWQgPSBjbGFtcChhZGp1c3RlZFZhbHVlLCAwLCBsaW1pdCk7XG4gICAgICAgIGlucHV0VmFsdWUgPSBjbGFtcGVkLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAvLyBUT0RPOiByZWZhY3RvciBjYWxjaXRlLWlucHV0IHNvIHdlIGRvbid0IG5lZWQgdG8gc3luYyB0aGUgaW50ZXJuYWxzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvaXNzdWVzLzYxMDBcbiAgICAgIGlucHV0LmludGVybmFsU3luY0NoaWxkRWxWYWx1ZSgpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFubmVsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBjaGFubmVsSW5kZXggPSBOdW1iZXIoaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jaGFubmVsLWluZGV4XCIpKTtcbiAgICAgIGNvbnN0IGNoYW5uZWxzID0gWy4uLnRoaXMuY2hhbm5lbHNdO1xuICAgICAgY29uc3Qgc2hvdWxkQ2xlYXJDaGFubmVscyA9IHRoaXMuYWxsb3dFbXB0eSAmJiAhaW5wdXQudmFsdWU7XG4gICAgICBpZiAoc2hvdWxkQ2xlYXJDaGFubmVscykge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQWxwaGFDaGFubmVsID0gY2hhbm5lbEluZGV4ID09PSAzO1xuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xuICAgICAgY2hhbm5lbHNbY2hhbm5lbEluZGV4XSA9IGlzQWxwaGFDaGFubmVsID8gb3BhY2l0eVRvQWxwaGEodmFsdWUpIDogdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yRnJvbUNoYW5uZWxzKGNoYW5uZWxzKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2F2ZWRDb2xvcktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc0FjdGl2YXRpb25LZXkoZXZlbnQua2V5KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhhbmRsZVNhdmVkQ29sb3JTZWxlY3QoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb2xvckZpZWxkUG9pbnRlckRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBvZmZzZXRYLCBvZmZzZXRZIH0gPSBldmVudDtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLmdsb2JhbFBvaW50ZXJNb3ZlSGFuZGxlcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuZ2xvYmFsUG9pbnRlclVwSGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgdGhpcy5hY3RpdmVDYW52YXNJbmZvID0ge1xuICAgICAgICBjb250ZXh0OiB0aGlzLmNvbG9yRmllbGRSZW5kZXJpbmdDb250ZXh0LFxuICAgICAgICBib3VuZHM6IHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICB9O1xuICAgICAgdGhpcy5jYXB0dXJlQ29sb3JGaWVsZENvbG9yKG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgdGhpcy5jb2xvckZpZWxkU2NvcGVOb2RlLmZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUh1ZVNsaWRlclBvaW50ZXJEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgb2Zmc2V0WCB9ID0gZXZlbnQ7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5nbG9iYWxQb2ludGVyTW92ZUhhbmRsZXIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLmdsb2JhbFBvaW50ZXJVcEhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuYWN0aXZlQ2FudmFzSW5mbyA9IHtcbiAgICAgICAgY29udGV4dDogdGhpcy5odWVTbGlkZXJSZW5kZXJpbmdDb250ZXh0LFxuICAgICAgICBib3VuZHM6IHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIH07XG4gICAgICB0aGlzLmNhcHR1cmVIdWVTbGlkZXJDb2xvcihvZmZzZXRYKTtcbiAgICAgIHRoaXMuaHVlU2NvcGVOb2RlLmZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU9wYWNpdHlTbGlkZXJQb2ludGVyRG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IG9mZnNldFggfSA9IGV2ZW50O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuZ2xvYmFsUG9pbnRlck1vdmVIYW5kbGVyKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5nbG9iYWxQb2ludGVyVXBIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB0aGlzLmFjdGl2ZUNhbnZhc0luZm8gPSB7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMub3BhY2l0eVNsaWRlclJlbmRlcmluZ0NvbnRleHQsXG4gICAgICAgIGJvdW5kczogdGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIH07XG4gICAgICB0aGlzLmNhcHR1cmVPcGFjaXR5U2xpZGVyVmFsdWUob2Zmc2V0WCk7XG4gICAgICB0aGlzLm9wYWNpdHlTY29wZU5vZGUuZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuZ2xvYmFsUG9pbnRlclVwSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwcmV2aW91c2x5RHJhZ2dpbmcgPSB0aGlzLmFjdGl2ZUNhbnZhc0luZm87XG4gICAgICB0aGlzLmFjdGl2ZUNhbnZhc0luZm8gPSBudWxsO1xuICAgICAgdGhpcy5kcmF3Q29sb3JDb250cm9scygpO1xuICAgICAgaWYgKHByZXZpb3VzbHlEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmdsb2JhbFBvaW50ZXJNb3ZlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBhY3RpdmVDYW52YXNJbmZvLCBlbCB9ID0gdGhpcztcbiAgICAgIGlmICghZWwuaXNDb25uZWN0ZWQgfHwgIWFjdGl2ZUNhbnZhc0luZm8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBjb250ZXh0LCBib3VuZHMgfSA9IGFjdGl2ZUNhbnZhc0luZm87XG4gICAgICBsZXQgc2FtcGxpbmdYO1xuICAgICAgbGV0IHNhbXBsaW5nWTtcbiAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgICBpZiAoY29udGV4dC5jYW52YXMubWF0Y2hlcyhcIjpob3ZlclwiKSkge1xuICAgICAgICBzYW1wbGluZ1ggPSBjbGllbnRYIC0gYm91bmRzLng7XG4gICAgICAgIHNhbXBsaW5nWSA9IGNsaWVudFkgLSBib3VuZHMueTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBzbmFwIHggYW5kIHkgdG8gdGhlIGNsb3Nlc3QgZWRnZVxuICAgICAgICBpZiAoY2xpZW50WCA8IGJvdW5kcy54ICsgYm91bmRzLndpZHRoICYmIGNsaWVudFggPiBib3VuZHMueCkge1xuICAgICAgICAgIHNhbXBsaW5nWCA9IGNsaWVudFggLSBib3VuZHMueDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbGllbnRYIDwgYm91bmRzLngpIHtcbiAgICAgICAgICBzYW1wbGluZ1ggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNhbXBsaW5nWCA9IGJvdW5kcy53aWR0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWVudFkgPCBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgJiYgY2xpZW50WSA+IGJvdW5kcy55KSB7XG4gICAgICAgICAgc2FtcGxpbmdZID0gY2xpZW50WSAtIGJvdW5kcy55O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsaWVudFkgPCBib3VuZHMueSkge1xuICAgICAgICAgIHNhbXBsaW5nWSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2FtcGxpbmdZID0gYm91bmRzLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbnRleHQgPT09IHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYXB0dXJlQ29sb3JGaWVsZENvbG9yKHNhbXBsaW5nWCwgc2FtcGxpbmdZLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjb250ZXh0ID09PSB0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYXB0dXJlSHVlU2xpZGVyQ29sb3Ioc2FtcGxpbmdYKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgPT09IHRoaXMub3BhY2l0eVNsaWRlclJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYXB0dXJlT3BhY2l0eVNsaWRlclZhbHVlKHNhbXBsaW5nWCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlQ29sb3JGaWVsZFNjb3BlID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuY29sb3JGaWVsZFNjb3BlTm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlSHVlU2NvcGUgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5odWVTY29wZU5vZGUgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5yZW5kZXJDaGFubmVsc1RhYlRpdGxlID0gKGNoYW5uZWxNb2RlKSA9PiB7XG4gICAgICBjb25zdCB7IGNoYW5uZWxNb2RlOiBhY3RpdmVDaGFubmVsTW9kZSwgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGNoYW5uZWxNb2RlID09PSBhY3RpdmVDaGFubmVsTW9kZTtcbiAgICAgIGNvbnN0IGxhYmVsID0gY2hhbm5lbE1vZGUgPT09IFwicmdiXCIgPyBtZXNzYWdlcy5yZ2IgOiBtZXNzYWdlcy5oc3Y7XG4gICAgICByZXR1cm4gKGgoXCJjYWxjaXRlLXRhYi10aXRsZVwiLCB7IGNsYXNzOiBDU1MkMi5jb2xvck1vZGUsIFwiZGF0YS1jb2xvci1tb2RlXCI6IGNoYW5uZWxNb2RlLCBrZXk6IGNoYW5uZWxNb2RlLCBvbkNhbGNpdGVUYWJzQWN0aXZhdGU6IHRoaXMuaGFuZGxlVGFiQWN0aXZhdGUsIHNlbGVjdGVkOiBzZWxlY3RlZCB9LCBsYWJlbCkpO1xuICAgIH07XG4gICAgdGhpcy5yZW5kZXJDaGFubmVsc1RhYiA9IChjaGFubmVsTW9kZSkgPT4ge1xuICAgICAgY29uc3QgeyBhbGxvd0VtcHR5LCBjaGFubmVsTW9kZTogYWN0aXZlQ2hhbm5lbE1vZGUsIGNoYW5uZWxzLCBtZXNzYWdlcywgYWxwaGFDaGFubmVsIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBjaGFubmVsTW9kZSA9PT0gYWN0aXZlQ2hhbm5lbE1vZGU7XG4gICAgICBjb25zdCBpc1JnYiA9IGNoYW5uZWxNb2RlID09PSBcInJnYlwiO1xuICAgICAgY29uc3QgY2hhbm5lbEFyaWFMYWJlbHMgPSBpc1JnYlxuICAgICAgICA/IFttZXNzYWdlcy5yZWQsIG1lc3NhZ2VzLmdyZWVuLCBtZXNzYWdlcy5ibHVlXVxuICAgICAgICA6IFttZXNzYWdlcy5odWUsIG1lc3NhZ2VzLnNhdHVyYXRpb24sIG1lc3NhZ2VzLnZhbHVlXTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgICBjb25zdCBjaGFubmVsc1RvUmVuZGVyID0gYWxwaGFDaGFubmVsID8gY2hhbm5lbHMgOiBjaGFubmVscy5zbGljZSgwLCAzKTtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtdGFiXCIsIHsgY2xhc3M6IENTUyQyLmNvbnRyb2wsIGtleTogY2hhbm5lbE1vZGUsIHNlbGVjdGVkOiBzZWxlY3RlZCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNoYW5uZWxzLCBkaXI6IFwibHRyXCIgfSwgY2hhbm5lbHNUb1JlbmRlci5tYXAoKGNoYW5uZWxWYWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBbHBoYUNoYW5uZWwgPSBpbmRleCA9PT0gMztcbiAgICAgICAgaWYgKGlzQWxwaGFDaGFubmVsKSB7XG4gICAgICAgICAgY2hhbm5lbFZhbHVlID1cbiAgICAgICAgICAgIGFsbG93RW1wdHkgJiYgIWNoYW5uZWxWYWx1ZSA/IGNoYW5uZWxWYWx1ZSA6IGFscGhhVG9PcGFjaXR5KGNoYW5uZWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogdGhlIGNoYW5uZWwgY29udGFpbmVyIGlzIGx0ciwgc28gd2UgYXBwbHkgdGhlIGhvc3QncyBkaXJlY3Rpb24gKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2hhbm5lbChjaGFubmVsVmFsdWUsIGluZGV4LCBjaGFubmVsQXJpYUxhYmVsc1tpbmRleF0sIGRpcmVjdGlvbiwgaXNBbHBoYUNoYW5uZWwgPyBcIiVcIiA6IFwiXCIpO1xuICAgICAgfSkpKSk7XG4gICAgfTtcbiAgICB0aGlzLnJlbmRlckNoYW5uZWwgPSAodmFsdWUsIGluZGV4LCBhcmlhTGFiZWwsIGRpcmVjdGlvbiwgc3VmZml4KSA9PiB7XG4gICAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWlucHV0XCIsIHsgY2xhc3M6IENTUyQyLmNoYW5uZWwsIFwiZGF0YS1jaGFubmVsLWluZGV4XCI6IGluZGV4LCBkaXI6IGRpcmVjdGlvbiwga2V5OiBpbmRleCwgbGFiZWw6IGFyaWFMYWJlbCwgbGFuZzogdGhpcy5lZmZlY3RpdmVMb2NhbGUsIG51bWJlckJ1dHRvblR5cGU6IFwibm9uZVwiLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVDaGFubmVsQ2hhbmdlLCBvbkNhbGNpdGVJbnB1dElucHV0OiB0aGlzLmhhbmRsZUNoYW5uZWxJbnB1dCwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIsXG4gICAgICAgIC8vIHdvcmthcm91bmQgdG8gZW5zdXJlIGlucHV0IGJvcmRlcnMgb3ZlcmxhcCBhcyBkZXNpcmVkXG4gICAgICAgIC8vIHRoaXMgaXMgYmVjYXVzZSB0aGUgYnVpbGQgdHJhbnNmb3JtcyBtYXJnaW4tbGVmdCB0byBpdHNcbiAgICAgICAgLy8gbG9naWNhbC1wcm9wLCB3aGljaCBpcyB1bmRlc2lyZWQgYXMgY2hhbm5lbHMgYXJlIGFsd2F5cyBsdHJcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBpbmRleCA+IDAgJiYgISh0aGlzLnNjYWxlID09PSBcInNcIiAmJiB0aGlzLmFscGhhQ2hhbm5lbCAmJiBpbmRleCA9PT0gMykgPyBcIi0xcHhcIiA6IFwiXCJcbiAgICAgICAgfSwgc3VmZml4VGV4dDogc3VmZml4LCB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogdmFsdWU/LnRvU3RyaW5nKCkgfSkpO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVDb2xvciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yVG9EZWxldGUgPSBoZXhpZnkodGhpcy5jb2xvciwgdGhpcy5hbHBoYUNoYW5uZWwpO1xuICAgICAgY29uc3QgaW5TdG9yYWdlID0gdGhpcy5zYXZlZENvbG9ycy5pbmRleE9mKGNvbG9yVG9EZWxldGUpID4gLTE7XG4gICAgICBpZiAoIWluU3RvcmFnZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzYXZlZENvbG9ycyA9IHRoaXMuc2F2ZWRDb2xvcnMuZmlsdGVyKChjb2xvcikgPT4gY29sb3IgIT09IGNvbG9yVG9EZWxldGUpO1xuICAgICAgdGhpcy5zYXZlZENvbG9ycyA9IHNhdmVkQ29sb3JzO1xuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGAke0RFRkFVTFRfU1RPUkFHRV9LRVlfUFJFRklYfSR7dGhpcy5zdG9yYWdlSWR9YDtcbiAgICAgIGlmICh0aGlzLnN0b3JhZ2VJZCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzYXZlZENvbG9ycykpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zYXZlQ29sb3IgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb2xvclRvU2F2ZSA9IGhleGlmeSh0aGlzLmNvbG9yLCB0aGlzLmFscGhhQ2hhbm5lbCk7XG4gICAgICBjb25zdCBhbHJlYWR5U2F2ZWQgPSB0aGlzLnNhdmVkQ29sb3JzLmluZGV4T2YoY29sb3JUb1NhdmUpID4gLTE7XG4gICAgICBpZiAoYWxyZWFkeVNhdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNhdmVkQ29sb3JzID0gWy4uLnRoaXMuc2F2ZWRDb2xvcnMsIGNvbG9yVG9TYXZlXTtcbiAgICAgIHRoaXMuc2F2ZWRDb2xvcnMgPSBzYXZlZENvbG9ycztcbiAgICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBgJHtERUZBVUxUX1NUT1JBR0VfS0VZX1BSRUZJWH0ke3RoaXMuc3RvcmFnZUlkfWA7XG4gICAgICBpZiAodGhpcy5zdG9yYWdlSWQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc2F2ZWRDb2xvcnMpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZHJhd0NvbG9yQ29udHJvbHMgPSB0aHJvdHRsZSgodHlwZSA9IFwiYWxsXCIpID0+IHtcbiAgICAgIGlmICgodHlwZSA9PT0gXCJhbGxcIiB8fCB0eXBlID09PSBcImNvbG9yLWZpZWxkXCIpICYmIHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3Q29sb3JGaWVsZCgpO1xuICAgICAgfVxuICAgICAgaWYgKCh0eXBlID09PSBcImFsbFwiIHx8IHR5cGUgPT09IFwiaHVlLXNsaWRlclwiKSAmJiB0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5kcmF3SHVlU2xpZGVyKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hbHBoYUNoYW5uZWwgJiZcbiAgICAgICAgKHR5cGUgPT09IFwiYWxsXCIgfHwgdHlwZSA9PT0gXCJvcGFjaXR5LXNsaWRlclwiKSAmJlxuICAgICAgICB0aGlzLm9wYWNpdHlTbGlkZXJSZW5kZXJpbmdDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZHJhd09wYWNpdHlTbGlkZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aHJvdHRsZUZvcjYwRnBzSW5Ncyk7XG4gICAgdGhpcy5jYXB0dXJlQ29sb3JGaWVsZENvbG9yID0gKHgsIHksIHNraXBFcXVhbCA9IHRydWUpID0+IHtcbiAgICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBjb2xvckZpZWxkOiB7IGhlaWdodCwgd2lkdGggfSB9IH0gPSB0aGlzO1xuICAgICAgY29uc3Qgc2F0dXJhdGlvbiA9IE1hdGgucm91bmQoKEhTVl9MSU1JVFMucyAvIHdpZHRoKSAqIHgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnJvdW5kKChIU1ZfTElNSVRTLnYgLyBoZWlnaHQpICogKGhlaWdodCAtIHkpKTtcbiAgICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldCh0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3IuaHN2KCkuc2F0dXJhdGlvbnYoc2F0dXJhdGlvbikudmFsdWUodmFsdWUpLCBza2lwRXF1YWwpO1xuICAgIH07XG4gICAgdGhpcy5pbml0Q29sb3JGaWVsZCA9IChjYW52YXMpID0+IHtcbiAgICAgIHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgdGhpcy51cGRhdGVDYW52YXNTaXplKFwiY29sb3ItZmllbGRcIik7XG4gICAgICB0aGlzLmRyYXdDb2xvckNvbnRyb2xzKCk7XG4gICAgfTtcbiAgICB0aGlzLmluaXRIdWVTbGlkZXIgPSAoY2FudmFzKSA9PiB7XG4gICAgICB0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgdGhpcy51cGRhdGVDYW52YXNTaXplKFwiaHVlLXNsaWRlclwiKTtcbiAgICAgIHRoaXMuZHJhd0h1ZVNsaWRlcigpO1xuICAgIH07XG4gICAgdGhpcy5pbml0T3BhY2l0eVNsaWRlciA9IChjYW52YXMpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eVNsaWRlclJlbmRlcmluZ0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgdGhpcy51cGRhdGVDYW52YXNTaXplKFwib3BhY2l0eS1zbGlkZXJcIik7XG4gICAgICB0aGlzLmRyYXdPcGFjaXR5U2xpZGVyKCk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlT3BhY2l0eVNjb3BlID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eVNjb3BlTm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU9wYWNpdHlTY29wZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1vZGlmaWVyID0gZXZlbnQuc2hpZnRLZXkgPyAxMCA6IDE7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBhcnJvd0tleVRvWE9mZnNldCA9IHtcbiAgICAgICAgQXJyb3dVcDogMSxcbiAgICAgICAgQXJyb3dSaWdodDogMSxcbiAgICAgICAgQXJyb3dEb3duOiAtMSxcbiAgICAgICAgQXJyb3dMZWZ0OiAtMVxuICAgICAgfTtcbiAgICAgIGlmIChhcnJvd0tleVRvWE9mZnNldFtrZXldKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gb3BhY2l0eVRvQWxwaGEoYXJyb3dLZXlUb1hPZmZzZXRba2V5XSAqIG1vZGlmaWVyKTtcbiAgICAgICAgdGhpcy5jYXB0dXJlSHVlU2xpZGVyQ29sb3IodGhpcy5vcGFjaXR5U2NvcGVMZWZ0ICsgZGVsdGEpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hbGxvd0VtcHR5ID0gZmFsc2U7XG4gICAgdGhpcy5hbHBoYUNoYW5uZWwgPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5uZWxzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gREVGQVVMVF9DT0xPUiQxO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm1hdCA9IFwiYXV0b1wiO1xuICAgIHRoaXMuaGlkZUNoYW5uZWxzID0gZmFsc2U7XG4gICAgdGhpcy5oZXhEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZUhleCA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZVNhdmVkID0gZmFsc2U7XG4gICAgdGhpcy5zYXZlZERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc3RvcmFnZUlkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gbm9ybWFsaXplSGV4KGhleGlmeShERUZBVUxUX0NPTE9SJDEsIHRoaXMuYWxwaGFDaGFubmVsKSk7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGFubmVsTW9kZSA9IFwicmdiXCI7XG4gICAgdGhpcy5jaGFubmVscyA9IHRoaXMudG9DaGFubmVscyhERUZBVUxUX0NPTE9SJDEpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IERJTUVOU0lPTlMubTtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNhdmVkQ29sb3JzID0gW107XG4gICAgdGhpcy5jb2xvckZpZWxkU2NvcGVUb3AgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xvckZpZWxkU2NvcGVMZWZ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaHVlU2NvcGVMZWZ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BhY2l0eVNjb3BlTGVmdCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjb3BlT3JpZW50YXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgaGFuZGxlQWxwaGFDaGFubmVsQ2hhbmdlKGFscGhhQ2hhbm5lbCkge1xuICAgIGNvbnN0IHsgZm9ybWF0IH0gPSB0aGlzO1xuICAgIGlmIChhbHBoYUNoYW5uZWwgJiYgZm9ybWF0ICE9PSBcImF1dG9cIiAmJiAhYWxwaGFDb21wYXRpYmxlKGZvcm1hdCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgaWdub3JpbmcgYWxwaGFDaGFubmVsIGFzIHRoZSBjdXJyZW50IGZvcm1hdCAoJHtmb3JtYXR9KSBkb2VzIG5vdCBzdXBwb3J0IGFscGhhYCk7XG4gICAgICB0aGlzLmFscGhhQ2hhbm5lbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDb2xvckNoYW5nZShjb2xvciwgb2xkQ29sb3IpIHtcbiAgICB0aGlzLmRyYXdDb2xvckNvbnRyb2xzKCk7XG4gICAgdGhpcy51cGRhdGVDaGFubmVsc0Zyb21Db2xvcihjb2xvcik7XG4gICAgdGhpcy5wcmV2aW91c0NvbG9yID0gb2xkQ29sb3I7XG4gIH1cbiAgaGFuZGxlRm9ybWF0Q2hhbmdlKGZvcm1hdCkge1xuICAgIHRoaXMuc2V0TW9kZShmb3JtYXQpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldCh0aGlzLmNvbG9yLCBmYWxzZSwgXCJpbnRlcm5hbFwiKTtcbiAgfVxuICBoYW5kbGVTY2FsZUNoYW5nZShzY2FsZSA9IFwibVwiKSB7XG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKHNjYWxlKTtcbiAgICB0aGlzLnVwZGF0ZUNhbnZhc1NpemUoXCJhbGxcIik7XG4gICAgdGhpcy5kcmF3Q29sb3JDb250cm9scygpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBoYW5kbGVWYWx1ZUNoYW5nZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBjb25zdCB7IGFsbG93RW1wdHksIGZvcm1hdCB9ID0gdGhpcztcbiAgICBjb25zdCBjaGVja01vZGUgPSAhYWxsb3dFbXB0eSB8fCB2YWx1ZTtcbiAgICBsZXQgbW9kZUNoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2tNb2RlKSB7XG4gICAgICBjb25zdCBuZXh0TW9kZSA9IHBhcnNlTW9kZSh2YWx1ZSk7XG4gICAgICBpZiAoIW5leHRNb2RlIHx8IChmb3JtYXQgIT09IFwiYXV0b1wiICYmIG5leHRNb2RlICE9PSBmb3JtYXQpKSB7XG4gICAgICAgIHRoaXMuc2hvd0luY29tcGF0aWJsZUNvbG9yV2FybmluZyh2YWx1ZSwgZm9ybWF0KTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtb2RlQ2hhbmdlZCA9IHRoaXMubW9kZSAhPT0gbmV4dE1vZGU7XG4gICAgICB0aGlzLnNldE1vZGUobmV4dE1vZGUsIHRoaXMuaW50ZXJuYWxDb2xvclVwZGF0ZUNvbnRleHQgPT09IG51bGwpO1xuICAgIH1cbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuYWN0aXZlQ2FudmFzSW5mbztcbiAgICBpZiAodGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9PT0gXCJpbml0aWFsXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW50ZXJuYWxDb2xvclVwZGF0ZUNvbnRleHQgPT09IFwidXNlci1pbnRlcmFjdGlvblwiKSB7XG4gICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlcklucHV0LmVtaXQoKTtcbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb2xvciQxID0gYWxsb3dFbXB0eSAmJiAhdmFsdWVcbiAgICAgID8gbnVsbFxuICAgICAgOiBjb2xvcih2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBhbHBoYUNvbXBhdGlibGUodGhpcy5tb2RlKVxuICAgICAgICA/IG5vcm1hbGl6ZUNvbG9yKHZhbHVlKVxuICAgICAgICA6IHZhbHVlKTtcbiAgICBjb25zdCBjb2xvckNoYW5nZWQgPSAhY29sb3JFcXVhbChjb2xvciQxLCB0aGlzLmNvbG9yKTtcbiAgICBpZiAobW9kZUNoYW5nZWQgfHwgY29sb3JDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoY29sb3IkMSwgdGhpcy5hbHBoYUNoYW5uZWwgJiYgISh0aGlzLm1vZGUuZW5kc1dpdGgoXCJhXCIpIHx8IHRoaXMubW9kZS5lbmRzV2l0aChcImEtY3NzXCIpKSwgXCJpbnRlcm5hbFwiKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJhc2VDb2xvckZpZWxkQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3IgfHwgdGhpcy5wcmV2aW91c0NvbG9yIHx8IERFRkFVTFRfQ09MT1IkMTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIHVzaW5nIEBMaXN0ZW4gYXMgYSB3b3JrYXJvdW5kIGZvciBWRE9NIGxpc3RlbmVyIG5vdCBmaXJpbmdcbiAgaGFuZGxlQ2hhbm5lbEtleVVwT3JEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5zaGlmdEtleUNoYW5uZWxBZGp1c3RtZW50ID0gMDtcbiAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgaWYgKChrZXkgIT09IFwiQXJyb3dVcFwiICYmIGtleSAhPT0gXCJBcnJvd0Rvd25cIikgfHxcbiAgICAgICFldmVudC5jb21wb3NlZFBhdGgoKS5zb21lKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdD8uY29udGFpbnMoQ1NTJDIuY2hhbm5lbCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc2hpZnRLZXkgfSA9IGV2ZW50O1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmludGVybmFsQ29sb3JTZXQodGhpcy5wcmV2aW91c0NvbG9yKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0aGlzIGdldHMgYXBwbGllZCB0byB0aGUgaW5wdXQncyB1cC9kb3duIGFycm93IGluY3JlbWVudC9kZWNyZW1lbnRcbiAgICBjb25zdCBjb21wbGVtZW50YXJ5QnVtcCA9IDk7XG4gICAgdGhpcy5zaGlmdEtleUNoYW5uZWxBZGp1c3RtZW50ID1cbiAgICAgIGtleSA9PT0gXCJBcnJvd1VwXCIgJiYgc2hpZnRLZXlcbiAgICAgICAgPyBjb21wbGVtZW50YXJ5QnVtcFxuICAgICAgICA6IGtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJiBzaGlmdEtleVxuICAgICAgICAgID8gLWNvbXBsZW1lbnRhcnlCdW1wXG4gICAgICAgICAgOiAwO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgY29uc3QgeyBhbGxvd0VtcHR5LCBjb2xvcjogY29sb3IkMSwgZm9ybWF0LCB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCB3aWxsU2V0Tm9Db2xvciA9IGFsbG93RW1wdHkgJiYgIXZhbHVlO1xuICAgIGNvbnN0IHBhcnNlZE1vZGUgPSBwYXJzZU1vZGUodmFsdWUpO1xuICAgIGNvbnN0IHZhbHVlSXNDb21wYXRpYmxlID0gd2lsbFNldE5vQ29sb3IgfHwgKGZvcm1hdCA9PT0gXCJhdXRvXCIgJiYgcGFyc2VkTW9kZSkgfHwgZm9ybWF0ID09PSBwYXJzZWRNb2RlO1xuICAgIGNvbnN0IGluaXRpYWxDb2xvciA9IHdpbGxTZXROb0NvbG9yID8gbnVsbCA6IHZhbHVlSXNDb21wYXRpYmxlID8gY29sb3IodmFsdWUpIDogY29sb3IkMTtcbiAgICBpZiAoIXZhbHVlSXNDb21wYXRpYmxlKSB7XG4gICAgICB0aGlzLnNob3dJbmNvbXBhdGlibGVDb2xvcldhcm5pbmcodmFsdWUsIGZvcm1hdCk7XG4gICAgfVxuICAgIHRoaXMuc2V0TW9kZShmb3JtYXQsIGZhbHNlKTtcbiAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoaW5pdGlhbENvbG9yLCBmYWxzZSwgXCJpbml0aWFsXCIpO1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucyh0aGlzLnNjYWxlKTtcbiAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7REVGQVVMVF9TVE9SQUdFX0tFWV9QUkVGSVh9JHt0aGlzLnN0b3JhZ2VJZH1gO1xuICAgIGlmICh0aGlzLnN0b3JhZ2VJZCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSkge1xuICAgICAgdGhpcy5zYXZlZENvbG9ycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkpO1xuICAgIH1cbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5nbG9iYWxQb2ludGVyTW92ZUhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5nbG9iYWxQb2ludGVyVXBIYW5kbGVyKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFsbG93RW1wdHksIGNoYW5uZWxzRGlzYWJsZWQsIGNvbG9yLCBjb2xvckZpZWxkU2NvcGVMZWZ0LCBjb2xvckZpZWxkU2NvcGVUb3AsIGRpbWVuc2lvbnM6IHsgY29sb3JGaWVsZDogeyB3aWR0aDogY29sb3JGaWVsZFdpZHRoIH0sIHNsaWRlcjogeyB3aWR0aDogc2xpZGVyV2lkdGggfSwgdGh1bWI6IHsgcmFkaXVzOiB0aHVtYlJhZGl1cyB9IH0sIGhleERpc2FibGVkLCBoaWRlQ2hhbm5lbHMsIGhpZGVIZXgsIGhpZGVTYXZlZCwgaHVlU2NvcGVMZWZ0LCBtZXNzYWdlcywgYWxwaGFDaGFubmVsLCBvcGFjaXR5U2NvcGVMZWZ0LCBzYXZlZENvbG9ycywgc2F2ZWREaXNhYmxlZCwgc2NhbGUsIHNjb3BlT3JpZW50YXRpb24gfSA9IHRoaXM7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2xvckluSGV4ID0gY29sb3IgPyBoZXhpZnkoY29sb3IsIGFscGhhQ2hhbm5lbCkgOiBudWxsO1xuICAgIGNvbnN0IGh1ZVRvcCA9IHRodW1iUmFkaXVzO1xuICAgIGNvbnN0IGh1ZUxlZnQgPSBodWVTY29wZUxlZnQgPz8gKHNsaWRlcldpZHRoICogREVGQVVMVF9DT0xPUiQxLmh1ZSgpKSAvIEhTVl9MSU1JVFMuaDtcbiAgICBjb25zdCBvcGFjaXR5VG9wID0gdGh1bWJSYWRpdXM7XG4gICAgY29uc3Qgb3BhY2l0eUxlZnQgPSBvcGFjaXR5U2NvcGVMZWZ0ID8/XG4gICAgICAoY29sb3JGaWVsZFdpZHRoICogYWxwaGFUb09wYWNpdHkoREVGQVVMVF9DT0xPUiQxLmFscGhhKCkpKSAvIE9QQUNJVFlfTElNSVRTLm1heDtcbiAgICBjb25zdCBub0NvbG9yID0gY29sb3IgPT09IG51bGw7XG4gICAgY29uc3QgdmVydGljYWwgPSBzY29wZU9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCI7XG4gICAgY29uc3Qgbm9IZXggPSBoZXhEaXNhYmxlZCB8fCBoaWRlSGV4O1xuICAgIGNvbnN0IG5vQ2hhbm5lbHMgPSBjaGFubmVsc0Rpc2FibGVkIHx8IGhpZGVDaGFubmVscztcbiAgICBjb25zdCBub1NhdmVkID0gc2F2ZWREaXNhYmxlZCB8fCBoaWRlU2F2ZWQ7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRhaW5lciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRyb2xBbmRTY29wZSB9LCBoKFwiY2FudmFzXCIsIHsgY2xhc3M6IENTUyQyLmNvbG9yRmllbGQsIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlQ29sb3JGaWVsZFBvaW50ZXJEb3duLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuaW5pdENvbG9yRmllbGQgfSksIGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogdmVydGljYWwgPyBtZXNzYWdlcy52YWx1ZSA6IG1lc3NhZ2VzLnNhdHVyYXRpb24sIFwiYXJpYS12YWx1ZW1heFwiOiB2ZXJ0aWNhbCA/IEhTVl9MSU1JVFMudiA6IEhTVl9MSU1JVFMucywgXCJhcmlhLXZhbHVlbWluXCI6IFwiMFwiLCBcImFyaWEtdmFsdWVub3dcIjogKHZlcnRpY2FsID8gY29sb3I/LnNhdHVyYXRpb252KCkgOiBjb2xvcj8udmFsdWUoKSkgfHwgXCIwXCIsIGNsYXNzOiB7IFtDU1MkMi5zY29wZV06IHRydWUsIFtDU1MkMi5jb2xvckZpZWxkU2NvcGVdOiB0cnVlIH0sIG9uS2V5RG93bjogdGhpcy5oYW5kbGVDb2xvckZpZWxkU2NvcGVLZXlEb3duLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyB0b3A6IGAke2NvbG9yRmllbGRTY29wZVRvcCB8fCAwfXB4YCwgbGVmdDogYCR7Y29sb3JGaWVsZFNjb3BlTGVmdCB8fCAwfXB4YCB9LCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zdG9yZUNvbG9yRmllbGRTY29wZSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIucHJldmlld0FuZFNsaWRlcnMgfSwgaChcImNhbGNpdGUtY29sb3ItcGlja2VyLXN3YXRjaFwiLCB7IGNsYXNzOiBDU1MkMi5wcmV2aWV3LCBjb2xvcjogc2VsZWN0ZWRDb2xvckluSGV4LCBzY2FsZTogXCJsXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuc2xpZGVycyB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRyb2xBbmRTY29wZSB9LCBoKFwiY2FudmFzXCIsIHsgY2xhc3M6IHsgW0NTUyQyLnNsaWRlcl06IHRydWUsIFtDU1MkMi5odWVTbGlkZXJdOiB0cnVlIH0sIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlSHVlU2xpZGVyUG9pbnRlckRvd24sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5pbml0SHVlU2xpZGVyIH0pLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLmh1ZSwgXCJhcmlhLXZhbHVlbWF4XCI6IEhTVl9MSU1JVFMuaCwgXCJhcmlhLXZhbHVlbWluXCI6IFwiMFwiLCBcImFyaWEtdmFsdWVub3dcIjogY29sb3I/LnJvdW5kKCkuaHVlKCkgfHwgREVGQVVMVF9DT0xPUiQxLnJvdW5kKCkuaHVlKCksIGNsYXNzOiB7IFtDU1MkMi5zY29wZV06IHRydWUsIFtDU1MkMi5odWVTY29wZV06IHRydWUgfSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUh1ZVNjb3BlS2V5RG93biwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgdG9wOiBgJHtodWVUb3B9cHhgLCBsZWZ0OiBgJHtodWVMZWZ0fXB4YCB9LCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zdG9yZUh1ZVNjb3BlIH0pKSwgYWxwaGFDaGFubmVsID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuY29udHJvbEFuZFNjb3BlIH0sIGgoXCJjYW52YXNcIiwgeyBjbGFzczogeyBbQ1NTJDIuc2xpZGVyXTogdHJ1ZSwgW0NTUyQyLm9wYWNpdHlTbGlkZXJdOiB0cnVlIH0sIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlT3BhY2l0eVNsaWRlclBvaW50ZXJEb3duLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuaW5pdE9wYWNpdHlTbGlkZXIgfSksIGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMub3BhY2l0eSwgXCJhcmlhLXZhbHVlbWF4XCI6IE9QQUNJVFlfTElNSVRTLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IE9QQUNJVFlfTElNSVRTLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IChjb2xvciB8fCBERUZBVUxUX0NPTE9SJDEpLnJvdW5kKCkuYWxwaGEoKSwgY2xhc3M6IHsgW0NTUyQyLnNjb3BlXTogdHJ1ZSwgW0NTUyQyLm9wYWNpdHlTY29wZV06IHRydWUgfSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZU9wYWNpdHlTY29wZUtleURvd24sIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IHRvcDogYCR7b3BhY2l0eVRvcH1weGAsIGxlZnQ6IGAke29wYWNpdHlMZWZ0fXB4YCB9LCB0YWJpbmRleDogXCIwXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zdG9yZU9wYWNpdHlTY29wZSB9KSkpIDogbnVsbCkpLCBub0hleCAmJiBub0NoYW5uZWxzID8gbnVsbCA6IChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUyQyLmNvbnRyb2xTZWN0aW9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUyQyLnNlY3Rpb25dOiB0cnVlXG4gICAgICB9IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuaGV4QW5kQ2hhbm5lbHNHcm91cCB9LCBub0hleCA/IG51bGwgOiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5oZXhPcHRpb25zIH0sIGgoXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1oZXgtaW5wdXRcIiwgeyBhbGxvd0VtcHR5OiBhbGxvd0VtcHR5LCBhbHBoYUNoYW5uZWw6IGFscGhhQ2hhbm5lbCwgY2xhc3M6IENTUyQyLmNvbnRyb2wsIG1lc3NhZ2VzOiBtZXNzYWdlcywgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgb25DYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVIZXhJbnB1dENoYW5nZSwgc2NhbGU6IHNjYWxlLCB2YWx1ZTogc2VsZWN0ZWRDb2xvckluSGV4IH0pKSksIG5vQ2hhbm5lbHMgPyBudWxsIDogKGgoXCJjYWxjaXRlLXRhYnNcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDIuY29sb3JNb2RlQ29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUyQyLnNwbGl0U2VjdGlvbl06IHRydWVcbiAgICAgIH0sIHNjYWxlOiBzY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0sIGgoXCJjYWxjaXRlLXRhYi1uYXZcIiwgeyBzbG90OiBcInRpdGxlLWdyb3VwXCIgfSwgdGhpcy5yZW5kZXJDaGFubmVsc1RhYlRpdGxlKFwicmdiXCIpLCB0aGlzLnJlbmRlckNoYW5uZWxzVGFiVGl0bGUoXCJoc3ZcIikpLCB0aGlzLnJlbmRlckNoYW5uZWxzVGFiKFwicmdiXCIpLCB0aGlzLnJlbmRlckNoYW5uZWxzVGFiKFwiaHN2XCIpKSkpKSksIG5vU2F2ZWQgPyBudWxsIDogKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTJDIuc2F2ZWRDb2xvcnNTZWN0aW9uXTogdHJ1ZSwgW0NTUyQyLnNlY3Rpb25dOiB0cnVlIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5oZWFkZXIgfSwgaChcImxhYmVsXCIsIG51bGwsIG1lc3NhZ2VzLnNhdmVkKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5zYXZlZENvbG9yc0J1dHRvbnMgfSwgaChcImNhbGNpdGUtYnV0dG9uXCIsIHsgYXBwZWFyYW5jZTogXCJ0cmFuc3BhcmVudFwiLCBjbGFzczogQ1NTJDIuZGVsZXRlQ29sb3IsIGRpc2FibGVkOiBub0NvbG9yLCBpY29uU3RhcnQ6IFwibWludXNcIiwga2luZDogXCJuZXV0cmFsXCIsIGxhYmVsOiBtZXNzYWdlcy5kZWxldGVDb2xvciwgb25DbGljazogdGhpcy5kZWxldGVDb2xvciwgc2NhbGU6IHNjYWxlLCB0eXBlOiBcImJ1dHRvblwiIH0pLCBoKFwiY2FsY2l0ZS1idXR0b25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGNsYXNzOiBDU1MkMi5zYXZlQ29sb3IsIGRpc2FibGVkOiBub0NvbG9yLCBpY29uU3RhcnQ6IFwicGx1c1wiLCBraW5kOiBcIm5ldXRyYWxcIiwgbGFiZWw6IG1lc3NhZ2VzLnNhdmVDb2xvciwgb25DbGljazogdGhpcy5zYXZlQ29sb3IsIHNjYWxlOiBzY2FsZSwgdHlwZTogXCJidXR0b25cIiB9KSkpLCBzYXZlZENvbG9ycy5sZW5ndGggPiAwID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuc2F2ZWRDb2xvcnMgfSwgW1xuICAgICAgLi4uc2F2ZWRDb2xvcnMubWFwKChjb2xvcikgPT4gKGgoXCJjYWxjaXRlLWNvbG9yLXBpY2tlci1zd2F0Y2hcIiwgeyBjbGFzczogQ1NTJDIuc2F2ZWRDb2xvciwgY29sb3I6IGNvbG9yLCBrZXk6IGNvbG9yLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVNhdmVkQ29sb3JTZWxlY3QsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVTYXZlZENvbG9yS2V5RG93biwgc2NhbGU6IHNjYWxlLCB0YWJJbmRleDogMCB9KSkpXG4gICAgXSkpIDogbnVsbCkpKSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG4gIHNob3dJbmNvbXBhdGlibGVDb2xvcldhcm5pbmcodmFsdWUsIGZvcm1hdCkge1xuICAgIGNvbnNvbGUud2FybihgaWdub3JpbmcgY29sb3IgdmFsdWUgKCR7dmFsdWV9KSBhcyBpdCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBjdXJyZW50IGZvcm1hdCAoJHtmb3JtYXR9KWApO1xuICB9XG4gIHNldE1vZGUoZm9ybWF0LCB3YXJuID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1vZGUgPSBmb3JtYXQgPT09IFwiYXV0b1wiID8gdGhpcy5tb2RlIDogZm9ybWF0O1xuICAgIHRoaXMubW9kZSA9IHRoaXMuZW5zdXJlQ29tcGF0aWJsZU1vZGUobW9kZSwgd2Fybik7XG4gIH1cbiAgZW5zdXJlQ29tcGF0aWJsZU1vZGUobW9kZSwgd2Fybikge1xuICAgIGNvbnN0IHsgYWxwaGFDaGFubmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlzQWxwaGFDb21wYXRpYmxlID0gYWxwaGFDb21wYXRpYmxlKG1vZGUpO1xuICAgIGlmIChhbHBoYUNoYW5uZWwgJiYgIWlzQWxwaGFDb21wYXRpYmxlKSB7XG4gICAgICBjb25zdCBhbHBoYU1vZGUgPSB0b0FscGhhTW9kZShtb2RlKTtcbiAgICAgIGlmICh3YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybihgc2V0dGluZyBmb3JtYXQgdG8gKCR7YWxwaGFNb2RlfSkgYXMgdGhlIHByb3ZpZGVkIG9uZSAoJHttb2RlfSkgZG9lcyBub3Qgc3VwcG9ydCBhbHBoYWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFscGhhTW9kZTtcbiAgICB9XG4gICAgaWYgKCFhbHBoYUNoYW5uZWwgJiYgaXNBbHBoYUNvbXBhdGlibGUpIHtcbiAgICAgIGNvbnN0IG5vbkFscGhhTW9kZSA9IHRvTm9uQWxwaGFNb2RlKG1vZGUpO1xuICAgICAgaWYgKHdhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBzZXR0aW5nIGZvcm1hdCB0byAoJHtub25BbHBoYU1vZGV9KSBhcyB0aGUgcHJvdmlkZWQgb25lICgke21vZGV9KSBkb2VzIG5vdCBzdXBwb3J0IGFscGhhYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9uQWxwaGFNb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbW9kZTtcbiAgfVxuICBjYXB0dXJlSHVlU2xpZGVyQ29sb3IoeCkge1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgd2lkdGggfSB9IH0gPSB0aGlzO1xuICAgIGNvbnN0IGh1ZSA9ICgzNjAgLyB3aWR0aCkgKiB4O1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclNldCh0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3IuaHVlKGh1ZSksIGZhbHNlKTtcbiAgfVxuICBjYXB0dXJlT3BhY2l0eVNsaWRlclZhbHVlKHgpIHtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnM6IHsgc2xpZGVyOiB7IHdpZHRoIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCBhbHBoYSA9IG9wYWNpdHlUb0FscGhhKChPUEFDSVRZX0xJTUlUUy5tYXggLyB3aWR0aCkgKiB4KTtcbiAgICB0aGlzLmludGVybmFsQ29sb3JTZXQodGhpcy5iYXNlQ29sb3JGaWVsZENvbG9yLmFscGhhKGFscGhhKSwgZmFsc2UpO1xuICB9XG4gIGludGVybmFsQ29sb3JTZXQoY29sb3IsIHNraXBFcXVhbCA9IHRydWUsIGNvbnRleHQgPSBcInVzZXItaW50ZXJhY3Rpb25cIikge1xuICAgIGlmIChza2lwRXF1YWwgJiYgY29sb3JFcXVhbChjb2xvciwgdGhpcy5jb2xvcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yVXBkYXRlQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnRvVmFsdWUoY29sb3IpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvclVwZGF0ZUNvbnRleHQgPSBudWxsO1xuICB9XG4gIHRvVmFsdWUoY29sb3IsIGZvcm1hdCA9IHRoaXMubW9kZSkge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBoZXhNb2RlID0gXCJoZXhcIjtcbiAgICBpZiAoZm9ybWF0LmluY2x1ZGVzKGhleE1vZGUpKSB7XG4gICAgICBjb25zdCBoYXNBbHBoYSA9IGZvcm1hdCA9PT0gQ1NTQ29sb3JNb2RlLkhFWEE7XG4gICAgICByZXR1cm4gbm9ybWFsaXplSGV4KGhleGlmeShjb2xvci5yb3VuZCgpLCBoYXNBbHBoYSksIGhhc0FscGhhKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdC5pbmNsdWRlcyhcIi1jc3NcIikpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JbZm9ybWF0LnJlcGxhY2UoXCItY3NzXCIsIFwiXCIpLnJlcGxhY2UoXCJhXCIsIFwiXCIpXSgpLnJvdW5kKCkuc3RyaW5nKCk7XG4gICAgICAvLyBDb2xvciBvbWl0cyBhbHBoYSB2YWx1ZXMgd2hlbiBhbHBoYSBpcyAxXG4gICAgICBjb25zdCBuZWVkVG9JbmplY3RBbHBoYSA9IChmb3JtYXQuZW5kc1dpdGgoXCJhXCIpIHx8IGZvcm1hdC5lbmRzV2l0aChcImEtY3NzXCIpKSAmJiBjb2xvci5hbHBoYSgpID09PSAxO1xuICAgICAgaWYgKG5lZWRUb0luamVjdEFscGhhKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gdmFsdWUuc2xpY2UoMCwgMyk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNsaWNlKDQsIC0xKTtcbiAgICAgICAgcmV0dXJuIGAke21vZGVsfWEoJHt2YWx1ZXN9LCAke2NvbG9yLmFscGhhKCl9KWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yT2JqZWN0ID0gXG4gICAgLyogQ29sb3IoKSBkb2VzIG5vdCBzdXBwb3J0IGhzdmEsIGhzbGEgbm9yIHJnYmEsIHNvIHdlIHVzZSB0aGUgbm9uLWFscGhhIG1vZGUgKi9cbiAgICBjb2xvclt0b05vbkFscGhhTW9kZShmb3JtYXQpXSgpLnJvdW5kKCkub2JqZWN0KCk7XG4gICAgaWYgKGZvcm1hdC5lbmRzV2l0aChcImFcIikpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVBbHBoYShjb2xvck9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBjb2xvck9iamVjdDtcbiAgfVxuICBnZXRTbGlkZXJDYXBTcGFjaW5nKCkge1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgaGVpZ2h0IH0sIHRodW1iOiB7IHJhZGl1cyB9IH0gfSA9IHRoaXM7XG4gICAgcmV0dXJuIHJhZGl1cyAqIDIgLSBoZWlnaHQ7XG4gIH1cbiAgdXBkYXRlRGltZW5zaW9ucyhzY2FsZSA9IFwibVwiKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gRElNRU5TSU9OU1tzY2FsZV07XG4gIH1cbiAgZHJhd0NvbG9yRmllbGQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQ7XG4gICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IGNvbG9yRmllbGQ6IHsgaGVpZ2h0LCB3aWR0aCB9IH0gfSA9IHRoaXM7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmJhc2VDb2xvckZpZWxkQ29sb3JcbiAgICAgIC5oc3YoKVxuICAgICAgLnNhdHVyYXRpb252KDEwMClcbiAgICAgIC52YWx1ZSgxMDApXG4gICAgICAuYWxwaGEoMSlcbiAgICAgIC5zdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IHdoaXRlR3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICB3aGl0ZUdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIik7XG4gICAgd2hpdGVHcmFkaWVudC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gd2hpdGVHcmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGJsYWNrR3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGhlaWdodCk7XG4gICAgYmxhY2tHcmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICAgIGJsYWNrR3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgwLDAsMCwxKVwiKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGJsYWNrR3JhZGllbnQ7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmRyYXdBY3RpdmVDb2xvckZpZWxkQ29sb3IoKTtcbiAgfVxuICBzZXRDYW52YXNDb250ZXh0U2l6ZShjYW52YXMsIHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgaWYgKCFjYW52YXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb250ZXh0LnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pO1xuICB9XG4gIHVwZGF0ZUNhbnZhc1NpemUoY29udGV4dCA9IFwiYWxsXCIpIHtcbiAgICBjb25zdCB7IGRpbWVuc2lvbnMgfSA9IHRoaXM7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiYWxsXCIgfHwgY29udGV4dCA9PT0gXCJjb2xvci1maWVsZFwiKSB7XG4gICAgICB0aGlzLnNldENhbnZhc0NvbnRleHRTaXplKHRoaXMuY29sb3JGaWVsZFJlbmRlcmluZ0NvbnRleHQ/LmNhbnZhcywgZGltZW5zaW9ucy5jb2xvckZpZWxkKTtcbiAgICB9XG4gICAgY29uc3QgYWRqdXN0ZWRTbGlkZXJEaW1lbnNpb25zID0ge1xuICAgICAgd2lkdGg6IGRpbWVuc2lvbnMuc2xpZGVyLndpZHRoLFxuICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zLnNsaWRlci5oZWlnaHQgKyAoZGltZW5zaW9ucy50aHVtYi5yYWRpdXMgLSBkaW1lbnNpb25zLnNsaWRlci5oZWlnaHQgLyAyKSAqIDJcbiAgICB9O1xuICAgIGlmIChjb250ZXh0ID09PSBcImFsbFwiIHx8IGNvbnRleHQgPT09IFwiaHVlLXNsaWRlclwiKSB7XG4gICAgICB0aGlzLnNldENhbnZhc0NvbnRleHRTaXplKHRoaXMuaHVlU2xpZGVyUmVuZGVyaW5nQ29udGV4dD8uY2FudmFzLCBhZGp1c3RlZFNsaWRlckRpbWVuc2lvbnMpO1xuICAgIH1cbiAgICBpZiAoY29udGV4dCA9PT0gXCJhbGxcIiB8fCBjb250ZXh0ID09PSBcIm9wYWNpdHktc2xpZGVyXCIpIHtcbiAgICAgIHRoaXMuc2V0Q2FudmFzQ29udGV4dFNpemUodGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dD8uY2FudmFzLCBhZGp1c3RlZFNsaWRlckRpbWVuc2lvbnMpO1xuICAgIH1cbiAgfVxuICBkcmF3QWN0aXZlQ29sb3JGaWVsZENvbG9yKCkge1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHRoaXM7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoc3ZDb2xvciA9IGNvbG9yLmhzdigpO1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBjb2xvckZpZWxkOiB7IGhlaWdodCwgd2lkdGggfSwgdGh1bWI6IHsgcmFkaXVzIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gaHN2Q29sb3Iuc2F0dXJhdGlvbnYoKSAvIChIU1ZfTElNSVRTLnMgLyB3aWR0aCk7XG4gICAgY29uc3QgeSA9IGhlaWdodCAtIGhzdkNvbG9yLnZhbHVlKCkgLyAoSFNWX0xJTUlUUy52IC8gaGVpZ2h0KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xvckZpZWxkU2NvcGVMZWZ0ID0geDtcbiAgICAgIHRoaXMuY29sb3JGaWVsZFNjb3BlVG9wID0geTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdUaHVtYih0aGlzLmNvbG9yRmllbGRSZW5kZXJpbmdDb250ZXh0LCByYWRpdXMsIHgsIHksIGhzdkNvbG9yKTtcbiAgfVxuICBkcmF3VGh1bWIoY29udGV4dCwgcmFkaXVzLCB4LCB5LCBjb2xvcikge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSAwO1xuICAgIGNvbnN0IGVuZEFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgY29uc3Qgb3V0bGluZVdpZHRoID0gMTtcbiAgICByYWRpdXMgPSByYWRpdXMgLSBvdXRsaW5lV2lkdGg7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwwLDAsMC4zKVwiO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gb3V0bGluZVdpZHRoO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh4LCB5LCByYWRpdXMgLSAzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvci5yZ2IoKS5hbHBoYSgxKS5zdHJpbmcoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxuICBkcmF3QWN0aXZlSHVlU2xpZGVyQ29sb3IoKSB7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gdGhpcztcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhzdkNvbG9yID0gY29sb3IuaHN2KCkuc2F0dXJhdGlvbnYoMTAwKS52YWx1ZSgxMDApO1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgaGVpZ2h0LCB3aWR0aCB9LCB0aHVtYjogeyByYWRpdXMgfSB9IH0gPSB0aGlzO1xuICAgIGNvbnN0IHggPSBoc3ZDb2xvci5odWUoKSAvICgzNjAgLyB3aWR0aCk7XG4gICAgY29uc3QgeSA9IHJhZGl1cyAtIGhlaWdodCAvIDIgKyBoZWlnaHQgLyAyO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmh1ZVNjb3BlTGVmdCA9IHg7XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3VGh1bWIodGhpcy5odWVTbGlkZXJSZW5kZXJpbmdDb250ZXh0LCByYWRpdXMsIHgsIHksIGhzdkNvbG9yKTtcbiAgfVxuICBkcmF3SHVlU2xpZGVyKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmh1ZVNsaWRlclJlbmRlcmluZ0NvbnRleHQ7XG4gICAgY29uc3QgeyBkaW1lbnNpb25zOiB7IHNsaWRlcjogeyBoZWlnaHQsIHdpZHRoIH0sIHRodW1iOiB7IHJhZGl1czogdGh1bWJSYWRpdXMgfSB9IH0gPSB0aGlzO1xuICAgIGNvbnN0IHggPSAwO1xuICAgIGNvbnN0IHkgPSB0aHVtYlJhZGl1cyAtIGhlaWdodCAvIDI7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICBjb25zdCBodWVTbGlkZXJDb2xvclN0b3BLZXl3b3JkcyA9IFtcInJlZFwiLCBcInllbGxvd1wiLCBcImxpbWVcIiwgXCJjeWFuXCIsIFwiYmx1ZVwiLCBcIm1hZ2VudGFcIiwgXCJyZWRcIl07XG4gICAgY29uc3Qgb2Zmc2V0ID0gMSAvIChodWVTbGlkZXJDb2xvclN0b3BLZXl3b3Jkcy5sZW5ndGggLSAxKTtcbiAgICBsZXQgY3VycmVudE9mZnNldCA9IDA7XG4gICAgaHVlU2xpZGVyQ29sb3JTdG9wS2V5d29yZHMuZm9yRWFjaCgoa2V5d29yZCkgPT4ge1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKGN1cnJlbnRPZmZzZXQsIGNvbG9yKGtleXdvcmQpLnN0cmluZygpKTtcbiAgICAgIGN1cnJlbnRPZmZzZXQgKz0gb2Zmc2V0O1xuICAgIH0pO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgKyB0aGlzLmdldFNsaWRlckNhcFNwYWNpbmcoKSAqIDIpO1xuICAgIHRoaXMuZHJhd1NsaWRlclBhdGgoY29udGV4dCwgaGVpZ2h0LCB3aWR0aCwgeCwgeSk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMylcIjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLmRyYXdBY3RpdmVIdWVTbGlkZXJDb2xvcigpO1xuICB9XG4gIGRyYXdPcGFjaXR5U2xpZGVyKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLm9wYWNpdHlTbGlkZXJSZW5kZXJpbmdDb250ZXh0O1xuICAgIGNvbnN0IHsgYmFzZUNvbG9yRmllbGRDb2xvcjogcHJldmlvdXNDb2xvciwgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgaGVpZ2h0LCB3aWR0aCB9LCB0aHVtYjogeyByYWRpdXM6IHRodW1iUmFkaXVzIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gMDtcbiAgICBjb25zdCB5ID0gdGh1bWJSYWRpdXMgLSBoZWlnaHQgLyAyO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgKyB0aGlzLmdldFNsaWRlckNhcFNwYWNpbmcoKSAqIDIpO1xuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCB3aWR0aCwgMCk7XG4gICAgY29uc3Qgc3RhcnRDb2xvciA9IHByZXZpb3VzQ29sb3IucmdiKCkuYWxwaGEoMCk7XG4gICAgY29uc3QgbWlkQ29sb3IgPSBwcmV2aW91c0NvbG9yLnJnYigpLmFscGhhKDAuNSk7XG4gICAgY29uc3QgZW5kQ29sb3IgPSBwcmV2aW91c0NvbG9yLnJnYigpLmFscGhhKDEpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzdGFydENvbG9yLnN0cmluZygpKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCBtaWRDb2xvci5zdHJpbmcoKSk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGVuZENvbG9yLnN0cmluZygpKTtcbiAgICB0aGlzLmRyYXdTbGlkZXJQYXRoKGNvbnRleHQsIGhlaWdodCwgd2lkdGgsIHgsIHkpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4odGhpcy5nZXRDaGVja2VyZWRCYWNrZ3JvdW5kUGF0dGVybigpLCBcInJlcGVhdFwiKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMylcIjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLmRyYXdBY3RpdmVPcGFjaXR5U2xpZGVyQ29sb3IoKTtcbiAgfVxuICBkcmF3U2xpZGVyUGF0aChjb250ZXh0LCBoZWlnaHQsIHdpZHRoLCB4LCB5KSB7XG4gICAgY29uc3QgcmFkaXVzID0gaGVpZ2h0IC8gMiArIDE7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY29udGV4dC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGNvbnRleHQubGluZVRvKHggKyByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxuICBnZXRDaGVja2VyZWRCYWNrZ3JvdW5kUGF0dGVybigpIHtcbiAgICBpZiAodGhpcy5jaGVja2VyUGF0dGVybikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlclBhdHRlcm47XG4gICAgfVxuICAgIGNvbnN0IHBhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHBhdHRlcm4ud2lkdGggPSAxMDtcbiAgICBwYXR0ZXJuLmhlaWdodCA9IDEwO1xuICAgIGNvbnN0IHBhdHRlcm5Db250ZXh0ID0gcGF0dGVybi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgcGF0dGVybkNvbnRleHQuZmlsbFN0eWxlID0gXCIjY2NjXCI7XG4gICAgcGF0dGVybkNvbnRleHQuZmlsbFJlY3QoMCwgMCwgMTAsIDEwKTtcbiAgICBwYXR0ZXJuQ29udGV4dC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBwYXR0ZXJuQ29udGV4dC5maWxsUmVjdCgwLCAwLCA1LCA1KTtcbiAgICBwYXR0ZXJuQ29udGV4dC5maWxsUmVjdCg1LCA1LCA1LCA1KTtcbiAgICB0aGlzLmNoZWNrZXJQYXR0ZXJuID0gcGF0dGVybjtcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfVxuICBkcmF3QWN0aXZlT3BhY2l0eVNsaWRlckNvbG9yKCkge1xuICAgIGNvbnN0IHsgY29sb3IgfSA9IHRoaXM7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoc3ZDb2xvciA9IGNvbG9yO1xuICAgIGNvbnN0IHsgZGltZW5zaW9uczogeyBzbGlkZXI6IHsgd2lkdGggfSwgdGh1bWI6IHsgcmFkaXVzIH0gfSB9ID0gdGhpcztcbiAgICBjb25zdCB4ID0gYWxwaGFUb09wYWNpdHkoaHN2Q29sb3IuYWxwaGEoKSkgLyAoT1BBQ0lUWV9MSU1JVFMubWF4IC8gd2lkdGgpO1xuICAgIGNvbnN0IHkgPSByYWRpdXM7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eVNjb3BlTGVmdCA9IHg7XG4gICAgfSk7XG4gICAgdGhpcy5kcmF3VGh1bWIodGhpcy5vcGFjaXR5U2xpZGVyUmVuZGVyaW5nQ29udGV4dCwgcmFkaXVzLCB4LCB5LCBoc3ZDb2xvcik7XG4gIH1cbiAgdXBkYXRlQ29sb3JGcm9tQ2hhbm5lbHMoY2hhbm5lbHMpIHtcbiAgICB0aGlzLmludGVybmFsQ29sb3JTZXQoY29sb3IoY2hhbm5lbHMsIHRoaXMuY2hhbm5lbE1vZGUpKTtcbiAgfVxuICB1cGRhdGVDaGFubmVsc0Zyb21Db2xvcihjb2xvcikge1xuICAgIHRoaXMuY2hhbm5lbHMgPSBjb2xvciA/IHRoaXMudG9DaGFubmVscyhjb2xvcikgOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gIH1cbiAgdG9DaGFubmVscyhjb2xvcikge1xuICAgIGNvbnN0IHsgY2hhbm5lbE1vZGUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhbm5lbHMgPSBjb2xvcltjaGFubmVsTW9kZV0oKVxuICAgICAgLmFycmF5KClcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXNBbHBoYSA9IGluZGV4ID09PSAzO1xuICAgICAgcmV0dXJuIGlzQWxwaGEgPyB2YWx1ZSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICAgIH0pO1xuICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGNoYW5uZWxzLnB1c2goMSk7IC8vIENvbG9yIG9taXRzIGFscGhhIHdoZW4gMVxuICAgIH1cbiAgICByZXR1cm4gY2hhbm5lbHM7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImFscGhhQ2hhbm5lbFwiOiBbXCJoYW5kbGVBbHBoYUNoYW5uZWxDaGFuZ2VcIl0sXG4gICAgXCJjb2xvclwiOiBbXCJoYW5kbGVDb2xvckNoYW5nZVwiXSxcbiAgICBcImZvcm1hdFwiOiBbXCJoYW5kbGVGb3JtYXRDaGFuZ2VcIl0sXG4gICAgXCJzY2FsZVwiOiBbXCJoYW5kbGVTY2FsZUNoYW5nZVwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcImhhbmRsZVZhbHVlQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuQ29sb3JQaWNrZXIuc3R5bGUgPSBjb2xvclBpY2tlckNzcztcblxuY29uc3QgQ1NTJDEgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGV4SW5wdXQ6IFwiaGV4LWlucHV0XCIsXG4gIG9wYWNpdHlJbnB1dDogXCJvcGFjaXR5LWlucHV0XCJcbn07XG5cbmNvbnN0IGNvbG9yUGlja2VySGV4SW5wdXRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfS5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpjZW50ZXJ9LmhleC1pbnB1dHtmbGV4LWdyb3c6MTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Lm9wYWNpdHktaW5wdXR7aW5saW5lLXNpemU6NjhweDttYXJnaW4taW5saW5lLXN0YXJ0Oi0xcHh9Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVye2ZsZXgtd3JhcDp3cmFwO3Jvdy1nYXA6MC4xMjVyZW19Omhvc3QoW3NjYWxlPXNdKSAub3BhY2l0eS1pbnB1dHtpbmxpbmUtc2l6ZTp1bnNldDttYXJnaW4taW5saW5lLXN0YXJ0OnVuc2V0fTpob3N0KFtzY2FsZT1sXSkgLm9wYWNpdHktaW5wdXR7aW5saW5lLXNpemU6ODhweH1cIjtcblxuY29uc3QgREVGQVVMVF9DT0xPUiA9IGNvbG9yKCk7XG5jb25zdCBDb2xvclBpY2tlckhleElucHV0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckhleElucHV0Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZVwiLCA2KTtcbiAgICB0aGlzLm9uSGV4SW5wdXRCbHVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuaGV4SW5wdXROb2RlO1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICBjb25zdCBoZXggPSBgIyR7aW5wdXRWYWx1ZX1gO1xuICAgICAgY29uc3QgeyBhbGxvd0VtcHR5LCBpbnRlcm5hbENvbG9yIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgd2lsbENsZWFyVmFsdWUgPSBhbGxvd0VtcHR5ICYmICFpbnB1dFZhbHVlO1xuICAgICAgY29uc3QgaXNMb25naGFuZCA9IGlzTG9uZ2hhbmRIZXgoaGV4KTtcbiAgICAgIC8vIGVuc3VyZSBtb2RpZmllZCBwYXN0ZWQgaGV4IHZhbHVlcyBhcmUgY29tbWl0dGVkIHNpbmNlIHdlIHByZXZlbnQgZGVmYXVsdCB0byByZW1vdmUgdGhlICMgY2hhci5cbiAgICAgIHRoaXMub25IZXhJbnB1dENoYW5nZSgpO1xuICAgICAgaWYgKHdpbGxDbGVhclZhbHVlIHx8IChpc1ZhbGlkSGV4KGhleCkgJiYgaXNMb25naGFuZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gbWFuaXB1bGF0aW5nIERPTSBkaXJlY3RseSBzaW5jZSByZXJlbmRlciBkb2Vzbid0IHVwZGF0ZSBpbnB1dCB2YWx1ZVxuICAgICAgbm9kZS52YWx1ZSA9XG4gICAgICAgIGFsbG93RW1wdHkgJiYgIWludGVybmFsQ29sb3JcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IHRoaXMuZm9ybWF0SGV4Rm9ySW50ZXJuYWxJbnB1dChyZ2JUb0hleChcbiAgICAgICAgICAvLyBhbHdheXMgZGlzcGxheSBoZXggaW5wdXQgaW4gUlJHR0JCIGZvcm1hdFxuICAgICAgICAgIGludGVybmFsQ29sb3Iub2JqZWN0KCkpKTtcbiAgICB9O1xuICAgIHRoaXMub25PcGFjaXR5SW5wdXRCbHVyID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMub3BhY2l0eUlucHV0Tm9kZTtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgY29uc3QgeyBhbGxvd0VtcHR5LCBpbnRlcm5hbENvbG9yIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgd2lsbENsZWFyVmFsdWUgPSBhbGxvd0VtcHR5ICYmICFpbnB1dFZhbHVlO1xuICAgICAgaWYgKHdpbGxDbGVhclZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIG1hbmlwdWxhdGluZyBET00gZGlyZWN0bHkgc2luY2UgcmVyZW5kZXIgZG9lc24ndCB1cGRhdGUgaW5wdXQgdmFsdWVcbiAgICAgIG5vZGUudmFsdWUgPVxuICAgICAgICBhbGxvd0VtcHR5ICYmICFpbnRlcm5hbENvbG9yID8gXCJcIiA6IHRoaXMuZm9ybWF0T3BhY2l0eUZvckludGVybmFsSW5wdXQoaW50ZXJuYWxDb2xvcik7XG4gICAgfTtcbiAgICB0aGlzLm9uSGV4SW5wdXRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmhleElucHV0Tm9kZS52YWx1ZTtcbiAgICAgIGxldCB2YWx1ZSA9IG5vZGVWYWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplSGV4KHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlRXhpc3RpbmdBbHBoYSA9IGlzVmFsaWRIZXgobm9ybWFsaXplZCkgJiYgdGhpcy5hbHBoYUNoYW5uZWw7XG4gICAgICAgIGlmIChwcmVzZXJ2ZUV4aXN0aW5nQWxwaGEgJiYgdGhpcy5pbnRlcm5hbENvbG9yKSB7XG4gICAgICAgICAgY29uc3QgYWxwaGFIZXggPSBub3JtYWxpemVIZXgodGhpcy5pbnRlcm5hbENvbG9yLmhleGEoKSwgdHJ1ZSkuc2xpY2UoLTIpO1xuICAgICAgICAgIHZhbHVlID0gYCR7bm9ybWFsaXplZCArIGFscGhhSGV4fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZSh2YWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uT3BhY2l0eUlucHV0Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMub3BhY2l0eUlucHV0Tm9kZTtcbiAgICAgIGxldCB2YWx1ZTtcbiAgICAgIGlmICghbm9kZS52YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBvcGFjaXR5VG9BbHBoYShOdW1iZXIobm9kZS52YWx1ZSkpO1xuICAgICAgICB2YWx1ZSA9IHRoaXMuaW50ZXJuYWxDb2xvcj8uYWxwaGEoYWxwaGEpLmhleGEoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZSh2YWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uSW5wdXRLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGFsdEtleSwgY3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBhbHBoYUNoYW5uZWwsIGhleElucHV0Tm9kZSwgaW50ZXJuYWxDb2xvciwgdmFsdWUgfSA9IHRoaXM7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGlmIChrZXkgPT09IFwiVGFiXCIgfHwga2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgaWYgKGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhoZXhJbnB1dE5vZGUpKSB7XG4gICAgICAgICAgdGhpcy5vbkhleElucHV0Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbk9wYWNpdHlJbnB1dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNOdWRnZUtleSA9IGtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBrZXkgPT09IFwiQXJyb3dVcFwiO1xuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgaWYgKGlzTnVkZ2VLZXkpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZSh0aGlzLnByZXZpb3VzTm9uTnVsbFZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0ga2V5ID09PSBcIkFycm93VXBcIiA/IDEgOiAtMTtcbiAgICAgICAgY29uc3QgYnVtcCA9IHNoaWZ0S2V5ID8gMTAgOiAxO1xuICAgICAgICB0aGlzLmludGVybmFsU2V0VmFsdWUoaGV4aWZ5KHRoaXMubnVkZ2VSR0JDaGFubmVscyhpbnRlcm5hbENvbG9yLCBidW1wICogZGlyZWN0aW9uLCBjb21wb3NlZFBhdGguaW5jbHVkZXMoaGV4SW5wdXROb2RlKSA/IFwicmdiXCIgOiBcImFcIiksIGFscGhhQ2hhbm5lbCksIG9sZFZhbHVlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2l0aE1vZGlmaWVycyA9IGFsdEtleSB8fCBjdHJsS2V5IHx8IG1ldGFLZXk7XG4gICAgICBjb25zdCBzaW5nbGVDaGFyID0ga2V5Lmxlbmd0aCA9PT0gMTtcbiAgICAgIGNvbnN0IHZhbGlkSGV4Q2hhciA9IGhleENoYXIudGVzdChrZXkpO1xuICAgICAgaWYgKHNpbmdsZUNoYXIgJiYgIXdpdGhNb2RpZmllcnMgJiYgIXZhbGlkSGV4Q2hhcikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbkhleElucHV0UGFzdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGhleCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHRcIik7XG4gICAgICBpZiAoaXNWYWxpZEhleChoZXgpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaGV4SW5wdXROb2RlLnZhbHVlID0gaGV4LnNsaWNlKDEpO1xuICAgICAgICB0aGlzLmhleElucHV0Tm9kZS5pbnRlcm5hbFN5bmNDaGlsZEVsVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJldmlvdXNOb25OdWxsVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuc3RvcmVIZXhJbnB1dFJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLmhleElucHV0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JlT3BhY2l0eUlucHV0UmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMub3BhY2l0eUlucHV0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLmFsbG93RW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhQ2hhbm5lbCA9IGZhbHNlO1xuICAgIHRoaXMuaGV4TGFiZWwgPSBcIkhleFwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVIZXgoaGV4aWZ5KERFRkFVTFRfQ09MT1IsIHRoaXMuYWxwaGFDaGFubmVsKSwgdGhpcy5hbHBoYUNoYW5uZWwsIHRydWUpO1xuICAgIHRoaXMuaW50ZXJuYWxDb2xvciA9IERFRkFVTFRfQ09MT1I7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3QgeyBhbGxvd0VtcHR5LCBhbHBoYUNoYW5uZWwsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUhleCh2YWx1ZSwgYWxwaGFDaGFubmVsKTtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KG5vcm1hbGl6ZWQsIGFscGhhQ2hhbm5lbCkpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFNldFZhbHVlKG5vcm1hbGl6ZWQsIG5vcm1hbGl6ZWQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFsbG93RW1wdHkpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxTZXRWYWx1ZShudWxsLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgaGFuZGxlVmFsdWVDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5pbnRlcm5hbFNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFscGhhQ2hhbm5lbCwgaGV4TGFiZWwsIGludGVybmFsQ29sb3IsIG1lc3NhZ2VzLCBzY2FsZSwgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgaGV4SW5wdXRWYWx1ZSA9IHRoaXMuZm9ybWF0SGV4Rm9ySW50ZXJuYWxJbnB1dCh2YWx1ZSk7XG4gICAgY29uc3Qgb3BhY2l0eUlucHV0VmFsdWUgPSB0aGlzLmZvcm1hdE9wYWNpdHlGb3JJbnRlcm5hbElucHV0KGludGVybmFsQ29sb3IpO1xuICAgIGNvbnN0IGlucHV0U2NhbGUgPSBzY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMS5jb250YWluZXIgfSwgaChcImNhbGNpdGUtaW5wdXRcIiwgeyBjbGFzczogQ1NTJDEuaGV4SW5wdXQsIGxhYmVsOiBtZXNzYWdlcz8uaGV4IHx8IGhleExhYmVsLCBtYXhMZW5ndGg6IDYsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZUlucHV0Q2hhbmdlOiB0aGlzLm9uSGV4SW5wdXRDaGFuZ2UsIG9uQ2FsY2l0ZUludGVybmFsSW5wdXRCbHVyOiB0aGlzLm9uSGV4SW5wdXRCbHVyLCBvbktleURvd246IHRoaXMub25JbnB1dEtleURvd24sIG9uUGFzdGU6IHRoaXMub25IZXhJbnB1dFBhc3RlLCBwcmVmaXhUZXh0OiBcIiNcIiwgc2NhbGU6IGlucHV0U2NhbGUsIHZhbHVlOiBoZXhJbnB1dFZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc3RvcmVIZXhJbnB1dFJlZiB9KSwgYWxwaGFDaGFubmVsID8gKGgoXCJjYWxjaXRlLWlucHV0LW51bWJlclwiLCB7IGNsYXNzOiBDU1MkMS5vcGFjaXR5SW5wdXQsIGtleTogXCJvcGFjaXR5LWlucHV0XCIsIGxhYmVsOiBtZXNzYWdlcz8ub3BhY2l0eSwgbWF4OiBPUEFDSVRZX0xJTUlUUy5tYXgsIG1heExlbmd0aDogMywgbWluOiBPUEFDSVRZX0xJTUlUUy5taW4sIG51bWJlckJ1dHRvblR5cGU6IFwibm9uZVwiLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnB1dE51bWJlckNoYW5nZTogdGhpcy5vbk9wYWNpdHlJbnB1dENoYW5nZSwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckJsdXI6IHRoaXMub25PcGFjaXR5SW5wdXRCbHVyLCBvbktleURvd246IHRoaXMub25JbnB1dEtleURvd24sIHNjYWxlOiBpbnB1dFNjYWxlLCBzdWZmaXhUZXh0OiBcIiVcIiwgdmFsdWU6IG9wYWNpdHlJbnB1dFZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc3RvcmVPcGFjaXR5SW5wdXRSZWYgfSkpIDogbnVsbCkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGZvY3VzRWxlbWVudCh0aGlzLmhleElucHV0Tm9kZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIGVtaXQgPSB0cnVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCB7IGFscGhhQ2hhbm5lbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIZXgodmFsdWUsIGFscGhhQ2hhbm5lbCwgYWxwaGFDaGFubmVsKTtcbiAgICAgIGlmIChpc1ZhbGlkSGV4KG5vcm1hbGl6ZWQsIGFscGhhQ2hhbm5lbCkpIHtcbiAgICAgICAgY29uc3QgeyBpbnRlcm5hbENvbG9yOiBjdXJyZW50Q29sb3IgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG5leHRDb2xvciA9IGNvbG9yKG5vcm1hbGl6ZWQpO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTG9uZ2hhbmQgPSBub3JtYWxpemVIZXgoaGV4aWZ5KG5leHRDb2xvciwgYWxwaGFDaGFubmVsKSwgYWxwaGFDaGFubmVsKTtcbiAgICAgICAgY29uc3QgY2hhbmdlZCA9ICFjdXJyZW50Q29sb3IgfHxcbiAgICAgICAgICBub3JtYWxpemVkTG9uZ2hhbmQgIT09IG5vcm1hbGl6ZUhleChoZXhpZnkoY3VycmVudENvbG9yLCBhbHBoYUNoYW5uZWwpLCBhbHBoYUNoYW5uZWwpO1xuICAgICAgICB0aGlzLmludGVybmFsQ29sb3IgPSBuZXh0Q29sb3I7XG4gICAgICAgIHRoaXMucHJldmlvdXNOb25OdWxsVmFsdWUgPSBub3JtYWxpemVkTG9uZ2hhbmQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVkTG9uZ2hhbmQ7XG4gICAgICAgIGlmIChjaGFuZ2VkICYmIGVtaXQpIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVDb2xvclBpY2tlckhleElucHV0Q2hhbmdlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuYWxsb3dFbXB0eSkge1xuICAgICAgdGhpcy5pbnRlcm5hbENvbG9yID0gbnVsbDtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlQ29sb3JQaWNrZXJIZXhJbnB1dENoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgfVxuICBmb3JtYXRIZXhGb3JJbnRlcm5hbElucHV0KGhleCkge1xuICAgIHJldHVybiBoZXggPyBoZXgucmVwbGFjZShcIiNcIiwgXCJcIikuc2xpY2UoMCwgNikgOiBcIlwiO1xuICB9XG4gIGZvcm1hdE9wYWNpdHlGb3JJbnRlcm5hbElucHV0KGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yID8gYCR7YWxwaGFUb09wYWNpdHkoY29sb3IuYWxwaGEoKSl9YCA6IFwiXCI7XG4gIH1cbiAgbnVkZ2VSR0JDaGFubmVscyhjb2xvciQxLCBhbW91bnQsIGNvbnRleHQpIHtcbiAgICBsZXQgbnVkZ2VkQ2hhbm5lbHM7XG4gICAgY29uc3QgY2hhbm5lbHMgPSBjb2xvciQxLmFycmF5KCk7XG4gICAgY29uc3QgcmdiQ2hhbm5lbHMgPSBjaGFubmVscy5zbGljZSgwLCAzKTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJyZ2JcIikge1xuICAgICAgY29uc3QgbnVkZ2VkUkdCQ2hhbm5lbHMgPSByZ2JDaGFubmVscy5tYXAoKGNoYW5uZWwpID0+IGNoYW5uZWwgKyBhbW91bnQpO1xuICAgICAgbnVkZ2VkQ2hhbm5lbHMgPSBbXG4gICAgICAgIC4uLm51ZGdlZFJHQkNoYW5uZWxzLFxuICAgICAgICB0aGlzLmFscGhhQ2hhbm5lbCA/IGNoYW5uZWxzWzNdIDogdW5kZWZpbmVkXG4gICAgICBdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IG51ZGdlZEFscGhhID0gb3BhY2l0eVRvQWxwaGEoYWxwaGFUb09wYWNpdHkoY29sb3IkMS5hbHBoYSgpKSArIGFtb3VudCk7XG4gICAgICBudWRnZWRDaGFubmVscyA9IFsuLi5yZ2JDaGFubmVscywgbnVkZ2VkQWxwaGFdO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3IobnVkZ2VkQ2hhbm5lbHMpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInZhbHVlXCI6IFtcImhhbmRsZVZhbHVlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5Db2xvclBpY2tlckhleElucHV0LnN0eWxlID0gY29sb3JQaWNrZXJIZXhJbnB1dENzcztcblxuY29uc3QgQ1NTID0ge1xuICBzd2F0Y2g6IFwic3dhdGNoXCIsXG4gIG5vQ29sb3JTd2F0Y2g6IFwic3dhdGNoLS1uby1jb2xvclwiLFxuICBjaGVja2VyOiBcImNoZWNrZXJcIlxufTtcbmNvbnN0IENPTE9SUyA9IHtcbiAgYm9yZGVyTGlnaHQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gIGJvcmRlckRhcms6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVwiXG59O1xuY29uc3QgY2hlY2tlclNxdWFyZVNpemUgPSA0O1xuY29uc3QgQ0hFQ0tFUl9ESU1FTlNJT05TID0ge1xuICBzcXVhcmVTaXplOiBjaGVja2VyU3F1YXJlU2l6ZSxcbiAgc2l6ZTogY2hlY2tlclNxdWFyZVNpemUgKiAyXG59O1xuXG5jb25zdCBjb2xvclBpY2tlclN3YXRjaENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QoW3NjYWxlPXNdKXtibG9jay1zaXplOjEuMjVyZW07aW5saW5lLXNpemU6MS4yNXJlbX06aG9zdChbc2NhbGU9bV0pe2Jsb2NrLXNpemU6MS41cmVtO2lubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bF0pe2Jsb2NrLXNpemU6MnJlbTtpbmxpbmUtc2l6ZToycmVtfS5zd2F0Y2h7b3ZlcmZsb3c6aGlkZGVuO2Jsb2NrLXNpemU6aW5oZXJpdDtpbmxpbmUtc2l6ZTppbmhlcml0fS5zd2F0Y2ggcmVjdHt0cmFuc2l0aW9uLXByb3BlcnR5OmFsbDt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9LnN3YXRjaC0tbm8tY29sb3IgcmVjdHtmaWxsOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uc3dhdGNoLS1uby1jb2xvciBsaW5le3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9LmNoZWNrZXJ7ZmlsbDojY2FjYWNhfVwiO1xuXG5jb25zdCBDb2xvclBpY2tlclN3YXRjaCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgfVxuICBoYW5kbGVDb2xvckNoYW5nZShjb2xvciQxKSB7XG4gICAgdGhpcy5pbnRlcm5hbENvbG9yID0gY29sb3IkMSA/IGNvbG9yKGNvbG9yJDEpIDogbnVsbDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmhhbmRsZUNvbG9yQ2hhbmdlKHRoaXMuY29sb3IpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc0VtcHR5ID0gIXRoaXMuaW50ZXJuYWxDb2xvcjtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW0NTUy5zd2F0Y2hdOiB0cnVlLFxuICAgICAgW0NTUy5ub0NvbG9yU3dhdGNoXTogaXNFbXB0eVxuICAgIH07XG4gICAgcmV0dXJuIChoKFwic3ZnXCIsIHsgY2xhc3M6IGNsYXNzZXMsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgdGhpcy5yZW5kZXJTd2F0Y2goKSkpO1xuICB9XG4gIHJlbmRlclN3YXRjaCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgZWwsIGludGVybmFsQ29sb3IgfSA9IHRoaXM7XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gYWN0aXZlID8gXCIxMDAlXCIgOiBcIjBcIjtcbiAgICBjb25zdCB0aGVtZSA9IGdldE1vZGVOYW1lKGVsKTtcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IHRoZW1lID09PSBcImxpZ2h0XCIgPyBDT0xPUlMuYm9yZGVyTGlnaHQgOiBDT0xPUlMuYm9yZGVyRGFyaztcbiAgICBjb25zdCBjb21tb25Td2F0Y2hQcm9wcyA9IHtcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICByeDogYm9yZGVyUmFkaXVzLFxuICAgICAgc3Ryb2tlOiBib3JkZXJDb2xvcixcbiAgICAgIC8vIHN0cm9rZS13aWR0aCBhbmQgY2xpcC1wYXRoIGFyZSBuZWVkZWQgdG8gaGlkZSBvdmVyZmxvd2luZyBwb3J0aW9uIG9mIHN0cm9rZVxuICAgICAgLy8gc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83MjczMzQ2LzE5NDIxNlxuICAgICAgLy8gdXNpbmcgYXR0cmlidXRlIHRvIHdvcmsgYXJvdW5kIFN0ZW5jaWwgdXNpbmcgdGhlIHByb3AgbmFtZSB2cyB0aGUgYXR0cmlidXRlIHdoZW4gcmVuZGVyaW5nXG4gICAgICBbXCJzdHJva2Utd2lkdGhcIl06IFwiMlwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgfTtcbiAgICBjb25zdCBpc0VtcHR5ID0gIWludGVybmFsQ29sb3I7XG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcImNsaXBQYXRoXCIsIHsgaWQ6IFwic2hhcGVcIiB9LCBoKFwicmVjdFwiLCB7IGhlaWdodDogXCIxMDAlXCIsIHJ4OiBib3JkZXJSYWRpdXMsIHdpZHRoOiBcIjEwMCVcIiB9KSksIGgoXCJyZWN0XCIsIHsgXCJjbGlwLXBhdGhcIjogYGluc2V0KDAgcm91bmQgJHtib3JkZXJSYWRpdXN9KWAsIHJ4OiBib3JkZXJSYWRpdXMsIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pLCBoKFwibGluZVwiLCB7IFwiY2xpcC1wYXRoXCI6IFwidXJsKCNzaGFwZSlcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIzXCIsIHgxOiBcIjEwMCVcIiwgeDI6IFwiMFwiLCB5MTogXCIwXCIsIHkyOiBcIjEwMCVcIiB9KSkpO1xuICAgIH1cbiAgICBjb25zdCBhbHBoYSA9IGludGVybmFsQ29sb3IuYWxwaGEoKTtcbiAgICBjb25zdCBoZXggPSBoZXhpZnkoaW50ZXJuYWxDb2xvcik7XG4gICAgY29uc3QgaGV4YSA9IGhleGlmeShpbnRlcm5hbENvbG9yLCBhbHBoYSA8IDEpO1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcInRpdGxlXCIsIG51bGwsIGhleGEpLCBoKFwiZGVmc1wiLCBudWxsLCBoKFwicGF0dGVyblwiLCB7IGhlaWdodDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNpemUsIGlkOiBcImNoZWNrZXJcIiwgcGF0dGVyblVuaXRzOiBcInVzZXJTcGFjZU9uVXNlXCIsIHdpZHRoOiBDSEVDS0VSX0RJTUVOU0lPTlMuc2l6ZSwgeDogXCIwXCIsIHk6IFwiMFwiIH0sIGgoXCJyZWN0XCIsIHsgY2xhc3M6IENTUy5jaGVja2VyLCBoZWlnaHQ6IENIRUNLRVJfRElNRU5TSU9OUy5zcXVhcmVTaXplLCB3aWR0aDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHg6IFwiMFwiLCB5OiBcIjBcIiB9KSwgaChcInJlY3RcIiwgeyBjbGFzczogQ1NTLmNoZWNrZXIsIGhlaWdodDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHdpZHRoOiBDSEVDS0VSX0RJTUVOU0lPTlMuc3F1YXJlU2l6ZSwgeDogQ0hFQ0tFUl9ESU1FTlNJT05TLnNxdWFyZVNpemUsIHk6IENIRUNLRVJfRElNRU5TSU9OUy5zcXVhcmVTaXplIH0pKSksIGgoXCJyZWN0XCIsIHsgZmlsbDogXCJ1cmwoI2NoZWNrZXIpXCIsIGhlaWdodDogXCIxMDAlXCIsIHJ4OiBib3JkZXJSYWRpdXMsIHdpZHRoOiBcIjEwMCVcIiB9KSwgaChcInJlY3RcIiwgeyBmaWxsOiBoZXgsIHN0eWxlOiB7XG4gICAgICAgIFwiY2xpcC1wYXRoXCI6IGFscGhhIDwgMSA/IFwicG9seWdvbigxMDAlIDAsIDAgMCwgMCAxMDAlKVwiIDogYGluc2V0KDAgcm91bmQgJHtib3JkZXJSYWRpdXN9KWBcbiAgICAgIH0sIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pLCBhbHBoYSA8IDEgPyAoaChcInJlY3RcIiwgeyBmaWxsOiBoZXhhLCBrZXk6IFwib3BhY2l0eS1maWxsXCIsIHN0eWxlOiB7IFwiY2xpcC1wYXRoXCI6IFwicG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKVwiIH0sIC4uLmNvbW1vblN3YXRjaFByb3BzIH0pKSA6IG51bGwpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJjb2xvclwiOiBbXCJoYW5kbGVDb2xvckNoYW5nZVwiXVxuICB9OyB9XG59O1xuQ29sb3JQaWNrZXJTd2F0Y2guc3R5bGUgPSBjb2xvclBpY2tlclN3YXRjaENzcztcblxuZXhwb3J0IHsgQ29sb3JQaWNrZXIgYXMgY2FsY2l0ZV9jb2xvcl9waWNrZXIsIENvbG9yUGlja2VySGV4SW5wdXQgYXMgY2FsY2l0ZV9jb2xvcl9waWNrZXJfaGV4X2lucHV0LCBDb2xvclBpY2tlclN3YXRjaCBhcyBjYWxjaXRlX2NvbG9yX3BpY2tlcl9zd2F0Y2ggfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGdldFVzZXJBZ2VudFN0cmluZyB9IGZyb20gJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbmNvbnN0IGRlY2ltYWxOdW1iZXJSZWdleCA9IG5ldyBSZWdFeHAoLyg/OlxcLihcXGQrKSk/KD86W2VFXShbKy1dP1xcZCspKT8kLyk7XG5jb25zdCBkZWNpbWFsUGxhY2VzID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gKFwiXCIgKyB2YWx1ZSkubWF0Y2goZGVjaW1hbE51bWJlclJlZ2V4KTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgwLCBcbiAgLy8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LlxuICAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtXG4gICAgLy8gQWRqdXN0IGZvciBzY2llbnRpZmljIG5vdGF0aW9uLlxuICAgIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApKTtcbn07XG5cbmV4cG9ydCB7IGNsYW1wIGFzIGMsIGRlY2ltYWxQbGFjZXMgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGQgYXMgZGVib3VuY2UsIGkgYXMgaXNPYmplY3QgfSBmcm9tICcuL2RlYm91bmNlLTA5NTBhOWI4LmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuZXhwb3J0IHsgdGhyb3R0bGUgYXMgdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9