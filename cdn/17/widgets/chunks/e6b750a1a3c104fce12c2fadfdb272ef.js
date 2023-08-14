"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_calcite-checkbox_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-checkbox.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-checkbox.entry.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_checkbox": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */










const checkboxCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.toggle{outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Checkbox = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalCheckboxBlur = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalCheckboxBlur", 6);
    this.calciteCheckboxChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteCheckboxChange", 6);
    this.calciteInternalCheckboxFocus = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalCheckboxFocus", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Properties
    //
    //--------------------------------------------------------------------------
    this.checkedPath = "M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";
    this.indeterminatePath = "M13 8v1H3V8z";
    this.getPath = () => this.indeterminate ? this.indeterminatePath : this.checked ? this.checkedPath : "";
    this.toggle = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.setFocus();
        this.indeterminate = false;
        this.calciteCheckboxChange.emit();
      }
    };
    this.keyDownHandler = (event) => {
      if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_5__.i)(event.key)) {
        this.toggle();
        event.preventDefault();
      }
    };
    this.clickHandler = () => {
      if (this.disabled) {
        return;
      }
      this.toggle();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.onToggleBlur = () => {
      this.calciteInternalCheckboxBlur.emit(false);
    };
    this.onToggleFocus = () => {
      this.calciteInternalCheckboxFocus.emit(true);
    };
    this.onLabelClick = () => {
      this.toggle();
    };
    this.checked = false;
    this.disabled = false;
    this.form = undefined;
    this.guid = undefined;
    this.hovered = false;
    this.indeterminate = false;
    this.label = undefined;
    this.name = undefined;
    this.required = false;
    this.scale = "m";
    this.value = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.toggleEl?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  syncHiddenFormInput(input) {
    input.type = "checkbox";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.guid = this.el.id || `calcite-checkbox-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-checked": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.checked), "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_6__.g)(this), class: "toggle", onBlur: this.onToggleBlur, onFocus: this.onToggleFocus, role: "checkbox", tabIndex: this.disabled ? undefined : 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (toggleEl) => (this.toggleEl = toggleEl) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: "check-svg", viewBox: "0 0 16 16" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: this.getPath() })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this })));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Checkbox.style = checkboxCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isActivationKey),
/* harmony export */   "n": () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZTZiNzUwYTFhM2MxMDRmY2UxMmMyZmFkZmRiMjcyZWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDdEQ7QUFDOEM7QUFDdEQ7QUFDd0I7QUFDZDtBQUN3QztBQUNtQjtBQUNuRjs7QUFFakMsbUNBQW1DLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixpQkFBaUIsZ0NBQWdDLGlCQUFpQixvREFBb0QsaUJBQWlCLDZCQUE2QixNQUFNLGtCQUFrQixvQkFBb0IsZUFBZSx5QkFBeUIsaUJBQWlCLHdDQUF3QywrQkFBK0IseUNBQXlDLHdDQUF3QyxpQkFBaUIsb0JBQW9CLHNCQUFzQixjQUFjLGdCQUFnQixnREFBZ0Qsa0JBQWtCLG9CQUFvQixlQUFlLDZGQUE2RiwwREFBMEQsbUNBQW1DLDhEQUE4RCx5Q0FBeUMsbURBQW1ELG1FQUFtRSxtREFBbUQsUUFBUSwwQkFBMEIsbURBQW1ELHlFQUF5RSxvUEFBb1AseUdBQXlHLFVBQVUseUNBQXlDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQiw2QkFBNkIsbUJBQW1CLDBCQUEwQixtQ0FBbUMsc0JBQXNCOztBQUV0cEg7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLHVDQUF1QyxxREFBVztBQUNsRCxpQ0FBaUMscURBQVc7QUFDNUMsd0NBQXdDLHFEQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1EQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxvREFBSSxHQUFHO0FBQ3pELElBQUkscURBQVk7QUFDaEIsSUFBSSxvREFBVztBQUNmO0FBQ0E7QUFDQSxJQUFJLHFEQUFlO0FBQ25CLElBQUksb0RBQWM7QUFDbEI7QUFDQTtBQUNBLElBQUksd0RBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLHdEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQUksSUFBSSw0REFBNEQsRUFBRSxxREFBQyxVQUFVLGdCQUFnQixtREFBYSw4QkFBOEIscURBQVk7QUFDdEs7QUFDQSxxREFBcUQsRUFBRSxxREFBQyxVQUFVLGlFQUFpRSxFQUFFLHFEQUFDLFdBQVcsbUJBQW1CLElBQUkscURBQUMsaUJBQWlCLHFEQUFDLENBQUMsZ0RBQW1CLElBQUksaUJBQWlCO0FBQ3BPO0FBQ0EsYUFBYSxPQUFPLHFEQUFVO0FBQzlCO0FBQ0E7O0FBRXdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEl4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1jaGVja2JveC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9rZXktMzM4OWQ4NzAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS00NDUzMDAwMS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtZDU5NDNiODMuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IGkgYXMgaXNBY3RpdmF0aW9uS2V5IH0gZnJvbSAnLi9rZXktMzM4OWQ4NzAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwtNTljOWQ0NzIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRMb2FkZWQsIHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuXG5jb25zdCBjaGVja2JveENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLWNoZWNrYm94LXNpemU6MC43NXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1jaGVja2JveC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1jaGVja2JveC1zaXplOjFyZW19Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtZmxleDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QgLmNoZWNrLXN2Zyw6aG9zdCAudG9nZ2xle2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtY2hlY2tib3gtc2l6ZSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWNoZWNrYm94LXNpemUpfTpob3N0IC5jaGVjay1zdmd7cG9pbnRlci1ldmVudHM6bm9uZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7ZmlsbDpjdXJyZW50Q29sb3I7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKX06aG9zdChbY2hlY2tlZF0pIC5jaGVjay1zdmcsOmhvc3QoW2luZGV0ZXJtaW5hdGVdKSAuY2hlY2stc3Zne2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2hvdmVyZWRdKSAudG9nZ2xlIC5jaGVjay1zdmcsOmhvc3QgLnRvZ2dsZTpob3ZlciAuY2hlY2stc3Zne2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS50b2dnbGV7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0udG9nZ2xlOmFjdGl2ZSwudG9nZ2xlOmZvY3VzLC50b2dnbGU6Zm9jdXMtdmlzaWJsZXtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IENoZWNrYm94ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbENoZWNrYm94Qmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsQ2hlY2tib3hCbHVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUNoZWNrYm94Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ2hlY2tib3hDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxDaGVja2JveEZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxDaGVja2JveEZvY3VzXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFByb3BlcnRpZXNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmNoZWNrZWRQYXRoID0gXCJNNS41IDEyTDIgOC42ODlsLjYzNy0uNjM2TDUuNSAxMC43MjdsOC4wMjItNy44Ny42MzcuNjM3elwiO1xuICAgIHRoaXMuaW5kZXRlcm1pbmF0ZVBhdGggPSBcIk0xMyA4djFIM1Y4elwiO1xuICAgIHRoaXMuZ2V0UGF0aCA9ICgpID0+IHRoaXMuaW5kZXRlcm1pbmF0ZSA/IHRoaXMuaW5kZXRlcm1pbmF0ZVBhdGggOiB0aGlzLmNoZWNrZWQgPyB0aGlzLmNoZWNrZWRQYXRoIDogXCJcIjtcbiAgICB0aGlzLnRvZ2dsZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGNpdGVDaGVja2JveENoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGV2ZW50LmtleSkpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm9uVG9nZ2xlQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQ2hlY2tib3hCbHVyLmVtaXQoZmFsc2UpO1xuICAgIH07XG4gICAgdGhpcy5vblRvZ2dsZUZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxDaGVja2JveEZvY3VzLmVtaXQodHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uTGFiZWxDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3VpZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVFbD8uZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzeW5jSGlkZGVuRm9ybUlucHV0KGlucHV0KSB7XG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmd1aWQgPSB0aGlzLmVsLmlkIHx8IGBjYWxjaXRlLWNoZWNrYm94LSR7Z3VpZCgpfWA7XG4gICAgY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGNvbm5lY3RGb3JtKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtY2hlY2tlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuY2hlY2tlZCksIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGNsYXNzOiBcInRvZ2dsZVwiLCBvbkJsdXI6IHRoaXMub25Ub2dnbGVCbHVyLCBvbkZvY3VzOiB0aGlzLm9uVG9nZ2xlRm9jdXMsIHJvbGU6IFwiY2hlY2tib3hcIiwgdGFiSW5kZXg6IHRoaXMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6ICh0b2dnbGVFbCkgPT4gKHRoaXMudG9nZ2xlRWwgPSB0b2dnbGVFbCkgfSwgaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImNoZWNrLXN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiIH0sIGgoXCJwYXRoXCIsIHsgZDogdGhpcy5nZXRQYXRoKCkgfSkpLCBoKFwic2xvdFwiLCBudWxsKSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuQ2hlY2tib3guc3R5bGUgPSBjaGVja2JveENzcztcblxuZXhwb3J0IHsgQ2hlY2tib3ggYXMgY2FsY2l0ZV9jaGVja2JveCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGlzQWN0aXZhdGlvbktleShrZXkpIHtcbiAgcmV0dXJuIGtleSA9PT0gXCJFbnRlclwiIHx8IGtleSA9PT0gXCIgXCI7XG59XG5jb25zdCBudW1iZXJLZXlzID0gW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiXTtcblxuZXhwb3J0IHsgaXNBY3RpdmF0aW9uS2V5IGFzIGksIG51bWJlcktleXMgYXMgbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9