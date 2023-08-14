"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-text-area_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-text-area.entry.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-text-area.entry.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_text_area": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _throttle_d688fe13_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./throttle-d688fe13.js */ "./node_modules/@esri/calcite-components/dist/esm/throttle-d688fe13.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTextAreaInput = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTextAreaInput", 7);
    this.calciteTextAreaChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTextAreaChange", 7);
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
      return this.maxLength ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.characterLimit }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: { [CSS.characterOverLimit]: this.value?.length > this.maxLength } }, this.getLocalizedCharacterLength()), "/", _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.n.localize(this.maxLength.toString()))) : null;
    };
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_5__.c)("resize", async () => {
      await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
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
    this.setHeightAndWidthToAuto = (0,_throttle_d688fe13_js__WEBPACK_IMPORTED_MODULE_9__.t)(() => {
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
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_8__.u)(this);
    this.setTextAreaHeight();
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    this.resizeObserver?.disconnect();
  }
  render() {
    const hasFooter = this.startSlotHasElements || this.endSlotHasElements || !!this.maxLength;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { "aria-invalid": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.t)(this.value?.length > this.maxLength), "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_2__.g)(this), autofocus: this.autofocus, class: {
        [CSS.readOnly]: this.readOnly,
        [CSS.textAreaInvalid]: this.value?.length > this.maxLength,
        [CSS.footerSlotted]: this.endSlotHasElements && this.startSlotHasElements,
        [CSS.blockSizeFull]: !hasFooter,
        [CSS.borderColor]: !hasFooter
      }, cols: this.columns, disabled: this.disabled, name: this.name, onChange: this.handleChange, onInput: this.handleInput, placeholder: this.placeholder, readonly: this.readOnly, required: this.required, rows: this.rows, value: this.value, wrap: this.wrap,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTextAreaEl }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: { [CSS.content]: true } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.contentSlotChangeHandler })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", { class: {
        [CSS.footer]: true,
        [CSS.readOnly]: this.readOnly,
        [CSS.hide]: !hasFooter
      }, ref: (el) => (this.footerEl = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.footerEndSlotOnly]: !this.startSlotHasElements && this.endSlotHasElements
      } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.footerStart, onSlotchange: (event) => (this.startSlotHasElements = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.d)(event)) }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.footerEnd, onSlotchange: (event) => (this.endSlotHasElements = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.d)(event)) })), this.renderCharacterLimit()), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this })));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.textAreaEl.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.textAreaEl.select();
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
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
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      signDisplay: "never",
      useGrouping: this.groupSeparator
    };
    return _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.n.localize(this.value ? this.value.length.toString() : "0");
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
TextArea.style = textAreaCss;




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

