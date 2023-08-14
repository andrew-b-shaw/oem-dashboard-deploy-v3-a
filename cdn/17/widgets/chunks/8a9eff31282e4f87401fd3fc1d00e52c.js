"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-date-picker_4_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-date-picker_4.entry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-date-picker_4.entry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_date_picker": () => (/* binding */ DatePicker),
/* harmony export */   "calcite_date_picker_day": () => (/* binding */ DatePickerDay),
/* harmony export */   "calcite_date_picker_month": () => (/* binding */ DatePickerMonth),
/* harmony export */   "calcite_date_picker_month_header": () => (/* binding */ DatePickerMonthHeader)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Heading-ce737456.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */














const HEADING_LEVEL = 2;
const DATE_PICKER_FORMAT_OPTIONS = { dateStyle: "full" };

const datePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1);vertical-align:top}:host([scale=s]){max-inline-size:216px}:host([scale=m]){max-inline-size:286px}:host([scale=l]){max-inline-size:398px}";

const DatePicker = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDatePickerChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDatePickerChange", 6);
    this.calciteDatePickerRangeChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDatePickerRangeChange", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.reset();
      }
    };
    this.monthHeaderSelectChange = (event) => {
      const date = new Date(event.detail);
      if (!this.range) {
        this.activeDate = date;
      }
      else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        }
        else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthActiveDateChange = (event) => {
      const date = new Date(event.detail);
      if (!this.range) {
        this.activeDate = date;
      }
      else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        }
        else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthHoverChange = (event) => {
      if (!this.range) {
        this.hoverRange = undefined;
        return;
      }
      const { valueAsDate } = this;
      const start = Array.isArray(valueAsDate) && valueAsDate[0];
      const end = Array.isArray(valueAsDate) && valueAsDate[1];
      const date = new Date(event.detail);
      this.hoverRange = {
        focused: this.activeRange || "start",
        start,
        end
      };
      if (!this.proximitySelectionDisabled) {
        if (end) {
          const startDiff = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, start);
          const endDiff = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, end);
          if (endDiff > 0) {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
          else if (startDiff < 0) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          }
          else if (startDiff > endDiff) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          }
          else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        }
        else {
          if (start) {
            if (date < start) {
              this.hoverRange = {
                focused: "start",
                start: date,
                end: start
              };
            }
            else {
              this.hoverRange.end = date;
              this.hoverRange.focused = "end";
            }
          }
        }
      }
      else {
        if (!end) {
          if (date < start) {
            this.hoverRange = {
              focused: "start",
              start: date,
              end: start
            };
          }
          else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        }
        else {
          this.hoverRange = undefined;
        }
      }
      event.stopPropagation();
    };
    this.monthMouseOutChange = () => {
      if (this.hoverRange) {
        this.hoverRange = undefined;
      }
    };
    /**
     * Reset active date and close
     */
    this.reset = () => {
      const { valueAsDate } = this;
      if (!Array.isArray(valueAsDate) &&
        valueAsDate &&
        valueAsDate?.getTime() !== this.activeDate?.getTime()) {
        this.activeDate = new Date(valueAsDate);
      }
      if (Array.isArray(valueAsDate)) {
        if (valueAsDate[0] &&
          valueAsDate[0]?.getTime() !==
            (this.activeStartDate instanceof Date && this.activeStartDate?.getTime())) {
          this.activeStartDate = new Date(valueAsDate[0]);
        }
        if (valueAsDate[1] &&
          valueAsDate[1]?.getTime() !==
            (this.activeStartDate instanceof Date && this.activeEndDate?.getTime())) {
          this.activeEndDate = new Date(valueAsDate[1]);
        }
      }
    };
    /**
     * Event handler for when the selected date changes
     *
     * @param event
     */
    this.monthDateChange = (event) => {
      const date = new Date(event.detail);
      const isoDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date);
      if (!this.range && isoDate === Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.valueAsDate)) {
        return;
      }
      if (!this.range) {
        this.value = isoDate || "";
        this.valueAsDate = date || null;
        this.activeDate = date || null;
        this.calciteDatePickerChange.emit();
        return;
      }
      const start = this.getStartDate();
      const end = this.getEndDate();
      if (!start || (!end && date < start)) {
        if (start) {
          this.setEndDate(new Date(start));
        }
        if (this.activeRange == "end") {
          this.setEndDate(date);
        }
        else {
          this.setStartDate(date);
        }
      }
      else if (!end) {
        this.setEndDate(date);
      }
      else {
        if (!this.proximitySelectionDisabled) {
          if (this.activeRange) {
            if (this.activeRange == "end") {
              this.setEndDate(date);
            }
            else {
              this.setStartDate(date);
            }
          }
          else {
            const startDiff = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, start);
            const endDiff = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, end);
            if (endDiff === 0 || startDiff < 0) {
              this.setStartDate(date);
            }
            else if (startDiff === 0 || endDiff < 0) {
              this.setEndDate(date);
            }
            else if (startDiff < endDiff) {
              this.setStartDate(date);
            }
            else {
              this.setEndDate(date);
            }
          }
        }
        else {
          this.setStartDate(date);
        }
      }
      this.calciteDatePickerChange.emit();
    };
    this.activeDate = undefined;
    this.activeRange = undefined;
    this.value = undefined;
    this.headingLevel = undefined;
    this.valueAsDate = undefined;
    this.minAsDate = undefined;
    this.maxAsDate = undefined;
    this.min = undefined;
    this.max = undefined;
    this.numberingSystem = undefined;
    this.scale = "m";
    this.range = false;
    this.proximitySelectionDisabled = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.activeEndDate = undefined;
    this.activeStartDate = undefined;
    this.dateTimeFormat = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.endAsDate = undefined;
    this.hoverRange = undefined;
    this.localeData = undefined;
    this.startAsDate = undefined;
  }
  activeDateWatcher(newActiveDate) {
    if (this.activeRange === "end") {
      this.activeEndDate = newActiveDate;
    }
  }
  valueAsDateWatcher(newValueAsDate) {
    if (this.range && Array.isArray(newValueAsDate)) {
      const { activeStartDate, activeEndDate } = this;
      const newActiveStartDate = newValueAsDate[0];
      const newActiveEndDate = newValueAsDate[1];
      this.activeStartDate = activeStartDate !== newActiveStartDate && newActiveStartDate;
      this.activeEndDate = activeEndDate !== newActiveEndDate && newActiveEndDate;
    }
    else if (newValueAsDate && newValueAsDate !== this.activeDate) {
      this.activeDate = newValueAsDate;
    }
  }
  onMinChanged(min) {
    if (min) {
      this.minAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(min);
    }
  }
  onMaxChanged(max) {
    if (max) {
      this.maxAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(max);
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    if (Array.isArray(this.value)) {
      this.valueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.value);
    }
    else if (this.value) {
      this.valueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.value);
    }
    if (this.min) {
      this.minAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.min);
    }
    if (this.max) {
      this.maxAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.max);
    }
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await this.loadLocaleData();
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  render() {
    const date = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.range && Array.isArray(this.valueAsDate) ? this.valueAsDate[0] : this.valueAsDate, this.minAsDate, this.maxAsDate);
    let activeDate = this.getActiveDate(date, this.minAsDate, this.maxAsDate);
    const endDate = this.range && Array.isArray(this.valueAsDate)
      ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.valueAsDate[1], this.minAsDate, this.maxAsDate)
      : null;
    const activeEndDate = this.getActiveEndDate(endDate, this.minAsDate, this.maxAsDate);
    if ((this.activeRange === "end" ||
      (this.hoverRange?.focused === "end" && (!this.proximitySelectionDisabled || endDate))) &&
      activeEndDate) {
      activeDate = activeEndDate;
    }
    if (this.range && this.mostRecentRangeValue) {
      activeDate = this.mostRecentRangeValue;
    }
    const minDate = this.range && this.activeRange
      ? this.activeRange === "start"
        ? this.minAsDate
        : date || this.minAsDate
      : this.minAsDate;
    const maxDate = this.range && this.activeRange
      ? this.activeRange === "start"
        ? endDate || this.maxAsDate
        : this.maxAsDate
      : this.maxAsDate;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.reset, onKeyDown: this.keyDownHandler }, this.renderCalendar(activeDate, maxDate, minDate, date, endDate)));
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  valueHandler(value) {
    if (Array.isArray(value)) {
      this.valueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
    }
    else if (value) {
      this.valueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
    }
  }
  async loadLocaleData() {
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
    this.localeData = await Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.effectiveLocale);
    this.dateTimeFormat = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.b)(this.effectiveLocale, DATE_PICKER_FORMAT_OPTIONS);
  }
  /**
   * Render calcite-date-picker-month-header and calcite-date-picker-month
   *
   * @param activeDate
   * @param maxDate
   * @param minDate
   * @param date
   * @param endDate
   */
  renderCalendar(activeDate, maxDate, minDate, date, endDate) {
    return (this.localeData && [
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker-month-header", { activeDate: activeDate, headingLevel: this.headingLevel || HEADING_LEVEL, localeData: this.localeData, max: maxDate, messages: this.messages, min: minDate, onCalciteInternalDatePickerSelect: this.monthHeaderSelectChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date || new Date() }),
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker-month", { activeDate: activeDate, dateTimeFormat: this.dateTimeFormat, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteInternalDatePickerActiveDateChange: this.monthActiveDateChange, onCalciteInternalDatePickerHover: this.monthHoverChange, onCalciteInternalDatePickerMouseOut: this.monthMouseOutChange, onCalciteInternalDatePickerSelect: this.monthDateChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date, startDate: this.range ? date : undefined })
    ]);
  }
  getEndDate() {
    return (Array.isArray(this.valueAsDate) && this.valueAsDate[1]) || undefined;
  }
  setEndDate(date) {
    const startDate = this.getStartDate();
    const newEndDate = date ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date) : date;
    this.value = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(startDate), Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date)];
    this.valueAsDate = [startDate, date];
    this.mostRecentRangeValue = newEndDate;
    this.calciteDatePickerRangeChange.emit();
    this.activeEndDate = date || null;
  }
  getStartDate() {
    return Array.isArray(this.valueAsDate) && this.valueAsDate[0];
  }
  setStartDate(date) {
    const endDate = this.getEndDate();
    this.value = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date), Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(endDate)];
    this.valueAsDate = [date, endDate];
    this.mostRecentRangeValue = date;
    this.calciteDatePickerRangeChange.emit();
    this.activeStartDate = date || null;
  }
  /**
   * Get an active date using the value, or current date as default
   *
   * @param value
   * @param min
   * @param max
   */
  getActiveDate(value, min, max) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.activeDate, min, max) || value || Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(), min, max);
  }
  getActiveEndDate(value, min, max) {
    return (Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.activeEndDate, min, max) || value || Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date(), min, max));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "activeDate": ["activeDateWatcher"],
    "valueAsDate": ["valueAsDateWatcher"],
    "min": ["onMinChanged"],
    "max": ["onMaxChanged"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange", "loadLocaleData"],
    "value": ["valueHandler"]
  }; }
};
DatePicker.style = datePickerCss;

const datePickerDayCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;cursor:pointer;color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.day-v-wrapper{flex:1 1 auto}.day-wrapper{display:flex;flex-direction:column;align-items:center}.day{display:flex;align-items:center;justify-content:center;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background:none;box-shadow:0 0 0 2px transparent}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]) .day-v-wrapper{padding-block:0.125rem}:host([scale=s]) .day-wrapper{padding:0px}:host([scale=s]) .day{block-size:27px;inline-size:27px;font-size:var(--calcite-font-size--2)}:host([scale=m]) .day-v-wrapper{padding-block:0.25rem}:host([scale=m]) .day-wrapper{padding-inline:0.25rem}:host([scale=m]) .day{block-size:33px;inline-size:33px;font-size:var(--calcite-font-size--1)}:host([scale=l]) .day-v-wrapper{padding-block:0.25rem}:host([scale=l]) .day-wrapper{padding-inline:0.25rem}:host([scale=l]) .day{block-size:43px;inline-size:43px;font-size:var(--calcite-font-size-0)}:host([current-month]) .day{opacity:1}:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){outline:2px solid transparent;outline-offset:2px}:host(:focus:not([disabled])) .day{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-ui-brand) !important;color:var(--calcite-ui-foreground-1) !important}:host([range][selected]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([start-of-range]) .day-wrapper{border-start-start-radius:40%;border-end-start-radius:40%}:host([end-of-range]) .day-wrapper{border-start-end-radius:40%;border-end-end-radius:40%}:host([start-of-range]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range]) .calcite--rtl .day-wrapper{box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range]) .day{opacity:1}:host([end-of-range]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range]) .calcite--rtl .day-wrapper{box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range]) .day{opacity:1}:host([start-of-range]:not(:focus)) :not(.calcite--rtl) .day,:host([end-of-range]:not(:focus)) :not(.calcite--rtl) .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([start-of-range]:not(:focus)) .calcite--rtl .day,:host([end-of-range]:not(:focus)) .calcite--rtl .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([start-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset 8px 0 var(--calcite-ui-foreground-1)}:host([start-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset 8px 0 var(--calcite-ui-foreground-1)}:host([highlighted]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([highlighted]) .day-wrapper .day{color:var(--calcite-ui-text-1)}:host([highlighted]:not([active]:focus)) .day{color:var(--calcite-ui-text-1)}:host([range-hover]:not([selected])) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([range-hover]:not([selected])) .day{border-radius:0px}:host([start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[range-hover]:not([selected]).focused--start) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current))}:host(:hover[range-hover]:not([selected]).focused--start) .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current))}:host(:hover[range-hover]:not([selected]).focused--end) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--end) .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1))}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[start-of-range].hover--inside-range.focused--end) .day-wrapper,:host(:hover[end-of-range].hover--inside-range.focused--start) .day-wrapper{background-image:none}:host([start-of-range].hover--inside-range.focused--end) .day-wrapper,:host([end-of-range].hover--inside-range.focused--start) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([highlighted][range-edge=end]) :not(.calcite--rtl) .day-wrapper,:host([range-hover][range-edge=end]) :not(.calcite--rtl) .day-wrapper,:host([highlighted][range-edge=start]) .calcite--rtl .day-wrapper,:host([range-hover][range-edge=start]) .calcite--rtl .day-wrapper{box-shadow:inset -4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([highlighted][range-edge=start]) :not(.calcite--rtl) .day-wrapper,:host([range-hover][range-edge=start]) :not(.calcite--rtl) .day-wrapper,:host([highlighted][range-edge=end]) .calcite--rtl .day-wrapper,:host([range-hover][range-edge=end]) .calcite--rtl .day-wrapper{box-shadow:inset 4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted][range-edge=end]) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover][range-edge=end]) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted][range-edge=start]) .calcite--rtl .day-wrapper,:host([scale=s][range-hover][range-edge=start]) .calcite--rtl .day-wrapper{box-shadow:inset -1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted][range-edge=start]) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover][range-edge=start]) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted][range-edge=end]) .calcite--rtl .day-wrapper,:host([scale=s][range-hover][range-edge=end]) .calcite--rtl .day-wrapper{box-shadow:inset 1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=l][highlighted][range-edge=start]) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover][range-edge=start]) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted][range-edge=end]) .calcite--rtl .day-wrapper,:host([scale=l][range-hover][range-edge=end]) .calcite--rtl .day-wrapper{box-shadow:inset 6px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([highlighted][range-edge=start]) .day-wrapper,:host([range-hover][range-edge=start]) .day-wrapper{border-start-start-radius:45%;border-end-start-radius:45%}:host([highlighted][range-edge=end]) .day-wrapper,:host([range-hover][range-edge=end]) .day-wrapper{border-start-end-radius:45%;border-end-end-radius:45%}:host([scale=l][highlighted][range-edge=end]) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover][range-edge=end]) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted][range-edge=start]) .calcite--rtl .day-wrapper,:host([scale=l][range-hover][range-edge=start]) .calcite--rtl .day-wrapper{box-shadow:inset -6px 0px 0px 0px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{border-radius:0px}:host([selected]){outline:2px solid canvasText}:host([selected]) .day{border-radius:0px;background-color:highlight}:host([range][selected]) .day-wrapper,:host([highlighted]) .day-wrapper,:host([range-hover]:not([selected])) .day-wrapper{background-color:highlight}:host([range][selected][start-of-range]) .day-wrapper,:host([range][selected][end-of-range]) .day-wrapper{background-color:canvas}}";

const DatePickerDay = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDaySelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDaySelect", 6);
    this.calciteInternalDayHover = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDayHover", 6);
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.onClick = () => {
      if (this.disabled) {
        return;
      }
      this.calciteDaySelect.emit();
    };
    this.keyDownHandler = (event) => {
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__.i)(event.key)) {
        !this.disabled && this.calciteDaySelect.emit();
        event.preventDefault();
      }
    };
    this.day = undefined;
    this.dateTimeFormat = undefined;
    this.disabled = false;
    this.currentMonth = false;
    this.selected = false;
    this.highlighted = false;
    this.range = false;
    this.rangeEdge = undefined;
    this.startOfRange = false;
    this.endOfRange = false;
    this.rangeHover = false;
    this.active = false;
    this.scale = undefined;
    this.value = undefined;
  }
  pointerOverHandler() {
    if (this.disabled) {
      return;
    }
    this.calciteInternalDayHover.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.parentDatePickerEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.el, "calcite-date-picker");
  }
  render() {
    const dayId = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.value).replaceAll("-", "");
    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;
      _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
        useGrouping: false,
        ...(numberingSystem && { numberingSystem }),
        ...(locale && { locale })
      };
    }
    const formattedDay = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(String(this.day));
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.el);
    const dayLabel = this.dateTimeFormat.format(this.value);
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-disabled": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__.t)(this.disabled), "aria-label": dayLabel, "aria-selected": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__.t)(this.active), id: dayId, onClick: this.onClick, onKeyDown: this.keyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": "true", class: { "day-v-wrapper": true, [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_7__.C.rtl]: dir === "rtl" } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "day-wrapper" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "day" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "text" }, formattedDay))))));
  }
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.isTabbable);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
  }
  isTabbable() {
    return this.active;
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DatePickerDay.style = datePickerDayCss;

const datePickerMonthCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}.calendar{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-3);inline-size:14.2857142857%}.day{display:flex;min-inline-size:0px;justify-content:center;inline-size:14.2857142857%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:flex;flex-direction:row;padding-block:0px;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}";

const DAYS_PER_WEEK = 7;
const DAYS_MAXIMUM_INDEX = 6;
const DatePickerMonth = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalDatePickerSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerSelect", 6);
    this.calciteInternalDatePickerHover = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerHover", 6);
    this.calciteInternalDatePickerActiveDateChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerActiveDateChange", 6);
    this.calciteInternalDatePickerMouseOut = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerMouseOut", 6);
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const isRTL = this.el.dir === "rtl";
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          this.addDays(-7);
          break;
        case "ArrowRight":
          event.preventDefault();
          this.addDays(isRTL ? -1 : 1);
          break;
        case "ArrowDown":
          event.preventDefault();
          this.addDays(7);
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.addDays(isRTL ? 1 : -1);
          break;
        case "PageUp":
          event.preventDefault();
          this.addMonths(-1);
          break;
        case "PageDown":
          event.preventDefault();
          this.addMonths(1);
          break;
        case "Home":
          event.preventDefault();
          this.activeDate.setDate(1);
          this.addDays();
          break;
        case "End":
          event.preventDefault();
          this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
          this.addDays();
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          break;
        case "Tab":
          this.activeFocus = false;
      }
    };
    /**
     * Once user is not interacting via keyboard,
     * disable auto focusing of active date
     */
    this.disableActiveFocus = () => {
      this.activeFocus = false;
    };
    this.dayHover = (event) => {
      const target = event.target;
      if (target.disabled) {
        this.calciteInternalDatePickerMouseOut.emit();
      }
      else {
        this.calciteInternalDatePickerHover.emit(target.value);
      }
      event.stopPropagation();
    };
    this.daySelect = (event) => {
      const target = event.target;
      this.calciteInternalDatePickerSelect.emit(target.value);
    };
    this.dateTimeFormat = undefined;
    this.selectedDate = undefined;
    this.activeDate = new Date();
    this.startDate = undefined;
    this.endDate = undefined;
    this.min = undefined;
    this.max = undefined;
    this.scale = undefined;
    this.localeData = undefined;
    this.hoverRange = undefined;
  }
  pointerOutHandler() {
    this.calciteInternalDatePickerMouseOut.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const month = this.activeDate.getMonth();
    const year = this.activeDate.getFullYear();
    const startOfWeek = this.localeData.weekStart % 7;
    const { abbreviated, short, narrow } = this.localeData.days;
    const weekDays = this.scale === "s" ? narrow || short || abbreviated : short || abbreviated || narrow;
    const adjustedWeekDays = [...weekDays.slice(startOfWeek, 7), ...weekDays.slice(0, startOfWeek)];
    const curMonDays = this.getCurrentMonthDays(month, year);
    const prevMonDays = this.getPreviousMonthDays(month, year, startOfWeek);
    const nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
    let dayInWeek = 0;
    const getDayInWeek = () => dayInWeek++ % 7;
    const days = [
      ...prevMonDays.map((day) => {
        return {
          active: false,
          day,
          dayInWeek: getDayInWeek(),
          date: new Date(year, month - 1, day)
        };
      }),
      ...curMonDays.map((day) => {
        const date = new Date(year, month, day);
        const active = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.activeDate);
        return {
          active,
          currentMonth: true,
          day,
          dayInWeek: getDayInWeek(),
          date,
          ref: true
        };
      }),
      ...nextMonDays.map((day) => {
        return {
          active: false,
          day,
          dayInWeek: getDayInWeek(),
          date: new Date(year, month + 1, day)
        };
      })
    ];
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onFocusOut: this.disableActiveFocus, onKeyDown: this.keyDownHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "calendar", role: "grid" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "week-headers", role: "row" }, adjustedWeekDays.map((weekday) => ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "week-days", role: "row" }, days.map((day) => this.renderDateDay(day))))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Add n months to the current month
   *
   * @param step
   */
  addMonths(step) {
    const nextDate = new Date(this.activeDate);
    nextDate.setMonth(this.activeDate.getMonth() + step);
    this.calciteInternalDatePickerActiveDateChange.emit(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Add n days to the current date
   *
   * @param step
   */
  addDays(step = 0) {
    const nextDate = new Date(this.activeDate);
    nextDate.setDate(this.activeDate.getDate() + step);
    this.calciteInternalDatePickerActiveDateChange.emit(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Get dates for last days of the previous month
   *
   * @param month
   * @param year
   * @param startOfWeek
   */
  getPreviousMonthDays(month, year, startOfWeek) {
    const lastDate = new Date(year, month, 0);
    const date = lastDate.getDate();
    const startDay = lastDate.getDay();
    const days = [];
    if (startDay === (startOfWeek + DAYS_MAXIMUM_INDEX) % DAYS_PER_WEEK) {
      return days;
    }
    if (startDay === startOfWeek) {
      return [date];
    }
    for (let i = (DAYS_PER_WEEK + startDay - startOfWeek) % DAYS_PER_WEEK; i >= 0; i--) {
      days.push(date - i);
    }
    return days;
  }
  /**
   * Get dates for the current month
   *
   * @param month
   * @param year
   */
  getCurrentMonthDays(month, year) {
    const num = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < num; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Get dates for first days of the next month
   *
   * @param month
   * @param year
   * @param startOfWeek
   */
  getNextMonthDays(month, year, startOfWeek) {
    const endDay = new Date(year, month + 1, 0).getDay();
    const days = [];
    if (endDay === (startOfWeek + DAYS_MAXIMUM_INDEX) % DAYS_PER_WEEK) {
      return days;
    }
    for (let i = 0; i < (DAYS_MAXIMUM_INDEX - (endDay - startOfWeek)) % DAYS_PER_WEEK; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Determine if the date is in between the start and end dates
   *
   * @param date
   */
  betweenSelectedRange(date) {
    return !!(this.startDate &&
      this.endDate &&
      date > this.startDate &&
      date < this.endDate &&
      !this.isRangeHover(date));
  }
  /**
   * Determine if the date should be in selected state
   *
   * @param date
   */
  isSelected(date) {
    return !!(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.selectedDate) ||
      (this.startDate && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.startDate)) ||
      (this.endDate && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.endDate)));
  }
  /**
   * Determine if the date is the start of the date range
   *
   * @param date
   */
  isStartOfRange(date) {
    return !!(this.startDate &&
      !Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.startDate, this.endDate) &&
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.startDate, date) &&
      !this.isEndOfRange(date));
  }
  isEndOfRange(date) {
    return !!((this.endDate && !Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.startDate, this.endDate) && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.endDate, date)) ||
      (!this.endDate &&
        this.hoverRange &&
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.startDate, this.hoverRange.end) &&
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.hoverRange.end)));
  }
  /**
   * Render calcite-date-picker-day
   *
   * @param active.active
   * @param active
   * @param day
   * @param dayInWeek
   * @param date
   * @param currentMonth
   * @param ref
   * @param active.currentMonth
   * @param active.date
   * @param active.day
   * @param active.dayInWeek
   * @param active.ref
   */
  renderDateDay({ active, currentMonth, date, day, dayInWeek, ref }) {
    const isFocusedOnStart = this.isFocusedOnStart();
    const isHoverInRange = this.isHoverInRange() ||
      (!this.endDate && this.hoverRange && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.hoverRange?.end, this.startDate));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "day", key: date.toDateString(), role: "gridcell" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker-day", { active: active, class: {
        "hover--inside-range": this.startDate && isHoverInRange,
        "hover--outside-range": this.startDate && !isHoverInRange,
        "focused--start": isFocusedOnStart,
        "focused--end": !isFocusedOnStart
      }, currentMonth: currentMonth, dateTimeFormat: this.dateTimeFormat, day: day, disabled: !Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.min, this.max), endOfRange: this.isEndOfRange(date), highlighted: this.betweenSelectedRange(date), onCalciteDaySelect: this.daySelect, onCalciteInternalDayHover: this.dayHover, range: !!this.startDate && !!this.endDate && !Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.startDate, this.endDate), rangeEdge: dayInWeek === 0 ? "start" : dayInWeek === 6 ? "end" : undefined, rangeHover: this.isRangeHover(date), scale: this.scale, selected: this.isSelected(date), startOfRange: this.isStartOfRange(date), value: date,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => {
        // when moving via keyboard, focus must be updated on active date
        if (ref && active && this.activeFocus) {
          el?.focus();
        }
      } })));
  }
  isFocusedOnStart() {
    return this.hoverRange?.focused === "start";
  }
  isHoverInRange() {
    if (!this.hoverRange) {
      return false;
    }
    const { start, end } = this.hoverRange;
    return !!((!this.isFocusedOnStart() && this.startDate && (!this.endDate || end < this.endDate)) ||
      (this.isFocusedOnStart() && this.startDate && start > this.startDate));
  }
  isRangeHover(date) {
    if (!this.hoverRange) {
      return false;
    }
    const { start, end } = this.hoverRange;
    const isStart = this.isFocusedOnStart();
    const insideRange = this.isHoverInRange();
    const cond1 = insideRange &&
      ((!isStart && date > this.startDate && (date < end || Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, end))) ||
        (isStart && date < this.endDate && (date > start || Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, start))));
    const cond2 = !insideRange &&
      ((!isStart && date >= this.endDate && (date < end || Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, end))) ||
        (isStart &&
          ((this.startDate && date < this.startDate) ||
            (this.endDate && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.startDate))) &&
          ((start && date > start) || Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, start))));
    return cond1 || cond2;
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DatePickerMonth.style = datePickerMonthCss;

