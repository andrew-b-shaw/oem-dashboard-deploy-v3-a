"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-navigation_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-navigation_3.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-navigation_3.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_navigation": () => (/* binding */ CalciteNavigation),
/* harmony export */   "calcite_navigation_logo": () => (/* binding */ CalciteNavigationLogo),
/* harmony export */   "calcite_navigation_user": () => (/* binding */ CalciteNavigationUser)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */






const CSS$2 = {
  container: "container",
  containerContent: "container-content",
  hasProgress: "progress-bar",
  hide: "hide",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary"
};
const SLOTS = {
  logo: "logo",
  user: "user",
  progress: "progress",
  navigationAction: "navigation-action",
  contentStart: "content-start",
  contentEnd: "content-end",
  contentCenter: "content-center",
  navSecondary: "navigation-secondary",
  navTertiary: "navigation-tertiary"
};
const ICONS = {
  hamburger: "hamburger"
};

const navigationCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}.container{margin-inline:auto;display:flex;inline-size:100%;flex-direction:column;margin-block:0;margin-inline:auto;background-color:var(--calcite-navigation-background, var(--calcite-ui-foreground-1))}.container.primary,.container.secondary,.container.tertiary{border-block-end:1px solid;border-block-end-color:var(--calcite-navigation-border-color, var(--calcite-ui-border-3))}.user,.logo{display:flex}.hide{display:none}.primary{block-size:4rem}.secondary{block-size:3rem}.tertiary{block-size:3rem}.container-content{margin-inline:auto;display:flex;block-size:100%;inline-size:100%;margin-block:0;inline-size:var(--calcite-navigation-width, 100%);max-inline-size:100%}.container-content.progress-bar{margin-block-start:0.125rem}slot[name]{display:flex;flex-direction:row}slot[name=navigation-secondary]::slotted(calcite-navigation),slot[name=navigation-tertiary]::slotted(calcite-navigation){inline-size:100%}slot[name=content-start]::slotted(*),slot[name=content-center]::slotted(*),slot[name=content-end]::slotted(*){display:flex;flex-direction:row;align-items:center}slot[name=progress],slot[name=progress] calcite-progress{inset-block-start:0;inset-inline:0}slot[name=content-end]{margin-inline-start:auto}slot[name=content-start]{margin-inline-end:auto}slot[name=content-end],slot[name=logo]~slot[name=user],slot[name=user]:only-child{margin-inline-start:auto}slot[name=content-center]{margin-inline-start:auto;margin-inline-end:auto}slot[name=content-start]~slot[name=content-center]{margin-inline-start:0px}slot[name=content-start]~slot[name=content-end],slot[name=content-center]~slot[name=content-end],slot[name=content-center]~slot[name=user],slot[name=content-end]~slot[name=user]{margin:0px}";

