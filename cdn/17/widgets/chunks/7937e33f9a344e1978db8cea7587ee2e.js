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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  async componentWillLoad() {
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzkzN2UzM2Y5YTM0NGUxOTc4ZGI4Y2VhNzU4N2VlMmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ1I7QUFDdEQ7QUFDNkU7QUFDOUM7QUFDc0M7QUFDN0I7QUFDb0M7QUFDaEc7QUFDTTtBQUNGO0FBQ0o7QUFDTTs7QUFFakMsb0JBQW9CLHNCQUFzQixNQUFNLHFEQUFDLG1CQUFtQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlDQUFpQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLHdHQUF3RyxvQkFBb0IsTUFBTSxrQkFBa0IsYUFBYSxtQkFBbUIsNkJBQTZCLHdCQUF3Qix5R0FBeUcsVUFBVSxpQkFBaUIsa0JBQWtCLHNDQUFzQyxpQkFBaUIsZ0JBQWdCLHFDQUFxQyxpQkFBaUIsbUJBQW1CLHNDQUFzQyxVQUFVLFNBQVMsYUFBYSxlQUFlLFVBQVUsbUJB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QUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUcscURBQUMsYUFBYSw4Q0FBOEMsZUFBZSxxREFBQyxVQUFVLDRCQUE0QixVQUFVLGVBQWUsTUFBTSxFQUFFLHFEQUFDLGFBQWEsOENBQThDLEtBQUsscURBQUMsV0FBVywwQkFBMEIsaUNBQWlDLElBQUksTUFBTSxNQUFNO0FBQ3pULEtBQUssb0RBQW9ELHFEQUFDLG1CQUFtQixrREFBa0Qsb0JBQW9CLHFEQUFDLFdBQVcsMEJBQTBCLDRDQUE0QyxxREFBQyxXQUFXLHdCQUF3QiwrQ0FBK0MscURBQUMsQ0FBQyxnREFBbUIsSUFBSSxpQkFBaUI7QUFDbFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1yYXRpbmcuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGgsIHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS1kNzM1OWVmZS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsIH0gZnJvbSAnLi9sYWJlbC05ZDJlYjMzNC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuXG5jb25zdCBTdGFySWNvbiA9ICh7IGZ1bGwsIHNjYWxlLCBwYXJ0aWFsIH0pID0+IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgLi4ue1xuICAgIGNsYXNzOiBwYXJ0aWFsID8gdW5kZWZpbmVkIDogXCJpY29uXCIsXG4gICAgaWNvbjogZnVsbCA/IFwic3Rhci1mXCIgOiBcInN0YXJcIixcbiAgICBzY2FsZVxuICB9IH0pKTtcblxuY29uc3QgcmF0aW5nQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtyZWFkLW9ubHldKSAqLDpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW3JlYWQtb25seV0pIDo6c2xvdHRlZCgqKSw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2lubGluZS1zaXplOi1tb3otZml0LWNvbnRlbnQ7aW5saW5lLXNpemU6Zml0LWNvbnRlbnR9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSl7YmxvY2stc2l6ZToxLjVyZW07LS1jYWxjaXRlLXJhdGluZy1zcGFjaW5nLXVuaXQ6MC4yNXJlbX06aG9zdChbc2NhbGU9bV0pe2Jsb2NrLXNpemU6MnJlbTstLWNhbGNpdGUtcmF0aW5nLXNwYWNpbmctdW5pdDowLjVyZW19Omhvc3QoW3NjYWxlPWxdKXtibG9jay1zaXplOjIuNzVyZW07LS1jYWxjaXRlLXJhdGluZy1zcGFjaW5nLXVuaXQ6MC43NXJlbX0uZmllbGRzZXR7bWFyZ2luOjA7ZGlzcGxheTpmbGV4O2JvcmRlci13aWR0aDowO3BhZGRpbmc6MDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOnZhcigtLWNhbGNpdGUtcmF0aW5nLXNwYWNpbmctdW5pdCl9LndyYXBwZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnN0YXJ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtjdXJzb3I6cG9pbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCl9LmZvY3VzZWR7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmF2ZXJhZ2UsLmZyYWN0aW9ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktd2FybmluZyl9LmhvdmVyZWQsLnNlbGVjdGVke2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5mcmFjdGlvbnt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO2luc2V0LWJsb2NrLXN0YXJ0OjA7b3ZlcmZsb3c6aGlkZGVuO2luc2V0LWlubGluZS1zdGFydDowfWNhbGNpdGUtY2hpcHtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpkZWZhdWx0fS5udW1iZXItLWF2ZXJhZ2V7Zm9udC13ZWlnaHQ6Ym9sZH0ubnVtYmVyLS1jb3VudHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zdHlsZTppdGFsaWN9Lm51bWJlci0tY291bnQ6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLXJhdGluZy1zcGFjaW5nLXVuaXQpfS52aXN1YWxseS1oaWRkZW57cG9zaXRpb246YWJzb2x1dGU7aW5saW5lLXNpemU6MXB4O2Jsb2NrLXNpemU6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsIDAsIDAsIDApO3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItd2lkdGg6MH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgUmF0aW5nID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVSYXRpbmdDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVSYXRpbmdDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5oYW5kbGVSYXRpbmdQb2ludGVyT3ZlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVJhdGluZ1BvaW50ZXJPdXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlUmF0aW5nRm9jdXNJbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSW5wdXQgPSB0aGlzLnZhbHVlID4gMCA/IHRoaXMudmFsdWUgLSAxIDogMDtcbiAgICAgIGNvbnN0IGZvY3VzSW5wdXQgPSB0aGlzLmlucHV0UmVmc1tzZWxlY3RlZElucHV0XTtcbiAgICAgIGNvbnN0IGZvY3VzVmFsdWUgPSBOdW1iZXIoZm9jdXNJbnB1dC52YWx1ZSk7XG4gICAgICBmb2N1c0lucHV0LnNlbGVjdCgpO1xuICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gZm9jdXNWYWx1ZTtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGZvY3VzVmFsdWU7XG4gICAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlUmF0aW5nRm9jdXNMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIb3N0S2V5RG93biA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uID0gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSW5wdXRLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgaW5wdXRWYWwgPSBOdW1iZXIodGFyZ2V0LnZhbHVlKTtcbiAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcbiAgICAgIGNvbnN0IG51bWJlcktleSA9IGtleSA9PSBcIiBcIiA/IHVuZGVmaW5lZCA6IE51bWJlcihrZXkpO1xuICAgICAgdGhpcy5lbWl0ID0gdHJ1ZTtcbiAgICAgIGlmIChpc05hTihudW1iZXJLZXkpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy5yZXF1aXJlZCAmJiB0aGlzLnZhbHVlID09PSBpbnB1dFZhbCA/IDAgOiBpbnB1dFZhbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpbnB1dFZhbCAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGlucHV0VmFsICsgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5yZXF1aXJlZCAmJiBudW1iZXJLZXkgPj0gMCAmJiBudW1iZXJLZXkgPD0gdGhpcy5tYXgpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbnVtYmVyS2V5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucmVxdWlyZWQgJiYgbnVtYmVyS2V5ID4gMCAmJiBudW1iZXJLZXkgPD0gdGhpcy5tYXgpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbnVtYmVyS2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0tleWJvYXJkSW50ZXJhY3Rpb24gPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWwgPSBOdW1iZXIoZXZlbnQudGFyZ2V0W1widmFsdWVcIl0pO1xuICAgICAgICB0aGlzLmZvY3VzVmFsdWUgPSBpbnB1dFZhbDtcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gaW5wdXRWYWw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBpbnB1dFZhbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTGFiZWxQb2ludGVyT3ZlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IG5ld1BvaW50ZXJWYWx1ZSA9IE51bWJlcih0YXJnZXQuZmlyc3RDaGlsZFtcInZhbHVlXCJdIHx8IDApO1xuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gbmV3UG9pbnRlclZhbHVlO1xuICAgICAgdGhpcy5mb2N1c1ZhbHVlID0gbnVsbDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTGFiZWxQb2ludGVyRG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGlucHV0VmFsID0gTnVtYmVyKHRhcmdldC5maXJzdENoaWxkW1widmFsdWVcIl0gfHwgMCk7XG4gICAgICB0aGlzLmZvY3VzVmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuZW1pdCA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlID0gIXRoaXMucmVxdWlyZWQgJiYgdGhpcy52YWx1ZSA9PT0gaW5wdXRWYWwgPyAwIDogaW5wdXRWYWw7XG4gICAgfTtcbiAgICB0aGlzLmVtaXQgPSBmYWxzZTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS1yYXRpbmdzLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5pc0tleWJvYXJkSW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgIHRoaXMubWF4ID0gNTtcbiAgICB0aGlzLmF2ZXJhZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb3VudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNob3dDaGlwID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvY3VzVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNGb2N1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgaGFuZGxlVmFsdWVVcGRhdGUobmV3VmFsdWUpIHtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLmZvY3VzVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBpZiAodGhpcy5lbWl0KSB7XG4gICAgICB0aGlzLmNhbGNpdGVSYXRpbmdDaGFuZ2UuZW1pdCgpO1xuICAgIH1cbiAgICB0aGlzLmVtaXQgPSBmYWxzZTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuaW5wdXRSZWZzID0gQXJyYXkodGhpcy5tYXgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgdGhpcy5zdGFyc01hcCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubWF4IH0sIChfLCBpKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGkgKyAxO1xuICAgICAgY29uc3QgYXZlcmFnZSA9ICF0aGlzLmZvY3VzVmFsdWUgJiZcbiAgICAgICAgIXRoaXMuaG92ZXJWYWx1ZSAmJlxuICAgICAgICB0aGlzLmF2ZXJhZ2UgJiZcbiAgICAgICAgIXRoaXMudmFsdWUgJiZcbiAgICAgICAgdmFsdWUgPD0gdGhpcy5hdmVyYWdlO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgICAgY29uc3QgZm9jdXNlZCA9IHRoaXMuaXNLZXlib2FyZEludGVyYWN0aW9uICYmIHRoaXMuaGFzRm9jdXMgJiYgdGhpcy5mb2N1c1ZhbHVlID09PSB2YWx1ZTtcbiAgICAgIGNvbnN0IGZyYWN0aW9uID0gdGhpcy5hdmVyYWdlICYmIHRoaXMuYXZlcmFnZSArIDEgLSB2YWx1ZTtcbiAgICAgIGNvbnN0IGhvdmVyZWQgPSB2YWx1ZSA8PSB0aGlzLmhvdmVyVmFsdWU7XG4gICAgICBjb25zdCBpZCA9IGAke3RoaXMuZ3VpZH0tJHt2YWx1ZX1gO1xuICAgICAgY29uc3QgcGFydGlhbCA9ICF0aGlzLmZvY3VzVmFsdWUgJiZcbiAgICAgICAgIXRoaXMuaG92ZXJWYWx1ZSAmJlxuICAgICAgICAhdGhpcy52YWx1ZSAmJlxuICAgICAgICAhaG92ZXJlZCAmJlxuICAgICAgICBmcmFjdGlvbiA+IDAgJiZcbiAgICAgICAgZnJhY3Rpb24gPCAxO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnZhbHVlID49IHZhbHVlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXZlcmFnZSxcbiAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgZm9jdXNlZCxcbiAgICAgICAgZnJhY3Rpb24sXG4gICAgICAgIGhvdmVyZWQsXG4gICAgICAgIGlkLFxuICAgICAgICBpZHg6IGksXG4gICAgICAgIHBhcnRpYWwsXG4gICAgICAgIHNlbGVjdGVkLFxuICAgICAgICB2YWx1ZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQmx1cjogdGhpcy5oYW5kbGVSYXRpbmdGb2N1c0xlYXZlLCBvbkZvY3VzOiB0aGlzLmhhbmRsZVJhdGluZ0ZvY3VzSW4sIG9uS2V5RG93bjogdGhpcy5oYW5kbGVIb3N0S2V5RG93biwgb25Qb2ludGVyT3V0OiB0aGlzLmhhbmRsZVJhdGluZ1BvaW50ZXJPdXQsIG9uUG9pbnRlck92ZXI6IHRoaXMuaGFuZGxlUmF0aW5nUG9pbnRlck92ZXIgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ3cmFwcGVyXCIgfSwgaChcImZpZWxkc2V0XCIsIHsgY2xhc3M6IFwiZmllbGRzZXRcIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSwgaChcImxlZ2VuZFwiLCB7IGNsYXNzOiBcInZpc3VhbGx5LWhpZGRlblwiIH0sIHRoaXMubWVzc2FnZXMucmF0aW5nKSwgdGhpcy5zdGFyc01hcC5tYXAoKHsgYXZlcmFnZSwgY2hlY2tlZCwgZm9jdXNlZCwgZnJhY3Rpb24sIGhvdmVyZWQsIGlkLCBpZHgsIHBhcnRpYWwsIHNlbGVjdGVkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICByZXR1cm4gKGgoXCJsYWJlbFwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgc3RhcjogdHJ1ZSxcbiAgICAgICAgICBmb2N1c2VkLFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIGhvdmVyZWQsXG4gICAgICAgICAgYXZlcmFnZSxcbiAgICAgICAgICBwYXJ0aWFsXG4gICAgICAgIH0sIGh0bWxGb3I6IGlkLCBvblBvaW50ZXJEb3duOiB0aGlzLmhhbmRsZUxhYmVsUG9pbnRlckRvd24sIG9uUG9pbnRlck92ZXI6IHRoaXMuaGFuZGxlTGFiZWxQb2ludGVyT3ZlciB9LCBoKFwiaW5wdXRcIiwgeyBjaGVja2VkOiBjaGVja2VkLCBjbGFzczogXCJ2aXN1YWxseS1oaWRkZW5cIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgaWQ6IGlkLCBuYW1lOiB0aGlzLmd1aWQsIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLCBvbktleURvd246IHRoaXMuaGFuZGxlSW5wdXRLZXlEb3duLCB0eXBlOiBcInJhZGlvXCIsIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICAgIHJlZjogKGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnB1dFJlZnNbaWR4XSA9IGVsO1xuICAgICAgICAgIHJldHVybiAoKHZhbHVlID09PSAxIHx8IHZhbHVlID09PSB0aGlzLnZhbHVlKSAmJlxuICAgICAgICAgICAgKHRoaXMuaW5wdXRGb2N1c1JlZiA9IGVsKSk7XG4gICAgICAgIH0gfSksIGgoU3Rhckljb24sIHsgZnVsbDogc2VsZWN0ZWQgfHwgYXZlcmFnZSwgc2NhbGU6IHRoaXMuc2NhbGUgfSksIHBhcnRpYWwgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJmcmFjdGlvblwiLCBzdHlsZTogeyB3aWR0aDogYCR7ZnJhY3Rpb24gKiAxMDB9JWAgfSB9LCBoKFN0YXJJY29uLCB7IGZ1bGw6IHRydWUsIHBhcnRpYWw6IHRydWUsIHNjYWxlOiB0aGlzLnNjYWxlIH0pKSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwidmlzdWFsbHktaGlkZGVuXCIgfSwgdGhpcy5tZXNzYWdlcy5zdGFycy5yZXBsYWNlKFwiJHtudW19XCIsIGAke3ZhbHVlfWApKSkpO1xuICAgIH0pLCAodGhpcy5jb3VudCB8fCB0aGlzLmF2ZXJhZ2UpICYmIHRoaXMuc2hvd0NoaXAgPyAoaChcImNhbGNpdGUtY2hpcFwiLCB7IHNjYWxlOiB0aGlzLnNjYWxlLCB2YWx1ZTogdGhpcy5jb3VudD8udG9TdHJpbmcoKSB9LCAhIXRoaXMuYXZlcmFnZSAmJiBoKFwic3BhblwiLCB7IGNsYXNzOiBcIm51bWJlci0tYXZlcmFnZVwiIH0sIHRoaXMuYXZlcmFnZS50b1N0cmluZygpKSwgISF0aGlzLmNvdW50ICYmIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwibnVtYmVyLS1jb3VudFwiIH0sIFwiKFwiLCB0aGlzLmNvdW50Py50b1N0cmluZygpLCBcIilcIikpKSA6IG51bGwpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5pbnB1dEZvY3VzUmVmPy5mb2N1cygpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJoYW5kbGVWYWx1ZVVwZGF0ZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcblJhdGluZy5zdHlsZSA9IHJhdGluZ0NzcztcblxuZXhwb3J0IHsgUmF0aW5nIGFzIGNhbGNpdGVfcmF0aW5nIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=