const CSS = {
  header: "header",
  month: "month",
  chevron: "chevron",
  suffix: "suffix",
  yearSuffix: "year--suffix",
  yearWrap: "year-wrap",
  textReverse: "text--reverse"
};
const ICON = {
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right"
};

const datePickerMonthHeaderCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-inline:0.25rem;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.chevron:hover,.chevron:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}";

const DatePickerMonthHeader = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalDatePickerSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerSelect", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Increment year on UP/DOWN keys
     *
     * @param event
     */
    this.onYearKey = (event) => {
      const localizedYear = this.parseCalendarYear(event.target.value);
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.setYear({ localizedYear, offset: -1 });
          break;
        case "ArrowUp":
          event.preventDefault();
          this.setYear({ localizedYear, offset: 1 });
          break;
      }
    };
    this.onYearChange = (event) => {
      this.setYear({
        localizedYear: this.parseCalendarYear(event.target.value)
      });
    };
    this.onYearInput = (event) => {
      this.setYear({
        localizedYear: this.parseCalendarYear(event.target.value),
        commit: false
      });
    };
    this.prevMonthClick = (event) => {
      this.handleArrowClick(event, this.prevMonthDate);
    };
    this.prevMonthKeydown = (event) => {
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__.i)(event.key)) {
        this.prevMonthClick(event);
      }
    };
    this.nextMonthClick = (event) => {
      this.handleArrowClick(event, this.nextMonthDate);
    };
    this.nextMonthKeydown = (event) => {
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__.i)(event.key)) {
        this.nextMonthClick(event);
      }
    };
    /*
     * Update active month on clicks of left/right arrows
     */
    this.handleArrowClick = (event, date) => {
      event.preventDefault();
      this.calciteInternalDatePickerSelect.emit(date);
    };
    this.selectedDate = undefined;
    this.activeDate = undefined;
    this.headingLevel = undefined;
    this.min = undefined;
    this.max = undefined;
    this.scale = undefined;
    this.localeData = undefined;
    this.messages = undefined;
    this.nextMonthDate = undefined;
    this.prevMonthDate = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.parentDatePickerEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.el, "calcite-date-picker");
  }
  connectedCallback() {
    this.setNextPrevMonthDates();
  }
  render() {
    return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.header }, this.renderContent());
  }
  renderContent() {
    const { messages, localeData, activeDate } = this;
    if (!activeDate || !localeData) {
      return null;
    }
    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;
      _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
        useGrouping: false,
        ...(numberingSystem && { numberingSystem }),
        ...(locale && { locale })
      };
    }
    const activeMonth = activeDate.getMonth();
    const { months, unitOrder } = localeData;
    const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
    const localizedYear = this.formatCalendarYear(activeDate.getFullYear());
    const iconScale = this.scale === "l" ? "m" : "s";
    const order = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const suffix = localeData.year?.suffix;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-disabled": `${this.prevMonthDate.getMonth() === activeMonth}`, "aria-label": messages.prevMonth, class: CSS.chevron, href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { "flip-rtl": true, icon: ICON.chevronLeft, scale: iconScale })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { text: true, [CSS.textReverse]: reverse } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_8__.H, { class: CSS.month, level: this.headingLevel }, localizedMonth), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.yearWrap }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-label": messages.year, class: {
        year: true,
        [CSS.yearSuffix]: !!suffix
      }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: this.onYearChange, onInput: this.onYearInput, onKeyDown: this.onYearKey, pattern: "\\d*", type: "text", value: localizedYear,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.yearInput = el) }), suffix && (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.suffix }, suffix))), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-disabled": `${this.nextMonthDate.getMonth() === activeMonth}`, "aria-label": messages.nextMonth, class: CSS.chevron, href: "#", onClick: this.nextMonthClick, onKeyDown: this.nextMonthKeydown, role: "button", tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { "flip-rtl": true, icon: ICON.chevronRight, scale: iconScale }))));
  }
  setNextPrevMonthDates() {
    if (!this.activeDate) {
      return;
    }
    this.nextMonthDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.activeDate), this.min, this.max);
    this.prevMonthDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.activeDate), this.min, this.max);
  }
  formatCalendarYear(year) {
    return _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(year, this.localeData)}`);
  }
  parseCalendarYear(year) {
    return _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Number(_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.delocalize(year)), this.localeData)}`);
  }
  getInRangeDate({ localizedYear, offset = 0 }) {
    const { min, max, activeDate } = this;
    const parsedYear = Number(_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.delocalize(localizedYear));
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + offset;
    const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nextDate, min, max);
    }
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   *
   * @param root0
   * @param root0.localizedYear
   * @param root0.commit
   * @param root0.offset
   */
  setYear({ localizedYear, commit = true, offset = 0 }) {
    const { yearInput, activeDate } = this;
    const inRangeDate = this.getInRangeDate({ localizedYear, offset });
    // if you've supplied a year and it's in range, update active date
    if (inRangeDate) {
      this.calciteInternalDatePickerSelect.emit(inRangeDate);
    }
    if (commit) {
      yearInput.value = this.formatCalendarYear((inRangeDate || activeDate).getFullYear());
    }
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "min": ["setNextPrevMonthDates"],
    "max": ["setNextPrevMonthDates"],
    "activeDate": ["setNextPrevMonthDates"]
  }; }
};
DatePickerMonthHeader.style = datePickerMonthHeaderCss;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGE5ZWZmMzEyODJlNGY4NzQwMWZkM2ZjMWQwMGU1MmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMscURBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0IsUUFBUSxNQUFNLEdBQUcsUUFBUTtBQUNwRTtBQUNBOztBQUUwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRIO0FBQzhLO0FBQ3RMO0FBQ3VCO0FBQ2hCO0FBQ1I7QUFDUztBQUNuRTtBQUNFO0FBQ047QUFDcEI7QUFDTDtBQUNHOztBQUUvQjtBQUNBLHFDQUFxQzs7QUFFckMscUNBQXFDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6STNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL0hlYWRpbmctY2U3Mzc0NTYuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vYnJvd3Nlci05OWJjNjJjZi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWRhdGUtcGlja2VyXzQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtODA1OGUzMDAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGggfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcblxuZnVuY3Rpb24gY29uc3RyYWluSGVhZGluZ0xldmVsKGxldmVsKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwobGV2ZWwpLCAxKSwgNik7XG59XG5jb25zdCBIZWFkaW5nID0gKHByb3BzLCBjaGlsZHJlbikgPT4ge1xuICBjb25zdCBIZWFkaW5nVGFnID0gcHJvcHMubGV2ZWwgPyBgaCR7cHJvcHMubGV2ZWx9YCA6IFwiZGl2XCI7XG4gIGRlbGV0ZSBwcm9wcy5sZXZlbDtcbiAgcmV0dXJuIGgoSGVhZGluZ1RhZywgeyAuLi5wcm9wcyB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBIZWFkaW5nIGFzIEgsIGNvbnN0cmFpbkhlYWRpbmdMZXZlbCBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuZXhwb3J0IHsgZ2V0VXNlckFnZW50RGF0YSBhcyBhLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQsIEYgYXMgRnJhZ21lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGggYXMgZ2V0RGF5c0RpZmYsIGIgYXMgZGF0ZVRvSVNPLCBjIGFzIGRhdGVGcm9tSVNPLCBnIGFzIGdldFZhbHVlQXNEYXRlUmFuZ2UsIGYgYXMgZGF0ZUZyb21SYW5nZSwgZSBhcyBnZXRMb2NhbGVEYXRhLCBzIGFzIHNldEVuZE9mRGF5LCBqIGFzIHNhbWVEYXRlLCBpIGFzIGluUmFuZ2UsIGsgYXMgZ2V0T3JkZXIsIG4gYXMgbmV4dE1vbnRoLCBwIGFzIHByZXZNb250aCwgbCBhcyBmb3JtYXRDYWxlbmRhclllYXIsIG0gYXMgcGFyc2VDYWxlbmRhclllYXIgfSBmcm9tICcuL3V0aWxzLThhODA2MDY3LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCwgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGIgYXMgZ2V0RGF0ZVRpbWVGb3JtYXQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCB7IGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5LCBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IGkgYXMgaXNBY3RpdmF0aW9uS2V5IH0gZnJvbSAnLi9rZXktOGZmMGQxMDEuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCB7IEggYXMgSGVhZGluZyB9IGZyb20gJy4vSGVhZGluZy1jZTczNzQ1Ni5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcblxuY29uc3QgSEVBRElOR19MRVZFTCA9IDI7XG5jb25zdCBEQVRFX1BJQ0tFUl9GT1JNQVRfT1BUSU9OUyA9IHsgZGF0ZVN0eWxlOiBcImZ1bGxcIiB9O1xuXG5jb25zdCBkYXRlUGlja2VyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7aW5saW5lLXNpemU6MTAwJTtvdmVyZmxvdzp2aXNpYmxlO2JvcmRlci1yYWRpdXM6MHB4O2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTt2ZXJ0aWNhbC1hbGlnbjp0b3B9Omhvc3QoW3NjYWxlPXNdKXttYXgtaW5saW5lLXNpemU6MjE2cHh9Omhvc3QoW3NjYWxlPW1dKXttYXgtaW5saW5lLXNpemU6Mjg2cHh9Omhvc3QoW3NjYWxlPWxdKXttYXgtaW5saW5lLXNpemU6Mzk4cHh9XCI7XG5cbmNvbnN0IERhdGVQaWNrZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEYXRlUGlja2VyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJSYW5nZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZURhdGVQaWNrZXJSYW5nZUNoYW5nZVwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1vbnRoSGVhZGVyU2VsZWN0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbmREYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3N0UmVjZW50UmFuZ2VWYWx1ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1vbnRoQWN0aXZlRGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVSYW5nZSA9PT0gXCJlbmRcIikge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUgPSBkYXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5tb250aEhvdmVyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IHZhbHVlQXNEYXRlIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgc3RhcnQgPSBBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKSAmJiB2YWx1ZUFzRGF0ZVswXTtcbiAgICAgIGNvbnN0IGVuZCA9IEFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpICYmIHZhbHVlQXNEYXRlWzFdO1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICB0aGlzLmhvdmVyUmFuZ2UgPSB7XG4gICAgICAgIGZvY3VzZWQ6IHRoaXMuYWN0aXZlUmFuZ2UgfHwgXCJzdGFydFwiLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkKSB7XG4gICAgICAgIGlmIChlbmQpIHtcbiAgICAgICAgICBjb25zdCBzdGFydERpZmYgPSBnZXREYXlzRGlmZihkYXRlLCBzdGFydCk7XG4gICAgICAgICAgY29uc3QgZW5kRGlmZiA9IGdldERheXNEaWZmKGRhdGUsIGVuZCk7XG4gICAgICAgICAgaWYgKGVuZERpZmYgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZW5kID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJlbmRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoc3RhcnREaWZmIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLnN0YXJ0ID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJzdGFydFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChzdGFydERpZmYgPiBlbmREaWZmKSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2Uuc3RhcnQgPSBkYXRlO1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmZvY3VzZWQgPSBcInN0YXJ0XCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZm9jdXNlZCA9IFwiZW5kXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgaWYgKGRhdGUgPCBzdGFydCkge1xuICAgICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZm9jdXNlZDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBkYXRlLFxuICAgICAgICAgICAgICAgIGVuZDogc3RhcnRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZW5kID0gZGF0ZTtcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmZvY3VzZWQgPSBcImVuZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICghZW5kKSB7XG4gICAgICAgICAgaWYgKGRhdGUgPCBzdGFydCkge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0ge1xuICAgICAgICAgICAgICBmb2N1c2VkOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICAgIHN0YXJ0OiBkYXRlLFxuICAgICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5lbmQgPSBkYXRlO1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmZvY3VzZWQgPSBcImVuZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5tb250aE1vdXNlT3V0Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaG92ZXJSYW5nZSkge1xuICAgICAgICB0aGlzLmhvdmVyUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNldCBhY3RpdmUgZGF0ZSBhbmQgY2xvc2VcbiAgICAgKi9cbiAgICB0aGlzLnJlc2V0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZUFzRGF0ZSB9ID0gdGhpcztcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZUFzRGF0ZSkgJiZcbiAgICAgICAgdmFsdWVBc0RhdGUgJiZcbiAgICAgICAgdmFsdWVBc0RhdGU/LmdldFRpbWUoKSAhPT0gdGhpcy5hY3RpdmVEYXRlPy5nZXRUaW1lKCkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUodmFsdWVBc0RhdGUpO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpKSB7XG4gICAgICAgIGlmICh2YWx1ZUFzRGF0ZVswXSAmJlxuICAgICAgICAgIHZhbHVlQXNEYXRlWzBdPy5nZXRUaW1lKCkgIT09XG4gICAgICAgICAgICAodGhpcy5hY3RpdmVTdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMuYWN0aXZlU3RhcnREYXRlPy5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBuZXcgRGF0ZSh2YWx1ZUFzRGF0ZVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlQXNEYXRlWzFdICYmXG4gICAgICAgICAgdmFsdWVBc0RhdGVbMV0/LmdldFRpbWUoKSAhPT1cbiAgICAgICAgICAgICh0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgdGhpcy5hY3RpdmVFbmREYXRlPy5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbmREYXRlID0gbmV3IERhdGUodmFsdWVBc0RhdGVbMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB3aGVuIHRoZSBzZWxlY3RlZCBkYXRlIGNoYW5nZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHRoaXMubW9udGhEYXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgIGNvbnN0IGlzb0RhdGUgPSBkYXRlVG9JU08oZGF0ZSk7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UgJiYgaXNvRGF0ZSA9PT0gZGF0ZVRvSVNPKHRoaXMudmFsdWVBc0RhdGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gaXNvRGF0ZSB8fCBcIlwiO1xuICAgICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZGF0ZSB8fCBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlIHx8IG51bGw7XG4gICAgICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuZ2V0U3RhcnREYXRlKCk7XG4gICAgICBjb25zdCBlbmQgPSB0aGlzLmdldEVuZERhdGUoKTtcbiAgICAgIGlmICghc3RhcnQgfHwgKCFlbmQgJiYgZGF0ZSA8IHN0YXJ0KSkge1xuICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICB0aGlzLnNldEVuZERhdGUobmV3IERhdGUoc3RhcnQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVSYW5nZSA9PSBcImVuZFwiKSB7XG4gICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghZW5kKSB7XG4gICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVSYW5nZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT0gXCJlbmRcIikge1xuICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnREaWZmID0gZ2V0RGF5c0RpZmYoZGF0ZSwgc3RhcnQpO1xuICAgICAgICAgICAgY29uc3QgZW5kRGlmZiA9IGdldERheXNEaWZmKGRhdGUsIGVuZCk7XG4gICAgICAgICAgICBpZiAoZW5kRGlmZiA9PT0gMCB8fCBzdGFydERpZmYgPCAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnREaWZmID09PSAwIHx8IGVuZERpZmYgPCAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RGlmZiA8IGVuZERpZmYpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jYWxjaXRlRGF0ZVBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVSYW5nZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWVBc0RhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5Bc0RhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXhBc0RhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMucmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVFbmREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZW5kQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG92ZXJSYW5nZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFydEFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBhY3RpdmVEYXRlV2F0Y2hlcihuZXdBY3RpdmVEYXRlKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIpIHtcbiAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IG5ld0FjdGl2ZURhdGU7XG4gICAgfVxuICB9XG4gIHZhbHVlQXNEYXRlV2F0Y2hlcihuZXdWYWx1ZUFzRGF0ZSkge1xuICAgIGlmICh0aGlzLnJhbmdlICYmIEFycmF5LmlzQXJyYXkobmV3VmFsdWVBc0RhdGUpKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZVN0YXJ0RGF0ZSwgYWN0aXZlRW5kRGF0ZSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZVN0YXJ0RGF0ZSA9IG5ld1ZhbHVlQXNEYXRlWzBdO1xuICAgICAgY29uc3QgbmV3QWN0aXZlRW5kRGF0ZSA9IG5ld1ZhbHVlQXNEYXRlWzFdO1xuICAgICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBhY3RpdmVTdGFydERhdGUgIT09IG5ld0FjdGl2ZVN0YXJ0RGF0ZSAmJiBuZXdBY3RpdmVTdGFydERhdGU7XG4gICAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBhY3RpdmVFbmREYXRlICE9PSBuZXdBY3RpdmVFbmREYXRlICYmIG5ld0FjdGl2ZUVuZERhdGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5ld1ZhbHVlQXNEYXRlICYmIG5ld1ZhbHVlQXNEYXRlICE9PSB0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ld1ZhbHVlQXNEYXRlO1xuICAgIH1cbiAgfVxuICBvbk1pbkNoYW5nZWQobWluKSB7XG4gICAgaWYgKG1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyhtaW4pO1xuICAgIH1cbiAgfVxuICBvbk1heENoYW5nZWQobWF4KSB7XG4gICAgaWYgKG1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyhtYXgpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IGdldFZhbHVlQXNEYXRlUmFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWluKSB7XG4gICAgICB0aGlzLm1pbkFzRGF0ZSA9IGRhdGVGcm9tSVNPKHRoaXMubWluKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4KSB7XG4gICAgICB0aGlzLm1heEFzRGF0ZSA9IGRhdGVGcm9tSVNPKHRoaXMubWF4KTtcbiAgICB9XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCB0aGlzLmxvYWRMb2NhbGVEYXRhKCk7XG4gICAgdGhpcy5vbk1pbkNoYW5nZWQodGhpcy5taW4pO1xuICAgIHRoaXMub25NYXhDaGFuZ2VkKHRoaXMubWF4KTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRlID0gZGF0ZUZyb21SYW5nZSh0aGlzLnJhbmdlICYmIEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgPyB0aGlzLnZhbHVlQXNEYXRlWzBdIDogdGhpcy52YWx1ZUFzRGF0ZSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKTtcbiAgICBsZXQgYWN0aXZlRGF0ZSA9IHRoaXMuZ2V0QWN0aXZlRGF0ZShkYXRlLCB0aGlzLm1pbkFzRGF0ZSwgdGhpcy5tYXhBc0RhdGUpO1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLnJhbmdlICYmIEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSlcbiAgICAgID8gZGF0ZUZyb21SYW5nZSh0aGlzLnZhbHVlQXNEYXRlWzFdLCB0aGlzLm1pbkFzRGF0ZSwgdGhpcy5tYXhBc0RhdGUpXG4gICAgICA6IG51bGw7XG4gICAgY29uc3QgYWN0aXZlRW5kRGF0ZSA9IHRoaXMuZ2V0QWN0aXZlRW5kRGF0ZShlbmREYXRlLCB0aGlzLm1pbkFzRGF0ZSwgdGhpcy5tYXhBc0RhdGUpO1xuICAgIGlmICgodGhpcy5hY3RpdmVSYW5nZSA9PT0gXCJlbmRcIiB8fFxuICAgICAgKHRoaXMuaG92ZXJSYW5nZT8uZm9jdXNlZCA9PT0gXCJlbmRcIiAmJiAoIXRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQgfHwgZW5kRGF0ZSkpKSAmJlxuICAgICAgYWN0aXZlRW5kRGF0ZSkge1xuICAgICAgYWN0aXZlRGF0ZSA9IGFjdGl2ZUVuZERhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUpIHtcbiAgICAgIGFjdGl2ZURhdGUgPSB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBtaW5EYXRlID0gdGhpcy5yYW5nZSAmJiB0aGlzLmFjdGl2ZVJhbmdlXG4gICAgICA/IHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwic3RhcnRcIlxuICAgICAgICA/IHRoaXMubWluQXNEYXRlXG4gICAgICAgIDogZGF0ZSB8fCB0aGlzLm1pbkFzRGF0ZVxuICAgICAgOiB0aGlzLm1pbkFzRGF0ZTtcbiAgICBjb25zdCBtYXhEYXRlID0gdGhpcy5yYW5nZSAmJiB0aGlzLmFjdGl2ZVJhbmdlXG4gICAgICA/IHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwic3RhcnRcIlxuICAgICAgICA/IGVuZERhdGUgfHwgdGhpcy5tYXhBc0RhdGVcbiAgICAgICAgOiB0aGlzLm1heEFzRGF0ZVxuICAgICAgOiB0aGlzLm1heEFzRGF0ZTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkJsdXI6IHRoaXMucmVzZXQsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCB0aGlzLnJlbmRlckNhbGVuZGFyKGFjdGl2ZURhdGUsIG1heERhdGUsIG1pbkRhdGUsIGRhdGUsIGVuZERhdGUpKSk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICB2YWx1ZUhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBkYXRlRnJvbUlTTyh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGxvYWRMb2NhbGVEYXRhKCkge1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IGF3YWl0IGdldExvY2FsZURhdGEodGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICAgIHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSBnZXREYXRlVGltZUZvcm1hdCh0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgREFURV9QSUNLRVJfRk9STUFUX09QVElPTlMpO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXIgY2FsY2l0ZS1kYXRlLXBpY2tlci1tb250aC1oZWFkZXIgYW5kIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGhcbiAgICpcbiAgICogQHBhcmFtIGFjdGl2ZURhdGVcbiAgICogQHBhcmFtIG1heERhdGVcbiAgICogQHBhcmFtIG1pbkRhdGVcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHBhcmFtIGVuZERhdGVcbiAgICovXG4gIHJlbmRlckNhbGVuZGFyKGFjdGl2ZURhdGUsIG1heERhdGUsIG1pbkRhdGUsIGRhdGUsIGVuZERhdGUpIHtcbiAgICByZXR1cm4gKHRoaXMubG9jYWxlRGF0YSAmJiBbXG4gICAgICBoKFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1tb250aC1oZWFkZXJcIiwgeyBhY3RpdmVEYXRlOiBhY3RpdmVEYXRlLCBoZWFkaW5nTGV2ZWw6IHRoaXMuaGVhZGluZ0xldmVsIHx8IEhFQURJTkdfTEVWRUwsIGxvY2FsZURhdGE6IHRoaXMubG9jYWxlRGF0YSwgbWF4OiBtYXhEYXRlLCBtZXNzYWdlczogdGhpcy5tZXNzYWdlcywgbWluOiBtaW5EYXRlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3Q6IHRoaXMubW9udGhIZWFkZXJTZWxlY3RDaGFuZ2UsIHNjYWxlOiB0aGlzLnNjYWxlLCBzZWxlY3RlZERhdGU6IHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIgPyBlbmREYXRlIDogZGF0ZSB8fCBuZXcgRGF0ZSgpIH0pLFxuICAgICAgaChcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGhcIiwgeyBhY3RpdmVEYXRlOiBhY3RpdmVEYXRlLCBkYXRlVGltZUZvcm1hdDogdGhpcy5kYXRlVGltZUZvcm1hdCwgZW5kRGF0ZTogdGhpcy5yYW5nZSA/IGVuZERhdGUgOiB1bmRlZmluZWQsIGhvdmVyUmFuZ2U6IHRoaXMuaG92ZXJSYW5nZSwgbG9jYWxlRGF0YTogdGhpcy5sb2NhbGVEYXRhLCBtYXg6IG1heERhdGUsIG1pbjogbWluRGF0ZSwgb25DYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyQWN0aXZlRGF0ZUNoYW5nZTogdGhpcy5tb250aEFjdGl2ZURhdGVDaGFuZ2UsIG9uQ2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckhvdmVyOiB0aGlzLm1vbnRoSG92ZXJDaGFuZ2UsIG9uQ2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlck1vdXNlT3V0OiB0aGlzLm1vbnRoTW91c2VPdXRDaGFuZ2UsIG9uQ2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdDogdGhpcy5tb250aERhdGVDaGFuZ2UsIHNjYWxlOiB0aGlzLnNjYWxlLCBzZWxlY3RlZERhdGU6IHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIgPyBlbmREYXRlIDogZGF0ZSwgc3RhcnREYXRlOiB0aGlzLnJhbmdlID8gZGF0ZSA6IHVuZGVmaW5lZCB9KVxuICAgIF0pO1xuICB9XG4gIGdldEVuZERhdGUoKSB7XG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpICYmIHRoaXMudmFsdWVBc0RhdGVbMV0pIHx8IHVuZGVmaW5lZDtcbiAgfVxuICBzZXRFbmREYXRlKGRhdGUpIHtcbiAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgIGNvbnN0IG5ld0VuZERhdGUgPSBkYXRlID8gc2V0RW5kT2ZEYXkoZGF0ZSkgOiBkYXRlO1xuICAgIHRoaXMudmFsdWUgPSBbZGF0ZVRvSVNPKHN0YXJ0RGF0ZSksIGRhdGVUb0lTTyhkYXRlKV07XG4gICAgdGhpcy52YWx1ZUFzRGF0ZSA9IFtzdGFydERhdGUsIGRhdGVdO1xuICAgIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUgPSBuZXdFbmREYXRlO1xuICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJSYW5nZUNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5hY3RpdmVFbmREYXRlID0gZGF0ZSB8fCBudWxsO1xuICB9XG4gIGdldFN0YXJ0RGF0ZSgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlQXNEYXRlKSAmJiB0aGlzLnZhbHVlQXNEYXRlWzBdO1xuICB9XG4gIHNldFN0YXJ0RGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHRoaXMuZ2V0RW5kRGF0ZSgpO1xuICAgIHRoaXMudmFsdWUgPSBbZGF0ZVRvSVNPKGRhdGUpLCBkYXRlVG9JU08oZW5kRGF0ZSldO1xuICAgIHRoaXMudmFsdWVBc0RhdGUgPSBbZGF0ZSwgZW5kRGF0ZV07XG4gICAgdGhpcy5tb3N0UmVjZW50UmFuZ2VWYWx1ZSA9IGRhdGU7XG4gICAgdGhpcy5jYWxjaXRlRGF0ZVBpY2tlclJhbmdlQ2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSA9IGRhdGUgfHwgbnVsbDtcbiAgfVxuICAvKipcbiAgICogR2V0IGFuIGFjdGl2ZSBkYXRlIHVzaW5nIHRoZSB2YWx1ZSwgb3IgY3VycmVudCBkYXRlIGFzIGRlZmF1bHRcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBtaW5cbiAgICogQHBhcmFtIG1heFxuICAgKi9cbiAgZ2V0QWN0aXZlRGF0ZSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gZGF0ZUZyb21SYW5nZSh0aGlzLmFjdGl2ZURhdGUsIG1pbiwgbWF4KSB8fCB2YWx1ZSB8fCBkYXRlRnJvbVJhbmdlKG5ldyBEYXRlKCksIG1pbiwgbWF4KTtcbiAgfVxuICBnZXRBY3RpdmVFbmREYXRlKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiAoZGF0ZUZyb21SYW5nZSh0aGlzLmFjdGl2ZUVuZERhdGUsIG1pbiwgbWF4KSB8fCB2YWx1ZSB8fCBkYXRlRnJvbVJhbmdlKG5ldyBEYXRlKCksIG1pbiwgbWF4KSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImFjdGl2ZURhdGVcIjogW1wiYWN0aXZlRGF0ZVdhdGNoZXJcIl0sXG4gICAgXCJ2YWx1ZUFzRGF0ZVwiOiBbXCJ2YWx1ZUFzRGF0ZVdhdGNoZXJcIl0sXG4gICAgXCJtaW5cIjogW1wib25NaW5DaGFuZ2VkXCJdLFxuICAgIFwibWF4XCI6IFtcIm9uTWF4Q2hhbmdlZFwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIiwgXCJsb2FkTG9jYWxlRGF0YVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlSGFuZGxlclwiXVxuICB9OyB9XG59O1xuRGF0ZVBpY2tlci5zdHlsZSA9IGRhdGVQaWNrZXJDc3M7XG5cbmNvbnN0IGRhdGVQaWNrZXJEYXlDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uZGF5LXYtd3JhcHBlcntmbGV4OjEgMSBhdXRvfS5kYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcn0uZGF5e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItcmFkaXVzOjk5OTlweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07bGluZS1oZWlnaHQ6MTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7YmFja2dyb3VuZDpub25lO2JveC1zaGFkb3c6MCAwIDAgMnB4IHRyYW5zcGFyZW50fS50ZXh0e21hcmdpbi1ibG9jazoxcHggMHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MHB4fTpob3N0KFtzY2FsZT1zXSkgLmRheS12LXdyYXBwZXJ7cGFkZGluZy1ibG9jazowLjEyNXJlbX06aG9zdChbc2NhbGU9c10pIC5kYXktd3JhcHBlcntwYWRkaW5nOjBweH06aG9zdChbc2NhbGU9c10pIC5kYXl7YmxvY2stc2l6ZToyN3B4O2lubGluZS1zaXplOjI3cHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKX06aG9zdChbc2NhbGU9bV0pIC5kYXktdi13cmFwcGVye3BhZGRpbmctYmxvY2s6MC4yNXJlbX06aG9zdChbc2NhbGU9bV0pIC5kYXktd3JhcHBlcntwYWRkaW5nLWlubGluZTowLjI1cmVtfTpob3N0KFtzY2FsZT1tXSkgLmRheXtibG9jay1zaXplOjMzcHg7aW5saW5lLXNpemU6MzNweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0KFtzY2FsZT1sXSkgLmRheS12LXdyYXBwZXJ7cGFkZGluZy1ibG9jazowLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmRheS13cmFwcGVye3BhZGRpbmctaW5saW5lOjAuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSAuZGF5e2Jsb2NrLXNpemU6NDNweDtpbmxpbmUtc2l6ZTo0M3B4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKX06aG9zdChbY3VycmVudC1tb250aF0pIC5kYXl7b3BhY2l0eToxfTpob3N0KDpob3Zlcjpub3QoW2Rpc2FibGVkXSkpIC5kYXksOmhvc3QoW2FjdGl2ZV06bm90KFtyYW5nZV0pKSAuZGF5e2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpLDpob3N0KFthY3RpdmVdKXtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9Omhvc3QoOmZvY3VzOm5vdChbZGlzYWJsZWRdKSkgLmRheXtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKTtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3NlbGVjdGVkXSkgLmRheXtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSAhaW1wb3J0YW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSAhaW1wb3J0YW50fTpob3N0KFtyYW5nZV1bc2VsZWN0ZWRdKSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXSkgLmRheS13cmFwcGVye2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6NDAlO2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOjQwJX06aG9zdChbZW5kLW9mLXJhbmdlXSkgLmRheS13cmFwcGVye2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjQwJTtib3JkZXItZW5kLWVuZC1yYWRpdXM6NDAlfTpob3N0KFtzdGFydC1vZi1yYW5nZV0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgNHB4IDAgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtzdGFydC1vZi1yYW5nZV0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgLTRweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdKSAuZGF5e29wYWNpdHk6MX06aG9zdChbZW5kLW9mLXJhbmdlXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtNHB4IDAgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtlbmQtb2YtcmFuZ2VdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDRweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbZW5kLW9mLXJhbmdlXSkgLmRheXtvcGFjaXR5OjF9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXTpub3QoOmZvY3VzKSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LDpob3N0KFtlbmQtb2YtcmFuZ2VdOm5vdCg6Zm9jdXMpKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXl7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtzdGFydC1vZi1yYW5nZV06bm90KDpmb2N1cykpIC5jYWxjaXRlLS1ydGwgLmRheSw6aG9zdChbZW5kLW9mLXJhbmdlXTpub3QoOmZvY3VzKSkgLmNhbGNpdGUtLXJ0bCAuZGF5e2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdW3NjYWxlPWxdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDhweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdW3NjYWxlPWxdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IC04cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2VuZC1vZi1yYW5nZV1bc2NhbGU9bF0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgLThweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbZW5kLW9mLXJhbmdlXVtzY2FsZT1sXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCA4cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2hpZ2hsaWdodGVkXSkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpfTpob3N0KFtoaWdobGlnaHRlZF0pIC5kYXktd3JhcHBlciAuZGF5e2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbaGlnaGxpZ2h0ZWRdOm5vdChbYWN0aXZlXTpmb2N1cykpIC5kYXl7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pKSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkpIC5kYXl7Ym9yZGVyLXJhZGl1czowcHh9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSk7Ym9yZGVyLXJhZGl1czowcHg7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSk7Ym9yZGVyLXJhZGl1czowcHg7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbZW5kLW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMikpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2VuZC1vZi1yYW5nZV1bcmFuZ2UtaG92ZXJdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMikpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoOmhvdmVyW2VuZC1vZi1yYW5nZV1bcmFuZ2UtaG92ZXJdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdCg6aG92ZXJbc3RhcnQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSk7Ym9yZGVyLXJhZGl1czowcHg7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdCg6aG92ZXJbc3RhcnQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW2VuZC1vZi1yYW5nZV1bcmFuZ2UtaG92ZXJdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMikpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLXN0YXJ0KSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1zdGFydCkgLmRheXtib3JkZXItcmFkaXVzOjk5OTlweDtvcGFjaXR5OjE7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZCkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tZW5kKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1lbmQpIC5kYXl7Ym9yZGVyLXJhZGl1czo5OTk5cHg7b3BhY2l0eToxO2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1zdGFydC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tZW5kLmhvdmVyLS1vdXRzaWRlLXJhbmdlKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1zdGFydC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgLmNhbGNpdGUtLXJ0bCAuZGF5e2JvcmRlci1yYWRpdXM6OTk5OXB4O29wYWNpdHk6MTtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tZW5kLmhvdmVyLS1vdXRzaWRlLXJhbmdlKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1zdGFydC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tZW5kLmhvdmVyLS1vdXRzaWRlLXJhbmdlKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXksOmhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIC5jYWxjaXRlLS1ydGwgLmRheXtib3JkZXItcmFkaXVzOjk5OTlweDtvcGFjaXR5OjE7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KDpob3ZlcltzdGFydC1vZi1yYW5nZV0uaG92ZXItLWluc2lkZS1yYW5nZS5mb2N1c2VkLS1lbmQpIC5kYXktd3JhcHBlciw6aG9zdCg6aG92ZXJbZW5kLW9mLXJhbmdlXS5ob3Zlci0taW5zaWRlLXJhbmdlLmZvY3VzZWQtLXN0YXJ0KSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpub25lfTpob3N0KFtzdGFydC1vZi1yYW5nZV0uaG92ZXItLWluc2lkZS1yYW5nZS5mb2N1c2VkLS1lbmQpIC5kYXktd3JhcHBlciw6aG9zdChbZW5kLW9mLXJhbmdlXS5ob3Zlci0taW5zaWRlLXJhbmdlLmZvY3VzZWQtLXN0YXJ0KSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KFtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9c3RhcnRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IC00cHggMHB4IDBweCAwcHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1zdGFydF0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KFtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1zdGFydF0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KFtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCA0cHggMHB4IDBweCAwcHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtzY2FsZT1zXVtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9c11bcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtMXB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc2NhbGU9c11baGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9c11bcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9c11baGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9ZW5kXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgMXB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc2NhbGU9bF1baGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9bF1bcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9bF1baGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9ZW5kXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgNnB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmRheS13cmFwcGVye2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6NDUlO2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOjQ1JX06aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9ZW5kXSkgLmRheS13cmFwcGVyLDpob3N0KFtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSAuZGF5LXdyYXBwZXJ7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6NDUlO2JvcmRlci1lbmQtZW5kLXJhZGl1czo0NSV9Omhvc3QoW3NjYWxlPWxdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1sXVtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9bF1baGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9bF1bcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9c3RhcnRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IC02cHggMHB4IDBweCAwcHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXs6aG9zdCg6aG92ZXI6bm90KFtkaXNhYmxlZF0pKSAuZGF5LDpob3N0KFthY3RpdmVdOm5vdChbcmFuZ2VdKSkgLmRheXtib3JkZXItcmFkaXVzOjBweH06aG9zdChbc2VsZWN0ZWRdKXtvdXRsaW5lOjJweCBzb2xpZCBjYW52YXNUZXh0fTpob3N0KFtzZWxlY3RlZF0pIC5kYXl7Ym9yZGVyLXJhZGl1czowcHg7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9Omhvc3QoW3JhbmdlXVtzZWxlY3RlZF0pIC5kYXktd3JhcHBlciw6aG9zdChbaGlnaGxpZ2h0ZWRdKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkpIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWNvbG9yOmhpZ2hsaWdodH06aG9zdChbcmFuZ2VdW3NlbGVjdGVkXVtzdGFydC1vZi1yYW5nZV0pIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2VdW3NlbGVjdGVkXVtlbmQtb2YtcmFuZ2VdKSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1jb2xvcjpjYW52YXN9fVwiO1xuXG5jb25zdCBEYXRlUGlja2VyRGF5ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVEYXlTZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEYXlTZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXlIb3ZlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF5SG92ZXJcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZURheVNlbGVjdC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jYWxjaXRlRGF5U2VsZWN0LmVtaXQoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGF5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5yYW5nZUVkZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFydE9mUmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLmVuZE9mUmFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnJhbmdlSG92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBwb2ludGVyT3ZlckhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXlIb3Zlci5lbWl0KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5wYXJlbnREYXRlUGlja2VyRWwgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkodGhpcy5lbCwgXCJjYWxjaXRlLWRhdGUtcGlja2VyXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXlJZCA9IGRhdGVUb0lTTyh0aGlzLnZhbHVlKS5yZXBsYWNlQWxsKFwiLVwiLCBcIlwiKTtcbiAgICBpZiAodGhpcy5wYXJlbnREYXRlUGlja2VyRWwpIHtcbiAgICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBsYW5nOiBsb2NhbGUgfSA9IHRoaXMucGFyZW50RGF0ZVBpY2tlckVsO1xuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICAgICAgLi4uKG51bWJlcmluZ1N5c3RlbSAmJiB7IG51bWJlcmluZ1N5c3RlbSB9KSxcbiAgICAgICAgLi4uKGxvY2FsZSAmJiB7IGxvY2FsZSB9KVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZm9ybWF0dGVkRGF5ID0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKFN0cmluZyh0aGlzLmRheSkpO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgZGF5TGFiZWwgPSB0aGlzLmRhdGVUaW1lRm9ybWF0LmZvcm1hdCh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtZGlzYWJsZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLmRpc2FibGVkKSwgXCJhcmlhLWxhYmVsXCI6IGRheUxhYmVsLCBcImFyaWEtc2VsZWN0ZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLmFjdGl2ZSksIGlkOiBkYXlJZCwgb25DbGljazogdGhpcy5vbkNsaWNrLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7IFwiZGF5LXYtd3JhcHBlclwiOiB0cnVlLCBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImRheS13cmFwcGVyXCIgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJkYXlcIiB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInRleHRcIiB9LCBmb3JtYXR0ZWREYXkpKSkpKSk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcywgdGhpcy5pc1RhYmJhYmxlKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgaXNUYWJiYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcbkRhdGVQaWNrZXJEYXkuc3R5bGUgPSBkYXRlUGlja2VyRGF5Q3NzO1xuXG5jb25zdCBkYXRlUGlja2VyTW9udGhDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX0uY2FsZW5kYXJ7bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtfS53ZWVrLWhlYWRlcnN7ZGlzcGxheTpmbGV4O2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW19LndlZWstaGVhZGVye3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO2lubGluZS1zaXplOjE0LjI4NTcxNDI4NTclfS5kYXl7ZGlzcGxheTpmbGV4O21pbi1pbmxpbmUtc2l6ZTowcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtpbmxpbmUtc2l6ZToxNC4yODU3MTQyODU3JX06aG9zdChbc2NhbGU9c10pIC53ZWVrLWhlYWRlcntwYWRkaW5nLWlubGluZTowcHg7cGFkZGluZy1ibG9jazowLjVyZW0gMC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSAud2Vlay1oZWFkZXJ7cGFkZGluZy1pbmxpbmU6MHB4O3BhZGRpbmctYmxvY2s6MC43NXJlbSAxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pIC53ZWVrLWhlYWRlcntwYWRkaW5nLWlubGluZTowcHg7cGFkZGluZy1ibG9jazoxcmVtIDEuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfS53ZWVrLWRheXN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTo2cHh9LndlZWstZGF5czpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9XCI7XG5cbmNvbnN0IERBWVNfUEVSX1dFRUsgPSA3O1xuY29uc3QgREFZU19NQVhJTVVNX0lOREVYID0gNjtcbmNvbnN0IERhdGVQaWNrZXJNb250aCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckhvdmVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VySG92ZXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyQWN0aXZlRGF0ZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyTW91c2VPdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dFwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNSVEwgPSB0aGlzLmVsLmRpciA9PT0gXCJydGxcIjtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFkZERheXMoLTcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKGlzUlRMID8gLTEgOiAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFkZERheXMoaXNSVEwgPyAxIDogLTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUGFnZVVwXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFkZE1vbnRocygtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQYWdlRG93blwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGRNb250aHMoMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZURhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICB0aGlzLmFkZERheXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hY3RpdmVEYXRlLnNldERhdGUobmV3IERhdGUodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCksIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICB0aGlzLmFkZERheXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlRhYlwiOlxuICAgICAgICAgIHRoaXMuYWN0aXZlRm9jdXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9uY2UgdXNlciBpcyBub3QgaW50ZXJhY3RpbmcgdmlhIGtleWJvYXJkLFxuICAgICAqIGRpc2FibGUgYXV0byBmb2N1c2luZyBvZiBhY3RpdmUgZGF0ZVxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZUFjdGl2ZUZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVGb2N1cyA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5kYXlIb3ZlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldC5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dC5lbWl0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VySG92ZXIuZW1pdCh0YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLmRheVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0LmVtaXQodGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVuZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ob3ZlclJhbmdlID0gdW5kZWZpbmVkO1xuICB9XG4gIHBvaW50ZXJPdXRIYW5kbGVyKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlck1vdXNlT3V0LmVtaXQoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9udGggPSB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB5ZWFyID0gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgc3RhcnRPZldlZWsgPSB0aGlzLmxvY2FsZURhdGEud2Vla1N0YXJ0ICUgNztcbiAgICBjb25zdCB7IGFiYnJldmlhdGVkLCBzaG9ydCwgbmFycm93IH0gPSB0aGlzLmxvY2FsZURhdGEuZGF5cztcbiAgICBjb25zdCB3ZWVrRGF5cyA9IHRoaXMuc2NhbGUgPT09IFwic1wiID8gbmFycm93IHx8IHNob3J0IHx8IGFiYnJldmlhdGVkIDogc2hvcnQgfHwgYWJicmV2aWF0ZWQgfHwgbmFycm93O1xuICAgIGNvbnN0IGFkanVzdGVkV2Vla0RheXMgPSBbLi4ud2Vla0RheXMuc2xpY2Uoc3RhcnRPZldlZWssIDcpLCAuLi53ZWVrRGF5cy5zbGljZSgwLCBzdGFydE9mV2VlayldO1xuICAgIGNvbnN0IGN1ck1vbkRheXMgPSB0aGlzLmdldEN1cnJlbnRNb250aERheXMobW9udGgsIHllYXIpO1xuICAgIGNvbnN0IHByZXZNb25EYXlzID0gdGhpcy5nZXRQcmV2aW91c01vbnRoRGF5cyhtb250aCwgeWVhciwgc3RhcnRPZldlZWspO1xuICAgIGNvbnN0IG5leHRNb25EYXlzID0gdGhpcy5nZXROZXh0TW9udGhEYXlzKG1vbnRoLCB5ZWFyLCBzdGFydE9mV2Vlayk7XG4gICAgbGV0IGRheUluV2VlayA9IDA7XG4gICAgY29uc3QgZ2V0RGF5SW5XZWVrID0gKCkgPT4gZGF5SW5XZWVrKysgJSA3O1xuICAgIGNvbnN0IGRheXMgPSBbXG4gICAgICAuLi5wcmV2TW9uRGF5cy5tYXAoKGRheSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIGRheUluV2VlazogZ2V0RGF5SW5XZWVrKCksXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIC4uLmN1ck1vbkRheXMubWFwKChkYXkpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBzYW1lRGF0ZShkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICBjdXJyZW50TW9udGg6IHRydWUsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIGRheUluV2VlazogZ2V0RGF5SW5XZWVrKCksXG4gICAgICAgICAgZGF0ZSxcbiAgICAgICAgICByZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgLi4ubmV4dE1vbkRheXMubWFwKChkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGRheSxcbiAgICAgICAgICBkYXlJbldlZWs6IGdldERheUluV2VlaygpLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgZGF5KVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICBdO1xuICAgIGNvbnN0IHdlZWtzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSArPSA3KSB7XG4gICAgICB3ZWVrcy5wdXNoKGRheXMuc2xpY2UoaSwgaSArIDcpKTtcbiAgICB9XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25Gb2N1c091dDogdGhpcy5kaXNhYmxlQWN0aXZlRm9jdXMsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiY2FsZW5kYXJcIiwgcm9sZTogXCJncmlkXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcIndlZWstaGVhZGVyc1wiLCByb2xlOiBcInJvd1wiIH0sIGFkanVzdGVkV2Vla0RheXMubWFwKCh3ZWVrZGF5KSA9PiAoaChcInNwYW5cIiwgeyBjbGFzczogXCJ3ZWVrLWhlYWRlclwiLCByb2xlOiBcImNvbHVtbmhlYWRlclwiIH0sIHdlZWtkYXkpKSkpLCB3ZWVrcy5tYXAoKGRheXMpID0+IChoKFwiZGl2XCIsIHsgY2xhc3M6IFwid2Vlay1kYXlzXCIsIHJvbGU6IFwicm93XCIgfSwgZGF5cy5tYXAoKGRheSkgPT4gdGhpcy5yZW5kZXJEYXRlRGF5KGRheSkpKSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBBZGQgbiBtb250aHMgdG8gdGhlIGN1cnJlbnQgbW9udGhcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBcbiAgICovXG4gIGFkZE1vbnRocyhzdGVwKSB7XG4gICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIG5leHREYXRlLnNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgc3RlcCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyQWN0aXZlRGF0ZUNoYW5nZS5lbWl0KGRhdGVGcm9tUmFuZ2UobmV4dERhdGUsIHRoaXMubWluLCB0aGlzLm1heCkpO1xuICAgIHRoaXMuYWN0aXZlRm9jdXMgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgbiBkYXlzIHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICpcbiAgICogQHBhcmFtIHN0ZXBcbiAgICovXG4gIGFkZERheXMoc3RlcCA9IDApIHtcbiAgICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgbmV4dERhdGUuc2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUuZ2V0RGF0ZSgpICsgc3RlcCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyQWN0aXZlRGF0ZUNoYW5nZS5lbWl0KGRhdGVGcm9tUmFuZ2UobmV4dERhdGUsIHRoaXMubWluLCB0aGlzLm1heCkpO1xuICAgIHRoaXMuYWN0aXZlRm9jdXMgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgZGF0ZXMgZm9yIGxhc3QgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcbiAgICpcbiAgICogQHBhcmFtIG1vbnRoXG4gICAqIEBwYXJhbSB5ZWFyXG4gICAqIEBwYXJhbSBzdGFydE9mV2Vla1xuICAgKi9cbiAgZ2V0UHJldmlvdXNNb250aERheXMobW9udGgsIHllYXIsIHN0YXJ0T2ZXZWVrKSB7XG4gICAgY29uc3QgbGFzdERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCk7XG4gICAgY29uc3QgZGF0ZSA9IGxhc3REYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBzdGFydERheSA9IGxhc3REYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICBpZiAoc3RhcnREYXkgPT09IChzdGFydE9mV2VlayArIERBWVNfTUFYSU1VTV9JTkRFWCkgJSBEQVlTX1BFUl9XRUVLKSB7XG4gICAgICByZXR1cm4gZGF5cztcbiAgICB9XG4gICAgaWYgKHN0YXJ0RGF5ID09PSBzdGFydE9mV2Vlaykge1xuICAgICAgcmV0dXJuIFtkYXRlXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IChEQVlTX1BFUl9XRUVLICsgc3RhcnREYXkgLSBzdGFydE9mV2VlaykgJSBEQVlTX1BFUl9XRUVLOyBpID49IDA7IGktLSkge1xuICAgICAgZGF5cy5wdXNoKGRhdGUgLSBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXM7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBkYXRlcyBmb3IgdGhlIGN1cnJlbnQgbW9udGhcbiAgICpcbiAgICogQHBhcmFtIG1vbnRoXG4gICAqIEBwYXJhbSB5ZWFyXG4gICAqL1xuICBnZXRDdXJyZW50TW9udGhEYXlzKG1vbnRoLCB5ZWFyKSB7XG4gICAgY29uc3QgbnVtID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7XG4gICAgY29uc3QgZGF5cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIGRheXMucHVzaChpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgZGF0ZXMgZm9yIGZpcnN0IGRheXMgb2YgdGhlIG5leHQgbW9udGhcbiAgICpcbiAgICogQHBhcmFtIG1vbnRoXG4gICAqIEBwYXJhbSB5ZWFyXG4gICAqIEBwYXJhbSBzdGFydE9mV2Vla1xuICAgKi9cbiAgZ2V0TmV4dE1vbnRoRGF5cyhtb250aCwgeWVhciwgc3RhcnRPZldlZWspIHtcbiAgICBjb25zdCBlbmREYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERheSgpO1xuICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICBpZiAoZW5kRGF5ID09PSAoc3RhcnRPZldlZWsgKyBEQVlTX01BWElNVU1fSU5ERVgpICUgREFZU19QRVJfV0VFSykge1xuICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKERBWVNfTUFYSU1VTV9JTkRFWCAtIChlbmREYXkgLSBzdGFydE9mV2VlaykpICUgREFZU19QRVJfV0VFSzsgaSsrKSB7XG4gICAgICBkYXlzLnB1c2goaSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBkYXRlIGlzIGluIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXNcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGJldHdlZW5TZWxlY3RlZFJhbmdlKGRhdGUpIHtcbiAgICByZXR1cm4gISEodGhpcy5zdGFydERhdGUgJiZcbiAgICAgIHRoaXMuZW5kRGF0ZSAmJlxuICAgICAgZGF0ZSA+IHRoaXMuc3RhcnREYXRlICYmXG4gICAgICBkYXRlIDwgdGhpcy5lbmREYXRlICYmXG4gICAgICAhdGhpcy5pc1JhbmdlSG92ZXIoZGF0ZSkpO1xuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGRhdGUgc2hvdWxkIGJlIGluIHNlbGVjdGVkIHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBpc1NlbGVjdGVkKGRhdGUpIHtcbiAgICByZXR1cm4gISEoc2FtZURhdGUoZGF0ZSwgdGhpcy5zZWxlY3RlZERhdGUpIHx8XG4gICAgICAodGhpcy5zdGFydERhdGUgJiYgc2FtZURhdGUoZGF0ZSwgdGhpcy5zdGFydERhdGUpKSB8fFxuICAgICAgKHRoaXMuZW5kRGF0ZSAmJiBzYW1lRGF0ZShkYXRlLCB0aGlzLmVuZERhdGUpKSk7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgZGF0ZSBpcyB0aGUgc3RhcnQgb2YgdGhlIGRhdGUgcmFuZ2VcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGlzU3RhcnRPZlJhbmdlKGRhdGUpIHtcbiAgICByZXR1cm4gISEodGhpcy5zdGFydERhdGUgJiZcbiAgICAgICFzYW1lRGF0ZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKSAmJlxuICAgICAgc2FtZURhdGUodGhpcy5zdGFydERhdGUsIGRhdGUpICYmXG4gICAgICAhdGhpcy5pc0VuZE9mUmFuZ2UoZGF0ZSkpO1xuICB9XG4gIGlzRW5kT2ZSYW5nZShkYXRlKSB7XG4gICAgcmV0dXJuICEhKCh0aGlzLmVuZERhdGUgJiYgIXNhbWVEYXRlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpICYmIHNhbWVEYXRlKHRoaXMuZW5kRGF0ZSwgZGF0ZSkpIHx8XG4gICAgICAoIXRoaXMuZW5kRGF0ZSAmJlxuICAgICAgICB0aGlzLmhvdmVyUmFuZ2UgJiZcbiAgICAgICAgc2FtZURhdGUodGhpcy5zdGFydERhdGUsIHRoaXMuaG92ZXJSYW5nZS5lbmQpICYmXG4gICAgICAgIHNhbWVEYXRlKGRhdGUsIHRoaXMuaG92ZXJSYW5nZS5lbmQpKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlciBjYWxjaXRlLWRhdGUtcGlja2VyLWRheVxuICAgKlxuICAgKiBAcGFyYW0gYWN0aXZlLmFjdGl2ZVxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqIEBwYXJhbSBkYXlcbiAgICogQHBhcmFtIGRheUluV2Vla1xuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcGFyYW0gY3VycmVudE1vbnRoXG4gICAqIEBwYXJhbSByZWZcbiAgICogQHBhcmFtIGFjdGl2ZS5jdXJyZW50TW9udGhcbiAgICogQHBhcmFtIGFjdGl2ZS5kYXRlXG4gICAqIEBwYXJhbSBhY3RpdmUuZGF5XG4gICAqIEBwYXJhbSBhY3RpdmUuZGF5SW5XZWVrXG4gICAqIEBwYXJhbSBhY3RpdmUucmVmXG4gICAqL1xuICByZW5kZXJEYXRlRGF5KHsgYWN0aXZlLCBjdXJyZW50TW9udGgsIGRhdGUsIGRheSwgZGF5SW5XZWVrLCByZWYgfSkge1xuICAgIGNvbnN0IGlzRm9jdXNlZE9uU3RhcnQgPSB0aGlzLmlzRm9jdXNlZE9uU3RhcnQoKTtcbiAgICBjb25zdCBpc0hvdmVySW5SYW5nZSA9IHRoaXMuaXNIb3ZlckluUmFuZ2UoKSB8fFxuICAgICAgKCF0aGlzLmVuZERhdGUgJiYgdGhpcy5ob3ZlclJhbmdlICYmIHNhbWVEYXRlKHRoaXMuaG92ZXJSYW5nZT8uZW5kLCB0aGlzLnN0YXJ0RGF0ZSkpO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImRheVwiLCBrZXk6IGRhdGUudG9EYXRlU3RyaW5nKCksIHJvbGU6IFwiZ3JpZGNlbGxcIiB9LCBoKFwiY2FsY2l0ZS1kYXRlLXBpY2tlci1kYXlcIiwgeyBhY3RpdmU6IGFjdGl2ZSwgY2xhc3M6IHtcbiAgICAgICAgXCJob3Zlci0taW5zaWRlLXJhbmdlXCI6IHRoaXMuc3RhcnREYXRlICYmIGlzSG92ZXJJblJhbmdlLFxuICAgICAgICBcImhvdmVyLS1vdXRzaWRlLXJhbmdlXCI6IHRoaXMuc3RhcnREYXRlICYmICFpc0hvdmVySW5SYW5nZSxcbiAgICAgICAgXCJmb2N1c2VkLS1zdGFydFwiOiBpc0ZvY3VzZWRPblN0YXJ0LFxuICAgICAgICBcImZvY3VzZWQtLWVuZFwiOiAhaXNGb2N1c2VkT25TdGFydFxuICAgICAgfSwgY3VycmVudE1vbnRoOiBjdXJyZW50TW9udGgsIGRhdGVUaW1lRm9ybWF0OiB0aGlzLmRhdGVUaW1lRm9ybWF0LCBkYXk6IGRheSwgZGlzYWJsZWQ6ICFpblJhbmdlKGRhdGUsIHRoaXMubWluLCB0aGlzLm1heCksIGVuZE9mUmFuZ2U6IHRoaXMuaXNFbmRPZlJhbmdlKGRhdGUpLCBoaWdobGlnaHRlZDogdGhpcy5iZXR3ZWVuU2VsZWN0ZWRSYW5nZShkYXRlKSwgb25DYWxjaXRlRGF5U2VsZWN0OiB0aGlzLmRheVNlbGVjdCwgb25DYWxjaXRlSW50ZXJuYWxEYXlIb3ZlcjogdGhpcy5kYXlIb3ZlciwgcmFuZ2U6ICEhdGhpcy5zdGFydERhdGUgJiYgISF0aGlzLmVuZERhdGUgJiYgIXNhbWVEYXRlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpLCByYW5nZUVkZ2U6IGRheUluV2VlayA9PT0gMCA/IFwic3RhcnRcIiA6IGRheUluV2VlayA9PT0gNiA/IFwiZW5kXCIgOiB1bmRlZmluZWQsIHJhbmdlSG92ZXI6IHRoaXMuaXNSYW5nZUhvdmVyKGRhdGUpLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWQ6IHRoaXMuaXNTZWxlY3RlZChkYXRlKSwgc3RhcnRPZlJhbmdlOiB0aGlzLmlzU3RhcnRPZlJhbmdlKGRhdGUpLCB2YWx1ZTogZGF0ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+IHtcbiAgICAgICAgLy8gd2hlbiBtb3ZpbmcgdmlhIGtleWJvYXJkLCBmb2N1cyBtdXN0IGJlIHVwZGF0ZWQgb24gYWN0aXZlIGRhdGVcbiAgICAgICAgaWYgKHJlZiAmJiBhY3RpdmUgJiYgdGhpcy5hY3RpdmVGb2N1cykge1xuICAgICAgICAgIGVsPy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9IH0pKSk7XG4gIH1cbiAgaXNGb2N1c2VkT25TdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3ZlclJhbmdlPy5mb2N1c2VkID09PSBcInN0YXJ0XCI7XG4gIH1cbiAgaXNIb3ZlckluUmFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLmhvdmVyUmFuZ2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSB0aGlzLmhvdmVyUmFuZ2U7XG4gICAgcmV0dXJuICEhKCghdGhpcy5pc0ZvY3VzZWRPblN0YXJ0KCkgJiYgdGhpcy5zdGFydERhdGUgJiYgKCF0aGlzLmVuZERhdGUgfHwgZW5kIDwgdGhpcy5lbmREYXRlKSkgfHxcbiAgICAgICh0aGlzLmlzRm9jdXNlZE9uU3RhcnQoKSAmJiB0aGlzLnN0YXJ0RGF0ZSAmJiBzdGFydCA+IHRoaXMuc3RhcnREYXRlKSk7XG4gIH1cbiAgaXNSYW5nZUhvdmVyKGRhdGUpIHtcbiAgICBpZiAoIXRoaXMuaG92ZXJSYW5nZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHRoaXMuaG92ZXJSYW5nZTtcbiAgICBjb25zdCBpc1N0YXJ0ID0gdGhpcy5pc0ZvY3VzZWRPblN0YXJ0KCk7XG4gICAgY29uc3QgaW5zaWRlUmFuZ2UgPSB0aGlzLmlzSG92ZXJJblJhbmdlKCk7XG4gICAgY29uc3QgY29uZDEgPSBpbnNpZGVSYW5nZSAmJlxuICAgICAgKCghaXNTdGFydCAmJiBkYXRlID4gdGhpcy5zdGFydERhdGUgJiYgKGRhdGUgPCBlbmQgfHwgc2FtZURhdGUoZGF0ZSwgZW5kKSkpIHx8XG4gICAgICAgIChpc1N0YXJ0ICYmIGRhdGUgPCB0aGlzLmVuZERhdGUgJiYgKGRhdGUgPiBzdGFydCB8fCBzYW1lRGF0ZShkYXRlLCBzdGFydCkpKSk7XG4gICAgY29uc3QgY29uZDIgPSAhaW5zaWRlUmFuZ2UgJiZcbiAgICAgICgoIWlzU3RhcnQgJiYgZGF0ZSA+PSB0aGlzLmVuZERhdGUgJiYgKGRhdGUgPCBlbmQgfHwgc2FtZURhdGUoZGF0ZSwgZW5kKSkpIHx8XG4gICAgICAgIChpc1N0YXJ0ICYmXG4gICAgICAgICAgKCh0aGlzLnN0YXJ0RGF0ZSAmJiBkYXRlIDwgdGhpcy5zdGFydERhdGUpIHx8XG4gICAgICAgICAgICAodGhpcy5lbmREYXRlICYmIHNhbWVEYXRlKGRhdGUsIHRoaXMuc3RhcnREYXRlKSkpICYmXG4gICAgICAgICAgKChzdGFydCAmJiBkYXRlID4gc3RhcnQpIHx8IHNhbWVEYXRlKGRhdGUsIHN0YXJ0KSkpKTtcbiAgICByZXR1cm4gY29uZDEgfHwgY29uZDI7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcbkRhdGVQaWNrZXJNb250aC5zdHlsZSA9IGRhdGVQaWNrZXJNb250aENzcztcblxuY29uc3QgQ1NTID0ge1xuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIG1vbnRoOiBcIm1vbnRoXCIsXG4gIGNoZXZyb246IFwiY2hldnJvblwiLFxuICBzdWZmaXg6IFwic3VmZml4XCIsXG4gIHllYXJTdWZmaXg6IFwieWVhci0tc3VmZml4XCIsXG4gIHllYXJXcmFwOiBcInllYXItd3JhcFwiLFxuICB0ZXh0UmV2ZXJzZTogXCJ0ZXh0LS1yZXZlcnNlXCJcbn07XG5jb25zdCBJQ09OID0ge1xuICBjaGV2cm9uTGVmdDogXCJjaGV2cm9uLWxlZnRcIixcbiAgY2hldnJvblJpZ2h0OiBcImNoZXZyb24tcmlnaHRcIlxufTtcblxuY29uc3QgZGF0ZVBpY2tlck1vbnRoSGVhZGVyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja30uaGVhZGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjI1cmVtfTpob3N0KFtzY2FsZT1zXSkgLnRleHR7bWFyZ2luLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSAuY2hldnJvbntibG9jay1zaXplOjIuMjVyZW19Omhvc3QoW3NjYWxlPW1dKSAudGV4dHttYXJnaW4tYmxvY2s6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bV0pIC5jaGV2cm9ue2Jsb2NrLXNpemU6M3JlbX06aG9zdChbc2NhbGU9bF0pIC50ZXh0e21hcmdpbi1ibG9jazoxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0xKTtsaW5lLWhlaWdodDoxLjVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY2hldnJvbntibG9jay1zaXplOjMuNXJlbX0uY2hldnJvbnttYXJnaW4taW5saW5lOi0wLjI1cmVtO2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzowO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3BhZGRpbmctaW5saW5lOjAuMjVyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2lubGluZS1zaXplOjE0LjI4NTcxNDI4NTclfS5jaGV2cm9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY2hldnJvbjpob3ZlciwuY2hldnJvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNoZXZyb246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jaGV2cm9uW2FyaWEtZGlzYWJsZWQ9dHJ1ZV17cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjB9LnRleHR7bWFyZ2luLWJsb2NrOmF1dG87ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bzthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxfS50ZXh0LS1yZXZlcnNle2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfS5tb250aCwueWVhciwuc3VmZml4e21hcmdpbi1pbmxpbmU6MC4yNXJlbTttYXJnaW4tYmxvY2s6YXV0bztkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7bGluZS1oZWlnaHQ6MS4yNTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOmluaGVyaXR9LnllYXJ7cG9zaXRpb246cmVsYXRpdmU7aW5saW5lLXNpemU6Mi41cmVtO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6aW5oZXJpdDtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS55ZWFyOmhvdmVye3RyYW5zaXRpb24tZHVyYXRpb246MTAwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uLXByb3BlcnR5Om91dGxpbmUtY29sb3I7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMik7b3V0bGluZS1vZmZzZXQ6MnB4fS55ZWFyOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS55ZWFyLS1zdWZmaXh7dGV4dC1hbGlnbjpzdGFydH0ueWVhci13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlfS5zdWZmaXh7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LWFsaWduOnN0YXJ0O2luc2V0LWlubGluZS1zdGFydDowfVwiO1xuXG5jb25zdCBEYXRlUGlja2VyTW9udGhIZWFkZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdFwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHllYXIgb24gVVAvRE9XTiBrZXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLm9uWWVhcktleSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbG9jYWxpemVkWWVhciA9IHRoaXMucGFyc2VDYWxlbmRhclllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2V0WWVhcih7IGxvY2FsaXplZFllYXIsIG9mZnNldDogLTEgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNldFllYXIoeyBsb2NhbGl6ZWRZZWFyLCBvZmZzZXQ6IDEgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uWWVhckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRZZWFyKHtcbiAgICAgICAgbG9jYWxpemVkWWVhcjogdGhpcy5wYXJzZUNhbGVuZGFyWWVhcihldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMub25ZZWFySW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0WWVhcih7XG4gICAgICAgIGxvY2FsaXplZFllYXI6IHRoaXMucGFyc2VDYWxlbmRhclllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgY29tbWl0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnByZXZNb250aENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soZXZlbnQsIHRoaXMucHJldk1vbnRoRGF0ZSk7XG4gICAgfTtcbiAgICB0aGlzLnByZXZNb250aEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc0FjdGl2YXRpb25LZXkoZXZlbnQua2V5KSkge1xuICAgICAgICB0aGlzLnByZXZNb250aENsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubmV4dE1vbnRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhldmVudCwgdGhpcy5uZXh0TW9udGhEYXRlKTtcbiAgICB9O1xuICAgIHRoaXMubmV4dE1vbnRoS2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIHRoaXMubmV4dE1vbnRoQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgLypcbiAgICAgKiBVcGRhdGUgYWN0aXZlIG1vbnRoIG9uIGNsaWNrcyBvZiBsZWZ0L3JpZ2h0IGFycm93c1xuICAgICAqL1xuICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayA9IChldmVudCwgZGF0ZSkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdC5lbWl0KGRhdGUpO1xuICAgIH07XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uZXh0TW9udGhEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJldk1vbnRoRGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLnBhcmVudERhdGVQaWNrZXJFbCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSh0aGlzLmVsLCBcImNhbGNpdGUtZGF0ZS1waWNrZXJcIik7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5zZXROZXh0UHJldk1vbnRoRGF0ZXMoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmhlYWRlciB9LCB0aGlzLnJlbmRlckNvbnRlbnQoKSk7XG4gIH1cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzLCBsb2NhbGVEYXRhLCBhY3RpdmVEYXRlIH0gPSB0aGlzO1xuICAgIGlmICghYWN0aXZlRGF0ZSB8fCAhbG9jYWxlRGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudERhdGVQaWNrZXJFbCkge1xuICAgICAgY29uc3QgeyBudW1iZXJpbmdTeXN0ZW0sIGxhbmc6IGxvY2FsZSB9ID0gdGhpcy5wYXJlbnREYXRlUGlja2VyRWw7XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICAgICAgICAuLi4obnVtYmVyaW5nU3lzdGVtICYmIHsgbnVtYmVyaW5nU3lzdGVtIH0pLFxuICAgICAgICAuLi4obG9jYWxlICYmIHsgbG9jYWxlIH0pXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVNb250aCA9IGFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB7IG1vbnRocywgdW5pdE9yZGVyIH0gPSBsb2NhbGVEYXRhO1xuICAgIGNvbnN0IGxvY2FsaXplZE1vbnRoID0gKG1vbnRocy53aWRlIHx8IG1vbnRocy5uYXJyb3cgfHwgbW9udGhzLmFiYnJldmlhdGVkKVthY3RpdmVNb250aF07XG4gICAgY29uc3QgbG9jYWxpemVkWWVhciA9IHRoaXMuZm9ybWF0Q2FsZW5kYXJZZWFyKGFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgY29uc3QgaWNvblNjYWxlID0gdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiO1xuICAgIGNvbnN0IG9yZGVyID0gZ2V0T3JkZXIodW5pdE9yZGVyKTtcbiAgICBjb25zdCByZXZlcnNlID0gb3JkZXIuaW5kZXhPZihcInlcIikgPCBvcmRlci5pbmRleE9mKFwibVwiKTtcbiAgICBjb25zdCBzdWZmaXggPSBsb2NhbGVEYXRhLnllYXI/LnN1ZmZpeDtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGgoXCJhXCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IGAke3RoaXMucHJldk1vbnRoRGF0ZS5nZXRNb250aCgpID09PSBhY3RpdmVNb250aH1gLCBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMucHJldk1vbnRoLCBjbGFzczogQ1NTLmNoZXZyb24sIGhyZWY6IFwiI1wiLCBvbkNsaWNrOiB0aGlzLnByZXZNb250aENsaWNrLCBvbktleURvd246IHRoaXMucHJldk1vbnRoS2V5ZG93biwgcm9sZTogXCJidXR0b25cIiwgdGFiaW5kZXg6IHRoaXMucHJldk1vbnRoRGF0ZS5nZXRNb250aCgpID09PSBhY3RpdmVNb250aCA/IC0xIDogMCB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgXCJmbGlwLXJ0bFwiOiB0cnVlLCBpY29uOiBJQ09OLmNoZXZyb25MZWZ0LCBzY2FsZTogaWNvblNjYWxlIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IHRleHQ6IHRydWUsIFtDU1MudGV4dFJldmVyc2VdOiByZXZlcnNlIH0gfSwgaChIZWFkaW5nLCB7IGNsYXNzOiBDU1MubW9udGgsIGxldmVsOiB0aGlzLmhlYWRpbmdMZXZlbCB9LCBsb2NhbGl6ZWRNb250aCksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy55ZWFyV3JhcCB9LCBoKFwiaW5wdXRcIiwgeyBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMueWVhciwgY2xhc3M6IHtcbiAgICAgICAgeWVhcjogdHJ1ZSxcbiAgICAgICAgW0NTUy55ZWFyU3VmZml4XTogISFzdWZmaXhcbiAgICAgIH0sIGlucHV0bW9kZTogXCJudW1lcmljXCIsIG1heGxlbmd0aDogXCI0XCIsIG1pbmxlbmd0aDogXCIxXCIsIG9uQ2hhbmdlOiB0aGlzLm9uWWVhckNoYW5nZSwgb25JbnB1dDogdGhpcy5vblllYXJJbnB1dCwgb25LZXlEb3duOiB0aGlzLm9uWWVhcktleSwgcGF0dGVybjogXCJcXFxcZCpcIiwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBsb2NhbGl6ZWRZZWFyLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMueWVhcklucHV0ID0gZWwpIH0pLCBzdWZmaXggJiYgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnN1ZmZpeCB9LCBzdWZmaXgpKSksIGgoXCJhXCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IGAke3RoaXMubmV4dE1vbnRoRGF0ZS5nZXRNb250aCgpID09PSBhY3RpdmVNb250aH1gLCBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMubmV4dE1vbnRoLCBjbGFzczogQ1NTLmNoZXZyb24sIGhyZWY6IFwiI1wiLCBvbkNsaWNrOiB0aGlzLm5leHRNb250aENsaWNrLCBvbktleURvd246IHRoaXMubmV4dE1vbnRoS2V5ZG93biwgcm9sZTogXCJidXR0b25cIiwgdGFiaW5kZXg6IHRoaXMubmV4dE1vbnRoRGF0ZS5nZXRNb250aCgpID09PSBhY3RpdmVNb250aCA/IC0xIDogMCB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgXCJmbGlwLXJ0bFwiOiB0cnVlLCBpY29uOiBJQ09OLmNoZXZyb25SaWdodCwgc2NhbGU6IGljb25TY2FsZSB9KSkpKTtcbiAgfVxuICBzZXROZXh0UHJldk1vbnRoRGF0ZXMoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZURhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZXh0TW9udGhEYXRlID0gZGF0ZUZyb21SYW5nZShuZXh0TW9udGgodGhpcy5hY3RpdmVEYXRlKSwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICB0aGlzLnByZXZNb250aERhdGUgPSBkYXRlRnJvbVJhbmdlKHByZXZNb250aCh0aGlzLmFjdGl2ZURhdGUpLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICB9XG4gIGZvcm1hdENhbGVuZGFyWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuIG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShgJHtmb3JtYXRDYWxlbmRhclllYXIoeWVhciwgdGhpcy5sb2NhbGVEYXRhKX1gKTtcbiAgfVxuICBwYXJzZUNhbGVuZGFyWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuIG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShgJHtwYXJzZUNhbGVuZGFyWWVhcihOdW1iZXIobnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUoeWVhcikpLCB0aGlzLmxvY2FsZURhdGEpfWApO1xuICB9XG4gIGdldEluUmFuZ2VEYXRlKHsgbG9jYWxpemVkWWVhciwgb2Zmc2V0ID0gMCB9KSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgYWN0aXZlRGF0ZSB9ID0gdGhpcztcbiAgICBjb25zdCBwYXJzZWRZZWFyID0gTnVtYmVyKG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKGxvY2FsaXplZFllYXIpKTtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJzZWRZZWFyLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIGNvbnN0IHllYXIgPSBpc05hTihwYXJzZWRZZWFyKSA/IGZhbHNlIDogcGFyc2VkWWVhciArIG9mZnNldDtcbiAgICBjb25zdCBpblJhbmdlID0geWVhciAmJiAoIW1pbiB8fCBtaW4uZ2V0RnVsbFllYXIoKSA8PSB5ZWFyKSAmJiAoIW1heCB8fCBtYXguZ2V0RnVsbFllYXIoKSA+PSB5ZWFyKTtcbiAgICAvLyBpZiB5b3UndmUgc3VwcGxpZWQgYSB5ZWFyIGFuZCBpdCdzIGluIHJhbmdlXG4gICAgaWYgKHllYXIgJiYgaW5SYW5nZSAmJiBsZW5ndGggPT09IGxvY2FsaXplZFllYXIubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKGFjdGl2ZURhdGUpO1xuICAgICAgbmV4dERhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICByZXR1cm4gZGF0ZUZyb21SYW5nZShuZXh0RGF0ZSwgbWluLCBtYXgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUGFyc2UgbG9jYWxpemVkIHllYXIgc3RyaW5nIGZyb20gaW5wdXQsXG4gICAqIHNldCB0byBhY3RpdmUgaWYgaW4gcmFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHJvb3QwXG4gICAqIEBwYXJhbSByb290MC5sb2NhbGl6ZWRZZWFyXG4gICAqIEBwYXJhbSByb290MC5jb21taXRcbiAgICogQHBhcmFtIHJvb3QwLm9mZnNldFxuICAgKi9cbiAgc2V0WWVhcih7IGxvY2FsaXplZFllYXIsIGNvbW1pdCA9IHRydWUsIG9mZnNldCA9IDAgfSkge1xuICAgIGNvbnN0IHsgeWVhcklucHV0LCBhY3RpdmVEYXRlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGluUmFuZ2VEYXRlID0gdGhpcy5nZXRJblJhbmdlRGF0ZSh7IGxvY2FsaXplZFllYXIsIG9mZnNldCB9KTtcbiAgICAvLyBpZiB5b3UndmUgc3VwcGxpZWQgYSB5ZWFyIGFuZCBpdCdzIGluIHJhbmdlLCB1cGRhdGUgYWN0aXZlIGRhdGVcbiAgICBpZiAoaW5SYW5nZURhdGUpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdC5lbWl0KGluUmFuZ2VEYXRlKTtcbiAgICB9XG4gICAgaWYgKGNvbW1pdCkge1xuICAgICAgeWVhcklucHV0LnZhbHVlID0gdGhpcy5mb3JtYXRDYWxlbmRhclllYXIoKGluUmFuZ2VEYXRlIHx8IGFjdGl2ZURhdGUpLmdldEZ1bGxZZWFyKCkpO1xuICAgIH1cbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtaW5cIjogW1wic2V0TmV4dFByZXZNb250aERhdGVzXCJdLFxuICAgIFwibWF4XCI6IFtcInNldE5leHRQcmV2TW9udGhEYXRlc1wiXSxcbiAgICBcImFjdGl2ZURhdGVcIjogW1wic2V0TmV4dFByZXZNb250aERhdGVzXCJdXG4gIH07IH1cbn07XG5EYXRlUGlja2VyTW9udGhIZWFkZXIuc3R5bGUgPSBkYXRlUGlja2VyTW9udGhIZWFkZXJDc3M7XG5cbmV4cG9ydCB7IERhdGVQaWNrZXIgYXMgY2FsY2l0ZV9kYXRlX3BpY2tlciwgRGF0ZVBpY2tlckRheSBhcyBjYWxjaXRlX2RhdGVfcGlja2VyX2RheSwgRGF0ZVBpY2tlck1vbnRoIGFzIGNhbGNpdGVfZGF0ZV9waWNrZXJfbW9udGgsIERhdGVQaWNrZXJNb250aEhlYWRlciBhcyBjYWxjaXRlX2RhdGVfcGlja2VyX21vbnRoX2hlYWRlciB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0VXNlckFnZW50U3RyaW5nIH0gZnJvbSAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcblxuLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VXNlckFnZW50U3RyaW5nKCkpO1xuY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQgPSBpc0ZpcmVmb3hcbiAgPyBuZXcgV2Vha01hcCgpXG4gIDogbnVsbDtcbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChpbnRlcmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGludGVyYWN0aXZlRWxlbWVudDtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cbmZ1bmN0aW9uIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgZGVsZXRlIGNvbXBvbmVudC5lbC5jbGljazsgLy8gZmFsbGJhY2sgb24gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrXG4gIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IGhlbHBzIGRpc2FibGUgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudC5kaXNhYmxlZCB8fCAhaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5lbC5wYXJlbnRFbGVtZW50IHx8IGNvbXBvbmVudC5lbDsgLyogYXNzdW1lIGVsZW1lbnQgaXMgaG9zdCBpZiBpdCBoYXMgbm8gcGFyZW50IHdoZW4gY29ubmVjdGVkICovXG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LnNldChjb21wb25lbnQuZWwsIHBhcmVudCk7XG4gIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHJlc3RvcmVzIGludGVyYWN0aXZpdHkgdG8gZGlzYWJsZWQgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhbHdheXMgcmVtb3ZlIG9uIGRpc2Nvbm5lY3QgYXMgcmVuZGVyIG9yIGNvbm5lY3Qgd2lsbCByZXN0b3JlIGl0XG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdEludGVyYWN0aXZlIGFzIGMsIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSBhcyBkLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==