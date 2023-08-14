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
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.effectiveLocale);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMTFjZDhiMTQyZjcwMjA0MTAwZTVlNmFhMGI1Nzc0YzkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEg7QUFDK0M7QUFDNUg7QUFDZTtBQUM4RDtBQUNyQztBQUNvQztBQUMxRjtBQUNGO0FBQ0o7O0FBRTNCLDhCQUE4QixHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLHVEQUF1RCxjQUFjLE1BQU0sYUFBYSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixjQUFjLGdCQUFnQixpQkFBaUIsY0FBYyxtQkFBbUIsYUFBYSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixzQkFBc0Isc0NBQXNDLGlCQUFpQixpQkFBaUIscUJBQXFCLHNDQUFz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QUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Jyb3dzZXItOTliYzYyY2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS10YWJfNC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS90OW4tZmFjMTMzOTQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbmV4cG9ydCB7IGdldFVzZXJBZ2VudERhdGEgYXMgYSwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50LCBGIGFzIEZyYWdtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyB4IGFzIG5vZGVMaXN0VG9BcnJheSwgaiBhcyBmb2N1c0VsZW1lbnRJbkdyb3VwLCBiIGFzIGdldEVsZW1lbnREaXIsIHogYXMgZmlsdGVyRGlyZWN0Q2hpbGRyZW4sIHYgYXMgZ2V0RWxlbWVudFByb3AsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIGQgYXMgZGlzY29ubmVjdEludGVyYWN0aXZlLCB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgdSBhcyB1cGRhdGVNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5cbmNvbnN0IHRhYkNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtzZWxlY3RlZF0pIHNlY3Rpb24sOmhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntkaXNwbGF5OmJsb2NrfTpob3N0e2Rpc3BsYXk6bm9uZTtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJX06aG9zdChbc2VsZWN0ZWRdKXtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmF1dG99c2VjdGlvbiwuY29udGFpbmVye2Rpc3BsYXk6bm9uZTtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJX06aG9zdChbc2NhbGU9c10pe3BhZGRpbmctYmxvY2s6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKXtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPWxdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTtwYWRkaW5nLWJsb2NrOjEzcHh9XCI7XG5cbmNvbnN0IFRhYiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJSZWdpc3RlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXJcIiwgNik7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtdGFiLXRpdGxlLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy50YWIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmxhYmVsZWRCeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiB0aGlzLmxhYmVsZWRCeSwgaWQ6IGlkIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250YWluZXJcIiwgcm9sZTogXCJ0YWJwYW5lbFwiLCB0YWJJbmRleDogdGhpcy5zZWxlY3RlZCA/IDAgOiAtMSB9LCBoKFwic2VjdGlvblwiLCBudWxsLCBoKFwic2xvdFwiLCBudWxsKSkpKSk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5wYXJlbnRUYWJzRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRhYnNcIik7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYlJlZ2lzdGVyLmVtaXQoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIHRoaXMuc2NhbGUgPSB0aGlzLnBhcmVudFRhYnNFbD8uc2NhbGU7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gRGlzcGF0Y2hpbmcgdG8gYm9keSBpbiBvcmRlciB0byBiZSBsaXN0ZW5lZCBieSBvdGhlciBlbGVtZW50cyB0aGF0IGFyZSBzdGlsbCBjb25uZWN0ZWQgdG8gdGhlIERPTS5cbiAgICBkb2N1bWVudC5ib2R5Py5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNhbGNpdGVUYWJVbnJlZ2lzdGVyXCIsIHtcbiAgICAgIGRldGFpbDogdGhpcy5lbFxuICAgIH0pKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbnRlcm5hbFRhYkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRUYWJzRWwgPSBldmVudFxuICAgICAgLmNvbXBvc2VkUGF0aCgpXG4gICAgICAuZmluZCgoZWwpID0+IGVsLnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1UQUJTXCIpO1xuICAgIC8vIHRvIGFsbG93IGA8Y2FsY2l0ZS10YWJzPmAgdG8gYmUgbmVzdGVkIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoaXNcbiAgICAvLyBgY2FsY2l0ZVRhYkNoYW5nZWAgZXZlbnQgd2FzIGFjdHVhbGx5IGZpcmVkIGZyb20gYSB3aXRoaW4gdGhlIHNhbWVcbiAgICAvLyBgPGNhbGNpdGUtdGFicz5gIHRoYXQgaXMgdGhlIGEgcGFyZW50IG9mIHRoaXMgdGFiLlxuICAgIGlmICh0YXJnZXRUYWJzRWwgIT09IHRoaXMucGFyZW50VGFic0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYikge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFiID09PSBldmVudC5kZXRhaWwudGFiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0VGFiSW5kZXgoKS50aGVuKChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gaW5kZXggPT09IGV2ZW50LmRldGFpbC50YWI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGNvbXBvbmVudCBpdGVtIHdpdGhpbiB0aGUgdGFiIGFycmF5LlxuICAgKi9cbiAgYXN5bmMgZ2V0VGFiSW5kZXgoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwobm9kZUxpc3RUb0FycmF5KHRoaXMuZWwucGFyZW50RWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKChlbCkgPT4gZWwubWF0Y2hlcyhcImNhbGNpdGUtdGFiXCIpKSwgdGhpcy5lbCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIEBwYXJhbSB0YWJJZHNcbiAgICogQHBhcmFtIHRpdGxlSWRzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlQXJpYUluZm8odGFiSWRzID0gW10sIHRpdGxlSWRzID0gW10pIHtcbiAgICB0aGlzLmxhYmVsZWRCeSA9IHRpdGxlSWRzW3RhYklkcy5pbmRleE9mKHRoaXMuZWwuaWQpXSB8fCBudWxsO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5UYWIuc3R5bGUgPSB0YWJDc3M7XG5cbmNvbnN0IHRhYk5hdkNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleH06aG9zdChbc2NhbGU9c10pe21pbi1ibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bV0pe21pbi1ibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPWxdKXttaW4tYmxvY2stc2l6ZToyLjc1cmVtfS50YWItbmF2e2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O292ZXJmbG93OmF1dG99LnRhYi1uYXYtYWN0aXZlLWluZGljYXRvci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtaW5saW5lOjBweDtpbnNldC1ibG9jay1lbmQ6MHB4O2Jsb2NrLXNpemU6MC4xMjVyZW07aW5saW5lLXNpemU6MTAwJTtvdmVyZmxvdzpoaWRkZW59LnRhYi1uYXYtYWN0aXZlLWluZGljYXRvcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1lbmQ6MHB4O2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZTowLjEyNXJlbTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3RyYW5zaXRpb24tcHJvcGVydHk6YWxsO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKX06aG9zdChbbGF5b3V0PWNlbnRlcl0pIC50YWItbmF2e2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHl9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pIC50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3J7aW5zZXQtYmxvY2stZW5kOnVuc2V0O2luc2V0LWJsb2NrLXN0YXJ0OjBweH06aG9zdChbcG9zaXRpb249Ym90dG9tXSkgLnRhYi1uYXYtYWN0aXZlLWluZGljYXRvci1jb250YWluZXJ7aW5zZXQtYmxvY2stZW5kOnVuc2V0O2luc2V0LWJsb2NrLXN0YXJ0OjBweH06aG9zdChbYm9yZGVyZWRdKSAudGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9yLWNvbnRhaW5lcntpbnNldC1ibG9jay1lbmQ6dW5zZXR9Omhvc3QoW2JvcmRlcmVkXVtwb3NpdGlvbj1ib3R0b21dKSAudGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9yLWNvbnRhaW5lcntpbnNldC1ibG9jay1lbmQ6MDtpbnNldC1ibG9jay1zdGFydDp1bnNldH1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7LnRhYi1uYXYtYWN0aXZlLWluZGljYXRvcntiYWNrZ3JvdW5kLWNvbG9yOmhpZ2hsaWdodH19XCI7XG5cbmNvbnN0IFRhYk5hdiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlVGFiQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGFiQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5hbmltYXRpb25BY3RpdmVEdXJhdGlvbiA9IDAuMztcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2ZUluZGljYXRvckVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgaW5kaWNhdG9yIHRyYW5zaXRpb24gZHVyYXRpb24gZHVyaW5nIHJlc2l6ZSB0byBwcmV2ZW50IHdvYmJsZVxuICAgICAgdGhpcy5hY3RpdmVJbmRpY2F0b3JFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjBzXCI7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVdpZHRoKCk7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgfSk7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlVGFiRm9jdXMgPSAoZXZlbnQsIGVsLCBkZXN0aW5hdGlvbikgPT4ge1xuICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLmVuYWJsZWRUYWJUaXRsZXMsIGVsLCBkZXN0aW5hdGlvbik7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ29udGFpbmVyU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBpbmRpY2F0b3IgdHJhbnNpdGlvbiBkdXJhdGlvbiB3aGlsZSBjb250YWluZXIgaXMgc2Nyb2xsaW5nIHRvIHByZXZlbnQgd29iYmxlXG4gICAgICB0aGlzLmFjdGl2ZUluZGljYXRvckVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiMHNcIjtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0UG9zaXRpb24oKTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmFnZUlkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3luY0lkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWRUaXRsZSA9IG51bGw7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMubGF5b3V0ID0gXCJpbmxpbmVcIjtcbiAgICB0aGlzLnBvc2l0aW9uID0gXCJib3R0b21cIjtcbiAgICB0aGlzLmJvcmRlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRpY2F0b3JPZmZzZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbmRpY2F0b3JXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgYXN5bmMgc2VsZWN0ZWRUYWJJZENoYW5nZWQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSAmJlxuICAgICAgdGhpcy5zdG9yYWdlSWQgJiZcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjYWxjaXRlLXRhYi1uYXYtJHt0aGlzLnN0b3JhZ2VJZH1gLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkVGFiSWQpKTtcbiAgICB9XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJDaGFuZ2UuZW1pdCh7XG4gICAgICB0YWI6IHRoaXMuc2VsZWN0ZWRUYWJJZFxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRUaXRsZSA9IGF3YWl0IHRoaXMuZ2V0VGFiVGl0bGVCeUlkKHRoaXMuc2VsZWN0ZWRUYWJJZCk7XG4gIH1cbiAgc2VsZWN0ZWRUaXRsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy51cGRhdGVPZmZzZXRQb3NpdGlvbigpO1xuICAgIHRoaXMudXBkYXRlQWN0aXZlV2lkdGgoKTtcbiAgICAvLyByZXNldCB0aGUgYW5pbWF0aW9uIHRpbWUgb24gdGFiIHNlbGVjdGlvblxuICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9yRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGhpcy5hbmltYXRpb25BY3RpdmVEdXJhdGlvbn1zYDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBhcmVudFRhYnNFbCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdGFic1wiKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBjb25zdCBzdG9yYWdlS2V5ID0gYGNhbGNpdGUtdGFiLW5hdi0ke3RoaXMuc3RvcmFnZUlkfWA7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSAmJiB0aGlzLnN0b3JhZ2VJZCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSkge1xuICAgICAgY29uc3Qgc3RvcmVkVGFiID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSk7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBzdG9yZWRUYWI7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXJlbnRUYWJzRWwgfSA9IHRoaXM7XG4gICAgdGhpcy5sYXlvdXQgPSBwYXJlbnRUYWJzRWw/LmxheW91dDtcbiAgICB0aGlzLnBvc2l0aW9uID0gcGFyZW50VGFic0VsPy5wb3NpdGlvbjtcbiAgICB0aGlzLnNjYWxlID0gcGFyZW50VGFic0VsPy5zY2FsZTtcbiAgICB0aGlzLmJvcmRlcmVkID0gcGFyZW50VGFic0VsPy5ib3JkZXJlZDtcbiAgICAvLyBmaXggaXNzdWUgd2l0aCBhY3RpdmUgdGFiLXRpdGxlIG5vdCBsaW5pbmcgdXAgd2l0aCBibHVlIGluZGljYXRvclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVGl0bGUpIHtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIC8vIGlmIGV2ZXJ5IHRhYiB0aXRsZSBpcyBhY3RpdmUgc2VsZWN0IHRoZSBmaXJzdCB0YWIuXG4gICAgaWYgKHRoaXMudGFiVGl0bGVzLmxlbmd0aCAmJlxuICAgICAgdGhpcy50YWJUaXRsZXMuZXZlcnkoKHRpdGxlKSA9PiAhdGl0bGUuc2VsZWN0ZWQpICYmXG4gICAgICAhdGhpcy5zZWxlY3RlZFRhYklkKSB7XG4gICAgICB0aGlzLnRhYlRpdGxlc1swXS5nZXRUYWJJZGVudGlmaWVyKCkudGhlbigodGFiKSA9PiB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIHRhYlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCB3aWR0aCA9IGAke3RoaXMuaW5kaWNhdG9yV2lkdGh9cHhgO1xuICAgIGNvbnN0IG9mZnNldCA9IGAke3RoaXMuaW5kaWNhdG9yT2Zmc2V0fXB4YDtcbiAgICBjb25zdCBpbmRpY2F0b3JTdHlsZSA9IGRpciAhPT0gXCJydGxcIiA/IHsgd2lkdGgsIGxlZnQ6IG9mZnNldCB9IDogeyB3aWR0aCwgcmlnaHQ6IG9mZnNldCB9O1xuICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwidGFibGlzdFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0YWItbmF2XCIsIG9uU2Nyb2xsOiB0aGlzLmhhbmRsZUNvbnRhaW5lclNjcm9sbCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLnRhYk5hdkVsID0gZWwpIH0sIGgoXCJzbG90XCIsIG51bGwpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9yLWNvbnRhaW5lclwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYWN0aXZlSW5kaWNhdG9yQ29udGFpbmVyRWwgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRhYi1uYXYtYWN0aXZlLWluZGljYXRvclwiLCBzdHlsZTogaW5kaWNhdG9yU3R5bGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5hY3RpdmVJbmRpY2F0b3JFbCA9IGVsKSB9KSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZm9jdXNQcmV2aW91c1RhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzKGV2ZW50LCBldmVudC50YXJnZXQsIFwicHJldmlvdXNcIik7XG4gIH1cbiAgZm9jdXNOZXh0VGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuaGFuZGxlVGFiRm9jdXMoZXZlbnQsIGV2ZW50LnRhcmdldCwgXCJuZXh0XCIpO1xuICB9XG4gIGZvY3VzRmlyc3RUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVUYWJGb2N1cyhldmVudCwgZXZlbnQudGFyZ2V0LCBcImZpcnN0XCIpO1xuICB9XG4gIGZvY3VzTGFzdFRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzKGV2ZW50LCBldmVudC50YXJnZXQsIFwibGFzdFwiKTtcbiAgfVxuICBpbnRlcm5hbEFjdGl2YXRlVGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IGV2ZW50LmRldGFpbC50YWJcbiAgICAgID8gZXZlbnQuZGV0YWlsLnRhYlxuICAgICAgOiB0aGlzLmdldEluZGV4T2ZUYWJUaXRsZShldmVudC50YXJnZXQpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGFjdGl2YXRlVGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuY2FsY2l0ZVRhYkNoYW5nZS5lbWl0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgaW50ZXJuYWxDbG9zZVRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjbG9zZWRUYWJUaXRsZUVsID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuaGFuZGxlVGFiVGl0bGVDbG9zZShjbG9zZWRUYWJUaXRsZUVsKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgZm9yIGFjdGl2ZSB0YWJzIG9uIHJlZ2lzdGVyIGFuZCB1cGRhdGUgc2VsZWN0ZWRcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICB1cGRhdGVUYWJUaXRsZXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBldmVudC5kZXRhaWw7XG4gICAgfVxuICB9XG4gIGdsb2JhbEludGVybmFsVGFiQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLnN5bmNJZCAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsICYmXG4gICAgICBldmVudC50YXJnZXQuc3luY0lkID09PSB0aGlzLnN5bmNJZCAmJlxuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkICE9PSBldmVudC5kZXRhaWwudGFiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBldmVudC5kZXRhaWwudGFiO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBpY29uU3RhcnRDaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlV2lkdGgoKTtcbiAgfVxuICB1cGRhdGVPZmZzZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IG5hdldpZHRoID0gdGhpcy5hY3RpdmVJbmRpY2F0b3JDb250YWluZXJFbD8ub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgdGFiTGVmdCA9IHRoaXMuc2VsZWN0ZWRUaXRsZT8ub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB0YWJXaWR0aCA9IHRoaXMuc2VsZWN0ZWRUaXRsZT8ub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgb2Zmc2V0UmlnaHQgPSBuYXZXaWR0aCAtICh0YWJMZWZ0ICsgdGFiV2lkdGgpO1xuICAgIHRoaXMuaW5kaWNhdG9yT2Zmc2V0ID1cbiAgICAgIGRpciAhPT0gXCJydGxcIiA/IHRhYkxlZnQgLSB0aGlzLnRhYk5hdkVsPy5zY3JvbGxMZWZ0IDogb2Zmc2V0UmlnaHQgKyB0aGlzLnRhYk5hdkVsPy5zY3JvbGxMZWZ0O1xuICB9XG4gIHVwZGF0ZUFjdGl2ZVdpZHRoKCkge1xuICAgIHRoaXMuaW5kaWNhdG9yV2lkdGggPSB0aGlzLnNlbGVjdGVkVGl0bGU/Lm9mZnNldFdpZHRoO1xuICB9XG4gIGdldEluZGV4T2ZUYWJUaXRsZShlbCwgdGFiVGl0bGVzID0gdGhpcy50YWJUaXRsZXMpIHtcbiAgICAvLyBJbiBtb3N0IGNhc2VzLCBzaW5jZSB0aGVzZSBpbmRleGVzIGNvcnJlbGF0ZSB3aXRoIHRhYiBjb250ZW50cywgd2Ugd2FudCB0byBjb25zaWRlciBhbGwgdGFiIHRpdGxlcy5cbiAgICAvLyBIb3dldmVyLCB3aGVuIGRvaW5nIHJlbGF0aXZlIGluZGV4IG9wZXJhdGlvbnMsIGl0IG1ha2VzIHNlbnNlIHRvIHBhc3MgaW4gdGhpcy5lbmFibGVkVGFiVGl0bGVzIGFzIHRoZSAybmQgYXJnLlxuICAgIHJldHVybiB0YWJUaXRsZXMuaW5kZXhPZihlbCk7XG4gIH1cbiAgYXN5bmMgZ2V0VGFiVGl0bGVCeUlkKGlkKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMudGFiVGl0bGVzLm1hcCgoZWwpID0+IGVsLmdldFRhYklkZW50aWZpZXIoKSkpLnRoZW4oKGlkcykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudGFiVGl0bGVzW2lkcy5pbmRleE9mKGlkKV07XG4gICAgfSk7XG4gIH1cbiAgZ2V0IHRhYlRpdGxlcygpIHtcbiAgICByZXR1cm4gZmlsdGVyRGlyZWN0Q2hpbGRyZW4odGhpcy5lbCwgXCJjYWxjaXRlLXRhYi10aXRsZVwiKTtcbiAgfVxuICBnZXQgZW5hYmxlZFRhYlRpdGxlcygpIHtcbiAgICByZXR1cm4gZmlsdGVyRGlyZWN0Q2hpbGRyZW4odGhpcy5lbCwgXCJjYWxjaXRlLXRhYi10aXRsZTpub3QoW2Rpc2FibGVkXSlcIikuZmlsdGVyKCh0YWJUaXRsZSkgPT4gIXRhYlRpdGxlLmNsb3NlZCk7XG4gIH1cbiAgaGFuZGxlVGFiVGl0bGVDbG9zZShjbG9zZWRUYWJUaXRsZUVsKSB7XG4gICAgY29uc3QgeyB0YWJUaXRsZXMgfSA9IHRoaXM7XG4gICAgY29uc3QgdmlzaWJsZVRhYlRpdGxlc0luZGljZXMgPSB0YWJUaXRsZXMucmVkdWNlKCh0YWJUaXRsZUluZGljZXMsIHRhYlRpdGxlLCBpbmRleCkgPT4gIXRhYlRpdGxlLmNsb3NlZCA/IFsuLi50YWJUaXRsZUluZGljZXMsIGluZGV4XSA6IHRhYlRpdGxlSW5kaWNlcywgW10pO1xuICAgIGNvbnN0IHRvdGFsVmlzaWJsZVRhYlRpdGxlcyA9IHZpc2libGVUYWJUaXRsZXNJbmRpY2VzLmxlbmd0aDtcbiAgICBpZiAodG90YWxWaXNpYmxlVGFiVGl0bGVzID09PSAxICYmIHRhYlRpdGxlc1t2aXNpYmxlVGFiVGl0bGVzSW5kaWNlc1swXV0uY2xvc2FibGUpIHtcbiAgICAgIHRhYlRpdGxlc1t2aXNpYmxlVGFiVGl0bGVzSW5kaWNlc1swXV0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IHZpc2libGVUYWJUaXRsZXNJbmRpY2VzWzBdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0b3RhbFZpc2libGVUYWJUaXRsZXMgPiAxKSB7XG4gICAgICBjb25zdCBjbG9zZWRUYWJUaXRsZUluZGV4ID0gdGFiVGl0bGVzLmZpbmRJbmRleCgoZWwpID0+IGVsID09PSBjbG9zZWRUYWJUaXRsZUVsKTtcbiAgICAgIGNvbnN0IG5leHRUYWJUaXRsZUluZGV4ID0gdmlzaWJsZVRhYlRpdGxlc0luZGljZXMuZmluZCgodmFsdWUpID0+IHZhbHVlID4gY2xvc2VkVGFiVGl0bGVJbmRleCk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFRhYklkID09PSBjbG9zZWRUYWJUaXRsZUluZGV4KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCA9IG5leHRUYWJUaXRsZUluZGV4ID8gbmV4dFRhYlRpdGxlSW5kZXggOiB0b3RhbFZpc2libGVUYWJUaXRsZXMgLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVXaWR0aCgpO1xuICAgICAgdGFiVGl0bGVzW3RoaXMuc2VsZWN0ZWRUYWJJZF0uZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJzZWxlY3RlZFRhYklkXCI6IFtcInNlbGVjdGVkVGFiSWRDaGFuZ2VkXCJdLFxuICAgIFwic2VsZWN0ZWRUaXRsZVwiOiBbXCJzZWxlY3RlZFRpdGxlQ2hhbmdlZFwiXVxuICB9OyB9XG59O1xuVGFiTmF2LnN0eWxlID0gdGFiTmF2Q3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNsb3NlQnV0dG9uOiBcImNsb3NlLWJ1dHRvblwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50SGFzVGV4dDogXCJjb250ZW50LS1oYXMtdGV4dFwiLFxuICBpY29uRW5kOiBcImljb24tZW5kXCIsXG4gIGljb25TdGFydDogXCJpY29uLXN0YXJ0XCIsXG4gIGljb25QcmVzZW50OiBcImljb24tcHJlc2VudFwiLFxuICB0aXRsZUljb246IFwiY2FsY2l0ZS10YWItdGl0bGUtLWljb25cIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBjbG9zZTogXCJ4XCJcbn07XG5cbmNvbnN0IHRhYlRpdGxlQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9jaztmbGV4OjAgMSBhdXRvO291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjBweDttYXJnaW4taW5saW5lLWVuZDoxLjI1cmVtfTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtzY2FsZT1zXSksOmhvc3QoW2xheW91dD1jZW50ZXJdW3NjYWxlPW1dKSw6aG9zdChbbGF5b3V0PWNlbnRlcl1bc2NhbGU9bF0pe21hcmdpbi1ibG9jazowcHg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWlubGluZS1lbmQ6MHB4O2ZsZXgtYmFzaXM6MTJyZW19Omhvc3QoW2xheW91dD1jZW50ZXJdW3NjYWxlPXNdKSAuY29udGVudCw6aG9zdChbbGF5b3V0PWNlbnRlcl1bc2NhbGU9bV0pIC5jb250ZW50LDpob3N0KFtsYXlvdXQ9Y2VudGVyXVtzY2FsZT1sXSkgLmNvbnRlbnR7bWFyZ2luOmF1dG99Omhvc3QoW2xheW91dD1jZW50ZXJdW2Nsb3NhYmxlXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MzJweH06aG9zdChbbGF5b3V0PWNlbnRlcl1bYm9yZGVyZWRdW2Nsb3NhYmxlXVtzY2FsZT1zXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MzZweH06aG9zdChbbGF5b3V0PWNlbnRlcl1bYm9yZGVyZWRdW2Nsb3NhYmxlXVtzY2FsZT1tXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NDBweH06aG9zdChbbGF5b3V0PWNlbnRlcl1bY2xvc2FibGVdW3NjYWxlPWxdKSAuY29udGVudHtwYWRkaW5nLWlubGluZS1zdGFydDo0MHB4fTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtjbG9zYWJsZV1bYm9yZGVyZWRdW3NjYWxlPWxdKSAuY29udGVudHtwYWRkaW5nLWlubGluZS1zdGFydDo1MnB4fTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoycHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTpzb2xpZH06aG9zdChbY2xvc2VkXSl7ZGlzcGxheTpub25lfS5jb250YWluZXJ7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCg6Zm9jdXMpIC5jb250YWluZXJ7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KDpmb2N1cykgLmNvbnRhaW5lcjpmb2N1cy13aXRoaW57b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCg6YWN0aXZlKSBhLDpob3N0KDpmb2N1cykgYSw6aG9zdCg6aG92ZXIpIGF7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lfTpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbZGlzYWJsZWRdKSAuY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowLjV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSl7bWFyZ2luLWlubGluZS1lbmQ6MXJlbX06aG9zdChbc2NhbGU9c10pIC5jb250ZW50e3BhZGRpbmctYmxvY2s6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSAuY29udGVudHtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPWxdKXttYXJnaW4taW5saW5lLWVuZDoxLjVyZW19Omhvc3QoW3NjYWxlPWxdKSAuY29udGVudHtwYWRkaW5nLWJsb2NrOjAuNjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfS5jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1jb250ZW50OmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtib3JkZXItYmxvY2stZW5kLXdpZHRoOjJweDtwYWRkaW5nLWlubGluZTowcHg7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztib3JkZXItYmxvY2stZW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1ibG9jay1lbmQtc3R5bGU6c29saWR9LmNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jYWxjaXRlLXRhYi10aXRsZS0taWNvbntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24tc2VsZjpjZW50ZXJ9LmNhbGNpdGUtdGFiLXRpdGxlLS1pY29uIHN2Z3t0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uY29udGVudC0taGFzLXRleHR7cGFkZGluZzowLjI1cmVtfS5jb250ZW50LS1oYXMtdGV4dCAuY2FsY2l0ZS10YWItdGl0bGUtLWljb24uaWNvbi1zdGFydHttYXJnaW4taW5saW5lLWVuZDowLjVyZW19LmNvbnRlbnQtLWhhcy10ZXh0IC5jYWxjaXRlLXRhYi10aXRsZS0taWNvbi5pY29uLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OjAuNXJlbX0uY2xvc2UtYnV0dG9ue2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7YmxvY2stc2l6ZTpjYWxjKDEwMCUgLSAycHgpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1idXR0b24tdHJhbnNwYXJlbnQtMSk7bWFyZ2luLWlubGluZS1zdGFydDphdXRvfS5jbG9zZS1idXR0b246Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApO291dGxpbmUtb2Zmc2V0Oi0xcHh9LmNsb3NlLWJ1dHRvbjpmb2N1cywuY2xvc2UtYnV0dG9uOmhvdmVye2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0uY2xvc2UtYnV0dG9uOmFjdGl2ZXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmNsb3NlLWJ1dHRvbiBjYWxjaXRlLWljb257Y29sb3I6aW5oZXJpdH06aG9zdChbaWNvbi1zdGFydF1baWNvbi1lbmRdKSAuY2FsY2l0ZS10YWItdGl0bGUtLWljb246Zmlyc3QtY2hpbGR7bWFyZ2luLWlubGluZS1lbmQ6MC41cmVtfTpob3N0KFtib3JkZXJlZF0pe21hcmdpbi1pbmxpbmUtZW5kOjB9Omhvc3QoW2JvcmRlcmVkXVtzZWxlY3RlZF0pe2JveC1zaGFkb3c6aW5zZXQgMHB4IC0ycHggdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtib3JkZXJlZF1bc2VsZWN0ZWRdW3Bvc2l0aW9uPWJvdHRvbV0pe2JveC1zaGFkb3c6aW5zZXQgMCAycHggMCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW2JvcmRlcmVkXTpob3ZlcikgLmNvbnRhaW5lciw6aG9zdChbYm9yZGVyZWRdOmZvY3VzKSAuY29udGFpbmVyLDpob3N0KFtib3JkZXJlZF06YWN0aXZlKSAuY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0KFtib3JkZXJlZF06aG92ZXIpIC5jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWJ1dHRvbi10cmFuc3BhcmVudC1ob3Zlcil9Omhvc3QoW2Nsb3NhYmxlXSkgLmNvbnRhaW5lciw6aG9zdChbYm9yZGVyZWRdKSAuY29udGFpbmVye2JvcmRlci1pbmxpbmUtc3RhcnQ6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1pbmxpbmUtZW5kOjFweCBzb2xpZCB0cmFuc3BhcmVudH06aG9zdChbY2xvc2FibGVdKSAuY29udGFpbmVyIC5jbG9zZS1idXR0b24sOmhvc3QoW2JvcmRlcmVkXSkgLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9ue21hcmdpbi1pbmxpbmU6MH06aG9zdChbY2xvc2FibGVdKSAuY29udGVudHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmxvY2stc2l6ZToxMDAlO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoW2Nsb3NhYmxlXVtwb3NpdGlvbj1ib3R0b21dKSAuY29udGFpbmVyLDpob3N0KFtib3JkZXJlZF1bcG9zaXRpb249Ym90dG9tXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6dW5zZXR9Omhvc3QoW3NlbGVjdGVkXVtib3JkZXJlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWlubGluZS1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtib3JkZXItaW5saW5lLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdChbYm9yZGVyZWRdKSAuY29udGVudHtwYWRkaW5nLWlubGluZTowLjc1cmVtfTpob3N0KFtib3JkZXJlZF1bc2NhbGU9c10pIC5jb250ZW50e3BhZGRpbmctaW5saW5lOjAuNXJlbX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPWxdKSAuY29udGVudHtwYWRkaW5nLWlubGluZToxcmVtfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXs6aG9zdHtvdXRsaW5lLXdpZHRoOjA7b3V0bGluZS1vZmZzZXQ6MH06aG9zdCg6Zm9jdXMpIC5jb250YWluZXJ7b3V0bGluZS1jb2xvcjpoaWdobGlnaHR9Omhvc3QoW2JvcmRlcmVkXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stZW5kLXN0eWxlOnNvbGlkfTpob3N0KFtib3JkZXJlZF1bcG9zaXRpb249Ym90dG9tXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6c29saWR9Omhvc3QoW2JvcmRlcmVkXVtzZWxlY3RlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLWVuZC1zdHlsZTpub25lfTpob3N0KFtib3JkZXJlZF1bcG9zaXRpb249Ym90dG9tXVtzZWxlY3RlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOm5vbmV9fVwiO1xuXG5jb25zdCBUYWJUaXRsZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlVGFic0FjdGl2YXRlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGFic0FjdGl2YXRlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0FjdGl2YXRlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzQWN0aXZhdGVcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlVGFic0Nsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVGFic0Nsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0Nsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNOZXh0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNOZXh0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c1ByZXZpb3VzXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzRmlyc3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0ZpcnN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTGFzdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTGFzdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJJY29uQ2hhbmdlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFiSWNvbkNoYW5nZWRcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuY2xvc2VDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlVGFiVGl0bGVBbmROb3RpZnkoKTtcbiAgICB9O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFN0YXRlL1Byb3BzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqIHdhdGNoZXMgZm9yIGNoYW5naW5nIHRleHQgY29udGVudCAqL1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVIYXNUZXh0KCkpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYkljb25DaGFuZ2VkLmVtaXQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS10YWItdGl0bGUtJHtndWlkKCl9YDtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbkVuZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5b3V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJvcmRlcmVkID0gZmFsc2U7XG4gICAgdGhpcy50YWIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250cm9scyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcbiAgfVxuICBzZWxlY3RlZEhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuZW1pdEFjdGl2ZVRhYihmYWxzZSk7XG4gICAgfVxuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zZXR1cFRleHRDb250ZW50T2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnBhcmVudFRhYk5hdkVsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10YWItbmF2XCIpO1xuICAgIHRoaXMucGFyZW50VGFic0VsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10YWJzXCIpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIC8vIERpc3BhdGNoaW5nIHRvIGJvZHkgaW4gb3JkZXIgdG8gYmUgbGlzdGVuZWQgYnkgb3RoZXIgZWxlbWVudHMgdGhhdCBhcmUgc3RpbGwgY29ubmVjdGVkIHRvIHRoZSBET00uXG4gICAgZG9jdW1lbnQuYm9keT8uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlVGFiVGl0bGVVbnJlZ2lzdGVyXCIsIHtcbiAgICAgIGRldGFpbDogdGhpcy5lbFxuICAgIH0pKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAge1xuICAgICAgdGhpcy51cGRhdGVIYXNUZXh0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYiAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmVtaXRBY3RpdmVUYWIoZmFsc2UpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnBhcmVudFRhYnNFbCkge1xuICAgICAgdGhpcy5sYXlvdXQgPSB0aGlzLnBhcmVudFRhYnNFbC5sYXlvdXQ7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wYXJlbnRUYWJzRWwucG9zaXRpb247XG4gICAgICB0aGlzLnNjYWxlID0gdGhpcy5wYXJlbnRUYWJzRWwuc2NhbGU7XG4gICAgICB0aGlzLmJvcmRlcmVkID0gdGhpcy5wYXJlbnRUYWJzRWwuYm9yZGVyZWQ7XG4gICAgfVxuICAgIC8vIGhhbmRsZSBjYXNlIHdoZW4gdGFiLW5hdiBpcyBvbmx5IHBhcmVudFxuICAgIGlmICghdGhpcy5wYXJlbnRUYWJzRWwgJiYgdGhpcy5wYXJlbnRUYWJOYXZFbCkge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IGdldEVsZW1lbnRQcm9wKHRoaXMucGFyZW50VGFiTmF2RWwsIFwicG9zaXRpb25cIiwgdGhpcy5wb3NpdGlvbik7XG4gICAgICB0aGlzLnNjYWxlID0gZ2V0RWxlbWVudFByb3AodGhpcy5wYXJlbnRUYWJOYXZFbCwgXCJzY2FsZVwiLCB0aGlzLnNjYWxlKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwsIGNsb3NlZCB9ID0gdGhpcztcbiAgICBjb25zdCBpZCA9IGVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICBjb25zdCBpY29uU3RhcnRFbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IHsgW0NTUy50aXRsZUljb25dOiB0cnVlLCBbQ1NTLmljb25TdGFydF06IHRydWUgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJzdGFydFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25TdGFydCwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSk7XG4gICAgY29uc3QgaWNvbkVuZEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogeyBbQ1NTLnRpdGxlSWNvbl06IHRydWUsIFtDU1MuaWNvbkVuZF06IHRydWUgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJlbmRcIiB8fCB0aGlzLmljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uRW5kLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtY29udHJvbHNcIjogdGhpcy5jb250cm9scywgXCJhcmlhLXNlbGVjdGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5zZWxlY3RlZCksIGlkOiBpZCwgcm9sZTogXCJ0YWJcIiwgdGFiSW5kZXg6IHRoaXMuc2VsZWN0ZWQgPyAwIDogLTEgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgW0NTUy5pY29uUHJlc2VudF06ICEhdGhpcy5pY29uU3RhcnQgfHwgISF0aGlzLmljb25FbmRcbiAgICAgIH0sIGhpZGRlbjogY2xvc2VkLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZShlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuY29udGVudF06IHRydWUsIFtDU1MuY29udGVudEhhc1RleHRdOiB0aGlzLmhhc1RleHQgfSB9LCB0aGlzLmljb25TdGFydCA/IGljb25TdGFydEVsIDogbnVsbCwgaChcInNsb3RcIiwgbnVsbCksIHRoaXMuaWNvbkVuZCA/IGljb25FbmRFbCA6IG51bGwpLCB0aGlzLnJlbmRlckNsb3NlQnV0dG9uKCkpKSk7XG4gIH1cbiAgcmVuZGVyQ2xvc2VCdXR0b24oKSB7XG4gICAgY29uc3QgeyBjbG9zYWJsZSwgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIGNsb3NhYmxlID8gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogbWVzc2FnZXMuY2xvc2UsIGNsYXNzOiBDU1MuY2xvc2VCdXR0b24sIGRpc2FibGVkOiBmYWxzZSwga2V5OiBDU1MuY2xvc2VCdXR0b24sIG9uQ2xpY2s6IHRoaXMuY2xvc2VDbGlja0hhbmRsZXIsIHRpdGxlOiBtZXNzYWdlcy5jbG9zZSwgdHlwZTogXCJidXR0b25cIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmNsb3NlQnV0dG9uRWwgPSBlbCkgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IElDT05TLmNsb3NlLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSkgOiBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyLmVtaXQoYXdhaXQgdGhpcy5nZXRUYWJJZGVudGlmaWVyKCkpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcywgKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxUYWJDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0VGFic0VsID0gZXZlbnRcbiAgICAgIC5jb21wb3NlZFBhdGgoKVxuICAgICAgLmZpbmQoKGVsKSA9PiBlbC50YWdOYW1lID09PSBcIkNBTENJVEUtVEFCU1wiKTtcbiAgICBpZiAodGFyZ2V0VGFic0VsICE9PSB0aGlzLnBhcmVudFRhYnNFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhYiA9PT0gZXZlbnQuZGV0YWlsLnRhYjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmdldFRhYkluZGV4KCkudGhlbigoaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGluZGV4ID09PSBldmVudC5kZXRhaWwudGFiO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0QWN0aXZlVGFiKCk7XG4gIH1cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIiBcIjpcbiAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICBpZiAoIWV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMuY2xvc2VCdXR0b25FbCkpIHtcbiAgICAgICAgICB0aGlzLmVtaXRBY3RpdmVUYWIoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGdldEVsZW1lbnREaXIodGhpcy5lbCkgPT09IFwibHRyXCIpIHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c05leHQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXMuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZ2V0RWxlbWVudERpcih0aGlzLmVsKSA9PT0gXCJsdHJcIikge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzUHJldmlvdXMuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTmV4dC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0ZpcnN0LmVtaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTGFzdC5lbWl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgdGl0bGUgd2l0aGluIHRoZSBgY2FsY2l0ZS10YWItbmF2YC5cbiAgICovXG4gIGFzeW5jIGdldFRhYkluZGV4KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKG5vZGVMaXN0VG9BcnJheSh0aGlzLmVsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcigoZWwpID0+IGVsLm1hdGNoZXMoXCJjYWxjaXRlLXRhYi10aXRsZVwiKSksIHRoaXMuZWwpO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGdldFRhYklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFiID8gdGhpcy50YWIgOiB0aGlzLmdldFRhYkluZGV4KCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB0YWJJZHNcbiAgICogQHBhcmFtIHRpdGxlSWRzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlQXJpYUluZm8odGFiSWRzID0gW10sIHRpdGxlSWRzID0gW10pIHtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGFiSWRzW3RpdGxlSWRzLmluZGV4T2YodGhpcy5lbC5pZCldIHx8IG51bGw7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICB1cGRhdGVIYXNUZXh0KCkge1xuICAgIHRoaXMuaGFzVGV4dCA9IHRoaXMuZWwudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA+IDA7XG4gIH1cbiAgc2V0dXBUZXh0Q29udGVudE9ic2VydmVyKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgfVxuICBlbWl0QWN0aXZlVGFiKHVzZXJUcmlnZ2VyZWQgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5jbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgdGFiOiB0aGlzLnRhYiB9O1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0FjdGl2YXRlLmVtaXQocGF5bG9hZCk7XG4gICAgaWYgKHVzZXJUcmlnZ2VyZWQpIHtcbiAgICAgIC8vIGVtaXQgaW4gdGhlIG5leHQgZnJhbWUgdG8gbGV0IGludGVybmFsIGV2ZW50cyBzeW5jIHVwXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5jYWxjaXRlVGFic0FjdGl2YXRlLmVtaXQoKSk7XG4gICAgfVxuICB9XG4gIGNsb3NlVGFiVGl0bGVBbmROb3RpZnkoKSB7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0Nsb3NlLmVtaXQoeyB0YWI6IHRoaXMudGFiIH0pO1xuICAgIHRoaXMuY2FsY2l0ZVRhYnNDbG9zZS5lbWl0KCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInNlbGVjdGVkXCI6IFtcInNlbGVjdGVkSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcblRhYlRpdGxlLnN0eWxlID0gdGFiVGl0bGVDc3M7XG5cbmNvbnN0IFNMT1RTID0ge1xuICB0aXRsZUdyb3VwOiBcInRpdGxlLWdyb3VwXCJcbn07XG5cbmNvbnN0IHRhYnNDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KFtib3JkZXJlZF0pe2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbYm9yZGVyZWRdOm5vdChbcG9zaXRpb249Ym90dG9tXSkpIDo6c2xvdHRlZChjYWxjaXRlLXRhYi1uYXYpe21hcmdpbi1ibG9jay1lbmQ6LTFweH06aG9zdChbYm9yZGVyZWRdW3Bvc2l0aW9uPWJvdHRvbV0pe2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKSwgaW5zZXQgMCAtMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW2JvcmRlcmVkXSkgc2VjdGlvbntib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW2JvcmRlcmVkXVtzY2FsZT1zXSkgc2VjdGlvbntwYWRkaW5nOjAuNzVyZW19Omhvc3QoW2JvcmRlcmVkXVtzY2FsZT1tXSkgc2VjdGlvbntwYWRkaW5nOjAuNXJlbX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPWxdKSBzZWN0aW9ue3BhZGRpbmc6MXJlbX06aG9zdChbcG9zaXRpb249Ym90dG9tXSl7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9c2VjdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpO2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTpzb2xpZH06aG9zdChbcG9zaXRpb249Ym90dG9tXSkgc2VjdGlvbntmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV06bm90KFtib3JkZXJlZF0pKSBzZWN0aW9ue2JvcmRlci1ibG9jay1lbmQtc3R5bGU6c29saWR9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtib3JkZXJlZF0pIHNlY3Rpb257Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweH06aG9zdChbcG9zaXRpb249Ym90dG9tXVtib3JkZXJlZF0pIHNlY3Rpb257Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItYmxvY2stZW5kLXdpZHRoOjBweH19XCI7XG5cbmNvbnN0IFRhYnMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMubGF5b3V0ID0gXCJpbmxpbmVcIjtcbiAgICB0aGlzLnBvc2l0aW9uID0gXCJ0b3BcIjtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5ib3JkZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMudGl0bGVzID0gW107XG4gICAgdGhpcy50YWJzID0gW107XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy50aXRsZUdyb3VwIH0pLCBoKFwic2VjdGlvblwiLCBudWxsLCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZUludGVybmFsVGFiVGl0bGVSZWdpc3RlcihldmVudCkge1xuICAgIHRoaXMudGl0bGVzID0gWy4uLnRoaXMudGl0bGVzLCBldmVudC50YXJnZXRdO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNhbGNpdGVUYWJUaXRsZVVucmVnaXN0ZXIoZXZlbnQpIHtcbiAgICB0aGlzLnRpdGxlcyA9IHRoaXMudGl0bGVzLmZpbHRlcigoZWwpID0+IGVsICE9PSBldmVudC5kZXRhaWwpO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNhbGNpdGVJbnRlcm5hbFRhYlJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50YWJzID0gWy4uLnRoaXMudGFicywgZXZlbnQudGFyZ2V0XTtcbiAgICB0aGlzLnJlZ2lzdHJ5SGFuZGxlcigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjYWxjaXRlVGFiVW5yZWdpc3RlcihldmVudCkge1xuICAgIHRoaXMudGFicyA9IHRoaXMudGFicy5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gZXZlbnQuZGV0YWlsKTtcbiAgICB0aGlzLnJlZ2lzdHJ5SGFuZGxlcigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKlxuICAgKiBNYXRjaGVzIHVwIGVsZW1lbnRzIGZyb20gdGhlIGludGVybmFsIGB0YWJzYCBhbmQgYHRpdGxlc2AgdG8gYXV0b21hdGljYWxseVxuICAgKiB1cGRhdGUgdGhlIEFSSUEgYXR0cmlidXRlcyBhbmQgbGluayBgPGNhbGNpdGUtdGFiPmAgYW5kXG4gICAqIGA8Y2FsY2l0ZS10YWItdGl0bGU+YCBjb21wb25lbnRzLlxuICAgKi9cbiAgYXN5bmMgcmVnaXN0cnlIYW5kbGVyKCkge1xuICAgIGxldCB0YWJJZHM7XG4gICAgbGV0IHRpdGxlSWRzO1xuICAgIC8vIGRldGVybWluZSBpZiB3ZSBhcmUgdXNpbmcgYHRhYmAgYmFzZWQgb3IgYGluZGV4YCBiYXNlZCB0YWIgaWRlbnRpZmllcnMuXG4gICAgaWYgKHRoaXMudGFicy5zb21lKChlbCkgPT4gZWwudGFiKSB8fCB0aGlzLnRpdGxlcy5zb21lKChlbCkgPT4gZWwudGFiKSkge1xuICAgICAgLy8gaWYgd2UgYXJlIHVzaW5nIGB0YWJgIGJhc2VkIGlkZW50aWZpZXJzIHNvcnQgYnkgYHRhYmAgdG8gYWNjb3VudCBmb3JcbiAgICAgIC8vIHBvc3NpYmxlIG91dCBvZiBvcmRlciB0YWJzIGFuZCBnZXQgdGhlIGlkIG9mIGVhY2ggdGFiXG4gICAgICB0YWJJZHMgPSB0aGlzLnRhYnMuc29ydCgoYSwgYikgPT4gYS50YWIubG9jYWxlQ29tcGFyZShiLnRhYikpLm1hcCgoZWwpID0+IGVsLmlkKTtcbiAgICAgIHRpdGxlSWRzID0gdGhpcy50aXRsZXMuc29ydCgoYSwgYikgPT4gYS50YWIubG9jYWxlQ29tcGFyZShiLnRhYikpLm1hcCgoZWwpID0+IGVsLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBpZiB3ZSBhcmUgdXNpbmcgaW5kZXggYmFzZWQgdGFicyB0aGVuIHRoZSBgPGNhbGNpdGUtdGFiPmAgYW5kXG4gICAgICAvLyBgPGNhbGNpdGUtdGFiLXRpdGxlPmAgbWlnaHQgaGF2ZSBiZWVuIHJlbmRlcmVkIG91dCBvZiBvcmRlciBzbyB0aGVcbiAgICAgIC8vIG9yZGVyIG9mIGB0aGlzLnRhYnNgIGFuZCBgdGhpcy50aXRsZXNgIG1pZ2h0IG5vdCByZWZsZWN0IHRoZSBET00gc3RhdGUsXG4gICAgICAvLyBhbmQgbWlnaHQgbm90IG1hdGNoIGVhY2ggb3RoZXIgc28gd2UgbmVlZCB0byBnZXQgdGhlIGluZGV4IG9mIGFsbCB0aGVcbiAgICAgIC8vIHRhYnMgYW5kIHRpdGxlcyBpbiB0aGUgRE9NIG9yZGVyIHRvIG1hdGNoIHRoZW0gdXAgYXMgYSBzb3VyY2Ugb2YgdHJ1dGhcbiAgICAgIGNvbnN0IHRhYkRvbUluZGV4ZXMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLnRhYnMubWFwKChlbCkgPT4gZWwuZ2V0VGFiSW5kZXgoKSkpO1xuICAgICAgY29uc3QgdGl0bGVEb21JbmRleGVzID0gYXdhaXQgUHJvbWlzZS5hbGwodGhpcy50aXRsZXMubWFwKChlbCkgPT4gZWwuZ2V0VGFiSW5kZXgoKSkpO1xuICAgICAgLy8gb25jZSB3ZSBoYXZlIHRoZSBET00gb3JkZXIgYXMgYSBzb3VyY2Ugb2YgdHJ1dGggd2UgY2FuIGJ1aWxkIHRoZVxuICAgICAgLy8gbWF0Y2hpbmcgdGFiSWRzIGFuZCB0aXRsZUlkcyBhcnJheXNcbiAgICAgIHRhYklkcyA9IHRhYkRvbUluZGV4ZXMucmVkdWNlKChpZHMsIGluZGV4SW5ET00sIHJlZ2lzdHJ5SW5kZXgpID0+IHtcbiAgICAgICAgaWRzW2luZGV4SW5ET01dID0gdGhpcy50YWJzW3JlZ2lzdHJ5SW5kZXhdLmlkO1xuICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgfSwgW10pO1xuICAgICAgdGl0bGVJZHMgPSB0aXRsZURvbUluZGV4ZXMucmVkdWNlKChpZHMsIGluZGV4SW5ET00sIHJlZ2lzdHJ5SW5kZXgpID0+IHtcbiAgICAgICAgaWRzW2luZGV4SW5ET01dID0gdGhpcy50aXRsZXNbcmVnaXN0cnlJbmRleF0uaWQ7XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8vIHBhc3MgYWxsIG91ciBuZXcgYXJpYSBpbmZvcm1hdGlvbiB0byBlYWNoIGA8Y2FsY2l0ZS10YWI+YCBhbmRcbiAgICAvLyBgPGNhbGNpdGUtdGFiLXRpdGxlPmAgd2hpY2ggd2lsbCBjaGVjayBpZiB0aGV5IGNhbiB1cGRhdGUgdGhlaXIgaW50ZXJuYWxcbiAgICAvLyBgY29udHJvbGxlZGAgb3IgYGxhYmVsZWRCeWAgc3RhdGVzIGFuZCByZS1yZW5kZXIgaWYgbmVjZXNzYXJ5XG4gICAgdGhpcy50YWJzLmZvckVhY2goKGVsKSA9PiBlbC51cGRhdGVBcmlhSW5mbyh0YWJJZHMsIHRpdGxlSWRzKSk7XG4gICAgdGhpcy50aXRsZXMuZm9yRWFjaCgoZWwpID0+IGVsLnVwZGF0ZUFyaWFJbmZvKHRhYklkcywgdGl0bGVJZHMpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuVGFicy5zdHlsZSA9IHRhYnNDc3M7XG5cbmV4cG9ydCB7IFRhYiBhcyBjYWxjaXRlX3RhYiwgVGFiTmF2IGFzIGNhbGNpdGVfdGFiX25hdiwgVGFiVGl0bGUgYXMgY2FsY2l0ZV90YWJfdGl0bGUsIFRhYnMgYXMgY2FsY2l0ZV90YWJzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRVc2VyQWdlbnRTdHJpbmcgfSBmcm9tICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiBhcyB1IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRBc3NldFBhdGggfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlc1xuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9