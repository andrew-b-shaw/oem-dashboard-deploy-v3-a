"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input-number_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-number.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-number.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input_number": () => (/* binding */ InputNumber)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */














const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item"
};
const SLOTS = {
  action: "action"
};

const inputNumberCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host input{outline-color:transparent}:host input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const InputNumber = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalInputNumberFocus = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputNumberFocus", 6);
    this.calciteInternalInputNumberBlur = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputNumberBlur", 6);
    this.calciteInputNumberInput = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputNumberInput", 7);
    this.calciteInputNumberChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputNumberChange", 6);
    this.previousValueOrigin = "initial";
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_8__.c)("mutation", () => this.setDisabledAction());
    this.userChangedValue = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (this.readOnly || this.disabled) {
        return;
      }
      if (this.isClearable && event.key === "Escape") {
        this.clearInputValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if ((0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.s)(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputValue = (nativeEvent) => {
      this.setNumberValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedNumberValue) {
        this.calciteInputNumberChange.emit();
        this.setPreviousEmittedNumberValue(this.value);
      }
    };
    this.inputNumberBlurHandler = () => {
      this.calciteInternalInputNumberBlur.emit();
      this.emitChangeIfUserModified();
    };
    this.clickHandler = (event) => {
      if (this.disabled) {
        return;
      }
      const slottedActionEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, "action");
      if (event.target !== slottedActionEl) {
        this.setFocus();
      }
    };
    this.inputNumberFocusHandler = () => {
      this.calciteInternalInputNumberFocus.emit();
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const delocalizedValue = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(value);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!(0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setNumberValue({
          nativeEvent,
          origin: "user",
          value: (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.p)(delocalizedValue)
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setNumberValue({
          nativeEvent,
          origin: "user",
          value: delocalizedValue
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        /* prevent default behavior of moving cursor to the beginning of the input when holding down ArrowUp */
        event.preventDefault();
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ..._key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.n,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab"
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) || isShiftTabEvent) {
        if (event.key === "Enter") {
          this.emitChangeIfUserModified();
        }
        return;
      }
      _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      if (event.key === _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.decimal) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.decimal) === -1) {
          return;
        }
      }
      if (/[eE]/.test(event.key)) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
          return;
        }
      }
      if (event.key === "-") {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.split("-").length <= 2) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if (nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 150;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      if (this.nudgeNumberValueIntervalId) {
        window.clearInterval(this.nudgeNumberValueIntervalId);
      }
      let firstValueNudge = true;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (firstValueNudge) {
          firstValueNudge = false;
          return;
        }
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.nudgeButtonPointerUpAndOutHandler = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.nudgeButtonPointerDownHandler = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      if (!this.disabled) {
        this.nudgeNumberValue(direction, event);
      }
    };
    this.hiddenInputChangeHandler = (event) => {
      if (event.target.name === this.name) {
        this.setNumberValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      event.stopPropagation();
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputNumberValue = (newInputValue) => {
      if (!this.childNumberEl) {
        return;
      }
      this.childNumberEl.value = newInputValue;
    };
    this.setPreviousEmittedNumberValue = (value) => {
      this.previousEmittedNumberValue = this.normalizeValue(value);
    };
    this.setPreviousNumberValue = (value) => {
      this.previousValue = this.normalizeValue(value);
    };
    this.setNumberValue = ({ committing = false, nativeEvent, origin, previousValue, value }) => {
      _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const sanitizedValue = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.s)(
      // no need to delocalize a string that ia already in latn numerals
      (this.numberingSystem && this.numberingSystem !== "latn") || _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.a !== "latn"
        ? _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(value)
        : value);
      const newValue = value && !sanitizedValue
        ? (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.previousValue)
          ? this.previousValue
          : ""
        : sanitizedValue;
      const newLocalizedValue = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(newValue);
      this.localizedValue = newLocalizedValue;
      this.setPreviousNumberValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      this.userChangedValue = origin === "user" && this.value !== newValue;
      // don't sanitize the start of negative/decimal numbers, but
      // don't set value to an invalid number
      this.value = ["-", "."].includes(newValue) ? "" : newValue;
      if (origin === "direct") {
        this.setInputNumberValue(newLocalizedValue);
        this.setPreviousEmittedNumberValue(newLocalizedValue);
      }
      if (nativeEvent) {
        const calciteInputNumberInputEvent = this.calciteInputNumberInput.emit();
        if (calciteInputNumberInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(this.previousValue);
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.inputNumberKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.numberingSystem = undefined;
    this.localeFormat = false;
    this.max = undefined;
    this.min = undefined;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.numberButtonType = "vertical";
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.step = undefined;
    this.autocomplete = undefined;
    this.inputMode = "decimal";
    this.enterKeyHint = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.localizedValue = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    this.maxString = this.max?.toString() || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    this.minString = this.min?.toString() || null;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setNumberValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == ""
          ? ""
          : (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)
            ? newValue
            : this.previousValue || ""
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)({}, this.icon, "number");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  effectiveLocaleWatcher(locale) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
      locale,
      numberingSystem: this.numberingSystem,
      useGrouping: false
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.setPreviousEmittedNumberValue(this.value);
    this.setPreviousNumberValue(this.value);
    this.warnAboutInvalidNumberValue(this.value);
    this.setNumberValue({
      origin: "connected",
      value: (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.value) ? this.value : ""
    });
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)({}, this.icon, "number");
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (property === "value" && newValue && !(0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)) {
      this.setNumberValue({
        origin: "reset",
        value: oldValue
      });
      return false;
    }
    return true;
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.childNumberEl?.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    this.childNumberEl?.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const adjustment = direction === "up" ? 1 : -1;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = new _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.B(value !== "" ? value : "0");
    const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
    const nudgedValueBelowInputMin = () => typeof inputMin === "number" &&
      !isNaN(inputMin) &&
      nudgedValue.subtract(`${inputMin}`).isNegative;
    const nudgedValueAboveInputMax = () => typeof inputMax === "number" &&
      !isNaN(inputMax) &&
      !nudgedValue.subtract(`${inputMax}`).isNegative;
    const finalValue = nudgedValueBelowInputMin()
      ? `${inputMin}`
      : nudgedValueAboveInputMax()
        ? `${inputMax}`
        : nudgedValue.toString();
    this.setNumberValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue
    });
  }
  onFormReset() {
    this.setNumberValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    input.type = "number";
    input.min = this.min?.toString(10) ?? "";
    input.max = this.max?.toString(10) ?? "";
  }
  setDisabledAction() {
    const slottedActionEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, "action");
    if (!slottedActionEl) {
      return;
    }
    if (this.disabled) {
      if (slottedActionEl.getAttribute("disabled") == null) {
        this.slottedActionElDisabledInternally = true;
      }
      slottedActionEl.setAttribute("disabled", "");
    }
    else if (this.slottedActionElDisabledInternally) {
      slottedActionEl.removeAttribute("disabled");
      this.slottedActionElDisabledInternally = false;
    }
  }
  normalizeValue(value) {
    return (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(value) ? value : "";
  }
  warnAboutInvalidNumberValue(value) {
    if (value && !(0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const loader = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.loader }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const iconEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerUpAndOutHandler, onPointerUp: this.nudgeButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsHorizontalDown = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerUpAndOutHandler, onPointerUp: this.nudgeButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsVertical = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.suffix }, this.suffixText);
    const childEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, name: undefined, onBlur: this.inputNumberBlurHandler, onFocus: this.inputNumberFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputNumberKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildNumberElRef }));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.inputWrapper]: true, [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_9__.C.rtl]: dir === "rtl" } }, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.wrapper }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionWrapper }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.action })), this.numberButtonType === "vertical" && !this.readOnly ? numberButtonsVertical : null, this.suffixText ? suffixText : null, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalUp
      : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "max": ["maxWatcher"],
    "min": ["minWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
InputNumber.style = inputNumberCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvY2RmMDFkM2ZiN2MxMzllNTVmNTY4NjAzYWY1YWNiMjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2U7QUFDTjtBQUNNO0FBQ3hFO0FBQzZDO0FBQ21CO0FBQ29IO0FBQzFLO0FBQ0g7QUFDZ0U7QUFDL0Y7QUFDRzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMseUVBQXlFLGtCQUFrQixzQkFBc0Isc0NBQXNDLGlCQUFpQiwrSUFBK0ksa0JBQWtCLCtCQUErQixzQkFBc0IsdUJBQXVCLHlFQUF5RSxnQkFBZ0IsdUJBQXVCLHNDQUFzQyxp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QixxREFBQyxZQUFZLGNBQWMscURBQVk7QUFDNUQ7QUFDQSxxQ0FBcUM7QUFDckMsWUFBWSxxREFBQyxDQUFDLGlEQUFJLElBQUksNERBQTRELEVBQUUscURBQUMsVUFBVSxTQUFTLDJCQUEyQix5REFBZSxvQkFBb0I7QUFDdEs7QUFDQSxtREFBbUQscURBQUMsVUFBVSxvQkFBb0IsMEhBQTBILHFEQUFDLFVBQVUsMEJBQTBCLEVBQUUscURBQUMsV0FBVyxvQkFBb0I7QUFDblI7QUFDQSxjQUFjLHFEQUFDLENBQUMsZ0RBQW1CLElBQUksaUJBQWlCO0FBQ3hEO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1pbnB1dC1udW1iZXIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBlIGFzIHNldFJlcXVlc3RlZEljb24sIGIgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLWQ3MzU5ZWZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsLTlkMmViMzM0LmpzJztcbmltcG9ydCB7IGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgaSBhcyBpc1ZhbGlkTnVtYmVyLCBwIGFzIHBhcnNlTnVtYmVyU3RyaW5nLCBzIGFzIHNhbml0aXplTnVtYmVyU3RyaW5nLCBhIGFzIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0sIGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkLCBCIGFzIEJpZ0RlY2ltYWwgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGxvYWRlcjogXCJsb2FkZXJcIixcbiAgY2xlYXJCdXR0b246IFwiY2xlYXItYnV0dG9uXCIsXG4gIGVkaXRpbmdFbmFibGVkOiBcImVkaXRpbmctZW5hYmxlZFwiLFxuICBpbmxpbmVDaGlsZDogXCJpbmxpbmUtY2hpbGRcIixcbiAgaW5wdXRJY29uOiBcImljb25cIixcbiAgcHJlZml4OiBcInByZWZpeFwiLFxuICBzdWZmaXg6IFwic3VmZml4XCIsXG4gIG51bWJlckJ1dHRvbldyYXBwZXI6IFwibnVtYmVyLWJ1dHRvbi13cmFwcGVyXCIsXG4gIGJ1dHRvbkl0ZW1Ib3Jpem9udGFsOiBcIm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFwiLFxuICB3cmFwcGVyOiBcImVsZW1lbnQtd3JhcHBlclwiLFxuICBpbnB1dFdyYXBwZXI6IFwid3JhcHBlclwiLFxuICBhY3Rpb25XcmFwcGVyOiBcImFjdGlvbi13cmFwcGVyXCIsXG4gIHJlc2l6ZUljb25XcmFwcGVyOiBcInJlc2l6ZS1pY29uLXdyYXBwZXJcIixcbiAgbnVtYmVyQnV0dG9uSXRlbTogXCJudW1iZXItYnV0dG9uLWl0ZW1cIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb246IFwiYWN0aW9uXCJcbn07XG5cbmNvbnN0IGlucHV0TnVtYmVyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja306aG9zdChbc2NhbGU9c10pIGlucHV0LDpob3N0KFtzY2FsZT1zXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9c10pIC5zdWZmaXh7YmxvY2stc2l6ZToxLjVyZW07cGFkZGluZy1pbmxpbmU6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9c10pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToxLjVyZW07bWluLWlubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bV0pIGlucHV0LDpob3N0KFtzY2FsZT1tXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bV0pIC5zdWZmaXh7YmxvY2stc2l6ZToycmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9bV0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9bV0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToycmVtO21pbi1pbmxpbmUtc2l6ZToycmVtfTpob3N0KFtzY2FsZT1sXSkgaW5wdXQsOmhvc3QoW3NjYWxlPWxdKSAucHJlZml4LDpob3N0KFtzY2FsZT1sXSkgLnN1ZmZpeHtibG9jay1zaXplOjIuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bF0pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPWxdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6Mi43NXJlbTttaW4taW5saW5lLXNpemU6Mi43NXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QgaW5wdXR7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBibG9jay1zaXplIDAsIG91dGxpbmUtb2Zmc2V0IDBzOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttYXgtYmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgMCU7Ym9yZGVyLXJhZGl1czowcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgaW5wdXQ6OnBsYWNlaG9sZGVyLDpob3N0IGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QgaW5wdXQ6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dFtyZWFkb25seV17YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX06aG9zdCBpbnB1dFtyZWFkb25seV06Zm9jdXN7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QgaW5wdXR7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCBpbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgaW5wdXR7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChbc3RhdHVzPWludmFsaWRdKSBpbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW3NjYWxlPXNdKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC41cmVtfTpob3N0KFtzY2FsZT1tXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MXJlbX06aG9zdChbaWNvbl1bc2NhbGU9c10pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjJyZW19Omhvc3QoW2ljb25dW3NjYWxlPW1dKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDoyLjVyZW19Omhvc3QoW2ljb25dW3NjYWxlPWxdKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDozLjVyZW19LmVsZW1lbnQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtvcmRlcjozO2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleDoxIDEgMCU7YWxpZ24taXRlbXM6Y2VudGVyfS5pY29ue3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtkaXNwbGF5OmJsb2NrO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b257cG9pbnRlci1ldmVudHM6aW5pdGlhbDtvcmRlcjo0O21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttaW4tYmxvY2stc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9LmNsZWFyLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uY2xlYXItYnV0dG9uOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmNsZWFyLWJ1dHRvbjphY3RpdmUgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY2xlYXItYnV0dG9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY2xlYXItYnV0dG9uOmRpc2FibGVke29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX0ubG9hZGVye2luc2V0LWJsb2NrLXN0YXJ0OjFweDtpbnNldC1pbmxpbmU6MXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9ja30uYWN0aW9uLXdyYXBwZXJ7b3JkZXI6NztkaXNwbGF5OmZsZXh9LnByZWZpeCwuc3VmZml4e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZTphdXRvO21pbi1ibG9jay1zaXplOjEwMCU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7bGluZS1oZWlnaHQ6MTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LnByZWZpeHtvcmRlcjoyO2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweH0uc3VmZml4e29yZGVyOjU7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9Omhvc3QoW2FsaWdubWVudD1zdGFydF0pIGlucHV0e3RleHQtYWxpZ246c3RhcnR9Omhvc3QoW2FsaWdubWVudD1lbmRdKSBpbnB1dHt0ZXh0LWFsaWduOmVuZH0ubnVtYmVyLWJ1dHRvbi13cmFwcGVye3BvaW50ZXItZXZlbnRzOm5vbmU7b3JkZXI6Njtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc306aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLndyYXBwZXJ7ZmxleC1kaXJlY3Rpb246cm93O2Rpc3BsYXk6ZmxleH06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgaW5wdXR7b3JkZXI6Mn06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPWhvcml6b250YWxdKSAuY2FsY2l0ZS0tcnRsIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT1ob3Jpem9udGFsXSkgLmNhbGNpdGUtLXJ0bCAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF0gY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl0sLm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXXtvcmRlcjoxO21heC1ibG9jay1zaXplOjEwMCU7bWluLWJsb2NrLXNpemU6MTAwJTthbGlnbi1zZWxmOnN0cmV0Y2h9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dIGNhbGNpdGUtaWNvbiwubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl17Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF17b3JkZXI6NX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25de2JvcmRlci1ibG9jay1zdGFydC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbXttYXgtYmxvY2stc2l6ZTo1MCU7bWluLWJsb2NrLXNpemU6NTAlO3BvaW50ZXItZXZlbnRzOmluaXRpYWw7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuNXJlbTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjBweH0ubnVtYmVyLWJ1dHRvbi1pdGVtIGNhbGNpdGUtaWNvbntwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5udW1iZXItYnV0dG9uLWl0ZW06Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Lm51bWJlci1idXR0b24taXRlbTpmb2N1cyBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5udW1iZXItYnV0dG9uLWl0ZW06YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5udW1iZXItYnV0dG9uLWl0ZW06ZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZX0ud3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCgubm8tYm90dG9tLWJvcmRlcikgaW5wdXR7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDowcHh9Omhvc3QoLmJvcmRlci10b3AtY29sb3Itb25lKSBpbnB1dHtib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QgLmlubGluZS1jaGlsZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfTpob3N0IC5pbmxpbmUtY2hpbGQgLmVkaXRpbmctZW5hYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXR9Omhvc3QgLmlubGluZS1jaGlsZDpub3QoLmVkaXRpbmctZW5hYmxlZCl7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWlubGluZS1zdGFydDowfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fVwiO1xuXG5jb25zdCBJbnB1dE51bWJlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckZvY3VzXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJCbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckJsdXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXROdW1iZXJJbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0TnVtYmVySW5wdXRcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXROdW1iZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dE51bWJlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBcImluaXRpYWxcIjtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKSk7XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJlYWRPbmx5IHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNDbGVhcmFibGUgJiYgZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBpZiAoc3VibWl0Rm9ybSh0aGlzKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZU9yaWdpbiA9PT0gXCJ1c2VyXCIgJiYgdGhpcy52YWx1ZSAhPT0gdGhpcy5wcmV2aW91c0VtaXR0ZWROdW1iZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnB1dE51bWJlckNoYW5nZS5lbWl0KCk7XG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0TnVtYmVyQmx1ckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0TnVtYmVyQmx1ci5lbWl0KCk7XG4gICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsb3R0ZWRBY3Rpb25FbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgXCJhY3Rpb25cIik7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBzbG90dGVkQWN0aW9uRWwpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlckZvY3VzSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJGb2N1cy5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0TnVtYmVySW5wdXRIYW5kbGVyID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gbmF0aXZlRXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yXG4gICAgICB9O1xuICAgICAgY29uc3QgZGVsb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKHZhbHVlKTtcbiAgICAgIGlmIChuYXRpdmVFdmVudC5pbnB1dFR5cGUgPT09IFwiaW5zZXJ0RnJvbVBhc3RlXCIpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKGRlbG9jYWxpemVkVmFsdWUpKSB7XG4gICAgICAgICAgbmF0aXZlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICAgIHZhbHVlOiBwYXJzZU51bWJlclN0cmluZyhkZWxvY2FsaXplZFZhbHVlKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlID0gdGhpcy5sb2NhbGl6ZWRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICAgIHZhbHVlOiBkZWxvY2FsaXplZFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIC8qIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBvZiBtb3ZpbmcgY3Vyc29yIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGlucHV0IHdoZW4gaG9sZGluZyBkb3duIEFycm93VXAgKi9cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlKFwidXBcIiwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShcImRvd25cIiwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdXBwb3J0ZWRLZXlzID0gW1xuICAgICAgICAuLi5udW1iZXJLZXlzLFxuICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICBcIkFycm93UmlnaHRcIixcbiAgICAgICAgXCJCYWNrc3BhY2VcIixcbiAgICAgICAgXCJEZWxldGVcIixcbiAgICAgICAgXCJFbnRlclwiLFxuICAgICAgICBcIkVzY2FwZVwiLFxuICAgICAgICBcIlRhYlwiXG4gICAgICBdO1xuICAgICAgaWYgKGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNTaGlmdFRhYkV2ZW50ID0gZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5ID09PSBcIlRhYlwiO1xuICAgICAgaWYgKHN1cHBvcnRlZEtleXMuaW5jbHVkZXMoZXZlbnQua2V5KSB8fCBpc1NoaWZ0VGFiRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICAgIH07XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVjaW1hbCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUuaW5kZXhPZihudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVjaW1hbCkgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoL1tlRV0vLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiAhL1tlRV0vLnRlc3QodGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCItXCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlICYmICF0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlLnNwbGl0KFwiLVwiKS5sZW5ndGggPD0gMikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZSA9IChkaXJlY3Rpb24sIG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICBpZiAobmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmIG5hdGl2ZUV2ZW50LnJlcGVhdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbnB1dE1heCA9IHRoaXMubWF4U3RyaW5nID8gcGFyc2VGbG9hdCh0aGlzLm1heFN0cmluZykgOiBudWxsO1xuICAgICAgY29uc3QgaW5wdXRNaW4gPSB0aGlzLm1pblN0cmluZyA/IHBhcnNlRmxvYXQodGhpcy5taW5TdHJpbmcpIDogbnVsbDtcbiAgICAgIGNvbnN0IHZhbHVlTnVkZ2VEZWxheUluTXMgPSAxNTA7XG4gICAgICB0aGlzLmluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KTtcbiAgICAgIGlmICh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgICAgfVxuICAgICAgbGV0IGZpcnN0VmFsdWVOdWRnZSA9IHRydWU7XG4gICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGZpcnN0VmFsdWVOdWRnZSkge1xuICAgICAgICAgIGZpcnN0VmFsdWVOdWRnZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KTtcbiAgICAgIH0sIHZhbHVlTnVkZ2VEZWxheUluTXMpO1xuICAgIH07XG4gICAgdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJVcEFuZE91dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgfTtcbiAgICB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5hZGp1c3RtZW50O1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5zZXRDaGlsZE51bWJlckVsUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5wdXROdW1iZXJWYWx1ZSA9IChuZXdJbnB1dFZhbHVlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2hpbGROdW1iZXJFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWROdW1iZXJWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c0VtaXR0ZWROdW1iZXJWYWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5zZXRQcmV2aW91c051bWJlclZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUgPSAoeyBjb21taXR0aW5nID0gZmFsc2UsIG5hdGl2ZUV2ZW50LCBvcmlnaW4sIHByZXZpb3VzVmFsdWUsIHZhbHVlIH0pID0+IHtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNhbml0aXplZFZhbHVlID0gc2FuaXRpemVOdW1iZXJTdHJpbmcoXG4gICAgICAvLyBubyBuZWVkIHRvIGRlbG9jYWxpemUgYSBzdHJpbmcgdGhhdCBpYSBhbHJlYWR5IGluIGxhdG4gbnVtZXJhbHNcbiAgICAgICh0aGlzLm51bWJlcmluZ1N5c3RlbSAmJiB0aGlzLm51bWJlcmluZ1N5c3RlbSAhPT0gXCJsYXRuXCIpIHx8IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiXG4gICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUodmFsdWUpXG4gICAgICAgIDogdmFsdWUpO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSAmJiAhc2FuaXRpemVkVmFsdWVcbiAgICAgICAgPyBpc1ZhbGlkTnVtYmVyKHRoaXMucHJldmlvdXNWYWx1ZSlcbiAgICAgICAgICA/IHRoaXMucHJldmlvdXNWYWx1ZVxuICAgICAgICAgIDogXCJcIlxuICAgICAgICA6IHNhbml0aXplZFZhbHVlO1xuICAgICAgY29uc3QgbmV3TG9jYWxpemVkVmFsdWUgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUobmV3VmFsdWUpO1xuICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IG5ld0xvY2FsaXplZFZhbHVlO1xuICAgICAgdGhpcy5zZXRQcmV2aW91c051bWJlclZhbHVlKHByZXZpb3VzVmFsdWUgPz8gdGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBvcmlnaW47XG4gICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBvcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgLy8gZG9uJ3Qgc2FuaXRpemUgdGhlIHN0YXJ0IG9mIG5lZ2F0aXZlL2RlY2ltYWwgbnVtYmVycywgYnV0XG4gICAgICAvLyBkb24ndCBzZXQgdmFsdWUgdG8gYW4gaW52YWxpZCBudW1iZXJcbiAgICAgIHRoaXMudmFsdWUgPSBbXCItXCIsIFwiLlwiXS5pbmNsdWRlcyhuZXdWYWx1ZSkgPyBcIlwiIDogbmV3VmFsdWU7XG4gICAgICBpZiAob3JpZ2luID09PSBcImRpcmVjdFwiKSB7XG4gICAgICAgIHRoaXMuc2V0SW5wdXROdW1iZXJWYWx1ZShuZXdMb2NhbGl6ZWRWYWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUobmV3TG9jYWxpemVkVmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKG5hdGl2ZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNhbGNpdGVJbnB1dE51bWJlcklucHV0RXZlbnQgPSB0aGlzLmNhbGNpdGVJbnB1dE51bWJlcklucHV0LmVtaXQoKTtcbiAgICAgICAgaWYgKGNhbGNpdGVJbnB1dE51bWJlcklucHV0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByZXZpb3VzVmFsdWU7XG4gICAgICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZSh0aGlzLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1pdHRpbmcpIHtcbiAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0TnVtYmVyS2V5VXBIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgfTtcbiAgICB0aGlzLmFsaWdubWVudCA9IFwic3RhcnRcIjtcbiAgICB0aGlzLmF1dG9mb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdyb3VwU2VwYXJhdG9yID0gZmFsc2U7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLmljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVGb3JtYXQgPSBmYWxzZTtcbiAgICB0aGlzLm1heCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbkxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJCdXR0b25UeXBlID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmVmaXhUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc3RhdHVzID0gXCJpZGxlXCI7XG4gICAgdGhpcy5zdGVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaW5wdXRNb2RlID0gXCJkZWNpbWFsXCI7XG4gICAgdGhpcy5lbnRlcktleUhpbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdWZmaXhUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWRpdGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IGZhbHNlO1xuICB9XG4gIGRpc2FibGVkV2F0Y2hlcigpIHtcbiAgICB0aGlzLnNldERpc2FibGVkQWN0aW9uKCk7XG4gIH1cbiAgLyoqIHdhdGNoZXIgdG8gdXBkYXRlIG51bWJlci10by1zdHJpbmcgZm9yIG1heCAqL1xuICBtYXhXYXRjaGVyKCkge1xuICAgIHRoaXMubWF4U3RyaW5nID0gdGhpcy5tYXg/LnRvU3RyaW5nKCkgfHwgbnVsbDtcbiAgfVxuICAvKiogd2F0Y2hlciB0byB1cGRhdGUgbnVtYmVyLXRvLXN0cmluZyBmb3IgbWluICovXG4gIG1pbldhdGNoZXIoKSB7XG4gICAgdGhpcy5taW5TdHJpbmcgPSB0aGlzLm1pbj8udG9TdHJpbmcoKSB8fCBudWxsO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICB2YWx1ZVdhdGNoZXIobmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICBpZiAoIXRoaXMudXNlckNoYW5nZWRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIixcbiAgICAgICAgcHJldmlvdXNWYWx1ZSxcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT0gXCJcIlxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogaXNWYWxpZE51bWJlcihuZXdWYWx1ZSlcbiAgICAgICAgICAgID8gbmV3VmFsdWVcbiAgICAgICAgICAgIDogdGhpcy5wcmV2aW91c1ZhbHVlIHx8IFwiXCJcbiAgICAgIH0pO1xuICAgICAgdGhpcy53YXJuQWJvdXRJbnZhbGlkTnVtYmVyVmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgfVxuICB1cGRhdGVSZXF1ZXN0ZWRJY29uKCkge1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oe30sIHRoaXMuaWNvbiwgXCJudW1iZXJcIik7XG4gIH1cbiAgZ2V0IGlzQ2xlYXJhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmNsZWFyYWJsZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlV2F0Y2hlcihsb2NhbGUpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5pbmxpbmVFZGl0YWJsZUVsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS1pbmxpbmUtZWRpdGFibGVcIik7XG4gICAgaWYgKHRoaXMuaW5saW5lRWRpdGFibGVFbCkge1xuICAgICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IHRoaXMuaW5saW5lRWRpdGFibGVFbC5lZGl0aW5nRW5hYmxlZCB8fCBmYWxzZTtcbiAgICB9XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5zZXRQcmV2aW91c051bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMud2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgb3JpZ2luOiBcImNvbm5lY3RlZFwiLFxuICAgICAgdmFsdWU6IGlzVmFsaWROdW1iZXIodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogXCJcIlxuICAgIH0pO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICB0aGlzLnNldERpc2FibGVkQWN0aW9uKCk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2FsY2l0ZUludGVybmFsSGlkZGVuSW5wdXRDaGFuZ2VcIiwgdGhpcy5oaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FsY2l0ZUludGVybmFsSGlkZGVuSW5wdXRDaGFuZ2VcIiwgdGhpcy5oaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5tYXhTdHJpbmcgPSB0aGlzLm1heD8udG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pblN0cmluZyA9IHRoaXMubWluPy50b1N0cmluZygpO1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oe30sIHRoaXMuaWNvbiwgXCJudW1iZXJcIik7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRTaG91bGRVcGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJ2YWx1ZVwiICYmIG5ld1ZhbHVlICYmICFpc1ZhbGlkTnVtYmVyKG5ld1ZhbHVlKSkge1xuICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgIG9yaWdpbjogXCJyZXNldFwiLFxuICAgICAgICB2YWx1ZTogb2xkVmFsdWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuY2hpbGROdW1iZXJFbD8uZm9jdXMoKTtcbiAgfVxuICAvKiogU2VsZWN0cyB0aGUgdGV4dCBvZiB0aGUgY29tcG9uZW50J3MgYHZhbHVlYC4gKi9cbiAgYXN5bmMgc2VsZWN0VGV4dCgpIHtcbiAgICB0aGlzLmNoaWxkTnVtYmVyRWw/LnNlbGVjdCgpO1xuICB9XG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzO1xuICAgIGNvbnN0IGFkanVzdG1lbnQgPSBkaXJlY3Rpb24gPT09IFwidXBcIiA/IDEgOiAtMTtcbiAgICBjb25zdCBpbnB1dFN0ZXAgPSB0aGlzLnN0ZXAgPT09IFwiYW55XCIgPyAxIDogTWF0aC5hYnModGhpcy5zdGVwIHx8IDEpO1xuICAgIGNvbnN0IGlucHV0VmFsID0gbmV3IEJpZ0RlY2ltYWwodmFsdWUgIT09IFwiXCIgPyB2YWx1ZSA6IFwiMFwiKTtcbiAgICBjb25zdCBudWRnZWRWYWx1ZSA9IGlucHV0VmFsLmFkZChgJHtpbnB1dFN0ZXAgKiBhZGp1c3RtZW50fWApO1xuICAgIGNvbnN0IG51ZGdlZFZhbHVlQmVsb3dJbnB1dE1pbiA9ICgpID0+IHR5cGVvZiBpbnB1dE1pbiA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgIWlzTmFOKGlucHV0TWluKSAmJlxuICAgICAgbnVkZ2VkVmFsdWUuc3VidHJhY3QoYCR7aW5wdXRNaW59YCkuaXNOZWdhdGl2ZTtcbiAgICBjb25zdCBudWRnZWRWYWx1ZUFib3ZlSW5wdXRNYXggPSAoKSA9PiB0eXBlb2YgaW5wdXRNYXggPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICFpc05hTihpbnB1dE1heCkgJiZcbiAgICAgICFudWRnZWRWYWx1ZS5zdWJ0cmFjdChgJHtpbnB1dE1heH1gKS5pc05lZ2F0aXZlO1xuICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBudWRnZWRWYWx1ZUJlbG93SW5wdXRNaW4oKVxuICAgICAgPyBgJHtpbnB1dE1pbn1gXG4gICAgICA6IG51ZGdlZFZhbHVlQWJvdmVJbnB1dE1heCgpXG4gICAgICAgID8gYCR7aW5wdXRNYXh9YFxuICAgICAgICA6IG51ZGdlZFZhbHVlLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICBjb21taXR0aW5nOiB0cnVlLFxuICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgdmFsdWU6IGZpbmFsVmFsdWVcbiAgICB9KTtcbiAgfVxuICBvbkZvcm1SZXNldCgpIHtcbiAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgIG9yaWdpbjogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlXG4gICAgfSk7XG4gIH1cbiAgc3luY0hpZGRlbkZvcm1JbnB1dChpbnB1dCkge1xuICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGlucHV0Lm1pbiA9IHRoaXMubWluPy50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICBpbnB1dC5tYXggPSB0aGlzLm1heD8udG9TdHJpbmcoMTApID8/IFwiXCI7XG4gIH1cbiAgc2V0RGlzYWJsZWRBY3Rpb24oKSB7XG4gICAgY29uc3Qgc2xvdHRlZEFjdGlvbkVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBcImFjdGlvblwiKTtcbiAgICBpZiAoIXNsb3R0ZWRBY3Rpb25FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHNsb3R0ZWRBY3Rpb25FbC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkpIHtcbiAgICAgIHNsb3R0ZWRBY3Rpb25FbC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzVmFsaWROdW1iZXIodmFsdWUpID8gdmFsdWUgOiBcIlwiO1xuICB9XG4gIHdhcm5BYm91dEludmFsaWROdW1iZXJWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiAhaXNWYWxpZE51bWJlcih2YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHNwZWNpZmllZCB2YWx1ZSBcIiR7dmFsdWV9XCIgY2Fubm90IGJlIHBhcnNlZCwgb3IgaXMgb3V0IG9mIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgbG9hZGVyID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmxvYWRlciB9LCBoKFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7IGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmxvYWRpbmcsIHR5cGU6IFwiaW5kZXRlcm1pbmF0ZVwiIH0pKSk7XG4gICAgY29uc3QgaW5wdXRDbGVhckJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xlYXIsIGNsYXNzOiBDU1MuY2xlYXJCdXR0b24sIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uQ2xpY2s6IHRoaXMuY2xlYXJJbnB1dFZhbHVlLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgaWNvbkVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmlucHV0SWNvbiwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5yZXF1ZXN0ZWRJY29uLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICBjb25zdCBpc0hvcml6b250YWxOdW1iZXJCdXR0b24gPSB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiO1xuICAgIGNvbnN0IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXAgPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubnVtYmVyQnV0dG9uSXRlbV06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSXRlbUhvcml6b250YWxdOiBpc0hvcml6b250YWxOdW1iZXJCdXR0b25cbiAgICAgIH0sIFwiZGF0YS1hZGp1c3RtZW50XCI6IFwidXBcIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJEb3duSGFuZGxlciwgb25Qb2ludGVyT3V0OiB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgb25Qb2ludGVyVXA6IHRoaXMubnVkZ2VCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLm51bWJlckJ1dHRvbkl0ZW1dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkl0ZW1Ib3Jpem9udGFsXTogaXNIb3Jpem9udGFsTnVtYmVyQnV0dG9uXG4gICAgICB9LCBcImRhdGEtYWRqdXN0bWVudFwiOiBcImRvd25cIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJEb3duSGFuZGxlciwgb25Qb2ludGVyT3V0OiB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgb25Qb2ludGVyVXA6IHRoaXMubnVkZ2VCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBjb25zdCBudW1iZXJCdXR0b25zVmVydGljYWwgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubnVtYmVyQnV0dG9uV3JhcHBlciB9LCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwLCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd24pKTtcbiAgICBjb25zdCBwcmVmaXhUZXh0ID0gaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucHJlZml4IH0sIHRoaXMucHJlZml4VGV4dCk7XG4gICAgY29uc3Qgc3VmZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnN1ZmZpeCB9LCB0aGlzLnN1ZmZpeFRleHQpO1xuICAgIGNvbnN0IGNoaWxkRWwgPSAoaChcImlucHV0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IGdldExhYmVsVGV4dCh0aGlzKSwgYXV0b2NvbXBsZXRlOiB0aGlzLmF1dG9jb21wbGV0ZSwgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyA/IHRydWUgOiBudWxsLCBkZWZhdWx0VmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCA/IHRydWUgOiBudWxsLCBlbnRlcktleUhpbnQ6IHRoaXMuZW50ZXJLZXlIaW50LCBpbnB1dE1vZGU6IHRoaXMuaW5wdXRNb2RlLCBrZXk6IFwibG9jYWxpemVkLWlucHV0XCIsIG1heExlbmd0aDogdGhpcy5tYXhMZW5ndGgsIG1pbkxlbmd0aDogdGhpcy5taW5MZW5ndGgsIG5hbWU6IHVuZGVmaW5lZCwgb25CbHVyOiB0aGlzLmlucHV0TnVtYmVyQmx1ckhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuaW5wdXROdW1iZXJGb2N1c0hhbmRsZXIsIG9uSW5wdXQ6IHRoaXMuaW5wdXROdW1iZXJJbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5pbnB1dE51bWJlcktleURvd25IYW5kbGVyLCBvbktleVVwOiB0aGlzLmlucHV0TnVtYmVyS2V5VXBIYW5kbGVyLCBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB8fCBcIlwiLCByZWFkT25seTogdGhpcy5yZWFkT25seSwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLmxvY2FsaXplZFZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q2hpbGROdW1iZXJFbFJlZiB9KSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5pbnB1dFdyYXBwZXJdOiB0cnVlLCBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiIH0gfSwgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd25cbiAgICAgIDogbnVsbCwgdGhpcy5wcmVmaXhUZXh0ID8gcHJlZml4VGV4dCA6IG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLndyYXBwZXIgfSwgY2hpbGRFbCwgdGhpcy5pc0NsZWFyYWJsZSA/IGlucHV0Q2xlYXJCdXR0b24gOiBudWxsLCB0aGlzLnJlcXVlc3RlZEljb24gPyBpY29uRWwgOiBudWxsLCB0aGlzLmxvYWRpbmcgPyBsb2FkZXIgOiBudWxsKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uV3JhcHBlciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbiB9KSksIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiICYmICF0aGlzLnJlYWRPbmx5ID8gbnVtYmVyQnV0dG9uc1ZlcnRpY2FsIDogbnVsbCwgdGhpcy5zdWZmaXhUZXh0ID8gc3VmZml4VGV4dCA6IG51bGwsIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9PT0gXCJob3Jpem9udGFsXCIgJiYgIXRoaXMucmVhZE9ubHlcbiAgICAgID8gbnVtYmVyQnV0dG9uc0hvcml6b250YWxVcFxuICAgICAgOiBudWxsLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZFdhdGNoZXJcIl0sXG4gICAgXCJtYXhcIjogW1wibWF4V2F0Y2hlclwiXSxcbiAgICBcIm1pblwiOiBbXCJtaW5XYXRjaGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVXYXRjaGVyXCJdLFxuICAgIFwiaWNvblwiOiBbXCJ1cGRhdGVSZXF1ZXN0ZWRJY29uXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZVdhdGNoZXJcIl1cbiAgfTsgfVxufTtcbklucHV0TnVtYmVyLnN0eWxlID0gaW5wdXROdW1iZXJDc3M7XG5cbmV4cG9ydCB7IElucHV0TnVtYmVyIGFzIGNhbGNpdGVfaW5wdXRfbnVtYmVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=