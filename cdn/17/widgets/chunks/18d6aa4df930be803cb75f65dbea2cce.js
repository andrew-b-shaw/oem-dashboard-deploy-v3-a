"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-menu_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-menu_2.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-menu_2.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_menu": () => (/* binding */ CalciteMenu),
/* harmony export */   "calcite_menu_item": () => (/* binding */ CalciteMenuItem)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */










const allowedGlobalAttributes = ["lang", "role"];
const elementToComponentAndObserverOptionsMap = new Map();
let mutationObserver;
function updateGlobalAttributes(component, attributeFilter, reuseAttributes = false) {
  const { el } = component;
  const updatedAttributes = reuseAttributes ? component.globalAttributes : {};
  attributeFilter
    .filter((attr) => !!allowedGlobalAttributes.includes(attr) && !!el.hasAttribute(attr))
    .forEach((attr) => {
    const value = el.getAttribute(attr);
    if (value !== null) {
      updatedAttributes[attr] = value;
    }
  });
  component.globalAttributes = updatedAttributes;
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    const [component, options] = elementToComponentAndObserverOptionsMap.get(target);
    updateGlobalAttributes(component, options.attributeFilter);
  });
}
/**
 * Helper to set up listening for changes to global attributes.
 *
 * render(): VNode {
 * return (<Host>
 * <ul {...this.globalAttributes}></div>
 * </Host>);
 * }
 *
 * @param component
 * @param attributeFilter
 */
function watchGlobalAttributes(component, attributeFilter) {
  const { el } = component;
  const observerOptions = { attributeFilter };
  elementToComponentAndObserverOptionsMap.set(el, [component, observerOptions]);
  updateGlobalAttributes(component, attributeFilter, true);
  if (!mutationObserver) {
    mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", processMutations);
  }
  mutationObserver.observe(el, observerOptions);
}
/**
 * Helper remove listening for changes to inherited attributes.
 *
 * @param component
 */
function unwatchGlobalAttributes(component) {
  elementToComponentAndObserverOptionsMap.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element, [, observerOptions]] of elementToComponentAndObserverOptionsMap.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}

const menuCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:flex}ul{margin:0px;display:inline-flex;block-size:100%;align-items:center;padding:0px}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}";

