"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-segmented-control_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-segmented-control_2.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-segmented-control_2.entry.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_segmented_control": () => (/* binding */ SegmentedControl),
/* harmony export */   "calcite_segmented_control_item": () => (/* binding */ SegmentedControlItem)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */









const segmentedControlCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:var(--calcite-ui-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([appearance=outline]){background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([layout=vertical]){flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full]){inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full]) ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-segmented-control-item){justify-content:flex-start}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const SegmentedControl = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteSegmentedControlChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteSegmentedControlChange", 6);
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.handleClick = (event) => {
      if (this.disabled) {
        return;
      }
      if (event.target.localName === "calcite-segmented-control-item") {
        this.selectItem(event.target, true);
      }
    };
    this.appearance = "solid";
    this.disabled = false;
    this.form = undefined;
    this.required = false;
    this.layout = "horizontal";
    this.name = undefined;
    this.scale = "m";
    this.value = null;
    this.selectedItem = undefined;
    this.width = "auto";
  }
  valueHandler(value) {
    const items = this.getItems();
    items.forEach((item) => (item.checked = item.value === value));
  }
  handleSelectedItemChange(newItem, oldItem) {
    this.value = newItem?.value;
    if (newItem === oldItem) {
      return;
    }
    const items = this.getItems();
    const match = items.filter((item) => item === newItem).pop();
    if (match) {
      this.selectItem(match);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
    const items = this.getItems();
    const lastChecked = items.filter((item) => item.checked).pop();
    if (lastChecked) {
      this.selectItem(lastChecked);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  componentDidLoad() {
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.value);
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  connectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.handleClick, role: "radiogroup" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this })));
  }
  handleSelected(event) {
    event.preventDefault();
    this.selectItem(event.target);
    event.stopPropagation();
  }
  handleKeyDown(event) {
    const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
    const { key } = event;
    const { el, selectedItem } = this;
    if (keys.indexOf(key) === -1) {
      return;
    }
    let adjustedKey = key;
    if ((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(el) === "rtl") {
      if (key === "ArrowRight") {
        adjustedKey = "ArrowLeft";
      }
      if (key === "ArrowLeft") {
        adjustedKey = "ArrowRight";
      }
    }
    const items = this.getItems();
    let selectedIndex = -1;
    items.forEach((item, index) => {
      if (item === selectedItem) {
        selectedIndex = index;
      }
    });
    switch (adjustedKey) {
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        const previous = selectedIndex < 1 ? items[items.length - 1] : items[selectedIndex - 1];
        this.selectItem(previous, true);
        return;
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        const next = selectedIndex === -1 ? items[1] : items[selectedIndex + 1] || items[0];
        this.selectItem(next, true);
        return;
      case " ":
        event.preventDefault();
        this.selectItem(event.target, true);
        return;
      default:
        return;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (this.selectedItem || this.getItems()[0])?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  getItems() {
    return Array.from(this.el.querySelectorAll("calcite-segmented-control-item"));
  }
  selectItem(selected, emit = false) {
    if (selected === this.selectedItem) {
      return;
    }
    const items = this.getItems();
    let match = null;
    items.forEach((item) => {
      const matches = item === selected;
      if ((matches && !item.checked) || (!matches && item.checked)) {
        item.checked = matches;
      }
      item.tabIndex = matches ? 0 : -1;
      if (matches) {
        match = item;
        if (emit) {
          this.calciteSegmentedControlChange.emit();
        }
      }
    });
    this.selectedItem = match;
    if (match) {
      match.focus();
    }
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "value": ["valueHandler"],
    "selectedItem": ["handleSelectedItemChange"]
  }; }
};
SegmentedControl.style = segmentedControlCss;

const SLOTS = {
  input: "input"
};
const CSS = {
  segmentedControlItemIcon: "segmented-control-item-icon"
};

const segmentedControlItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-ui-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:-1px}.label--scale-s{padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-block:0.125rem}.label--scale-m{padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-block:0.375rem}.label--scale-l{padding-inline:1rem;padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-background)}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([checked]) .label--outline{background-color:transparent}::slotted(input){display:none}@media (forced-colors: active){:host([checked]) label{background-color:highlight}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{outline:2px solid transparent;outline-offset:2px}:host([checked]) label:not([class~=label--outline]) .segmented-control-item-icon{color:highlightText}}.segmented-control-item-icon{position:relative;margin:0px;display:inline-flex;line-height:inherit}:host([icon-start]) .label--scale-s .segmented-control-item-icon{margin-inline-end:0.5rem}:host([icon-end]) .label--scale-s .segmented-control-item-icon{margin-inline-start:0.5rem}:host([icon-start]) .label--scale-m .segmented-control-item-icon{margin-inline-end:0.75rem}:host([icon-end]) .label--scale-m .segmented-control-item-icon{margin-inline-start:0.75rem}:host([icon-start]) .label--scale-l .segmented-control-item-icon{margin-inline-end:1rem}:host([icon-end]) .label--scale-l .segmented-control-item-icon{margin-inline-start:1rem}";

