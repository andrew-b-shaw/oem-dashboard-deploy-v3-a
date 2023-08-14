"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-dropdown_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-dropdown_3.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-dropdown_3.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_dropdown": () => (/* binding */ Dropdown),
/* harmony export */   "calcite_dropdown_group": () => (/* binding */ DropdownGroup),
/* harmony export */   "calcite_dropdown_item": () => (/* binding */ DropdownItem)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating-ui-1033e8bb.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-1033e8bb.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./openCloseComponent-a26b009f.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */












const SLOTS = {
  dropdownTrigger: "trigger"
};

const dropdownCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}";

const Dropdown = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDropdownSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownSelect", 6);
    this.calciteDropdownBeforeClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownBeforeClose", 6);
    this.calciteDropdownClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownClose", 6);
    this.calciteDropdownBeforeOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownBeforeOpen", 6);
    this.calciteDropdownOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownOpen", 6);
    this.items = [];
    this.groups = [];
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.updateItems());
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_7__.c)("resize", (entries) => this.resizeObserverCallback(entries));
    this.openTransitionProp = "opacity";
    this.guid = `calcite-dropdown-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
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
        ? (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.f)(flipPlacements, el)
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
      (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl);
      this.resizeObserver.observe(el);
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.referenceEl, this.floatingEl);
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
      if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_5__.i)(key)) {
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
    this.placement = _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.d;
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
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
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    this.reposition(true);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_4__.u)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.referenceEl, this.floatingEl);
    this.resizeObserver?.disconnect();
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
  }
  render() {
    const { open, guid } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "calcite-trigger-container", id: `${guid}-menubutton`, onClick: this.openCalciteDropdown, onKeyDown: this.keyDownHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setReferenceEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { "aria-controls": `${guid}-menu`, "aria-expanded": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(open), "aria-haspopup": "menu", name: SLOTS.dropdownTrigger, onSlotchange: this.updateTriggers })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(!open), class: "calcite-dropdown-wrapper",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setFloatingEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-labelledby": `${guid}-menubutton`, class: {
        ["calcite-dropdown-content"]: true,
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.F.animation]: true,
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.F.animationActive]: open
      }, id: `${guid}-menu`, role: "menu",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setScrollerAndTransitionEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.updateGroups })))));
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
    return (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, {
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
      !(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event) ||
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
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "next");
        break;
      case "ArrowUp":
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "previous");
        break;
      case "Home":
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "first");
        break;
      case "End":
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.items, target, "last");
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
      (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.triggers[0]);
    }
  }
  getFocusableElement(item) {
    if (!item) {
      return;
    }
    const target = item.attributes.isLink
      ? item.shadowRoot.querySelector("a")
      : item;
    (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.f)(target);
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalDropdownItemChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownItemChange", 6);
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
    const scale = this.scale || (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "scale", "m");
    const groupTitle = this.groupTitle ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: "dropdown-title" }, this.groupTitle)) : null;
    const dropdownSeparator = this.groupPosition > 0 ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "dropdown-separator", role: "separator" }) : null;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-label": this.groupTitle, role: "group" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        [CSS$1.containerSmall]: scale === "s",
        [CSS$1.containerMedium]: scale === "m",
        [CSS$1.containerLarge]: scale === "l"
      }, title: this.groupTitle }, dropdownSeparator, groupTitle, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteDropdownItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteDropdownItemSelect", 6);
    this.calciteInternalDropdownItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownItemSelect", 6);
    this.calciteInternalDropdownItemKeyEvent = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownItemKeyEvent", 6);
    this.calciteInternalDropdownCloseRequest = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalDropdownCloseRequest", 6);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    this.initialize();
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  connectedCallback() {
    this.initialize();
  }
  render() {
    const scale = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "scale", this.scale);
    const iconStartEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: scale === "l" ? "m" : "s" }));
    const contentNode = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.itemContent }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
    const iconEndEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconEnd, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: scale === "l" ? "m" : "s" }));
    const slottedContent = this.iconStart && this.iconEnd
      ? [iconStartEl, contentNode, iconEndEl]
      : this.iconStart
        ? [iconStartEl, contentNode]
        : this.iconEnd
          ? [contentNode, iconEndEl]
          : contentNode;
    const contentEl = !this.href ? (slottedContent) : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-label": this.label, class: CSS.link, href: this.href, rel: this.rel, tabIndex: -1, target: this.target,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.childLink = el) }, slottedContent));
    const itemRole = this.href
      ? null
      : this.selectionMode === "single"
        ? "menuitemradio"
        : this.selectionMode === "multiple"
          ? "menuitemcheckbox"
          : "menuitem";
    const itemAria = this.selectionMode !== "none" ? (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.selected) : null;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-checked": itemAria, role: itemRole, tabindex: "0" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        [CSS.containerLink]: !!this.href,
        [CSS.containerSmall]: scale === "s",
        [CSS.containerMedium]: scale === "m",
        [CSS.containerLarge]: scale === "l",
        [CSS.containerMulti]: this.selectionMode === "multiple",
        [CSS.containerSingle]: this.selectionMode === "single",
        [CSS.containerNone]: this.selectionMode === "none"
      } }, this.selectionMode !== "none" ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.icon, icon: this.selectionMode === "multiple" ? "check" : "bullet-point", scale: scale === "l" ? "m" : "s" })) : null, contentEl)));
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
    this.selectionMode = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "selection-mode", "single");
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
DropdownItem.style = dropdownItemCss;




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTdhMmNmMTM0NDkwNDlhYWVkNjEzMTAyNjU4NzJjM2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ3lDO0FBQ3FDO0FBQzVJO0FBQ3dCO0FBQ2Q7QUFDMkQ7QUFDdEQ7QUFDdUQ7QUFDcEY7QUFDRDs7QUFFaEM7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxvQkFBb0IsY0FBYyx5R0FBeUcsVUFBVSxnQ0FBZ0Msa0VBQWtFLGNBQWMsa0JBQWtCLDJDQUEyQyxrQkFBa0Isb0RBQW9ELGtCQUFrQixpREFBaUQsbURBQW1ELFVBQVUsMENBQTBDLG1DQUFtQyxzQkFBc0IsNEVBQTRFLDJCQUEyQix5RUFBeUUsMEJBQTBCLDBFQUEwRSwwQkFBMEIsMkVBQTJFLDJCQUEyQiw0RUFBNEUsVUFBVSx1QkFBdUIs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Y7Ozs7Ozs7Ozs7Ozs7OztBQzNEdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtZHJvcGRvd25fMy5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9rZXktMzM4OWQ4NzAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtYWYxNDZmZDUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvQXJpYUJvb2xlYW4sIGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgaiBhcyBmb2N1c0VsZW1lbnRJbkdyb3VwLCBmIGFzIGZvY3VzRWxlbWVudCwgdiBhcyBnZXRFbGVtZW50UHJvcCB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IGYgYXMgZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzLCBjIGFzIGNvbm5lY3RGbG9hdGluZ1VJLCBkIGFzIGRlZmF1bHRNZW51UGxhY2VtZW50LCBhIGFzIGRpc2Nvbm5lY3RGbG9hdGluZ1VJLCBGIGFzIEZsb2F0aW5nQ1NTLCByIGFzIHJlcG9zaXRpb24gfSBmcm9tICcuL2Zsb2F0aW5nLXVpLTEwMzNlOGJiLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudExvYWRlZCwgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtYTI2YjAwOWYuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy1kMDhhNjczNy5qcyc7XG5pbXBvcnQgJy4vZGVib3VuY2UtYjkwNzI0MjIuanMnO1xuXG5jb25zdCBTTE9UUyA9IHtcbiAgZHJvcGRvd25UcmlnZ2VyOiBcInRyaWdnZXJcIlxufTtcblxuY29uc3QgZHJvcGRvd25Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmlubGluZS1mbGV4O2ZsZXg6MCAxIGF1dG99Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0IC5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJ7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bik7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleCk7dmlzaWJpbGl0eTpoaWRkZW59LmNhbGNpdGUtZHJvcGRvd24td3JhcHBlciAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19LmNhbGNpdGUtZHJvcGRvd24td3JhcHBlcltkYXRhLXBsYWNlbWVudF49Ym90dG9tXSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpfS5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJbZGF0YS1wbGFjZW1lbnRePXRvcF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfS5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJbZGF0YS1wbGFjZW1lbnRePWxlZnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX0uY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVyW2RhdGEtcGxhY2VtZW50Xj1yaWdodF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNXB4KX0uY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVyW2RhdGEtcGxhY2VtZW50XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW29wZW5dKSAuY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVye3Zpc2liaWxpdHk6dmlzaWJsZX06aG9zdCAuY2FsY2l0ZS1kcm9wZG93bi1jb250ZW50e21heC1ibG9jay1zaXplOjQ1dmg7aW5saW5lLXNpemU6YXV0bztvdmVyZmxvdy15OmF1dG87b3ZlcmZsb3cteDpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1kcm9wZG93bi13aWR0aCl9LmNhbGNpdGUtdHJpZ2dlci1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXs6aG9zdChbb3Blbl0pIC5jYWxjaXRlLWRyb3Bkb3duLXdyYXBwZXJ7Ym9yZGVyOjFweCBzb2xpZCBjYW52YXNUZXh0fX06aG9zdChbd2lkdGg9c10pey0tY2FsY2l0ZS1kcm9wZG93bi13aWR0aDoxMnJlbX06aG9zdChbd2lkdGg9bV0pey0tY2FsY2l0ZS1kcm9wZG93bi13aWR0aDoxNHJlbX06aG9zdChbd2lkdGg9bF0pey0tY2FsY2l0ZS1kcm9wZG93bi13aWR0aDoxNnJlbX1cIjtcblxuY29uc3QgRHJvcGRvd24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25CZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZURyb3Bkb3duQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25DbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZURyb3Bkb3duQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlRHJvcGRvd25CZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlRHJvcGRvd25CZWZvcmVPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZURyb3Bkb3duT3BlblwiLCA2KTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMudXBkYXRlSXRlbXMoKSk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsIChlbnRyaWVzKSA9PiB0aGlzLnJlc2l6ZU9ic2VydmVyQ2FsbGJhY2soZW50cmllcykpO1xuICAgIHRoaXMub3BlblRyYW5zaXRpb25Qcm9wID0gXCJvcGFjaXR5XCI7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtZHJvcGRvd24tJHtndWlkKCl9YDtcbiAgICB0aGlzLmRlZmF1bHRBc3NpZ25lZEVsZW1lbnRzID0gW107XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2xvdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZGVmYXVsdEFzc2lnbmVkRWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBmbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyZWRGbGlwUGxhY2VtZW50cyA9IGZsaXBQbGFjZW1lbnRzXG4gICAgICAgID8gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKGZsaXBQbGFjZW1lbnRzLCBlbClcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVUcmlnZ2VycyA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VycyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZ3JvdXBzXG4gICAgICAgIC5tYXAoKGdyb3VwKSA9PiBBcnJheS5mcm9tKGdyb3VwPy5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1kcm9wZG93bi1pdGVtXCIpKSlcbiAgICAgICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXSwgW10pO1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUdyb3VwcyA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBzID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIC5hc3NpZ25lZEVsZW1lbnRzKHsgZmxhdHRlbjogdHJ1ZSB9KVxuICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWRyb3Bkb3duLWdyb3VwXCIpKTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIH07XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGVudHJ5O1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLnJlZmVyZW5jZUVsKSB7XG4gICAgICAgICAgdGhpcy5zZXREcm9wZG93bldpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0ID09PSB0aGlzLnNjcm9sbGVyRWwpIHtcbiAgICAgICAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5zZXREcm9wZG93bldpZHRoID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyByZWZlcmVuY2VFbCwgc2Nyb2xsZXJFbCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUVsV2lkdGggPSByZWZlcmVuY2VFbD8uY2xpZW50V2lkdGg7XG4gICAgICBpZiAoIXJlZmVyZW5jZUVsV2lkdGggfHwgIXNjcm9sbGVyRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2Nyb2xsZXJFbC5zdHlsZS5taW5XaWR0aCA9IGAke3JlZmVyZW5jZUVsV2lkdGh9cHhgO1xuICAgIH07XG4gICAgdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsZXJFbCB9ID0gdGhpcztcbiAgICAgIGlmICghc2Nyb2xsZXJFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgICBjb25zdCBtYXhTY3JvbGxlckhlaWdodCA9IHRoaXMuZ2V0TWF4U2Nyb2xsZXJIZWlnaHQoKTtcbiAgICAgIHNjcm9sbGVyRWwuc3R5bGUubWF4SGVpZ2h0ID0gbWF4U2Nyb2xsZXJIZWlnaHQgPiAwID8gYCR7bWF4U2Nyb2xsZXJIZWlnaHR9cHhgIDogXCJcIjtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0U2Nyb2xsZXJBbmRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICB0aGlzLnNjcm9sbGVyRWwgPSBlbDtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH07XG4gICAgdGhpcy5zZXRSZWZlcmVuY2VFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5yZWZlcmVuY2VFbCA9IGVsO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEZsb2F0aW5nRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbCA9IGVsO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9O1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQgIT09IHRoaXMucmVmZXJlbmNlRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBkZWZhdWx0UHJldmVudGVkLCBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICBpZiAoa2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzQWN0aXZhdGlvbktleShrZXkpKSB7XG4gICAgICAgIHRoaXMub3BlbkNhbGNpdGVEcm9wZG93bigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZm9jdXNPbkZpcnN0QWN0aXZlT3JGaXJzdEl0ZW0gPSAoKSA9PiB7XG4gICAgICB0aGlzLmdldEZvY3VzYWJsZUVsZW1lbnQodGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkKSB8fCB0aGlzLml0ZW1zWzBdKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbkVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNPbkZpcnN0QWN0aXZlT3JGaXJzdEl0ZW0oKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVEcm9wZG93bk9wZW5cIiwgdGhpcy50b2dnbGVPcGVuRW5kKTtcbiAgICB9O1xuICAgIHRoaXMub3BlbkNhbGNpdGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVEcm9wZG93bk9wZW5cIiwgdGhpcy50b2dnbGVPcGVuRW5kKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VPblNlbGVjdERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmxpcFBsYWNlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXhJdGVtcyA9IDA7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZWZhdWx0TWVudVBsYWNlbWVudDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy50eXBlID0gXCJjbGlja1wiO1xuICAgIHRoaXMud2lkdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgb3BlbkhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQ2hhbmdlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZsaXBQbGFjZW1lbnRzSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBtYXhJdGVtc0hhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICB9XG4gIG92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIHBsYWNlbWVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLm9wZW5IYW5kbGVyKHRoaXMub3Blbik7XG4gICAgfVxuICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4sIGd1aWQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjYWxjaXRlLXRyaWdnZXItY29udGFpbmVyXCIsIGlkOiBgJHtndWlkfS1tZW51YnV0dG9uYCwgb25DbGljazogdGhpcy5vcGVuQ2FsY2l0ZURyb3Bkb3duLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRSZWZlcmVuY2VFbCB9LCBoKFwic2xvdFwiLCB7IFwiYXJpYS1jb250cm9sc1wiOiBgJHtndWlkfS1tZW51YCwgXCJhcmlhLWV4cGFuZGVkXCI6IHRvQXJpYUJvb2xlYW4ob3BlbiksIFwiYXJpYS1oYXNwb3B1cFwiOiBcIm1lbnVcIiwgbmFtZTogU0xPVFMuZHJvcGRvd25UcmlnZ2VyLCBvblNsb3RjaGFuZ2U6IHRoaXMudXBkYXRlVHJpZ2dlcnMgfSkpLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKCFvcGVuKSwgY2xhc3M6IFwiY2FsY2l0ZS1kcm9wZG93bi13cmFwcGVyXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRGbG9hdGluZ0VsIH0sIGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBgJHtndWlkfS1tZW51YnV0dG9uYCwgY2xhc3M6IHtcbiAgICAgICAgW1wiY2FsY2l0ZS1kcm9wZG93bi1jb250ZW50XCJdOiB0cnVlLFxuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uXTogdHJ1ZSxcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbkFjdGl2ZV06IG9wZW5cbiAgICAgIH0sIGlkOiBgJHtndWlkfS1tZW51YCwgcm9sZTogXCJtZW51XCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRTY3JvbGxlckFuZFRyYW5zaXRpb25FbCB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy51cGRhdGVHcm91cHMgfSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZmxvYXRpbmdFbCwgcmVmZXJlbmNlRWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICByZWZlcmVuY2VFbCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgdHlwZTogXCJtZW51XCJcbiAgICB9LCBkZWxheWVkKTtcbiAgfVxuICBjbG9zZUNhbGNpdGVEcm9wZG93bk9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fFxuICAgICAgIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpIHx8XG4gICAgICAhdGhpcy5vcGVuIHx8XG4gICAgICBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLmVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlQ2FsY2l0ZURyb3Bkb3duKGZhbHNlKTtcbiAgfVxuICBjbG9zZUNhbGNpdGVEcm9wZG93bk9uRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlQ2FsY2l0ZURyb3Bkb3duKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgY2xvc2VDYWxjaXRlRHJvcGRvd25Pbk9wZW5FdmVudChldmVudCkge1xuICAgIGlmIChldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLmVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuICBwb2ludGVyRW50ZXJIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMudHlwZSAhPT0gXCJob3ZlclwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbkNhbGNpdGVEcm9wZG93bigpO1xuICB9XG4gIHBvaW50ZXJMZWF2ZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy50eXBlICE9PSBcImhvdmVyXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bigpO1xuICB9XG4gIGNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUtleUV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlib2FyZEV2ZW50IH0gPSBldmVudC5kZXRhaWw7XG4gICAgY29uc3QgdGFyZ2V0ID0ga2V5Ym9hcmRFdmVudC50YXJnZXQ7XG4gICAgc3dpdGNoIChrZXlib2FyZEV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIlRhYlwiOlxuICAgICAgICBpZiAodGhpcy5pdGVtcy5pbmRleE9mKHRhcmdldCkgPT09IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSAmJiAha2V5Ym9hcmRFdmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLml0ZW1zLmluZGV4T2YodGFyZ2V0KSA9PT0gMCAmJiBrZXlib2FyZEV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUNhbGNpdGVEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMuaXRlbXMsIHRhcmdldCwgXCJuZXh0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5pdGVtcywgdGFyZ2V0LCBcInByZXZpb3VzXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5pdGVtcywgdGFyZ2V0LCBcImZpcnN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLml0ZW1zLCB0YXJnZXQsIFwibGFzdFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGhhbmRsZUl0ZW1TZWxlY3QoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93blNlbGVjdC5lbWl0KCk7XG4gICAgaWYgKCF0aGlzLmNsb3NlT25TZWxlY3REaXNhYmxlZCB8fFxuICAgICAgZXZlbnQuZGV0YWlsLnJlcXVlc3RlZERyb3Bkb3duR3JvdXAuc2VsZWN0aW9uTW9kZSA9PT0gXCJub25lXCIpIHtcbiAgICAgIHRoaXMuY2xvc2VDYWxjaXRlRHJvcGRvd24oKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVEcm9wZG93bkJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duQ2xvc2UuZW1pdCgpO1xuICB9XG4gIHVwZGF0ZVNlbGVjdGVkSXRlbXMoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VsZWN0ZWQpO1xuICB9XG4gIGdldE1heFNjcm9sbGVySGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgbWF4SXRlbXMsIGl0ZW1zIH0gPSB0aGlzO1xuICAgIGxldCBpdGVtc1RvUHJvY2VzcyA9IDA7XG4gICAgbGV0IG1heFNjcm9sbGVySGVpZ2h0ID0gMDtcbiAgICBsZXQgZ3JvdXBIZWFkZXJIZWlnaHQ7XG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGlmIChtYXhJdGVtcyA+IDAgJiYgaXRlbXNUb1Byb2Nlc3MgPCBtYXhJdGVtcykge1xuICAgICAgICBBcnJheS5mcm9tKGdyb3VwLmNoaWxkcmVuKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzTmFOKGdyb3VwSGVhZGVySGVpZ2h0KSkge1xuICAgICAgICAgICAgICBncm91cEhlYWRlckhlaWdodCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF4U2Nyb2xsZXJIZWlnaHQgKz0gZ3JvdXBIZWFkZXJIZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpdGVtc1RvUHJvY2VzcyA8IG1heEl0ZW1zKSB7XG4gICAgICAgICAgICBtYXhTY3JvbGxlckhlaWdodCArPSBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGl0ZW1zVG9Qcm9jZXNzICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbXMubGVuZ3RoID4gbWF4SXRlbXMgPyBtYXhTY3JvbGxlckhlaWdodCA6IDA7XG4gIH1cbiAgY2xvc2VDYWxjaXRlRHJvcGRvd24oZm9jdXNUcmlnZ2VyID0gdHJ1ZSkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIGlmIChmb2N1c1RyaWdnZXIpIHtcbiAgICAgIGZvY3VzRWxlbWVudCh0aGlzLnRyaWdnZXJzWzBdKTtcbiAgICB9XG4gIH1cbiAgZ2V0Rm9jdXNhYmxlRWxlbWVudChpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGl0ZW0uYXR0cmlidXRlcy5pc0xpbmtcbiAgICAgID8gaXRlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpXG4gICAgICA6IGl0ZW07XG4gICAgZm9jdXNFbGVtZW50KHRhcmdldCk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcImRpc2FibGVkXCI6IFtcImhhbmRsZURpc2FibGVkQ2hhbmdlXCJdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogW1wiZmxpcFBsYWNlbWVudHNIYW5kbGVyXCJdLFxuICAgIFwibWF4SXRlbXNcIjogW1wibWF4SXRlbXNIYW5kbGVyXCJdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFtcIm92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXJcIl0sXG4gICAgXCJwbGFjZW1lbnRcIjogW1wicGxhY2VtZW50SGFuZGxlclwiXVxuICB9OyB9XG59O1xuRHJvcGRvd24uc3R5bGUgPSBkcm9wZG93bkNzcztcblxuY29uc3QgQ1NTJDEgPSB7XG4gIGNvbnRhaW5lclNtYWxsOiBcImNvbnRhaW5lci0tc1wiLFxuICBjb250YWluZXJNZWRpdW06IFwiY29udGFpbmVyLS1tXCIsXG4gIGNvbnRhaW5lckxhcmdlOiBcImNvbnRhaW5lci0tbFwiXG59O1xuXG5jb25zdCBkcm9wZG93bkdyb3VwQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30uY29udGFpbmVye3RleHQtYWxpZ246c3RhcnR9LmNvbnRhaW5lci0tc3tmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19LmNvbnRhaW5lci0tcyAuZHJvcGRvd24tdGl0bGV7cGFkZGluZzowLjVyZW19LmNvbnRhaW5lci0tbXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24tdGl0bGV7cGFkZGluZzowLjc1cmVtfS5jb250YWluZXItLWx7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19LmNvbnRhaW5lci0tbCAuZHJvcGRvd24tdGl0bGV7cGFkZGluZzoxcmVtfS5kcm9wZG93bi10aXRsZXttYXJnaW4tYmxvY2stZW5kOi0xcHg7ZGlzcGxheTpibG9jaztjdXJzb3I6ZGVmYXVsdDtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym9yZGVyLXdpZHRoOjBweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5kcm9wZG93bi1zZXBhcmF0b3J7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjFweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfVwiO1xuXG5jb25zdCBEcm9wZG93bkdyb3VwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuZ3JvdXBUaXRsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcInNpbmdsZVwiO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5ncm91cFBvc2l0aW9uID0gdGhpcy5nZXRHcm91cFBvc2l0aW9uKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsZSB8fCBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcInNjYWxlXCIsIFwibVwiKTtcbiAgICBjb25zdCBncm91cFRpdGxlID0gdGhpcy5ncm91cFRpdGxlID8gKGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwiZHJvcGRvd24tdGl0bGVcIiB9LCB0aGlzLmdyb3VwVGl0bGUpKSA6IG51bGw7XG4gICAgY29uc3QgZHJvcGRvd25TZXBhcmF0b3IgPSB0aGlzLmdyb3VwUG9zaXRpb24gPiAwID8gaChcImRpdlwiLCB7IGNsYXNzOiBcImRyb3Bkb3duLXNlcGFyYXRvclwiLCByb2xlOiBcInNlcGFyYXRvclwiIH0pIDogbnVsbDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5ncm91cFRpdGxlLCByb2xlOiBcImdyb3VwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgW0NTUyQxLmNvbnRhaW5lclNtYWxsXTogc2NhbGUgPT09IFwic1wiLFxuICAgICAgICBbQ1NTJDEuY29udGFpbmVyTWVkaXVtXTogc2NhbGUgPT09IFwibVwiLFxuICAgICAgICBbQ1NTJDEuY29udGFpbmVyTGFyZ2VdOiBzY2FsZSA9PT0gXCJsXCJcbiAgICAgIH0sIHRpdGxlOiB0aGlzLmdyb3VwVGl0bGUgfSwgZHJvcGRvd25TZXBhcmF0b3IsIGdyb3VwVGl0bGUsIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMucmVxdWVzdGVkRHJvcGRvd25Hcm91cCA9IGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWREcm9wZG93bkdyb3VwO1xuICAgIHRoaXMucmVxdWVzdGVkRHJvcGRvd25JdGVtID0gZXZlbnQuZGV0YWlsLnJlcXVlc3RlZERyb3Bkb3duSXRlbTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUNoYW5nZS5lbWl0KHtcbiAgICAgIHJlcXVlc3RlZERyb3Bkb3duR3JvdXA6IHRoaXMucmVxdWVzdGVkRHJvcGRvd25Hcm91cCxcbiAgICAgIHJlcXVlc3RlZERyb3Bkb3duSXRlbTogdGhpcy5yZXF1ZXN0ZWREcm9wZG93bkl0ZW1cbiAgICB9KTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRHcm91cFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMuZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1kcm9wZG93bi1ncm91cFwiKSwgdGhpcy5lbCk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcbkRyb3Bkb3duR3JvdXAuc3R5bGUgPSBkcm9wZG93bkdyb3VwQ3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lckxpbms6IFwiY29udGFpbmVyLS1saW5rXCIsXG4gIGNvbnRhaW5lclNtYWxsOiBcImNvbnRhaW5lci0tc1wiLFxuICBjb250YWluZXJNZWRpdW06IFwiY29udGFpbmVyLS1tXCIsXG4gIGNvbnRhaW5lckxhcmdlOiBcImNvbnRhaW5lci0tbFwiLFxuICBjb250YWluZXJNdWx0aTogXCJjb250YWluZXItLW11bHRpLXNlbGVjdGlvblwiLFxuICBjb250YWluZXJTaW5nbGU6IFwiY29udGFpbmVyLS1zaW5nbGUtc2VsZWN0aW9uXCIsXG4gIGNvbnRhaW5lck5vbmU6IFwiY29udGFpbmVyLS1ub25lLXNlbGVjdGlvblwiLFxuICBpY29uOiBcImRyb3Bkb3duLWl0ZW0taWNvblwiLFxuICBpY29uRW5kOiBcImRyb3Bkb3duLWl0ZW0taWNvbi1lbmRcIixcbiAgaWNvblN0YXJ0OiBcImRyb3Bkb3duLWl0ZW0taWNvbi1zdGFydFwiLFxuICBpdGVtQ29udGVudDogXCJkcm9wZG93bi1pdGVtLWNvbnRlbnRcIixcbiAgbGluazogXCJkcm9wZG93bi1saW5rXCJcbn07XG5cbmNvbnN0IGRyb3Bkb3duSXRlbUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfS5jb250YWluZXItLXN7cGFkZGluZy1ibG9jazowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MC41cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbX0uY29udGFpbmVyLS1te3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MC43NXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoycmVtfS5jb250YWluZXItLWx7cGFkZGluZy1ibG9jazowLjYyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoyLjVyZW19LmNvbnRhaW5lci0tcy5jb250YWluZXItLW5vbmUtc2VsZWN0aW9ue3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tcy5jb250YWluZXItLW5vbmUtc2VsZWN0aW9uIC5kcm9wZG93bi1saW5re3BhZGRpbmctaW5saW5lLXN0YXJ0OjBweH0uY29udGFpbmVyLS1tLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb257cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtfS5jb250YWluZXItLW0uY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbiAuZHJvcGRvd24tbGlua3twYWRkaW5nLWlubGluZS1zdGFydDowcHh9LmNvbnRhaW5lci0tbC5jb250YWluZXItLW5vbmUtc2VsZWN0aW9ue3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNzVyZW19LmNvbnRhaW5lci0tbC5jb250YWluZXItLW5vbmUtc2VsZWN0aW9uIC5kcm9wZG93bi1saW5re3BhZGRpbmctaW5saW5lLXN0YXJ0OjBweH06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7YWxpZ24taXRlbXM6Y2VudGVyfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dGV4dC1hbGlnbjpzdGFydH0uZHJvcGRvd24taXRlbS1jb250ZW50e2ZsZXg6MSAxIGF1dG87cGFkZGluZy1ibG9jazowLjEyNXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6YXV0bztwYWRkaW5nLWlubGluZS1zdGFydDowLjI1cmVtfTpob3N0LC5jb250YWluZXItLWxpbmsgYXtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KDpmb2N1cyl7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY29udGFpbmVyLS1saW5re3BhZGRpbmc6MHB4fS5jb250YWluZXItLWxpbmsgYXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX0uY29udGFpbmVyLS1zIC5kcm9wZG93bi1saW5re3BhZGRpbmctYmxvY2s6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1pbmxpbmUtZW5kOjAuNXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoxLjVyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24tbGlua3twYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07cGFkZGluZy1pbmxpbmUtZW5kOjAuNzVyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbX0uY29udGFpbmVyLS1sIC5kcm9wZG93bi1saW5re3BhZGRpbmctYmxvY2s6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6MXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDoyLjVyZW19Omhvc3QoOmhvdmVyKSAuY29udGFpbmVyLDpob3N0KDphY3RpdmUpIC5jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmV9Omhvc3QoOmhvdmVyKSAuY29udGFpbmVyLS1saW5rIC5kcm9wZG93bi1saW5rLDpob3N0KDphY3RpdmUpIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbmt7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmNvbnRhaW5lcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZX06aG9zdCg6YWN0aXZlKSAuY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfTpob3N0KDpob3ZlcikgLmNvbnRhaW5lcjpiZWZvcmUsOmhvc3QoOmFjdGl2ZSkgLmNvbnRhaW5lcjpiZWZvcmUsOmhvc3QoOmZvY3VzKSAuY29udGFpbmVyOmJlZm9yZXtvcGFjaXR5OjF9Omhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcjpub3QoLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb24pLDpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbmt7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyOm5vdCguY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbik6YmVmb3JlLDpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbms6YmVmb3Jle29wYWNpdHk6MTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyOm5vdCguY29udGFpbmVyLS1ub25lLXNlbGVjdGlvbikgY2FsY2l0ZS1pY29uLDpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXItLWxpbmsgLmRyb3Bkb3duLWxpbmsgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jb250YWluZXItLW11bHRpLXNlbGVjdGlvbjpiZWZvcmUsLmNvbnRhaW5lci0tbm9uZS1zZWxlY3Rpb246YmVmb3Jle2Rpc3BsYXk6bm9uZX0uY29udGFpbmVyLS1zOmJlZm9yZXtpbnNldC1pbmxpbmUtc3RhcnQ6MC41cmVtfS5jb250YWluZXItLW06YmVmb3Jle2luc2V0LWlubGluZS1zdGFydDowLjc1cmVtfS5jb250YWluZXItLWw6YmVmb3Jle2luc2V0LWlubGluZS1zdGFydDoxcmVtfS5kcm9wZG93bi1pdGVtLWljb257cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06c2NhbGUoMC45KX0uY29udGFpbmVyLS1zIC5kcm9wZG93bi1pdGVtLWljb257aW5zZXQtaW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24taXRlbS1pY29ue2luc2V0LWlubGluZS1zdGFydDowLjVyZW19LmNvbnRhaW5lci0tbCAuZHJvcGRvd24taXRlbS1pY29ue2luc2V0LWlubGluZS1zdGFydDowLjc1cmVtfTpob3N0KDpob3ZlcikgLmRyb3Bkb3duLWl0ZW0taWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtvcGFjaXR5OjF9Omhvc3QoW3NlbGVjdGVkXSkgLmRyb3Bkb3duLWl0ZW0taWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtvcGFjaXR5OjF9LmNvbnRhaW5lci0tcyAuZHJvcGRvd24taXRlbS1pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbTttYXJnaW4taW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tcyAuZHJvcGRvd24taXRlbS1pY29uLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OjAuNXJlbX0uY29udGFpbmVyLS1tIC5kcm9wZG93bi1pdGVtLWljb24tc3RhcnR7bWFyZ2luLWlubGluZS1lbmQ6MC43NXJlbTttYXJnaW4taW5saW5lLXN0YXJ0OjAuMjVyZW19LmNvbnRhaW5lci0tbSAuZHJvcGRvd24taXRlbS1pY29uLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OjAuNzVyZW19LmNvbnRhaW5lci0tbCAuZHJvcGRvd24taXRlbS1pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjFyZW07bWFyZ2luLWlubGluZS1zdGFydDowLjI1cmVtfS5jb250YWluZXItLWwgLmRyb3Bkb3duLWl0ZW0taWNvbi1lbmR7bWFyZ2luLWlubGluZS1zdGFydDoxcmVtfVwiO1xuXG5jb25zdCBEcm9wZG93bkl0ZW0gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duSXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZURyb3Bkb3duSXRlbVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtS2V5RXZlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUtleUV2ZW50XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25DbG9zZVJlcXVlc3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbERyb3Bkb3duQ2xvc2VSZXF1ZXN0XCIsIDYpO1xuICAgIC8qKiBTcGVjaWZpZXMgdGhlIHNjYWxlIG9mIGRyb3Bkb3duLWl0ZW0gY29udHJvbGxlZCBieSB0aGUgcGFyZW50LCBkZWZhdWx0cyB0byBtICovXG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkVuZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhyZWYgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsPy5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJzY2FsZVwiLCB0aGlzLnNjYWxlKTtcbiAgICBjb25zdCBpY29uU3RhcnRFbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pY29uU3RhcnQsIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwic3RhcnRcIiB8fCB0aGlzLmljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uU3RhcnQsIHNjYWxlOiBzY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICBjb25zdCBjb250ZW50Tm9kZSA9IChoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuaXRlbUNvbnRlbnQgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICBjb25zdCBpY29uRW5kRWwgPSAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvbkVuZCwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJlbmRcIiB8fCB0aGlzLmljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uRW5kLCBzY2FsZTogc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSk7XG4gICAgY29uc3Qgc2xvdHRlZENvbnRlbnQgPSB0aGlzLmljb25TdGFydCAmJiB0aGlzLmljb25FbmRcbiAgICAgID8gW2ljb25TdGFydEVsLCBjb250ZW50Tm9kZSwgaWNvbkVuZEVsXVxuICAgICAgOiB0aGlzLmljb25TdGFydFxuICAgICAgICA/IFtpY29uU3RhcnRFbCwgY29udGVudE5vZGVdXG4gICAgICAgIDogdGhpcy5pY29uRW5kXG4gICAgICAgICAgPyBbY29udGVudE5vZGUsIGljb25FbmRFbF1cbiAgICAgICAgICA6IGNvbnRlbnROb2RlO1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9ICF0aGlzLmhyZWYgPyAoc2xvdHRlZENvbnRlbnQpIDogKGgoXCJhXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwsIGNsYXNzOiBDU1MubGluaywgaHJlZjogdGhpcy5ocmVmLCByZWw6IHRoaXMucmVsLCB0YWJJbmRleDogLTEsIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jaGlsZExpbmsgPSBlbCkgfSwgc2xvdHRlZENvbnRlbnQpKTtcbiAgICBjb25zdCBpdGVtUm9sZSA9IHRoaXMuaHJlZlxuICAgICAgPyBudWxsXG4gICAgICA6IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIlxuICAgICAgICA/IFwibWVudWl0ZW1yYWRpb1wiXG4gICAgICAgIDogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCJcbiAgICAgICAgICA/IFwibWVudWl0ZW1jaGVja2JveFwiXG4gICAgICAgICAgOiBcIm1lbnVpdGVtXCI7XG4gICAgY29uc3QgaXRlbUFyaWEgPSB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiID8gdG9BcmlhQm9vbGVhbih0aGlzLnNlbGVjdGVkKSA6IG51bGw7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWNoZWNrZWRcIjogaXRlbUFyaWEsIHJvbGU6IGl0ZW1Sb2xlLCB0YWJpbmRleDogXCIwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgW0NTUy5jb250YWluZXJMaW5rXTogISF0aGlzLmhyZWYsXG4gICAgICAgIFtDU1MuY29udGFpbmVyU21hbGxdOiBzY2FsZSA9PT0gXCJzXCIsXG4gICAgICAgIFtDU1MuY29udGFpbmVyTWVkaXVtXTogc2NhbGUgPT09IFwibVwiLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lckxhcmdlXTogc2NhbGUgPT09IFwibFwiLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lck11bHRpXTogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIsXG4gICAgICAgIFtDU1MuY29udGFpbmVyU2luZ2xlXTogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lck5vbmVdOiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiXG4gICAgICB9IH0sIHRoaXMuc2VsZWN0aW9uTW9kZSAhPT0gXCJub25lXCIgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvbiwgaWNvbjogdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIgPyBcImNoZWNrXCIgOiBcImJ1bGxldC1wb2ludFwiLCBzY2FsZTogc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkgOiBudWxsLCBjb250ZW50RWwpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmVtaXRSZXF1ZXN0ZWRJdGVtKCk7XG4gIH1cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIiBcIjpcbiAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICB0aGlzLmVtaXRSZXF1ZXN0ZWRJdGVtKCk7XG4gICAgICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgICAgICB0aGlzLmNoaWxkTGluay5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVzY2FwZVwiOlxuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duQ2xvc2VSZXF1ZXN0LmVtaXQoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiVGFiXCI6XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRHJvcGRvd25JdGVtS2V5RXZlbnQuZW1pdCh7IGtleWJvYXJkRXZlbnQ6IGV2ZW50IH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbERyb3Bkb3duSXRlbUtleUV2ZW50LmVtaXQoeyBrZXlib2FyZEV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHBhcmVudEVtaXR0ZWRDaGFuZ2UgPSBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLnBhcmVudERyb3Bkb3duR3JvdXBFbCk7XG4gICAgaWYgKHBhcmVudEVtaXR0ZWRDaGFuZ2UpIHtcbiAgICAgIHRoaXMucmVxdWVzdGVkRHJvcGRvd25Hcm91cCA9IGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWREcm9wZG93bkdyb3VwO1xuICAgICAgdGhpcy5yZXF1ZXN0ZWREcm9wZG93bkl0ZW0gPSBldmVudC5kZXRhaWwucmVxdWVzdGVkRHJvcGRvd25JdGVtO1xuICAgICAgdGhpcy5kZXRlcm1pbmVBY3RpdmVJdGVtKCk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJzZWxlY3Rpb24tbW9kZVwiLCBcInNpbmdsZVwiKTtcbiAgICB0aGlzLnBhcmVudERyb3Bkb3duR3JvdXBFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtZHJvcGRvd24tZ3JvdXBcIik7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJub25lXCIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZGV0ZXJtaW5lQWN0aXZlSXRlbSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XG4gICAgICAgIGlmICh0aGlzLmVsID09PSB0aGlzLnJlcXVlc3RlZERyb3Bkb3duSXRlbSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzaW5nbGVcIjpcbiAgICAgICAgaWYgKHRoaXMuZWwgPT09IHRoaXMucmVxdWVzdGVkRHJvcGRvd25JdGVtKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZXF1ZXN0ZWREcm9wZG93bkdyb3VwID09PSB0aGlzLnBhcmVudERyb3Bkb3duR3JvdXBFbCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGVtaXRSZXF1ZXN0ZWRJdGVtKCkge1xuICAgIHRoaXMuY2FsY2l0ZURyb3Bkb3duSXRlbVNlbGVjdC5lbWl0KCk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxEcm9wZG93bkl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICByZXF1ZXN0ZWREcm9wZG93bkl0ZW06IHRoaXMuZWwsXG4gICAgICByZXF1ZXN0ZWREcm9wZG93bkdyb3VwOiB0aGlzLnBhcmVudERyb3Bkb3duR3JvdXBFbFxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5Ecm9wZG93bkl0ZW0uc3R5bGUgPSBkcm9wZG93bkl0ZW1Dc3M7XG5cbmV4cG9ydCB7IERyb3Bkb3duIGFzIGNhbGNpdGVfZHJvcGRvd24sIERyb3Bkb3duR3JvdXAgYXMgY2FsY2l0ZV9kcm9wZG93bl9ncm91cCwgRHJvcGRvd25JdGVtIGFzIGNhbGNpdGVfZHJvcGRvd25faXRlbSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gICAgY29tcG9uZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICAgIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcbiAgY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGlzQWN0aXZhdGlvbktleShrZXkpIHtcbiAgcmV0dXJuIGtleSA9PT0gXCJFbnRlclwiIHx8IGtleSA9PT0gXCIgXCI7XG59XG5jb25zdCBudW1iZXJLZXlzID0gW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiXTtcblxuZXhwb3J0IHsgaXNBY3RpdmF0aW9uS2V5IGFzIGksIG51bWJlcktleXMgYXMgbiB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgY29uc3QgT2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcih0eXBlKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcih0eXBlKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjYjaXNzdWVjb21tZW50LTEwNDk4MTQ5NDhcbiAgY2xhc3MgRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyIGV4dGVuZHMgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgb2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeS5wdXNoKHsgdGFyZ2V0LCBvcHRpb25zIH0pO1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdW5vYnNlcnZlKHRhcmdldCkge1xuICAgICAgY29uc3QgbmV3T2JzZXJ2ZWRFbnRyaWVzID0gdGhpcy5vYnNlcnZlZEVudHJ5LmZpbHRlcigob2JzZXJ2ZWQpID0+IG9ic2VydmVkLnRhcmdldCAhPT0gdGFyZ2V0KTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayhzdXBlci50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgbmV3T2JzZXJ2ZWRFbnRyaWVzLmZvckVhY2goKG9ic2VydmVkKSA9PiB0aGlzLm9ic2VydmUob2JzZXJ2ZWQudGFyZ2V0LCBvYnNlcnZlZC5vcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodHlwZSA9PT0gXCJpbnRlcnNlY3Rpb25cIlxuICAgICAgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgIDogdHlwZSA9PT0gXCJtdXRhdGlvblwiXG4gICAgICAgID8gRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlT2JzZXJ2ZXIgYXMgYyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9