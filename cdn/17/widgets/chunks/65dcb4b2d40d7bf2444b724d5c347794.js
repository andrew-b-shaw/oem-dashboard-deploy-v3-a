"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-split-button_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-split-button.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-split-button.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_split_button": () => (/* binding */ SplitButton)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */




const CSS = {
  container: "split-button__container",
  dividerContainer: "split-button__divider-container",
  divider: "split-button__divider",
  widthAuto: "width-auto",
  widthHalf: "width-half",
  widthFull: "width-full"
};

const splitButtonCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host .split-button__container{display:flex;align-items:stretch}:host .split-button__container>calcite-dropdown>calcite-button{block-size:100%;vertical-align:top}:host:host([kind=brand]){--calcite-split-button-background:var(--calcite-ui-brand);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=danger]){--calcite-split-button-background:var(--calcite-ui-danger);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=neutral]){--calcite-split-button-background:var(--calcite-ui-foreground-3);--calcite-split-button-divider:var(--calcite-ui-text-1)}:host:host([kind=inverse]){--calcite-split-button-background:var(--calcite-ui-inverse);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=transparent]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=transparent]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=transparent]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-text-1)}:host([appearance=transparent]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-foreground-1);--calcite-split-button-background:transparent}:host([appearance=outline]),:host([appearance=transparent]){--calcite-split-button-background:transparent}:host([appearance=outline-fill]){--calcite-split-button-background:var(--calcite-ui-foreground-1)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=outline]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-foreground-3)}:host([appearance=outline]):host([kind=inverse]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-inverse)}.width-auto{inline-size:auto}.width-half{inline-size:50%}.width-full{inline-size:100%}.split-button__divider-container{display:flex;inline-size:1px;align-items:stretch;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-split-button-background)}.split-button__divider{margin-block:0.25rem;display:inline-block;inline-size:1px;background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]) .split-button__divider-container,:host([appearance=outline]) .split-button__divider-container{border-block:1px solid var(--calcite-split-button-divider)}:host([appearance=outline-fill]):hover .split-button__divider-container,:host([appearance=outline]):hover .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:hover) .split-button__divider-container,:host([appearance=outline]:hover) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:focus-within):host([kind=brand]),:host([appearance=outline]:focus-within):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand-press)}:host([appearance=outline-fill]:focus-within):host([kind=danger]),:host([appearance=outline]:focus-within):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger-press)}:host([appearance=outline-fill]:focus-within) .split-button__divider-container,:host([appearance=outline]:focus-within) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([disabled]) .split-button__divider-container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

