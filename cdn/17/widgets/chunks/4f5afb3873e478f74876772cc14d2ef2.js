"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-panel_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-panel.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-panel.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_panel": () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _resources_2cb98f22_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-2cb98f22.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-2cb98f22.js");
/* harmony import */ var _Heading_cc52352f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Heading-cc52352f.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js");
/* harmony import */ var _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-0e9af9d0.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-0e9af9d0.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */














const panelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.action-bar-container{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;border-block-end-color:var(--calcite-ui-border-3)}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;padding:var(--calcite-panel-footer-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}";

const Panel = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calcitePanelClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePanelClose", 6);
    this.calcitePanelScroll = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePanelScroll", 6);
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_4__.c)("resize", () => this.resizeHandler());
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
      const actionBars = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.s)(event).filter((el) => el?.matches("calcite-action-bar"));
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
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  disconnectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    this.resizeObserver?.disconnect();
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.u)(this, this.effectiveLocale);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.containerEl);
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
    const headingNode = heading ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_cc52352f_js__WEBPACK_IMPORTED_MODULE_6__.H, { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.heading, level: headingLevel }, heading)) : null;
    const descriptionNode = description ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.description }, description) : null;
    return !hasHeaderContent && (headingNode || descriptionNode) ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.headerContent, key: "header-content" }, headingNode, descriptionNode)) : null;
  }
  renderActionBar() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.actionBarContainer, hidden: !this.hasActionBar }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.actionBar, onSlotchange: this.handleActionBarSlotChange })));
  }
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.headerContent, onSlotchange: this.handleHeaderContentSlotChange })));
  }
  renderHeaderStartActions() {
    const { hasStartActions } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [_resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActionsStart]: true, [_resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActions]: true }, hidden: !hasStartActions, key: "header-actions-start" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange })));
  }
  renderHeaderActionsEnd() {
    const { close, hasEndActions, messages, closable, hasMenuItems } = this;
    const text = messages.close;
    const closableNode = closable ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { "aria-label": text, "data-test": "close", icon: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.I.close, onClick: close, text: text,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCloseRef })) : null;
    const slotNode = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }));
    const showContainer = hasEndActions || closableNode || hasMenuItems;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [_resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActionsEnd]: true, [_resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.headerActions]: true }, hidden: !showContainer, key: "header-actions-end" }, slotNode, this.renderMenu(), closableNode));
  }
  renderMenu() {
    const { hasMenuItems, messages, menuOpen } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action-menu", { flipPlacements: ["top", "bottom"], hidden: !hasMenuItems, key: "menu", label: messages.options, open: menuOpen, placement: "bottom-end" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { icon: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.I.menu, slot: _resources_2cb98f22_js__WEBPACK_IMPORTED_MODULE_5__.S.trigger, text: messages.options }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange })));
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.header, hidden: !showHeader }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), headerContentNode, this.renderHeaderActionsEnd()));
  }
  renderFooterNode() {
    const { hasFooterContent, hasFooterActions } = this;
    const showFooter = hasFooterContent || hasFooterActions;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.footer, hidden: !showFooter }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "footer-slot", name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.footer, onSlotchange: this.handleFooterSlotChange }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "footer-actions-slot", name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.footerActions, onSlotchange: this.handleFooterActionsSlotChange })));
  }
  renderContent() {
    const { hasFab } = this;
    const defaultSlotNode = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "default-slot" });
    const containerNode = hasFab ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.contentContainer }, defaultSlotNode)) : (defaultSlotNode);
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [_resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.contentWrapper]: true,
        [_resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.contentContainer]: !hasFab,
        [_resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.contentHeight]: hasFab
      }, onScroll: this.panelScrollHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setPanelScrollEl }, containerNode, this.renderFab()));
  }
  renderFab() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.fabContainer, hidden: !this.hasFab }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.S.fab, onSlotchange: this.handleFabSlotChange })));
  }
  render() {
    const { loading, panelKeyDownHandler, closed, closable } = this;
    const panelNode = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("article", { "aria-busy": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), class: _resources_0e9af9d0_js__WEBPACK_IMPORTED_MODULE_7__.C.container, hidden: closed, onKeyDown: panelKeyDownHandler, tabIndex: closable ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerRef }, this.renderHeaderNode(), this.renderActionBar(), this.renderContent(), this.renderFooterNode()));
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.F, null, loading ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-scrim", { loading: loading }) : null, panelNode));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Panel.style = panelCss;




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

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-0e9af9d0.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-0e9af9d0.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS),
/* harmony export */   "I": () => (/* binding */ ICONS),
/* harmony export */   "S": () => (/* binding */ SLOTS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const CSS = {
  actionBarContainer: "action-bar-container",
  backButton: "back-button",
  container: "container",
  header: "header",
  heading: "heading",
  summary: "summary",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  contentContainer: "content-container",
  contentHeight: "content-height",
  fabContainer: "fab-container",
  footer: "footer"
};
const ICONS = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right"
};
const SLOTS = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-2cb98f22.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-2cb98f22.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS),
/* harmony export */   "I": () => (/* binding */ ICONS),
/* harmony export */   "S": () => (/* binding */ SLOTS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNGY1YWZiMzg3M2U0NzhmNzQ4NzY3NzJjYzE0ZDJlZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMscURBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpSDtBQUNHO0FBQzdDO0FBQzZDO0FBQ3REO0FBQ1A7QUFDRjtBQUNzQjtBQUNZO0FBQ29DO0FBQy9GO0FBQ0s7QUFDTjs7QUFFM0IsZ0NBQWdDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLHNCQUFzQixnREFBZ0QsK0JBQStCLHNDQUFzQyxRQUFRLHNCQUFzQixNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGtCQUFrQixhQUFhLGdCQUFnQixpQkFB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QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDTzs7QUFFL0Q7QUFDQTtBQUNBLGlCQUFpQixVQUFVLEdBQUcsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQscURBQVksYUFBYSxVQUFVLGdCQUFnQixLQUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL0hlYWRpbmctY2M1MjM1MmYuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1wYW5lbC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS1hZjE0NmZkNS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9yZXNvdXJjZXMtMGU5YWY5ZDAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vcmVzb3VyY2VzLTJjYjk4ZjIyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Q5bi1hM2UxMjQyMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuXG5mdW5jdGlvbiBjb25zdHJhaW5IZWFkaW5nTGV2ZWwobGV2ZWwpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguY2VpbChsZXZlbCksIDEpLCA2KTtcbn1cbmNvbnN0IEhlYWRpbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IEhlYWRpbmdUYWcgPSBwcm9wcy5sZXZlbCA/IGBoJHtwcm9wcy5sZXZlbH1gIDogXCJkaXZcIjtcbiAgZGVsZXRlIHByb3BzLmxldmVsO1xuICByZXR1cm4gaChIZWFkaW5nVGFnLCB7IC4uLnByb3BzIH0sIGNoaWxkcmVuKTtcbn07XG5cbmV4cG9ydCB7IEhlYWRpbmcgYXMgSCwgY29uc3RyYWluSGVhZGluZ0xldmVsIGFzIGMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEYgYXMgRnJhZ21lbnQsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgcyBhcyBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cywgcCBhcyBmb2N1c0ZpcnN0VGFiYmFibGUsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMkMSB9IGZyb20gJy4vcmVzb3VyY2VzLTJjYjk4ZjIyLmpzJztcbmltcG9ydCB7IEggYXMgSGVhZGluZyB9IGZyb20gJy4vSGVhZGluZy1jYzUyMzUyZi5qcyc7XG5pbXBvcnQgeyBTIGFzIFNMT1RTLCBDIGFzIENTUywgSSBhcyBJQ09OUyB9IGZyb20gJy4vcmVzb3VyY2VzLTBlOWFmOWQwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuXG5jb25zdCBwYW5lbENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bztvdmVyZmxvdzpoaWRkZW47LS1jYWxjaXRlLW1pbi1oZWFkZXItaGVpZ2h0OmNhbGModmFyKC0tY2FsY2l0ZS1pY29uLXNpemUpICogMyk7LS1jYWxjaXRlLXBhbmVsLWZvb3Rlci1wYWRkaW5nOjAuNXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmhlYWRlcnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDthbGlnbi1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uaGVhZGluZ3ttYXJnaW46MHB4O3BhZGRpbmc6MHB4O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX0uaGVhZGVyIC5oZWFkaW5ne2ZsZXg6MSAxIGF1dG87cGFkZGluZzowLjVyZW19LmNvbnRhaW5lcnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpO3BhZGRpbmc6MHB4O3RyYW5zaXRpb246bWF4LWJsb2NrLXNpemUgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgaW5saW5lLXNpemUgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY29udGFpbmVyW2hpZGRlbl17ZGlzcGxheTpub25lfS5oZWFkZXJ7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7aW5saW5lLXNpemU6MTAwJTthbGlnbi1pdGVtczpzdHJldGNoO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7ZmxleDowIDAgYXV0b30uYWN0aW9uLWJhci1jb250YWluZXJ7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQ7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7aW5saW5lLXNpemU6MTAwJTtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5hY3Rpb24tYmFyLWNvbnRhaW5lciA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tYmFyKXtpbmxpbmUtc2l6ZToxMDAlfS5oZWFkZXItY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLWlubGluZTowLjc1cmVtO3BhZGRpbmctYmxvY2s6MC44NzVyZW07bWFyZ2luLWlubGluZS1lbmQ6YXV0b30uaGVhZGVyLWNvbnRlbnQgLmhlYWRpbmcsLmhlYWRlci1jb250ZW50IC5kZXNjcmlwdGlvbntkaXNwbGF5OmJsb2NrO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtwYWRkaW5nOjBweH0uaGVhZGVyLWNvbnRlbnQgLmhlYWRpbmd7bWFyZ2luLWlubGluZTowcHg7bWFyZ2luLWJsb2NrOjBweCAwLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX0uaGVhZGVyLWNvbnRlbnQgLmhlYWRpbmc6b25seS1jaGlsZHttYXJnaW4tYmxvY2stZW5kOjBweH0uaGVhZGVyLWNvbnRlbnQgLmRlc2NyaXB0aW9ue2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmJhY2stYnV0dG9ue2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHh9LmhlYWRlci1hY3Rpb25ze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpzdHJldGNofS5oZWFkZXItYWN0aW9ucy0tZW5ke21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b30uY29udGVudC13cmFwcGVye292ZXJmbG93OmF1dG99LmNvbnRlbnQtaGVpZ2h0e2Jsb2NrLXNpemU6MTAwJX0uY29udGVudC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCl9LmZvb3Rlcntib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkO2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2ZsZXg6MCAwIGF1dG87cGFkZGluZzp2YXIoLS1jYWxjaXRlLXBhbmVsLWZvb3Rlci1wYWRkaW5nKX0uZmFiLWNvbnRhaW5lcntwb3NpdGlvbjpzdGlja3k7aW5zZXQtYmxvY2stZW5kOjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtc3RpY2t5KTttYXJnaW4tYmxvY2s6MHB4O21hcmdpbi1pbmxpbmU6YXV0bztkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MC41cmVtO2luc2V0LWlubGluZTowO2lubGluZS1zaXplOi1tb3otZml0LWNvbnRlbnQ7aW5saW5lLXNpemU6Zml0LWNvbnRlbnR9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBQYW5lbCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlUGFuZWxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBhbmVsQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUGFuZWxTY3JvbGwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQYW5lbFNjcm9sbFwiLCA2KTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5yZXNpemVIYW5kbGVyKCkpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMucmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgcGFuZWxTY3JvbGxFbCB9ID0gdGhpcztcbiAgICAgIGlmICghcGFuZWxTY3JvbGxFbCB8fFxuICAgICAgICB0eXBlb2YgcGFuZWxTY3JvbGxFbC5zY3JvbGxIZWlnaHQgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIHBhbmVsU2Nyb2xsRWwub2Zmc2V0SGVpZ2h0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhbmVsU2Nyb2xsRWwudGFiSW5kZXggPSBwYW5lbFNjcm9sbEVsLnNjcm9sbEhlaWdodCA+IHBhbmVsU2Nyb2xsRWwub2Zmc2V0SGVpZ2h0ID8gMCA6IC0xO1xuICAgIH07XG4gICAgdGhpcy5zZXRDb250YWluZXJSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXJFbCA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnNldENsb3NlUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b25FbCA9IG5vZGU7XG4gICAgfTtcbiAgICB0aGlzLnNldEJhY2tSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5iYWNrQnV0dG9uRWwgPSBub2RlO1xuICAgIH07XG4gICAgdGhpcy5wYW5lbEtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG9zYWJsZSAmJiBldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsY2l0ZVBhbmVsQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5wYW5lbFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVQYW5lbFNjcm9sbC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlckFjdGlvbnNTdGFydFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZXZlbnQudGFyZ2V0LmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFzU3RhcnRBY3Rpb25zID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlckFjdGlvbnNFbmRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc0VuZEFjdGlvbnMgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSGVhZGVyTWVudUFjdGlvbnNTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc01lbnVJdGVtcyA9ICEhZWxlbWVudHMubGVuZ3RoO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25CYXJTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25CYXJzID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS1hY3Rpb24tYmFyXCIpKTtcbiAgICAgIGFjdGlvbkJhcnMuZm9yRWFjaCgoYWN0aW9uQmFyKSA9PiAoYWN0aW9uQmFyLmxheW91dCA9IFwiaG9yaXpvbnRhbFwiKSk7XG4gICAgICB0aGlzLmhhc0FjdGlvbkJhciA9ICEhYWN0aW9uQmFycy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUhlYWRlckNvbnRlbnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc0hlYWRlckNvbnRlbnQgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRm9vdGVyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNGb290ZXJDb250ZW50ID0gISFlbGVtZW50cy5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUZvb3RlckFjdGlvbnNTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc0Zvb3RlckFjdGlvbnMgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRmFiU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNGYWIgPSAhIWVsZW1lbnRzLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuc2V0UGFuZWxTY3JvbGxFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5wYW5lbFNjcm9sbEVsID0gZWw7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlcj8ub2JzZXJ2ZShlbCk7XG4gICAgICAgIHRoaXMucmVzaXplSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuaGVhZGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaGVhZGluZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVudU9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc1N0YXJ0QWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRW5kQWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzTWVudUl0ZW1zID0gZmFsc2U7XG4gICAgdGhpcy5oYXNIZWFkZXJDb250ZW50ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNBY3Rpb25CYXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0Zvb3RlckNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0Zvb3RlckFjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0ZhYiA9IGZhbHNlO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgfVxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgY29tcG9uZW50J3MgY29udGVudCB0byBhIHNwZWNpZmllZCBzZXQgb2YgY29vcmRpbmF0ZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIG15Q2FsY2l0ZUZsb3dJdGVtLnNjcm9sbENvbnRlbnRUbyh7XG4gICAqICAgbGVmdDogMCwgLy8gU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIGFsb25nIHRoZSBYIGF4aXMgdG8gc2Nyb2xsIHRoZSB3aW5kb3cgb3IgZWxlbWVudC5cbiAgICogICB0b3A6IDAsIC8vIFNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBpeGVscyBhbG9uZyB0aGUgWSBheGlzIHRvIHNjcm9sbCB0aGUgd2luZG93IG9yIGVsZW1lbnRcbiAgICogICBiZWhhdmlvcjogXCJhdXRvXCIgLy8gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHNjcm9sbGluZyBzaG91bGQgYW5pbWF0ZSBzbW9vdGhseSAoc21vb3RoKSwgb3IgaGFwcGVuIGluc3RhbnRseSBpbiBhIHNpbmdsZSBqdW1wIChhdXRvLCB0aGUgZGVmYXVsdCB2YWx1ZSkuXG4gICAqIH0pO1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgYXN5bmMgc2Nyb2xsQ29udGVudFRvKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBhbmVsU2Nyb2xsRWw/LnNjcm9sbFRvKG9wdGlvbnMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJIZWFkZXJDb250ZW50KCkge1xuICAgIGNvbnN0IHsgaGVhZGluZywgaGVhZGluZ0xldmVsLCBkZXNjcmlwdGlvbiwgaGFzSGVhZGVyQ29udGVudCB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkaW5nTm9kZSA9IGhlYWRpbmcgPyAoaChIZWFkaW5nLCB7IGNsYXNzOiBDU1MuaGVhZGluZywgbGV2ZWw6IGhlYWRpbmdMZXZlbCB9LCBoZWFkaW5nKSkgOiBudWxsO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGRlc2NyaXB0aW9uID8gaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlc2NyaXB0aW9uIH0sIGRlc2NyaXB0aW9uKSA6IG51bGw7XG4gICAgcmV0dXJuICFoYXNIZWFkZXJDb250ZW50ICYmIChoZWFkaW5nTm9kZSB8fCBkZXNjcmlwdGlvbk5vZGUpID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmhlYWRlckNvbnRlbnQsIGtleTogXCJoZWFkZXItY29udGVudFwiIH0sIGhlYWRpbmdOb2RlLCBkZXNjcmlwdGlvbk5vZGUpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uQmFyKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uQmFyQ29udGFpbmVyLCBoaWRkZW46ICF0aGlzLmhhc0FjdGlvbkJhciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbkJhciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbkJhclNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gb3ZlcnJpZGUgdGhlIGVudGlyZSBoZWFkZXItY29udGVudCBub2RlLlxuICAgKi9cbiAgcmVuZGVySGVhZGVyU2xvdHRlZENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXJDb250ZW50LCBoaWRkZW46ICF0aGlzLmhhc0hlYWRlckNvbnRlbnQsIGtleTogXCJzbG90dGVkLWhlYWRlci1jb250ZW50XCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJDb250ZW50LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyQ29udGVudFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJIZWFkZXJTdGFydEFjdGlvbnMoKSB7XG4gICAgY29uc3QgeyBoYXNTdGFydEFjdGlvbnMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5oZWFkZXJBY3Rpb25zU3RhcnRdOiB0cnVlLCBbQ1NTLmhlYWRlckFjdGlvbnNdOiB0cnVlIH0sIGhpZGRlbjogIWhhc1N0YXJ0QWN0aW9ucywga2V5OiBcImhlYWRlci1hY3Rpb25zLXN0YXJ0XCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXJBY3Rpb25zU3RhcnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zU3RhcnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGNsb3NlLCBoYXNFbmRBY3Rpb25zLCBtZXNzYWdlcywgY2xvc2FibGUsIGhhc01lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZXMuY2xvc2U7XG4gICAgY29uc3QgY2xvc2FibGVOb2RlID0gY2xvc2FibGUgPyAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRleHQsIFwiZGF0YS10ZXN0XCI6IFwiY2xvc2VcIiwgaWNvbjogSUNPTlMuY2xvc2UsIG9uQ2xpY2s6IGNsb3NlLCB0ZXh0OiB0ZXh0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q2xvc2VSZWYgfSkpIDogbnVsbDtcbiAgICBjb25zdCBzbG90Tm9kZSA9IChoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlckFjdGlvbnNFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJBY3Rpb25zRW5kU2xvdENoYW5nZSB9KSk7XG4gICAgY29uc3Qgc2hvd0NvbnRhaW5lciA9IGhhc0VuZEFjdGlvbnMgfHwgY2xvc2FibGVOb2RlIHx8IGhhc01lbnVJdGVtcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhlYWRlckFjdGlvbnNFbmRdOiB0cnVlLCBbQ1NTLmhlYWRlckFjdGlvbnNdOiB0cnVlIH0sIGhpZGRlbjogIXNob3dDb250YWluZXIsIGtleTogXCJoZWFkZXItYWN0aW9ucy1lbmRcIiB9LCBzbG90Tm9kZSwgdGhpcy5yZW5kZXJNZW51KCksIGNsb3NhYmxlTm9kZSkpO1xuICB9XG4gIHJlbmRlck1lbnUoKSB7XG4gICAgY29uc3QgeyBoYXNNZW51SXRlbXMsIG1lc3NhZ2VzLCBtZW51T3BlbiB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIsIHsgZmxpcFBsYWNlbWVudHM6IFtcInRvcFwiLCBcImJvdHRvbVwiXSwgaGlkZGVuOiAhaGFzTWVudUl0ZW1zLCBrZXk6IFwibWVudVwiLCBsYWJlbDogbWVzc2FnZXMub3B0aW9ucywgb3BlbjogbWVudU9wZW4sIHBsYWNlbWVudDogXCJib3R0b20tZW5kXCIgfSwgaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgaWNvbjogSUNPTlMubWVudSwgc2xvdDogU0xPVFMkMS50cmlnZ2VyLCB0ZXh0OiBtZXNzYWdlcy5vcHRpb25zIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmhlYWRlck1lbnVBY3Rpb25zLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlSGVhZGVyTWVudUFjdGlvbnNTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVySGVhZGVyTm9kZSgpIHtcbiAgICBjb25zdCB7IGhhc0hlYWRlckNvbnRlbnQsIGhhc1N0YXJ0QWN0aW9ucywgaGFzRW5kQWN0aW9ucywgY2xvc2FibGUsIGhhc01lbnVJdGVtcyB9ID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJDb250ZW50Tm9kZSA9IHRoaXMucmVuZGVySGVhZGVyQ29udGVudCgpO1xuICAgIGNvbnN0IHNob3dIZWFkZXIgPSBoYXNIZWFkZXJDb250ZW50IHx8XG4gICAgICBoZWFkZXJDb250ZW50Tm9kZSB8fFxuICAgICAgaGFzU3RhcnRBY3Rpb25zIHx8XG4gICAgICBoYXNFbmRBY3Rpb25zIHx8XG4gICAgICBjbG9zYWJsZSB8fFxuICAgICAgaGFzTWVudUl0ZW1zO1xuICAgIHJldHVybiAoaChcImhlYWRlclwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyLCBoaWRkZW46ICFzaG93SGVhZGVyIH0sIHRoaXMucmVuZGVySGVhZGVyU3RhcnRBY3Rpb25zKCksIHRoaXMucmVuZGVySGVhZGVyU2xvdHRlZENvbnRlbnQoKSwgaGVhZGVyQ29udGVudE5vZGUsIHRoaXMucmVuZGVySGVhZGVyQWN0aW9uc0VuZCgpKSk7XG4gIH1cbiAgcmVuZGVyRm9vdGVyTm9kZSgpIHtcbiAgICBjb25zdCB7IGhhc0Zvb3RlckNvbnRlbnQsIGhhc0Zvb3RlckFjdGlvbnMgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2hvd0Zvb3RlciA9IGhhc0Zvb3RlckNvbnRlbnQgfHwgaGFzRm9vdGVyQWN0aW9ucztcbiAgICByZXR1cm4gKGgoXCJmb290ZXJcIiwgeyBjbGFzczogQ1NTLmZvb3RlciwgaGlkZGVuOiAhc2hvd0Zvb3RlciB9LCBoKFwic2xvdFwiLCB7IGtleTogXCJmb290ZXItc2xvdFwiLCBuYW1lOiBTTE9UUy5mb290ZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGb290ZXJTbG90Q2hhbmdlIH0pLCBoKFwic2xvdFwiLCB7IGtleTogXCJmb290ZXItYWN0aW9ucy1zbG90XCIsIG5hbWU6IFNMT1RTLmZvb3RlckFjdGlvbnMsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGb290ZXJBY3Rpb25zU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBoYXNGYWIgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmYXVsdFNsb3ROb2RlID0gaChcInNsb3RcIiwgeyBrZXk6IFwiZGVmYXVsdC1zbG90XCIgfSk7XG4gICAgY29uc3QgY29udGFpbmVyTm9kZSA9IGhhc0ZhYiA/IChoKFwic2VjdGlvblwiLCB7IGNsYXNzOiBDU1MuY29udGVudENvbnRhaW5lciB9LCBkZWZhdWx0U2xvdE5vZGUpKSA6IChkZWZhdWx0U2xvdE5vZGUpO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29udGVudFdyYXBwZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRlbnRDb250YWluZXJdOiAhaGFzRmFiLFxuICAgICAgICBbQ1NTLmNvbnRlbnRIZWlnaHRdOiBoYXNGYWJcbiAgICAgIH0sIG9uU2Nyb2xsOiB0aGlzLnBhbmVsU2Nyb2xsSGFuZGxlcixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFBhbmVsU2Nyb2xsRWwgfSwgY29udGFpbmVyTm9kZSwgdGhpcy5yZW5kZXJGYWIoKSkpO1xuICB9XG4gIHJlbmRlckZhYigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmZhYkNvbnRhaW5lciwgaGlkZGVuOiAhdGhpcy5oYXNGYWIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5mYWIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVGYWJTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgcGFuZWxLZXlEb3duSGFuZGxlciwgY2xvc2VkLCBjbG9zYWJsZSB9ID0gdGhpcztcbiAgICBjb25zdCBwYW5lbE5vZGUgPSAoaChcImFydGljbGVcIiwgeyBcImFyaWEtYnVzeVwiOiB0b0FyaWFCb29sZWFuKGxvYWRpbmcpLCBjbGFzczogQ1NTLmNvbnRhaW5lciwgaGlkZGVuOiBjbG9zZWQsIG9uS2V5RG93bjogcGFuZWxLZXlEb3duSGFuZGxlciwgdGFiSW5kZXg6IGNsb3NhYmxlID8gMCA6IC0xLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q29udGFpbmVyUmVmIH0sIHRoaXMucmVuZGVySGVhZGVyTm9kZSgpLCB0aGlzLnJlbmRlckFjdGlvbkJhcigpLCB0aGlzLnJlbmRlckNvbnRlbnQoKSwgdGhpcy5yZW5kZXJGb290ZXJOb2RlKCkpKTtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGxvYWRpbmcgPyBoKFwiY2FsY2l0ZS1zY3JpbVwiLCB7IGxvYWRpbmc6IGxvYWRpbmcgfSkgOiBudWxsLCBwYW5lbE5vZGUpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuUGFuZWwuc3R5bGUgPSBwYW5lbENzcztcblxuZXhwb3J0IHsgUGFuZWwgYXMgY2FsY2l0ZV9wYW5lbCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gICAgY29tcG9uZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICAgIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcbiAgY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbkJhckNvbnRhaW5lcjogXCJhY3Rpb24tYmFyLWNvbnRhaW5lclwiLFxuICBiYWNrQnV0dG9uOiBcImJhY2stYnV0dG9uXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBoZWFkaW5nOiBcImhlYWRpbmdcIixcbiAgc3VtbWFyeTogXCJzdW1tYXJ5XCIsXG4gIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCIsXG4gIGhlYWRlckNvbnRlbnQ6IFwiaGVhZGVyLWNvbnRlbnRcIixcbiAgaGVhZGVyQWN0aW9uczogXCJoZWFkZXItYWN0aW9uc1wiLFxuICBoZWFkZXJBY3Rpb25zRW5kOiBcImhlYWRlci1hY3Rpb25zLS1lbmRcIixcbiAgaGVhZGVyQWN0aW9uc1N0YXJ0OiBcImhlYWRlci1hY3Rpb25zLS1zdGFydFwiLFxuICBjb250ZW50V3JhcHBlcjogXCJjb250ZW50LXdyYXBwZXJcIixcbiAgY29udGVudENvbnRhaW5lcjogXCJjb250ZW50LWNvbnRhaW5lclwiLFxuICBjb250ZW50SGVpZ2h0OiBcImNvbnRlbnQtaGVpZ2h0XCIsXG4gIGZhYkNvbnRhaW5lcjogXCJmYWItY29udGFpbmVyXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBjbG9zZTogXCJ4XCIsXG4gIG1lbnU6IFwiZWxsaXBzaXNcIixcbiAgYmFja0xlZnQ6IFwiY2hldnJvbi1sZWZ0XCIsXG4gIGJhY2tSaWdodDogXCJjaGV2cm9uLXJpZ2h0XCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uQmFyOiBcImFjdGlvbi1iYXJcIixcbiAgaGVhZGVyQWN0aW9uc1N0YXJ0OiBcImhlYWRlci1hY3Rpb25zLXN0YXJ0XCIsXG4gIGhlYWRlckFjdGlvbnNFbmQ6IFwiaGVhZGVyLWFjdGlvbnMtZW5kXCIsXG4gIGhlYWRlck1lbnVBY3Rpb25zOiBcImhlYWRlci1tZW51LWFjdGlvbnNcIixcbiAgaGVhZGVyQ29udGVudDogXCJoZWFkZXItY29udGVudFwiLFxuICBmYWI6IFwiZmFiXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIixcbiAgZm9vdGVyQWN0aW9uczogXCJmb290ZXItYWN0aW9uc1wiXG59O1xuXG5leHBvcnQgeyBDU1MgYXMgQywgSUNPTlMgYXMgSSwgU0xPVFMgYXMgUyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmNvbnN0IENTUyA9IHtcbiAgbWVudTogXCJtZW51XCIsXG4gIGRlZmF1bHRUcmlnZ2VyOiBcImRlZmF1bHQtdHJpZ2dlclwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICB0cmlnZ2VyOiBcInRyaWdnZXJcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBtZW51OiBcImVsbGlwc2lzXCJcbn07XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBJQ09OUyBhcyBJLCBTTE9UUyBhcyBTIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRBc3NldFBhdGggfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlc1xuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9