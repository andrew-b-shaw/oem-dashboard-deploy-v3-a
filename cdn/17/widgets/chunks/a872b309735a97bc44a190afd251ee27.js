"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-radio-button_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/array-e86a0605.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/array-e86a0605.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-radio-button.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-radio-button.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_radio_button": () => (/* binding */ RadioButton)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _array_e86a0605_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-e86a0605.js */ "./node_modules/@esri/calcite-components/dist/esm/array-e86a0605.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */










const CSS = {
  container: "container"
};

const radioButtonCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:\"\";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const RadioButton = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalRadioButtonBlur = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalRadioButtonBlur", 6);
    this.calciteRadioButtonChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteRadioButtonChange", 6);
    this.calciteInternalRadioButtonCheckedChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalRadioButtonCheckedChange", 6);
    this.calciteInternalRadioButtonFocus = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalRadioButtonFocus", 6);
    this.selectItem = (items, selectedIndex) => {
      items[selectedIndex].click();
    };
    this.queryButtons = () => {
      return Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((radioButton) => radioButton.name === this.name);
    };
    this.isDefaultSelectable = () => {
      const radioButtons = this.queryButtons();
      return !radioButtons.some((radioButton) => radioButton.checked) && radioButtons[0] === this.el;
    };
    this.check = () => {
      if (this.disabled) {
        return;
      }
      this.uncheckAllRadioButtonsInGroup();
      this.checked = true;
      this.focused = true;
      this.calciteRadioButtonChange.emit();
      this.setFocus();
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
      if ((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.b)(el) === "rtl") {
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
          this.selectItem(radioButtons, (0,_array_e86a0605_js__WEBPACK_IMPORTED_MODULE_1__.g)(Math.max(currentIndex - 1, -1), radioButtonsLength));
          return;
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          this.selectItem(radioButtons, (0,_array_e86a0605_js__WEBPACK_IMPORTED_MODULE_1__.g)(currentIndex + 1, radioButtonsLength));
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    if (!this.disabled) {
      (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.containerEl);
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
    if (!this.disabled && !this.hidden) {
      this.uncheckOtherRadioButtonsInGroup();
      const label = event.currentTarget;
      const radioButton = label.for
        ? this.rootNode.querySelector(`calcite-radio-button[id="${label.for}"]`)
        : label.querySelector(`calcite-radio-button[name="${this.name}"]`);
      if (radioButton) {
        radioButton.checked = true;
        radioButton.focused = true;
      }
      this.calciteRadioButtonChange.emit();
      this.setFocus();
    }
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
  getTabIndex() {
    if (this.disabled) {
      return undefined;
    }
    return this.checked || this.isDefaultSelectable() ? 0 : -1;
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
    this.guid = this.el.id || `calcite-radio-button-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_4__.g)()}`;
    if (this.name) {
      this.checkLastRadioButton();
    }
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
    if (this.focused && !this.disabled) {
      this.setFocus();
    }
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_5__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const tabIndex = this.getTabIndex();
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.handleKeyDown }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-checked": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.checked), "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__.g)(this), class: CSS.container, onBlur: this.onContainerBlur, onFocus: this.onContainerFocus, role: "radio", tabIndex: tabIndex,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "radio" })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_3__.H, { component: this })));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "name": ["nameChanged"]
  }; }
};
RadioButton.style = radioButtonCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYTg3MmIzMDk3MzVhOTdiYzQ0YTE5MGFmZDI1MWVlMjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUMvQztBQUNnQztBQUNPO0FBQ3REO0FBQ3dCO0FBQzBCO0FBQ21CO0FBQ25GOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLDhCQUE4QixtQkFBbUIsYUFBYSxlQUFlLHFCQUFxQixnREFBZ0QsMEJBQTBCLDZGQUE2RiwwREFBMEQsK0VBQStFLG1EQUFtRCx3QkFBd0IseUVBQXlFLG9QQUFvUCx5QkFBeUIsZUFBZSwyQ0FBMkMseUdBQXlHLFVB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQUksSUFBSSwyREFBMkQsRUFBRSxxREFBQyxVQUFVLGdCQUFnQixtREFBYSw4QkFBOEIscURBQVk7QUFDcks7QUFDQSxnQ0FBZ0MsRUFBRSxxREFBQyxVQUFVLGdCQUFnQixJQUFJLHFEQUFDLENBQUMsZ0RBQW1CLElBQUksaUJBQWlCO0FBQzNHO0FBQ0EsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2FycmF5LWU4NmEwNjA1LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtcmFkaW8tYnV0dG9uLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5mdW5jdGlvbiBnZXRSb3VuZFJvYmluSW5kZXgoaW5kZXgsIHRvdGFsKSB7XG4gIHJldHVybiAoaW5kZXggKyB0b3RhbCkgJSB0b3RhbDtcbn1cblxuZXhwb3J0IHsgZ2V0Um91bmRSb2JpbkluZGV4IGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFJvdW5kUm9iaW5JbmRleCB9IGZyb20gJy4vYXJyYXktZTg2YTA2MDUuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCBmIGFzIGZvY3VzRWxlbWVudCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLTQ0NTMwMDAxLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwtNTljOWQ0NzIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRMb2FkZWQsIHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIlxufTtcblxuY29uc3QgcmFkaW9CdXR0b25Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrO2N1cnNvcjpwb2ludGVyfTpob3N0IC5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fTpob3N0IC5yYWRpb3tjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjk5OTlweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KX06aG9zdChbaG92ZXJlZF0pIC5yYWRpbyw6aG9zdCg6bm90KFtjaGVja2VkXSlbZm9jdXNlZF06bm90KFtkaXNhYmxlZF0pKSAucmFkaW97Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2ZvY3VzZWRdKSAucmFkaW97b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW2Rpc2FibGVkXSkgLnJhZGlve2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW2hvdmVyZWRdW2Rpc2FibGVkXSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KX06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1yYWRpby1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1yYWRpby1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1yYWRpby1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApfS5yYWRpb3tibG9jay1zaXplOnZhcigtLWNhbGNpdGUtcmFkaW8tc2l6ZSk7bWF4LWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtcmFkaW8tc2l6ZSk7bWluLWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtcmFkaW8tc2l6ZSl9Omhvc3QoW3NjYWxlPXNdW2NoZWNrZWRdKSAucmFkaW8sOmhvc3QoW2hvdmVyZWRdW3NjYWxlPXNdW2NoZWNrZWRdW2Rpc2FibGVkXSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgNHB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtzY2FsZT1zXVtmb2N1c2VkXVtjaGVja2VkXTpub3QoW2Rpc2FibGVkXSkpIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDRweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSwgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbc2NhbGU9bV1bY2hlY2tlZF0pIC5yYWRpbyw6aG9zdChbaG92ZXJlZF1bc2NhbGU9bV1bY2hlY2tlZF1bZGlzYWJsZWRdKSAucmFkaW97Ym94LXNoYWRvdzppbnNldCAwIDAgMCA1cHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW3NjYWxlPW1dW2ZvY3VzZWRdW2NoZWNrZWRdOm5vdChbZGlzYWJsZWRdKSkgLnJhZGlve2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgNXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpLCAwIDAgMCAycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtzY2FsZT1sXVtjaGVja2VkXSkgLnJhZGlvLDpob3N0KFtob3ZlcmVkXVtzY2FsZT1sXVtjaGVja2VkXVtkaXNhYmxlZF0pIC5yYWRpb3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDZweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbc2NhbGU9bF1bZm9jdXNlZF1bY2hlY2tlZF06bm90KFtkaXNhYmxlZF0pKSAucmFkaW97Ym94LXNoYWRvdzppbnNldCAwIDAgMCA2cHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCksIDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtjaGVja2VkXSkgLnJhZGlvOjphZnRlciw6aG9zdChbY2hlY2tlZF1bZGlzYWJsZWRdKSAucmFkaW86OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1yYWRpby1zaXplKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtcmFkaW8tc2l6ZSk7YmFja2dyb3VuZC1jb2xvcjp3aW5kb3dUZXh0O2Rpc3BsYXk6YmxvY2t9fTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fVwiO1xuXG5jb25zdCBSYWRpb0J1dHRvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFJhZGlvQnV0dG9uQmx1clwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVSYWRpb0J1dHRvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVJhZGlvQnV0dG9uQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25DaGVja2VkQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkNoZWNrZWRDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkZvY3VzXCIsIDYpO1xuICAgIHRoaXMuc2VsZWN0SXRlbSA9IChpdGVtcywgc2VsZWN0ZWRJbmRleCkgPT4ge1xuICAgICAgaXRlbXNbc2VsZWN0ZWRJbmRleF0uY2xpY2soKTtcbiAgICB9O1xuICAgIHRoaXMucXVlcnlCdXR0b25zID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1yYWRpby1idXR0b246bm90KFtoaWRkZW5dKVwiKSkuZmlsdGVyKChyYWRpb0J1dHRvbikgPT4gcmFkaW9CdXR0b24ubmFtZSA9PT0gdGhpcy5uYW1lKTtcbiAgICB9O1xuICAgIHRoaXMuaXNEZWZhdWx0U2VsZWN0YWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IHRoaXMucXVlcnlCdXR0b25zKCk7XG4gICAgICByZXR1cm4gIXJhZGlvQnV0dG9ucy5zb21lKChyYWRpb0J1dHRvbikgPT4gcmFkaW9CdXR0b24uY2hlY2tlZCkgJiYgcmFkaW9CdXR0b25zWzBdID09PSB0aGlzLmVsO1xuICAgIH07XG4gICAgdGhpcy5jaGVjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudW5jaGVja0FsbFJhZGlvQnV0dG9uc0luR3JvdXAoKTtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jYWxjaXRlUmFkaW9CdXR0b25DaGFuZ2UuZW1pdCgpO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldENvbnRhaW5lckVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lckVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBbXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1VwXCIsIFwiQXJyb3dSaWdodFwiLCBcIkFycm93RG93blwiLCBcIiBcIl07XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIiBcIikge1xuICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBhZGp1c3RlZEtleSA9IGtleTtcbiAgICAgIGlmIChnZXRFbGVtZW50RGlyKGVsKSA9PT0gXCJydGxcIikge1xuICAgICAgICBpZiAoa2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgIGFkanVzdGVkS2V5ID0gXCJBcnJvd0xlZnRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgYWRqdXN0ZWRLZXkgPSBcIkFycm93UmlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gQXJyYXkuZnJvbSh0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXJhZGlvLWJ1dHRvbjpub3QoW2hpZGRlbl1cIikpLmZpbHRlcigocmFkaW9CdXR0b24pID0+IHJhZGlvQnV0dG9uLm5hbWUgPT09IHRoaXMubmFtZSk7XG4gICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgIGNvbnN0IHJhZGlvQnV0dG9uc0xlbmd0aCA9IHJhZGlvQnV0dG9ucy5sZW5ndGg7XG4gICAgICByYWRpb0J1dHRvbnMuc29tZSgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHN3aXRjaCAoYWRqdXN0ZWRLZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHJhZGlvQnV0dG9ucywgZ2V0Um91bmRSb2JpbkluZGV4KE1hdGgubWF4KGN1cnJlbnRJbmRleCAtIDEsIC0xKSwgcmFkaW9CdXR0b25zTGVuZ3RoKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0ocmFkaW9CdXR0b25zLCBnZXRSb3VuZFJvYmluSW5kZXgoY3VycmVudEluZGV4ICsgMSwgcmFkaW9CdXR0b25zTGVuZ3RoKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25Db250YWluZXJCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFJhZGlvQnV0dG9uQmx1ci5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLm9uQ29udGFpbmVyRm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkZvY3VzLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ndWlkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5ob3ZlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIGNoZWNrZWRDaGFuZ2VkKG5ld0NoZWNrZWQpIHtcbiAgICBpZiAobmV3Q2hlY2tlZCkge1xuICAgICAgdGhpcy51bmNoZWNrT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCk7XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsUmFkaW9CdXR0b25DaGVja2VkQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICBuYW1lQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmNoZWNrTGFzdFJhZGlvQnV0dG9uKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBmb2N1c0VsZW1lbnQodGhpcy5jb250YWluZXJFbCk7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN5bmNIaWRkZW5Gb3JtSW5wdXQoaW5wdXQpIHtcbiAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICB9XG4gIG9uTGFiZWxDbGljayhldmVudCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5oaWRkZW4pIHtcbiAgICAgIHRoaXMudW5jaGVja090aGVyUmFkaW9CdXR0b25zSW5Hcm91cCgpO1xuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcmFkaW9CdXR0b24gPSBsYWJlbC5mb3JcbiAgICAgICAgPyB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3IoYGNhbGNpdGUtcmFkaW8tYnV0dG9uW2lkPVwiJHtsYWJlbC5mb3J9XCJdYClcbiAgICAgICAgOiBsYWJlbC5xdWVyeVNlbGVjdG9yKGBjYWxjaXRlLXJhZGlvLWJ1dHRvbltuYW1lPVwiJHt0aGlzLm5hbWV9XCJdYCk7XG4gICAgICBpZiAocmFkaW9CdXR0b24pIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJhZGlvQnV0dG9uLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWxjaXRlUmFkaW9CdXR0b25DaGFuZ2UuZW1pdCgpO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cbiAgfVxuICBjaGVja0xhc3RSYWRpb0J1dHRvbigpIHtcbiAgICBjb25zdCByYWRpb0J1dHRvbnMgPSB0aGlzLnF1ZXJ5QnV0dG9ucygpO1xuICAgIGNvbnN0IGNoZWNrZWRSYWRpb0J1dHRvbnMgPSByYWRpb0J1dHRvbnMuZmlsdGVyKChyYWRpb0J1dHRvbikgPT4gcmFkaW9CdXR0b24uY2hlY2tlZCk7XG4gICAgaWYgKGNoZWNrZWRSYWRpb0J1dHRvbnM/Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGxhc3RDaGVja2VkUmFkaW9CdXR0b24gPSBjaGVja2VkUmFkaW9CdXR0b25zW2NoZWNrZWRSYWRpb0J1dHRvbnMubGVuZ3RoIC0gMV07XG4gICAgICBjaGVja2VkUmFkaW9CdXR0b25zXG4gICAgICAgIC5maWx0ZXIoKGNoZWNrZWRSYWRpb0J1dHRvbikgPT4gY2hlY2tlZFJhZGlvQnV0dG9uICE9PSBsYXN0Q2hlY2tlZFJhZGlvQnV0dG9uKVxuICAgICAgICAuZm9yRWFjaCgoY2hlY2tlZFJhZGlvQnV0dG9uKSA9PiB7XG4gICAgICAgIGNoZWNrZWRSYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrZWRSYWRpb0J1dHRvbi5lbWl0Q2hlY2tlZENoYW5nZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgZW1pdENoZWNrZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxSYWRpb0J1dHRvbkNoZWNrZWRDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIHVuY2hlY2tBbGxSYWRpb0J1dHRvbnNJbkdyb3VwKCkge1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IHRoaXMucXVlcnlCdXR0b25zKCk7XG4gICAgcmFkaW9CdXR0b25zLmZvckVhY2goKHJhZGlvQnV0dG9uKSA9PiB7XG4gICAgICBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHJhZGlvQnV0dG9uLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB1bmNoZWNrT3RoZXJSYWRpb0J1dHRvbnNJbkdyb3VwKCkge1xuICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IHRoaXMucXVlcnlCdXR0b25zKCk7XG4gICAgY29uc3Qgb3RoZXJSYWRpb0J1dHRvbnMgPSByYWRpb0J1dHRvbnMuZmlsdGVyKChyYWRpb0J1dHRvbikgPT4gcmFkaW9CdXR0b24uZ3VpZCAhPT0gdGhpcy5ndWlkKTtcbiAgICBvdGhlclJhZGlvQnV0dG9ucy5mb3JFYWNoKChvdGhlclJhZGlvQnV0dG9uKSA9PiB7XG4gICAgICBpZiAob3RoZXJSYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgIG90aGVyUmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBvdGhlclJhZGlvQnV0dG9uLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXRUYWJJbmRleCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZCB8fCB0aGlzLmlzRGVmYXVsdFNlbGVjdGFibGUoKSA/IDAgOiAtMTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwb2ludGVyRW50ZXJIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaG92ZXJlZCA9IHRydWU7XG4gIH1cbiAgcG9pbnRlckxlYXZlSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJvb3ROb2RlID0gdGhpcy5lbC5nZXRSb290Tm9kZSgpO1xuICAgIHRoaXMuZ3VpZCA9IHRoaXMuZWwuaWQgfHwgYGNhbGNpdGUtcmFkaW8tYnV0dG9uLSR7Z3VpZCgpfWA7XG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgdGhpcy5jaGVja0xhc3RSYWRpb0J1dHRvbigpO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy5mb2N1c2VkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGFiSW5kZXggPSB0aGlzLmdldFRhYkluZGV4KCk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duIH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtY2hlY2tlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuY2hlY2tlZCksIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGNsYXNzOiBDU1MuY29udGFpbmVyLCBvbkJsdXI6IHRoaXMub25Db250YWluZXJCbHVyLCBvbkZvY3VzOiB0aGlzLm9uQ29udGFpbmVyRm9jdXMsIHJvbGU6IFwicmFkaW9cIiwgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q29udGFpbmVyRWwgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhZGlvXCIgfSkpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiY2hlY2tlZFwiOiBbXCJjaGVja2VkQ2hhbmdlZFwiXSxcbiAgICBcIm5hbWVcIjogW1wibmFtZUNoYW5nZWRcIl1cbiAgfTsgfVxufTtcblJhZGlvQnV0dG9uLnN0eWxlID0gcmFkaW9CdXR0b25Dc3M7XG5cbmV4cG9ydCB7IFJhZGlvQnV0dG9uIGFzIGNhbGNpdGVfcmFkaW9fYnV0dG9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=