const SegmentedControlItem = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalSegmentedControlItemChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalSegmentedControlItemChange", 6);
    this.checked = false;
    this.iconFlipRtl = false;
    this.iconStart = undefined;
    this.iconEnd = undefined;
    this.value = undefined;
  }
  handleCheckedChange() {
    this.calciteInternalSegmentedControlItemChange.emit();
  }
  render() {
    const { checked, value } = this;
    const scale = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "scale", "m");
    const appearance = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "appearance", "solid");
    const layout = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "layout", "horizontal");
    const iconStartEl = this.iconStart ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.segmentedControlItemIcon, flipRtl: this.iconFlipRtl, icon: this.iconStart, key: "icon-start", scale: "s" })) : null;
    const iconEndEl = this.iconEnd ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.segmentedControlItemIcon, flipRtl: this.iconFlipRtl, icon: this.iconEnd, key: "icon-end", scale: "s" })) : null;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-checked": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(checked), "aria-label": value, role: "radio" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: {
        "label--scale-s": scale === "s",
        "label--scale-m": scale === "m",
        "label--scale-l": scale === "l",
        "label--horizontal": layout === "horizontal",
        "label--outline": appearance === "outline",
        "label--outline-fill": appearance === "outline-fill"
      } }, this.iconStart ? iconStartEl : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null, value), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.input }), this.iconEnd ? iconEndEl : null)));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "checked": ["handleCheckedChange"]
  }; }
};
SegmentedControlItem.style = segmentedControlItemCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNmFkNDNmNjEwZGQxN2NiYmIyNzc1OWZhZjI5NWEzM2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDYjtBQUN1QztBQUNoRTtBQUNPO0FBQ3NDO0FBQ3hGO0FBQ0s7O0FBRWpDLDJDQUEyQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxhQUFhLGdEQUFnRCw2QkFBNkIsd0JBQXdCLGlEQUFpRCxvQkFBb0IsNEJBQTRCLDZCQUE2Qix5R0FBeUcsVUFBVSx5QkFBeUIsc0JBQXNCLHVCQUF1QixzQkFBc0Isb0JBQW9CLGlCQUFpQixpQ0FBaUMsNEJBQTRCLDhEQUE4RCxjQUFjLCtFQUErRSwyQkFBMkIseUNBQXlDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQiw2QkFBNkIsbUJBQW1CLDBCQUEwQixtQ0FBbUMsc0JBQXNCOztBQUU3MEY7QUFDQTtB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b2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtc2VnbWVudGVkLWNvbnRyb2xfMi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyLCB2IGFzIGdldEVsZW1lbnRQcm9wLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBhIGFzIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCwgYyBhcyBjb25uZWN0Rm9ybSwgZCBhcyBkaXNjb25uZWN0Rm9ybSwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLTQ0NTMwMDAxLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwgfSBmcm9tICcuL2xhYmVsLTU5YzlkNDcyLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcblxuY29uc3Qgc2VnbWVudGVkQ29udHJvbENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtpbmxpbmUtc2l6ZTotbW96LWZpdC1jb250ZW50O2lubGluZS1zaXplOmZpdC1jb250ZW50O291dGxpbmU6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtvdXRsaW5lLW9mZnNldDotMXB4fTpob3N0KFthcHBlYXJhbmNlPW91dGxpbmVdKXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSl7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fTpob3N0KFt3aWR0aD1mdWxsXSl7aW5saW5lLXNpemU6MTAwJTttaW4taW5saW5lLXNpemU6LW1vei1maXQtY29udGVudDttaW4taW5saW5lLXNpemU6Zml0LWNvbnRlbnR9Omhvc3QoW3dpZHRoPWZ1bGxdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtKXtmbGV4OjEgMSBhdXRvfTpob3N0KFt3aWR0aD1mdWxsXVtsYXlvdXQ9dmVydGljYWxdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtKXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgU2VnbWVudGVkQ29udHJvbCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlU2VnbWVudGVkQ29udHJvbENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVNlZ21lbnRlZENvbnRyb2xDaGFuZ2VcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50YXJnZXQubG9jYWxOYW1lID09PSBcImNhbGNpdGUtc2VnbWVudGVkLWNvbnRyb2wtaXRlbVwiKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbShldmVudC50YXJnZXQsIHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hcHBlYXJhbmNlID0gXCJzb2xpZFwiO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubGF5b3V0ID0gXCJob3Jpem9udGFsXCI7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpZHRoID0gXCJhdXRvXCI7XG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uY2hlY2tlZCA9IGl0ZW0udmFsdWUgPT09IHZhbHVlKSk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0ZWRJdGVtQ2hhbmdlKG5ld0l0ZW0sIG9sZEl0ZW0pIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3SXRlbT8udmFsdWU7XG4gICAgaWYgKG5ld0l0ZW0gPT09IG9sZEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgY29uc3QgbWF0Y2ggPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gPT09IG5ld0l0ZW0pLnBvcCgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5zZWxlY3RJdGVtKG1hdGNoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXRlbXNbMF0pIHtcbiAgICAgIGl0ZW1zWzBdLnRhYkluZGV4ID0gMDtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICBjb25zdCBsYXN0Q2hlY2tlZCA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jaGVja2VkKS5wb3AoKTtcbiAgICBpZiAobGFzdENoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0SXRlbShsYXN0Q2hlY2tlZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW1zWzBdKSB7XG4gICAgICBpdGVtc1swXS50YWJJbmRleCA9IDA7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0KHRoaXMsIHRoaXMudmFsdWUpO1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIHJvbGU6IFwicmFkaW9ncm91cFwiIH0sIGgoXCJzbG90XCIsIG51bGwpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2VsZWN0SXRlbShldmVudC50YXJnZXQpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBjb25zdCBrZXlzID0gW1wiQXJyb3dMZWZ0XCIsIFwiQXJyb3dVcFwiLCBcIkFycm93UmlnaHRcIiwgXCJBcnJvd0Rvd25cIiwgXCIgXCJdO1xuICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICBjb25zdCB7IGVsLCBzZWxlY3RlZEl0ZW0gfSA9IHRoaXM7XG4gICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYWRqdXN0ZWRLZXkgPSBrZXk7XG4gICAgaWYgKGdldEVsZW1lbnREaXIoZWwpID09PSBcInJ0bFwiKSB7XG4gICAgICBpZiAoa2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBhZGp1c3RlZEtleSA9IFwiQXJyb3dMZWZ0XCI7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGFkanVzdGVkS2V5ID0gXCJBcnJvd1JpZ2h0XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIGxldCBzZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtID09PSBzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXRjaCAoYWRqdXN0ZWRLZXkpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gc2VsZWN0ZWRJbmRleCA8IDEgPyBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXSA6IGl0ZW1zW3NlbGVjdGVkSW5kZXggLSAxXTtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHByZXZpb3VzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IHNlbGVjdGVkSW5kZXggPT09IC0xID8gaXRlbXNbMV0gOiBpdGVtc1tzZWxlY3RlZEluZGV4ICsgMV0gfHwgaXRlbXNbMF07XG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbShuZXh0LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGV2ZW50LnRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgICh0aGlzLnNlbGVjdGVkSXRlbSB8fCB0aGlzLmdldEl0ZW1zKClbMF0pPy5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1zZWdtZW50ZWQtY29udHJvbC1pdGVtXCIpKTtcbiAgfVxuICBzZWxlY3RJdGVtKHNlbGVjdGVkLCBlbWl0ID0gZmFsc2UpIHtcbiAgICBpZiAoc2VsZWN0ZWQgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIGxldCBtYXRjaCA9IG51bGw7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGl0ZW0gPT09IHNlbGVjdGVkO1xuICAgICAgaWYgKChtYXRjaGVzICYmICFpdGVtLmNoZWNrZWQpIHx8ICghbWF0Y2hlcyAmJiBpdGVtLmNoZWNrZWQpKSB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IG1hdGNoZXM7XG4gICAgICB9XG4gICAgICBpdGVtLnRhYkluZGV4ID0gbWF0Y2hlcyA/IDAgOiAtMTtcbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIG1hdGNoID0gaXRlbTtcbiAgICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVTZWdtZW50ZWRDb250cm9sQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbWF0Y2g7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBtYXRjaC5mb2N1cygpO1xuICAgIH1cbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUhhbmRsZXJcIl0sXG4gICAgXCJzZWxlY3RlZEl0ZW1cIjogW1wiaGFuZGxlU2VsZWN0ZWRJdGVtQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5TZWdtZW50ZWRDb250cm9sLnN0eWxlID0gc2VnbWVudGVkQ29udHJvbENzcztcblxuY29uc3QgU0xPVFMgPSB7XG4gIGlucHV0OiBcImlucHV0XCJcbn07XG5jb25zdCBDU1MgPSB7XG4gIHNlZ21lbnRlZENvbnRyb2xJdGVtSWNvbjogXCJzZWdtZW50ZWQtY29udHJvbC1pdGVtLWljb25cIlxufTtcblxuY29uc3Qgc2VnbWVudGVkQ29udHJvbEl0ZW1Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dH06aG9zdCBsYWJlbHtwb2ludGVyLWV2ZW50czpub25lO21hcmdpbjowLjEyNXJlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KSBlYXNlLWluLW91dCwgY29sb3IgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpIGVhc2UtaW4tb3V0fS5sYWJlbC0taG9yaXpvbnRhbHtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfTpob3N0e291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoOmZvY3VzKXtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICk7b3V0bGluZS1vZmZzZXQ6LTFweH0ubGFiZWwtLXNjYWxlLXN7cGFkZGluZy1pbmxpbmU6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtwYWRkaW5nLWJsb2NrOjAuMTI1cmVtfS5sYWJlbC0tc2NhbGUtbXtwYWRkaW5nLWlubGluZTowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtwYWRkaW5nLWJsb2NrOjAuMzc1cmVtfS5sYWJlbC0tc2NhbGUtbHtwYWRkaW5nLWlubGluZToxcmVtO3BhZGRpbmctYmxvY2s6MC42MjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoOmhvdmVyKSBsYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmFjdGl2ZSkgbGFiZWx7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9Omhvc3QoW2NoZWNrZWRdKSBsYWJlbHtjdXJzb3I6ZGVmYXVsdDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpfTpob3N0KFtjaGVja2VkXSkgLmxhYmVsLS1vdXRsaW5lLDpob3N0KFtjaGVja2VkXSkgLmxhYmVsLS1vdXRsaW5lLWZpbGx7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtjaGVja2VkXSkgLmxhYmVsLS1vdXRsaW5le2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9OjpzbG90dGVkKGlucHV0KXtkaXNwbGF5Om5vbmV9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtjaGVja2VkXSkgbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9Omhvc3QoW2NoZWNrZWRdKSAubGFiZWwtLW91dGxpbmUsOmhvc3QoW2NoZWNrZWRdKSAubGFiZWwtLW91dGxpbmUtZmlsbHtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9Omhvc3QoW2NoZWNrZWRdKSBsYWJlbDpub3QoW2NsYXNzfj1sYWJlbC0tb3V0bGluZV0pIC5zZWdtZW50ZWQtY29udHJvbC1pdGVtLWljb257Y29sb3I6aGlnaGxpZ2h0VGV4dH19LnNlZ21lbnRlZC1jb250cm9sLWl0ZW0taWNvbntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7bGluZS1oZWlnaHQ6aW5oZXJpdH06aG9zdChbaWNvbi1zdGFydF0pIC5sYWJlbC0tc2NhbGUtcyAuc2VnbWVudGVkLWNvbnRyb2wtaXRlbS1pY29ue21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbX06aG9zdChbaWNvbi1lbmRdKSAubGFiZWwtLXNjYWxlLXMgLnNlZ21lbnRlZC1jb250cm9sLWl0ZW0taWNvbnttYXJnaW4taW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbaWNvbi1zdGFydF0pIC5sYWJlbC0tc2NhbGUtbSAuc2VnbWVudGVkLWNvbnRyb2wtaXRlbS1pY29ue21hcmdpbi1pbmxpbmUtZW5kOjAuNzVyZW19Omhvc3QoW2ljb24tZW5kXSkgLmxhYmVsLS1zY2FsZS1tIC5zZWdtZW50ZWQtY29udHJvbC1pdGVtLWljb257bWFyZ2luLWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KFtpY29uLXN0YXJ0XSkgLmxhYmVsLS1zY2FsZS1sIC5zZWdtZW50ZWQtY29udHJvbC1pdGVtLWljb257bWFyZ2luLWlubGluZS1lbmQ6MXJlbX06aG9zdChbaWNvbi1lbmRdKSAubGFiZWwtLXNjYWxlLWwgLnNlZ21lbnRlZC1jb250cm9sLWl0ZW0taWNvbnttYXJnaW4taW5saW5lLXN0YXJ0OjFyZW19XCI7XG5cbmNvbnN0IFNlZ21lbnRlZENvbnRyb2xJdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFNlZ21lbnRlZENvbnRyb2xJdGVtQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxTZWdtZW50ZWRDb250cm9sSXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5pY29uU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaGFuZGxlQ2hlY2tlZENoYW5nZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFNlZ21lbnRlZENvbnRyb2xJdGVtQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGVja2VkLCB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBzY2FsZSA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2NhbGVcIiwgXCJtXCIpO1xuICAgIGNvbnN0IGFwcGVhcmFuY2UgPSBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcImFwcGVhcmFuY2VcIiwgXCJzb2xpZFwiKTtcbiAgICBjb25zdCBsYXlvdXQgPSBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcImxheW91dFwiLCBcImhvcml6b250YWxcIik7XG4gICAgY29uc3QgaWNvblN0YXJ0RWwgPSB0aGlzLmljb25TdGFydCA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5zZWdtZW50ZWRDb250cm9sSXRlbUljb24sIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwsIGljb246IHRoaXMuaWNvblN0YXJ0LCBrZXk6IFwiaWNvbi1zdGFydFwiLCBzY2FsZTogXCJzXCIgfSkpIDogbnVsbDtcbiAgICBjb25zdCBpY29uRW5kRWwgPSB0aGlzLmljb25FbmQgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1Muc2VnbWVudGVkQ29udHJvbEl0ZW1JY29uLCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsLCBpY29uOiB0aGlzLmljb25FbmQsIGtleTogXCJpY29uLWVuZFwiLCBzY2FsZTogXCJzXCIgfSkpIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtY2hlY2tlZFwiOiB0b0FyaWFCb29sZWFuKGNoZWNrZWQpLCBcImFyaWEtbGFiZWxcIjogdmFsdWUsIHJvbGU6IFwicmFkaW9cIiB9LCBoKFwibGFiZWxcIiwgeyBjbGFzczoge1xuICAgICAgICBcImxhYmVsLS1zY2FsZS1zXCI6IHNjYWxlID09PSBcInNcIixcbiAgICAgICAgXCJsYWJlbC0tc2NhbGUtbVwiOiBzY2FsZSA9PT0gXCJtXCIsXG4gICAgICAgIFwibGFiZWwtLXNjYWxlLWxcIjogc2NhbGUgPT09IFwibFwiLFxuICAgICAgICBcImxhYmVsLS1ob3Jpem9udGFsXCI6IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIsXG4gICAgICAgIFwibGFiZWwtLW91dGxpbmVcIjogYXBwZWFyYW5jZSA9PT0gXCJvdXRsaW5lXCIsXG4gICAgICAgIFwibGFiZWwtLW91dGxpbmUtZmlsbFwiOiBhcHBlYXJhbmNlID09PSBcIm91dGxpbmUtZmlsbFwiXG4gICAgICB9IH0sIHRoaXMuaWNvblN0YXJ0ID8gaWNvblN0YXJ0RWwgOiBudWxsLCBoKFwic2xvdFwiLCBudWxsLCB2YWx1ZSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaW5wdXQgfSksIHRoaXMuaWNvbkVuZCA/IGljb25FbmRFbCA6IG51bGwpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiY2hlY2tlZFwiOiBbXCJoYW5kbGVDaGVja2VkQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5TZWdtZW50ZWRDb250cm9sSXRlbS5zdHlsZSA9IHNlZ21lbnRlZENvbnRyb2xJdGVtQ3NzO1xuXG5leHBvcnQgeyBTZWdtZW50ZWRDb250cm9sIGFzIGNhbGNpdGVfc2VnbWVudGVkX2NvbnRyb2wsIFNlZ21lbnRlZENvbnRyb2xJdGVtIGFzIGNhbGNpdGVfc2VnbWVudGVkX2NvbnRyb2xfaXRlbSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9