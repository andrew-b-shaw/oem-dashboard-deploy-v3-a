"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input": () => (/* binding */ Input)
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
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
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
const INPUT_TYPE_ICONS = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
};
const SLOTS = {
  action: "action"
};

const inputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host textarea,:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-color:transparent}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-app-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Input = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalInputFocus = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputFocus", 6);
    this.calciteInternalInputBlur = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputBlur", 6);
    this.calciteInputInput = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputInput", 7);
    this.calciteInputChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputChange", 6);
    /** keep track of the rendered child type */
    this.childElType = "input";
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
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputBlurHandler = () => {
      this.calciteInternalInputBlur.emit();
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
    this.inputFocusHandler = () => {
      this.calciteInternalInputFocus.emit();
    };
    this.inputChangeHandler = () => {
      if (this.type === "file") {
        this.files = this.childEl.files;
      }
    };
    this.inputInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value
      });
    };
    this.inputKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
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
        this.setValue({
          nativeEvent,
          origin: "user",
          value: (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.p)(delocalizedValue)
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setValue({
          nativeEvent,
          origin: "user",
          value: delocalizedValue
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.type !== "number" || this.disabled || this.readOnly) {
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
      if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
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
    this.numberButtonPointerUpAndOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.numberButtonPointerDownHandler = (event) => {
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
        this.setValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      event.stopPropagation();
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (this.type === "text" && !this.childEl) {
        return;
      }
      if (this.type === "number" && !this.childNumberEl) {
        return;
      }
      this[`child${this.type === "number" ? "Number" : ""}El`].value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = this.normalizeValue(value);
    };
    this.setPreviousValue = (value) => {
      this.previousValue = this.normalizeValue(value);
    };
    this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value }) => {
      this.setPreviousValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      if (this.type === "number") {
        _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
          signDisplay: "never"
        };
        const sanitizedValue = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.s)(
        // no need to delocalize a string that ia already in latn numerals
        (this.numberingSystem && this.numberingSystem !== "latn") ||
          _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.a !== "latn"
          ? _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(value)
          : value);
        const newValue = value && !sanitizedValue
          ? (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.previousValue)
            ? this.previousValue
            : ""
          : sanitizedValue;
        const newLocalizedValue = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(newValue);
        this.localizedValue = newLocalizedValue;
        this.userChangedValue = origin === "user" && this.value !== newValue;
        // don't sanitize the start of negative/decimal numbers, but
        // don't set value to an invalid number
        this.value = ["-", "."].includes(newValue) ? "" : newValue;
      }
      else {
        this.userChangedValue = origin === "user" && this.value !== value;
        this.value = value;
      }
      if (origin === "direct") {
        this.setInputValue(value);
        this.previousEmittedValue = value;
      }
      if (nativeEvent) {
        const calciteInputInputEvent = this.calciteInputInput.emit();
        if (calciteInputInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue =
            this.type === "number"
              ? _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(this.previousValue)
              : this.previousValue;
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.inputKeyUpHandler = () => {
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
    this.pattern = undefined;
    this.accept = undefined;
    this.multiple = false;
    this.inputMode = "text";
    this.enterKeyHint = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.type = "text";
    this.value = "";
    this.files = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
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
      this.setValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == ""
          ? ""
          : this.type === "number"
            ? (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)
              ? newValue
              : this.previousValue || ""
            : newValue
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value.length > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_10__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    if (this.type === "number") {
      this.warnAboutInvalidNumberValue(this.value);
      this.setValue({
        origin: "connected",
        value: (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.value) ? this.value : ""
      });
    }
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_10__.d)(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)(INPUT_TYPE_ICONS, this.icon, this.type);
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_10__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (this.type === "number" && property === "value" && newValue && !(0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)) {
      this.setValue({
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
    if (this.type === "number") {
      this.childNumberEl?.focus();
    }
    else {
      this.childEl?.focus();
    }
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    if (this.type === "number") {
      this.childNumberEl?.select();
    }
    else {
      this.childEl?.select();
    }
  }
  // TODO: refactor so we don't need to sync the internals in color-picker
  // https://github.com/Esri/calcite-components/issues/6100
  /** @internal */
  async internalSyncChildElValue() {
    if (this.type === "number") {
      this.childNumberEl.value = this.value;
    }
    else {
      this.childEl.value = this.value;
    }
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
    this.setValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue
    });
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    const { type } = this;
    input.type = type;
    if (type === "number") {
      input.min = this.min?.toString(10) ?? "";
      input.max = this.max?.toString(10) ?? "";
    }
    else if (type === "text") {
      if (this.minLength != null) {
        input.minLength = this.minLength;
      }
      if (this.maxLength != null) {
        input.maxLength = this.maxLength;
      }
    }
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
    return this.type === "number" ? ((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(value) ? value : "") : value;
  }
  warnAboutInvalidNumberValue(value) {
    if (this.type === "number" && value && !(0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(value)) {
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
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsHorizontalDown = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsVertical = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.suffix }, this.suffixText);
    const localeNumberInput = this.type === "number" ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { accept: this.accept, "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, multiple: this.multiple, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildNumberElRef })) : null;
    const childEl = this.type !== "number"
      ? [
        (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.childElType, { accept: this.accept, "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
            [CSS.editingEnabled]: this.editingEnabled,
            [CSS.inlineChild]: !!this.inlineEditableEl
          }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, multiple: this.multiple, name: this.name, onBlur: this.inputBlurHandler, onChange: this.inputChangeHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value,
          // eslint-disable-next-line react/jsx-sort-props
          ref: this.setChildElRef }),
        this.isTextarea ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.resizeIconWrapper }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" }))) : null
      ]
      : null;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.inputWrapper]: true, [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_9__.C.rtl]: dir === "rtl" } }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionWrapper }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
      ? numberButtonsVertical
      : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
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
    "type": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Input.style = inputCss;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjkxNWE4ZWVjMjk1YTY3ZDgwYjZhNzYwNWQ0N2ZlOTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2U7QUFDTjtBQUNNO0FBQ3hFO0FBQzZDO0FBQ21CO0FBQ29IO0FBQzFLO0FBQ0g7QUFDZ0U7QUFDL0Y7QUFDRzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxjQUFjLHlFQUF5RSxrQkFBa0Isc0JBQXNCLHNDQUFzQyxpQkFBaUIsMEJBQTBCLGtCQUFrQixzQkFBc0IsK0lB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LEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1pbnB1dC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS90OW4tZmFjMTMzOTQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCBlIGFzIHNldFJlcXVlc3RlZEljb24sIGIgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLWQ3MzU5ZWZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsLTlkMmViMzM0LmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgaSBhcyBpc1ZhbGlkTnVtYmVyLCBwIGFzIHBhcnNlTnVtYmVyU3RyaW5nLCBzIGFzIHNhbml0aXplTnVtYmVyU3RyaW5nLCBhIGFzIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0sIGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkLCBCIGFzIEJpZ0RlY2ltYWwgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGxvYWRlcjogXCJsb2FkZXJcIixcbiAgY2xlYXJCdXR0b246IFwiY2xlYXItYnV0dG9uXCIsXG4gIGVkaXRpbmdFbmFibGVkOiBcImVkaXRpbmctZW5hYmxlZFwiLFxuICBpbmxpbmVDaGlsZDogXCJpbmxpbmUtY2hpbGRcIixcbiAgaW5wdXRJY29uOiBcImljb25cIixcbiAgcHJlZml4OiBcInByZWZpeFwiLFxuICBzdWZmaXg6IFwic3VmZml4XCIsXG4gIG51bWJlckJ1dHRvbldyYXBwZXI6IFwibnVtYmVyLWJ1dHRvbi13cmFwcGVyXCIsXG4gIGJ1dHRvbkl0ZW1Ib3Jpem9udGFsOiBcIm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFwiLFxuICB3cmFwcGVyOiBcImVsZW1lbnQtd3JhcHBlclwiLFxuICBpbnB1dFdyYXBwZXI6IFwid3JhcHBlclwiLFxuICBhY3Rpb25XcmFwcGVyOiBcImFjdGlvbi13cmFwcGVyXCIsXG4gIHJlc2l6ZUljb25XcmFwcGVyOiBcInJlc2l6ZS1pY29uLXdyYXBwZXJcIixcbiAgbnVtYmVyQnV0dG9uSXRlbTogXCJudW1iZXItYnV0dG9uLWl0ZW1cIlxufTtcbmNvbnN0IElOUFVUX1RZUEVfSUNPTlMgPSB7XG4gIHRlbDogXCJwaG9uZVwiLFxuICBwYXNzd29yZDogXCJsb2NrXCIsXG4gIGVtYWlsOiBcImVtYWlsLWFkZHJlc3NcIixcbiAgZGF0ZTogXCJjYWxlbmRhclwiLFxuICB0aW1lOiBcImNsb2NrXCIsXG4gIHNlYXJjaDogXCJzZWFyY2hcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb246IFwiYWN0aW9uXCJcbn07XG5cbmNvbnN0IGlucHV0Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja306aG9zdChbc2NhbGU9c10pIGlucHV0LDpob3N0KFtzY2FsZT1zXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9c10pIC5zdWZmaXh7YmxvY2stc2l6ZToxLjVyZW07cGFkZGluZy1pbmxpbmU6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9c10pIHRleHRhcmVhe2Jsb2NrLXNpemU6MS41cmVtO21pbi1ibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgaW5wdXRbdHlwZT1maWxlXXtibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6MS41cmVtO21pbi1pbmxpbmUtc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSB0ZXh0YXJlYXtibG9jay1zaXplOmF1dG87cGFkZGluZy1ibG9jazowLjI1cmVtO3BhZGRpbmctaW5saW5lOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSBpbnB1dCw6aG9zdChbc2NhbGU9bV0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPW1dKSAuc3VmZml4e2Jsb2NrLXNpemU6MnJlbTtwYWRkaW5nLWlubGluZTowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIHRleHRhcmVhe21pbi1ibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSBpbnB1dFt0eXBlPWZpbGVde2Jsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6MnJlbTttaW4taW5saW5lLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIHRleHRhcmVhe2Jsb2NrLXNpemU6YXV0bztwYWRkaW5nLWJsb2NrOjAuNXJlbTtwYWRkaW5nLWlubGluZTowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pIGlucHV0LDpob3N0KFtzY2FsZT1sXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bF0pIC5zdWZmaXh7YmxvY2stc2l6ZToyLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSB0ZXh0YXJlYXttaW4tYmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9bF0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9bF0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgaW5wdXRbdHlwZT1maWxlXXtibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjIuNzVyZW07bWluLWlubGluZS1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSB0ZXh0YXJlYXtibG9jay1zaXplOmF1dG87cGFkZGluZy1ibG9jazowLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW2Rpc2FibGVkXSkgdGV4dGFyZWF7cmVzaXplOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0IHRleHRhcmVhLDpob3N0IGlucHV0e3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYmxvY2stc2l6ZSAwLCBvdXRsaW5lLW9mZnNldCAwczstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWF4LWJsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIDAlO2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Omhvc3QgaW5wdXQsOmhvc3QgdGV4dGFyZWF7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgaW5wdXQ6OnBsYWNlaG9sZGVyLDpob3N0IGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLDpob3N0IHRleHRhcmVhOjpwbGFjZWhvbGRlciw6aG9zdCB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QgdGV4dGFyZWE6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0IGlucHV0OmZvY3VzLDpob3N0IHRleHRhcmVhOmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgaW5wdXRbcmVhZG9ubHldLDpob3N0IHRleHRhcmVhW3JlYWRvbmx5XXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfTpob3N0IGlucHV0W3JlYWRvbmx5XTpmb2N1cyw6aG9zdCB0ZXh0YXJlYVtyZWFkb25seV06Zm9jdXN7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QgdGV4dGFyZWEsOmhvc3QgaW5wdXR7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCB0ZXh0YXJlYTpmb2N1cyw6aG9zdCBpbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgaW5wdXQsOmhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgdGV4dGFyZWF7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChbc3RhdHVzPWludmFsaWRdKSBpbnB1dDpmb2N1cyw6aG9zdChbc3RhdHVzPWludmFsaWRdKSB0ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW3NjYWxlPXNdKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC41cmVtfTpob3N0KFtzY2FsZT1tXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MXJlbX06aG9zdChbaWNvbl1bc2NhbGU9c10pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjJyZW19Omhvc3QoW2ljb25dW3NjYWxlPW1dKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDoyLjVyZW19Omhvc3QoW2ljb25dW3NjYWxlPWxdKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDozLjVyZW19LmVsZW1lbnQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtvcmRlcjozO2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleDoxIDEgMCU7YWxpZ24taXRlbXM6Y2VudGVyfS5pY29ue3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uaWNvbiwucmVzaXplLWljb24td3JhcHBlcnt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpfWlucHV0W3R5cGU9dGV4dF06Oi1tcy1jbGVhcixpbnB1dFt0eXBlPXRleHRdOjotbXMtcmV2ZWFse2Rpc3BsYXk6bm9uZTtibG9jay1zaXplOjBweDtpbmxpbmUtc2l6ZTowcHh9aW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uLGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2xlYXItYnV0dG9uLGlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtY2xlYXItYnV0dG9ue2Rpc3BsYXk6bm9uZX0uY2xlYXItYnV0dG9ue3BvaW50ZXItZXZlbnRzOmluaXRpYWw7b3JkZXI6NDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWluLWJsb2NrLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5jbGVhci1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jbGVhci1idXR0b246YWN0aXZlIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNsZWFyLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsZWFyLWJ1dHRvbjpkaXNhYmxlZHtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9LmxvYWRlcntpbnNldC1ibG9jay1zdGFydDoxcHg7aW5zZXQtaW5saW5lOjFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2t9LmFjdGlvbi13cmFwcGVye29yZGVyOjc7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6YXV0bzttaW4tYmxvY2stc2l6ZToxMDAlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5wcmVmaXh7b3JkZXI6Mjtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9LnN1ZmZpeHtvcmRlcjo1O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fTpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSB0ZXh0YXJlYSw6aG9zdChbYWxpZ25tZW50PXN0YXJ0XSkgaW5wdXR7dGV4dC1hbGlnbjpzdGFydH06aG9zdChbYWxpZ25tZW50PWVuZF0pIHRleHRhcmVhLDpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgaW5wdXR7dGV4dC1hbGlnbjplbmR9Omhvc3QgaW5wdXRbdHlwZT1udW1iZXJdey1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9Omhvc3QgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLDpob3N0IGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO21hcmdpbjowcHh9Lm51bWJlci1idXR0b24td3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO29yZGVyOjY7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC53cmFwcGVye2ZsZXgtZGlyZWN0aW9uOnJvdztkaXNwbGF5OmZsZXh9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIGlucHV0LDpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSB0ZXh0YXJlYXtvcmRlcjoyfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9aG9yaXpvbnRhbF0pIC5jYWxjaXRlLS1ydGwgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl0gY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPWhvcml6b250YWxdKSAuY2FsY2l0ZS0tcnRsIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXSwubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBde29yZGVyOjE7bWF4LWJsb2NrLXNpemU6MTAwJTttaW4tYmxvY2stc2l6ZToxMDAlO2FsaWduLXNlbGY6c3RyZXRjaH0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl0gY2FsY2l0ZS1pY29uLC5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF0gY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweH0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXXtvcmRlcjo1fS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl17Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjBweH0ubnVtYmVyLWJ1dHRvbi1pdGVte21heC1ibG9jay1zaXplOjUwJTttaW4tYmxvY2stc2l6ZTo1MCU7cG9pbnRlci1ldmVudHM6aW5pdGlhbDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC41cmVtO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW0gY2FsY2l0ZS1pY29ue3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Lm51bWJlci1idXR0b24taXRlbTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmZvY3VzIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Lm51bWJlci1idXR0b24taXRlbTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9Lm51bWJlci1idXR0b24taXRlbTpkaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lfS53cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3J7ZGlzcGxheTpub25lfTpob3N0IGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudH06aG9zdCB0ZXh0YXJlYTo6LXdlYmtpdC1yZXNpemVye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLWVuZDowcHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW07aW5zZXQtaW5saW5lLWVuZDowfS5yZXNpemUtaWNvbi13cmFwcGVye2luc2V0LWJsb2NrLWVuZDoycHg7aW5zZXQtaW5saW5lLWVuZDoycHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtibG9jay1zaXplOjAuNzVyZW07aW5saW5lLXNpemU6MC43NXJlbTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LnJlc2l6ZS1pY29uLXdyYXBwZXIgY2FsY2l0ZS1pY29ue2luc2V0LWJsb2NrLWVuZDowLjI1cmVtO2luc2V0LWlubGluZS1lbmQ6MC4yNXJlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LmNhbGNpdGUtLXJ0bCAucmVzaXplLWljb24td3JhcHBlciBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9Omhvc3QoW3R5cGU9Y29sb3JdKSBpbnB1dHtwYWRkaW5nOjAuMjVyZW19Omhvc3QoW3R5cGU9ZmlsZV0pIGlucHV0e2N1cnNvcjpwb2ludGVyO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOmRhc2hlZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3RleHQtYWxpZ246Y2VudGVyfTpob3N0KFt0eXBlPWZpbGVdW3NjYWxlPXNdKSBpbnB1dHtwYWRkaW5nLWJsb2NrOjFweDtwYWRkaW5nLWlubGluZTowLjVyZW19Omhvc3QoW3R5cGU9ZmlsZV1bc2NhbGU9bV0pIGlucHV0e3BhZGRpbmctYmxvY2s6MC4yNXJlbTtwYWRkaW5nLWlubGluZTowLjc1cmVtfTpob3N0KFt0eXBlPWZpbGVdW3NjYWxlPWxdKSBpbnB1dHtwYWRkaW5nLWJsb2NrOjAuNXJlbTtwYWRkaW5nLWlubGluZToxcmVtfTpob3N0KC5uby1ib3R0b20tYm9yZGVyKSBpbnB1dHtib3JkZXItYmxvY2stZW5kLXdpZHRoOjBweH06aG9zdCguYm9yZGVyLXRvcC1jb2xvci1vbmUpIGlucHV0e2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdCAuaW5saW5lLWNoaWxke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Omhvc3QgLmlubGluZS1jaGlsZCAuZWRpdGluZy1lbmFibGVke2JhY2tncm91bmQtY29sb3I6aW5oZXJpdH06aG9zdCAuaW5saW5lLWNoaWxkOm5vdCguZWRpdGluZy1lbmFibGVkKXtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgSW5wdXQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRGb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSW5wdXRGb2N1c1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Qmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsSW5wdXRCbHVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0SW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dElucHV0XCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRDaGFuZ2VcIiwgNik7XG4gICAgLyoqIGtlZXAgdHJhY2sgb2YgdGhlIHJlbmRlcmVkIGNoaWxkIHR5cGUgKi9cbiAgICB0aGlzLmNoaWxkRWxUeXBlID0gXCJpbnB1dFwiO1xuICAgIHRoaXMucHJldmlvdXNWYWx1ZU9yaWdpbiA9IFwiaW5pdGlhbFwiO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpKTtcbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmVhZE9ubHkgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0NsZWFyYWJsZSAmJiBldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0VmFsdWUoZXZlbnQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGlmIChzdWJtaXRGb3JtKHRoaXMpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbGVhcklucHV0VmFsdWUgPSAobmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBjb21taXR0aW5nOiB0cnVlLFxuICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID09PSBcInVzZXJcIiAmJiB0aGlzLnZhbHVlICE9PSB0aGlzLnByZXZpb3VzRW1pdHRlZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUlucHV0Q2hhbmdlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRCbHVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVyLmVtaXQoKTtcbiAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgfTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2xvdHRlZEFjdGlvbkVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBcImFjdGlvblwiKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHNsb3R0ZWRBY3Rpb25FbCkge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgdGhpcy5maWxlcyA9IHRoaXMuY2hpbGRFbC5maWxlcztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXIgPSAobmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICB2YWx1ZTogbmF0aXZlRXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaW5wdXRLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJJbnB1dEhhbmRsZXIgPSAobmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSBuYXRpdmVFdmVudC50YXJnZXQudmFsdWU7XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICAgIH07XG4gICAgICBjb25zdCBkZWxvY2FsaXplZFZhbHVlID0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUodmFsdWUpO1xuICAgICAgaWYgKG5hdGl2ZUV2ZW50LmlucHV0VHlwZSA9PT0gXCJpbnNlcnRGcm9tUGFzdGVcIikge1xuICAgICAgICBpZiAoIWlzVmFsaWROdW1iZXIoZGVsb2NhbGl6ZWRWYWx1ZSkpIHtcbiAgICAgICAgICBuYXRpdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgICAgdmFsdWU6IHBhcnNlTnVtYmVyU3RyaW5nKGRlbG9jYWxpemVkVmFsdWUpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUgPSB0aGlzLmxvY2FsaXplZFZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgICAgdmFsdWU6IGRlbG9jYWxpemVkVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0TnVtYmVyS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IFwibnVtYmVyXCIgfHwgdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIC8qIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBvZiBtb3ZpbmcgY3Vyc29yIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGlucHV0IHdoZW4gaG9sZGluZyBkb3duIEFycm93VXAgKi9cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlKFwidXBcIiwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShcImRvd25cIiwgZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdXBwb3J0ZWRLZXlzID0gW1xuICAgICAgICAuLi5udW1iZXJLZXlzLFxuICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICBcIkFycm93UmlnaHRcIixcbiAgICAgICAgXCJCYWNrc3BhY2VcIixcbiAgICAgICAgXCJEZWxldGVcIixcbiAgICAgICAgXCJFbnRlclwiLFxuICAgICAgICBcIkVzY2FwZVwiLFxuICAgICAgICBcIlRhYlwiXG4gICAgICBdO1xuICAgICAgaWYgKGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNTaGlmdFRhYkV2ZW50ID0gZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5ID09PSBcIlRhYlwiO1xuICAgICAgaWYgKHN1cHBvcnRlZEtleXMuaW5jbHVkZXMoZXZlbnQua2V5KSB8fCBpc1NoaWZ0VGFiRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICAgIH07XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVjaW1hbCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUuaW5kZXhPZihudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVjaW1hbCkgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoL1tlRV0vLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiAhL1tlRV0vLnRlc3QodGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCItXCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlICYmICF0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlLnNwbGl0KFwiLVwiKS5sZW5ndGggPD0gMikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZSA9IChkaXJlY3Rpb24sIG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoKG5hdGl2ZUV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCAmJiBuYXRpdmVFdmVudC5yZXBlYXQpIHx8IHRoaXMudHlwZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbnB1dE1heCA9IHRoaXMubWF4U3RyaW5nID8gcGFyc2VGbG9hdCh0aGlzLm1heFN0cmluZykgOiBudWxsO1xuICAgICAgY29uc3QgaW5wdXRNaW4gPSB0aGlzLm1pblN0cmluZyA/IHBhcnNlRmxvYXQodGhpcy5taW5TdHJpbmcpIDogbnVsbDtcbiAgICAgIGNvbnN0IHZhbHVlTnVkZ2VEZWxheUluTXMgPSAxNTA7XG4gICAgICB0aGlzLmluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KTtcbiAgICAgIGlmICh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgICAgfVxuICAgICAgbGV0IGZpcnN0VmFsdWVOdWRnZSA9IHRydWU7XG4gICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGZpcnN0VmFsdWVOdWRnZSkge1xuICAgICAgICAgIGZpcnN0VmFsdWVOdWRnZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KTtcbiAgICAgIH0sIHZhbHVlTnVkZ2VEZWxheUluTXMpO1xuICAgIH07XG4gICAgdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgfTtcbiAgICB0aGlzLm51bWJlckJ1dHRvblBvaW50ZXJEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYWRqdXN0bWVudDtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2hpbGRFbFJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZEVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldENoaWxkTnVtYmVyRWxSZWYgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2hpbGROdW1iZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlID0gKG5ld0lucHV0VmFsdWUpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwidGV4dFwiICYmICF0aGlzLmNoaWxkRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiAhdGhpcy5jaGlsZE51bWJlckVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXNbYGNoaWxkJHt0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgPyBcIk51bWJlclwiIDogXCJcIn1FbGBdLnZhbHVlID0gbmV3SW5wdXRWYWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UHJldmlvdXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldFZhbHVlID0gKHsgY29tbWl0dGluZyA9IGZhbHNlLCBuYXRpdmVFdmVudCwgb3JpZ2luLCBwcmV2aW91c1ZhbHVlLCB2YWx1ZSB9KSA9PiB7XG4gICAgICB0aGlzLnNldFByZXZpb3VzVmFsdWUocHJldmlvdXNWYWx1ZSA/PyB0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZU9yaWdpbiA9IG9yaWdpbjtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yLFxuICAgICAgICAgIHNpZ25EaXNwbGF5OiBcIm5ldmVyXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2FuaXRpemVkVmFsdWUgPSBzYW5pdGl6ZU51bWJlclN0cmluZyhcbiAgICAgICAgLy8gbm8gbmVlZCB0byBkZWxvY2FsaXplIGEgc3RyaW5nIHRoYXQgaWEgYWxyZWFkeSBpbiBsYXRuIG51bWVyYWxzXG4gICAgICAgICh0aGlzLm51bWJlcmluZ1N5c3RlbSAmJiB0aGlzLm51bWJlcmluZ1N5c3RlbSAhPT0gXCJsYXRuXCIpIHx8XG4gICAgICAgICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSAhPT0gXCJsYXRuXCJcbiAgICAgICAgICA/IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKHZhbHVlKVxuICAgICAgICAgIDogdmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlICYmICFzYW5pdGl6ZWRWYWx1ZVxuICAgICAgICAgID8gaXNWYWxpZE51bWJlcih0aGlzLnByZXZpb3VzVmFsdWUpXG4gICAgICAgICAgICA/IHRoaXMucHJldmlvdXNWYWx1ZVxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgOiBzYW5pdGl6ZWRWYWx1ZTtcbiAgICAgICAgY29uc3QgbmV3TG9jYWxpemVkVmFsdWUgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmxvY2FsaXplZFZhbHVlID0gbmV3TG9jYWxpemVkVmFsdWU7XG4gICAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IG9yaWdpbiA9PT0gXCJ1c2VyXCIgJiYgdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWU7XG4gICAgICAgIC8vIGRvbid0IHNhbml0aXplIHRoZSBzdGFydCBvZiBuZWdhdGl2ZS9kZWNpbWFsIG51bWJlcnMsIGJ1dFxuICAgICAgICAvLyBkb24ndCBzZXQgdmFsdWUgdG8gYW4gaW52YWxpZCBudW1iZXJcbiAgICAgICAgdGhpcy52YWx1ZSA9IFtcIi1cIiwgXCIuXCJdLmluY2x1ZGVzKG5ld1ZhbHVlKSA/IFwiXCIgOiBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBvcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAob3JpZ2luID09PSBcImRpcmVjdFwiKSB7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVFdmVudCkge1xuICAgICAgICBjb25zdCBjYWxjaXRlSW5wdXRJbnB1dEV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXRJbnB1dC5lbWl0KCk7XG4gICAgICAgIGlmIChjYWxjaXRlSW5wdXRJbnB1dEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPVxuICAgICAgICAgICAgdGhpcy50eXBlID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKHRoaXMucHJldmlvdXNWYWx1ZSlcbiAgICAgICAgICAgICAgOiB0aGlzLnByZXZpb3VzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tbWl0dGluZykge1xuICAgICAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICB9O1xuICAgIHRoaXMuYWxpZ25tZW50ID0gXCJzdGFydFwiO1xuICAgIHRoaXMuYXV0b2ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5jbGVhcmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3JvdXBTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsZUZvcm1hdCA9IGZhbHNlO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4TGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluTGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlckJ1dHRvblR5cGUgPSBcInZlcnRpY2FsXCI7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByZWZpeFRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBcImlkbGVcIjtcbiAgICB0aGlzLnN0ZXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXR0ZXJuID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWNjZXB0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0TW9kZSA9IFwidGV4dFwiO1xuICAgIHRoaXMuZW50ZXJLZXlIaW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3VmZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5maWxlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IGZhbHNlO1xuICB9XG4gIGRpc2FibGVkV2F0Y2hlcigpIHtcbiAgICB0aGlzLnNldERpc2FibGVkQWN0aW9uKCk7XG4gIH1cbiAgLyoqIHdhdGNoZXIgdG8gdXBkYXRlIG51bWJlci10by1zdHJpbmcgZm9yIG1heCAqL1xuICBtYXhXYXRjaGVyKCkge1xuICAgIHRoaXMubWF4U3RyaW5nID0gdGhpcy5tYXg/LnRvU3RyaW5nKCkgfHwgbnVsbDtcbiAgfVxuICAvKiogd2F0Y2hlciB0byB1cGRhdGUgbnVtYmVyLXRvLXN0cmluZyBmb3IgbWluICovXG4gIG1pbldhdGNoZXIoKSB7XG4gICAgdGhpcy5taW5TdHJpbmcgPSB0aGlzLm1pbj8udG9TdHJpbmcoKSB8fCBudWxsO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICB2YWx1ZVdhdGNoZXIobmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpIHtcbiAgICBpZiAoIXRoaXMudXNlckNoYW5nZWRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIixcbiAgICAgICAgcHJldmlvdXNWYWx1ZSxcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT0gXCJcIlxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogdGhpcy50eXBlID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICA/IGlzVmFsaWROdW1iZXIobmV3VmFsdWUpXG4gICAgICAgICAgICAgID8gbmV3VmFsdWVcbiAgICAgICAgICAgICAgOiB0aGlzLnByZXZpb3VzVmFsdWUgfHwgXCJcIlxuICAgICAgICAgICAgOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLndhcm5BYm91dEludmFsaWROdW1iZXJWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICB9XG4gIHVwZGF0ZVJlcXVlc3RlZEljb24oKSB7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihJTlBVVF9UWVBFX0lDT05TLCB0aGlzLmljb24sIHRoaXMudHlwZSk7XG4gIH1cbiAgZ2V0IGlzQ2xlYXJhYmxlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc1RleHRhcmVhICYmICh0aGlzLmNsZWFyYWJsZSB8fCB0aGlzLnR5cGUgPT09IFwic2VhcmNoXCIpICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMDtcbiAgfVxuICBnZXQgaXNUZXh0YXJlYSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVsVHlwZSA9PT0gXCJ0ZXh0YXJlYVwiO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMuaW5saW5lRWRpdGFibGVFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtaW5saW5lLWVkaXRhYmxlXCIpO1xuICAgIGlmICh0aGlzLmlubGluZUVkaXRhYmxlRWwpIHtcbiAgICAgIHRoaXMuZWRpdGluZ0VuYWJsZWQgPSB0aGlzLmlubGluZUVkaXRhYmxlRWwuZWRpdGluZ0VuYWJsZWQgfHwgZmFsc2U7XG4gICAgfVxuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuc2V0UHJldmlvdXNWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLndhcm5BYm91dEludmFsaWROdW1iZXJWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwiY29ubmVjdGVkXCIsXG4gICAgICAgIHZhbHVlOiBpc1ZhbGlkTnVtYmVyKHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZSA6IFwiXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuY2hpbGRFbFR5cGUgPSB0aGlzLnR5cGUgPT09IFwidGV4dGFyZWFcIiA/IFwidGV4dGFyZWFcIiA6IFwiaW5wdXRcIjtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpO1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihJTlBVVF9UWVBFX0lDT05TLCB0aGlzLmljb24sIHRoaXMudHlwZSk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRTaG91bGRVcGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgcHJvcGVydHkgPT09IFwidmFsdWVcIiAmJiBuZXdWYWx1ZSAmJiAhaXNWYWxpZE51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgICAgdmFsdWU6IG9sZFZhbHVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWw/LmZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGlsZEVsPy5mb2N1cygpO1xuICAgIH1cbiAgfVxuICAvKiogU2VsZWN0cyB0aGUgdGV4dCBvZiB0aGUgY29tcG9uZW50J3MgYHZhbHVlYC4gKi9cbiAgYXN5bmMgc2VsZWN0VGV4dCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWw/LnNlbGVjdCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hpbGRFbD8uc2VsZWN0KCk7XG4gICAgfVxuICB9XG4gIC8vIFRPRE86IHJlZmFjdG9yIHNvIHdlIGRvbid0IG5lZWQgdG8gc3luYyB0aGUgaW50ZXJuYWxzIGluIGNvbG9yLXBpY2tlclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvaXNzdWVzLzYxMDBcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBpbnRlcm5hbFN5bmNDaGlsZEVsVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoaWxkRWwudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIGluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBhZGp1c3RtZW50ID0gZGlyZWN0aW9uID09PSBcInVwXCIgPyAxIDogLTE7XG4gICAgY29uc3QgaW5wdXRTdGVwID0gdGhpcy5zdGVwID09PSBcImFueVwiID8gMSA6IE1hdGguYWJzKHRoaXMuc3RlcCB8fCAxKTtcbiAgICBjb25zdCBpbnB1dFZhbCA9IG5ldyBCaWdEZWNpbWFsKHZhbHVlICE9PSBcIlwiID8gdmFsdWUgOiBcIjBcIik7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWUgPSBpbnB1dFZhbC5hZGQoYCR7aW5wdXRTdGVwICogYWRqdXN0bWVudH1gKTtcbiAgICBjb25zdCBudWRnZWRWYWx1ZUJlbG93SW5wdXRNaW4gPSAoKSA9PiB0eXBlb2YgaW5wdXRNaW4gPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICFpc05hTihpbnB1dE1pbikgJiZcbiAgICAgIG51ZGdlZFZhbHVlLnN1YnRyYWN0KGAke2lucHV0TWlufWApLmlzTmVnYXRpdmU7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWVBYm92ZUlucHV0TWF4ID0gKCkgPT4gdHlwZW9mIGlucHV0TWF4ID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4oaW5wdXRNYXgpICYmXG4gICAgICAhbnVkZ2VkVmFsdWUuc3VidHJhY3QoYCR7aW5wdXRNYXh9YCkuaXNOZWdhdGl2ZTtcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gbnVkZ2VkVmFsdWVCZWxvd0lucHV0TWluKClcbiAgICAgID8gYCR7aW5wdXRNaW59YFxuICAgICAgOiBudWRnZWRWYWx1ZUFib3ZlSW5wdXRNYXgoKVxuICAgICAgICA/IGAke2lucHV0TWF4fWBcbiAgICAgICAgOiBudWRnZWRWYWx1ZS50b1N0cmluZygpO1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgIHZhbHVlOiBmaW5hbFZhbHVlXG4gICAgfSk7XG4gIH1cbiAgb25Gb3JtUmVzZXQoKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgIHZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZVxuICAgIH0pO1xuICB9XG4gIHN5bmNIaWRkZW5Gb3JtSW5wdXQoaW5wdXQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlucHV0Lm1pbiA9IHRoaXMubWluPy50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICAgIGlucHV0Lm1heCA9IHRoaXMubWF4Py50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgIGlmICh0aGlzLm1pbkxlbmd0aCAhPSBudWxsKSB7XG4gICAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IHRoaXMubWluTGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldERpc2FibGVkQWN0aW9uKCkge1xuICAgIGNvbnN0IHNsb3R0ZWRBY3Rpb25FbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgXCJhY3Rpb25cIik7XG4gICAgaWYgKCFzbG90dGVkQWN0aW9uRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChzbG90dGVkQWN0aW9uRWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IHRydWU7XG4gICAgICB9XG4gICAgICBzbG90dGVkQWN0aW9uRWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5KSB7XG4gICAgICBzbG90dGVkQWN0aW9uRWwucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgPyAoaXNWYWxpZE51bWJlcih2YWx1ZSkgPyB2YWx1ZSA6IFwiXCIpIDogdmFsdWU7XG4gIH1cbiAgd2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSAmJiAhaXNWYWxpZE51bWJlcih2YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHNwZWNpZmllZCB2YWx1ZSBcIiR7dmFsdWV9XCIgY2Fubm90IGJlIHBhcnNlZCwgb3IgaXMgb3V0IG9mIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgbG9hZGVyID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmxvYWRlciB9LCBoKFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7IGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmxvYWRpbmcsIHR5cGU6IFwiaW5kZXRlcm1pbmF0ZVwiIH0pKSk7XG4gICAgY29uc3QgaW5wdXRDbGVhckJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xlYXIsIGNsYXNzOiBDU1MuY2xlYXJCdXR0b24sIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uQ2xpY2s6IHRoaXMuY2xlYXJJbnB1dFZhbHVlLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgaWNvbkVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmlucHV0SWNvbiwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5yZXF1ZXN0ZWRJY29uLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICBjb25zdCBpc0hvcml6b250YWxOdW1iZXJCdXR0b24gPSB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiO1xuICAgIGNvbnN0IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXAgPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubnVtYmVyQnV0dG9uSXRlbV06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSXRlbUhvcml6b250YWxdOiBpc0hvcml6b250YWxOdW1iZXJCdXR0b25cbiAgICAgIH0sIFwiZGF0YS1hZGp1c3RtZW50XCI6IFwidXBcIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLm51bWJlckJ1dHRvbkl0ZW1dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkl0ZW1Ib3Jpem9udGFsXTogaXNIb3Jpem9udGFsTnVtYmVyQnV0dG9uXG4gICAgICB9LCBcImRhdGEtYWRqdXN0bWVudFwiOiBcImRvd25cIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBjb25zdCBudW1iZXJCdXR0b25zVmVydGljYWwgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubnVtYmVyQnV0dG9uV3JhcHBlciB9LCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwLCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd24pKTtcbiAgICBjb25zdCBwcmVmaXhUZXh0ID0gaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucHJlZml4IH0sIHRoaXMucHJlZml4VGV4dCk7XG4gICAgY29uc3Qgc3VmZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnN1ZmZpeCB9LCB0aGlzLnN1ZmZpeFRleHQpO1xuICAgIGNvbnN0IGxvY2FsZU51bWJlcklucHV0ID0gdGhpcy50eXBlID09PSBcIm51bWJlclwiID8gKGgoXCJpbnB1dFwiLCB7IGFjY2VwdDogdGhpcy5hY2NlcHQsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwga2V5OiBcImxvY2FsaXplZC1pbnB1dFwiLCBtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoLCBtaW5MZW5ndGg6IHRoaXMubWluTGVuZ3RoLCBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZSwgbmFtZTogdW5kZWZpbmVkLCBvbkJsdXI6IHRoaXMuaW5wdXRCbHVySGFuZGxlciwgb25Gb2N1czogdGhpcy5pbnB1dEZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0TnVtYmVyS2V5RG93bkhhbmRsZXIsIG9uS2V5VXA6IHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgXCJcIiwgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5sb2NhbGl6ZWRWYWx1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldENoaWxkTnVtYmVyRWxSZWYgfSkpIDogbnVsbDtcbiAgICBjb25zdCBjaGlsZEVsID0gdGhpcy50eXBlICE9PSBcIm51bWJlclwiXG4gICAgICA/IFtcbiAgICAgICAgaCh0aGlzLmNoaWxkRWxUeXBlLCB7IGFjY2VwdDogdGhpcy5hY2NlcHQsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgY2xhc3M6IHtcbiAgICAgICAgICAgIFtDU1MuZWRpdGluZ0VuYWJsZWRdOiB0aGlzLmVkaXRpbmdFbmFibGVkLFxuICAgICAgICAgICAgW0NTUy5pbmxpbmVDaGlsZF06ICEhdGhpcy5pbmxpbmVFZGl0YWJsZUVsXG4gICAgICAgICAgfSwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwgbWF4OiB0aGlzLm1heFN0cmluZywgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluOiB0aGlzLm1pblN0cmluZywgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGUsIG5hbWU6IHRoaXMubmFtZSwgb25CbHVyOiB0aGlzLmlucHV0Qmx1ckhhbmRsZXIsIG9uQ2hhbmdlOiB0aGlzLmlucHV0Q2hhbmdlSGFuZGxlciwgb25Gb2N1czogdGhpcy5pbnB1dEZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dElucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0S2V5RG93bkhhbmRsZXIsIG9uS2V5VXA6IHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgXCJcIiwgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkID8gdHJ1ZSA6IG51bGwsIHN0ZXA6IHRoaXMuc3RlcCwgdGFiSW5kZXg6IHRoaXMuZGlzYWJsZWQgfHwgKHRoaXMuaW5saW5lRWRpdGFibGVFbCAmJiAhdGhpcy5lZGl0aW5nRW5hYmxlZCkgPyAtMSA6IG51bGwsIHR5cGU6IHRoaXMudHlwZSwgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICAgICAgcmVmOiB0aGlzLnNldENoaWxkRWxSZWYgfSksXG4gICAgICAgIHRoaXMuaXNUZXh0YXJlYSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5yZXNpemVJY29uV3JhcHBlciB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpIDogbnVsbFxuICAgICAgXVxuICAgICAgOiBudWxsO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuY2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuaW5wdXRXcmFwcGVyXTogdHJ1ZSwgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIiB9IH0sIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLnJlYWRPbmx5XG4gICAgICA/IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsRG93blxuICAgICAgOiBudWxsLCB0aGlzLnByZWZpeFRleHQgPyBwcmVmaXhUZXh0IDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1Mud3JhcHBlciB9LCBsb2NhbGVOdW1iZXJJbnB1dCwgY2hpbGRFbCwgdGhpcy5pc0NsZWFyYWJsZSA/IGlucHV0Q2xlYXJCdXR0b24gOiBudWxsLCB0aGlzLnJlcXVlc3RlZEljb24gPyBpY29uRWwgOiBudWxsLCB0aGlzLmxvYWRpbmcgPyBsb2FkZXIgOiBudWxsKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uV3JhcHBlciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbiB9KSksIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwidmVydGljYWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zVmVydGljYWxcbiAgICAgIDogbnVsbCwgdGhpcy5zdWZmaXhUZXh0ID8gc3VmZml4VGV4dCA6IG51bGwsIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLnJlYWRPbmx5XG4gICAgICA/IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXBcbiAgICAgIDogbnVsbCwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRXYXRjaGVyXCJdLFxuICAgIFwibWF4XCI6IFtcIm1heFdhdGNoZXJcIl0sXG4gICAgXCJtaW5cIjogW1wibWluV2F0Y2hlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcImljb25cIjogW1widXBkYXRlUmVxdWVzdGVkSWNvblwiXSxcbiAgICBcInR5cGVcIjogW1widXBkYXRlUmVxdWVzdGVkSWNvblwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbklucHV0LnN0eWxlID0gaW5wdXRDc3M7XG5cbmV4cG9ydCB7IElucHV0IGFzIGNhbGNpdGVfaW5wdXQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=