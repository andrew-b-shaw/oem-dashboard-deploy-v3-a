"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input-date-picker_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-date-picker.entry.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-date-picker.entry.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input_date_picker": () => (/* binding */ InputDatePicker)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floating-ui-8d547175.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./focusTrapComponent-07adcb3f.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



















const CSS = {
  menu: "menu-container",
  menuActive: "menu-container--active",
  toggleIcon: "toggle-icon"
};

const inputDatePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([scale=s]){--calcite-toggle-spacing:0.5rem}:host([scale=m]){--calcite-toggle-spacing:0.75rem}:host([scale=l]){--calcite-toggle-spacing:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.calendar-picker-wrapper{position:static;inline-size:100%;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;inline-size:1rem;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-app-z-index);margin-inline:1px;background-color:var(--calcite-ui-foreground-1);padding-inline:0.625rem;inset-inline-start:0}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{inline-size:216px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{inline-size:286px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{inline-size:398px}.menu-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const InputDatePicker = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInputDatePickerChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerChange", 6);
    this.calciteInputDatePickerBeforeClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerBeforeClose", 6);
    this.calciteInputDatePickerClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerClose", 6);
    this.calciteInputDatePickerBeforeOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerBeforeOpen", 6);
    this.calciteInputDatePickerOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerOpen", 6);
    this.calciteInternalInputInputHandler = (event) => {
      const target = event.target;
      const value = target.value;
      const parsedValue = this.parseNumerals(value);
      const formattedValue = this.formatNumerals(parsedValue);
      target.value = formattedValue;
      const { year } = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value, this.localeData);
      if (year && year.length < 4) {
        return;
      }
      const date = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value, this.localeData);
      if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date, this.min, this.max)) {
        this.datePickerActiveDate = date;
      }
    };
    this.calciteInternalInputBlurHandler = () => {
      this.commitValue();
    };
    this.dialogId = `date-picker-dialog--${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_12__.g)()}`;
    this.focusOnOpen = false;
    this.lastBlurredInput = "none";
    this.userChangedValue = false;
    this.openTransitionProp = "opacity";
    this.valueAsDateChangedExternally = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.onInputWrapperClick = () => {
      if (this.range && this.lastBlurredInput !== "none" && this.open) ;
      else {
        this.open = !this.open;
      }
      this.lastBlurredInput = "none";
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.f)(flipPlacements, el)
        : null;
    };
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    };
    this.setStartInput = (el) => {
      this.startInput = el;
    };
    this.setEndInput = (el) => {
      this.endInput = el;
    };
    this.deactivate = () => {
      this.open = false;
      this.lastBlurredInput = "none";
    };
    this.keyDownHandler = (event) => {
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Enter") {
        this.commitValue();
        if (this.shouldFocusRangeEnd()) {
          this.endInput?.setFocus();
        }
        else if (this.shouldFocusRangeStart()) {
          this.startInput?.setFocus();
        }
        if ((0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.s)(this)) {
          event.preventDefault();
          this.restoreInputFocus();
        }
      }
      else if (key === "ArrowDown") {
        this.open = true;
        this.focusOnOpen = true;
        event.preventDefault();
      }
      else if (key === "Escape") {
        this.open = false;
        event.preventDefault();
        this.restoreInputFocus();
      }
    };
    this.startInputFocus = () => {
      this.focusedInput = "start";
    };
    this.startEndInputFocus = (event) => {
      const blurredEl = event.relatedTarget;
      this.lastBlurredInput =
        blurredEl === this.startInput ? "start" : blurredEl === this.endInput ? "end" : "none";
    };
    this.endInputFocus = () => {
      this.focusedInput = "end";
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.setStartWrapper = (el) => {
      this.startWrapper = el;
      this.setReferenceEl();
    };
    this.setEndWrapper = (el) => {
      this.endWrapper = el;
      this.setReferenceEl();
    };
    this.setDatePickerRef = (el) => {
      this.datePickerEl = el;
      (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_11__.c)(this, {
        focusTrapEl: el,
        focusTrapOptions: {
          initialFocus: false,
          setReturnFocus: false
        }
      });
    };
    /**
     * Event handler for when the selected date changes
     *
     * @param event CalciteDatePicker custom change event
     */
    this.handleDateChange = (event) => {
      if (this.range) {
        return;
      }
      event.stopPropagation();
      this.setValue(event.target.valueAsDate);
      this.localizeInputValues();
      this.restoreInputFocus();
    };
    this.handleDateRangeChange = (event) => {
      if (!this.range) {
        return;
      }
      event.stopPropagation();
      const value = event.target.valueAsDate;
      this.setRangeValue(value);
      this.localizeInputValues();
      this.restoreInputFocus();
    };
    this.setInputValue = (newValue, input = "start") => {
      const inputEl = this[`${input}Input`];
      if (!inputEl) {
        return;
      }
      inputEl.value = newValue;
    };
    this.setRangeValue = (valueAsDate) => {
      if (!this.range) {
        return;
      }
      const { value: oldValue } = this;
      const oldValueIsArray = Array.isArray(oldValue);
      const valueIsArray = Array.isArray(valueAsDate);
      const newStartDate = valueIsArray ? valueAsDate[0] : null;
      const newStartDateISO = valueIsArray ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newStartDate) : "";
      const newEndDate = valueIsArray ? valueAsDate[1] : null;
      const newEndDateISO = valueIsArray ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newEndDate) : "";
      const newValue = newStartDateISO || newEndDateISO ? [newStartDateISO, newEndDateISO] : "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue;
      this.valueAsDate = newValue ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newValue) : undefined;
      const changeEvent = this.calciteInputDatePickerChange.emit();
      if (changeEvent && changeEvent.defaultPrevented) {
        this.value = oldValue;
        if (oldValueIsArray) {
          this.setInputValue(oldValue[0], "start");
          this.setInputValue(oldValue[1], "end");
        }
        else {
          this.value = oldValue;
          this.setInputValue(oldValue);
        }
      }
    };
    this.setValue = (value) => {
      if (this.range) {
        return;
      }
      const oldValue = this.value;
      const newValue = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value);
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.valueAsDate = newValue ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newValue) : undefined;
      this.value = newValue || "";
      const changeEvent = this.calciteInputDatePickerChange.emit();
      if (changeEvent.defaultPrevented) {
        this.value = oldValue;
        this.setInputValue(oldValue);
      }
    };
    this.commonDateSeparators = [".", "-", "/"];
    this.formatNumerals = (value) => value
      ? value
        .split("")
        .map((char) => this.commonDateSeparators?.includes(char)
        ? this.localeData?.separator
        : _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__.n?.includes(char)
          ? _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.n?.numberFormatter?.format(Number(char))
          : char)
        .join("")
      : "";
    this.parseNumerals = (value) => value
      ? value
        .split("")
        .map((char) => _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__.n.includes(char) ? _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.n.delocalize(char) : char)
        .join("")
      : "";
    this.disabled = false;
    this.focusTrapDisabled = false;
    this.form = undefined;
    this.readOnly = false;
    this.value = "";
    this.flipPlacements = undefined;
    this.headingLevel = undefined;
    this.valueAsDate = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.minAsDate = undefined;
    this.maxAsDate = undefined;
    this.min = undefined;
    this.max = undefined;
    this.open = false;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.scale = "m";
    this.placement = _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.range = false;
    this.required = false;
    this.overlayPositioning = "absolute";
    this.proximitySelectionDisabled = false;
    this.layout = "horizontal";
    this.datePickerActiveDate = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.focusedInput = "start";
    this.localeData = undefined;
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_11__.d)(this) : (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_11__.a)(this);
  }
  handleDisabledAndReadOnlyChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  valueWatcher(newValue) {
    if (!this.userChangedValue) {
      let newValueAsDate;
      if (Array.isArray(newValue)) {
        newValueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newValue);
      }
      else if (newValue) {
        newValueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(newValue);
      }
      else {
        newValueAsDate = undefined;
      }
      if (!this.valueAsDateChangedExternally && newValueAsDate !== this.valueAsDate) {
        this.valueAsDate = newValueAsDate;
      }
      this.localizeInputValues();
    }
    this.userChangedValue = false;
  }
  valueAsDateWatcher(valueAsDate) {
    this.datePickerActiveDate = valueAsDate;
    const newValue = this.range && Array.isArray(valueAsDate)
      ? [Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(valueAsDate[0]), Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(valueAsDate[1])]
      : Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(valueAsDate);
    if (this.value !== newValue) {
      this.valueAsDateChangedExternally = true;
      this.value = newValue;
      this.valueAsDateChangedExternally = false;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  onMessagesChange() {
    /* wired up by t9n util */
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
  openHandler(value) {
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    if (value) {
      this.reposition(true);
    }
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteDaySelectHandler() {
    if (this.shouldFocusRangeStart() || this.shouldFocusRangeEnd()) {
      return;
    }
    this.open = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    this.el.focus();
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.r)(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipPlacements: filteredFlipPlacements,
      type: "menu"
    }, delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    const { open } = this;
    open && this.openHandler(open);
    if (Array.isArray(this.value)) {
      this.valueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.value);
    }
    else if (this.value) {
      try {
        this.valueAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.value);
      }
      catch (error) {
        this.warnAboutInvalidValue(this.value);
        this.value = "";
      }
    }
    else if (this.range && this.valueAsDate) {
      this.setRangeValue(this.valueAsDate);
    }
    if (this.min) {
      this.minAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.min);
    }
    if (this.max) {
      this.maxAsDate = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.max);
    }
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.setFilteredPlacements();
    this.reposition(true);
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    await Promise.all([this.loadLocaleData(), Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this)]);
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
    this.localizeInputValues();
    this.reposition(true);
  }
  disconnectedCallback() {
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, this.referenceEl, this.floatingEl);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_10__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.u)(this);
  }
  render() {
    const { disabled, effectiveLocale, messages, numberingSystem, readOnly } = this;
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
      numberingSystem,
      locale: effectiveLocale,
      useGrouping: false
    };
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.deactivate, onKeyDown: this.keyDownHandler }, this.localeData && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-container" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setStartWrapper }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { "aria-autocomplete": "none", "aria-controls": this.dialogId, "aria-expanded": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.open), "aria-haspopup": "dialog", class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, disabled: disabled, icon: "calendar", "number-button-type": "none", numberingSystem: numberingSystem, onCalciteInputInput: this.calciteInternalInputInputHandler, onCalciteInternalInputBlur: this.calciteInternalInputBlurHandler, onCalciteInternalInputFocus: this.startInputFocus, onFocus: this.startEndInputFocus, placeholder: this.localeData?.placeholder, readOnly: readOnly, role: "combobox", scale: this.scale, type: "text",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setStartInput }), this.renderToggleIcon(this.open && this.focusedInput === "start")), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(!this.open), "aria-label": messages.chooseDate, "aria-live": "polite", "aria-modal": "true", class: {
        [CSS.menu]: true,
        [CSS.menuActive]: this.open
      }, id: this.dialogId, role: "dialog",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setFloatingEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        ["calendar-picker-wrapper"]: true,
        ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.F.animation]: true,
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.F.animationActive]: this.open
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker", { activeDate: this.datePickerActiveDate, activeRange: this.focusedInput, headingLevel: this.headingLevel, max: this.max, maxAsDate: this.maxAsDate, messageOverrides: this.messageOverrides, min: this.min, minAsDate: this.minAsDate, numberingSystem: numberingSystem, onCalciteDatePickerChange: this.handleDateChange, onCalciteDatePickerRangeChange: this.handleDateRangeChange, proximitySelectionDisabled: this.proximitySelectionDisabled, range: this.range, scale: this.scale, tabIndex: this.open ? undefined : -1, valueAsDate: this.valueAsDate,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setDatePickerRef }))), this.range && this.layout === "horizontal" && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "horizontal-arrow-container" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: this.scale === "l" ? "m" : "s" }))), this.range && this.layout === "vertical" && this.scale !== "s" && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vertical-arrow-container" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "arrow-down", scale: this.scale === "l" ? "m" : "s" }))), this.range && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setEndWrapper }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { "aria-autocomplete": "none", "aria-controls": this.dialogId, "aria-expanded": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.open), "aria-haspopup": "dialog", class: {
        input: true,
        "border-top-color-one": this.layout === "vertical" && this.range
      }, disabled: disabled, icon: "calendar", "number-button-type": "none", numberingSystem: numberingSystem, onCalciteInputInput: this.calciteInternalInputInputHandler, onCalciteInternalInputBlur: this.calciteInternalInputBlurHandler, onCalciteInternalInputFocus: this.endInputFocus, onFocus: this.startEndInputFocus, placeholder: this.localeData?.placeholder, readOnly: readOnly, role: "combobox", scale: this.scale, type: "text",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setEndInput }), this.renderToggleIcon(this.open && this.focusedInput === "end"))))), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.H, { component: this })));
  }
  renderToggleIcon(open) {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.toggleIcon }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  setReferenceEl() {
    const { focusedInput, layout, endWrapper, startWrapper } = this;
    this.referenceEl =
      focusedInput === "end" || layout === "vertical"
        ? endWrapper || startWrapper
        : startWrapper || endWrapper;
    requestAnimationFrame(() => (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl));
  }
  onLabelClick() {
    this.setFocus();
  }
  onBeforeOpen() {
    this.calciteInputDatePickerBeforeOpen.emit();
  }
  onOpen() {
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_11__.a)(this, {
      onActivate: () => {
        if (this.focusOnOpen) {
          this.datePickerEl.setFocus();
          this.focusOnOpen = false;
        }
      }
    });
    this.calciteInputDatePickerOpen.emit();
  }
  onBeforeClose() {
    this.calciteInputDatePickerBeforeClose.emit();
  }
  onClose() {
    this.calciteInputDatePickerClose.emit();
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
    this.restoreInputFocus();
    this.focusOnOpen = false;
  }
  commitValue() {
    const { focusedInput, value } = this;
    const focusedInputName = `${focusedInput}Input`;
    const focusedInputValue = this[focusedInputName].value;
    const date = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(focusedInputValue, this.localeData);
    const dateAsISO = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date);
    const valueIsArray = Array.isArray(value);
    if (this.range) {
      const focusedInputValueIndex = focusedInput === "start" ? 0 : 1;
      if (valueIsArray) {
        if (dateAsISO === value[focusedInputValueIndex]) {
          return;
        }
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value[0]),
            focusedInput === "end" ? date : Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value[1])
          ]);
          this.localizeInputValues();
        }
        else {
          this.setRangeValue([
            focusedInput === "end" && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value[0]),
            focusedInput === "start" && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value[1])
          ]);
        }
      }
      else {
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value[0]),
            focusedInput === "end" ? date : Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value[1])
          ]);
          this.localizeInputValues();
        }
      }
    }
    else {
      if (dateAsISO === value) {
        return;
      }
      this.setValue(date);
      this.localizeInputValues();
    }
  }
  async loadLocaleData() {
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
    this.localeData = await Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.effectiveLocale);
    this.localizeInputValues();
  }
  shouldFocusRangeStart() {
    const startValue = this.value[0];
    const endValue = this.value[1];
    return !!(endValue && !startValue && this.focusedInput === "end" && this.startInput);
  }
  shouldFocusRangeEnd() {
    const startValue = this.value[0];
    const endValue = this.value[1];
    return !!(startValue && !endValue && this.focusedInput === "start" && this.endInput);
  }
  restoreInputFocus() {
    if (!this.range) {
      this.startInput.setFocus();
      return;
    }
    const focusedInput = this.focusedInput === "start" ? this.startInput : this.endInput;
    focusedInput.setFocus();
  }
  localizeInputValues() {
    const date = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((this.range
      ? (Array.isArray(this.valueAsDate) && this.valueAsDate[0]) || undefined
      : this.valueAsDate), this.minAsDate, this.maxAsDate);
    const endDate = this.range
      ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-8a806067.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((Array.isArray(this.valueAsDate) && this.valueAsDate[1]) || undefined, this.minAsDate, this.maxAsDate)
      : null;
    const localizedDate = date && this.formatNumerals(date.toLocaleDateString(this.effectiveLocale));
    const localizedEndDate = endDate && this.formatNumerals(endDate.toLocaleDateString(this.effectiveLocale));
    this.setInputValue(localizedDate ?? "", "start");
    this.setInputValue((this.range && localizedEndDate) ?? "", "end");
  }
  warnAboutInvalidValue(value) {
    console.warn(`The specified value "${value}" does not conform to the required format, "YYYY-MM-DD".`);
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "disabled": ["handleDisabledAndReadOnlyChange"],
    "readOnly": ["handleDisabledAndReadOnlyChange"],
    "value": ["valueWatcher"],
    "valueAsDate": ["valueAsDateWatcher"],
    "flipPlacements": ["flipPlacementsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "min": ["onMinChanged"],
    "max": ["onMaxChanged"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "layout": ["setReferenceEl"],
    "focusedInput": ["setReferenceEl"],
    "effectiveLocale": ["loadLocaleData"]
  }; }
};
InputDatePicker.style = inputDatePickerCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2MyMzM3ZTNlNWQxZTE3NTFhMGVjMjQ4NTQ4YjEzMjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDMkc7QUFDaks7QUFDb0k7QUFDckU7QUFDTTtBQUN4RTtBQUMwQjtBQUNzQztBQUNEO0FBQ0U7QUFDZjtBQUNxQjtBQUM1RTtBQUNkO0FBQ0Y7QUFDQztBQUNDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSx5QkFBeUIsa0NBQWtDLGtDQUFrQyw4QkFBOEIseUNBQXlDLHVCQUF1Qix1Q0FBdUMsbUNBQW1DLDhCQUE4QiwrQkFBK0IsaUNBQWlDLGlDQUFpQyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGtCQUFrQixxQkFBcUIsaUJBQWlCLGlCQUFpQixtQkFBbUIsc0JBQXNCLDhCQUE4Qix1R0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrSkFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtKQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQSxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWlucHV0LWRhdGUtcGlja2VyLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBkIGFzIGRhdGVQYXJ0c0Zyb21Mb2NhbGl6ZWRTdHJpbmcsIGEgYXMgZGF0ZUZyb21Mb2NhbGl6ZWRTdHJpbmcsIGkgYXMgaW5SYW5nZSwgYiBhcyBkYXRlVG9JU08sIGcgYXMgZ2V0VmFsdWVBc0RhdGVSYW5nZSwgYyBhcyBkYXRlRnJvbUlTTywgZSBhcyBnZXRMb2NhbGVEYXRhLCBmIGFzIGRhdGVGcm9tUmFuZ2UgfSBmcm9tICcuL3V0aWxzLThhODA2MDY3LmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IGYgYXMgZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzLCBjIGFzIGNvbm5lY3RGbG9hdGluZ1VJLCBkIGFzIGRlZmF1bHRNZW51UGxhY2VtZW50LCByIGFzIHJlcG9zaXRpb24sIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIEYgYXMgRmxvYXRpbmdDU1MgfSBmcm9tICcuL2Zsb2F0aW5nLXVpLThkNTQ3MTc1LmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLWQ3MzU5ZWZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCB9IGZyb20gJy4vbGFiZWwtOWQyZWIzMzQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRMb2FkZWQsIHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtMjFkMmE2YWIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb2N1c1RyYXAsIGQgYXMgZGVhY3RpdmF0ZUZvY3VzVHJhcCwgYSBhcyBhY3RpdmF0ZUZvY3VzVHJhcCB9IGZyb20gJy4vZm9jdXNUcmFwQ29tcG9uZW50LTA3YWRjYjNmLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcbmltcG9ydCAnLi9kZWJvdW5jZS0wOTUwYTliOC5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBtZW51OiBcIm1lbnUtY29udGFpbmVyXCIsXG4gIG1lbnVBY3RpdmU6IFwibWVudS1jb250YWluZXItLWFjdGl2ZVwiLFxuICB0b2dnbGVJY29uOiBcInRvZ2dsZS1pY29uXCJcbn07XG5cbmNvbnN0IGlucHV0RGF0ZVBpY2tlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7LS1jYWxjaXRlLWljb24tc2l6ZToxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLWVpZ2h0aDowLjEyNXJlbTstLWNhbGNpdGUtc3BhY2luZy1xdWFydGVyOjAuMjVyZW07LS1jYWxjaXRlLXNwYWNpbmctaGFsZjowLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctdGhyZWUtcXVhcnRlcnM6MC43NXJlbTstLWNhbGNpdGUtc3BhY2luZzoxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtcXVhcnRlcjoxLjI1cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtaGFsZjoxLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctZG91YmxlOjJyZW07LS1jYWxjaXRlLW1lbnUtbWluLXdpZHRoOjEwcmVtOy0tY2FsY2l0ZS1oZWFkZXItbWluLWhlaWdodDozcmVtOy0tY2FsY2l0ZS1mb290ZXItbWluLWhlaWdodDozcmVtfTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OnZpc2libGU7dmVydGljYWwtYWxpZ246dG9wOy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QgLm1lbnUtY29udGFpbmVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXRvcF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfTpob3N0IC5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfTpob3N0IC5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49cmlnaHRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTVweCl9Omhvc3QgLm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmc6MC41cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmc6MXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNhbGVuZGFyLXBpY2tlci13cmFwcGVye3Bvc2l0aW9uOnN0YXRpYztpbmxpbmUtc2l6ZToxMDAlOy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApfS5pbnB1dC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlfS50b2dnbGUtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MXJlbTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aW5zZXQtaW5saW5lLWVuZDowO2luc2V0LWJsb2NrOjA7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZyl9Omhvc3QoW3JhbmdlXSkgLmlucHV0LWNvbnRhaW5lcntkaXNwbGF5OmZsZXh9Omhvc3QoW3JhbmdlXSkgLmlucHV0LXdyYXBwZXJ7ZmxleDoxIDEgYXV0b306aG9zdChbcmFuZ2VdKSAuaG9yaXpvbnRhbC1hcnJvdy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC4yNXJlbX06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF0pIC5pbnB1dC13cmFwcGVye2lubGluZS1zaXplOjEwMCV9Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdKSAuaW5wdXQtY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXSkgLmNhbGVuZGFyLXBpY2tlci13cmFwcGVyLS1lbmR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lcntpbnNldC1ibG9jay1zdGFydDoxLjVyZW07cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTttYXJnaW4taW5saW5lOjFweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWlubGluZTowLjYyNXJlbTtpbnNldC1pbmxpbmUtc3RhcnQ6MH06aG9zdChbc2NhbGU9c11bcmFuZ2VdOm5vdChbbGF5b3V0PXZlcnRpY2FsXSkpIC5jYWxlbmRhci1waWNrZXItd3JhcHBlcntpbmxpbmUtc2l6ZToyMTZweH06aG9zdChbc2NhbGU9bV1bcmFuZ2VdOm5vdChbbGF5b3V0PXZlcnRpY2FsXSkpIC5jYWxlbmRhci1waWNrZXItd3JhcHBlcntpbmxpbmUtc2l6ZToyODZweH06aG9zdChbc2NhbGU9bF1bcmFuZ2VdOm5vdChbbGF5b3V0PXZlcnRpY2FsXSkpIC5jYWxlbmRhci1waWNrZXItd3JhcHBlcntpbmxpbmUtc2l6ZTozOThweH0ubWVudS1jb250YWluZXJ7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bik7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleCk7dmlzaWJpbGl0eTpoaWRkZW59Lm1lbnUtY29udGFpbmVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXRvcF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfS5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfS5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49cmlnaHRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTVweCl9Lm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW29wZW5dKSAubWVudS1jb250YWluZXJ7dmlzaWJpbGl0eTp2aXNpYmxlfS5tZW51LWNvbnRhaW5lci0tYWN0aXZle3Zpc2liaWxpdHk6dmlzaWJsZX0uaW5wdXQgLmNhbGNpdGUtaW5wdXRfX3dyYXBwZXJ7bWFyZ2luLWJsb2NrLXN0YXJ0OjBweH06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF1bc2NhbGU9bV0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7aW5zZXQtYmxvY2stc3RhcnQ6MS41cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNzVyZW19Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdW3NjYWxlPW1dKSAudmVydGljYWwtYXJyb3ctY29udGFpbmVyIGNhbGNpdGUtaWNvbntibG9jay1zaXplOjAuNzVyZW07aW5saW5lLXNpemU6MC43NXJlbTttaW4taW5saW5lLXNpemU6MHB4fTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXVtzY2FsZT1sXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lcntpbnNldC1ibG9jay1zdGFydDoyLjI1cmVtO3BhZGRpbmctaW5saW5lOjAuODc1cmVtfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXVtvcGVuXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lcntkaXNwbGF5Om5vbmV9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IElucHV0RGF0ZVBpY2tlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dERhdGVQaWNrZXJDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0SW5wdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdGhpcy5wYXJzZU51bWVyYWxzKHZhbHVlKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXROdW1lcmFscyhwYXJzZWRWYWx1ZSk7XG4gICAgICB0YXJnZXQudmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgIGNvbnN0IHsgeWVhciB9ID0gZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyh2YWx1ZSwgdGhpcy5sb2NhbGVEYXRhKTtcbiAgICAgIGlmICh5ZWFyICYmIHllYXIubGVuZ3RoIDwgNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gZGF0ZUZyb21Mb2NhbGl6ZWRTdHJpbmcodmFsdWUsIHRoaXMubG9jYWxlRGF0YSk7XG4gICAgICBpZiAoaW5SYW5nZShkYXRlLCB0aGlzLm1pbiwgdGhpcy5tYXgpKSB7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlckFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jb21taXRWYWx1ZSgpO1xuICAgIH07XG4gICAgdGhpcy5kaWFsb2dJZCA9IGBkYXRlLXBpY2tlci1kaWFsb2ctLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubGFzdEJsdXJyZWRJbnB1dCA9IFwibm9uZVwiO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMub3BlblRyYW5zaXRpb25Qcm9wID0gXCJvcGFjaXR5XCI7XG4gICAgdGhpcy52YWx1ZUFzRGF0ZUNoYW5nZWRFeHRlcm5hbGx5ID0gZmFsc2U7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMub25JbnB1dFdyYXBwZXJDbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMubGFzdEJsdXJyZWRJbnB1dCAhPT0gXCJub25lXCIgJiYgdGhpcy5vcGVuKSA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdEJsdXJyZWRJbnB1dCA9IFwibm9uZVwiO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBmbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyZWRGbGlwUGxhY2VtZW50cyA9IGZsaXBQbGFjZW1lbnRzXG4gICAgICAgID8gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKGZsaXBQbGFjZW1lbnRzLCBlbClcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTdGFydElucHV0ID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0SW5wdXQgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0RW5kSW5wdXQgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZW5kSW5wdXQgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5sYXN0Qmx1cnJlZElucHV0ID0gXCJub25lXCI7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcmV2ZW50ZWQsIGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5jb21taXRWYWx1ZSgpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRGb2N1c1JhbmdlRW5kKCkpIHtcbiAgICAgICAgICB0aGlzLmVuZElucHV0Py5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvdWxkRm9jdXNSYW5nZVN0YXJ0KCkpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW5wdXQ/LnNldEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSB0cnVlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnN0YXJ0SW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJzdGFydFwiO1xuICAgIH07XG4gICAgdGhpcy5zdGFydEVuZElucHV0Rm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGJsdXJyZWRFbCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICB0aGlzLmxhc3RCbHVycmVkSW5wdXQgPVxuICAgICAgICBibHVycmVkRWwgPT09IHRoaXMuc3RhcnRJbnB1dCA/IFwic3RhcnRcIiA6IGJsdXJyZWRFbCA9PT0gdGhpcy5lbmRJbnB1dCA/IFwiZW5kXCIgOiBcIm5vbmVcIjtcbiAgICB9O1xuICAgIHRoaXMuZW5kSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJlbmRcIjtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmxvYXRpbmdFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsID0gZWw7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTdGFydFdyYXBwZXIgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRXcmFwcGVyID0gZWw7XG4gICAgICB0aGlzLnNldFJlZmVyZW5jZUVsKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEVuZFdyYXBwZXIgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZW5kV3JhcHBlciA9IGVsO1xuICAgICAgdGhpcy5zZXRSZWZlcmVuY2VFbCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXREYXRlUGlja2VyUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJFbCA9IGVsO1xuICAgICAgY29ubmVjdEZvY3VzVHJhcCh0aGlzLCB7XG4gICAgICAgIGZvY3VzVHJhcEVsOiBlbCxcbiAgICAgICAgZm9jdXNUcmFwT3B0aW9uczoge1xuICAgICAgICAgIGluaXRpYWxGb2N1czogZmFsc2UsXG4gICAgICAgICAgc2V0UmV0dXJuRm9jdXM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgQ2FsY2l0ZURhdGVQaWNrZXIgY3VzdG9tIGNoYW5nZSBldmVudFxuICAgICAqL1xuICAgIHRoaXMuaGFuZGxlRGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZUFzRGF0ZSk7XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGF0ZVJhbmdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZUFzRGF0ZTtcbiAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSA9IChuZXdWYWx1ZSwgaW5wdXQgPSBcInN0YXJ0XCIpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzW2Ake2lucHV0fUlucHV0YF07XG4gICAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5wdXRFbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5zZXRSYW5nZVZhbHVlID0gKHZhbHVlQXNEYXRlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB2YWx1ZTogb2xkVmFsdWUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvbGRWYWx1ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG9sZFZhbHVlKTtcbiAgICAgIGNvbnN0IHZhbHVlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpO1xuICAgICAgY29uc3QgbmV3U3RhcnREYXRlID0gdmFsdWVJc0FycmF5ID8gdmFsdWVBc0RhdGVbMF0gOiBudWxsO1xuICAgICAgY29uc3QgbmV3U3RhcnREYXRlSVNPID0gdmFsdWVJc0FycmF5ID8gZGF0ZVRvSVNPKG5ld1N0YXJ0RGF0ZSkgOiBcIlwiO1xuICAgICAgY29uc3QgbmV3RW5kRGF0ZSA9IHZhbHVlSXNBcnJheSA/IHZhbHVlQXNEYXRlWzFdIDogbnVsbDtcbiAgICAgIGNvbnN0IG5ld0VuZERhdGVJU08gPSB2YWx1ZUlzQXJyYXkgPyBkYXRlVG9JU08obmV3RW5kRGF0ZSkgOiBcIlwiO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdTdGFydERhdGVJU08gfHwgbmV3RW5kRGF0ZUlTTyA/IFtuZXdTdGFydERhdGVJU08sIG5ld0VuZERhdGVJU09dIDogXCJcIjtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBuZXdWYWx1ZSA/IGdldFZhbHVlQXNEYXRlUmFuZ2UobmV3VmFsdWUpIDogdW5kZWZpbmVkO1xuICAgICAgY29uc3QgY2hhbmdlRXZlbnQgPSB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgaWYgKGNoYW5nZUV2ZW50ICYmIGNoYW5nZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICBpZiAob2xkVmFsdWVJc0FycmF5KSB7XG4gICAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKG9sZFZhbHVlWzBdLCBcInN0YXJ0XCIpO1xuICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShvbGRWYWx1ZVsxXSwgXCJlbmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZGF0ZVRvSVNPKHZhbHVlKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBuZXdWYWx1ZSA/IGRhdGVGcm9tSVNPKG5ld1ZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZSB8fCBcIlwiO1xuICAgICAgY29uc3QgY2hhbmdlRXZlbnQgPSB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgaWYgKGNoYW5nZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUob2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jb21tb25EYXRlU2VwYXJhdG9ycyA9IFtcIi5cIiwgXCItXCIsIFwiL1wiXTtcbiAgICB0aGlzLmZvcm1hdE51bWVyYWxzID0gKHZhbHVlKSA9PiB2YWx1ZVxuICAgICAgPyB2YWx1ZVxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoY2hhcikgPT4gdGhpcy5jb21tb25EYXRlU2VwYXJhdG9ycz8uaW5jbHVkZXMoY2hhcilcbiAgICAgICAgPyB0aGlzLmxvY2FsZURhdGE/LnNlcGFyYXRvclxuICAgICAgICA6IG51bWJlcktleXM/LmluY2x1ZGVzKGNoYXIpXG4gICAgICAgICAgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXI/Lm51bWJlckZvcm1hdHRlcj8uZm9ybWF0KE51bWJlcihjaGFyKSlcbiAgICAgICAgICA6IGNoYXIpXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICA6IFwiXCI7XG4gICAgdGhpcy5wYXJzZU51bWVyYWxzID0gKHZhbHVlKSA9PiB2YWx1ZVxuICAgICAgPyB2YWx1ZVxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoY2hhcikgPT4gbnVtYmVyS2V5cy5pbmNsdWRlcyhjaGFyKSA/IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKGNoYXIpIDogY2hhcilcbiAgICAgICAgLmpvaW4oXCJcIilcbiAgICAgIDogXCJcIjtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RyYXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5mbGlwUGxhY2VtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4QXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZWZhdWx0TWVudVBsYWNlbWVudDtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxheW91dCA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIHRoaXMuZGF0ZVBpY2tlckFjdGl2ZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJzdGFydFwiO1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIGxldCBuZXdWYWx1ZUFzRGF0ZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZUFzRGF0ZSA9IGdldFZhbHVlQXNEYXRlUmFuZ2UobmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgbmV3VmFsdWVBc0RhdGUgPSBkYXRlRnJvbUlTTyhuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWVBc0RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSAmJiBuZXdWYWx1ZUFzRGF0ZSAhPT0gdGhpcy52YWx1ZUFzRGF0ZSkge1xuICAgICAgICB0aGlzLnZhbHVlQXNEYXRlID0gbmV3VmFsdWVBc0RhdGU7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgdmFsdWVBc0RhdGVXYXRjaGVyKHZhbHVlQXNEYXRlKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyQWN0aXZlRGF0ZSA9IHZhbHVlQXNEYXRlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKVxuICAgICAgPyBbZGF0ZVRvSVNPKHZhbHVlQXNEYXRlWzBdKSwgZGF0ZVRvSVNPKHZhbHVlQXNEYXRlWzFdKV1cbiAgICAgIDogZGF0ZVRvSVNPKHZhbHVlQXNEYXRlKTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlQ2hhbmdlZEV4dGVybmFsbHkgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZmxpcFBsYWNlbWVudHNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBvbk1pbkNoYW5nZWQobWluKSB7XG4gICAgaWYgKG1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyhtaW4pO1xuICAgIH1cbiAgfVxuICBvbk1heENoYW5nZWQobWF4KSB7XG4gICAgaWYgKG1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyhtYXgpO1xuICAgIH1cbiAgfVxuICBvcGVuSGFuZGxlcih2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZURheVNlbGVjdEhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNSYW5nZVN0YXJ0KCkgfHwgdGhpcy5zaG91bGRGb2N1c1JhbmdlRW5kKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZmxvYXRpbmdFbCwgcmVmZXJlbmNlRWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICByZWZlcmVuY2VFbCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgdHlwZTogXCJtZW51XCJcbiAgICB9LCBkZWxheWVkKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcztcbiAgICBvcGVuICYmIHRoaXMub3BlbkhhbmRsZXIob3Blbik7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZGF0ZUZyb21JU08odGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy53YXJuQWJvdXRJbnZhbGlkVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJhbmdlICYmIHRoaXMudmFsdWVBc0RhdGUpIHtcbiAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSh0aGlzLnZhbHVlQXNEYXRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWluKSB7XG4gICAgICB0aGlzLm1pbkFzRGF0ZSA9IGRhdGVGcm9tSVNPKHRoaXMubWluKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4KSB7XG4gICAgICB0aGlzLm1heEFzRGF0ZSA9IGRhdGVGcm9tSVNPKHRoaXMubWF4KTtcbiAgICB9XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICB9O1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMubG9hZExvY2FsZURhdGEoKSwgc2V0VXBNZXNzYWdlcyh0aGlzKV0pO1xuICAgIHRoaXMub25NaW5DaGFuZ2VkKHRoaXMubWluKTtcbiAgICB0aGlzLm9uTWF4Q2hhbmdlZCh0aGlzLm1heCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5sb2NhbGl6ZUlucHV0VmFsdWVzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgZWZmZWN0aXZlTG9jYWxlLCBtZXNzYWdlcywgbnVtYmVyaW5nU3lzdGVtLCByZWFkT25seSB9ID0gdGhpcztcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGxvY2FsZTogZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkJsdXI6IHRoaXMuZGVhY3RpdmF0ZSwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIHRoaXMubG9jYWxlRGF0YSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LWNvbnRhaW5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC13cmFwcGVyXCIsIG9uQ2xpY2s6IHRoaXMub25JbnB1dFdyYXBwZXJDbGljayxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFN0YXJ0V3JhcHBlciB9LCBoKFwiY2FsY2l0ZS1pbnB1dFwiLCB7IFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJub25lXCIsIFwiYXJpYS1jb250cm9sc1wiOiB0aGlzLmRpYWxvZ0lkLCBcImFyaWEtZXhwYW5kZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLm9wZW4pLCBcImFyaWEtaGFzcG9wdXBcIjogXCJkaWFsb2dcIiwgY2xhc3M6IGBpbnB1dCAke3RoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgdGhpcy5yYW5nZSA/IGBuby1ib3R0b20tYm9yZGVyYCA6IGBgfWAsIGRpc2FibGVkOiBkaXNhYmxlZCwgaWNvbjogXCJjYWxlbmRhclwiLCBcIm51bWJlci1idXR0b24tdHlwZVwiOiBcIm5vbmVcIiwgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZUlucHV0SW5wdXQ6IHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRJbnB1dEhhbmRsZXIsIG9uQ2FsY2l0ZUludGVybmFsSW5wdXRCbHVyOiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Qmx1ckhhbmRsZXIsIG9uQ2FsY2l0ZUludGVybmFsSW5wdXRGb2N1czogdGhpcy5zdGFydElucHV0Rm9jdXMsIG9uRm9jdXM6IHRoaXMuc3RhcnRFbmRJbnB1dEZvY3VzLCBwbGFjZWhvbGRlcjogdGhpcy5sb2NhbGVEYXRhPy5wbGFjZWhvbGRlciwgcmVhZE9ubHk6IHJlYWRPbmx5LCByb2xlOiBcImNvbWJvYm94XCIsIHNjYWxlOiB0aGlzLnNjYWxlLCB0eXBlOiBcInRleHRcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFN0YXJ0SW5wdXQgfSksIHRoaXMucmVuZGVyVG9nZ2xlSWNvbih0aGlzLm9wZW4gJiYgdGhpcy5mb2N1c2VkSW5wdXQgPT09IFwic3RhcnRcIikpLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKCF0aGlzLm9wZW4pLCBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMuY2hvb3NlRGF0ZSwgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLm1lbnVdOiB0cnVlLFxuICAgICAgICBbQ1NTLm1lbnVBY3RpdmVdOiB0aGlzLm9wZW5cbiAgICAgIH0sIGlkOiB0aGlzLmRpYWxvZ0lkLCByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0RmxvYXRpbmdFbCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW1wiY2FsZW5kYXItcGlja2VyLXdyYXBwZXJcIl06IHRydWUsXG4gICAgICAgIFtcImNhbGVuZGFyLXBpY2tlci13cmFwcGVyLS1lbmRcIl06IHRoaXMuZm9jdXNlZElucHV0ID09PSBcImVuZFwiLFxuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uXTogdHJ1ZSxcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbkFjdGl2ZV06IHRoaXMub3BlblxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFRyYW5zaXRpb25FbCB9LCBoKFwiY2FsY2l0ZS1kYXRlLXBpY2tlclwiLCB7IGFjdGl2ZURhdGU6IHRoaXMuZGF0ZVBpY2tlckFjdGl2ZURhdGUsIGFjdGl2ZVJhbmdlOiB0aGlzLmZvY3VzZWRJbnB1dCwgaGVhZGluZ0xldmVsOiB0aGlzLmhlYWRpbmdMZXZlbCwgbWF4OiB0aGlzLm1heCwgbWF4QXNEYXRlOiB0aGlzLm1heEFzRGF0ZSwgbWVzc2FnZU92ZXJyaWRlczogdGhpcy5tZXNzYWdlT3ZlcnJpZGVzLCBtaW46IHRoaXMubWluLCBtaW5Bc0RhdGU6IHRoaXMubWluQXNEYXRlLCBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSwgb25DYWxjaXRlRGF0ZVBpY2tlckNoYW5nZTogdGhpcy5oYW5kbGVEYXRlQ2hhbmdlLCBvbkNhbGNpdGVEYXRlUGlja2VyUmFuZ2VDaGFuZ2U6IHRoaXMuaGFuZGxlRGF0ZVJhbmdlQ2hhbmdlLCBwcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZDogdGhpcy5wcm94aW1pdHlTZWxlY3Rpb25EaXNhYmxlZCwgcmFuZ2U6IHRoaXMucmFuZ2UsIHNjYWxlOiB0aGlzLnNjYWxlLCB0YWJJbmRleDogdGhpcy5vcGVuID8gdW5kZWZpbmVkIDogLTEsIHZhbHVlQXNEYXRlOiB0aGlzLnZhbHVlQXNEYXRlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0RGF0ZVBpY2tlclJlZiB9KSkpLCB0aGlzLnJhbmdlICYmIHRoaXMubGF5b3V0ID09PSBcImhvcml6b250YWxcIiAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImhvcml6b250YWwtYXJyb3ctY29udGFpbmVyXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IHRydWUsIGljb246IFwiYXJyb3ctcmlnaHRcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpLCB0aGlzLnJhbmdlICYmIHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgdGhpcy5zY2FsZSAhPT0gXCJzXCIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJ2ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJcIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJhcnJvdy1kb3duXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKSwgdGhpcy5yYW5nZSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LXdyYXBwZXJcIiwgb25DbGljazogdGhpcy5vbklucHV0V3JhcHBlckNsaWNrLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0RW5kV3JhcHBlciB9LCBoKFwiY2FsY2l0ZS1pbnB1dFwiLCB7IFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJub25lXCIsIFwiYXJpYS1jb250cm9sc1wiOiB0aGlzLmRpYWxvZ0lkLCBcImFyaWEtZXhwYW5kZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLm9wZW4pLCBcImFyaWEtaGFzcG9wdXBcIjogXCJkaWFsb2dcIiwgY2xhc3M6IHtcbiAgICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICAgIFwiYm9yZGVyLXRvcC1jb2xvci1vbmVcIjogdGhpcy5sYXlvdXQgPT09IFwidmVydGljYWxcIiAmJiB0aGlzLnJhbmdlXG4gICAgICB9LCBkaXNhYmxlZDogZGlzYWJsZWQsIGljb246IFwiY2FsZW5kYXJcIiwgXCJudW1iZXItYnV0dG9uLXR5cGVcIjogXCJub25lXCIsIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnB1dElucHV0OiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0SW5wdXRIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0Qmx1cjogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXM6IHRoaXMuZW5kSW5wdXRGb2N1cywgb25Gb2N1czogdGhpcy5zdGFydEVuZElucHV0Rm9jdXMsIHBsYWNlaG9sZGVyOiB0aGlzLmxvY2FsZURhdGE/LnBsYWNlaG9sZGVyLCByZWFkT25seTogcmVhZE9ubHksIHJvbGU6IFwiY29tYm9ib3hcIiwgc2NhbGU6IHRoaXMuc2NhbGUsIHR5cGU6IFwidGV4dFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0RW5kSW5wdXQgfSksIHRoaXMucmVuZGVyVG9nZ2xlSWNvbih0aGlzLm9wZW4gJiYgdGhpcy5mb2N1c2VkSW5wdXQgPT09IFwiZW5kXCIpKSkpKSwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpO1xuICB9XG4gIHJlbmRlclRvZ2dsZUljb24ob3Blbikge1xuICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnRvZ2dsZUljb24gfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IG9wZW4gPyBcImNoZXZyb24tdXBcIiA6IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiBcInNcIiB9KSkpO1xuICB9XG4gIHNldFJlZmVyZW5jZUVsKCkge1xuICAgIGNvbnN0IHsgZm9jdXNlZElucHV0LCBsYXlvdXQsIGVuZFdyYXBwZXIsIHN0YXJ0V3JhcHBlciB9ID0gdGhpcztcbiAgICB0aGlzLnJlZmVyZW5jZUVsID1cbiAgICAgIGZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIiB8fCBsYXlvdXQgPT09IFwidmVydGljYWxcIlxuICAgICAgICA/IGVuZFdyYXBwZXIgfHwgc3RhcnRXcmFwcGVyXG4gICAgICAgIDogc3RhcnRXcmFwcGVyIHx8IGVuZFdyYXBwZXI7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGNvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCkpO1xuICB9XG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZU9wZW4uZW1pdCgpO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzLCB7XG4gICAgICBvbkFjdGl2YXRlOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzT25PcGVuKSB7XG4gICAgICAgICAgdGhpcy5kYXRlUGlja2VyRWwuc2V0Rm9jdXMoKTtcbiAgICAgICAgICB0aGlzLmZvY3VzT25PcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJPcGVuLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNsb3NlLmVtaXQoKTtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICB0aGlzLmZvY3VzT25PcGVuID0gZmFsc2U7XG4gIH1cbiAgY29tbWl0VmFsdWUoKSB7XG4gICAgY29uc3QgeyBmb2N1c2VkSW5wdXQsIHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZvY3VzZWRJbnB1dE5hbWUgPSBgJHtmb2N1c2VkSW5wdXR9SW5wdXRgO1xuICAgIGNvbnN0IGZvY3VzZWRJbnB1dFZhbHVlID0gdGhpc1tmb2N1c2VkSW5wdXROYW1lXS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZGF0ZUZyb21Mb2NhbGl6ZWRTdHJpbmcoZm9jdXNlZElucHV0VmFsdWUsIHRoaXMubG9jYWxlRGF0YSk7XG4gICAgY29uc3QgZGF0ZUFzSVNPID0gZGF0ZVRvSVNPKGRhdGUpO1xuICAgIGNvbnN0IHZhbHVlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICBjb25zdCBmb2N1c2VkSW5wdXRWYWx1ZUluZGV4ID0gZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgPyAwIDogMTtcbiAgICAgIGlmICh2YWx1ZUlzQXJyYXkpIHtcbiAgICAgICAgaWYgKGRhdGVBc0lTTyA9PT0gdmFsdWVbZm9jdXNlZElucHV0VmFsdWVJbmRleF0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoW1xuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgPyBkYXRlIDogZGF0ZUZyb21JU08odmFsdWVbMF0pLFxuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcImVuZFwiID8gZGF0ZSA6IGRhdGVGcm9tSVNPKHZhbHVlWzFdKVxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZShbXG4gICAgICAgICAgICBmb2N1c2VkSW5wdXQgPT09IFwiZW5kXCIgJiYgZGF0ZUZyb21JU08odmFsdWVbMF0pLFxuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgJiYgZGF0ZUZyb21JU08odmFsdWVbMV0pXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZShbXG4gICAgICAgICAgICBmb2N1c2VkSW5wdXQgPT09IFwic3RhcnRcIiA/IGRhdGUgOiBkYXRlRnJvbUlTTyh2YWx1ZVswXSksXG4gICAgICAgICAgICBmb2N1c2VkSW5wdXQgPT09IFwiZW5kXCIgPyBkYXRlIDogZGF0ZUZyb21JU08odmFsdWVbMV0pXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy5sb2NhbGl6ZUlucHV0VmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZGF0ZUFzSVNPID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlKGRhdGUpO1xuICAgICAgdGhpcy5sb2NhbGl6ZUlucHV0VmFsdWVzKCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGxvYWRMb2NhbGVEYXRhKCkge1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IGF3YWl0IGdldExvY2FsZURhdGEodGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICB9XG4gIHNob3VsZEZvY3VzUmFuZ2VTdGFydCgpIHtcbiAgICBjb25zdCBzdGFydFZhbHVlID0gdGhpcy52YWx1ZVswXTtcbiAgICBjb25zdCBlbmRWYWx1ZSA9IHRoaXMudmFsdWVbMV07XG4gICAgcmV0dXJuICEhKGVuZFZhbHVlICYmICFzdGFydFZhbHVlICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcImVuZFwiICYmIHRoaXMuc3RhcnRJbnB1dCk7XG4gIH1cbiAgc2hvdWxkRm9jdXNSYW5nZUVuZCgpIHtcbiAgICBjb25zdCBzdGFydFZhbHVlID0gdGhpcy52YWx1ZVswXTtcbiAgICBjb25zdCBlbmRWYWx1ZSA9IHRoaXMudmFsdWVbMV07XG4gICAgcmV0dXJuICEhKHN0YXJ0VmFsdWUgJiYgIWVuZFZhbHVlICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgJiYgdGhpcy5lbmRJbnB1dCk7XG4gIH1cbiAgcmVzdG9yZUlucHV0Rm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnN0YXJ0SW5wdXQuc2V0Rm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNlZElucHV0ID0gdGhpcy5mb2N1c2VkSW5wdXQgPT09IFwic3RhcnRcIiA/IHRoaXMuc3RhcnRJbnB1dCA6IHRoaXMuZW5kSW5wdXQ7XG4gICAgZm9jdXNlZElucHV0LnNldEZvY3VzKCk7XG4gIH1cbiAgbG9jYWxpemVJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBkYXRlID0gZGF0ZUZyb21SYW5nZSgodGhpcy5yYW5nZVxuICAgICAgPyAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlQXNEYXRlKSAmJiB0aGlzLnZhbHVlQXNEYXRlWzBdKSB8fCB1bmRlZmluZWRcbiAgICAgIDogdGhpcy52YWx1ZUFzRGF0ZSksIHRoaXMubWluQXNEYXRlLCB0aGlzLm1heEFzRGF0ZSk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHRoaXMucmFuZ2VcbiAgICAgID8gZGF0ZUZyb21SYW5nZSgoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlQXNEYXRlKSAmJiB0aGlzLnZhbHVlQXNEYXRlWzFdKSB8fCB1bmRlZmluZWQsIHRoaXMubWluQXNEYXRlLCB0aGlzLm1heEFzRGF0ZSlcbiAgICAgIDogbnVsbDtcbiAgICBjb25zdCBsb2NhbGl6ZWREYXRlID0gZGF0ZSAmJiB0aGlzLmZvcm1hdE51bWVyYWxzKGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuZWZmZWN0aXZlTG9jYWxlKSk7XG4gICAgY29uc3QgbG9jYWxpemVkRW5kRGF0ZSA9IGVuZERhdGUgJiYgdGhpcy5mb3JtYXROdW1lcmFscyhlbmREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmVmZmVjdGl2ZUxvY2FsZSkpO1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZWREYXRlID8/IFwiXCIsIFwic3RhcnRcIik7XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKCh0aGlzLnJhbmdlICYmIGxvY2FsaXplZEVuZERhdGUpID8/IFwiXCIsIFwiZW5kXCIpO1xuICB9XG4gIHdhcm5BYm91dEludmFsaWRWYWx1ZSh2YWx1ZSkge1xuICAgIGNvbnNvbGUud2FybihgVGhlIHNwZWNpZmllZCB2YWx1ZSBcIiR7dmFsdWV9XCIgZG9lcyBub3QgY29uZm9ybSB0byB0aGUgcmVxdWlyZWQgZm9ybWF0LCBcIllZWVktTU0tRERcIi5gKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZm9jdXNUcmFwRGlzYWJsZWRcIjogW1wiaGFuZGxlRm9jdXNUcmFwRGlzYWJsZWRcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbXCJoYW5kbGVEaXNhYmxlZEFuZFJlYWRPbmx5Q2hhbmdlXCJdLFxuICAgIFwicmVhZE9ubHlcIjogW1wiaGFuZGxlRGlzYWJsZWRBbmRSZWFkT25seUNoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcInZhbHVlQXNEYXRlXCI6IFtcInZhbHVlQXNEYXRlV2F0Y2hlclwiXSxcbiAgICBcImZsaXBQbGFjZW1lbnRzXCI6IFtcImZsaXBQbGFjZW1lbnRzSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcIm1pblwiOiBbXCJvbk1pbkNoYW5nZWRcIl0sXG4gICAgXCJtYXhcIjogW1wib25NYXhDaGFuZ2VkXCJdLFxuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwibGF5b3V0XCI6IFtcInNldFJlZmVyZW5jZUVsXCJdLFxuICAgIFwiZm9jdXNlZElucHV0XCI6IFtcInNldFJlZmVyZW5jZUVsXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImxvYWRMb2NhbGVEYXRhXCJdXG4gIH07IH1cbn07XG5JbnB1dERhdGVQaWNrZXIuc3R5bGUgPSBpbnB1dERhdGVQaWNrZXJDc3M7XG5cbmV4cG9ydCB7IElucHV0RGF0ZVBpY2tlciBhcyBjYWxjaXRlX2lucHV0X2RhdGVfcGlja2VyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=