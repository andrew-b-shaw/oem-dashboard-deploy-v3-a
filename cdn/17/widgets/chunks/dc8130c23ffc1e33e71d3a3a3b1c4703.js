"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input-date-picker_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-date-picker.entry.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-date-picker.entry.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input_date_picker": () => (/* binding */ InputDatePicker)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-00851404.js */ "./node_modules/@esri/calcite-components/dist/esm/utils-00851404.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floating-ui-1033e8bb.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-1033e8bb.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./openCloseComponent-a26b009f.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./focusTrapComponent-b3a29d9c.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-b3a29d9c.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


















const CSS = {
  menu: "menu-container",
  menuActive: "menu-container--active",
  toggleIcon: "toggle-icon"
};

const inputDatePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([scale=s]){--calcite-toggle-spacing:0.5rem}:host([scale=m]){--calcite-toggle-spacing:0.75rem}:host([scale=l]){--calcite-toggle-spacing:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.calendar-picker-wrapper{position:static;inline-size:100%;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;inline-size:1rem;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-app-z-index);margin-inline:1px;background-color:var(--calcite-ui-foreground-1);padding-inline:0.625rem;inset-inline-start:0}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{inline-size:216px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{inline-size:286px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{inline-size:398px}.menu-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const InputDatePicker = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInputDatePickerChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerChange", 6);
    this.calciteInputDatePickerBeforeClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerBeforeClose", 6);
    this.calciteInputDatePickerClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerClose", 6);
    this.calciteInputDatePickerBeforeOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerBeforeOpen", 6);
    this.calciteInputDatePickerOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputDatePickerOpen", 6);
    this.calciteInternalInputInputHandler = (event) => {
      const target = event.target;
      const value = target.value;
      const parsedValue = this.parseNumerals(value);
      const formattedValue = this.formatNumerals(parsedValue);
      target.value = formattedValue;
      const { year } = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.d)(value, this.localeData);
      if (year && year.length < 4) {
        return;
      }
      const date = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.a)(value, this.localeData);
      if ((0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.i)(date, this.min, this.max)) {
        this.datePickerActiveDate = date;
      }
    };
    this.calciteInternalInputBlurHandler = () => {
      this.commitValue();
    };
    this.dialogId = `date-picker-dialog--${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_13__.g)()}`;
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
        ? (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.f)(flipPlacements, el)
        : null;
    };
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
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
        if ((0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.s)(this)) {
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
      (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl);
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
      (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__.c)(this, {
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
      const newStartDateISO = valueIsArray ? (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(newStartDate) : "";
      const newEndDate = valueIsArray ? valueAsDate[1] : null;
      const newEndDateISO = valueIsArray ? (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(newEndDate) : "";
      const newValue = newStartDateISO || newEndDateISO ? [newStartDateISO, newEndDateISO] : "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue;
      this.valueAsDate = newValue ? (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.g)(newValue) : undefined;
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
      const newValue = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(value);
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.valueAsDate = newValue ? (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(newValue) : undefined;
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
        : _key_3389d870_js__WEBPACK_IMPORTED_MODULE_6__.n?.includes(char)
          ? _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.n?.numberFormatter?.format(Number(char))
          : char)
        .join("")
      : "";
    this.parseNumerals = (value) => value
      ? value
        .split("")
        .map((char) => _key_3389d870_js__WEBPACK_IMPORTED_MODULE_6__.n.includes(char) ? _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.n.delocalize(char) : char)
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
    this.placement = _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.d;
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
    focusTrapDisabled ? (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__.d)(this) : (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__.a)(this);
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
        newValueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.g)(newValue);
      }
      else if (newValue) {
        newValueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(newValue);
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
      ? [(0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(valueAsDate[0]), (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(valueAsDate[1])]
      : (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(valueAsDate);
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
      this.minAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(min);
    }
  }
  onMaxChanged(max) {
    if (max) {
      this.maxAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(max);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    this.el.focus();
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.r)(this, {
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
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    const { open } = this;
    open && this.openHandler(open);
    if (Array.isArray(this.value)) {
      this.valueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.value);
    }
    else if (this.value) {
      try {
        this.valueAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.value);
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
      this.minAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.min);
    }
    if (this.max) {
      this.maxAsDate = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.max);
    }
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
    this.setFilteredPlacements();
    this.reposition(true);
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    await Promise.all([this.loadLocaleData(), (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_11__.s)(this)]);
    this.onMinChanged(this.min);
    this.onMaxChanged(this.max);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
    this.localizeInputValues();
    this.reposition(true);
  }
  disconnectedCallback() {
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, this.referenceEl, this.floatingEl);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_10__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_5__.u)(this);
  }
  render() {
    const { disabled, effectiveLocale, messages, numberingSystem, readOnly } = this;
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
      numberingSystem,
      locale: effectiveLocale,
      useGrouping: false
    };
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.deactivate, onKeyDown: this.keyDownHandler }, this.localeData && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-container" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setStartWrapper }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { "aria-autocomplete": "none", "aria-controls": this.dialogId, "aria-expanded": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.open), "aria-haspopup": "dialog", class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, disabled: disabled, icon: "calendar", "number-button-type": "none", numberingSystem: numberingSystem, onCalciteInputInput: this.calciteInternalInputInputHandler, onCalciteInternalInputBlur: this.calciteInternalInputBlurHandler, onCalciteInternalInputFocus: this.startInputFocus, onFocus: this.startEndInputFocus, placeholder: this.localeData?.placeholder, readOnly: readOnly, role: "combobox", scale: this.scale, type: "text",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setStartInput }), this.renderToggleIcon(this.open && this.focusedInput === "start")), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.t)(!this.open), "aria-label": messages.chooseDate, "aria-live": "polite", "aria-modal": "true", class: {
        [CSS.menu]: true,
        [CSS.menuActive]: this.open
      }, id: this.dialogId, role: "dialog",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setFloatingEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        ["calendar-picker-wrapper"]: true,
        ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.F.animation]: true,
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.F.animationActive]: this.open
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-date-picker", { activeDate: this.datePickerActiveDate, activeRange: this.focusedInput, headingLevel: this.headingLevel, max: this.max, maxAsDate: this.maxAsDate, messageOverrides: this.messageOverrides, min: this.min, minAsDate: this.minAsDate, numberingSystem: numberingSystem, onCalciteDatePickerChange: this.handleDateChange, onCalciteDatePickerRangeChange: this.handleDateRangeChange, proximitySelectionDisabled: this.proximitySelectionDisabled, range: this.range, scale: this.scale, tabIndex: this.open ? undefined : -1, valueAsDate: this.valueAsDate,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setDatePickerRef }))), this.range && this.layout === "horizontal" && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "horizontal-arrow-container" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: this.scale === "l" ? "m" : "s" }))), this.range && this.layout === "vertical" && this.scale !== "s" && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vertical-arrow-container" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "arrow-down", scale: this.scale === "l" ? "m" : "s" }))), this.range && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setEndWrapper }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { "aria-autocomplete": "none", "aria-controls": this.dialogId, "aria-expanded": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.open), "aria-haspopup": "dialog", class: {
        input: true,
        "border-top-color-one": this.layout === "vertical" && this.range
      }, disabled: disabled, icon: "calendar", "number-button-type": "none", numberingSystem: numberingSystem, onCalciteInputInput: this.calciteInternalInputInputHandler, onCalciteInternalInputBlur: this.calciteInternalInputBlurHandler, onCalciteInternalInputFocus: this.endInputFocus, onFocus: this.startEndInputFocus, placeholder: this.localeData?.placeholder, readOnly: readOnly, role: "combobox", scale: this.scale, type: "text",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setEndInput }), this.renderToggleIcon(this.open && this.focusedInput === "end"))))), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.H, { component: this })));
  }
  renderToggleIcon(open) {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.toggleIcon }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  setReferenceEl() {
    const { focusedInput, layout, endWrapper, startWrapper } = this;
    this.referenceEl =
      focusedInput === "end" || layout === "vertical"
        ? endWrapper || startWrapper
        : startWrapper || endWrapper;
    requestAnimationFrame(() => (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl));
  }
  onLabelClick() {
    this.setFocus();
  }
  onBeforeOpen() {
    this.calciteInputDatePickerBeforeOpen.emit();
  }
  onOpen() {
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__.a)(this, {
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
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
    this.restoreInputFocus();
    this.focusOnOpen = false;
  }
  commitValue() {
    const { focusedInput, value } = this;
    const focusedInputName = `${focusedInput}Input`;
    const focusedInputValue = this[focusedInputName].value;
    const date = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.a)(focusedInputValue, this.localeData);
    const dateAsISO = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.b)(date);
    const valueIsArray = Array.isArray(value);
    if (this.range) {
      const focusedInputValueIndex = focusedInput === "start" ? 0 : 1;
      if (valueIsArray) {
        if (dateAsISO === value[focusedInputValueIndex]) {
          return;
        }
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[0]),
            focusedInput === "end" ? date : (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[1])
          ]);
          this.localizeInputValues();
        }
        else {
          this.setRangeValue([
            focusedInput === "end" && (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[0]),
            focusedInput === "start" && (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[1])
          ]);
        }
      }
      else {
        if (date) {
          this.setRangeValue([
            focusedInput === "start" ? date : (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[0]),
            focusedInput === "end" ? date : (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.c)(value[1])
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
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
    this.localeData = await (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.effectiveLocale);
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
    const date = (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)((this.range
      ? (Array.isArray(this.valueAsDate) && this.valueAsDate[0]) || undefined
      : this.valueAsDate), this.minAsDate, this.maxAsDate);
    const endDate = this.range
      ? (0,_utils_00851404_js__WEBPACK_IMPORTED_MODULE_1__.f)((Array.isArray(this.valueAsDate) && this.valueAsDate[1]) || undefined, this.minAsDate, this.maxAsDate)
      : null;
    const localizedDate = date && this.formatNumerals(date.toLocaleDateString(this.effectiveLocale));
    const localizedEndDate = endDate && this.formatNumerals(endDate.toLocaleDateString(this.effectiveLocale));
    localizedDate && this.setInputValue(localizedDate, "start");
    this.range && localizedEndDate && this.setInputValue(localizedEndDate, "end");
  }
  warnAboutInvalidValue(value) {
    console.warn(`The specified value "${value}" does not conform to the required format, "YYYY-MM-DD".`);
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZGM4MTMwYzIzZmZjMWUzM2U3MWQzYTNhM2IxYzQ3MDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUMyRztBQUNqSztBQUNvSTtBQUNyRTtBQUMvQztBQUNuQjtBQUMwQjtBQUNzQztBQUNEO0FBQ0U7QUFDZjtBQUNxQjtBQUM1RTtBQUNkO0FBQ0Q7QUFDQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0seUJBQXlCLGtDQUFrQyxrQ0FBa0MsOEJBQThCLHlDQUF5Qyx1QkFBdUIsdUNBQXVDLG1DQUFtQyw4QkFBOEIsK0JBQStCLGlDQUFpQyxpQ0FBaUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxrQkFBa0IscUJBQXFCLGlCQUFpQixpQkFBaUIsbUJBQW1CLHNCQUFzQiw4QkFBOEIsdUdBQXVHLGdE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QTtBQUNBOztBQUVnViIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtaW5wdXQtZGF0ZS1waWNrZXIuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdXRpbHMtMDA4NTE0MDQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGQgYXMgZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZywgYSBhcyBkYXRlRnJvbUxvY2FsaXplZFN0cmluZywgaSBhcyBpblJhbmdlLCBiIGFzIGRhdGVUb0lTTywgZyBhcyBnZXRWYWx1ZUFzRGF0ZVJhbmdlLCBjIGFzIGRhdGVGcm9tSVNPLCBlIGFzIGdldExvY2FsZURhdGEsIGYgYXMgZGF0ZUZyb21SYW5nZSB9IGZyb20gJy4vdXRpbHMtMDA4NTE0MDQuanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgZiBhcyBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMsIGMgYXMgY29ubmVjdEZsb2F0aW5nVUksIGQgYXMgZGVmYXVsdE1lbnVQbGFjZW1lbnQsIHIgYXMgcmVwb3NpdGlvbiwgYSBhcyBkaXNjb25uZWN0RmxvYXRpbmdVSSwgRiBhcyBGbG9hdGluZ0NTUyB9IGZyb20gJy4vZmxvYXRpbmctdWktMTAzM2U4YmIuanMnO1xuaW1wb3J0IHsgcyBhcyBzdWJtaXRGb3JtLCBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0tNDQ1MzAwMDEuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LTMzODlkODcwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCB9IGZyb20gJy4vbGFiZWwtNTljOWQ0NzIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRMb2FkZWQsIHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtYTI2YjAwOWYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb2N1c1RyYXAsIGQgYXMgZGVhY3RpdmF0ZUZvY3VzVHJhcCwgYSBhcyBhY3RpdmF0ZUZvY3VzVHJhcCB9IGZyb20gJy4vZm9jdXNUcmFwQ29tcG9uZW50LWIzYTI5ZDljLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9kZWJvdW5jZS1iOTA3MjQyMi5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBtZW51OiBcIm1lbnUtY29udGFpbmVyXCIsXG4gIG1lbnVBY3RpdmU6IFwibWVudS1jb250YWluZXItLWFjdGl2ZVwiLFxuICB0b2dnbGVJY29uOiBcInRvZ2dsZS1pY29uXCJcbn07XG5cbmNvbnN0IGlucHV0RGF0ZVBpY2tlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7LS1jYWxjaXRlLWljb24tc2l6ZToxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLWVpZ2h0aDowLjEyNXJlbTstLWNhbGNpdGUtc3BhY2luZy1xdWFydGVyOjAuMjVyZW07LS1jYWxjaXRlLXNwYWNpbmctaGFsZjowLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctdGhyZWUtcXVhcnRlcnM6MC43NXJlbTstLWNhbGNpdGUtc3BhY2luZzoxcmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtcXVhcnRlcjoxLjI1cmVtOy0tY2FsY2l0ZS1zcGFjaW5nLXBsdXMtaGFsZjoxLjVyZW07LS1jYWxjaXRlLXNwYWNpbmctZG91YmxlOjJyZW07LS1jYWxjaXRlLW1lbnUtbWluLXdpZHRoOjEwcmVtOy0tY2FsY2l0ZS1oZWFkZXItbWluLWhlaWdodDozcmVtOy0tY2FsY2l0ZS1mb290ZXItbWluLWhlaWdodDozcmVtfTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OnZpc2libGU7dmVydGljYWwtYWxpZ246dG9wOy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QgLm1lbnUtY29udGFpbmVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KX06aG9zdCAubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXRvcF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfTpob3N0IC5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfTpob3N0IC5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49cmlnaHRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTVweCl9Omhvc3QgLm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmc6MC41cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmc6MXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNhbGVuZGFyLXBpY2tlci13cmFwcGVye3Bvc2l0aW9uOnN0YXRpYztpbmxpbmUtc2l6ZToxMDAlOy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApfS5pbnB1dC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlfS50b2dnbGUtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MXJlbTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aW5zZXQtaW5saW5lLWVuZDowO2luc2V0LWJsb2NrOjA7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZyl9Omhvc3QoW3JhbmdlXSkgLmlucHV0LWNvbnRhaW5lcntkaXNwbGF5OmZsZXh9Omhvc3QoW3JhbmdlXSkgLmlucHV0LXdyYXBwZXJ7ZmxleDoxIDEgYXV0b306aG9zdChbcmFuZ2VdKSAuaG9yaXpvbnRhbC1hcnJvdy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC4yNXJlbX06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF0pIC5pbnB1dC13cmFwcGVye2lubGluZS1zaXplOjEwMCV9Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdKSAuaW5wdXQtY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXSkgLmNhbGVuZGFyLXBpY2tlci13cmFwcGVyLS1lbmR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lcntpbnNldC1ibG9jay1zdGFydDoxLjVyZW07cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTttYXJnaW4taW5saW5lOjFweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWlubGluZTowLjYyNXJlbTtpbnNldC1pbmxpbmUtc3RhcnQ6MH06aG9zdChbc2NhbGU9c11bcmFuZ2VdOm5vdChbbGF5b3V0PXZlcnRpY2FsXSkpIC5jYWxlbmRhci1waWNrZXItd3JhcHBlcntpbmxpbmUtc2l6ZToyMTZweH06aG9zdChbc2NhbGU9bV1bcmFuZ2VdOm5vdChbbGF5b3V0PXZlcnRpY2FsXSkpIC5jYWxlbmRhci1waWNrZXItd3JhcHBlcntpbmxpbmUtc2l6ZToyODZweH06aG9zdChbc2NhbGU9bF1bcmFuZ2VdOm5vdChbbGF5b3V0PXZlcnRpY2FsXSkpIC5jYWxlbmRhci1waWNrZXItd3JhcHBlcntpbmxpbmUtc2l6ZTozOThweH0ubWVudS1jb250YWluZXJ7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bik7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleCk7dmlzaWJpbGl0eTpoaWRkZW59Lm1lbnUtY29udGFpbmVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KX0ubWVudS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXRvcF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfS5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfS5tZW51LWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49cmlnaHRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTVweCl9Lm1lbnUtY29udGFpbmVyW2RhdGEtcGxhY2VtZW50XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW29wZW5dKSAubWVudS1jb250YWluZXJ7dmlzaWJpbGl0eTp2aXNpYmxlfS5tZW51LWNvbnRhaW5lci0tYWN0aXZle3Zpc2liaWxpdHk6dmlzaWJsZX0uaW5wdXQgLmNhbGNpdGUtaW5wdXRfX3dyYXBwZXJ7bWFyZ2luLWJsb2NrLXN0YXJ0OjBweH06aG9zdChbcmFuZ2VdW2xheW91dD12ZXJ0aWNhbF1bc2NhbGU9bV0pIC52ZXJ0aWNhbC1hcnJvdy1jb250YWluZXJ7aW5zZXQtYmxvY2stc3RhcnQ6MS41cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNzVyZW19Omhvc3QoW3JhbmdlXVtsYXlvdXQ9dmVydGljYWxdW3NjYWxlPW1dKSAudmVydGljYWwtYXJyb3ctY29udGFpbmVyIGNhbGNpdGUtaWNvbntibG9jay1zaXplOjAuNzVyZW07aW5saW5lLXNpemU6MC43NXJlbTttaW4taW5saW5lLXNpemU6MHB4fTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXVtzY2FsZT1sXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lcntpbnNldC1ibG9jay1zdGFydDoyLjI1cmVtO3BhZGRpbmctaW5saW5lOjAuODc1cmVtfTpob3N0KFtyYW5nZV1bbGF5b3V0PXZlcnRpY2FsXVtvcGVuXSkgLnZlcnRpY2FsLWFycm93LWNvbnRhaW5lcntkaXNwbGF5Om5vbmV9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IElucHV0RGF0ZVBpY2tlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0RGF0ZVBpY2tlckJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dERhdGVQaWNrZXJDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyQmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXREYXRlUGlja2VyT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0SW5wdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdGhpcy5wYXJzZU51bWVyYWxzKHZhbHVlKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXROdW1lcmFscyhwYXJzZWRWYWx1ZSk7XG4gICAgICB0YXJnZXQudmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgIGNvbnN0IHsgeWVhciB9ID0gZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyh2YWx1ZSwgdGhpcy5sb2NhbGVEYXRhKTtcbiAgICAgIGlmICh5ZWFyICYmIHllYXIubGVuZ3RoIDwgNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gZGF0ZUZyb21Mb2NhbGl6ZWRTdHJpbmcodmFsdWUsIHRoaXMubG9jYWxlRGF0YSk7XG4gICAgICBpZiAoaW5SYW5nZShkYXRlLCB0aGlzLm1pbiwgdGhpcy5tYXgpKSB7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlckFjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jb21taXRWYWx1ZSgpO1xuICAgIH07XG4gICAgdGhpcy5kaWFsb2dJZCA9IGBkYXRlLXBpY2tlci1kaWFsb2ctLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubGFzdEJsdXJyZWRJbnB1dCA9IFwibm9uZVwiO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMub3BlblRyYW5zaXRpb25Qcm9wID0gXCJvcGFjaXR5XCI7XG4gICAgdGhpcy52YWx1ZUFzRGF0ZUNoYW5nZWRFeHRlcm5hbGx5ID0gZmFsc2U7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMub25JbnB1dFdyYXBwZXJDbGljayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMubGFzdEJsdXJyZWRJbnB1dCAhPT0gXCJub25lXCIgJiYgdGhpcy5vcGVuKSA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdEJsdXJyZWRJbnB1dCA9IFwibm9uZVwiO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBmbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyZWRGbGlwUGxhY2VtZW50cyA9IGZsaXBQbGFjZW1lbnRzXG4gICAgICAgID8gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKGZsaXBQbGFjZW1lbnRzLCBlbClcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTdGFydElucHV0ID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0SW5wdXQgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0RW5kSW5wdXQgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZW5kSW5wdXQgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5sYXN0Qmx1cnJlZElucHV0ID0gXCJub25lXCI7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcmV2ZW50ZWQsIGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5jb21taXRWYWx1ZSgpO1xuICAgICAgICBpZiAodGhpcy5zaG91bGRGb2N1c1JhbmdlRW5kKCkpIHtcbiAgICAgICAgICB0aGlzLmVuZElucHV0Py5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvdWxkRm9jdXNSYW5nZVN0YXJ0KCkpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW5wdXQ/LnNldEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSB0cnVlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnN0YXJ0SW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJzdGFydFwiO1xuICAgIH07XG4gICAgdGhpcy5zdGFydEVuZElucHV0Rm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGJsdXJyZWRFbCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICB0aGlzLmxhc3RCbHVycmVkSW5wdXQgPVxuICAgICAgICBibHVycmVkRWwgPT09IHRoaXMuc3RhcnRJbnB1dCA/IFwic3RhcnRcIiA6IGJsdXJyZWRFbCA9PT0gdGhpcy5lbmRJbnB1dCA/IFwiZW5kXCIgOiBcIm5vbmVcIjtcbiAgICB9O1xuICAgIHRoaXMuZW5kSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJlbmRcIjtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmxvYXRpbmdFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsID0gZWw7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTdGFydFdyYXBwZXIgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRXcmFwcGVyID0gZWw7XG4gICAgICB0aGlzLnNldFJlZmVyZW5jZUVsKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEVuZFdyYXBwZXIgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZW5kV3JhcHBlciA9IGVsO1xuICAgICAgdGhpcy5zZXRSZWZlcmVuY2VFbCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXREYXRlUGlja2VyUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJFbCA9IGVsO1xuICAgICAgY29ubmVjdEZvY3VzVHJhcCh0aGlzLCB7XG4gICAgICAgIGZvY3VzVHJhcEVsOiBlbCxcbiAgICAgICAgZm9jdXNUcmFwT3B0aW9uczoge1xuICAgICAgICAgIGluaXRpYWxGb2N1czogZmFsc2UsXG4gICAgICAgICAgc2V0UmV0dXJuRm9jdXM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgQ2FsY2l0ZURhdGVQaWNrZXIgY3VzdG9tIGNoYW5nZSBldmVudFxuICAgICAqL1xuICAgIHRoaXMuaGFuZGxlRGF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZUFzRGF0ZSk7XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGF0ZVJhbmdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZUFzRGF0ZTtcbiAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICAgIHRoaXMucmVzdG9yZUlucHV0Rm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSA9IChuZXdWYWx1ZSwgaW5wdXQgPSBcInN0YXJ0XCIpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzW2Ake2lucHV0fUlucHV0YF07XG4gICAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5wdXRFbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5zZXRSYW5nZVZhbHVlID0gKHZhbHVlQXNEYXRlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB2YWx1ZTogb2xkVmFsdWUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvbGRWYWx1ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG9sZFZhbHVlKTtcbiAgICAgIGNvbnN0IHZhbHVlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWVBc0RhdGUpO1xuICAgICAgY29uc3QgbmV3U3RhcnREYXRlID0gdmFsdWVJc0FycmF5ID8gdmFsdWVBc0RhdGVbMF0gOiBudWxsO1xuICAgICAgY29uc3QgbmV3U3RhcnREYXRlSVNPID0gdmFsdWVJc0FycmF5ID8gZGF0ZVRvSVNPKG5ld1N0YXJ0RGF0ZSkgOiBcIlwiO1xuICAgICAgY29uc3QgbmV3RW5kRGF0ZSA9IHZhbHVlSXNBcnJheSA/IHZhbHVlQXNEYXRlWzFdIDogbnVsbDtcbiAgICAgIGNvbnN0IG5ld0VuZERhdGVJU08gPSB2YWx1ZUlzQXJyYXkgPyBkYXRlVG9JU08obmV3RW5kRGF0ZSkgOiBcIlwiO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdTdGFydERhdGVJU08gfHwgbmV3RW5kRGF0ZUlTTyA/IFtuZXdTdGFydERhdGVJU08sIG5ld0VuZERhdGVJU09dIDogXCJcIjtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBuZXdWYWx1ZSA/IGdldFZhbHVlQXNEYXRlUmFuZ2UobmV3VmFsdWUpIDogdW5kZWZpbmVkO1xuICAgICAgY29uc3QgY2hhbmdlRXZlbnQgPSB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgaWYgKGNoYW5nZUV2ZW50ICYmIGNoYW5nZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICBpZiAob2xkVmFsdWVJc0FycmF5KSB7XG4gICAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKG9sZFZhbHVlWzBdLCBcInN0YXJ0XCIpO1xuICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShvbGRWYWx1ZVsxXSwgXCJlbmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZGF0ZVRvSVNPKHZhbHVlKTtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBuZXdWYWx1ZSA/IGRhdGVGcm9tSVNPKG5ld1ZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZSB8fCBcIlwiO1xuICAgICAgY29uc3QgY2hhbmdlRXZlbnQgPSB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgaWYgKGNoYW5nZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUob2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jb21tb25EYXRlU2VwYXJhdG9ycyA9IFtcIi5cIiwgXCItXCIsIFwiL1wiXTtcbiAgICB0aGlzLmZvcm1hdE51bWVyYWxzID0gKHZhbHVlKSA9PiB2YWx1ZVxuICAgICAgPyB2YWx1ZVxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoY2hhcikgPT4gdGhpcy5jb21tb25EYXRlU2VwYXJhdG9ycz8uaW5jbHVkZXMoY2hhcilcbiAgICAgICAgPyB0aGlzLmxvY2FsZURhdGE/LnNlcGFyYXRvclxuICAgICAgICA6IG51bWJlcktleXM/LmluY2x1ZGVzKGNoYXIpXG4gICAgICAgICAgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXI/Lm51bWJlckZvcm1hdHRlcj8uZm9ybWF0KE51bWJlcihjaGFyKSlcbiAgICAgICAgICA6IGNoYXIpXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICA6IFwiXCI7XG4gICAgdGhpcy5wYXJzZU51bWVyYWxzID0gKHZhbHVlKSA9PiB2YWx1ZVxuICAgICAgPyB2YWx1ZVxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoY2hhcikgPT4gbnVtYmVyS2V5cy5pbmNsdWRlcyhjaGFyKSA/IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKGNoYXIpIDogY2hhcilcbiAgICAgICAgLmpvaW4oXCJcIilcbiAgICAgIDogXCJcIjtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RyYXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5mbGlwUGxhY2VtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluQXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4QXNEYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZWZhdWx0TWVudVBsYWNlbWVudDtcbiAgICB0aGlzLnJhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxheW91dCA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIHRoaXMuZGF0ZVBpY2tlckFjdGl2ZURhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZm9jdXNlZElucHV0ID0gXCJzdGFydFwiO1xuICAgIHRoaXMubG9jYWxlRGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIGxldCBuZXdWYWx1ZUFzRGF0ZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZUFzRGF0ZSA9IGdldFZhbHVlQXNEYXRlUmFuZ2UobmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgbmV3VmFsdWVBc0RhdGUgPSBkYXRlRnJvbUlTTyhuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWVBc0RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSAmJiBuZXdWYWx1ZUFzRGF0ZSAhPT0gdGhpcy52YWx1ZUFzRGF0ZSkge1xuICAgICAgICB0aGlzLnZhbHVlQXNEYXRlID0gbmV3VmFsdWVBc0RhdGU7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgdmFsdWVBc0RhdGVXYXRjaGVyKHZhbHVlQXNEYXRlKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyQWN0aXZlRGF0ZSA9IHZhbHVlQXNEYXRlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5yYW5nZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlQXNEYXRlKVxuICAgICAgPyBbZGF0ZVRvSVNPKHZhbHVlQXNEYXRlWzBdKSwgZGF0ZVRvSVNPKHZhbHVlQXNEYXRlWzFdKV1cbiAgICAgIDogZGF0ZVRvSVNPKHZhbHVlQXNEYXRlKTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWVBc0RhdGVDaGFuZ2VkRXh0ZXJuYWxseSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlQXNEYXRlQ2hhbmdlZEV4dGVybmFsbHkgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZmxpcFBsYWNlbWVudHNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBvbk1pbkNoYW5nZWQobWluKSB7XG4gICAgaWYgKG1pbikge1xuICAgICAgdGhpcy5taW5Bc0RhdGUgPSBkYXRlRnJvbUlTTyhtaW4pO1xuICAgIH1cbiAgfVxuICBvbk1heENoYW5nZWQobWF4KSB7XG4gICAgaWYgKG1heCkge1xuICAgICAgdGhpcy5tYXhBc0RhdGUgPSBkYXRlRnJvbUlTTyhtYXgpO1xuICAgIH1cbiAgfVxuICBvcGVuSGFuZGxlcih2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZURheVNlbGVjdEhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkRm9jdXNSYW5nZVN0YXJ0KCkgfHwgdGhpcy5zaG91bGRGb2N1c1JhbmdlRW5kKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZmxvYXRpbmdFbCwgcmVmZXJlbmNlRWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICByZWZlcmVuY2VFbCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgdHlwZTogXCJtZW51XCJcbiAgICB9LCBkZWxheWVkKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzO1xuICAgIG9wZW4gJiYgdGhpcy5vcGVuSGFuZGxlcihvcGVuKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZUFzRGF0ZSA9IGdldFZhbHVlQXNEYXRlUmFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMudmFsdWVBc0RhdGUgPSBkYXRlRnJvbUlTTyh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLndhcm5BYm91dEludmFsaWRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucmFuZ2UgJiYgdGhpcy52YWx1ZUFzRGF0ZSkge1xuICAgICAgdGhpcy5zZXRSYW5nZVZhbHVlKHRoaXMudmFsdWVBc0RhdGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5taW4pIHtcbiAgICAgIHRoaXMubWluQXNEYXRlID0gZGF0ZUZyb21JU08odGhpcy5taW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXgpIHtcbiAgICAgIHRoaXMubWF4QXNEYXRlID0gZGF0ZUZyb21JU08odGhpcy5tYXgpO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5sb2FkTG9jYWxlRGF0YSgpLCBzZXRVcE1lc3NhZ2VzKHRoaXMpXSk7XG4gICAgdGhpcy5vbk1pbkNoYW5nZWQodGhpcy5taW4pO1xuICAgIHRoaXMub25NYXhDaGFuZ2VkKHRoaXMubWF4KTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgZGlzY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIGVmZmVjdGl2ZUxvY2FsZSwgbWVzc2FnZXMsIG51bWJlcmluZ1N5c3RlbSwgcmVhZE9ubHkgfSA9IHRoaXM7XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBsb2NhbGU6IGVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLmRlYWN0aXZhdGUsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCB0aGlzLmxvY2FsZURhdGEgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1jb250YWluZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtd3JhcHBlclwiLCBvbkNsaWNrOiB0aGlzLm9uSW5wdXRXcmFwcGVyQ2xpY2ssXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRTdGFydFdyYXBwZXIgfSwgaChcImNhbGNpdGUtaW5wdXRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtY29udHJvbHNcIjogdGhpcy5kaWFsb2dJZCwgXCJhcmlhLWV4cGFuZGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5vcGVuKSwgXCJhcmlhLWhhc3BvcHVwXCI6IFwiZGlhbG9nXCIsIGNsYXNzOiBgaW5wdXQgJHt0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHRoaXMucmFuZ2UgPyBgbm8tYm90dG9tLWJvcmRlcmAgOiBgYH1gLCBkaXNhYmxlZDogZGlzYWJsZWQsIGljb246IFwiY2FsZW5kYXJcIiwgXCJudW1iZXItYnV0dG9uLXR5cGVcIjogXCJub25lXCIsIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnB1dElucHV0OiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0SW5wdXRIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0Qmx1cjogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJIYW5kbGVyLCBvbkNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXM6IHRoaXMuc3RhcnRJbnB1dEZvY3VzLCBvbkZvY3VzOiB0aGlzLnN0YXJ0RW5kSW5wdXRGb2N1cywgcGxhY2Vob2xkZXI6IHRoaXMubG9jYWxlRGF0YT8ucGxhY2Vob2xkZXIsIHJlYWRPbmx5OiByZWFkT25seSwgcm9sZTogXCJjb21ib2JveFwiLCBzY2FsZTogdGhpcy5zY2FsZSwgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRTdGFydElucHV0IH0pLCB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIpKSwgaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighdGhpcy5vcGVuKSwgXCJhcmlhLWxhYmVsXCI6IG1lc3NhZ2VzLmNob29zZURhdGUsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5tZW51XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5tZW51QWN0aXZlXTogdGhpcy5vcGVuXG4gICAgICB9LCBpZDogdGhpcy5kaWFsb2dJZCwgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEZsb2F0aW5nRWwgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtcImNhbGVuZGFyLXBpY2tlci13cmFwcGVyXCJdOiB0cnVlLFxuICAgICAgICBbXCJjYWxlbmRhci1waWNrZXItd3JhcHBlci0tZW5kXCJdOiB0aGlzLmZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIixcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbl06IHRydWUsXG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiB0aGlzLm9wZW5cbiAgICAgIH0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgaChcImNhbGNpdGUtZGF0ZS1waWNrZXJcIiwgeyBhY3RpdmVEYXRlOiB0aGlzLmRhdGVQaWNrZXJBY3RpdmVEYXRlLCBhY3RpdmVSYW5nZTogdGhpcy5mb2N1c2VkSW5wdXQsIGhlYWRpbmdMZXZlbDogdGhpcy5oZWFkaW5nTGV2ZWwsIG1heDogdGhpcy5tYXgsIG1heEFzRGF0ZTogdGhpcy5tYXhBc0RhdGUsIG1lc3NhZ2VPdmVycmlkZXM6IHRoaXMubWVzc2FnZU92ZXJyaWRlcywgbWluOiB0aGlzLm1pbiwgbWluQXNEYXRlOiB0aGlzLm1pbkFzRGF0ZSwgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sIG9uQ2FsY2l0ZURhdGVQaWNrZXJDaGFuZ2U6IHRoaXMuaGFuZGxlRGF0ZUNoYW5nZSwgb25DYWxjaXRlRGF0ZVBpY2tlclJhbmdlQ2hhbmdlOiB0aGlzLmhhbmRsZURhdGVSYW5nZUNoYW5nZSwgcHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQ6IHRoaXMucHJveGltaXR5U2VsZWN0aW9uRGlzYWJsZWQsIHJhbmdlOiB0aGlzLnJhbmdlLCBzY2FsZTogdGhpcy5zY2FsZSwgdGFiSW5kZXg6IHRoaXMub3BlbiA/IHVuZGVmaW5lZCA6IC0xLCB2YWx1ZUFzRGF0ZTogdGhpcy52YWx1ZUFzRGF0ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldERhdGVQaWNrZXJSZWYgfSkpKSwgdGhpcy5yYW5nZSAmJiB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJob3Jpem9udGFsLWFycm93LWNvbnRhaW5lclwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiB0cnVlLCBpY29uOiBcImFycm93LXJpZ2h0XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKSwgdGhpcy5yYW5nZSAmJiB0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHRoaXMuc2NhbGUgIT09IFwic1wiICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwidmVydGljYWwtYXJyb3ctY29udGFpbmVyXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiYXJyb3ctZG93blwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSksIHRoaXMucmFuZ2UgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC13cmFwcGVyXCIsIG9uQ2xpY2s6IHRoaXMub25JbnB1dFdyYXBwZXJDbGljayxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEVuZFdyYXBwZXIgfSwgaChcImNhbGNpdGUtaW5wdXRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtY29udHJvbHNcIjogdGhpcy5kaWFsb2dJZCwgXCJhcmlhLWV4cGFuZGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5vcGVuKSwgXCJhcmlhLWhhc3BvcHVwXCI6IFwiZGlhbG9nXCIsIGNsYXNzOiB7XG4gICAgICAgIGlucHV0OiB0cnVlLFxuICAgICAgICBcImJvcmRlci10b3AtY29sb3Itb25lXCI6IHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgdGhpcy5yYW5nZVxuICAgICAgfSwgZGlzYWJsZWQ6IGRpc2FibGVkLCBpY29uOiBcImNhbGVuZGFyXCIsIFwibnVtYmVyLWJ1dHRvbi10eXBlXCI6IFwibm9uZVwiLCBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSwgb25DYWxjaXRlSW5wdXRJbnB1dDogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXI6IHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVySGFuZGxlciwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzOiB0aGlzLmVuZElucHV0Rm9jdXMsIG9uRm9jdXM6IHRoaXMuc3RhcnRFbmRJbnB1dEZvY3VzLCBwbGFjZWhvbGRlcjogdGhpcy5sb2NhbGVEYXRhPy5wbGFjZWhvbGRlciwgcmVhZE9ubHk6IHJlYWRPbmx5LCByb2xlOiBcImNvbWJvYm94XCIsIHNjYWxlOiB0aGlzLnNjYWxlLCB0eXBlOiBcInRleHRcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEVuZElucHV0IH0pLCB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuICYmIHRoaXMuZm9jdXNlZElucHV0ID09PSBcImVuZFwiKSkpKSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICByZW5kZXJUb2dnbGVJY29uKG9wZW4pIHtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy50b2dnbGVJY29uIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBvcGVuID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogXCJzXCIgfSkpKTtcbiAgfVxuICBzZXRSZWZlcmVuY2VFbCgpIHtcbiAgICBjb25zdCB7IGZvY3VzZWRJbnB1dCwgbGF5b3V0LCBlbmRXcmFwcGVyLCBzdGFydFdyYXBwZXIgfSA9IHRoaXM7XG4gICAgdGhpcy5yZWZlcmVuY2VFbCA9XG4gICAgICBmb2N1c2VkSW5wdXQgPT09IFwiZW5kXCIgfHwgbGF5b3V0ID09PSBcInZlcnRpY2FsXCJcbiAgICAgICAgPyBlbmRXcmFwcGVyIHx8IHN0YXJ0V3JhcHBlclxuICAgICAgICA6IHN0YXJ0V3JhcHBlciB8fCBlbmRXcmFwcGVyO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpKTtcbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIG9uQmVmb3JlT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgYWN0aXZhdGVGb2N1c1RyYXAodGhpcywge1xuICAgICAgb25BY3RpdmF0ZTogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c09uT3Blbikge1xuICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlckVsLnNldEZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXREYXRlUGlja2VyT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJCZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dERhdGVQaWNrZXJDbG9zZS5lbWl0KCk7XG4gICAgZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgICB0aGlzLnJlc3RvcmVJbnB1dEZvY3VzKCk7XG4gICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICB9XG4gIGNvbW1pdFZhbHVlKCkge1xuICAgIGNvbnN0IHsgZm9jdXNlZElucHV0LCB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBmb2N1c2VkSW5wdXROYW1lID0gYCR7Zm9jdXNlZElucHV0fUlucHV0YDtcbiAgICBjb25zdCBmb2N1c2VkSW5wdXRWYWx1ZSA9IHRoaXNbZm9jdXNlZElucHV0TmFtZV0udmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tTG9jYWxpemVkU3RyaW5nKGZvY3VzZWRJbnB1dFZhbHVlLCB0aGlzLmxvY2FsZURhdGEpO1xuICAgIGNvbnN0IGRhdGVBc0lTTyA9IGRhdGVUb0lTTyhkYXRlKTtcbiAgICBjb25zdCB2YWx1ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgY29uc3QgZm9jdXNlZElucHV0VmFsdWVJbmRleCA9IGZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiID8gMCA6IDE7XG4gICAgICBpZiAodmFsdWVJc0FycmF5KSB7XG4gICAgICAgIGlmIChkYXRlQXNJU08gPT09IHZhbHVlW2ZvY3VzZWRJbnB1dFZhbHVlSW5kZXhdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgdGhpcy5zZXRSYW5nZVZhbHVlKFtcbiAgICAgICAgICAgIGZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiID8gZGF0ZSA6IGRhdGVGcm9tSVNPKHZhbHVlWzBdKSxcbiAgICAgICAgICAgIGZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIiA/IGRhdGUgOiBkYXRlRnJvbUlTTyh2YWx1ZVsxXSlcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoW1xuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcImVuZFwiICYmIGRhdGVGcm9tSVNPKHZhbHVlWzBdKSxcbiAgICAgICAgICAgIGZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiICYmIGRhdGVGcm9tSVNPKHZhbHVlWzFdKVxuICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoW1xuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgPyBkYXRlIDogZGF0ZUZyb21JU08odmFsdWVbMF0pLFxuICAgICAgICAgICAgZm9jdXNlZElucHV0ID09PSBcImVuZFwiID8gZGF0ZSA6IGRhdGVGcm9tSVNPKHZhbHVlWzFdKVxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGRhdGVBc0lTTyA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZShkYXRlKTtcbiAgICAgIHRoaXMubG9jYWxpemVJbnB1dFZhbHVlcygpO1xuICAgIH1cbiAgfVxuICBhc3luYyBsb2FkTG9jYWxlRGF0YSgpIHtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsZURhdGEgPSBhd2FpdCBnZXRMb2NhbGVEYXRhKHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICB0aGlzLmxvY2FsaXplSW5wdXRWYWx1ZXMoKTtcbiAgfVxuICBzaG91bGRGb2N1c1JhbmdlU3RhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRWYWx1ZSA9IHRoaXMudmFsdWVbMF07XG4gICAgY29uc3QgZW5kVmFsdWUgPSB0aGlzLnZhbHVlWzFdO1xuICAgIHJldHVybiAhIShlbmRWYWx1ZSAmJiAhc3RhcnRWYWx1ZSAmJiB0aGlzLmZvY3VzZWRJbnB1dCA9PT0gXCJlbmRcIiAmJiB0aGlzLnN0YXJ0SW5wdXQpO1xuICB9XG4gIHNob3VsZEZvY3VzUmFuZ2VFbmQoKSB7XG4gICAgY29uc3Qgc3RhcnRWYWx1ZSA9IHRoaXMudmFsdWVbMF07XG4gICAgY29uc3QgZW5kVmFsdWUgPSB0aGlzLnZhbHVlWzFdO1xuICAgIHJldHVybiAhIShzdGFydFZhbHVlICYmICFlbmRWYWx1ZSAmJiB0aGlzLmZvY3VzZWRJbnB1dCA9PT0gXCJzdGFydFwiICYmIHRoaXMuZW5kSW5wdXQpO1xuICB9XG4gIHJlc3RvcmVJbnB1dEZvY3VzKCkge1xuICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy5zdGFydElucHV0LnNldEZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvY3VzZWRJbnB1dCA9IHRoaXMuZm9jdXNlZElucHV0ID09PSBcInN0YXJ0XCIgPyB0aGlzLnN0YXJ0SW5wdXQgOiB0aGlzLmVuZElucHV0O1xuICAgIGZvY3VzZWRJbnB1dC5zZXRGb2N1cygpO1xuICB9XG4gIGxvY2FsaXplSW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVGcm9tUmFuZ2UoKHRoaXMucmFuZ2VcbiAgICAgID8gKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgJiYgdGhpcy52YWx1ZUFzRGF0ZVswXSkgfHwgdW5kZWZpbmVkXG4gICAgICA6IHRoaXMudmFsdWVBc0RhdGUpLCB0aGlzLm1pbkFzRGF0ZSwgdGhpcy5tYXhBc0RhdGUpO1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLnJhbmdlXG4gICAgICA/IGRhdGVGcm9tUmFuZ2UoKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZUFzRGF0ZSkgJiYgdGhpcy52YWx1ZUFzRGF0ZVsxXSkgfHwgdW5kZWZpbmVkLCB0aGlzLm1pbkFzRGF0ZSwgdGhpcy5tYXhBc0RhdGUpXG4gICAgICA6IG51bGw7XG4gICAgY29uc3QgbG9jYWxpemVkRGF0ZSA9IGRhdGUgJiYgdGhpcy5mb3JtYXROdW1lcmFscyhkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmVmZmVjdGl2ZUxvY2FsZSkpO1xuICAgIGNvbnN0IGxvY2FsaXplZEVuZERhdGUgPSBlbmREYXRlICYmIHRoaXMuZm9ybWF0TnVtZXJhbHMoZW5kRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5lZmZlY3RpdmVMb2NhbGUpKTtcbiAgICBsb2NhbGl6ZWREYXRlICYmIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZWREYXRlLCBcInN0YXJ0XCIpO1xuICAgIHRoaXMucmFuZ2UgJiYgbG9jYWxpemVkRW5kRGF0ZSAmJiB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVkRW5kRGF0ZSwgXCJlbmRcIik7XG4gIH1cbiAgd2FybkFib3V0SW52YWxpZFZhbHVlKHZhbHVlKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGUgc3BlY2lmaWVkIHZhbHVlIFwiJHt2YWx1ZX1cIiBkb2VzIG5vdCBjb25mb3JtIHRvIHRoZSByZXF1aXJlZCBmb3JtYXQsIFwiWVlZWS1NTS1ERFwiLmApO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbXCJoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZFwiXSxcbiAgICBcImRpc2FibGVkXCI6IFtcImhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2VcIl0sXG4gICAgXCJyZWFkT25seVwiOiBbXCJoYW5kbGVEaXNhYmxlZEFuZFJlYWRPbmx5Q2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVXYXRjaGVyXCJdLFxuICAgIFwidmFsdWVBc0RhdGVcIjogW1widmFsdWVBc0RhdGVXYXRjaGVyXCJdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogW1wiZmxpcFBsYWNlbWVudHNIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwibWluXCI6IFtcIm9uTWluQ2hhbmdlZFwiXSxcbiAgICBcIm1heFwiOiBbXCJvbk1heENoYW5nZWRcIl0sXG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFtcIm92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXJcIl0sXG4gICAgXCJsYXlvdXRcIjogW1wic2V0UmVmZXJlbmNlRWxcIl0sXG4gICAgXCJmb2N1c2VkSW5wdXRcIjogW1wic2V0UmVmZXJlbmNlRWxcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wibG9hZExvY2FsZURhdGFcIl1cbiAgfTsgfVxufTtcbklucHV0RGF0ZVBpY2tlci5zdHlsZSA9IGlucHV0RGF0ZVBpY2tlckNzcztcblxuZXhwb3J0IHsgSW5wdXREYXRlUGlja2VyIGFzIGNhbGNpdGVfaW5wdXRfZGF0ZV9waWNrZXIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuXG4vKipcbiAqIENoZWNrIGlmIGRhdGUgaXMgd2l0aGluIGEgbWluIGFuZCBtYXhcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICovXG5mdW5jdGlvbiBpblJhbmdlKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGNvbnN0IGFmdGVyTWluID0gIShtaW4gaW5zdGFuY2VvZiBEYXRlKSB8fCB0aW1lID49IG1pbi5nZXRUaW1lKCk7XG4gIGNvbnN0IGJlZm9yZU1heCA9ICEobWF4IGluc3RhbmNlb2YgRGF0ZSkgfHwgdGltZSA8PSBtYXguZ2V0VGltZSgpO1xuICByZXR1cm4gYWZ0ZXJNaW4gJiYgYmVmb3JlTWF4O1xufVxuLyoqXG4gKiBFbnN1cmVzIGRhdGUgaXMgd2l0aGluIHJhbmdlLFxuICogcmV0dXJucyBtaW4gb3IgbWF4IGlmIG91dCBvZiBib3VuZHNcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICovXG5mdW5jdGlvbiBkYXRlRnJvbVJhbmdlKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgY29uc3QgYmVmb3JlTWluID0gbWluIGluc3RhbmNlb2YgRGF0ZSAmJiB0aW1lIDwgbWluLmdldFRpbWUoKTtcbiAgY29uc3QgYWZ0ZXJNYXggPSBtYXggaW5zdGFuY2VvZiBEYXRlICYmIHRpbWUgPiBtYXguZ2V0VGltZSgpO1xuICBpZiAoYmVmb3JlTWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAoYWZ0ZXJNYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuLyoqXG4gKiBQYXJzZSBhbiBpc284NjAxIHN0cmluZyAoWVlZWS1tbS1kZCkgaW50byBhIHZhbGlkIGRhdGUuXG4gKiBUT0RPOiBoYW5kbGUgdGltZSB3aGVuIHRpbWUgb2YgZGF5IFVJIGlzIGFkZGVkXG4gKlxuICogQHBhcmFtIGlzbzg2MDFcbiAqIEBwYXJhbSBpc0VuZERhdGVcbiAqL1xuZnVuY3Rpb24gZGF0ZUZyb21JU08oaXNvODYwMSwgaXNFbmREYXRlID0gZmFsc2UpIHtcbiAgaWYgKGlzbzg2MDEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGlzbzg2MDE7XG4gIH1cbiAgaWYgKCFpc284NjAxIHx8IHR5cGVvZiBpc284NjAxICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZCA9IGlzbzg2MDEuc3BsaXQoL1s6IFQtXS8pLm1hcChwYXJzZUZsb2F0KTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRbMF0sIChkWzFdIHx8IDEpIC0gMSwgZFsyXSB8fCAxKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkWzBdKTtcbiAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBJU08gODYwMSBkYXRlOiBcIiR7aXNvODYwMX1cImApO1xuICB9XG4gIGlmIChpc0VuZERhdGUpIHtcbiAgICByZXR1cm4gc2V0RW5kT2ZEYXkoZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG4vKipcbiAqIFBhcnNlIGEgbG9jYWxpemVkIGRhdGUgc3RyaW5nIGludG8gYSB2YWxpZCBEYXRlLlxuICogcmV0dXJuIGZhbHNlIGlmIGRhdGUgaXMgaW52YWxpZCwgb3Igb3V0IG9mIHJhbmdlXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBkYXRlRnJvbUxvY2FsaXplZFN0cmluZyh2YWx1ZSwgbG9jYWxlRGF0YSkge1xuICBpZiAoIWxvY2FsZURhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IHNlcGFyYXRvciB9ID0gbG9jYWxlRGF0YTtcbiAgY29uc3QgcGFydHMgPSBwYXJzZURhdGVTdHJpbmcodmFsdWUsIGxvY2FsZURhdGEpO1xuICBjb25zdCB7IGRheSwgbW9udGggfSA9IHBhcnRzO1xuICBjb25zdCB5ZWFyID0gcGFyc2VDYWxlbmRhclllYXIocGFydHMueWVhciwgbG9jYWxlRGF0YSk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgY29uc3QgdmFsaWREYXkgPSBkYXkgPiAwO1xuICBjb25zdCB2YWxpZE1vbnRoID0gbW9udGggPiAtMTtcbiAgY29uc3QgdmFsaWREYXRlID0gIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbiAgY29uc3QgdmFsaWRMZW5ndGggPSB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpLmZpbHRlcigoYykgPT4gYykubGVuZ3RoID4gMjtcbiAgY29uc3QgdmFsaWRZZWFyID0geWVhci50b1N0cmluZygpLmxlbmd0aCA+IDA7XG4gIGlmICh2YWxpZERheSAmJiB2YWxpZE1vbnRoICYmIHZhbGlkRGF0ZSAmJiB2YWxpZExlbmd0aCAmJiB2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHBhcnNlQ2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEpIHtcbiAgcmV0dXJuIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgXCJyZWFkXCIpO1xufVxuZnVuY3Rpb24gZm9ybWF0Q2FsZW5kYXJZZWFyKHllYXIsIGxvY2FsZURhdGEpIHtcbiAgcmV0dXJuIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgXCJ3cml0ZVwiKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NDYWxlbmRhclllYXIoeWVhciwgbG9jYWxlRGF0YSwgbW9kZSkge1xuICBpZiAobG9jYWxlRGF0YVtcImRlZmF1bHQtY2FsZW5kYXJcIl0gIT09IFwiYnVkZGhpc3RcIikge1xuICAgIHJldHVybiB5ZWFyO1xuICB9XG4gIGNvbnN0IEJVRERISVNUX0NBTEVOREFSX1lFQVJfT0ZGU0VUID0gNTQzO1xuICBjb25zdCB5ZWFyT2Zmc2V0ID0gQlVEREhJU1RfQ0FMRU5EQVJfWUVBUl9PRkZTRVQgKiAobW9kZSA9PT0gXCJyZWFkXCIgPyAtMSA6IDEpO1xuICByZXR1cm4geWVhciArIHllYXJPZmZzZXQ7XG59XG4vKipcbiAqIFJldHJpZXZlIGRheSwgbW9udGgsIGFuZCB5ZWFyIHN0cmluZ3MgZnJvbSBhIGxvY2FsaXplZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBkYXRlUGFydHNGcm9tTG9jYWxpemVkU3RyaW5nKHN0cmluZywgbG9jYWxlRGF0YSkge1xuICBjb25zdCB7IHNlcGFyYXRvciwgdW5pdE9yZGVyIH0gPSBsb2NhbGVEYXRhO1xuICBjb25zdCBvcmRlciA9IGdldE9yZGVyKHVuaXRPcmRlcik7XG4gIGNvbnN0IHZhbHVlcyA9IHN0cmluZy5zcGxpdChzZXBhcmF0b3IpLm1hcCgocGFydCkgPT4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUocGFydCkpO1xuICBjb25zdCBkYXkgPSB2YWx1ZXNbb3JkZXIuaW5kZXhPZihcImRcIildO1xuICBjb25zdCBtb250aCA9IHZhbHVlc1tvcmRlci5pbmRleE9mKFwibVwiKV07XG4gIGNvbnN0IHllYXIgPSB2YWx1ZXNbb3JkZXIuaW5kZXhPZihcInlcIildO1xuICByZXR1cm4geyBkYXksIG1vbnRoLCB5ZWFyIH07XG59XG4vKipcbiAqIFJldHVybiBmaXJzdCBwb3J0aW9uIG9mIElTTyBzdHJpbmcgKFlZWVktbW0tZGQpXG4gKlxuICogQHBhcmFtIGRhdGVcbiAqL1xuZnVuY3Rpb24gZGF0ZVRvSVNPKGRhdGUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9XG4gIHJldHVybiBcIlwiO1xufVxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZXMgYXJlIHRoZSBzYW1lIGRheSwgbW9udGgsIHllYXJcbiAqXG4gKiBAcGFyYW0gZDFcbiAqIEBwYXJhbSBkMlxuICovXG5mdW5jdGlvbiBzYW1lRGF0ZShkMSwgZDIpIHtcbiAgcmV0dXJuIChkMSBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICBkMiBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICBkMS5nZXREYXRlKCkgPT09IGQyLmdldERhdGUoKSAmJlxuICAgIGQxLmdldE1vbnRoKCkgPT09IGQyLmdldE1vbnRoKCkgJiZcbiAgICBkMS5nZXRGdWxsWWVhcigpID09PSBkMi5nZXRGdWxsWWVhcigpKTtcbn1cbi8qKlxuICogR2V0IGEgZGF0ZSBvbmUgbW9udGggaW4gdGhlIHBhc3RcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBwcmV2TW9udGgoZGF0ZSkge1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV4dERhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgLy8gZGF0ZSBkb2Vzbid0IGV4aXN0IGluIG5ldyBtb250aCwgdXNlIGxhc3QgZGF5XG4gIGlmIChtb250aCA9PT0gbmV4dERhdGUuZ2V0TW9udGgoKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoLCAwKTtcbiAgfVxuICByZXR1cm4gbmV4dERhdGU7XG59XG4vKipcbiAqIEdldCBhIGRhdGUgb25lIG1vbnRoIGluIHRoZSBmdXR1cmVcbiAqXG4gKiBAcGFyYW0gZGF0ZVxuICovXG5mdW5jdGlvbiBuZXh0TW9udGgoZGF0ZSkge1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV4dERhdGUuc2V0TW9udGgobW9udGggKyAxKTtcbiAgLy8gZGF0ZSBkb2Vzbid0IGV4aXN0IGluIG5ldyBtb250aCwgdXNlIGxhc3QgZGF5XG4gIGlmICgobW9udGggKyAyKSAlIDcgPT09IG5leHREYXRlLmdldE1vbnRoKCkgJSA3KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAyLCAwKTtcbiAgfVxuICByZXR1cm4gbmV4dERhdGU7XG59XG4vKipcbiAqIFBhcnNlIG51bWVyaWMgdW5pdHMgZm9yIGRheSwgbW9udGgsIGFuZCB5ZWFyIGZyb20gYSBsb2NhbGl6ZWQgc3RyaW5nXG4gKiBtb250aCBzdGFydHMgYXQgMCAoY2FuIHBhc3MgdG8gZGF0ZSBjb25zdHJ1Y3RvcilcbiAqIGNhbiByZXR1cm4gdmFsdWVzIGFzIG51bWJlciBvciBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcGFyYW0gbG9jYWxlRGF0YVxuICovXG5mdW5jdGlvbiBwYXJzZURhdGVTdHJpbmcoc3RyaW5nLCBsb2NhbGVEYXRhKSB7XG4gIGNvbnN0IHsgZGF5LCBtb250aCwgeWVhciB9ID0gZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyhzdHJpbmcsIGxvY2FsZURhdGEpO1xuICByZXR1cm4ge1xuICAgIGRheTogcGFyc2VJbnQoZGF5KSxcbiAgICBtb250aDogcGFyc2VJbnQobW9udGgpIC0gMSxcbiAgICB5ZWFyOiBwYXJzZUludCh5ZWFyKVxuICB9O1xufVxuLyoqXG4gKiBCYXNlZCBvbiB0aGUgdW5pdE9yZGVyIHN0cmluZywgZmluZCBvcmRlciBvZiBtb250aCwgZGF5LCBhbmQgeWVhciBmb3IgbG9jYWxlXG4gKlxuICogQHBhcmFtIHVuaXRPcmRlclxuICovXG5mdW5jdGlvbiBnZXRPcmRlcih1bml0T3JkZXIpIHtcbiAgY29uc3Qgc2lnbmlmaWVycyA9IFtcImRcIiwgXCJtXCIsIFwieVwiXTtcbiAgY29uc3Qgb3JkZXIgPSB1bml0T3JkZXIudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHNpZ25pZmllcnMuc29ydCgoYSwgYikgPT4gb3JkZXIuaW5kZXhPZihhKSAtIG9yZGVyLmluZGV4T2YoYikpO1xufVxuLyoqXG4gKiBHZXQgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiB0d28gZGF0ZXNcbiAqXG4gKiBAcGFyYW0gZGF0ZTFcbiAqIEBwYXJhbSBkYXRlMlxuICovXG5mdW5jdGlvbiBnZXREYXlzRGlmZihkYXRlMSwgZGF0ZTIpIHtcbiAgY29uc3QgdHMxID0gZGF0ZTEuZ2V0VGltZSgpO1xuICBjb25zdCB0czIgPSBkYXRlMi5nZXRUaW1lKCk7XG4gIHJldHVybiAodHMxIC0gdHMyKSAvICgxMDAwICogMzYwMCAqIDI0KTtcbn1cbi8qKlxuICogU2V0IHRpbWUgb2YgdGhlIGRheSB0byB0aGUgZW5kLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBEYXRlLlxuICogQHJldHVybnMge0RhdGV9IERhdGUgd2l0aCB0aW1lIHNldCB0byBlbmQgb2YgZGF5IC5cbiAqL1xuZnVuY3Rpb24gc2V0RW5kT2ZEYXkoZGF0ZSkge1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vKipcbiAqIENMRFIgY2FjaGUuXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCB0cmFuc2xhdGlvbkNhY2hlID0ge307XG4vKipcbiAqIENMRFIgcmVxdWVzdCBjYWNoZS5cbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xuLyoqXG4gKiBGZXRjaCBjYWxlbmRhciBkYXRhIGZvciBhIGdpdmVuIGxvY2FsZSBmcm9tIGxpc3Qgb2Ygc3VwcG9ydGVkIGxhbmd1YWdlc1xuICpcbiAqIEBwYXJhbSBsYW5nXG4gKiBAcHVibGljXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZURhdGEobGFuZykge1xuICBjb25zdCBsb2NhbGUgPSBnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZyk7XG4gIGlmICh0cmFuc2xhdGlvbkNhY2hlW2xvY2FsZV0pIHtcbiAgICByZXR1cm4gdHJhbnNsYXRpb25DYWNoZVtsb2NhbGVdO1xuICB9XG4gIGlmICghcmVxdWVzdENhY2hlW2xvY2FsZV0pIHtcbiAgICByZXF1ZXN0Q2FjaGVbbG9jYWxlXSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvZGF0ZS1waWNrZXIvbmxzLyR7bG9jYWxlfS5qc29uYCkpXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihgVHJhbnNsYXRpb25zIGZvciBcIiR7bG9jYWxlfVwiIG5vdCBmb3VuZCBvciBpbnZhbGlkLCBmYWxsaW5nIGJhY2sgdG8gZW5nbGlzaGApO1xuICAgICAgcmV0dXJuIGdldExvY2FsZURhdGEoXCJlblwiKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdENhY2hlW2xvY2FsZV07XG4gIHRyYW5zbGF0aW9uQ2FjaGVbbG9jYWxlXSA9IGRhdGE7XG4gIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiAgTWFwcyB2YWx1ZSB0byB2YWx1ZUFzRGF0ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUFzRGF0ZVJhbmdlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5tYXAoKHYsIGluZGV4KSA9PiBkYXRlRnJvbUlTTyh2LCBpbmRleCA9PT0gMSkpO1xufVxuXG5leHBvcnQgeyBkYXRlRnJvbUxvY2FsaXplZFN0cmluZyBhcyBhLCBkYXRlVG9JU08gYXMgYiwgZGF0ZUZyb21JU08gYXMgYywgZGF0ZVBhcnRzRnJvbUxvY2FsaXplZFN0cmluZyBhcyBkLCBnZXRMb2NhbGVEYXRhIGFzIGUsIGRhdGVGcm9tUmFuZ2UgYXMgZiwgZ2V0VmFsdWVBc0RhdGVSYW5nZSBhcyBnLCBnZXREYXlzRGlmZiBhcyBoLCBpblJhbmdlIGFzIGksIHNhbWVEYXRlIGFzIGosIGdldE9yZGVyIGFzIGssIGZvcm1hdENhbGVuZGFyWWVhciBhcyBsLCBwYXJzZUNhbGVuZGFyWWVhciBhcyBtLCBuZXh0TW9udGggYXMgbiwgcHJldk1vbnRoIGFzIHAsIHNldEVuZE9mRGF5IGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==