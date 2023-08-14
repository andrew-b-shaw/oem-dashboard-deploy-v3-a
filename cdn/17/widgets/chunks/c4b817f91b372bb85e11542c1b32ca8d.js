"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-text-area_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-text-area.entry.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-text-area.entry.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_text_area": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _throttle_b7008174_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./throttle-b7008174.js */ "./node_modules/@esri/calcite-components/dist/esm/throttle-b7008174.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
















const CSS = {
  characterLimit: "character-limit",
  content: "content",
  container: "container",
  footer: "footer",
  resizeDisabled: "resize--disabled",
  resizeDisabledX: "resize--disabled-x",
  resizeDisabledY: "resize--disabled-y",
  characterOverLimit: "character--over-limit",
  readOnly: "readonly",
  textAreaInvalid: "text-area--invalid",
  footerSlotted: "footer--slotted",
  borderColor: "border--color",
  hide: "hide",
  blockSizeFull: "block-size--full",
  footerEndSlotOnly: "footer--end-only"
};
const SLOTS = {
  footerStart: "footer-start",
  footerEnd: "footer-end"
};
const RESIZE_TIMEOUT = 100;

const textAreaCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);color:var(--calcite-ui-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-ui-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}.readonly{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-ui-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

const TextArea = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTextAreaInput = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTextAreaInput", 7);
    this.calciteTextAreaChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTextAreaChange", 7);
    this.handleInput = (event) => {
      this.value = event.target["value"];
      this.calciteTextAreaInput.emit();
    };
    this.handleChange = () => {
      this.calciteTextAreaChange.emit();
    };
    this.contentSlotChangeHandler = () => {
      if (!this.value) {
        const nodes = this.el.childNodes;
        nodes.forEach((el) => {
          if (el.nodeName === "#text") {
            this.value = el.nodeValue.trim();
          }
        });
      }
    };
    this.renderCharacterLimit = () => {
      return this.maxLength ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.characterLimit }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: { [CSS.characterOverLimit]: this.value?.length > this.maxLength } }, this.getLocalizedCharacterLength()), "/", _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.n.localize(this.maxLength.toString()))) : null;
    };
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__.c)("resize", async () => {
      await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
      const { textAreaHeight, textAreaWidth, elHeight, elWidth, footerHeight, footerWidth } = this.getHeightandWidthOfElements();
      if (footerWidth > 0 && footerWidth !== textAreaWidth) {
        this.footerEl.style.width = `${textAreaWidth}px`;
      }
      if (elWidth !== textAreaWidth || elHeight !== textAreaHeight + (footerHeight || 0)) {
        this.setHeightAndWidthToAuto();
      }
    });
    // height and width are set to auto here to avoid overlapping on to neighboring elements in the layout when user starts resizing.
    // throttle is used to avoid flashing of textarea when user resizes.
    this.setHeightAndWidthToAuto = (0,_throttle_b7008174_js__WEBPACK_IMPORTED_MODULE_9__.t)(() => {
      if (this.resize === "vertical" || this.resize === "both") {
        this.el.style.height = "auto";
      }
      if (this.resize === "horizontal" || this.resize === "both") {
        this.el.style.width = "auto";
      }
    }, RESIZE_TIMEOUT, { leading: false });
    this.setTextAreaEl = (el) => {
      this.textAreaEl = el;
      this.resizeObserver.observe(el);
    };
    this.autofocus = false;
    this.columns = undefined;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.label = undefined;
    this.maxLength = undefined;
    this.messages = undefined;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.placeholder = undefined;
    this.readOnly = false;
    this.required = false;
    this.resize = "both";
    this.rows = undefined;
    this.scale = "m";
    this.value = undefined;
    this.wrap = "soft";
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.endSlotHasElements = undefined;
    this.startSlotHasElements = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_8__.u)(this);
    this.setTextAreaHeight();
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.resizeObserver?.disconnect();
  }
  render() {
    const hasFooter = this.startSlotHasElements || this.endSlotHasElements || !!this.maxLength;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { "aria-invalid": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.t)(this.value?.length > this.maxLength), "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_2__.g)(this), autofocus: this.autofocus, class: {
        [CSS.readOnly]: this.readOnly,
        [CSS.textAreaInvalid]: this.value?.length > this.maxLength,
        [CSS.footerSlotted]: this.endSlotHasElements && this.startSlotHasElements,
        [CSS.blockSizeFull]: !hasFooter,
        [CSS.borderColor]: !hasFooter
      }, cols: this.columns, disabled: this.disabled, name: this.name, onChange: this.handleChange, onInput: this.handleInput, placeholder: this.placeholder, readonly: this.readOnly, required: this.required, rows: this.rows, value: this.value, wrap: this.wrap,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTextAreaEl }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: { [CSS.content]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.contentSlotChangeHandler })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", { class: {
        [CSS.footer]: true,
        [CSS.readOnly]: this.readOnly,
        [CSS.hide]: !hasFooter
      }, ref: (el) => (this.footerEl = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.footerEndSlotOnly]: !this.startSlotHasElements && this.endSlotHasElements
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.footerStart, onSlotchange: (event) => (this.startSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.d)(event)) }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.footerEnd, onSlotchange: (event) => (this.endSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.d)(event)) })), this.renderCharacterLimit()), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this })));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.textAreaEl.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.textAreaEl.select();
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onFormReset() {
    this.value = this.defaultValue;
  }
  onLabelClick() {
    this.setFocus();
  }
  getLocalizedCharacterLength() {
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      signDisplay: "never",
      useGrouping: this.groupSeparator
    };
    return _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.n.localize(this.value ? this.value.length.toString() : "0");
  }
  syncHiddenFormInput(input) {
    input.setCustomValidity("");
    if (this.value?.length > this.maxLength) {
      input.setCustomValidity(this.messages.tooLong);
    }
  }
  setTextAreaHeight() {
    const { textAreaHeight, elHeight, footerHeight } = this.getHeightandWidthOfElements();
    if (footerHeight > 0 && textAreaHeight + footerHeight != elHeight) {
      this.textAreaEl.style.height = `${elHeight - footerHeight}px`;
    }
  }
  getHeightandWidthOfElements() {
    const { height: textAreaHeight, width: textAreaWidth } = this.textAreaEl.getBoundingClientRect();
    const { height: elHeight, width: elWidth } = this.el.getBoundingClientRect();
    const { height: footerHeight, width: footerWidth } = this.footerEl?.getBoundingClientRect();
    return {
      textAreaHeight,
      textAreaWidth,
      elHeight,
      elWidth,
      footerHeight,
      footerWidth
    };
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
TextArea.style = textAreaCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/throttle-b7008174.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/throttle-b7008174.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_0__.i)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_0__.d)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzRiODE3ZjkxYjM3MmJiODVlMTE1NDJjMWIzMmNhOGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDUjtBQUNKO0FBQ1A7QUFDeUI7QUFDckQ7QUFDc0Q7QUFDTztBQUNDO0FBQ3JFO0FBQzNCO0FBQ0s7QUFDTjtBQUNJO0FBQ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxrQkFBa0IscUJBQXFCLGdCQUFnQixpQkFBaUIsU0FBUyxrQkFBa0IsV0FBVyxzQkFBc0IsY0FBYyxpQkFBaUIsaUJBQWlCLDRDQUE0Qyxn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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsV0FBVztBQUM5QixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFVBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG1CQUFtQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdEQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLXRleHQtYXJlYS5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS90aHJvdHRsZS1iNzAwODE3NC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLWQ3MzU5ZWZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsLTlkMmViMzM0LmpzJztcbmltcG9ydCB7IGQgYXMgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUgfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IHQgYXMgdGhyb3R0bGUgfSBmcm9tICcuL3Rocm90dGxlLWI3MDA4MTc0LmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgJy4vZGVib3VuY2UtMDk1MGE5YjguanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNoYXJhY3RlckxpbWl0OiBcImNoYXJhY3Rlci1saW1pdFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIHJlc2l6ZURpc2FibGVkOiBcInJlc2l6ZS0tZGlzYWJsZWRcIixcbiAgcmVzaXplRGlzYWJsZWRYOiBcInJlc2l6ZS0tZGlzYWJsZWQteFwiLFxuICByZXNpemVEaXNhYmxlZFk6IFwicmVzaXplLS1kaXNhYmxlZC15XCIsXG4gIGNoYXJhY3Rlck92ZXJMaW1pdDogXCJjaGFyYWN0ZXItLW92ZXItbGltaXRcIixcbiAgcmVhZE9ubHk6IFwicmVhZG9ubHlcIixcbiAgdGV4dEFyZWFJbnZhbGlkOiBcInRleHQtYXJlYS0taW52YWxpZFwiLFxuICBmb290ZXJTbG90dGVkOiBcImZvb3Rlci0tc2xvdHRlZFwiLFxuICBib3JkZXJDb2xvcjogXCJib3JkZXItLWNvbG9yXCIsXG4gIGhpZGU6IFwiaGlkZVwiLFxuICBibG9ja1NpemVGdWxsOiBcImJsb2NrLXNpemUtLWZ1bGxcIixcbiAgZm9vdGVyRW5kU2xvdE9ubHk6IFwiZm9vdGVyLS1lbmQtb25seVwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGZvb3RlclN0YXJ0OiBcImZvb3Rlci1zdGFydFwiLFxuICBmb290ZXJFbmQ6IFwiZm9vdGVyLWVuZFwiXG59O1xuY29uc3QgUkVTSVpFX1RJTUVPVVQgPSAxMDA7XG5cbmNvbnN0IHRleHRBcmVhQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCV9dGV4dGFyZWF7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxMDAlO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWluLWlubGluZS1zaXplOjEycmVtO2JvcmRlci1ibG9jay1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXt0ZXh0YXJlYXtyZXNpemU6bm9uZX19dGV4dGFyZWE6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfXRleHRhcmVhLnRleHQtYXJlYS0taW52YWxpZHtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfXRleHRhcmVhLnRleHQtYXJlYS0taW52YWxpZDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9dGV4dGFyZWEuZm9vdGVyLS1zbG90dGVke21pbi1pbmxpbmUtc2l6ZToxOHJlbX0uZm9vdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uY2hhcmFjdGVyLWxpbWl0e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5jaGFyYWN0ZXItLW92ZXItbGltaXR7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW3Jlc2l6ZT1ub25lXSkgdGV4dGFyZWF7cmVzaXplOm5vbmV9Omhvc3QoW3Jlc2l6ZT1ob3Jpem9udGFsXSkgdGV4dGFyZWF7cmVzaXplOmhvcml6b250YWx9Omhvc3QoW3Jlc2l6ZT12ZXJ0aWNhbF0pIHRleHRhcmVhe3Jlc2l6ZTp2ZXJ0aWNhbH06aG9zdChbc2NhbGU9c10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPXNdKSAuZm9vdGVye3BhZGRpbmctYmxvY2s6MC4yNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW07bWluLWJsb2NrLXNpemU6MS43NXJlbX06aG9zdChbc2NhbGU9c10pIHRleHRhcmVhe3BhZGRpbmctYmxvY2s6MC4yNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW19Omhvc3QoW3NjYWxlPXNdKSB0ZXh0YXJlYSw6aG9zdChbc2NhbGU9c10pIC5mb290ZXIsOmhvc3QoW3NjYWxlPXNdKSAuY2hhcmFjdGVyLWxpbWl0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWF7cGFkZGluZy1ibG9jazowLjVyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bV0pIC5mb290ZXJ7cGFkZGluZy1ibG9jazowLjVyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbTttaW4tYmxvY2stc2l6ZToyLjI1cmVtfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWEsOmhvc3QoW3NjYWxlPW1dKSAuZm9vdGVyLDpob3N0KFtzY2FsZT1tXSkgLmNoYXJhY3Rlci1saW1pdHtwYWRkaW5nLWlubGluZS1zdGFydDowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QoW3NjYWxlPWxdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9Omhvc3QoW3NjYWxlPWxdKSB0ZXh0YXJlYXtwYWRkaW5nLWJsb2NrOjAuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbX06aG9zdChbc2NhbGU9bF0pIC5mb290ZXJ7cGFkZGluZy1ibG9jazowLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07bWluLWJsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIHRleHRhcmVhLDpob3N0KFtzY2FsZT1sXSkgLmZvb3Rlciw6aG9zdChbc2NhbGU9bF0pIC5jaGFyYWN0ZXItbGltaXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9LnJlYWRvbmx5e2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9Omhvc3QoW2Rpc2FibGVkXSkgdGV4dGFyZWEsOmhvc3QoW2Rpc2FibGVkXSkgZm9vdGVye29wYWNpdHk6MC41fS5ib3JkZXItLWNvbG9ye2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCl9LmJvcmRlci0tY29sb3I6Zm9jdXN7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoycHh9dGV4dGFyZWEuYmxvY2stc2l6ZS0tZnVsbHtibG9jay1zaXplOjEwMCV9LmNvbnRlbnQsLmhpZGV7ZGlzcGxheTpub25lfS5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmZvb3Rlci0tZW5kLW9ubHl7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1cIjtcblxuY29uc3QgVGV4dEFyZWEgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVRleHRBcmVhSW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUZXh0QXJlYUlucHV0XCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZVRleHRBcmVhQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGV4dEFyZWFDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldFtcInZhbHVlXCJdO1xuICAgICAgdGhpcy5jYWxjaXRlVGV4dEFyZWFJbnB1dC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZVRleHRBcmVhQ2hhbmdlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY29udGVudFNsb3RDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5lbC5jaGlsZE5vZGVzO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gXCIjdGV4dFwiKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZWwubm9kZVZhbHVlLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZW5kZXJDaGFyYWN0ZXJMaW1pdCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aCA/IChoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuY2hhcmFjdGVyTGltaXQgfSwgaChcInNwYW5cIiwgeyBjbGFzczogeyBbQ1NTLmNoYXJhY3Rlck92ZXJMaW1pdF06IHRoaXMudmFsdWU/Lmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoIH0gfSwgdGhpcy5nZXRMb2NhbGl6ZWRDaGFyYWN0ZXJMZW5ndGgoKSksIFwiL1wiLCBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodGhpcy5tYXhMZW5ndGgudG9TdHJpbmcoKSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgICAgY29uc3QgeyB0ZXh0QXJlYUhlaWdodCwgdGV4dEFyZWFXaWR0aCwgZWxIZWlnaHQsIGVsV2lkdGgsIGZvb3RlckhlaWdodCwgZm9vdGVyV2lkdGggfSA9IHRoaXMuZ2V0SGVpZ2h0YW5kV2lkdGhPZkVsZW1lbnRzKCk7XG4gICAgICBpZiAoZm9vdGVyV2lkdGggPiAwICYmIGZvb3RlcldpZHRoICE9PSB0ZXh0QXJlYVdpZHRoKSB7XG4gICAgICAgIHRoaXMuZm9vdGVyRWwuc3R5bGUud2lkdGggPSBgJHt0ZXh0QXJlYVdpZHRofXB4YDtcbiAgICAgIH1cbiAgICAgIGlmIChlbFdpZHRoICE9PSB0ZXh0QXJlYVdpZHRoIHx8IGVsSGVpZ2h0ICE9PSB0ZXh0QXJlYUhlaWdodCArIChmb290ZXJIZWlnaHQgfHwgMCkpIHtcbiAgICAgICAgdGhpcy5zZXRIZWlnaHRBbmRXaWR0aFRvQXV0bygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhlaWdodCBhbmQgd2lkdGggYXJlIHNldCB0byBhdXRvIGhlcmUgdG8gYXZvaWQgb3ZlcmxhcHBpbmcgb24gdG8gbmVpZ2hib3JpbmcgZWxlbWVudHMgaW4gdGhlIGxheW91dCB3aGVuIHVzZXIgc3RhcnRzIHJlc2l6aW5nLlxuICAgIC8vIHRocm90dGxlIGlzIHVzZWQgdG8gYXZvaWQgZmxhc2hpbmcgb2YgdGV4dGFyZWEgd2hlbiB1c2VyIHJlc2l6ZXMuXG4gICAgdGhpcy5zZXRIZWlnaHRBbmRXaWR0aFRvQXV0byA9IHRocm90dGxlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6ZSA9PT0gXCJ2ZXJ0aWNhbFwiIHx8IHRoaXMucmVzaXplID09PSBcImJvdGhcIikge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVzaXplID09PSBcImhvcml6b250YWxcIiB8fCB0aGlzLnJlc2l6ZSA9PT0gXCJib3RoXCIpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xuICAgICAgfVxuICAgIH0sIFJFU0laRV9USU1FT1VULCB7IGxlYWRpbmc6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2V0VGV4dEFyZWFFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50ZXh0QXJlYUVsID0gZWw7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIH07XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmNvbHVtbnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdyb3VwU2VwYXJhdG9yID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5yZXNpemUgPSBcImJvdGhcIjtcbiAgICB0aGlzLnJvd3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53cmFwID0gXCJzb2Z0XCI7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kU2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICAgIHRoaXMuc2V0VGV4dEFyZWFIZWlnaHQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaGFzRm9vdGVyID0gdGhpcy5zdGFydFNsb3RIYXNFbGVtZW50cyB8fCB0aGlzLmVuZFNsb3RIYXNFbGVtZW50cyB8fCAhIXRoaXMubWF4TGVuZ3RoO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwidGV4dGFyZWFcIiwgeyBcImFyaWEtaW52YWxpZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMudmFsdWU/Lmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSwgXCJhcmlhLWxhYmVsXCI6IGdldExhYmVsVGV4dCh0aGlzKSwgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cywgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5yZWFkT25seV06IHRoaXMucmVhZE9ubHksXG4gICAgICAgIFtDU1MudGV4dEFyZWFJbnZhbGlkXTogdGhpcy52YWx1ZT8ubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgsXG4gICAgICAgIFtDU1MuZm9vdGVyU2xvdHRlZF06IHRoaXMuZW5kU2xvdEhhc0VsZW1lbnRzICYmIHRoaXMuc3RhcnRTbG90SGFzRWxlbWVudHMsXG4gICAgICAgIFtDU1MuYmxvY2tTaXplRnVsbF06ICFoYXNGb290ZXIsXG4gICAgICAgIFtDU1MuYm9yZGVyQ29sb3JdOiAhaGFzRm9vdGVyXG4gICAgICB9LCBjb2xzOiB0aGlzLmNvbHVtbnMsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBuYW1lOiB0aGlzLm5hbWUsIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSwgb25JbnB1dDogdGhpcy5oYW5kbGVJbnB1dCwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsIHJlYWRvbmx5OiB0aGlzLnJlYWRPbmx5LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCwgcm93czogdGhpcy5yb3dzLCB2YWx1ZTogdGhpcy52YWx1ZSwgd3JhcDogdGhpcy53cmFwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0VGV4dEFyZWFFbCB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogeyBbQ1NTLmNvbnRlbnRdOiB0cnVlIH0gfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuY29udGVudFNsb3RDaGFuZ2VIYW5kbGVyIH0pKSwgaChcImZvb3RlclwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuZm9vdGVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5yZWFkT25seV06IHRoaXMucmVhZE9ubHksXG4gICAgICAgIFtDU1MuaGlkZV06ICFoYXNGb290ZXJcbiAgICAgIH0sIHJlZjogKGVsKSA9PiAodGhpcy5mb290ZXJFbCA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmZvb3RlckVuZFNsb3RPbmx5XTogIXRoaXMuc3RhcnRTbG90SGFzRWxlbWVudHMgJiYgdGhpcy5lbmRTbG90SGFzRWxlbWVudHNcbiAgICAgIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mb290ZXJTdGFydCwgb25TbG90Y2hhbmdlOiAoZXZlbnQpID0+ICh0aGlzLnN0YXJ0U2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCkpIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmZvb3RlckVuZCwgb25TbG90Y2hhbmdlOiAoZXZlbnQpID0+ICh0aGlzLmVuZFNsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpKSB9KSksIHRoaXMucmVuZGVyQ2hhcmFjdGVyTGltaXQoKSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLnRleHRBcmVhRWwuZm9jdXMoKTtcbiAgfVxuICAvKiogU2VsZWN0cyB0aGUgdGV4dCBvZiB0aGUgY29tcG9uZW50J3MgYHZhbHVlYC4gKi9cbiAgYXN5bmMgc2VsZWN0VGV4dCgpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy50ZXh0QXJlYUVsLnNlbGVjdCgpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25Gb3JtUmVzZXQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICB9XG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgZ2V0TG9jYWxpemVkQ2hhcmFjdGVyTGVuZ3RoKCkge1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBzaWduRGlzcGxheTogXCJuZXZlclwiLFxuICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICB9O1xuICAgIHJldHVybiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodGhpcy52YWx1ZSA/IHRoaXMudmFsdWUubGVuZ3RoLnRvU3RyaW5nKCkgOiBcIjBcIik7XG4gIH1cbiAgc3luY0hpZGRlbkZvcm1JbnB1dChpbnB1dCkge1xuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIGlmICh0aGlzLnZhbHVlPy5sZW5ndGggPiB0aGlzLm1heExlbmd0aCkge1xuICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkodGhpcy5tZXNzYWdlcy50b29Mb25nKTtcbiAgICB9XG4gIH1cbiAgc2V0VGV4dEFyZWFIZWlnaHQoKSB7XG4gICAgY29uc3QgeyB0ZXh0QXJlYUhlaWdodCwgZWxIZWlnaHQsIGZvb3RlckhlaWdodCB9ID0gdGhpcy5nZXRIZWlnaHRhbmRXaWR0aE9mRWxlbWVudHMoKTtcbiAgICBpZiAoZm9vdGVySGVpZ2h0ID4gMCAmJiB0ZXh0QXJlYUhlaWdodCArIGZvb3RlckhlaWdodCAhPSBlbEhlaWdodCkge1xuICAgICAgdGhpcy50ZXh0QXJlYUVsLnN0eWxlLmhlaWdodCA9IGAke2VsSGVpZ2h0IC0gZm9vdGVySGVpZ2h0fXB4YDtcbiAgICB9XG4gIH1cbiAgZ2V0SGVpZ2h0YW5kV2lkdGhPZkVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0OiB0ZXh0QXJlYUhlaWdodCwgd2lkdGg6IHRleHRBcmVhV2lkdGggfSA9IHRoaXMudGV4dEFyZWFFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IGhlaWdodDogZWxIZWlnaHQsIHdpZHRoOiBlbFdpZHRoIH0gPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgaGVpZ2h0OiBmb290ZXJIZWlnaHQsIHdpZHRoOiBmb290ZXJXaWR0aCB9ID0gdGhpcy5mb290ZXJFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRBcmVhSGVpZ2h0LFxuICAgICAgdGV4dEFyZWFXaWR0aCxcbiAgICAgIGVsSGVpZ2h0LFxuICAgICAgZWxXaWR0aCxcbiAgICAgIGZvb3RlckhlaWdodCxcbiAgICAgIGZvb3RlcldpZHRoXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuVGV4dEFyZWEuc3R5bGUgPSB0ZXh0QXJlYUNzcztcblxuZXhwb3J0IHsgVGV4dEFyZWEgYXMgY2FsY2l0ZV90ZXh0X2FyZWEgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlLCBpIGFzIGlzT2JqZWN0IH0gZnJvbSAnLi9kZWJvdW5jZS0wOTUwYTliOC5qcyc7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHRocm90dGxlIGFzIHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==