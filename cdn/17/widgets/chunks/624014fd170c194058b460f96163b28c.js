"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input-number_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-number.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-number.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input_number": () => (/* binding */ InputNumber)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalInputNumberFocus = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputNumberFocus", 6);
    this.calciteInternalInputNumberBlur = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputNumberBlur", 6);
    this.calciteInputNumberInput = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputNumberInput", 7);
    this.calciteInputNumberChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputNumberChange", 6);
    this.previousValueOrigin = "initial";
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_8__.c)("mutation", () => this.setDisabledAction());
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
        if ((0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.s)(this)) {
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
      const slottedActionEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, "action");
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
      _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const delocalizedValue = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(value);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setNumberValue({
          nativeEvent,
          origin: "user",
          value: (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.p)(delocalizedValue)
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
        ..._key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.n,
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
      if (supportedKeys.includes(event.key) && (!event.shiftKey || isShiftTabEvent)) {
        if (event.key === "Enter") {
          this.emitChangeIfUserModified();
        }
        return;
      }
      _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      if (event.key === _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.decimal) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.decimal) === -1) {
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
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.nudgeButtonPointerDownHandler = (event) => {
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
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
      _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const sanitizedValue = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.s)(
      // no need to delocalize a string that ia already in latn numerals
      (this.numberingSystem && this.numberingSystem !== "latn") || _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.a !== "latn"
        ? _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(value)
        : value);
      const newValue = value && !sanitizedValue
        ? (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.previousValue)
          ? this.previousValue
          : ""
        : sanitizedValue;
      const newLocalizedValue = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(newValue);
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
          this.localizedValue = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(this.previousValue);
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
          : (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)
            ? newValue
            : this.previousValue || ""
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.e)({}, this.icon, "number");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  effectiveLocaleWatcher(locale) {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.u)(this, this.effectiveLocale);
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
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
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.setPreviousEmittedNumberValue(this.value);
    this.setPreviousNumberValue(this.value);
    this.warnAboutInvalidNumberValue(this.value);
    this.setNumberValue({
      origin: "connected",
      value: (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.value) ? this.value : ""
    });
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.d)(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.e)({}, this.icon, "number");
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.s)(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (property === "value" && newValue && !(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)) {
      this.setNumberValue({
        origin: "reset",
        value: oldValue
      });
      return false;
    }
    return true;
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
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
    const inputVal = new _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.B(value !== "" ? value : "0");
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
    const slottedActionEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, "action");
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
    return (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(value) ? value : "";
  }
  warnAboutInvalidNumberValue(value) {
    if (value && !(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const loader = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.loader }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const iconEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerUpAndOutHandler, onPointerUp: this.nudgeButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsHorizontalDown = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerUpAndOutHandler, onPointerUp: this.nudgeButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsVertical = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.suffix }, this.suffixText);
    const childEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, name: undefined, onBlur: this.inputNumberBlurHandler, onFocus: this.inputNumberFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputNumberKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildNumberElRef }));
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.inputWrapper]: true, [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__.C.rtl]: dir === "rtl" } }, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.wrapper }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionWrapper }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.action })), this.numberButtonType === "vertical" && !this.readOnly ? numberButtonsVertical : null, this.suffixText ? suffixText : null, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalUp
      : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjI0MDE0ZmQxNzBjMTk0MDU4YjQ2MGY5NjE2M2IyOGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDZTtBQUNOO0FBQy9DO0FBQ25CO0FBQzZDO0FBQ21CO0FBQ29IO0FBQzFLO0FBQ0g7QUFDZ0U7QUFDL0Y7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxjQUFjLHlFQUF5RSxrQkFBa0Isc0JBQXNCLHNDQUFzQyxpQkFBaUIsK0lBQStJLGtCQUFrQiwrQkFBK0Isc0JBQXNCLHVCQUF1Qix5RUFBeUUsZ0JBQWdCLHVCQUF1QixzQ0FBc0MsaUJBQWlC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Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWlucHV0LW51bWJlci5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS90OW4tYTNlMTI0MjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBlIGFzIHNldFJlcXVlc3RlZEljb24sIGIgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLTQ0NTMwMDAxLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlcktleXMgfSBmcm9tICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbC01OWM5ZDQ3Mi5qcyc7XG5pbXBvcnQgeyBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGkgYXMgaXNWYWxpZE51bWJlciwgcCBhcyBwYXJzZU51bWJlclN0cmluZywgcyBhcyBzYW5pdGl6ZU51bWJlclN0cmluZywgYSBhcyBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCwgQiBhcyBCaWdEZWNpbWFsIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcbmltcG9ydCB7IEMgYXMgQ1NTX1VUSUxJVFkgfSBmcm9tICcuL3Jlc291cmNlcy1kMDhhNjczNy5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLWEzZTEyNDIyLmpzJztcbmltcG9ydCAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBsb2FkZXI6IFwibG9hZGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcImNsZWFyLWJ1dHRvblwiLFxuICBlZGl0aW5nRW5hYmxlZDogXCJlZGl0aW5nLWVuYWJsZWRcIixcbiAgaW5saW5lQ2hpbGQ6IFwiaW5saW5lLWNoaWxkXCIsXG4gIGlucHV0SWNvbjogXCJpY29uXCIsXG4gIHByZWZpeDogXCJwcmVmaXhcIixcbiAgc3VmZml4OiBcInN1ZmZpeFwiLFxuICBudW1iZXJCdXR0b25XcmFwcGVyOiBcIm51bWJlci1idXR0b24td3JhcHBlclwiLFxuICBidXR0b25JdGVtSG9yaXpvbnRhbDogXCJudW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxcIixcbiAgd3JhcHBlcjogXCJlbGVtZW50LXdyYXBwZXJcIixcbiAgaW5wdXRXcmFwcGVyOiBcIndyYXBwZXJcIixcbiAgYWN0aW9uV3JhcHBlcjogXCJhY3Rpb24td3JhcHBlclwiLFxuICByZXNpemVJY29uV3JhcHBlcjogXCJyZXNpemUtaWNvbi13cmFwcGVyXCIsXG4gIG51bWJlckJ1dHRvbkl0ZW06IFwibnVtYmVyLWJ1dHRvbi1pdGVtXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uOiBcImFjdGlvblwiXG59O1xuXG5jb25zdCBpbnB1dE51bWJlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoW3NjYWxlPXNdKSBpbnB1dCw6aG9zdChbc2NhbGU9c10pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPXNdKSAuc3VmZml4e2Jsb2NrLXNpemU6MS41cmVtO3BhZGRpbmctaW5saW5lOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1zXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1zXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6MS41cmVtO21pbi1pbmxpbmUtc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPW1dKSBpbnB1dCw6aG9zdChbc2NhbGU9bV0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPW1dKSAuc3VmZml4e2Jsb2NrLXNpemU6MnJlbTtwYWRkaW5nLWlubGluZTowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPW1dKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPW1dKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6MnJlbTttaW4taW5saW5lLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bF0pIGlucHV0LDpob3N0KFtzY2FsZT1sXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bF0pIC5zdWZmaXh7YmxvY2stc2l6ZToyLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjIuNzVyZW07bWluLWlubGluZS1zaXplOjIuNzVyZW19Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0IGlucHV0e3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYmxvY2stc2l6ZSAwLCBvdXRsaW5lLW9mZnNldCAwczstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWF4LWJsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIDAlO2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGlucHV0OjpwbGFjZWhvbGRlciw6aG9zdCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0IGlucHV0OmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgaW5wdXRbcmVhZG9ubHlde2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9Omhvc3QgaW5wdXRbcmVhZG9ubHldOmZvY3Vze2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0IGlucHV0e291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QgaW5wdXQ6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtzdGF0dXM9aW52YWxpZF0pIGlucHV0e2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgaW5wdXQ6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtzY2FsZT1zXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbc2NhbGU9bV0pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjFyZW19Omhvc3QoW2ljb25dW3NjYWxlPXNdKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDoycmVtfTpob3N0KFtpY29uXVtzY2FsZT1tXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6Mi41cmVtfTpob3N0KFtpY29uXVtzY2FsZT1sXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6My41cmVtfS5lbGVtZW50LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7b3JkZXI6MztkaXNwbGF5OmlubGluZS1mbGV4O2ZsZXg6MSAxIDAlO2FsaWduLWl0ZW1zOmNlbnRlcn0uaWNvbntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7ZGlzcGxheTpibG9jazt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uY2xlYXItYnV0dG9ue3BvaW50ZXItZXZlbnRzOmluaXRpYWw7b3JkZXI6NDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWluLWJsb2NrLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5jbGVhci1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jbGVhci1idXR0b246YWN0aXZlIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNsZWFyLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsZWFyLWJ1dHRvbjpkaXNhYmxlZHtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9LmxvYWRlcntpbnNldC1ibG9jay1zdGFydDoxcHg7aW5zZXQtaW5saW5lOjFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2t9LmFjdGlvbi13cmFwcGVye29yZGVyOjc7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6YXV0bzttaW4tYmxvY2stc2l6ZToxMDAlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5wcmVmaXh7b3JkZXI6Mjtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9LnN1ZmZpeHtvcmRlcjo1O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fTpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSBpbnB1dHt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgaW5wdXR7dGV4dC1hbGlnbjplbmR9Lm51bWJlci1idXR0b24td3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO29yZGVyOjY7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC53cmFwcGVye2ZsZXgtZGlyZWN0aW9uOnJvdztkaXNwbGF5OmZsZXh9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIGlucHV0e29yZGVyOjJ9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT1ob3Jpem9udGFsXSkgLmNhbGNpdGUtLXJ0bCAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9aG9yaXpvbnRhbF0pIC5jYWxjaXRlLS1ydGwgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dLC5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF17b3JkZXI6MTttYXgtYmxvY2stc2l6ZToxMDAlO21pbi1ibG9jay1zaXplOjEwMCU7YWxpZ24tc2VsZjpzdHJldGNofS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb24sLm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25de2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBde29yZGVyOjV9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXXtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW17bWF4LWJsb2NrLXNpemU6NTAlO21pbi1ibG9jay1zaXplOjUwJTtwb2ludGVyLWV2ZW50czppbml0aWFsO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjVyZW07dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbSBjYWxjaXRlLWljb257cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30ubnVtYmVyLWJ1dHRvbi1pdGVtOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW06Zm9jdXMgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LndyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLm5vLWJvdHRvbS1ib3JkZXIpIGlucHV0e2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fTpob3N0KC5ib3JkZXItdG9wLWNvbG9yLW9uZSkgaW5wdXR7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0IC5pbmxpbmUtY2hpbGR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc306aG9zdCAuaW5saW5lLWNoaWxkIC5lZGl0aW5nLWVuYWJsZWR7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fTpob3N0IC5pbmxpbmUtY2hpbGQ6bm90KC5lZGl0aW5nLWVuYWJsZWQpe2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgSW5wdXROdW1iZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJGb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJGb2N1c1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0TnVtYmVyQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSW5wdXROdW1iZXJCbHVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0TnVtYmVySW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dE51bWJlcklucHV0XCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0TnVtYmVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXROdW1iZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnNldERpc2FibGVkQWN0aW9uKCkpO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFkT25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ2xlYXJhYmxlICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZShldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgIGNvbW1pdHRpbmc6IHRydWUsXG4gICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IHRoaXMucHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXROdW1iZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZE51bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlckJsdXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dE51bWJlckJsdXIuZW1pdCgpO1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzbG90dGVkQWN0aW9uRWwgPSBnZXRTbG90dGVkKHRoaXMuZWwsIFwiYWN0aW9uXCIpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gc2xvdHRlZEFjdGlvbkVsKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0TnVtYmVyRm9jdXMuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IG5hdGl2ZUV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgICAgfTtcbiAgICAgIGNvbnN0IGRlbG9jYWxpemVkVmFsdWUgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZSh2YWx1ZSk7XG4gICAgICBpZiAobmF0aXZlRXZlbnQuaW5wdXRUeXBlID09PSBcImluc2VydEZyb21QYXN0ZVwiKSB7XG4gICAgICAgIGlmICghaXNWYWxpZE51bWJlcihkZWxvY2FsaXplZFZhbHVlKSkge1xuICAgICAgICAgIG5hdGl2ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogcGFyc2VOdW1iZXJTdHJpbmcoZGVsb2NhbGl6ZWRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSA9IHRoaXMubG9jYWxpemVkVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogZGVsb2NhbGl6ZWRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAvKiBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3Igb2YgbW92aW5nIGN1cnNvciB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBpbnB1dCB3aGVuIGhvbGRpbmcgZG93biBBcnJvd1VwICovXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShcInVwXCIsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoXCJkb3duXCIsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3VwcG9ydGVkS2V5cyA9IFtcbiAgICAgICAgLi4ubnVtYmVyS2V5cyxcbiAgICAgICAgXCJBcnJvd0xlZnRcIixcbiAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgIFwiQmFja3NwYWNlXCIsXG4gICAgICAgIFwiRGVsZXRlXCIsXG4gICAgICAgIFwiRW50ZXJcIixcbiAgICAgICAgXCJFc2NhcGVcIixcbiAgICAgICAgXCJUYWJcIlxuICAgICAgXTtcbiAgICAgIGlmIChldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzU2hpZnRUYWJFdmVudCA9IGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleSA9PT0gXCJUYWJcIjtcbiAgICAgIGlmIChzdXBwb3J0ZWRLZXlzLmluY2x1ZGVzKGV2ZW50LmtleSkgJiYgKCFldmVudC5zaGlmdEtleSB8fCBpc1NoaWZ0VGFiRXZlbnQpKSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yXG4gICAgICB9O1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlY2ltYWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlICYmICF0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlLmluZGV4T2YobnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlY2ltYWwpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKC9bZUVdLy50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlICYmICF0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgIS9bZUVdLy50ZXN0KHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiLVwiKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZS5zcGxpdChcIi1cIikubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUgPSAoZGlyZWN0aW9uLCBuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKG5hdGl2ZUV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCAmJiBuYXRpdmVFdmVudC5yZXBlYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5wdXRNYXggPSB0aGlzLm1heFN0cmluZyA/IHBhcnNlRmxvYXQodGhpcy5tYXhTdHJpbmcpIDogbnVsbDtcbiAgICAgIGNvbnN0IGlucHV0TWluID0gdGhpcy5taW5TdHJpbmcgPyBwYXJzZUZsb2F0KHRoaXMubWluU3RyaW5nKSA6IG51bGw7XG4gICAgICBjb25zdCB2YWx1ZU51ZGdlRGVsYXlJbk1zID0gMTUwO1xuICAgICAgdGhpcy5pbmNyZW1lbnRPckRlY3JlbWVudE51bWJlclZhbHVlKGRpcmVjdGlvbiwgaW5wdXRNYXgsIGlucHV0TWluLCBuYXRpdmVFdmVudCk7XG4gICAgICBpZiAodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICAgIH1cbiAgICAgIGxldCBmaXJzdFZhbHVlTnVkZ2UgPSB0cnVlO1xuICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChmaXJzdFZhbHVlTnVkZ2UpIHtcbiAgICAgICAgICBmaXJzdFZhbHVlTnVkZ2UgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmNyZW1lbnRPckRlY3JlbWVudE51bWJlclZhbHVlKGRpcmVjdGlvbiwgaW5wdXRNYXgsIGlucHV0TWluLCBuYXRpdmVFdmVudCk7XG4gICAgICB9LCB2YWx1ZU51ZGdlRGVsYXlJbk1zKTtcbiAgICB9O1xuICAgIHRoaXMubnVkZ2VCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgIH07XG4gICAgdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYWRqdXN0bWVudDtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJWYWx1ZSh7XG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2hpbGROdW1iZXJFbFJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0TnVtYmVyVmFsdWUgPSAobmV3SW5wdXRWYWx1ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNoaWxkTnVtYmVyRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlID0gbmV3SW5wdXRWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNOdW1iZXJWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldE51bWJlclZhbHVlID0gKHsgY29tbWl0dGluZyA9IGZhbHNlLCBuYXRpdmVFdmVudCwgb3JpZ2luLCBwcmV2aW91c1ZhbHVlLCB2YWx1ZSB9KSA9PiB7XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICAgIH07XG4gICAgICBjb25zdCBzYW5pdGl6ZWRWYWx1ZSA9IHNhbml0aXplTnVtYmVyU3RyaW5nKFxuICAgICAgLy8gbm8gbmVlZCB0byBkZWxvY2FsaXplIGEgc3RyaW5nIHRoYXQgaWEgYWxyZWFkeSBpbiBsYXRuIG51bWVyYWxzXG4gICAgICAodGhpcy5udW1iZXJpbmdTeXN0ZW0gJiYgdGhpcy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB8fCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIlxuICAgICAgICA/IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKHZhbHVlKVxuICAgICAgICA6IHZhbHVlKTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgJiYgIXNhbml0aXplZFZhbHVlXG4gICAgICAgID8gaXNWYWxpZE51bWJlcih0aGlzLnByZXZpb3VzVmFsdWUpXG4gICAgICAgICAgPyB0aGlzLnByZXZpb3VzVmFsdWVcbiAgICAgICAgICA6IFwiXCJcbiAgICAgICAgOiBzYW5pdGl6ZWRWYWx1ZTtcbiAgICAgIGNvbnN0IG5ld0xvY2FsaXplZFZhbHVlID0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSBuZXdMb2NhbGl6ZWRWYWx1ZTtcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNOdW1iZXJWYWx1ZShwcmV2aW91c1ZhbHVlID8/IHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gb3JpZ2luO1xuICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gb3JpZ2luID09PSBcInVzZXJcIiAmJiB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgIC8vIGRvbid0IHNhbml0aXplIHRoZSBzdGFydCBvZiBuZWdhdGl2ZS9kZWNpbWFsIG51bWJlcnMsIGJ1dFxuICAgICAgLy8gZG9uJ3Qgc2V0IHZhbHVlIHRvIGFuIGludmFsaWQgbnVtYmVyXG4gICAgICB0aGlzLnZhbHVlID0gW1wiLVwiLCBcIi5cIl0uaW5jbHVkZXMobmV3VmFsdWUpID8gXCJcIiA6IG5ld1ZhbHVlO1xuICAgICAgaWYgKG9yaWdpbiA9PT0gXCJkaXJlY3RcIikge1xuICAgICAgICB0aGlzLnNldElucHV0TnVtYmVyVmFsdWUobmV3TG9jYWxpemVkVmFsdWUpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZE51bWJlclZhbHVlKG5ld0xvY2FsaXplZFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVFdmVudCkge1xuICAgICAgICBjb25zdCBjYWxjaXRlSW5wdXROdW1iZXJJbnB1dEV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXROdW1iZXJJbnB1dC5lbWl0KCk7XG4gICAgICAgIGlmIChjYWxjaXRlSW5wdXROdW1iZXJJbnB1dEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodGhpcy5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21taXR0aW5nKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcktleVVwSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgIH07XG4gICAgdGhpcy5hbGlnbm1lbnQgPSBcInN0YXJ0XCI7XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFyYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cFNlcGFyYXRvciA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxlRm9ybWF0ID0gZmFsc2U7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXhMZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5MZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJlZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnN0YXR1cyA9IFwiaWRsZVwiO1xuICAgIHRoaXMuc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlucHV0TW9kZSA9IFwiZGVjaW1hbFwiO1xuICAgIHRoaXMuZW50ZXJLZXlIaW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3VmZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkgPSBmYWxzZTtcbiAgfVxuICBkaXNhYmxlZFdhdGNoZXIoKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpO1xuICB9XG4gIC8qKiB3YXRjaGVyIHRvIHVwZGF0ZSBudW1iZXItdG8tc3RyaW5nIGZvciBtYXggKi9cbiAgbWF4V2F0Y2hlcigpIHtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpIHx8IG51bGw7XG4gIH1cbiAgLyoqIHdhdGNoZXIgdG8gdXBkYXRlIG51bWJlci10by1zdHJpbmcgZm9yIG1pbiAqL1xuICBtaW5XYXRjaGVyKCkge1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCkgfHwgbnVsbDtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCIsXG4gICAgICAgIHByZXZpb3VzVmFsdWUsXG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09IFwiXCJcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGlzVmFsaWROdW1iZXIobmV3VmFsdWUpXG4gICAgICAgICAgICA/IG5ld1ZhbHVlXG4gICAgICAgICAgICA6IHRoaXMucHJldmlvdXNWYWx1ZSB8fCBcIlwiXG4gICAgICB9KTtcbiAgICAgIHRoaXMud2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgdXBkYXRlUmVxdWVzdGVkSWNvbigpIHtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKHt9LCB0aGlzLmljb24sIFwibnVtYmVyXCIpO1xuICB9XG4gIGdldCBpc0NsZWFyYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcmFibGUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZVdhdGNoZXIobG9jYWxlKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5pbmxpbmVFZGl0YWJsZUVsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS1pbmxpbmUtZWRpdGFibGVcIik7XG4gICAgaWYgKHRoaXMuaW5saW5lRWRpdGFibGVFbCkge1xuICAgICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IHRoaXMuaW5saW5lRWRpdGFibGVFbC5lZGl0aW5nRW5hYmxlZCB8fCBmYWxzZTtcbiAgICB9XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkTnVtYmVyVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5zZXRQcmV2aW91c051bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMud2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgb3JpZ2luOiBcImNvbm5lY3RlZFwiLFxuICAgICAgdmFsdWU6IGlzVmFsaWROdW1iZXIodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogXCJcIlxuICAgIH0pO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICB0aGlzLnNldERpc2FibGVkQWN0aW9uKCk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2FsY2l0ZUludGVybmFsSGlkZGVuSW5wdXRDaGFuZ2VcIiwgdGhpcy5oaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpO1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbih7fSwgdGhpcy5pY29uLCBcIm51bWJlclwiKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFNob3VsZFVwZGF0ZShuZXdWYWx1ZSwgb2xkVmFsdWUsIHByb3BlcnR5KSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSBcInZhbHVlXCIgJiYgbmV3VmFsdWUgJiYgIWlzVmFsaWROdW1iZXIobmV3VmFsdWUpKSB7XG4gICAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgICAgb3JpZ2luOiBcInJlc2V0XCIsXG4gICAgICAgIHZhbHVlOiBvbGRWYWx1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5jaGlsZE51bWJlckVsPy5mb2N1cygpO1xuICB9XG4gIC8qKiBTZWxlY3RzIHRoZSB0ZXh0IG9mIHRoZSBjb21wb25lbnQncyBgdmFsdWVgLiAqL1xuICBhc3luYyBzZWxlY3RUZXh0KCkge1xuICAgIHRoaXMuY2hpbGROdW1iZXJFbD8uc2VsZWN0KCk7XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBpbmNyZW1lbnRPckRlY3JlbWVudE51bWJlclZhbHVlKGRpcmVjdGlvbiwgaW5wdXRNYXgsIGlucHV0TWluLCBuYXRpdmVFdmVudCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgYWRqdXN0bWVudCA9IGRpcmVjdGlvbiA9PT0gXCJ1cFwiID8gMSA6IC0xO1xuICAgIGNvbnN0IGlucHV0U3RlcCA9IHRoaXMuc3RlcCA9PT0gXCJhbnlcIiA/IDEgOiBNYXRoLmFicyh0aGlzLnN0ZXAgfHwgMSk7XG4gICAgY29uc3QgaW5wdXRWYWwgPSBuZXcgQmlnRGVjaW1hbCh2YWx1ZSAhPT0gXCJcIiA/IHZhbHVlIDogXCIwXCIpO1xuICAgIGNvbnN0IG51ZGdlZFZhbHVlID0gaW5wdXRWYWwuYWRkKGAke2lucHV0U3RlcCAqIGFkanVzdG1lbnR9YCk7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWVCZWxvd0lucHV0TWluID0gKCkgPT4gdHlwZW9mIGlucHV0TWluID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4oaW5wdXRNaW4pICYmXG4gICAgICBudWRnZWRWYWx1ZS5zdWJ0cmFjdChgJHtpbnB1dE1pbn1gKS5pc05lZ2F0aXZlO1xuICAgIGNvbnN0IG51ZGdlZFZhbHVlQWJvdmVJbnB1dE1heCA9ICgpID0+IHR5cGVvZiBpbnB1dE1heCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgIWlzTmFOKGlucHV0TWF4KSAmJlxuICAgICAgIW51ZGdlZFZhbHVlLnN1YnRyYWN0KGAke2lucHV0TWF4fWApLmlzTmVnYXRpdmU7XG4gICAgY29uc3QgZmluYWxWYWx1ZSA9IG51ZGdlZFZhbHVlQmVsb3dJbnB1dE1pbigpXG4gICAgICA/IGAke2lucHV0TWlufWBcbiAgICAgIDogbnVkZ2VkVmFsdWVBYm92ZUlucHV0TWF4KClcbiAgICAgICAgPyBgJHtpbnB1dE1heH1gXG4gICAgICAgIDogbnVkZ2VkVmFsdWUudG9TdHJpbmcoKTtcbiAgICB0aGlzLnNldE51bWJlclZhbHVlKHtcbiAgICAgIGNvbW1pdHRpbmc6IHRydWUsXG4gICAgICBuYXRpdmVFdmVudCxcbiAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICB2YWx1ZTogZmluYWxWYWx1ZVxuICAgIH0pO1xuICB9XG4gIG9uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMuc2V0TnVtYmVyVmFsdWUoe1xuICAgICAgb3JpZ2luOiBcInJlc2V0XCIsXG4gICAgICB2YWx1ZTogdGhpcy5kZWZhdWx0VmFsdWVcbiAgICB9KTtcbiAgfVxuICBzeW5jSGlkZGVuRm9ybUlucHV0KGlucHV0KSB7XG4gICAgaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgaW5wdXQubWluID0gdGhpcy5taW4/LnRvU3RyaW5nKDEwKSA/PyBcIlwiO1xuICAgIGlucHV0Lm1heCA9IHRoaXMubWF4Py50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgfVxuICBzZXREaXNhYmxlZEFjdGlvbigpIHtcbiAgICBjb25zdCBzbG90dGVkQWN0aW9uRWwgPSBnZXRTbG90dGVkKHRoaXMuZWwsIFwiYWN0aW9uXCIpO1xuICAgIGlmICghc2xvdHRlZEFjdGlvbkVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoc2xvdHRlZEFjdGlvbkVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgc2xvdHRlZEFjdGlvbkVsLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSkge1xuICAgICAgc2xvdHRlZEFjdGlvbkVsLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgdGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gaXNWYWxpZE51bWJlcih2YWx1ZSkgPyB2YWx1ZSA6IFwiXCI7XG4gIH1cbiAgd2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmICFpc1ZhbGlkTnVtYmVyKHZhbHVlKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgc3BlY2lmaWVkIHZhbHVlIFwiJHt2YWx1ZX1cIiBjYW5ub3QgYmUgcGFyc2VkLCBvciBpcyBvdXQgb2YgcmFuZ2UuYCk7XG4gICAgfVxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCBsb2FkZXIgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubG9hZGVyIH0sIGgoXCJjYWxjaXRlLXByb2dyZXNzXCIsIHsgbGFiZWw6IHRoaXMubWVzc2FnZXMubG9hZGluZywgdHlwZTogXCJpbmRldGVybWluYXRlXCIgfSkpKTtcbiAgICBjb25zdCBpbnB1dENsZWFyQnV0dG9uID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5jbGVhciwgY2xhc3M6IENTUy5jbGVhckJ1dHRvbiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25DbGljazogdGhpcy5jbGVhcklucHV0VmFsdWUsIHRhYkluZGV4OiAtMSwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJ4XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBjb25zdCBpY29uRWwgPSAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaW5wdXRJY29uLCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsLCBpY29uOiB0aGlzLnJlcXVlc3RlZEljb24sIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpO1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbE51bWJlckJ1dHRvbiA9IHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9PT0gXCJob3Jpem9udGFsXCI7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc0hvcml6b250YWxVcCA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5udW1iZXJCdXR0b25JdGVtXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25JdGVtSG9yaXpvbnRhbF06IGlzSG9yaXpvbnRhbE51bWJlckJ1dHRvblxuICAgICAgfSwgXCJkYXRhLWFkanVzdG1lbnRcIjogXCJ1cFwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5LCBvblBvaW50ZXJEb3duOiB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyLCBvblBvaW50ZXJPdXQ6IHRoaXMubnVkZ2VCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJVcEFuZE91dEhhbmRsZXIsIHRhYkluZGV4OiAtMSwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLXVwXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBjb25zdCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd24gPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubnVtYmVyQnV0dG9uSXRlbV06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSXRlbUhvcml6b250YWxdOiBpc0hvcml6b250YWxOdW1iZXJCdXR0b25cbiAgICAgIH0sIFwiZGF0YS1hZGp1c3RtZW50XCI6IFwiZG93blwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5LCBvblBvaW50ZXJEb3duOiB0aGlzLm51ZGdlQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyLCBvblBvaW50ZXJPdXQ6IHRoaXMubnVkZ2VCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udWRnZUJ1dHRvblBvaW50ZXJVcEFuZE91dEhhbmRsZXIsIHRhYkluZGV4OiAtMSwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpO1xuICAgIGNvbnN0IG51bWJlckJ1dHRvbnNWZXJ0aWNhbCA9IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5udW1iZXJCdXR0b25XcmFwcGVyIH0sIG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXAsIG51bWJlckJ1dHRvbnNIb3Jpem9udGFsRG93bikpO1xuICAgIGNvbnN0IHByZWZpeFRleHQgPSBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5wcmVmaXggfSwgdGhpcy5wcmVmaXhUZXh0KTtcbiAgICBjb25zdCBzdWZmaXhUZXh0ID0gaChcImRpdlwiLCB7IGNsYXNzOiBDU1Muc3VmZml4IH0sIHRoaXMuc3VmZml4VGV4dCk7XG4gICAgY29uc3QgY2hpbGRFbCA9IChoKFwiaW5wdXRcIiwgeyBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBhdXRvY29tcGxldGU6IHRoaXMuYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzID8gdHJ1ZSA6IG51bGwsIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwsIGVudGVyS2V5SGludDogdGhpcy5lbnRlcktleUhpbnQsIGlucHV0TW9kZTogdGhpcy5pbnB1dE1vZGUsIGtleTogXCJsb2NhbGl6ZWQtaW5wdXRcIiwgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbmFtZTogdW5kZWZpbmVkLCBvbkJsdXI6IHRoaXMuaW5wdXROdW1iZXJCbHVySGFuZGxlciwgb25Gb2N1czogdGhpcy5pbnB1dE51bWJlckZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0TnVtYmVyS2V5RG93bkhhbmRsZXIsIG9uS2V5VXA6IHRoaXMuaW5wdXROdW1iZXJLZXlVcEhhbmRsZXIsIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IFwiXCIsIHJlYWRPbmx5OiB0aGlzLnJlYWRPbmx5LCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMubG9jYWxpemVkVmFsdWUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRDaGlsZE51bWJlckVsUmVmIH0pKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmlucHV0V3JhcHBlcl06IHRydWUsIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIgfSB9LCB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLnJlYWRPbmx5XG4gICAgICA/IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsRG93blxuICAgICAgOiBudWxsLCB0aGlzLnByZWZpeFRleHQgPyBwcmVmaXhUZXh0IDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1Mud3JhcHBlciB9LCBjaGlsZEVsLCB0aGlzLmlzQ2xlYXJhYmxlID8gaW5wdXRDbGVhckJ1dHRvbiA6IG51bGwsIHRoaXMucmVxdWVzdGVkSWNvbiA/IGljb25FbCA6IG51bGwsIHRoaXMubG9hZGluZyA/IGxvYWRlciA6IG51bGwpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25XcmFwcGVyIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uIH0pKSwgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcInZlcnRpY2FsXCIgJiYgIXRoaXMucmVhZE9ubHkgPyBudW1iZXJCdXR0b25zVmVydGljYWwgOiBudWxsLCB0aGlzLnN1ZmZpeFRleHQgPyBzdWZmaXhUZXh0IDogbnVsbCwgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwXG4gICAgICA6IG51bGwsIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkV2F0Y2hlclwiXSxcbiAgICBcIm1heFwiOiBbXCJtYXhXYXRjaGVyXCJdLFxuICAgIFwibWluXCI6IFtcIm1pbldhdGNoZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZVdhdGNoZXJcIl0sXG4gICAgXCJpY29uXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlV2F0Y2hlclwiXVxuICB9OyB9XG59O1xuSW5wdXROdW1iZXIuc3R5bGUgPSBpbnB1dE51bWJlckNzcztcblxuZXhwb3J0IHsgSW5wdXROdW1iZXIgYXMgY2FsY2l0ZV9pbnB1dF9udW1iZXIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=