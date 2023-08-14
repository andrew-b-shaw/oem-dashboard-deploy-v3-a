"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-tab_4_entry_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-tab_4.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-tab_4.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_tab": () => (/* binding */ Tab),
/* harmony export */   "calcite_tab_nav": () => (/* binding */ TabNav),
/* harmony export */   "calcite_tab_title": () => (/* binding */ TabTitle),
/* harmony export */   "calcite_tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */











const tabCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}section,.container{display:none;block-size:100%;inline-size:100%}:host([scale=s]){padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-block:13px}";

const Tab = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalTabRegister = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabRegister", 6);
    this.guid = `calcite-tab-title-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.tab = undefined;
    this.selected = false;
    this.scale = "m";
    this.labeledBy = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const id = this.el.id || this.guid;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-labelledby": this.labeledBy, id: id }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container", role: "tabpanel", tabIndex: this.selected ? 0 : -1 }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  connectedCallback() {
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  componentDidLoad() {
    this.calciteInternalTabRegister.emit();
  }
  componentWillRender() {
    this.scale = this.parentTabsEl?.scale;
  }
  disconnectedCallback() {
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister", {
      detail: this.el
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    // to allow `<calcite-tabs>` to be nested we need to make sure this
    // `calciteTabChange` event was actually fired from a within the same
    // `<calcite-tabs>` that is the a parent of this tab.
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Returns the index of the component item within the tab array.
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab")), this.el);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Tab.style = tabCss;

const tabNavCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:flex}:host([scale=s]){min-block-size:1.5rem}:host([scale=m]){min-block-size:2rem}:host([scale=l]){min-block-size:2.75rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([layout=center]) .tab-nav{justify-content:space-evenly}:host([position=bottom]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position=bottom]) .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered][position=bottom]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}";

const TabNav = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTabChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTabChange", 6);
    this.calciteInternalTabChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabChange", 6);
    this.animationActiveDuration = 0.3;
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => {
      if (!this.activeIndicatorEl) {
        return;
      }
      // remove active indicator transition duration during resize to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateActiveWidth();
      this.updateOffsetPosition();
    });
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleTabFocus = (event, el, destination) => {
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.enabledTabTitles, el, destination);
      event.stopPropagation();
    };
    this.handleContainerScroll = () => {
      // remove active indicator transition duration while container is scrolling to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateOffsetPosition();
    };
    this.storageId = undefined;
    this.syncId = undefined;
    this.selectedTitle = null;
    this.scale = "m";
    this.layout = "inline";
    this.position = "bottom";
    this.bordered = false;
    this.indicatorOffset = undefined;
    this.indicatorWidth = undefined;
    this.selectedTabId = undefined;
  }
  async selectedTabIdChanged() {
    if (localStorage &&
      this.storageId &&
      this.selectedTabId !== undefined &&
      this.selectedTabId !== null) {
      localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTabId));
    }
    this.calciteInternalTabChange.emit({
      tab: this.selectedTabId
    });
    this.selectedTitle = await this.getTabTitleById(this.selectedTabId);
  }
  selectedTitleChanged() {
    this.updateOffsetPosition();
    this.updateActiveWidth();
    // reset the animation time on tab selection
    this.activeIndicatorEl.style.transitionDuration = `${this.animationActiveDuration}s`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parentTabsEl = this.el.closest("calcite-tabs");
    this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }
  componentWillLoad() {
    const storageKey = `calcite-tab-nav-${this.storageId}`;
    if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
      const storedTab = JSON.parse(localStorage.getItem(storageKey));
      this.selectedTabId = storedTab;
    }
  }
  componentWillRender() {
    const { parentTabsEl } = this;
    this.layout = parentTabsEl?.layout;
    this.position = parentTabsEl?.position;
    this.scale = parentTabsEl?.scale;
    this.bordered = parentTabsEl?.bordered;
    // fix issue with active tab-title not lining up with blue indicator
    if (this.selectedTitle) {
      this.updateOffsetPosition();
    }
  }
  componentDidRender() {
    // if every tab title is active select the first tab.
    if (this.tabTitles.length &&
      this.tabTitles.every((title) => !title.selected) &&
      !this.selectedTabId) {
      this.tabTitles[0].getTabIdentifier().then((tab) => {
        this.calciteInternalTabChange.emit({
          tab
        });
      });
    }
  }
  render() {
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const width = `${this.indicatorWidth}px`;
    const offset = `${this.indicatorOffset}px`;
    const indicatorStyle = dir !== "rtl" ? { width, left: offset } : { width, right: offset };
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { role: "tablist" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-nav", onScroll: this.handleContainerScroll,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.tabNavEl = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-nav-active-indicator-container",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.activeIndicatorContainerEl = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-nav-active-indicator", style: indicatorStyle,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.activeIndicatorEl = el) })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  focusPreviousTabHandler(event) {
    this.handleTabFocus(event, event.target, "previous");
  }
  focusNextTabHandler(event) {
    this.handleTabFocus(event, event.target, "next");
  }
  focusFirstTabHandler(event) {
    this.handleTabFocus(event, event.target, "first");
  }
  focusLastTabHandler(event) {
    this.handleTabFocus(event, event.target, "last");
  }
  internalActivateTabHandler(event) {
    this.selectedTabId = event.detail.tab
      ? event.detail.tab
      : this.getIndexOfTabTitle(event.target);
    event.stopPropagation();
  }
  activateTabHandler(event) {
    this.calciteTabChange.emit();
    event.stopPropagation();
  }
  internalCloseTabHandler(event) {
    const closedTabTitleEl = event.target;
    this.handleTabTitleClose(closedTabTitleEl);
    event.stopPropagation();
  }
  /**
   * Check for active tabs on register and update selected
   *
   * @param event
   */
  updateTabTitles(event) {
    if (event.target.selected) {
      this.selectedTabId = event.detail;
    }
  }
  globalInternalTabChangeHandler(event) {
    if (this.syncId &&
      event.target !== this.el &&
      event.target.syncId === this.syncId &&
      this.selectedTabId !== event.detail.tab) {
      this.selectedTabId = event.detail.tab;
    }
    event.stopPropagation();
  }
  iconStartChangeHandler() {
    this.updateActiveWidth();
  }
  updateOffsetPosition() {
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const navWidth = this.activeIndicatorContainerEl?.offsetWidth;
    const tabLeft = this.selectedTitle?.offsetLeft;
    const tabWidth = this.selectedTitle?.offsetWidth;
    const offsetRight = navWidth - (tabLeft + tabWidth);
    this.indicatorOffset =
      dir !== "rtl" ? tabLeft - this.tabNavEl?.scrollLeft : offsetRight + this.tabNavEl?.scrollLeft;
  }
  updateActiveWidth() {
    this.indicatorWidth = this.selectedTitle?.offsetWidth;
  }
  getIndexOfTabTitle(el, tabTitles = this.tabTitles) {
    // In most cases, since these indexes correlate with tab contents, we want to consider all tab titles.
    // However, when doing relative index operations, it makes sense to pass in this.enabledTabTitles as the 2nd arg.
    return tabTitles.indexOf(el);
  }
  async getTabTitleById(id) {
    return Promise.all(this.tabTitles.map((el) => el.getTabIdentifier())).then((ids) => {
      return this.tabTitles[ids.indexOf(id)];
    });
  }
  get tabTitles() {
    return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.z)(this.el, "calcite-tab-title");
  }
  get enabledTabTitles() {
    return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.z)(this.el, "calcite-tab-title:not([disabled])").filter((tabTitle) => !tabTitle.closed);
  }
  handleTabTitleClose(closedTabTitleEl) {
    const { tabTitles } = this;
    const visibleTabTitlesIndices = tabTitles.reduce((tabTitleIndices, tabTitle, index) => !tabTitle.closed ? [...tabTitleIndices, index] : tabTitleIndices, []);
    const totalVisibleTabTitles = visibleTabTitlesIndices.length;
    if (totalVisibleTabTitles === 1 && tabTitles[visibleTabTitlesIndices[0]].closable) {
      tabTitles[visibleTabTitlesIndices[0]].closable = false;
      this.selectedTabId = visibleTabTitlesIndices[0];
    }
    else if (totalVisibleTabTitles > 1) {
      const closedTabTitleIndex = tabTitles.findIndex((el) => el === closedTabTitleEl);
      const nextTabTitleIndex = visibleTabTitlesIndices.find((value) => value > closedTabTitleIndex);
      if (this.selectedTabId === closedTabTitleIndex) {
        this.selectedTabId = nextTabTitleIndex ? nextTabTitleIndex : totalVisibleTabTitles - 1;
      }
    }
    requestAnimationFrame(() => {
      this.updateOffsetPosition();
      this.updateActiveWidth();
      tabTitles[this.selectedTabId].focus();
    });
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "selectedTabId": ["selectedTabIdChanged"],
    "selectedTitle": ["selectedTitleChanged"]
  }; }
};
TabNav.style = tabNavCss;

const CSS = {
  closeButton: "close-button",
  container: "container",
  content: "content",
  contentHasText: "content--has-text",
  iconEnd: "icon-end",
  iconStart: "icon-start",
  iconPresent: "icon-present",
  titleIcon: "calcite-tab-title--icon"
};
const ICONS = {
  close: "x"
};

const tabTitleCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px;margin-inline-end:1.25rem}:host([layout=center][scale=s]),:host([layout=center][scale=m]),:host([layout=center][scale=l]){margin-block:0px;text-align:center;margin-inline-end:0px;flex-basis:12rem}:host([layout=center][scale=s]) .content,:host([layout=center][scale=m]) .content,:host([layout=center][scale=l]) .content{margin:auto}:host([layout=center][closable]) .content{padding-inline-start:32px}:host([layout=center][bordered][closable][scale=s]) .content{padding-inline-start:36px}:host([layout=center][bordered][closable][scale=m]) .content{padding-inline-start:40px}:host([layout=center][closable][scale=l]) .content{padding-inline-start:40px}:host([layout=center][closable][bordered][scale=l]) .content{padding-inline-start:52px}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host([closed]){display:none}.container{outline-color:transparent}:host(:focus) .container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:focus) .container:focus-within{outline-color:transparent}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){margin-inline-end:1rem}:host([scale=s]) .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){margin-inline-end:1.5rem}:host([scale=l]) .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}.content{display:flex;align-items:center;justify-content:center}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.content--has-text{padding:0.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}.close-button{display:flex;cursor:pointer;-webkit-appearance:none;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:calc(100% - 2px);background-color:var(--calcite-button-transparent-1);margin-inline-start:auto}.close-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:-1px}.close-button:focus,.close-button:hover{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2)}.close-button:active{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}.close-button calcite-icon{color:inherit}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) .container,:host([bordered]:focus) .container,:host([bordered]:active) .container{position:relative}:host([bordered]:hover) .container{background-color:var(--calcite-button-transparent-hover)}:host([closable]) .container,:host([bordered]) .container{border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([closable]) .container .close-button,:host([bordered]) .container .close-button{margin-inline:0}:host([closable]) .content{box-sizing:border-box;block-size:100%;border-block-end-color:transparent}:host([closable][position=bottom]) .container,:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-ui-border-1);border-inline-end-color:var(--calcite-ui-border-1)}:host([bordered]) .content{padding-inline:0.75rem}:host([bordered][scale=s]) .content{padding-inline:0.5rem}:host([bordered][scale=l]) .content{padding-inline:1rem}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}}";

const TabTitle = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTabsActivate = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTabsActivate", 6);
    this.calciteInternalTabsActivate = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsActivate", 6);
    this.calciteTabsClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTabsClose", 6);
    this.calciteInternalTabsClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsClose", 6);
    this.calciteInternalTabsFocusNext = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusNext", 6);
    this.calciteInternalTabsFocusPrevious = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusPrevious", 6);
    this.calciteInternalTabsFocusFirst = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusFirst", 6);
    this.calciteInternalTabsFocusLast = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusLast", 6);
    this.calciteInternalTabTitleRegister = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabTitleRegister", 6);
    this.calciteInternalTabIconChanged = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabIconChanged", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.closeClickHandler = () => {
      this.closeTabTitleAndNotify();
    };
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** watches for changing text content */
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", () => this.updateHasText());
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => {
      this.calciteInternalTabIconChanged.emit();
    });
    this.guid = `calcite-tab-title-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    this.selected = false;
    this.closable = false;
    this.closed = false;
    this.disabled = false;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.layout = undefined;
    this.position = undefined;
    this.scale = undefined;
    this.bordered = false;
    this.tab = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.controls = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = undefined;
    this.hasText = false;
  }
  selectedHandler() {
    if (this.selected) {
      this.emitActiveTab(false);
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.setupTextContentObserver();
    this.parentTabNavEl = this.el.closest("calcite-tab-nav");
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el
    }));
    this.resizeObserver?.disconnect();
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  async componentWillLoad() {
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    {
      this.updateHasText();
    }
    if (this.tab && this.selected) {
      this.emitActiveTab(false);
    }
  }
  componentWillRender() {
    if (this.parentTabsEl) {
      this.layout = this.parentTabsEl.layout;
      this.position = this.parentTabsEl.position;
      this.scale = this.parentTabsEl.scale;
      this.bordered = this.parentTabsEl.bordered;
    }
    // handle case when tab-nav is only parent
    if (!this.parentTabsEl && this.parentTabNavEl) {
      this.position = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.parentTabNavEl, "position", this.position);
      this.scale = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.parentTabNavEl, "scale", this.scale);
    }
  }
  render() {
    const { el, closed } = this;
    const id = el.id || this.guid;
    const iconStartEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: this.scale === "l" ? "m" : "s" }));
    const iconEndEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: this.scale === "l" ? "m" : "s" }));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-controls": this.controls, "aria-selected": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.selected), id: id, role: "tab", tabIndex: this.selected ? 0 : -1 }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        [CSS.iconPresent]: !!this.iconStart || !!this.iconEnd
      }, hidden: closed,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => this.resizeObserver?.observe(el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.content]: true, [CSS.contentHasText]: this.hasText } }, this.iconStart ? iconStartEl : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), this.iconEnd ? iconEndEl : null), this.renderCloseButton())));
  }
  renderCloseButton() {
    const { closable, messages } = this;
    return closable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": messages.close, class: CSS.closeButton, disabled: false, key: CSS.closeButton, onClick: this.closeClickHandler, title: messages.close, type: "button",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButtonEl = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: ICONS.close, scale: this.scale === "l" ? "m" : "s" }))) : null;
  }
  async componentDidLoad() {
    this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier());
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, () => {
      return this.selected;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  onClick() {
    if (this.disabled) {
      return;
    }
    this.emitActiveTab();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        if (!event.composedPath().includes(this.closeButtonEl)) {
          this.emitActiveTab();
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if ((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el) === "ltr") {
          this.calciteInternalTabsFocusNext.emit();
        }
        else {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if ((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el) === "ltr") {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        else {
          this.calciteInternalTabsFocusNext.emit();
        }
        break;
      case "Home":
        event.preventDefault();
        this.calciteInternalTabsFocusFirst.emit();
        break;
      case "End":
        event.preventDefault();
        this.calciteInternalTabsFocusLast.emit();
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Returns the index of the title within the `calcite-tab-nav`.
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab-title")), this.el);
  }
  /**
   * @internal
   */
  async getTabIdentifier() {
    return this.tab ? this.tab : this.getTabIndex();
  }
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  emitActiveTab(userTriggered = true) {
    if (this.disabled || this.closed) {
      return;
    }
    const payload = { tab: this.tab };
    this.calciteInternalTabsActivate.emit(payload);
    if (userTriggered) {
      // emit in the next frame to let internal events sync up
      requestAnimationFrame(() => this.calciteTabsActivate.emit());
    }
  }
  closeTabTitleAndNotify() {
    this.closed = true;
    this.calciteInternalTabsClose.emit({ tab: this.tab });
    this.calciteTabsClose.emit();
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "selected": ["selectedHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
TabTitle.style = tabTitleCss;

const SLOTS = {
  titleGroup: "title-group"
};

const tabsCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}";

const Tabs = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.layout = "inline";
    this.position = "top";
    this.scale = "m";
    this.bordered = false;
    this.titles = [];
    this.tabs = [];
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.titleGroup }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  /**
   * @param event
   * @internal
   */
  calciteInternalTabTitleRegister(event) {
    this.titles = [...this.titles, event.target];
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteTabTitleUnregister(event) {
    this.titles = this.titles.filter((el) => el !== event.detail);
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteInternalTabRegister(event) {
    this.tabs = [...this.tabs, event.target];
    this.registryHandler();
    event.stopPropagation();
  }
  /**
   * @param event
   * @internal
   */
  calciteTabUnregister(event) {
    this.tabs = this.tabs.filter((el) => el !== event.detail);
    this.registryHandler();
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   *
   * Matches up elements from the internal `tabs` and `titles` to automatically
   * update the ARIA attributes and link `<calcite-tab>` and
   * `<calcite-tab-title>` components.
   */
  async registryHandler() {
    let tabIds;
    let titleIds;
    // determine if we are using `tab` based or `index` based tab identifiers.
    if (this.tabs.some((el) => el.tab) || this.titles.some((el) => el.tab)) {
      // if we are using `tab` based identifiers sort by `tab` to account for
      // possible out of order tabs and get the id of each tab
      tabIds = this.tabs.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
      titleIds = this.titles.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
    }
    else {
      // if we are using index based tabs then the `<calcite-tab>` and
      // `<calcite-tab-title>` might have been rendered out of order so the
      // order of `this.tabs` and `this.titles` might not reflect the DOM state,
      // and might not match each other so we need to get the index of all the
      // tabs and titles in the DOM order to match them up as a source of truth
      const tabDomIndexes = await Promise.all(this.tabs.map((el) => el.getTabIndex()));
      const titleDomIndexes = await Promise.all(this.titles.map((el) => el.getTabIndex()));
      // once we have the DOM order as a source of truth we can build the
      // matching tabIds and titleIds arrays
      tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.tabs[registryIndex].id;
        return ids;
      }, []);
      titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.titles[registryIndex].id;
        return ids;
      }, []);
    }
    // pass all our new aria information to each `<calcite-tab>` and
    // `<calcite-tab-title>` which will check if they can update their internal
    // `controlled` or `labeledBy` states and re-render if necessary
    this.tabs.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
    this.titles.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Tabs.style = tabsCss;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMmM5ZTY1NTcxMzVhNzg0ZTM2MDkzZDU3ZjZjZTg5NTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEg7QUFDK0M7QUFDNUg7QUFDZTtBQUM4RDtBQUNyQztBQUNvQztBQUMxRjtBQUNGO0FBQ0o7O0FBRTNCLDhCQUE4QixHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLHVEQUF1RCxjQUFjLE1BQU0sYUFBYSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixjQUFjLGdCQUFnQixpQkFBaUIsY0FBYyxtQkFBbUIsYUFBYSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixzQkFBc0Isc0NBQXNDLGlCQUFpQixpQkFBaUIscUJBQXFCLHNDQUFz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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRTs7QUFFaEU7QUFDQSxrQ0FBa0MsdURBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Jyb3dzZXItOTliYzYyY2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS10YWJfNC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuZXhwb3J0IHsgZ2V0VXNlckFnZW50RGF0YSBhcyBhLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQsIEYgYXMgRnJhZ21lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IHggYXMgbm9kZUxpc3RUb0FycmF5LCBqIGFzIGZvY3VzRWxlbWVudEluR3JvdXAsIGIgYXMgZ2V0RWxlbWVudERpciwgeiBhcyBmaWx0ZXJEaXJlY3RDaGlsZHJlbiwgdiBhcyBnZXRFbGVtZW50UHJvcCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcblxuY29uc3QgdGFiQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW3NlbGVjdGVkXSkgc2VjdGlvbiw6aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVye2Rpc3BsYXk6YmxvY2t9Omhvc3R7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtzZWxlY3RlZF0pe2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6YXV0b31zZWN0aW9uLC5jb250YWluZXJ7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtzY2FsZT1zXSl7cGFkZGluZy1ibG9jazowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pe3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO3BhZGRpbmctYmxvY2s6MTNweH1cIjtcblxuY29uc3QgVGFiID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYlJlZ2lzdGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJSZWdpc3RlclwiLCA2KTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS10YWItdGl0bGUtJHtndWlkKCl9YDtcbiAgICB0aGlzLnRhYiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMubGFiZWxlZEJ5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuZWwuaWQgfHwgdGhpcy5ndWlkO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRoaXMubGFiZWxlZEJ5LCBpZDogaWQgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRhaW5lclwiLCByb2xlOiBcInRhYnBhbmVsXCIsIHRhYkluZGV4OiB0aGlzLnNlbGVjdGVkID8gMCA6IC0xIH0sIGgoXCJzZWN0aW9uXCIsIG51bGwsIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBhcmVudFRhYnNFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdGFic1wiKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIuZW1pdCgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgdGhpcy5zY2FsZSA9IHRoaXMucGFyZW50VGFic0VsPy5zY2FsZTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBEaXNwYXRjaGluZyB0byBib2R5IGluIG9yZGVyIHRvIGJlIGxpc3RlbmVkIGJ5IG90aGVyIGVsZW1lbnRzIHRoYXQgYXJlIHN0aWxsIGNvbm5lY3RlZCB0byB0aGUgRE9NLlxuICAgIGRvY3VtZW50LmJvZHk/LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2FsY2l0ZVRhYlVucmVnaXN0ZXJcIiwge1xuICAgICAgZGV0YWlsOiB0aGlzLmVsXG4gICAgfSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGludGVybmFsVGFiQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldFRhYnNFbCA9IGV2ZW50XG4gICAgICAuY29tcG9zZWRQYXRoKClcbiAgICAgIC5maW5kKChlbCkgPT4gZWwudGFnTmFtZSA9PT0gXCJDQUxDSVRFLVRBQlNcIik7XG4gICAgLy8gdG8gYWxsb3cgYDxjYWxjaXRlLXRhYnM+YCB0byBiZSBuZXN0ZWQgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhpc1xuICAgIC8vIGBjYWxjaXRlVGFiQ2hhbmdlYCBldmVudCB3YXMgYWN0dWFsbHkgZmlyZWQgZnJvbSBhIHdpdGhpbiB0aGUgc2FtZVxuICAgIC8vIGA8Y2FsY2l0ZS10YWJzPmAgdGhhdCBpcyB0aGUgYSBwYXJlbnQgb2YgdGhpcyB0YWIuXG4gICAgaWYgKHRhcmdldFRhYnNFbCAhPT0gdGhpcy5wYXJlbnRUYWJzRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YWIgPT09IGV2ZW50LmRldGFpbC50YWI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5nZXRUYWJJbmRleCgpLnRoZW4oKGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpbmRleCA9PT0gZXZlbnQuZGV0YWlsLnRhYjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY29tcG9uZW50IGl0ZW0gd2l0aGluIHRoZSB0YWIgYXJyYXkuXG4gICAqL1xuICBhc3luYyBnZXRUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChub2RlTGlzdFRvQXJyYXkodGhpcy5lbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoKGVsKSA9PiBlbC5tYXRjaGVzKFwiY2FsY2l0ZS10YWJcIikpLCB0aGlzLmVsKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogQHBhcmFtIHRhYklkc1xuICAgKiBAcGFyYW0gdGl0bGVJZHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyB1cGRhdGVBcmlhSW5mbyh0YWJJZHMgPSBbXSwgdGl0bGVJZHMgPSBbXSkge1xuICAgIHRoaXMubGFiZWxlZEJ5ID0gdGl0bGVJZHNbdGFiSWRzLmluZGV4T2YodGhpcy5lbC5pZCldIHx8IG51bGw7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcblRhYi5zdHlsZSA9IHRhYkNzcztcblxuY29uc3QgdGFiTmF2Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4fTpob3N0KFtzY2FsZT1zXSl7bWluLWJsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1tXSl7bWluLWJsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bF0pe21pbi1ibG9jay1zaXplOjIuNzVyZW19LnRhYi1uYXZ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7b3ZlcmZsb3c6YXV0b30udGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9yLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1pbmxpbmU6MHB4O2luc2V0LWJsb2NrLWVuZDowcHg7YmxvY2stc2l6ZTowLjEyNXJlbTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbn0udGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9ye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLWVuZDowcHg7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjAuMTI1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7dHJhbnNpdGlvbi1wcm9wZXJ0eTphbGw7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpfTpob3N0KFtsYXlvdXQ9Y2VudGVyXSkgLnRhYi1uYXZ7anVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seX06aG9zdChbcG9zaXRpb249Ym90dG9tXSkgLnRhYi1uYXYtYWN0aXZlLWluZGljYXRvcntpbnNldC1ibG9jay1lbmQ6dW5zZXQ7aW5zZXQtYmxvY2stc3RhcnQ6MHB4fTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKSAudGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9yLWNvbnRhaW5lcntpbnNldC1ibG9jay1lbmQ6dW5zZXQ7aW5zZXQtYmxvY2stc3RhcnQ6MHB4fTpob3N0KFtib3JkZXJlZF0pIC50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3ItY29udGFpbmVye2luc2V0LWJsb2NrLWVuZDp1bnNldH06aG9zdChbYm9yZGVyZWRdW3Bvc2l0aW9uPWJvdHRvbV0pIC50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3ItY29udGFpbmVye2luc2V0LWJsb2NrLWVuZDowO2luc2V0LWJsb2NrLXN0YXJ0OnVuc2V0fUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXsudGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9ye2JhY2tncm91bmQtY29sb3I6aGlnaGxpZ2h0fX1cIjtcblxuY29uc3QgVGFiTmF2ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVUYWJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUYWJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYkNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmFuaW1hdGlvbkFjdGl2ZUR1cmF0aW9uID0gMC4zO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZlSW5kaWNhdG9yRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBpbmRpY2F0b3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBkdXJpbmcgcmVzaXplIHRvIHByZXZlbnQgd29iYmxlXG4gICAgICB0aGlzLmFjdGl2ZUluZGljYXRvckVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiMHNcIjtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlV2lkdGgoKTtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0UG9zaXRpb24oKTtcbiAgICB9KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVUYWJGb2N1cyA9IChldmVudCwgZWwsIGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMuZW5hYmxlZFRhYlRpdGxlcywgZWwsIGRlc3RpbmF0aW9uKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250YWluZXJTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAvLyByZW1vdmUgYWN0aXZlIGluZGljYXRvciB0cmFuc2l0aW9uIGR1cmF0aW9uIHdoaWxlIGNvbnRhaW5lciBpcyBzY3JvbGxpbmcgdG8gcHJldmVudCB3b2JibGVcbiAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9yRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gXCIwc1wiO1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXRQb3NpdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5zdG9yYWdlSWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zeW5jSWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZFRpdGxlID0gbnVsbDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5sYXlvdXQgPSBcImlubGluZVwiO1xuICAgIHRoaXMucG9zaXRpb24gPSBcImJvdHRvbVwiO1xuICAgIHRoaXMuYm9yZGVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGljYXRvck9mZnNldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmluZGljYXRvcldpZHRoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICBhc3luYyBzZWxlY3RlZFRhYklkQ2hhbmdlZCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlICYmXG4gICAgICB0aGlzLnN0b3JhZ2VJZCAmJlxuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNhbGNpdGUtdGFiLW5hdi0ke3RoaXMuc3RvcmFnZUlkfWAsIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRUYWJJZCkpO1xuICAgIH1cbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYkNoYW5nZS5lbWl0KHtcbiAgICAgIHRhYjogdGhpcy5zZWxlY3RlZFRhYklkXG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZFRpdGxlID0gYXdhaXQgdGhpcy5nZXRUYWJUaXRsZUJ5SWQodGhpcy5zZWxlY3RlZFRhYklkKTtcbiAgfVxuICBzZWxlY3RlZFRpdGxlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVXaWR0aCgpO1xuICAgIC8vIHJlc2V0IHRoZSBhbmltYXRpb24gdGltZSBvbiB0YWIgc2VsZWN0aW9uXG4gICAgdGhpcy5hY3RpdmVJbmRpY2F0b3JFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aGlzLmFuaW1hdGlvbkFjdGl2ZUR1cmF0aW9ufXNgO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucGFyZW50VGFic0VsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10YWJzXCIpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBgY2FsY2l0ZS10YWItbmF2LSR7dGhpcy5zdG9yYWdlSWR9YDtcbiAgICBpZiAobG9jYWxTdG9yYWdlICYmIHRoaXMuc3RvcmFnZUlkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpKSB7XG4gICAgICBjb25zdCBzdG9yZWRUYWIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IHN0b3JlZFRhYjtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhcmVudFRhYnNFbCB9ID0gdGhpcztcbiAgICB0aGlzLmxheW91dCA9IHBhcmVudFRhYnNFbD8ubGF5b3V0O1xuICAgIHRoaXMucG9zaXRpb24gPSBwYXJlbnRUYWJzRWw/LnBvc2l0aW9uO1xuICAgIHRoaXMuc2NhbGUgPSBwYXJlbnRUYWJzRWw/LnNjYWxlO1xuICAgIHRoaXMuYm9yZGVyZWQgPSBwYXJlbnRUYWJzRWw/LmJvcmRlcmVkO1xuICAgIC8vIGZpeCBpc3N1ZSB3aXRoIGFjdGl2ZSB0YWItdGl0bGUgbm90IGxpbmluZyB1cCB3aXRoIGJsdWUgaW5kaWNhdG9yXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUaXRsZSkge1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgLy8gaWYgZXZlcnkgdGFiIHRpdGxlIGlzIGFjdGl2ZSBzZWxlY3QgdGhlIGZpcnN0IHRhYi5cbiAgICBpZiAodGhpcy50YWJUaXRsZXMubGVuZ3RoICYmXG4gICAgICB0aGlzLnRhYlRpdGxlcy5ldmVyeSgodGl0bGUpID0+ICF0aXRsZS5zZWxlY3RlZCkgJiZcbiAgICAgICF0aGlzLnNlbGVjdGVkVGFiSWQpIHtcbiAgICAgIHRoaXMudGFiVGl0bGVzWzBdLmdldFRhYklkZW50aWZpZXIoKS50aGVuKCh0YWIpID0+IHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgdGFiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IHdpZHRoID0gYCR7dGhpcy5pbmRpY2F0b3JXaWR0aH1weGA7XG4gICAgY29uc3Qgb2Zmc2V0ID0gYCR7dGhpcy5pbmRpY2F0b3JPZmZzZXR9cHhgO1xuICAgIGNvbnN0IGluZGljYXRvclN0eWxlID0gZGlyICE9PSBcInJ0bFwiID8geyB3aWR0aCwgbGVmdDogb2Zmc2V0IH0gOiB7IHdpZHRoLCByaWdodDogb2Zmc2V0IH07XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJ0YWJsaXN0XCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRhYi1uYXZcIiwgb25TY3JvbGw6IHRoaXMuaGFuZGxlQ29udGFpbmVyU2Nyb2xsLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMudGFiTmF2RWwgPSBlbCkgfSwgaChcInNsb3RcIiwgbnVsbCksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3ItY29udGFpbmVyXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5hY3RpdmVJbmRpY2F0b3JDb250YWluZXJFbCA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9yXCIsIHN0eWxlOiBpbmRpY2F0b3JTdHlsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmFjdGl2ZUluZGljYXRvckVsID0gZWwpIH0pKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmb2N1c1ByZXZpb3VzVGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuaGFuZGxlVGFiRm9jdXMoZXZlbnQsIGV2ZW50LnRhcmdldCwgXCJwcmV2aW91c1wiKTtcbiAgfVxuICBmb2N1c05leHRUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVUYWJGb2N1cyhldmVudCwgZXZlbnQudGFyZ2V0LCBcIm5leHRcIik7XG4gIH1cbiAgZm9jdXNGaXJzdFRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzKGV2ZW50LCBldmVudC50YXJnZXQsIFwiZmlyc3RcIik7XG4gIH1cbiAgZm9jdXNMYXN0VGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuaGFuZGxlVGFiRm9jdXMoZXZlbnQsIGV2ZW50LnRhcmdldCwgXCJsYXN0XCIpO1xuICB9XG4gIGludGVybmFsQWN0aXZhdGVUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5zZWxlY3RlZFRhYklkID0gZXZlbnQuZGV0YWlsLnRhYlxuICAgICAgPyBldmVudC5kZXRhaWwudGFiXG4gICAgICA6IHRoaXMuZ2V0SW5kZXhPZlRhYlRpdGxlKGV2ZW50LnRhcmdldCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgYWN0aXZhdGVUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5jYWxjaXRlVGFiQ2hhbmdlLmVtaXQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBpbnRlcm5hbENsb3NlVGFiSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGNsb3NlZFRhYlRpdGxlRWwgPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5oYW5kbGVUYWJUaXRsZUNsb3NlKGNsb3NlZFRhYlRpdGxlRWwpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8qKlxuICAgKiBDaGVjayBmb3IgYWN0aXZlIHRhYnMgb24gcmVnaXN0ZXIgYW5kIHVwZGF0ZSBzZWxlY3RlZFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIHVwZGF0ZVRhYlRpdGxlcyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IGV2ZW50LmRldGFpbDtcbiAgICB9XG4gIH1cbiAgZ2xvYmFsSW50ZXJuYWxUYWJDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3luY0lkICYmXG4gICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuZWwgJiZcbiAgICAgIGV2ZW50LnRhcmdldC5zeW5jSWQgPT09IHRoaXMuc3luY0lkICYmXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgIT09IGV2ZW50LmRldGFpbC50YWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IGV2ZW50LmRldGFpbC50YWI7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGljb25TdGFydENoYW5nZUhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVXaWR0aCgpO1xuICB9XG4gIHVwZGF0ZU9mZnNldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgbmF2V2lkdGggPSB0aGlzLmFjdGl2ZUluZGljYXRvckNvbnRhaW5lckVsPy5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCB0YWJMZWZ0ID0gdGhpcy5zZWxlY3RlZFRpdGxlPy5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHRhYldpZHRoID0gdGhpcy5zZWxlY3RlZFRpdGxlPy5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBvZmZzZXRSaWdodCA9IG5hdldpZHRoIC0gKHRhYkxlZnQgKyB0YWJXaWR0aCk7XG4gICAgdGhpcy5pbmRpY2F0b3JPZmZzZXQgPVxuICAgICAgZGlyICE9PSBcInJ0bFwiID8gdGFiTGVmdCAtIHRoaXMudGFiTmF2RWw/LnNjcm9sbExlZnQgOiBvZmZzZXRSaWdodCArIHRoaXMudGFiTmF2RWw/LnNjcm9sbExlZnQ7XG4gIH1cbiAgdXBkYXRlQWN0aXZlV2lkdGgoKSB7XG4gICAgdGhpcy5pbmRpY2F0b3JXaWR0aCA9IHRoaXMuc2VsZWN0ZWRUaXRsZT8ub2Zmc2V0V2lkdGg7XG4gIH1cbiAgZ2V0SW5kZXhPZlRhYlRpdGxlKGVsLCB0YWJUaXRsZXMgPSB0aGlzLnRhYlRpdGxlcykge1xuICAgIC8vIEluIG1vc3QgY2FzZXMsIHNpbmNlIHRoZXNlIGluZGV4ZXMgY29ycmVsYXRlIHdpdGggdGFiIGNvbnRlbnRzLCB3ZSB3YW50IHRvIGNvbnNpZGVyIGFsbCB0YWIgdGl0bGVzLlxuICAgIC8vIEhvd2V2ZXIsIHdoZW4gZG9pbmcgcmVsYXRpdmUgaW5kZXggb3BlcmF0aW9ucywgaXQgbWFrZXMgc2Vuc2UgdG8gcGFzcyBpbiB0aGlzLmVuYWJsZWRUYWJUaXRsZXMgYXMgdGhlIDJuZCBhcmcuXG4gICAgcmV0dXJuIHRhYlRpdGxlcy5pbmRleE9mKGVsKTtcbiAgfVxuICBhc3luYyBnZXRUYWJUaXRsZUJ5SWQoaWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy50YWJUaXRsZXMubWFwKChlbCkgPT4gZWwuZ2V0VGFiSWRlbnRpZmllcigpKSkudGhlbigoaWRzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy50YWJUaXRsZXNbaWRzLmluZGV4T2YoaWQpXTtcbiAgICB9KTtcbiAgfVxuICBnZXQgdGFiVGl0bGVzKCkge1xuICAgIHJldHVybiBmaWx0ZXJEaXJlY3RDaGlsZHJlbih0aGlzLmVsLCBcImNhbGNpdGUtdGFiLXRpdGxlXCIpO1xuICB9XG4gIGdldCBlbmFibGVkVGFiVGl0bGVzKCkge1xuICAgIHJldHVybiBmaWx0ZXJEaXJlY3RDaGlsZHJlbih0aGlzLmVsLCBcImNhbGNpdGUtdGFiLXRpdGxlOm5vdChbZGlzYWJsZWRdKVwiKS5maWx0ZXIoKHRhYlRpdGxlKSA9PiAhdGFiVGl0bGUuY2xvc2VkKTtcbiAgfVxuICBoYW5kbGVUYWJUaXRsZUNsb3NlKGNsb3NlZFRhYlRpdGxlRWwpIHtcbiAgICBjb25zdCB7IHRhYlRpdGxlcyB9ID0gdGhpcztcbiAgICBjb25zdCB2aXNpYmxlVGFiVGl0bGVzSW5kaWNlcyA9IHRhYlRpdGxlcy5yZWR1Y2UoKHRhYlRpdGxlSW5kaWNlcywgdGFiVGl0bGUsIGluZGV4KSA9PiAhdGFiVGl0bGUuY2xvc2VkID8gWy4uLnRhYlRpdGxlSW5kaWNlcywgaW5kZXhdIDogdGFiVGl0bGVJbmRpY2VzLCBbXSk7XG4gICAgY29uc3QgdG90YWxWaXNpYmxlVGFiVGl0bGVzID0gdmlzaWJsZVRhYlRpdGxlc0luZGljZXMubGVuZ3RoO1xuICAgIGlmICh0b3RhbFZpc2libGVUYWJUaXRsZXMgPT09IDEgJiYgdGFiVGl0bGVzW3Zpc2libGVUYWJUaXRsZXNJbmRpY2VzWzBdXS5jbG9zYWJsZSkge1xuICAgICAgdGFiVGl0bGVzW3Zpc2libGVUYWJUaXRsZXNJbmRpY2VzWzBdXS5jbG9zYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkID0gdmlzaWJsZVRhYlRpdGxlc0luZGljZXNbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHRvdGFsVmlzaWJsZVRhYlRpdGxlcyA+IDEpIHtcbiAgICAgIGNvbnN0IGNsb3NlZFRhYlRpdGxlSW5kZXggPSB0YWJUaXRsZXMuZmluZEluZGV4KChlbCkgPT4gZWwgPT09IGNsb3NlZFRhYlRpdGxlRWwpO1xuICAgICAgY29uc3QgbmV4dFRhYlRpdGxlSW5kZXggPSB2aXNpYmxlVGFiVGl0bGVzSW5kaWNlcy5maW5kKCh2YWx1ZSkgPT4gdmFsdWUgPiBjbG9zZWRUYWJUaXRsZUluZGV4KTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiSWQgPT09IGNsb3NlZFRhYlRpdGxlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYklkID0gbmV4dFRhYlRpdGxlSW5kZXggPyBuZXh0VGFiVGl0bGVJbmRleCA6IHRvdGFsVmlzaWJsZVRhYlRpdGxlcyAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVdpZHRoKCk7XG4gICAgICB0YWJUaXRsZXNbdGhpcy5zZWxlY3RlZFRhYklkXS5mb2N1cygpO1xuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInNlbGVjdGVkVGFiSWRcIjogW1wic2VsZWN0ZWRUYWJJZENoYW5nZWRcIl0sXG4gICAgXCJzZWxlY3RlZFRpdGxlXCI6IFtcInNlbGVjdGVkVGl0bGVDaGFuZ2VkXCJdXG4gIH07IH1cbn07XG5UYWJOYXYuc3R5bGUgPSB0YWJOYXZDc3M7XG5cbmNvbnN0IENTUyA9IHtcbiAgY2xvc2VCdXR0b246IFwiY2xvc2UtYnV0dG9uXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRIYXNUZXh0OiBcImNvbnRlbnQtLWhhcy10ZXh0XCIsXG4gIGljb25FbmQ6IFwiaWNvbi1lbmRcIixcbiAgaWNvblN0YXJ0OiBcImljb24tc3RhcnRcIixcbiAgaWNvblByZXNlbnQ6IFwiaWNvbi1wcmVzZW50XCIsXG4gIHRpdGxlSWNvbjogXCJjYWxjaXRlLXRhYi10aXRsZS0taWNvblwiXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGNsb3NlOiBcInhcIlxufTtcblxuY29uc3QgdGFiVGl0bGVDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrO2ZsZXg6MCAxIGF1dG87b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MHB4O21hcmdpbi1pbmxpbmUtZW5kOjEuMjVyZW19Omhvc3QoW2xheW91dD1jZW50ZXJdW3NjYWxlPXNdKSw6aG9zdChbbGF5b3V0PWNlbnRlcl1bc2NhbGU9bV0pLDpob3N0KFtsYXlvdXQ9Y2VudGVyXVtzY2FsZT1sXSl7bWFyZ2luLWJsb2NrOjBweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4taW5saW5lLWVuZDowcHg7ZmxleC1iYXNpczoxMnJlbX06aG9zdChbbGF5b3V0PWNlbnRlcl1bc2NhbGU9c10pIC5jb250ZW50LDpob3N0KFtsYXlvdXQ9Y2VudGVyXVtzY2FsZT1tXSkgLmNvbnRlbnQsOmhvc3QoW2xheW91dD1jZW50ZXJdW3NjYWxlPWxdKSAuY29udGVudHttYXJnaW46YXV0b306aG9zdChbbGF5b3V0PWNlbnRlcl1bY2xvc2FibGVdKSAuY29udGVudHtwYWRkaW5nLWlubGluZS1zdGFydDozMnB4fTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtib3JkZXJlZF1bY2xvc2FibGVdW3NjYWxlPXNdKSAuY29udGVudHtwYWRkaW5nLWlubGluZS1zdGFydDozNnB4fTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtib3JkZXJlZF1bY2xvc2FibGVdW3NjYWxlPW1dKSAuY29udGVudHtwYWRkaW5nLWlubGluZS1zdGFydDo0MHB4fTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtjbG9zYWJsZV1bc2NhbGU9bF0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lLXN0YXJ0OjQwcHh9Omhvc3QoW2xheW91dD1jZW50ZXJdW2Nsb3NhYmxlXVtib3JkZXJlZF1bc2NhbGU9bF0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lLXN0YXJ0OjUycHh9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjJweDtib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOnNvbGlkfTpob3N0KFtjbG9zZWRdKXtkaXNwbGF5Om5vbmV9LmNvbnRhaW5lcntvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KDpmb2N1cykgLmNvbnRhaW5lcntvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoOmZvY3VzKSAuY29udGFpbmVyOmZvY3VzLXdpdGhpbntvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KDphY3RpdmUpIGEsOmhvc3QoOmZvY3VzKSBhLDpob3N0KDpob3ZlcikgYXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmV9Omhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtkaXNhYmxlZF0pIC5jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjAuNX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW3NjYWxlPXNdKXttYXJnaW4taW5saW5lLWVuZDoxcmVtfTpob3N0KFtzY2FsZT1zXSkgLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIC5jb250ZW50e3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pe21hcmdpbi1pbmxpbmUtZW5kOjEuNXJlbX06aG9zdChbc2NhbGU9bF0pIC5jb250ZW50e3BhZGRpbmctYmxvY2s6MC42MjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19LmNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MnB4O3BhZGRpbmctaW5saW5lOjBweDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWJsb2NrLWVuZC1zdHlsZTpzb2xpZH0uY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNhbGNpdGUtdGFiLXRpdGxlLS1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1zZWxmOmNlbnRlcn0uY2FsY2l0ZS10YWItdGl0bGUtLWljb24gc3Zne3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5jb250ZW50LS1oYXMtdGV4dHtwYWRkaW5nOjAuMjVyZW19LmNvbnRlbnQtLWhhcy10ZXh0IC5jYWxjaXRlLXRhYi10aXRsZS0taWNvbi5pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbX0uY29udGVudC0taGFzLXRleHQgLmNhbGNpdGUtdGFiLXRpdGxlLS1pY29uLmljb24tZW5ke21hcmdpbi1pbmxpbmUtc3RhcnQ6MC41cmVtfS5jbG9zZS1idXR0b257ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTthbGlnbi1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztibG9jay1zaXplOmNhbGMoMTAwJSAtIDJweCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWJ1dHRvbi10cmFuc3BhcmVudC0xKTttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG99LmNsb3NlLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICk7b3V0bGluZS1vZmZzZXQ6LTFweH0uY2xvc2UtYnV0dG9uOmZvY3VzLC5jbG9zZS1idXR0b246aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5jbG9zZS1idXR0b246YWN0aXZle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0uY2xvc2UtYnV0dG9uIGNhbGNpdGUtaWNvbntjb2xvcjppbmhlcml0fTpob3N0KFtpY29uLXN0YXJ0XVtpY29uLWVuZF0pIC5jYWxjaXRlLXRhYi10aXRsZS0taWNvbjpmaXJzdC1jaGlsZHttYXJnaW4taW5saW5lLWVuZDowLjVyZW19Omhvc3QoW2JvcmRlcmVkXSl7bWFyZ2luLWlubGluZS1lbmQ6MH06aG9zdChbYm9yZGVyZWRdW3NlbGVjdGVkXSl7Ym94LXNoYWRvdzppbnNldCAwcHggLTJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2JvcmRlcmVkXVtzZWxlY3RlZF1bcG9zaXRpb249Ym90dG9tXSl7Ym94LXNoYWRvdzppbnNldCAwIDJweCAwIHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbYm9yZGVyZWRdOmhvdmVyKSAuY29udGFpbmVyLDpob3N0KFtib3JkZXJlZF06Zm9jdXMpIC5jb250YWluZXIsOmhvc3QoW2JvcmRlcmVkXTphY3RpdmUpIC5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9Omhvc3QoW2JvcmRlcmVkXTpob3ZlcikgLmNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtYnV0dG9uLXRyYW5zcGFyZW50LWhvdmVyKX06aG9zdChbY2xvc2FibGVdKSAuY29udGFpbmVyLDpob3N0KFtib3JkZXJlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWlubGluZS1zdGFydDoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWlubGluZS1lbmQ6MXB4IHNvbGlkIHRyYW5zcGFyZW50fTpob3N0KFtjbG9zYWJsZV0pIC5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiw6aG9zdChbYm9yZGVyZWRdKSAuY29udGFpbmVyIC5jbG9zZS1idXR0b257bWFyZ2luLWlubGluZTowfTpob3N0KFtjbG9zYWJsZV0pIC5jb250ZW50e2JveC1zaXppbmc6Ym9yZGVyLWJveDtibG9jay1zaXplOjEwMCU7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp0cmFuc3BhcmVudH06aG9zdChbY2xvc2FibGVdW3Bvc2l0aW9uPWJvdHRvbV0pIC5jb250YWluZXIsOmhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTp1bnNldH06aG9zdChbc2VsZWN0ZWRdW2JvcmRlcmVkXSkgLmNvbnRhaW5lcntib3JkZXItaW5saW5lLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpO2JvcmRlci1pbmxpbmUtZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0KFtib3JkZXJlZF0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lOjAuNzVyZW19Omhvc3QoW2JvcmRlcmVkXVtzY2FsZT1zXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmU6MC41cmVtfTpob3N0KFtib3JkZXJlZF1bc2NhbGU9bF0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lOjFyZW19QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0e291dGxpbmUtd2lkdGg6MDtvdXRsaW5lLW9mZnNldDowfTpob3N0KDpmb2N1cykgLmNvbnRhaW5lcntvdXRsaW5lLWNvbG9yOmhpZ2hsaWdodH06aG9zdChbYm9yZGVyZWRdKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1lbmQtc3R5bGU6c29saWR9Omhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTpzb2xpZH06aG9zdChbYm9yZGVyZWRdW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stZW5kLXN0eWxlOm5vbmV9Omhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6bm9uZX19XCI7XG5cbmNvbnN0IFRhYlRpdGxlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVUYWJzQWN0aXZhdGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUYWJzQWN0aXZhdGVcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzQWN0aXZhdGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNBY3RpdmF0ZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVUYWJzQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUYWJzQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c05leHQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c05leHRcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNQcmV2aW91cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXNcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNGaXJzdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzRmlyc3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNMYXN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNMYXN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiVGl0bGVSZWdpc3RlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFiVGl0bGVSZWdpc3RlclwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYkljb25DaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJJY29uQ2hhbmdlZFwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5jbG9zZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VUYWJUaXRsZUFuZE5vdGlmeSgpO1xuICAgIH07XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgU3RhdGUvUHJvcHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKiogd2F0Y2hlcyBmb3IgY2hhbmdpbmcgdGV4dCBjb250ZW50ICovXG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnVwZGF0ZUhhc1RleHQoKSk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiSWNvbkNoYW5nZWQuZW1pdCgpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXRhYi10aXRsZS0ke2d1aWQoKX1gO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pY29uRW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXlvdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYm9yZGVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRhYiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRyb2xzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzVGV4dCA9IGZhbHNlO1xuICB9XG4gIHNlbGVjdGVkSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5lbWl0QWN0aXZlVGFiKGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnNldHVwVGV4dENvbnRlbnRPYnNlcnZlcigpO1xuICAgIHRoaXMucGFyZW50VGFiTmF2RWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRhYi1uYXZcIik7XG4gICAgdGhpcy5wYXJlbnRUYWJzRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRhYnNcIik7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgLy8gRGlzcGF0Y2hpbmcgdG8gYm9keSBpbiBvcmRlciB0byBiZSBsaXN0ZW5lZCBieSBvdGhlciBlbGVtZW50cyB0aGF0IGFyZSBzdGlsbCBjb25uZWN0ZWQgdG8gdGhlIERPTS5cbiAgICBkb2N1bWVudC5ib2R5Py5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNhbGNpdGVUYWJUaXRsZVVucmVnaXN0ZXJcIiwge1xuICAgICAgZGV0YWlsOiB0aGlzLmVsXG4gICAgfSkpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICB7XG4gICAgICB0aGlzLnVwZGF0ZUhhc1RleHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuZW1pdEFjdGl2ZVRhYihmYWxzZSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50VGFic0VsKSB7XG4gICAgICB0aGlzLmxheW91dCA9IHRoaXMucGFyZW50VGFic0VsLmxheW91dDtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBhcmVudFRhYnNFbC5wb3NpdGlvbjtcbiAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnBhcmVudFRhYnNFbC5zY2FsZTtcbiAgICAgIHRoaXMuYm9yZGVyZWQgPSB0aGlzLnBhcmVudFRhYnNFbC5ib3JkZXJlZDtcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNhc2Ugd2hlbiB0YWItbmF2IGlzIG9ubHkgcGFyZW50XG4gICAgaWYgKCF0aGlzLnBhcmVudFRhYnNFbCAmJiB0aGlzLnBhcmVudFRhYk5hdkVsKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RWxlbWVudFByb3AodGhpcy5wYXJlbnRUYWJOYXZFbCwgXCJwb3NpdGlvblwiLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc2NhbGUgPSBnZXRFbGVtZW50UHJvcCh0aGlzLnBhcmVudFRhYk5hdkVsLCBcInNjYWxlXCIsIHRoaXMuc2NhbGUpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgY2xvc2VkIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gZWwuaWQgfHwgdGhpcy5ndWlkO1xuICAgIGNvbnN0IGljb25TdGFydEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogeyBbQ1NTLnRpdGxlSWNvbl06IHRydWUsIFtDU1MuaWNvblN0YXJ0XTogdHJ1ZSB9LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsID09PSBcInN0YXJ0XCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvblN0YXJ0LCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICBjb25zdCBpY29uRW5kRWwgPSAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiB7IFtDU1MudGl0bGVJY29uXTogdHJ1ZSwgW0NTUy5pY29uRW5kXTogdHJ1ZSB9LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsID09PSBcImVuZFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25FbmQsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1jb250cm9sc1wiOiB0aGlzLmNvbnRyb2xzLCBcImFyaWEtc2VsZWN0ZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLnNlbGVjdGVkKSwgaWQ6IGlkLCByb2xlOiBcInRhYlwiLCB0YWJJbmRleDogdGhpcy5zZWxlY3RlZCA/IDAgOiAtMSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgICBbQ1NTLmljb25QcmVzZW50XTogISF0aGlzLmljb25TdGFydCB8fCAhIXRoaXMuaWNvbkVuZFxuICAgICAgfSwgaGlkZGVuOiBjbG9zZWQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5jb250ZW50XTogdHJ1ZSwgW0NTUy5jb250ZW50SGFzVGV4dF06IHRoaXMuaGFzVGV4dCB9IH0sIHRoaXMuaWNvblN0YXJ0ID8gaWNvblN0YXJ0RWwgOiBudWxsLCBoKFwic2xvdFwiLCBudWxsKSwgdGhpcy5pY29uRW5kID8gaWNvbkVuZEVsIDogbnVsbCksIHRoaXMucmVuZGVyQ2xvc2VCdXR0b24oKSkpKTtcbiAgfVxuICByZW5kZXJDbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCB7IGNsb3NhYmxlLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICByZXR1cm4gY2xvc2FibGUgPyAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy5jbG9zZSwgY2xhc3M6IENTUy5jbG9zZUJ1dHRvbiwgZGlzYWJsZWQ6IGZhbHNlLCBrZXk6IENTUy5jbG9zZUJ1dHRvbiwgb25DbGljazogdGhpcy5jbG9zZUNsaWNrSGFuZGxlciwgdGl0bGU6IG1lc3NhZ2VzLmNsb3NlLCB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuY2xvc2VCdXR0b25FbCA9IGVsKSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogSUNPTlMuY2xvc2UsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKSA6IG51bGw7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXIuZW1pdChhd2FpdCB0aGlzLmdldFRhYklkZW50aWZpZXIoKSk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzLCAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgICB9KTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbnRlcm5hbFRhYkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRUYWJzRWwgPSBldmVudFxuICAgICAgLmNvbXBvc2VkUGF0aCgpXG4gICAgICAuZmluZCgoZWwpID0+IGVsLnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1UQUJTXCIpO1xuICAgIGlmICh0YXJnZXRUYWJzRWwgIT09IHRoaXMucGFyZW50VGFic0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYikge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFiID09PSBldmVudC5kZXRhaWwudGFiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0VGFiSW5kZXgoKS50aGVuKChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gaW5kZXggPT09IGV2ZW50LmRldGFpbC50YWI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXRBY3RpdmVUYWIoKTtcbiAgfVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlIFwiIFwiOlxuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIGlmICghZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5jbG9zZUJ1dHRvbkVsKSkge1xuICAgICAgICAgIHRoaXMuZW1pdEFjdGl2ZVRhYigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZ2V0RWxlbWVudERpcih0aGlzLmVsKSA9PT0gXCJsdHJcIikge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTmV4dC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNQcmV2aW91cy5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChnZXRFbGVtZW50RGlyKHRoaXMuZWwpID09PSBcImx0clwiKSB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNQcmV2aW91cy5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNOZXh0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzRmlyc3QuZW1pdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNMYXN0LmVtaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSB0aXRsZSB3aXRoaW4gdGhlIGBjYWxjaXRlLXRhYi1uYXZgLlxuICAgKi9cbiAgYXN5bmMgZ2V0VGFiSW5kZXgoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwobm9kZUxpc3RUb0FycmF5KHRoaXMuZWwucGFyZW50RWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKChlbCkgPT4gZWwubWF0Y2hlcyhcImNhbGNpdGUtdGFiLXRpdGxlXCIpKSwgdGhpcy5lbCk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgZ2V0VGFiSWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy50YWIgPyB0aGlzLnRhYiA6IHRoaXMuZ2V0VGFiSW5kZXgoKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHRhYklkc1xuICAgKiBAcGFyYW0gdGl0bGVJZHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyB1cGRhdGVBcmlhSW5mbyh0YWJJZHMgPSBbXSwgdGl0bGVJZHMgPSBbXSkge1xuICAgIHRoaXMuY29udHJvbHMgPSB0YWJJZHNbdGl0bGVJZHMuaW5kZXhPZih0aGlzLmVsLmlkKV0gfHwgbnVsbDtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIHVwZGF0ZUhhc1RleHQoKSB7XG4gICAgdGhpcy5oYXNUZXh0ID0gdGhpcy5lbC50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoID4gMDtcbiAgfVxuICBzZXR1cFRleHRDb250ZW50T2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG4gIGVtaXRBY3RpdmVUYWIodXNlclRyaWdnZXJlZCA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXlsb2FkID0geyB0YWI6IHRoaXMudGFiIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzQWN0aXZhdGUuZW1pdChwYXlsb2FkKTtcbiAgICBpZiAodXNlclRyaWdnZXJlZCkge1xuICAgICAgLy8gZW1pdCBpbiB0aGUgbmV4dCBmcmFtZSB0byBsZXQgaW50ZXJuYWwgZXZlbnRzIHN5bmMgdXBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmNhbGNpdGVUYWJzQWN0aXZhdGUuZW1pdCgpKTtcbiAgICB9XG4gIH1cbiAgY2xvc2VUYWJUaXRsZUFuZE5vdGlmeSgpIHtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzQ2xvc2UuZW1pdCh7IHRhYjogdGhpcy50YWIgfSk7XG4gICAgdGhpcy5jYWxjaXRlVGFic0Nsb3NlLmVtaXQoKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic2VsZWN0ZWRcIjogW1wic2VsZWN0ZWRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuVGFiVGl0bGUuc3R5bGUgPSB0YWJUaXRsZUNzcztcblxuY29uc3QgU0xPVFMgPSB7XG4gIHRpdGxlR3JvdXA6IFwidGl0bGUtZ3JvdXBcIlxufTtcblxuY29uc3QgdGFic0NzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoW2JvcmRlcmVkXSl7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtib3JkZXJlZF06bm90KFtwb3NpdGlvbj1ib3R0b21dKSkgOjpzbG90dGVkKGNhbGNpdGUtdGFiLW5hdil7bWFyZ2luLWJsb2NrLWVuZDotMXB4fTpob3N0KFtib3JkZXJlZF1bcG9zaXRpb249Ym90dG9tXSl7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpLCBpbnNldCAwIC0xcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdChbYm9yZGVyZWRdKSBzZWN0aW9ue2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPXNdKSBzZWN0aW9ue3BhZGRpbmc6MC43NXJlbX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPW1dKSBzZWN0aW9ue3BhZGRpbmc6MC41cmVtfTpob3N0KFtib3JkZXJlZF1bc2NhbGU9bF0pIHNlY3Rpb257cGFkZGluZzoxcmVtfTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7Ym9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOnNvbGlkfTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKSBzZWN0aW9ue2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2JvcmRlci1ibG9jay1zdGFydC13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdChbcG9zaXRpb249Ym90dG9tXTpub3QoW2JvcmRlcmVkXSkpIHNlY3Rpb257Ym9yZGVyLWJsb2NrLWVuZC1zdHlsZTpzb2xpZH1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7Omhvc3QoW2JvcmRlcmVkXSkgc2VjdGlvbntib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4fTpob3N0KFtwb3NpdGlvbj1ib3R0b21dW2JvcmRlcmVkXSkgc2VjdGlvbntib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MXB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fX1cIjtcblxuY29uc3QgVGFicyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5sYXlvdXQgPSBcImlubGluZVwiO1xuICAgIHRoaXMucG9zaXRpb24gPSBcInRvcFwiO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmJvcmRlcmVkID0gZmFsc2U7XG4gICAgdGhpcy50aXRsZXMgPSBbXTtcbiAgICB0aGlzLnRhYnMgPSBbXTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRpdGxlR3JvdXAgfSksIGgoXCJzZWN0aW9uXCIsIG51bGwsIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZXMgPSBbLi4udGhpcy50aXRsZXMsIGV2ZW50LnRhcmdldF07XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZVRhYlRpdGxlVW5yZWdpc3RlcihldmVudCkge1xuICAgIHRoaXMudGl0bGVzID0gdGhpcy50aXRsZXMuZmlsdGVyKChlbCkgPT4gZWwgIT09IGV2ZW50LmRldGFpbCk7XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICB0aGlzLnRhYnMgPSBbLi4udGhpcy50YWJzLCBldmVudC50YXJnZXRdO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNhbGNpdGVUYWJVbnJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50YWJzID0gdGhpcy50YWJzLmZpbHRlcigoZWwpID0+IGVsICE9PSBldmVudC5kZXRhaWwpO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqXG4gICAqIE1hdGNoZXMgdXAgZWxlbWVudHMgZnJvbSB0aGUgaW50ZXJuYWwgYHRhYnNgIGFuZCBgdGl0bGVzYCB0byBhdXRvbWF0aWNhbGx5XG4gICAqIHVwZGF0ZSB0aGUgQVJJQSBhdHRyaWJ1dGVzIGFuZCBsaW5rIGA8Y2FsY2l0ZS10YWI+YCBhbmRcbiAgICogYDxjYWxjaXRlLXRhYi10aXRsZT5gIGNvbXBvbmVudHMuXG4gICAqL1xuICBhc3luYyByZWdpc3RyeUhhbmRsZXIoKSB7XG4gICAgbGV0IHRhYklkcztcbiAgICBsZXQgdGl0bGVJZHM7XG4gICAgLy8gZGV0ZXJtaW5lIGlmIHdlIGFyZSB1c2luZyBgdGFiYCBiYXNlZCBvciBgaW5kZXhgIGJhc2VkIHRhYiBpZGVudGlmaWVycy5cbiAgICBpZiAodGhpcy50YWJzLnNvbWUoKGVsKSA9PiBlbC50YWIpIHx8IHRoaXMudGl0bGVzLnNvbWUoKGVsKSA9PiBlbC50YWIpKSB7XG4gICAgICAvLyBpZiB3ZSBhcmUgdXNpbmcgYHRhYmAgYmFzZWQgaWRlbnRpZmllcnMgc29ydCBieSBgdGFiYCB0byBhY2NvdW50IGZvclxuICAgICAgLy8gcG9zc2libGUgb3V0IG9mIG9yZGVyIHRhYnMgYW5kIGdldCB0aGUgaWQgb2YgZWFjaCB0YWJcbiAgICAgIHRhYklkcyA9IHRoaXMudGFicy5zb3J0KChhLCBiKSA9PiBhLnRhYi5sb2NhbGVDb21wYXJlKGIudGFiKSkubWFwKChlbCkgPT4gZWwuaWQpO1xuICAgICAgdGl0bGVJZHMgPSB0aGlzLnRpdGxlcy5zb3J0KChhLCBiKSA9PiBhLnRhYi5sb2NhbGVDb21wYXJlKGIudGFiKSkubWFwKChlbCkgPT4gZWwuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIHdlIGFyZSB1c2luZyBpbmRleCBiYXNlZCB0YWJzIHRoZW4gdGhlIGA8Y2FsY2l0ZS10YWI+YCBhbmRcbiAgICAgIC8vIGA8Y2FsY2l0ZS10YWItdGl0bGU+YCBtaWdodCBoYXZlIGJlZW4gcmVuZGVyZWQgb3V0IG9mIG9yZGVyIHNvIHRoZVxuICAgICAgLy8gb3JkZXIgb2YgYHRoaXMudGFic2AgYW5kIGB0aGlzLnRpdGxlc2AgbWlnaHQgbm90IHJlZmxlY3QgdGhlIERPTSBzdGF0ZSxcbiAgICAgIC8vIGFuZCBtaWdodCBub3QgbWF0Y2ggZWFjaCBvdGhlciBzbyB3ZSBuZWVkIHRvIGdldCB0aGUgaW5kZXggb2YgYWxsIHRoZVxuICAgICAgLy8gdGFicyBhbmQgdGl0bGVzIGluIHRoZSBET00gb3JkZXIgdG8gbWF0Y2ggdGhlbSB1cCBhcyBhIHNvdXJjZSBvZiB0cnV0aFxuICAgICAgY29uc3QgdGFiRG9tSW5kZXhlcyA9IGF3YWl0IFByb21pc2UuYWxsKHRoaXMudGFicy5tYXAoKGVsKSA9PiBlbC5nZXRUYWJJbmRleCgpKSk7XG4gICAgICBjb25zdCB0aXRsZURvbUluZGV4ZXMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLnRpdGxlcy5tYXAoKGVsKSA9PiBlbC5nZXRUYWJJbmRleCgpKSk7XG4gICAgICAvLyBvbmNlIHdlIGhhdmUgdGhlIERPTSBvcmRlciBhcyBhIHNvdXJjZSBvZiB0cnV0aCB3ZSBjYW4gYnVpbGQgdGhlXG4gICAgICAvLyBtYXRjaGluZyB0YWJJZHMgYW5kIHRpdGxlSWRzIGFycmF5c1xuICAgICAgdGFiSWRzID0gdGFiRG9tSW5kZXhlcy5yZWR1Y2UoKGlkcywgaW5kZXhJbkRPTSwgcmVnaXN0cnlJbmRleCkgPT4ge1xuICAgICAgICBpZHNbaW5kZXhJbkRPTV0gPSB0aGlzLnRhYnNbcmVnaXN0cnlJbmRleF0uaWQ7XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgICB9LCBbXSk7XG4gICAgICB0aXRsZUlkcyA9IHRpdGxlRG9tSW5kZXhlcy5yZWR1Y2UoKGlkcywgaW5kZXhJbkRPTSwgcmVnaXN0cnlJbmRleCkgPT4ge1xuICAgICAgICBpZHNbaW5kZXhJbkRPTV0gPSB0aGlzLnRpdGxlc1tyZWdpc3RyeUluZGV4XS5pZDtcbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgLy8gcGFzcyBhbGwgb3VyIG5ldyBhcmlhIGluZm9ybWF0aW9uIHRvIGVhY2ggYDxjYWxjaXRlLXRhYj5gIGFuZFxuICAgIC8vIGA8Y2FsY2l0ZS10YWItdGl0bGU+YCB3aGljaCB3aWxsIGNoZWNrIGlmIHRoZXkgY2FuIHVwZGF0ZSB0aGVpciBpbnRlcm5hbFxuICAgIC8vIGBjb250cm9sbGVkYCBvciBgbGFiZWxlZEJ5YCBzdGF0ZXMgYW5kIHJlLXJlbmRlciBpZiBuZWNlc3NhcnlcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgoZWwpID0+IGVsLnVwZGF0ZUFyaWFJbmZvKHRhYklkcywgdGl0bGVJZHMpKTtcbiAgICB0aGlzLnRpdGxlcy5mb3JFYWNoKChlbCkgPT4gZWwudXBkYXRlQXJpYUluZm8odGFiSWRzLCB0aXRsZUlkcykpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5UYWJzLnN0eWxlID0gdGFic0NzcztcblxuZXhwb3J0IHsgVGFiIGFzIGNhbGNpdGVfdGFiLCBUYWJOYXYgYXMgY2FsY2l0ZV90YWJfbmF2LCBUYWJUaXRsZSBhcyBjYWxjaXRlX3RhYl90aXRsZSwgVGFicyBhcyBjYWxjaXRlX3RhYnMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGdldFVzZXJBZ2VudFN0cmluZyB9IGZyb20gJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==