/***/ "./node_modules/@esri/calcite-components/dist/esm/throttle-d688fe13.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/throttle-d688fe13.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
  if ((0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_0__.i)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_0__.d)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDMwNzFlMTcxZGFjZTRkYjhjZDFhZDk3YjMwYzcwMDkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUNSO0FBQ0o7QUFDUDtBQUN5QjtBQUNyRDtBQUNzRDtBQUNPO0FBQ3BEO0FBQ2hCO0FBQzNCO0FBQ0s7QUFDTjtBQUNLOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxrQkFBa0IsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sa0JBQWtCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLFNBQVMsa0JBQWtCLFdBQVcsc0JBQXNCLGNBQWMsaUJBQWlCLGlCQUFpQiw0Q0FBNEMsZ0RBQWdE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LWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS10ZXh0LWFyZWEuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdDluLWEzZTEyNDIyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Rocm90dGxlLWQ2ODhmZTEzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0tNDQ1MzAwMDEuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwtNTljOWQ0NzIuanMnO1xuaW1wb3J0IHsgZCBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tYTNlMTI0MjIuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IHQgYXMgdGhyb3R0bGUgfSBmcm9tICcuL3Rocm90dGxlLWQ2ODhmZTEzLmpzJztcbmltcG9ydCAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuaW1wb3J0ICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgJy4vZGVib3VuY2UtYjkwNzI0MjIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNoYXJhY3RlckxpbWl0OiBcImNoYXJhY3Rlci1saW1pdFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIHJlc2l6ZURpc2FibGVkOiBcInJlc2l6ZS0tZGlzYWJsZWRcIixcbiAgcmVzaXplRGlzYWJsZWRYOiBcInJlc2l6ZS0tZGlzYWJsZWQteFwiLFxuICByZXNpemVEaXNhYmxlZFk6IFwicmVzaXplLS1kaXNhYmxlZC15XCIsXG4gIGNoYXJhY3Rlck92ZXJMaW1pdDogXCJjaGFyYWN0ZXItLW92ZXItbGltaXRcIixcbiAgcmVhZE9ubHk6IFwicmVhZG9ubHlcIixcbiAgdGV4dEFyZWFJbnZhbGlkOiBcInRleHQtYXJlYS0taW52YWxpZFwiLFxuICBmb290ZXJTbG90dGVkOiBcImZvb3Rlci0tc2xvdHRlZFwiLFxuICBib3JkZXJDb2xvcjogXCJib3JkZXItLWNvbG9yXCIsXG4gIGhpZGU6IFwiaGlkZVwiLFxuICBibG9ja1NpemVGdWxsOiBcImJsb2NrLXNpemUtLWZ1bGxcIixcbiAgZm9vdGVyRW5kU2xvdE9ubHk6IFwiZm9vdGVyLS1lbmQtb25seVwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGZvb3RlclN0YXJ0OiBcImZvb3Rlci1zdGFydFwiLFxuICBmb290ZXJFbmQ6IFwiZm9vdGVyLWVuZFwiXG59O1xuY29uc3QgUkVTSVpFX1RJTUVPVVQgPSAxMDA7XG5cbmNvbnN0IHRleHRBcmVhQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCV9dGV4dGFyZWF7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxMDAlO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWluLWlubGluZS1zaXplOjEycmVtO2JvcmRlci1ibG9jay1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXt0ZXh0YXJlYXtyZXNpemU6bm9uZX19dGV4dGFyZWE6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfXRleHRhcmVhLnRleHQtYXJlYS0taW52YWxpZHtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfXRleHRhcmVhLnRleHQtYXJlYS0taW52YWxpZDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcik7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9dGV4dGFyZWEuZm9vdGVyLS1zbG90dGVke21pbi1pbmxpbmUtc2l6ZToxOHJlbX0uZm9vdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uY2hhcmFjdGVyLWxpbWl0e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5jaGFyYWN0ZXItLW92ZXItbGltaXR7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW3Jlc2l6ZT1ub25lXSkgdGV4dGFyZWF7cmVzaXplOm5vbmV9Omhvc3QoW3Jlc2l6ZT1ob3Jpem9udGFsXSkgdGV4dGFyZWF7cmVzaXplOmhvcml6b250YWx9Omhvc3QoW3Jlc2l6ZT12ZXJ0aWNhbF0pIHRleHRhcmVhe3Jlc2l6ZTp2ZXJ0aWNhbH06aG9zdChbc2NhbGU9c10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPXNdKSAuZm9vdGVye3BhZGRpbmctYmxvY2s6MC4yNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW07bWluLWJsb2NrLXNpemU6MS43NXJlbX06aG9zdChbc2NhbGU9c10pIHRleHRhcmVhe3BhZGRpbmctYmxvY2s6MC4yNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW19Omhvc3QoW3NjYWxlPXNdKSB0ZXh0YXJlYSw6aG9zdChbc2NhbGU9c10pIC5mb290ZXIsOmhvc3QoW3NjYWxlPXNdKSAuY2hhcmFjdGVyLWxpbWl0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWF7cGFkZGluZy1ibG9jazowLjVyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bV0pIC5mb290ZXJ7cGFkZGluZy1ibG9jazowLjVyZW07cGFkZGluZy1pbmxpbmU6MC43NXJlbTttaW4tYmxvY2stc2l6ZToyLjI1cmVtfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWEsOmhvc3QoW3NjYWxlPW1dKSAuZm9vdGVyLDpob3N0KFtzY2FsZT1tXSkgLmNoYXJhY3Rlci1saW1pdHtwYWRkaW5nLWlubGluZS1zdGFydDowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QoW3NjYWxlPWxdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9Omhvc3QoW3NjYWxlPWxdKSB0ZXh0YXJlYXtwYWRkaW5nLWJsb2NrOjAuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbX06aG9zdChbc2NhbGU9bF0pIC5mb290ZXJ7cGFkZGluZy1ibG9jazowLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07bWluLWJsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIHRleHRhcmVhLDpob3N0KFtzY2FsZT1sXSkgLmZvb3Rlciw6aG9zdChbc2NhbGU9bF0pIC5jaGFyYWN0ZXItbGltaXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9LnJlYWRvbmx5e2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9Omhvc3QoW2Rpc2FibGVkXSkgdGV4dGFyZWEsOmhvc3QoW2Rpc2FibGVkXSkgZm9vdGVye29wYWNpdHk6MC41fS5ib3JkZXItLWNvbG9ye2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCl9LmJvcmRlci0tY29sb3I6Zm9jdXN7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoycHh9dGV4dGFyZWEuYmxvY2stc2l6ZS0tZnVsbHtibG9jay1zaXplOjEwMCV9LmNvbnRlbnQsLmhpZGV7ZGlzcGxheTpub25lfS5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmZvb3Rlci0tZW5kLW9ubHl7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1cIjtcblxuY29uc3QgVGV4dEFyZWEgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVRleHRBcmVhSW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUZXh0QXJlYUlucHV0XCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZVRleHRBcmVhQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGV4dEFyZWFDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldFtcInZhbHVlXCJdO1xuICAgICAgdGhpcy5jYWxjaXRlVGV4dEFyZWFJbnB1dC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZVRleHRBcmVhQ2hhbmdlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY29udGVudFNsb3RDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5lbC5jaGlsZE5vZGVzO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gXCIjdGV4dFwiKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZWwubm9kZVZhbHVlLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZW5kZXJDaGFyYWN0ZXJMaW1pdCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aCA/IChoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuY2hhcmFjdGVyTGltaXQgfSwgaChcInNwYW5cIiwgeyBjbGFzczogeyBbQ1NTLmNoYXJhY3Rlck92ZXJMaW1pdF06IHRoaXMudmFsdWU/Lmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoIH0gfSwgdGhpcy5nZXRMb2NhbGl6ZWRDaGFyYWN0ZXJMZW5ndGgoKSksIFwiL1wiLCBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodGhpcy5tYXhMZW5ndGgudG9TdHJpbmcoKSkpKSA6IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgICAgY29uc3QgeyB0ZXh0QXJlYUhlaWdodCwgdGV4dEFyZWFXaWR0aCwgZWxIZWlnaHQsIGVsV2lkdGgsIGZvb3RlckhlaWdodCwgZm9vdGVyV2lkdGggfSA9IHRoaXMuZ2V0SGVpZ2h0YW5kV2lkdGhPZkVsZW1lbnRzKCk7XG4gICAgICBpZiAoZm9vdGVyV2lkdGggPiAwICYmIGZvb3RlcldpZHRoICE9PSB0ZXh0QXJlYVdpZHRoKSB7XG4gICAgICAgIHRoaXMuZm9vdGVyRWwuc3R5bGUud2lkdGggPSBgJHt0ZXh0QXJlYVdpZHRofXB4YDtcbiAgICAgIH1cbiAgICAgIGlmIChlbFdpZHRoICE9PSB0ZXh0QXJlYVdpZHRoIHx8IGVsSGVpZ2h0ICE9PSB0ZXh0QXJlYUhlaWdodCArIChmb290ZXJIZWlnaHQgfHwgMCkpIHtcbiAgICAgICAgdGhpcy5zZXRIZWlnaHRBbmRXaWR0aFRvQXV0bygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhlaWdodCBhbmQgd2lkdGggYXJlIHNldCB0byBhdXRvIGhlcmUgdG8gYXZvaWQgb3ZlcmxhcHBpbmcgb24gdG8gbmVpZ2hib3JpbmcgZWxlbWVudHMgaW4gdGhlIGxheW91dCB3aGVuIHVzZXIgc3RhcnRzIHJlc2l6aW5nLlxuICAgIC8vIHRocm90dGxlIGlzIHVzZWQgdG8gYXZvaWQgZmxhc2hpbmcgb2YgdGV4dGFyZWEgd2hlbiB1c2VyIHJlc2l6ZXMuXG4gICAgdGhpcy5zZXRIZWlnaHRBbmRXaWR0aFRvQXV0byA9IHRocm90dGxlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6ZSA9PT0gXCJ2ZXJ0aWNhbFwiIHx8IHRoaXMucmVzaXplID09PSBcImJvdGhcIikge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVzaXplID09PSBcImhvcml6b250YWxcIiB8fCB0aGlzLnJlc2l6ZSA9PT0gXCJib3RoXCIpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xuICAgICAgfVxuICAgIH0sIFJFU0laRV9USU1FT1VULCB7IGxlYWRpbmc6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2V0VGV4dEFyZWFFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50ZXh0QXJlYUVsID0gZWw7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIH07XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmNvbHVtbnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdyb3VwU2VwYXJhdG9yID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5yZXNpemUgPSBcImJvdGhcIjtcbiAgICB0aGlzLnJvd3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53cmFwID0gXCJzb2Z0XCI7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kU2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gICAgdGhpcy5zZXRUZXh0QXJlYUhlaWdodCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGhhc0Zvb3RlciA9IHRoaXMuc3RhcnRTbG90SGFzRWxlbWVudHMgfHwgdGhpcy5lbmRTbG90SGFzRWxlbWVudHMgfHwgISF0aGlzLm1heExlbmd0aDtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInRleHRhcmVhXCIsIHsgXCJhcmlhLWludmFsaWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLnZhbHVlPy5sZW5ndGggPiB0aGlzLm1heExlbmd0aCksIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MucmVhZE9ubHldOiB0aGlzLnJlYWRPbmx5LFxuICAgICAgICBbQ1NTLnRleHRBcmVhSW52YWxpZF06IHRoaXMudmFsdWU/Lmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoLFxuICAgICAgICBbQ1NTLmZvb3RlclNsb3R0ZWRdOiB0aGlzLmVuZFNsb3RIYXNFbGVtZW50cyAmJiB0aGlzLnN0YXJ0U2xvdEhhc0VsZW1lbnRzLFxuICAgICAgICBbQ1NTLmJsb2NrU2l6ZUZ1bGxdOiAhaGFzRm9vdGVyLFxuICAgICAgICBbQ1NTLmJvcmRlckNvbG9yXTogIWhhc0Zvb3RlclxuICAgICAgfSwgY29sczogdGhpcy5jb2x1bW5zLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgbmFtZTogdGhpcy5uYW1lLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsIG9uSW5wdXQ6IHRoaXMuaGFuZGxlSW5wdXQsIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLCByZWFkb25seTogdGhpcy5yZWFkT25seSwgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsIHJvd3M6IHRoaXMucm93cywgdmFsdWU6IHRoaXMudmFsdWUsIHdyYXA6IHRoaXMud3JhcCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFRleHRBcmVhRWwgfSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IHsgW0NTUy5jb250ZW50XTogdHJ1ZSB9IH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmNvbnRlbnRTbG90Q2hhbmdlSGFuZGxlciB9KSksIGgoXCJmb290ZXJcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmZvb3Rlcl06IHRydWUsXG4gICAgICAgIFtDU1MucmVhZE9ubHldOiB0aGlzLnJlYWRPbmx5LFxuICAgICAgICBbQ1NTLmhpZGVdOiAhaGFzRm9vdGVyXG4gICAgICB9LCByZWY6IChlbCkgPT4gKHRoaXMuZm9vdGVyRWwgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5mb290ZXJFbmRTbG90T25seV06ICF0aGlzLnN0YXJ0U2xvdEhhc0VsZW1lbnRzICYmIHRoaXMuZW5kU2xvdEhhc0VsZW1lbnRzXG4gICAgICB9IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuZm9vdGVyU3RhcnQsIG9uU2xvdGNoYW5nZTogKGV2ZW50KSA9PiAodGhpcy5zdGFydFNsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpKSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mb290ZXJFbmQsIG9uU2xvdGNoYW5nZTogKGV2ZW50KSA9PiAodGhpcy5lbmRTbG90SGFzRWxlbWVudHMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KSkgfSkpLCB0aGlzLnJlbmRlckNoYXJhY3RlckxpbWl0KCkpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy50ZXh0QXJlYUVsLmZvY3VzKCk7XG4gIH1cbiAgLyoqIFNlbGVjdHMgdGhlIHRleHQgb2YgdGhlIGNvbXBvbmVudCdzIGB2YWx1ZWAuICovXG4gIGFzeW5jIHNlbGVjdFRleHQoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMudGV4dEFyZWFFbC5zZWxlY3QoKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIGdldExvY2FsaXplZENoYXJhY3Rlckxlbmd0aCgpIHtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgc2lnbkRpc3BsYXk6IFwibmV2ZXJcIixcbiAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yXG4gICAgfTtcbiAgICByZXR1cm4gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmxvY2FsaXplKHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmxlbmd0aC50b1N0cmluZygpIDogXCIwXCIpO1xuICB9XG4gIHN5bmNIaWRkZW5Gb3JtSW5wdXQoaW5wdXQpIHtcbiAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICBpZiAodGhpcy52YWx1ZT8ubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KHRoaXMubWVzc2FnZXMudG9vTG9uZyk7XG4gICAgfVxuICB9XG4gIHNldFRleHRBcmVhSGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgdGV4dEFyZWFIZWlnaHQsIGVsSGVpZ2h0LCBmb290ZXJIZWlnaHQgfSA9IHRoaXMuZ2V0SGVpZ2h0YW5kV2lkdGhPZkVsZW1lbnRzKCk7XG4gICAgaWYgKGZvb3RlckhlaWdodCA+IDAgJiYgdGV4dEFyZWFIZWlnaHQgKyBmb290ZXJIZWlnaHQgIT0gZWxIZWlnaHQpIHtcbiAgICAgIHRoaXMudGV4dEFyZWFFbC5zdHlsZS5oZWlnaHQgPSBgJHtlbEhlaWdodCAtIGZvb3RlckhlaWdodH1weGA7XG4gICAgfVxuICB9XG4gIGdldEhlaWdodGFuZFdpZHRoT2ZFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGhlaWdodDogdGV4dEFyZWFIZWlnaHQsIHdpZHRoOiB0ZXh0QXJlYVdpZHRoIH0gPSB0aGlzLnRleHRBcmVhRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyBoZWlnaHQ6IGVsSGVpZ2h0LCB3aWR0aDogZWxXaWR0aCB9ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IGhlaWdodDogZm9vdGVySGVpZ2h0LCB3aWR0aDogZm9vdGVyV2lkdGggfSA9IHRoaXMuZm9vdGVyRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0QXJlYUhlaWdodCxcbiAgICAgIHRleHRBcmVhV2lkdGgsXG4gICAgICBlbEhlaWdodCxcbiAgICAgIGVsV2lkdGgsXG4gICAgICBmb290ZXJIZWlnaHQsXG4gICAgICBmb290ZXJXaWR0aFxuICAgIH07XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcblRleHRBcmVhLnN0eWxlID0gdGV4dEFyZWFDc3M7XG5cbmV4cG9ydCB7IFRleHRBcmVhIGFzIGNhbGNpdGVfdGV4dF9hcmVhIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRBc3NldFBhdGggfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlc1xuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IGQgYXMgZGVib3VuY2UsIGkgYXMgaXNPYmplY3QgfSBmcm9tICcuL2RlYm91bmNlLWI5MDcyNDIyLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuZXhwb3J0IHsgdGhyb3R0bGUgYXMgdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9