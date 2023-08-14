"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_hu-ebd2c8dd_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/hu-ebd2c8dd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/hu-ebd2c8dd.js ***!
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















// Hungarian [hu]
var locale = {
  name: 'hu',
  weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
  weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
  weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
  months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
  monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: '%s múlva',
    past: '%s',
    s: function s(_, _s, ___, isFuture) {
      return "n\xE9h\xE1ny m\xE1sodperc" + (isFuture || _s ? '' : 'e');
    },
    m: function m(_, s, ___, isFuture) {
      return "egy perc" + (isFuture || s ? '' : 'e');
    },
    mm: function mm(n, s, ___, isFuture) {
      return n + " perc" + (isFuture || s ? '' : 'e');
    },
    h: function h(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'óra' : 'órája');
    },
    hh: function hh(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'óra' : 'órája');
    },
    d: function d(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'nap' : 'napja');
    },
    dd: function dd(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'nap' : 'napja');
    },
    M: function M(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'hónap' : 'hónapja');
    },
    MM: function MM(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'hónap' : 'hónapja');
    },
    y: function y(_, s, ___, isFuture) {
      return "egy " + (isFuture || s ? 'év' : 'éve');
    },
    yy: function yy(n, s, ___, isFuture) {
      return n + " " + (isFuture || s ? 'év' : 'éve');
    }
  },
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'YYYY.MM.DD.',
    LL: 'YYYY. MMMM D.',
    LLL: 'YYYY. MMMM D. H:mm',
    LLLL: 'YYYY. MMMM D., dddd H:mm'
  }
};
_calcite_input_time_picker_calcite_time_picker_8e720ee4_js__WEBPACK_IMPORTED_MODULE_0__.d.locale(locale, null, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDgyMTg1YmFkYWZjZTQyN2UwYzY4MmFhNDU1YzBlZTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5RjtBQUM1RDtBQUNEO0FBQ0Q7QUFDQztBQUNLO0FBQ0U7QUFDUjtBQUNFO0FBQ0c7QUFDRjtBQUNHO0FBQ1M7QUFDZjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBWTs7QUFFWixpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9odS1lYmQyYzhkZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZCBhcyBkYXlqcyB9IGZyb20gJy4vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5jYWxjaXRlLXRpbWUtcGlja2VyLThlNzIwZWU0LmpzJztcbmltcG9ydCAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgJy4vZm9ybS00NDUzMDAwMS5qcyc7XG5pbXBvcnQgJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuaW1wb3J0ICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuaW1wb3J0ICcuL2xhYmVsLTU5YzlkNDcyLmpzJztcbmltcG9ydCAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0ICcuL2ZvY3VzVHJhcENvbXBvbmVudC1iM2EyOWQ5Yy5qcyc7XG5pbXBvcnQgJy4vdDluLWEzZTEyNDIyLmpzJztcblxuLy8gSHVuZ2FyaWFuIFtodV1cbnZhciBsb2NhbGUgPSB7XG4gIG5hbWU6ICdodScsXG4gIHdlZWtkYXlzOiAndmFzw6FybmFwX2jDqXRmxZFfa2VkZF9zemVyZGFfY3PDvHTDtnJ0w7ZrX3DDqW50ZWtfc3pvbWJhdCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ3Zhc19ow6l0X2tlZGRfc3plX2Nzw7x0X3DDqW5fc3pvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3ZfaF9rX3N6ZV9jc19wX3N6bycuc3BsaXQoJ18nKSxcbiAgbW9udGhzOiAnamFudcOhcl9mZWJydcOhcl9tw6FyY2l1c1/DoXByaWxpc19tw6FqdXNfasO6bml1c19qw7psaXVzX2F1Z3VzenR1c19zemVwdGVtYmVyX29rdMOzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbl9mZWJfbcOhcmNfw6Fwcl9tw6FqX2rDum5fasO6bF9hdWdfc3plcHRfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gIG9yZGluYWw6IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICAgIHJldHVybiBuICsgXCIuXCI7XG4gIH0sXG4gIHdlZWtTdGFydDogMSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgbcO6bHZhJyxcbiAgICBwYXN0OiAnJXMnLFxuICAgIHM6IGZ1bmN0aW9uIHMoXywgX3MsIF9fXywgaXNGdXR1cmUpIHtcbiAgICAgIHJldHVybiBcIm5cXHhFOWhcXHhFMW55IG1cXHhFMXNvZHBlcmNcIiArIChpc0Z1dHVyZSB8fCBfcyA/ICcnIDogJ2UnKTtcbiAgICB9LFxuICAgIG06IGZ1bmN0aW9uIG0oXywgcywgX19fLCBpc0Z1dHVyZSkge1xuICAgICAgcmV0dXJuIFwiZWd5IHBlcmNcIiArIChpc0Z1dHVyZSB8fCBzID8gJycgOiAnZScpO1xuICAgIH0sXG4gICAgbW06IGZ1bmN0aW9uIG1tKG4sIHMsIF9fXywgaXNGdXR1cmUpIHtcbiAgICAgIHJldHVybiBuICsgXCIgcGVyY1wiICsgKGlzRnV0dXJlIHx8IHMgPyAnJyA6ICdlJyk7XG4gICAgfSxcbiAgICBoOiBmdW5jdGlvbiBoKF8sIHMsIF9fXywgaXNGdXR1cmUpIHtcbiAgICAgIHJldHVybiBcImVneSBcIiArIChpc0Z1dHVyZSB8fCBzID8gJ8OzcmEnIDogJ8OzcsOhamEnKTtcbiAgICB9LFxuICAgIGhoOiBmdW5jdGlvbiBoaChuLCBzLCBfX18sIGlzRnV0dXJlKSB7XG4gICAgICByZXR1cm4gbiArIFwiIFwiICsgKGlzRnV0dXJlIHx8IHMgPyAnw7NyYScgOiAnw7Nyw6FqYScpO1xuICAgIH0sXG4gICAgZDogZnVuY3Rpb24gZChfLCBzLCBfX18sIGlzRnV0dXJlKSB7XG4gICAgICByZXR1cm4gXCJlZ3kgXCIgKyAoaXNGdXR1cmUgfHwgcyA/ICduYXAnIDogJ25hcGphJyk7XG4gICAgfSxcbiAgICBkZDogZnVuY3Rpb24gZGQobiwgcywgX19fLCBpc0Z1dHVyZSkge1xuICAgICAgcmV0dXJuIG4gKyBcIiBcIiArIChpc0Z1dHVyZSB8fCBzID8gJ25hcCcgOiAnbmFwamEnKTtcbiAgICB9LFxuICAgIE06IGZ1bmN0aW9uIE0oXywgcywgX19fLCBpc0Z1dHVyZSkge1xuICAgICAgcmV0dXJuIFwiZWd5IFwiICsgKGlzRnV0dXJlIHx8IHMgPyAnaMOzbmFwJyA6ICdow7NuYXBqYScpO1xuICAgIH0sXG4gICAgTU06IGZ1bmN0aW9uIE1NKG4sIHMsIF9fXywgaXNGdXR1cmUpIHtcbiAgICAgIHJldHVybiBuICsgXCIgXCIgKyAoaXNGdXR1cmUgfHwgcyA/ICdow7NuYXAnIDogJ2jDs25hcGphJyk7XG4gICAgfSxcbiAgICB5OiBmdW5jdGlvbiB5KF8sIHMsIF9fXywgaXNGdXR1cmUpIHtcbiAgICAgIHJldHVybiBcImVneSBcIiArIChpc0Z1dHVyZSB8fCBzID8gJ8OpdicgOiAnw6l2ZScpO1xuICAgIH0sXG4gICAgeXk6IGZ1bmN0aW9uIHl5KG4sIHMsIF9fXywgaXNGdXR1cmUpIHtcbiAgICAgIHJldHVybiBuICsgXCIgXCIgKyAoaXNGdXR1cmUgfHwgcyA/ICfDqXYnIDogJ8OpdmUnKTtcbiAgICB9XG4gIH0sXG4gIGZvcm1hdHM6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdZWVlZLk1NLkRELicsXG4gICAgTEw6ICdZWVlZLiBNTU1NIEQuJyxcbiAgICBMTEw6ICdZWVlZLiBNTU1NIEQuIEg6bW0nLFxuICAgIExMTEw6ICdZWVlZLiBNTU1NIEQuLCBkZGRkIEg6bW0nXG4gIH1cbn07XG5kYXlqcy5sb2NhbGUobG9jYWxlLCBudWxsLCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9