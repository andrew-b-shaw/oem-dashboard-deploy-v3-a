"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_de-fc323096_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/de-fc323096.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/de-fc323096.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calcite_input_time_picker_calcite_time_picker_8e720ee4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-input-time-picker.calcite-time-picker-8e720ee4.js */ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-8e720ee4.js");
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./focusTrapComponent-b3a29d9c.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-b3a29d9c.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */















// German [de]
var texts = {
  s: 'ein paar Sekunden',
  m: ['eine Minute', 'einer Minute'],
  mm: '%d Minuten',
  h: ['eine Stunde', 'einer Stunde'],
  hh: '%d Stunden',
  d: ['ein Tag', 'einem Tag'],
  dd: ['%d Tage', '%d Tagen'],
  M: ['ein Monat', 'einem Monat'],
  MM: ['%d Monate', '%d Monaten'],
  y: ['ein Jahr', 'einem Jahr'],
  yy: ['%d Jahre', '%d Jahren']
};

function relativeTimeFormatter(number, withoutSuffix, key) {
  var l = texts[key];

  if (Array.isArray(l)) {
    l = l[withoutSuffix ? 0 : 1];
  }

  return l.replace('%d', number);
}

var locale = {
  name: 'de',
  weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
  weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
  weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
  months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
  monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LTS: 'HH:mm:ss',
    LT: 'HH:mm',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd, D. MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'in %s',
    past: 'vor %s',
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  }
};
_calcite_input_time_picker_calcite_time_picker_8e720ee4_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMWM3ODMyMjhmODJjNTY2NWMzOGQ1ZDc3MjYxNTk1YjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RjtBQUM1RDtBQUNEO0FBQ0Q7QUFDQztBQUNLO0FBQ0U7QUFDUjtBQUNFO0FBQ0c7QUFDRjtBQUNHO0FBQ1M7QUFDZjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBWTs7QUFFWixpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9kZS1mYzMyMzA5Ni5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5jYWxjaXRlLXRpbWUtcGlja2VyLThlNzIwZWU0LmpzJztcbmltcG9ydCAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgJy4vZm9ybS00NDUzMDAwMS5qcyc7XG5pbXBvcnQgJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuaW1wb3J0ICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuaW1wb3J0ICcuL2xhYmVsLTU5YzlkNDcyLmpzJztcbmltcG9ydCAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0ICcuL2ZvY3VzVHJhcENvbXBvbmVudC1iM2EyOWQ5Yy5qcyc7XG5pbXBvcnQgJy4vdDluLWEzZTEyNDIyLmpzJztcblxuLy8gR2VybWFuIFtkZV1cbnZhciB0ZXh0cyA9IHtcbiAgczogJ2VpbiBwYWFyIFNla3VuZGVuJyxcbiAgbTogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcbiAgbW06ICclZCBNaW51dGVuJyxcbiAgaDogWydlaW5lIFN0dW5kZScsICdlaW5lciBTdHVuZGUnXSxcbiAgaGg6ICclZCBTdHVuZGVuJyxcbiAgZDogWydlaW4gVGFnJywgJ2VpbmVtIFRhZyddLFxuICBkZDogWyclZCBUYWdlJywgJyVkIFRhZ2VuJ10sXG4gIE06IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXG4gIE1NOiBbJyVkIE1vbmF0ZScsICclZCBNb25hdGVuJ10sXG4gIHk6IFsnZWluIEphaHInLCAnZWluZW0gSmFociddLFxuICB5eTogWyclZCBKYWhyZScsICclZCBKYWhyZW4nXVxufTtcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lRm9ybWF0dGVyKG51bWJlciwgd2l0aG91dFN1ZmZpeCwga2V5KSB7XG4gIHZhciBsID0gdGV4dHNba2V5XTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShsKSkge1xuICAgIGwgPSBsW3dpdGhvdXRTdWZmaXggPyAwIDogMV07XG4gIH1cblxuICByZXR1cm4gbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG59XG5cbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICdkZScsXG4gIHdlZWtkYXlzOiAnU29ubnRhZ19Nb250YWdfRGllbnN0YWdfTWl0dHdvY2hfRG9ubmVyc3RhZ19GcmVpdGFnX1NhbXN0YWcnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdTby5fTW8uX0RpLl9NaS5fRG8uX0ZyLl9TYS4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnU29fTW9fRGlfTWlfRG9fRnJfU2EnLnNwbGl0KCdfJyksXG4gIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX03DpHJ6X0FwcmlsX01haV9KdW5pX0p1bGlfQXVndXN0X1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0RlemVtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0phbi5fRmViLl9Nw6Ryel9BcHIuX01haV9KdW5pX0p1bGlfQXVnLl9TZXB0Ll9Pa3QuX05vdi5fRGV6Licuc3BsaXQoJ18nKSxcbiAgb3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gICAgcmV0dXJuIG4gKyBcIi5cIjtcbiAgfSxcbiAgd2Vla1N0YXJ0OiAxLFxuICB5ZWFyU3RhcnQ6IDQsXG4gIGZvcm1hdHM6IHtcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTFQ6ICdISDptbScsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICBwYXN0OiAndm9yICVzJyxcbiAgICBzOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgbTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIG1tOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgaDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgZDogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgTTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIE1NOiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXIsXG4gICAgeTogcmVsYXRpdmVUaW1lRm9ybWF0dGVyLFxuICAgIHl5OiByZWxhdGl2ZVRpbWVGb3JtYXR0ZXJcbiAgfVxufTtcbmRheWpzLmxvY2FsZShsb2NhbGUsIG51bGwsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=