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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)(INPUT_TYPE_ICONS, this.icon, this.type);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNTZkNGFmNzU3OGI5NmUxNmJmMjZkOTNhY2NkYTBlZjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2U7QUFDTjtBQUNNO0FBQ3hFO0FBQzZDO0FBQ21CO0FBQ29IO0FBQzFLO0FBQ0g7QUFDZ0U7QUFDL0Y7QUFDRzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxjQUFjLHlFQUF5RSxrQkFBa0Isc0JBQXNCLHNDQUFzQyxpQkFBaUIsMEJBQTBCLGtCQUFrQixzQkFBc0IsK0lB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QTJEO0FBQzVWLHlDQUF5QyxxREFBQyxhQUFhO0FBQ3ZEO0FBQ0E7QUFDQSxPQUFPLHNRQUFzUSxFQUFFLHFEQUFDLG1CQUFtQiw2REFBNkQ7QUFDaFcsbUNBQW1DLHFEQUFDLFVBQVUsZ0NBQWdDO0FBQzlFLHVCQUF1QixxREFBQyxVQUFVLG1CQUFtQjtBQUNyRCx1QkFBdUIscURBQUMsVUFBVSxtQkFBbUI7QUFDckQsd0RBQXdELHFEQUFDLFlBQVksbUNBQW1DLHFEQUFZO0FBQ3BIO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRLHFEQUFDLHFCQUFxQixtQ0FBbUMscURBQVk7QUFDN0U7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLG1DQUFtQztBQUNuQywyQkFBMkIscURBQUMsVUFBVSw4QkFBOEIsRUFBRSxxREFBQyxtQkFBbUIsNkRBQTZEO0FBQ3ZKO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQUksSUFBSSw0REFBNEQsRUFBRSxxREFBQyxVQUFVLFNBQVMsMkJBQTJCLHlEQUFlLG9CQUFvQjtBQUN0SztBQUNBLG1EQUFtRCxxREFBQyxVQUFVLG9CQUFvQiw2SUFBNkkscURBQUMsVUFBVSwwQkFBMEIsRUFBRSxxREFBQyxXQUFXLG9CQUFvQjtBQUN0UztBQUNBO0FBQ0E7QUFDQSxjQUFjLHFEQUFDLENBQUMsZ0RBQW1CLElBQUksaUJBQWlCO0FBQ3hEO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWlucHV0LmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNsb3R0ZWQsIGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgZSBhcyBzZXRSZXF1ZXN0ZWRJY29uLCBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBzIGFzIHN1Ym1pdEZvcm0sIGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS1kNzM1OWVmZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlcktleXMgfSBmcm9tICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbC05ZDJlYjMzNC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGkgYXMgaXNWYWxpZE51bWJlciwgcCBhcyBwYXJzZU51bWJlclN0cmluZywgcyBhcyBzYW5pdGl6ZU51bWJlclN0cmluZywgYSBhcyBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCwgQiBhcyBCaWdEZWNpbWFsIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCB7IEMgYXMgQ1NTX1VUSUxJVFkgfSBmcm9tICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBsb2FkZXI6IFwibG9hZGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcImNsZWFyLWJ1dHRvblwiLFxuICBlZGl0aW5nRW5hYmxlZDogXCJlZGl0aW5nLWVuYWJsZWRcIixcbiAgaW5saW5lQ2hpbGQ6IFwiaW5saW5lLWNoaWxkXCIsXG4gIGlucHV0SWNvbjogXCJpY29uXCIsXG4gIHByZWZpeDogXCJwcmVmaXhcIixcbiAgc3VmZml4OiBcInN1ZmZpeFwiLFxuICBudW1iZXJCdXR0b25XcmFwcGVyOiBcIm51bWJlci1idXR0b24td3JhcHBlclwiLFxuICBidXR0b25JdGVtSG9yaXpvbnRhbDogXCJudW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxcIixcbiAgd3JhcHBlcjogXCJlbGVtZW50LXdyYXBwZXJcIixcbiAgaW5wdXRXcmFwcGVyOiBcIndyYXBwZXJcIixcbiAgYWN0aW9uV3JhcHBlcjogXCJhY3Rpb24td3JhcHBlclwiLFxuICByZXNpemVJY29uV3JhcHBlcjogXCJyZXNpemUtaWNvbi13cmFwcGVyXCIsXG4gIG51bWJlckJ1dHRvbkl0ZW06IFwibnVtYmVyLWJ1dHRvbi1pdGVtXCJcbn07XG5jb25zdCBJTlBVVF9UWVBFX0lDT05TID0ge1xuICB0ZWw6IFwicGhvbmVcIixcbiAgcGFzc3dvcmQ6IFwibG9ja1wiLFxuICBlbWFpbDogXCJlbWFpbC1hZGRyZXNzXCIsXG4gIGRhdGU6IFwiY2FsZW5kYXJcIixcbiAgdGltZTogXCJjbG9ja1wiLFxuICBzZWFyY2g6IFwic2VhcmNoXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uOiBcImFjdGlvblwiXG59O1xuXG5jb25zdCBpbnB1dENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoW3NjYWxlPXNdKSBpbnB1dCw6aG9zdChbc2NhbGU9c10pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPXNdKSAuc3VmZml4e2Jsb2NrLXNpemU6MS41cmVtO3BhZGRpbmctaW5saW5lOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSB0ZXh0YXJlYXtibG9jay1zaXplOjEuNXJlbTttaW4tYmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1zXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1zXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIGlucHV0W3R5cGU9ZmlsZV17YmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjEuNXJlbTttaW4taW5saW5lLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgdGV4dGFyZWF7YmxvY2stc2l6ZTphdXRvO3BhZGRpbmctYmxvY2s6MC4yNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgaW5wdXQsOmhvc3QoW3NjYWxlPW1dKSAucHJlZml4LDpob3N0KFtzY2FsZT1tXSkgLnN1ZmZpeHtibG9jay1zaXplOjJyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSB0ZXh0YXJlYXttaW4tYmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9bV0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9bV0pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgaW5wdXRbdHlwZT1maWxlXXtibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjJyZW07bWluLWlubGluZS1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSB0ZXh0YXJlYXtibG9jay1zaXplOmF1dG87cGFkZGluZy1ibG9jazowLjVyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPWxdKSBpbnB1dCw6aG9zdChbc2NhbGU9bF0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPWxdKSAuc3VmZml4e2Jsb2NrLXNpemU6Mi43NXJlbTtwYWRkaW5nLWlubGluZToxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgdGV4dGFyZWF7bWluLWJsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPWxdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPWxdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIGlucHV0W3R5cGU9ZmlsZV17YmxvY2stc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToyLjc1cmVtO21pbi1pbmxpbmUtc2l6ZToyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgdGV4dGFyZWF7YmxvY2stc2l6ZTphdXRvO3BhZGRpbmctYmxvY2s6MC43NXJlbTtwYWRkaW5nLWlubGluZToxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtkaXNhYmxlZF0pIHRleHRhcmVhe3Jlc2l6ZTpub25lfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdCB0ZXh0YXJlYSw6aG9zdCBpbnB1dHt0cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyksIGJsb2NrLXNpemUgMCwgb3V0bGluZS1vZmZzZXQgMHM7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O21heC1ibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTttYXgtaW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSAwJTtib3JkZXItcmFkaXVzOjBweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTpob3N0IGlucHV0LDpob3N0IHRleHRhcmVhe2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGlucHV0OjpwbGFjZWhvbGRlciw6aG9zdCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsOmhvc3QgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyLDpob3N0IHRleHRhcmVhOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdCBpbnB1dDpmb2N1cyw6aG9zdCB0ZXh0YXJlYTpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGlucHV0W3JlYWRvbmx5XSw6aG9zdCB0ZXh0YXJlYVtyZWFkb25seV17YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX06aG9zdCBpbnB1dFtyZWFkb25seV06Zm9jdXMsOmhvc3QgdGV4dGFyZWFbcmVhZG9ubHldOmZvY3Vze2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0IHRleHRhcmVhLDpob3N0IGlucHV0e291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QgdGV4dGFyZWE6Zm9jdXMsOmhvc3QgaW5wdXQ6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtzdGF0dXM9aW52YWxpZF0pIGlucHV0LDpob3N0KFtzdGF0dXM9aW52YWxpZF0pIHRleHRhcmVhe2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgaW5wdXQ6Zm9jdXMsOmhvc3QoW3N0YXR1cz1pbnZhbGlkXSkgdGV4dGFyZWE6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtzY2FsZT1zXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbc2NhbGU9bV0pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmljb257aW5zZXQtaW5saW5lLXN0YXJ0OjFyZW19Omhvc3QoW2ljb25dW3NjYWxlPXNdKSBpbnB1dHtwYWRkaW5nLWlubGluZS1zdGFydDoycmVtfTpob3N0KFtpY29uXVtzY2FsZT1tXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6Mi41cmVtfTpob3N0KFtpY29uXVtzY2FsZT1sXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6My41cmVtfS5lbGVtZW50LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7b3JkZXI6MztkaXNwbGF5OmlubGluZS1mbGV4O2ZsZXg6MSAxIDAlO2FsaWduLWl0ZW1zOmNlbnRlcn0uaWNvbntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9Lmljb24sLnJlc2l6ZS1pY29uLXdyYXBwZXJ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KX1pbnB1dFt0eXBlPXRleHRdOjotbXMtY2xlYXIsaW5wdXRbdHlwZT10ZXh0XTo6LW1zLXJldmVhbHtkaXNwbGF5Om5vbmU7YmxvY2stc2l6ZTowcHg7aW5saW5lLXNpemU6MHB4fWlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24saW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbixpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNsZWFyLWJ1dHRvbixpbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWNsZWFyLWJ1dHRvbntkaXNwbGF5Om5vbmV9LmNsZWFyLWJ1dHRvbntwb2ludGVyLWV2ZW50czppbml0aWFsO29yZGVyOjQ7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O21pbi1ibG9jay1zaXplOjEwMCU7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjBweH0uY2xlYXItYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b246aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uY2xlYXItYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0uY2xlYXItYnV0dG9uOmFjdGl2ZSBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jbGVhci1idXR0b246Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5jbGVhci1idXR0b246ZGlzYWJsZWR7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfS5sb2FkZXJ7aW5zZXQtYmxvY2stc3RhcnQ6MXB4O2luc2V0LWlubGluZToxcHg7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrfS5hY3Rpb24td3JhcHBlcntvcmRlcjo3O2Rpc3BsYXk6ZmxleH0ucHJlZml4LC5zdWZmaXh7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOmF1dG87bWluLWJsb2NrLXNpemU6MTAwJTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtsaW5lLWhlaWdodDoxO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0ucHJlZml4e29yZGVyOjI7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MHB4fS5zdWZmaXh7b3JkZXI6NTtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjBweH06aG9zdChbYWxpZ25tZW50PXN0YXJ0XSkgdGV4dGFyZWEsOmhvc3QoW2FsaWdubWVudD1zdGFydF0pIGlucHV0e3RleHQtYWxpZ246c3RhcnR9Omhvc3QoW2FsaWdubWVudD1lbmRdKSB0ZXh0YXJlYSw6aG9zdChbYWxpZ25tZW50PWVuZF0pIGlucHV0e3RleHQtYWxpZ246ZW5kfTpob3N0IGlucHV0W3R5cGU9bnVtYmVyXXstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkfTpob3N0IGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiw6aG9zdCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDttYXJnaW46MHB4fS5udW1iZXItYnV0dG9uLXdyYXBwZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtvcmRlcjo2O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAud3JhcHBlcntmbGV4LWRpcmVjdGlvbjpyb3c7ZGlzcGxheTpmbGV4fTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSBpbnB1dCw6aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgdGV4dGFyZWF7b3JkZXI6Mn06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPWhvcml6b250YWxdKSAuY2FsY2l0ZS0tcnRsIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT1ob3Jpem9udGFsXSkgLmNhbGNpdGUtLXJ0bCAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF0gY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl0sLm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXXtvcmRlcjoxO21heC1ibG9jay1zaXplOjEwMCU7bWluLWJsb2NrLXNpemU6MTAwJTthbGlnbi1zZWxmOnN0cmV0Y2h9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dIGNhbGNpdGUtaWNvbiwubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl17Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF17b3JkZXI6NX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25de2JvcmRlci1ibG9jay1zdGFydC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbXttYXgtYmxvY2stc2l6ZTo1MCU7bWluLWJsb2NrLXNpemU6NTAlO3BvaW50ZXItZXZlbnRzOmluaXRpYWw7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuNXJlbTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjBweH0ubnVtYmVyLWJ1dHRvbi1pdGVtIGNhbGNpdGUtaWNvbntwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5udW1iZXItYnV0dG9uLWl0ZW06Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Lm51bWJlci1idXR0b24taXRlbTpmb2N1cyBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5udW1iZXItYnV0dG9uLWl0ZW06YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5udW1iZXItYnV0dG9uLWl0ZW06ZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZX0ud3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCBpbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9ye2Rpc3BsYXk6bm9uZX06aG9zdCBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye3Zpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnR9Omhvc3QgdGV4dGFyZWE6Oi13ZWJraXQtcmVzaXplcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1lbmQ6MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjI1cmVtO2luc2V0LWlubGluZS1lbmQ6MH0ucmVzaXplLWljb24td3JhcHBlcntpbnNldC1ibG9jay1lbmQ6MnB4O2luc2V0LWlubGluZS1lbmQ6MnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7YmxvY2stc2l6ZTowLjc1cmVtO2lubGluZS1zaXplOjAuNzVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5yZXNpemUtaWNvbi13cmFwcGVyIGNhbGNpdGUtaWNvbntpbnNldC1ibG9jay1lbmQ6MC4yNXJlbTtpbnNldC1pbmxpbmUtZW5kOjAuMjVyZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5jYWxjaXRlLS1ydGwgLnJlc2l6ZS1pY29uLXdyYXBwZXIgY2FsY2l0ZS1pY29ue3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfTpob3N0KFt0eXBlPWNvbG9yXSkgaW5wdXR7cGFkZGluZzowLjI1cmVtfTpob3N0KFt0eXBlPWZpbGVdKSBpbnB1dHtjdXJzb3I6cG9pbnRlcjtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpkYXNoZWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdChbdHlwZT1maWxlXVtzY2FsZT1zXSkgaW5wdXR7cGFkZGluZy1ibG9jazoxcHg7cGFkZGluZy1pbmxpbmU6MC41cmVtfTpob3N0KFt0eXBlPWZpbGVdW3NjYWxlPW1dKSBpbnB1dHtwYWRkaW5nLWJsb2NrOjAuMjVyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbX06aG9zdChbdHlwZT1maWxlXVtzY2FsZT1sXSkgaW5wdXR7cGFkZGluZy1ibG9jazowLjVyZW07cGFkZGluZy1pbmxpbmU6MXJlbX06aG9zdCgubm8tYm90dG9tLWJvcmRlcikgaW5wdXR7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDowcHh9Omhvc3QoLmJvcmRlci10b3AtY29sb3Itb25lKSBpbnB1dHtib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QgLmlubGluZS1jaGlsZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfTpob3N0IC5pbmxpbmUtY2hpbGQgLmVkaXRpbmctZW5hYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXR9Omhvc3QgLmlubGluZS1jaGlsZDpub3QoLmVkaXRpbmctZW5hYmxlZCl7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmctaW5saW5lLXN0YXJ0OjB9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IElucHV0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXNcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbElucHV0Qmx1clwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dElucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW5wdXRJbnB1dFwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0Q2hhbmdlXCIsIDYpO1xuICAgIC8qKiBrZWVwIHRyYWNrIG9mIHRoZSByZW5kZXJlZCBjaGlsZCB0eXBlICovXG4gICAgdGhpcy5jaGlsZEVsVHlwZSA9IFwiaW5wdXRcIjtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBcImluaXRpYWxcIjtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKSk7XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnJlYWRPbmx5IHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNDbGVhcmFibGUgJiYgZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBpZiAoc3VibWl0Rm9ybSh0aGlzKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZU9yaWdpbiA9PT0gXCJ1c2VyXCIgJiYgdGhpcy52YWx1ZSAhPT0gdGhpcy5wcmV2aW91c0VtaXR0ZWRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnB1dENoYW5nZS5lbWl0KCk7XG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0Qmx1ckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Qmx1ci5lbWl0KCk7XG4gICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsb3R0ZWRBY3Rpb25FbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgXCJhY3Rpb25cIik7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBzbG90dGVkQWN0aW9uRWwpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dEZvY3VzSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRGb2N1cy5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0Q2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmNoaWxkRWwuZmlsZXM7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0SW5wdXRIYW5kbGVyID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgdmFsdWU6IG5hdGl2ZUV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0S2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0TnVtYmVySW5wdXRIYW5kbGVyID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gbmF0aXZlRXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yXG4gICAgICB9O1xuICAgICAgY29uc3QgZGVsb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWxvY2FsaXplKHZhbHVlKTtcbiAgICAgIGlmIChuYXRpdmVFdmVudC5pbnB1dFR5cGUgPT09IFwiaW5zZXJ0RnJvbVBhc3RlXCIpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTnVtYmVyKGRlbG9jYWxpemVkVmFsdWUpKSB7XG4gICAgICAgICAgbmF0aXZlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICAgIHZhbHVlOiBwYXJzZU51bWJlclN0cmluZyhkZWxvY2FsaXplZFZhbHVlKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlID0gdGhpcy5sb2NhbGl6ZWRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICAgIHZhbHVlOiBkZWxvY2FsaXplZFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlICE9PSBcIm51bWJlclwiIHx8IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAvKiBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3Igb2YgbW92aW5nIGN1cnNvciB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBpbnB1dCB3aGVuIGhvbGRpbmcgZG93biBBcnJvd1VwICovXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShcInVwXCIsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoXCJkb3duXCIsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3VwcG9ydGVkS2V5cyA9IFtcbiAgICAgICAgLi4ubnVtYmVyS2V5cyxcbiAgICAgICAgXCJBcnJvd0xlZnRcIixcbiAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgIFwiQmFja3NwYWNlXCIsXG4gICAgICAgIFwiRGVsZXRlXCIsXG4gICAgICAgIFwiRW50ZXJcIixcbiAgICAgICAgXCJFc2NhcGVcIixcbiAgICAgICAgXCJUYWJcIlxuICAgICAgXTtcbiAgICAgIGlmIChldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzU2hpZnRUYWJFdmVudCA9IGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleSA9PT0gXCJUYWJcIjtcbiAgICAgIGlmIChzdXBwb3J0ZWRLZXlzLmluY2x1ZGVzKGV2ZW50LmtleSkgfHwgaXNTaGlmdFRhYkV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yXG4gICAgICB9O1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlY2ltYWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlICYmICF0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlLmluZGV4T2YobnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlY2ltYWwpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKC9bZUVdLy50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlICYmICF0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgJiYgIS9bZUVdLy50ZXN0KHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiLVwiKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZS5zcGxpdChcIi1cIikubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUgPSAoZGlyZWN0aW9uLCBuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKChuYXRpdmVFdmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQgJiYgbmF0aXZlRXZlbnQucmVwZWF0KSB8fCB0aGlzLnR5cGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5wdXRNYXggPSB0aGlzLm1heFN0cmluZyA/IHBhcnNlRmxvYXQodGhpcy5tYXhTdHJpbmcpIDogbnVsbDtcbiAgICAgIGNvbnN0IGlucHV0TWluID0gdGhpcy5taW5TdHJpbmcgPyBwYXJzZUZsb2F0KHRoaXMubWluU3RyaW5nKSA6IG51bGw7XG4gICAgICBjb25zdCB2YWx1ZU51ZGdlRGVsYXlJbk1zID0gMTUwO1xuICAgICAgdGhpcy5pbmNyZW1lbnRPckRlY3JlbWVudE51bWJlclZhbHVlKGRpcmVjdGlvbiwgaW5wdXRNYXgsIGlucHV0TWluLCBuYXRpdmVFdmVudCk7XG4gICAgICBpZiAodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICAgIH1cbiAgICAgIGxldCBmaXJzdFZhbHVlTnVkZ2UgPSB0cnVlO1xuICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChmaXJzdFZhbHVlTnVkZ2UpIHtcbiAgICAgICAgICBmaXJzdFZhbHVlTnVkZ2UgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmNyZW1lbnRPckRlY3JlbWVudE51bWJlclZhbHVlKGRpcmVjdGlvbiwgaW5wdXRNYXgsIGlucHV0TWluLCBuYXRpdmVFdmVudCk7XG4gICAgICB9LCB2YWx1ZU51ZGdlRGVsYXlJbk1zKTtcbiAgICB9O1xuICAgIHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgIH07XG4gICAgdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmFkanVzdG1lbnQ7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlKGRpcmVjdGlvbiwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgb3JpZ2luOiBcImRpcmVjdFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldENoaWxkRWxSZWYgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRDaGlsZE51bWJlckVsUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSA9IChuZXdJbnB1dFZhbHVlKSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcInRleHRcIiAmJiAhdGhpcy5jaGlsZEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgIXRoaXMuY2hpbGROdW1iZXJFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzW2BjaGlsZCR7dGhpcy50eXBlID09PSBcIm51bWJlclwiID8gXCJOdW1iZXJcIiA6IFwiXCJ9RWxgXS52YWx1ZSA9IG5ld0lucHV0VmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzRW1pdHRlZFZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldFByZXZpb3VzVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5zZXRWYWx1ZSA9ICh7IGNvbW1pdHRpbmcgPSBmYWxzZSwgbmF0aXZlRXZlbnQsIG9yaWdpbiwgcHJldmlvdXNWYWx1ZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlKHByZXZpb3VzVmFsdWUgPz8gdGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBvcmlnaW47XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvcixcbiAgICAgICAgICBzaWduRGlzcGxheTogXCJuZXZlclwiXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNhbml0aXplZFZhbHVlID0gc2FuaXRpemVOdW1iZXJTdHJpbmcoXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gZGVsb2NhbGl6ZSBhIHN0cmluZyB0aGF0IGlhIGFscmVhZHkgaW4gbGF0biBudW1lcmFsc1xuICAgICAgICAodGhpcy5udW1iZXJpbmdTeXN0ZW0gJiYgdGhpcy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB8fFxuICAgICAgICAgIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiXG4gICAgICAgICAgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZSh2YWx1ZSlcbiAgICAgICAgICA6IHZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSAmJiAhc2FuaXRpemVkVmFsdWVcbiAgICAgICAgICA/IGlzVmFsaWROdW1iZXIodGhpcy5wcmV2aW91c1ZhbHVlKVxuICAgICAgICAgICAgPyB0aGlzLnByZXZpb3VzVmFsdWVcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIDogc2FuaXRpemVkVmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0xvY2FsaXplZFZhbHVlID0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9IG5ld0xvY2FsaXplZFZhbHVlO1xuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBvcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgICAvLyBkb24ndCBzYW5pdGl6ZSB0aGUgc3RhcnQgb2YgbmVnYXRpdmUvZGVjaW1hbCBudW1iZXJzLCBidXRcbiAgICAgICAgLy8gZG9uJ3Qgc2V0IHZhbHVlIHRvIGFuIGludmFsaWQgbnVtYmVyXG4gICAgICAgIHRoaXMudmFsdWUgPSBbXCItXCIsIFwiLlwiXS5pbmNsdWRlcyhuZXdWYWx1ZSkgPyBcIlwiIDogbmV3VmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gb3JpZ2luID09PSBcInVzZXJcIiAmJiB0aGlzLnZhbHVlICE9PSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKG9yaWdpbiA9PT0gXCJkaXJlY3RcIikge1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLnByZXZpb3VzRW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAobmF0aXZlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2FsY2l0ZUlucHV0SW5wdXRFdmVudCA9IHRoaXMuY2FsY2l0ZUlucHV0SW5wdXQuZW1pdCgpO1xuICAgICAgICBpZiAoY2FsY2l0ZUlucHV0SW5wdXRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucHJldmlvdXNWYWx1ZTtcbiAgICAgICAgICB0aGlzLmxvY2FsaXplZFZhbHVlID1cbiAgICAgICAgICAgIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICA/IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZSh0aGlzLnByZXZpb3VzVmFsdWUpXG4gICAgICAgICAgICAgIDogdGhpcy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1pdHRpbmcpIHtcbiAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlucHV0S2V5VXBIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgfTtcbiAgICB0aGlzLmFsaWdubWVudCA9IFwic3RhcnRcIjtcbiAgICB0aGlzLmF1dG9mb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdyb3VwU2VwYXJhdG9yID0gZmFsc2U7XG4gICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLmljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGVGb3JtYXQgPSBmYWxzZTtcbiAgICB0aGlzLm1heCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbkxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJCdXR0b25UeXBlID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmVmaXhUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc3RhdHVzID0gXCJpZGxlXCI7XG4gICAgdGhpcy5zdGVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0dGVybiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjY2VwdCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dE1vZGUgPSBcInRleHRcIjtcbiAgICB0aGlzLmVudGVyS2V5SGludCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN1ZmZpeFRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IFwidGV4dFwiO1xuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuZmlsZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkgPSBmYWxzZTtcbiAgfVxuICBkaXNhYmxlZFdhdGNoZXIoKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpO1xuICB9XG4gIC8qKiB3YXRjaGVyIHRvIHVwZGF0ZSBudW1iZXItdG8tc3RyaW5nIGZvciBtYXggKi9cbiAgbWF4V2F0Y2hlcigpIHtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpIHx8IG51bGw7XG4gIH1cbiAgLyoqIHdhdGNoZXIgdG8gdXBkYXRlIG51bWJlci10by1zdHJpbmcgZm9yIG1pbiAqL1xuICBtaW5XYXRjaGVyKCkge1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCkgfHwgbnVsbDtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCIsXG4gICAgICAgIHByZXZpb3VzVmFsdWUsXG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09IFwiXCJcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgPyBpc1ZhbGlkTnVtYmVyKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICA/IG5ld1ZhbHVlXG4gICAgICAgICAgICAgIDogdGhpcy5wcmV2aW91c1ZhbHVlIHx8IFwiXCJcbiAgICAgICAgICAgIDogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy53YXJuQWJvdXRJbnZhbGlkTnVtYmVyVmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgfVxuICB1cGRhdGVSZXF1ZXN0ZWRJY29uKCkge1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oSU5QVVRfVFlQRV9JQ09OUywgdGhpcy5pY29uLCB0aGlzLnR5cGUpO1xuICB9XG4gIGdldCBpc0NsZWFyYWJsZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNUZXh0YXJlYSAmJiAodGhpcy5jbGVhcmFibGUgfHwgdGhpcy50eXBlID09PSBcInNlYXJjaFwiKSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XG4gIH1cbiAgZ2V0IGlzVGV4dGFyZWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbFR5cGUgPT09IFwidGV4dGFyZWFcIjtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLmlubGluZUVkaXRhYmxlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLWlubGluZS1lZGl0YWJsZVwiKTtcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0YWJsZUVsKSB7XG4gICAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gdGhpcy5pbmxpbmVFZGl0YWJsZUVsLmVkaXRpbmdFbmFibGVkIHx8IGZhbHNlO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnNldFByZXZpb3VzVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy53YXJuQWJvdXRJbnZhbGlkTnVtYmVyVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgb3JpZ2luOiBcImNvbm5lY3RlZFwiLFxuICAgICAgICB2YWx1ZTogaXNWYWxpZE51bWJlcih0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiBcIlwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLmNoaWxkRWxUeXBlID0gdGhpcy50eXBlID09PSBcInRleHRhcmVhXCIgPyBcInRleHRhcmVhXCIgOiBcImlucHV0XCI7XG4gICAgdGhpcy5tYXhTdHJpbmcgPSB0aGlzLm1heD8udG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pblN0cmluZyA9IHRoaXMubWluPy50b1N0cmluZygpO1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oSU5QVVRfVFlQRV9JQ09OUywgdGhpcy5pY29uLCB0aGlzLnR5cGUpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50U2hvdWxkVXBkYXRlKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiICYmIHByb3BlcnR5ID09PSBcInZhbHVlXCIgJiYgbmV3VmFsdWUgJiYgIWlzVmFsaWROdW1iZXIobmV3VmFsdWUpKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgb3JpZ2luOiBcInJlc2V0XCIsXG4gICAgICAgIHZhbHVlOiBvbGRWYWx1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsPy5mb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hpbGRFbD8uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLyoqIFNlbGVjdHMgdGhlIHRleHQgb2YgdGhlIGNvbXBvbmVudCdzIGB2YWx1ZWAuICovXG4gIGFzeW5jIHNlbGVjdFRleHQoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsPy5zZWxlY3QoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoaWxkRWw/LnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuICAvLyBUT0RPOiByZWZhY3RvciBzbyB3ZSBkb24ndCBuZWVkIHRvIHN5bmMgdGhlIGludGVybmFscyBpbiBjb2xvci1waWNrZXJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2lzc3Vlcy82MTAwXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgaW50ZXJuYWxTeW5jQ2hpbGRFbFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGlsZEVsLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBpbmNyZW1lbnRPckRlY3JlbWVudE51bWJlclZhbHVlKGRpcmVjdGlvbiwgaW5wdXRNYXgsIGlucHV0TWluLCBuYXRpdmVFdmVudCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXM7XG4gICAgY29uc3QgYWRqdXN0bWVudCA9IGRpcmVjdGlvbiA9PT0gXCJ1cFwiID8gMSA6IC0xO1xuICAgIGNvbnN0IGlucHV0U3RlcCA9IHRoaXMuc3RlcCA9PT0gXCJhbnlcIiA/IDEgOiBNYXRoLmFicyh0aGlzLnN0ZXAgfHwgMSk7XG4gICAgY29uc3QgaW5wdXRWYWwgPSBuZXcgQmlnRGVjaW1hbCh2YWx1ZSAhPT0gXCJcIiA/IHZhbHVlIDogXCIwXCIpO1xuICAgIGNvbnN0IG51ZGdlZFZhbHVlID0gaW5wdXRWYWwuYWRkKGAke2lucHV0U3RlcCAqIGFkanVzdG1lbnR9YCk7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWVCZWxvd0lucHV0TWluID0gKCkgPT4gdHlwZW9mIGlucHV0TWluID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4oaW5wdXRNaW4pICYmXG4gICAgICBudWRnZWRWYWx1ZS5zdWJ0cmFjdChgJHtpbnB1dE1pbn1gKS5pc05lZ2F0aXZlO1xuICAgIGNvbnN0IG51ZGdlZFZhbHVlQWJvdmVJbnB1dE1heCA9ICgpID0+IHR5cGVvZiBpbnB1dE1heCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgIWlzTmFOKGlucHV0TWF4KSAmJlxuICAgICAgIW51ZGdlZFZhbHVlLnN1YnRyYWN0KGAke2lucHV0TWF4fWApLmlzTmVnYXRpdmU7XG4gICAgY29uc3QgZmluYWxWYWx1ZSA9IG51ZGdlZFZhbHVlQmVsb3dJbnB1dE1pbigpXG4gICAgICA/IGAke2lucHV0TWlufWBcbiAgICAgIDogbnVkZ2VkVmFsdWVBYm92ZUlucHV0TWF4KClcbiAgICAgICAgPyBgJHtpbnB1dE1heH1gXG4gICAgICAgIDogbnVkZ2VkVmFsdWUudG9TdHJpbmcoKTtcbiAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgIGNvbW1pdHRpbmc6IHRydWUsXG4gICAgICBuYXRpdmVFdmVudCxcbiAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICB2YWx1ZTogZmluYWxWYWx1ZVxuICAgIH0pO1xuICB9XG4gIG9uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgb3JpZ2luOiBcInJlc2V0XCIsXG4gICAgICB2YWx1ZTogdGhpcy5kZWZhdWx0VmFsdWVcbiAgICB9KTtcbiAgfVxuICBzeW5jSGlkZGVuRm9ybUlucHV0KGlucHV0KSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzO1xuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpbnB1dC5taW4gPSB0aGlzLm1pbj8udG9TdHJpbmcoMTApID8/IFwiXCI7XG4gICAgICBpbnB1dC5tYXggPSB0aGlzLm1heD8udG9TdHJpbmcoMTApID8/IFwiXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICBpZiAodGhpcy5taW5MZW5ndGggIT0gbnVsbCkge1xuICAgICAgICBpbnB1dC5taW5MZW5ndGggPSB0aGlzLm1pbkxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1heExlbmd0aCAhPSBudWxsKSB7XG4gICAgICAgIGlucHV0Lm1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXREaXNhYmxlZEFjdGlvbigpIHtcbiAgICBjb25zdCBzbG90dGVkQWN0aW9uRWwgPSBnZXRTbG90dGVkKHRoaXMuZWwsIFwiYWN0aW9uXCIpO1xuICAgIGlmICghc2xvdHRlZEFjdGlvbkVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoc2xvdHRlZEFjdGlvbkVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgc2xvdHRlZEFjdGlvbkVsLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSkge1xuICAgICAgc2xvdHRlZEFjdGlvbkVsLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgdGhpcy5zbG90dGVkQWN0aW9uRWxEaXNhYmxlZEludGVybmFsbHkgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBcIm51bWJlclwiID8gKGlzVmFsaWROdW1iZXIodmFsdWUpID8gdmFsdWUgOiBcIlwiKSA6IHZhbHVlO1xuICB9XG4gIHdhcm5BYm91dEludmFsaWROdW1iZXJWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgJiYgIWlzVmFsaWROdW1iZXIodmFsdWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBzcGVjaWZpZWQgdmFsdWUgXCIke3ZhbHVlfVwiIGNhbm5vdCBiZSBwYXJzZWQsIG9yIGlzIG91dCBvZiByYW5nZS5gKTtcbiAgICB9XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IGxvYWRlciA9IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5sb2FkZXIgfSwgaChcImNhbGNpdGUtcHJvZ3Jlc3NcIiwgeyBsYWJlbDogdGhpcy5tZXNzYWdlcy5sb2FkaW5nLCB0eXBlOiBcImluZGV0ZXJtaW5hdGVcIiB9KSkpO1xuICAgIGNvbnN0IGlucHV0Q2xlYXJCdXR0b24gPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmNsZWFyLCBjbGFzczogQ1NTLmNsZWFyQnV0dG9uLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5LCBvbkNsaWNrOiB0aGlzLmNsZWFySW5wdXRWYWx1ZSwgdGFiSW5kZXg6IC0xLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcInhcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpO1xuICAgIGNvbnN0IGljb25FbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pbnB1dEljb24sIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwsIGljb246IHRoaXMucmVxdWVzdGVkSWNvbiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSk7XG4gICAgY29uc3QgaXNIb3Jpem9udGFsTnVtYmVyQnV0dG9uID0gdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIjtcbiAgICBjb25zdCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLm51bWJlckJ1dHRvbkl0ZW1dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkl0ZW1Ib3Jpem9udGFsXTogaXNIb3Jpem9udGFsTnVtYmVyQnV0dG9uXG4gICAgICB9LCBcImRhdGEtYWRqdXN0bWVudFwiOiBcInVwXCIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uUG9pbnRlckRvd246IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyLCBvblBvaW50ZXJPdXQ6IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgb25Qb2ludGVyVXA6IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgdGFiSW5kZXg6IC0xLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tdXBcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpO1xuICAgIGNvbnN0IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsRG93biA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5udW1iZXJCdXR0b25JdGVtXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25JdGVtSG9yaXpvbnRhbF06IGlzSG9yaXpvbnRhbE51bWJlckJ1dHRvblxuICAgICAgfSwgXCJkYXRhLWFkanVzdG1lbnRcIjogXCJkb3duXCIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uUG9pbnRlckRvd246IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyLCBvblBvaW50ZXJPdXQ6IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgb25Qb2ludGVyVXA6IHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlclVwQW5kT3V0SGFuZGxlciwgdGFiSW5kZXg6IC0xLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc1ZlcnRpY2FsID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLm51bWJlckJ1dHRvbldyYXBwZXIgfSwgbnVtYmVyQnV0dG9uc0hvcml6b250YWxVcCwgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duKSk7XG4gICAgY29uc3QgcHJlZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnByZWZpeCB9LCB0aGlzLnByZWZpeFRleHQpO1xuICAgIGNvbnN0IHN1ZmZpeFRleHQgPSBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zdWZmaXggfSwgdGhpcy5zdWZmaXhUZXh0KTtcbiAgICBjb25zdCBsb2NhbGVOdW1iZXJJbnB1dCA9IHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiA/IChoKFwiaW5wdXRcIiwgeyBhY2NlcHQ6IHRoaXMuYWNjZXB0LCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBhdXRvY29tcGxldGU6IHRoaXMuYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzID8gdHJ1ZSA6IG51bGwsIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwsIGVudGVyS2V5SGludDogdGhpcy5lbnRlcktleUhpbnQsIGlucHV0TW9kZTogdGhpcy5pbnB1dE1vZGUsIGtleTogXCJsb2NhbGl6ZWQtaW5wdXRcIiwgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGUsIG5hbWU6IHVuZGVmaW5lZCwgb25CbHVyOiB0aGlzLmlucHV0Qmx1ckhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuaW5wdXRGb2N1c0hhbmRsZXIsIG9uSW5wdXQ6IHRoaXMuaW5wdXROdW1iZXJJbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5pbnB1dE51bWJlcktleURvd25IYW5kbGVyLCBvbktleVVwOiB0aGlzLmlucHV0S2V5VXBIYW5kbGVyLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IFwiXCIsIHJlYWRPbmx5OiB0aGlzLnJlYWRPbmx5LCB0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMubG9jYWxpemVkVmFsdWUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRDaGlsZE51bWJlckVsUmVmIH0pKSA6IG51bGw7XG4gICAgY29uc3QgY2hpbGRFbCA9IHRoaXMudHlwZSAhPT0gXCJudW1iZXJcIlxuICAgICAgPyBbXG4gICAgICAgIGgodGhpcy5jaGlsZEVsVHlwZSwgeyBhY2NlcHQ6IHRoaXMuYWNjZXB0LCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBhdXRvY29tcGxldGU6IHRoaXMuYXV0b2NvbXBsZXRlLCBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzID8gdHJ1ZSA6IG51bGwsIGNsYXNzOiB7XG4gICAgICAgICAgICBbQ1NTLmVkaXRpbmdFbmFibGVkXTogdGhpcy5lZGl0aW5nRW5hYmxlZCxcbiAgICAgICAgICAgIFtDU1MuaW5saW5lQ2hpbGRdOiAhIXRoaXMuaW5saW5lRWRpdGFibGVFbFxuICAgICAgICAgIH0sIGRlZmF1bHRWYWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkID8gdHJ1ZSA6IG51bGwsIGVudGVyS2V5SGludDogdGhpcy5lbnRlcktleUhpbnQsIGlucHV0TW9kZTogdGhpcy5pbnB1dE1vZGUsIG1heDogdGhpcy5tYXhTdHJpbmcsIG1heExlbmd0aDogdGhpcy5tYXhMZW5ndGgsIG1pbjogdGhpcy5taW5TdHJpbmcsIG1pbkxlbmd0aDogdGhpcy5taW5MZW5ndGgsIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlLCBuYW1lOiB0aGlzLm5hbWUsIG9uQmx1cjogdGhpcy5pbnB1dEJsdXJIYW5kbGVyLCBvbkNoYW5nZTogdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuaW5wdXRGb2N1c0hhbmRsZXIsIG9uSW5wdXQ6IHRoaXMuaW5wdXRJbnB1dEhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5pbnB1dEtleURvd25IYW5kbGVyLCBvbktleVVwOiB0aGlzLmlucHV0S2V5VXBIYW5kbGVyLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IFwiXCIsIHJlYWRPbmx5OiB0aGlzLnJlYWRPbmx5LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCA/IHRydWUgOiBudWxsLCBzdGVwOiB0aGlzLnN0ZXAsIHRhYkluZGV4OiB0aGlzLmRpc2FibGVkIHx8ICh0aGlzLmlubGluZUVkaXRhYmxlRWwgJiYgIXRoaXMuZWRpdGluZ0VuYWJsZWQpID8gLTEgOiBudWxsLCB0eXBlOiB0aGlzLnR5cGUsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgICAgIHJlZjogdGhpcy5zZXRDaGlsZEVsUmVmIH0pLFxuICAgICAgICB0aGlzLmlzVGV4dGFyZWEgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucmVzaXplSWNvbldyYXBwZXIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKSA6IG51bGxcbiAgICAgIF1cbiAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmlucHV0V3JhcHBlcl06IHRydWUsIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIgfSB9LCB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd25cbiAgICAgIDogbnVsbCwgdGhpcy5wcmVmaXhUZXh0ID8gcHJlZml4VGV4dCA6IG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLndyYXBwZXIgfSwgbG9jYWxlTnVtYmVySW5wdXQsIGNoaWxkRWwsIHRoaXMuaXNDbGVhcmFibGUgPyBpbnB1dENsZWFyQnV0dG9uIDogbnVsbCwgdGhpcy5yZXF1ZXN0ZWRJY29uID8gaWNvbkVsIDogbnVsbCwgdGhpcy5sb2FkaW5nID8gbG9hZGVyIDogbnVsbCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbldyYXBwZXIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb24gfSkpLCB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcInZlcnRpY2FsXCIgJiYgIXRoaXMucmVhZE9ubHlcbiAgICAgID8gbnVtYmVyQnV0dG9uc1ZlcnRpY2FsXG4gICAgICA6IG51bGwsIHRoaXMuc3VmZml4VGV4dCA/IHN1ZmZpeFRleHQgOiBudWxsLCB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgdGhpcy5udW1iZXJCdXR0b25UeXBlID09PSBcImhvcml6b250YWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwXG4gICAgICA6IG51bGwsIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkV2F0Y2hlclwiXSxcbiAgICBcIm1heFwiOiBbXCJtYXhXYXRjaGVyXCJdLFxuICAgIFwibWluXCI6IFtcIm1pbldhdGNoZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZVdhdGNoZXJcIl0sXG4gICAgXCJpY29uXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJ0eXBlXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5JbnB1dC5zdHlsZSA9IGlucHV0Q3NzO1xuXG5leHBvcnQgeyBJbnB1dCBhcyBjYWxjaXRlX2lucHV0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=