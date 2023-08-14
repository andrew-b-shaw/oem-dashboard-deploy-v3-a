"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input-text_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-text.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-text.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input_text": () => (/* binding */ InputText)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
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
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper"
};
const SLOTS = {
  action: "action"
};

const inputTextCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const InputText = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalInputTextFocus = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputTextFocus", 7);
    this.calciteInternalInputTextBlur = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputTextBlur", 7);
    this.calciteInputTextInput = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputTextInput", 7);
    this.calciteInputTextChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputTextChange", 7);
    this.previousValueOrigin = "initial";
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.setDisabledAction());
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
        this.clearInputTextValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if ((0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.s)(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputTextValue = (nativeEvent) => {
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputTextChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputTextBlurHandler = () => {
      this.calciteInternalInputTextBlur.emit({
        element: this.childEl,
        value: this.value
      });
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
    this.inputTextFocusHandler = () => {
      this.calciteInternalInputTextFocus.emit({
        element: this.childEl,
        value: this.value
      });
    };
    this.inputTextInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value
      });
    };
    this.inputTextKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
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
    this.setInputValue = (newInputValue) => {
      if (!this.childEl) {
        return;
      }
      this.childEl.value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = value;
    };
    this.setPreviousValue = (value) => {
      this.previousValue = value;
    };
    this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value }) => {
      this.setPreviousValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      this.userChangedValue = origin === "user" && value !== this.value;
      this.value = value;
      if (origin === "direct") {
        this.setInputValue(value);
        this.setPreviousEmittedValue(value);
      }
      if (nativeEvent) {
        const calciteInputTextInputEvent = this.calciteInputTextInput.emit();
        if (calciteInputTextInputEvent.defaultPrevented) {
          this.value = this.previousValue;
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.autocomplete = undefined;
    this.inputMode = "text";
    this.enterKeyHint = undefined;
    this.pattern = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setValue({
        origin: "direct",
        previousValue,
        value: !newValue ? "" : newValue
      });
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)({}, this.icon, "text");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
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
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)({}, this.icon, "text");
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
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
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.childEl?.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    this.childEl?.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    if (this.minLength != null) {
      input.minLength = this.minLength;
    }
    if (this.maxLength != null) {
      input.maxLength = this.maxLength;
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
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const loader = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.loader }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputTextValue, tabIndex: -1, type: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const iconEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }));
    const prefixText = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.suffix }, this.suffixText);
    const childEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
        [CSS.editingEnabled]: this.editingEnabled,
        [CSS.inlineChild]: !!this.inlineEditableEl
      }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, maxLength: this.maxLength, minLength: this.minLength, name: this.name, onBlur: this.inputTextBlurHandler, onFocus: this.inputTextFocusHandler, onInput: this.inputTextInputHandler, onKeyDown: this.inputTextKeyDownHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: "text", value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildElRef }));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.inputWrapper]: true, [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_8__.C.rtl]: dir === "rtl" } }, this.prefixText ? prefixText : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.wrapper }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionWrapper }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.action })), this.suffixText ? suffixText : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
