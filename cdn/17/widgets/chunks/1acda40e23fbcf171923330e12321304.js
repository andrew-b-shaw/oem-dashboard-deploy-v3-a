"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-date-picker_4_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-date-picker_4.entry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-date-picker_4.entry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_date_picker": () => (/* binding */ DatePicker),
/* harmony export */   "calcite_date_picker_day": () => (/* binding */ DatePickerDay),
/* harmony export */   "calcite_date_picker_month": () => (/* binding */ DatePickerMonth),
/* harmony export */   "calcite_date_picker_month_header": () => (/* binding */ DatePickerMonthHeader)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-00851404.js */ "./node_modules/@esri/calcite-components/dist/esm/utils-00851404.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _Heading_cc52352f_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Heading-cc52352f.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */













const HEADING_LEVEL = 2;
const DATE_PICKER_FORMAT_OPTIONS = { dateStyle: "full" };

const datePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1);vertical-align:top}:host([scale=s]){max-inline-size:216px}:host([scale=m]){max-inline-size:286px}:host([scale=l]){max-inline-size:398px}";

const DatePicker = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDatePickerChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDatePickerChange", 6);
    this.calciteDatePickerRangeChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDatePickerRangeChange", 6);
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
          const startDiff = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, start);
          const endDiff = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, end);
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
      const isoDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(date);
      if (!this.range && isoDate === (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.valueAsDate)) {
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
            const startDiff = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, start);
            const endDiff = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.h)(date, end);
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
      this.minAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(min);
    }
  }
  onMaxChanged(max) {
    if (max) {
      this.maxAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(max);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    if (Array.isArray(this.value)) {
      this.valueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.value);
    }
    else if (this.value) {
      this.valueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.value);
    }
    if (this.min) {
      this.minAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.min);
    }
    if (this.max) {
      this.maxAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.max);
    }
  }
  disconnectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await this.loadLocaleData();
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  render() {
    const date = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.range && Array.isArray(this.valueAsDate) ? this.valueAsDate[0] : this.valueAsDate, this.minAsDate, this.maxAsDate);
    let activeDate = this.getActiveDate(date, this.minAsDate, this.maxAsDate);
    const endDate = this.range && Array.isArray(this.valueAsDate)
      ? (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.valueAsDate[1], this.minAsDate, this.maxAsDate)
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.reset, onKeyDown: this.keyDownHandler }, this.renderCalendar(activeDate, maxDate, minDate, date, endDate)));
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  valueHandler(value) {
    if (Array.isArray(value)) {
      this.valueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.g)(value);
    }
    else if (value) {
      this.valueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(value);
    }
  }
  async loadLocaleData() {
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
    this.localeData = await (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.effectiveLocale);
    this.dateTimeFormat = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.b)(this.effectiveLocale, DATE_PICKER_FORMAT_OPTIONS);
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
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker-month-header", { activeDate: activeDate, headingLevel: this.headingLevel || HEADING_LEVEL, localeData: this.localeData, max: maxDate, messages: this.messages, min: minDate, onCalciteInternalDatePickerSelect: this.monthHeaderSelectChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date || new Date() }),
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker-month", { activeDate: activeDate, dateTimeFormat: this.dateTimeFormat, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteInternalDatePickerActiveDateChange: this.monthActiveDateChange, onCalciteInternalDatePickerHover: this.monthHoverChange, onCalciteInternalDatePickerMouseOut: this.monthMouseOutChange, onCalciteInternalDatePickerSelect: this.monthDateChange, scale: this.scale, selectedDate: this.activeRange === "end" ? endDate : date, startDate: this.range ? date : undefined })
    ]);
  }
  getEndDate() {
    return (Array.isArray(this.valueAsDate) && this.valueAsDate[1]) || undefined;
  }
  setEndDate(date) {
    const startDate = this.getStartDate();
    const newEndDate = date ? (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.s)(date) : date;
    this.value = [(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(startDate), (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(date)];
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
    this.value = [(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(date), (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(endDate)];
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
    return (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.activeDate, min, max) || value || (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(new Date(), min, max);
  }
  getActiveEndDate(value, min, max) {
    return ((0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.activeEndDate, min, max) || value || (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(new Date(), min, max));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDaySelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDaySelect", 6);
    this.calciteInternalDayHover = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDayHover", 6);
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
      if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_7__.i)(event.key)) {
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
    this.parentDatePickerEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.el, "calcite-date-picker");
  }
  render() {
    const dayId = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.value).replaceAll("-", "");
    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;
      _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
        useGrouping: false,
        ...(numberingSystem && { numberingSystem }),
        ...(locale && { locale })
      };
    }
    const formattedDay = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(String(this.day));
    const dir = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_5__.b)(this.el);
    const dayLabel = this.dateTimeFormat.format(this.value);
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-disabled": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_5__.t)(this.disabled), "aria-label": dayLabel, "aria-selected": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_5__.t)(this.active), id: dayId, onClick: this.onClick, onKeyDown: this.keyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": "true", class: { "day-v-wrapper": true, [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_8__.C.rtl]: dir === "rtl" } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "day-wrapper" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "day" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "text" }, formattedDay))))));
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.isTabbable);
  }
  isTabbable() {
    return this.active;
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DatePickerDay.style = datePickerDayCss;

const datePickerMonthCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}.calendar{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-3);inline-size:14.2857142857%}.day{display:flex;min-inline-size:0px;justify-content:center;inline-size:14.2857142857%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:flex;flex-direction:row;padding-block:0px;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}";

