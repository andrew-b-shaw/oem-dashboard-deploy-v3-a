"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-panel_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-panel.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-panel.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_panel": () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-99f0ae1b.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js");
/* harmony import */ var _Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Heading-ce737456.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js");
/* harmony import */ var _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-58b3716f.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-58b3716f.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */















const panelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.action-bar-container{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;border-block-end-color:var(--calcite-ui-border-3)}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;padding:var(--calcite-panel-footer-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}";

const Panel = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calcitePanelClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePanelClose", 6);
    this.calcitePanelScroll = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePanelScroll", 6);
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_4__.c)("resize", () => this.resizeHandler());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.resizeHandler = () => {
      const { panelScrollEl } = this;
      if (!panelScrollEl ||
        typeof panelScrollEl.scrollHeight !== "number" ||
        typeof panelScrollEl.offsetHeight !== "number") {
        return;
      }
      panelScrollEl.tabIndex = panelScrollEl.scrollHeight > panelScrollEl.offsetHeight ? 0 : -1;
    };
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.setCloseRef = (node) => {
      this.closeButtonEl = node;
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.panelKeyDownHandler = (event) => {
      if (this.closable && event.key === "Escape" && !event.defaultPrevented) {
        this.close();
        event.preventDefault();
      }
    };
    this.close = () => {
      this.closed = true;
      this.calcitePanelClose.emit();
    };
    this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    };
    this.handleHeaderActionsStartSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasStartActions = !!elements.length;
    };
    this.handleHeaderActionsEndSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasEndActions = !!elements.length;
    };
    this.handleHeaderMenuActionsSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasMenuItems = !!elements.length;
    };
    this.handleActionBarSlotChange = (event) => {
      const actionBars = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.s)(event).filter((el) => el?.matches("calcite-action-bar"));
      actionBars.forEach((actionBar) => (actionBar.layout = "horizontal"));
      this.hasActionBar = !!actionBars.length;
    };
    this.handleHeaderContentSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasHeaderContent = !!elements.length;
    };
    this.handleFooterSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFooterContent = !!elements.length;
    };
    this.handleFooterActionsSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFooterActions = !!elements.length;
    };
    this.handleFabSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFab = !!elements.length;
    };
    this.setPanelScrollEl = (el) => {
      this.panelScrollEl = el;
      this.resizeObserver?.disconnect();
      if (el) {
        this.resizeObserver?.observe(el);
        this.resizeHandler();
      }
    };
    this.closed = false;
    this.disabled = false;
    this.closable = false;
    this.headingLevel = undefined;
    this.loading = false;
    this.heading = undefined;
    this.description = undefined;
    this.menuOpen = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.hasStartActions = false;
    this.hasEndActions = false;
    this.hasMenuItems = false;
    this.hasHeaderContent = false;
    this.hasActionBar = false;
    this.hasFooterContent = false;
    this.hasFooterActions = false;
    this.hasFab = false;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
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
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    this.resizeObserver?.disconnect();
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.containerEl);
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options
   */
  async scrollContentTo(options) {
    this.panelScrollEl?.scrollTo(options);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeaderContent() {
    const { heading, headingLevel, description, hasHeaderContent } = this;
    const headingNode = heading ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_6__.H, { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.heading, level: headingLevel }, heading)) : null;
    const descriptionNode = description ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.description }, description) : null;
    return !hasHeaderContent && (headingNode || descriptionNode) ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.headerContent, key: "header-content" }, headingNode, descriptionNode)) : null;
  }
  renderActionBar() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.actionBarContainer, hidden: !this.hasActionBar }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.actionBar, onSlotchange: this.handleActionBarSlotChange })));
  }
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.headerContent, onSlotchange: this.handleHeaderContentSlotChange })));
  }
  renderHeaderStartActions() {
    const { hasStartActions } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [_resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActionsStart]: true, [_resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActions]: true }, hidden: !hasStartActions, key: "header-actions-start" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange })));
  }
  renderHeaderActionsEnd() {
    const { close, hasEndActions, messages, closable, hasMenuItems } = this;
    const text = messages.close;
    const closableNode = closable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { "aria-label": text, "data-test": "close", icon: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.I.close, onClick: close, text: text,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCloseRef })) : null;
    const slotNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }));
    const showContainer = hasEndActions || closableNode || hasMenuItems;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [_resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActionsEnd]: true, [_resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActions]: true }, hidden: !showContainer, key: "header-actions-end" }, slotNode, this.renderMenu(), closableNode));
  }
  renderMenu() {
    const { hasMenuItems, messages, menuOpen } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action-menu", { flipPlacements: ["top", "bottom"], hidden: !hasMenuItems, key: "menu", label: messages.options, open: menuOpen, placement: "bottom-end" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { icon: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.I.menu, slot: _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_5__.S.trigger, text: messages.options }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange })));
  }
  renderHeaderNode() {
    const { hasHeaderContent, hasStartActions, hasEndActions, closable, hasMenuItems } = this;
    const headerContentNode = this.renderHeaderContent();
    const showHeader = hasHeaderContent ||
      headerContentNode ||
      hasStartActions ||
      hasEndActions ||
      closable ||
      hasMenuItems;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.header, hidden: !showHeader }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), headerContentNode, this.renderHeaderActionsEnd()));
  }
  renderFooterNode() {
    const { hasFooterContent, hasFooterActions } = this;
    const showFooter = hasFooterContent || hasFooterActions;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.footer, hidden: !showFooter }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "footer-slot", name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.footer, onSlotchange: this.handleFooterSlotChange }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "footer-actions-slot", name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.footerActions, onSlotchange: this.handleFooterActionsSlotChange })));
  }
  renderContent() {
    const { hasFab } = this;
    const defaultSlotNode = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "default-slot" });
    const containerNode = hasFab ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.contentContainer }, defaultSlotNode)) : (defaultSlotNode);
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [_resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.contentWrapper]: true,
        [_resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.contentContainer]: !hasFab,
        [_resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.contentHeight]: hasFab
      }, onScroll: this.panelScrollHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setPanelScrollEl }, containerNode, this.renderFab()));
  }
  renderFab() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.fabContainer, hidden: !this.hasFab }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.S.fab, onSlotchange: this.handleFabSlotChange })));
  }
  render() {
    const { loading, panelKeyDownHandler, closed, closable } = this;
    const panelNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("article", { "aria-busy": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), class: _resources_58b3716f_js__WEBPACK_IMPORTED_MODULE_7__.C.container, hidden: closed, onKeyDown: panelKeyDownHandler, tabIndex: closable ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerRef }, this.renderHeaderNode(), this.renderActionBar(), this.renderContent(), this.renderFooterNode()));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, loading ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-scrim", { loading: loading }) : null, panelNode));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Panel.style = panelCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS),
