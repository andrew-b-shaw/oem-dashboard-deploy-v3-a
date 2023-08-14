"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_zh-tw-2992db34_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/zh-tw-2992db34.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/zh-tw-2992db34.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calcite_input_time_picker_calcite_time_picker_330adb65_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-input-time-picker.calcite-time-picker-330adb65.js */ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-330adb65.js");
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./focusTrapComponent-07adcb3f.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
















// Chinese (Taiwan) [zh-tw]
var locale = {
  name: 'zh-tw',
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  ordinal: function ordinal(number, period) {
    switch (period) {
      case 'W':
        return number + "\u9031";

      default:
        return number + "\u65E5";
    }
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY年M月D日',
    LLL: 'YYYY年M月D日 HH:mm',
    LLLL: 'YYYY年M月D日dddd HH:mm',
    l: 'YYYY/M/D',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日dddd HH:mm'
  },
  relativeTime: {
    future: '%s內',
    past: '%s前',
    s: '幾秒',
    m: '1 分鐘',
    mm: '%d 分鐘',
    h: '1 小時',
    hh: '%d 小時',
    d: '1 天',
    dd: '%d 天',
    M: '1 個月',
    MM: '%d 個月',
    y: '1 年',
    yy: '%d 年'
  },
  meridiem: function meridiem(hour, minute) {
    var hm = hour * 100 + minute;

    if (hm < 600) {
      return '凌晨';
    } else if (hm < 900) {
      return '早上';
    } else if (hm < 1100) {
      return '上午';
    } else if (hm < 1300) {
      return '中午';
    } else if (hm < 1800) {
      return '下午';
    }

    return '晚上';
  }
};
_calcite_input_time_picker_calcite_time_picker_330adb65_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZjc2MGE4YjhhMGUzOWM2NGI4M2RlOTA4MThmNjAzODAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUY7QUFDNUQ7QUFDRDtBQUNEO0FBQ0M7QUFDSztBQUNFO0FBQ0o7QUFDSjtBQUNFO0FBQ0c7QUFDRjtBQUNHO0FBQ1M7QUFDZjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0dBQVk7O0FBRVosaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vemgtdHctMjk5MmRiMzQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGQgYXMgZGF5anMgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuY2FsY2l0ZS10aW1lLXBpY2tlci0zMzBhZGI2NS5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0ICcuL2Zvcm0tZDczNTllZmUuanMnO1xuaW1wb3J0ICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCAnLi9sYWJlbC05ZDJlYjMzNC5qcyc7XG5pbXBvcnQgJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0ICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCAnLi9mb2N1c1RyYXBDb21wb25lbnQtMDdhZGNiM2YuanMnO1xuaW1wb3J0ICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5cbi8vIENoaW5lc2UgKFRhaXdhbikgW3poLXR3XVxudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ3poLXR3JyxcbiAgd2Vla2RheXM6ICfmmJ/mnJ/ml6Vf5pif5pyf5LiAX+aYn+acn+S6jF/mmJ/mnJ/kuIlf5pif5pyf5ZubX+aYn+acn+S6lF/mmJ/mnJ/lha0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfpgLHml6Vf6YCx5LiAX+mAseS6jF/pgLHkuIlf6YCx5ZubX+mAseS6lF/pgLHlha0nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn5pelX+S4gF/kuoxf5LiJX+Wbm1/kupRf5YWtJy5zcGxpdCgnXycpLFxuICBtb250aHM6ICfkuIDmnIhf5LqM5pyIX+S4ieaciF/lm5vmnIhf5LqU5pyIX+WFreaciF/kuIPmnIhf5YWr5pyIX+S5neaciF/ljYHmnIhf5Y2B5LiA5pyIX+WNgeS6jOaciCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICcx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciCcuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChudW1iZXIsIHBlcmlvZCkge1xuICAgIHN3aXRjaCAocGVyaW9kKSB7XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiXFx1OTAzMVwiO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJcXHU2NUU1XCI7XG4gICAgfVxuICB9LFxuICBmb3JtYXRzOiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdZWVlZL01NL0REJyxcbiAgICBMTDogJ1lZWVnlubRN5pyIROaXpScsXG4gICAgTExMOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tJyxcbiAgICBMTExMOiAnWVlZWeW5tE3mnIhE5pelZGRkZCBISDptbScsXG4gICAgbDogJ1lZWVkvTS9EJyxcbiAgICBsbDogJ1lZWVnlubRN5pyIROaXpScsXG4gICAgbGxsOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tJyxcbiAgICBsbGxsOiAnWVlZWeW5tE3mnIhE5pelZGRkZCBISDptbSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXPlhacnLFxuICAgIHBhc3Q6ICclc+WJjScsXG4gICAgczogJ+W5vuenkicsXG4gICAgbTogJzEg5YiG6ZCYJyxcbiAgICBtbTogJyVkIOWIhumQmCcsXG4gICAgaDogJzEg5bCP5pmCJyxcbiAgICBoaDogJyVkIOWwj+aZgicsXG4gICAgZDogJzEg5aSpJyxcbiAgICBkZDogJyVkIOWkqScsXG4gICAgTTogJzEg5YCL5pyIJyxcbiAgICBNTTogJyVkIOWAi+aciCcsXG4gICAgeTogJzEg5bm0JyxcbiAgICB5eTogJyVkIOW5tCdcbiAgfSxcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSkge1xuICAgIHZhciBobSA9IGhvdXIgKiAxMDAgKyBtaW51dGU7XG5cbiAgICBpZiAoaG0gPCA2MDApIHtcbiAgICAgIHJldHVybiAn5YeM5pmoJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgOTAwKSB7XG4gICAgICByZXR1cm4gJ+aXqeS4iic7XG4gICAgfSBlbHNlIGlmIChobSA8IDExMDApIHtcbiAgICAgIHJldHVybiAn5LiK5Y2IJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTMwMCkge1xuICAgICAgcmV0dXJuICfkuK3ljYgnO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxODAwKSB7XG4gICAgICByZXR1cm4gJ+S4i+WNiCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICfmmZrkuIonO1xuICB9XG59O1xuZGF5anMubG9jYWxlKGxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==