const DAYS_PER_WEEK = 7;
const DAYS_MAXIMUM_INDEX = 6;
const DatePickerMonth = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalDatePickerSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerSelect", 6);
    this.calciteInternalDatePickerHover = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerHover", 6);
    this.calciteInternalDatePickerActiveDateChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerActiveDateChange", 6);
    this.calciteInternalDatePickerMouseOut = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerMouseOut", 6);
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
        const active = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.activeDate);
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onFocusOut: this.disableActiveFocus, onKeyDown: this.keyDownHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "calendar", role: "grid" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "week-headers", role: "row" }, adjustedWeekDays.map((weekday) => ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "week-days", role: "row" }, days.map((day) => this.renderDateDay(day))))))));
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
    this.calciteInternalDatePickerActiveDateChange.emit((0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(nextDate, this.min, this.max));
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
    this.calciteInternalDatePickerActiveDateChange.emit((0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(nextDate, this.min, this.max));
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
    return !!((0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.selectedDate) ||
      (this.startDate && (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.startDate)) ||
      (this.endDate && (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.endDate)));
  }
  /**
   * Determine if the date is the start of the date range
   *
   * @param date
   */
  isStartOfRange(date) {
    return !!(this.startDate &&
      !(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.endDate) &&
      (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, date) &&
      !this.isEndOfRange(date));
  }
  isEndOfRange(date) {
    return !!((this.endDate && !(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.endDate) && (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.endDate, date)) ||
      (!this.endDate &&
        this.hoverRange &&
        (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.hoverRange.end) &&
        (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.hoverRange.end)));
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
      (!this.endDate && this.hoverRange && (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.hoverRange?.end, this.startDate));
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "day", key: date.toDateString(), role: "gridcell" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker-day", { active: active, class: {
        "hover--inside-range": this.startDate && isHoverInRange,
        "hover--outside-range": this.startDate && !isHoverInRange,
        "focused--start": isFocusedOnStart,
        "focused--end": !isFocusedOnStart
      }, currentMonth: currentMonth, dateTimeFormat: this.dateTimeFormat, day: day, disabled: !(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.i)(date, this.min, this.max), endOfRange: this.isEndOfRange(date), highlighted: this.betweenSelectedRange(date), onCalciteDaySelect: this.daySelect, onCalciteInternalDayHover: this.dayHover, range: !!this.startDate && !!this.endDate && !(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.startDate, this.endDate), rangeEdge: dayInWeek === 0 ? "start" : dayInWeek === 6 ? "end" : undefined, rangeHover: this.isRangeHover(date), scale: this.scale, selected: this.isSelected(date), startOfRange: this.isStartOfRange(date), value: date,
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
      ((!isStart && date > this.startDate && (date < end || (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, end))) ||
        (isStart && date < this.endDate && (date > start || (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, start))));
    const cond2 = !insideRange &&
      ((!isStart && date >= this.endDate && (date < end || (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, end))) ||
        (isStart &&
          ((this.startDate && date < this.startDate) ||
            (this.endDate && (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, this.startDate))) &&
          ((start && date > start) || (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.j)(date, start))));
    return cond1 || cond2;
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalDatePickerSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDatePickerSelect", 6);
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
      if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_7__.i)(event.key)) {
        this.prevMonthClick(event);
      }
    };
    this.nextMonthClick = (event) => {
      this.handleArrowClick(event, this.nextMonthDate);
    };
    this.nextMonthKeydown = (event) => {
      if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_7__.i)(event.key)) {
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
    this.parentDatePickerEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.el, "calcite-date-picker");
  }
  connectedCallback() {
    this.setNextPrevMonthDates();
  }
  render() {
    return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.header }, this.renderContent());
  }
  renderContent() {
    const { messages, localeData, activeDate } = this;
    if (!activeDate || !localeData) {
      return null;
    }
    if (this.parentDatePickerEl) {
      const { numberingSystem, lang: locale } = this.parentDatePickerEl;
      _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
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
    const order = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.k)(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const suffix = localeData.year?.suffix;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-disabled": `${this.prevMonthDate.getMonth() === activeMonth}`, "aria-label": messages.prevMonth, class: CSS.chevron, href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { "flip-rtl": true, icon: ICON.chevronLeft, scale: iconScale })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { text: true, [CSS.textReverse]: reverse } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_cc52352f_js__WEBPACK_IMPORTED_MODULE_9__.H, { class: CSS.month, level: this.headingLevel }, localizedMonth), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.yearWrap }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-label": messages.year, class: {
        year: true,
        [CSS.yearSuffix]: !!suffix
      }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: this.onYearChange, onInput: this.onYearInput, onKeyDown: this.onYearKey, pattern: "\\d*", type: "text", value: localizedYear,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.yearInput = el) }), suffix && (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.suffix }, suffix))), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-disabled": `${this.nextMonthDate.getMonth() === activeMonth}`, "aria-label": messages.nextMonth, class: CSS.chevron, href: "#", onClick: this.nextMonthClick, onKeyDown: this.nextMonthKeydown, role: "button", tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { "flip-rtl": true, icon: ICON.chevronRight, scale: iconScale }))));
  }
  setNextPrevMonthDates() {
    if (!this.activeDate) {
      return;
    }
    this.nextMonthDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.n)(this.activeDate), this.min, this.max);
    this.prevMonthDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.activeDate), this.min, this.max);
  }
  formatCalendarYear(year) {
    return _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.l)(year, this.localeData)}`);
  }
  parseCalendarYear(year) {
    return _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.localize(`${(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.m)(Number(_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.delocalize(year)), this.localeData)}`);
  }
  getInRangeDate({ localizedYear, offset = 0 }) {
    const { min, max, activeDate } = this;
    const parsedYear = Number(_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.delocalize(localizedYear));
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + offset;
    const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      return (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)(nextDate, min, max);
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "min": ["setNextPrevMonthDates"],
    "max": ["setNextPrevMonthDates"],
    "activeDate": ["setNextPrevMonthDates"]
  }; }
};
DatePickerMonthHeader.style = datePickerMonthHeaderCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  // prevent click from moving focus on host
  event.preventDefault();
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
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
    component.el.click = interceptedClick;
    component.el.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
    nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
    return;
  }
  component.el.click = HTMLElement.prototype.click;
  component.el.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
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
  return getMessageBundle((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
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

/***/ "./node_modules/@esri/calcite-components/dist/esm/utils-00851404.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/utils-00851404.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
  const values = string.split(separator).map((part) => _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.n.delocalize(part));
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
  const locale = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang);
  if (translationCache[locale]) {
    return translationCache[locale];
  }
  if (!requestCache[locale]) {
    requestCache[locale] = fetch((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/date-picker/nls/${locale}.json`))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMWFjZGE0MGUyM2ZiY2YxNzE5MjMzMzBlMTIzMjEzMDQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMscURBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRIO0FBQzhLO0FBQ3RMO0FBQ3VCO0FBQ2hCO0FBQ1I7QUFDNUM7QUFDZDtBQUNFO0FBQ047QUFDcEI7QUFDTDs7QUFFNUI7QUFDQSxxQ0FBcUM7O0FBRXJDLHFDQUFxQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLE1BQU0sa0JBQWtCLHFCQUFxQixpQkFBaUIsaUJBQWlCLGtCQUFrQixpQkFBaUIsbUJBQW1CLHdDQUF3QyxnREFBZ0QsbUJBQW1CLGlCQUFpQixzQkFBc0IsaUJBQWlCLHNCQUFzQixp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Ozs7Ozs7OztBQ3pGbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RDtBQUNtQzs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0QjtBQUNBLFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsdUJBQXVCO0FBQ2pDO0FBQ0EsdURBQXVELDZEQUFnQztBQUN2RjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxREFBWSw2QkFBNkIsT0FBTztBQUNqRjtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vSGVhZGluZy1jYzUyMzUyZi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWRhdGUtcGlja2VyXzQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtYWYxNDZmZDUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdDluLWEzZTEyNDIyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3V0aWxzLTAwODUxNDA0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5cbmZ1bmN0aW9uIGNvbnN0cmFpbkhlYWRpbmdMZXZlbChsZXZlbCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5jZWlsKGxldmVsKSwgMSksIDYpO1xufVxuY29uc3QgSGVhZGluZyA9IChwcm9wcywgY2hpbGRyZW4pID0+IHtcbiAgY29uc3QgSGVhZGluZ1RhZyA9IHByb3BzLmxldmVsID8gYGgke3Byb3BzLmxldmVsfWAgOiBcImRpdlwiO1xuICBkZWxldGUgcHJvcHMubGV2ZWw7XG4gIHJldHVybiBoKEhlYWRpbmdUYWcsIHsgLi4ucHJvcHMgfSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IHsgSGVhZGluZyBhcyBILCBjb25zdHJhaW5IZWFkaW5nTGV2ZWwgYXMgYyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQsIEYgYXMgRnJhZ21lbnQgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGggYXMgZ2V0RGF5c0RpZmYsIGIgYXMgZGF0ZVRvSVNPLCBjIGFzIGRhdGVGcm9tSVNPLCBnIGFzIGdldFZhbHVlQXNEYXRlUmFuZ2UsIGYgYXMgZGF0ZUZyb21SYW5nZSwgZSBhcyBnZXRMb2NhbGVEYXRhLCBzIGFzIHNldEVuZE9mRGF5LCBqIGFzIHNhbWVEYXRlLCBpIGFzIGluUmFuZ2UsIGsgYXMgZ2V0T3JkZXIsIG4gYXMgbmV4dE1vbnRoLCBwIGFzIHByZXZNb250aCwgbCBhcyBmb3JtYXRDYWxlbmRhclllYXIsIG0gYXMgcGFyc2VDYWxlbmRhclllYXIgfSBmcm9tICcuL3V0aWxzLTAwODUxNDA0LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCwgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGIgYXMgZ2V0RGF0ZVRpbWVGb3JtYXQgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLWEzZTEyNDIyLmpzJztcbmltcG9ydCB7IGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5LCBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LTMzODlkODcwLmpzJztcbmltcG9ydCB7IEMgYXMgQ1NTX1VUSUxJVFkgfSBmcm9tICcuL3Jlc291cmNlcy1kMDhhNjczNy5qcyc7XG5pbXBvcnQgeyBIIGFzIEhlYWRpbmcgfSBmcm9tICcuL0hlYWRpbmctY2M1MjM1MmYuanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy1jMjBlYzJkZC5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5cbmNvbnN0IEhFQURJTkdfTEVWRUwgPSAyO1xuY29uc3QgREFURV9QSUNLRVJfRk9STUFUX09QVElPTlMgPSB7IGRhdGVTdHlsZTogXCJmdWxsXCIgfTtcblxuY29uc3QgZGF0ZVBpY2tlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6dmlzaWJsZTtib3JkZXItcmFkaXVzOjBweDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7dmVydGljYWwtYWxpZ246dG9wfTpob3N0KFtzY2FsZT1zXSl7bWF4LWlubGluZS1zaXplOjIxNnB4fTpob3N0KFtzY2FsZT1tXSl7bWF4LWlubGluZS1zaXplOjI4NnB4fTpob3N0KFtzY2FsZT1sXSl7bWF4LWlubGluZS1zaXplOjM5OHB4fVwiO1xuXG5jb25zdCBEYXRlUGlja2VyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRGF0ZVBpY2tlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2VcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5tb250aEhlYWRlclNlbGVjdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVSYW5nZSA9PT0gXCJlbmRcIikge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUgPSBkYXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5tb250aEFjdGl2ZURhdGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShldmVudC5kZXRhaWwpO1xuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlID0gZGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubW9udGhIb3ZlckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB2YWx1ZUFzRGF0ZSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHN0YXJ0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZUFzRGF0ZSkgJiYgdmFsdWVBc0RhdGVbMF07XG4gICAgICBjb25zdCBlbmQgPSBBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKSAmJiB2YWx1ZUFzRGF0ZVsxXTtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShldmVudC5kZXRhaWwpO1xuICAgICAgdGhpcy5ob3ZlclJhbmdlID0ge1xuICAgICAgICBmb2N1c2VkOiB0aGlzLmFjdGl2ZVJhbmdlIHx8IFwic3RhcnRcIixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhpcy5wcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZCkge1xuICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnREaWZmID0gZ2V0RGF5c0RpZmYoZGF0ZSwgc3RhcnQpO1xuICAgICAgICAgIGNvbnN0IGVuZERpZmYgPSBnZXREYXlzRGlmZihkYXRlLCBlbmQpO1xuICAgICAgICAgIGlmIChlbmREaWZmID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZm9jdXNlZCA9IFwiZW5kXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RGlmZiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5zdGFydCA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZm9jdXNlZCA9IFwic3RhcnRcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoc3RhcnREaWZmID4gZW5kRGlmZikge1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLnN0YXJ0ID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJzdGFydFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5lbmQgPSBkYXRlO1xuICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmZvY3VzZWQgPSBcImVuZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgIGlmIChkYXRlIDwgc3RhcnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZvY3VzZWQ6IFwic3RhcnRcIixcbiAgICAgICAgICAgICAgICBzdGFydDogZGF0ZSxcbiAgICAgICAgICAgICAgICBlbmQ6IHN0YXJ0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlclJhbmdlLmVuZCA9IGRhdGU7XG4gICAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJlbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWVuZCkge1xuICAgICAgICAgIGlmIChkYXRlIDwgc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZSA9IHtcbiAgICAgICAgICAgICAgZm9jdXNlZDogXCJzdGFydFwiLFxuICAgICAgICAgICAgICBzdGFydDogZGF0ZSxcbiAgICAgICAgICAgICAgZW5kOiBzdGFydFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyUmFuZ2UuZW5kID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSYW5nZS5mb2N1c2VkID0gXCJlbmRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMubW9udGhNb3VzZU91dENoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmhvdmVyUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5ob3ZlclJhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzZXQgYWN0aXZlIGRhdGUgYW5kIGNsb3NlXG4gICAgICovXG4gICAgdGhpcy5yZXNldCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWVBc0RhdGUgfSA9IHRoaXM7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpICYmXG4gICAgICAgIHZhbHVlQXNEYXRlICYmXG4gICAgICAgIHZhbHVlQXNEYXRlPy5nZXRUaW1lKCkgIT09IHRoaXMuYWN0aXZlRGF0ZT8uZ2V0VGltZSgpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKHZhbHVlQXNEYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKSkge1xuICAgICAgICBpZiAodmFsdWVBc0RhdGVbMF0gJiZcbiAgICAgICAgICB2YWx1ZUFzRGF0ZVswXT8uZ2V0VGltZSgpICE9PVxuICAgICAgICAgICAgKHRoaXMuYWN0aXZlU3RhcnREYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZT8uZ2V0VGltZSgpKSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gbmV3IERhdGUodmFsdWVBc0RhdGVbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZUFzRGF0ZVsxXSAmJlxuICAgICAgICAgIHZhbHVlQXNEYXRlWzFdPy5nZXRUaW1lKCkgIT09XG4gICAgICAgICAgICAodGhpcy5hY3RpdmVTdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlICYmIHRoaXMuYWN0aXZlRW5kRGF0ZT8uZ2V0VGltZSgpKSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IG5ldyBEYXRlKHZhbHVlQXNEYXRlWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLm1vbnRoRGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRldGFpbCk7XG4gICAgICBjb25zdCBpc29EYXRlID0gZGF0ZVRvSVNPKGRhdGUpO1xuICAgICAgaWYgKCF0aGlzLnJhbmdlICYmIGlzb0RhdGUgPT09IGRhdGVUb0lTTyh0aGlzLnZhbHVlQXNEYXRlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGlzb0RhdGUgfHwgXCJcIjtcbiAgICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IGRhdGUgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZSB8fCBudWxsO1xuICAgICAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5nZXRFbmREYXRlKCk7XG4gICAgICBpZiAoIXN0YXJ0IHx8ICghZW5kICYmIGRhdGUgPCBzdGFydCkpIHtcbiAgICAgICAgaWYgKHN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5zZXRFbmREYXRlKG5ldyBEYXRlKHN0YXJ0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgPT0gXCJlbmRcIikge1xuICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWVuZCkge1xuICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlID09IFwiZW5kXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGlmZiA9IGdldERheXNEaWZmKGRhdGUsIHN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZERpZmYgPSBnZXREYXlzRGlmZihkYXRlLCBlbmQpO1xuICAgICAgICAgICAgaWYgKGVuZERpZmYgPT09IDAgfHwgc3RhcnREaWZmIDwgMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RGlmZiA9PT0gMCB8fCBlbmREaWZmIDwgMCkge1xuICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGFydERpZmYgPCBlbmREaWZmKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4QXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5wcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZVN0YXJ0RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmVuZEFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdmVyUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVEYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRBc0RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgYWN0aXZlRGF0ZVdhdGNoZXIobmV3QWN0aXZlRGF0ZSkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiKSB7XG4gICAgICB0aGlzLmFjdGl2ZUVuZERhdGUgPSBuZXdBY3RpdmVEYXRlO1xuICAgIH1cbiAgfVxuICB2YWx1ZUFzRGF0ZVdhdGNoZXIobmV3VmFsdWVBc0RhdGUpIHtcbiAgICBpZiAodGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KG5ld1ZhbHVlQXNEYXRlKSkge1xuICAgICAgY29uc3QgeyBhY3RpdmVTdGFydERhdGUsIGFjdGl2ZUVuZERhdGUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBuZXdBY3RpdmVTdGFydERhdGUgPSBuZXdWYWx1ZUFzRGF0ZVswXTtcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUVuZERhdGUgPSBuZXdWYWx1ZUFzRGF0ZVsxXTtcbiAgICAgIHRoaXMuYWN0aXZlU3RhcnREYXRlID0gYWN0aXZlU3RhcnREYXRlICE9PSBuZXdBY3RpdmVTdGFydERhdGUgJiYgbmV3QWN0aXZlU3RhcnREYXRlO1xuICAgICAgdGhpcy5hY3RpdmVFbmREYXRlID0gYWN0aXZlRW5kRGF0ZSAhPT0gbmV3QWN0aXZlRW5kRGF0ZSAmJiBuZXdBY3RpdmVFbmREYXRlO1xuICAgIH1cbiAgICBlbHNlIGlmIChuZXdWYWx1ZUFzRGF0ZSAmJiBuZXdWYWx1ZUFzRGF0ZSAhPT0gdGhpcy5hY3RpdmVEYXRlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXdWYWx1ZUFzRGF0ZTtcbiAgICB9XG4gIH1cbiAgb25NaW5DaGFuZ2VkKG1pbikge1xuICAgIGlmIChtaW4pIHtcbiAgICAgIHRoaXMubWluQXNEYXRlID0gZGF0ZUZyb21JU08obWluKTtcbiAgICB9XG4gIH1cbiAgb25NYXhDaGFuZ2VkKG1heCkge1xuICAgIGlmIChtYXgpIHtcbiAgICAgIHRoaXMubWF4QXNEYXRlID0gZGF0ZUZyb21JU08obWF4KTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZGF0ZUZyb21JU08odGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1pbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1heCk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgdGhpcy5sb2FkTG9jYWxlRGF0YSgpO1xuICAgIHRoaXMub25NaW5DaGFuZ2VkKHRoaXMubWluKTtcbiAgICB0aGlzLm9uTWF4Q2hhbmdlZCh0aGlzLm1heCk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tUmFuZ2UodGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpID8gdGhpcy52YWx1ZUFzRGF0ZVswXSA6IHRoaXMudmFsdWVBc0RhdGUsIHRoaXMubWluQXNEYXRlLCB0aGlzLm1heEFzRGF0ZSk7XG4gICAgbGV0IGFjdGl2ZURhdGUgPSB0aGlzLmdldEFjdGl2ZURhdGUoZGF0ZSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKTtcbiAgICBjb25zdCBlbmREYXRlID0gdGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHRoaXMudmFsdWVBc0RhdGUpXG4gICAgICA/IGRhdGVGcm9tUmFuZ2UodGhpcy52YWx1ZUFzRGF0ZVsxXSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKVxuICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGFjdGl2ZUVuZERhdGUgPSB0aGlzLmdldEFjdGl2ZUVuZERhdGUoZW5kRGF0ZSwgdGhpcy5taW5Bc0RhdGUsIHRoaXMubWF4QXNEYXRlKTtcbiAgICBpZiAoKHRoaXMuYWN0aXZlUmFuZ2UgPT09IFwiZW5kXCIgfHxcbiAgICAgICh0aGlzLmhvdmVyUmFuZ2U/LmZvY3VzZWQgPT09IFwiZW5kXCIgJiYgKCF0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkIHx8IGVuZERhdGUpKSkgJiZcbiAgICAgIGFjdGl2ZUVuZERhdGUpIHtcbiAgICAgIGFjdGl2ZURhdGUgPSBhY3RpdmVFbmREYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlKSB7XG4gICAgICBhY3RpdmVEYXRlID0gdGhpcy5tb3N0UmVjZW50UmFuZ2VWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMucmFuZ2UgJiYgdGhpcy5hY3RpdmVSYW5nZVxuICAgICAgPyB0aGlzLmFjdGl2ZVJhbmdlID09PSBcInN0YXJ0XCJcbiAgICAgICAgPyB0aGlzLm1pbkFzRGF0ZVxuICAgICAgICA6IGRhdGUgfHwgdGhpcy5taW5Bc0RhdGVcbiAgICAgIDogdGhpcy5taW5Bc0RhdGU7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMucmFuZ2UgJiYgdGhpcy5hY3RpdmVSYW5nZVxuICAgICAgPyB0aGlzLmFjdGl2ZVJhbmdlID09PSBcInN0YXJ0XCJcbiAgICAgICAgPyBlbmREYXRlIHx8IHRoaXMubWF4QXNEYXRlXG4gICAgICAgIDogdGhpcy5tYXhBc0RhdGVcbiAgICAgIDogdGhpcy5tYXhBc0RhdGU7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLnJlc2V0LCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIgfSwgdGhpcy5yZW5kZXJDYWxlbmRhcihhY3RpdmVEYXRlLCBtYXhEYXRlLCBtaW5EYXRlLCBkYXRlLCBlbmREYXRlKSkpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZ2V0VmFsdWVBc0RhdGVSYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZGF0ZUZyb21JU08odmFsdWUpO1xuICAgIH1cbiAgfVxuICBhc3luYyBsb2FkTG9jYWxlRGF0YSgpIHtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSBhd2FpdCBnZXRMb2NhbGVEYXRhKHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gZ2V0RGF0ZVRpbWVGb3JtYXQodGhpcy5lZmZlY3RpdmVMb2NhbGUsIERBVEVfUElDS0VSX0ZPUk1BVF9PUFRJT05TKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVyIGNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyIGFuZCBjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXG4gICAqXG4gICAqIEBwYXJhbSBhY3RpdmVEYXRlXG4gICAqIEBwYXJhbSBtYXhEYXRlXG4gICAqIEBwYXJhbSBtaW5EYXRlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEBwYXJhbSBlbmREYXRlXG4gICAqL1xuICByZW5kZXJDYWxlbmRhcihhY3RpdmVEYXRlLCBtYXhEYXRlLCBtaW5EYXRlLCBkYXRlLCBlbmREYXRlKSB7XG4gICAgcmV0dXJuICh0aGlzLmxvY2FsZURhdGEgJiYgW1xuICAgICAgaChcImNhbGNpdGUtZGF0ZS1waWNrZXItbW9udGgtaGVhZGVyXCIsIHsgYWN0aXZlRGF0ZTogYWN0aXZlRGF0ZSwgaGVhZGluZ0xldmVsOiB0aGlzLmhlYWRpbmdMZXZlbCB8fCBIRUFESU5HX0xFVkVMLCBsb2NhbGVEYXRhOiB0aGlzLmxvY2FsZURhdGEsIG1heDogbWF4RGF0ZSwgbWVzc2FnZXM6IHRoaXMubWVzc2FnZXMsIG1pbjogbWluRGF0ZSwgb25DYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0OiB0aGlzLm1vbnRoSGVhZGVyU2VsZWN0Q2hhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWREYXRlOiB0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiID8gZW5kRGF0ZSA6IGRhdGUgfHwgbmV3IERhdGUoKSB9KSxcbiAgICAgIGgoXCJjYWxjaXRlLWRhdGUtcGlja2VyLW1vbnRoXCIsIHsgYWN0aXZlRGF0ZTogYWN0aXZlRGF0ZSwgZGF0ZVRpbWVGb3JtYXQ6IHRoaXMuZGF0ZVRpbWVGb3JtYXQsIGVuZERhdGU6IHRoaXMucmFuZ2UgPyBlbmREYXRlIDogdW5kZWZpbmVkLCBob3ZlclJhbmdlOiB0aGlzLmhvdmVyUmFuZ2UsIGxvY2FsZURhdGE6IHRoaXMubG9jYWxlRGF0YSwgbWF4OiBtYXhEYXRlLCBtaW46IG1pbkRhdGUsIG9uQ2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlckFjdGl2ZURhdGVDaGFuZ2U6IHRoaXMubW9udGhBY3RpdmVEYXRlQ2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJIb3ZlcjogdGhpcy5tb250aEhvdmVyQ2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dDogdGhpcy5tb250aE1vdXNlT3V0Q2hhbmdlLCBvbkNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3Q6IHRoaXMubW9udGhEYXRlQ2hhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgc2VsZWN0ZWREYXRlOiB0aGlzLmFjdGl2ZVJhbmdlID09PSBcImVuZFwiID8gZW5kRGF0ZSA6IGRhdGUsIHN0YXJ0RGF0ZTogdGhpcy5yYW5nZSA/IGRhdGUgOiB1bmRlZmluZWQgfSlcbiAgICBdKTtcbiAgfVxuICBnZXRFbmREYXRlKCkge1xuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlQXNEYXRlKSAmJiB0aGlzLnZhbHVlQXNEYXRlWzFdKSB8fCB1bmRlZmluZWQ7XG4gIH1cbiAgc2V0RW5kRGF0ZShkYXRlKSB7XG4gICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5nZXRTdGFydERhdGUoKTtcbiAgICBjb25zdCBuZXdFbmREYXRlID0gZGF0ZSA/IHNldEVuZE9mRGF5KGRhdGUpIDogZGF0ZTtcbiAgICB0aGlzLnZhbHVlID0gW2RhdGVUb0lTTyhzdGFydERhdGUpLCBkYXRlVG9JU08oZGF0ZSldO1xuICAgIHRoaXMudmFsdWVBc0RhdGUgPSBbc3RhcnREYXRlLCBkYXRlXTtcbiAgICB0aGlzLm1vc3RSZWNlbnRSYW5nZVZhbHVlID0gbmV3RW5kRGF0ZTtcbiAgICB0aGlzLmNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2UuZW1pdCgpO1xuICAgIHRoaXMuYWN0aXZlRW5kRGF0ZSA9IGRhdGUgfHwgbnVsbDtcbiAgfVxuICBnZXRTdGFydERhdGUoKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgJiYgdGhpcy52YWx1ZUFzRGF0ZVswXTtcbiAgfVxuICBzZXRTdGFydERhdGUoZGF0ZSkge1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLmdldEVuZERhdGUoKTtcbiAgICB0aGlzLnZhbHVlID0gW2RhdGVUb0lTTyhkYXRlKSwgZGF0ZVRvSVNPKGVuZERhdGUpXTtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gW2RhdGUsIGVuZERhdGVdO1xuICAgIHRoaXMubW9zdFJlY2VudFJhbmdlVmFsdWUgPSBkYXRlO1xuICAgIHRoaXMuY2FsY2l0ZURhdGVQaWNrZXJSYW5nZUNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5hY3RpdmVTdGFydERhdGUgPSBkYXRlIHx8IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbiBhY3RpdmUgZGF0ZSB1c2luZyB0aGUgdmFsdWUsIG9yIGN1cnJlbnQgZGF0ZSBhcyBkZWZhdWx0XG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gbWluXG4gICAqIEBwYXJhbSBtYXhcbiAgICovXG4gIGdldEFjdGl2ZURhdGUodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIGRhdGVGcm9tUmFuZ2UodGhpcy5hY3RpdmVEYXRlLCBtaW4sIG1heCkgfHwgdmFsdWUgfHwgZGF0ZUZyb21SYW5nZShuZXcgRGF0ZSgpLCBtaW4sIG1heCk7XG4gIH1cbiAgZ2V0QWN0aXZlRW5kRGF0ZSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gKGRhdGVGcm9tUmFuZ2UodGhpcy5hY3RpdmVFbmREYXRlLCBtaW4sIG1heCkgfHwgdmFsdWUgfHwgZGF0ZUZyb21SYW5nZShuZXcgRGF0ZSgpLCBtaW4sIG1heCkpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJhY3RpdmVEYXRlXCI6IFtcImFjdGl2ZURhdGVXYXRjaGVyXCJdLFxuICAgIFwidmFsdWVBc0RhdGVcIjogW1widmFsdWVBc0RhdGVXYXRjaGVyXCJdLFxuICAgIFwibWluXCI6IFtcIm9uTWluQ2hhbmdlZFwiXSxcbiAgICBcIm1heFwiOiBbXCJvbk1heENoYW5nZWRcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCIsIFwibG9hZExvY2FsZURhdGFcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUhhbmRsZXJcIl1cbiAgfTsgfVxufTtcbkRhdGVQaWNrZXIuc3R5bGUgPSBkYXRlUGlja2VyQ3NzO1xuXG5jb25zdCBkYXRlUGlja2VyRGF5Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmRheS12LXdyYXBwZXJ7ZmxleDoxIDEgYXV0b30uZGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXJ9LmRheXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czo5OTk5cHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JhY2tncm91bmQ6bm9uZTtib3gtc2hhZG93OjAgMCAwIDJweCB0cmFuc3BhcmVudH0udGV4dHttYXJnaW4tYmxvY2s6MXB4IDBweDttYXJnaW4taW5saW5lLXN0YXJ0OjBweH06aG9zdChbc2NhbGU9c10pIC5kYXktdi13cmFwcGVye3BhZGRpbmctYmxvY2s6MC4xMjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuZGF5LXdyYXBwZXJ7cGFkZGluZzowcHh9Omhvc3QoW3NjYWxlPXNdKSAuZGF5e2Jsb2NrLXNpemU6MjdweDtpbmxpbmUtc2l6ZToyN3B4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPW1dKSAuZGF5LXYtd3JhcHBlcntwYWRkaW5nLWJsb2NrOjAuMjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuZGF5LXdyYXBwZXJ7cGFkZGluZy1pbmxpbmU6MC4yNXJlbX06aG9zdChbc2NhbGU9bV0pIC5kYXl7YmxvY2stc2l6ZTozM3B4O2lubGluZS1zaXplOjMzcHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdChbc2NhbGU9bF0pIC5kYXktdi13cmFwcGVye3BhZGRpbmctYmxvY2s6MC4yNXJlbX06aG9zdChbc2NhbGU9bF0pIC5kYXktd3JhcHBlcntwYWRkaW5nLWlubGluZTowLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmRheXtibG9jay1zaXplOjQzcHg7aW5saW5lLXNpemU6NDNweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9Omhvc3QoW2N1cnJlbnQtbW9udGhdKSAuZGF5e29wYWNpdHk6MX06aG9zdCg6aG92ZXI6bm90KFtkaXNhYmxlZF0pKSAuZGF5LDpob3N0KFthY3RpdmVdOm5vdChbcmFuZ2VdKSkgLmRheXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmZvY3VzKSw6aG9zdChbYWN0aXZlXSl7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fTpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSkpIC5kYXl7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICk7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtzZWxlY3RlZF0pIC5kYXl7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCkgIWltcG9ydGFudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkgIWltcG9ydGFudH06aG9zdChbcmFuZ2VdW3NlbGVjdGVkXSkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpfTpob3N0KFtzdGFydC1vZi1yYW5nZV0pIC5kYXktd3JhcHBlcntib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOjQwJTtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czo0MCV9Omhvc3QoW2VuZC1vZi1yYW5nZV0pIC5kYXktd3JhcHBlcntib3JkZXItc3RhcnQtZW5kLXJhZGl1czo0MCU7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjQwJX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDRweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IC00cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXSkgLmRheXtvcGFjaXR5OjF9Omhvc3QoW2VuZC1vZi1yYW5nZV0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgLTRweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbZW5kLW9mLXJhbmdlXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCA0cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2VuZC1vZi1yYW5nZV0pIC5kYXl7b3BhY2l0eToxfTpob3N0KFtzdGFydC1vZi1yYW5nZV06bm90KDpmb2N1cykpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheSw6aG9zdChbZW5kLW9mLXJhbmdlXTpub3QoOmZvY3VzKSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5e2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdOm5vdCg6Zm9jdXMpKSAuY2FsY2l0ZS0tcnRsIC5kYXksOmhvc3QoW2VuZC1vZi1yYW5nZV06bm90KDpmb2N1cykpIC5jYWxjaXRlLS1ydGwgLmRheXtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtzY2FsZT1sXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCA4cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtzY2FsZT1sXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtOHB4IDAgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtlbmQtb2YtcmFuZ2VdW3NjYWxlPWxdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IC04cHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2VuZC1vZi1yYW5nZV1bc2NhbGU9bF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgOHB4IDAgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtoaWdobGlnaHRlZF0pIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KX06aG9zdChbaGlnaGxpZ2h0ZWRdKSAuZGF5LXdyYXBwZXIgLmRheXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2hpZ2hsaWdodGVkXTpub3QoW2FjdGl2ZV06Zm9jdXMpKSAuZGF5e2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKSkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pKSAuZGF5e2JvcmRlci1yYWRpdXM6MHB4fTpob3N0KFtzdGFydC1vZi1yYW5nZV1bcmFuZ2UtaG92ZXJdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMikpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMikpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2VuZC1vZi1yYW5nZV1bcmFuZ2UtaG92ZXJdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKTtib3JkZXItcmFkaXVzOjBweDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtlbmQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKTtib3JkZXItcmFkaXVzOjBweDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KDpob3ZlcltlbmQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkpO2JvcmRlci1yYWRpdXM6MHB4Oy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoOmhvdmVyW3N0YXJ0LW9mLXJhbmdlXVtyYW5nZS1ob3Zlcl0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KDpob3ZlcltlbmQtb2YtcmFuZ2VdW3JhbmdlLWhvdmVyXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpKTtib3JkZXItcmFkaXVzOjBweDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLXN0YXJ0KSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1zdGFydCkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQpIC5kYXl7Ym9yZGVyLXJhZGl1czo5OTk5cHg7b3BhY2l0eToxO2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1lbmQpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtY3VycmVudCkpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZCkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC1jdXJyZW50KSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLWN1cnJlbnQpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tZW5kKSAuZGF5e2JvcmRlci1yYWRpdXM6OTk5OXB4O29wYWNpdHk6MTtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSl9Omhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheSw6aG9zdCg6aG92ZXJbcmFuZ2UtaG92ZXJdOm5vdChbc2VsZWN0ZWRdKS5mb2N1c2VkLS1lbmQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIC5jYWxjaXRlLS1ydGwgLmRheXtib3JkZXItcmFkaXVzOjk5OTlweDtvcGFjaXR5OjE7Ym94LXNoYWRvdzowIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW3JhbmdlLWhvdmVyXTpub3QoW3NlbGVjdGVkXSkuZm9jdXNlZC0tc3RhcnQuaG92ZXItLW91dHNpZGUtcmFuZ2UpIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMiksIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKSwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkpfTpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLWVuZC5ob3Zlci0tb3V0c2lkZS1yYW5nZSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LDpob3N0KDpob3ZlcltyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pLmZvY3VzZWQtLXN0YXJ0LmhvdmVyLS1vdXRzaWRlLXJhbmdlKSAuY2FsY2l0ZS0tcnRsIC5kYXl7Ym9yZGVyLXJhZGl1czo5OTk5cHg7b3BhY2l0eToxO2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdCg6aG92ZXJbc3RhcnQtb2YtcmFuZ2VdLmhvdmVyLS1pbnNpZGUtcmFuZ2UuZm9jdXNlZC0tZW5kKSAuZGF5LXdyYXBwZXIsOmhvc3QoOmhvdmVyW2VuZC1vZi1yYW5nZV0uaG92ZXItLWluc2lkZS1yYW5nZS5mb2N1c2VkLS1zdGFydCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtaW1hZ2U6bm9uZX06aG9zdChbc3RhcnQtb2YtcmFuZ2VdLmhvdmVyLS1pbnNpZGUtcmFuZ2UuZm9jdXNlZC0tZW5kKSAuZGF5LXdyYXBwZXIsOmhvc3QoW2VuZC1vZi1yYW5nZV0uaG92ZXItLWluc2lkZS1yYW5nZS5mb2N1c2VkLS1zdGFydCkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtNHB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9c3RhcnRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbaGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9ZW5kXSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgNHB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc2NhbGU9c11baGlnaGxpZ2h0ZWRdW3JhbmdlLWVkZ2U9ZW5kXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPWVuZF0pIDpub3QoLmNhbGNpdGUtLXJ0bCkgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1zXVtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1zdGFydF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1zXVtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1zdGFydF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVye2JveC1zaGFkb3c6aW5zZXQgLTFweCAwcHggMHB4IDBweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3NjYWxlPXNdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1zXVtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDFweCAwcHggMHB4IDBweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3NjYWxlPWxdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIC5jYWxjaXRlLS1ydGwgLmRheS13cmFwcGVyLDpob3N0KFtzY2FsZT1sXVtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1lbmRdKSAuY2FsY2l0ZS0tcnRsIC5kYXktd3JhcHBlcntib3gtc2hhZG93Omluc2V0IDZweCAwcHggMHB4IDBweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmRheS13cmFwcGVyLDpob3N0KFtyYW5nZS1ob3Zlcl1bcmFuZ2UtZWRnZT1zdGFydF0pIC5kYXktd3JhcHBlcntib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOjQ1JTtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czo0NSV9Omhvc3QoW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPWVuZF0pIC5kYXktd3JhcHBlciw6aG9zdChbcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgLmRheS13cmFwcGVye2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjQ1JTtib3JkZXItZW5kLWVuZC1yYWRpdXM6NDUlfTpob3N0KFtzY2FsZT1sXVtoaWdobGlnaHRlZF1bcmFuZ2UtZWRnZT1lbmRdKSA6bm90KC5jYWxjaXRlLS1ydGwpIC5kYXktd3JhcHBlciw6aG9zdChbc2NhbGU9bF1bcmFuZ2UtaG92ZXJdW3JhbmdlLWVkZ2U9ZW5kXSkgOm5vdCguY2FsY2l0ZS0tcnRsKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW2hpZ2hsaWdodGVkXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdW3JhbmdlLWhvdmVyXVtyYW5nZS1lZGdlPXN0YXJ0XSkgLmNhbGNpdGUtLXJ0bCAuZGF5LXdyYXBwZXJ7Ym94LXNoYWRvdzppbnNldCAtNnB4IDBweCAwcHggMHB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7Omhvc3QoOmhvdmVyOm5vdChbZGlzYWJsZWRdKSkgLmRheSw6aG9zdChbYWN0aXZlXTpub3QoW3JhbmdlXSkpIC5kYXl7Ym9yZGVyLXJhZGl1czowcHh9Omhvc3QoW3NlbGVjdGVkXSl7b3V0bGluZToycHggc29saWQgY2FudmFzVGV4dH06aG9zdChbc2VsZWN0ZWRdKSAuZGF5e2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6aGlnaGxpZ2h0fTpob3N0KFtyYW5nZV1bc2VsZWN0ZWRdKSAuZGF5LXdyYXBwZXIsOmhvc3QoW2hpZ2hsaWdodGVkXSkgLmRheS13cmFwcGVyLDpob3N0KFtyYW5nZS1ob3Zlcl06bm90KFtzZWxlY3RlZF0pKSAuZGF5LXdyYXBwZXJ7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9Omhvc3QoW3JhbmdlXVtzZWxlY3RlZF1bc3RhcnQtb2YtcmFuZ2VdKSAuZGF5LXdyYXBwZXIsOmhvc3QoW3JhbmdlXVtzZWxlY3RlZF1bZW5kLW9mLXJhbmdlXSkgLmRheS13cmFwcGVye2JhY2tncm91bmQtY29sb3I6Y2FudmFzfX1cIjtcblxuY29uc3QgRGF0ZVBpY2tlckRheSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlRGF5U2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRGF5U2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF5SG92ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERheUhvdmVyXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNpdGVEYXlTZWxlY3QuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgICF0aGlzLmRpc2FibGVkICYmIHRoaXMuY2FsY2l0ZURheVNlbGVjdC5lbWl0KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRNb250aCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgdGhpcy5yYW5nZSA9IGZhbHNlO1xuICAgIHRoaXMucmFuZ2VFZGdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRPZlJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5lbmRPZlJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5yYW5nZUhvdmVyID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcG9pbnRlck92ZXJIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF5SG92ZXIuZW1pdCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMucGFyZW50RGF0ZVBpY2tlckVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KHRoaXMuZWwsIFwiY2FsY2l0ZS1kYXRlLXBpY2tlclwiKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF5SWQgPSBkYXRlVG9JU08odGhpcy52YWx1ZSkucmVwbGFjZUFsbChcIi1cIiwgXCJcIik7XG4gICAgaWYgKHRoaXMucGFyZW50RGF0ZVBpY2tlckVsKSB7XG4gICAgICBjb25zdCB7IG51bWJlcmluZ1N5c3RlbSwgbGFuZzogbG9jYWxlIH0gPSB0aGlzLnBhcmVudERhdGVQaWNrZXJFbDtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIC4uLihudW1iZXJpbmdTeXN0ZW0gJiYgeyBudW1iZXJpbmdTeXN0ZW0gfSksXG4gICAgICAgIC4uLihsb2NhbGUgJiYgeyBsb2NhbGUgfSlcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZvcm1hdHRlZERheSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShTdHJpbmcodGhpcy5kYXkpKTtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IGRheUxhYmVsID0gdGhpcy5kYXRlVGltZUZvcm1hdC5mb3JtYXQodGhpcy52YWx1ZSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5kaXNhYmxlZCksIFwiYXJpYS1sYWJlbFwiOiBkYXlMYWJlbCwgXCJhcmlhLXNlbGVjdGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5hY3RpdmUpLCBpZDogZGF5SWQsIG9uQ2xpY2s6IHRoaXMub25DbGljaywgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogeyBcImRheS12LXdyYXBwZXJcIjogdHJ1ZSwgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIiB9IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJkYXktd3JhcHBlclwiIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiZGF5XCIgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ0ZXh0XCIgfSwgZm9ybWF0dGVkRGF5KSkpKSkpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcywgdGhpcy5pc1RhYmJhYmxlKTtcbiAgfVxuICBpc1RhYmJhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuRGF0ZVBpY2tlckRheS5zdHlsZSA9IGRhdGVQaWNrZXJEYXlDc3M7XG5cbmNvbnN0IGRhdGVQaWNrZXJNb250aENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfS5jYWxlbmRhcnttYXJnaW4tYmxvY2stZW5kOjAuMjVyZW19LndlZWstaGVhZGVyc3tkaXNwbGF5OmZsZXg7Ym9yZGVyLXdpZHRoOjBweDtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC4yNXJlbX0ud2Vlay1oZWFkZXJ7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7aW5saW5lLXNpemU6MTQuMjg1NzE0Mjg1NyV9LmRheXtkaXNwbGF5OmZsZXg7bWluLWlubGluZS1zaXplOjBweDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2lubGluZS1zaXplOjE0LjI4NTcxNDI4NTclfTpob3N0KFtzY2FsZT1zXSkgLndlZWstaGVhZGVye3BhZGRpbmctaW5saW5lOjBweDtwYWRkaW5nLWJsb2NrOjAuNXJlbSAwLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIC53ZWVrLWhlYWRlcntwYWRkaW5nLWlubGluZTowcHg7cGFkZGluZy1ibG9jazowLjc1cmVtIDFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1sXSkgLndlZWstaGVhZGVye3BhZGRpbmctaW5saW5lOjBweDtwYWRkaW5nLWJsb2NrOjFyZW0gMS4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19LndlZWstZGF5c3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjZweH0ud2Vlay1kYXlzOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH1cIjtcblxuY29uc3QgREFZU19QRVJfV0VFSyA9IDc7XG5jb25zdCBEQVlTX01BWElNVU1fSU5ERVggPSA2O1xuY29uc3QgRGF0ZVBpY2tlck1vbnRoID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VySG92ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJIb3ZlclwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJBY3RpdmVEYXRlQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyQWN0aXZlRGF0ZUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJNb3VzZU91dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlck1vdXNlT3V0XCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc1JUTCA9IHRoaXMuZWwuZGlyID09PSBcInJ0bFwiO1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cygtNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFkZERheXMoaXNSVEwgPyAtMSA6IDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFkZERheXMoNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cyhpc1JUTCA/IDEgOiAtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQYWdlVXBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkTW9udGhzKC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBhZ2VEb3duXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFkZE1vbnRocygxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZURhdGUuc2V0RGF0ZShuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSwgdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCkpO1xuICAgICAgICAgIHRoaXMuYWRkRGF5cygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiVGFiXCI6XG4gICAgICAgICAgdGhpcy5hY3RpdmVGb2N1cyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogT25jZSB1c2VyIGlzIG5vdCBpbnRlcmFjdGluZyB2aWEga2V5Ym9hcmQsXG4gICAgICogZGlzYWJsZSBhdXRvIGZvY3VzaW5nIG9mIGFjdGl2ZSBkYXRlXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlQWN0aXZlRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUZvY3VzID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLmRheUhvdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRGF0ZVBpY2tlck1vdXNlT3V0LmVtaXQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJIb3Zlci5lbWl0KHRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMuZGF5U2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJTZWxlY3QuZW1pdCh0YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5kYXRlVGltZUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuc3RhcnREYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdmVyUmFuZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcG9pbnRlck91dEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyTW91c2VPdXQuZW1pdCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBzdGFydE9mV2VlayA9IHRoaXMubG9jYWxlRGF0YS53ZWVrU3RhcnQgJSA3O1xuICAgIGNvbnN0IHsgYWJicmV2aWF0ZWQsIHNob3J0LCBuYXJyb3cgfSA9IHRoaXMubG9jYWxlRGF0YS5kYXlzO1xuICAgIGNvbnN0IHdlZWtEYXlzID0gdGhpcy5zY2FsZSA9PT0gXCJzXCIgPyBuYXJyb3cgfHwgc2hvcnQgfHwgYWJicmV2aWF0ZWQgOiBzaG9ydCB8fCBhYmJyZXZpYXRlZCB8fCBuYXJyb3c7XG4gICAgY29uc3QgYWRqdXN0ZWRXZWVrRGF5cyA9IFsuLi53ZWVrRGF5cy5zbGljZShzdGFydE9mV2VlaywgNyksIC4uLndlZWtEYXlzLnNsaWNlKDAsIHN0YXJ0T2ZXZWVrKV07XG4gICAgY29uc3QgY3VyTW9uRGF5cyA9IHRoaXMuZ2V0Q3VycmVudE1vbnRoRGF5cyhtb250aCwgeWVhcik7XG4gICAgY29uc3QgcHJldk1vbkRheXMgPSB0aGlzLmdldFByZXZpb3VzTW9udGhEYXlzKG1vbnRoLCB5ZWFyLCBzdGFydE9mV2Vlayk7XG4gICAgY29uc3QgbmV4dE1vbkRheXMgPSB0aGlzLmdldE5leHRNb250aERheXMobW9udGgsIHllYXIsIHN0YXJ0T2ZXZWVrKTtcbiAgICBsZXQgZGF5SW5XZWVrID0gMDtcbiAgICBjb25zdCBnZXREYXlJbldlZWsgPSAoKSA9PiBkYXlJbldlZWsrKyAlIDc7XG4gICAgY29uc3QgZGF5cyA9IFtcbiAgICAgIC4uLnByZXZNb25EYXlzLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBkYXksXG4gICAgICAgICAgZGF5SW5XZWVrOiBnZXREYXlJbldlZWsoKSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSlcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgLi4uY3VyTW9uRGF5cy5tYXAoKGRheSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHNhbWVEYXRlKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgIGN1cnJlbnRNb250aDogdHJ1ZSxcbiAgICAgICAgICBkYXksXG4gICAgICAgICAgZGF5SW5XZWVrOiBnZXREYXlJbldlZWsoKSxcbiAgICAgICAgICBkYXRlLFxuICAgICAgICAgIHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICAuLi5uZXh0TW9uRGF5cy5tYXAoKGRheSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIGRheUluV2VlazogZ2V0RGF5SW5XZWVrKCksXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCBkYXkpXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIF07XG4gICAgY29uc3Qgd2Vla3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpICs9IDcpIHtcbiAgICAgIHdlZWtzLnB1c2goZGF5cy5zbGljZShpLCBpICsgNykpO1xuICAgIH1cbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkZvY3VzT3V0OiB0aGlzLmRpc2FibGVBY3RpdmVGb2N1cywgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjYWxlbmRhclwiLCByb2xlOiBcImdyaWRcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwid2Vlay1oZWFkZXJzXCIsIHJvbGU6IFwicm93XCIgfSwgYWRqdXN0ZWRXZWVrRGF5cy5tYXAoKHdlZWtkYXkpID0+IChoKFwic3BhblwiLCB7IGNsYXNzOiBcIndlZWstaGVhZGVyXCIsIHJvbGU6IFwiY29sdW1uaGVhZGVyXCIgfSwgd2Vla2RheSkpKSksIHdlZWtzLm1hcCgoZGF5cykgPT4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJ3ZWVrLWRheXNcIiwgcm9sZTogXCJyb3dcIiB9LCBkYXlzLm1hcCgoZGF5KSA9PiB0aGlzLnJlbmRlckRhdGVEYXkoZGF5KSkpKSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIEFkZCBuIG1vbnRocyB0byB0aGUgY3VycmVudCBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gc3RlcFxuICAgKi9cbiAgYWRkTW9udGhzKHN0ZXApIHtcbiAgICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgbmV4dERhdGUuc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBzdGVwKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJBY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZyb21SYW5nZShuZXh0RGF0ZSwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgdGhpcy5hY3RpdmVGb2N1cyA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBuIGRheXMgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAgKlxuICAgKiBAcGFyYW0gc3RlcFxuICAgKi9cbiAgYWRkRGF5cyhzdGVwID0gMCkge1xuICAgIGNvbnN0IG5leHREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBuZXh0RGF0ZS5zZXREYXRlKHRoaXMuYWN0aXZlRGF0ZS5nZXREYXRlKCkgKyBzdGVwKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERhdGVQaWNrZXJBY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZGF0ZUZyb21SYW5nZShuZXh0RGF0ZSwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gICAgdGhpcy5hY3RpdmVGb2N1cyA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBkYXRlcyBmb3IgbGFzdCBkYXlzIG9mIHRoZSBwcmV2aW91cyBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gbW9udGhcbiAgICogQHBhcmFtIHllYXJcbiAgICogQHBhcmFtIHN0YXJ0T2ZXZWVrXG4gICAqL1xuICBnZXRQcmV2aW91c01vbnRoRGF5cyhtb250aCwgeWVhciwgc3RhcnRPZldlZWspIHtcbiAgICBjb25zdCBsYXN0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKTtcbiAgICBjb25zdCBkYXRlID0gbGFzdERhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHN0YXJ0RGF5ID0gbGFzdERhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5cyA9IFtdO1xuICAgIGlmIChzdGFydERheSA9PT0gKHN0YXJ0T2ZXZWVrICsgREFZU19NQVhJTVVNX0lOREVYKSAlIERBWVNfUEVSX1dFRUspIHtcbiAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cbiAgICBpZiAoc3RhcnREYXkgPT09IHN0YXJ0T2ZXZWVrKSB7XG4gICAgICByZXR1cm4gW2RhdGVdO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gKERBWVNfUEVSX1dFRUsgKyBzdGFydERheSAtIHN0YXJ0T2ZXZWVrKSAlIERBWVNfUEVSX1dFRUs7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBkYXlzLnB1c2goZGF0ZSAtIGkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuICAvKipcbiAgICogR2V0IGRhdGVzIGZvciB0aGUgY3VycmVudCBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gbW9udGhcbiAgICogQHBhcmFtIHllYXJcbiAgICovXG4gIGdldEN1cnJlbnRNb250aERheXMobW9udGgsIHllYXIpIHtcbiAgICBjb25zdCBudW0gPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgICBjb25zdCBkYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgZGF5cy5wdXNoKGkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXM7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBkYXRlcyBmb3IgZmlyc3QgZGF5cyBvZiB0aGUgbmV4dCBtb250aFxuICAgKlxuICAgKiBAcGFyYW0gbW9udGhcbiAgICogQHBhcmFtIHllYXJcbiAgICogQHBhcmFtIHN0YXJ0T2ZXZWVrXG4gICAqL1xuICBnZXROZXh0TW9udGhEYXlzKG1vbnRoLCB5ZWFyLCBzdGFydE9mV2Vlaykge1xuICAgIGNvbnN0IGVuZERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGF5cyA9IFtdO1xuICAgIGlmIChlbmREYXkgPT09IChzdGFydE9mV2VlayArIERBWVNfTUFYSU1VTV9JTkRFWCkgJSBEQVlTX1BFUl9XRUVLKSB7XG4gICAgICByZXR1cm4gZGF5cztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoREFZU19NQVhJTVVNX0lOREVYIC0gKGVuZERheSAtIHN0YXJ0T2ZXZWVrKSkgJSBEQVlTX1BFUl9XRUVLOyBpKyspIHtcbiAgICAgIGRheXMucHVzaChpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzO1xuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGRhdGUgaXMgaW4gYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlc1xuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgYmV0d2VlblNlbGVjdGVkUmFuZ2UoZGF0ZSkge1xuICAgIHJldHVybiAhISh0aGlzLnN0YXJ0RGF0ZSAmJlxuICAgICAgdGhpcy5lbmREYXRlICYmXG4gICAgICBkYXRlID4gdGhpcy5zdGFydERhdGUgJiZcbiAgICAgIGRhdGUgPCB0aGlzLmVuZERhdGUgJiZcbiAgICAgICF0aGlzLmlzUmFuZ2VIb3ZlcihkYXRlKSk7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgZGF0ZSBzaG91bGQgYmUgaW4gc2VsZWN0ZWQgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGlzU2VsZWN0ZWQoZGF0ZSkge1xuICAgIHJldHVybiAhIShzYW1lRGF0ZShkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZSkgfHxcbiAgICAgICh0aGlzLnN0YXJ0RGF0ZSAmJiBzYW1lRGF0ZShkYXRlLCB0aGlzLnN0YXJ0RGF0ZSkpIHx8XG4gICAgICAodGhpcy5lbmREYXRlICYmIHNhbWVEYXRlKGRhdGUsIHRoaXMuZW5kRGF0ZSkpKTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBkYXRlIGlzIHRoZSBzdGFydCBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaXNTdGFydE9mUmFuZ2UoZGF0ZSkge1xuICAgIHJldHVybiAhISh0aGlzLnN0YXJ0RGF0ZSAmJlxuICAgICAgIXNhbWVEYXRlKHRoaXMuc3RhcnREYXRlLCB0aGlzLmVuZERhdGUpICYmXG4gICAgICBzYW1lRGF0ZSh0aGlzLnN0YXJ0RGF0ZSwgZGF0ZSkgJiZcbiAgICAgICF0aGlzLmlzRW5kT2ZSYW5nZShkYXRlKSk7XG4gIH1cbiAgaXNFbmRPZlJhbmdlKGRhdGUpIHtcbiAgICByZXR1cm4gISEoKHRoaXMuZW5kRGF0ZSAmJiAhc2FtZURhdGUodGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSkgJiYgc2FtZURhdGUodGhpcy5lbmREYXRlLCBkYXRlKSkgfHxcbiAgICAgICghdGhpcy5lbmREYXRlICYmXG4gICAgICAgIHRoaXMuaG92ZXJSYW5nZSAmJlxuICAgICAgICBzYW1lRGF0ZSh0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5ob3ZlclJhbmdlLmVuZCkgJiZcbiAgICAgICAgc2FtZURhdGUoZGF0ZSwgdGhpcy5ob3ZlclJhbmdlLmVuZCkpKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVyIGNhbGNpdGUtZGF0ZS1waWNrZXItZGF5XG4gICAqXG4gICAqIEBwYXJhbSBhY3RpdmUuYWN0aXZlXG4gICAqIEBwYXJhbSBhY3RpdmVcbiAgICogQHBhcmFtIGRheVxuICAgKiBAcGFyYW0gZGF5SW5XZWVrXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEBwYXJhbSBjdXJyZW50TW9udGhcbiAgICogQHBhcmFtIHJlZlxuICAgKiBAcGFyYW0gYWN0aXZlLmN1cnJlbnRNb250aFxuICAgKiBAcGFyYW0gYWN0aXZlLmRhdGVcbiAgICogQHBhcmFtIGFjdGl2ZS5kYXlcbiAgICogQHBhcmFtIGFjdGl2ZS5kYXlJbldlZWtcbiAgICogQHBhcmFtIGFjdGl2ZS5yZWZcbiAgICovXG4gIHJlbmRlckRhdGVEYXkoeyBhY3RpdmUsIGN1cnJlbnRNb250aCwgZGF0ZSwgZGF5LCBkYXlJbldlZWssIHJlZiB9KSB7XG4gICAgY29uc3QgaXNGb2N1c2VkT25TdGFydCA9IHRoaXMuaXNGb2N1c2VkT25TdGFydCgpO1xuICAgIGNvbnN0IGlzSG92ZXJJblJhbmdlID0gdGhpcy5pc0hvdmVySW5SYW5nZSgpIHx8XG4gICAgICAoIXRoaXMuZW5kRGF0ZSAmJiB0aGlzLmhvdmVyUmFuZ2UgJiYgc2FtZURhdGUodGhpcy5ob3ZlclJhbmdlPy5lbmQsIHRoaXMuc3RhcnREYXRlKSk7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGF5XCIsIGtleTogZGF0ZS50b0RhdGVTdHJpbmcoKSwgcm9sZTogXCJncmlkY2VsbFwiIH0sIGgoXCJjYWxjaXRlLWRhdGUtcGlja2VyLWRheVwiLCB7IGFjdGl2ZTogYWN0aXZlLCBjbGFzczoge1xuICAgICAgICBcImhvdmVyLS1pbnNpZGUtcmFuZ2VcIjogdGhpcy5zdGFydERhdGUgJiYgaXNIb3ZlckluUmFuZ2UsXG4gICAgICAgIFwiaG92ZXItLW91dHNpZGUtcmFuZ2VcIjogdGhpcy5zdGFydERhdGUgJiYgIWlzSG92ZXJJblJhbmdlLFxuICAgICAgICBcImZvY3VzZWQtLXN0YXJ0XCI6IGlzRm9jdXNlZE9uU3RhcnQsXG4gICAgICAgIFwiZm9jdXNlZC0tZW5kXCI6ICFpc0ZvY3VzZWRPblN0YXJ0XG4gICAgICB9LCBjdXJyZW50TW9udGg6IGN1cnJlbnRNb250aCwgZGF0ZVRpbWVGb3JtYXQ6IHRoaXMuZGF0ZVRpbWVGb3JtYXQsIGRheTogZGF5LCBkaXNhYmxlZDogIWluUmFuZ2UoZGF0ZSwgdGhpcy5taW4sIHRoaXMubWF4KSwgZW5kT2ZSYW5nZTogdGhpcy5pc0VuZE9mUmFuZ2UoZGF0ZSksIGhpZ2hsaWdodGVkOiB0aGlzLmJldHdlZW5TZWxlY3RlZFJhbmdlKGRhdGUpLCBvbkNhbGNpdGVEYXlTZWxlY3Q6IHRoaXMuZGF5U2VsZWN0LCBvbkNhbGNpdGVJbnRlcm5hbERheUhvdmVyOiB0aGlzLmRheUhvdmVyLCByYW5nZTogISF0aGlzLnN0YXJ0RGF0ZSAmJiAhIXRoaXMuZW5kRGF0ZSAmJiAhc2FtZURhdGUodGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSksIHJhbmdlRWRnZTogZGF5SW5XZWVrID09PSAwID8gXCJzdGFydFwiIDogZGF5SW5XZWVrID09PSA2ID8gXCJlbmRcIiA6IHVuZGVmaW5lZCwgcmFuZ2VIb3ZlcjogdGhpcy5pc1JhbmdlSG92ZXIoZGF0ZSksIHNjYWxlOiB0aGlzLnNjYWxlLCBzZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkKGRhdGUpLCBzdGFydE9mUmFuZ2U6IHRoaXMuaXNTdGFydE9mUmFuZ2UoZGF0ZSksIHZhbHVlOiBkYXRlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4ge1xuICAgICAgICAvLyB3aGVuIG1vdmluZyB2aWEga2V5Ym9hcmQsIGZvY3VzIG11c3QgYmUgdXBkYXRlZCBvbiBhY3RpdmUgZGF0ZVxuICAgICAgICBpZiAocmVmICYmIGFjdGl2ZSAmJiB0aGlzLmFjdGl2ZUZvY3VzKSB7XG4gICAgICAgICAgZWw/LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gfSkpKTtcbiAgfVxuICBpc0ZvY3VzZWRPblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmhvdmVyUmFuZ2U/LmZvY3VzZWQgPT09IFwic3RhcnRcIjtcbiAgfVxuICBpc0hvdmVySW5SYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMuaG92ZXJSYW5nZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHRoaXMuaG92ZXJSYW5nZTtcbiAgICByZXR1cm4gISEoKCF0aGlzLmlzRm9jdXNlZE9uU3RhcnQoKSAmJiB0aGlzLnN0YXJ0RGF0ZSAmJiAoIXRoaXMuZW5kRGF0ZSB8fCBlbmQgPCB0aGlzLmVuZERhdGUpKSB8fFxuICAgICAgKHRoaXMuaXNGb2N1c2VkT25TdGFydCgpICYmIHRoaXMuc3RhcnREYXRlICYmIHN0YXJ0ID4gdGhpcy5zdGFydERhdGUpKTtcbiAgfVxuICBpc1JhbmdlSG92ZXIoZGF0ZSkge1xuICAgIGlmICghdGhpcy5ob3ZlclJhbmdlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5ob3ZlclJhbmdlO1xuICAgIGNvbnN0IGlzU3RhcnQgPSB0aGlzLmlzRm9jdXNlZE9uU3RhcnQoKTtcbiAgICBjb25zdCBpbnNpZGVSYW5nZSA9IHRoaXMuaXNIb3ZlckluUmFuZ2UoKTtcbiAgICBjb25zdCBjb25kMSA9IGluc2lkZVJhbmdlICYmXG4gICAgICAoKCFpc1N0YXJ0ICYmIGRhdGUgPiB0aGlzLnN0YXJ0RGF0ZSAmJiAoZGF0ZSA8IGVuZCB8fCBzYW1lRGF0ZShkYXRlLCBlbmQpKSkgfHxcbiAgICAgICAgKGlzU3RhcnQgJiYgZGF0ZSA8IHRoaXMuZW5kRGF0ZSAmJiAoZGF0ZSA+IHN0YXJ0IHx8IHNhbWVEYXRlKGRhdGUsIHN0YXJ0KSkpKTtcbiAgICBjb25zdCBjb25kMiA9ICFpbnNpZGVSYW5nZSAmJlxuICAgICAgKCghaXNTdGFydCAmJiBkYXRlID49IHRoaXMuZW5kRGF0ZSAmJiAoZGF0ZSA8IGVuZCB8fCBzYW1lRGF0ZShkYXRlLCBlbmQpKSkgfHxcbiAgICAgICAgKGlzU3RhcnQgJiZcbiAgICAgICAgICAoKHRoaXMuc3RhcnREYXRlICYmIGRhdGUgPCB0aGlzLnN0YXJ0RGF0ZSkgfHxcbiAgICAgICAgICAgICh0aGlzLmVuZERhdGUgJiYgc2FtZURhdGUoZGF0ZSwgdGhpcy5zdGFydERhdGUpKSkgJiZcbiAgICAgICAgICAoKHN0YXJ0ICYmIGRhdGUgPiBzdGFydCkgfHwgc2FtZURhdGUoZGF0ZSwgc3RhcnQpKSkpO1xuICAgIHJldHVybiBjb25kMSB8fCBjb25kMjtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuRGF0ZVBpY2tlck1vbnRoLnN0eWxlID0gZGF0ZVBpY2tlck1vbnRoQ3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgbW9udGg6IFwibW9udGhcIixcbiAgY2hldnJvbjogXCJjaGV2cm9uXCIsXG4gIHN1ZmZpeDogXCJzdWZmaXhcIixcbiAgeWVhclN1ZmZpeDogXCJ5ZWFyLS1zdWZmaXhcIixcbiAgeWVhcldyYXA6IFwieWVhci13cmFwXCIsXG4gIHRleHRSZXZlcnNlOiBcInRleHQtLXJldmVyc2VcIlxufTtcbmNvbnN0IElDT04gPSB7XG4gIGNoZXZyb25MZWZ0OiBcImNoZXZyb24tbGVmdFwiLFxuICBjaGV2cm9uUmlnaHQ6IFwiY2hldnJvbi1yaWdodFwiXG59O1xuXG5jb25zdCBkYXRlUGlja2VyTW9udGhIZWFkZXJDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfS5oZWFkZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW19Omhvc3QoW3NjYWxlPXNdKSAudGV4dHttYXJnaW4tYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9c10pIC5jaGV2cm9ue2Jsb2NrLXNpemU6Mi4yNXJlbX06aG9zdChbc2NhbGU9bV0pIC50ZXh0e21hcmdpbi1ibG9jazowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtzY2FsZT1tXSkgLmNoZXZyb257YmxvY2stc2l6ZTozcmVtfTpob3N0KFtzY2FsZT1sXSkgLnRleHR7bWFyZ2luLWJsb2NrOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpO2xpbmUtaGVpZ2h0OjEuNXJlbX06aG9zdChbc2NhbGU9bF0pIC5jaGV2cm9ue2Jsb2NrLXNpemU6My41cmVtfS5jaGV2cm9ue21hcmdpbi1pbmxpbmU6LTAuMjVyZW07Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjA7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1pbmxpbmU6MC4yNXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7aW5saW5lLXNpemU6MTQuMjg1NzE0Mjg1NyV9LmNoZXZyb246Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5jaGV2cm9uOmhvdmVyLC5jaGV2cm9uOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY2hldnJvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmNoZXZyb25bYXJpYS1kaXNhYmxlZD10cnVlXXtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MH0udGV4dHttYXJnaW4tYmxvY2s6YXV0bztkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjF9LnRleHQtLXJldmVyc2V7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Lm1vbnRoLC55ZWFyLC5zdWZmaXh7bWFyZ2luLWlubGluZTowLjI1cmVtO21hcmdpbi1ibG9jazphdXRvO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtsaW5lLWhlaWdodDoxLjI1O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtmb250LXNpemU6aW5oZXJpdH0ueWVhcntwb3NpdGlvbjpyZWxhdGl2ZTtpbmxpbmUtc2l6ZToyLjVyZW07Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LWZhbWlseTppbmhlcml0O291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9LnllYXI6aG92ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjoxMDBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb24tcHJvcGVydHk6b3V0bGluZS1jb2xvcjtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTtvdXRsaW5lLW9mZnNldDoycHh9LnllYXI6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LnllYXItLXN1ZmZpeHt0ZXh0LWFsaWduOnN0YXJ0fS55ZWFyLXdyYXB7cG9zaXRpb246cmVsYXRpdmV9LnN1ZmZpeHtpbnNldC1ibG9jay1zdGFydDowcHg7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246c3RhcnQ7aW5zZXQtaW5saW5lLXN0YXJ0OjB9XCI7XG5cbmNvbnN0IERhdGVQaWNrZXJNb250aEhlYWRlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0XCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgeWVhciBvbiBVUC9ET1dOIGtleXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHRoaXMub25ZZWFyS2V5ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBsb2NhbGl6ZWRZZWFyID0gdGhpcy5wYXJzZUNhbGVuZGFyWWVhcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZXRZZWFyKHsgbG9jYWxpemVkWWVhciwgb2Zmc2V0OiAtMSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2V0WWVhcih7IGxvY2FsaXplZFllYXIsIG9mZnNldDogMSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25ZZWFyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFllYXIoe1xuICAgICAgICBsb2NhbGl6ZWRZZWFyOiB0aGlzLnBhcnNlQ2FsZW5kYXJZZWFyKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5vblllYXJJbnB1dCA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRZZWFyKHtcbiAgICAgICAgbG9jYWxpemVkWWVhcjogdGhpcy5wYXJzZUNhbGVuZGFyWWVhcihldmVudC50YXJnZXQudmFsdWUpLFxuICAgICAgICBjb21taXQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMucHJldk1vbnRoQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljayhldmVudCwgdGhpcy5wcmV2TW9udGhEYXRlKTtcbiAgICB9O1xuICAgIHRoaXMucHJldk1vbnRoS2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIHRoaXMucHJldk1vbnRoQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5uZXh0TW9udGhDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKGV2ZW50LCB0aGlzLm5leHRNb250aERhdGUpO1xuICAgIH07XG4gICAgdGhpcy5uZXh0TW9udGhLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgdGhpcy5uZXh0TW9udGhDbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKlxuICAgICAqIFVwZGF0ZSBhY3RpdmUgbW9udGggb24gY2xpY2tzIG9mIGxlZnQvcmlnaHQgYXJyb3dzXG4gICAgICovXG4gICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrID0gKGV2ZW50LCBkYXRlKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0LmVtaXQoZGF0ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5leHRNb250aERhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmV2TW9udGhEYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMucGFyZW50RGF0ZVBpY2tlckVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KHRoaXMuZWwsIFwiY2FsY2l0ZS1kYXRlLXBpY2tlclwiKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNldE5leHRQcmV2TW9udGhEYXRlcygpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyIH0sIHRoaXMucmVuZGVyQ29udGVudCgpKTtcbiAgfVxuICByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMsIGxvY2FsZURhdGEsIGFjdGl2ZURhdGUgfSA9IHRoaXM7XG4gICAgaWYgKCFhY3RpdmVEYXRlIHx8ICFsb2NhbGVEYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyZW50RGF0ZVBpY2tlckVsKSB7XG4gICAgICBjb25zdCB7IG51bWJlcmluZ1N5c3RlbSwgbGFuZzogbG9jYWxlIH0gPSB0aGlzLnBhcmVudERhdGVQaWNrZXJFbDtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIC4uLihudW1iZXJpbmdTeXN0ZW0gJiYgeyBudW1iZXJpbmdTeXN0ZW0gfSksXG4gICAgICAgIC4uLihsb2NhbGUgJiYgeyBsb2NhbGUgfSlcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZU1vbnRoID0gYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHsgbW9udGhzLCB1bml0T3JkZXIgfSA9IGxvY2FsZURhdGE7XG4gICAgY29uc3QgbG9jYWxpemVkTW9udGggPSAobW9udGhzLndpZGUgfHwgbW9udGhzLm5hcnJvdyB8fCBtb250aHMuYWJicmV2aWF0ZWQpW2FjdGl2ZU1vbnRoXTtcbiAgICBjb25zdCBsb2NhbGl6ZWRZZWFyID0gdGhpcy5mb3JtYXRDYWxlbmRhclllYXIoYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICBjb25zdCBpY29uU2NhbGUgPSB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCI7XG4gICAgY29uc3Qgb3JkZXIgPSBnZXRPcmRlcih1bml0T3JkZXIpO1xuICAgIGNvbnN0IHJldmVyc2UgPSBvcmRlci5pbmRleE9mKFwieVwiKSA8IG9yZGVyLmluZGV4T2YoXCJtXCIpO1xuICAgIGNvbnN0IHN1ZmZpeCA9IGxvY2FsZURhdGEueWVhcj8uc3VmZml4O1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcImFcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogYCR7dGhpcy5wcmV2TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRofWAsIFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy5wcmV2TW9udGgsIGNsYXNzOiBDU1MuY2hldnJvbiwgaHJlZjogXCIjXCIsIG9uQ2xpY2s6IHRoaXMucHJldk1vbnRoQ2xpY2ssIG9uS2V5RG93bjogdGhpcy5wcmV2TW9udGhLZXlkb3duLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogdGhpcy5wcmV2TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRoID8gLTEgOiAwIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBcImZsaXAtcnRsXCI6IHRydWUsIGljb246IElDT04uY2hldnJvbkxlZnQsIHNjYWxlOiBpY29uU2NhbGUgfSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgdGV4dDogdHJ1ZSwgW0NTUy50ZXh0UmV2ZXJzZV06IHJldmVyc2UgfSB9LCBoKEhlYWRpbmcsIHsgY2xhc3M6IENTUy5tb250aCwgbGV2ZWw6IHRoaXMuaGVhZGluZ0xldmVsIH0sIGxvY2FsaXplZE1vbnRoKSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnllYXJXcmFwIH0sIGgoXCJpbnB1dFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy55ZWFyLCBjbGFzczoge1xuICAgICAgICB5ZWFyOiB0cnVlLFxuICAgICAgICBbQ1NTLnllYXJTdWZmaXhdOiAhIXN1ZmZpeFxuICAgICAgfSwgaW5wdXRtb2RlOiBcIm51bWVyaWNcIiwgbWF4bGVuZ3RoOiBcIjRcIiwgbWlubGVuZ3RoOiBcIjFcIiwgb25DaGFuZ2U6IHRoaXMub25ZZWFyQ2hhbmdlLCBvbklucHV0OiB0aGlzLm9uWWVhcklucHV0LCBvbktleURvd246IHRoaXMub25ZZWFyS2V5LCBwYXR0ZXJuOiBcIlxcXFxkKlwiLCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IGxvY2FsaXplZFllYXIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy55ZWFySW5wdXQgPSBlbCkgfSksIHN1ZmZpeCAmJiBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1Muc3VmZml4IH0sIHN1ZmZpeCkpKSwgaChcImFcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogYCR7dGhpcy5uZXh0TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRofWAsIFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy5uZXh0TW9udGgsIGNsYXNzOiBDU1MuY2hldnJvbiwgaHJlZjogXCIjXCIsIG9uQ2xpY2s6IHRoaXMubmV4dE1vbnRoQ2xpY2ssIG9uS2V5RG93bjogdGhpcy5uZXh0TW9udGhLZXlkb3duLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogdGhpcy5uZXh0TW9udGhEYXRlLmdldE1vbnRoKCkgPT09IGFjdGl2ZU1vbnRoID8gLTEgOiAwIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBcImZsaXAtcnRsXCI6IHRydWUsIGljb246IElDT04uY2hldnJvblJpZ2h0LCBzY2FsZTogaWNvblNjYWxlIH0pKSkpO1xuICB9XG4gIHNldE5leHRQcmV2TW9udGhEYXRlcygpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlRGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5leHRNb250aERhdGUgPSBkYXRlRnJvbVJhbmdlKG5leHRNb250aCh0aGlzLmFjdGl2ZURhdGUpLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgIHRoaXMucHJldk1vbnRoRGF0ZSA9IGRhdGVGcm9tUmFuZ2UocHJldk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMubWluLCB0aGlzLm1heCk7XG4gIH1cbiAgZm9ybWF0Q2FsZW5kYXJZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKGAke2Zvcm1hdENhbGVuZGFyWWVhcih5ZWFyLCB0aGlzLmxvY2FsZURhdGEpfWApO1xuICB9XG4gIHBhcnNlQ2FsZW5kYXJZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKGAke3BhcnNlQ2FsZW5kYXJZZWFyKE51bWJlcihudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZSh5ZWFyKSksIHRoaXMubG9jYWxlRGF0YSl9YCk7XG4gIH1cbiAgZ2V0SW5SYW5nZURhdGUoeyBsb2NhbGl6ZWRZZWFyLCBvZmZzZXQgPSAwIH0pIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBhY3RpdmVEYXRlIH0gPSB0aGlzO1xuICAgIGNvbnN0IHBhcnNlZFllYXIgPSBOdW1iZXIobnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUobG9jYWxpemVkWWVhcikpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlZFllYXIudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgY29uc3QgeWVhciA9IGlzTmFOKHBhcnNlZFllYXIpID8gZmFsc2UgOiBwYXJzZWRZZWFyICsgb2Zmc2V0O1xuICAgIGNvbnN0IGluUmFuZ2UgPSB5ZWFyICYmICghbWluIHx8IG1pbi5nZXRGdWxsWWVhcigpIDw9IHllYXIpICYmICghbWF4IHx8IG1heC5nZXRGdWxsWWVhcigpID49IHllYXIpO1xuICAgIC8vIGlmIHlvdSd2ZSBzdXBwbGllZCBhIHllYXIgYW5kIGl0J3MgaW4gcmFuZ2VcbiAgICBpZiAoeWVhciAmJiBpblJhbmdlICYmIGxlbmd0aCA9PT0gbG9jYWxpemVkWWVhci5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHREYXRlID0gbmV3IERhdGUoYWN0aXZlRGF0ZSk7XG4gICAgICBuZXh0RGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgIHJldHVybiBkYXRlRnJvbVJhbmdlKG5leHREYXRlLCBtaW4sIG1heCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBQYXJzZSBsb2NhbGl6ZWQgeWVhciBzdHJpbmcgZnJvbSBpbnB1dCxcbiAgICogc2V0IHRvIGFjdGl2ZSBpZiBpbiByYW5nZVxuICAgKlxuICAgKiBAcGFyYW0gcm9vdDBcbiAgICogQHBhcmFtIHJvb3QwLmxvY2FsaXplZFllYXJcbiAgICogQHBhcmFtIHJvb3QwLmNvbW1pdFxuICAgKiBAcGFyYW0gcm9vdDAub2Zmc2V0XG4gICAqL1xuICBzZXRZZWFyKHsgbG9jYWxpemVkWWVhciwgY29tbWl0ID0gdHJ1ZSwgb2Zmc2V0ID0gMCB9KSB7XG4gICAgY29uc3QgeyB5ZWFySW5wdXQsIGFjdGl2ZURhdGUgfSA9IHRoaXM7XG4gICAgY29uc3QgaW5SYW5nZURhdGUgPSB0aGlzLmdldEluUmFuZ2VEYXRlKHsgbG9jYWxpemVkWWVhciwgb2Zmc2V0IH0pO1xuICAgIC8vIGlmIHlvdSd2ZSBzdXBwbGllZCBhIHllYXIgYW5kIGl0J3MgaW4gcmFuZ2UsIHVwZGF0ZSBhY3RpdmUgZGF0ZVxuICAgIGlmIChpblJhbmdlRGF0ZSkge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEYXRlUGlja2VyU2VsZWN0LmVtaXQoaW5SYW5nZURhdGUpO1xuICAgIH1cbiAgICBpZiAoY29tbWl0KSB7XG4gICAgICB5ZWFySW5wdXQudmFsdWUgPSB0aGlzLmZvcm1hdENhbGVuZGFyWWVhcigoaW5SYW5nZURhdGUgfHwgYWN0aXZlRGF0ZSkuZ2V0RnVsbFllYXIoKSk7XG4gICAgfVxuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1pblwiOiBbXCJzZXROZXh0UHJldk1vbnRoRGF0ZXNcIl0sXG4gICAgXCJtYXhcIjogW1wic2V0TmV4dFByZXZNb250aERhdGVzXCJdLFxuICAgIFwiYWN0aXZlRGF0ZVwiOiBbXCJzZXROZXh0UHJldk1vbnRoRGF0ZXNcIl1cbiAgfTsgfVxufTtcbkRhdGVQaWNrZXJNb250aEhlYWRlci5zdHlsZSA9IGRhdGVQaWNrZXJNb250aEhlYWRlckNzcztcblxuZXhwb3J0IHsgRGF0ZVBpY2tlciBhcyBjYWxjaXRlX2RhdGVfcGlja2VyLCBEYXRlUGlja2VyRGF5IGFzIGNhbGNpdGVfZGF0ZV9waWNrZXJfZGF5LCBEYXRlUGlja2VyTW9udGggYXMgY2FsY2l0ZV9kYXRlX3BpY2tlcl9tb250aCwgRGF0ZVBpY2tlck1vbnRoSGVhZGVyIGFzIGNhbGNpdGVfZGF0ZV9waWNrZXJfbW9udGhfaGVhZGVyIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgICBjb21wb25lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gICAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gY29tcG9uZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29tcG9uZW50LmVsLmNsaWNrID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrO1xuICBjb21wb25lbnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGNvbXBvbmVudC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiBhcyB1IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXNcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuXG4vKipcbiAqIENoZWNrIGlmIGRhdGUgaXMgd2l0aGluIGEgbWluIGFuZCBtYXhcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICovXG5mdW5jdGlvbiBpblJhbmdlKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGFmdGVyTWluID0gIShtaW4gaW5zdGFuY2VvZiBEYXRlKSB8fCB0aW1lID49IG1pbi5nZXRUaW1lKCk7XG4gIGNvbnN0IGJlZm9yZU1heCA9ICEobWF4IGluc3RhbmNlb2YgRGF0ZSkgfHwgdGltZSA8PSBtYXguZ2V0VGltZSgpO1xuICByZXR1cm4gYWZ0ZXJNaW4gJiYgYmVmb3JlTWF4O1xufVxuLyoqXG4gKiBFbnN1cmVzIGRhdGUgaXMgd2l0aGluIHJhbmdlLFxuICogcmV0dXJucyBtaW4gb3IgbWF4IGlmIG91dCBvZiBib3VuZHNcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICovXG5mdW5jdGlvbiBkYXRlRnJvbVJhbmdlKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgYmVmb3JlTWluID0gbWluIGluc3RhbmNlb2YgRGF0ZSAmJiB0aW1lIDwgbWluLmdldFRpbWUoKTtcbiAgY29uc3QgYWZ0ZXJNYXggPSBtYXggaW5zdGFuY2VvZiBEYXRlICYmIHRpbWUgPiBtYXguZ2V0VGltZSgpO1xuICBpZiAoYmVmb3JlTWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAoYWZ0ZXJNYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuLyoqXG4gKiBQYXJzZSBhbiBpc284NjAxIHN0cmluZyAoWVlZWS1tbS1kZCkgaW50byBhIHZhbGlkIGRhdGUuXG4gKiBUT0RPOiBoYW5kbGUgdGltZSB3aGVuIHRpbWUgb2YgZGF5IFVJIGlzIGFkZGVkXG4gKlxuICogQHBhcmFtIGlzbzg2MDFcbiAqIEBwYXJhbSBpc0VuZERhdGVcbiAqL1xuZnVuY3Rpb24gZGF0ZUZyb21JU08oaXNvODYwMSwgaXNFbmREYXRlID0gZmFsc2UpIHtcbiAgaWYgKGlzbzg2MDEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGlzbzg2MDE7XG4gIH1cbiAgaWYgKCFpc284NjAxIHx8IHR5cGVvZiBpc284NjAxICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZCA9IGlzbzg2MDEuc3BsaXQoL1s6IFQtXS8pLm1hcChwYXJzZUZsb2F0KTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRbMF0sIChkWzFdIHx8IDEpIC0gMSwgZFsyXSB8fCAxKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkWzBdKTtcbiAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBJU08gODYwMSBkYXRlOiBcIiR7aXNvODYwMX1cImApO1xuICB9XG4gIGlmIChpc0VuZERhdGUpIHtcbiAgICByZXR1cm4gc2V0RW5kT2ZEYXkoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG4vKipcbiAqIFBhcnNlIGEgbG9jYWxpemVkIGRhdGUgc3RyaW5nIGludG8gYSB2YWxpZCBEYXRlLlxuICogcmV0dXJuIGZhbHNlIGlmIGRhdGUgaXMgaW52YWxpZCwgb3Igb3V0IG9mIHJhbmdlXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBkYXRlRnJvbUxvY2FsaXplZFN0cmluZyh2YWx1ZSwgbG9jYWxlRGF0YSkge1xuICBpZiAoIWxvY2FsZURhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IHNlcGFyYXRvciB9ID0gbG9jYWxlRGF0YTtcbiAgY29uc3QgcGFydHMgPSBwYXJzZURhdGVTdHJpbmcodmFsdWUsIGxvY2FsZURhdGEpO1xuICBjb25zdCB7IGRheSwgbW9udGggfSA9IHBhcnRzO1xuICBjb25zdCB5ZWFyID0gcGFyc2VDYWxlbmRhclllYXIocGFydHMueWVhciwgbG9jYWxlRGF0YSk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgY29uc3QgdmFsaWREYXkgPSBkYXkgPiAwO1xuICBjb25zdCB2YWxpZE1vbnRoID0gbW9udGggPiAtMTtcbiAgY29uc3QgdmFsaWREYXRlID0gIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbiAgY29uc3QgdmFsaWRMZW5ndGggPSB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpLmZpbHRlcigoYykgPT4gYykubGVuZ3RoID4gMjtcbiAgY29uc3QgdmFsaWRZZWFyID0geWVhci50b1N0cmluZygpLmxlbmd0aCA+IDA7XG4gIGlmICh2YWxpZERheSAmJiB2YWxpZE1vbnRoICYmIHZhbGlkRGF0ZSAmJiB2YWxpZExlbmd0aCAmJiB2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHBhcnNlQ2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEpIHtcbiAgcmV0dXJuIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgXCJyZWFkXCIpO1xufVxuZnVuY3Rpb24gZm9ybWF0Q2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEpIHtcbiAgcmV0dXJuIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgXCJ3cml0ZVwiKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgbW9kZSkge1xuICBpZiAobG9jYWxlRGF0YVtcImRlZmF1bHQtY2FsZW5kYXJcIl0gIT09IFwiYnVkZGhpc3RcIikge1xuICAgIHJldHVybiB5ZWFyO1xuICB9XG4gIGNvbnN0IEJVRERISVNUX0NBTEVOREFSX1lFQVJfT0ZGU0VUID0gNTQzO1xuICBjb25zdCB5ZWFyT2Zmc2V0ID0gQlVEREhJU1RfQ0FMRU5EQVJfWUVBUl9PRkZTRVQgKiAobW9kZSA9PT0gXCJyZWFkXCIgPyAtMSA6IDEpO1xuICByZXR1cm4geWVhciArIHllYXJPZmZzZXQ7XG59XG4vKipcbiAqIFJldHJpZXZlIGRheSwgbW9udGgsIGFuZCB5ZWFyIHN0cmluZ3MgZnJvbSBhIGxvY2FsaXplZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nKHN0cmluZywgbG9jYWxlRGF0YSkge1xuICBjb25zdCB7IHNlcGFyYXRvciwgdW5pdE9yZGVyIH0gPSBsb2NhbGVEYXRhO1xuICBjb25zdCBvcmRlciA9IGdldE9yZGVyKHVuaXRPcmRlcik7XG4gIGNvbnN0IHZhbHVlcyA9IHN0cmluZy5zcGxpdChzZXBhcmF0b3IpLm1hcCgocGFydCkgPT4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUocGFydCkpO1xuICBjb25zdCBkYXkgPSB2YWx1ZXNbb3JkZXIuaW5kZXhPZihcImRcIildO1xuICBjb25zdCBtb250aCA9IHZhbHVlc1tvcmRlci5pbmRleE9mKFwibVwiKV07XG4gIGNvbnN0IHllYXIgPSB2YWx1ZXNbb3JkZXIuaW5kZXhPZihcInlcIildO1xuICByZXR1cm4geyBkYXksIG1vbnRoLCB5ZWFyIH07XG59XG4vKipcbiAqIFJldHVybiBmaXJzdCBwb3J0aW9uIG9mIElTTyBzdHJpbmcgKFlZWVktbW0tZGQpXG4gKlxuICogQHBhcmFtIGRhdGVcbiAqL1xuZnVuY3Rpb24gZGF0ZVRvSVNPKGRhdGUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9XG4gIHJldHVybiBcIlwiO1xufVxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZXMgYXJlIHRoZSBzYW1lIGRheSwgbW9udGgsIHllYXJcbiAqXG4gKiBAcGFyYW0gZDFcbiAqIEBwYXJhbSBkMlxuICovXG5mdW5jdGlvbiBzYW1lRGF0ZShkMSwgZDIpIHtcbiAgcmV0dXJuIChkMSBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICBkMiBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICBkMS5nZXREYXRlKCkgPT09IGQyLmdldERhdGUoKSAmJlxuICAgIGQxLmdldE1vbnRoKCkgPT09IGQyLmdldE1vbnRoKCkgJiZcbiAgICBkMS5nZXRGdWxsWWVhcigpID09PSBkMi5nZXRGdWxsWWVhcigpKTtcbn1cbi8qKlxuICogR2V0IGEgZGF0ZSBvbmUgbW9udGggaW4gdGhlIHBhc3RcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBwcmV2TW9udGgoZGF0ZSkge1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV4dERhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgLy8gZGF0ZSBkb2Vzbid0IGV4aXN0IGluIG5ldyBtb250aCwgdXNlIGxhc3QgZGF5XG4gIGlmIChtb250aCA9PT0gbmV4dERhdGUuZ2V0TW9udGgoKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoLCAwKTtcbiAgfVxuICByZXR1cm4gbmV4dERhdGU7XG59XG4vKipcbiAqIEdldCBhIGRhdGUgb25lIG1vbnRoIGluIHRoZSBmdXR1cmVcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBuZXh0TW9udGgoZGF0ZSkge1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV4dERhdGUuc2V0TW9udGgobW9udGggKyAxKTtcbiAgLy8gZGF0ZSBkb2Vzbid0IGV4aXN0IGluIG5ldyBtb250aCwgdXNlIGxhc3QgZGF5XG4gIGlmICgobW9udGggKyAyKSAlIDcgPT09IG5leHREYXRlLmdldE1vbnRoKCkgJSA3KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAyLCAwKTtcbiAgfVxuICByZXR1cm4gbmV4dERhdGU7XG59XG4vKipcbiAqIFBhcnNlIG51bWVyaWMgdW5pdHMgZm9yIGRheSwgbW9udGgsIGFuZCB5ZWFyIGZyb20gYSBsb2NhbGl6ZWQgc3RyaW5nXG4gKiBtb250aCBzdGFydHMgYXQgMCAoY2FuIHBhc3MgdG8gZGF0ZSBjb25zdHJ1Y3RvcilcbiAqIGNhbiByZXR1cm4gdmFsdWVzIGFzIG51bWJlciBvciBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBwYXJzZURhdGVTdHJpbmcoc3RyaW5nLCBsb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHsgZGF5LCBtb250aCwgeWVhciB9ID0gZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyhzdHJpbmcsIGxvY2FsZURhdGEpO1xuICByZXR1cm4ge1xuICAgIGRheTogcGFyc2VJbnQoZGF5KSxcbiAgICBtb250aDogcGFyc2VJbnQobW9udGgpIC0gMSxcbiAgICB5ZWFyOiBwYXJzZUludCh5ZWFyKVxuICB9O1xufVxuLyoqXG4gKiBCYXNlZCBvbiB0aGUgdW5pdE9yZGVyIHN0cmluZywgZmluZCBvcmRlciBvZiBtb250aCwgZGF5LCBhbmQgeWVhciBmb3IgbG9jYWxlXG4gKlxuICogQHBhcmFtIHVuaXRPcmRlclxuICovXG5mdW5jdGlvbiBnZXRPcmRlcih1bml0T3JkZXIpIHtcbiAgY29uc3Qgc2lnbmlmaWVycyA9IFtcImRcIiwgXCJtXCIsIFwieVwiXTtcbiAgY29uc3Qgb3JkZXIgPSB1bml0T3JkZXIudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHNpZ25pZmllcnMuc29ydCgoYSwgYikgPT4gb3JkZXIuaW5kZXhPZihhKSAtIG9yZGVyLmluZGV4T2YoYikpO1xufVxuLyoqXG4gKiBHZXQgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiB0d28gZGF0ZXNcbiAqXG4gKiBAcGFyYW0gZGF0ZTFcbiAqIEBwYXJhbSBkYXRlMlxuICovXG5mdW5jdGlvbiBnZXREYXlzRGlmZihkYXRlMSwgZGF0ZTIpIHtcbiAgY29uc3QgdHMxID0gZGF0ZTEuZ2V0VGltZSgpO1xuICBjb25zdCB0czIgPSBkYXRlMi5nZXRUaW1lKCk7XG4gIHJldHVybiAodHMxIC0gdHMyKSAvICgxMDAwICogMzYwMCAqIDI0KTtcbn1cbi8qKlxuICogU2V0IHRpbWUgb2YgdGhlIGRheSB0byB0aGUgZW5kLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICogQHJldHVybnMge0RhdGV9IERhdGUgd2l0aCB0aW1lIHNldCB0byBlbmQgb2YgZGF5IC5cbiAqL1xuZnVuY3Rpb24gc2V0RW5kT2ZEYXkoZGF0ZSkge1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vKipcbiAqIENMRFIgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0cmFuc2xhdGlvbkNhY2hlID0ge307XG4vKipcbiAqIENMRFIgcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuLyoqXG4gKiBGZXRjaCBjYWxlbmRhciBkYXRhIGZvciBhIGdpdmVuIGxvY2FsZSBmcm9tIGxpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICpcbiAqIEBwYXJhbSBsYW5nXG4gKiBAcHVibGljXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZURhdGEobGFuZykge1xuICBjb25zdCBsb2NhbGUgPSBnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZyk7XG4gIGlmICh0cmFuc2xhdGlvbkNhY2hlW2xvY2FsZV0pIHtcbiAgICByZXR1cm4gdHJhbnNsYXRpb25DYWNoZVtsb2NhbGVdO1xuICB9XG4gIGlmICghcmVxdWVzdENhY2hlW2xvY2FsZV0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbbG9jYWxlXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvZGF0ZS1waWNrZXIvbmxzLyR7bG9jYWxlfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgVHJhbnNsYXRpb25zIGZvciBcIiR7bG9jYWxlfVwiIG5vdCBmb3VuZCBvciBpbnZhbGlkLCBmYWxsaW5nIGJhY2sgdG8gZW5nbGlzaGApO1xuICAgICAgcmV0dXJuIGdldExvY2FsZURhdGEoXCJlblwiKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdENhY2hlW2xvY2FsZV07XG4gIHRyYW5zbGF0aW9uQ2FjaGVbbG9jYWxlXSA9IGRhdGE7XG4gIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiAgTWFwcyB2YWx1ZSB0byB2YWx1ZUFzRGF0ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5tYXAoKHYsIGluZGV4KSA9PiBkYXRlRnJvbUlTTyh2LCBpbmRleCA9PT0gMSkpO1xufVxuXG5leHBvcnQgeyBkYXRlRnJvbUxvY2FsaXplZFN0cmluZyBhcyBhLCBkYXRlVG9JU08gYXMgYiwgZGF0ZUZyb21JU08gYXMgYywgZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyBhcyBkLCBnZXRMb2NhbGVEYXRhIGFzIGUsIGRhdGVGcm9tUmFuZ2UgYXMgZiwgZ2V0VmFsdWVBc0RhdGVSYW5nZSBhcyBnLCBnZXREYXlzRGlmZiBhcyBoLCBpblJhbmdlIGFzIGksIHNhbWVEYXRlIGFzIGosIGdldE9yZGVyIGFzIGssIGZvcm1hdENhbGVuZGFyWWVhciBhcyBsLCBwYXJzZUNhbGVuZGFyWWVhciBhcyBtLCBuZXh0TW9udGggYXMgbiwgcHJldk1vbnRoIGFzIHAsIHNldEVuZE9mRGF5IGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==