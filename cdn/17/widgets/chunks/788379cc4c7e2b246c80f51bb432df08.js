"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-tab_4_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-tab_4.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-tab_4.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_tab": () => (/* binding */ Tab),
/* harmony export */   "calcite_tab_nav": () => (/* binding */ TabNav),
/* harmony export */   "calcite_tab_title": () => (/* binding */ TabTitle),
/* harmony export */   "calcite_tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */










const tabCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}section,.container{display:none;block-size:100%;inline-size:100%}:host([scale=s]){padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-block:13px}";

const Tab = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalTabRegister = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabRegister", 6);
    this.guid = `calcite-tab-title-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-labelledby": this.labeledBy, id: id }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container", role: "tabpanel", tabIndex: this.selected ? 0 : -1 }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
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
    return Array.prototype.indexOf.call((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab")), this.el);
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Tab.style = tabCss;

const tabNavCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:flex}:host([scale=s]){min-block-size:1.5rem}:host([scale=m]){min-block-size:2rem}:host([scale=l]){min-block-size:2.75rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([layout=center]) .tab-nav{justify-content:space-evenly}:host([position=bottom]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position=bottom]) .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered][position=bottom]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}";

const TabNav = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTabChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTabChange", 6);
    this.calciteInternalTabChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabChange", 6);
    this.animationActiveDuration = 0.3;
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => {
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
      (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.enabledTabTitles, el, destination);
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
    const dir = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const width = `${this.indicatorWidth}px`;
    const offset = `${this.indicatorOffset}px`;
    const indicatorStyle = dir !== "rtl" ? { width, left: offset } : { width, right: offset };
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { role: "tablist" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-nav", onScroll: this.handleContainerScroll,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.tabNavEl = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-nav-active-indicator-container",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.activeIndicatorContainerEl = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-nav-active-indicator", style: indicatorStyle,
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
    const dir = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
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
    return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.z)(this.el, "calcite-tab-title");
  }
  get enabledTabTitles() {
    return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.z)(this.el, "calcite-tab-title:not([disabled])").filter((tabTitle) => !tabTitle.closed);
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTabsActivate = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTabsActivate", 6);
    this.calciteInternalTabsActivate = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsActivate", 6);
    this.calciteTabsClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTabsClose", 6);
    this.calciteInternalTabsClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsClose", 6);
    this.calciteInternalTabsFocusNext = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusNext", 6);
    this.calciteInternalTabsFocusPrevious = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusPrevious", 6);
    this.calciteInternalTabsFocusFirst = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusFirst", 6);
    this.calciteInternalTabsFocusLast = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabsFocusLast", 6);
    this.calciteInternalTabTitleRegister = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabTitleRegister", 6);
    this.calciteInternalTabIconChanged = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTabIconChanged", 6);
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
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", () => this.updateHasText());
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => {
      this.calciteInternalTabIconChanged.emit();
    });
    this.guid = `calcite-tab-title-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
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
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
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
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
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
      this.position = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.parentTabNavEl, "position", this.position);
      this.scale = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.parentTabNavEl, "scale", this.scale);
    }
  }
  render() {
    const { el, closed } = this;
    const id = el.id || this.guid;
    const iconStartEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: this.scale === "l" ? "m" : "s" }));
    const iconEndEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: this.scale === "l" ? "m" : "s" }));
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-controls": this.controls, "aria-selected": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.selected), id: id, role: "tab", tabIndex: this.selected ? 0 : -1 }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        [CSS.iconPresent]: !!this.iconStart || !!this.iconEnd
      }, hidden: closed,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => this.resizeObserver?.observe(el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.content]: true, [CSS.contentHasText]: this.hasText } }, this.iconStart ? iconStartEl : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), this.iconEnd ? iconEndEl : null), this.renderCloseButton())));
  }
  renderCloseButton() {
    const { closable, messages } = this;
    return closable ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": messages.close, class: CSS.closeButton, disabled: false, key: CSS.closeButton, onClick: this.closeClickHandler, title: messages.close, type: "button",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButtonEl = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: ICONS.close, scale: this.scale === "l" ? "m" : "s" }))) : null;
  }
  async componentDidLoad() {
    this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier());
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, () => {
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
        if ((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el) === "ltr") {
          this.calciteInternalTabsFocusNext.emit();
        }
        else {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if ((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el) === "ltr") {
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
    return Array.prototype.indexOf.call((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab-title")), this.el);
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
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.effectiveLocale);
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.titleGroup }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Tabs.style = tabsCss;




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

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
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
  return getMessageBundle((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzg4Mzc5Y2M0YzdlMmIyNDZjODBmNTFiYjQzMmRmMDguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEg7QUFDK0M7QUFDNUg7QUFDZTtBQUNTO0FBQ2dCO0FBQ29DO0FBQzFGO0FBQ047O0FBRTNCLDhCQUE4QixHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLHVEQUF1RCxjQUFjLE1BQU0sYUFBYSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixjQUFjLGdCQUFnQixpQkFBaUIsY0FBYyxtQkFBbUIsYUFBYSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixzQkFBc0Isc0NBQXNDLGlCQUFpQixpQkFBaUIscUJBQXFCLHNDQUFzQyxpQkFBaUIsaUJBQWlCLHFDQUFxQyxvQkFBb0IsbUJBQW1COztBQUVyc0U7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLHNDQUFzQyxxREFBVztBQUNqRCxxQ0FBcUMsb0RBQUksR0FBRztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDTzs7QUFFL0Q7QUFDQTtBQUNBLGlCQUFpQixVQUFVLEdBQUcsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQscURBQVksYUFBYSxVQUFVLGdCQUFnQixLQUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtdGFiXzQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdDluLWEzZTEyNDIyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50LCBGIGFzIEZyYWdtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyB4IGFzIG5vZGVMaXN0VG9BcnJheSwgaiBhcyBmb2N1c0VsZW1lbnRJbkdyb3VwLCBiIGFzIGdldEVsZW1lbnREaXIsIHogYXMgZmlsdGVyRGlyZWN0Q2hpbGRyZW4sIHYgYXMgZ2V0RWxlbWVudFByb3AsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuXG5jb25zdCB0YWJDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbc2VsZWN0ZWRdKSBzZWN0aW9uLDpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXJ7ZGlzcGxheTpibG9ja306aG9zdHtkaXNwbGF5Om5vbmU7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCV9Omhvc3QoW3NlbGVjdGVkXSl7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtvdmVyZmxvdzphdXRvfXNlY3Rpb24sLmNvbnRhaW5lcntkaXNwbGF5Om5vbmU7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCV9Omhvc3QoW3NjYWxlPXNdKXtwYWRkaW5nLWJsb2NrOjAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSl7cGFkZGluZy1ibG9jazowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1sXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07cGFkZGluZy1ibG9jazoxM3B4fVwiO1xuXG5jb25zdCBUYWIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYlJlZ2lzdGVyXCIsIDYpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXRhYi10aXRsZS0ke2d1aWQoKX1gO1xuICAgIHRoaXMudGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5sYWJlbGVkQnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5lbC5pZCB8fCB0aGlzLmd1aWQ7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogdGhpcy5sYWJlbGVkQnksIGlkOiBpZCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29udGFpbmVyXCIsIHJvbGU6IFwidGFicGFuZWxcIiwgdGFiSW5kZXg6IHRoaXMuc2VsZWN0ZWQgPyAwIDogLTEgfSwgaChcInNlY3Rpb25cIiwgbnVsbCwgaChcInNsb3RcIiwgbnVsbCkpKSkpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucGFyZW50VGFic0VsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10YWJzXCIpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJSZWdpc3Rlci5lbWl0KCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlbmRlcigpIHtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy5wYXJlbnRUYWJzRWw/LnNjYWxlO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8vIERpc3BhdGNoaW5nIHRvIGJvZHkgaW4gb3JkZXIgdG8gYmUgbGlzdGVuZWQgYnkgb3RoZXIgZWxlbWVudHMgdGhhdCBhcmUgc3RpbGwgY29ubmVjdGVkIHRvIHRoZSBET00uXG4gICAgZG9jdW1lbnQuYm9keT8uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlVGFiVW5yZWdpc3RlclwiLCB7XG4gICAgICBkZXRhaWw6IHRoaXMuZWxcbiAgICB9KSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW50ZXJuYWxUYWJDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0VGFic0VsID0gZXZlbnRcbiAgICAgIC5jb21wb3NlZFBhdGgoKVxuICAgICAgLmZpbmQoKGVsKSA9PiBlbC50YWdOYW1lID09PSBcIkNBTENJVEUtVEFCU1wiKTtcbiAgICAvLyB0byBhbGxvdyBgPGNhbGNpdGUtdGFicz5gIHRvIGJlIG5lc3RlZCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGlzXG4gICAgLy8gYGNhbGNpdGVUYWJDaGFuZ2VgIGV2ZW50IHdhcyBhY3R1YWxseSBmaXJlZCBmcm9tIGEgd2l0aGluIHRoZSBzYW1lXG4gICAgLy8gYDxjYWxjaXRlLXRhYnM+YCB0aGF0IGlzIHRoZSBhIHBhcmVudCBvZiB0aGlzIHRhYi5cbiAgICBpZiAodGFyZ2V0VGFic0VsICE9PSB0aGlzLnBhcmVudFRhYnNFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy50YWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhYiA9PT0gZXZlbnQuZGV0YWlsLnRhYjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmdldFRhYkluZGV4KCkudGhlbigoaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGluZGV4ID09PSBldmVudC5kZXRhaWwudGFiO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBjb21wb25lbnQgaXRlbSB3aXRoaW4gdGhlIHRhYiBhcnJheS5cbiAgICovXG4gIGFzeW5jIGdldFRhYkluZGV4KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKG5vZGVMaXN0VG9BcnJheSh0aGlzLmVsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcigoZWwpID0+IGVsLm1hdGNoZXMoXCJjYWxjaXRlLXRhYlwiKSksIHRoaXMuZWwpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBAcGFyYW0gdGFiSWRzXG4gICAqIEBwYXJhbSB0aXRsZUlkc1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIHVwZGF0ZUFyaWFJbmZvKHRhYklkcyA9IFtdLCB0aXRsZUlkcyA9IFtdKSB7XG4gICAgdGhpcy5sYWJlbGVkQnkgPSB0aXRsZUlkc1t0YWJJZHMuaW5kZXhPZih0aGlzLmVsLmlkKV0gfHwgbnVsbDtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuVGFiLnN0eWxlID0gdGFiQ3NzO1xuXG5jb25zdCB0YWJOYXZDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXh9Omhvc3QoW3NjYWxlPXNdKXttaW4tYmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPW1dKXttaW4tYmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1sXSl7bWluLWJsb2NrLXNpemU6Mi43NXJlbX0udGFiLW5hdntkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtvdmVyZmxvdzphdXRvfS50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3ItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWlubGluZTowcHg7aW5zZXQtYmxvY2stZW5kOjBweDtibG9jay1zaXplOjAuMTI1cmVtO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6aGlkZGVufS50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3J7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stZW5kOjBweDtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MC4xMjVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTt0cmFuc2l0aW9uLXByb3BlcnR5OmFsbDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSl9Omhvc3QoW2xheW91dD1jZW50ZXJdKSAudGFiLW5hdntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5fTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKSAudGFiLW5hdi1hY3RpdmUtaW5kaWNhdG9ye2luc2V0LWJsb2NrLWVuZDp1bnNldDtpbnNldC1ibG9jay1zdGFydDowcHh9Omhvc3QoW3Bvc2l0aW9uPWJvdHRvbV0pIC50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3ItY29udGFpbmVye2luc2V0LWJsb2NrLWVuZDp1bnNldDtpbnNldC1ibG9jay1zdGFydDowcHh9Omhvc3QoW2JvcmRlcmVkXSkgLnRhYi1uYXYtYWN0aXZlLWluZGljYXRvci1jb250YWluZXJ7aW5zZXQtYmxvY2stZW5kOnVuc2V0fTpob3N0KFtib3JkZXJlZF1bcG9zaXRpb249Ym90dG9tXSkgLnRhYi1uYXYtYWN0aXZlLWluZGljYXRvci1jb250YWluZXJ7aW5zZXQtYmxvY2stZW5kOjA7aW5zZXQtYmxvY2stc3RhcnQ6dW5zZXR9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpey50YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3J7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9fVwiO1xuXG5jb25zdCBUYWJOYXYgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVRhYkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRhYkNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuYW5pbWF0aW9uQWN0aXZlRHVyYXRpb24gPSAwLjM7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmVJbmRpY2F0b3JFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgYWN0aXZlIGluZGljYXRvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGR1cmluZyByZXNpemUgdG8gcHJldmVudCB3b2JibGVcbiAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9yRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gXCIwc1wiO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVXaWR0aCgpO1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXRQb3NpdGlvbigpO1xuICAgIH0pO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzID0gKGV2ZW50LCBlbCwgZGVzdGluYXRpb24pID0+IHtcbiAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5lbmFibGVkVGFiVGl0bGVzLCBlbCwgZGVzdGluYXRpb24pO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRhaW5lclNjcm9sbCA9ICgpID0+IHtcbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgaW5kaWNhdG9yIHRyYW5zaXRpb24gZHVyYXRpb24gd2hpbGUgY29udGFpbmVyIGlzIHNjcm9sbGluZyB0byBwcmV2ZW50IHdvYmJsZVxuICAgICAgdGhpcy5hY3RpdmVJbmRpY2F0b3JFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjBzXCI7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgfTtcbiAgICB0aGlzLnN0b3JhZ2VJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN5bmNJZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkVGl0bGUgPSBudWxsO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmxheW91dCA9IFwiaW5saW5lXCI7XG4gICAgdGhpcy5wb3NpdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgdGhpcy5ib3JkZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kaWNhdG9yT2Zmc2V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaW5kaWNhdG9yV2lkdGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZFRhYklkID0gdW5kZWZpbmVkO1xuICB9XG4gIGFzeW5jIHNlbGVjdGVkVGFiSWRDaGFuZ2VkKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHRoaXMuc3RvcmFnZUlkICYmXG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkICE9PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2FsY2l0ZS10YWItbmF2LSR7dGhpcy5zdG9yYWdlSWR9YCwgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZFRhYklkKSk7XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiQ2hhbmdlLmVtaXQoe1xuICAgICAgdGFiOiB0aGlzLnNlbGVjdGVkVGFiSWRcbiAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkVGl0bGUgPSBhd2FpdCB0aGlzLmdldFRhYlRpdGxlQnlJZCh0aGlzLnNlbGVjdGVkVGFiSWQpO1xuICB9XG4gIHNlbGVjdGVkVGl0bGVDaGFuZ2VkKCkge1xuICAgIHRoaXMudXBkYXRlT2Zmc2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVdpZHRoKCk7XG4gICAgLy8gcmVzZXQgdGhlIGFuaW1hdGlvbiB0aW1lIG9uIHRhYiBzZWxlY3Rpb25cbiAgICB0aGlzLmFjdGl2ZUluZGljYXRvckVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RoaXMuYW5pbWF0aW9uQWN0aXZlRHVyYXRpb259c2A7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5wYXJlbnRUYWJzRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRhYnNcIik7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgY29uc3Qgc3RvcmFnZUtleSA9IGBjYWxjaXRlLXRhYi1uYXYtJHt0aGlzLnN0b3JhZ2VJZH1gO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UgJiYgdGhpcy5zdG9yYWdlSWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkpIHtcbiAgICAgIGNvbnN0IHN0b3JlZFRhYiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkpO1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkID0gc3RvcmVkVGFiO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFyZW50VGFic0VsIH0gPSB0aGlzO1xuICAgIHRoaXMubGF5b3V0ID0gcGFyZW50VGFic0VsPy5sYXlvdXQ7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBhcmVudFRhYnNFbD8ucG9zaXRpb247XG4gICAgdGhpcy5zY2FsZSA9IHBhcmVudFRhYnNFbD8uc2NhbGU7XG4gICAgdGhpcy5ib3JkZXJlZCA9IHBhcmVudFRhYnNFbD8uYm9yZGVyZWQ7XG4gICAgLy8gZml4IGlzc3VlIHdpdGggYWN0aXZlIHRhYi10aXRsZSBub3QgbGluaW5nIHVwIHdpdGggYmx1ZSBpbmRpY2F0b3JcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRpdGxlKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICAvLyBpZiBldmVyeSB0YWIgdGl0bGUgaXMgYWN0aXZlIHNlbGVjdCB0aGUgZmlyc3QgdGFiLlxuICAgIGlmICh0aGlzLnRhYlRpdGxlcy5sZW5ndGggJiZcbiAgICAgIHRoaXMudGFiVGl0bGVzLmV2ZXJ5KCh0aXRsZSkgPT4gIXRpdGxlLnNlbGVjdGVkKSAmJlxuICAgICAgIXRoaXMuc2VsZWN0ZWRUYWJJZCkge1xuICAgICAgdGhpcy50YWJUaXRsZXNbMF0uZ2V0VGFiSWRlbnRpZmllcigpLnRoZW4oKHRhYikgPT4ge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICB0YWJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3Qgd2lkdGggPSBgJHt0aGlzLmluZGljYXRvcldpZHRofXB4YDtcbiAgICBjb25zdCBvZmZzZXQgPSBgJHt0aGlzLmluZGljYXRvck9mZnNldH1weGA7XG4gICAgY29uc3QgaW5kaWNhdG9yU3R5bGUgPSBkaXIgIT09IFwicnRsXCIgPyB7IHdpZHRoLCBsZWZ0OiBvZmZzZXQgfSA6IHsgd2lkdGgsIHJpZ2h0OiBvZmZzZXQgfTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcInRhYmxpc3RcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGFiLW5hdlwiLCBvblNjcm9sbDogdGhpcy5oYW5kbGVDb250YWluZXJTY3JvbGwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy50YWJOYXZFbCA9IGVsKSB9LCBoKFwic2xvdFwiLCBudWxsKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRhYi1uYXYtYWN0aXZlLWluZGljYXRvci1jb250YWluZXJcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmFjdGl2ZUluZGljYXRvckNvbnRhaW5lckVsID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0YWItbmF2LWFjdGl2ZS1pbmRpY2F0b3JcIiwgc3R5bGU6IGluZGljYXRvclN0eWxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYWN0aXZlSW5kaWNhdG9yRWwgPSBlbCkgfSkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZvY3VzUHJldmlvdXNUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVUYWJGb2N1cyhldmVudCwgZXZlbnQudGFyZ2V0LCBcInByZXZpb3VzXCIpO1xuICB9XG4gIGZvY3VzTmV4dFRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZVRhYkZvY3VzKGV2ZW50LCBldmVudC50YXJnZXQsIFwibmV4dFwiKTtcbiAgfVxuICBmb2N1c0ZpcnN0VGFiSGFuZGxlcihldmVudCkge1xuICAgIHRoaXMuaGFuZGxlVGFiRm9jdXMoZXZlbnQsIGV2ZW50LnRhcmdldCwgXCJmaXJzdFwiKTtcbiAgfVxuICBmb2N1c0xhc3RUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVUYWJGb2N1cyhldmVudCwgZXZlbnQudGFyZ2V0LCBcImxhc3RcIik7XG4gIH1cbiAgaW50ZXJuYWxBY3RpdmF0ZVRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBldmVudC5kZXRhaWwudGFiXG4gICAgICA/IGV2ZW50LmRldGFpbC50YWJcbiAgICAgIDogdGhpcy5nZXRJbmRleE9mVGFiVGl0bGUoZXZlbnQudGFyZ2V0KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBhY3RpdmF0ZVRhYkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmNhbGNpdGVUYWJDaGFuZ2UuZW1pdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGludGVybmFsQ2xvc2VUYWJIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgY2xvc2VkVGFiVGl0bGVFbCA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLmhhbmRsZVRhYlRpdGxlQ2xvc2UoY2xvc2VkVGFiVGl0bGVFbCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGZvciBhY3RpdmUgdGFicyBvbiByZWdpc3RlciBhbmQgdXBkYXRlIHNlbGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgdXBkYXRlVGFiVGl0bGVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkID0gZXZlbnQuZGV0YWlsO1xuICAgIH1cbiAgfVxuICBnbG9iYWxJbnRlcm5hbFRhYkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zeW5jSWQgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbCAmJlxuICAgICAgZXZlbnQudGFyZ2V0LnN5bmNJZCA9PT0gdGhpcy5zeW5jSWQgJiZcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJJZCAhPT0gZXZlbnQuZGV0YWlsLnRhYikge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYklkID0gZXZlbnQuZGV0YWlsLnRhYjtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgaWNvblN0YXJ0Q2hhbmdlSGFuZGxlcigpIHtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVdpZHRoKCk7XG4gIH1cbiAgdXBkYXRlT2Zmc2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCBuYXZXaWR0aCA9IHRoaXMuYWN0aXZlSW5kaWNhdG9yQ29udGFpbmVyRWw/Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHRhYkxlZnQgPSB0aGlzLnNlbGVjdGVkVGl0bGU/Lm9mZnNldExlZnQ7XG4gICAgY29uc3QgdGFiV2lkdGggPSB0aGlzLnNlbGVjdGVkVGl0bGU/Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IG9mZnNldFJpZ2h0ID0gbmF2V2lkdGggLSAodGFiTGVmdCArIHRhYldpZHRoKTtcbiAgICB0aGlzLmluZGljYXRvck9mZnNldCA9XG4gICAgICBkaXIgIT09IFwicnRsXCIgPyB0YWJMZWZ0IC0gdGhpcy50YWJOYXZFbD8uc2Nyb2xsTGVmdCA6IG9mZnNldFJpZ2h0ICsgdGhpcy50YWJOYXZFbD8uc2Nyb2xsTGVmdDtcbiAgfVxuICB1cGRhdGVBY3RpdmVXaWR0aCgpIHtcbiAgICB0aGlzLmluZGljYXRvcldpZHRoID0gdGhpcy5zZWxlY3RlZFRpdGxlPy5vZmZzZXRXaWR0aDtcbiAgfVxuICBnZXRJbmRleE9mVGFiVGl0bGUoZWwsIHRhYlRpdGxlcyA9IHRoaXMudGFiVGl0bGVzKSB7XG4gICAgLy8gSW4gbW9zdCBjYXNlcywgc2luY2UgdGhlc2UgaW5kZXhlcyBjb3JyZWxhdGUgd2l0aCB0YWIgY29udGVudHMsIHdlIHdhbnQgdG8gY29uc2lkZXIgYWxsIHRhYiB0aXRsZXMuXG4gICAgLy8gSG93ZXZlciwgd2hlbiBkb2luZyByZWxhdGl2ZSBpbmRleCBvcGVyYXRpb25zLCBpdCBtYWtlcyBzZW5zZSB0byBwYXNzIGluIHRoaXMuZW5hYmxlZFRhYlRpdGxlcyBhcyB0aGUgMm5kIGFyZy5cbiAgICByZXR1cm4gdGFiVGl0bGVzLmluZGV4T2YoZWwpO1xuICB9XG4gIGFzeW5jIGdldFRhYlRpdGxlQnlJZChpZCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLnRhYlRpdGxlcy5tYXAoKGVsKSA9PiBlbC5nZXRUYWJJZGVudGlmaWVyKCkpKS50aGVuKChpZHMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnRhYlRpdGxlc1tpZHMuaW5kZXhPZihpZCldO1xuICAgIH0pO1xuICB9XG4gIGdldCB0YWJUaXRsZXMoKSB7XG4gICAgcmV0dXJuIGZpbHRlckRpcmVjdENoaWxkcmVuKHRoaXMuZWwsIFwiY2FsY2l0ZS10YWItdGl0bGVcIik7XG4gIH1cbiAgZ2V0IGVuYWJsZWRUYWJUaXRsZXMoKSB7XG4gICAgcmV0dXJuIGZpbHRlckRpcmVjdENoaWxkcmVuKHRoaXMuZWwsIFwiY2FsY2l0ZS10YWItdGl0bGU6bm90KFtkaXNhYmxlZF0pXCIpLmZpbHRlcigodGFiVGl0bGUpID0+ICF0YWJUaXRsZS5jbG9zZWQpO1xuICB9XG4gIGhhbmRsZVRhYlRpdGxlQ2xvc2UoY2xvc2VkVGFiVGl0bGVFbCkge1xuICAgIGNvbnN0IHsgdGFiVGl0bGVzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHZpc2libGVUYWJUaXRsZXNJbmRpY2VzID0gdGFiVGl0bGVzLnJlZHVjZSgodGFiVGl0bGVJbmRpY2VzLCB0YWJUaXRsZSwgaW5kZXgpID0+ICF0YWJUaXRsZS5jbG9zZWQgPyBbLi4udGFiVGl0bGVJbmRpY2VzLCBpbmRleF0gOiB0YWJUaXRsZUluZGljZXMsIFtdKTtcbiAgICBjb25zdCB0b3RhbFZpc2libGVUYWJUaXRsZXMgPSB2aXNpYmxlVGFiVGl0bGVzSW5kaWNlcy5sZW5ndGg7XG4gICAgaWYgKHRvdGFsVmlzaWJsZVRhYlRpdGxlcyA9PT0gMSAmJiB0YWJUaXRsZXNbdmlzaWJsZVRhYlRpdGxlc0luZGljZXNbMF1dLmNsb3NhYmxlKSB7XG4gICAgICB0YWJUaXRsZXNbdmlzaWJsZVRhYlRpdGxlc0luZGljZXNbMF1dLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSB2aXNpYmxlVGFiVGl0bGVzSW5kaWNlc1swXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodG90YWxWaXNpYmxlVGFiVGl0bGVzID4gMSkge1xuICAgICAgY29uc3QgY2xvc2VkVGFiVGl0bGVJbmRleCA9IHRhYlRpdGxlcy5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gY2xvc2VkVGFiVGl0bGVFbCk7XG4gICAgICBjb25zdCBuZXh0VGFiVGl0bGVJbmRleCA9IHZpc2libGVUYWJUaXRsZXNJbmRpY2VzLmZpbmQoKHZhbHVlKSA9PiB2YWx1ZSA+IGNsb3NlZFRhYlRpdGxlSW5kZXgpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWJJZCA9PT0gY2xvc2VkVGFiVGl0bGVJbmRleCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiSWQgPSBuZXh0VGFiVGl0bGVJbmRleCA/IG5leHRUYWJUaXRsZUluZGV4IDogdG90YWxWaXNpYmxlVGFiVGl0bGVzIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlV2lkdGgoKTtcbiAgICAgIHRhYlRpdGxlc1t0aGlzLnNlbGVjdGVkVGFiSWRdLmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic2VsZWN0ZWRUYWJJZFwiOiBbXCJzZWxlY3RlZFRhYklkQ2hhbmdlZFwiXSxcbiAgICBcInNlbGVjdGVkVGl0bGVcIjogW1wic2VsZWN0ZWRUaXRsZUNoYW5nZWRcIl1cbiAgfTsgfVxufTtcblRhYk5hdi5zdHlsZSA9IHRhYk5hdkNzcztcblxuY29uc3QgQ1NTID0ge1xuICBjbG9zZUJ1dHRvbjogXCJjbG9zZS1idXR0b25cIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudEhhc1RleHQ6IFwiY29udGVudC0taGFzLXRleHRcIixcbiAgaWNvbkVuZDogXCJpY29uLWVuZFwiLFxuICBpY29uU3RhcnQ6IFwiaWNvbi1zdGFydFwiLFxuICBpY29uUHJlc2VudDogXCJpY29uLXByZXNlbnRcIixcbiAgdGl0bGVJY29uOiBcImNhbGNpdGUtdGFiLXRpdGxlLS1pY29uXCJcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgY2xvc2U6IFwieFwiXG59O1xuXG5jb25zdCB0YWJUaXRsZUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2s7ZmxleDowIDEgYXV0bztvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7bWFyZ2luLWlubGluZS1zdGFydDowcHg7bWFyZ2luLWlubGluZS1lbmQ6MS4yNXJlbX06aG9zdChbbGF5b3V0PWNlbnRlcl1bc2NhbGU9c10pLDpob3N0KFtsYXlvdXQ9Y2VudGVyXVtzY2FsZT1tXSksOmhvc3QoW2xheW91dD1jZW50ZXJdW3NjYWxlPWxdKXttYXJnaW4tYmxvY2s6MHB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1pbmxpbmUtZW5kOjBweDtmbGV4LWJhc2lzOjEycmVtfTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtzY2FsZT1zXSkgLmNvbnRlbnQsOmhvc3QoW2xheW91dD1jZW50ZXJdW3NjYWxlPW1dKSAuY29udGVudCw6aG9zdChbbGF5b3V0PWNlbnRlcl1bc2NhbGU9bF0pIC5jb250ZW50e21hcmdpbjphdXRvfTpob3N0KFtsYXlvdXQ9Y2VudGVyXVtjbG9zYWJsZV0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lLXN0YXJ0OjMycHh9Omhvc3QoW2xheW91dD1jZW50ZXJdW2JvcmRlcmVkXVtjbG9zYWJsZV1bc2NhbGU9c10pIC5jb250ZW50e3BhZGRpbmctaW5saW5lLXN0YXJ0OjM2cHh9Omhvc3QoW2xheW91dD1jZW50ZXJdW2JvcmRlcmVkXVtjbG9zYWJsZV1bc2NhbGU9bV0pIC5jb250ZW50e3BhZGRpbmctaW5saW5lLXN0YXJ0OjQwcHh9Omhvc3QoW2xheW91dD1jZW50ZXJdW2Nsb3NhYmxlXVtzY2FsZT1sXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NDBweH06aG9zdChbbGF5b3V0PWNlbnRlcl1bY2xvc2FibGVdW2JvcmRlcmVkXVtzY2FsZT1sXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NTJweH06aG9zdChbcG9zaXRpb249Ym90dG9tXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stZW5kLXdpZHRoOjBweDtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MnB4O2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6c29saWR9Omhvc3QoW2Nsb3NlZF0pe2Rpc3BsYXk6bm9uZX0uY29udGFpbmVye291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoOmZvY3VzKSAuY29udGFpbmVye291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdCg6Zm9jdXMpIC5jb250YWluZXI6Zm9jdXMtd2l0aGlue291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QoOmFjdGl2ZSkgYSw6aG9zdCg6Zm9jdXMpIGEsOmhvc3QoOmhvdmVyKSBhe2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2Rpc2FibGVkXSkgLmNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MC41fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbc2NhbGU9c10pe21hcmdpbi1pbmxpbmUtZW5kOjFyZW19Omhvc3QoW3NjYWxlPXNdKSAuY29udGVudHtwYWRkaW5nLWJsb2NrOjAuMjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1sXSl7bWFyZ2luLWlubGluZS1lbmQ6MS41cmVtfTpob3N0KFtzY2FsZT1sXSkgLmNvbnRlbnR7cGFkZGluZy1ibG9jazowLjYyNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX0uY29udGFpbmVye2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7Y3Vyc29yOnBvaW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoycHg7cGFkZGluZy1pbmxpbmU6MHB4O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItYmxvY2stZW5kLXN0eWxlOnNvbGlkfS5jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uY2FsY2l0ZS10YWItdGl0bGUtLWljb257cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLXNlbGY6Y2VudGVyfS5jYWxjaXRlLXRhYi10aXRsZS0taWNvbiBzdmd7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNvbnRlbnQtLWhhcy10ZXh0e3BhZGRpbmc6MC4yNXJlbX0uY29udGVudC0taGFzLXRleHQgLmNhbGNpdGUtdGFiLXRpdGxlLS1pY29uLmljb24tc3RhcnR7bWFyZ2luLWlubGluZS1lbmQ6MC41cmVtfS5jb250ZW50LS1oYXMtdGV4dCAuY2FsY2l0ZS10YWItdGl0bGUtLWljb24uaWNvbi1lbmR7bWFyZ2luLWlubGluZS1zdGFydDowLjVyZW19LmNsb3NlLWJ1dHRvbntkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2Jsb2NrLXNpemU6Y2FsYygxMDAlIC0gMnB4KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtYnV0dG9uLXRyYW5zcGFyZW50LTEpO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b30uY2xvc2UtYnV0dG9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKTtvdXRsaW5lLW9mZnNldDotMXB4fS5jbG9zZS1idXR0b246Zm9jdXMsLmNsb3NlLWJ1dHRvbjpob3Zlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9LmNsb3NlLWJ1dHRvbjphY3RpdmV7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5jbG9zZS1idXR0b24gY2FsY2l0ZS1pY29ue2NvbG9yOmluaGVyaXR9Omhvc3QoW2ljb24tc3RhcnRdW2ljb24tZW5kXSkgLmNhbGNpdGUtdGFiLXRpdGxlLS1pY29uOmZpcnN0LWNoaWxke21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbX06aG9zdChbYm9yZGVyZWRdKXttYXJnaW4taW5saW5lLWVuZDowfTpob3N0KFtib3JkZXJlZF1bc2VsZWN0ZWRdKXtib3gtc2hhZG93Omluc2V0IDBweCAtMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX06aG9zdChbYm9yZGVyZWRdW3NlbGVjdGVkXVtwb3NpdGlvbj1ib3R0b21dKXtib3gtc2hhZG93Omluc2V0IDAgMnB4IDAgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtib3JkZXJlZF06aG92ZXIpIC5jb250YWluZXIsOmhvc3QoW2JvcmRlcmVkXTpmb2N1cykgLmNvbnRhaW5lciw6aG9zdChbYm9yZGVyZWRdOmFjdGl2ZSkgLmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdChbYm9yZGVyZWRdOmhvdmVyKSAuY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1idXR0b24tdHJhbnNwYXJlbnQtaG92ZXIpfTpob3N0KFtjbG9zYWJsZV0pIC5jb250YWluZXIsOmhvc3QoW2JvcmRlcmVkXSkgLmNvbnRhaW5lcntib3JkZXItaW5saW5lLXN0YXJ0OjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItaW5saW5lLWVuZDoxcHggc29saWQgdHJhbnNwYXJlbnR9Omhvc3QoW2Nsb3NhYmxlXSkgLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uLDpob3N0KFtib3JkZXJlZF0pIC5jb250YWluZXIgLmNsb3NlLWJ1dHRvbnttYXJnaW4taW5saW5lOjB9Omhvc3QoW2Nsb3NhYmxlXSkgLmNvbnRlbnR7Ym94LXNpemluZzpib3JkZXItYm94O2Jsb2NrLXNpemU6MTAwJTtib3JkZXItYmxvY2stZW5kLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KFtjbG9zYWJsZV1bcG9zaXRpb249Ym90dG9tXSkgLmNvbnRhaW5lciw6aG9zdChbYm9yZGVyZWRdW3Bvc2l0aW9uPWJvdHRvbV0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOnVuc2V0fTpob3N0KFtzZWxlY3RlZF1bYm9yZGVyZWRdKSAuY29udGFpbmVye2JvcmRlci1pbmxpbmUtc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7Ym9yZGVyLWlubGluZS1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Omhvc3QoW2JvcmRlcmVkXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmU6MC43NXJlbX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPXNdKSAuY29udGVudHtwYWRkaW5nLWlubGluZTowLjVyZW19Omhvc3QoW2JvcmRlcmVkXVtzY2FsZT1sXSkgLmNvbnRlbnR7cGFkZGluZy1pbmxpbmU6MXJlbX1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7Omhvc3R7b3V0bGluZS13aWR0aDowO291dGxpbmUtb2Zmc2V0OjB9Omhvc3QoOmZvY3VzKSAuY29udGFpbmVye291dGxpbmUtY29sb3I6aGlnaGxpZ2h0fTpob3N0KFtib3JkZXJlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLWVuZC1zdHlsZTpzb2xpZH06aG9zdChbYm9yZGVyZWRdW3Bvc2l0aW9uPWJvdHRvbV0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOnNvbGlkfTpob3N0KFtib3JkZXJlZF1bc2VsZWN0ZWRdKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1lbmQtc3R5bGU6bm9uZX06aG9zdChbYm9yZGVyZWRdW3Bvc2l0aW9uPWJvdHRvbV1bc2VsZWN0ZWRdKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1zdHlsZTpub25lfX1cIjtcblxuY29uc3QgVGFiVGl0bGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVRhYnNBY3RpdmF0ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRhYnNBY3RpdmF0ZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNBY3RpdmF0ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFic0FjdGl2YXRlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVRhYnNDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRhYnNDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFic0Nsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTmV4dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTmV4dFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c1ByZXZpb3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNQcmV2aW91c1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0ZpcnN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNGaXJzdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0xhc3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYnNGb2N1c0xhc3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFiSWNvbkNoYW5nZWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRhYkljb25DaGFuZ2VkXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmNsb3NlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZVRhYlRpdGxlQW5kTm90aWZ5KCk7XG4gICAgfTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBTdGF0ZS9Qcm9wc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKiB3YXRjaGVzIGZvciBjaGFuZ2luZyB0ZXh0IGNvbnRlbnQgKi9cbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMudXBkYXRlSGFzVGV4dCgpKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJJY29uQ2hhbmdlZC5lbWl0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtdGFiLXRpdGxlLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2FibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb25FbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxheW91dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ib3JkZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFiID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udHJvbHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gIH1cbiAgc2VsZWN0ZWRIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmVtaXRBY3RpdmVUYWIoZmFsc2UpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zZXR1cFRleHRDb250ZW50T2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnBhcmVudFRhYk5hdkVsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10YWItbmF2XCIpO1xuICAgIHRoaXMucGFyZW50VGFic0VsID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10YWJzXCIpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIC8vIERpc3BhdGNoaW5nIHRvIGJvZHkgaW4gb3JkZXIgdG8gYmUgbGlzdGVuZWQgYnkgb3RoZXIgZWxlbWVudHMgdGhhdCBhcmUgc3RpbGwgY29ubmVjdGVkIHRvIHRoZSBET00uXG4gICAgZG9jdW1lbnQuYm9keT8uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlVGFiVGl0bGVVbnJlZ2lzdGVyXCIsIHtcbiAgICAgIGRldGFpbDogdGhpcy5lbFxuICAgIH0pKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICB7XG4gICAgICB0aGlzLnVwZGF0ZUhhc1RleHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFiICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuZW1pdEFjdGl2ZVRhYihmYWxzZSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50VGFic0VsKSB7XG4gICAgICB0aGlzLmxheW91dCA9IHRoaXMucGFyZW50VGFic0VsLmxheW91dDtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBhcmVudFRhYnNFbC5wb3NpdGlvbjtcbiAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnBhcmVudFRhYnNFbC5zY2FsZTtcbiAgICAgIHRoaXMuYm9yZGVyZWQgPSB0aGlzLnBhcmVudFRhYnNFbC5ib3JkZXJlZDtcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNhc2Ugd2hlbiB0YWItbmF2IGlzIG9ubHkgcGFyZW50XG4gICAgaWYgKCF0aGlzLnBhcmVudFRhYnNFbCAmJiB0aGlzLnBhcmVudFRhYk5hdkVsKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RWxlbWVudFByb3AodGhpcy5wYXJlbnRUYWJOYXZFbCwgXCJwb3NpdGlvblwiLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc2NhbGUgPSBnZXRFbGVtZW50UHJvcCh0aGlzLnBhcmVudFRhYk5hdkVsLCBcInNjYWxlXCIsIHRoaXMuc2NhbGUpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgY2xvc2VkIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gZWwuaWQgfHwgdGhpcy5ndWlkO1xuICAgIGNvbnN0IGljb25TdGFydEVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogeyBbQ1NTLnRpdGxlSWNvbl06IHRydWUsIFtDU1MuaWNvblN0YXJ0XTogdHJ1ZSB9LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsID09PSBcInN0YXJ0XCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvblN0YXJ0LCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICBjb25zdCBpY29uRW5kRWwgPSAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiB7IFtDU1MudGl0bGVJY29uXTogdHJ1ZSwgW0NTUy5pY29uRW5kXTogdHJ1ZSB9LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsID09PSBcImVuZFwiIHx8IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiLCBpY29uOiB0aGlzLmljb25FbmQsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1jb250cm9sc1wiOiB0aGlzLmNvbnRyb2xzLCBcImFyaWEtc2VsZWN0ZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLnNlbGVjdGVkKSwgaWQ6IGlkLCByb2xlOiBcInRhYlwiLCB0YWJJbmRleDogdGhpcy5zZWxlY3RlZCA/IDAgOiAtMSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgICBbQ1NTLmljb25QcmVzZW50XTogISF0aGlzLmljb25TdGFydCB8fCAhIXRoaXMuaWNvbkVuZFxuICAgICAgfSwgaGlkZGVuOiBjbG9zZWQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5jb250ZW50XTogdHJ1ZSwgW0NTUy5jb250ZW50SGFzVGV4dF06IHRoaXMuaGFzVGV4dCB9IH0sIHRoaXMuaWNvblN0YXJ0ID8gaWNvblN0YXJ0RWwgOiBudWxsLCBoKFwic2xvdFwiLCBudWxsKSwgdGhpcy5pY29uRW5kID8gaWNvbkVuZEVsIDogbnVsbCksIHRoaXMucmVuZGVyQ2xvc2VCdXR0b24oKSkpKTtcbiAgfVxuICByZW5kZXJDbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCB7IGNsb3NhYmxlLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICByZXR1cm4gY2xvc2FibGUgPyAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiBtZXNzYWdlcy5jbG9zZSwgY2xhc3M6IENTUy5jbG9zZUJ1dHRvbiwgZGlzYWJsZWQ6IGZhbHNlLCBrZXk6IENTUy5jbG9zZUJ1dHRvbiwgb25DbGljazogdGhpcy5jbG9zZUNsaWNrSGFuZGxlciwgdGl0bGU6IG1lc3NhZ2VzLmNsb3NlLCB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuY2xvc2VCdXR0b25FbCA9IGVsKSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogSUNPTlMuY2xvc2UsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKSA6IG51bGw7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRhYlRpdGxlUmVnaXN0ZXIuZW1pdChhd2FpdCB0aGlzLmdldFRhYklkZW50aWZpZXIoKSk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzLCAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgICB9KTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbnRlcm5hbFRhYkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXRUYWJzRWwgPSBldmVudFxuICAgICAgLmNvbXBvc2VkUGF0aCgpXG4gICAgICAuZmluZCgoZWwpID0+IGVsLnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1UQUJTXCIpO1xuICAgIGlmICh0YXJnZXRUYWJzRWwgIT09IHRoaXMucGFyZW50VGFic0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnRhYikge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFiID09PSBldmVudC5kZXRhaWwudGFiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0VGFiSW5kZXgoKS50aGVuKChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gaW5kZXggPT09IGV2ZW50LmRldGFpbC50YWI7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXRBY3RpdmVUYWIoKTtcbiAgfVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlIFwiIFwiOlxuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIGlmICghZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5jbG9zZUJ1dHRvbkVsKSkge1xuICAgICAgICAgIHRoaXMuZW1pdEFjdGl2ZVRhYigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZ2V0RWxlbWVudERpcih0aGlzLmVsKSA9PT0gXCJsdHJcIikge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzTmV4dC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNQcmV2aW91cy5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChnZXRFbGVtZW50RGlyKHRoaXMuZWwpID09PSBcImx0clwiKSB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNQcmV2aW91cy5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNOZXh0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGFic0ZvY3VzRmlyc3QuZW1pdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzRm9jdXNMYXN0LmVtaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSB0aXRsZSB3aXRoaW4gdGhlIGBjYWxjaXRlLXRhYi1uYXZgLlxuICAgKi9cbiAgYXN5bmMgZ2V0VGFiSW5kZXgoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwobm9kZUxpc3RUb0FycmF5KHRoaXMuZWwucGFyZW50RWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKChlbCkgPT4gZWwubWF0Y2hlcyhcImNhbGNpdGUtdGFiLXRpdGxlXCIpKSwgdGhpcy5lbCk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgZ2V0VGFiSWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy50YWIgPyB0aGlzLnRhYiA6IHRoaXMuZ2V0VGFiSW5kZXgoKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHRhYklkc1xuICAgKiBAcGFyYW0gdGl0bGVJZHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyB1cGRhdGVBcmlhSW5mbyh0YWJJZHMgPSBbXSwgdGl0bGVJZHMgPSBbXSkge1xuICAgIHRoaXMuY29udHJvbHMgPSB0YWJJZHNbdGl0bGVJZHMuaW5kZXhPZih0aGlzLmVsLmlkKV0gfHwgbnVsbDtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIHVwZGF0ZUhhc1RleHQoKSB7XG4gICAgdGhpcy5oYXNUZXh0ID0gdGhpcy5lbC50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoID4gMDtcbiAgfVxuICBzZXR1cFRleHRDb250ZW50T2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICB9XG4gIGVtaXRBY3RpdmVUYWIodXNlclRyaWdnZXJlZCA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXlsb2FkID0geyB0YWI6IHRoaXMudGFiIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzQWN0aXZhdGUuZW1pdChwYXlsb2FkKTtcbiAgICBpZiAodXNlclRyaWdnZXJlZCkge1xuICAgICAgLy8gZW1pdCBpbiB0aGUgbmV4dCBmcmFtZSB0byBsZXQgaW50ZXJuYWwgZXZlbnRzIHN5bmMgdXBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmNhbGNpdGVUYWJzQWN0aXZhdGUuZW1pdCgpKTtcbiAgICB9XG4gIH1cbiAgY2xvc2VUYWJUaXRsZUFuZE5vdGlmeSgpIHtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUYWJzQ2xvc2UuZW1pdCh7IHRhYjogdGhpcy50YWIgfSk7XG4gICAgdGhpcy5jYWxjaXRlVGFic0Nsb3NlLmVtaXQoKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic2VsZWN0ZWRcIjogW1wic2VsZWN0ZWRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuVGFiVGl0bGUuc3R5bGUgPSB0YWJUaXRsZUNzcztcblxuY29uc3QgU0xPVFMgPSB7XG4gIHRpdGxlR3JvdXA6IFwidGl0bGUtZ3JvdXBcIlxufTtcblxuY29uc3QgdGFic0NzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoW2JvcmRlcmVkXSl7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfTpob3N0KFtib3JkZXJlZF06bm90KFtwb3NpdGlvbj1ib3R0b21dKSkgOjpzbG90dGVkKGNhbGNpdGUtdGFiLW5hdil7bWFyZ2luLWJsb2NrLWVuZDotMXB4fTpob3N0KFtib3JkZXJlZF1bcG9zaXRpb249Ym90dG9tXSl7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpLCBpbnNldCAwIC0xcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdChbYm9yZGVyZWRdKSBzZWN0aW9ue2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPXNdKSBzZWN0aW9ue3BhZGRpbmc6MC43NXJlbX06aG9zdChbYm9yZGVyZWRdW3NjYWxlPW1dKSBzZWN0aW9ue3BhZGRpbmc6MC41cmVtfTpob3N0KFtib3JkZXJlZF1bc2NhbGU9bF0pIHNlY3Rpb257cGFkZGluZzoxcmVtfTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSk7Ym9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOnNvbGlkfTpob3N0KFtwb3NpdGlvbj1ib3R0b21dKSBzZWN0aW9ue2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2JvcmRlci1ibG9jay1zdGFydC13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX06aG9zdChbcG9zaXRpb249Ym90dG9tXTpub3QoW2JvcmRlcmVkXSkpIHNlY3Rpb257Ym9yZGVyLWJsb2NrLWVuZC1zdHlsZTpzb2xpZH1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7Omhvc3QoW2JvcmRlcmVkXSkgc2VjdGlvbntib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4fTpob3N0KFtwb3NpdGlvbj1ib3R0b21dW2JvcmRlcmVkXSkgc2VjdGlvbntib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MXB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fX1cIjtcblxuY29uc3QgVGFicyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5sYXlvdXQgPSBcImlubGluZVwiO1xuICAgIHRoaXMucG9zaXRpb24gPSBcInRvcFwiO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmJvcmRlcmVkID0gZmFsc2U7XG4gICAgdGhpcy50aXRsZXMgPSBbXTtcbiAgICB0aGlzLnRhYnMgPSBbXTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRpdGxlR3JvdXAgfSksIGgoXCJzZWN0aW9uXCIsIG51bGwsIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjYWxjaXRlSW50ZXJuYWxUYWJUaXRsZVJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZXMgPSBbLi4udGhpcy50aXRsZXMsIGV2ZW50LnRhcmdldF07XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZVRhYlRpdGxlVW5yZWdpc3RlcihldmVudCkge1xuICAgIHRoaXMudGl0bGVzID0gdGhpcy50aXRsZXMuZmlsdGVyKChlbCkgPT4gZWwgIT09IGV2ZW50LmRldGFpbCk7XG4gICAgdGhpcy5yZWdpc3RyeUhhbmRsZXIoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2FsY2l0ZUludGVybmFsVGFiUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICB0aGlzLnRhYnMgPSBbLi4udGhpcy50YWJzLCBldmVudC50YXJnZXRdO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNhbGNpdGVUYWJVbnJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgdGhpcy50YWJzID0gdGhpcy50YWJzLmZpbHRlcigoZWwpID0+IGVsICE9PSBldmVudC5kZXRhaWwpO1xuICAgIHRoaXMucmVnaXN0cnlIYW5kbGVyKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqXG4gICAqIE1hdGNoZXMgdXAgZWxlbWVudHMgZnJvbSB0aGUgaW50ZXJuYWwgYHRhYnNgIGFuZCBgdGl0bGVzYCB0byBhdXRvbWF0aWNhbGx5XG4gICAqIHVwZGF0ZSB0aGUgQVJJQSBhdHRyaWJ1dGVzIGFuZCBsaW5rIGA8Y2FsY2l0ZS10YWI+YCBhbmRcbiAgICogYDxjYWxjaXRlLXRhYi10aXRsZT5gIGNvbXBvbmVudHMuXG4gICAqL1xuICBhc3luYyByZWdpc3RyeUhhbmRsZXIoKSB7XG4gICAgbGV0IHRhYklkcztcbiAgICBsZXQgdGl0bGVJZHM7XG4gICAgLy8gZGV0ZXJtaW5lIGlmIHdlIGFyZSB1c2luZyBgdGFiYCBiYXNlZCBvciBgaW5kZXhgIGJhc2VkIHRhYiBpZGVudGlmaWVycy5cbiAgICBpZiAodGhpcy50YWJzLnNvbWUoKGVsKSA9PiBlbC50YWIpIHx8IHRoaXMudGl0bGVzLnNvbWUoKGVsKSA9PiBlbC50YWIpKSB7XG4gICAgICAvLyBpZiB3ZSBhcmUgdXNpbmcgYHRhYmAgYmFzZWQgaWRlbnRpZmllcnMgc29ydCBieSBgdGFiYCB0byBhY2NvdW50IGZvclxuICAgICAgLy8gcG9zc2libGUgb3V0IG9mIG9yZGVyIHRhYnMgYW5kIGdldCB0aGUgaWQgb2YgZWFjaCB0YWJcbiAgICAgIHRhYklkcyA9IHRoaXMudGFicy5zb3J0KChhLCBiKSA9PiBhLnRhYi5sb2NhbGVDb21wYXJlKGIudGFiKSkubWFwKChlbCkgPT4gZWwuaWQpO1xuICAgICAgdGl0bGVJZHMgPSB0aGlzLnRpdGxlcy5zb3J0KChhLCBiKSA9PiBhLnRhYi5sb2NhbGVDb21wYXJlKGIudGFiKSkubWFwKChlbCkgPT4gZWwuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIHdlIGFyZSB1c2luZyBpbmRleCBiYXNlZCB0YWJzIHRoZW4gdGhlIGA8Y2FsY2l0ZS10YWI+YCBhbmRcbiAgICAgIC8vIGA8Y2FsY2l0ZS10YWItdGl0bGU+YCBtaWdodCBoYXZlIGJlZW4gcmVuZGVyZWQgb3V0IG9mIG9yZGVyIHNvIHRoZVxuICAgICAgLy8gb3JkZXIgb2YgYHRoaXMudGFic2AgYW5kIGB0aGlzLnRpdGxlc2AgbWlnaHQgbm90IHJlZmxlY3QgdGhlIERPTSBzdGF0ZSxcbiAgICAgIC8vIGFuZCBtaWdodCBub3QgbWF0Y2ggZWFjaCBvdGhlciBzbyB3ZSBuZWVkIHRvIGdldCB0aGUgaW5kZXggb2YgYWxsIHRoZVxuICAgICAgLy8gdGFicyBhbmQgdGl0bGVzIGluIHRoZSBET00gb3JkZXIgdG8gbWF0Y2ggdGhlbSB1cCBhcyBhIHNvdXJjZSBvZiB0cnV0aFxuICAgICAgY29uc3QgdGFiRG9tSW5kZXhlcyA9IGF3YWl0IFByb21pc2UuYWxsKHRoaXMudGFicy5tYXAoKGVsKSA9PiBlbC5nZXRUYWJJbmRleCgpKSk7XG4gICAgICBjb25zdCB0aXRsZURvbUluZGV4ZXMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLnRpdGxlcy5tYXAoKGVsKSA9PiBlbC5nZXRUYWJJbmRleCgpKSk7XG4gICAgICAvLyBvbmNlIHdlIGhhdmUgdGhlIERPTSBvcmRlciBhcyBhIHNvdXJjZSBvZiB0cnV0aCB3ZSBjYW4gYnVpbGQgdGhlXG4gICAgICAvLyBtYXRjaGluZyB0YWJJZHMgYW5kIHRpdGxlSWRzIGFycmF5c1xuICAgICAgdGFiSWRzID0gdGFiRG9tSW5kZXhlcy5yZWR1Y2UoKGlkcywgaW5kZXhJbkRPTSwgcmVnaXN0cnlJbmRleCkgPT4ge1xuICAgICAgICBpZHNbaW5kZXhJbkRPTV0gPSB0aGlzLnRhYnNbcmVnaXN0cnlJbmRleF0uaWQ7XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgICB9LCBbXSk7XG4gICAgICB0aXRsZUlkcyA9IHRpdGxlRG9tSW5kZXhlcy5yZWR1Y2UoKGlkcywgaW5kZXhJbkRPTSwgcmVnaXN0cnlJbmRleCkgPT4ge1xuICAgICAgICBpZHNbaW5kZXhJbkRPTV0gPSB0aGlzLnRpdGxlc1tyZWdpc3RyeUluZGV4XS5pZDtcbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgLy8gcGFzcyBhbGwgb3VyIG5ldyBhcmlhIGluZm9ybWF0aW9uIHRvIGVhY2ggYDxjYWxjaXRlLXRhYj5gIGFuZFxuICAgIC8vIGA8Y2FsY2l0ZS10YWItdGl0bGU+YCB3aGljaCB3aWxsIGNoZWNrIGlmIHRoZXkgY2FuIHVwZGF0ZSB0aGVpciBpbnRlcm5hbFxuICAgIC8vIGBjb250cm9sbGVkYCBvciBgbGFiZWxlZEJ5YCBzdGF0ZXMgYW5kIHJlLXJlbmRlciBpZiBuZWNlc3NhcnlcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgoZWwpID0+IGVsLnVwZGF0ZUFyaWFJbmZvKHRhYklkcywgdGl0bGVJZHMpKTtcbiAgICB0aGlzLnRpdGxlcy5mb3JFYWNoKChlbCkgPT4gZWwudXBkYXRlQXJpYUluZm8odGFiSWRzLCB0aXRsZUlkcykpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5UYWJzLnN0eWxlID0gdGFic0NzcztcblxuZXhwb3J0IHsgVGFiIGFzIGNhbGNpdGVfdGFiLCBUYWJOYXYgYXMgY2FsY2l0ZV90YWJfbmF2LCBUYWJUaXRsZSBhcyBjYWxjaXRlX3RhYl90aXRsZSwgVGFicyBhcyBjYWxjaXRlX3RhYnMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICAgIGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb21wb25lbnQuZWwuY2xpY2sgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2s7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=