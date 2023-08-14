"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-dropdown_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getUserAgentData),
/* harmony export */   "g": () => (/* binding */ getUserAgentString)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-dropdown_3.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-dropdown_3.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_dropdown": () => (/* binding */ Dropdown),
/* harmony export */   "calcite_dropdown_group": () => (/* binding */ DropdownGroup),
/* harmony export */   "calcite_dropdown_item": () => (/* binding */ DropdownItem)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating-ui-8d547175.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */













const SLOTS = {
  dropdownTrigger: "trigger"
};

const dropdownCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}";

const Dropdown = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDropdownSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownSelect", 6);
    this.calciteDropdownBeforeClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownBeforeClose", 6);
    this.calciteDropdownClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownClose", 6);
    this.calciteDropdownBeforeOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownBeforeOpen", 6);
    this.calciteDropdownOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownOpen", 6);
    this.items = [];
    this.groups = [];
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.updateItems());
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__.c)("resize", (entries) => this.resizeObserverCallback(entries));
    this.openTransitionProp = "opacity";
    this.guid = `calcite-dropdown-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    this.defaultAssignedElements = [];
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.slotChangeHandler = (event) => {
      this.defaultAssignedElements = event.target.assignedElements({
        flatten: true
      });
      this.updateItems();
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.f)(flipPlacements, el)
        : null;
    };
    this.updateTriggers = (event) => {
      this.triggers = event.target.assignedElements({
        flatten: true
      });
      this.reposition(true);
    };
    this.updateItems = () => {
      this.items = this.groups
        .map((group) => Array.from(group?.querySelectorAll("calcite-dropdown-item")))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
      this.updateSelectedItems();
      this.reposition(true);
    };
    this.updateGroups = (event) => {
      const groups = event.target
        .assignedElements({ flatten: true })
        .filter((el) => el?.matches("calcite-dropdown-group"));
      this.groups = groups;
      this.updateItems();
    };
    this.resizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (target === this.referenceEl) {
          this.setDropdownWidth();
        }
        else if (target === this.scrollerEl) {
          this.setMaxScrollerHeight();
        }
      });
    };
    this.setDropdownWidth = () => {
      const { referenceEl, scrollerEl } = this;
      const referenceElWidth = referenceEl?.clientWidth;
      if (!referenceElWidth || !scrollerEl) {
        return;
      }
      scrollerEl.style.minWidth = `${referenceElWidth}px`;
    };
    this.setMaxScrollerHeight = () => {
      const { scrollerEl } = this;
      if (!scrollerEl) {
        return;
      }
      this.reposition(true);
      const maxScrollerHeight = this.getMaxScrollerHeight();
      scrollerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      this.reposition(true);
    };
    this.setScrollerAndTransitionEl = (el) => {
      this.resizeObserver.observe(el);
      this.scrollerEl = el;
      this.transitionEl = el;
      (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl);
      this.resizeObserver.observe(el);
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.keyDownHandler = (event) => {
      const target = event.target;
      if (target !== this.referenceEl) {
        return;
      }
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (this.open) {
        if (key === "Escape") {
          this.closeCalciteDropdown();
          event.preventDefault();
          return;
        }
        else if (event.shiftKey && key === "Tab") {
          this.closeCalciteDropdown();
          event.preventDefault();
          return;
        }
      }
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_5__.i)(key)) {
        this.openCalciteDropdown();
        event.preventDefault();
      }
      else if (key === "Escape") {
        this.closeCalciteDropdown();
        event.preventDefault();
      }
    };
    this.focusOnFirstActiveOrFirstItem = () => {
      this.getFocusableElement(this.items.find((item) => item.selected) || this.items[0]);
    };
    this.toggleOpenEnd = () => {
      this.focusOnFirstActiveOrFirstItem();
      this.el.removeEventListener("calciteDropdownOpen", this.toggleOpenEnd);
    };
    this.openCalciteDropdown = () => {
      this.open = !this.open;
      if (this.open) {
        this.el.addEventListener("calciteDropdownOpen", this.toggleOpenEnd);
      }
    };
    this.open = false;
    this.closeOnSelectDisabled = false;
    this.disabled = false;
    this.flipPlacements = undefined;
    this.maxItems = 0;
    this.overlayPositioning = "absolute";
    this.placement = _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.scale = "m";
    this.selectedItems = [];
    this.type = "click";
    this.width = undefined;
  }
  openHandler(value) {
    if (!this.disabled) {
      if (value) {
        this.reposition(true);
      }
      return;
    }
    this.open = false;
  }
  handleDisabledChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.setFilteredPlacements();
    this.reposition(true);
    if (this.open) {
      this.openHandler(this.open);
    }
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    this.reposition(true);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.referenceEl, this.floatingEl);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
  }
  render() {
    const { open, guid } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "calcite-trigger-container", id: `${guid}-menubutton`, onClick: this.openCalciteDropdown, onKeyDown: this.keyDownHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setReferenceEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { "aria-controls": `${guid}-menu`, "aria-expanded": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(open), "aria-haspopup": "menu", name: SLOTS.dropdownTrigger, onSlotchange: this.updateTriggers })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(!open), class: "calcite-dropdown-wrapper",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setFloatingEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-labelledby": `${guid}-menubutton`, class: {
        ["calcite-dropdown-content"]: true,
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.F.animation]: true,
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.F.animationActive]: open
      }, id: `${guid}-menu`, role: "menu",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setScrollerAndTransitionEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.updateGroups })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipPlacements: filteredFlipPlacements,
      type: "menu"
    }, delayed);
  }
  closeCalciteDropdownOnClick(event) {
    if (this.disabled ||
      !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event) ||
      !this.open ||
      event.composedPath().includes(this.el)) {
      return;
    }
    this.closeCalciteDropdown(false);
  }
  closeCalciteDropdownOnEvent(event) {
    this.closeCalciteDropdown();
    event.stopPropagation();
  }
  closeCalciteDropdownOnOpenEvent(event) {
    if (event.composedPath().includes(this.el)) {
      return;
    }
    this.open = false;
  }
  pointerEnterHandler() {
    if (this.disabled || this.type !== "hover") {
      return;
    }
    this.openCalciteDropdown();
  }
  pointerLeaveHandler() {
    if (this.disabled || this.type !== "hover") {
      return;
    }
    this.closeCalciteDropdown();
  }
  calciteInternalDropdownItemKeyEvent(event) {
    const { keyboardEvent } = event.detail;
    const target = keyboardEvent.target;
    switch (keyboardEvent.key) {
      case "Tab":
        if (this.items.indexOf(target) === this.items.length - 1 && !keyboardEvent.shiftKey) {
          this.closeCalciteDropdown();
        }
        else if (this.items.indexOf(target) === 0 && keyboardEvent.shiftKey) {
          this.closeCalciteDropdown();
        }
        break;
      case "ArrowDown":
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "next");
        break;
      case "ArrowUp":
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "previous");
        break;
      case "Home":
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "first");
        break;
      case "End":
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "last");
        break;
    }
    event.stopPropagation();
  }
  handleItemSelect(event) {
    this.updateSelectedItems();
    event.stopPropagation();
    this.calciteDropdownSelect.emit();
    if (!this.closeOnSelectDisabled ||
      event.detail.requestedDropdownGroup.selectionMode === "none") {
      this.closeCalciteDropdown();
    }
    event.stopPropagation();
  }
  onBeforeOpen() {
    this.calciteDropdownBeforeOpen.emit();
  }
  onOpen() {
    this.calciteDropdownOpen.emit();
  }
  onBeforeClose() {
    this.calciteDropdownBeforeClose.emit();
  }
  onClose() {
    this.calciteDropdownClose.emit();
  }
  updateSelectedItems() {
    this.selectedItems = this.items.filter((item) => item.selected);
  }
  getMaxScrollerHeight() {
    const { maxItems, items } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    let groupHeaderHeight;
    this.groups.forEach((group) => {
      if (maxItems > 0 && itemsToProcess < maxItems) {
        Array.from(group.children).forEach((item, index) => {
          if (index === 0) {
            if (isNaN(groupHeaderHeight)) {
              groupHeaderHeight = item.offsetTop;
            }
            maxScrollerHeight += groupHeaderHeight;
          }
          if (itemsToProcess < maxItems) {
            maxScrollerHeight += item.offsetHeight;
            itemsToProcess += 1;
          }
        });
      }
    });
    return items.length > maxItems ? maxScrollerHeight : 0;
  }
  closeCalciteDropdown(focusTrigger = true) {
    this.open = false;
    if (focusTrigger) {
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.triggers[0]);
    }
  }
  getFocusableElement(item) {
    if (!item) {
      return;
    }
    const target = item.attributes.isLink
      ? item.shadowRoot.querySelector("a")
      : item;
    (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(target);
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "open": ["openHandler"],
    "disabled": ["handleDisabledChange"],
    "flipPlacements": ["flipPlacementsHandler"],
    "maxItems": ["maxItemsHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"]
  }; }
};
Dropdown.style = dropdownCss;

const CSS$1 = {
  containerSmall: "container--s",
  containerMedium: "container--m",
  containerLarge: "container--l"
};

const dropdownGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-ui-border-3)}";

const DropdownGroup = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalDropdownItemChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownItemChange", 6);
    this.groupTitle = undefined;
    this.selectionMode = "single";
    this.scale = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.groupPosition = this.getGroupPosition();
  }
  render() {
    const scale = this.scale || (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "scale", "m");
    const groupTitle = this.groupTitle ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: "dropdown-title" }, this.groupTitle)) : null;
    const dropdownSeparator = this.groupPosition > 0 ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "dropdown-separator", role: "separator" }) : null;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-label": this.groupTitle, role: "group" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        [CSS$1.containerSmall]: scale === "s",
        [CSS$1.containerMedium]: scale === "m",
        [CSS$1.containerLarge]: scale === "l"
      }, title: this.groupTitle }, dropdownSeparator, groupTitle, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
    this.requestedDropdownItem = event.detail.requestedDropdownItem;
    this.calciteInternalDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getGroupPosition() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DropdownGroup.style = dropdownGroupCss;

const CSS = {
  containerLink: "container--link",
  containerSmall: "container--s",
  containerMedium: "container--m",
  containerLarge: "container--l",
  containerMulti: "container--multi-selection",
  containerSingle: "container--single-selection",
  containerNone: "container--none-selection",
  icon: "dropdown-item-icon",
  iconEnd: "dropdown-item-icon-end",
  iconStart: "dropdown-item-icon-start",
  itemContent: "dropdown-item-content",
  link: "dropdown-link"
};

const dropdownItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}.container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .container:not(.container--none-selection):before,:host([selected]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{inset-inline-start:0.5rem}.container--m:before{inset-inline-start:0.75rem}.container--l:before{inset-inline-start:1rem}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}";

const DropdownItem = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDropdownItemSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownItemSelect", 6);
    this.calciteInternalDropdownItemSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownItemSelect", 6);
    this.calciteInternalDropdownItemKeyEvent = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownItemKeyEvent", 6);
    this.calciteInternalDropdownCloseRequest = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownCloseRequest", 6);
    /** Specifies the scale of dropdown-item controlled by the parent, defaults to m */
    this.scale = "m";
    this.selected = false;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.iconEnd = undefined;
    this.href = undefined;
    this.label = undefined;
    this.rel = undefined;
    this.target = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    this.initialize();
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  connectedCallback() {
    this.initialize();
  }
  render() {
    const scale = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "scale", this.scale);
    const iconStartEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: scale === "l" ? "m" : "s" }));
    const contentNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.itemContent }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
    const iconEndEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconEnd, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: scale === "l" ? "m" : "s" }));
    const slottedContent = this.iconStart && this.iconEnd
      ? [iconStartEl, contentNode, iconEndEl]
      : this.iconStart
        ? [iconStartEl, contentNode]
        : this.iconEnd
          ? [contentNode, iconEndEl]
          : contentNode;
    const contentEl = !this.href ? (slottedContent) : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-label": this.label, class: CSS.link, href: this.href, rel: this.rel, tabIndex: -1, target: this.target,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.childLink = el) }, slottedContent));
    const itemRole = this.href
      ? null
      : this.selectionMode === "single"
        ? "menuitemradio"
        : this.selectionMode === "multiple"
          ? "menuitemcheckbox"
          : "menuitem";
    const itemAria = this.selectionMode !== "none" ? (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.selected) : null;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-checked": itemAria, role: itemRole, tabindex: "0" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        [CSS.containerLink]: !!this.href,
        [CSS.containerSmall]: scale === "s",
        [CSS.containerMedium]: scale === "m",
        [CSS.containerLarge]: scale === "l",
        [CSS.containerMulti]: this.selectionMode === "multiple",
        [CSS.containerSingle]: this.selectionMode === "single",
        [CSS.containerNone]: this.selectionMode === "none"
      } }, this.selectionMode !== "none" ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.icon, icon: this.selectionMode === "multiple" ? "check" : "bullet-point", scale: scale === "l" ? "m" : "s" })) : null, contentEl)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        this.emitRequestedItem();
        if (this.href) {
          this.childLink.click();
        }
        event.preventDefault();
        break;
      case "Escape":
        this.calciteInternalDropdownCloseRequest.emit();
        event.preventDefault();
        break;
      case "Tab":
        this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
        break;
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        event.preventDefault();
        this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
        break;
    }
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  initialize() {
    this.selectionMode = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "selection-mode", "single");
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none") {
      this.selected = false;
    }
  }
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multiple":
        if (this.el === this.requestedDropdownItem) {
          this.selected = !this.selected;
        }
        break;
      case "single":
        if (this.el === this.requestedDropdownItem) {
          this.selected = true;
        }
        else if (this.requestedDropdownGroup === this.parentDropdownGroupEl) {
          this.selected = false;
        }
        break;
      case "none":
        this.selected = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit();
    this.calciteInternalDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DropdownItem.style = dropdownItemCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectInteractive),
/* harmony export */   "d": () => (/* binding */ disconnectInteractive),
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test((0,_browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_0__.g)());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
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
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
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
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isActivationKey),
/* harmony export */   "n": () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTljOTljZTMwNTI2ZjUxYmU5ZWM2NjFjMTFjODNiYjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ3lDO0FBQ3FDO0FBQzVJO0FBQzZFO0FBQ25FO0FBQzJEO0FBQ3REO0FBQ3VEO0FBQ3BGO0FBQ0Y7QUFDQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxvQkFBb0IsY0FBYyx5R0FBeUcsVUFBVSxnQ0FBZ0Msa0VBQWtFLGNBQWMsa0JBQWtCLDJDQUEyQyxr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VSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJGOzs7Ozs7Ozs7Ozs7Ozs7O0FDekkzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Y7Ozs7Ozs7Ozs7Ozs7OztBQzNEdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Jyb3dzZXItOTliYzYyY2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1kcm9wZG93bl8zLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2tleS04ZmYwZDEwMS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS04MDU4ZTMwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9vYnNlcnZlcnMtOTVlOTdmYWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbmV4cG9ydCB7IGdldFVzZXJBZ2VudERhdGEgYXMgYSwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvQXJpYUJvb2xlYW4sIGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgaiBhcyBmb2N1c0VsZW1lbnRJbkdyb3VwLCBmIGFzIGZvY3VzRWxlbWVudCwgdiBhcyBnZXRFbGVtZW50UHJvcCB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IGYgYXMgZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzLCBjIGFzIGNvbm5lY3RGbG9hdGluZ1VJLCBkIGFzIGRlZmF1bHRNZW51UGxhY2VtZW50LCBhIGFzIGRpc2Nvbm5lY3RGbG9hdGluZ1VJLCBGIGFzIEZsb2F0aW5nQ1NTLCByIGFzIHJlcG9zaXRpb24gfSBmcm9tICcuL2Zsb2F0aW5nLXVpLThkNTQ3MTc1LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24sIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC0yMWQyYTZhYi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcbmltcG9ydCAnLi9kZWJvdW5jZS0wOTUwYTliOC5qcyc7XG5cbmNvbnN0IFNMT1RTID0ge1xuICBkcm9wZG93blRyaWdnZXI6IFwidHJpZ2dlclwiXG59O1xuXG5jb25zdCBkcm9wZG93bkNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleDowIDEgYXV0b306aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QgLmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcnstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4KTt2aXNpYmlsaXR5OmhpZGRlbn0uY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX0uY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9LmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcltkYXRhLXBsYWNlbWVudF49dG9wXSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9LmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfS5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfS5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJbZGF0YS1wbGFjZW1lbnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX06aG9zdChbb3Blbl0pIC5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJ7dmlzaWJpbGl0eTp2aXNpYmxlfTpob3N0IC5jYWxjaXRlLWRyb3Bkb3duLWNvbnRlbnR7bWF4LWJsb2NrLXNpemU6NDV2aDtpbmxpbmUtc2l6ZTphdXRvO292ZXJmbG93LXk6YXV0bztvdmVyZmxvdy14OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoKX0uY2FsY2l0ZS10cmlnZ2VyLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bzt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtvcGVuXSkgLmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcntib3JkZXI6MXB4IHNvbGlkIGNhbnZhc1RleHR9fTpob3N0KFt3aWR0aD1zXSl7LS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoOjEycmVtfTpob3N0KFt3aWR0aD1tXSl7LS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoOjE0cmVtfTpob3N0KFt3aWR0aD1sXSl7LS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoOjE2cmVtfVwiO1xuXG5jb25zdCBEcm9wZG93biA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEcm9wZG93blNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25CZWZvcmVDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25DbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkJlZm9yZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEcm9wZG93bkJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25PcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25PcGVuXCIsIDYpO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVJdGVtcygpKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKGVudHJpZXMpID0+IHRoaXMucmVzaXplT2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSk7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS1kcm9wZG93bi0ke2d1aWQoKX1gO1xuICAgIHRoaXMuZGVmYXVsdEFzc2lnbmVkRWxlbWVudHMgPSBbXTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zbG90Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kZWZhdWx0QXNzaWduZWRFbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWwsIGZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5maWx0ZXJlZEZsaXBQbGFjZW1lbnRzID0gZmxpcFBsYWNlbWVudHNcbiAgICAgICAgPyBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMoZmxpcFBsYWNlbWVudHMsIGVsKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVRyaWdnZXJzID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJzID0gZXZlbnQudGFyZ2V0LmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSXRlbXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5ncm91cHNcbiAgICAgICAgLm1hcCgoZ3JvdXApID0+IEFycmF5LmZyb20oZ3JvdXA/LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWRyb3Bkb3duLWl0ZW1cIikpKVxuICAgICAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IFsuLi5wcmV2aW91c1ZhbHVlLCAuLi5jdXJyZW50VmFsdWVdLCBbXSk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMoKTtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlR3JvdXBzID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBncm91cHMgPSBldmVudC50YXJnZXRcbiAgICAgICAgLmFzc2lnbmVkRWxlbWVudHMoeyBmbGF0dGVuOiB0cnVlIH0pXG4gICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIikpO1xuICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZW50cnk7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMucmVmZXJlbmNlRWwpIHtcbiAgICAgICAgICB0aGlzLnNldERyb3Bkb3duV2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMuc2Nyb2xsZXJFbCkge1xuICAgICAgICAgIHRoaXMuc2V0TWF4U2Nyb2xsZXJIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnNldERyb3Bkb3duV2lkdGggPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlZmVyZW5jZUVsLCBzY3JvbGxlckVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcmVmZXJlbmNlRWxXaWR0aCA9IHJlZmVyZW5jZUVsPy5jbGllbnRXaWR0aDtcbiAgICAgIGlmICghcmVmZXJlbmNlRWxXaWR0aCB8fCAhc2Nyb2xsZXJFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzY3JvbGxlckVsLnN0eWxlLm1pbldpZHRoID0gYCR7cmVmZXJlbmNlRWxXaWR0aH1weGA7XG4gICAgfTtcbiAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBzY3JvbGxlckVsIH0gPSB0aGlzO1xuICAgICAgaWYgKCFzY3JvbGxlckVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICAgIGNvbnN0IG1heFNjcm9sbGVySGVpZ2h0ID0gdGhpcy5nZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICAgICAgc2Nyb2xsZXJFbC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhTY3JvbGxlckhlaWdodCA+IDAgPyBgJHttYXhTY3JvbGxlckhlaWdodH1weGAgOiBcIlwiO1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5zZXRTY3JvbGxlckFuZFRyYW5zaXRpb25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICAgIHRoaXMuc2Nyb2xsZXJFbCA9IGVsO1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfTtcbiAgICB0aGlzLnNldFJlZmVyZW5jZUVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnJlZmVyZW5jZUVsID0gZWw7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmxvYXRpbmdFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsID0gZWw7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5yZWZlcmVuY2VFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcmV2ZW50ZWQsIGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlQ2FsY2l0ZURyb3Bkb3duKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYga2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNBY3RpdmF0aW9uS2V5KGtleSkpIHtcbiAgICAgICAgdGhpcy5vcGVuQ2FsY2l0ZURyb3Bkb3duKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mb2N1c09uRmlyc3RBY3RpdmVPckZpcnN0SXRlbSA9ICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0Rm9jdXNhYmxlRWxlbWVudCh0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uc2VsZWN0ZWQpIHx8IHRoaXMuaXRlbXNbMF0pO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVPcGVuRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c09uRmlyc3RBY3RpdmVPckZpcnN0SXRlbSgpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FsY2l0ZURyb3Bkb3duT3BlblwiLCB0aGlzLnRvZ2dsZU9wZW5FbmQpO1xuICAgIH07XG4gICAgdGhpcy5vcGVuQ2FsY2l0ZURyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2FsY2l0ZURyb3Bkb3duT3BlblwiLCB0aGlzLnRvZ2dsZU9wZW5FbmQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZU9uU2VsZWN0RGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mbGlwUGxhY2VtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heEl0ZW1zID0gMDtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnBsYWNlbWVudCA9IGRlZmF1bHRNZW51UGxhY2VtZW50O1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnR5cGUgPSBcImNsaWNrXCI7XG4gICAgdGhpcy53aWR0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICBvcGVuSGFuZGxlcih2YWx1ZSkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgaGFuZGxlRGlzYWJsZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZmxpcFBsYWNlbWVudHNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG1heEl0ZW1zSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0KCk7XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgcGxhY2VtZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMub3BlbkhhbmRsZXIodGhpcy5vcGVuKTtcbiAgICB9XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuLCBndWlkIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiY2FsY2l0ZS10cmlnZ2VyLWNvbnRhaW5lclwiLCBpZDogYCR7Z3VpZH0tbWVudWJ1dHRvbmAsIG9uQ2xpY2s6IHRoaXMub3BlbkNhbGNpdGVEcm9wZG93biwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0UmVmZXJlbmNlRWwgfSwgaChcInNsb3RcIiwgeyBcImFyaWEtY29udHJvbHNcIjogYCR7Z3VpZH0tbWVudWAsIFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKG9wZW4pLCBcImFyaWEtaGFzcG9wdXBcIjogXCJtZW51XCIsIG5hbWU6IFNMT1RTLmRyb3Bkb3duVHJpZ2dlciwgb25TbG90Y2hhbmdlOiB0aGlzLnVwZGF0ZVRyaWdnZXJzIH0pKSwgaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbighb3BlbiksIGNsYXNzOiBcImNhbGNpdGUtZHJvcGRvd24td3JhcHBlclwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0RmxvYXRpbmdFbCB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogYCR7Z3VpZH0tbWVudWJ1dHRvbmAsIGNsYXNzOiB7XG4gICAgICAgIFtcImNhbGNpdGUtZHJvcGRvd24tY29udGVudFwiXTogdHJ1ZSxcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbl06IHRydWUsXG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiBvcGVuXG4gICAgICB9LCBpZDogYCR7Z3VpZH0tbWVudWAsIHJvbGU6IFwibWVudVwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0U2Nyb2xsZXJBbmRUcmFuc2l0aW9uRWwgfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMudXBkYXRlR3JvdXBzIH0pKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGVsYXllZFxuICAgKi9cbiAgYXN5bmMgcmVwb3NpdGlvbihkZWxheWVkID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IGZsb2F0aW5nRWwsIHJlZmVyZW5jZUVsLCBwbGFjZW1lbnQsIG92ZXJsYXlQb3NpdGlvbmluZywgZmlsdGVyZWRGbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICByZXR1cm4gcmVwb3NpdGlvbih0aGlzLCB7XG4gICAgICBmbG9hdGluZ0VsLFxuICAgICAgcmVmZXJlbmNlRWwsXG4gICAgICBvdmVybGF5UG9zaXRpb25pbmcsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBmbGlwUGxhY2VtZW50czogZmlsdGVyZWRGbGlwUGxhY2VtZW50cyxcbiAgICAgIHR5cGU6IFwibWVudVwiXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgY2xvc2VDYWxjaXRlRHJvcGRvd25PbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHxcbiAgICAgICFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSB8fFxuICAgICAgIXRoaXMub3BlbiB8fFxuICAgICAgZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bihmYWxzZSk7XG4gIH1cbiAgY2xvc2VDYWxjaXRlRHJvcGRvd25PbkV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGNsb3NlQ2FsY2l0ZURyb3Bkb3duT25PcGVuRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbiAgcG9pbnRlckVudGVySGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnR5cGUgIT09IFwiaG92ZXJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5DYWxjaXRlRHJvcGRvd24oKTtcbiAgfVxuICBwb2ludGVyTGVhdmVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMudHlwZSAhPT0gXCJob3ZlclwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1LZXlFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsga2V5Ym9hcmRFdmVudCB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IHRhcmdldCA9IGtleWJvYXJkRXZlbnQudGFyZ2V0O1xuICAgIHN3aXRjaCAoa2V5Ym9hcmRFdmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMuaW5kZXhPZih0YXJnZXQpID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgJiYgIWtleWJvYXJkRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlQ2FsY2l0ZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pdGVtcy5pbmRleE9mKHRhcmdldCkgPT09IDAgJiYga2V5Ym9hcmRFdmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLml0ZW1zLCB0YXJnZXQsIFwibmV4dFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMuaXRlbXMsIHRhcmdldCwgXCJwcmV2aW91c1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMuaXRlbXMsIHRhcmdldCwgXCJmaXJzdFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5pdGVtcywgdGFyZ2V0LCBcImxhc3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBoYW5kbGVJdGVtU2VsZWN0KGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25TZWxlY3QuZW1pdCgpO1xuICAgIGlmICghdGhpcy5jbG9zZU9uU2VsZWN0RGlzYWJsZWQgfHxcbiAgICAgIGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWREcm9wZG93bkdyb3VwLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlQ2FsY2l0ZURyb3Bkb3duKCk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIG9uQmVmb3JlT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkJlZm9yZU9wZW4uZW1pdCgpO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bk9wZW4uZW1pdCgpO1xuICB9XG4gIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25CZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkNsb3NlLmVtaXQoKTtcbiAgfVxuICB1cGRhdGVTZWxlY3RlZEl0ZW1zKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkKTtcbiAgfVxuICBnZXRNYXhTY3JvbGxlckhlaWdodCgpIHtcbiAgICBjb25zdCB7IG1heEl0ZW1zLCBpdGVtcyB9ID0gdGhpcztcbiAgICBsZXQgaXRlbXNUb1Byb2Nlc3MgPSAwO1xuICAgIGxldCBtYXhTY3JvbGxlckhlaWdodCA9IDA7XG4gICAgbGV0IGdyb3VwSGVhZGVySGVpZ2h0O1xuICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBpZiAobWF4SXRlbXMgPiAwICYmIGl0ZW1zVG9Qcm9jZXNzIDwgbWF4SXRlbXMpIHtcbiAgICAgICAgQXJyYXkuZnJvbShncm91cC5jaGlsZHJlbikuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGlmIChpc05hTihncm91cEhlYWRlckhlaWdodCkpIHtcbiAgICAgICAgICAgICAgZ3JvdXBIZWFkZXJIZWlnaHQgPSBpdGVtLm9mZnNldFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1heFNjcm9sbGVySGVpZ2h0ICs9IGdyb3VwSGVhZGVySGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXRlbXNUb1Byb2Nlc3MgPCBtYXhJdGVtcykge1xuICAgICAgICAgICAgbWF4U2Nyb2xsZXJIZWlnaHQgKz0gaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBpdGVtc1RvUHJvY2VzcyArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IG1heEl0ZW1zID8gbWF4U2Nyb2xsZXJIZWlnaHQgOiAwO1xuICB9XG4gIGNsb3NlQ2FsY2l0ZURyb3Bkb3duKGZvY3VzVHJpZ2dlciA9IHRydWUpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICBpZiAoZm9jdXNUcmlnZ2VyKSB7XG4gICAgICBmb2N1c0VsZW1lbnQodGhpcy50cmlnZ2Vyc1swXSk7XG4gICAgfVxuICB9XG4gIGdldEZvY3VzYWJsZUVsZW1lbnQoaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBpdGVtLmF0dHJpYnV0ZXMuaXNMaW5rXG4gICAgICA/IGl0ZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiYVwiKVxuICAgICAgOiBpdGVtO1xuICAgIGZvY3VzRWxlbWVudCh0YXJnZXQpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbXCJoYW5kbGVEaXNhYmxlZENoYW5nZVwiXSxcbiAgICBcImZsaXBQbGFjZW1lbnRzXCI6IFtcImZsaXBQbGFjZW1lbnRzSGFuZGxlclwiXSxcbiAgICBcIm1heEl0ZW1zXCI6IFtcIm1heEl0ZW1zSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFtcInBsYWNlbWVudEhhbmRsZXJcIl1cbiAgfTsgfVxufTtcbkRyb3Bkb3duLnN0eWxlID0gZHJvcGRvd25Dc3M7XG5cbmNvbnN0IENTUyQxID0ge1xuICBjb250YWluZXJTbWFsbDogXCJjb250YWluZXItLXNcIixcbiAgY29udGFpbmVyTWVkaXVtOiBcImNvbnRhaW5lci0tbVwiLFxuICBjb250YWluZXJMYXJnZTogXCJjb250YWluZXItLWxcIlxufTtcblxuY29uc3QgZHJvcGRvd25Hcm91cENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9LmNvbnRhaW5lcnt0ZXh0LWFsaWduOnN0YXJ0fS5jb250YWluZXItLXN7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfS5jb250YWluZXItLXMgLmRyb3Bkb3duLXRpdGxle3BhZGRpbmc6MC41cmVtfS5jb250YWluZXItLW17Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfS5jb250YWluZXItLW0gLmRyb3Bkb3duLXRpdGxle3BhZGRpbmc6MC43NXJlbX0uY29udGFpbmVyLS1se2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfS5jb250YWluZXItLWwgLmRyb3Bkb3duLXRpdGxle3BhZGRpbmc6MXJlbX0uZHJvcGRvd24tdGl0bGV7bWFyZ2luLWJsb2NrLWVuZDotMXB4O2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOmRlZmF1bHQ7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uZHJvcGRvd24tc2VwYXJhdG9ye2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZToxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX1cIjtcblxuY29uc3QgRHJvcGRvd25Hcm91cCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmdyb3VwVGl0bGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gXCJzaW5nbGVcIjtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuZ3JvdXBQb3NpdGlvbiA9IHRoaXMuZ2V0R3JvdXBQb3NpdGlvbigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGUgfHwgZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJzY2FsZVwiLCBcIm1cIik7XG4gICAgY29uc3QgZ3JvdXBUaXRsZSA9IHRoaXMuZ3JvdXBUaXRsZSA/IChoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcImRyb3Bkb3duLXRpdGxlXCIgfSwgdGhpcy5ncm91cFRpdGxlKSkgOiBudWxsO1xuICAgIGNvbnN0IGRyb3Bkb3duU2VwYXJhdG9yID0gdGhpcy5ncm91cFBvc2l0aW9uID4gMCA/IGgoXCJkaXZcIiwgeyBjbGFzczogXCJkcm9wZG93bi1zZXBhcmF0b3JcIiwgcm9sZTogXCJzZXBhcmF0b3JcIiB9KSA6IG51bGw7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMuZ3JvdXBUaXRsZSwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBjb250YWluZXI6IHRydWUsXG4gICAgICAgIFtDU1MkMS5jb250YWluZXJTbWFsbF06IHNjYWxlID09PSBcInNcIixcbiAgICAgICAgW0NTUyQxLmNvbnRhaW5lck1lZGl1bV06IHNjYWxlID09PSBcIm1cIixcbiAgICAgICAgW0NTUyQxLmNvbnRhaW5lckxhcmdlXTogc2NhbGUgPT09IFwibFwiXG4gICAgICB9LCB0aXRsZTogdGhpcy5ncm91cFRpdGxlIH0sIGRyb3Bkb3duU2VwYXJhdG9yLCBncm91cFRpdGxlLCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1cGRhdGVBY3RpdmVJdGVtT25DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnJlcXVlc3RlZERyb3Bkb3duR3JvdXAgPSBldmVudC5kZXRhaWwucmVxdWVzdGVkRHJvcGRvd25Hcm91cDtcbiAgICB0aGlzLnJlcXVlc3RlZERyb3Bkb3duSXRlbSA9IGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWREcm9wZG93bkl0ZW07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1DaGFuZ2UuZW1pdCh7XG4gICAgICByZXF1ZXN0ZWREcm9wZG93bkdyb3VwOiB0aGlzLnJlcXVlc3RlZERyb3Bkb3duR3JvdXAsXG4gICAgICByZXF1ZXN0ZWREcm9wZG93bkl0ZW06IHRoaXMucmVxdWVzdGVkRHJvcGRvd25JdGVtXG4gICAgfSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0R3JvdXBQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLmVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIiksIHRoaXMuZWwpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5Ecm9wZG93bkdyb3VwLnN0eWxlID0gZHJvcGRvd25Hcm91cENzcztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXJMaW5rOiBcImNvbnRhaW5lci0tbGlua1wiLFxuICBjb250YWluZXJTbWFsbDogXCJjb250YWluZXItLXNcIixcbiAgY29udGFpbmVyTWVkaXVtOiBcImNvbnRhaW5lci0tbVwiLFxuICBjb250YWluZXJMYXJnZTogXCJjb250YWluZXItLWxcIixcbiAgY29udGFpbmVyTXVsdGk6IFwiY29udGFpbmVyLS1tdWx0aS1zZWxlY3Rpb25cIixcbiAgY29udGFpbmVyU2luZ2xlOiBcImNvbnRhaW5lci0tc2luZ2xlLXNlbGVjdGlvblwiLFxuICBjb250YWluZXJOb25lOiBcImNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb25cIixcbiAgaWNvbjogXCJkcm9wZG93bi1pdGVtLWljb25cIixcbiAgaWNvbkVuZDogXCJkcm9wZG93bi1pdGVtLWljb24tZW5kXCIsXG4gIGljb25TdGFydDogXCJkcm9wZG93bi1pdGVtLWljb24tc3RhcnRcIixcbiAgaXRlbUNvbnRlbnQ6IFwiZHJvcGRvd24taXRlbS1jb250ZW50XCIsXG4gIGxpbms6IFwiZHJvcGRvd24tbGlua1wiXG59O1xuXG5jb25zdCBkcm9wZG93bkl0ZW1Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX0uY29udGFpbmVyLS1ze3BhZGRpbmctYmxvY2s6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1pbmxpbmUtZW5kOjAuNXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoxLjVyZW19LmNvbnRhaW5lci0tbXtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1pbmxpbmUtZW5kOjAuNzVyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbX0uY29udGFpbmVyLS1se3BhZGRpbmctYmxvY2s6MC42MjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07cGFkZGluZy1pbmxpbmUtZW5kOjFyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6Mi41cmVtfS5jb250YWluZXItLXMuY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbntwYWRkaW5nLWlubGluZS1zdGFydDowLjI1cmVtfS5jb250YWluZXItLXMuY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbiAuZHJvcGRvd24tbGlua3twYWRkaW5nLWlubGluZS1zdGFydDowcHh9LmNvbnRhaW5lci0tbS5jb250YWluZXItLW5vbmUtc2VsZWN0aW9ue3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNXJlbX0uY29udGFpbmVyLS1tLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb24gLmRyb3Bkb3duLWxpbmt7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MHB4fS5jb250YWluZXItLWwuY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbntwYWRkaW5nLWlubGluZS1zdGFydDowLjc1cmVtfS5jb250YWluZXItLWwuY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbiAuZHJvcGRvd24tbGlua3twYWRkaW5nLWlubGluZS1zdGFydDowcHh9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2FsaWduLWl0ZW1zOmNlbnRlcn0uY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RleHQtYWxpZ246c3RhcnR9LmRyb3Bkb3duLWl0ZW0tY29udGVudHtmbGV4OjEgMSBhdXRvO3BhZGRpbmctYmxvY2s6MC4xMjVyZW07cGFkZGluZy1pbmxpbmUtZW5kOmF1dG87cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC4yNXJlbX06aG9zdCwuY29udGFpbmVyLS1saW5rIGF7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCg6Zm9jdXMpe291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNvbnRhaW5lci0tbGlua3twYWRkaW5nOjBweH0uY29udGFpbmVyLS1saW5rIGF7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9LmNvbnRhaW5lci0tcyAuZHJvcGRvd24tbGlua3twYWRkaW5nLWJsb2NrOjAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtO3BhZGRpbmctaW5saW5lLWVuZDowLjVyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS41cmVtfS5jb250YWluZXItLW0gLmRyb3Bkb3duLWxpbmt7cGFkZGluZy1ibG9jazowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO3BhZGRpbmctaW5saW5lLWVuZDowLjc1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjJyZW19LmNvbnRhaW5lci0tbCAuZHJvcGRvd24tbGlua3twYWRkaW5nLWJsb2NrOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07cGFkZGluZy1pbmxpbmUtZW5kOjFyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6Mi41cmVtfTpob3N0KDpob3ZlcikgLmNvbnRhaW5lciw6aG9zdCg6YWN0aXZlKSAuY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lfTpob3N0KDpob3ZlcikgLmNvbnRhaW5lci0tbGluayAuZHJvcGRvd24tbGluayw6aG9zdCg6YWN0aXZlKSAuY29udGFpbmVyLS1saW5rIC5kcm9wZG93bi1saW5re2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpIC5jb250YWluZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmV9Omhvc3QoOmFjdGl2ZSkgLmNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX06aG9zdCg6aG92ZXIpIC5jb250YWluZXI6YmVmb3JlLDpob3N0KDphY3RpdmUpIC5jb250YWluZXI6YmVmb3JlLDpob3N0KDpmb2N1cykgLmNvbnRhaW5lcjpiZWZvcmV7b3BhY2l0eToxfTpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXI6bm90KC5jb250YWluZXItLW5vbmUtc2VsZWN0aW9uKSw6aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyLS1saW5rIC5kcm9wZG93bi1saW5re2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcjpub3QoLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb24pOmJlZm9yZSw6aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyLS1saW5rIC5kcm9wZG93bi1saW5rOmJlZm9yZXtvcGFjaXR5OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcjpub3QoLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb24pIGNhbGNpdGUtaWNvbiw6aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyLS1saW5rIC5kcm9wZG93bi1saW5rIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uY29udGFpbmVyLS1tdWx0aS1zZWxlY3Rpb246YmVmb3JlLC5jb250YWluZXItLW5vbmUtc2VsZWN0aW9uOmJlZm9yZXtkaXNwbGF5Om5vbmV9LmNvbnRhaW5lci0tczpiZWZvcmV7aW5zZXQtaW5saW5lLXN0YXJ0OjAuNXJlbX0uY29udGFpbmVyLS1tOmJlZm9yZXtpbnNldC1pbmxpbmUtc3RhcnQ6MC43NXJlbX0uY29udGFpbmVyLS1sOmJlZm9yZXtpbnNldC1pbmxpbmUtc3RhcnQ6MXJlbX0uZHJvcGRvd24taXRlbS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnNjYWxlKDAuOSl9LmNvbnRhaW5lci0tcyAuZHJvcGRvd24taXRlbS1pY29ue2luc2V0LWlubGluZS1zdGFydDowLjI1cmVtfS5jb250YWluZXItLW0gLmRyb3Bkb3duLWl0ZW0taWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC41cmVtfS5jb250YWluZXItLWwgLmRyb3Bkb3duLWl0ZW0taWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC43NXJlbX06aG9zdCg6aG92ZXIpIC5kcm9wZG93bi1pdGVtLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7b3BhY2l0eToxfTpob3N0KFtzZWxlY3RlZF0pIC5kcm9wZG93bi1pdGVtLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7b3BhY2l0eToxfS5jb250YWluZXItLXMgLmRyb3Bkb3duLWl0ZW0taWNvbi1zdGFydHttYXJnaW4taW5saW5lLWVuZDowLjVyZW07bWFyZ2luLWlubGluZS1zdGFydDowLjI1cmVtfS5jb250YWluZXItLXMgLmRyb3Bkb3duLWl0ZW0taWNvbi1lbmR7bWFyZ2luLWlubGluZS1zdGFydDowLjVyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24taXRlbS1pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjAuNzVyZW07bWFyZ2luLWlubGluZS1zdGFydDowLjI1cmVtfS5jb250YWluZXItLW0gLmRyb3Bkb3duLWl0ZW0taWNvbi1lbmR7bWFyZ2luLWlubGluZS1zdGFydDowLjc1cmVtfS5jb250YWluZXItLWwgLmRyb3Bkb3duLWl0ZW0taWNvbi1zdGFydHttYXJnaW4taW5saW5lLWVuZDoxcmVtO21hcmdpbi1pbmxpbmUtc3RhcnQ6MC4yNXJlbX0uY29udGFpbmVyLS1sIC5kcm9wZG93bi1pdGVtLWljb24tZW5ke21hcmdpbi1pbmxpbmUtc3RhcnQ6MXJlbX1cIjtcblxuY29uc3QgRHJvcGRvd25JdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVEcm9wZG93bkl0ZW1TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUtleUV2ZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1LZXlFdmVudFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duQ2xvc2VSZXF1ZXN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxEcm9wZG93bkNsb3NlUmVxdWVzdFwiLCA2KTtcbiAgICAvKiogU3BlY2lmaWVzIHRoZSBzY2FsZSBvZiBkcm9wZG93bi1pdGVtIGNvbnRyb2xsZWQgYnkgdGhlIHBhcmVudCwgZGVmYXVsdHMgdG8gbSAqL1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25FbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbD8uZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2NhbGVcIiwgdGhpcy5zY2FsZSk7XG4gICAgY29uc3QgaWNvblN0YXJ0RWwgPSAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvblN0YXJ0LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsID09PSBcInN0YXJ0XCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvblN0YXJ0LCBzY2FsZTogc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSk7XG4gICAgY29uc3QgY29udGVudE5vZGUgPSAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLml0ZW1Db250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgY29uc3QgaWNvbkVuZEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmljb25FbmQsIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiZW5kXCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvbkVuZCwgc2NhbGU6IHNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpO1xuICAgIGNvbnN0IHNsb3R0ZWRDb250ZW50ID0gdGhpcy5pY29uU3RhcnQgJiYgdGhpcy5pY29uRW5kXG4gICAgICA/IFtpY29uU3RhcnRFbCwgY29udGVudE5vZGUsIGljb25FbmRFbF1cbiAgICAgIDogdGhpcy5pY29uU3RhcnRcbiAgICAgICAgPyBbaWNvblN0YXJ0RWwsIGNvbnRlbnROb2RlXVxuICAgICAgICA6IHRoaXMuaWNvbkVuZFxuICAgICAgICAgID8gW2NvbnRlbnROb2RlLCBpY29uRW5kRWxdXG4gICAgICAgICAgOiBjb250ZW50Tm9kZTtcbiAgICBjb25zdCBjb250ZW50RWwgPSAhdGhpcy5ocmVmID8gKHNsb3R0ZWRDb250ZW50KSA6IChoKFwiYVwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVsLCBjbGFzczogQ1NTLmxpbmssIGhyZWY6IHRoaXMuaHJlZiwgcmVsOiB0aGlzLnJlbCwgdGFiSW5kZXg6IC0xLCB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuY2hpbGRMaW5rID0gZWwpIH0sIHNsb3R0ZWRDb250ZW50KSk7XG4gICAgY29uc3QgaXRlbVJvbGUgPSB0aGlzLmhyZWZcbiAgICAgID8gbnVsbFxuICAgICAgOiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlXCJcbiAgICAgICAgPyBcIm1lbnVpdGVtcmFkaW9cIlxuICAgICAgICA6IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiXG4gICAgICAgICAgPyBcIm1lbnVpdGVtY2hlY2tib3hcIlxuICAgICAgICAgIDogXCJtZW51aXRlbVwiO1xuICAgIGNvbnN0IGl0ZW1BcmlhID0gdGhpcy5zZWxlY3Rpb25Nb2RlICE9PSBcIm5vbmVcIiA/IHRvQXJpYUJvb2xlYW4odGhpcy5zZWxlY3RlZCkgOiBudWxsO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1jaGVja2VkXCI6IGl0ZW1BcmlhLCByb2xlOiBpdGVtUm9sZSwgdGFiaW5kZXg6IFwiMFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBjb250YWluZXI6IHRydWUsXG4gICAgICAgIFtDU1MuY29udGFpbmVyTGlua106ICEhdGhpcy5ocmVmLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lclNtYWxsXTogc2NhbGUgPT09IFwic1wiLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lck1lZGl1bV06IHNjYWxlID09PSBcIm1cIixcbiAgICAgICAgW0NTUy5jb250YWluZXJMYXJnZV06IHNjYWxlID09PSBcImxcIixcbiAgICAgICAgW0NTUy5jb250YWluZXJNdWx0aV06IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lclNpbmdsZV06IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIixcbiAgICAgICAgW0NTUy5jb250YWluZXJOb25lXTogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm5vbmVcIlxuICAgICAgfSB9LCB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmljb24sIGljb246IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiID8gXCJjaGVja1wiIDogXCJidWxsZXQtcG9pbnRcIiwgc2NhbGU6IHNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpIDogbnVsbCwgY29udGVudEVsKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5lbWl0UmVxdWVzdGVkSXRlbSgpO1xuICB9XG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCIgXCI6XG4gICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgdGhpcy5lbWl0UmVxdWVzdGVkSXRlbSgpO1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgdGhpcy5jaGlsZExpbmsuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFc2NhcGVcIjpcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkNsb3NlUmVxdWVzdC5lbWl0KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlRhYlwiOlxuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUtleUV2ZW50LmVtaXQoeyBrZXlib2FyZEV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1LZXlFdmVudC5lbWl0KHsga2V5Ym9hcmRFdmVudDogZXZlbnQgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICB1cGRhdGVBY3RpdmVJdGVtT25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBwYXJlbnRFbWl0dGVkQ2hhbmdlID0gZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5wYXJlbnREcm9wZG93bkdyb3VwRWwpO1xuICAgIGlmIChwYXJlbnRFbWl0dGVkQ2hhbmdlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RlZERyb3Bkb3duR3JvdXAgPSBldmVudC5kZXRhaWwucmVxdWVzdGVkRHJvcGRvd25Hcm91cDtcbiAgICAgIHRoaXMucmVxdWVzdGVkRHJvcGRvd25JdGVtID0gZXZlbnQuZGV0YWlsLnJlcXVlc3RlZERyb3Bkb3duSXRlbTtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lQWN0aXZlSXRlbSgpO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2VsZWN0aW9uLW1vZGVcIiwgXCJzaW5nbGVcIik7XG4gICAgdGhpcy5wYXJlbnREcm9wZG93bkdyb3VwRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLWRyb3Bkb3duLWdyb3VwXCIpO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGRldGVybWluZUFjdGl2ZUl0ZW0oKSB7XG4gICAgc3dpdGNoICh0aGlzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgIGNhc2UgXCJtdWx0aXBsZVwiOlxuICAgICAgICBpZiAodGhpcy5lbCA9PT0gdGhpcy5yZXF1ZXN0ZWREcm9wZG93bkl0ZW0pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2luZ2xlXCI6XG4gICAgICAgIGlmICh0aGlzLmVsID09PSB0aGlzLnJlcXVlc3RlZERyb3Bkb3duSXRlbSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucmVxdWVzdGVkRHJvcGRvd25Hcm91cCA9PT0gdGhpcy5wYXJlbnREcm9wZG93bkdyb3VwRWwpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBlbWl0UmVxdWVzdGVkSXRlbSgpIHtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkl0ZW1TZWxlY3QuZW1pdCgpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtU2VsZWN0LmVtaXQoe1xuICAgICAgcmVxdWVzdGVkRHJvcGRvd25JdGVtOiB0aGlzLmVsLFxuICAgICAgcmVxdWVzdGVkRHJvcGRvd25Hcm91cDogdGhpcy5wYXJlbnREcm9wZG93bkdyb3VwRWxcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuRHJvcGRvd25JdGVtLnN0eWxlID0gZHJvcGRvd25JdGVtQ3NzO1xuXG5leHBvcnQgeyBEcm9wZG93biBhcyBjYWxjaXRlX2Ryb3Bkb3duLCBEcm9wZG93bkdyb3VwIGFzIGNhbGNpdGVfZHJvcGRvd25fZ3JvdXAsIERyb3Bkb3duSXRlbSBhcyBjYWxjaXRlX2Ryb3Bkb3duX2l0ZW0gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGdldFVzZXJBZ2VudFN0cmluZyB9IGZyb20gJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5mdW5jdGlvbiBpc0FjdGl2YXRpb25LZXkoa2V5KSB7XG4gIHJldHVybiBrZXkgPT09IFwiRW50ZXJcIiB8fCBrZXkgPT09IFwiIFwiO1xufVxuY29uc3QgbnVtYmVyS2V5cyA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl07XG5cbmV4cG9ydCB7IGlzQWN0aXZhdGlvbktleSBhcyBpLCBudW1iZXJLZXlzIGFzIG4gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==