InputText.style = inputTextCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvM2ViNDI5ZTE0MzllMDU3N2I1MjhkZjdmMGFmMDQ4OWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2Q7QUFDdUI7QUFDTTtBQUMzQjtBQUNtQjtBQUM3QjtBQUN6QjtBQUNIO0FBQ2dFO0FBQy9GO0FBQ0c7QUFDSjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMseUVBQXlFLGtCQUFrQixzQkFBc0Isc0NBQXNDLGlCQUFpQix1R0FBdUcsa0JBQWtCLCtCQUErQixzQkFBc0IsdUJBQXVCLHlFQUF5RSxnQkFBZ0IsdUJBQXVCLHNDQUFzQyxpQkFBaUIsdUdBQXVHLGdC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtaW5wdXQtdGV4dC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbG90dGVkLCBlIGFzIHNldFJlcXVlc3RlZEljb24sIGIgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLWQ3MzU5ZWZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsLTlkMmViMzM0LmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgeyBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBsb2FkZXI6IFwibG9hZGVyXCIsXG4gIGNsZWFyQnV0dG9uOiBcImNsZWFyLWJ1dHRvblwiLFxuICBlZGl0aW5nRW5hYmxlZDogXCJlZGl0aW5nLWVuYWJsZWRcIixcbiAgaW5saW5lQ2hpbGQ6IFwiaW5saW5lLWNoaWxkXCIsXG4gIGlucHV0SWNvbjogXCJpY29uXCIsXG4gIHByZWZpeDogXCJwcmVmaXhcIixcbiAgc3VmZml4OiBcInN1ZmZpeFwiLFxuICB3cmFwcGVyOiBcImVsZW1lbnQtd3JhcHBlclwiLFxuICBpbnB1dFdyYXBwZXI6IFwid3JhcHBlclwiLFxuICBhY3Rpb25XcmFwcGVyOiBcImFjdGlvbi13cmFwcGVyXCIsXG4gIHJlc2l6ZUljb25XcmFwcGVyOiBcInJlc2l6ZS1pY29uLXdyYXBwZXJcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb246IFwiYWN0aW9uXCJcbn07XG5cbmNvbnN0IGlucHV0VGV4dENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoW3NjYWxlPXNdKSBpbnB1dCw6aG9zdChbc2NhbGU9c10pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPXNdKSAuc3VmZml4e2Jsb2NrLXNpemU6MS41cmVtO3BhZGRpbmctaW5saW5lOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPXNdKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToxLjVyZW07bWluLWlubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bV0pIGlucHV0LDpob3N0KFtzY2FsZT1tXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bV0pIC5zdWZmaXh7YmxvY2stc2l6ZToycmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1tXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjJyZW07bWluLWlubGluZS1zaXplOjJyZW19Omhvc3QoW3NjYWxlPWxdKSBpbnB1dCw6aG9zdChbc2NhbGU9bF0pIC5wcmVmaXgsOmhvc3QoW3NjYWxlPWxdKSAuc3VmZml4e2Jsb2NrLXNpemU6Mi43NXJlbTtwYWRkaW5nLWlubGluZToxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY2xlYXItYnV0dG9ue21pbi1ibG9jay1zaXplOjIuNzVyZW07bWluLWlubGluZS1zaXplOjIuNzVyZW19Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfWlucHV0e3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYmxvY2stc2l6ZSAwLCBvdXRsaW5lLW9mZnNldCAwczstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWF4LWJsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIDAlO2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dHtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dDo6cGxhY2Vob2xkZXIsOmhvc3QgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLDpob3N0IGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdCBpbnB1dDpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGlucHV0W3JlYWRvbmx5XXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pfTpob3N0IGlucHV0W3JlYWRvbmx5XTpmb2N1c3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX1pbnB1dHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fWlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc3RhdHVzPWludmFsaWRdKSBpbnB1dHtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtzdGF0dXM9aW52YWxpZF0pIGlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc2NhbGU9c10pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDoxcmVtfTpob3N0KFtpY29uXVtzY2FsZT1zXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbX06aG9zdChbaWNvbl1bc2NhbGU9bV0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjIuNXJlbX06aG9zdChbaWNvbl1bc2NhbGU9bF0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjMuNXJlbX0uZWxlbWVudC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO29yZGVyOjM7ZGlzcGxheTppbmxpbmUtZmxleDtmbGV4OjEgMSAwJTthbGlnbi1pdGVtczpjZW50ZXJ9Lmljb257cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2Rpc3BsYXk6YmxvY2s7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9aW5wdXRbdHlwZT10ZXh0XTo6LW1zLWNsZWFyLGlucHV0W3R5cGU9dGV4dF06Oi1tcy1yZXZlYWx7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MHB4O2lubGluZS1zaXplOjBweH0uY2xlYXItYnV0dG9ue3BvaW50ZXItZXZlbnRzOmluaXRpYWw7b3JkZXI6NDttYXJnaW46MHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7bWluLWJsb2NrLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fS5jbGVhci1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jbGVhci1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jbGVhci1idXR0b246YWN0aXZlIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmNsZWFyLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNsZWFyLWJ1dHRvbjpkaXNhYmxlZHtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9LmxvYWRlcntpbnNldC1ibG9jay1zdGFydDoxcHg7aW5zZXQtaW5saW5lOjFweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2t9LmFjdGlvbi13cmFwcGVye29yZGVyOjc7ZGlzcGxheTpmbGV4fS5wcmVmaXgsLnN1ZmZpeHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6YXV0bzttaW4tYmxvY2stc2l6ZToxMDAlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2xpbmUtaGVpZ2h0OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5wcmVmaXh7b3JkZXI6Mjtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHh9LnN1ZmZpeHtvcmRlcjo1O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4fTpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSBpbnB1dHt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgaW5wdXR7dGV4dC1hbGlnbjplbmR9LndyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLm5vLWJvdHRvbS1ib3JkZXIpIGlucHV0e2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fTpob3N0KC5ib3JkZXItdG9wLWNvbG9yLW9uZSkgaW5wdXR7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfS5pbmxpbmUtY2hpbGR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uaW5saW5lLWNoaWxkIC5lZGl0aW5nLWVuYWJsZWR7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fS5pbmxpbmUtY2hpbGQ6bm90KC5lZGl0aW5nLWVuYWJsZWQpe2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgSW5wdXRUZXh0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dFRleHRGb2N1c1wiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEJsdXJcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRUZXh0SW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dFRleHRJbnB1dFwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dFRleHRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dFRleHRDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnNldERpc2FibGVkQWN0aW9uKCkpO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFkT25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ2xlYXJhYmxlICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRUZXh0VmFsdWUoZXZlbnQpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGlmIChzdWJtaXRGb3JtKHRoaXMpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbGVhcklucHV0VGV4dFZhbHVlID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuZW1pdENoYW5nZUlmVXNlck1vZGlmaWVkID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNWYWx1ZU9yaWdpbiA9PT0gXCJ1c2VyXCIgJiYgdGhpcy52YWx1ZSAhPT0gdGhpcy5wcmV2aW91c0VtaXR0ZWRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnB1dFRleHRDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dFRleHRCbHVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRUZXh0Qmx1ci5lbWl0KHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5jaGlsZEVsLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsb3R0ZWRBY3Rpb25FbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgXCJhY3Rpb25cIik7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBzbG90dGVkQWN0aW9uRWwpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dFRleHRGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0VGV4dEZvY3VzLmVtaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmNoaWxkRWwsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaW5wdXRUZXh0SW5wdXRIYW5kbGVyID0gKG5hdGl2ZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBuYXRpdmVFdmVudCxcbiAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgdmFsdWU6IG5hdGl2ZUV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0VGV4dEtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgb3JpZ2luOiBcImRpcmVjdFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldENoaWxkRWxSZWYgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2hpbGRFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlID0gKG5ld0lucHV0VmFsdWUpID0+IHtcbiAgICAgIGlmICghdGhpcy5jaGlsZEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hpbGRFbC52YWx1ZSA9IG5ld0lucHV0VmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzRW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgfTtcbiAgICB0aGlzLnNldFByZXZpb3VzVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5zZXRWYWx1ZSA9ICh7IGNvbW1pdHRpbmcgPSBmYWxzZSwgbmF0aXZlRXZlbnQsIG9yaWdpbiwgcHJldmlvdXNWYWx1ZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlKHByZXZpb3VzVmFsdWUgPz8gdGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPSBvcmlnaW47XG4gICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBvcmlnaW4gPT09IFwidXNlclwiICYmIHZhbHVlICE9PSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKG9yaWdpbiA9PT0gXCJkaXJlY3RcIikge1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYXRpdmVFdmVudCkge1xuICAgICAgICBjb25zdCBjYWxjaXRlSW5wdXRUZXh0SW5wdXRFdmVudCA9IHRoaXMuY2FsY2l0ZUlucHV0VGV4dElucHV0LmVtaXQoKTtcbiAgICAgICAgaWYgKGNhbGNpdGVJbnB1dFRleHRJbnB1dEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmV2aW91c1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1pdHRpbmcpIHtcbiAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFsaWdubWVudCA9IFwic3RhcnRcIjtcbiAgICB0aGlzLmF1dG9mb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbkxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByZWZpeFRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zdGF0dXMgPSBcImlkbGVcIjtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlucHV0TW9kZSA9IFwidGV4dFwiO1xuICAgIHRoaXMuZW50ZXJLZXlIaW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF0dGVybiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN1ZmZpeFRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZGl0aW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gIH1cbiAgZGlzYWJsZWRXYXRjaGVyKCkge1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJDaGFuZ2VkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwiZGlyZWN0XCIsXG4gICAgICAgIHByZXZpb3VzVmFsdWUsXG4gICAgICAgIHZhbHVlOiAhbmV3VmFsdWUgPyBcIlwiIDogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgfVxuICB1cGRhdGVSZXF1ZXN0ZWRJY29uKCkge1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oe30sIHRoaXMuaWNvbiwgXCJ0ZXh0XCIpO1xuICB9XG4gIGdldCBpc0NsZWFyYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcmFibGUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMuaW5saW5lRWRpdGFibGVFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtaW5saW5lLWVkaXRhYmxlXCIpO1xuICAgIGlmICh0aGlzLmlubGluZUVkaXRhYmxlRWwpIHtcbiAgICAgIHRoaXMuZWRpdGluZ0VuYWJsZWQgPSB0aGlzLmlubGluZUVkaXRhYmxlRWwuZWRpdGluZ0VuYWJsZWQgfHwgZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJldmlvdXNFbWl0dGVkVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgdGhpcy5zZXREaXNhYmxlZEFjdGlvbigpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHNldFJlcXVlc3RlZEljb24oe30sIHRoaXMuaWNvbiwgXCJ0ZXh0XCIpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmNoaWxkRWw/LmZvY3VzKCk7XG4gIH1cbiAgLyoqIFNlbGVjdHMgdGhlIHRleHQgb2YgdGhlIGNvbXBvbmVudCdzIGB2YWx1ZWAuICovXG4gIGFzeW5jIHNlbGVjdFRleHQoKSB7XG4gICAgdGhpcy5jaGlsZEVsPy5zZWxlY3QoKTtcbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIG9uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgb3JpZ2luOiBcInJlc2V0XCIsXG4gICAgICB2YWx1ZTogdGhpcy5kZWZhdWx0VmFsdWVcbiAgICB9KTtcbiAgfVxuICBzeW5jSGlkZGVuRm9ybUlucHV0KGlucHV0KSB7XG4gICAgaWYgKHRoaXMubWluTGVuZ3RoICE9IG51bGwpIHtcbiAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IHRoaXMubWluTGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhMZW5ndGggIT0gbnVsbCkge1xuICAgICAgaW5wdXQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XG4gICAgfVxuICB9XG4gIHNldERpc2FibGVkQWN0aW9uKCkge1xuICAgIGNvbnN0IHNsb3R0ZWRBY3Rpb25FbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgXCJhY3Rpb25cIik7XG4gICAgaWYgKCFzbG90dGVkQWN0aW9uRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChzbG90dGVkQWN0aW9uRWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IHRydWU7XG4gICAgICB9XG4gICAgICBzbG90dGVkQWN0aW9uRWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5KSB7XG4gICAgICBzbG90dGVkQWN0aW9uRWwucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgbG9hZGVyID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmxvYWRlciB9LCBoKFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7IGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmxvYWRpbmcsIHR5cGU6IFwiaW5kZXRlcm1pbmF0ZVwiIH0pKSk7XG4gICAgY29uc3QgaW5wdXRDbGVhckJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xlYXIsIGNsYXNzOiBDU1MuY2xlYXJCdXR0b24sIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uQ2xpY2s6IHRoaXMuY2xlYXJJbnB1dFRleHRWYWx1ZSwgdGFiSW5kZXg6IC0xLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcInhcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpO1xuICAgIGNvbnN0IGljb25FbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pbnB1dEljb24sIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwsIGljb246IHRoaXMucmVxdWVzdGVkSWNvbiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSk7XG4gICAgY29uc3QgcHJlZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnByZWZpeCB9LCB0aGlzLnByZWZpeFRleHQpO1xuICAgIGNvbnN0IHN1ZmZpeFRleHQgPSBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5zdWZmaXggfSwgdGhpcy5zdWZmaXhUZXh0KTtcbiAgICBjb25zdCBjaGlsZEVsID0gKGgoXCJpbnB1dFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5lZGl0aW5nRW5hYmxlZF06IHRoaXMuZWRpdGluZ0VuYWJsZWQsXG4gICAgICAgIFtDU1MuaW5saW5lQ2hpbGRdOiAhIXRoaXMuaW5saW5lRWRpdGFibGVFbFxuICAgICAgfSwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbmFtZTogdGhpcy5uYW1lLCBvbkJsdXI6IHRoaXMuaW5wdXRUZXh0Qmx1ckhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuaW5wdXRUZXh0Rm9jdXNIYW5kbGVyLCBvbklucHV0OiB0aGlzLmlucHV0VGV4dElucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0VGV4dEtleURvd25IYW5kbGVyLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IFwiXCIsIHJlYWRPbmx5OiB0aGlzLnJlYWRPbmx5LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCA/IHRydWUgOiBudWxsLCB0YWJJbmRleDogdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5pbmxpbmVFZGl0YWJsZUVsICYmICF0aGlzLmVkaXRpbmdFbmFibGVkKSA/IC0xIDogbnVsbCwgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q2hpbGRFbFJlZiB9KSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5pbnB1dFdyYXBwZXJdOiB0cnVlLCBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiIH0gfSwgdGhpcy5wcmVmaXhUZXh0ID8gcHJlZml4VGV4dCA6IG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLndyYXBwZXIgfSwgY2hpbGRFbCwgdGhpcy5pc0NsZWFyYWJsZSA/IGlucHV0Q2xlYXJCdXR0b24gOiBudWxsLCB0aGlzLnJlcXVlc3RlZEljb24gPyBpY29uRWwgOiBudWxsLCB0aGlzLmxvYWRpbmcgPyBsb2FkZXIgOiBudWxsKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uV3JhcHBlciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbiB9KSksIHRoaXMuc3VmZml4VGV4dCA/IHN1ZmZpeFRleHQgOiBudWxsLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZFdhdGNoZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZVdhdGNoZXJcIl0sXG4gICAgXCJpY29uXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5JbnB1dFRleHQuc3R5bGUgPSBpbnB1dFRleHRDc3M7XG5cbmV4cG9ydCB7IElucHV0VGV4dCBhcyBjYWxjaXRlX2lucHV0X3RleHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==