const SplitButton = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteSplitButtonPrimaryClick = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteSplitButtonPrimaryClick", 6);
    this.calciteSplitButtonSecondaryClick = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteSplitButtonSecondaryClick", 6);
    this.calciteSplitButtonPrimaryClickHandler = () => this.calciteSplitButtonPrimaryClick.emit();
    this.calciteSplitButtonSecondaryClickHandler = () => this.calciteSplitButtonSecondaryClick.emit();
    this.appearance = "solid";
    this.kind = "brand";
    this.disabled = false;
    this.active = false;
    this.dropdownIconType = "chevron";
    this.dropdownLabel = undefined;
    this.loading = false;
    this.overlayPositioning = "absolute";
    this.primaryIconEnd = undefined;
    this.primaryIconFlipRtl = undefined;
    this.primaryIconStart = undefined;
    this.primaryLabel = undefined;
    this.primaryText = undefined;
    this.scale = "m";
    this.width = "auto";
  }
  handleDisabledChange(value) {
    if (!value) {
      this.active = false;
    }
  }
  activeHandler() {
    if (this.disabled) {
      this.active = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  render() {
    const widthClasses = {
      [CSS.container]: true,
      [CSS.widthAuto]: this.width === "auto",
      [CSS.widthHalf]: this.width === "half",
      [CSS.widthFull]: this.width === "full"
    };
    const buttonWidth = this.width === "auto" ? "auto" : "full";
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: widthClasses }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-button", { appearance: this.appearance, disabled: this.disabled, "icon-end": this.primaryIconEnd ? this.primaryIconEnd : null, "icon-start": this.primaryIconStart ? this.primaryIconStart : null, iconFlipRtl: this.primaryIconFlipRtl ? this.primaryIconFlipRtl : null, kind: this.kind, label: this.primaryLabel, loading: this.loading, onClick: this.calciteSplitButtonPrimaryClickHandler, scale: this.scale, splitChild: "primary", type: "button", width: buttonWidth }, this.primaryText), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.dividerContainer }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.divider })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-dropdown", { disabled: this.disabled, onClick: this.calciteSplitButtonSecondaryClickHandler, open: this.active, overlayPositioning: this.overlayPositioning, placement: "bottom-end", scale: this.scale, width: this.scale }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-button", { appearance: this.appearance, disabled: this.disabled, "icon-start": this.dropdownIcon, kind: this.kind, label: this.dropdownLabel, scale: this.scale, slot: "trigger", splitChild: "secondary", type: "button" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  get dropdownIcon() {
    return this.dropdownIconType === "chevron"
      ? "chevronDown"
      : this.dropdownIconType === "caret"
        ? "caretDown"
        : this.dropdownIconType === "ellipsis"
          ? "ellipsis"
          : "handle-vertical";
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "disabled": ["handleDisabledChange"],
    "active": ["activeHandler"]
  }; }
};
SplitButton.style = splitButtonCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  // prevent click from moving focus on host
  event.preventDefault();
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    component.el.click = interceptedClick;
    component.el.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
    nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
    return;
  }
  component.el.click = HTMLElement.prototype.click;
  component.el.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" stencil lifecycle method has been called).
 *
 * Requires "setUpLoadableComponent" and "setComponentLoaded" to be called first.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjVkY2I0YjJkNDBkN2JmMjQ0NGI3MjRkNWMzNDc3OTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0c7QUFDM0I7QUFDNkM7O0FBRXBIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLHFCQUFxQiwrQkFBK0IsYUFBYSxvQkFBb0IsK0RBQStELGdCQUFnQixtQkFBbUIseUJBQXlCLDBEQUEwRCw4REFBOEQsMEJBQTBCLDJEQUEyRCw4REFBOEQsMkJBQTJCLGlFQUFpRSx3REFBd0QsMkJBQTJCLDREQUE0RCw4REFBOEQsbURBQW1ELHVEQUF1RCxvREFBb0Qsd0RBQXdELHFEQUFxRCx3REFBd0QscURBQXFELDhEQUE4RCw4Q0FBOEMsNERBQTRELDhDQUE4QyxpQ0FBaUMsaUVBQWlFLG1HQUFtRyx1REFBdUQscUdBQXFHLHdEQUF3RCx1R0FBdUcsOERBQThELHVHQUF1Ryx5REFBeUQsWUFBWSxpQkFBaUIsWUFBWSxnQkFBZ0IsWUFBWSxpQkFBaUIsaUNBQWlDLGFBQWEsZ0JBQWdCLG9CQUFvQiw2RkFBNkYsd0RBQXdELHVCQUF1QixxQkFBcUIscUJBQXFCLGdCQUFnQixxREFBcUQsK0hBQStILDJEQUEyRCwySUFBMkkscURBQXFELDJJQUEySSxxREFBcUQsNkhBQTZILDZEQUE2RCwrSEFBK0gsOERBQThELHlKQUF5SixxREFBcUQsbURBQW1ELDJDQUEyQyxrREFBa0Qsb0JBQW9CLHlHQUF5RyxVQUFVOztBQUV4dkw7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLDBDQUEwQyxxREFBVztBQUNyRCw0Q0FBNEMscURBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLHdEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxVQUFVLHFCQUFxQixFQUFFLHFEQUFDLHFCQUFxQixvY0FBb2MscUJBQXFCLHFEQUFDLFVBQVUsNkJBQTZCLEVBQUUscURBQUMsVUFBVSxvQkFBb0IsSUFBSSxxREFBQyx1QkFBdUIsK01BQStNLEVBQUUscURBQUMscUJBQXFCLGdOQUFnTixHQUFHLHFEQUFDO0FBQzdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxhQUFhLE9BQU8scURBQVU7QUFDOUIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStDOzs7Ozs7Ozs7Ozs7Ozs7QUN6Ry9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLXNwbGl0LWJ1dHRvbi5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS1hZjE0NmZkNS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudExvYWRlZCwgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJzcGxpdC1idXR0b25fX2NvbnRhaW5lclwiLFxuICBkaXZpZGVyQ29udGFpbmVyOiBcInNwbGl0LWJ1dHRvbl9fZGl2aWRlci1jb250YWluZXJcIixcbiAgZGl2aWRlcjogXCJzcGxpdC1idXR0b25fX2RpdmlkZXJcIixcbiAgd2lkdGhBdXRvOiBcIndpZHRoLWF1dG9cIixcbiAgd2lkdGhIYWxmOiBcIndpZHRoLWhhbGZcIixcbiAgd2lkdGhGdWxsOiBcIndpZHRoLWZ1bGxcIlxufTtcblxuY29uc3Qgc3BsaXRCdXR0b25Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmlubGluZS1ibG9ja306aG9zdCAuc3BsaXQtYnV0dG9uX19jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOnN0cmV0Y2h9Omhvc3QgLnNwbGl0LWJ1dHRvbl9fY29udGFpbmVyPmNhbGNpdGUtZHJvcGRvd24+Y2FsY2l0ZS1idXR0b257YmxvY2stc2l6ZToxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcH06aG9zdDpob3N0KFtraW5kPWJyYW5kXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3Q6aG9zdChba2luZD1kYW5nZXJdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWJhY2tncm91bmQ6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3Q6aG9zdChba2luZD1uZXV0cmFsXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0Omhvc3QoW2tpbmQ9aW52ZXJzZV0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tYmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UpOy0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2FwcGVhcmFuY2U9dHJhbnNwYXJlbnRdKTpob3N0KFtraW5kPWJyYW5kXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSk6aG9zdChba2luZD1kYW5nZXJdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXI6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFthcHBlYXJhbmNlPXRyYW5zcGFyZW50XSk6aG9zdChba2luZD1uZXV0cmFsXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pOmhvc3QoW2tpbmQ9aW52ZXJzZV0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdKSw6aG9zdChbYXBwZWFyYW5jZT10cmFuc3BhcmVudF0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tYmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKXstLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWJhY2tncm91bmQ6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdKTpob3N0KFtraW5kPWJyYW5kXSksOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZS1maWxsXSk6aG9zdChba2luZD1icmFuZF0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXSk6aG9zdChba2luZD1kYW5nZXJdKSw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKTpob3N0KFtraW5kPWRhbmdlcl0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pOmhvc3QoW2tpbmQ9bmV1dHJhbF0pLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF0pOmhvc3QoW2tpbmQ9bmV1dHJhbF0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9Omhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV0pOmhvc3QoW2tpbmQ9aW52ZXJzZV0pLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmUtZmlsbF0pOmhvc3QoW2tpbmQ9aW52ZXJzZV0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWludmVyc2UpfS53aWR0aC1hdXRve2lubGluZS1zaXplOmF1dG99LndpZHRoLWhhbGZ7aW5saW5lLXNpemU6NTAlfS53aWR0aC1mdWxse2lubGluZS1zaXplOjEwMCV9LnNwbGl0LWJ1dHRvbl9fZGl2aWRlci1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjFweDthbGlnbi1pdGVtczpzdHJldGNoO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1zcGxpdC1idXR0b24tYmFja2dyb3VuZCl9LnNwbGl0LWJ1dHRvbl9fZGl2aWRlcnttYXJnaW4tYmxvY2s6MC4yNXJlbTtkaXNwbGF5OmlubGluZS1ibG9jaztpbmxpbmUtc2l6ZToxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKSAuc3BsaXQtYnV0dG9uX19kaXZpZGVyLWNvbnRhaW5lciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXSkgLnNwbGl0LWJ1dHRvbl9fZGl2aWRlci1jb250YWluZXJ7Ym9yZGVyLWJsb2NrOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdKTpob3ZlciAuc3BsaXQtYnV0dG9uX19kaXZpZGVyLWNvbnRhaW5lciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXSk6aG92ZXIgLnNwbGl0LWJ1dHRvbl9fZGl2aWRlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdOmhvdmVyKSAuc3BsaXQtYnV0dG9uX19kaXZpZGVyLWNvbnRhaW5lciw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXTpob3ZlcikgLnNwbGl0LWJ1dHRvbl9fZGl2aWRlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdOmZvY3VzLXdpdGhpbik6aG9zdChba2luZD1icmFuZF0pLDpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdOmZvY3VzLXdpdGhpbik6aG9zdChba2luZD1icmFuZF0pey0tY2FsY2l0ZS1zcGxpdC1idXR0b24tZGl2aWRlcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kLXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdOmZvY3VzLXdpdGhpbik6aG9zdChba2luZD1kYW5nZXJdKSw6aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lXTpmb2N1cy13aXRoaW4pOmhvc3QoW2tpbmQ9ZGFuZ2VyXSl7LS1jYWxjaXRlLXNwbGl0LWJ1dHRvbi1kaXZpZGVyOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLXByZXNzKX06aG9zdChbYXBwZWFyYW5jZT1vdXRsaW5lLWZpbGxdOmZvY3VzLXdpdGhpbikgLnNwbGl0LWJ1dHRvbl9fZGl2aWRlci1jb250YWluZXIsOmhvc3QoW2FwcGVhcmFuY2U9b3V0bGluZV06Zm9jdXMtd2l0aGluKSAuc3BsaXQtYnV0dG9uX19kaXZpZGVyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtc3BsaXQtYnV0dG9uLWRpdmlkZXIpfTpob3N0KFtkaXNhYmxlZF0pIC5zcGxpdC1idXR0b25fX2RpdmlkZXItY29udGFpbmVye29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSBjYWxjaXRlLWRyb3Bkb3duPmNhbGNpdGUtYnV0dG9ue3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfVwiO1xuXG5jb25zdCBTcGxpdEJ1dHRvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlU3BsaXRCdXR0b25QcmltYXJ5Q2xpY2sgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVTcGxpdEJ1dHRvblByaW1hcnlDbGlja1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblNlY29uZGFyeUNsaWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU3BsaXRCdXR0b25TZWNvbmRhcnlDbGlja1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblByaW1hcnlDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblByaW1hcnlDbGljay5lbWl0KCk7XG4gICAgdGhpcy5jYWxjaXRlU3BsaXRCdXR0b25TZWNvbmRhcnlDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLmNhbGNpdGVTcGxpdEJ1dHRvblNlY29uZGFyeUNsaWNrLmVtaXQoKTtcbiAgICB0aGlzLmFwcGVhcmFuY2UgPSBcInNvbGlkXCI7XG4gICAgdGhpcy5raW5kID0gXCJicmFuZFwiO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZHJvcGRvd25JY29uVHlwZSA9IFwiY2hldnJvblwiO1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnByaW1hcnlJY29uRW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJpbWFyeUljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJpbWFyeUljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByaW1hcnlMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByaW1hcnlUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLndpZHRoID0gXCJhdXRvXCI7XG4gIH1cbiAgaGFuZGxlRGlzYWJsZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBhY3RpdmVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHdpZHRoQ2xhc3NlcyA9IHtcbiAgICAgIFtDU1MuY29udGFpbmVyXTogdHJ1ZSxcbiAgICAgIFtDU1Mud2lkdGhBdXRvXTogdGhpcy53aWR0aCA9PT0gXCJhdXRvXCIsXG4gICAgICBbQ1NTLndpZHRoSGFsZl06IHRoaXMud2lkdGggPT09IFwiaGFsZlwiLFxuICAgICAgW0NTUy53aWR0aEZ1bGxdOiB0aGlzLndpZHRoID09PSBcImZ1bGxcIlxuICAgIH07XG4gICAgY29uc3QgYnV0dG9uV2lkdGggPSB0aGlzLndpZHRoID09PSBcImF1dG9cIiA/IFwiYXV0b1wiIDogXCJmdWxsXCI7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHdpZHRoQ2xhc3NlcyB9LCBoKFwiY2FsY2l0ZS1idXR0b25cIiwgeyBhcHBlYXJhbmNlOiB0aGlzLmFwcGVhcmFuY2UsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBcImljb24tZW5kXCI6IHRoaXMucHJpbWFyeUljb25FbmQgPyB0aGlzLnByaW1hcnlJY29uRW5kIDogbnVsbCwgXCJpY29uLXN0YXJ0XCI6IHRoaXMucHJpbWFyeUljb25TdGFydCA/IHRoaXMucHJpbWFyeUljb25TdGFydCA6IG51bGwsIGljb25GbGlwUnRsOiB0aGlzLnByaW1hcnlJY29uRmxpcFJ0bCA/IHRoaXMucHJpbWFyeUljb25GbGlwUnRsIDogbnVsbCwga2luZDogdGhpcy5raW5kLCBsYWJlbDogdGhpcy5wcmltYXJ5TGFiZWwsIGxvYWRpbmc6IHRoaXMubG9hZGluZywgb25DbGljazogdGhpcy5jYWxjaXRlU3BsaXRCdXR0b25QcmltYXJ5Q2xpY2tIYW5kbGVyLCBzY2FsZTogdGhpcy5zY2FsZSwgc3BsaXRDaGlsZDogXCJwcmltYXJ5XCIsIHR5cGU6IFwiYnV0dG9uXCIsIHdpZHRoOiBidXR0b25XaWR0aCB9LCB0aGlzLnByaW1hcnlUZXh0KSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuZGl2aWRlckNvbnRhaW5lciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5kaXZpZGVyIH0pKSwgaChcImNhbGNpdGUtZHJvcGRvd25cIiwgeyBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgb25DbGljazogdGhpcy5jYWxjaXRlU3BsaXRCdXR0b25TZWNvbmRhcnlDbGlja0hhbmRsZXIsIG9wZW46IHRoaXMuYWN0aXZlLCBvdmVybGF5UG9zaXRpb25pbmc6IHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nLCBwbGFjZW1lbnQ6IFwiYm90dG9tLWVuZFwiLCBzY2FsZTogdGhpcy5zY2FsZSwgd2lkdGg6IHRoaXMuc2NhbGUgfSwgaChcImNhbGNpdGUtYnV0dG9uXCIsIHsgYXBwZWFyYW5jZTogdGhpcy5hcHBlYXJhbmNlLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgXCJpY29uLXN0YXJ0XCI6IHRoaXMuZHJvcGRvd25JY29uLCBraW5kOiB0aGlzLmtpbmQsIGxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsIHNjYWxlOiB0aGlzLnNjYWxlLCBzbG90OiBcInRyaWdnZXJcIiwgc3BsaXRDaGlsZDogXCJzZWNvbmRhcnlcIiwgdHlwZTogXCJidXR0b25cIiB9KSwgaChcInNsb3RcIiwgbnVsbCkpKSk7XG4gIH1cbiAgZ2V0IGRyb3Bkb3duSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bkljb25UeXBlID09PSBcImNoZXZyb25cIlxuICAgICAgPyBcImNoZXZyb25Eb3duXCJcbiAgICAgIDogdGhpcy5kcm9wZG93bkljb25UeXBlID09PSBcImNhcmV0XCJcbiAgICAgICAgPyBcImNhcmV0RG93blwiXG4gICAgICAgIDogdGhpcy5kcm9wZG93bkljb25UeXBlID09PSBcImVsbGlwc2lzXCJcbiAgICAgICAgICA/IFwiZWxsaXBzaXNcIlxuICAgICAgICAgIDogXCJoYW5kbGUtdmVydGljYWxcIjtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJkaXNhYmxlZFwiOiBbXCJoYW5kbGVEaXNhYmxlZENoYW5nZVwiXSxcbiAgICBcImFjdGl2ZVwiOiBbXCJhY3RpdmVIYW5kbGVyXCJdXG4gIH07IH1cbn07XG5TcGxpdEJ1dHRvbi5zdHlsZSA9IHNwbGl0QnV0dG9uQ3NzO1xuXG5leHBvcnQgeyBTcGxpdEJ1dHRvbiBhcyBjYWxjaXRlX3NwbGl0X2J1dHRvbiB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gICAgY29tcG9uZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICAgIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcbiAgY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==