const CalciteMenu = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.menuItems = [];
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleMenuSlotChange = (event) => {
      this.menuItems = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.s)(event);
      this.setMenuItemLayout(this.menuItems, this.layout);
    };
    this.label = undefined;
    this.layout = "horizontal";
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.globalAttributes = {
      role: "menubar"
    };
  }
  handleLayoutChange(value) {
    this.setMenuItemLayout(this.menuItems, value);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    watchGlobalAttributes(this, ["role"]);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    unwatchGlobalAttributes(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteInternalNavMenuItemKeyEvent(event) {
    const target = event.target;
    const submenuItems = event.detail.children;
    const key = event.detail.event.key;
    event.stopPropagation();
    if (key === "ArrowDown") {
      if (target.layout === "vertical") {
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.menuItems, target, "next", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[0].setFocus();
        }
      }
    }
    else if (key === "ArrowUp") {
      if (this.layout === "vertical") {
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.menuItems, target, "previous", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[submenuItems.length - 1].setFocus();
        }
      }
    }
    else if (key === "ArrowRight") {
      if (this.layout === "horizontal") {
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.menuItems, target, "next", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          submenuItems[0].setFocus();
        }
      }
    }
    else if (key === "ArrowLeft") {
      if (this.layout === "horizontal") {
        (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.menuItems, target, "previous", false);
      }
      else {
        if (event.detail.isSubmenuOpen) {
          this.focusParentElement(event.target);
        }
      }
    }
    else if (key === "Escape") {
      this.focusParentElement(event.target);
    }
    event.preventDefault();
  }
  focusParentElement(el) {
    const parentEl = el.parentElement;
    if (parentEl) {
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(parentEl);
      parentEl.open = false;
    }
  }
  setMenuItemLayout(items, layout) {
    items.forEach((item) => {
      item.layout = layout;
      if (this.globalAttributes.role === "menubar") {
        item.isTopLevelItem = true;
        item.topLevelMenuLayout = this.layout;
      }
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { "aria-label": this.label, ...this.globalAttributes }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleMenuSlotChange }))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "layout": ["handleLayoutChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
CalciteMenu.style = menuCss;

const CSS = {
  container: "container",
  content: "content",
  dropdownVertical: "dropdown--vertical",
  dropdownMenuItems: "dropdown-menu-items",
  dropdownAction: "dropdown-action",
  layoutVertical: "layout--vertical",
  hoverHrefIcon: "hover-href-icon",
  icon: "icon",
  iconBreadcrumb: "icon--breadcrumb",
  iconDropdown: "icon--dropdown",
  iconEnd: "icon--end",
  iconStart: "icon--start",
  isParentVertical: "parent--vertical",
  itemContent: "item-content",
  open: "open",
  nested: "nested",
  textContainer: "text-container"
};

const menuItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;box-sizing:border-box;display:flex;align-items:center;flex-shrink:0}:host .container,:host .item-content,:host .content{min-block-size:3rem}:host([layout=vertical]){inline-size:100%}:host(:not([layout=vertical])){block-size:100%}.container,.item-content{display:flex;block-size:100%;inline-size:100%;flex-direction:row;align-items:stretch}.content{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);padding-inline:1rem;font-size:var(--calcite-font-size-0);color:var(--calcite-ui-text-2);outline:2px solid transparent;outline-offset:2px;text-decoration:none;border-block-end:0.125rem solid transparent;padding-block-start:0.125rem}.content:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-2)}.content:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-2);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.content:active{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.content span{display:inline-flex}.content.layout--vertical{display:flex;inline-size:100%;justify-content:flex-start;padding-block:1rem;border-block-end:0;border-inline-end:0.25rem solid transparent}:host([active]) .content{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-brand)}:host([active]) .content .icon{--calcite-ui-icon-color:var(--calcite-ui-brand)}.icon--start{margin-inline-end:0.75rem}.icon--end{margin-inline-start:0.75rem}.icon--dropdown{position:relative;margin-inline-start:auto;margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-ui-text-3)}:host([layout=vertical]) .icon--dropdown{inset-inline-start:0.25rem}.icon--breadcrumb{margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-ui-text-3)}:host([breadcrumb]) .content{padding-inline-end:0.75rem}calcite-action{position:relative;block-size:auto;border-inline-start:1px solid var(--calcite-ui-foreground-1)}calcite-action:after{position:absolute;inset-inline-start:-1px;display:block;inline-size:1px;content:\"\";inset-block:0.75rem;background-color:var(--calcite-ui-border-3)}calcite-action:hover:after{block-size:100%;inset-block:0}.content:focus~calcite-action,.content:hover~calcite-action{color:var(--calcite-ui-text-1);border-inline-start:1px solid var(--calcite-ui-border-3)}.container:hover .dropdown-action{background-color:var(--calcite-ui-foreground-2)}.dropdown-menu-items{position:absolute;display:none;block-size:auto;min-inline-size:100%;flex-direction:column;overflow:visible;border:1px solid var(--calcite-ui-border-3);background:var(--calcite-ui-foreground-1);inset-block-start:100%;z-index:var(--calcite-app-z-index-dropdown)}.dropdown-menu-items.open{display:block}.dropdown-menu-items.nested{position:absolute;inset-block-start:-1px;transform:translateX(calc(100% - 2px))}.parent--vertical{flex-direction:column}.dropdown--vertical.dropdown-menu-items{position:relative;border-radius:0px;box-shadow:none;inset-block-start:0;transform:none}.dropdown--vertical.dropdown-menu-items:last-of-type{border-inline:0}:host([slot=submenu-item]) .parent--vertical{padding-inline-start:1.75rem}.dropdown-menu-items.nested.calcite--rtl{transform:translateX(calc(-100% + 2px))}.dropdown--vertical.dropdown-menu-items.nested.calcite--rtl{transform:none}.hover-href-icon{position:relative;inset-inline-end:0.25rem;margin-inline-start:auto;padding-inline-start:2rem;opacity:0;transition:all var(--calcite-internal-animation-timing-medium) ease-in-out}.content:focus .hover-href-icon,.content:hover .hover-href-icon{inset-inline-end:-0.25rem;opacity:1}";

const CalciteMenuItem = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalMenuItemKeyEvent = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalMenuItemKeyEvent", 7);
    this.calciteMenuItemSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteMenuItemSelect", 7);
    this.clickHandler = (event) => {
      if ((this.href && event.target === this.dropdownActionEl) || (!this.href && this.hasSubmenu)) {
        this.open = !this.open;
      }
      this.selectMenuItem(event);
    };
    this.handleMenuItemSlotChange = (event) => {
      this.submenuItems = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.s)(event);
      this.submenuItems.forEach((item) => {
        if (!item.topLevelMenuLayout) {
          item.topLevelMenuLayout = this.topLevelMenuLayout;
        }
      });
      this.hasSubmenu = this.submenuItems.length > 0;
    };
    this.keyDownHandler = async (event) => {
      // opening and closing of submenu is handled here. Any other functionality is bubbled to parent menu.
      if (event.key === " " || event.key === "Enter") {
        this.selectMenuItem(event);
        if (this.hasSubmenu &&
          (!this.href || (this.href && event.target === this.dropdownActionEl))) {
          this.open = !this.open;
        }
        event.preventDefault();
      }
      else if (event.key === "Escape") {
        if (this.open) {
          this.open = false;
          return;
        }
        this.calciteInternalMenuItemKeyEvent.emit({ event });
        event.preventDefault();
      }
      else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if ((event.target === this.dropdownActionEl || !this.href) &&
          this.hasSubmenu &&
          !this.open &&
          this.layout === "horizontal") {
          this.open = true;
          return;
        }
        this.calciteInternalMenuItemKeyEvent.emit({
          event,
          children: this.submenuItems,
          isSubmenuOpen: this.open && this.hasSubmenu
        });
      }
      else if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.calciteInternalMenuItemKeyEvent.emit({
          event,
          children: this.submenuItems,
          isSubmenuOpen: true
        });
      }
      else if (event.key === "ArrowRight") {
        event.preventDefault();
        if ((event.target === this.dropdownActionEl || !this.href) &&
          this.hasSubmenu &&
          !this.open &&
          this.layout === "vertical") {
          this.open = true;
          return;
        }
        this.calciteInternalMenuItemKeyEvent.emit({
          event,
          children: this.submenuItems,
          isSubmenuOpen: this.open && this.hasSubmenu
        });
      }
    };
    this.active = undefined;
    this.breadcrumb = undefined;
    this.href = undefined;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.isTopLevelItem = false;
    this.label = undefined;
    this.layout = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.open = false;
    this.rel = undefined;
    this.target = undefined;
    this.text = undefined;
    this.topLevelMenuLayout = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasSubmenu = false;
    this.submenuItems = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.anchorEl.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleClickOut(event) {
    if (this.topLevelMenuLayout !== "vertical" &&
      this.hasSubmenu &&
      this.open &&
      !event.composedPath().includes(this.el)) {
      this.open = false;
    }
  }
  handleFocusOut(event) {
    if (this.topLevelMenuLayout !== "vertical" &&
      !this.el.contains(event.relatedTarget)) {
      this.open = false;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  blurHandler() {
    this.isFocused = false;
  }
  focusHandler(event) {
    const target = event.target;
    this.isFocused = true;
    if (target.open && !this.open) {
      target.open = false;
    }
  }
  selectMenuItem(event) {
    if (event.target !== this.dropdownActionEl) {
      this.calciteMenuItemSelect.emit();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderIconStart() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconStart}`, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, key: CSS.iconStart, scale: "s" }));
  }
  renderIconEnd() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconEnd}`, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, key: CSS.iconEnd, scale: "s" }));
  }
  renderBreadcrumbIcon(dir) {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconBreadcrumb}`, icon: dir === "rtl" ? "chevron-left" : "chevron-right", key: CSS.iconBreadcrumb, scale: "s" }));
  }
  renderDropdownIcon(dir) {
    const dirChevron = dir === "rtl" ? "chevron-left" : "chevron-right";
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: `${CSS.icon} ${CSS.iconDropdown}`, icon: this.topLevelMenuLayout === "vertical" || this.isTopLevelItem
        ? this.open
          ? "chevron-up"
          : "chevron-down"
        : dirChevron, key: CSS.iconDropdown, scale: "s" }));
  }
  renderDropdownAction(dir) {
    const dirChevron = dir === "rtl" ? "chevron-left" : "chevron-right";
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { class: CSS.dropdownAction, icon: this.topLevelMenuLayout === "vertical" || this.isTopLevelItem
        ? this.open
          ? "chevron-up"
          : "chevron-down"
        : dirChevron, key: CSS.dropdownAction, onClick: this.clickHandler, onKeyDown: this.keyDownHandler, text: this.messages.open,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.dropdownActionEl = el) }));
  }
  renderSubmenuItems(dir) {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-menu", { class: {
        [CSS.dropdownMenuItems]: true,
        [CSS.open]: this.open,
        [CSS.nested]: !this.isTopLevelItem,
        [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__.C.rtl]: dir === "rtl",
        [CSS.dropdownVertical]: this.topLevelMenuLayout === "vertical"
      }, label: this.messages.submenu, layout: "vertical", role: "menu" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "submenu-item", onSlotchange: this.handleMenuItemSlotChange })));
  }
  renderItemContent(dir) {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, this.iconStart && this.renderIconStart(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.textContainer }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.text)), this.iconEnd && this.renderIconEnd(), this.breadcrumb ? this.renderBreadcrumbIcon(dir) : null, !this.href && this.hasSubmenu ? this.renderDropdownIcon(dir) : null));
  }
  render() {
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.blurHandler, onFocus: this.focusHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: {
        [CSS.container]: true,
        [CSS.isParentVertical]: this.topLevelMenuLayout === "vertical"
      }, role: "none" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.itemContent }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { "aria-current": this.isFocused ? "page" : false, "aria-expanded": this.open, "aria-haspopup": this.hasSubmenu, "aria-label": this.label, class: { [CSS.layoutVertical]: this.layout === "vertical", [CSS.content]: true }, href: this.href, onClick: this.clickHandler, onKeyDown: this.keyDownHandler, rel: this.rel, role: "menuitem", tabIndex: this.isTopLevelItem ? 0 : -1, target: this.target,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.anchorEl = el) }, this.renderItemContent(dir), this.href && (this.topLevelMenuLayout === "vertical" || !this.isTopLevelItem) ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.hoverHrefIcon, icon: dir === "rtl" ? "arrow-left" : "arrow-right", scale: "s" })) : null), this.href && this.hasSubmenu ? this.renderDropdownAction(dir) : null), this.renderSubmenuItems(dir))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
CalciteMenuItem.style = menuItemCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMThkNmFhNGRmOTMwYmU4MDNjYjc1ZjY1ZGJlYTJjY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRIO0FBQ1k7QUFDcEI7QUFDN0I7QUFDb0M7QUFDN0Q7QUFDSDtBQUMvQjtBQUNEOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtbWVudV8yLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2xvYWRhYmxlLTgwNThlMzAwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Q5bi1mYWMxMzM5NC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCwgYyBhcyBjcmVhdGVFdmVudCwgRiBhcyBGcmFnbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgcyBhcyBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cywgaiBhcyBmb2N1c0VsZW1lbnRJbkdyb3VwLCBmIGFzIGZvY3VzRWxlbWVudCwgYiBhcyBnZXRFbGVtZW50RGlyIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9rZXktOGZmMGQxMDEuanMnO1xuXG5jb25zdCBhbGxvd2VkR2xvYmFsQXR0cmlidXRlcyA9IFtcImxhbmdcIiwgXCJyb2xlXCJdO1xuY29uc3QgZWxlbWVudFRvQ29tcG9uZW50QW5kT2JzZXJ2ZXJPcHRpb25zTWFwID0gbmV3IE1hcCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5mdW5jdGlvbiB1cGRhdGVHbG9iYWxBdHRyaWJ1dGVzKGNvbXBvbmVudCwgYXR0cmlidXRlRmlsdGVyLCByZXVzZUF0dHJpYnV0ZXMgPSBmYWxzZSkge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHVwZGF0ZWRBdHRyaWJ1dGVzID0gcmV1c2VBdHRyaWJ1dGVzID8gY29tcG9uZW50Lmdsb2JhbEF0dHJpYnV0ZXMgOiB7fTtcbiAgYXR0cmlidXRlRmlsdGVyXG4gICAgLmZpbHRlcigoYXR0cikgPT4gISFhbGxvd2VkR2xvYmFsQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyKSAmJiAhIWVsLmhhc0F0dHJpYnV0ZShhdHRyKSlcbiAgICAuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdXBkYXRlZEF0dHJpYnV0ZXNbYXR0cl0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICBjb21wb25lbnQuZ2xvYmFsQXR0cmlidXRlcyA9IHVwZGF0ZWRBdHRyaWJ1dGVzO1xufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBjb25zdCBbY29tcG9uZW50LCBvcHRpb25zXSA9IGVsZW1lbnRUb0NvbXBvbmVudEFuZE9ic2VydmVyT3B0aW9uc01hcC5nZXQodGFyZ2V0KTtcbiAgICB1cGRhdGVHbG9iYWxBdHRyaWJ1dGVzKGNvbXBvbmVudCwgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIpO1xuICB9KTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBsaXN0ZW5pbmcgZm9yIGNoYW5nZXMgdG8gZ2xvYmFsIGF0dHJpYnV0ZXMuXG4gKlxuICogcmVuZGVyKCk6IFZOb2RlIHtcbiAqIHJldHVybiAoPEhvc3Q+XG4gKiA8dWwgey4uLnRoaXMuZ2xvYmFsQXR0cmlidXRlc30+PC9kaXY+XG4gKiA8L0hvc3Q+KTtcbiAqIH1cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gYXR0cmlidXRlRmlsdGVyXG4gKi9cbmZ1bmN0aW9uIHdhdGNoR2xvYmFsQXR0cmlidXRlcyhjb21wb25lbnQsIGF0dHJpYnV0ZUZpbHRlcikge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgYXR0cmlidXRlRmlsdGVyIH07XG4gIGVsZW1lbnRUb0NvbXBvbmVudEFuZE9ic2VydmVyT3B0aW9uc01hcC5zZXQoZWwsIFtjb21wb25lbnQsIG9ic2VydmVyT3B0aW9uc10pO1xuICB1cGRhdGVHbG9iYWxBdHRyaWJ1dGVzKGNvbXBvbmVudCwgYXR0cmlidXRlRmlsdGVyLCB0cnVlKTtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgcmVtb3ZlIGxpc3RlbmluZyBmb3IgY2hhbmdlcyB0byBpbmhlcml0ZWQgYXR0cmlidXRlcy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHVud2F0Y2hHbG9iYWxBdHRyaWJ1dGVzKGNvbXBvbmVudCkge1xuICBlbGVtZW50VG9Db21wb25lbnRBbmRPYnNlcnZlck9wdGlvbnNNYXAuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudCwgWywgb2JzZXJ2ZXJPcHRpb25zXV0gb2YgZWxlbWVudFRvQ29tcG9uZW50QW5kT2JzZXJ2ZXJPcHRpb25zTWFwLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IG1lbnVDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXh9dWx7bWFyZ2luOjBweDtkaXNwbGF5OmlubGluZS1mbGV4O2Jsb2NrLXNpemU6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzowcHh9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIHVse2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1cIjtcblxuY29uc3QgQ2FsY2l0ZU1lbnUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMubWVudUl0ZW1zID0gW107XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlTWVudVNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMubWVudUl0ZW1zID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpO1xuICAgICAgdGhpcy5zZXRNZW51SXRlbUxheW91dCh0aGlzLm1lbnVJdGVtcywgdGhpcy5sYXlvdXQpO1xuICAgIH07XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxheW91dCA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMgPSB7XG4gICAgICByb2xlOiBcIm1lbnViYXJcIlxuICAgIH07XG4gIH1cbiAgaGFuZGxlTGF5b3V0Q2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRNZW51SXRlbUxheW91dCh0aGlzLm1lbnVJdGVtcywgdmFsdWUpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHdhdGNoR2xvYmFsQXR0cmlidXRlcyh0aGlzLCBbXCJyb2xlXCJdKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdW53YXRjaEdsb2JhbEF0dHJpYnV0ZXModGhpcyk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2FsY2l0ZUludGVybmFsTmF2TWVudUl0ZW1LZXlFdmVudChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBzdWJtZW51SXRlbXMgPSBldmVudC5kZXRhaWwuY2hpbGRyZW47XG4gICAgY29uc3Qga2V5ID0gZXZlbnQuZGV0YWlsLmV2ZW50LmtleTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICBpZiAodGFyZ2V0LmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5tZW51SXRlbXMsIHRhcmdldCwgXCJuZXh0XCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmlzU3VibWVudU9wZW4pIHtcbiAgICAgICAgICBzdWJtZW51SXRlbXNbMF0uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICBpZiAodGhpcy5sYXlvdXQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMubWVudUl0ZW1zLCB0YXJnZXQsIFwicHJldmlvdXNcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5kZXRhaWwuaXNTdWJtZW51T3Blbikge1xuICAgICAgICAgIHN1Ym1lbnVJdGVtc1tzdWJtZW51SXRlbXMubGVuZ3RoIC0gMV0uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICBpZiAodGhpcy5sYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5tZW51SXRlbXMsIHRhcmdldCwgXCJuZXh0XCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmlzU3VibWVudU9wZW4pIHtcbiAgICAgICAgICBzdWJtZW51SXRlbXNbMF0uc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLm1lbnVJdGVtcywgdGFyZ2V0LCBcInByZXZpb3VzXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmlzU3VibWVudU9wZW4pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUGFyZW50RWxlbWVudChldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5mb2N1c1BhcmVudEVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBmb2N1c1BhcmVudEVsZW1lbnQoZWwpIHtcbiAgICBjb25zdCBwYXJlbnRFbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudEVsKSB7XG4gICAgICBmb2N1c0VsZW1lbnQocGFyZW50RWwpO1xuICAgICAgcGFyZW50RWwub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzZXRNZW51SXRlbUxheW91dChpdGVtcywgbGF5b3V0KSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5sYXlvdXQgPSBsYXlvdXQ7XG4gICAgICBpZiAodGhpcy5nbG9iYWxBdHRyaWJ1dGVzLnJvbGUgPT09IFwibWVudWJhclwiKSB7XG4gICAgICAgIGl0ZW0uaXNUb3BMZXZlbEl0ZW0gPSB0cnVlO1xuICAgICAgICBpdGVtLnRvcExldmVsTWVudUxheW91dCA9IHRoaXMubGF5b3V0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJ1bFwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVsLCAuLi50aGlzLmdsb2JhbEF0dHJpYnV0ZXMgfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlTWVudVNsb3RDaGFuZ2UgfSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImxheW91dFwiOiBbXCJoYW5kbGVMYXlvdXRDaGFuZ2VcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5DYWxjaXRlTWVudS5zdHlsZSA9IG1lbnVDc3M7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgZHJvcGRvd25WZXJ0aWNhbDogXCJkcm9wZG93bi0tdmVydGljYWxcIixcbiAgZHJvcGRvd25NZW51SXRlbXM6IFwiZHJvcGRvd24tbWVudS1pdGVtc1wiLFxuICBkcm9wZG93bkFjdGlvbjogXCJkcm9wZG93bi1hY3Rpb25cIixcbiAgbGF5b3V0VmVydGljYWw6IFwibGF5b3V0LS12ZXJ0aWNhbFwiLFxuICBob3ZlckhyZWZJY29uOiBcImhvdmVyLWhyZWYtaWNvblwiLFxuICBpY29uOiBcImljb25cIixcbiAgaWNvbkJyZWFkY3J1bWI6IFwiaWNvbi0tYnJlYWRjcnVtYlwiLFxuICBpY29uRHJvcGRvd246IFwiaWNvbi0tZHJvcGRvd25cIixcbiAgaWNvbkVuZDogXCJpY29uLS1lbmRcIixcbiAgaWNvblN0YXJ0OiBcImljb24tLXN0YXJ0XCIsXG4gIGlzUGFyZW50VmVydGljYWw6IFwicGFyZW50LS12ZXJ0aWNhbFwiLFxuICBpdGVtQ29udGVudDogXCJpdGVtLWNvbnRlbnRcIixcbiAgb3BlbjogXCJvcGVuXCIsXG4gIG5lc3RlZDogXCJuZXN0ZWRcIixcbiAgdGV4dENvbnRhaW5lcjogXCJ0ZXh0LWNvbnRhaW5lclwiXG59O1xuXG5jb25zdCBtZW51SXRlbUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZsZXgtc2hyaW5rOjB9Omhvc3QgLmNvbnRhaW5lciw6aG9zdCAuaXRlbS1jb250ZW50LDpob3N0IC5jb250ZW50e21pbi1ibG9jay1zaXplOjNyZW19Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pe2lubGluZS1zaXplOjEwMCV9Omhvc3QoOm5vdChbbGF5b3V0PXZlcnRpY2FsXSkpe2Jsb2NrLXNpemU6MTAwJX0uY29udGFpbmVyLC5pdGVtLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpzdHJldGNofS5jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDt0ZXh0LWRlY29yYXRpb246bm9uZTtib3JkZXItYmxvY2stZW5kOjAuMTI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O3BhZGRpbmctYmxvY2stc3RhcnQ6MC4xMjVyZW19LmNvbnRlbnQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5jb250ZW50OmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmNvbnRlbnQ6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY29udGVudCBzcGFue2Rpc3BsYXk6aW5saW5lLWZsZXh9LmNvbnRlbnQubGF5b3V0LS12ZXJ0aWNhbHtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwYWRkaW5nLWJsb2NrOjFyZW07Ym9yZGVyLWJsb2NrLWVuZDowO2JvcmRlci1pbmxpbmUtZW5kOjAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnR9Omhvc3QoW2FjdGl2ZV0pIC5jb250ZW50e2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2FjdGl2ZV0pIC5jb250ZW50IC5pY29uey0tY2FsY2l0ZS11aS1pY29uLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5pY29uLS1zdGFydHttYXJnaW4taW5saW5lLWVuZDowLjc1cmVtfS5pY29uLS1lbmR7bWFyZ2luLWlubGluZS1zdGFydDowLjc1cmVtfS5pY29uLS1kcm9wZG93bntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1lbmQ6MHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNXJlbTstLWNhbGNpdGUtdWktaWNvbi1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5pY29uLS1kcm9wZG93bntpbnNldC1pbmxpbmUtc3RhcnQ6MC4yNXJlbX0uaWNvbi0tYnJlYWRjcnVtYnttYXJnaW4taW5saW5lLWVuZDowcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtOy0tY2FsY2l0ZS11aS1pY29uLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdChbYnJlYWRjcnVtYl0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lLWVuZDowLjc1cmVtfWNhbGNpdGUtYWN0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6YXV0bztib3JkZXItaW5saW5lLXN0YXJ0OjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Y2FsY2l0ZS1hY3Rpb246YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtaW5saW5lLXN0YXJ0Oi0xcHg7ZGlzcGxheTpibG9jaztpbmxpbmUtc2l6ZToxcHg7Y29udGVudDpcXFwiXFxcIjtpbnNldC1ibG9jazowLjc1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Y2FsY2l0ZS1hY3Rpb246aG92ZXI6YWZ0ZXJ7YmxvY2stc2l6ZToxMDAlO2luc2V0LWJsb2NrOjB9LmNvbnRlbnQ6Zm9jdXN+Y2FsY2l0ZS1hY3Rpb24sLmNvbnRlbnQ6aG92ZXJ+Y2FsY2l0ZS1hY3Rpb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JvcmRlci1pbmxpbmUtc3RhcnQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5jb250YWluZXI6aG92ZXIgLmRyb3Bkb3duLWFjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0uZHJvcGRvd24tbWVudS1pdGVtc3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5Om5vbmU7YmxvY2stc2l6ZTphdXRvO21pbi1pbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtvdmVyZmxvdzp2aXNpYmxlO2JvcmRlcjoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7YmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7aW5zZXQtYmxvY2stc3RhcnQ6MTAwJTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfS5kcm9wZG93bi1tZW51LWl0ZW1zLm9wZW57ZGlzcGxheTpibG9ja30uZHJvcGRvd24tbWVudS1pdGVtcy5uZXN0ZWR7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6LTFweDt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKDEwMCUgLSAycHgpKX0ucGFyZW50LS12ZXJ0aWNhbHtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmRyb3Bkb3duLS12ZXJ0aWNhbC5kcm9wZG93bi1tZW51LWl0ZW1ze3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MHB4O2JveC1zaGFkb3c6bm9uZTtpbnNldC1ibG9jay1zdGFydDowO3RyYW5zZm9ybTpub25lfS5kcm9wZG93bi0tdmVydGljYWwuZHJvcGRvd24tbWVudS1pdGVtczpsYXN0LW9mLXR5cGV7Ym9yZGVyLWlubGluZTowfTpob3N0KFtzbG90PXN1Ym1lbnUtaXRlbV0pIC5wYXJlbnQtLXZlcnRpY2Fse3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNzVyZW19LmRyb3Bkb3duLW1lbnUtaXRlbXMubmVzdGVkLmNhbGNpdGUtLXJ0bHt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKC0xMDAlICsgMnB4KSl9LmRyb3Bkb3duLS12ZXJ0aWNhbC5kcm9wZG93bi1tZW51LWl0ZW1zLm5lc3RlZC5jYWxjaXRlLS1ydGx7dHJhbnNmb3JtOm5vbmV9LmhvdmVyLWhyZWYtaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtpbnNldC1pbmxpbmUtZW5kOjAuMjVyZW07bWFyZ2luLWlubGluZS1zdGFydDphdXRvO3BhZGRpbmctaW5saW5lLXN0YXJ0OjJyZW07b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGVhc2UtaW4tb3V0fS5jb250ZW50OmZvY3VzIC5ob3Zlci1ocmVmLWljb24sLmNvbnRlbnQ6aG92ZXIgLmhvdmVyLWhyZWYtaWNvbntpbnNldC1pbmxpbmUtZW5kOi0wLjI1cmVtO29wYWNpdHk6MX1cIjtcblxuY29uc3QgQ2FsY2l0ZU1lbnVJdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbE1lbnVJdGVtS2V5RXZlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbE1lbnVJdGVtS2V5RXZlbnRcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlTWVudUl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVNZW51SXRlbVNlbGVjdFwiLCA3KTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCh0aGlzLmhyZWYgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzLmRyb3Bkb3duQWN0aW9uRWwpIHx8ICghdGhpcy5ocmVmICYmIHRoaXMuaGFzU3VibWVudSkpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVNZW51SXRlbVNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc3VibWVudUl0ZW1zID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpO1xuICAgICAgdGhpcy5zdWJtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0udG9wTGV2ZWxNZW51TGF5b3V0KSB7XG4gICAgICAgICAgaXRlbS50b3BMZXZlbE1lbnVMYXlvdXQgPSB0aGlzLnRvcExldmVsTWVudUxheW91dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc1N1Ym1lbnUgPSB0aGlzLnN1Ym1lbnVJdGVtcy5sZW5ndGggPiAwO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgLy8gb3BlbmluZyBhbmQgY2xvc2luZyBvZiBzdWJtZW51IGlzIGhhbmRsZWQgaGVyZS4gQW55IG90aGVyIGZ1bmN0aW9uYWxpdHkgaXMgYnViYmxlZCB0byBwYXJlbnQgbWVudS5cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiIFwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TWVudUl0ZW0oZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5oYXNTdWJtZW51ICYmXG4gICAgICAgICAgKCF0aGlzLmhyZWYgfHwgKHRoaXMuaHJlZiAmJiBldmVudC50YXJnZXQgPT09IHRoaXMuZHJvcGRvd25BY3Rpb25FbCkpKSB7XG4gICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxNZW51SXRlbUtleUV2ZW50LmVtaXQoeyBldmVudCB9KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICgoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmRyb3Bkb3duQWN0aW9uRWwgfHwgIXRoaXMuaHJlZikgJiZcbiAgICAgICAgICB0aGlzLmhhc1N1Ym1lbnUgJiZcbiAgICAgICAgICAhdGhpcy5vcGVuICYmXG4gICAgICAgICAgdGhpcy5sYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxNZW51SXRlbUtleUV2ZW50LmVtaXQoe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnN1Ym1lbnVJdGVtcyxcbiAgICAgICAgICBpc1N1Ym1lbnVPcGVuOiB0aGlzLm9wZW4gJiYgdGhpcy5oYXNTdWJtZW51XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudC5lbWl0KHtcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5zdWJtZW51SXRlbXMsXG4gICAgICAgICAgaXNTdWJtZW51T3BlbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKChldmVudC50YXJnZXQgPT09IHRoaXMuZHJvcGRvd25BY3Rpb25FbCB8fCAhdGhpcy5ocmVmKSAmJlxuICAgICAgICAgIHRoaXMuaGFzU3VibWVudSAmJlxuICAgICAgICAgICF0aGlzLm9wZW4gJiZcbiAgICAgICAgICB0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxNZW51SXRlbUtleUV2ZW50LmVtaXQoe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnN1Ym1lbnVJdGVtcyxcbiAgICAgICAgICBpc1N1Ym1lbnVPcGVuOiB0aGlzLm9wZW4gJiYgdGhpcy5oYXNTdWJtZW51XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5icmVhZGNydW1iID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaHJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25FbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzVG9wTGV2ZWxJdGVtID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxheW91dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuaGFzU3VibWVudSA9IGZhbHNlO1xuICAgIHRoaXMuc3VibWVudUl0ZW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuYW5jaG9yRWwuZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYW5kbGVDbGlja091dChldmVudCkge1xuICAgIGlmICh0aGlzLnRvcExldmVsTWVudUxheW91dCAhPT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICB0aGlzLmhhc1N1Ym1lbnUgJiZcbiAgICAgIHRoaXMub3BlbiAmJlxuICAgICAgIWV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMuZWwpKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlRm9jdXNPdXQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgIT09IFwidmVydGljYWxcIiAmJlxuICAgICAgIXRoaXMuZWwuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBibHVySGFuZGxlcigpIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICB9XG4gIGZvY3VzSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgaWYgKHRhcmdldC5vcGVuICYmICF0aGlzLm9wZW4pIHtcbiAgICAgIHRhcmdldC5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHNlbGVjdE1lbnVJdGVtKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5kcm9wZG93bkFjdGlvbkVsKSB7XG4gICAgICB0aGlzLmNhbGNpdGVNZW51SXRlbVNlbGVjdC5lbWl0KCk7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVySWNvblN0YXJ0KCkge1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBgJHtDU1MuaWNvbn0gJHtDU1MuaWNvblN0YXJ0fWAsIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwic3RhcnRcIiB8fCB0aGlzLmljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uU3RhcnQsIGtleTogQ1NTLmljb25TdGFydCwgc2NhbGU6IFwic1wiIH0pKTtcbiAgfVxuICByZW5kZXJJY29uRW5kKCkge1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBgJHtDU1MuaWNvbn0gJHtDU1MuaWNvbkVuZH1gLCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsID09PSBcImVuZFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25FbmQsIGtleTogQ1NTLmljb25FbmQsIHNjYWxlOiBcInNcIiB9KSk7XG4gIH1cbiAgcmVuZGVyQnJlYWRjcnVtYkljb24oZGlyKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IGAke0NTUy5pY29ufSAke0NTUy5pY29uQnJlYWRjcnVtYn1gLCBpY29uOiBkaXIgPT09IFwicnRsXCIgPyBcImNoZXZyb24tbGVmdFwiIDogXCJjaGV2cm9uLXJpZ2h0XCIsIGtleTogQ1NTLmljb25CcmVhZGNydW1iLCBzY2FsZTogXCJzXCIgfSkpO1xuICB9XG4gIHJlbmRlckRyb3Bkb3duSWNvbihkaXIpIHtcbiAgICBjb25zdCBkaXJDaGV2cm9uID0gZGlyID09PSBcInJ0bFwiID8gXCJjaGV2cm9uLWxlZnRcIiA6IFwiY2hldnJvbi1yaWdodFwiO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBgJHtDU1MuaWNvbn0gJHtDU1MuaWNvbkRyb3Bkb3dufWAsIGljb246IHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ID09PSBcInZlcnRpY2FsXCIgfHwgdGhpcy5pc1RvcExldmVsSXRlbVxuICAgICAgICA/IHRoaXMub3BlblxuICAgICAgICAgID8gXCJjaGV2cm9uLXVwXCJcbiAgICAgICAgICA6IFwiY2hldnJvbi1kb3duXCJcbiAgICAgICAgOiBkaXJDaGV2cm9uLCBrZXk6IENTUy5pY29uRHJvcGRvd24sIHNjYWxlOiBcInNcIiB9KSk7XG4gIH1cbiAgcmVuZGVyRHJvcGRvd25BY3Rpb24oZGlyKSB7XG4gICAgY29uc3QgZGlyQ2hldnJvbiA9IGRpciA9PT0gXCJydGxcIiA/IFwiY2hldnJvbi1sZWZ0XCIgOiBcImNoZXZyb24tcmlnaHRcIjtcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGNsYXNzOiBDU1MuZHJvcGRvd25BY3Rpb24sIGljb246IHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ID09PSBcInZlcnRpY2FsXCIgfHwgdGhpcy5pc1RvcExldmVsSXRlbVxuICAgICAgICA/IHRoaXMub3BlblxuICAgICAgICAgID8gXCJjaGV2cm9uLXVwXCJcbiAgICAgICAgICA6IFwiY2hldnJvbi1kb3duXCJcbiAgICAgICAgOiBkaXJDaGV2cm9uLCBrZXk6IENTUy5kcm9wZG93bkFjdGlvbiwgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgdGV4dDogdGhpcy5tZXNzYWdlcy5vcGVuLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuZHJvcGRvd25BY3Rpb25FbCA9IGVsKSB9KSk7XG4gIH1cbiAgcmVuZGVyU3VibWVudUl0ZW1zKGRpcikge1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtbWVudVwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuZHJvcGRvd25NZW51SXRlbXNdOiB0cnVlLFxuICAgICAgICBbQ1NTLm9wZW5dOiB0aGlzLm9wZW4sXG4gICAgICAgIFtDU1MubmVzdGVkXTogIXRoaXMuaXNUb3BMZXZlbEl0ZW0sXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIsXG4gICAgICAgIFtDU1MuZHJvcGRvd25WZXJ0aWNhbF06IHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ID09PSBcInZlcnRpY2FsXCJcbiAgICAgIH0sIGxhYmVsOiB0aGlzLm1lc3NhZ2VzLnN1Ym1lbnUsIGxheW91dDogXCJ2ZXJ0aWNhbFwiLCByb2xlOiBcIm1lbnVcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic3VibWVudS1pdGVtXCIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVNZW51SXRlbVNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJJdGVtQ29udGVudChkaXIpIHtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIHRoaXMuaWNvblN0YXJ0ICYmIHRoaXMucmVuZGVySWNvblN0YXJ0KCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnRleHRDb250YWluZXIgfSwgaChcInNwYW5cIiwgbnVsbCwgdGhpcy50ZXh0KSksIHRoaXMuaWNvbkVuZCAmJiB0aGlzLnJlbmRlckljb25FbmQoKSwgdGhpcy5icmVhZGNydW1iID8gdGhpcy5yZW5kZXJCcmVhZGNydW1iSWNvbihkaXIpIDogbnVsbCwgIXRoaXMuaHJlZiAmJiB0aGlzLmhhc1N1Ym1lbnUgPyB0aGlzLnJlbmRlckRyb3Bkb3duSWNvbihkaXIpIDogbnVsbCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQmx1cjogdGhpcy5ibHVySGFuZGxlciwgb25Gb2N1czogdGhpcy5mb2N1c0hhbmRsZXIgfSwgaChcImxpXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmlzUGFyZW50VmVydGljYWxdOiB0aGlzLnRvcExldmVsTWVudUxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICB9LCByb2xlOiBcIm5vbmVcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5pdGVtQ29udGVudCB9LCBoKFwiYVwiLCB7IFwiYXJpYS1jdXJyZW50XCI6IHRoaXMuaXNGb2N1c2VkID8gXCJwYWdlXCIgOiBmYWxzZSwgXCJhcmlhLWV4cGFuZGVkXCI6IHRoaXMub3BlbiwgXCJhcmlhLWhhc3BvcHVwXCI6IHRoaXMuaGFzU3VibWVudSwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwsIGNsYXNzOiB7IFtDU1MubGF5b3V0VmVydGljYWxdOiB0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiLCBbQ1NTLmNvbnRlbnRdOiB0cnVlIH0sIGhyZWY6IHRoaXMuaHJlZiwgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcmVsOiB0aGlzLnJlbCwgcm9sZTogXCJtZW51aXRlbVwiLCB0YWJJbmRleDogdGhpcy5pc1RvcExldmVsSXRlbSA/IDAgOiAtMSwgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmFuY2hvckVsID0gZWwpIH0sIHRoaXMucmVuZGVySXRlbUNvbnRlbnQoZGlyKSwgdGhpcy5ocmVmICYmICh0aGlzLnRvcExldmVsTWVudUxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiIHx8ICF0aGlzLmlzVG9wTGV2ZWxJdGVtKSA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5ob3ZlckhyZWZJY29uLCBpY29uOiBkaXIgPT09IFwicnRsXCIgPyBcImFycm93LWxlZnRcIiA6IFwiYXJyb3ctcmlnaHRcIiwgc2NhbGU6IFwic1wiIH0pKSA6IG51bGwpLCB0aGlzLmhyZWYgJiYgdGhpcy5oYXNTdWJtZW51ID8gdGhpcy5yZW5kZXJEcm9wZG93bkFjdGlvbihkaXIpIDogbnVsbCksIHRoaXMucmVuZGVyU3VibWVudUl0ZW1zKGRpcikpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbkNhbGNpdGVNZW51SXRlbS5zdHlsZSA9IG1lbnVJdGVtQ3NzO1xuXG5leHBvcnQgeyBDYWxjaXRlTWVudSBhcyBjYWxjaXRlX21lbnUsIENhbGNpdGVNZW51SXRlbSBhcyBjYWxjaXRlX21lbnVfaXRlbSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=