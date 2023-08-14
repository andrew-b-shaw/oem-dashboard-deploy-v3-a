"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_uk-094d01da_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/uk-094d01da.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/uk-094d01da.js ***!
  \***********************************************************************/
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
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
















// Ukrainian [uk]
var monthFormat = 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_');
var monthStandalone = 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_');
var MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

function plural(word, num) {
  var forms = word.split('_');
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]; // eslint-disable-line
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
  var format = {
    ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
    mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
    hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
    dd: 'день_дні_днів',
    MM: 'місяць_місяці_місяців',
    yy: 'рік_роки_років'
  };

  if (key === 'm') {
    return withoutSuffix ? 'хвилина' : 'хвилину';
  } else if (key === 'h') {
    return withoutSuffix ? 'година' : 'годину';
  }

  return number + " " + plural(format[key], +number);
}

var months = function months(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }

  return monthStandalone[dayjsInstance.month()];
};

months.s = monthStandalone;
months.f = monthFormat;
var locale = {
  name: 'uk',
  weekdays: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
  weekdaysShort: 'ндл_пнд_втр_срд_чтв_птн_сбт'.split('_'),
  weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
  months: months,
  monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
  weekStart: 1,
  relativeTime: {
    future: 'за %s',
    past: '%s тому',
    s: 'декілька секунд',
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: relativeTimeWithPlural,
    hh: relativeTimeWithPlural,
    d: 'день',
    dd: relativeTimeWithPlural,
    M: 'місяць',
    MM: relativeTimeWithPlural,
    y: 'рік',
    yy: relativeTimeWithPlural
  },
  ordinal: function ordinal(n) {
    return n;
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY р.',
    LLL: 'D MMMM YYYY р., HH:mm',
    LLLL: 'dddd, D MMMM YYYY р., HH:mm'
  }
};
_calcite_input_time_picker_calcite_time_picker_330adb65_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYmU1NzY5ODJiODk3ZGU1NWM1Yjk1MzkyNjZhNTY4NWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUY7QUFDNUQ7QUFDRDtBQUNEO0FBQ0M7QUFDSztBQUNFO0FBQ0o7QUFDSjtBQUNFO0FBQ0c7QUFDRjtBQUNHO0FBQ1M7QUFDZjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNKQUFzSjtBQUN0Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBWTs7QUFFWixpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS91ay0wOTRkMDFkYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5jYWxjaXRlLXRpbWUtcGlja2VyLTMzMGFkYjY1LmpzJztcbmltcG9ydCAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgJy4vZm9ybS1kNzM1OWVmZS5qcyc7XG5pbXBvcnQgJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcbmltcG9ydCAnLi9rZXktOGZmMGQxMDEuanMnO1xuaW1wb3J0ICcuL2xhYmVsLTlkMmViMzM0LmpzJztcbmltcG9ydCAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0ICcuL2ZvY3VzVHJhcENvbXBvbmVudC0wN2FkY2IzZi5qcyc7XG5pbXBvcnQgJy4vdDluLWZhYzEzMzk0LmpzJztcblxuLy8gVWtyYWluaWFuIFt1a11cbnZhciBtb250aEZvcm1hdCA9ICfRgdGW0YfQvdGPX9C70Y7RgtC+0LPQvl/QsdC10YDQtdC30L3Rj1/QutCy0ZbRgtC90Y9f0YLRgNCw0LLQvdGPX9GH0LXRgNCy0L3Rj1/Qu9C40L/QvdGPX9GB0LXRgNC/0L3Rj1/QstC10YDQtdGB0L3Rj1/QttC+0LLRgtC90Y9f0LvQuNGB0YLQvtC/0LDQtNCwX9Cz0YDRg9C00L3Rjycuc3BsaXQoJ18nKTtcbnZhciBtb250aFN0YW5kYWxvbmUgPSAn0YHRltGH0LXQvdGMX9C70Y7RgtC40Llf0LHQtdGA0LXQt9C10L3RjF/QutCy0ZbRgtC10L3RjF/RgtGA0LDQstC10L3RjF/Rh9C10YDQstC10L3RjF/Qu9C40L/QtdC90Yxf0YHQtdGA0L/QtdC90Yxf0LLQtdGA0LXRgdC10L3RjF/QttC+0LLRgtC10L3RjF/Qu9C40YHRgtC+0L/QsNC0X9Cz0YDRg9C00LXQvdGMJy5zcGxpdCgnXycpO1xudmFyIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teW1xcXV0qXFxdfFxccykrTU1NTT8vO1xuXG5mdW5jdGlvbiBwbHVyYWwod29yZCwgbnVtKSB7XG4gIHZhciBmb3JtcyA9IHdvcmQuc3BsaXQoJ18nKTtcbiAgcmV0dXJuIG51bSAlIDEwID09PSAxICYmIG51bSAlIDEwMCAhPT0gMTEgPyBmb3Jtc1swXSA6IG51bSAlIDEwID49IDIgJiYgbnVtICUgMTAgPD0gNCAmJiAobnVtICUgMTAwIDwgMTAgfHwgbnVtICUgMTAwID49IDIwKSA/IGZvcm1zWzFdIDogZm9ybXNbMl07IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lV2l0aFBsdXJhbChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGtleSkge1xuICB2YXIgZm9ybWF0ID0ge1xuICAgIHNzOiB3aXRob3V0U3VmZml4ID8gJ9GB0LXQutGD0L3QtNCwX9GB0LXQutGD0L3QtNC4X9GB0LXQutGD0L3QtCcgOiAn0YHQtdC60YPQvdC00YNf0YHQtdC60YPQvdC00Lhf0YHQtdC60YPQvdC0JyxcbiAgICBtbTogd2l0aG91dFN1ZmZpeCA/ICfRhdCy0LjQu9C40L3QsF/RhdCy0LjQu9C40L3QuF/RhdCy0LjQu9C40L0nIDogJ9GF0LLQuNC70LjQvdGDX9GF0LLQuNC70LjQvdC4X9GF0LLQuNC70LjQvScsXG4gICAgaGg6IHdpdGhvdXRTdWZmaXggPyAn0LPQvtC00LjQvdCwX9Cz0L7QtNC40L3QuF/Qs9C+0LTQuNC9JyA6ICfQs9C+0LTQuNC90YNf0LPQvtC00LjQvdC4X9Cz0L7QtNC40L0nLFxuICAgIGRkOiAn0LTQtdC90Yxf0LTQvdGWX9C00L3RltCyJyxcbiAgICBNTTogJ9C80ZbRgdGP0YbRjF/QvNGW0YHRj9GG0ZZf0LzRltGB0Y/RhtGW0LInLFxuICAgIHl5OiAn0YDRltC6X9GA0L7QutC4X9GA0L7QutGW0LInXG4gIH07XG5cbiAgaWYgKGtleSA9PT0gJ20nKSB7XG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAn0YXQstC40LvQuNC90LAnIDogJ9GF0LLQuNC70LjQvdGDJztcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdoJykge1xuICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ9Cz0L7QtNC40L3QsCcgOiAn0LPQvtC00LjQvdGDJztcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyBcIiBcIiArIHBsdXJhbChmb3JtYXRba2V5XSwgK251bWJlcik7XG59XG5cbnZhciBtb250aHMgPSBmdW5jdGlvbiBtb250aHMoZGF5anNJbnN0YW5jZSwgZm9ybWF0KSB7XG4gIGlmIChNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSkge1xuICAgIHJldHVybiBtb250aEZvcm1hdFtkYXlqc0luc3RhbmNlLm1vbnRoKCldO1xuICB9XG5cbiAgcmV0dXJuIG1vbnRoU3RhbmRhbG9uZVtkYXlqc0luc3RhbmNlLm1vbnRoKCldO1xufTtcblxubW9udGhzLnMgPSBtb250aFN0YW5kYWxvbmU7XG5tb250aHMuZiA9IG1vbnRoRm9ybWF0O1xudmFyIGxvY2FsZSA9IHtcbiAgbmFtZTogJ3VrJyxcbiAgd2Vla2RheXM6ICfQvdC10LTRltC70Y9f0L/QvtC90LXQtNGW0LvQvtC6X9Cy0ZbQstGC0L7RgNC+0Lpf0YHQtdGA0LXQtNCwX9GH0LXRgtCy0LXRgF/Qv+KAmdGP0YLQvdC40YbRj1/RgdGD0LHQvtGC0LAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfQvdC00Ltf0L/QvdC0X9Cy0YLRgF/RgdGA0LRf0YfRgtCyX9C/0YLQvV/RgdCx0YInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn0L3QtF/Qv9C9X9Cy0YJf0YHRgF/Rh9GCX9C/0YJf0YHQsScuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiBtb250aHMsXG4gIG1vbnRoc1Nob3J0OiAn0YHRltGHX9C70Y7Rgl/QsdC10YBf0LrQstGW0YJf0YLRgNCw0LJf0YfQtdGA0LJf0LvQuNC/X9GB0LXRgNC/X9Cy0LXRgF/QttC+0LLRgl/Qu9C40YHRgl/Qs9GA0YPQtCcuc3BsaXQoJ18nKSxcbiAgd2Vla1N0YXJ0OiAxLFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfQt9CwICVzJyxcbiAgICBwYXN0OiAnJXMg0YLQvtC80YMnLFxuICAgIHM6ICfQtNC10LrRltC70YzQutCwINGB0LXQutGD0L3QtCcsXG4gICAgbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGQ6ICfQtNC10L3RjCcsXG4gICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgTTogJ9C80ZbRgdGP0YbRjCcsXG4gICAgTU06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgeTogJ9GA0ZbQuicsXG4gICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWxcbiAgfSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG47XG4gIH0sXG4gIGZvcm1hdHM6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVkg0YAuJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDRgC4sIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkg0YAuLCBISDptbSdcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=