"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-rating_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-rating.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-rating.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_rating": () => (/* binding */ Rating)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */














const StarIcon = ({ full, scale, partial }) => ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { ...{
    class: partial ? undefined : "icon",
    icon: full ? "star-f" : "star",
    scale
  } }));

const ratingCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.focused{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Rating = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteRatingChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteRatingChange", 6);
    this.handleRatingPointerOver = () => {
      this.isKeyboardInteraction = false;
    };
    this.handleRatingPointerOut = () => {
      this.isKeyboardInteraction = true;
      this.hoverValue = null;
      this.focusValue = null;
      this.hasFocus = false;
    };
    this.handleRatingFocusIn = () => {
      const selectedInput = this.value > 0 ? this.value - 1 : 0;
      const focusInput = this.inputRefs[selectedInput];
      const focusValue = Number(focusInput.value);
      focusInput.select();
      this.focusValue = focusValue;
      this.hoverValue = focusValue;
      this.hasFocus = true;
    };
    this.handleRatingFocusLeave = () => {
      this.focusValue = null;
      this.hoverValue = null;
      this.hasFocus = false;
    };
    this.handleHostKeyDown = () => {
      this.isKeyboardInteraction = true;
    };
    this.handleInputKeyDown = (event) => {
      const target = event.currentTarget;
      const inputVal = Number(target.value);
      const key = event.key;
      const numberKey = key == " " ? undefined : Number(key);
      this.emit = true;
      if (isNaN(numberKey)) {
        switch (key) {
          case "Enter":
          case " ":
            this.value = !this.required && this.value === inputVal ? 0 : inputVal;
            break;
          case "ArrowLeft":
            this.value = inputVal - 1;
            break;
          case "ArrowRight":
            this.value = inputVal + 1;
            break;
          case "Tab":
            if (this.hasFocus) {
              this.hasFocus = false;
              this.focusValue = null;
              this.hoverValue = null;
            }
        }
      }
      else {
        if (!this.required && numberKey >= 0 && numberKey <= this.max) {
          this.value = numberKey;
        }
        else if (this.required && numberKey > 0 && numberKey <= this.max) {
          this.value = numberKey;
        }
      }
    };
    this.handleInputChange = (event) => {
      if (this.isKeyboardInteraction === true) {
        const inputVal = Number(event.target["value"]);
        this.focusValue = inputVal;
        this.hoverValue = inputVal;
        this.value = inputVal;
      }
    };
    this.handleLabelPointerOver = (event) => {
      const target = event.currentTarget;
      const newPointerValue = Number(target.firstChild["value"] || 0);
      this.hoverValue = newPointerValue;
      this.focusValue = null;
    };
    this.handleLabelPointerDown = (event) => {
      const target = event.currentTarget;
      const inputVal = Number(target.firstChild["value"] || 0);
      this.focusValue = null;
      this.hoverValue = null;
      this.emit = true;
      this.value = !this.required && this.value === inputVal ? 0 : inputVal;
    };
    this.emit = false;
    this.guid = `calcite-ratings-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.isKeyboardInteraction = true;
    this.max = 5;
    this.average = undefined;
    this.count = undefined;
    this.disabled = false;
    this.form = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.name = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.showChip = false;
    this.value = 0;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.hoverValue = undefined;
    this.focusValue = undefined;
    this.hasFocus = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  handleValueUpdate(newValue) {
    this.hoverValue = newValue;
    this.focusValue = newValue;
    if (this.emit) {
      this.calciteRatingChange.emit();
    }
    this.emit = false;
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    this.inputRefs = Array(this.max);
  }
  componentWillRender() {
    this.starsMap = Array.from({ length: this.max }, (_, i) => {
      const value = i + 1;
      const average = !this.focusValue &&
        !this.hoverValue &&
        this.average &&
        !this.value &&
        value <= this.average;
      const checked = value === this.value;
      const focused = this.isKeyboardInteraction && this.hasFocus && this.focusValue === value;
      const fraction = this.average && this.average + 1 - value;
      const hovered = value <= this.hoverValue;
      const id = `${this.guid}-${value}`;
      const partial = !this.focusValue &&
        !this.hoverValue &&
        !this.value &&
        !hovered &&
        fraction > 0 &&
        fraction < 1;
      const selected = this.value >= value;
      return {
        average,
        checked,
        focused,
        fraction,
        hovered,
        id,
        idx: i,
        partial,
        selected,
        value
      };
    });
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.handleRatingFocusLeave, onFocus: this.handleRatingFocusIn, onKeyDown: this.handleHostKeyDown, onPointerOut: this.handleRatingPointerOut, onPointerOver: this.handleRatingPointerOver }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "wrapper" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("fieldset", { class: "fieldset", disabled: this.disabled }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("legend", { class: "visually-hidden" }, this.messages.rating), this.starsMap.map(({ average, checked, focused, fraction, hovered, id, idx, partial, selected, value }) => {
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: {
          star: true,
          focused,
          selected,
          hovered,
          average,
          partial
        }, htmlFor: id, onPointerDown: this.handleLabelPointerDown, onPointerOver: this.handleLabelPointerOver }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { checked: checked, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: id, name: this.guid, onChange: this.handleInputChange, onKeyDown: this.handleInputKeyDown, type: "radio", value: value,
        // eslint-disable-next-line react/jsx-sort-props
        ref: (el) => {
          this.inputRefs[idx] = el;
          return ((value === 1 || value === this.value) &&
            (this.inputFocusRef = el));
        } }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(StarIcon, { full: selected || average, scale: this.scale }), partial && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "fraction", style: { width: `${fraction * 100}%` } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(StarIcon, { full: true, partial: true, scale: this.scale }))), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "visually-hidden" }, this.messages.stars.replace("${num}", `${value}`))));
    }), (this.count || this.average) && this.showChip ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-chip", { scale: this.scale, value: this.count?.toString() }, !!this.average && (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "number--average" }, this.average.toString()), !!this.count && (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "number--count" }, "(", this.count?.toString(), ")"))) : null), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.inputFocusRef?.focus();
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "value": ["handleValueUpdate"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Rating.style = ratingCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOWVhN2FiZTJhNTE2MTVlNDk3N2FmMTZiYWYxOWVkNWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ1I7QUFDdEQ7QUFDNkU7QUFDOUM7QUFDc0M7QUFDN0I7QUFDb0M7QUFDaEc7QUFDTTtBQUNGO0FBQ0o7QUFDTTs7QUFFakMsb0JBQW9CLHNCQUFzQixNQUFNLHFEQUFDLG1CQUFtQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlDQUFpQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLHdHQUF3RyxvQkFBb0IsTUFBTSxrQkFBa0IsYUFBYSxtQkFBbUIsNkJBQTZCLHdCQUF3Qix5R0FBeUcsVUFBVSxpQkFBaUIsa0JBQWtCLHNDQUFzQyxpQkFBaUIsZ0JBQWdCLHFDQUFxQyxpQkFBaUIsbUJBQW1CLHNDQUFzQyxVQUFVLFNBQVMsYUFBYSxlQUFlLFVBQVUsbUJB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1yYXRpbmcuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdDluLWZhYzEzMzk0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBoLCByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0tZDczNTllZmUuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCB9IGZyb20gJy4vbGFiZWwtOWQyZWIzMzQuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3QgU3Rhckljb24gPSAoeyBmdWxsLCBzY2FsZSwgcGFydGlhbCB9KSA9PiAoaChcImNhbGNpdGUtaWNvblwiLCB7IC4uLntcbiAgICBjbGFzczogcGFydGlhbCA/IHVuZGVmaW5lZCA6IFwiaWNvblwiLFxuICAgIGljb246IGZ1bGwgPyBcInN0YXItZlwiIDogXCJzdGFyXCIsXG4gICAgc2NhbGVcbiAgfSB9KSk7XG5cbmNvbnN0IHJhdGluZ0NzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbcmVhZC1vbmx5XSkgKiw6aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtyZWFkLW9ubHldKSA6OnNsb3R0ZWQoKiksOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtpbmxpbmUtc2l6ZTotbW96LWZpdC1jb250ZW50O2lubGluZS1zaXplOmZpdC1jb250ZW50fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbc2NhbGU9c10pe2Jsb2NrLXNpemU6MS41cmVtOy0tY2FsY2l0ZS1yYXRpbmctc3BhY2luZy11bml0OjAuMjVyZW19Omhvc3QoW3NjYWxlPW1dKXtibG9jay1zaXplOjJyZW07LS1jYWxjaXRlLXJhdGluZy1zcGFjaW5nLXVuaXQ6MC41cmVtfTpob3N0KFtzY2FsZT1sXSl7YmxvY2stc2l6ZToyLjc1cmVtOy0tY2FsY2l0ZS1yYXRpbmctc3BhY2luZy11bml0OjAuNzVyZW19LmZpZWxkc2V0e21hcmdpbjowO2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MDtwYWRkaW5nOjA7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDp2YXIoLS1jYWxjaXRlLXJhdGluZy1zcGFjaW5nLXVuaXQpfS53cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zdGFye3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Y3Vyc29yOnBvaW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpfS5mb2N1c2Vke291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5hdmVyYWdlLC5mcmFjdGlvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXdhcm5pbmcpfS5ob3ZlcmVkLC5zZWxlY3RlZHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uZnJhY3Rpb257dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtpbnNldC1ibG9jay1zdGFydDowO292ZXJmbG93OmhpZGRlbjtpbnNldC1pbmxpbmUtc3RhcnQ6MH1jYWxjaXRlLWNoaXB7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6ZGVmYXVsdH0ubnVtYmVyLS1hdmVyYWdle2ZvbnQtd2VpZ2h0OmJvbGR9Lm51bWJlci0tY291bnR7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc3R5bGU6aXRhbGljfS5udW1iZXItLWNvdW50Om5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1yYXRpbmctc3BhY2luZy11bml0KX0udmlzdWFsbHktaGlkZGVue3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IFJhdGluZyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlUmF0aW5nQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUmF0aW5nQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuaGFuZGxlUmF0aW5nUG9pbnRlck92ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVSYXRpbmdQb2ludGVyT3V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc0tleWJvYXJkSW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVJhdGluZ0ZvY3VzSW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZElucHV0ID0gdGhpcy52YWx1ZSA+IDAgPyB0aGlzLnZhbHVlIC0gMSA6IDA7XG4gICAgICBjb25zdCBmb2N1c0lucHV0ID0gdGhpcy5pbnB1dFJlZnNbc2VsZWN0ZWRJbnB1dF07XG4gICAgICBjb25zdCBmb2N1c1ZhbHVlID0gTnVtYmVyKGZvY3VzSW5wdXQudmFsdWUpO1xuICAgICAgZm9jdXNJbnB1dC5zZWxlY3QoKTtcbiAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IGZvY3VzVmFsdWU7XG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBmb2N1c1ZhbHVlO1xuICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVJhdGluZ0ZvY3VzTGVhdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzVmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSG9zdEtleURvd24gPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUlucHV0S2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gICAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG4gICAgICBjb25zdCBudW1iZXJLZXkgPSBrZXkgPT0gXCIgXCIgPyB1bmRlZmluZWQgOiBOdW1iZXIoa2V5KTtcbiAgICAgIHRoaXMuZW1pdCA9IHRydWU7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyS2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gIXRoaXMucmVxdWlyZWQgJiYgdGhpcy52YWx1ZSA9PT0gaW5wdXRWYWwgPyAwIDogaW5wdXRWYWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaW5wdXRWYWwgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpbnB1dFZhbCArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiVGFiXCI6XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMucmVxdWlyZWQgJiYgbnVtYmVyS2V5ID49IDAgJiYgbnVtYmVyS2V5IDw9IHRoaXMubWF4KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bWJlcktleTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlcXVpcmVkICYmIG51bWJlcktleSA+IDAgJiYgbnVtYmVyS2V5IDw9IHRoaXMubWF4KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bWJlcktleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsID0gTnVtYmVyKGV2ZW50LnRhcmdldFtcInZhbHVlXCJdKTtcbiAgICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gaW5wdXRWYWw7XG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGlucHV0VmFsO1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5wdXRWYWw7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxhYmVsUG9pbnRlck92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBuZXdQb2ludGVyVmFsdWUgPSBOdW1iZXIodGFyZ2V0LmZpcnN0Q2hpbGRbXCJ2YWx1ZVwiXSB8fCAwKTtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IG5ld1BvaW50ZXJWYWx1ZTtcbiAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxhYmVsUG9pbnRlckRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dFZhbCA9IE51bWJlcih0YXJnZXQuZmlyc3RDaGlsZFtcInZhbHVlXCJdIHx8IDApO1xuICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmVtaXQgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLnJlcXVpcmVkICYmIHRoaXMudmFsdWUgPT09IGlucHV0VmFsID8gMCA6IGlucHV0VmFsO1xuICAgIH07XG4gICAgdGhpcy5lbWl0ID0gZmFsc2U7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtcmF0aW5ncy0ke2d1aWQoKX1gO1xuICAgIHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLm1heCA9IDU7XG4gICAgdGhpcy5hdmVyYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY291bnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zaG93Q2hpcCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb2N1c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzRm9jdXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGhhbmRsZVZhbHVlVXBkYXRlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5mb2N1c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgaWYgKHRoaXMuZW1pdCkge1xuICAgICAgdGhpcy5jYWxjaXRlUmF0aW5nQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5lbWl0ID0gZmFsc2U7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLmlucHV0UmVmcyA9IEFycmF5KHRoaXMubWF4KTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIHRoaXMuc3RhcnNNYXAgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLm1heCB9LCAoXywgaSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBpICsgMTtcbiAgICAgIGNvbnN0IGF2ZXJhZ2UgPSAhdGhpcy5mb2N1c1ZhbHVlICYmXG4gICAgICAgICF0aGlzLmhvdmVyVmFsdWUgJiZcbiAgICAgICAgdGhpcy5hdmVyYWdlICYmXG4gICAgICAgICF0aGlzLnZhbHVlICYmXG4gICAgICAgIHZhbHVlIDw9IHRoaXMuYXZlcmFnZTtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICAgIGNvbnN0IGZvY3VzZWQgPSB0aGlzLmlzS2V5Ym9hcmRJbnRlcmFjdGlvbiAmJiB0aGlzLmhhc0ZvY3VzICYmIHRoaXMuZm9jdXNWYWx1ZSA9PT0gdmFsdWU7XG4gICAgICBjb25zdCBmcmFjdGlvbiA9IHRoaXMuYXZlcmFnZSAmJiB0aGlzLmF2ZXJhZ2UgKyAxIC0gdmFsdWU7XG4gICAgICBjb25zdCBob3ZlcmVkID0gdmFsdWUgPD0gdGhpcy5ob3ZlclZhbHVlO1xuICAgICAgY29uc3QgaWQgPSBgJHt0aGlzLmd1aWR9LSR7dmFsdWV9YDtcbiAgICAgIGNvbnN0IHBhcnRpYWwgPSAhdGhpcy5mb2N1c1ZhbHVlICYmXG4gICAgICAgICF0aGlzLmhvdmVyVmFsdWUgJiZcbiAgICAgICAgIXRoaXMudmFsdWUgJiZcbiAgICAgICAgIWhvdmVyZWQgJiZcbiAgICAgICAgZnJhY3Rpb24gPiAwICYmXG4gICAgICAgIGZyYWN0aW9uIDwgMTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy52YWx1ZSA+PSB2YWx1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF2ZXJhZ2UsXG4gICAgICAgIGNoZWNrZWQsXG4gICAgICAgIGZvY3VzZWQsXG4gICAgICAgIGZyYWN0aW9uLFxuICAgICAgICBob3ZlcmVkLFxuICAgICAgICBpZCxcbiAgICAgICAgaWR4OiBpLFxuICAgICAgICBwYXJ0aWFsLFxuICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgdmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkJsdXI6IHRoaXMuaGFuZGxlUmF0aW5nRm9jdXNMZWF2ZSwgb25Gb2N1czogdGhpcy5oYW5kbGVSYXRpbmdGb2N1c0luLCBvbktleURvd246IHRoaXMuaGFuZGxlSG9zdEtleURvd24sIG9uUG9pbnRlck91dDogdGhpcy5oYW5kbGVSYXRpbmdQb2ludGVyT3V0LCBvblBvaW50ZXJPdmVyOiB0aGlzLmhhbmRsZVJhdGluZ1BvaW50ZXJPdmVyIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwid3JhcHBlclwiIH0sIGgoXCJmaWVsZHNldFwiLCB7IGNsYXNzOiBcImZpZWxkc2V0XCIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIH0sIGgoXCJsZWdlbmRcIiwgeyBjbGFzczogXCJ2aXN1YWxseS1oaWRkZW5cIiB9LCB0aGlzLm1lc3NhZ2VzLnJhdGluZyksIHRoaXMuc3RhcnNNYXAubWFwKCh7IGF2ZXJhZ2UsIGNoZWNrZWQsIGZvY3VzZWQsIGZyYWN0aW9uLCBob3ZlcmVkLCBpZCwgaWR4LCBwYXJ0aWFsLCBzZWxlY3RlZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgcmV0dXJuIChoKFwibGFiZWxcIiwgeyBjbGFzczoge1xuICAgICAgICAgIHN0YXI6IHRydWUsXG4gICAgICAgICAgZm9jdXNlZCxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBob3ZlcmVkLFxuICAgICAgICAgIGF2ZXJhZ2UsXG4gICAgICAgICAgcGFydGlhbFxuICAgICAgICB9LCBodG1sRm9yOiBpZCwgb25Qb2ludGVyRG93bjogdGhpcy5oYW5kbGVMYWJlbFBvaW50ZXJEb3duLCBvblBvaW50ZXJPdmVyOiB0aGlzLmhhbmRsZUxhYmVsUG9pbnRlck92ZXIgfSwgaChcImlucHV0XCIsIHsgY2hlY2tlZDogY2hlY2tlZCwgY2xhc3M6IFwidmlzdWFsbHktaGlkZGVuXCIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIGlkOiBpZCwgbmFtZTogdGhpcy5ndWlkLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUlucHV0S2V5RG93biwgdHlwZTogXCJyYWRpb1wiLCB2YWx1ZTogdmFsdWUsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgICByZWY6IChlbCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5wdXRSZWZzW2lkeF0gPSBlbDtcbiAgICAgICAgICByZXR1cm4gKCh2YWx1ZSA9PT0gMSB8fCB2YWx1ZSA9PT0gdGhpcy52YWx1ZSkgJiZcbiAgICAgICAgICAgICh0aGlzLmlucHV0Rm9jdXNSZWYgPSBlbCkpO1xuICAgICAgICB9IH0pLCBoKFN0YXJJY29uLCB7IGZ1bGw6IHNlbGVjdGVkIHx8IGF2ZXJhZ2UsIHNjYWxlOiB0aGlzLnNjYWxlIH0pLCBwYXJ0aWFsICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZnJhY3Rpb25cIiwgc3R5bGU6IHsgd2lkdGg6IGAke2ZyYWN0aW9uICogMTAwfSVgIH0gfSwgaChTdGFySWNvbiwgeyBmdWxsOiB0cnVlLCBwYXJ0aWFsOiB0cnVlLCBzY2FsZTogdGhpcy5zY2FsZSB9KSkpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInZpc3VhbGx5LWhpZGRlblwiIH0sIHRoaXMubWVzc2FnZXMuc3RhcnMucmVwbGFjZShcIiR7bnVtfVwiLCBgJHt2YWx1ZX1gKSkpKTtcbiAgICB9KSwgKHRoaXMuY291bnQgfHwgdGhpcy5hdmVyYWdlKSAmJiB0aGlzLnNob3dDaGlwID8gKGgoXCJjYWxjaXRlLWNoaXBcIiwgeyBzY2FsZTogdGhpcy5zY2FsZSwgdmFsdWU6IHRoaXMuY291bnQ/LnRvU3RyaW5nKCkgfSwgISF0aGlzLmF2ZXJhZ2UgJiYgaChcInNwYW5cIiwgeyBjbGFzczogXCJudW1iZXItLWF2ZXJhZ2VcIiB9LCB0aGlzLmF2ZXJhZ2UudG9TdHJpbmcoKSksICEhdGhpcy5jb3VudCAmJiBoKFwic3BhblwiLCB7IGNsYXNzOiBcIm51bWJlci0tY291bnRcIiB9LCBcIihcIiwgdGhpcy5jb3VudD8udG9TdHJpbmcoKSwgXCIpXCIpKSkgOiBudWxsKSwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuaW5wdXRGb2N1c1JlZj8uZm9jdXMoKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1wiaGFuZGxlVmFsdWVVcGRhdGVcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5SYXRpbmcuc3R5bGUgPSByYXRpbmdDc3M7XG5cbmV4cG9ydCB7IFJhdGluZyBhcyBjYWxjaXRlX3JhdGluZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXNcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==