const CalciteNavigation = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteNavigationActionSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteNavigationActionSelect", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.actionClickHandler = () => {
      this.calciteNavigationActionSelect.emit();
    };
    this.handleUserSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.userSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
      }
    };
    this.handleLogoSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.logoSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
      }
    };
    this.handleContentStartSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.primaryContentStartSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
      }
    };
    this.handleContentEndSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.primaryContentEndSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
      }
    };
    this.handleContentCenterSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.primaryContentCenterSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
      }
    };
    this.handleSecondarySlotChange = (event) => {
      this.secondarySlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleTertiarySlotChange = (event) => {
      this.tertiarySlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleMenuActionSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.navigationActionSlotHasElements = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
        if (this.navigationActionSlotHasElements) {
          this.navigationAction = false;
        }
      }
    };
    this.handleProgressSlotChange = (event) => {
      if (this.isPrimaryLevel()) {
        this.progressSlotHasElement = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
      }
    };
    this.label = undefined;
    this.navigationAction = false;
    this.logoSlotHasElements = undefined;
    this.navigationActionSlotHasElements = undefined;
    this.primaryContentCenterSlotHasElements = undefined;
    this.primaryContentEndSlotHasElements = undefined;
    this.primaryContentStartSlotHasElements = undefined;
    this.progressSlotHasElement = undefined;
    this.secondarySlotHasElements = undefined;
    this.tertiarySlotHasElements = undefined;
    this.userSlotHasElements = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** When `navigation-action` is `true`, sets focus on the component's action element. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    await this.navigationActionEl?.setFocus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  isPrimaryLevel() {
    return this.el.slot !== SLOTS.navSecondary && this.el.slot !== SLOTS.navTertiary;
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderMenuAction() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.navigationAction, onSlotchange: this.handleMenuActionSlotChange }, this.navigationAction && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { icon: ICONS.hamburger, onClick: this.actionClickHandler, text: this.label,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.navigationActionEl = el) }))));
  }
  render() {
    const primaryLevelHasElements = this.logoSlotHasElements ||
      this.userSlotHasElements ||
      this.navigationActionSlotHasElements ||
      this.primaryContentCenterSlotHasElements ||
      this.primaryContentEndSlotHasElements ||
      this.primaryContentStartSlotHasElements ||
      this.navigationAction;
    const slotName = this.el.slot;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS$2.container]: true,
        [CSS$2.secondary]: slotName === SLOTS.navSecondary,
        [CSS$2.tertiary]: slotName === SLOTS.navTertiary,
        [CSS$2.primary]: primaryLevelHasElements
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS$2.hide]: !this.progressSlotHasElement, [SLOTS.progress]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.progress, onSlotchange: this.handleProgressSlotChange })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS$2.containerContent]: true, [CSS$2.hasProgress]: this.progressSlotHasElement } }, this.renderMenuAction(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS$2.hide]: !this.logoSlotHasElements, [SLOTS.logo]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.logo, onSlotchange: this.handleLogoSlotChange })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentCenter, onSlotchange: this.handleContentCenterSlotChange }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS$2.hide]: !this.userSlotHasElements, [SLOTS.user]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.user, onSlotchange: this.handleUserSlotChange })))), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.navSecondary, onSlotchange: this.handleSecondarySlotChange }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.navTertiary, onSlotchange: this.handleTertiarySlotChange }))));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
CalciteNavigation.style = navigationCss;

const CSS$1 = {
  container: "container",
  heading: "heading",
  description: "description",
  anchor: "anchor",
  image: "image"
};

const navigationLogoCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}.anchor{margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-size:var(--calcite-font-size-0);line-height:1.25rem;text-decoration-line:none;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}.anchor:hover,.anchor:focus{background-color:var(--calcite-ui-foreground-2)}.anchor:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.anchor:active{background-color:var(--calcite-ui-foreground-3)}.image{margin:0px;display:flex;block-size:1.75rem;padding-inline:1rem}.image~.container{padding-inline-start:0px}:host(:active) .anchor{color:var(--calcite-ui-text-1)}:host([active]) .anchor{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-brand);--calcite-ui-icon-color:var(--calcite-ui-brand)}.container{margin-block-start:0.125rem;display:flex;flex-direction:column;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:1rem;text-align:start}.heading{margin-inline-start:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}";

const CalciteNavigationLogo = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.active = undefined;
    this.href = undefined;
    this.label = undefined;
    this.rel = undefined;
    this.description = undefined;
    this.target = undefined;
    this.heading = undefined;
    this.thumbnail = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    if (this.href) {
      this.el.focus();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { heading, description, thumbnail } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: CSS$1.anchor, href: this.href, rel: this.rel, target: this.target }, thumbnail && (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { alt: this.label || "", class: CSS$1.image, src: thumbnail }), (heading || description) && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$1.container }, heading && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.heading, class: CSS$1.heading, key: CSS$1.heading }, heading)), description && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.description, class: CSS$1.description, key: CSS$1.description }, description)))))));
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
CalciteNavigationLogo.style = navigationLogoCss;

const CSS = {
  textContainer: "text-container",
  fullName: "full-name",
  username: "username",
  button: "button"
};

const navigationUserCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-ui-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:active) .button{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}:host([active]) .button{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1);--calcite-ui-icon-color:var(--calcite-ui-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.username{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}";

const CalciteNavigationUser = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.active = undefined;
    this.fullName = undefined;
    this.label = undefined;
    this.textDisabled = false;
    this.thumbnail = undefined;
    this.userId = undefined;
    this.username = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.label, class: CSS.button }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-avatar", { "full-name": this.fullName, label: this.label, thumbnail: this.thumbnail, "user-id": this.userId, username: this.username }), (this.fullName || this.username) && !this.textDisabled && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.textContainer }, this.fullName && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.fullName, key: CSS.fullName }, this.fullName)), this.username && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.username, key: CSS.username }, this.username)))))));
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
CalciteNavigationUser.style = navigationUserCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzViYWZjODNiYzQwM2I1NjczNjhlODRmZmViNjE2MjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRIO0FBQ3REO0FBQzhDO0FBQ3hGO0FBQ0s7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsV0FBVyxtQkFBbUIsYUFBYSxpQkFBaUIsc0JBQXNCLGVBQWUsbUJBQW1CLHNGQUFzRiw0REFBNEQsMkJBQTJCLDBGQUEwRixZQUFZLGFBQWEsTUFBTSxhQUFhLFNBQVMsZ0JBQWdCLFdBQVcsZ0JBQWdCLFVBQVUsZ0JBQWdCLG1CQUFtQixtQkFBbUIsYUFBYSxnQkFBZ0IsaUJBQWlCLGVBQWUsa0RBQWtELHFCQUFxQixnQ0FBZ0Ms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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFzQjtBQUMxQjtBQUNBO0FBQ0EsSUFBSSx3REFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQUksUUFBUSxxREFBQyxhQUFhLDZDQUE2QyxFQUFFLHFEQUFDLHFCQUFxQiwySEFBMkgsOERBQThELHFEQUFDLFVBQVUsMEJBQTBCLG9CQUFvQixxREFBQyxXQUFXLHdDQUF3QyxxQ0FBcUMscURBQUMsV0FBVyx3Q0FBd0M7QUFDNWU7QUFDQSxnQ0FBZ0M7QUFDaEMsYUFBYSxPQUFPLHFEQUFVO0FBQzlCO0FBQ0E7O0FBRXVKOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hSdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1uYXZpZ2F0aW9uXzMuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtODA1OGUzMDAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgRiBhcyBGcmFnbWVudCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGQgYXMgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudCB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcblxuY29uc3QgQ1NTJDIgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGFpbmVyQ29udGVudDogXCJjb250YWluZXItY29udGVudFwiLFxuICBoYXNQcm9ncmVzczogXCJwcm9ncmVzcy1iYXJcIixcbiAgaGlkZTogXCJoaWRlXCIsXG4gIHByaW1hcnk6IFwicHJpbWFyeVwiLFxuICBzZWNvbmRhcnk6IFwic2Vjb25kYXJ5XCIsXG4gIHRlcnRpYXJ5OiBcInRlcnRpYXJ5XCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgbG9nbzogXCJsb2dvXCIsXG4gIHVzZXI6IFwidXNlclwiLFxuICBwcm9ncmVzczogXCJwcm9ncmVzc1wiLFxuICBuYXZpZ2F0aW9uQWN0aW9uOiBcIm5hdmlnYXRpb24tYWN0aW9uXCIsXG4gIGNvbnRlbnRTdGFydDogXCJjb250ZW50LXN0YXJ0XCIsXG4gIGNvbnRlbnRFbmQ6IFwiY29udGVudC1lbmRcIixcbiAgY29udGVudENlbnRlcjogXCJjb250ZW50LWNlbnRlclwiLFxuICBuYXZTZWNvbmRhcnk6IFwibmF2aWdhdGlvbi1zZWNvbmRhcnlcIixcbiAgbmF2VGVydGlhcnk6IFwibmF2aWdhdGlvbi10ZXJ0aWFyeVwiXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGhhbWJ1cmdlcjogXCJoYW1idXJnZXJcIlxufTtcblxuY29uc3QgbmF2aWdhdGlvbkNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfS5jb250YWluZXJ7bWFyZ2luLWlubGluZTphdXRvO2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tYmxvY2s6MDttYXJnaW4taW5saW5lOmF1dG87YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLW5hdmlnYXRpb24tYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpKX0uY29udGFpbmVyLnByaW1hcnksLmNvbnRhaW5lci5zZWNvbmRhcnksLmNvbnRhaW5lci50ZXJ0aWFyeXtib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZDtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtbmF2aWdhdGlvbi1ib3JkZXItY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpKX0udXNlciwubG9nb3tkaXNwbGF5OmZsZXh9LmhpZGV7ZGlzcGxheTpub25lfS5wcmltYXJ5e2Jsb2NrLXNpemU6NHJlbX0uc2Vjb25kYXJ5e2Jsb2NrLXNpemU6M3JlbX0udGVydGlhcnl7YmxvY2stc2l6ZTozcmVtfS5jb250YWluZXItY29udGVudHttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21hcmdpbi1ibG9jazowO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbmF2aWdhdGlvbi13aWR0aCwgMTAwJSk7bWF4LWlubGluZS1zaXplOjEwMCV9LmNvbnRhaW5lci1jb250ZW50LnByb2dyZXNzLWJhcnttYXJnaW4tYmxvY2stc3RhcnQ6MC4xMjVyZW19c2xvdFtuYW1lXXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fXNsb3RbbmFtZT1uYXZpZ2F0aW9uLXNlY29uZGFyeV06OnNsb3R0ZWQoY2FsY2l0ZS1uYXZpZ2F0aW9uKSxzbG90W25hbWU9bmF2aWdhdGlvbi10ZXJ0aWFyeV06OnNsb3R0ZWQoY2FsY2l0ZS1uYXZpZ2F0aW9uKXtpbmxpbmUtc2l6ZToxMDAlfXNsb3RbbmFtZT1jb250ZW50LXN0YXJ0XTo6c2xvdHRlZCgqKSxzbG90W25hbWU9Y29udGVudC1jZW50ZXJdOjpzbG90dGVkKCopLHNsb3RbbmFtZT1jb250ZW50LWVuZF06OnNsb3R0ZWQoKil7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9c2xvdFtuYW1lPXByb2dyZXNzXSxzbG90W25hbWU9cHJvZ3Jlc3NdIGNhbGNpdGUtcHJvZ3Jlc3N7aW5zZXQtYmxvY2stc3RhcnQ6MDtpbnNldC1pbmxpbmU6MH1zbG90W25hbWU9Y29udGVudC1lbmRde21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b31zbG90W25hbWU9Y29udGVudC1zdGFydF17bWFyZ2luLWlubGluZS1lbmQ6YXV0b31zbG90W25hbWU9Y29udGVudC1lbmRdLHNsb3RbbmFtZT1sb2dvXX5zbG90W25hbWU9dXNlcl0sc2xvdFtuYW1lPXVzZXJdOm9ubHktY2hpbGR7bWFyZ2luLWlubGluZS1zdGFydDphdXRvfXNsb3RbbmFtZT1jb250ZW50LWNlbnRlcl17bWFyZ2luLWlubGluZS1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG99c2xvdFtuYW1lPWNvbnRlbnQtc3RhcnRdfnNsb3RbbmFtZT1jb250ZW50LWNlbnRlcl17bWFyZ2luLWlubGluZS1zdGFydDowcHh9c2xvdFtuYW1lPWNvbnRlbnQtc3RhcnRdfnNsb3RbbmFtZT1jb250ZW50LWVuZF0sc2xvdFtuYW1lPWNvbnRlbnQtY2VudGVyXX5zbG90W25hbWU9Y29udGVudC1lbmRdLHNsb3RbbmFtZT1jb250ZW50LWNlbnRlcl1+c2xvdFtuYW1lPXVzZXJdLHNsb3RbbmFtZT1jb250ZW50LWVuZF1+c2xvdFtuYW1lPXVzZXJde21hcmdpbjowcHh9XCI7XG5cbmNvbnN0IENhbGNpdGVOYXZpZ2F0aW9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVOYXZpZ2F0aW9uQWN0aW9uU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTmF2aWdhdGlvbkFjdGlvblNlbGVjdFwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5hY3Rpb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVOYXZpZ2F0aW9uQWN0aW9uU2VsZWN0LmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlVXNlclNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzUHJpbWFyeUxldmVsKCkpIHtcbiAgICAgICAgdGhpcy51c2VyU2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxvZ29TbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMubG9nb1Nsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50U3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeUNvbnRlbnRTdGFydFNsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNQcmltYXJ5TGV2ZWwoKSkge1xuICAgICAgICB0aGlzLnByaW1hcnlDb250ZW50RW5kU2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRDZW50ZXJTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeUNvbnRlbnRDZW50ZXJTbG90SGFzRWxlbWVudHMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2Vjb25kYXJ5U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZWNvbmRhcnlTbG90SGFzRWxlbWVudHMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlVGVydGlhcnlTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnRlcnRpYXJ5U2xvdEhhc0VsZW1lbnRzID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1lbnVBY3Rpb25TbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkFjdGlvblNsb3RIYXNFbGVtZW50cyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0aW9uQWN0aW9uU2xvdEhhc0VsZW1lbnRzKSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uQWN0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlUHJvZ3Jlc3NTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ByaW1hcnlMZXZlbCgpKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hdmlnYXRpb25BY3Rpb24gPSBmYWxzZTtcbiAgICB0aGlzLmxvZ29TbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYXZpZ2F0aW9uQWN0aW9uU2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJpbWFyeUNvbnRlbnRDZW50ZXJTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmltYXJ5Q29udGVudEVuZFNsb3RIYXNFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByaW1hcnlDb250ZW50U3RhcnRTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcm9ncmVzc1Nsb3RIYXNFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2Vjb25kYXJ5U2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGVydGlhcnlTbG90SGFzRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VyU2xvdEhhc0VsZW1lbnRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFdoZW4gYG5hdmlnYXRpb24tYWN0aW9uYCBpcyBgdHJ1ZWAsIHNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGFjdGlvbiBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgYXdhaXQgdGhpcy5uYXZpZ2F0aW9uQWN0aW9uRWw/LnNldEZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBpc1ByaW1hcnlMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5zbG90ICE9PSBTTE9UUy5uYXZTZWNvbmRhcnkgJiYgdGhpcy5lbC5zbG90ICE9PSBTTE9UUy5uYXZUZXJ0aWFyeTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlck1lbnVBY3Rpb24oKSB7XG4gICAgcmV0dXJuIChoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLm5hdmlnYXRpb25BY3Rpb24sIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVNZW51QWN0aW9uU2xvdENoYW5nZSB9LCB0aGlzLm5hdmlnYXRpb25BY3Rpb24gJiYgKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGljb246IElDT05TLmhhbWJ1cmdlciwgb25DbGljazogdGhpcy5hY3Rpb25DbGlja0hhbmRsZXIsIHRleHQ6IHRoaXMubGFiZWwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5uYXZpZ2F0aW9uQWN0aW9uRWwgPSBlbCkgfSkpKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByaW1hcnlMZXZlbEhhc0VsZW1lbnRzID0gdGhpcy5sb2dvU2xvdEhhc0VsZW1lbnRzIHx8XG4gICAgICB0aGlzLnVzZXJTbG90SGFzRWxlbWVudHMgfHxcbiAgICAgIHRoaXMubmF2aWdhdGlvbkFjdGlvblNsb3RIYXNFbGVtZW50cyB8fFxuICAgICAgdGhpcy5wcmltYXJ5Q29udGVudENlbnRlclNsb3RIYXNFbGVtZW50cyB8fFxuICAgICAgdGhpcy5wcmltYXJ5Q29udGVudEVuZFNsb3RIYXNFbGVtZW50cyB8fFxuICAgICAgdGhpcy5wcmltYXJ5Q29udGVudFN0YXJ0U2xvdEhhc0VsZW1lbnRzIHx8XG4gICAgICB0aGlzLm5hdmlnYXRpb25BY3Rpb247XG4gICAgY29uc3Qgc2xvdE5hbWUgPSB0aGlzLmVsLnNsb3Q7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDIuY29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUyQyLnNlY29uZGFyeV06IHNsb3ROYW1lID09PSBTTE9UUy5uYXZTZWNvbmRhcnksXG4gICAgICAgIFtDU1MkMi50ZXJ0aWFyeV06IHNsb3ROYW1lID09PSBTTE9UUy5uYXZUZXJ0aWFyeSxcbiAgICAgICAgW0NTUyQyLnByaW1hcnldOiBwcmltYXJ5TGV2ZWxIYXNFbGVtZW50c1xuICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUyQyLmhpZGVdOiAhdGhpcy5wcm9ncmVzc1Nsb3RIYXNFbGVtZW50LCBbU0xPVFMucHJvZ3Jlc3NdOiB0cnVlIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5wcm9ncmVzcywgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZVByb2dyZXNzU2xvdENoYW5nZSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTJDIuY29udGFpbmVyQ29udGVudF06IHRydWUsIFtDU1MkMi5oYXNQcm9ncmVzc106IHRoaXMucHJvZ3Jlc3NTbG90SGFzRWxlbWVudCB9IH0sIHRoaXMucmVuZGVyTWVudUFjdGlvbigpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUyQyLmhpZGVdOiAhdGhpcy5sb2dvU2xvdEhhc0VsZW1lbnRzLCBbU0xPVFMubG9nb106IHRydWUgfSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmxvZ28sIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVMb2dvU2xvdENoYW5nZSB9KSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudFN0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudFN0YXJ0U2xvdENoYW5nZSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50Q2VudGVyLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudENlbnRlclNsb3RDaGFuZ2UgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudEVuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUNvbnRlbnRFbmRTbG90Q2hhbmdlIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUyQyLmhpZGVdOiAhdGhpcy51c2VyU2xvdEhhc0VsZW1lbnRzLCBbU0xPVFMudXNlcl06IHRydWUgfSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnVzZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVVc2VyU2xvdENoYW5nZSB9KSkpKSwgaChGcmFnbWVudCwgbnVsbCwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5uYXZTZWNvbmRhcnksIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVTZWNvbmRhcnlTbG90Q2hhbmdlIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLm5hdlRlcnRpYXJ5LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlVGVydGlhcnlTbG90Q2hhbmdlIH0pKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5DYWxjaXRlTmF2aWdhdGlvbi5zdHlsZSA9IG5hdmlnYXRpb25Dc3M7XG5cbmNvbnN0IENTUyQxID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGhlYWRpbmc6IFwiaGVhZGluZ1wiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBhbmNob3I6IFwiYW5jaG9yXCIsXG4gIGltYWdlOiBcImltYWdlXCJcbn07XG5cbmNvbnN0IG5hdmlnYXRpb25Mb2dvQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9LmFuY2hvcnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWJsb2NrLWVuZDoycHggc29saWQgdHJhbnNwYXJlbnR9LmFuY2hvcjpob3ZlciwuYW5jaG9yOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5hbmNob3I6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5hbmNob3I6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5pbWFnZXttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbX0uaW1hZ2V+LmNvbnRhaW5lcntwYWRkaW5nLWlubGluZS1zdGFydDowcHh9Omhvc3QoOmFjdGl2ZSkgLmFuY2hvcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2FjdGl2ZV0pIC5hbmNob3J7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTstLWNhbGNpdGUtdWktaWNvbi1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uY29udGFpbmVye21hcmdpbi1ibG9jay1zdGFydDowLjEyNXJlbTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nLWlubGluZToxcmVtO3RleHQtYWxpZ246c3RhcnR9LmhlYWRpbmd7bWFyZ2luLWlubGluZS1zdGFydDowcHg7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5kZXNjcmlwdGlvbntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9XCI7XG5cbmNvbnN0IENhbGNpdGVOYXZpZ2F0aW9uTG9nbyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5hY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ocmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50aHVtYm5haWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoZWFkaW5nLCBkZXNjcmlwdGlvbiwgdGh1bWJuYWlsIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYVwiLCB7IGNsYXNzOiBDU1MkMS5hbmNob3IsIGhyZWY6IHRoaXMuaHJlZiwgcmVsOiB0aGlzLnJlbCwgdGFyZ2V0OiB0aGlzLnRhcmdldCB9LCB0aHVtYm5haWwgJiYgaChcImltZ1wiLCB7IGFsdDogdGhpcy5sYWJlbCB8fCBcIlwiLCBjbGFzczogQ1NTJDEuaW1hZ2UsIHNyYzogdGh1bWJuYWlsIH0pLCAoaGVhZGluZyB8fCBkZXNjcmlwdGlvbikgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDEuY29udGFpbmVyIH0sIGhlYWRpbmcgJiYgKGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMuaGVhZGluZywgY2xhc3M6IENTUyQxLmhlYWRpbmcsIGtleTogQ1NTJDEuaGVhZGluZyB9LCBoZWFkaW5nKSksIGRlc2NyaXB0aW9uICYmIChoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmRlc2NyaXB0aW9uLCBjbGFzczogQ1NTJDEuZGVzY3JpcHRpb24sIGtleTogQ1NTJDEuZGVzY3JpcHRpb24gfSwgZGVzY3JpcHRpb24pKSkpKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5DYWxjaXRlTmF2aWdhdGlvbkxvZ28uc3R5bGUgPSBuYXZpZ2F0aW9uTG9nb0NzcztcblxuY29uc3QgQ1NTID0ge1xuICB0ZXh0Q29udGFpbmVyOiBcInRleHQtY29udGFpbmVyXCIsXG4gIGZ1bGxOYW1lOiBcImZ1bGwtbmFtZVwiLFxuICB1c2VybmFtZTogXCJ1c2VybmFtZVwiLFxuICBidXR0b246IFwiYnV0dG9uXCJcbn07XG5cbmNvbnN0IG5hdmlnYXRpb25Vc2VyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtZmxleDtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9Omhvc3QgLmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtZmFtaWx5OnZhcigtLWNhbGNpdGUtc2Fucy1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWJsb2NrLWVuZDoycHggc29saWQgdHJhbnNwYXJlbnR9Omhvc3QoOmhvdmVyKSAuYnV0dG9uLDpob3N0KDpmb2N1cykgLmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdCg6Zm9jdXMpIC5idXR0b257b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KDphY3RpdmUpIC5idXR0b257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfWNhbGNpdGUtYXZhdGFye3BhZGRpbmctaW5saW5lOjFyZW19Y2FsY2l0ZS1hdmF0YXJ+LnRleHQtY29udGFpbmVye3BhZGRpbmctaW5saW5lLXN0YXJ0OjBweH06aG9zdChbYWN0aXZlXSkgLmJ1dHRvbntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpOy0tY2FsY2l0ZS11aS1pY29uLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS50ZXh0LWNvbnRhaW5lcnttYXJnaW4tYmxvY2stc3RhcnQ6MC4xMjVyZW07ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nLWlubGluZToxcmVtO3RleHQtYWxpZ246c3RhcnR9LmZ1bGwtbmFtZXttYXJnaW4taW5saW5lLXN0YXJ0OjBweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0udXNlcm5hbWV7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9XCI7XG5cbmNvbnN0IENhbGNpdGVOYXZpZ2F0aW9uVXNlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5hY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mdWxsTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGV4dERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy50aHVtYm5haWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VySWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VybmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWwsIGNsYXNzOiBDU1MuYnV0dG9uIH0sIGgoXCJjYWxjaXRlLWF2YXRhclwiLCB7IFwiZnVsbC1uYW1lXCI6IHRoaXMuZnVsbE5hbWUsIGxhYmVsOiB0aGlzLmxhYmVsLCB0aHVtYm5haWw6IHRoaXMudGh1bWJuYWlsLCBcInVzZXItaWRcIjogdGhpcy51c2VySWQsIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lIH0pLCAodGhpcy5mdWxsTmFtZSB8fCB0aGlzLnVzZXJuYW1lKSAmJiAhdGhpcy50ZXh0RGlzYWJsZWQgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnRleHRDb250YWluZXIgfSwgdGhpcy5mdWxsTmFtZSAmJiAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmZ1bGxOYW1lLCBrZXk6IENTUy5mdWxsTmFtZSB9LCB0aGlzLmZ1bGxOYW1lKSksIHRoaXMudXNlcm5hbWUgJiYgKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy51c2VybmFtZSwga2V5OiBDU1MudXNlcm5hbWUgfSwgdGhpcy51c2VybmFtZSkpKSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcbkNhbGNpdGVOYXZpZ2F0aW9uVXNlci5zdHlsZSA9IG5hdmlnYXRpb25Vc2VyQ3NzO1xuXG5leHBvcnQgeyBDYWxjaXRlTmF2aWdhdGlvbiBhcyBjYWxjaXRlX25hdmlnYXRpb24sIENhbGNpdGVOYXZpZ2F0aW9uTG9nbyBhcyBjYWxjaXRlX25hdmlnYXRpb25fbG9nbywgQ2FsY2l0ZU5hdmlnYXRpb25Vc2VyIGFzIGNhbGNpdGVfbmF2aWdhdGlvbl91c2VyIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9