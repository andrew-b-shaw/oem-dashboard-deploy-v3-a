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
/* harmony import */ var _utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-8a806067.js */ "./node_modules/@esri/calcite-components/dist/esm/utils-8a806067.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floating-ui-8d547175.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./focusTrapComponent-07adcb3f.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
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
      const { year } = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.d)(value, this.localeData);
      if (year && year.length < 4) {
        return;
      }
      const date = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.a)(value, this.localeData);
      if ((0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.i)(date, this.min, this.max)) {
        this.datePickerActiveDate = date;
      }
    };
    this.calciteInternalInputBlurHandler = () => {
      this.commitValue();
    };
    this.dialogId = `date-picker-dialog--${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_13__.g)()}`;
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
      (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_12__.c)(this, {
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
      const newStartDateISO = valueIsArray ? (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(newStartDate) : "";
      const newEndDate = valueIsArray ? valueAsDate[1] : null;
      const newEndDateISO = valueIsArray ? (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(newEndDate) : "";
      const newValue = newStartDateISO || newEndDateISO ? [newStartDateISO, newEndDateISO] : "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue;
      this.valueAsDate = newValue ? (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.g)(newValue) : undefined;
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
      const newValue = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(value);
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.valueAsDate = newValue ? (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(newValue) : undefined;
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
    focusTrapDisabled ? (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_12__.d)(this) : (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_12__.a)(this);
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
        newValueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.g)(newValue);
      }
      else if (newValue) {
        newValueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(newValue);
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
      ? [(0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(valueAsDate[0]), (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(valueAsDate[1])]
      : (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(valueAsDate);
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
      this.minAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(min);
    }
  }
  onMaxChanged(max) {
    if (max) {
      this.maxAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(max);
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
      this.valueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.value);
    }
    else if (this.value) {
      try {
        this.valueAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.value);
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
      this.minAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.min);
    }
    if (this.max) {
      this.maxAsDate = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.max);
    }
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
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
    await Promise.all([this.loadLocaleData(), (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_11__.s)(this)]);
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
    this.localizeInputValues();
    this.reposition(true);
  }
  disconnectedCallback() {
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, this.referenceEl, this.floatingEl);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_10__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
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
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_12__.a)(this, {
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
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
    this.restoreInputFocus();
    this.focusOnOpen = false;
  }
  commitValue() {
    const { focusedInput, value } = this;
    const focusedInputName = `${focusedInput}Input`;
    const focusedInputValue = this[focusedInputName].value;
    const date = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.a)(focusedInputValue, this.localeData);
    const dateAsISO = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.b)(date);
    const valueIsArray = Array.isArray(value);
    if (this.range) {
      const focusedInputValueIndex = focusedInput === "start" ? 0 : 1;
      if (valueIsArray) {
        if (dateAsISO === value[focusedInputValueIndex]) {
          return;
        }
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[0]),
            focusedInput === "end" ? date : (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[1])
          ]);
          this.localizeInputValues();
        }
        else {
          this.setRangeValue([
            focusedInput === "end" && (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[0]),
            focusedInput === "start" && (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[1])
          ]);
        }
      }
      else {
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[0]),
            focusedInput === "end" ? date : (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[1])
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
    this.localeData = await (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.effectiveLocale);
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
    const date = (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)((this.range
      ? (Array.isArray(this.valueAsDate) && this.valueAsDate[0]) || undefined
      : this.valueAsDate), this.minAsDate, this.maxAsDate);
    const endDate = this.range
      ? (0,_utils_8a806067_js__WEBPACK_IMPORTED_MODULE_1__.f)((Array.isArray(this.valueAsDate) && this.valueAsDate[1]) || undefined, this.minAsDate, this.maxAsDate)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYmQyNDM3NzM5ZmIxOTg4NzU1OGY1OGI2NDAzODkwMjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDMkc7QUFDaks7QUFDb0k7QUFDckU7QUFDTTtBQUN4RTtBQUMwQjtBQUNzQztBQUNEO0FBQ0U7QUFDZjtBQUNxQjtBQUM1RTtBQUNkO0FBQ0Y7QUFDQztBQUNDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSx5QkFBeUIsa0NBQWtDLGtDQUFrQyw4QkFBOEIseUNBQXlDLHVCQUF1Qix1Q0FBdUMsbUNBQW1DLDhCQUE4QiwrQkFBK0IsaUNBQWlDLGlDQUFpQyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGtCQUFrQixxQkFBcUIsaUJBQWlCLGlCQUFpQixtQkFBbUIsc0JBQXNCLDhCQUE4Qix1R0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1pbnB1dC1kYXRlLXBpY2tlci5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS91dGlscy04YTgwNjA2Ny5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgZCBhcyBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nLCBhIGFzIGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nLCBpIGFzIGluUmFuZ2UsIGIgYXMgZGF0ZVRvSVNPLCBnIGFzIGdldFZhbHVlQXNEYXRlUmFuZ2UsIGMgYXMgZGF0ZUZyb21JU08sIGUgYXMgZ2V0TG9jYWxlRGF0YSwgZiBhcyBkYXRlRnJvbVJhbmdlIH0gZnJvbSAnLi91dGlscy04YTgwNjA2Ny5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cywgYyBhcyBjb25uZWN0RmxvYXRpbmdVSSwgZCBhcyBkZWZhdWx0TWVudVBsYWNlbWVudCwgciBhcyByZXBvc2l0aW9uLCBhIGFzIGRpc2Nvbm5lY3RGbG9hdGluZ1VJLCBGIGFzIEZsb2F0aW5nQ1NTIH0gZnJvbSAnLi9mbG9hdGluZy11aS04ZDU0NzE3NS5qcyc7XG5pbXBvcnQgeyBzIGFzIHN1Ym1pdEZvcm0sIGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS1kNzM1OWVmZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlcktleXMgfSBmcm9tICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwgfSBmcm9tICcuL2xhYmVsLTlkMmViMzM0LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCB9IGZyb20gJy4vb3BlbkNsb3NlQ29tcG9uZW50LTIxZDJhNmFiLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Rm9jdXNUcmFwLCBkIGFzIGRlYWN0aXZhdGVGb2N1c1RyYXAsIGEgYXMgYWN0aXZhdGVGb2N1c1RyYXAgfSBmcm9tICcuL2ZvY3VzVHJhcENvbXBvbmVudC0wN2FkY2IzZi5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgJy4vZGVib3VuY2UtMDk1MGE5YjguanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbWVudTogXCJtZW51LWNvbnRhaW5lclwiLFxuICBtZW51QWN0aXZlOiBcIm1lbnUtY29udGFpbmVyLS1hY3RpdmVcIixcbiAgdG9nZ2xlSWNvbjogXCJ0b2dnbGUtaWNvblwiXG59O1xuXG5jb25zdCBpbnB1dERhdGVQaWNrZXJDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpob3N0ey0tY2FsY2l0ZS1pY29uLXNpemU6MXJlbTstLWNhbGNpdGUtc3BhY2luZy1laWdodGg6MC4xMjVyZW07LS1jYWxjaXRlLXNwYWNpbmctcXVhcnRlcjowLjI1cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLWhhbGY6MC41cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXRocmVlLXF1YXJ0ZXJzOjAuNzVyZW07LS1jYWxjaXRlLXNwYWNpbmc6MXJlbTstLWNhbGNpdGUtc3BhY2luZy1wbHVzLXF1YXJ0ZXI6MS4yNXJlbTstLWNhbGNpdGUtc3BhY2luZy1wbHVzLWhhbGY6MS41cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLWRvdWJsZToycmVtOy0tY2FsY2l0ZS1tZW51LW1pbi13aWR0aDoxMHJlbTstLWNhbGNpdGUtaGVhZGVyLW1pbi1oZWlnaHQ6M3JlbTstLWNhbGNpdGUtZm9vdGVyLW1pbi1oZWlnaHQ6M3JlbX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7aW5saW5lLXNpemU6MTAwJTtvdmVyZmxvdzp2aXNpYmxlO3ZlcnRpY2FsLWFsaWduOnRvcDstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0IC5tZW51LWNvbnRhaW5lciAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19Omhvc3QgLm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Omhvc3QgLm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj10b3BdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWxlZnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfTpob3N0IC5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZzowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjFyZW19Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5jYWxlbmRhci1waWNrZXItd3JhcHBlcntwb3NpdGlvbjpzdGF0aWM7aW5saW5lLXNpemU6MTAwJTstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX0uaW5wdXQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZX0udG9nZ2xlLWljb257cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjFyZW07Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2luc2V0LWlubGluZS1lbmQ6MDtpbnNldC1ibG9jazowO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmcpfTpob3N0KFtyYW5nZV0pIC5pbnB1dC1jb250YWluZXJ7ZGlzcGxheTpmbGV4fTpob3N0KFtyYW5nZV0pIC5pbnB1dC13cmFwcGVye2ZsZXg6MSAxIGF1dG99Omhvc3QoW3JhbmdlXSkgLmhvcml6b250YWwtYXJyb3ctY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW19Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdKSAuaW5wdXQtd3JhcHBlcntpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXSkgLmlucHV0LWNvbnRhaW5lcntmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydH06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF0pIC5jYWxlbmRhci1waWNrZXItd3JhcHBlci0tZW5ke3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKX06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7aW5zZXQtYmxvY2stc3RhcnQ6MS41cmVtO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7bWFyZ2luLWlubGluZToxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1pbmxpbmU6MC42MjVyZW07aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QoW3NjYWxlPXNdW3JhbmdlXTpub3QoW2xheW91dD12ZXJ0aWNhbF0pKSAuY2FsZW5kYXItcGlja2VyLXdyYXBwZXJ7aW5saW5lLXNpemU6MjE2cHh9Omhvc3QoW3NjYWxlPW1dW3JhbmdlXTpub3QoW2xheW91dD12ZXJ0aWNhbF0pKSAuY2FsZW5kYXItcGlja2VyLXdyYXBwZXJ7aW5saW5lLXNpemU6Mjg2cHh9Omhvc3QoW3NjYWxlPWxdW3JhbmdlXTpub3QoW2xheW91dD12ZXJ0aWNhbF0pKSAuY2FsZW5kYXItcGlja2VyLXdyYXBwZXJ7aW5saW5lLXNpemU6Mzk4cHh9Lm1lbnUtY29udGFpbmVyey0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXgpO3Zpc2liaWxpdHk6aGlkZGVufS5tZW51LWNvbnRhaW5lciAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19Lm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Lm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj10b3BdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWxlZnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfS5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfTpob3N0KFtvcGVuXSkgLm1lbnUtY29udGFpbmVye3Zpc2liaWxpdHk6dmlzaWJsZX0ubWVudS1jb250YWluZXItLWFjdGl2ZXt2aXNpYmlsaXR5OnZpc2libGV9LmlucHV0IC5jYWxjaXRlLWlucHV0X193cmFwcGVye21hcmdpbi1ibG9jay1zdGFydDowcHh9Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdW3NjYWxlPW1dKSAudmVydGljYWwtYXJyb3ctY29udGFpbmVye2luc2V0LWJsb2NrLXN0YXJ0OjEuNXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXVtzY2FsZT1tXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lciBjYWxjaXRlLWljb257YmxvY2stc2l6ZTowLjc1cmVtO2lubGluZS1zaXplOjAuNzVyZW07bWluLWlubGluZS1zaXplOjBweH06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF1bc2NhbGU9bF0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7aW5zZXQtYmxvY2stc3RhcnQ6Mi4yNXJlbTtwYWRkaW5nLWlubGluZTowLjg3NXJlbX06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF1bb3Blbl0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7ZGlzcGxheTpub25lfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fVwiO1xuXG5jb25zdCBJbnB1dERhdGVQaWNrZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0RGF0ZVBpY2tlck9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMucGFyc2VOdW1lcmFscyh2YWx1ZSk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0TnVtZXJhbHMocGFyc2VkVmFsdWUpO1xuICAgICAgdGFyZ2V0LnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICBjb25zdCB7IHllYXIgfSA9IGRhdGVQYXJ0c0Zyb21Mb2NhbGl6ZWRTdHJpbmcodmFsdWUsIHRoaXMubG9jYWxlRGF0YSk7XG4gICAgICBpZiAoeWVhciAmJiB5ZWFyLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nKHZhbHVlLCB0aGlzLmxvY2FsZURhdGEpO1xuICAgICAgaWYgKGluUmFuZ2UoZGF0ZSwgdGhpcy5taW4sIHRoaXMubWF4KSkge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJBY3RpdmVEYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY29tbWl0VmFsdWUoKTtcbiAgICB9O1xuICAgIHRoaXMuZGlhbG9nSWQgPSBgZGF0ZS1waWNrZXItZGlhbG9nLS0ke2d1aWQoKX1gO1xuICAgIHRoaXMuZm9jdXNPbk9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RCbHVycmVkSW5wdXQgPSBcIm5vbmVcIjtcbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSA9IGZhbHNlO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm9uSW5wdXRXcmFwcGVyQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLmxhc3RCbHVycmVkSW5wdXQgIT09IFwibm9uZVwiICYmIHRoaXMub3BlbikgO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RCbHVycmVkSW5wdXQgPSBcIm5vbmVcIjtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlbCwgZmxpcFBsYWNlbWVudHMgfSA9IHRoaXM7XG4gICAgICB0aGlzLmZpbHRlcmVkRmxpcFBsYWNlbWVudHMgPSBmbGlwUGxhY2VtZW50c1xuICAgICAgICA/IGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyhmbGlwUGxhY2VtZW50cywgZWwpXG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbkVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbCA9IGVsO1xuICAgICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhcnRJbnB1dCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5zdGFydElucHV0ID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldEVuZElucHV0ID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmVuZElucHV0ID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmRlYWN0aXZhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMubGFzdEJsdXJyZWRJbnB1dCA9IFwibm9uZVwiO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBkZWZhdWx0UHJldmVudGVkLCBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRoaXMuY29tbWl0VmFsdWUoKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNSYW5nZUVuZCgpKSB7XG4gICAgICAgICAgdGhpcy5lbmRJbnB1dD8uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNob3VsZEZvY3VzUmFuZ2VTdGFydCgpKSB7XG4gICAgICAgICAgdGhpcy5zdGFydElucHV0Py5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJtaXRGb3JtKHRoaXMpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmZvY3VzT25PcGVuID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlSW5wdXRGb2N1cygpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zdGFydElucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWRJbnB1dCA9IFwic3RhcnRcIjtcbiAgICB9O1xuICAgIHRoaXMuc3RhcnRFbmRJbnB1dEZvY3VzID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBibHVycmVkRWwgPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xuICAgICAgdGhpcy5sYXN0Qmx1cnJlZElucHV0ID1cbiAgICAgICAgYmx1cnJlZEVsID09PSB0aGlzLnN0YXJ0SW5wdXQgPyBcInN0YXJ0XCIgOiBibHVycmVkRWwgPT09IHRoaXMuZW5kSW5wdXQgPyBcImVuZFwiIDogXCJub25lXCI7XG4gICAgfTtcbiAgICB0aGlzLmVuZElucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWRJbnB1dCA9IFwiZW5kXCI7XG4gICAgfTtcbiAgICB0aGlzLnNldEZsb2F0aW5nRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbCA9IGVsO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhcnRXcmFwcGVyID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0V3JhcHBlciA9IGVsO1xuICAgICAgdGhpcy5zZXRSZWZlcmVuY2VFbCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXRFbmRXcmFwcGVyID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmVuZFdyYXBwZXIgPSBlbDtcbiAgICAgIHRoaXMuc2V0UmVmZXJlbmNlRWwoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RGF0ZVBpY2tlclJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5kYXRlUGlja2VyRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RGb2N1c1RyYXAodGhpcywge1xuICAgICAgICBmb2N1c1RyYXBFbDogZWwsXG4gICAgICAgIGZvY3VzVHJhcE9wdGlvbnM6IHtcbiAgICAgICAgICBpbml0aWFsRm9jdXM6IGZhbHNlLFxuICAgICAgICAgIHNldFJldHVybkZvY3VzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIHNlbGVjdGVkIGRhdGUgY2hhbmdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IENhbGNpdGVEYXRlUGlja2VyIGN1c3RvbSBjaGFuZ2UgZXZlbnRcbiAgICAgKi9cbiAgICB0aGlzLmhhbmRsZURhdGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWVBc0RhdGUpO1xuICAgICAgdGhpcy5sb2NhbGl6ZUlucHV0VmFsdWVzKCk7XG4gICAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZURhdGVSYW5nZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVBc0RhdGU7XG4gICAgICB0aGlzLnNldFJhbmdlVmFsdWUodmFsdWUpO1xuICAgICAgdGhpcy5sb2NhbGl6ZUlucHV0VmFsdWVzKCk7XG4gICAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUgPSAobmV3VmFsdWUsIGlucHV0ID0gXCJzdGFydFwiKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dEVsID0gdGhpc1tgJHtpbnB1dH1JbnB1dGBdO1xuICAgICAgaWYgKCFpbnB1dEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlucHV0RWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSA9ICh2YWx1ZUFzRGF0ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdmFsdWU6IG9sZFZhbHVlIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgb2xkVmFsdWVJc0FycmF5ID0gQXJyYXkuaXNBcnJheShvbGRWYWx1ZSk7XG4gICAgICBjb25zdCB2YWx1ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKTtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IHZhbHVlSXNBcnJheSA/IHZhbHVlQXNEYXRlWzBdIDogbnVsbDtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZUlTTyA9IHZhbHVlSXNBcnJheSA/IGRhdGVUb0lTTyhuZXdTdGFydERhdGUpIDogXCJcIjtcbiAgICAgIGNvbnN0IG5ld0VuZERhdGUgPSB2YWx1ZUlzQXJyYXkgPyB2YWx1ZUFzRGF0ZVsxXSA6IG51bGw7XG4gICAgICBjb25zdCBuZXdFbmREYXRlSVNPID0gdmFsdWVJc0FycmF5ID8gZGF0ZVRvSVNPKG5ld0VuZERhdGUpIDogXCJcIjtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbmV3U3RhcnREYXRlSVNPIHx8IG5ld0VuZERhdGVJU08gPyBbbmV3U3RhcnREYXRlSVNPLCBuZXdFbmREYXRlSVNPXSA6IFwiXCI7XG4gICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gbmV3VmFsdWUgPyBnZXRWYWx1ZUFzRGF0ZVJhbmdlKG5ld1ZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIGlmIChjaGFuZ2VFdmVudCAmJiBjaGFuZ2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgaWYgKG9sZFZhbHVlSXNBcnJheSkge1xuICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShvbGRWYWx1ZVswXSwgXCJzdGFydFwiKTtcbiAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUob2xkVmFsdWVbMV0sIFwiZW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUob2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGRhdGVUb0lTTyh2YWx1ZSk7XG4gICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gbmV3VmFsdWUgPyBkYXRlRnJvbUlTTyhuZXdWYWx1ZSkgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWUgfHwgXCJcIjtcbiAgICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIGlmIChjaGFuZ2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY29tbW9uRGF0ZVNlcGFyYXRvcnMgPSBbXCIuXCIsIFwiLVwiLCBcIi9cIl07XG4gICAgdGhpcy5mb3JtYXROdW1lcmFscyA9ICh2YWx1ZSkgPT4gdmFsdWVcbiAgICAgID8gdmFsdWVcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGNoYXIpID0+IHRoaXMuY29tbW9uRGF0ZVNlcGFyYXRvcnM/LmluY2x1ZGVzKGNoYXIpXG4gICAgICAgID8gdGhpcy5sb2NhbGVEYXRhPy5zZXBhcmF0b3JcbiAgICAgICAgOiBudW1iZXJLZXlzPy5pbmNsdWRlcyhjaGFyKVxuICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyPy5udW1iZXJGb3JtYXR0ZXI/LmZvcm1hdChOdW1iZXIoY2hhcikpXG4gICAgICAgICAgOiBjaGFyKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICAgOiBcIlwiO1xuICAgIHRoaXMucGFyc2VOdW1lcmFscyA9ICh2YWx1ZSkgPT4gdmFsdWVcbiAgICAgID8gdmFsdWVcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGNoYXIpID0+IG51bWJlcktleXMuaW5jbHVkZXMoY2hhcikgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZShjaGFyKSA6IGNoYXIpXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICA6IFwiXCI7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUcmFwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuZmxpcFBsYWNlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52YWx1ZUFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbkFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heEFzRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMucGxhY2VtZW50ID0gZGVmYXVsdE1lbnVQbGFjZW1lbnQ7XG4gICAgdGhpcy5yYW5nZSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnByb3hpbWl0eVNlbGVjdGlvbkRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYXlvdXQgPSBcImhvcml6b250YWxcIjtcbiAgICB0aGlzLmRhdGVQaWNrZXJBY3RpdmVEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmZvY3VzZWRJbnB1dCA9IFwic3RhcnRcIjtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaGFuZGxlRm9jdXNUcmFwRGlzYWJsZWQoZm9jdXNUcmFwRGlzYWJsZWQpIHtcbiAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb2N1c1RyYXBEaXNhYmxlZCA/IGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcykgOiBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICBoYW5kbGVEaXNhYmxlZEFuZFJlYWRPbmx5Q2hhbmdlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhbHVlV2F0Y2hlcihuZXdWYWx1ZSkge1xuICAgIGlmICghdGhpcy51c2VyQ2hhbmdlZFZhbHVlKSB7XG4gICAgICBsZXQgbmV3VmFsdWVBc0RhdGU7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWVBc0RhdGUgPSBnZXRWYWx1ZUFzRGF0ZVJhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgIG5ld1ZhbHVlQXNEYXRlID0gZGF0ZUZyb21JU08obmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnZhbHVlQXNEYXRlQ2hhbmdlZEV4dGVybmFsbHkgJiYgbmV3VmFsdWVBc0RhdGUgIT09IHRoaXMudmFsdWVBc0RhdGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IG5ld1ZhbHVlQXNEYXRlO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbGl6ZUlucHV0VmFsdWVzKCk7XG4gICAgfVxuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICB9XG4gIHZhbHVlQXNEYXRlV2F0Y2hlcih2YWx1ZUFzRGF0ZSkge1xuICAgIHRoaXMuZGF0ZVBpY2tlckFjdGl2ZURhdGUgPSB2YWx1ZUFzRGF0ZTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMucmFuZ2UgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZUFzRGF0ZSlcbiAgICAgID8gW2RhdGVUb0lTTyh2YWx1ZUFzRGF0ZVswXSksIGRhdGVUb0lTTyh2YWx1ZUFzRGF0ZVsxXSldXG4gICAgICA6IGRhdGVUb0lTTyh2YWx1ZUFzRGF0ZSk7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlQ2hhbmdlZEV4dGVybmFsbHkgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUFzRGF0ZUNoYW5nZWRFeHRlcm5hbGx5ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZsaXBQbGFjZW1lbnRzSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgb25NaW5DaGFuZ2VkKG1pbikge1xuICAgIGlmIChtaW4pIHtcbiAgICAgIHRoaXMubWluQXNEYXRlID0gZGF0ZUZyb21JU08obWluKTtcbiAgICB9XG4gIH1cbiAgb25NYXhDaGFuZ2VkKG1heCkge1xuICAgIGlmIChtYXgpIHtcbiAgICAgIHRoaXMubWF4QXNEYXRlID0gZGF0ZUZyb21JU08obWF4KTtcbiAgICB9XG4gIH1cbiAgb3BlbkhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfVxuICB9XG4gIG92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNhbGNpdGVEYXlTZWxlY3RIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLnNob3VsZEZvY3VzUmFuZ2VTdGFydCgpIHx8IHRoaXMuc2hvdWxkRm9jdXNSYW5nZUVuZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGVsYXllZFxuICAgKi9cbiAgYXN5bmMgcmVwb3NpdGlvbihkZWxheWVkID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IGZsb2F0aW5nRWwsIHJlZmVyZW5jZUVsLCBwbGFjZW1lbnQsIG92ZXJsYXlQb3NpdGlvbmluZywgZmlsdGVyZWRGbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICByZXR1cm4gcmVwb3NpdGlvbih0aGlzLCB7XG4gICAgICBmbG9hdGluZ0VsLFxuICAgICAgcmVmZXJlbmNlRWwsXG4gICAgICBvdmVybGF5UG9zaXRpb25pbmcsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBmbGlwUGxhY2VtZW50czogZmlsdGVyZWRGbGlwUGxhY2VtZW50cyxcbiAgICAgIHR5cGU6IFwibWVudVwiXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXM7XG4gICAgb3BlbiAmJiB0aGlzLm9wZW5IYW5kbGVyKG9wZW4pO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlID0gZ2V0VmFsdWVBc0RhdGVSYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IGRhdGVGcm9tSVNPKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMud2FybkFib3V0SW52YWxpZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLnZhbHVlQXNEYXRlKSB7XG4gICAgICB0aGlzLnNldFJhbmdlVmFsdWUodGhpcy52YWx1ZUFzRGF0ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1pbik7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLm1heCk7XG4gICAgfVxuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmxvYWRMb2NhbGVEYXRhKCksIHNldFVwTWVzc2FnZXModGhpcyldKTtcbiAgICB0aGlzLm9uTWluQ2hhbmdlZCh0aGlzLm1pbik7XG4gICAgdGhpcy5vbk1heENoYW5nZWQodGhpcy5tYXgpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgZGlzY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIGVmZmVjdGl2ZUxvY2FsZSwgbWVzc2FnZXMsIG51bWJlcmluZ1N5c3RlbSwgcmVhZE9ubHkgfSA9IHRoaXM7XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBsb2NhbGU6IGVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLmRlYWN0aXZhdGUsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCB0aGlzLmxvY2FsZURhdGEgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1jb250YWluZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtd3JhcHBlclwiLCBvbkNsaWNrOiB0aGlzLm9uSW5wdXRXcmFwcGVyQ2xpY2ssXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRTdGFydFdyYXBwZXIgfSwgaChcImNhbGNpdGUtaW5wdXRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtY29udHJvbHNcIjogdGhpcy5kaWFsb2dJZCwgXCJhcmlhLWV4cGFuZGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5vcGVuKSwgXCJhcmlhLWhhc3BvcHVwXCI6IFwiZGlhbG9nXCIsIGNsYXNzOiBgaW5wdXQgJHt0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHRoaXMucmFuZ2UgPyBgbm8tYm90dG9tLWJvcmRlcmAgOiBgYH1gLCBkaXNhYmxlZDogZGlzYWJsZWQsIGljb246IFwiY2FsZW5kYXJcIiwgXCJudW1iZXItYnV0dG9uLXR5cGVcIjogXCJub25lXCIsIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnB1dElucHV0OiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0SW5wdXRIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0Qmx1cjogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXM6IHRoaXMuc3RhcnRJbnB1dEZvY3VzLCBvbkZvY3VzOiB0aGlzLnN0YXJ0RW5kSW5wdXRGb2N1cywgcGxhY2Vob2xkZXI6IHRoaXMubG9jYWxlRGF0YT8ucGxhY2Vob2xkZXIsIHJlYWRPbmx5OiByZWFkT25seSwgcm9sZTogXCJjb21ib2JveFwiLCBzY2FsZTogdGhpcy5zY2FsZSwgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRTdGFydElucHV0IH0pLCB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIpKSwgaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighdGhpcy5vcGVuKSwgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLmNob29zZURhdGUsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5tZW51XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5tZW51QWN0aXZlXTogdGhpcy5vcGVuXG4gICAgICB9LCBpZDogdGhpcy5kaWFsb2dJZCwgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEZsb2F0aW5nRWwgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtcImNhbGVuZGFyLXBpY2tlci13cmFwcGVyXCJdOiB0cnVlLFxuICAgICAgICBbXCJjYWxlbmRhci1waWNrZXItd3JhcHBlci0tZW5kXCJdOiB0aGlzLmZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIixcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbl06IHRydWUsXG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiB0aGlzLm9wZW5cbiAgICAgIH0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgaChcImNhbGNpdGUtZGF0ZS1waWNrZXJcIiwgeyBhY3RpdmVEYXRlOiB0aGlzLmRhdGVQaWNrZXJBY3RpdmVEYXRlLCBhY3RpdmVSYW5nZTogdGhpcy5mb2N1c2VkSW5wdXQsIGhlYWRpbmdMZXZlbDogdGhpcy5oZWFkaW5nTGV2ZWwsIG1heDogdGhpcy5tYXgsIG1heEFzRGF0ZTogdGhpcy5tYXhBc0RhdGUsIG1lc3NhZ2VPdmVycmlkZXM6IHRoaXMubWVzc2FnZU92ZXJyaWRlcywgbWluOiB0aGlzLm1pbiwgbWluQXNEYXRlOiB0aGlzLm1pbkFzRGF0ZSwgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2U6IHRoaXMuaGFuZGxlRGF0ZUNoYW5nZSwgb25DYWxjaXRlRGF0ZVBpY2tlclJhbmdlQ2hhbmdlOiB0aGlzLmhhbmRsZURhdGVSYW5nZUNoYW5nZSwgcHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQ6IHRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQsIHJhbmdlOiB0aGlzLnJhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgdGFiSW5kZXg6IHRoaXMub3BlbiA/IHVuZGVmaW5lZCA6IC0xLCB2YWx1ZUFzRGF0ZTogdGhpcy52YWx1ZUFzRGF0ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldERhdGVQaWNrZXJSZWYgfSkpKSwgdGhpcy5yYW5nZSAmJiB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJob3Jpem9udGFsLWFycm93LWNvbnRhaW5lclwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiB0cnVlLCBpY29uOiBcImFycm93LXJpZ2h0XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKSwgdGhpcy5yYW5nZSAmJiB0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHRoaXMuc2NhbGUgIT09IFwic1wiICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwidmVydGljYWwtYXJyb3ctY29udGFpbmVyXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiYXJyb3ctZG93blwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSksIHRoaXMucmFuZ2UgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC13cmFwcGVyXCIsIG9uQ2xpY2s6IHRoaXMub25JbnB1dFdyYXBwZXJDbGljayxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEVuZFdyYXBwZXIgfSwgaChcImNhbGNpdGUtaW5wdXRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtY29udHJvbHNcIjogdGhpcy5kaWFsb2dJZCwgXCJhcmlhLWV4cGFuZGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5vcGVuKSwgXCJhcmlhLWhhc3BvcHVwXCI6IFwiZGlhbG9nXCIsIGNsYXNzOiB7XG4gICAgICAgIGlucHV0OiB0cnVlLFxuICAgICAgICBcImJvcmRlci10b3AtY29sb3Itb25lXCI6IHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgdGhpcy5yYW5nZVxuICAgICAgfSwgZGlzYWJsZWQ6IGRpc2FibGVkLCBpY29uOiBcImNhbGVuZGFyXCIsIFwibnVtYmVyLWJ1dHRvbi10eXBlXCI6IFwibm9uZVwiLCBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSwgb25DYWxjaXRlSW5wdXRJbnB1dDogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXI6IHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVySGFuZGxlciwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzOiB0aGlzLmVuZElucHV0Rm9jdXMsIG9uRm9jdXM6IHRoaXMuc3RhcnRFbmRJbnB1dEZvY3VzLCBwbGFjZWhvbGRlcjogdGhpcy5sb2NhbGVEYXRhPy5wbGFjZWhvbGRlciwgcmVhZE9ubHk6IHJlYWRPbmx5LCByb2xlOiBcImNvbWJvYm94XCIsIHNjYWxlOiB0aGlzLnNjYWxlLCB0eXBlOiBcInRleHRcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEVuZElucHV0IH0pLCB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcImVuZFwiKSkpKSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICByZW5kZXJUb2dnbGVJY29uKG9wZW4pIHtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy50b2dnbGVJY29uIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBvcGVuID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogXCJzXCIgfSkpKTtcbiAgfVxuICBzZXRSZWZlcmVuY2VFbCgpIHtcbiAgICBjb25zdCB7IGZvY3VzZWRJbnB1dCwgbGF5b3V0LCBlbmRXcmFwcGVyLCBzdGFydFdyYXBwZXIgfSA9IHRoaXM7XG4gICAgdGhpcy5yZWZlcmVuY2VFbCA9XG4gICAgICBmb2N1c2VkSW5wdXQgPT09IFwiZW5kXCIgfHwgbGF5b3V0ID09PSBcInZlcnRpY2FsXCJcbiAgICAgICAgPyBlbmRXcmFwcGVyIHx8IHN0YXJ0V3JhcHBlclxuICAgICAgICA6IHN0YXJ0V3JhcHBlciB8fCBlbmRXcmFwcGVyO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpKTtcbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIG9uQmVmb3JlT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgYWN0aXZhdGVGb2N1c1RyYXAodGhpcywge1xuICAgICAgb25BY3RpdmF0ZTogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c09uT3Blbikge1xuICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlckVsLnNldEZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJDbG9zZS5lbWl0KCk7XG4gICAgZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICB9XG4gIGNvbW1pdFZhbHVlKCkge1xuICAgIGNvbnN0IHsgZm9jdXNlZElucHV0LCB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBmb2N1c2VkSW5wdXROYW1lID0gYCR7Zm9jdXNlZElucHV0fUlucHV0YDtcbiAgICBjb25zdCBmb2N1c2VkSW5wdXRWYWx1ZSA9IHRoaXNbZm9jdXNlZElucHV0TmFtZV0udmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nKGZvY3VzZWRJbnB1dFZhbHVlLCB0aGlzLmxvY2FsZURhdGEpO1xuICAgIGNvbnN0IGRhdGVBc0lTTyA9IGRhdGVUb0lTTyhkYXRlKTtcbiAgICBjb25zdCB2YWx1ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgY29uc3QgZm9jdXNlZElucHV0VmFsdWVJbmRleCA9IGZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiID8gMCA6IDE7XG4gICAgICBpZiAodmFsdWVJc0FycmF5KSB7XG4gICAgICAgIGlmIChkYXRlQXNJU08gPT09IHZhbHVlW2ZvY3VzZWRJbnB1dFZhbHVlSW5kZXhdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgdGhpcy5zZXRSYW5nZVZhbHVlKFtcbiAgICAgICAgICAgIGZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiID8gZGF0ZSA6IGRhdGVGcm9tSVNPKHZhbHVlWzBdKSxcbiAgICAgICAgICAgIGZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIiA/IGRhdGUgOiBkYXRlRnJvbUlTTyh2YWx1ZVsxXSlcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoW1xuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcImVuZFwiICYmIGRhdGVGcm9tSVNPKHZhbHVlWzBdKSxcbiAgICAgICAgICAgIGZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiICYmIGRhdGVGcm9tSVNPKHZhbHVlWzFdKVxuICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoW1xuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgPyBkYXRlIDogZGF0ZUZyb21JU08odmFsdWVbMF0pLFxuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcImVuZFwiID8gZGF0ZSA6IGRhdGVGcm9tSVNPKHZhbHVlWzFdKVxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGRhdGVBc0lTTyA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZShkYXRlKTtcbiAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgIH1cbiAgfVxuICBhc3luYyBsb2FkTG9jYWxlRGF0YSgpIHtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSBhd2FpdCBnZXRMb2NhbGVEYXRhKHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgfVxuICBzaG91bGRGb2N1c1JhbmdlU3RhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRWYWx1ZSA9IHRoaXMudmFsdWVbMF07XG4gICAgY29uc3QgZW5kVmFsdWUgPSB0aGlzLnZhbHVlWzFdO1xuICAgIHJldHVybiAhIShlbmRWYWx1ZSAmJiAhc3RhcnRWYWx1ZSAmJiB0aGlzLmZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIiAmJiB0aGlzLnN0YXJ0SW5wdXQpO1xuICB9XG4gIHNob3VsZEZvY3VzUmFuZ2VFbmQoKSB7XG4gICAgY29uc3Qgc3RhcnRWYWx1ZSA9IHRoaXMudmFsdWVbMF07XG4gICAgY29uc3QgZW5kVmFsdWUgPSB0aGlzLnZhbHVlWzFdO1xuICAgIHJldHVybiAhIShzdGFydFZhbHVlICYmICFlbmRWYWx1ZSAmJiB0aGlzLmZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiICYmIHRoaXMuZW5kSW5wdXQpO1xuICB9XG4gIHJlc3RvcmVJbnB1dEZvY3VzKCkge1xuICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy5zdGFydElucHV0LnNldEZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvY3VzZWRJbnB1dCA9IHRoaXMuZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgPyB0aGlzLnN0YXJ0SW5wdXQgOiB0aGlzLmVuZElucHV0O1xuICAgIGZvY3VzZWRJbnB1dC5zZXRGb2N1cygpO1xuICB9XG4gIGxvY2FsaXplSW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tUmFuZ2UoKHRoaXMucmFuZ2VcbiAgICAgID8gKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgJiYgdGhpcy52YWx1ZUFzRGF0ZVswXSkgfHwgdW5kZWZpbmVkXG4gICAgICA6IHRoaXMudmFsdWVBc0RhdGUpLCB0aGlzLm1pbkFzRGF0ZSwgdGhpcy5tYXhBc0RhdGUpO1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLnJhbmdlXG4gICAgICA/IGRhdGVGcm9tUmFuZ2UoKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgJiYgdGhpcy52YWx1ZUFzRGF0ZVsxXSkgfHwgdW5kZWZpbmVkLCB0aGlzLm1pbkFzRGF0ZSwgdGhpcy5tYXhBc0RhdGUpXG4gICAgICA6IG51bGw7XG4gICAgY29uc3QgbG9jYWxpemVkRGF0ZSA9IGRhdGUgJiYgdGhpcy5mb3JtYXROdW1lcmFscyhkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmVmZmVjdGl2ZUxvY2FsZSkpO1xuICAgIGNvbnN0IGxvY2FsaXplZEVuZERhdGUgPSBlbmREYXRlICYmIHRoaXMuZm9ybWF0TnVtZXJhbHMoZW5kRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5lZmZlY3RpdmVMb2NhbGUpKTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVkRGF0ZSA/PyBcIlwiLCBcInN0YXJ0XCIpO1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgodGhpcy5yYW5nZSAmJiBsb2NhbGl6ZWRFbmREYXRlKSA/PyBcIlwiLCBcImVuZFwiKTtcbiAgfVxuICB3YXJuQWJvdXRJbnZhbGlkVmFsdWUodmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oYFRoZSBzcGVjaWZpZWQgdmFsdWUgXCIke3ZhbHVlfVwiIGRvZXMgbm90IGNvbmZvcm0gdG8gdGhlIHJlcXVpcmVkIGZvcm1hdCwgXCJZWVlZLU1NLUREXCIuYCk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImZvY3VzVHJhcERpc2FibGVkXCI6IFtcImhhbmRsZUZvY3VzVHJhcERpc2FibGVkXCJdLFxuICAgIFwiZGlzYWJsZWRcIjogW1wiaGFuZGxlRGlzYWJsZWRBbmRSZWFkT25seUNoYW5nZVwiXSxcbiAgICBcInJlYWRPbmx5XCI6IFtcImhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZVdhdGNoZXJcIl0sXG4gICAgXCJ2YWx1ZUFzRGF0ZVwiOiBbXCJ2YWx1ZUFzRGF0ZVdhdGNoZXJcIl0sXG4gICAgXCJmbGlwUGxhY2VtZW50c1wiOiBbXCJmbGlwUGxhY2VtZW50c0hhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJtaW5cIjogW1wib25NaW5DaGFuZ2VkXCJdLFxuICAgIFwibWF4XCI6IFtcIm9uTWF4Q2hhbmdlZFwiXSxcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogW1wib3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlclwiXSxcbiAgICBcImxheW91dFwiOiBbXCJzZXRSZWZlcmVuY2VFbFwiXSxcbiAgICBcImZvY3VzZWRJbnB1dFwiOiBbXCJzZXRSZWZlcmVuY2VFbFwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJsb2FkTG9jYWxlRGF0YVwiXVxuICB9OyB9XG59O1xuSW5wdXREYXRlUGlja2VyLnN0eWxlID0gaW5wdXREYXRlUGlja2VyQ3NzO1xuXG5leHBvcnQgeyBJbnB1dERhdGVQaWNrZXIgYXMgY2FsY2l0ZV9pbnB1dF9kYXRlX3BpY2tlciB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5cbi8qKlxuICogQ2hlY2sgaWYgZGF0ZSBpcyB3aXRoaW4gYSBtaW4gYW5kIG1heFxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKi9cbmZ1bmN0aW9uIGluUmFuZ2UoZGF0ZSwgbWluLCBtYXgpIHtcbiAgaWYgKCFkYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgYWZ0ZXJNaW4gPSAhKG1pbiBpbnN0YW5jZW9mIERhdGUpIHx8IHRpbWUgPj0gbWluLmdldFRpbWUoKTtcbiAgY29uc3QgYmVmb3JlTWF4ID0gIShtYXggaW5zdGFuY2VvZiBEYXRlKSB8fCB0aW1lIDw9IG1heC5nZXRUaW1lKCk7XG4gIHJldHVybiBhZnRlck1pbiAmJiBiZWZvcmVNYXg7XG59XG4vKipcbiAqIEVuc3VyZXMgZGF0ZSBpcyB3aXRoaW4gcmFuZ2UsXG4gKiByZXR1cm5zIG1pbiBvciBtYXggaWYgb3V0IG9mIGJvdW5kc1xuICpcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKi9cbmZ1bmN0aW9uIGRhdGVGcm9tUmFuZ2UoZGF0ZSwgbWluLCBtYXgpIHtcbiAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCBiZWZvcmVNaW4gPSBtaW4gaW5zdGFuY2VvZiBEYXRlICYmIHRpbWUgPCBtaW4uZ2V0VGltZSgpO1xuICBjb25zdCBhZnRlck1heCA9IG1heCBpbnN0YW5jZW9mIERhdGUgJiYgdGltZSA+IG1heC5nZXRUaW1lKCk7XG4gIGlmIChiZWZvcmVNaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGlmIChhZnRlck1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG4vKipcbiAqIFBhcnNlIGFuIGlzbzg2MDEgc3RyaW5nIChZWVlZLW1tLWRkKSBpbnRvIGEgdmFsaWQgZGF0ZS5cbiAqIFRPRE86IGhhbmRsZSB0aW1lIHdoZW4gdGltZSBvZiBkYXkgVUkgaXMgYWRkZWRcbiAqXG4gKiBAcGFyYW0gaXNvODYwMVxuICogQHBhcmFtIGlzRW5kRGF0ZVxuICovXG5mdW5jdGlvbiBkYXRlRnJvbUlTTyhpc284NjAxLCBpc0VuZERhdGUgPSBmYWxzZSkge1xuICBpZiAoaXNvODYwMSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gaXNvODYwMTtcbiAgfVxuICBpZiAoIWlzbzg2MDEgfHwgdHlwZW9mIGlzbzg2MDEgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBkID0gaXNvODYwMS5zcGxpdCgvWzogVC1dLykubWFwKHBhcnNlRmxvYXQpO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZFswXSwgKGRbMV0gfHwgMSkgLSAxLCBkWzJdIHx8IDEpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRbMF0pO1xuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIElTTyA4NjAxIGRhdGU6IFwiJHtpc284NjAxfVwiYCk7XG4gIH1cbiAgaWYgKGlzRW5kRGF0ZSkge1xuICAgIHJldHVybiBzZXRFbmRPZkRheShkYXRlKTtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn1cbi8qKlxuICogUGFyc2UgYSBsb2NhbGl6ZWQgZGF0ZSBzdHJpbmcgaW50byBhIHZhbGlkIERhdGUuXG4gKiByZXR1cm4gZmFsc2UgaWYgZGF0ZSBpcyBpbnZhbGlkLCBvciBvdXQgb2YgcmFuZ2VcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBsb2NhbGVEYXRhXG4gKi9cbmZ1bmN0aW9uIGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nKHZhbHVlLCBsb2NhbGVEYXRhKSB7XG4gIGlmICghbG9jYWxlRGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgc2VwYXJhdG9yIH0gPSBsb2NhbGVEYXRhO1xuICBjb25zdCBwYXJ0cyA9IHBhcnNlRGF0ZVN0cmluZyh2YWx1ZSwgbG9jYWxlRGF0YSk7XG4gIGNvbnN0IHsgZGF5LCBtb250aCB9ID0gcGFydHM7XG4gIGNvbnN0IHllYXIgPSBwYXJzZUNhbGVuZGFyWWVhcihwYXJ0cy55ZWFyLCBsb2NhbGVEYXRhKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICBjb25zdCB2YWxpZERheSA9IGRheSA+IDA7XG4gIGNvbnN0IHZhbGlkTW9udGggPSBtb250aCA+IC0xO1xuICBjb25zdCB2YWxpZERhdGUgPSAhaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xuICBjb25zdCB2YWxpZExlbmd0aCA9IHZhbHVlLnNwbGl0KHNlcGFyYXRvcikuZmlsdGVyKChjKSA9PiBjKS5sZW5ndGggPiAyO1xuICBjb25zdCB2YWxpZFllYXIgPSB5ZWFyLnRvU3RyaW5nKCkubGVuZ3RoID4gMDtcbiAgaWYgKHZhbGlkRGF5ICYmIHZhbGlkTW9udGggJiYgdmFsaWREYXRlICYmIHZhbGlkTGVuZ3RoICYmIHZhbGlkWWVhcikge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcGFyc2VDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSkge1xuICByZXR1cm4gcHJvY2Vzc0NhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhLCBcInJlYWRcIik7XG59XG5mdW5jdGlvbiBmb3JtYXRDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSkge1xuICByZXR1cm4gcHJvY2Vzc0NhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhLCBcIndyaXRlXCIpO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0NhbGVuZGFyWWVhcih5ZWFyLCBsb2NhbGVEYXRhLCBtb2RlKSB7XG4gIGlmIChsb2NhbGVEYXRhW1wiZGVmYXVsdC1jYWxlbmRhclwiXSAhPT0gXCJidWRkaGlzdFwiKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH1cbiAgY29uc3QgQlVEREhJU1RfQ0FMRU5EQVJfWUVBUl9PRkZTRVQgPSA1NDM7XG4gIGNvbnN0IHllYXJPZmZzZXQgPSBCVURESElTVF9DQUxFTkRBUl9ZRUFSX09GRlNFVCAqIChtb2RlID09PSBcInJlYWRcIiA/IC0xIDogMSk7XG4gIHJldHVybiB5ZWFyICsgeWVhck9mZnNldDtcbn1cbi8qKlxuICogUmV0cmlldmUgZGF5LCBtb250aCwgYW5kIHllYXIgc3RyaW5ncyBmcm9tIGEgbG9jYWxpemVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsb2NhbGVEYXRhXG4gKi9cbmZ1bmN0aW9uIGRhdGVQYXJ0c0Zyb21Mb2NhbGl6ZWRTdHJpbmcoc3RyaW5nLCBsb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHsgc2VwYXJhdG9yLCB1bml0T3JkZXIgfSA9IGxvY2FsZURhdGE7XG4gIGNvbnN0IG9yZGVyID0gZ2V0T3JkZXIodW5pdE9yZGVyKTtcbiAgY29uc3QgdmFsdWVzID0gc3RyaW5nLnNwbGl0KHNlcGFyYXRvcikubWFwKChwYXJ0KSA9PiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZShwYXJ0KSk7XG4gIGNvbnN0IGRheSA9IHZhbHVlc1tvcmRlci5pbmRleE9mKFwiZFwiKV07XG4gIGNvbnN0IG1vbnRoID0gdmFsdWVzW29yZGVyLmluZGV4T2YoXCJtXCIpXTtcbiAgY29uc3QgeWVhciA9IHZhbHVlc1tvcmRlci5pbmRleE9mKFwieVwiKV07XG4gIHJldHVybiB7IGRheSwgbW9udGgsIHllYXIgfTtcbn1cbi8qKlxuICogUmV0dXJuIGZpcnN0IHBvcnRpb24gb2YgSVNPIHN0cmluZyAoWVlZWS1tbS1kZClcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBkYXRlVG9JU08oZGF0ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG4vKipcbiAqIENoZWNrIGlmIHR3byBkYXRlcyBhcmUgdGhlIHNhbWUgZGF5LCBtb250aCwgeWVhclxuICpcbiAqIEBwYXJhbSBkMVxuICogQHBhcmFtIGQyXG4gKi9cbmZ1bmN0aW9uIHNhbWVEYXRlKGQxLCBkMikge1xuICByZXR1cm4gKGQxIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgIGQyIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgIGQxLmdldERhdGUoKSA9PT0gZDIuZ2V0RGF0ZSgpICYmXG4gICAgZDEuZ2V0TW9udGgoKSA9PT0gZDIuZ2V0TW9udGgoKSAmJlxuICAgIGQxLmdldEZ1bGxZZWFyKCkgPT09IGQyLmdldEZ1bGxZZWFyKCkpO1xufVxuLyoqXG4gKiBHZXQgYSBkYXRlIG9uZSBtb250aCBpbiB0aGUgcGFzdFxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKi9cbmZ1bmN0aW9uIHByZXZNb250aChkYXRlKSB7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXh0RGF0ZS5zZXRNb250aChtb250aCAtIDEpO1xuICAvLyBkYXRlIGRvZXNuJ3QgZXhpc3QgaW4gbmV3IG1vbnRoLCB1c2UgbGFzdCBkYXlcbiAgaWYgKG1vbnRoID09PSBuZXh0RGF0ZS5nZXRNb250aCgpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGgsIDApO1xuICB9XG4gIHJldHVybiBuZXh0RGF0ZTtcbn1cbi8qKlxuICogR2V0IGEgZGF0ZSBvbmUgbW9udGggaW4gdGhlIGZ1dHVyZVxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKi9cbmZ1bmN0aW9uIG5leHRNb250aChkYXRlKSB7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBjb25zdCBuZXh0RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXh0RGF0ZS5zZXRNb250aChtb250aCArIDEpO1xuICAvLyBkYXRlIGRvZXNuJ3QgZXhpc3QgaW4gbmV3IG1vbnRoLCB1c2UgbGFzdCBkYXlcbiAgaWYgKChtb250aCArIDIpICUgNyA9PT0gbmV4dERhdGUuZ2V0TW9udGgoKSAlIDcpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDIsIDApO1xuICB9XG4gIHJldHVybiBuZXh0RGF0ZTtcbn1cbi8qKlxuICogUGFyc2UgbnVtZXJpYyB1bml0cyBmb3IgZGF5LCBtb250aCwgYW5kIHllYXIgZnJvbSBhIGxvY2FsaXplZCBzdHJpbmdcbiAqIG1vbnRoIHN0YXJ0cyBhdCAwIChjYW4gcGFzcyB0byBkYXRlIGNvbnN0cnVjdG9yKVxuICogY2FuIHJldHVybiB2YWx1ZXMgYXMgbnVtYmVyIG9yIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBzdHJpbmdcbiAqIEBwYXJhbSBsb2NhbGVEYXRhXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRGF0ZVN0cmluZyhzdHJpbmcsIGxvY2FsZURhdGEpIHtcbiAgY29uc3QgeyBkYXksIG1vbnRoLCB5ZWFyIH0gPSBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nKHN0cmluZywgbG9jYWxlRGF0YSk7XG4gIHJldHVybiB7XG4gICAgZGF5OiBwYXJzZUludChkYXkpLFxuICAgIG1vbnRoOiBwYXJzZUludChtb250aCkgLSAxLFxuICAgIHllYXI6IHBhcnNlSW50KHllYXIpXG4gIH07XG59XG4vKipcbiAqIEJhc2VkIG9uIHRoZSB1bml0T3JkZXIgc3RyaW5nLCBmaW5kIG9yZGVyIG9mIG1vbnRoLCBkYXksIGFuZCB5ZWFyIGZvciBsb2NhbGVcbiAqXG4gKiBAcGFyYW0gdW5pdE9yZGVyXG4gKi9cbmZ1bmN0aW9uIGdldE9yZGVyKHVuaXRPcmRlcikge1xuICBjb25zdCBzaWduaWZpZXJzID0gW1wiZFwiLCBcIm1cIiwgXCJ5XCJdO1xuICBjb25zdCBvcmRlciA9IHVuaXRPcmRlci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gc2lnbmlmaWVycy5zb3J0KChhLCBiKSA9PiBvcmRlci5pbmRleE9mKGEpIC0gb3JkZXIuaW5kZXhPZihiKSk7XG59XG4vKipcbiAqIEdldCBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIHR3byBkYXRlc1xuICpcbiAqIEBwYXJhbSBkYXRlMVxuICogQHBhcmFtIGRhdGUyXG4gKi9cbmZ1bmN0aW9uIGdldERheXNEaWZmKGRhdGUxLCBkYXRlMikge1xuICBjb25zdCB0czEgPSBkYXRlMS5nZXRUaW1lKCk7XG4gIGNvbnN0IHRzMiA9IGRhdGUyLmdldFRpbWUoKTtcbiAgcmV0dXJuICh0czEgLSB0czIpIC8gKDEwMDAgKiAzNjAwICogMjQpO1xufVxuLyoqXG4gKiBTZXQgdGltZSBvZiB0aGUgZGF5IHRvIHRoZSBlbmQuXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUuXG4gKiBAcmV0dXJucyB7RGF0ZX0gRGF0ZSB3aXRoIHRpbWUgc2V0IHRvIGVuZCBvZiBkYXkgLlxuICovXG5mdW5jdGlvbiBzZXRFbmRPZkRheShkYXRlKSB7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogQ0xEUiBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRyYW5zbGF0aW9uQ2FjaGUgPSB7fTtcbi8qKlxuICogQ0xEUiByZXF1ZXN0IGNhY2hlLlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG4vKipcbiAqIEZldGNoIGNhbGVuZGFyIGRhdGEgZm9yIGEgZ2l2ZW4gbG9jYWxlIGZyb20gbGlzdCBvZiBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXG4gKlxuICogQHBhcmFtIGxhbmdcbiAqIEBwdWJsaWNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYWxlRGF0YShsYW5nKSB7XG4gIGNvbnN0IGxvY2FsZSA9IGdldFN1cHBvcnRlZExvY2FsZShsYW5nKTtcbiAgaWYgKHRyYW5zbGF0aW9uQ2FjaGVbbG9jYWxlXSkge1xuICAgIHJldHVybiB0cmFuc2xhdGlvbkNhY2hlW2xvY2FsZV07XG4gIH1cbiAgaWYgKCFyZXF1ZXN0Q2FjaGVbbG9jYWxlXSkge1xuICAgIHJlcXVlc3RDYWNoZVtsb2NhbGVdID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy9kYXRlLXBpY2tlci9ubHMvJHtsb2NhbGV9Lmpzb25gKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUcmFuc2xhdGlvbnMgZm9yIFwiJHtsb2NhbGV9XCIgbm90IGZvdW5kIG9yIGludmFsaWQsIGZhbGxpbmcgYmFjayB0byBlbmdsaXNoYCk7XG4gICAgICByZXR1cm4gZ2V0TG9jYWxlRGF0YShcImVuXCIpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Q2FjaGVbbG9jYWxlXTtcbiAgdHJhbnNsYXRpb25DYWNoZVtsb2NhbGVdID0gZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59XG4vKipcbiAqICBNYXBzIHZhbHVlIHRvIHZhbHVlQXNEYXRlXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlQXNEYXRlUmFuZ2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLm1hcCgodiwgaW5kZXgpID0+IGRhdGVGcm9tSVNPKHYsIGluZGV4ID09PSAxKSk7XG59XG5cbmV4cG9ydCB7IGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nIGFzIGEsIGRhdGVUb0lTTyBhcyBiLCBkYXRlRnJvbUlTTyBhcyBjLCBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nIGFzIGQsIGdldExvY2FsZURhdGEgYXMgZSwgZGF0ZUZyb21SYW5nZSBhcyBmLCBnZXRWYWx1ZUFzRGF0ZVJhbmdlIGFzIGcsIGdldERheXNEaWZmIGFzIGgsIGluUmFuZ2UgYXMgaSwgc2FtZURhdGUgYXMgaiwgZ2V0T3JkZXIgYXMgaywgZm9ybWF0Q2FsZW5kYXJZZWFyIGFzIGwsIHBhcnNlQ2FsZW5kYXJZZWFyIGFzIG0sIG5leHRNb250aCBhcyBuLCBwcmV2TW9udGggYXMgcCwgc2V0RW5kT2ZEYXkgYXMgcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9