"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-radio-button_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-radio-button.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-radio-button.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_radio_button": () => (/* binding */ RadioButton)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _array_8048effa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-8048effa.js */ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */











const CSS = {
  container: "container"
};

const radioButtonCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:\"\";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const RadioButton = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalRadioButtonBlur = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalRadioButtonBlur", 6);
    this.calciteRadioButtonChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteRadioButtonChange", 6);
    this.calciteInternalRadioButtonCheckedChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalRadioButtonCheckedChange", 6);
    this.calciteInternalRadioButtonFocus = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalRadioButtonFocus", 6);
    this.selectItem = (items, selectedIndex) => {
      items[selectedIndex].click();
    };
    this.queryButtons = () => {
      return Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((radioButton) => radioButton.name === this.name);
    };
    this.isFocusable = () => {
      const radioButtons = this.queryButtons();
      const firstFocusable = radioButtons.find((radioButton) => !radioButton.disabled);
      const checked = radioButtons.find((radioButton) => radioButton.checked);
      return firstFocusable === this.el && !checked;
    };
    this.check = () => {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      this.setFocus();
      if (this.checked) {
        return;
      }
      this.uncheckAllRadioButtonsInGroup();
      this.checked = true;
      this.calciteRadioButtonChange.emit();
    };
    this.clickHandler = () => {
      if (this.disabled) {
        return;
      }
      this.check();
    };
    this.setContainerEl = (el) => {
      this.containerEl = el;
    };
    this.handleKeyDown = (event) => {
      const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
      const { key } = event;
      const { el } = this;
      if (keys.indexOf(key) === -1) {
        return;
      }
      if (key === " ") {
        this.check();
        event.preventDefault();
        return;
      }
      let adjustedKey = key;
      if ((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.b)(el) === "rtl") {
        if (key === "ArrowRight") {
          adjustedKey = "ArrowLeft";
        }
        if (key === "ArrowLeft") {
          adjustedKey = "ArrowRight";
        }
      }
      const radioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((radioButton) => radioButton.name === this.name);
      let currentIndex = 0;
      const radioButtonsLength = radioButtons.length;
      radioButtons.some((item, index) => {
        if (item.checked) {
          currentIndex = index;
          return true;
        }
      });
      switch (adjustedKey) {
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          this.selectItem(radioButtons, (0,_array_8048effa_js__WEBPACK_IMPORTED_MODULE_1__.g)(Math.max(currentIndex - 1, -1), radioButtonsLength));
          return;
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          this.selectItem(radioButtons, (0,_array_8048effa_js__WEBPACK_IMPORTED_MODULE_1__.g)(currentIndex + 1, radioButtonsLength));
          return;
        default:
          return;
      }
    };
    this.onContainerBlur = () => {
      this.focused = false;
      this.calciteInternalRadioButtonBlur.emit();
    };
    this.onContainerFocus = () => {
      if (!this.disabled) {
        this.focused = true;
        this.calciteInternalRadioButtonFocus.emit();
      }
    };
    this.checked = false;
    this.disabled = false;
    this.focused = false;
    this.form = undefined;
    this.guid = undefined;
    this.hidden = false;
    this.hovered = false;
    this.label = undefined;
    this.name = undefined;
    this.required = false;
    this.scale = "m";
    this.value = undefined;
  }
  checkedChanged(newChecked) {
    if (newChecked) {
      this.uncheckOtherRadioButtonsInGroup();
    }
    this.calciteInternalRadioButtonCheckedChange.emit();
  }
  disabledChanged() {
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  hiddenChanged() {
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  nameChanged() {
    this.checkLastRadioButton();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    if (!this.disabled) {
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.containerEl);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  syncHiddenFormInput(input) {
    input.type = "radio";
  }
  onLabelClick(event) {
    if (this.disabled || this.hidden) {
      return;
    }
    const label = event.currentTarget;
    const radioButton = label.for
      ? this.rootNode.querySelector(`calcite-radio-button[id="${label.for}"]`)
      : label.querySelector(`calcite-radio-button[name="${this.name}"]`);
    if (!radioButton) {
      return;
    }
    radioButton.focused = true;
    this.setFocus();
    if (radioButton.checked) {
      return;
    }
    this.uncheckOtherRadioButtonsInGroup();
    radioButton.checked = true;
    this.calciteRadioButtonChange.emit();
  }
  checkLastRadioButton() {
    const radioButtons = this.queryButtons();
    const checkedRadioButtons = radioButtons.filter((radioButton) => radioButton.checked);
    if (checkedRadioButtons?.length > 1) {
      const lastCheckedRadioButton = checkedRadioButtons[checkedRadioButtons.length - 1];
      checkedRadioButtons
        .filter((checkedRadioButton) => checkedRadioButton !== lastCheckedRadioButton)
        .forEach((checkedRadioButton) => {
        checkedRadioButton.checked = false;
        checkedRadioButton.emitCheckedChange();
      });
    }
  }
  /** @internal */
  async emitCheckedChange() {
    this.calciteInternalRadioButtonCheckedChange.emit();
  }
  uncheckAllRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        radioButton.checked = false;
        radioButton.focused = false;
      }
    });
  }
  uncheckOtherRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    const otherRadioButtons = radioButtons.filter((radioButton) => radioButton.guid !== this.guid);
    otherRadioButtons.forEach((otherRadioButton) => {
      if (otherRadioButton.checked) {
        otherRadioButton.checked = false;
        otherRadioButton.focused = false;
      }
    });
  }
  updateTabIndexOfOtherRadioButtonsInGroup() {
    const radioButtons = this.queryButtons();
    const otherFocusableRadioButtons = radioButtons.filter((radioButton) => radioButton.guid !== this.guid && !radioButton.disabled);
    otherFocusableRadioButtons.forEach((radioButton) => {
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.f)(radioButton);
    });
  }
  getTabIndex() {
    if (this.disabled) {
      return undefined;
    }
    return this.checked || this.isFocusable() ? 0 : -1;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  pointerEnterHandler() {
    if (this.disabled) {
      return;
    }
    this.hovered = true;
  }
  pointerLeaveHandler() {
    if (this.disabled) {
      return;
    }
    this.hovered = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.rootNode = this.el.getRootNode();
    this.guid = this.el.id || `calcite-radio-button-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_4__.g)()}`;
    if (this.name) {
      this.checkLastRadioButton();
    }
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
    if (this.focused && !this.disabled) {
      this.setFocus();
    }
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    this.updateTabIndexOfOtherRadioButtonsInGroup();
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const tabIndex = this.getTabIndex();
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.handleKeyDown }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-checked": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.checked), "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_6__.g)(this), class: CSS.container, onBlur: this.onContainerBlur, onFocus: this.onContainerFocus, role: "radio", tabIndex: tabIndex,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "radio" })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_3__.H, { component: this })));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "disabled": ["disabledChanged"],
    "hidden": ["hiddenChanged"],
    "name": ["nameChanged"]
  }; }
};
RadioButton.style = radioButtonCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDliNzdjNTNkMjNkM2JjYTFhZTYwNTAzZTljYmM0YzcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0g7QUFDakU7QUFDZ0M7QUFDTztBQUN0RDtBQUM2RTtBQUMzQjtBQUNtQjtBQUNuRjtBQUNGOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLDhCQUE4QixtQkFBbUIsYUFBYSxlQUFlLHFCQUFxQixnREFBZ0QsMEJBQTBCLDZGQUE2RiwwREFBMEQsK0VBQStFLG1EQUFtRCx3QkFBd0IseUVBQXlFLG9QQUFvUCx5QkFBeUIsZUFBZSwyQ0FBMkMseUdB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Q0E7QUFDQSxJQUFJLHdEQUFzQjtBQUMxQjtBQUNBO0FBQ0EsSUFBSSx3REFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQXFCO0FBQ3pCLElBQUkscURBQWU7QUFDbkIsSUFBSSxvREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxDQUFDLGlEQUFJLElBQUksMkRBQTJELEVBQUUscURBQUMsVUFBVSxnQkFBZ0IsbURBQWEsOEJBQThCLHFEQUFZO0FBQ3JLO0FBQ0EsZ0NBQWdDLEVBQUUscURBQUMsVUFBVSxnQkFBZ0IsSUFBSSxxREFBQyxDQUFDLGdEQUFtQixJQUFJLGlCQUFpQjtBQUMzRztBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vYXJyYXktODA0OGVmZmEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1yYWRpby1idXR0b24uZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmZ1bmN0aW9uIGdldFJvdW5kUm9iaW5JbmRleChpbmRleCwgdG90YWwpIHtcbiAgcmV0dXJuIChpbmRleCArIHRvdGFsKSAlIHRvdGFsO1xufVxuXG5leHBvcnQgeyBnZXRSb3VuZFJvYmluSW5kZXggYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZiBhcyBmb3JjZVVwZGF0ZSwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Um91bmRSb2JpbkluZGV4IH0gZnJvbSAnLi9hcnJheS04MDQ4ZWZmYS5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIsIGYgYXMgZm9jdXNFbGVtZW50LCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0tZDczNTllZmUuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsLTlkMmViMzM0LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCJcbn07XG5cbmNvbnN0IHJhZGlvQnV0dG9uQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9jaztjdXJzb3I6cG9pbnRlcn06aG9zdCAuY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH06aG9zdCAucmFkaW97Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czo5OTk5cHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCl9Omhvc3QoW2hvdmVyZWRdKSAucmFkaW8sOmhvc3QoOm5vdChbY2hlY2tlZF0pW2ZvY3VzZWRdOm5vdChbZGlzYWJsZWRdKSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtmb2N1c2VkXSkgLnJhZGlve291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtkaXNhYmxlZF0pIC5yYWRpb3tjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtob3ZlcmVkXVtkaXNhYmxlZF0pIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCl9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtcmFkaW8tc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMil9Omhvc3QoW3NjYWxlPW1dKXstLWNhbGNpdGUtcmFkaW8tc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtcmFkaW8tc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKX0ucmFkaW97YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpO21heC1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpO21pbi1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpfTpob3N0KFtzY2FsZT1zXVtjaGVja2VkXSkgLnJhZGlvLDpob3N0KFtob3ZlcmVkXVtzY2FsZT1zXVtjaGVja2VkXVtkaXNhYmxlZF0pIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDRweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbc2NhbGU9c11bZm9jdXNlZF1bY2hlY2tlZF06bm90KFtkaXNhYmxlZF0pKSAucmFkaW97Ym94LXNoYWRvdzppbnNldCAwIDAgMCA0cHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCksIDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW3NjYWxlPW1dW2NoZWNrZWRdKSAucmFkaW8sOmhvc3QoW2hvdmVyZWRdW3NjYWxlPW1dW2NoZWNrZWRdW2Rpc2FibGVkXSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgNXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtzY2FsZT1tXVtmb2N1c2VkXVtjaGVja2VkXTpub3QoW2Rpc2FibGVkXSkpIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDVweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSwgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc2NhbGU9bF1bY2hlY2tlZF0pIC5yYWRpbyw6aG9zdChbaG92ZXJlZF1bc2NhbGU9bF1bY2hlY2tlZF1bZGlzYWJsZWRdKSAucmFkaW97Ym94LXNoYWRvdzppbnNldCAwIDAgMCA2cHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW3NjYWxlPWxdW2ZvY3VzZWRdW2NoZWNrZWRdOm5vdChbZGlzYWJsZWRdKSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgNnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpLCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXs6aG9zdChbY2hlY2tlZF0pIC5yYWRpbzo6YWZ0ZXIsOmhvc3QoW2NoZWNrZWRdW2Rpc2FibGVkXSkgLnJhZGlvOjphZnRlcntjb250ZW50OlxcXCJcXFwiO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtcmFkaW8tc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXJhZGlvLXNpemUpO2JhY2tncm91bmQtY29sb3I6d2luZG93VGV4dDtkaXNwbGF5OmJsb2NrfX06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgUmFkaW9CdXR0b24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkJsdXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUmFkaW9CdXR0b25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVSYWRpb0J1dHRvbkNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFJhZGlvQnV0dG9uQ2hlY2tlZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25DaGVja2VkQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25Gb2N1c1wiLCA2KTtcbiAgICB0aGlzLnNlbGVjdEl0ZW0gPSAoaXRlbXMsIHNlbGVjdGVkSW5kZXgpID0+IHtcbiAgICAgIGl0ZW1zW3NlbGVjdGVkSW5kZXhdLmNsaWNrKCk7XG4gICAgfTtcbiAgICB0aGlzLnF1ZXJ5QnV0dG9ucyA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtcmFkaW8tYnV0dG9uOm5vdChbaGlkZGVuXSlcIikpLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLm5hbWUgPT09IHRoaXMubmFtZSk7XG4gICAgfTtcbiAgICB0aGlzLmlzRm9jdXNhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gdGhpcy5xdWVyeUJ1dHRvbnMoKTtcbiAgICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlID0gcmFkaW9CdXR0b25zLmZpbmQoKHJhZGlvQnV0dG9uKSA9PiAhcmFkaW9CdXR0b24uZGlzYWJsZWQpO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHJhZGlvQnV0dG9ucy5maW5kKChyYWRpb0J1dHRvbikgPT4gcmFkaW9CdXR0b24uY2hlY2tlZCk7XG4gICAgICByZXR1cm4gZmlyc3RGb2N1c2FibGUgPT09IHRoaXMuZWwgJiYgIWNoZWNrZWQ7XG4gICAgfTtcbiAgICB0aGlzLmNoZWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy51bmNoZWNrQWxsUmFkaW9CdXR0b25zSW5Hcm91cCgpO1xuICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsY2l0ZVJhZGlvQnV0dG9uQ2hhbmdlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVjaygpO1xuICAgIH07XG4gICAgdGhpcy5zZXRDb250YWluZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gW1wiQXJyb3dMZWZ0XCIsIFwiQXJyb3dVcFwiLCBcIkFycm93UmlnaHRcIiwgXCJBcnJvd0Rvd25cIiwgXCIgXCJdO1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgYWRqdXN0ZWRLZXkgPSBrZXk7XG4gICAgICBpZiAoZ2V0RWxlbWVudERpcihlbCkgPT09IFwicnRsXCIpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICBhZGp1c3RlZEtleSA9IFwiQXJyb3dMZWZ0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgIGFkanVzdGVkS2V5ID0gXCJBcnJvd1JpZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1yYWRpby1idXR0b246bm90KFtoaWRkZW5dXCIpKS5maWx0ZXIoKHJhZGlvQnV0dG9uKSA9PiByYWRpb0J1dHRvbi5uYW1lID09PSB0aGlzLm5hbWUpO1xuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICBjb25zdCByYWRpb0J1dHRvbnNMZW5ndGggPSByYWRpb0J1dHRvbnMubGVuZ3RoO1xuICAgICAgcmFkaW9CdXR0b25zLnNvbWUoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2l0Y2ggKGFkanVzdGVkS2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShyYWRpb0J1dHRvbnMsIGdldFJvdW5kUm9iaW5JbmRleChNYXRoLm1heChjdXJyZW50SW5kZXggLSAxLCAtMSksIHJhZGlvQnV0dG9uc0xlbmd0aCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHJhZGlvQnV0dG9ucywgZ2V0Um91bmRSb2JpbkluZGV4KGN1cnJlbnRJbmRleCArIDEsIHJhZGlvQnV0dG9uc0xlbmd0aCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uQ29udGFpbmVyQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkJsdXIuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkNvbnRhaW5lckZvY3VzID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25Gb2N1cy5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3VpZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBjaGVja2VkQ2hhbmdlZChuZXdDaGVja2VkKSB7XG4gICAgaWYgKG5ld0NoZWNrZWQpIHtcbiAgICAgIHRoaXMudW5jaGVja090aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpO1xuICAgIH1cbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFJhZGlvQnV0dG9uQ2hlY2tlZENoYW5nZS5lbWl0KCk7XG4gIH1cbiAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgIHRoaXMudXBkYXRlVGFiSW5kZXhPZk90aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpO1xuICB9XG4gIGhpZGRlbkNoYW5nZWQoKSB7XG4gICAgdGhpcy51cGRhdGVUYWJJbmRleE9mT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCk7XG4gIH1cbiAgbmFtZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5jaGVja0xhc3RSYWRpb0J1dHRvbigpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgZm9jdXNFbGVtZW50KHRoaXMuY29udGFpbmVyRWwpO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzeW5jSGlkZGVuRm9ybUlucHV0KGlucHV0KSB7XG4gICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgfVxuICBvbkxhYmVsQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmhpZGRlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYWJlbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgcmFkaW9CdXR0b24gPSBsYWJlbC5mb3JcbiAgICAgID8gdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yKGBjYWxjaXRlLXJhZGlvLWJ1dHRvbltpZD1cIiR7bGFiZWwuZm9yfVwiXWApXG4gICAgICA6IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoYGNhbGNpdGUtcmFkaW8tYnV0dG9uW25hbWU9XCIke3RoaXMubmFtZX1cIl1gKTtcbiAgICBpZiAoIXJhZGlvQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJhZGlvQnV0dG9uLmZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVuY2hlY2tPdGhlclJhZGlvQnV0dG9uc0luR3JvdXAoKTtcbiAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNhbGNpdGVSYWRpb0J1dHRvbkNoYW5nZS5lbWl0KCk7XG4gIH1cbiAgY2hlY2tMYXN0UmFkaW9CdXR0b24oKSB7XG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gdGhpcy5xdWVyeUJ1dHRvbnMoKTtcbiAgICBjb25zdCBjaGVja2VkUmFkaW9CdXR0b25zID0gcmFkaW9CdXR0b25zLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLmNoZWNrZWQpO1xuICAgIGlmIChjaGVja2VkUmFkaW9CdXR0b25zPy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBsYXN0Q2hlY2tlZFJhZGlvQnV0dG9uID0gY2hlY2tlZFJhZGlvQnV0dG9uc1tjaGVja2VkUmFkaW9CdXR0b25zLmxlbmd0aCAtIDFdO1xuICAgICAgY2hlY2tlZFJhZGlvQnV0dG9uc1xuICAgICAgICAuZmlsdGVyKChjaGVja2VkUmFkaW9CdXR0b24pID0+IGNoZWNrZWRSYWRpb0J1dHRvbiAhPT0gbGFzdENoZWNrZWRSYWRpb0J1dHRvbilcbiAgICAgICAgLmZvckVhY2goKGNoZWNrZWRSYWRpb0J1dHRvbikgPT4ge1xuICAgICAgICBjaGVja2VkUmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2VkUmFkaW9CdXR0b24uZW1pdENoZWNrZWRDaGFuZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIGVtaXRDaGVja2VkQ2hhbmdlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25DaGVja2VkQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICB1bmNoZWNrQWxsUmFkaW9CdXR0b25zSW5Hcm91cCgpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLnF1ZXJ5QnV0dG9ucygpO1xuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKChyYWRpb0J1dHRvbikgPT4ge1xuICAgICAgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICByYWRpb0J1dHRvbi5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdW5jaGVja090aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLnF1ZXJ5QnV0dG9ucygpO1xuICAgIGNvbnN0IG90aGVyUmFkaW9CdXR0b25zID0gcmFkaW9CdXR0b25zLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLmd1aWQgIT09IHRoaXMuZ3VpZCk7XG4gICAgb3RoZXJSYWRpb0J1dHRvbnMuZm9yRWFjaCgob3RoZXJSYWRpb0J1dHRvbikgPT4ge1xuICAgICAgaWYgKG90aGVyUmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICBvdGhlclJhZGlvQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgb3RoZXJSYWRpb0J1dHRvbi5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlVGFiSW5kZXhPZk90aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLnF1ZXJ5QnV0dG9ucygpO1xuICAgIGNvbnN0IG90aGVyRm9jdXNhYmxlUmFkaW9CdXR0b25zID0gcmFkaW9CdXR0b25zLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLmd1aWQgIT09IHRoaXMuZ3VpZCAmJiAhcmFkaW9CdXR0b24uZGlzYWJsZWQpO1xuICAgIG90aGVyRm9jdXNhYmxlUmFkaW9CdXR0b25zLmZvckVhY2goKHJhZGlvQnV0dG9uKSA9PiB7XG4gICAgICBmb3JjZVVwZGF0ZShyYWRpb0J1dHRvbik7XG4gICAgfSk7XG4gIH1cbiAgZ2V0VGFiSW5kZXgoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoZWNrZWQgfHwgdGhpcy5pc0ZvY3VzYWJsZSgpID8gMCA6IC0xO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHBvaW50ZXJFbnRlckhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ob3ZlcmVkID0gdHJ1ZTtcbiAgfVxuICBwb2ludGVyTGVhdmVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSB0aGlzLmVsLmdldFJvb3ROb2RlKCk7XG4gICAgdGhpcy5ndWlkID0gdGhpcy5lbC5pZCB8fCBgY2FsY2l0ZS1yYWRpby1idXR0b24tJHtndWlkKCl9YDtcbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICB0aGlzLmNoZWNrTGFzdFJhZGlvQnV0dG9uKCk7XG4gICAgfVxuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy51cGRhdGVUYWJJbmRleE9mT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy5mb2N1c2VkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy51cGRhdGVUYWJJbmRleE9mT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy5nZXRUYWJJbmRleCgpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuY2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93biB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWNoZWNrZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLmNoZWNrZWQpLCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBjbGFzczogQ1NTLmNvbnRhaW5lciwgb25CbHVyOiB0aGlzLm9uQ29udGFpbmVyQmx1ciwgb25Gb2N1czogdGhpcy5vbkNvbnRhaW5lckZvY3VzLCByb2xlOiBcInJhZGlvXCIsIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldENvbnRhaW5lckVsIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYWRpb1wiIH0pKSwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImNoZWNrZWRcIjogW1wiY2hlY2tlZENoYW5nZWRcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgXCJoaWRkZW5cIjogW1wiaGlkZGVuQ2hhbmdlZFwiXSxcbiAgICBcIm5hbWVcIjogW1wibmFtZUNoYW5nZWRcIl1cbiAgfTsgfVxufTtcblJhZGlvQnV0dG9uLnN0eWxlID0gcmFkaW9CdXR0b25Dc3M7XG5cbmV4cG9ydCB7IFJhZGlvQnV0dG9uIGFzIGNhbGNpdGVfcmFkaW9fYnV0dG9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=