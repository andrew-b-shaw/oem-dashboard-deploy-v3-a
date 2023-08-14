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
/* harmony import */ var _utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-8a806067.js */ "./node_modules/@esri/calcite-components/dist/esm/utils-8a806067.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Heading-ce737456.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
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
          const startDiff = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, start);
          const endDiff = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, end);
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
      const isoDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(date);
      if (!this.range && isoDate === (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.valueAsDate)) {
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
            const startDiff = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, start);
            const endDiff = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, end);
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
      this.minAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(min);
    }
  }
  onMaxChanged(max) {
    if (max) {
      this.maxAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(max);
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    if (Array.isArray(this.value)) {
      this.valueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.value);
    }
    else if (this.value) {
      this.valueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.value);
    }
    if (this.min) {
      this.minAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.min);
    }
    if (this.max) {
      this.maxAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.max);
    }
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await this.loadLocaleData();
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  render() {
    const date = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.range && Array.isArray(this.valueAsDate) ? this.valueAsDate[0] : this.valueAsDate, this.minAsDate, this.maxAsDate);
    let activeDate = this.getActiveDate(date, this.minAsDate, this.maxAsDate);
    const endDate = this.range && Array.isArray(this.valueAsDate)
      ? (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.valueAsDate[1], this.minAsDate, this.maxAsDate)
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  valueHandler(value) {
    if (Array.isArray(value)) {
      this.valueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.g)(value);
    }
    else if (value) {
      this.valueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(value);
    }
  }
  async loadLocaleData() {
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
    this.localeData = await (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.effectiveLocale);
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
    const newEndDate = date ? (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.s)(date) : date;
    this.value = [(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(startDate), (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(date)];
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
    this.value = [(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(date), (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(endDate)];
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
    return (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.activeDate, min, max) || value || (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(new Date(), min, max);
  }
  getActiveEndDate(value, min, max) {
    return ((0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.activeEndDate, min, max) || value || (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(new Date(), min, max));
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
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_7__.i)(event.key)) {
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
    this.parentDatePickerEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.el, "calcite-date-picker");
  }
  render() {
    const dayId = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.value).replaceAll("-", "");
    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;
      _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
        useGrouping: false,
        ...(numberingSystem && { numberingSystem }),
        ...(locale && { locale })
      };
    }
    const formattedDay = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(String(this.day));
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_5__.b)(this.el);
    const dayLabel = this.dateTimeFormat.format(this.value);
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-disabled": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_5__.t)(this.disabled), "aria-label": dayLabel, "aria-selected": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_5__.t)(this.active), id: dayId, onClick: this.onClick, onKeyDown: this.keyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": "true", class: { "day-v-wrapper": true, [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_8__.C.rtl]: dir === "rtl" } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "day-wrapper" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "day" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "text" }, formattedDay))))));
  }
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.isTabbable);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
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
        const active = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.activeDate);
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
    this.calciteInternalDatePickerActiveDateChange.emit((0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(nextDate, this.min, this.max));
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
    this.calciteInternalDatePickerActiveDateChange.emit((0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(nextDate, this.min, this.max));
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
    return !!((0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.selectedDate) ||
      (this.startDate && (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.startDate)) ||
      (this.endDate && (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.endDate)));
  }
  /**
   * Determine if the date is the start of the date range
   *
   * @param date
   */
  isStartOfRange(date) {
    return !!(this.startDate &&
      !(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.endDate) &&
      (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, date) &&
      !this.isEndOfRange(date));
  }
  isEndOfRange(date) {
    return !!((this.endDate && !(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.endDate) && (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.endDate, date)) ||
      (!this.endDate &&
        this.hoverRange &&
        (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.hoverRange.end) &&
        (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.hoverRange.end)));
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
      (!this.endDate && this.hoverRange && (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.hoverRange?.end, this.startDate));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "day", key: date.toDateString(), role: "gridcell" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker-day", { active: active, class: {
        "hover--inside-range": this.startDate && isHoverInRange,
        "hover--outside-range": this.startDate && !isHoverInRange,
        "focused--start": isFocusedOnStart,
        "focused--end": !isFocusedOnStart
      }, currentMonth: currentMonth, dateTimeFormat: this.dateTimeFormat, day: day, disabled: !(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.i)(date, this.min, this.max), endOfRange: this.isEndOfRange(date), highlighted: this.betweenSelectedRange(date), onCalciteDaySelect: this.daySelect, onCalciteInternalDayHover: this.dayHover, range: !!this.startDate && !!this.endDate && !(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.endDate), rangeEdge: dayInWeek === 0 ? "start" : dayInWeek === 6 ? "end" : undefined, rangeHover: this.isRangeHover(date), scale: this.scale, selected: this.isSelected(date), startOfRange: this.isStartOfRange(date), value: date,
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
      ((!isStart && date > this.startDate && (date < end || (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, end))) ||
        (isStart && date < this.endDate && (date > start || (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, start))));
    const cond2 = !insideRange &&
      ((!isStart && date >= this.endDate && (date < end || (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, end))) ||
        (isStart &&
          ((this.startDate && date < this.startDate) ||
            (this.endDate && (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.startDate))) &&
          ((start && date > start) || (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, start))));
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
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_7__.i)(event.key)) {
        this.prevMonthClick(event);
      }
    };
    this.nextMonthClick = (event) => {
      this.handleArrowClick(event, this.nextMonthDate);
    };
    this.nextMonthKeydown = (event) => {
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_7__.i)(event.key)) {
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
    this.parentDatePickerEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.el, "calcite-date-picker");
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
    const order = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.k)(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const suffix = localeData.year?.suffix;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-disabled": `${this.prevMonthDate.getMonth() === activeMonth}`, "aria-label": messages.prevMonth, class: CSS.chevron, href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { "flip-rtl": true, icon: ICON.chevronLeft, scale: iconScale })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { text: true, [CSS.textReverse]: reverse } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_9__.H, { class: CSS.month, level: this.headingLevel }, localizedMonth), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.yearWrap }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-label": messages.year, class: {
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
    this.nextMonthDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.activeDate), this.min, this.max);
    this.prevMonthDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.activeDate), this.min, this.max);
  }
  formatCalendarYear(year) {
    return _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.l)(year, this.localeData)}`);
  }
  parseCalendarYear(year) {
    return _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.m)(Number(_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.delocalize(year)), this.localeData)}`);
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
      return (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)(nextDate, min, max);
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/utils-8a806067.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/utils-8a806067.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ dateFromLocalizedString),
/* harmony export */   "b": () => (/* binding */ dateToISO),
/* harmony export */   "c": () => (/* binding */ dateFromISO),
/* harmony export */   "d": () => (/* binding */ datePartsFromLocalizedString),
/* harmony export */   "e": () => (/* binding */ getLocaleData),
/* harmony export */   "f": () => (/* binding */ dateFromRange),
/* harmony export */   "g": () => (/* binding */ getValueAsDateRange),
/* harmony export */   "h": () => (/* binding */ getDaysDiff),
/* harmony export */   "i": () => (/* binding */ inRange),
/* harmony export */   "j": () => (/* binding */ sameDate),
/* harmony export */   "k": () => (/* binding */ getOrder),
/* harmony export */   "l": () => (/* binding */ formatCalendarYear),
/* harmony export */   "m": () => (/* binding */ parseCalendarYear),
/* harmony export */   "n": () => (/* binding */ nextMonth),
/* harmony export */   "p": () => (/* binding */ prevMonth),
/* harmony export */   "s": () => (/* binding */ setEndOfDay)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



/**
 * Check if date is within a min and max
 *
 * @param date
 * @param min
 * @param max
 */
function inRange(date, min, max) {
  if (!date) {
    return;
  }
  const time = date.getTime();
  const afterMin = !(min instanceof Date) || time >= min.getTime();
  const beforeMax = !(max instanceof Date) || time <= max.getTime();
  return afterMin && beforeMax;
}
/**
 * Ensures date is within range,
 * returns min or max if out of bounds
 *
 * @param date
 * @param min
 * @param max
 */
function dateFromRange(date, min, max) {
  if (!(date instanceof Date)) {
    return null;
  }
  const time = date.getTime();
  const beforeMin = min instanceof Date && time < min.getTime();
  const afterMax = max instanceof Date && time > max.getTime();
  if (beforeMin) {
    return min;
  }
  if (afterMax) {
    return max;
  }
  return date;
}
/**
 * Parse an iso8601 string (YYYY-mm-dd) into a valid date.
 * TODO: handle time when time of day UI is added
 *
 * @param iso8601
 * @param isEndDate
 */
