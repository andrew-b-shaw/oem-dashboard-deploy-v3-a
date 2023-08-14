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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    watchGlobalAttributes(this, ["role"]);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOGYyODBiYThhNGY2ODI5MDNmMDNhNzY5YWQ3MWVhNGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRIO0FBQ1k7QUFDcEI7QUFDN0I7QUFDb0M7QUFDN0Q7QUFDSDtBQUMvQjtBQUNEOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFB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QkFBd0IsRUFBRSxxREFBQyxRQUFRLGtKQUFrSix1RUFBdUU7QUFDaFM7QUFDQSx5Q0FBeUMsZ0hBQWdILHFEQUFDLG1CQUFtQiwwRkFBMEY7QUFDdlE7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6ZTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtbWVudV8yLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2xvYWRhYmxlLTgwNThlMzAwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50LCBjIGFzIGNyZWF0ZUV2ZW50LCBGIGFzIEZyYWdtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzLCBqIGFzIGZvY3VzRWxlbWVudEluR3JvdXAsIGYgYXMgZm9jdXNFbGVtZW50LCBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgeyBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5cbmNvbnN0IGFsbG93ZWRHbG9iYWxBdHRyaWJ1dGVzID0gW1wibGFuZ1wiLCBcInJvbGVcIl07XG5jb25zdCBlbGVtZW50VG9Db21wb25lbnRBbmRPYnNlcnZlck9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmZ1bmN0aW9uIHVwZGF0ZUdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50LCBhdHRyaWJ1dGVGaWx0ZXIsIHJldXNlQXR0cmlidXRlcyA9IGZhbHNlKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdXBkYXRlZEF0dHJpYnV0ZXMgPSByZXVzZUF0dHJpYnV0ZXMgPyBjb21wb25lbnQuZ2xvYmFsQXR0cmlidXRlcyA6IHt9O1xuICBhdHRyaWJ1dGVGaWx0ZXJcbiAgICAuZmlsdGVyKChhdHRyKSA9PiAhIWFsbG93ZWRHbG9iYWxBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHIpICYmICEhZWwuaGFzQXR0cmlidXRlKGF0dHIpKVxuICAgIC5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1cGRhdGVkQXR0cmlidXRlc1thdHRyXSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIGNvbXBvbmVudC5nbG9iYWxBdHRyaWJ1dGVzID0gdXBkYXRlZEF0dHJpYnV0ZXM7XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGNvbnN0IFtjb21wb25lbnQsIG9wdGlvbnNdID0gZWxlbWVudFRvQ29tcG9uZW50QW5kT2JzZXJ2ZXJPcHRpb25zTWFwLmdldCh0YXJnZXQpO1xuICAgIHVwZGF0ZUdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50LCBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlcik7XG4gIH0pO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGxpc3RlbmluZyBmb3IgY2hhbmdlcyB0byBnbG9iYWwgYXR0cmlidXRlcy5cbiAqXG4gKiByZW5kZXIoKTogVk5vZGUge1xuICogcmV0dXJuICg8SG9zdD5cbiAqIDx1bCB7Li4udGhpcy5nbG9iYWxBdHRyaWJ1dGVzfT48L2Rpdj5cbiAqIDwvSG9zdD4pO1xuICogfVxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBhdHRyaWJ1dGVGaWx0ZXJcbiAqL1xuZnVuY3Rpb24gd2F0Y2hHbG9iYWxBdHRyaWJ1dGVzKGNvbXBvbmVudCwgYXR0cmlidXRlRmlsdGVyKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBhdHRyaWJ1dGVGaWx0ZXIgfTtcbiAgZWxlbWVudFRvQ29tcG9uZW50QW5kT2JzZXJ2ZXJPcHRpb25zTWFwLnNldChlbCwgW2NvbXBvbmVudCwgb2JzZXJ2ZXJPcHRpb25zXSk7XG4gIHVwZGF0ZUdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50LCBhdHRyaWJ1dGVGaWx0ZXIsIHRydWUpO1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciByZW1vdmUgbGlzdGVuaW5nIGZvciBjaGFuZ2VzIHRvIGluaGVyaXRlZCBhdHRyaWJ1dGVzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW53YXRjaEdsb2JhbEF0dHJpYnV0ZXMoY29tcG9uZW50KSB7XG4gIGVsZW1lbnRUb0NvbXBvbmVudEFuZE9ic2VydmVyT3B0aW9uc01hcC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50LCBbLCBvYnNlcnZlck9wdGlvbnNdXSBvZiBlbGVtZW50VG9Db21wb25lbnRBbmRPYnNlcnZlck9wdGlvbnNNYXAuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgbWVudUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6ZmxleH11bHttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7YmxvY2stc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjBweH06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgdWx7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1ufVwiO1xuXG5jb25zdCBDYWxjaXRlTWVudSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBbXTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVNZW51U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5tZW51SXRlbXMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCk7XG4gICAgICB0aGlzLnNldE1lbnVJdGVtTGF5b3V0KHRoaXMubWVudUl0ZW1zLCB0aGlzLmxheW91dCk7XG4gICAgfTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5b3V0ID0gXCJob3Jpem9udGFsXCI7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyA9IHtcbiAgICAgIHJvbGU6IFwibWVudWJhclwiXG4gICAgfTtcbiAgfVxuICBoYW5kbGVMYXlvdXRDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldE1lbnVJdGVtTGF5b3V0KHRoaXMubWVudUl0ZW1zLCB2YWx1ZSk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgd2F0Y2hHbG9iYWxBdHRyaWJ1dGVzKHRoaXMsIFtcInJvbGVcIl0pO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB1bndhdGNoR2xvYmFsQXR0cmlidXRlcyh0aGlzKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjYWxjaXRlSW50ZXJuYWxOYXZNZW51SXRlbUtleUV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHN1Ym1lbnVJdGVtcyA9IGV2ZW50LmRldGFpbC5jaGlsZHJlbjtcbiAgICBjb25zdCBrZXkgPSBldmVudC5kZXRhaWwuZXZlbnQua2V5O1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGlmICh0YXJnZXQubGF5b3V0ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLm1lbnVJdGVtcywgdGFyZ2V0LCBcIm5leHRcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5kZXRhaWwuaXNTdWJtZW51T3Blbikge1xuICAgICAgICAgIHN1Ym1lbnVJdGVtc1swXS5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5tZW51SXRlbXMsIHRhcmdldCwgXCJwcmV2aW91c1wiLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LmRldGFpbC5pc1N1Ym1lbnVPcGVuKSB7XG4gICAgICAgICAgc3VibWVudUl0ZW1zW3N1Ym1lbnVJdGVtcy5sZW5ndGggLSAxXS5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLm1lbnVJdGVtcywgdGFyZ2V0LCBcIm5leHRcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5kZXRhaWwuaXNTdWJtZW51T3Blbikge1xuICAgICAgICAgIHN1Ym1lbnVJdGVtc1swXS5zZXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgaWYgKHRoaXMubGF5b3V0ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMubWVudUl0ZW1zLCB0YXJnZXQsIFwicHJldmlvdXNcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC5kZXRhaWwuaXNTdWJtZW51T3Blbikge1xuICAgICAgICAgIHRoaXMuZm9jdXNQYXJlbnRFbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmZvY3VzUGFyZW50RWxlbWVudChldmVudC50YXJnZXQpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGZvY3VzUGFyZW50RWxlbWVudChlbCkge1xuICAgIGNvbnN0IHBhcmVudEVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50RWwpIHtcbiAgICAgIGZvY3VzRWxlbWVudChwYXJlbnRFbCk7XG4gICAgICBwYXJlbnRFbC5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHNldE1lbnVJdGVtTGF5b3V0KGl0ZW1zLCBsYXlvdXQpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmxheW91dCA9IGxheW91dDtcbiAgICAgIGlmICh0aGlzLmdsb2JhbEF0dHJpYnV0ZXMucm9sZSA9PT0gXCJtZW51YmFyXCIpIHtcbiAgICAgICAgaXRlbS5pc1RvcExldmVsSXRlbSA9IHRydWU7XG4gICAgICAgIGl0ZW0udG9wTGV2ZWxNZW51TGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInVsXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwsIC4uLnRoaXMuZ2xvYmFsQXR0cmlidXRlcyB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVNZW51U2xvdENoYW5nZSB9KSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibGF5b3V0XCI6IFtcImhhbmRsZUxheW91dENoYW5nZVwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbkNhbGNpdGVNZW51LnN0eWxlID0gbWVudUNzcztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBkcm9wZG93blZlcnRpY2FsOiBcImRyb3Bkb3duLS12ZXJ0aWNhbFwiLFxuICBkcm9wZG93bk1lbnVJdGVtczogXCJkcm9wZG93bi1tZW51LWl0ZW1zXCIsXG4gIGRyb3Bkb3duQWN0aW9uOiBcImRyb3Bkb3duLWFjdGlvblwiLFxuICBsYXlvdXRWZXJ0aWNhbDogXCJsYXlvdXQtLXZlcnRpY2FsXCIsXG4gIGhvdmVySHJlZkljb246IFwiaG92ZXItaHJlZi1pY29uXCIsXG4gIGljb246IFwiaWNvblwiLFxuICBpY29uQnJlYWRjcnVtYjogXCJpY29uLS1icmVhZGNydW1iXCIsXG4gIGljb25Ecm9wZG93bjogXCJpY29uLS1kcm9wZG93blwiLFxuICBpY29uRW5kOiBcImljb24tLWVuZFwiLFxuICBpY29uU3RhcnQ6IFwiaWNvbi0tc3RhcnRcIixcbiAgaXNQYXJlbnRWZXJ0aWNhbDogXCJwYXJlbnQtLXZlcnRpY2FsXCIsXG4gIGl0ZW1Db250ZW50OiBcIml0ZW0tY29udGVudFwiLFxuICBvcGVuOiBcIm9wZW5cIixcbiAgbmVzdGVkOiBcIm5lc3RlZFwiLFxuICB0ZXh0Q29udGFpbmVyOiBcInRleHQtY29udGFpbmVyXCJcbn07XG5cbmNvbnN0IG1lbnVJdGVtQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1zaHJpbms6MH06aG9zdCAuY29udGFpbmVyLDpob3N0IC5pdGVtLWNvbnRlbnQsOmhvc3QgLmNvbnRlbnR7bWluLWJsb2NrLXNpemU6M3JlbX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSl7aW5saW5lLXNpemU6MTAwJX06aG9zdCg6bm90KFtsYXlvdXQ9dmVydGljYWxdKSl7YmxvY2stc2l6ZToxMDAlfS5jb250YWluZXIsLml0ZW0tY29udGVudHtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOnN0cmV0Y2h9LmNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWlubGluZToxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O3RleHQtZGVjb3JhdGlvbjpub25lO2JvcmRlci1ibG9jay1lbmQ6MC4xMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7cGFkZGluZy1ibG9jay1zdGFydDowLjEyNXJlbX0uY29udGVudDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmNvbnRlbnQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY29udGVudDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jb250ZW50IHNwYW57ZGlzcGxheTppbmxpbmUtZmxleH0uY29udGVudC5sYXlvdXQtLXZlcnRpY2Fse2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3BhZGRpbmctYmxvY2s6MXJlbTtib3JkZXItYmxvY2stZW5kOjA7Ym9yZGVyLWlubGluZS1lbmQ6MC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudH06aG9zdChbYWN0aXZlXSkgLmNvbnRlbnR7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbYWN0aXZlXSkgLmNvbnRlbnQgLmljb257LS1jYWxjaXRlLXVpLWljb24tY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Lmljb24tLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjAuNzVyZW19Lmljb24tLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OjAuNzVyZW19Lmljb24tLWRyb3Bkb3due3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDowcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtOy0tY2FsY2l0ZS11aS1pY29uLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmljb24tLWRyb3Bkb3due2luc2V0LWlubGluZS1zdGFydDowLjI1cmVtfS5pY29uLS1icmVhZGNydW1ie21hcmdpbi1pbmxpbmUtZW5kOjBweDtwYWRkaW5nLWlubGluZS1zdGFydDowLjVyZW07LS1jYWxjaXRlLXVpLWljb24tY29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0KFticmVhZGNydW1iXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtZW5kOjAuNzVyZW19Y2FsY2l0ZS1hY3Rpb257cG9zaXRpb246cmVsYXRpdmU7YmxvY2stc2l6ZTphdXRvO2JvcmRlci1pbmxpbmUtc3RhcnQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX1jYWxjaXRlLWFjdGlvbjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1pbmxpbmUtc3RhcnQ6LTFweDtkaXNwbGF5OmJsb2NrO2lubGluZS1zaXplOjFweDtjb250ZW50OlxcXCJcXFwiO2luc2V0LWJsb2NrOjAuNzVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX1jYWxjaXRlLWFjdGlvbjpob3ZlcjphZnRlcntibG9jay1zaXplOjEwMCU7aW5zZXQtYmxvY2s6MH0uY29udGVudDpmb2N1c35jYWxjaXRlLWFjdGlvbiwuY29udGVudDpob3Zlcn5jYWxjaXRlLWFjdGlvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Ym9yZGVyLWlubGluZS1zdGFydDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LmNvbnRhaW5lcjpob3ZlciAuZHJvcGRvd24tYWN0aW9ue2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5kcm9wZG93bi1tZW51LWl0ZW1ze3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6bm9uZTtibG9jay1zaXplOmF1dG87bWluLWlubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OnZpc2libGU7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtiYWNrZ3JvdW5kOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtpbnNldC1ibG9jay1zdGFydDoxMDAlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9LmRyb3Bkb3duLW1lbnUtaXRlbXMub3BlbntkaXNwbGF5OmJsb2NrfS5kcm9wZG93bi1tZW51LWl0ZW1zLm5lc3RlZHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDotMXB4O3RyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIDJweCkpfS5wYXJlbnQtLXZlcnRpY2Fse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uZHJvcGRvd24tLXZlcnRpY2FsLmRyb3Bkb3duLW1lbnUtaXRlbXN7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czowcHg7Ym94LXNoYWRvdzpub25lO2luc2V0LWJsb2NrLXN0YXJ0OjA7dHJhbnNmb3JtOm5vbmV9LmRyb3Bkb3duLS12ZXJ0aWNhbC5kcm9wZG93bi1tZW51LWl0ZW1zOmxhc3Qtb2YtdHlwZXtib3JkZXItaW5saW5lOjB9Omhvc3QoW3Nsb3Q9c3VibWVudS1pdGVtXSkgLnBhcmVudC0tdmVydGljYWx7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS43NXJlbX0uZHJvcGRvd24tbWVudS1pdGVtcy5uZXN0ZWQuY2FsY2l0ZS0tcnRse3RyYW5zZm9ybTp0cmFuc2xhdGVYKGNhbGMoLTEwMCUgKyAycHgpKX0uZHJvcGRvd24tLXZlcnRpY2FsLmRyb3Bkb3duLW1lbnUtaXRlbXMubmVzdGVkLmNhbGNpdGUtLXJ0bHt0cmFuc2Zvcm06bm9uZX0uaG92ZXItaHJlZi1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2luc2V0LWlubGluZS1lbmQ6MC4yNXJlbTttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgZWFzZS1pbi1vdXR9LmNvbnRlbnQ6Zm9jdXMgLmhvdmVyLWhyZWYtaWNvbiwuY29udGVudDpob3ZlciAuaG92ZXItaHJlZi1pY29ue2luc2V0LWlubGluZS1lbmQ6LTAuMjVyZW07b3BhY2l0eToxfVwiO1xuXG5jb25zdCBDYWxjaXRlTWVudUl0ZW0gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsTWVudUl0ZW1LZXlFdmVudFwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVNZW51SXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1lbnVJdGVtU2VsZWN0XCIsIDcpO1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoKHRoaXMuaHJlZiAmJiBldmVudC50YXJnZXQgPT09IHRoaXMuZHJvcGRvd25BY3Rpb25FbCkgfHwgKCF0aGlzLmhyZWYgJiYgdGhpcy5oYXNTdWJtZW51KSkge1xuICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RNZW51SXRlbShldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1lbnVJdGVtU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zdWJtZW51SXRlbXMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCk7XG4gICAgICB0aGlzLnN1Ym1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbS50b3BMZXZlbE1lbnVMYXlvdXQpIHtcbiAgICAgICAgICBpdGVtLnRvcExldmVsTWVudUxheW91dCA9IHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFzU3VibWVudSA9IHRoaXMuc3VibWVudUl0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBvcGVuaW5nIGFuZCBjbG9zaW5nIG9mIHN1Ym1lbnUgaXMgaGFuZGxlZCBoZXJlLiBBbnkgb3RoZXIgZnVuY3Rpb25hbGl0eSBpcyBidWJibGVkIHRvIHBhcmVudCBtZW51LlxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RNZW51SXRlbShldmVudCk7XG4gICAgICAgIGlmICh0aGlzLmhhc1N1Ym1lbnUgJiZcbiAgICAgICAgICAoIXRoaXMuaHJlZiB8fCAodGhpcy5ocmVmICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5kcm9wZG93bkFjdGlvbkVsKSkpIHtcbiAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbE1lbnVJdGVtS2V5RXZlbnQuZW1pdCh7IGV2ZW50IH0pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKChldmVudC50YXJnZXQgPT09IHRoaXMuZHJvcGRvd25BY3Rpb25FbCB8fCAhdGhpcy5ocmVmKSAmJlxuICAgICAgICAgIHRoaXMuaGFzU3VibWVudSAmJlxuICAgICAgICAgICF0aGlzLm9wZW4gJiZcbiAgICAgICAgICB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbE1lbnVJdGVtS2V5RXZlbnQuZW1pdCh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMuc3VibWVudUl0ZW1zLFxuICAgICAgICAgIGlzU3VibWVudU9wZW46IHRoaXMub3BlbiAmJiB0aGlzLmhhc1N1Ym1lbnVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxNZW51SXRlbUtleUV2ZW50LmVtaXQoe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnN1Ym1lbnVJdGVtcyxcbiAgICAgICAgICBpc1N1Ym1lbnVPcGVuOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5kcm9wZG93bkFjdGlvbkVsIHx8ICF0aGlzLmhyZWYpICYmXG4gICAgICAgICAgdGhpcy5oYXNTdWJtZW51ICYmXG4gICAgICAgICAgIXRoaXMub3BlbiAmJlxuICAgICAgICAgIHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbE1lbnVJdGVtS2V5RXZlbnQuZW1pdCh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMuc3VibWVudUl0ZW1zLFxuICAgICAgICAgIGlzU3VibWVudU9wZW46IHRoaXMub3BlbiAmJiB0aGlzLmhhc1N1Ym1lbnVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJyZWFkY3J1bWIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkVuZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNUb3BMZXZlbEl0ZW0gPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5b3V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMucmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvcExldmVsTWVudUxheW91dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5oYXNTdWJtZW51ID0gZmFsc2U7XG4gICAgdGhpcy5zdWJtZW51SXRlbXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5hbmNob3JFbC5mb2N1cygpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhbmRsZUNsaWNrT3V0KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ICE9PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgIHRoaXMuaGFzU3VibWVudSAmJlxuICAgICAgdGhpcy5vcGVuICYmXG4gICAgICAhZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBoYW5kbGVGb2N1c091dChldmVudCkge1xuICAgIGlmICh0aGlzLnRvcExldmVsTWVudUxheW91dCAhPT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAhdGhpcy5lbC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJsdXJIYW5kbGVyKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gIH1cbiAgZm9jdXNIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICBpZiAodGFyZ2V0Lm9wZW4gJiYgIXRoaXMub3Blbikge1xuICAgICAgdGFyZ2V0Lm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0TWVudUl0ZW0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmRyb3Bkb3duQWN0aW9uRWwpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZU1lbnVJdGVtU2VsZWN0LmVtaXQoKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJJY29uU3RhcnQoKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IGAke0NTUy5pY29ufSAke0NTUy5pY29uU3RhcnR9YCwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJzdGFydFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25TdGFydCwga2V5OiBDU1MuaWNvblN0YXJ0LCBzY2FsZTogXCJzXCIgfSkpO1xuICB9XG4gIHJlbmRlckljb25FbmQoKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IGAke0NTUy5pY29ufSAke0NTUy5pY29uRW5kfWAsIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiZW5kXCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvbkVuZCwga2V5OiBDU1MuaWNvbkVuZCwgc2NhbGU6IFwic1wiIH0pKTtcbiAgfVxuICByZW5kZXJCcmVhZGNydW1iSWNvbihkaXIpIHtcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogYCR7Q1NTLmljb259ICR7Q1NTLmljb25CcmVhZGNydW1ifWAsIGljb246IGRpciA9PT0gXCJydGxcIiA/IFwiY2hldnJvbi1sZWZ0XCIgOiBcImNoZXZyb24tcmlnaHRcIiwga2V5OiBDU1MuaWNvbkJyZWFkY3J1bWIsIHNjYWxlOiBcInNcIiB9KSk7XG4gIH1cbiAgcmVuZGVyRHJvcGRvd25JY29uKGRpcikge1xuICAgIGNvbnN0IGRpckNoZXZyb24gPSBkaXIgPT09IFwicnRsXCIgPyBcImNoZXZyb24tbGVmdFwiIDogXCJjaGV2cm9uLXJpZ2h0XCI7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IGAke0NTUy5pY29ufSAke0NTUy5pY29uRHJvcGRvd259YCwgaWNvbjogdGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgPT09IFwidmVydGljYWxcIiB8fCB0aGlzLmlzVG9wTGV2ZWxJdGVtXG4gICAgICAgID8gdGhpcy5vcGVuXG4gICAgICAgICAgPyBcImNoZXZyb24tdXBcIlxuICAgICAgICAgIDogXCJjaGV2cm9uLWRvd25cIlxuICAgICAgICA6IGRpckNoZXZyb24sIGtleTogQ1NTLmljb25Ecm9wZG93biwgc2NhbGU6IFwic1wiIH0pKTtcbiAgfVxuICByZW5kZXJEcm9wZG93bkFjdGlvbihkaXIpIHtcbiAgICBjb25zdCBkaXJDaGV2cm9uID0gZGlyID09PSBcInJ0bFwiID8gXCJjaGV2cm9uLWxlZnRcIiA6IFwiY2hldnJvbi1yaWdodFwiO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgY2xhc3M6IENTUy5kcm9wZG93bkFjdGlvbiwgaWNvbjogdGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgPT09IFwidmVydGljYWxcIiB8fCB0aGlzLmlzVG9wTGV2ZWxJdGVtXG4gICAgICAgID8gdGhpcy5vcGVuXG4gICAgICAgICAgPyBcImNoZXZyb24tdXBcIlxuICAgICAgICAgIDogXCJjaGV2cm9uLWRvd25cIlxuICAgICAgICA6IGRpckNoZXZyb24sIGtleTogQ1NTLmRyb3Bkb3duQWN0aW9uLCBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyLCB0ZXh0OiB0aGlzLm1lc3NhZ2VzLm9wZW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5kcm9wZG93bkFjdGlvbkVsID0gZWwpIH0pKTtcbiAgfVxuICByZW5kZXJTdWJtZW51SXRlbXMoZGlyKSB7XG4gICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1tZW51XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5kcm9wZG93bk1lbnVJdGVtc106IHRydWUsXG4gICAgICAgIFtDU1Mub3Blbl06IHRoaXMub3BlbixcbiAgICAgICAgW0NTUy5uZXN0ZWRdOiAhdGhpcy5pc1RvcExldmVsSXRlbSxcbiAgICAgICAgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIixcbiAgICAgICAgW0NTUy5kcm9wZG93blZlcnRpY2FsXTogdGhpcy50b3BMZXZlbE1lbnVMYXlvdXQgPT09IFwidmVydGljYWxcIlxuICAgICAgfSwgbGFiZWw6IHRoaXMubWVzc2FnZXMuc3VibWVudSwgbGF5b3V0OiBcInZlcnRpY2FsXCIsIHJvbGU6IFwibWVudVwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdWJtZW51LWl0ZW1cIiwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZU1lbnVJdGVtU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckl0ZW1Db250ZW50KGRpcikge1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgdGhpcy5pY29uU3RhcnQgJiYgdGhpcy5yZW5kZXJJY29uU3RhcnQoKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MudGV4dENvbnRhaW5lciB9LCBoKFwic3BhblwiLCBudWxsLCB0aGlzLnRleHQpKSwgdGhpcy5pY29uRW5kICYmIHRoaXMucmVuZGVySWNvbkVuZCgpLCB0aGlzLmJyZWFkY3J1bWIgPyB0aGlzLnJlbmRlckJyZWFkY3J1bWJJY29uKGRpcikgOiBudWxsLCAhdGhpcy5ocmVmICYmIHRoaXMuaGFzU3VibWVudSA/IHRoaXMucmVuZGVyRHJvcGRvd25JY29uKGRpcikgOiBudWxsKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLmJsdXJIYW5kbGVyLCBvbkZvY3VzOiB0aGlzLmZvY3VzSGFuZGxlciB9LCBoKFwibGlcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuaXNQYXJlbnRWZXJ0aWNhbF06IHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ID09PSBcInZlcnRpY2FsXCJcbiAgICAgIH0sIHJvbGU6IFwibm9uZVwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLml0ZW1Db250ZW50IH0sIGgoXCJhXCIsIHsgXCJhcmlhLWN1cnJlbnRcIjogdGhpcy5pc0ZvY3VzZWQgPyBcInBhZ2VcIiA6IGZhbHNlLCBcImFyaWEtZXhwYW5kZWRcIjogdGhpcy5vcGVuLCBcImFyaWEtaGFzcG9wdXBcIjogdGhpcy5oYXNTdWJtZW51LCBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbCwgY2xhc3M6IHsgW0NTUy5sYXlvdXRWZXJ0aWNhbF06IHRoaXMubGF5b3V0ID09PSBcInZlcnRpY2FsXCIsIFtDU1MuY29udGVudF06IHRydWUgfSwgaHJlZjogdGhpcy5ocmVmLCBvbkNsaWNrOiB0aGlzLmNsaWNrSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyLCByZWw6IHRoaXMucmVsLCByb2xlOiBcIm1lbnVpdGVtXCIsIHRhYkluZGV4OiB0aGlzLmlzVG9wTGV2ZWxJdGVtID8gMCA6IC0xLCB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYW5jaG9yRWwgPSBlbCkgfSwgdGhpcy5yZW5kZXJJdGVtQ29udGVudChkaXIpLCB0aGlzLmhyZWYgJiYgKHRoaXMudG9wTGV2ZWxNZW51TGF5b3V0ID09PSBcInZlcnRpY2FsXCIgfHwgIXRoaXMuaXNUb3BMZXZlbEl0ZW0pID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmhvdmVySHJlZkljb24sIGljb246IGRpciA9PT0gXCJydGxcIiA/IFwiYXJyb3ctbGVmdFwiIDogXCJhcnJvdy1yaWdodFwiLCBzY2FsZTogXCJzXCIgfSkpIDogbnVsbCksIHRoaXMuaHJlZiAmJiB0aGlzLmhhc1N1Ym1lbnUgPyB0aGlzLnJlbmRlckRyb3Bkb3duQWN0aW9uKGRpcikgOiBudWxsKSwgdGhpcy5yZW5kZXJTdWJtZW51SXRlbXMoZGlyKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuQ2FsY2l0ZU1lbnVJdGVtLnN0eWxlID0gbWVudUl0ZW1Dc3M7XG5cbmV4cG9ydCB7IENhbGNpdGVNZW51IGFzIGNhbGNpdGVfbWVudSwgQ2FsY2l0ZU1lbnVJdGVtIGFzIGNhbGNpdGVfbWVudV9pdGVtIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9