/* harmony export */   "I": () => (/* binding */ ICONS),
/* harmony export */   "S": () => (/* binding */ SLOTS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const CSS = {
  menu: "menu",
  defaultTrigger: "default-trigger"
};
const SLOTS = {
  tooltip: "tooltip",
  trigger: "trigger"
};
const ICONS = {
  menu: "ellipsis"
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMWQ0NTRmYzVhOTczNjU0YmY4N2EzYzcwZmEzYzM5NjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMscURBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7QUFDRztBQUNRO0FBQ1I7QUFDdEQ7QUFDUDtBQUNGO0FBQ3NCO0FBQ1k7QUFDb0M7QUFDL0Y7QUFDSztBQUNGO0FBQ0o7O0FBRTNCLGdDQUFnQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxzQkFBc0IsZ0RBQWdELCtCQUErQixzQ0FBc0MsUUFBUSxzQkFBc0IsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxrQkFBa0IsYUFBYSxnQkFBZ0Is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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9IZWFkaW5nLWNlNzM3NDU2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtcGFuZWwuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vcmVzb3VyY2VzLTk5ZjBhZTFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5cbmZ1bmN0aW9uIGNvbnN0cmFpbkhlYWRpbmdMZXZlbChsZXZlbCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5jZWlsKGxldmVsKSwgMSksIDYpO1xufVxuY29uc3QgSGVhZGluZyA9IChwcm9wcywgY2hpbGRyZW4pID0+IHtcbiAgY29uc3QgSGVhZGluZ1RhZyA9IHByb3BzLmxldmVsID8gYGgke3Byb3BzLmxldmVsfWAgOiBcImRpdlwiO1xuICBkZWxldGUgcHJvcHMubGV2ZWw7XG4gIHJldHVybiBoKEhlYWRpbmdUYWcsIHsgLi4ucHJvcHMgfSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IHsgSGVhZGluZyBhcyBILCBjb25zdHJhaW5IZWFkaW5nTGV2ZWwgYXMgYyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgRiBhcyBGcmFnbWVudCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzLCBwIGFzIGZvY3VzRmlyc3RUYWJiYWJsZSwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgeyBTIGFzIFNMT1RTJDEgfSBmcm9tICcuL3Jlc291cmNlcy05OWYwYWUxYi5qcyc7XG5pbXBvcnQgeyBIIGFzIEhlYWRpbmcgfSBmcm9tICcuL0hlYWRpbmctY2U3Mzc0NTYuanMnO1xuaW1wb3J0IHsgUyBhcyBTTE9UUywgQyBhcyBDU1MsIEkgYXMgSUNPTlMgfSBmcm9tICcuL3Jlc291cmNlcy01OGIzNzE2Zi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcblxuY29uc3QgcGFuZWxDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87b3ZlcmZsb3c6aGlkZGVuOy0tY2FsY2l0ZS1taW4taGVhZGVyLWhlaWdodDpjYWxjKHZhcigtLWNhbGNpdGUtaWNvbi1zaXplKSAqIDMpOy0tY2FsY2l0ZS1wYW5lbC1mb290ZXItcGFkZGluZzowLjVyZW19Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5oZWFkZXJ7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmhlYWRpbmd7bWFyZ2luOjBweDtwYWRkaW5nOjBweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9LmhlYWRlciAuaGVhZGluZ3tmbGV4OjEgMSBhdXRvO3BhZGRpbmc6MC41cmVtfS5jb250YWluZXJ7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtwYWRkaW5nOjBweDt0cmFuc2l0aW9uOm1heC1ibG9jay1zaXplIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyksIGlubGluZS1zaXplIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNvbnRhaW5lcltoaWRkZW5de2Rpc3BsYXk6bm9uZX0uaGVhZGVye2JvcmRlci1ibG9jay1lbmQ6MXB4IHNvbGlkO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpO2lubGluZS1zaXplOjEwMCU7YWxpZ24taXRlbXM6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2ZsZXg6MCAwIGF1dG99LmFjdGlvbi1iYXItY29udGFpbmVye2JvcmRlci1ibG9jay1lbmQ6MXB4IHNvbGlkO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpO2lubGluZS1zaXplOjEwMCU7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX0uYWN0aW9uLWJhci1jb250YWluZXIgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhcil7aW5saW5lLXNpemU6MTAwJX0uaGVhZGVyLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtvdmVyZmxvdzpoaWRkZW47cGFkZGluZy1pbmxpbmU6MC43NXJlbTtwYWRkaW5nLWJsb2NrOjAuODc1cmVtO21hcmdpbi1pbmxpbmUtZW5kOmF1dG99LmhlYWRlci1jb250ZW50IC5oZWFkaW5nLC5oZWFkZXItY29udGVudCAuZGVzY3JpcHRpb257ZGlzcGxheTpibG9jaztvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7cGFkZGluZzowcHh9LmhlYWRlci1jb250ZW50IC5oZWFkaW5ne21hcmdpbi1pbmxpbmU6MHB4O21hcmdpbi1ibG9jazowcHggMC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9LmhlYWRlci1jb250ZW50IC5oZWFkaW5nOm9ubHktY2hpbGR7bWFyZ2luLWJsb2NrLWVuZDowcHh9LmhlYWRlci1jb250ZW50IC5kZXNjcmlwdGlvbntmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5iYWNrLWJ1dHRvbntib3JkZXItd2lkdGg6MHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MXB4fS5oZWFkZXItYWN0aW9uc3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24taXRlbXM6c3RyZXRjaH0uaGVhZGVyLWFjdGlvbnMtLWVuZHttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG99LmNvbnRlbnQtd3JhcHBlcntvdmVyZmxvdzphdXRvfS5jb250ZW50LWhlaWdodHtibG9jay1zaXplOjEwMCV9LmNvbnRlbnQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpfS5mb290ZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0OjFweCBzb2xpZDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtmbGV4OjAgMCBhdXRvO3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1wYW5lbC1mb290ZXItcGFkZGluZyl9LmZhYi1jb250YWluZXJ7cG9zaXRpb246c3RpY2t5O2luc2V0LWJsb2NrLWVuZDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreSk7bWFyZ2luLWJsb2NrOjBweDttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpibG9jaztwYWRkaW5nOjAuNXJlbTtpbnNldC1pbmxpbmU6MDtpbmxpbmUtc2l6ZTotbW96LWZpdC1jb250ZW50O2lubGluZS1zaXplOmZpdC1jb250ZW50fVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgUGFuZWwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVBhbmVsQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQYW5lbENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVBhbmVsU2Nyb2xsID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUGFuZWxTY3JvbGxcIiwgNik7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMucmVzaXplSGFuZGxlcigpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHBhbmVsU2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgICBpZiAoIXBhbmVsU2Nyb2xsRWwgfHxcbiAgICAgICAgdHlwZW9mIHBhbmVsU2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBwYW5lbFNjcm9sbEVsLm9mZnNldEhlaWdodCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwYW5lbFNjcm9sbEVsLnRhYkluZGV4ID0gcGFuZWxTY3JvbGxFbC5zY3JvbGxIZWlnaHQgPiBwYW5lbFNjcm9sbEVsLm9mZnNldEhlaWdodCA/IDAgOiAtMTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q29udGFpbmVyUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyRWwgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5zZXRDbG9zZVJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uRWwgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5zZXRCYWNrUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbkVsID0gbm9kZTtcbiAgICB9O1xuICAgIHRoaXMucGFuZWxLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xvc2FibGUgJiYgZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhbGNpdGVQYW5lbENsb3NlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMucGFuZWxTY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlUGFuZWxTY3JvbGwuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zU3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc1N0YXJ0QWN0aW9ucyA9ICEhZWxlbWVudHMubGVuZ3RoO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zRW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlck1lbnVBY3Rpb25zU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNNZW51SXRlbXMgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uQmFyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uQmFycyA9IHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KS5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtYWN0aW9uLWJhclwiKSk7XG4gICAgICBhY3Rpb25CYXJzLmZvckVhY2goKGFjdGlvbkJhcikgPT4gKGFjdGlvbkJhci5sYXlvdXQgPSBcImhvcml6b250YWxcIikpO1xuICAgICAgdGhpcy5oYXNBY3Rpb25CYXIgPSAhIWFjdGlvbkJhcnMubGVuZ3RoO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVIZWFkZXJDb250ZW50U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNIZWFkZXJDb250ZW50ID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUZvb3RlclNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZXZlbnQudGFyZ2V0LmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFzRm9vdGVyQ29udGVudCA9ICEhZWxlbWVudHMubGVuZ3RoO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb290ZXJBY3Rpb25zU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNGb290ZXJBY3Rpb25zID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUZhYlNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZXZlbnQudGFyZ2V0LmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFzRmFiID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLnNldFBhbmVsU2Nyb2xsRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucGFuZWxTY3JvbGxFbCA9IGVsO1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUoZWwpO1xuICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2FibGUgPSBmYWxzZTtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oYXNTdGFydEFjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0VuZEFjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc01lbnVJdGVtcyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzSGVhZGVyQ29udGVudCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQWN0aW9uQmFyID0gZmFsc2U7XG4gICAgdGhpcy5oYXNGb290ZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNGb290ZXJBY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5oYXNGYWIgPSBmYWxzZTtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgfVxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0byBhIHNwZWNpZmllZCBzZXQgb2YgY29vcmRpbmF0ZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIG15Q2FsY2l0ZUZsb3dJdGVtLnNjcm9sbENvbnRlbnRUbyh7XG4gICAqICAgbGVmdDogMCwgLy8gU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIGFsb25nIHRoZSBYIGF4aXMgdG8gc2Nyb2xsIHRoZSB3aW5kb3cgb3IgZWxlbWVudC5cbiAgICogICB0b3A6IDAsIC8vIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBpeGVscyBhbG9uZyB0aGUgWSBheGlzIHRvIHNjcm9sbCB0aGUgd2luZG93IG9yIGVsZW1lbnRcbiAgICogICBiZWhhdmlvcjogXCJhdXRvXCIgLy8gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYW5pbWF0ZSBzbW9vdGhseSAoc21vb3RoKSwgb3IgaGFwcGVuIGluc3RhbnRseSBpbiBhIHNpbmdsZSBqdW1wIChhdXRvLCB0aGUgZGVmYXVsdCB2YWx1ZSkuXG4gICAqIH0pO1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgYXN5bmMgc2Nyb2xsQ29udGVudFRvKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBhbmVsU2Nyb2xsRWw/LnNjcm9sbFRvKG9wdGlvbnMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJIZWFkZXJDb250ZW50KCkge1xuICAgIGNvbnN0IHsgaGVhZGluZywgaGVhZGluZ0xldmVsLCBkZXNjcmlwdGlvbiwgaGFzSGVhZGVyQ29udGVudCB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGhlYWRpbmcgPyAoaChIZWFkaW5nLCB7IGNsYXNzOiBDU1MuaGVhZGluZywgbGV2ZWw6IGhlYWRpbmdMZXZlbCB9LCBoZWFkaW5nKSkgOiBudWxsO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRlc2NyaXB0aW9uID8gaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlc2NyaXB0aW9uIH0sIGRlc2NyaXB0aW9uKSA6IG51bGw7XG4gICAgcmV0dXJuICFoYXNIZWFkZXJDb250ZW50ICYmIChoZWFkaW5nTm9kZSB8fCBkZXNjcmlwdGlvbk5vZGUpID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmhlYWRlckNvbnRlbnQsIGtleTogXCJoZWFkZXItY29udGVudFwiIH0sIGhlYWRpbmdOb2RlLCBkZXNjcmlwdGlvbk5vZGUpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uQmFyKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uQmFyQ29udGFpbmVyLCBoaWRkZW46ICF0aGlzLmhhc0FjdGlvbkJhciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbkJhciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbkJhclNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gb3ZlcnJpZGUgdGhlIGVudGlyZSBoZWFkZXItY29udGVudCBub2RlLlxuICAgKi9cbiAgcmVuZGVySGVhZGVyU2xvdHRlZENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXJDb250ZW50LCBoaWRkZW46ICF0aGlzLmhhc0hlYWRlckNvbnRlbnQsIGtleTogXCJzbG90dGVkLWhlYWRlci1jb250ZW50XCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJDb250ZW50LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyQ29udGVudFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJIZWFkZXJTdGFydEFjdGlvbnMoKSB7XG4gICAgY29uc3QgeyBoYXNTdGFydEFjdGlvbnMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5oZWFkZXJBY3Rpb25zU3RhcnRdOiB0cnVlLCBbQ1NTLmhlYWRlckFjdGlvbnNdOiB0cnVlIH0sIGhpZGRlbjogIWhhc1N0YXJ0QWN0aW9ucywga2V5OiBcImhlYWRlci1hY3Rpb25zLXN0YXJ0XCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJBY3Rpb25zU3RhcnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zU3RhcnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGNsb3NlLCBoYXNFbmRBY3Rpb25zLCBtZXNzYWdlcywgY2xvc2FibGUsIGhhc01lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZXMuY2xvc2U7XG4gICAgY29uc3QgY2xvc2FibGVOb2RlID0gY2xvc2FibGUgPyAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRleHQsIFwiZGF0YS10ZXN0XCI6IFwiY2xvc2VcIiwgaWNvbjogSUNPTlMuY2xvc2UsIG9uQ2xpY2s6IGNsb3NlLCB0ZXh0OiB0ZXh0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q2xvc2VSZWYgfSkpIDogbnVsbDtcbiAgICBjb25zdCBzbG90Tm9kZSA9IChoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlckFjdGlvbnNFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zRW5kU2xvdENoYW5nZSB9KSk7XG4gICAgY29uc3Qgc2hvd0NvbnRhaW5lciA9IGhhc0VuZEFjdGlvbnMgfHwgY2xvc2FibGVOb2RlIHx8IGhhc01lbnVJdGVtcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhlYWRlckFjdGlvbnNFbmRdOiB0cnVlLCBbQ1NTLmhlYWRlckFjdGlvbnNdOiB0cnVlIH0sIGhpZGRlbjogIXNob3dDb250YWluZXIsIGtleTogXCJoZWFkZXItYWN0aW9ucy1lbmRcIiB9LCBzbG90Tm9kZSwgdGhpcy5yZW5kZXJNZW51KCksIGNsb3NhYmxlTm9kZSkpO1xuICB9XG4gIHJlbmRlck1lbnUoKSB7XG4gICAgY29uc3QgeyBoYXNNZW51SXRlbXMsIG1lc3NhZ2VzLCBtZW51T3BlbiB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIHsgZmxpcFBsYWNlbWVudHM6IFtcInRvcFwiLCBcImJvdHRvbVwiXSwgaGlkZGVuOiAhaGFzTWVudUl0ZW1zLCBrZXk6IFwibWVudVwiLCBsYWJlbDogbWVzc2FnZXMub3B0aW9ucywgb3BlbjogbWVudU9wZW4sIHBsYWNlbWVudDogXCJib3R0b20tZW5kXCIgfSwgaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgaWNvbjogSUNPTlMubWVudSwgc2xvdDogU0xPVFMkMS50cmlnZ2VyLCB0ZXh0OiBtZXNzYWdlcy5vcHRpb25zIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlck1lbnVBY3Rpb25zLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyTWVudUFjdGlvbnNTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyTm9kZSgpIHtcbiAgICBjb25zdCB7IGhhc0hlYWRlckNvbnRlbnQsIGhhc1N0YXJ0QWN0aW9ucywgaGFzRW5kQWN0aW9ucywgY2xvc2FibGUsIGhhc01lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJDb250ZW50Tm9kZSA9IHRoaXMucmVuZGVySGVhZGVyQ29udGVudCgpO1xuICAgIGNvbnN0IHNob3dIZWFkZXIgPSBoYXNIZWFkZXJDb250ZW50IHx8XG4gICAgICBoZWFkZXJDb250ZW50Tm9kZSB8fFxuICAgICAgaGFzU3RhcnRBY3Rpb25zIHx8XG4gICAgICBoYXNFbmRBY3Rpb25zIHx8XG4gICAgICBjbG9zYWJsZSB8fFxuICAgICAgaGFzTWVudUl0ZW1zO1xuICAgIHJldHVybiAoaChcImhlYWRlclwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyLCBoaWRkZW46ICFzaG93SGVhZGVyIH0sIHRoaXMucmVuZGVySGVhZGVyU3RhcnRBY3Rpb25zKCksIHRoaXMucmVuZGVySGVhZGVyU2xvdHRlZENvbnRlbnQoKSwgaGVhZGVyQ29udGVudE5vZGUsIHRoaXMucmVuZGVySGVhZGVyQWN0aW9uc0VuZCgpKSk7XG4gIH1cbiAgcmVuZGVyRm9vdGVyTm9kZSgpIHtcbiAgICBjb25zdCB7IGhhc0Zvb3RlckNvbnRlbnQsIGhhc0Zvb3RlckFjdGlvbnMgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2hvd0Zvb3RlciA9IGhhc0Zvb3RlckNvbnRlbnQgfHwgaGFzRm9vdGVyQWN0aW9ucztcbiAgICByZXR1cm4gKGgoXCJmb290ZXJcIiwgeyBjbGFzczogQ1NTLmZvb3RlciwgaGlkZGVuOiAhc2hvd0Zvb3RlciB9LCBoKFwic2xvdFwiLCB7IGtleTogXCJmb290ZXItc2xvdFwiLCBuYW1lOiBTTE9UUy5mb290ZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGb290ZXJTbG90Q2hhbmdlIH0pLCBoKFwic2xvdFwiLCB7IGtleTogXCJmb290ZXItYWN0aW9ucy1zbG90XCIsIG5hbWU6IFNMT1RTLmZvb3RlckFjdGlvbnMsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGb290ZXJBY3Rpb25zU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBoYXNGYWIgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmYXVsdFNsb3ROb2RlID0gaChcInNsb3RcIiwgeyBrZXk6IFwiZGVmYXVsdC1zbG90XCIgfSk7XG4gICAgY29uc3QgY29udGFpbmVyTm9kZSA9IGhhc0ZhYiA/IChoKFwic2VjdGlvblwiLCB7IGNsYXNzOiBDU1MuY29udGVudENvbnRhaW5lciB9LCBkZWZhdWx0U2xvdE5vZGUpKSA6IChkZWZhdWx0U2xvdE5vZGUpO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGVudFdyYXBwZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRlbnRDb250YWluZXJdOiAhaGFzRmFiLFxuICAgICAgICBbQ1NTLmNvbnRlbnRIZWlnaHRdOiBoYXNGYWJcbiAgICAgIH0sIG9uU2Nyb2xsOiB0aGlzLnBhbmVsU2Nyb2xsSGFuZGxlcixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFBhbmVsU2Nyb2xsRWwgfSwgY29udGFpbmVyTm9kZSwgdGhpcy5yZW5kZXJGYWIoKSkpO1xuICB9XG4gIHJlbmRlckZhYigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmZhYkNvbnRhaW5lciwgaGlkZGVuOiAhdGhpcy5oYXNGYWIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mYWIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGYWJTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgcGFuZWxLZXlEb3duSGFuZGxlciwgY2xvc2VkLCBjbG9zYWJsZSB9ID0gdGhpcztcbiAgICBjb25zdCBwYW5lbE5vZGUgPSAoaChcImFydGljbGVcIiwgeyBcImFyaWEtYnVzeVwiOiB0b0FyaWFCb29sZWFuKGxvYWRpbmcpLCBjbGFzczogQ1NTLmNvbnRhaW5lciwgaGlkZGVuOiBjbG9zZWQsIG9uS2V5RG93bjogcGFuZWxLZXlEb3duSGFuZGxlciwgdGFiSW5kZXg6IGNsb3NhYmxlID8gMCA6IC0xLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q29udGFpbmVyUmVmIH0sIHRoaXMucmVuZGVySGVhZGVyTm9kZSgpLCB0aGlzLnJlbmRlckFjdGlvbkJhcigpLCB0aGlzLnJlbmRlckNvbnRlbnQoKSwgdGhpcy5yZW5kZXJGb290ZXJOb2RlKCkpKTtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGxvYWRpbmcgPyBoKFwiY2FsY2l0ZS1zY3JpbVwiLCB7IGxvYWRpbmc6IGxvYWRpbmcgfSkgOiBudWxsLCBwYW5lbE5vZGUpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuUGFuZWwuc3R5bGUgPSBwYW5lbENzcztcblxuZXhwb3J0IHsgUGFuZWwgYXMgY2FsY2l0ZV9wYW5lbCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmNvbnN0IENTUyA9IHtcbiAgbWVudTogXCJtZW51XCIsXG4gIGRlZmF1bHRUcmlnZ2VyOiBcImRlZmF1bHQtdHJpZ2dlclwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICB0cmlnZ2VyOiBcInRyaWdnZXJcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBtZW51OiBcImVsbGlwc2lzXCJcbn07XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBJQ09OUyBhcyBJLCBTTE9UUyBhcyBTIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=