function dateFromISO(iso8601, isEndDate = false) {
  if (iso8601 instanceof Date) {
    return iso8601;
  }
  if (!iso8601 || typeof iso8601 !== "string") {
    return null;
  }
  const d = iso8601.split(/[: T-]/).map(parseFloat);
  const date = new Date(d[0], (d[1] || 1) - 1, d[2] || 1);
  date.setFullYear(d[0]);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid ISO 8601 date: "${iso8601}"`);
  }
  if (isEndDate) {
    return setEndOfDay(date);
  }
  return date;
}
/**
 * Parse a localized date string into a valid Date.
 * return false if date is invalid, or out of range
 *
 * @param value
 * @param localeData
 */
function dateFromLocalizedString(value, localeData) {
  if (!localeData) {
    return null;
  }
  const { separator } = localeData;
  const parts = parseDateString(value, localeData);
  const { day, month } = parts;
  const year = parseCalendarYear(parts.year, localeData);
  const date = new Date(year, month, day);
  date.setFullYear(year);
  const validDay = day > 0;
  const validMonth = month > -1;
  const validDate = !isNaN(date.getTime());
  const validLength = value.split(separator).filter((c) => c).length > 2;
  const validYear = year.toString().length > 0;
  if (validDay && validMonth && validDate && validLength && validYear) {
    return date;
  }
  return null;
}
function parseCalendarYear(year, localeData) {
  return processCalendarYear(year, localeData, "read");
}
function formatCalendarYear(year, localeData) {
  return processCalendarYear(year, localeData, "write");
}
function processCalendarYear(year, localeData, mode) {
  if (localeData["default-calendar"] !== "buddhist") {
    return year;
  }
  const BUDDHIST_CALENDAR_YEAR_OFFSET = 543;
  const yearOffset = BUDDHIST_CALENDAR_YEAR_OFFSET * (mode === "read" ? -1 : 1);
  return year + yearOffset;
}
/**
 * Retrieve day, month, and year strings from a localized string
 *
 * @param string
 * @param localeData
 */
function datePartsFromLocalizedString(string, localeData) {
  const { separator, unitOrder } = localeData;
  const order = getOrder(unitOrder);
  const values = string.split(separator).map((part) => _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__.n.delocalize(part));
  const day = values[order.indexOf("d")];
  const month = values[order.indexOf("m")];
  const year = values[order.indexOf("y")];
  return { day, month, year };
}
/**
 * Return first portion of ISO string (YYYY-mm-dd)
 *
 * @param date
 */
function dateToISO(date) {
  if (date instanceof Date) {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  }
  return "";
}
/**
 * Check if two dates are the same day, month, year
 *
 * @param d1
 * @param d2
 */
function sameDate(d1, d2) {
  return (d1 instanceof Date &&
    d2 instanceof Date &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear());
}
/**
 * Get a date one month in the past
 *
 * @param date
 */
function prevMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month - 1);
  // date doesn't exist in new month, use last day
  if (month === nextDate.getMonth()) {
    return new Date(date.getFullYear(), month, 0);
  }
  return nextDate;
}
/**
 * Get a date one month in the future
 *
 * @param date
 */
function nextMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month + 1);
  // date doesn't exist in new month, use last day
  if ((month + 2) % 7 === nextDate.getMonth() % 7) {
    return new Date(date.getFullYear(), month + 2, 0);
  }
  return nextDate;
}
/**
 * Parse numeric units for day, month, and year from a localized string
 * month starts at 0 (can pass to date constructor)
 * can return values as number or string
 *
 * @param string
 * @param localeData
 */
function parseDateString(string, localeData) {
  const { day, month, year } = datePartsFromLocalizedString(string, localeData);
  return {
    day: parseInt(day),
    month: parseInt(month) - 1,
    year: parseInt(year)
  };
}
/**
 * Based on the unitOrder string, find order of month, day, and year for locale
 *
 * @param unitOrder
 */
function getOrder(unitOrder) {
  const signifiers = ["d", "m", "y"];
  const order = unitOrder.toLowerCase();
  return signifiers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
/**
 * Get number of days between two dates
 *
 * @param date1
 * @param date2
 */
function getDaysDiff(date1, date2) {
  const ts1 = date1.getTime();
  const ts2 = date2.getTime();
  return (ts1 - ts2) / (1000 * 3600 * 24);
}
/**
 * Set time of the day to the end.
 *
 * @param {Date} date Date.
 * @returns {Date} Date with time set to end of day .
 */
function setEndOfDay(date) {
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * CLDR cache.
 * Exported for testing purposes.
 *
 * @private
 */
const translationCache = {};
/**
 * CLDR request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
/**
 * Fetch calendar data for a given locale from list of supported languages
 *
 * @param lang
 * @public
 */
async function getLocaleData(lang) {
  const locale = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang);
  if (translationCache[locale]) {
    return translationCache[locale];
  }
  if (!requestCache[locale]) {
    requestCache[locale] = fetch((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/date-picker/nls/${locale}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`Translations for "${locale}" not found or invalid, falling back to english`);
      return getLocaleData("en");
    });
  }
  const data = await requestCache[locale];
  translationCache[locale] = data;
  return data;
}
/**
 *  Maps value to valueAsDate
 *
 * @param value
 */
function getValueAsDateRange(value) {
  return value.map((v, index) => dateFromISO(v, index === 1));
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjY3Njc2NGI2MTBmZWFkNzQzYzlmOGU2NWI5NzgxOGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMscURBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0IsUUFBUSxNQUFNLEdBQUcsUUFBUTtBQUNwRTtBQUNBOztBQUUwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRIO0FBQzhLO0FBQ3RMO0FBQ3VCO0FBQ2hCO0FBQ1I7QUFDUztBQUNuRTtBQUNFO0FBQ047QUFDcEI7QUFDTDtBQUNHOztBQUUvQjtBQUNBLHFDQUFxQzs7QUFFckMscUNBQXFDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6STNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDTzs7QUFFL0Q7QUFDQTtBQUNBLGlCQUFpQixVQUFVLEdBQUcsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQscURBQVksYUFBYSxVQUFVLGdCQUFnQixLQUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RmxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDbUM7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQztBQUNBLHVEQUF1RCw2REFBZ0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscURBQVksNkJBQTZCLE9BQU87QUFDakY7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnViIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL0hlYWRpbmctY2U3Mzc0NTYuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vYnJvd3Nlci05OWJjNjJjZi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWRhdGUtcGlja2VyXzQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtODA1OGUzMDAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdDluLWZhYzEzMzk0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3V0aWxzLThhODA2MDY3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5cbmZ1bmN0aW9uIGNvbnN0cmFpbkhlYWRpbmdMZXZlbChsZXZlbCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5jZWlsKGxldmVsKSwgMSksIDYpO1xufVxuY29uc3QgSGVhZGluZyA9IChwcm9wcywgY2hpbGRyZW4pID0+IHtcbiAgY29uc3QgSGVhZGluZ1RhZyA9IHByb3BzLmxldmVsID8gYGgke3Byb3BzLmxldmVsfWAgOiBcImRpdlwiO1xuICBkZWxldGUgcHJvcHMubGV2ZWw7XG4gIHJldHVybiBoKEhlYWRpbmdUYWcsIHsgLi4ucHJvcHMgfSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IHsgSGVhZGluZyBhcyBILCBjb25zdHJhaW5IZWFkaW5nTGV2ZWwgYXMgYyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbmV4cG9ydCB7IGdldFVzZXJBZ2VudERhdGEgYXMgYSwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50LCBGIGFzIEZyYWdtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBoIGFzIGdldERheXNEaWZmLCBiIGFzIGRhdGVUb0lTTywgYyBhcyBkYXRlRnJvbUlTTywgZyBhcyBnZXRWYWx1ZUFzRGF0ZVJhbmdlLCBmIGFzIGRhdGVGcm9tUmFuZ2UsIGUgYXMgZ2V0TG9jYWxlRGF0YSwgcyBhcyBzZXRFbmRPZkRheSwgaiBhcyBzYW1lRGF0ZSwgaSBhcyBpblJhbmdlLCBrIGFzIGdldE9yZGVyLCBuIGFzIG5leHRNb250aCwgcCBhcyBwcmV2TW9udGgsIGwgYXMgZm9ybWF0Q2FsZW5kYXJZZWFyLCBtIGFzIHBhcnNlQ2FsZW5kYXJZZWFyIH0gZnJvbSAnLi91dGlscy04YTgwNjA2Ny5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudExvYWRlZCwgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQsIG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBiIGFzIGdldERhdGVUaW1lRm9ybWF0IH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSwgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24sIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCB7IEMgYXMgQ1NTX1VUSUxJVFkgfSBmcm9tICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgeyBIIGFzIEhlYWRpbmcgfSBmcm9tICcuL0hlYWRpbmctY2U3Mzc0NTYuanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5cbmNvbnN0IEhFQURJTkdfTEVWRUwgPSAyO1xuY29uc3QgREFURV9QSUNLRVJfRk9STUFUX09QVElPTlMgPSB7IGRhdGVTdHlsZTogXCJmdWxsXCIgfTtcblxuY29uc3QgZGF0ZVBpY2tlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6dmlzaWJsZTtib3JkZXItcmFkaXVzOjBweDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7dmVydGljYWwtYWxpZ246dG9wfTpob3N0KFtzY2FsZT1zXSl7bWF4LWlubGluZS1zaXplOjIxNnB4fTpob3N0KFtzY2FsZT1tXSl7bWF4LWlubGluZS1zaXplOjI4NnB4fTpob3N0KFtzY2FsZT1sXSl7bWF4LWlubGluZS1zaXplOjM5OHB4fVwiO1xuXG5jb25zdCBEYXRlUGlja2VyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRGF0ZVBpY2tlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2VcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5tb250aEhlYWRlclNlbGVjdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVSYW5nZSA9PT0gXCJlbmRcIikge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUgPSBkYXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5tb250aEFjdGl2ZURhdGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShldmVudC5kZXRhaWwpO1xuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlID0gZGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW9udGhIb3ZlckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB2YWx1ZUFzRGF0ZSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHN0YXJ0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZUFzRGF0ZSkgJiYgdmFsdWVBc0RhdGVbMF07XG4gICAgICBjb25zdCBlbmQgPSBBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKSAmJiB2YWx1ZUFzRGF0ZVsxXTtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShldmVudC5kZXRhaWwpO1xuICAgICAgdGhpcy5ob3ZlclJhbmdlID0ge1xuICAgICAgICBmb2N1c2VkOiB0aGlzLmFjdGl2ZVJhbmdlIHx8IFwic3RhcnRcIixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhpcy5wcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZCkge1xuICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnREaWZmID0gZ2V0RGF5c0RpZmYoZGF0ZSwgc3RhcnQpO1xuICAgICAgICAgIGNvbnN0IGVuZERpZmYgPSBnZXREYXlzRGlmZihkYXRlLCBlbmQpO1xuICAgICAgICAgIGlmIChlbmREaWZmID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZm9jdXNlZCA9IFwiZW5kXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RGlmZiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5zdGFydCA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZm9jdXNlZCA9IFwic3RhcnRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoc3RhcnREaWZmID4gZW5kRGlmZikge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLnN0YXJ0ID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJzdGFydFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5lbmQgPSBkYXRlO1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmZvY3VzZWQgPSBcImVuZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgIGlmIChkYXRlIDwgc3RhcnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZvY3VzZWQ6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICBzdGFydDogZGF0ZSxcbiAgICAgICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJlbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgIGlmIChkYXRlIDwgc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHtcbiAgICAgICAgICAgICAgZm9jdXNlZDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICBzdGFydDogZGF0ZSxcbiAgICAgICAgICAgICAgZW5kOiBzdGFydFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZW5kID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJlbmRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMubW9udGhNb3VzZU91dENoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmhvdmVyUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzZXQgYWN0aXZlIGRhdGUgYW5kIGNsb3NlXG4gICAgICovXG4gICAgdGhpcy5yZXNldCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWVBc0RhdGUgfSA9IHRoaXM7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpICYmXG4gICAgICAgIHZhbHVlQXNEYXRlICYmXG4gICAgICAgIHZhbHVlQXNEYXRlPy5nZXRUaW1lKCkgIT09IHRoaXMuYWN0aXZlRGF0ZT8uZ2V0VGltZSgpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKHZhbHVlQXNEYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKSkge1xuICAgICAgICBpZiAodmFsdWVBc0RhdGVbMF0gJiZcbiAgICAgICAgICB2YWx1ZUFzRGF0ZVswXT8uZ2V0VGltZSgpICE9PVxuICAgICAgICAgICAgKHRoaXMuYWN0aXZlU3RhcnREYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZT8uZ2V0VGltZSgpKSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gbmV3IERhdGUodmFsdWVBc0RhdGVbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZUFzRGF0ZVsxXSAmJlxuICAgICAgICAgIHZhbHVlQXNEYXRlWzFdPy5nZXRUaW1lKCkgIT09XG4gICAgICAgICAgICAodGhpcy5hY3RpdmVTdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMuYWN0aXZlRW5kRGF0ZT8uZ2V0VGltZSgpKSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IG5ldyBEYXRlKHZhbHVlQXNEYXRlWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLm1vbnRoRGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICBjb25zdCBpc29EYXRlID0gZGF0ZVRvSVNPKGRhdGUpO1xuICAgICAgaWYgKCF0aGlzLnJhbmdlICYmIGlzb0RhdGUgPT09IGRhdGVUb0lTTyh0aGlzLnZhbHVlQXNEYXRlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGlzb0RhdGUgfHwgXCJcIjtcbiAgICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IGRhdGUgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZSB8fCBudWxsO1xuICAgICAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5nZXRFbmREYXRlKCk7XG4gICAgICBpZiAoIXN0YXJ0IHx8ICghZW5kICYmIGRhdGUgPCBzdGFydCkpIHtcbiAgICAgICAgaWYgKHN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5zZXRFbmREYXRlKG5ldyBEYXRlKHN0YXJ0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT0gXCJlbmRcIikge1xuICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWVuZCkge1xuICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlID09IFwiZW5kXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGlmZiA9IGdldERheXNEaWZmKGRhdGUsIHN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZERpZmYgPSBnZXREYXlzRGlmZihkYXRlLCBlbmQpO1xuICAgICAgICAgICAgaWYgKGVuZERpZmYgPT09IDAgfHwgc3RhcnREaWZmIDwgMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RGlmZiA9PT0gMCB8fCBlbmREaWZmIDwgMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydERpZmYgPCBlbmREaWZmKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4QXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5wcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmVuZEFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdmVyUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRBc0RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgYWN0aXZlRGF0ZVdhdGNoZXIobmV3QWN0aXZlRGF0ZSkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBuZXdBY3RpdmVEYXRlO1xuICAgIH1cbiAgfVxuICB2YWx1ZUFzRGF0ZVdhdGNoZXIobmV3VmFsdWVBc0RhdGUpIHtcbiAgICBpZiAodGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KG5ld1ZhbHVlQXNEYXRlKSkge1xuICAgICAgY29uc3QgeyBhY3RpdmVTdGFydERhdGUsIGFjdGl2ZUVuZERhdGUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBuZXdBY3RpdmVTdGFydERhdGUgPSBuZXdWYWx1ZUFzRGF0ZVswXTtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUVuZERhdGUgPSBuZXdWYWx1ZUFzRGF0ZVsxXTtcbiAgICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gYWN0aXZlU3RhcnREYXRlICE9PSBuZXdBY3RpdmVTdGFydERhdGUgJiYgbmV3QWN0aXZlU3RhcnREYXRlO1xuICAgICAgdGhpcy5hY3RpdmVFbmREYXRlID0gYWN0aXZlRW5kRGF0ZSAhPT0gbmV3QWN0aXZlRW5kRGF0ZSAmJiBuZXdBY3RpdmVFbmREYXRlO1xuICAgIH1cbiAgICBlbHNlIGlmIChuZXdWYWx1ZUFzRGF0ZSAmJiBuZXdWYWx1ZUFzRGF0ZSAhPT0gdGhpcy5hY3RpdmVEYXRlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXdWYWx1ZUFzRGF0ZTtcbiAgICB9XG4gIH1cbiAgb25NaW5DaGFuZ2VkKG1pbikge1xuICAgIGlmIChtaW4pIHtcbiAgICAgIHRoaXMubWluQXNEYXRlID0gZGF0ZUZyb21JU08obWluKTtcbiAgICB9XG4gIH1cbiAgb25NYXhDaGFuZ2VkKG1heCkge1xuICAgIGlmIChtYXgpIHtcbiAgICAgIHRoaXMubWF4QXNEYXRlID0gZGF0ZUZyb21JU08obWF4KTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZGF0ZUZyb21JU08odGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1pbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1heCk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgdGhpcy5sb2FkTG9jYWxlRGF0YSgpO1xuICAgIHRoaXMub25NaW5DaGFuZ2VkKHRoaXMubWluKTtcbiAgICB0aGlzLm9uTWF4Q2hhbmdlZCh0aGlzLm1heCk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tUmFuZ2UodGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpID8gdGhpcy52YWx1ZUFzRGF0ZVswXSA6IHRoaXMudmFsdWVBc0RhdGUsIHRoaXMubWluQXNEYXRlLCB0aGlzLm1heEFzRGF0ZSk7XG4gICAgbGV0IGFjdGl2ZURhdGUgPSB0aGlzLmdldEFjdGl2ZURhdGUoZGF0ZSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKTtcbiAgICBjb25zdCBlbmREYXRlID0gdGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpXG4gICAgICA/IGRhdGVGcm9tUmFuZ2UodGhpcy52YWx1ZUFzRGF0ZVsxXSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKVxuICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGFjdGl2ZUVuZERhdGUgPSB0aGlzLmdldEFjdGl2ZUVuZERhdGUoZW5kRGF0ZSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKTtcbiAgICBpZiAoKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIgfHxcbiAgICAgICh0aGlzLmhvdmVyUmFuZ2U/LmZvY3VzZWQgPT09IFwiZW5kXCIgJiYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkIHx8IGVuZERhdGUpKSkgJiZcbiAgICAgIGFjdGl2ZUVuZERhdGUpIHtcbiAgICAgIGFjdGl2ZURhdGUgPSBhY3RpdmVFbmREYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlKSB7XG4gICAgICBhY3RpdmVEYXRlID0gdGhpcy5tb3N0UmVjZW50UmFuZ2VWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMucmFuZ2UgJiYgdGhpcy5hY3RpdmVSYW5nZVxuICAgICAgPyB0aGlzLmFjdGl2ZVJhbmdlID09PSBcInN0YXJ0XCJcbiAgICAgICAgPyB0aGlzLm1pbkFzRGF0ZVxuICAgICAgICA6IGRhdGUgfHwgdGhpcy5taW5Bc0RhdGVcbiAgICAgIDogdGhpcy5taW5Bc0RhdGU7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMucmFuZ2UgJiYgdGhpcy5hY3RpdmVSYW5nZVxuICAgICAgPyB0aGlzLmFjdGl2ZVJhbmdlID09PSBcInN0YXJ0XCJcbiAgICAgICAgPyBlbmREYXRlIHx8IHRoaXMubWF4QXNEYXRlXG4gICAgICAgIDogdGhpcy5tYXhBc0RhdGVcbiAgICAgIDogdGhpcy5tYXhBc0RhdGU7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLnJlc2V0LCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIgfSwgdGhpcy5yZW5kZXJDYWxlbmRhcihhY3RpdmVEYXRlLCBtYXhEYXRlLCBtaW5EYXRlLCBkYXRlLCBlbmREYXRlKSkpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZ2V0VmFsdWVBc0RhdGVSYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZGF0ZUZyb21JU08odmFsdWUpO1xuICAgIH1cbiAgfVxuICBhc3luYyBsb2FkTG9jYWxlRGF0YSgpIHtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSBhd2FpdCBnZXRMb2NhbGVEYXRhKHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gZ2V0RGF0ZVRpbWVGb3JtYXQodGhpcy5lZmZlY3RpdmVMb2NhbGUsIERBVEVfUElDS0VSX0ZPUk1BVF9PUFRJT05TKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVyIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyIGFuZCBjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXG4gICAqXG4gICAqIEBwYXJhbSBhY3RpdmVEYXRlXG4gICAqIEBwYXJhbSBtYXhEYXRlXG4gICAqIEBwYXJhbSBtaW5EYXRlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEBwYXJhbSBlbmREYXRlXG4gICAqL1xuICByZW5kZXJDYWxlbmRhcihhY3RpdmVEYXRlLCBtYXhEYXRlLCBtaW5EYXRlLCBkYXRlLCBlbmREYXRlKSB7XG4gICAgcmV0dXJuICh0aGlzLmxvY2FsZURhdGEgJiYgW1xuICAgICAgaChcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyXCIsIHsgYWN0aXZlRGF0ZTogYWN0aXZlRGF0ZSwgaGVhZGluZ0xldmVsOiB0aGlzLmhlYWRpbmdMZXZlbCB8fCBIRUFESU5HX0xFVkVMLCBsb2NhbGVEYXRhOiB0aGlzLmxvY2FsZURhdGEsIG1heDogbWF4RGF0ZSwgbWVzc2FnZXM6IHRoaXMubWVzc2FnZXMsIG1pbjogbWluRGF0ZSwgb25DYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0OiB0aGlzLm1vbnRoSGVhZGVyU2VsZWN0Q2hhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWREYXRlOiB0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiID8gZW5kRGF0ZSA6IGRhdGUgfHwgbmV3IERhdGUoKSB9KSxcbiAgICAgIGgoXCJjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXCIsIHsgYWN0aXZlRGF0ZTogYWN0aXZlRGF0ZSwgZGF0ZVRpbWVGb3JtYXQ6IHRoaXMuZGF0ZVRpbWVGb3JtYXQsIGVuZERhdGU6IHRoaXMucmFuZ2UgPyBlbmREYXRlIDogdW5kZWZpbmVkLCBob3ZlclJhbmdlOiB0aGlzLmhvdmVyUmFuZ2UsIGxvY2FsZURhdGE6IHRoaXMubG9jYWxlRGF0YSwgbWF4OiBtYXhEYXRlLCBtaW46IG1pbkRhdGUsIG9uQ2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2U6IHRoaXMubW9udGhBY3RpdmVEYXRlQ2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJIb3ZlcjogdGhpcy5tb250aEhvdmVyQ2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dDogdGhpcy5tb250aE1vdXNlT3V0Q2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3Q6IHRoaXMubW9udGhEYXRlQ2hhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWREYXRlOiB0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiID8gZW5kRGF0ZSA6IGRhdGUsIHN0YXJ0RGF0ZTogdGhpcy5yYW5nZSA/IGRhdGUgOiB1bmRlZmluZWQgfSlcbiAgICBdKTtcbiAgfVxuICBnZXRFbmREYXRlKCkge1xuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlQXNEYXRlKSAmJiB0aGlzLnZhbHVlQXNEYXRlWzFdKSB8fCB1bmRlZmluZWQ7XG4gIH1cbiAgc2V0RW5kRGF0ZShkYXRlKSB7XG4gICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5nZXRTdGFydERhdGUoKTtcbiAgICBjb25zdCBuZXdFbmREYXRlID0gZGF0ZSA/IHNldEVuZE9mRGF5KGRhdGUpIDogZGF0ZTtcbiAgICB0aGlzLnZhbHVlID0gW2RhdGVUb0lTTyhzdGFydERhdGUpLCBkYXRlVG9JU08oZGF0ZSldO1xuICAgIHRoaXMudmFsdWVBc0RhdGUgPSBbc3RhcnREYXRlLCBkYXRlXTtcbiAgICB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlID0gbmV3RW5kRGF0ZTtcbiAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2UuZW1pdCgpO1xuICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IGRhdGUgfHwgbnVsbDtcbiAgfVxuICBnZXRTdGFydERhdGUoKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgJiYgdGhpcy52YWx1ZUFzRGF0ZVswXTtcbiAgfVxuICBzZXRTdGFydERhdGUoZGF0ZSkge1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLmdldEVuZERhdGUoKTtcbiAgICB0aGlzLnZhbHVlID0gW2RhdGVUb0lTTyhkYXRlKSwgZGF0ZVRvSVNPKGVuZERhdGUpXTtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gW2RhdGUsIGVuZERhdGVdO1xuICAgIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUgPSBkYXRlO1xuICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJSYW5nZUNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBkYXRlIHx8IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbiBhY3RpdmUgZGF0ZSB1c2luZyB0aGUgdmFsdWUsIG9yIGN1cnJlbnQgZGF0ZSBhcyBkZWZhdWx0XG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gbWluXG4gICAqIEBwYXJhbSBtYXhcbiAgICovXG4gIGdldEFjdGl2ZURhdGUodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIGRhdGVGcm9tUmFuZ2UodGhpcy5hY3RpdmVEYXRlLCBtaW4sIG1heCkgfHwgdmFsdWUgfHwgZGF0ZUZyb21SYW5nZShuZXcgRGF0ZSgpLCBtaW4sIG1heCk7XG4gIH1cbiAgZ2V0QWN0aXZlRW5kRGF0ZSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gKGRhdGVGcm9tUmFuZ2UodGhpcy5hY3RpdmVFbmREYXRlLCBtaW4sIG1heCkgfHwgdmFsdWUgfHwgZGF0ZUZyb21SYW5nZShuZXcgRGF0ZSgpLCBtaW4sIG1heCkpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJhY3RpdmVEYXRlXCI6IFtcImFjdGl2ZURhdGVXYXRjaGVyXCJdLFxuICAgIFwidmFsdWVBc0RhdGVcIjogW1widmFsdWVBc0RhdGVXYXRjaGVyXCJdLFxuICAgIFwibWluXCI6IFtcIm9uTWluQ2hhbmdlZFwiXSxcbiAgICBcIm1heFwiOiBbXCJvbk1heENoYW5nZWRcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCIsIFwibG9hZExvY2FsZURhdGFcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUhhbmRsZXJcIl1cbiAgfTsgfVxufTtcbkRhdGVQaWNrZXIuc3R5bGUgPSBkYXRlUGlja2VyQ3NzO1xuXG5jb25zdCBkYXRlUGlja2VyRGF5Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmRheS12LXdyYXBwZXJ7ZmxleDoxIDEgYXV0b30uZGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXJ9LmRheXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czo5OTk5cHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JhY2tncm91bmQ6bm9uZTtib3gtc2hhZG93OjAgMCAwIDJweCB0cmFuc3BhcmVudH0udGV4dHttYXJnaW4tYmxvY2s6MXB4IDBweDttYXJnaW4taW5saW5lLXN0YXJ0OjBweH06aG9zdChbc2NhbGU9c10pIC5kYXktdi13cmFwcGVye3BhZGRpbmctYmxvY2s6MC4xMjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuZGF5LXdyYXBwZXJ7cGFkZGluZzowcHh9Omhvc3QoW3NjYWxlPXNdKSAuZGF5e2Jsb2NrLXNpemU6MjdweDtpbmxpbmUtc2l6ZToyN3B4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPW1dKSAuZGF5LXYtd3JhcHBlcntwYWRkaW5nLWJsb2NrOjAuMjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuZGF5LXdyYXBwZXJ7cGFkZGluZy1pbmxpbmU6MC4yNXJlbX06aG9zdChbc2NhbGU9bV0pIC5kYXl7YmxvY2stc2l6ZTozM3B4O2lubGluZS1zaXplOjMzcHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdChbc2NhbGU9bF0pIC5kYXktdi13cmFwcGVye3BhZGRpbmctYmxvY2s6MC4yNXJlbX06aG9zdChbc2NhbGU9bF0pIC5kYXktd3JhcHBlcntwYWRkaW5nLWlubGluZTowLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmRheXtibG9jay1zaXplOjQzcHg7aW5saW5lLXNpemU6NDNweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9Omhvc3QoW2N1cnJlbnQtbW9udGhdKSAuZGF5e29wYWNpdHk6MX06aG9zdCg6aG92ZXI6bm90KFtkaXNhYmxlZF0pKSAuZGF5LDpob3N0KFthY3RpdmVdOm5vdChbcmFuZ2VdKSkgLmRheXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmZvY3VzKSw6aG9zdChbYWN0aXZlXSl7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fTpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSkpIC5kYXl7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICk7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtzZWxlY3RlZF0pIC5kYXl7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCkgIWltcG9ydGFudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkgIWltcG9ydGFudH06aG9zdChbcmFuZ2VdW3NlbGVjdGVkXSkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpfTpob3N0KFtzdGFydC1vZi1yYW5nZV0pIC5kYXktd3JhcHBlcntib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOjQwJTtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czo0MCV9Omhvc3QoW2VuZC1vZi1yYW5nZV0pIC5kYXktd3JhcHBlcntib3JkZXItc3RhcnQtZW5kLXJhZGl1czo0MCU7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjQwJX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDRweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IC00cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXSkgLmRheXtvcGFjaXR5OjF9Omhvc3QoW2VuZC1vZi1yYW5nZV0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgLTRweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbZW5kLW9mLXJhbmdlXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCA0cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2VuZC1vZi1yYW5nZV0pIC5kYXl7b3BhY2l0eToxfTpob3N0KFtzdGFydC1vZi1yYW5nZV06bm90KDpmb2N1cykpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheSw6aG9zdChbZW5kLW9mLXJhbmdlXTpub3QoOmZvY3VzKSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5e2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdOm5vdCg6Zm9jdXMpKSAuY2FsY2l0ZS0tcnRsIC5kYXksOmhvc3QoW2VuZC1vZi1yYW5nZV06bm90KDpmb2N1cykpIC5jYWxjaXRlLS1ydGwgLmRheXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtzY2FsZT1sXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCA4cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtzY2FsZT1sXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtOHB4IDAgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtlbmQtb2YtcmFuZ2VdW3NjYWxlPWxdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IC04cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2VuZC1vZi1yYW5nZV1bc2NhbGU9bF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgOHB4IDAgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtoaWdobGlnaHRlZF0pIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KX06aG9zdChbaGlnaGxpZ2h0ZWRdKSAuZGF5LXdyYXBwZXIgLmRheXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2hpZ2hsaWdodGVkXTpub3QoW2FjdGl2ZV06Zm9jdXMpKSAuZGF5e2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKSkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pKSAuZGF5e2JvcmRlci1yYWRpdXM6MHB4fTpob3N0KFtzdGFydC1vZi1yYW5nZV1bcmFuZ2UtaG92ZXJdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMikpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMikpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2VuZC1vZi1yYW5nZV1bcmFuZ2UtaG92ZXJdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKTtib3JkZXItcmFkaXVzOjBweDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtlbmQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKTtib3JkZXItcmFkaXVzOjBweDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KDpob3ZlcltlbmQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoOmhvdmVyW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KDpob3ZlcltlbmQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpKTtib3JkZXItcmFkaXVzOjBweDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLXN0YXJ0KSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1zdGFydCkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQpIC5kYXl7Ym9yZGVyLXJhZGl1czo5OTk5cHg7b3BhY2l0eToxO2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1lbmQpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCkpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZCkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tZW5kKSAuZGF5e2JvcmRlci1yYWRpdXM6OTk5OXB4O29wYWNpdHk6MTtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheSw6aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1lbmQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIC5jYWxjaXRlLS1ydGwgLmRheXtib3JkZXItcmFkaXVzOjk5OTlweDtvcGFjaXR5OjE7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLXN0YXJ0LmhvdmVyLS1vdXRzaWRlLXJhbmdlKSAuY2FsY2l0ZS0tcnRsIC5kYXl7Ym9yZGVyLXJhZGl1czo5OTk5cHg7b3BhY2l0eToxO2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdCg6aG92ZXJbc3RhcnQtb2YtcmFuZ2VdLmhvdmVyLS1pbnNpZGUtcmFuZ2UuZm9jdXNlZC0tZW5kKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW2VuZC1vZi1yYW5nZV0uaG92ZXItLWluc2lkZS1yYW5nZS5mb2N1c2VkLS1zdGFydCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bm9uZX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdLmhvdmVyLS1pbnNpZGUtcmFuZ2UuZm9jdXNlZC0tZW5kKSAuZGF5LXdyYXBwZXIsOmhvc3QoW2VuZC1vZi1yYW5nZV0uaG92ZXItLWluc2lkZS1yYW5nZS5mb2N1c2VkLS1zdGFydCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtNHB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9ZW5kXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgNHB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc2NhbGU9c11baGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9ZW5kXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPWVuZF0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1zXVtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1zdGFydF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1zXVtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1zdGFydF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgLTFweCAwcHggMHB4IDBweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3NjYWxlPXNdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1zXVtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDFweCAwcHggMHB4IDBweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3NjYWxlPWxdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1sXVtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDZweCAwcHggMHB4IDBweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmRheS13cmFwcGVyLDpob3N0KFtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1zdGFydF0pIC5kYXktd3JhcHBlcntib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOjQ1JTtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czo0NSV9Omhvc3QoW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgLmRheS13cmFwcGVye2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjQ1JTtib3JkZXItZW5kLWVuZC1yYWRpdXM6NDUlfTpob3N0KFtzY2FsZT1sXVtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9bF1bcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtNnB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7Omhvc3QoOmhvdmVyOm5vdChbZGlzYWJsZWRdKSkgLmRheSw6aG9zdChbYWN0aXZlXTpub3QoW3JhbmdlXSkpIC5kYXl7Ym9yZGVyLXJhZGl1czowcHh9Omhvc3QoW3NlbGVjdGVkXSl7b3V0bGluZToycHggc29saWQgY2FudmFzVGV4dH06aG9zdChbc2VsZWN0ZWRdKSAuZGF5e2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6aGlnaGxpZ2h0fTpob3N0KFtyYW5nZV1bc2VsZWN0ZWRdKSAuZGF5LXdyYXBwZXIsOmhvc3QoW2hpZ2hsaWdodGVkXSkgLmRheS13cmFwcGVyLDpob3N0KFtyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pKSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9Omhvc3QoW3JhbmdlXVtzZWxlY3RlZF1bc3RhcnQtb2YtcmFuZ2VdKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlXVtzZWxlY3RlZF1bZW5kLW9mLXJhbmdlXSkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6Y2FudmFzfX1cIjtcblxuY29uc3QgRGF0ZVBpY2tlckRheSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlRGF5U2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRGF5U2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF5SG92ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERheUhvdmVyXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNpdGVEYXlTZWxlY3QuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgICF0aGlzLmRpc2FibGVkICYmIHRoaXMuY2FsY2l0ZURheVNlbGVjdC5lbWl0KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgdGhpcy5yYW5nZSA9IGZhbHNlO1xuICAgIHRoaXMucmFuZ2VFZGdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRPZlJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5lbmRPZlJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5yYW5nZUhvdmVyID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcG9pbnRlck92ZXJIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF5SG92ZXIuZW1pdCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMucGFyZW50RGF0ZVBpY2tlckVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KHRoaXMuZWwsIFwiY2FsY2l0ZS1kYXRlLXBpY2tlclwiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF5SWQgPSBkYXRlVG9JU08odGhpcy52YWx1ZSkucmVwbGFjZUFsbChcIi1cIiwgXCJcIik7XG4gICAgaWYgKHRoaXMucGFyZW50RGF0ZVBpY2tlckVsKSB7XG4gICAgICBjb25zdCB7IG51bWJlcmluZ1N5c3RlbSwgbGFuZzogbG9jYWxlIH0gPSB0aGlzLnBhcmVudERhdGVQaWNrZXJFbDtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIC4uLihudW1iZXJpbmdTeXN0ZW0gJiYgeyBudW1iZXJpbmdTeXN0ZW0gfSksXG4gICAgICAgIC4uLihsb2NhbGUgJiYgeyBsb2NhbGUgfSlcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZvcm1hdHRlZERheSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShTdHJpbmcodGhpcy5kYXkpKTtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IGRheUxhYmVsID0gdGhpcy5kYXRlVGltZUZvcm1hdC5mb3JtYXQodGhpcy52YWx1ZSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5kaXNhYmxlZCksIFwiYXJpYS1sYWJlbFwiOiBkYXlMYWJlbCwgXCJhcmlhLXNlbGVjdGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5hY3RpdmUpLCBpZDogZGF5SWQsIG9uQ2xpY2s6IHRoaXMub25DbGljaywgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogeyBcImRheS12LXdyYXBwZXJcIjogdHJ1ZSwgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIiB9IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJkYXktd3JhcHBlclwiIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiZGF5XCIgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ0ZXh0XCIgfSwgZm9ybWF0dGVkRGF5KSkpKSkpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMsIHRoaXMuaXNUYWJiYWJsZSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGlzVGFiYmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5EYXRlUGlja2VyRGF5LnN0eWxlID0gZGF0ZVBpY2tlckRheUNzcztcblxuY29uc3QgZGF0ZVBpY2tlck1vbnRoQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9LmNhbGVuZGFye21hcmdpbi1ibG9jay1lbmQ6MC4yNXJlbX0ud2Vlay1oZWFkZXJze2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjI1cmVtfS53ZWVrLWhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtpbmxpbmUtc2l6ZToxNC4yODU3MTQyODU3JX0uZGF5e2Rpc3BsYXk6ZmxleDttaW4taW5saW5lLXNpemU6MHB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7aW5saW5lLXNpemU6MTQuMjg1NzE0Mjg1NyV9Omhvc3QoW3NjYWxlPXNdKSAud2Vlay1oZWFkZXJ7cGFkZGluZy1pbmxpbmU6MHB4O3BhZGRpbmctYmxvY2s6MC41cmVtIDAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgLndlZWstaGVhZGVye3BhZGRpbmctaW5saW5lOjBweDtwYWRkaW5nLWJsb2NrOjAuNzVyZW0gMXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPWxdKSAud2Vlay1oZWFkZXJ7cGFkZGluZy1pbmxpbmU6MHB4O3BhZGRpbmctYmxvY2s6MXJlbSAxLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX0ud2Vlay1kYXlze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6NnB4fS53ZWVrLWRheXM6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fVwiO1xuXG5jb25zdCBEQVlTX1BFUl9XRUVLID0gNztcbmNvbnN0IERBWVNfTUFYSU1VTV9JTkRFWCA9IDY7XG5jb25zdCBEYXRlUGlja2VyTW9udGggPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJIb3ZlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckhvdmVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJBY3RpdmVEYXRlQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlck1vdXNlT3V0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyTW91c2VPdXRcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzUlRMID0gdGhpcy5lbC5kaXIgPT09IFwicnRsXCI7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKC03KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cyhpc1JUTCA/IC0xIDogMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cyg3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKGlzUlRMID8gMSA6IC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBhZ2VVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGRNb250aHMoLTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUGFnZURvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkTW9udGhzKDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hY3RpdmVEYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5zZXREYXRlKG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLCB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSk7XG4gICAgICAgICAgdGhpcy5hZGREYXlzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgICB0aGlzLmFjdGl2ZUZvY3VzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPbmNlIHVzZXIgaXMgbm90IGludGVyYWN0aW5nIHZpYSBrZXlib2FyZCxcbiAgICAgKiBkaXNhYmxlIGF1dG8gZm9jdXNpbmcgb2YgYWN0aXZlIGRhdGVcbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVBY3RpdmVGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlRm9jdXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuZGF5SG92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyTW91c2VPdXQuZW1pdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckhvdmVyLmVtaXQodGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5kYXlTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlclNlbGVjdC5lbWl0KHRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5zdGFydERhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lbmREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG92ZXJSYW5nZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBwb2ludGVyT3V0SGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dC5lbWl0KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gdGhpcy5sb2NhbGVEYXRhLndlZWtTdGFydCAlIDc7XG4gICAgY29uc3QgeyBhYmJyZXZpYXRlZCwgc2hvcnQsIG5hcnJvdyB9ID0gdGhpcy5sb2NhbGVEYXRhLmRheXM7XG4gICAgY29uc3Qgd2Vla0RheXMgPSB0aGlzLnNjYWxlID09PSBcInNcIiA/IG5hcnJvdyB8fCBzaG9ydCB8fCBhYmJyZXZpYXRlZCA6IHNob3J0IHx8IGFiYnJldmlhdGVkIHx8IG5hcnJvdztcbiAgICBjb25zdCBhZGp1c3RlZFdlZWtEYXlzID0gWy4uLndlZWtEYXlzLnNsaWNlKHN0YXJ0T2ZXZWVrLCA3KSwgLi4ud2Vla0RheXMuc2xpY2UoMCwgc3RhcnRPZldlZWspXTtcbiAgICBjb25zdCBjdXJNb25EYXlzID0gdGhpcy5nZXRDdXJyZW50TW9udGhEYXlzKG1vbnRoLCB5ZWFyKTtcbiAgICBjb25zdCBwcmV2TW9uRGF5cyA9IHRoaXMuZ2V0UHJldmlvdXNNb250aERheXMobW9udGgsIHllYXIsIHN0YXJ0T2ZXZWVrKTtcbiAgICBjb25zdCBuZXh0TW9uRGF5cyA9IHRoaXMuZ2V0TmV4dE1vbnRoRGF5cyhtb250aCwgeWVhciwgc3RhcnRPZldlZWspO1xuICAgIGxldCBkYXlJbldlZWsgPSAwO1xuICAgIGNvbnN0IGdldERheUluV2VlayA9ICgpID0+IGRheUluV2VlaysrICUgNztcbiAgICBjb25zdCBkYXlzID0gW1xuICAgICAgLi4ucHJldk1vbkRheXMubWFwKChkYXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGRheSxcbiAgICAgICAgICBkYXlJbldlZWs6IGdldERheUluV2VlaygpLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KVxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICAuLi5jdXJNb25EYXlzLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gc2FtZURhdGUoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgY3VycmVudE1vbnRoOiB0cnVlLFxuICAgICAgICAgIGRheSxcbiAgICAgICAgICBkYXlJbldlZWs6IGdldERheUluV2VlaygpLFxuICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgcmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIC4uLm5leHRNb25EYXlzLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBkYXksXG4gICAgICAgICAgZGF5SW5XZWVrOiBnZXREYXlJbldlZWsoKSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIGRheSlcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgXTtcbiAgICBjb25zdCB3ZWVrcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkgKz0gNykge1xuICAgICAgd2Vla3MucHVzaChkYXlzLnNsaWNlKGksIGkgKyA3KSk7XG4gICAgfVxuICAgIHJldHVybiAoaChIb3N0LCB7IG9uRm9jdXNPdXQ6IHRoaXMuZGlzYWJsZUFjdGl2ZUZvY3VzLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImNhbGVuZGFyXCIsIHJvbGU6IFwiZ3JpZFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ3ZWVrLWhlYWRlcnNcIiwgcm9sZTogXCJyb3dcIiB9LCBhZGp1c3RlZFdlZWtEYXlzLm1hcCgod2Vla2RheSkgPT4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwid2Vlay1oZWFkZXJcIiwgcm9sZTogXCJjb2x1bW5oZWFkZXJcIiB9LCB3ZWVrZGF5KSkpKSwgd2Vla3MubWFwKChkYXlzKSA9PiAoaChcImRpdlwiLCB7IGNsYXNzOiBcIndlZWstZGF5c1wiLCByb2xlOiBcInJvd1wiIH0sIGRheXMubWFwKChkYXkpID0+IHRoaXMucmVuZGVyRGF0ZURheShkYXkpKSkpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogQWRkIG4gbW9udGhzIHRvIHRoZSBjdXJyZW50IG1vbnRoXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwXG4gICAqL1xuICBhZGRNb250aHMoc3RlcCkge1xuICAgIGNvbnN0IG5leHREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBuZXh0RGF0ZS5zZXRNb250aCh0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIHN0ZXApO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2UuZW1pdChkYXRlRnJvbVJhbmdlKG5leHREYXRlLCB0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICB0aGlzLmFjdGl2ZUZvY3VzID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQWRkIG4gZGF5cyB0byB0aGUgY3VycmVudCBkYXRlXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwXG4gICAqL1xuICBhZGREYXlzKHN0ZXAgPSAwKSB7XG4gICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIG5leHREYXRlLnNldERhdGUodGhpcy5hY3RpdmVEYXRlLmdldERhdGUoKSArIHN0ZXApO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2UuZW1pdChkYXRlRnJvbVJhbmdlKG5leHREYXRlLCB0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICB0aGlzLmFjdGl2ZUZvY3VzID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGRhdGVzIGZvciBsYXN0IGRheXMgb2YgdGhlIHByZXZpb3VzIG1vbnRoXG4gICAqXG4gICAqIEBwYXJhbSBtb250aFxuICAgKiBAcGFyYW0geWVhclxuICAgKiBAcGFyYW0gc3RhcnRPZldlZWtcbiAgICovXG4gIGdldFByZXZpb3VzTW9udGhEYXlzKG1vbnRoLCB5ZWFyLCBzdGFydE9mV2Vlaykge1xuICAgIGNvbnN0IGxhc3REYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApO1xuICAgIGNvbnN0IGRhdGUgPSBsYXN0RGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3Qgc3RhcnREYXkgPSBsYXN0RGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBkYXlzID0gW107XG4gICAgaWYgKHN0YXJ0RGF5ID09PSAoc3RhcnRPZldlZWsgKyBEQVlTX01BWElNVU1fSU5ERVgpICUgREFZU19QRVJfV0VFSykge1xuICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuICAgIGlmIChzdGFydERheSA9PT0gc3RhcnRPZldlZWspIHtcbiAgICAgIHJldHVybiBbZGF0ZV07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAoREFZU19QRVJfV0VFSyArIHN0YXJ0RGF5IC0gc3RhcnRPZldlZWspICUgREFZU19QRVJfV0VFSzsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGRheXMucHVzaChkYXRlIC0gaSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgZGF0ZXMgZm9yIHRoZSBjdXJyZW50IG1vbnRoXG4gICAqXG4gICAqIEBwYXJhbSBtb250aFxuICAgKiBAcGFyYW0geWVhclxuICAgKi9cbiAgZ2V0Q3VycmVudE1vbnRoRGF5cyhtb250aCwgeWVhcikge1xuICAgIGNvbnN0IG51bSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICBkYXlzLnB1c2goaSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuICAvKipcbiAgICogR2V0IGRhdGVzIGZvciBmaXJzdCBkYXlzIG9mIHRoZSBuZXh0IG1vbnRoXG4gICAqXG4gICAqIEBwYXJhbSBtb250aFxuICAgKiBAcGFyYW0geWVhclxuICAgKiBAcGFyYW0gc3RhcnRPZldlZWtcbiAgICovXG4gIGdldE5leHRNb250aERheXMobW9udGgsIHllYXIsIHN0YXJ0T2ZXZWVrKSB7XG4gICAgY29uc3QgZW5kRGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXkoKTtcbiAgICBjb25zdCBkYXlzID0gW107XG4gICAgaWYgKGVuZERheSA9PT0gKHN0YXJ0T2ZXZWVrICsgREFZU19NQVhJTVVNX0lOREVYKSAlIERBWVNfUEVSX1dFRUspIHtcbiAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChEQVlTX01BWElNVU1fSU5ERVggLSAoZW5kRGF5IC0gc3RhcnRPZldlZWspKSAlIERBWVNfUEVSX1dFRUs7IGkrKykge1xuICAgICAgZGF5cy5wdXNoKGkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXM7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgZGF0ZSBpcyBpbiBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBiZXR3ZWVuU2VsZWN0ZWRSYW5nZShkYXRlKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuc3RhcnREYXRlICYmXG4gICAgICB0aGlzLmVuZERhdGUgJiZcbiAgICAgIGRhdGUgPiB0aGlzLnN0YXJ0RGF0ZSAmJlxuICAgICAgZGF0ZSA8IHRoaXMuZW5kRGF0ZSAmJlxuICAgICAgIXRoaXMuaXNSYW5nZUhvdmVyKGRhdGUpKTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBkYXRlIHNob3VsZCBiZSBpbiBzZWxlY3RlZCBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaXNTZWxlY3RlZChkYXRlKSB7XG4gICAgcmV0dXJuICEhKHNhbWVEYXRlKGRhdGUsIHRoaXMuc2VsZWN0ZWREYXRlKSB8fFxuICAgICAgKHRoaXMuc3RhcnREYXRlICYmIHNhbWVEYXRlKGRhdGUsIHRoaXMuc3RhcnREYXRlKSkgfHxcbiAgICAgICh0aGlzLmVuZERhdGUgJiYgc2FtZURhdGUoZGF0ZSwgdGhpcy5lbmREYXRlKSkpO1xuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGRhdGUgaXMgdGhlIHN0YXJ0IG9mIHRoZSBkYXRlIHJhbmdlXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBpc1N0YXJ0T2ZSYW5nZShkYXRlKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuc3RhcnREYXRlICYmXG4gICAgICAhc2FtZURhdGUodGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSkgJiZcbiAgICAgIHNhbWVEYXRlKHRoaXMuc3RhcnREYXRlLCBkYXRlKSAmJlxuICAgICAgIXRoaXMuaXNFbmRPZlJhbmdlKGRhdGUpKTtcbiAgfVxuICBpc0VuZE9mUmFuZ2UoZGF0ZSkge1xuICAgIHJldHVybiAhISgodGhpcy5lbmREYXRlICYmICFzYW1lRGF0ZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKSAmJiBzYW1lRGF0ZSh0aGlzLmVuZERhdGUsIGRhdGUpKSB8fFxuICAgICAgKCF0aGlzLmVuZERhdGUgJiZcbiAgICAgICAgdGhpcy5ob3ZlclJhbmdlICYmXG4gICAgICAgIHNhbWVEYXRlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmhvdmVyUmFuZ2UuZW5kKSAmJlxuICAgICAgICBzYW1lRGF0ZShkYXRlLCB0aGlzLmhvdmVyUmFuZ2UuZW5kKSkpO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXIgY2FsY2l0ZS1kYXRlLXBpY2tlci1kYXlcbiAgICpcbiAgICogQHBhcmFtIGFjdGl2ZS5hY3RpdmVcbiAgICogQHBhcmFtIGFjdGl2ZVxuICAgKiBAcGFyYW0gZGF5XG4gICAqIEBwYXJhbSBkYXlJbldlZWtcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHBhcmFtIGN1cnJlbnRNb250aFxuICAgKiBAcGFyYW0gcmVmXG4gICAqIEBwYXJhbSBhY3RpdmUuY3VycmVudE1vbnRoXG4gICAqIEBwYXJhbSBhY3RpdmUuZGF0ZVxuICAgKiBAcGFyYW0gYWN0aXZlLmRheVxuICAgKiBAcGFyYW0gYWN0aXZlLmRheUluV2Vla1xuICAgKiBAcGFyYW0gYWN0aXZlLnJlZlxuICAgKi9cbiAgcmVuZGVyRGF0ZURheSh7IGFjdGl2ZSwgY3VycmVudE1vbnRoLCBkYXRlLCBkYXksIGRheUluV2VlaywgcmVmIH0pIHtcbiAgICBjb25zdCBpc0ZvY3VzZWRPblN0YXJ0ID0gdGhpcy5pc0ZvY3VzZWRPblN0YXJ0KCk7XG4gICAgY29uc3QgaXNIb3ZlckluUmFuZ2UgPSB0aGlzLmlzSG92ZXJJblJhbmdlKCkgfHxcbiAgICAgICghdGhpcy5lbmREYXRlICYmIHRoaXMuaG92ZXJSYW5nZSAmJiBzYW1lRGF0ZSh0aGlzLmhvdmVyUmFuZ2U/LmVuZCwgdGhpcy5zdGFydERhdGUpKTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJkYXlcIiwga2V5OiBkYXRlLnRvRGF0ZVN0cmluZygpLCByb2xlOiBcImdyaWRjZWxsXCIgfSwgaChcImNhbGNpdGUtZGF0ZS1waWNrZXItZGF5XCIsIHsgYWN0aXZlOiBhY3RpdmUsIGNsYXNzOiB7XG4gICAgICAgIFwiaG92ZXItLWluc2lkZS1yYW5nZVwiOiB0aGlzLnN0YXJ0RGF0ZSAmJiBpc0hvdmVySW5SYW5nZSxcbiAgICAgICAgXCJob3Zlci0tb3V0c2lkZS1yYW5nZVwiOiB0aGlzLnN0YXJ0RGF0ZSAmJiAhaXNIb3ZlckluUmFuZ2UsXG4gICAgICAgIFwiZm9jdXNlZC0tc3RhcnRcIjogaXNGb2N1c2VkT25TdGFydCxcbiAgICAgICAgXCJmb2N1c2VkLS1lbmRcIjogIWlzRm9jdXNlZE9uU3RhcnRcbiAgICAgIH0sIGN1cnJlbnRNb250aDogY3VycmVudE1vbnRoLCBkYXRlVGltZUZvcm1hdDogdGhpcy5kYXRlVGltZUZvcm1hdCwgZGF5OiBkYXksIGRpc2FibGVkOiAhaW5SYW5nZShkYXRlLCB0aGlzLm1pbiwgdGhpcy5tYXgpLCBlbmRPZlJhbmdlOiB0aGlzLmlzRW5kT2ZSYW5nZShkYXRlKSwgaGlnaGxpZ2h0ZWQ6IHRoaXMuYmV0d2VlblNlbGVjdGVkUmFuZ2UoZGF0ZSksIG9uQ2FsY2l0ZURheVNlbGVjdDogdGhpcy5kYXlTZWxlY3QsIG9uQ2FsY2l0ZUludGVybmFsRGF5SG92ZXI6IHRoaXMuZGF5SG92ZXIsIHJhbmdlOiAhIXRoaXMuc3RhcnREYXRlICYmICEhdGhpcy5lbmREYXRlICYmICFzYW1lRGF0ZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKSwgcmFuZ2VFZGdlOiBkYXlJbldlZWsgPT09IDAgPyBcInN0YXJ0XCIgOiBkYXlJbldlZWsgPT09IDYgPyBcImVuZFwiIDogdW5kZWZpbmVkLCByYW5nZUhvdmVyOiB0aGlzLmlzUmFuZ2VIb3ZlcihkYXRlKSwgc2NhbGU6IHRoaXMuc2NhbGUsIHNlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQoZGF0ZSksIHN0YXJ0T2ZSYW5nZTogdGhpcy5pc1N0YXJ0T2ZSYW5nZShkYXRlKSwgdmFsdWU6IGRhdGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiB7XG4gICAgICAgIC8vIHdoZW4gbW92aW5nIHZpYSBrZXlib2FyZCwgZm9jdXMgbXVzdCBiZSB1cGRhdGVkIG9uIGFjdGl2ZSBkYXRlXG4gICAgICAgIGlmIChyZWYgJiYgYWN0aXZlICYmIHRoaXMuYWN0aXZlRm9jdXMpIHtcbiAgICAgICAgICBlbD8uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSB9KSkpO1xuICB9XG4gIGlzRm9jdXNlZE9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG92ZXJSYW5nZT8uZm9jdXNlZCA9PT0gXCJzdGFydFwiO1xuICB9XG4gIGlzSG92ZXJJblJhbmdlKCkge1xuICAgIGlmICghdGhpcy5ob3ZlclJhbmdlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5ob3ZlclJhbmdlO1xuICAgIHJldHVybiAhISgoIXRoaXMuaXNGb2N1c2VkT25TdGFydCgpICYmIHRoaXMuc3RhcnREYXRlICYmICghdGhpcy5lbmREYXRlIHx8IGVuZCA8IHRoaXMuZW5kRGF0ZSkpIHx8XG4gICAgICAodGhpcy5pc0ZvY3VzZWRPblN0YXJ0KCkgJiYgdGhpcy5zdGFydERhdGUgJiYgc3RhcnQgPiB0aGlzLnN0YXJ0RGF0ZSkpO1xuICB9XG4gIGlzUmFuZ2VIb3ZlcihkYXRlKSB7XG4gICAgaWYgKCF0aGlzLmhvdmVyUmFuZ2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSB0aGlzLmhvdmVyUmFuZ2U7XG4gICAgY29uc3QgaXNTdGFydCA9IHRoaXMuaXNGb2N1c2VkT25TdGFydCgpO1xuICAgIGNvbnN0IGluc2lkZVJhbmdlID0gdGhpcy5pc0hvdmVySW5SYW5nZSgpO1xuICAgIGNvbnN0IGNvbmQxID0gaW5zaWRlUmFuZ2UgJiZcbiAgICAgICgoIWlzU3RhcnQgJiYgZGF0ZSA+IHRoaXMuc3RhcnREYXRlICYmIChkYXRlIDwgZW5kIHx8IHNhbWVEYXRlKGRhdGUsIGVuZCkpKSB8fFxuICAgICAgICAoaXNTdGFydCAmJiBkYXRlIDwgdGhpcy5lbmREYXRlICYmIChkYXRlID4gc3RhcnQgfHwgc2FtZURhdGUoZGF0ZSwgc3RhcnQpKSkpO1xuICAgIGNvbnN0IGNvbmQyID0gIWluc2lkZVJhbmdlICYmXG4gICAgICAoKCFpc1N0YXJ0ICYmIGRhdGUgPj0gdGhpcy5lbmREYXRlICYmIChkYXRlIDwgZW5kIHx8IHNhbWVEYXRlKGRhdGUsIGVuZCkpKSB8fFxuICAgICAgICAoaXNTdGFydCAmJlxuICAgICAgICAgICgodGhpcy5zdGFydERhdGUgJiYgZGF0ZSA8IHRoaXMuc3RhcnREYXRlKSB8fFxuICAgICAgICAgICAgKHRoaXMuZW5kRGF0ZSAmJiBzYW1lRGF0ZShkYXRlLCB0aGlzLnN0YXJ0RGF0ZSkpKSAmJlxuICAgICAgICAgICgoc3RhcnQgJiYgZGF0ZSA+IHN0YXJ0KSB8fCBzYW1lRGF0ZShkYXRlLCBzdGFydCkpKSk7XG4gICAgcmV0dXJuIGNvbmQxIHx8IGNvbmQyO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5EYXRlUGlja2VyTW9udGguc3R5bGUgPSBkYXRlUGlja2VyTW9udGhDc3M7XG5cbmNvbnN0IENTUyA9IHtcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBtb250aDogXCJtb250aFwiLFxuICBjaGV2cm9uOiBcImNoZXZyb25cIixcbiAgc3VmZml4OiBcInN1ZmZpeFwiLFxuICB5ZWFyU3VmZml4OiBcInllYXItLXN1ZmZpeFwiLFxuICB5ZWFyV3JhcDogXCJ5ZWFyLXdyYXBcIixcbiAgdGV4dFJldmVyc2U6IFwidGV4dC0tcmV2ZXJzZVwiXG59O1xuY29uc3QgSUNPTiA9IHtcbiAgY2hldnJvbkxlZnQ6IFwiY2hldnJvbi1sZWZ0XCIsXG4gIGNoZXZyb25SaWdodDogXCJjaGV2cm9uLXJpZ2h0XCJcbn07XG5cbmNvbnN0IGRhdGVQaWNrZXJNb250aEhlYWRlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9LmhlYWRlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC4yNXJlbX06aG9zdChbc2NhbGU9c10pIC50ZXh0e21hcmdpbi1ibG9jazowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1zXSkgLmNoZXZyb257YmxvY2stc2l6ZToyLjI1cmVtfTpob3N0KFtzY2FsZT1tXSkgLnRleHR7bWFyZ2luLWJsb2NrOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuY2hldnJvbntibG9jay1zaXplOjNyZW19Omhvc3QoW3NjYWxlPWxdKSAudGV4dHttYXJnaW4tYmxvY2s6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7bGluZS1oZWlnaHQ6MS41cmVtfTpob3N0KFtzY2FsZT1sXSkgLmNoZXZyb257YmxvY2stc2l6ZTozLjVyZW19LmNoZXZyb257bWFyZ2luLWlubGluZTotMC4yNXJlbTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWlubGluZTowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztpbmxpbmUtc2l6ZToxNC4yODU3MTQyODU3JX0uY2hldnJvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNoZXZyb246aG92ZXIsLmNoZXZyb246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jaGV2cm9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0uY2hldnJvblthcmlhLWRpc2FibGVkPXRydWVde3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowfS50ZXh0e21hcmdpbi1ibG9jazphdXRvO2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MX0udGV4dC0tcmV2ZXJzZXtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX0ubW9udGgsLnllYXIsLnN1ZmZpeHttYXJnaW4taW5saW5lOjAuMjVyZW07bWFyZ2luLWJsb2NrOmF1dG87ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjEuMjU7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2ZvbnQtc2l6ZTppbmhlcml0fS55ZWFye3Bvc2l0aW9uOnJlbGF0aXZlO2lubGluZS1zaXplOjIuNXJlbTtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtZmFtaWx5OmluaGVyaXQ7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0ueWVhcjpob3Zlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjEwMG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvdXRsaW5lLWNvbG9yO291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpO291dGxpbmUtb2Zmc2V0OjJweH0ueWVhcjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0ueWVhci0tc3VmZml4e3RleHQtYWxpZ246c3RhcnR9LnllYXItd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZX0uc3VmZml4e2luc2V0LWJsb2NrLXN0YXJ0OjBweDt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1hbGlnbjpzdGFydDtpbnNldC1pbmxpbmUtc3RhcnQ6MH1cIjtcblxuY29uc3QgRGF0ZVBpY2tlck1vbnRoSGVhZGVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3RcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB5ZWFyIG9uIFVQL0RPV04ga2V5c1xuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgdGhpcy5vblllYXJLZXkgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGxvY2FsaXplZFllYXIgPSB0aGlzLnBhcnNlQ2FsZW5kYXJZZWFyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNldFllYXIoeyBsb2NhbGl6ZWRZZWFyLCBvZmZzZXQ6IC0xIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZXRZZWFyKHsgbG9jYWxpemVkWWVhciwgb2Zmc2V0OiAxIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vblllYXJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0WWVhcih7XG4gICAgICAgIGxvY2FsaXplZFllYXI6IHRoaXMucGFyc2VDYWxlbmRhclllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLm9uWWVhcklucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFllYXIoe1xuICAgICAgICBsb2NhbGl6ZWRZZWFyOiB0aGlzLnBhcnNlQ2FsZW5kYXJZZWFyKGV2ZW50LnRhcmdldC52YWx1ZSksXG4gICAgICAgIGNvbW1pdDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5wcmV2TW9udGhDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKGV2ZW50LCB0aGlzLnByZXZNb250aERhdGUpO1xuICAgIH07XG4gICAgdGhpcy5wcmV2TW9udGhLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgdGhpcy5wcmV2TW9udGhDbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm5leHRNb250aENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2soZXZlbnQsIHRoaXMubmV4dE1vbnRoRGF0ZSk7XG4gICAgfTtcbiAgICB0aGlzLm5leHRNb250aEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc0FjdGl2YXRpb25LZXkoZXZlbnQua2V5KSkge1xuICAgICAgICB0aGlzLm5leHRNb250aENsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qXG4gICAgICogVXBkYXRlIGFjdGl2ZSBtb250aCBvbiBjbGlja3Mgb2YgbGVmdC9yaWdodCBhcnJvd3NcbiAgICAgKi9cbiAgICB0aGlzLmhhbmRsZUFycm93Q2xpY2sgPSAoZXZlbnQsIGRhdGUpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3QuZW1pdChkYXRlKTtcbiAgICB9O1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmV4dE1vbnRoRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByZXZNb250aERhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5wYXJlbnREYXRlUGlja2VyRWwgPSBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkodGhpcy5lbCwgXCJjYWxjaXRlLWRhdGUtcGlja2VyXCIpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuc2V0TmV4dFByZXZNb250aERhdGVzKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXIgfSwgdGhpcy5yZW5kZXJDb250ZW50KCkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcywgbG9jYWxlRGF0YSwgYWN0aXZlRGF0ZSB9ID0gdGhpcztcbiAgICBpZiAoIWFjdGl2ZURhdGUgfHwgIWxvY2FsZURhdGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnREYXRlUGlja2VyRWwpIHtcbiAgICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBsYW5nOiBsb2NhbGUgfSA9IHRoaXMucGFyZW50RGF0ZVBpY2tlckVsO1xuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZSxcbiAgICAgICAgLi4uKG51bWJlcmluZ1N5c3RlbSAmJiB7IG51bWJlcmluZ1N5c3RlbSB9KSxcbiAgICAgICAgLi4uKGxvY2FsZSAmJiB7IGxvY2FsZSB9KVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlTW9udGggPSBhY3RpdmVEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeyBtb250aHMsIHVuaXRPcmRlciB9ID0gbG9jYWxlRGF0YTtcbiAgICBjb25zdCBsb2NhbGl6ZWRNb250aCA9IChtb250aHMud2lkZSB8fCBtb250aHMubmFycm93IHx8IG1vbnRocy5hYmJyZXZpYXRlZClbYWN0aXZlTW9udGhdO1xuICAgIGNvbnN0IGxvY2FsaXplZFllYXIgPSB0aGlzLmZvcm1hdENhbGVuZGFyWWVhcihhY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIGNvbnN0IGljb25TY2FsZSA9IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIjtcbiAgICBjb25zdCBvcmRlciA9IGdldE9yZGVyKHVuaXRPcmRlcik7XG4gICAgY29uc3QgcmV2ZXJzZSA9IG9yZGVyLmluZGV4T2YoXCJ5XCIpIDwgb3JkZXIuaW5kZXhPZihcIm1cIik7XG4gICAgY29uc3Qgc3VmZml4ID0gbG9jYWxlRGF0YS55ZWFyPy5zdWZmaXg7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwiYVwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiBgJHt0aGlzLnByZXZNb250aERhdGUuZ2V0TW9udGgoKSA9PT0gYWN0aXZlTW9udGh9YCwgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLnByZXZNb250aCwgY2xhc3M6IENTUy5jaGV2cm9uLCBocmVmOiBcIiNcIiwgb25DbGljazogdGhpcy5wcmV2TW9udGhDbGljaywgb25LZXlEb3duOiB0aGlzLnByZXZNb250aEtleWRvd24sIHJvbGU6IFwiYnV0dG9uXCIsIHRhYmluZGV4OiB0aGlzLnByZXZNb250aERhdGUuZ2V0TW9udGgoKSA9PT0gYWN0aXZlTW9udGggPyAtMSA6IDAgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IFwiZmxpcC1ydGxcIjogdHJ1ZSwgaWNvbjogSUNPTi5jaGV2cm9uTGVmdCwgc2NhbGU6IGljb25TY2FsZSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogeyB0ZXh0OiB0cnVlLCBbQ1NTLnRleHRSZXZlcnNlXTogcmV2ZXJzZSB9IH0sIGgoSGVhZGluZywgeyBjbGFzczogQ1NTLm1vbnRoLCBsZXZlbDogdGhpcy5oZWFkaW5nTGV2ZWwgfSwgbG9jYWxpemVkTW9udGgpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MueWVhcldyYXAgfSwgaChcImlucHV0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLnllYXIsIGNsYXNzOiB7XG4gICAgICAgIHllYXI6IHRydWUsXG4gICAgICAgIFtDU1MueWVhclN1ZmZpeF06ICEhc3VmZml4XG4gICAgICB9LCBpbnB1dG1vZGU6IFwibnVtZXJpY1wiLCBtYXhsZW5ndGg6IFwiNFwiLCBtaW5sZW5ndGg6IFwiMVwiLCBvbkNoYW5nZTogdGhpcy5vblllYXJDaGFuZ2UsIG9uSW5wdXQ6IHRoaXMub25ZZWFySW5wdXQsIG9uS2V5RG93bjogdGhpcy5vblllYXJLZXksIHBhdHRlcm46IFwiXFxcXGQqXCIsIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogbG9jYWxpemVkWWVhcixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLnllYXJJbnB1dCA9IGVsKSB9KSwgc3VmZml4ICYmIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5zdWZmaXggfSwgc3VmZml4KSkpLCBoKFwiYVwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiBgJHt0aGlzLm5leHRNb250aERhdGUuZ2V0TW9udGgoKSA9PT0gYWN0aXZlTW9udGh9YCwgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLm5leHRNb250aCwgY2xhc3M6IENTUy5jaGV2cm9uLCBocmVmOiBcIiNcIiwgb25DbGljazogdGhpcy5uZXh0TW9udGhDbGljaywgb25LZXlEb3duOiB0aGlzLm5leHRNb250aEtleWRvd24sIHJvbGU6IFwiYnV0dG9uXCIsIHRhYmluZGV4OiB0aGlzLm5leHRNb250aERhdGUuZ2V0TW9udGgoKSA9PT0gYWN0aXZlTW9udGggPyAtMSA6IDAgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IFwiZmxpcC1ydGxcIjogdHJ1ZSwgaWNvbjogSUNPTi5jaGV2cm9uUmlnaHQsIHNjYWxlOiBpY29uU2NhbGUgfSkpKSk7XG4gIH1cbiAgc2V0TmV4dFByZXZNb250aERhdGVzKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmVEYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmV4dE1vbnRoRGF0ZSA9IGRhdGVGcm9tUmFuZ2UobmV4dE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgdGhpcy5wcmV2TW9udGhEYXRlID0gZGF0ZUZyb21SYW5nZShwcmV2TW9udGgodGhpcy5hY3RpdmVEYXRlKSwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgfVxuICBmb3JtYXRDYWxlbmRhclllYXIoeWVhcikge1xuICAgIHJldHVybiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUoYCR7Zm9ybWF0Q2FsZW5kYXJZZWFyKHllYXIsIHRoaXMubG9jYWxlRGF0YSl9YCk7XG4gIH1cbiAgcGFyc2VDYWxlbmRhclllYXIoeWVhcikge1xuICAgIHJldHVybiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUoYCR7cGFyc2VDYWxlbmRhclllYXIoTnVtYmVyKG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKHllYXIpKSwgdGhpcy5sb2NhbGVEYXRhKX1gKTtcbiAgfVxuICBnZXRJblJhbmdlRGF0ZSh7IGxvY2FsaXplZFllYXIsIG9mZnNldCA9IDAgfSkge1xuICAgIGNvbnN0IHsgbWluLCBtYXgsIGFjdGl2ZURhdGUgfSA9IHRoaXM7XG4gICAgY29uc3QgcGFyc2VkWWVhciA9IE51bWJlcihudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZShsb2NhbGl6ZWRZZWFyKSk7XG4gICAgY29uc3QgbGVuZ3RoID0gcGFyc2VkWWVhci50b1N0cmluZygpLmxlbmd0aDtcbiAgICBjb25zdCB5ZWFyID0gaXNOYU4ocGFyc2VkWWVhcikgPyBmYWxzZSA6IHBhcnNlZFllYXIgKyBvZmZzZXQ7XG4gICAgY29uc3QgaW5SYW5nZSA9IHllYXIgJiYgKCFtaW4gfHwgbWluLmdldEZ1bGxZZWFyKCkgPD0geWVhcikgJiYgKCFtYXggfHwgbWF4LmdldEZ1bGxZZWFyKCkgPj0geWVhcik7XG4gICAgLy8gaWYgeW91J3ZlIHN1cHBsaWVkIGEgeWVhciBhbmQgaXQncyBpbiByYW5nZVxuICAgIGlmICh5ZWFyICYmIGluUmFuZ2UgJiYgbGVuZ3RoID09PSBsb2NhbGl6ZWRZZWFyLmxlbmd0aCkge1xuICAgICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShhY3RpdmVEYXRlKTtcbiAgICAgIG5leHREYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgcmV0dXJuIGRhdGVGcm9tUmFuZ2UobmV4dERhdGUsIG1pbiwgbWF4KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFBhcnNlIGxvY2FsaXplZCB5ZWFyIHN0cmluZyBmcm9tIGlucHV0LFxuICAgKiBzZXQgdG8gYWN0aXZlIGlmIGluIHJhbmdlXG4gICAqXG4gICAqIEBwYXJhbSByb290MFxuICAgKiBAcGFyYW0gcm9vdDAubG9jYWxpemVkWWVhclxuICAgKiBAcGFyYW0gcm9vdDAuY29tbWl0XG4gICAqIEBwYXJhbSByb290MC5vZmZzZXRcbiAgICovXG4gIHNldFllYXIoeyBsb2NhbGl6ZWRZZWFyLCBjb21taXQgPSB0cnVlLCBvZmZzZXQgPSAwIH0pIHtcbiAgICBjb25zdCB7IHllYXJJbnB1dCwgYWN0aXZlRGF0ZSB9ID0gdGhpcztcbiAgICBjb25zdCBpblJhbmdlRGF0ZSA9IHRoaXMuZ2V0SW5SYW5nZURhdGUoeyBsb2NhbGl6ZWRZZWFyLCBvZmZzZXQgfSk7XG4gICAgLy8gaWYgeW91J3ZlIHN1cHBsaWVkIGEgeWVhciBhbmQgaXQncyBpbiByYW5nZSwgdXBkYXRlIGFjdGl2ZSBkYXRlXG4gICAgaWYgKGluUmFuZ2VEYXRlKSB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3QuZW1pdChpblJhbmdlRGF0ZSk7XG4gICAgfVxuICAgIGlmIChjb21taXQpIHtcbiAgICAgIHllYXJJbnB1dC52YWx1ZSA9IHRoaXMuZm9ybWF0Q2FsZW5kYXJZZWFyKChpblJhbmdlRGF0ZSB8fCBhY3RpdmVEYXRlKS5nZXRGdWxsWWVhcigpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWluXCI6IFtcInNldE5leHRQcmV2TW9udGhEYXRlc1wiXSxcbiAgICBcIm1heFwiOiBbXCJzZXROZXh0UHJldk1vbnRoRGF0ZXNcIl0sXG4gICAgXCJhY3RpdmVEYXRlXCI6IFtcInNldE5leHRQcmV2TW9udGhEYXRlc1wiXVxuICB9OyB9XG59O1xuRGF0ZVBpY2tlck1vbnRoSGVhZGVyLnN0eWxlID0gZGF0ZVBpY2tlck1vbnRoSGVhZGVyQ3NzO1xuXG5leHBvcnQgeyBEYXRlUGlja2VyIGFzIGNhbGNpdGVfZGF0ZV9waWNrZXIsIERhdGVQaWNrZXJEYXkgYXMgY2FsY2l0ZV9kYXRlX3BpY2tlcl9kYXksIERhdGVQaWNrZXJNb250aCBhcyBjYWxjaXRlX2RhdGVfcGlja2VyX21vbnRoLCBEYXRlUGlja2VyTW9udGhIZWFkZXIgYXMgY2FsY2l0ZV9kYXRlX3BpY2tlcl9tb250aF9oZWFkZXIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGdldFVzZXJBZ2VudFN0cmluZyB9IGZyb20gJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRBc3NldFBhdGggfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlc1xuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5cbi8qKlxuICogQ2hlY2sgaWYgZGF0ZSBpcyB3aXRoaW4gYSBtaW4gYW5kIG1heFxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKi9cbmZ1bmN0aW9uIGluUmFuZ2UoZGF0ZSwgbWluLCBtYXgpIHtcbiAgaWYgKCFkYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgYWZ0ZXJNaW4gPSAhKG1pbiBpbnN0YW5jZW9mIERhdGUpIHx8IHRpbWUgPj0gbWluLmdldFRpbWUoKTtcbiAgY29uc3QgYmVmb3JlTWF4ID0gIShtYXggaW5zdGFuY2VvZiBEYXRlKSB8fCB0aW1lIDw9IG1heC5nZXRUaW1lKCk7XG4gIHJldHVybiBhZnRlck1pbiAmJiBiZWZvcmVNYXg7XG59XG4vKipcbiAqIEVuc3VyZXMgZGF0ZSBpcyB3aXRoaW4gcmFuZ2UsXG4gKiByZXR1cm5zIG1pbiBvciBtYXggaWYgb3V0IG9mIGJvdW5kc1xuICpcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKi9cbmZ1bmN0aW9uIGRhdGVGcm9tUmFuZ2UoZGF0ZSwgbWluLCBtYXgpIHtcbiAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCBiZWZvcmVNaW4gPSBtaW4gaW5zdGFuY2VvZiBEYXRlICYmIHRpbWUgPCBtaW4uZ2V0VGltZSgpO1xuICBjb25zdCBhZnRlck1heCA9IG1heCBpbnN0YW5jZW9mIERhdGUgJiYgdGltZSA+IG1heC5nZXRUaW1lKCk7XG4gIGlmIChiZWZvcmVNaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGlmIChhZnRlck1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG4vKipcbiAqIFBhcnNlIGFuIGlzbzg2MDEgc3RyaW5nIChZWVlZLW1tLWRkKSBpbnRvIGEgdmFsaWQgZGF0ZS5cbiAqIFRPRE86IGhhbmRsZSB0aW1lIHdoZW4gdGltZSBvZiBkYXkgVUkgaXMgYWRkZWRcbiAqXG4gKiBAcGFyYW0gaXNvODYwMVxuICogQHBhcmFtIGlzRW5kRGF0ZVxuICovXG5mdW5jdGlvbiBkYXRlRnJvbUlTTyhpc284NjAxLCBpc0VuZERhdGUgPSBmYWxzZSkge1xuICBpZiAoaXNvODYwMSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gaXNvODYwMTtcbiAgfVxuICBpZiAoIWlzbzg2MDEgfHwgdHlwZW9mIGlzbzg2MDEgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBkID0gaXNvODYwMS5zcGxpdCgvWzogVC1dLykubWFwKHBhcnNlRmxvYXQpO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZFswXSwgKGRbMV0gfHwgMSkgLSAxLCBkWzJdIHx8IDEpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRbMF0pO1xuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIElTTyA4NjAxIGRhdGU6IFwiJHtpc284NjAxfVwiYCk7XG4gIH1cbiAgaWYgKGlzRW5kRGF0ZSkge1xuICAgIHJldHVybiBzZXRFbmRPZkRheShkYXRlKTtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn1cbi8qKlxuICogUGFyc2UgYSBsb2NhbGl6ZWQgZGF0ZSBzdHJpbmcgaW50byBhIHZhbGlkIERhdGUuXG4gKiByZXR1cm4gZmFsc2UgaWYgZGF0ZSBpcyBpbnZhbGlkLCBvciBvdXQgb2YgcmFuZ2VcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBsb2NhbGVEYXRhXG4gKi9cbmZ1bmN0aW9uIGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nKHZhbHVlLCBsb2NhbGVEYXRhKSB7XG4gIGlmICghbG9jYWxlRGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgc2VwYXJhdG9yIH0gPSBsb2NhbGVEYXRhO1xuICBjb25zdCBwYXJ0cyA9IHBhcnNlRGF0ZVN0cmluZyh2YWx1ZSwgbG9jYWxlRGF0YSk7XG4gIGNvbnN0IHsgZGF5LCBtb250aCB9ID0gcGFydHM7XG4gIGNvbnN0IHllYXIgPSBwYXJzZUNhbGVuZGFyWWVhcihwYXJ0cy55ZWFyLCBsb2NhbGVEYXRhKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICBjb25zdCB2YWxpZERheSA9IGRheSA+IDA7XG4gIGNvbnN0IHZhbGlkTW9udGggPSBtb250aCA+IC0xO1xuICBjb25zdCB2YWxpZERhdGUgPSAhaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xuICBjb25zdCB2YWxpZExlbmd0aCA9IHZhbHVlLnNwbGl0KHNlcGFyYXRvcikuZmlsdGVyKChjKSA9PiBjKS5sZW5ndGggPiAyO1xuICBjb25zdCB2YWxpZFllYXIgPSB5ZWFyLnRvU3RyaW5nKCkubGVuZ3RoID4gMDtcbiAgaWYgKHZhbGlkRGF5ICYmIHZhbGlkTW9udGggJiYgdmFsaWREYXRlICYmIHZhbGlkTGVuZ3RoICYmIHZhbGlkWWVhcikge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcGFyc2VDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSkge1xuICByZXR1cm4gcHJvY2Vzc0NhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhLCBcInJlYWRcIik7XG59XG5mdW5jdGlvbiBmb3JtYXRDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSkge1xuICByZXR1cm4gcHJvY2Vzc0NhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhLCBcIndyaXRlXCIpO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0NhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhLCBtb2RlKSB7XG4gIGlmIChsb2NhbGVEYXRhW1wiZGVmYXVsdC1jYWxlbmRhclwiXSAhPT0gXCJidWRkaGlzdFwiKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH1cbiAgY29uc3QgQlVEREhJU1RfQ0FMRU5EQVJfWUVBUl9PRkZTRVQgPSA1NDM7XG4gIGNvbnN0IHllYXJPZmZzZXQgPSBCVURESElTVF9DQUxFTkRBUl9ZRUFSX09GRlNFVCAqIChtb2RlID09PSBcInJlYWRcIiA/IC0xIDogMSk7XG4gIHJldHVybiB5ZWFyICsgeWVhck9mZnNldDtcbn1cbi8qKlxuICogUmV0cmlldmUgZGF5LCBtb250aCwgYW5kIHllYXIgc3RyaW5ncyBmcm9tIGEgbG9jYWxpemVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsb2NhbGVEYXRhXG4gKi9cbmZ1bmN0aW9uIGRhdGVQYXJ0c0Zyb21Mb2NhbGl6ZWRTdHJpbmcoc3RyaW5nLCBsb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHsgc2VwYXJhdG9yLCB1bml0T3JkZXIgfSA9IGxvY2FsZURhdGE7XG4gIGNvbnN0IG9yZGVyID0gZ2V0T3JkZXIodW5pdE9yZGVyKTtcbiAgY29uc3QgdmFsdWVzID0gc3RyaW5nLnNwbGl0KHNlcGFyYXRvcikubWFwKChwYXJ0KSA9PiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZShwYXJ0KSk7XG4gIGNvbnN0IGRheSA9IHZhbHVlc1tvcmRlci5pbmRleE9mKFwiZFwiKV07XG4gIGNvbnN0IG1vbnRoID0gdmFsdWVzW29yZGVyLmluZGV4T2YoXCJtXCIpXTtcbiAgY29uc3QgeWVhciA9IHZhbHVlc1tvcmRlci5pbmRleE9mKFwieVwiKV07XG4gIHJldHVybiB7IGRheSwgbW9udGgsIHllYXIgfTtcbn1cbi8qKlxuICogUmV0dXJuIGZpcnN0IHBvcnRpb24gb2YgSVNPIHN0cmluZyAoWVlZWS1tbS1kZClcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBkYXRlVG9JU08oZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG4vKipcbiAqIENoZWNrIGlmIHR3byBkYXRlcyBhcmUgdGhlIHNhbWUgZGF5LCBtb250aCwgeWVhclxuICpcbiAqIEBwYXJhbSBkMVxuICogQHBhcmFtIGQyXG4gKi9cbmZ1bmN0aW9uIHNhbWVEYXRlKGQxLCBkMikge1xuICByZXR1cm4gKGQxIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgIGQyIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgIGQxLmdldERhdGUoKSA9PT0gZDIuZ2V0RGF0ZSgpICYmXG4gICAgZDEuZ2V0TW9udGgoKSA9PT0gZDIuZ2V0TW9udGgoKSAmJlxuICAgIGQxLmdldEZ1bGxZZWFyKCkgPT09IGQyLmdldEZ1bGxZZWFyKCkpO1xufVxuLyoqXG4gKiBHZXQgYSBkYXRlIG9uZSBtb250aCBpbiB0aGUgcGFzdFxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKi9cbmZ1bmN0aW9uIHByZXZNb250aChkYXRlKSB7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXh0RGF0ZS5zZXRNb250aChtb250aCAtIDEpO1xuICAvLyBkYXRlIGRvZXNuJ3QgZXhpc3QgaW4gbmV3IG1vbnRoLCB1c2UgbGFzdCBkYXlcbiAgaWYgKG1vbnRoID09PSBuZXh0RGF0ZS5nZXRNb250aCgpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGgsIDApO1xuICB9XG4gIHJldHVybiBuZXh0RGF0ZTtcbn1cbi8qKlxuICogR2V0IGEgZGF0ZSBvbmUgbW9udGggaW4gdGhlIGZ1dHVyZVxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKi9cbmZ1bmN0aW9uIG5leHRNb250aChkYXRlKSB7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXh0RGF0ZS5zZXRNb250aChtb250aCArIDEpO1xuICAvLyBkYXRlIGRvZXNuJ3QgZXhpc3QgaW4gbmV3IG1vbnRoLCB1c2UgbGFzdCBkYXlcbiAgaWYgKChtb250aCArIDIpICUgNyA9PT0gbmV4dERhdGUuZ2V0TW9udGgoKSAlIDcpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDIsIDApO1xuICB9XG4gIHJldHVybiBuZXh0RGF0ZTtcbn1cbi8qKlxuICogUGFyc2UgbnVtZXJpYyB1bml0cyBmb3IgZGF5LCBtb250aCwgYW5kIHllYXIgZnJvbSBhIGxvY2FsaXplZCBzdHJpbmdcbiAqIG1vbnRoIHN0YXJ0cyBhdCAwIChjYW4gcGFzcyB0byBkYXRlIGNvbnN0cnVjdG9yKVxuICogY2FuIHJldHVybiB2YWx1ZXMgYXMgbnVtYmVyIG9yIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsb2NhbGVEYXRhXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRGF0ZVN0cmluZyhzdHJpbmcsIGxvY2FsZURhdGEpIHtcbiAgY29uc3QgeyBkYXksIG1vbnRoLCB5ZWFyIH0gPSBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nKHN0cmluZywgbG9jYWxlRGF0YSk7XG4gIHJldHVybiB7XG4gICAgZGF5OiBwYXJzZUludChkYXkpLFxuICAgIG1vbnRoOiBwYXJzZUludChtb250aCkgLSAxLFxuICAgIHllYXI6IHBhcnNlSW50KHllYXIpXG4gIH07XG59XG4vKipcbiAqIEJhc2VkIG9uIHRoZSB1bml0T3JkZXIgc3RyaW5nLCBmaW5kIG9yZGVyIG9mIG1vbnRoLCBkYXksIGFuZCB5ZWFyIGZvciBsb2NhbGVcbiAqXG4gKiBAcGFyYW0gdW5pdE9yZGVyXG4gKi9cbmZ1bmN0aW9uIGdldE9yZGVyKHVuaXRPcmRlcikge1xuICBjb25zdCBzaWduaWZpZXJzID0gW1wiZFwiLCBcIm1cIiwgXCJ5XCJdO1xuICBjb25zdCBvcmRlciA9IHVuaXRPcmRlci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gc2lnbmlmaWVycy5zb3J0KChhLCBiKSA9PiBvcmRlci5pbmRleE9mKGEpIC0gb3JkZXIuaW5kZXhPZihiKSk7XG59XG4vKipcbiAqIEdldCBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIHR3byBkYXRlc1xuICpcbiAqIEBwYXJhbSBkYXRlMVxuICogQHBhcmFtIGRhdGUyXG4gKi9cbmZ1bmN0aW9uIGdldERheXNEaWZmKGRhdGUxLCBkYXRlMikge1xuICBjb25zdCB0czEgPSBkYXRlMS5nZXRUaW1lKCk7XG4gIGNvbnN0IHRzMiA9IGRhdGUyLmdldFRpbWUoKTtcbiAgcmV0dXJuICh0czEgLSB0czIpIC8gKDEwMDAgKiAzNjAwICogMjQpO1xufVxuLyoqXG4gKiBTZXQgdGltZSBvZiB0aGUgZGF5IHRvIHRoZSBlbmQuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKiBAcmV0dXJucyB7RGF0ZX0gRGF0ZSB3aXRoIHRpbWUgc2V0IHRvIGVuZCBvZiBkYXkgLlxuICovXG5mdW5jdGlvbiBzZXRFbmRPZkRheShkYXRlKSB7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogQ0xEUiBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRyYW5zbGF0aW9uQ2FjaGUgPSB7fTtcbi8qKlxuICogQ0xEUiByZXF1ZXN0IGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG4vKipcbiAqIEZldGNoIGNhbGVuZGFyIGRhdGEgZm9yIGEgZ2l2ZW4gbG9jYWxlIGZyb20gbGlzdCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gKlxuICogQHBhcmFtIGxhbmdcbiAqIEBwdWJsaWNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYWxlRGF0YShsYW5nKSB7XG4gIGNvbnN0IGxvY2FsZSA9IGdldFN1cHBvcnRlZExvY2FsZShsYW5nKTtcbiAgaWYgKHRyYW5zbGF0aW9uQ2FjaGVbbG9jYWxlXSkge1xuICAgIHJldHVybiB0cmFuc2xhdGlvbkNhY2hlW2xvY2FsZV07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbbG9jYWxlXSkge1xuICAgIHJlcXVlc3RDYWNoZVtsb2NhbGVdID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy9kYXRlLXBpY2tlci9ubHMvJHtsb2NhbGV9Lmpzb25gKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUcmFuc2xhdGlvbnMgZm9yIFwiJHtsb2NhbGV9XCIgbm90IGZvdW5kIG9yIGludmFsaWQsIGZhbGxpbmcgYmFjayB0byBlbmdsaXNoYCk7XG4gICAgICByZXR1cm4gZ2V0TG9jYWxlRGF0YShcImVuXCIpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Q2FjaGVbbG9jYWxlXTtcbiAgdHJhbnNsYXRpb25DYWNoZVtsb2NhbGVdID0gZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqICBNYXBzIHZhbHVlIHRvIHZhbHVlQXNEYXRlXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlQXNEYXRlUmFuZ2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLm1hcCgodiwgaW5kZXgpID0+IGRhdGVGcm9tSVNPKHYsIGluZGV4ID09PSAxKSk7XG59XG5cbmV4cG9ydCB7IGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nIGFzIGEsIGRhdGVUb0lTTyBhcyBiLCBkYXRlRnJvbUlTTyBhcyBjLCBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nIGFzIGQsIGdldExvY2FsZURhdGEgYXMgZSwgZGF0ZUZyb21SYW5nZSBhcyBmLCBnZXRWYWx1ZUFzRGF0ZVJhbmdlIGFzIGcsIGdldERheXNEaWZmIGFzIGgsIGluUmFuZ2UgYXMgaSwgc2FtZURhdGUgYXMgaiwgZ2V0T3JkZXIgYXMgaywgZm9ybWF0Q2FsZW5kYXJZZWFyIGFzIGwsIHBhcnNlQ2FsZW5kYXJZZWFyIGFzIG0sIG5leHRNb250aCBhcyBuLCBwcmV2TW9udGggYXMgcCwgc2V0RW5kT2ZEYXkgYXMgcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9