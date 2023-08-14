"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-rating_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-rating.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-rating.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_rating": () => (/* binding */ Rating)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */













const StarIcon = ({ full, scale, partial }) => ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { ...{
    class: partial ? undefined : "icon",
    icon: full ? "star-f" : "star",
    scale
  } }));

const ratingCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([read-only]) *,:host([disabled]) *,:host([read-only]) ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}.fieldset{margin:0;display:flex;border-width:0;padding:0;align-items:center;gap:var(--calcite-rating-spacing-unit)}.wrapper{display:inline-block}.star{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:relative;display:flex;flex-direction:column;cursor:pointer;color:var(--calcite-ui-border-input)}.focused{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected{color:var(--calcite-ui-brand)}.fraction{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;position:absolute;pointer-events:none;inset-block-start:0;overflow:hidden;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:bold}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Rating = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteRatingChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteRatingChange", 6);
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
    this.guid = `calcite-ratings-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
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
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
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
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.handleRatingFocusLeave, onFocus: this.handleRatingFocusIn, onKeyDown: this.handleHostKeyDown, onPointerOut: this.handleRatingPointerOut, onPointerOver: this.handleRatingPointerOver }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "wrapper" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("fieldset", { class: "fieldset", disabled: this.disabled }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("legend", { class: "visually-hidden" }, this.messages.rating), this.starsMap.map(({ average, checked, focused, fraction, hovered, id, idx, partial, selected, value }) => {
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: {
          star: true,
          focused,
          selected,
          hovered,
          average,
          partial
        }, htmlFor: id, onPointerDown: this.handleLabelPointerDown, onPointerOver: this.handleLabelPointerOver }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { checked: checked, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: id, name: this.guid, onChange: this.handleInputChange, onKeyDown: this.handleInputKeyDown, type: "radio", value: value,
        // eslint-disable-next-line react/jsx-sort-props
        ref: (el) => {
          this.inputRefs[idx] = el;
          return ((value === 1 || value === this.value) &&
            (this.inputFocusRef = el));
        } }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(StarIcon, { full: selected || average, scale: this.scale }), partial && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "fraction", style: { width: `${fraction * 100}%` } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(StarIcon, { full: true, partial: true, scale: this.scale }))), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "visually-hidden" }, this.messages.stars.replace("${num}", `${value}`))));
    }), (this.count || this.average) && this.showChip ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-chip", { scale: this.scale, value: this.count?.toString() }, !!this.average && (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "number--average" }, this.average.toString()), !!this.count && (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "number--count" }, "(", this.count?.toString(), ")"))) : null), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this }))));
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.inputFocusRef?.focus();
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "value": ["handleValueUpdate"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Rating.style = ratingCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNTQ3OTM2MDgzNThkNmI2YmE0ZDZlOTM1MzJiMmMxY2IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDUjtBQUN0RDtBQUN3QjtBQUNPO0FBQ3NDO0FBQzdCO0FBQ29DO0FBQ2hHO0FBQ007QUFDTjtBQUNNOztBQUVqQyxvQkFBb0Isc0JBQXNCLE1BQU0scURBQUMsbUJBQW1CO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUNBQWlDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsd0dBQXdHLG9CQUFvQixNQUFNLGtCQUFrQixhQUFhLG1CQUFtQiw2QkFBNkIsd0JBQXdCLHlHQUF5RyxVQUFVLGlCQUFpQixrQkFBa0Isc0NBQXNDLGlCQUFpQixnQkFBZ0IscUNBQXFDLGlCQUFpQixtQkFBbUIsc0NBQXNDLFVBQVUsU0FBUyxhQUFhLGVBQWUsVUFBVSxtQkFBbUIsdUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLXJhdGluZy5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS90OW4tYTNlMTI0MjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IGgsIHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS00NDUzMDAwMS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtZDU5NDNiODMuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCB9IGZyb20gJy4vbGFiZWwtNTljOWQ0NzIuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuaW1wb3J0ICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcblxuY29uc3QgU3Rhckljb24gPSAoeyBmdWxsLCBzY2FsZSwgcGFydGlhbCB9KSA9PiAoaChcImNhbGNpdGUtaWNvblwiLCB7IC4uLntcbiAgICBjbGFzczogcGFydGlhbCA/IHVuZGVmaW5lZCA6IFwiaWNvblwiLFxuICAgIGljb246IGZ1bGwgPyBcInN0YXItZlwiIDogXCJzdGFyXCIsXG4gICAgc2NhbGVcbiAgfSB9KSk7XG5cbmNvbnN0IHJhdGluZ0NzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbcmVhZC1vbmx5XSkgKiw6aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtyZWFkLW9ubHldKSA6OnNsb3R0ZWQoKiksOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtpbmxpbmUtc2l6ZTotbW96LWZpdC1jb250ZW50O2lubGluZS1zaXplOmZpdC1jb250ZW50fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbc2NhbGU9c10pe2Jsb2NrLXNpemU6MS41cmVtOy0tY2FsY2l0ZS1yYXRpbmctc3BhY2luZy11bml0OjAuMjVyZW19Omhvc3QoW3NjYWxlPW1dKXtibG9jay1zaXplOjJyZW07LS1jYWxjaXRlLXJhdGluZy1zcGFjaW5nLXVuaXQ6MC41cmVtfTpob3N0KFtzY2FsZT1sXSl7YmxvY2stc2l6ZToyLjc1cmVtOy0tY2FsY2l0ZS1yYXRpbmctc3BhY2luZy11bml0OjAuNzVyZW19LmZpZWxkc2V0e21hcmdpbjowO2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MDtwYWRkaW5nOjA7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDp2YXIoLS1jYWxjaXRlLXJhdGluZy1zcGFjaW5nLXVuaXQpfS53cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zdGFye3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Y3Vyc29yOnBvaW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpfS5mb2N1c2Vke291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5hdmVyYWdlLC5mcmFjdGlvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXdhcm5pbmcpfS5ob3ZlcmVkLC5zZWxlY3RlZHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uZnJhY3Rpb257dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtpbnNldC1ibG9jay1zdGFydDowO292ZXJmbG93OmhpZGRlbjtpbnNldC1pbmxpbmUtc3RhcnQ6MH1jYWxjaXRlLWNoaXB7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6ZGVmYXVsdH0ubnVtYmVyLS1hdmVyYWdle2ZvbnQtd2VpZ2h0OmJvbGR9Lm51bWJlci0tY291bnR7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc3R5bGU6aXRhbGljfS5udW1iZXItLWNvdW50Om5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1yYXRpbmctc3BhY2luZy11bml0KX0udmlzdWFsbHktaGlkZGVue3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IFJhdGluZyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlUmF0aW5nQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUmF0aW5nQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuaGFuZGxlUmF0aW5nUG9pbnRlck92ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVSYXRpbmdQb2ludGVyT3V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc0tleWJvYXJkSW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVJhdGluZ0ZvY3VzSW4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZElucHV0ID0gdGhpcy52YWx1ZSA+IDAgPyB0aGlzLnZhbHVlIC0gMSA6IDA7XG4gICAgICBjb25zdCBmb2N1c0lucHV0ID0gdGhpcy5pbnB1dFJlZnNbc2VsZWN0ZWRJbnB1dF07XG4gICAgICBjb25zdCBmb2N1c1ZhbHVlID0gTnVtYmVyKGZvY3VzSW5wdXQudmFsdWUpO1xuICAgICAgZm9jdXNJbnB1dC5zZWxlY3QoKTtcbiAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IGZvY3VzVmFsdWU7XG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBmb2N1c1ZhbHVlO1xuICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVJhdGluZ0ZvY3VzTGVhdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzVmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSG9zdEtleURvd24gPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUlucHV0S2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gICAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG4gICAgICBjb25zdCBudW1iZXJLZXkgPSBrZXkgPT0gXCIgXCIgPyB1bmRlZmluZWQgOiBOdW1iZXIoa2V5KTtcbiAgICAgIHRoaXMuZW1pdCA9IHRydWU7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyS2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gIXRoaXMucmVxdWlyZWQgJiYgdGhpcy52YWx1ZSA9PT0gaW5wdXRWYWwgPyAwIDogaW5wdXRWYWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaW5wdXRWYWwgLSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpbnB1dFZhbCArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiVGFiXCI6XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMucmVxdWlyZWQgJiYgbnVtYmVyS2V5ID49IDAgJiYgbnVtYmVyS2V5IDw9IHRoaXMubWF4KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bWJlcktleTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlcXVpcmVkICYmIG51bWJlcktleSA+IDAgJiYgbnVtYmVyS2V5IDw9IHRoaXMubWF4KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bWJlcktleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsID0gTnVtYmVyKGV2ZW50LnRhcmdldFtcInZhbHVlXCJdKTtcbiAgICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gaW5wdXRWYWw7XG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGlucHV0VmFsO1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5wdXRWYWw7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxhYmVsUG9pbnRlck92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBuZXdQb2ludGVyVmFsdWUgPSBOdW1iZXIodGFyZ2V0LmZpcnN0Q2hpbGRbXCJ2YWx1ZVwiXSB8fCAwKTtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IG5ld1BvaW50ZXJWYWx1ZTtcbiAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxhYmVsUG9pbnRlckRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBpbnB1dFZhbCA9IE51bWJlcih0YXJnZXQuZmlyc3RDaGlsZFtcInZhbHVlXCJdIHx8IDApO1xuICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmVtaXQgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLnJlcXVpcmVkICYmIHRoaXMudmFsdWUgPT09IGlucHV0VmFsID8gMCA6IGlucHV0VmFsO1xuICAgIH07XG4gICAgdGhpcy5lbWl0ID0gZmFsc2U7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtcmF0aW5ncy0ke2d1aWQoKX1gO1xuICAgIHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLm1heCA9IDU7XG4gICAgdGhpcy5hdmVyYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY291bnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zaG93Q2hpcCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb2N1c1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzRm9jdXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGhhbmRsZVZhbHVlVXBkYXRlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5mb2N1c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgaWYgKHRoaXMuZW1pdCkge1xuICAgICAgdGhpcy5jYWxjaXRlUmF0aW5nQ2hhbmdlLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5lbWl0ID0gZmFsc2U7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuaW5wdXRSZWZzID0gQXJyYXkodGhpcy5tYXgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgdGhpcy5zdGFyc01hcCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubWF4IH0sIChfLCBpKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGkgKyAxO1xuICAgICAgY29uc3QgYXZlcmFnZSA9ICF0aGlzLmZvY3VzVmFsdWUgJiZcbiAgICAgICAgIXRoaXMuaG92ZXJWYWx1ZSAmJlxuICAgICAgICB0aGlzLmF2ZXJhZ2UgJiZcbiAgICAgICAgIXRoaXMudmFsdWUgJiZcbiAgICAgICAgdmFsdWUgPD0gdGhpcy5hdmVyYWdlO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgICAgY29uc3QgZm9jdXNlZCA9IHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uICYmIHRoaXMuaGFzRm9jdXMgJiYgdGhpcy5mb2N1c1ZhbHVlID09PSB2YWx1ZTtcbiAgICAgIGNvbnN0IGZyYWN0aW9uID0gdGhpcy5hdmVyYWdlICYmIHRoaXMuYXZlcmFnZSArIDEgLSB2YWx1ZTtcbiAgICAgIGNvbnN0IGhvdmVyZWQgPSB2YWx1ZSA8PSB0aGlzLmhvdmVyVmFsdWU7XG4gICAgICBjb25zdCBpZCA9IGAke3RoaXMuZ3VpZH0tJHt2YWx1ZX1gO1xuICAgICAgY29uc3QgcGFydGlhbCA9ICF0aGlzLmZvY3VzVmFsdWUgJiZcbiAgICAgICAgIXRoaXMuaG92ZXJWYWx1ZSAmJlxuICAgICAgICAhdGhpcy52YWx1ZSAmJlxuICAgICAgICAhaG92ZXJlZCAmJlxuICAgICAgICBmcmFjdGlvbiA+IDAgJiZcbiAgICAgICAgZnJhY3Rpb24gPCAxO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnZhbHVlID49IHZhbHVlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXZlcmFnZSxcbiAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgZm9jdXNlZCxcbiAgICAgICAgZnJhY3Rpb24sXG4gICAgICAgIGhvdmVyZWQsXG4gICAgICAgIGlkLFxuICAgICAgICBpZHg6IGksXG4gICAgICAgIHBhcnRpYWwsXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICB2YWx1ZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLmhhbmRsZVJhdGluZ0ZvY3VzTGVhdmUsIG9uRm9jdXM6IHRoaXMuaGFuZGxlUmF0aW5nRm9jdXNJbiwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUhvc3RLZXlEb3duLCBvblBvaW50ZXJPdXQ6IHRoaXMuaGFuZGxlUmF0aW5nUG9pbnRlck91dCwgb25Qb2ludGVyT3ZlcjogdGhpcy5oYW5kbGVSYXRpbmdQb2ludGVyT3ZlciB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcIndyYXBwZXJcIiB9LCBoKFwiZmllbGRzZXRcIiwgeyBjbGFzczogXCJmaWVsZHNldFwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9LCBoKFwibGVnZW5kXCIsIHsgY2xhc3M6IFwidmlzdWFsbHktaGlkZGVuXCIgfSwgdGhpcy5tZXNzYWdlcy5yYXRpbmcpLCB0aGlzLnN0YXJzTWFwLm1hcCgoeyBhdmVyYWdlLCBjaGVja2VkLCBmb2N1c2VkLCBmcmFjdGlvbiwgaG92ZXJlZCwgaWQsIGlkeCwgcGFydGlhbCwgc2VsZWN0ZWQsIHZhbHVlIH0pID0+IHtcbiAgICAgIHJldHVybiAoaChcImxhYmVsXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgICBzdGFyOiB0cnVlLFxuICAgICAgICAgIGZvY3VzZWQsXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgaG92ZXJlZCxcbiAgICAgICAgICBhdmVyYWdlLFxuICAgICAgICAgIHBhcnRpYWxcbiAgICAgICAgfSwgaHRtbEZvcjogaWQsIG9uUG9pbnRlckRvd246IHRoaXMuaGFuZGxlTGFiZWxQb2ludGVyRG93biwgb25Qb2ludGVyT3ZlcjogdGhpcy5oYW5kbGVMYWJlbFBvaW50ZXJPdmVyIH0sIGgoXCJpbnB1dFwiLCB7IGNoZWNrZWQ6IGNoZWNrZWQsIGNsYXNzOiBcInZpc3VhbGx5LWhpZGRlblwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5LCBpZDogaWQsIG5hbWU6IHRoaXMuZ3VpZCwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVJbnB1dEtleURvd24sIHR5cGU6IFwicmFkaW9cIiwgdmFsdWU6IHZhbHVlLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgICAgcmVmOiAoZWwpID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0UmVmc1tpZHhdID0gZWw7XG4gICAgICAgICAgcmV0dXJuICgodmFsdWUgPT09IDEgfHwgdmFsdWUgPT09IHRoaXMudmFsdWUpICYmXG4gICAgICAgICAgICAodGhpcy5pbnB1dEZvY3VzUmVmID0gZWwpKTtcbiAgICAgICAgfSB9KSwgaChTdGFySWNvbiwgeyBmdWxsOiBzZWxlY3RlZCB8fCBhdmVyYWdlLCBzY2FsZTogdGhpcy5zY2FsZSB9KSwgcGFydGlhbCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImZyYWN0aW9uXCIsIHN0eWxlOiB7IHdpZHRoOiBgJHtmcmFjdGlvbiAqIDEwMH0lYCB9IH0sIGgoU3Rhckljb24sIHsgZnVsbDogdHJ1ZSwgcGFydGlhbDogdHJ1ZSwgc2NhbGU6IHRoaXMuc2NhbGUgfSkpKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ2aXN1YWxseS1oaWRkZW5cIiB9LCB0aGlzLm1lc3NhZ2VzLnN0YXJzLnJlcGxhY2UoXCIke251bX1cIiwgYCR7dmFsdWV9YCkpKSk7XG4gICAgfSksICh0aGlzLmNvdW50IHx8IHRoaXMuYXZlcmFnZSkgJiYgdGhpcy5zaG93Q2hpcCA/IChoKFwiY2FsY2l0ZS1jaGlwXCIsIHsgc2NhbGU6IHRoaXMuc2NhbGUsIHZhbHVlOiB0aGlzLmNvdW50Py50b1N0cmluZygpIH0sICEhdGhpcy5hdmVyYWdlICYmIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwibnVtYmVyLS1hdmVyYWdlXCIgfSwgdGhpcy5hdmVyYWdlLnRvU3RyaW5nKCkpLCAhIXRoaXMuY291bnQgJiYgaChcInNwYW5cIiwgeyBjbGFzczogXCJudW1iZXItLWNvdW50XCIgfSwgXCIoXCIsIHRoaXMuY291bnQ/LnRvU3RyaW5nKCksIFwiKVwiKSkpIDogbnVsbCksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmlucHV0Rm9jdXNSZWY/LmZvY3VzKCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcImhhbmRsZVZhbHVlVXBkYXRlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuUmF0aW5nLnN0eWxlID0gcmF0aW5nQ3NzO1xuXG5leHBvcnQgeyBSYXRpbmcgYXMgY2FsY2l0ZV9yYXRpbmcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=