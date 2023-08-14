"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-tree_2_entry_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-tree_2.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-tree_2.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_tree": () => (/* binding */ Tree),
/* harmony export */   "calcite_tree_item": () => (/* binding */ TreeItem)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */









function isTreeItem(element) {
  return element?.matches("calcite-tree-item");
}
function getEnabledSiblingItem(el, direction) {
  const directionProp = direction === "down" ? "nextElementSibling" : "previousElementSibling";
  let currentEl = el;
  let enabledEl = null;
  while (isTreeItem(currentEl)) {
    if (!currentEl.disabled) {
      enabledEl = currentEl;
      break;
    }
    currentEl = currentEl[directionProp];
  }
  return enabledEl;
}

const treeCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}";

const Tree = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTreeSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTreeSelect", 6);
    this.lines = false;
    this.child = undefined;
    this.scale = "m";
    this.selectionMode = "single";
    this.selectedItems = [];
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillRender() {
    const parent = this.el.parentElement?.closest("calcite-tree");
    this.lines = parent ? parent.lines : this.lines;
    this.scale = parent ? parent.scale : this.scale;
    this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
    this.child = !!parent;
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-multiselectable": this.child
        ? undefined
        : (this.selectionMode === "multiple" || this.selectionMode === "multichildren").toString(), role: !this.child ? "tree" : undefined, tabIndex: this.getRootTabIndex() }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onFocus() {
    if (!this.child) {
      const focusTarget = this.el.querySelector("calcite-tree-item[selected]:not([disabled])") || this.el.querySelector("calcite-tree-item:not([disabled])");
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(focusTarget);
    }
  }
  onFocusIn(event) {
    const focusedFromRootOrOutsideTree = event.relatedTarget === this.el || !this.el.contains(event.relatedTarget);
    if (focusedFromRootOrOutsideTree) {
      // gives user the ability to tab into external elements (modifying tabindex property will not work in firefox)
      this.el.removeAttribute("tabindex");
    }
  }
  onFocusOut(event) {
    const willFocusOutsideTree = !this.el.contains(event.relatedTarget);
    if (willFocusOutsideTree) {
      this.el.tabIndex = this.getRootTabIndex();
    }
  }
  onClick(event) {
    const target = event.target;
    const childItems = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(target.querySelectorAll("calcite-tree-item"));
    if (this.child) {
      return;
    }
    if (!this.child) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.selectionMode === "ancestors" && !this.child) {
      this.updateAncestorTree(event);
      return;
    }
    const isNoneSelectionMode = this.selectionMode === "none";
    const shouldSelect = this.selectionMode !== null &&
      (!target.hasChildren ||
        (target.hasChildren &&
          (this.selectionMode === "children" || this.selectionMode === "multichildren")));
    const shouldDeselectAllChildren = this.selectionMode === "multichildren" && target.hasChildren;
    const shouldModifyToCurrentSelection = !isNoneSelectionMode &&
      event.detail.modifyCurrentSelection &&
      (this.selectionMode === "multiple" || this.selectionMode === "multichildren");
    const shouldClearCurrentSelection = !shouldModifyToCurrentSelection &&
      (((this.selectionMode === "single" || this.selectionMode === "multiple") &&
        childItems.length <= 0) ||
        this.selectionMode === "children" ||
        this.selectionMode === "multichildren");
    const shouldUpdateExpand = ["children", "multichildren"].includes(this.selectionMode) ||
      (["single", "multiple"].includes(this.selectionMode) &&
        target.hasChildren &&
        !event.detail.forceToggle);
    if (!this.child) {
      const targetItems = [];
      if (shouldSelect) {
        targetItems.push(target);
      }
      if (shouldClearCurrentSelection) {
        const selectedItems = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.querySelectorAll("calcite-tree-item[selected]"));
        selectedItems.forEach((treeItem) => {
          if (!targetItems.includes(treeItem)) {
            treeItem.selected = false;
          }
        });
      }
      if (shouldUpdateExpand) {
        if (["single", "multiple"].includes(this.selectionMode)) {
          target.expanded = !target.expanded;
        }
        else if (this.selectionMode === "multichildren") {
          target.expanded = !target.selected;
        }
        else if (this.selectionMode === "children") {
          target.expanded = target.selected ? !target.expanded : true;
        }
      }
      if (shouldDeselectAllChildren) {
        childItems.forEach((item) => {
          item.selected = false;
          if (item.hasChildren) {
            item.expanded = false;
          }
        });
      }
      if (shouldModifyToCurrentSelection) {
        window.getSelection().removeAllRanges();
      }
      if ((shouldModifyToCurrentSelection && target.selected) || event.detail.forceToggle) {
        targetItems.forEach((treeItem) => {
          if (!treeItem.disabled) {
            treeItem.selected = false;
          }
        });
      }
      else if (!isNoneSelectionMode) {
        targetItems.forEach((treeItem) => {
          if (!treeItem.disabled) {
            treeItem.selected = true;
          }
        });
      }
    }
    this.selectedItems = isNoneSelectionMode
      ? [target]
      : (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected);
    this.calciteTreeSelect.emit();
    event.stopPropagation();
  }
  keyDownHandler(event) {
    const root = this.el.closest("calcite-tree:not([child])");
    const target = event.target;
    if (!(root === this.el && target.tagName === "CALCITE-TREE-ITEM" && this.el.contains(target))) {
      return;
    }
    if (event.key === "ArrowDown") {
      const next = getEnabledSiblingItem(target.nextElementSibling, "down");
      if (next) {
        next.focus();
        event.preventDefault();
      }
      return;
    }
    if (event.key === "ArrowUp") {
      const previous = getEnabledSiblingItem(target.previousElementSibling, "up");
      if (previous) {
        previous.focus();
        event.preventDefault();
      }
    }
    if (event.key === "ArrowLeft" && !target.disabled) {
      // When focus is on an open node, closes the node.
      if (target.hasChildren && target.expanded) {
        target.expanded = false;
        event.preventDefault();
        return;
      }
      // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
      const parentItem = target.parentElement.closest("calcite-tree-item");
      if (parentItem && (!target.hasChildren || target.expanded === false)) {
        parentItem.focus();
        event.preventDefault();
        return;
      }
      // When focus is on a root node that is also either an end node or a closed node, does nothing.
      return;
    }
    if (event.key === "ArrowRight" && !target.disabled) {
      if (target.hasChildren) {
        if (target.expanded && (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.y)(this.el).activeElement === target) {
          // When focus is on an open node, moves focus to the first child node.
          getEnabledSiblingItem(target.querySelector("calcite-tree-item"), "down")?.focus();
          event.preventDefault();
        }
        else {
          // When focus is on a closed node, opens the node; focus does not move.
          target.expanded = true;
          event.preventDefault();
        }
      }
      return;
    }
  }
  updateAncestorTree(event) {
    const item = event.target;
    if (item.disabled) {
      return;
    }
    const ancestors = [];
    let parent = item.parentElement.closest("calcite-tree-item");
    while (parent) {
      ancestors.push(parent);
      parent = parent.parentElement.closest("calcite-tree-item");
    }
    const childItems = Array.from(item.querySelectorAll("calcite-tree-item:not([disabled])"));
    const childItemsWithNoChildren = childItems.filter((child) => !child.hasChildren);
    const childItemsWithChildren = childItems.filter((child) => child.hasChildren);
    const futureSelected = item.hasChildren
      ? !(item.selected || item.indeterminate)
      : !item.selected;
    childItemsWithNoChildren.forEach((el) => {
      el.selected = futureSelected;
      el.indeterminate = false;
    });
    function updateItemState(childItems, item) {
      const selected = childItems.filter((child) => child.selected);
      const unselected = childItems.filter((child) => !child.selected);
      item.selected = selected.length === childItems.length;
      item.indeterminate = selected.length > 0 && unselected.length > 0;
    }
    childItemsWithChildren.forEach((el) => {
      const directChildItems = Array.from(el.querySelectorAll(":scope > calcite-tree > calcite-tree-item"));
      updateItemState(directChildItems, el);
    });
    if (item.hasChildren) {
      updateItemState(childItems, item);
    }
    else {
      item.selected = futureSelected;
      item.indeterminate = false;
    }
    ancestors.forEach((ancestor) => {
      const descendants = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(ancestor.querySelectorAll("calcite-tree-item"));
      const activeDescendants = descendants.filter((el) => el.selected);
      if (activeDescendants.length === 0) {
        ancestor.selected = false;
        ancestor.indeterminate = false;
        return;
      }
      const indeterminate = activeDescendants.length < descendants.length;
      ancestor.indeterminate = indeterminate;
      ancestor.selected = !indeterminate;
    });
    this.selectedItems = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected);
    this.calciteTreeSelect.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getRootTabIndex() {
    return !this.child ? 0 : -1;
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Tree.style = treeCss;

const CSS = {
  actionsEnd: "actions-end",
  checkboxLabel: "checkbox-label",
  checkbox: "checkbox",
  chevron: "chevron",
  nodeContainer: "node-container",
  childrenContainer: "children-container",
  bulletPointIcon: "bullet-point",
  checkmarkIcon: "checkmark",
  itemExpanded: "item--expanded",
  iconStart: "icon-start",
  nodeAndActionsContainer: "node-actions-container"
};
const SLOTS = {
  actionsEnd: "actions-end",
  children: "children"
};
const ICONS = {
  bulletPoint: "bullet-point",
  checkmark: "check",
  chevronRight: "chevron-right",
  blank: "blank"
};

const treeItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}[hidden]{display:none}.node-actions-container{display:flex;justify-content:space-between}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .chevron,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .chevron,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .chevron,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:var(--calcite-app-z-index);inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:\"\";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline-color:transparent}:host:focus,:host:active{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:focus:not([disabled])){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;transform-origin:top;overflow:hidden;opacity:0;margin-inline-start:1.25rem;transform:scaleY(0);transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.item--expanded>.children-container{overflow:visible;opacity:1;transform:none;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]):not([selection-mode=none])) .node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected]) .node-container[data-selection-mode=children],:host([has-children][selected]) .node-container[data-selection-mode=multichildren]{color:var(--calcite-ui-brand)}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}";

const TreeItem = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalTreeItemSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTreeItemSelect", 6);
    this.iconClickHandler = (event) => {
      event.stopPropagation();
      this.expanded = !this.expanded;
    };
    this.childrenClickHandler = (event) => event.stopPropagation();
    this.updateParentIsExpanded = (el, expanded) => {
      const items = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.children, {
        all: true,
        selector: "calcite-tree-item"
      });
      items.forEach((item) => (item.parentExpanded = expanded));
    };
    this.actionsEndSlotChangeHandler = (event) => {
      this.hasEndActions = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.disabled = false;
    this.expanded = false;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.selected = false;
    this.parentExpanded = false;
    this.depth = -1;
    this.hasChildren = null;
    this.lines = undefined;
    this.scale = undefined;
    this.indeterminate = false;
    this.selectionMode = undefined;
    this.updateAfterInitialRender = false;
    this.hasEndActions = false;
  }
  expandedHandler(newValue) {
    this.updateParentIsExpanded(this.el, newValue);
  }
  getSelectionMode() {
    this.isSelectionMultiLike =
      this.selectionMode === "multiple" || this.selectionMode === "multichildren";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parentTreeItem = this.el.parentElement?.closest("calcite-tree-item");
    if (this.parentTreeItem) {
      const { expanded } = this.parentTreeItem;
      this.updateParentIsExpanded(this.parentTreeItem, expanded);
    }
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  componentWillRender() {
    this.hasChildren = !!this.el.querySelector("calcite-tree");
    this.depth = 0;
    let parentTree = this.el.closest("calcite-tree");
    if (!parentTree) {
      return;
    }
    this.selectionMode = parentTree.selectionMode;
    this.scale = parentTree.scale || "m";
    this.lines = parentTree.lines;
    let nextParentTree;
    while (parentTree) {
      nextParentTree = parentTree.parentElement?.closest("calcite-tree");
      if (nextParentTree === parentTree) {
        break;
      }
      else {
        parentTree = nextParentTree;
        this.depth = this.depth + 1;
      }
    }
  }
  componentWillLoad() {
    requestAnimationFrame(() => (this.updateAfterInitialRender = true));
  }
  componentDidLoad() {
    this.updateAncestorTree();
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, () => this.parentExpanded || this.depth === 1);
  }
  render() {
    const rtl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el) === "rtl";
    const showBulletPoint = this.selectionMode === "single" || this.selectionMode === "children";
    const showCheckmark = this.selectionMode === "multiple" || this.selectionMode === "multichildren";
    const showBlank = this.selectionMode === "none" && !this.hasChildren;
    const chevron = this.hasChildren ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS.chevron]: true,
        [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_4__.C.rtl]: rtl
      }, "data-test-id": "icon", icon: ICONS.chevronRight, onClick: this.iconClickHandler, scale: this.scale === "l" ? "m" : "s" })) : null;
    const defaultSlotNode = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "default-slot" });
    const checkbox = this.selectionMode === "ancestors" ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: CSS.checkboxLabel, key: "checkbox-label" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-checkbox", { checked: this.selected, class: CSS.checkbox, "data-test-id": "checkbox", indeterminate: this.hasChildren && this.indeterminate, scale: this.scale, tabIndex: -1 }), defaultSlotNode)) : null;
    const selectedIcon = showBulletPoint
      ? ICONS.bulletPoint
      : showCheckmark
        ? ICONS.checkmark
        : showBlank
          ? ICONS.blank
          : null;
    const itemIndicator = selectedIcon ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS.bulletPointIcon]: selectedIcon === ICONS.bulletPoint,
        [CSS.checkmarkIcon]: selectedIcon === ICONS.checkmark,
        [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_4__.C.rtl]: rtl
      }, icon: selectedIcon, scale: this.scale === "l" ? "m" : "s" })) : null;
    const hidden = !(this.parentExpanded || this.depth === 1);
    const isExpanded = this.updateAfterInitialRender && this.expanded;
    const { hasEndActions } = this;
    const slotNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "actionsEndSlot", name: SLOTS.actionsEnd, onSlotchange: this.actionsEndSlotChangeHandler }));
    const iconStartEl = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: this.scale === "l" ? "m" : "s" }));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-expanded": this.hasChildren ? (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(isExpanded) : undefined, "aria-hidden": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(hidden), "aria-selected": this.selected ? "true" : showCheckmark ? "false" : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.itemExpanded]: isExpanded } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.nodeAndActionsContainer }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.nodeContainer]: true,
        [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_4__.C.rtl]: rtl
      }, "data-selection-mode": this.selectionMode,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.defaultSlotWrapper = el) }, chevron, itemIndicator, this.iconStart ? iconStartEl : null, checkbox ? checkbox : defaultSlotNode), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsEnd, hidden: !hasEndActions, ref: (el) => (this.actionSlotWrapper = el) }, slotNode)), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.childrenContainer]: true,
        [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_4__.C.rtl]: rtl
      }, "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, role: this.hasChildren ? "group" : undefined }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.children })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick(event) {
    if (this.disabled || this.isActionEndEvent(event)) {
      return;
    }
    // Solve for if the item is clicked somewhere outside the slotted anchor.
    // Anchor is triggered anywhere you click
    const [link] = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.z)(this.el, "a");
    if (link && event.composedPath()[0].tagName.toLowerCase() !== "a") {
      const target = link.target === "" ? "_self" : link.target;
      window.open(link.href, target);
    }
    this.calciteInternalTreeItemSelect.emit({
      modifyCurrentSelection: this.selectionMode === "ancestors" || this.isSelectionMultiLike,
      forceToggle: false
    });
  }
  keyDownHandler(event) {
    let root;
    if (this.isActionEndEvent(event)) {
      return;
    }
    switch (event.key) {
      case " ":
        if (this.selectionMode === "none") {
          return;
        }
        this.calciteInternalTreeItemSelect.emit({
          modifyCurrentSelection: this.isSelectionMultiLike,
          forceToggle: false
        });
        event.preventDefault();
        break;
      case "Enter":
        if (this.selectionMode === "none") {
          return;
        }
        // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
        const link = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.children).find((el) => el.matches("a"));
        if (link) {
          link.click();
          this.selected = true;
        }
        else {
          this.calciteInternalTreeItemSelect.emit({
            modifyCurrentSelection: this.isSelectionMultiLike,
            forceToggle: false
          });
        }
        event.preventDefault();
        break;
      case "Home":
        root = this.el.closest("calcite-tree:not([child])");
        const firstNode = root.querySelector("calcite-tree-item");
        firstNode?.focus();
        break;
      case "End":
        root = this.el.closest("calcite-tree:not([child])");
        let currentNode = root.children[root.children.length - 1]; // last child
        let currentTree = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(currentNode.children).find((el) => el.matches("calcite-tree"));
        while (currentTree) {
          currentNode = currentTree.children[root.children.length - 1];
          currentTree = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.x)(currentNode.children).find((el) => el.matches("calcite-tree"));
        }
        currentNode?.focus();
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  isActionEndEvent(event) {
    const composedPath = event.composedPath();
    return composedPath.includes(this.actionSlotWrapper);
  }
  /**
   * This is meant to be called in `componentDidLoad` in order to take advantage of the hierarchical component lifecycle
   * and help check for item selection as items are initialized
   *
   * @private
   */
  updateAncestorTree() {
    const parentItem = this.parentTreeItem;
    if (this.selectionMode !== "ancestors" || !parentItem) {
      return;
    }
    if (this.selected) {
      const parentTree = this.el.parentElement;
      const siblings = Array.from(parentTree?.children);
      const selectedSiblings = siblings.filter((child) => child.selected);
      if (siblings.length === selectedSiblings.length) {
        parentItem.selected = true;
        parentItem.indeterminate = false;
      }
      else if (selectedSiblings.length > 0) {
        parentItem.indeterminate = true;
      }
    }
    else if (this.indeterminate) {
      const parentItem = this.parentTreeItem;
      parentItem.indeterminate = true;
    }
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "selectionMode": ["getSelectionMode"]
  }; }
};
TreeItem.style = treeItemCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   "d": () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_1__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.f)(target);
  });
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZGMzNDg1NDg4YWViYmNiYzAyZTcwYWE0MDM1NGUwNGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUN3RztBQUN2RjtBQUNGO0FBQ2pFO0FBQy9CO0FBQ0s7QUFDRjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsTUFBTSxjQUFjLGNBQWMsOEJBQThCLG1CQUFtQjs7QUFFeHZEO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQiw2QkFBNkIscURB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Jyb3dzZXItOTliYzYyY2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS10cmVlXzIuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY29uZGl0aW9uYWxTbG90LTk0NmZiOTExLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL29ic2VydmVycy05NWU5N2ZhZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuZXhwb3J0IHsgZ2V0VXNlckFnZW50RGF0YSBhcyBhLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGYgYXMgZm9jdXNFbGVtZW50LCB4IGFzIG5vZGVMaXN0VG9BcnJheSwgeSBhcyBnZXRSb290Tm9kZSwgZyBhcyBnZXRTbG90dGVkLCBkIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIGIgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuLCB6IGFzIGZpbHRlckRpcmVjdENoaWxkcmVuIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5cbmZ1bmN0aW9uIGlzVHJlZUl0ZW0oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudD8ubWF0Y2hlcyhcImNhbGNpdGUtdHJlZS1pdGVtXCIpO1xufVxuZnVuY3Rpb24gZ2V0RW5hYmxlZFNpYmxpbmdJdGVtKGVsLCBkaXJlY3Rpb24pIHtcbiAgY29uc3QgZGlyZWN0aW9uUHJvcCA9IGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgPyBcIm5leHRFbGVtZW50U2libGluZ1wiIDogXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCI7XG4gIGxldCBjdXJyZW50RWwgPSBlbDtcbiAgbGV0IGVuYWJsZWRFbCA9IG51bGw7XG4gIHdoaWxlIChpc1RyZWVJdGVtKGN1cnJlbnRFbCkpIHtcbiAgICBpZiAoIWN1cnJlbnRFbC5kaXNhYmxlZCkge1xuICAgICAgZW5hYmxlZEVsID0gY3VycmVudEVsO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGN1cnJlbnRFbCA9IGN1cnJlbnRFbFtkaXJlY3Rpb25Qcm9wXTtcbiAgfVxuICByZXR1cm4gZW5hYmxlZEVsO1xufVxuXG5jb25zdCB0cmVlQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja306aG9zdCg6Zm9jdXMpe291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH1cIjtcblxuY29uc3QgVHJlZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlVHJlZVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRyZWVTZWxlY3RcIiwgNik7XG4gICAgdGhpcy5saW5lcyA9IGZhbHNlO1xuICAgIHRoaXMuY2hpbGQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwic2luZ2xlXCI7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbFJlbmRlcigpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWVcIik7XG4gICAgdGhpcy5saW5lcyA9IHBhcmVudCA/IHBhcmVudC5saW5lcyA6IHRoaXMubGluZXM7XG4gICAgdGhpcy5zY2FsZSA9IHBhcmVudCA/IHBhcmVudC5zY2FsZSA6IHRoaXMuc2NhbGU7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gcGFyZW50ID8gcGFyZW50LnNlbGVjdGlvbk1vZGUgOiB0aGlzLnNlbGVjdGlvbk1vZGU7XG4gICAgdGhpcy5jaGlsZCA9ICEhcGFyZW50O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCI6IHRoaXMuY2hpbGRcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIikudG9TdHJpbmcoKSwgcm9sZTogIXRoaXMuY2hpbGQgPyBcInRyZWVcIiA6IHVuZGVmaW5lZCwgdGFiSW5kZXg6IHRoaXMuZ2V0Um9vdFRhYkluZGV4KCkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbkZvY3VzKCkge1xuICAgIGlmICghdGhpcy5jaGlsZCkge1xuICAgICAgY29uc3QgZm9jdXNUYXJnZXQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCJjYWxjaXRlLXRyZWUtaXRlbVtzZWxlY3RlZF06bm90KFtkaXNhYmxlZF0pXCIpIHx8IHRoaXMuZWwucXVlcnlTZWxlY3RvcihcImNhbGNpdGUtdHJlZS1pdGVtOm5vdChbZGlzYWJsZWRdKVwiKTtcbiAgICAgIGZvY3VzRWxlbWVudChmb2N1c1RhcmdldCk7XG4gICAgfVxuICB9XG4gIG9uRm9jdXNJbihldmVudCkge1xuICAgIGNvbnN0IGZvY3VzZWRGcm9tUm9vdE9yT3V0c2lkZVRyZWUgPSBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSB0aGlzLmVsIHx8ICF0aGlzLmVsLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuICAgIGlmIChmb2N1c2VkRnJvbVJvb3RPck91dHNpZGVUcmVlKSB7XG4gICAgICAvLyBnaXZlcyB1c2VyIHRoZSBhYmlsaXR5IHRvIHRhYiBpbnRvIGV4dGVybmFsIGVsZW1lbnRzIChtb2RpZnlpbmcgdGFiaW5kZXggcHJvcGVydHkgd2lsbCBub3Qgd29yayBpbiBmaXJlZm94KVxuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgICB9XG4gIH1cbiAgb25Gb2N1c091dChldmVudCkge1xuICAgIGNvbnN0IHdpbGxGb2N1c091dHNpZGVUcmVlID0gIXRoaXMuZWwuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCk7XG4gICAgaWYgKHdpbGxGb2N1c091dHNpZGVUcmVlKSB7XG4gICAgICB0aGlzLmVsLnRhYkluZGV4ID0gdGhpcy5nZXRSb290VGFiSW5kZXgoKTtcbiAgICB9XG4gIH1cbiAgb25DbGljayhldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBjaGlsZEl0ZW1zID0gbm9kZUxpc3RUb0FycmF5KHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIikpO1xuICAgIGlmICh0aGlzLmNoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5jaGlsZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImFuY2VzdG9yc1wiICYmICF0aGlzLmNoaWxkKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuY2VzdG9yVHJlZShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzTm9uZVNlbGVjdGlvbk1vZGUgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiO1xuICAgIGNvbnN0IHNob3VsZFNlbGVjdCA9IHRoaXMuc2VsZWN0aW9uTW9kZSAhPT0gbnVsbCAmJlxuICAgICAgKCF0YXJnZXQuaGFzQ2hpbGRyZW4gfHxcbiAgICAgICAgKHRhcmdldC5oYXNDaGlsZHJlbiAmJlxuICAgICAgICAgICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwiY2hpbGRyZW5cIiB8fCB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiKSkpO1xuICAgIGNvbnN0IHNob3VsZERlc2VsZWN0QWxsQ2hpbGRyZW4gPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiICYmIHRhcmdldC5oYXNDaGlsZHJlbjtcbiAgICBjb25zdCBzaG91bGRNb2RpZnlUb0N1cnJlbnRTZWxlY3Rpb24gPSAhaXNOb25lU2VsZWN0aW9uTW9kZSAmJlxuICAgICAgZXZlbnQuZGV0YWlsLm1vZGlmeUN1cnJlbnRTZWxlY3Rpb24gJiZcbiAgICAgICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiKTtcbiAgICBjb25zdCBzaG91bGRDbGVhckN1cnJlbnRTZWxlY3Rpb24gPSAhc2hvdWxkTW9kaWZ5VG9DdXJyZW50U2VsZWN0aW9uICYmXG4gICAgICAoKCh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIpICYmXG4gICAgICAgIGNoaWxkSXRlbXMubGVuZ3RoIDw9IDApIHx8XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJjaGlsZHJlblwiIHx8XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aWNoaWxkcmVuXCIpO1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZUV4cGFuZCA9IFtcImNoaWxkcmVuXCIsIFwibXVsdGljaGlsZHJlblwiXS5pbmNsdWRlcyh0aGlzLnNlbGVjdGlvbk1vZGUpIHx8XG4gICAgICAoW1wic2luZ2xlXCIsIFwibXVsdGlwbGVcIl0uaW5jbHVkZXModGhpcy5zZWxlY3Rpb25Nb2RlKSAmJlxuICAgICAgICB0YXJnZXQuaGFzQ2hpbGRyZW4gJiZcbiAgICAgICAgIWV2ZW50LmRldGFpbC5mb3JjZVRvZ2dsZSk7XG4gICAgaWYgKCF0aGlzLmNoaWxkKSB7XG4gICAgICBjb25zdCB0YXJnZXRJdGVtcyA9IFtdO1xuICAgICAgaWYgKHNob3VsZFNlbGVjdCkge1xuICAgICAgICB0YXJnZXRJdGVtcy5wdXNoKHRhcmdldCk7XG4gICAgICB9XG4gICAgICBpZiAoc2hvdWxkQ2xlYXJDdXJyZW50U2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBub2RlTGlzdFRvQXJyYXkodGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1bc2VsZWN0ZWRdXCIpKTtcbiAgICAgICAgc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKCh0cmVlSXRlbSkgPT4ge1xuICAgICAgICAgIGlmICghdGFyZ2V0SXRlbXMuaW5jbHVkZXModHJlZUl0ZW0pKSB7XG4gICAgICAgICAgICB0cmVlSXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlRXhwYW5kKSB7XG4gICAgICAgIGlmIChbXCJzaW5nbGVcIiwgXCJtdWx0aXBsZVwiXS5pbmNsdWRlcyh0aGlzLnNlbGVjdGlvbk1vZGUpKSB7XG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZGVkID0gIXRhcmdldC5leHBhbmRlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiKSB7XG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZGVkID0gIXRhcmdldC5zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwiY2hpbGRyZW5cIikge1xuICAgICAgICAgIHRhcmdldC5leHBhbmRlZCA9IHRhcmdldC5zZWxlY3RlZCA/ICF0YXJnZXQuZXhwYW5kZWQgOiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2hvdWxkRGVzZWxlY3RBbGxDaGlsZHJlbikge1xuICAgICAgICBjaGlsZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGl0ZW0uaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGl0ZW0uZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHNob3VsZE1vZGlmeVRvQ3VycmVudFNlbGVjdGlvbikge1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgICBpZiAoKHNob3VsZE1vZGlmeVRvQ3VycmVudFNlbGVjdGlvbiAmJiB0YXJnZXQuc2VsZWN0ZWQpIHx8IGV2ZW50LmRldGFpbC5mb3JjZVRvZ2dsZSkge1xuICAgICAgICB0YXJnZXRJdGVtcy5mb3JFYWNoKCh0cmVlSXRlbSkgPT4ge1xuICAgICAgICAgIGlmICghdHJlZUl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRyZWVJdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc05vbmVTZWxlY3Rpb25Nb2RlKSB7XG4gICAgICAgIHRhcmdldEl0ZW1zLmZvckVhY2goKHRyZWVJdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKCF0cmVlSXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdHJlZUl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IGlzTm9uZVNlbGVjdGlvbk1vZGVcbiAgICAgID8gW3RhcmdldF1cbiAgICAgIDogbm9kZUxpc3RUb0FycmF5KHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdHJlZS1pdGVtXCIpKS5maWx0ZXIoKGkpID0+IGkuc2VsZWN0ZWQpO1xuICAgIHRoaXMuY2FsY2l0ZVRyZWVTZWxlY3QuZW1pdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdHJlZTpub3QoW2NoaWxkXSlcIik7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICghKHJvb3QgPT09IHRoaXMuZWwgJiYgdGFyZ2V0LnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1UUkVFLUlURU1cIiAmJiB0aGlzLmVsLmNvbnRhaW5zKHRhcmdldCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGNvbnN0IG5leHQgPSBnZXRFbmFibGVkU2libGluZ0l0ZW0odGFyZ2V0Lm5leHRFbGVtZW50U2libGluZywgXCJkb3duXCIpO1xuICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgbmV4dC5mb2N1cygpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBnZXRFbmFibGVkU2libGluZ0l0ZW0odGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsIFwidXBcIik7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgcHJldmlvdXMuZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIiAmJiAhdGFyZ2V0LmRpc2FibGVkKSB7XG4gICAgICAvLyBXaGVuIGZvY3VzIGlzIG9uIGFuIG9wZW4gbm9kZSwgY2xvc2VzIHRoZSBub2RlLlxuICAgICAgaWYgKHRhcmdldC5oYXNDaGlsZHJlbiAmJiB0YXJnZXQuZXhwYW5kZWQpIHtcbiAgICAgICAgdGFyZ2V0LmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFdoZW4gZm9jdXMgaXMgb24gYSBjaGlsZCBub2RlIHRoYXQgaXMgYWxzbyBlaXRoZXIgYW4gZW5kIG5vZGUgb3IgYSBjbG9zZWQgbm9kZSwgbW92ZXMgZm9jdXMgdG8gaXRzIHBhcmVudCBub2RlLlxuICAgICAgY29uc3QgcGFyZW50SXRlbSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKTtcbiAgICAgIGlmIChwYXJlbnRJdGVtICYmICghdGFyZ2V0Lmhhc0NoaWxkcmVuIHx8IHRhcmdldC5leHBhbmRlZCA9PT0gZmFsc2UpKSB7XG4gICAgICAgIHBhcmVudEl0ZW0uZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gV2hlbiBmb2N1cyBpcyBvbiBhIHJvb3Qgbm9kZSB0aGF0IGlzIGFsc28gZWl0aGVyIGFuIGVuZCBub2RlIG9yIGEgY2xvc2VkIG5vZGUsIGRvZXMgbm90aGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgJiYgIXRhcmdldC5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRhcmdldC5oYXNDaGlsZHJlbikge1xuICAgICAgICBpZiAodGFyZ2V0LmV4cGFuZGVkICYmIGdldFJvb3ROb2RlKHRoaXMuZWwpLmFjdGl2ZUVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICAgIC8vIFdoZW4gZm9jdXMgaXMgb24gYW4gb3BlbiBub2RlLCBtb3ZlcyBmb2N1cyB0byB0aGUgZmlyc3QgY2hpbGQgbm9kZS5cbiAgICAgICAgICBnZXRFbmFibGVkU2libGluZ0l0ZW0odGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKSwgXCJkb3duXCIpPy5mb2N1cygpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gV2hlbiBmb2N1cyBpcyBvbiBhIGNsb3NlZCBub2RlLCBvcGVucyB0aGUgbm9kZTsgZm9jdXMgZG9lcyBub3QgbW92ZS5cbiAgICAgICAgICB0YXJnZXQuZXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQW5jZXN0b3JUcmVlKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaXRlbS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbmNlc3RvcnMgPSBbXTtcbiAgICBsZXQgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBhbmNlc3RvcnMucHVzaChwYXJlbnQpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdChcImNhbGNpdGUtdHJlZS1pdGVtXCIpO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZEl0ZW1zID0gQXJyYXkuZnJvbShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRyZWUtaXRlbTpub3QoW2Rpc2FibGVkXSlcIikpO1xuICAgIGNvbnN0IGNoaWxkSXRlbXNXaXRoTm9DaGlsZHJlbiA9IGNoaWxkSXRlbXMuZmlsdGVyKChjaGlsZCkgPT4gIWNoaWxkLmhhc0NoaWxkcmVuKTtcbiAgICBjb25zdCBjaGlsZEl0ZW1zV2l0aENoaWxkcmVuID0gY2hpbGRJdGVtcy5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZC5oYXNDaGlsZHJlbik7XG4gICAgY29uc3QgZnV0dXJlU2VsZWN0ZWQgPSBpdGVtLmhhc0NoaWxkcmVuXG4gICAgICA/ICEoaXRlbS5zZWxlY3RlZCB8fCBpdGVtLmluZGV0ZXJtaW5hdGUpXG4gICAgICA6ICFpdGVtLnNlbGVjdGVkO1xuICAgIGNoaWxkSXRlbXNXaXRoTm9DaGlsZHJlbi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuc2VsZWN0ZWQgPSBmdXR1cmVTZWxlY3RlZDtcbiAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB1cGRhdGVJdGVtU3RhdGUoY2hpbGRJdGVtcywgaXRlbSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBjaGlsZEl0ZW1zLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLnNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IHVuc2VsZWN0ZWQgPSBjaGlsZEl0ZW1zLmZpbHRlcigoY2hpbGQpID0+ICFjaGlsZC5zZWxlY3RlZCk7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gc2VsZWN0ZWQubGVuZ3RoID09PSBjaGlsZEl0ZW1zLmxlbmd0aDtcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IHNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgdW5zZWxlY3RlZC5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBjaGlsZEl0ZW1zV2l0aENoaWxkcmVuLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3RDaGlsZEl0ZW1zID0gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlID4gY2FsY2l0ZS10cmVlID4gY2FsY2l0ZS10cmVlLWl0ZW1cIikpO1xuICAgICAgdXBkYXRlSXRlbVN0YXRlKGRpcmVjdENoaWxkSXRlbXMsIGVsKTtcbiAgICB9KTtcbiAgICBpZiAoaXRlbS5oYXNDaGlsZHJlbikge1xuICAgICAgdXBkYXRlSXRlbVN0YXRlKGNoaWxkSXRlbXMsIGl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmdXR1cmVTZWxlY3RlZDtcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBhbmNlc3RvcnMuZm9yRWFjaCgoYW5jZXN0b3IpID0+IHtcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gbm9kZUxpc3RUb0FycmF5KGFuY2VzdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKSk7XG4gICAgICBjb25zdCBhY3RpdmVEZXNjZW5kYW50cyA9IGRlc2NlbmRhbnRzLmZpbHRlcigoZWwpID0+IGVsLnNlbGVjdGVkKTtcbiAgICAgIGlmIChhY3RpdmVEZXNjZW5kYW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYW5jZXN0b3Iuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgYW5jZXN0b3IuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbmRldGVybWluYXRlID0gYWN0aXZlRGVzY2VuZGFudHMubGVuZ3RoIDwgZGVzY2VuZGFudHMubGVuZ3RoO1xuICAgICAgYW5jZXN0b3IuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7XG4gICAgICBhbmNlc3Rvci5zZWxlY3RlZCA9ICFpbmRldGVybWluYXRlO1xuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IG5vZGVMaXN0VG9BcnJheSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKSkuZmlsdGVyKChpKSA9PiBpLnNlbGVjdGVkKTtcbiAgICB0aGlzLmNhbGNpdGVUcmVlU2VsZWN0LmVtaXQoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0Um9vdFRhYkluZGV4KCkge1xuICAgIHJldHVybiAhdGhpcy5jaGlsZCA/IDAgOiAtMTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuVHJlZS5zdHlsZSA9IHRyZWVDc3M7XG5cbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBjaGVja2JveExhYmVsOiBcImNoZWNrYm94LWxhYmVsXCIsXG4gIGNoZWNrYm94OiBcImNoZWNrYm94XCIsXG4gIGNoZXZyb246IFwiY2hldnJvblwiLFxuICBub2RlQ29udGFpbmVyOiBcIm5vZGUtY29udGFpbmVyXCIsXG4gIGNoaWxkcmVuQ29udGFpbmVyOiBcImNoaWxkcmVuLWNvbnRhaW5lclwiLFxuICBidWxsZXRQb2ludEljb246IFwiYnVsbGV0LXBvaW50XCIsXG4gIGNoZWNrbWFya0ljb246IFwiY2hlY2ttYXJrXCIsXG4gIGl0ZW1FeHBhbmRlZDogXCJpdGVtLS1leHBhbmRlZFwiLFxuICBpY29uU3RhcnQ6IFwiaWNvbi1zdGFydFwiLFxuICBub2RlQW5kQWN0aW9uc0NvbnRhaW5lcjogXCJub2RlLWFjdGlvbnMtY29udGFpbmVyXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBjaGlsZHJlbjogXCJjaGlsZHJlblwiXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGJ1bGxldFBvaW50OiBcImJ1bGxldC1wb2ludFwiLFxuICBjaGVja21hcms6IFwiY2hlY2tcIixcbiAgY2hldnJvblJpZ2h0OiBcImNoZXZyb24tcmlnaHRcIixcbiAgYmxhbms6IFwiYmxhbmtcIlxufTtcblxuY29uc3QgdHJlZUl0ZW1Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrO21heC1pbmxpbmUtc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9Lm5vZGUtYWN0aW9ucy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KFtjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlbl0pe3Zpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW3NjYWxlPXNdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lcnttaW4tYmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZWNrYm94LDpob3N0KFtzY2FsZT1zXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGV2cm9uLDpob3N0KFtzY2FsZT1zXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGVja21hcmssOmhvc3QoW3NjYWxlPXNdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmJ1bGxldC1wb2ludHttYXJnaW4taW5saW5lOjAuMjVyZW19Omhvc3QoW3NjYWxlPXNdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmljb24tc3RhcnR7bWFyZ2luLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXJ7bWluLWJsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hlY2tib3gsOmhvc3QoW3NjYWxlPW1dKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZXZyb24sOmhvc3QoW3NjYWxlPW1dKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZWNrbWFyayw6aG9zdChbc2NhbGU9bV0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuYnVsbGV0LXBvaW50e21hcmdpbi1pbmxpbmU6MC41cmVtfTpob3N0KFtzY2FsZT1tXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXJ7bWluLWJsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hlY2tib3gsOmhvc3QoW3NjYWxlPWxdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZXZyb24sOmhvc3QoW3NjYWxlPWxdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZWNrbWFyayw6aG9zdChbc2NhbGU9bF0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuYnVsbGV0LXBvaW50e21hcmdpbi1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaWNvbi1zdGFydHttYXJnaW4taW5saW5lOjAuNzVyZW19Omhvc3QoW2xpbmVzXSkgLmNoaWxkcmVuLWNvbnRhaW5lcjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtpbmxpbmUtc2l6ZToxcHg7dHJhbnNpdGlvbi1wcm9wZXJ0eTpjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7YmxvY2stc2l6ZTo5NiU7Y29udGVudDpcXFwiXFxcIjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpfTpob3N0KDpub3QoW2xpbmVzXSkpIC5ub2RlLWNvbnRhaW5lcjphZnRlcntkaXNwbGF5Om5vbmV9OjpzbG90dGVkKCope21pbi1pbmxpbmUtc2l6ZTowcHg7bWF4LWlubGluZS1zaXplOjEwMCU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudH06OnNsb3R0ZWQoKik6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudH06OnNsb3R0ZWQoYSl7aW5saW5lLXNpemU6MTAwJTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lfTpob3N0e291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3Q6Zm9jdXMsOmhvc3Q6YWN0aXZle291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoOmZvY3VzOm5vdChbZGlzYWJsZWRdKSl7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uYWN0aW9ucy1lbmR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpzdHJldGNofS5jaGVja2JveHtsaW5lLWhlaWdodDowfS5jaGVja2JveC1sYWJlbHtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9LmNoZWNrYm94OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH0uY2hpbGRyZW4tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6MHB4O3RyYW5zZm9ybS1vcmlnaW46dG9wO292ZXJmbG93OmhpZGRlbjtvcGFjaXR5OjA7bWFyZ2luLWlubGluZS1zdGFydDoxLjI1cmVtO3RyYW5zZm9ybTpzY2FsZVkoMCk7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIG9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBhbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dH0uaXRlbS0tZXhwYW5kZWQ+LmNoaWxkcmVuLWNvbnRhaW5lcntvdmVyZmxvdzp2aXNpYmxlO29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZTtibG9jay1zaXplOmF1dG99Lm5vZGUtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDttaW4taW5saW5lLXNpemU6MHB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubm9kZS1jb250YWluZXIgLmNoZWNrbWFyaywubm9kZS1jb250YWluZXIgLmJ1bGxldC1wb2ludHtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMSl9Lm5vZGUtY29udGFpbmVyOmhvdmVyIC5jaGVja21hcmssLm5vZGUtY29udGFpbmVyOmhvdmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyOmhvdmVyIC5jaGVja21hcmssOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyOmhvdmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoOmZvY3VzOm5vdChbZGlzYWJsZWRdKSkgLm5vZGUtY29udGFpbmVyIC5jaGVja21hcmssOmhvc3QoOmZvY3VzOm5vdChbZGlzYWJsZWRdKSkgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnR7b3BhY2l0eToxfTpob3N0KFtzZWxlY3RlZF0pIC5ub2RlLWNvbnRhaW5lciw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXI6aG92ZXJ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXIgLmJ1bGxldC1wb2ludCw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXIgLmNoZWNrbWFyayw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXI6aG92ZXIgLmJ1bGxldC1wb2ludCw6aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXI6aG92ZXIgLmNoZWNrbWFya3tvcGFjaXR5OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW3NlbGVjdGlvbi1tb2RlPW5vbmVdOm5vdChbaGFzLWNoaWxkcmVuXSkpOmhvc3QoW3NjYWxlPXNdKSAubm9kZS1jb250YWluZXJ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC41cmVtfTpob3N0KFtzZWxlY3Rpb24tbW9kZT1ub25lXTpub3QoW2hhcy1jaGlsZHJlbl0pKTpob3N0KFtzY2FsZT1tXSkgLm5vZGUtY29udGFpbmVye3BhZGRpbmctaW5saW5lLXN0YXJ0OjFyZW19Omhvc3QoW3NlbGVjdGlvbi1tb2RlPW5vbmVdOm5vdChbaGFzLWNoaWxkcmVuXSkpOmhvc3QoW3NjYWxlPWxdKSAubm9kZS1jb250YWluZXJ7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS41cmVtfTpob3N0KDpub3QoW2hhcy1jaGlsZHJlbl0pKTpob3N0KFtzY2FsZT1zXSkgLm5vZGUtY29udGFpbmVyW2RhdGEtc2VsZWN0aW9uLW1vZGU9YW5jZXN0b3JzXSAuY2hlY2tib3h7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS4yNXJlbX06aG9zdCg6bm90KFtoYXMtY2hpbGRyZW5dKSk6aG9zdChbc2NhbGU9bV0pIC5ub2RlLWNvbnRhaW5lcltkYXRhLXNlbGVjdGlvbi1tb2RlPWFuY2VzdG9yc10gLmNoZWNrYm94e3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbX06aG9zdCg6bm90KFtoYXMtY2hpbGRyZW5dKSk6aG9zdChbc2NhbGU9bF0pIC5ub2RlLWNvbnRhaW5lcltkYXRhLXNlbGVjdGlvbi1tb2RlPWFuY2VzdG9yc10gLmNoZWNrYm94e3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNzVyZW19Omhvc3QoW2hhcy1jaGlsZHJlbl0pIC5ub2RlLWNvbnRhaW5lcltkYXRhLXNlbGVjdGlvbi1tb2RlPWFuY2VzdG9yc10gLmNoZWNrYm94e21hcmdpbi1pbmxpbmUtc3RhcnQ6MH06aG9zdChbaGFzLWNoaWxkcmVuXSkgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoW2hhcy1jaGlsZHJlbl0pIC5ub2RlLWNvbnRhaW5lciAuY2hlY2ttYXJre2Rpc3BsYXk6bm9uZX06aG9zdChbaGFzLWNoaWxkcmVuXVtleHBhbmRlZF06bm90KFtzZWxlY3RlZF0pOm5vdChbc2VsZWN0aW9uLW1vZGU9bm9uZV0pKSAubm9kZS1jb250YWluZXIgOjpzbG90dGVkKCope2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW2hhcy1jaGlsZHJlbl1bc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXJbZGF0YS1zZWxlY3Rpb24tbW9kZT1jaGlsZHJlbl0sOmhvc3QoW2hhcy1jaGlsZHJlbl1bc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXJbZGF0YS1zZWxlY3Rpb24tbW9kZT1tdWx0aWNoaWxkcmVuXXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uY2hldnJvbntwb3NpdGlvbjpyZWxhdGl2ZTthbGlnbi1zZWxmOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7ZmxleDowIDAgYXV0bzt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfS5jYWxjaXRlLS1ydGwgLmNoZXZyb257dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5pdGVtLS1leHBhbmRlZCAubm9kZS1jb250YWluZXI+LmNoZXZyb257dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Omhvc3QoW3NlbGVjdGVkXSkgLmNoZWNrbWFyayw6aG9zdChbc2VsZWN0ZWRdKSAuYnVsbGV0LXBvaW50e2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfVwiO1xuXG5jb25zdCBUcmVlSXRlbSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUcmVlSXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5pY29uQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICB9O1xuICAgIHRoaXMuY2hpbGRyZW5DbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMudXBkYXRlUGFyZW50SXNFeHBhbmRlZCA9IChlbCwgZXhwYW5kZWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuY2hpbGRyZW4sIHtcbiAgICAgICAgYWxsOiB0cnVlLFxuICAgICAgICBzZWxlY3RvcjogXCJjYWxjaXRlLXRyZWUtaXRlbVwiXG4gICAgICB9KTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnBhcmVudEV4cGFuZGVkID0gZXhwYW5kZWQpKTtcbiAgICB9O1xuICAgIHRoaXMuYWN0aW9uc0VuZFNsb3RDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0VuZEFjdGlvbnMgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5wYXJlbnRFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVwdGggPSAtMTtcbiAgICB0aGlzLmhhc0NoaWxkcmVuID0gbnVsbDtcbiAgICB0aGlzLmxpbmVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlQWZ0ZXJJbml0aWFsUmVuZGVyID0gZmFsc2U7XG4gICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gZmFsc2U7XG4gIH1cbiAgZXhwYW5kZWRIYW5kbGVyKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy51cGRhdGVQYXJlbnRJc0V4cGFuZGVkKHRoaXMuZWwsIG5ld1ZhbHVlKTtcbiAgfVxuICBnZXRTZWxlY3Rpb25Nb2RlKCkge1xuICAgIHRoaXMuaXNTZWxlY3Rpb25NdWx0aUxpa2UgPVxuICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBhcmVudFRyZWVJdGVtID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlLWl0ZW1cIik7XG4gICAgaWYgKHRoaXMucGFyZW50VHJlZUl0ZW0pIHtcbiAgICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMucGFyZW50VHJlZUl0ZW07XG4gICAgICB0aGlzLnVwZGF0ZVBhcmVudElzRXhwYW5kZWQodGhpcy5wYXJlbnRUcmVlSXRlbSwgZXhwYW5kZWQpO1xuICAgIH1cbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIHRoaXMuaGFzQ2hpbGRyZW4gPSAhIXRoaXMuZWwucXVlcnlTZWxlY3RvcihcImNhbGNpdGUtdHJlZVwiKTtcbiAgICB0aGlzLmRlcHRoID0gMDtcbiAgICBsZXQgcGFyZW50VHJlZSA9IHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdHJlZVwiKTtcbiAgICBpZiAoIXBhcmVudFRyZWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gcGFyZW50VHJlZS5zZWxlY3Rpb25Nb2RlO1xuICAgIHRoaXMuc2NhbGUgPSBwYXJlbnRUcmVlLnNjYWxlIHx8IFwibVwiO1xuICAgIHRoaXMubGluZXMgPSBwYXJlbnRUcmVlLmxpbmVzO1xuICAgIGxldCBuZXh0UGFyZW50VHJlZTtcbiAgICB3aGlsZSAocGFyZW50VHJlZSkge1xuICAgICAgbmV4dFBhcmVudFRyZWUgPSBwYXJlbnRUcmVlLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWVcIik7XG4gICAgICBpZiAobmV4dFBhcmVudFRyZWUgPT09IHBhcmVudFRyZWUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcGFyZW50VHJlZSA9IG5leHRQYXJlbnRUcmVlO1xuICAgICAgICB0aGlzLmRlcHRoID0gdGhpcy5kZXB0aCArIDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiAodGhpcy51cGRhdGVBZnRlckluaXRpYWxSZW5kZXIgPSB0cnVlKSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuY2VzdG9yVHJlZSgpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcywgKCkgPT4gdGhpcy5wYXJlbnRFeHBhbmRlZCB8fCB0aGlzLmRlcHRoID09PSAxKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcnRsID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKSA9PT0gXCJydGxcIjtcbiAgICBjb25zdCBzaG93QnVsbGV0UG9pbnQgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImNoaWxkcmVuXCI7XG4gICAgY29uc3Qgc2hvd0NoZWNrbWFyayA9IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiIHx8IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aWNoaWxkcmVuXCI7XG4gICAgY29uc3Qgc2hvd0JsYW5rID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm5vbmVcIiAmJiAhdGhpcy5oYXNDaGlsZHJlbjtcbiAgICBjb25zdCBjaGV2cm9uID0gdGhpcy5oYXNDaGlsZHJlbiA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jaGV2cm9uXTogdHJ1ZSxcbiAgICAgICAgW0NTU19VVElMSVRZLnJ0bF06IHJ0bFxuICAgICAgfSwgXCJkYXRhLXRlc3QtaWRcIjogXCJpY29uXCIsIGljb246IElDT05TLmNoZXZyb25SaWdodCwgb25DbGljazogdGhpcy5pY29uQ2xpY2tIYW5kbGVyLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSA6IG51bGw7XG4gICAgY29uc3QgZGVmYXVsdFNsb3ROb2RlID0gaChcInNsb3RcIiwgeyBrZXk6IFwiZGVmYXVsdC1zbG90XCIgfSk7XG4gICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwiYW5jZXN0b3JzXCIgPyAoaChcImxhYmVsXCIsIHsgY2xhc3M6IENTUy5jaGVja2JveExhYmVsLCBrZXk6IFwiY2hlY2tib3gtbGFiZWxcIiB9LCBoKFwiY2FsY2l0ZS1jaGVja2JveFwiLCB7IGNoZWNrZWQ6IHRoaXMuc2VsZWN0ZWQsIGNsYXNzOiBDU1MuY2hlY2tib3gsIFwiZGF0YS10ZXN0LWlkXCI6IFwiY2hlY2tib3hcIiwgaW5kZXRlcm1pbmF0ZTogdGhpcy5oYXNDaGlsZHJlbiAmJiB0aGlzLmluZGV0ZXJtaW5hdGUsIHNjYWxlOiB0aGlzLnNjYWxlLCB0YWJJbmRleDogLTEgfSksIGRlZmF1bHRTbG90Tm9kZSkpIDogbnVsbDtcbiAgICBjb25zdCBzZWxlY3RlZEljb24gPSBzaG93QnVsbGV0UG9pbnRcbiAgICAgID8gSUNPTlMuYnVsbGV0UG9pbnRcbiAgICAgIDogc2hvd0NoZWNrbWFya1xuICAgICAgICA/IElDT05TLmNoZWNrbWFya1xuICAgICAgICA6IHNob3dCbGFua1xuICAgICAgICAgID8gSUNPTlMuYmxhbmtcbiAgICAgICAgICA6IG51bGw7XG4gICAgY29uc3QgaXRlbUluZGljYXRvciA9IHNlbGVjdGVkSWNvbiA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idWxsZXRQb2ludEljb25dOiBzZWxlY3RlZEljb24gPT09IElDT05TLmJ1bGxldFBvaW50LFxuICAgICAgICBbQ1NTLmNoZWNrbWFya0ljb25dOiBzZWxlY3RlZEljb24gPT09IElDT05TLmNoZWNrbWFyayxcbiAgICAgICAgW0NTU19VVElMSVRZLnJ0bF06IHJ0bFxuICAgICAgfSwgaWNvbjogc2VsZWN0ZWRJY29uLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSA6IG51bGw7XG4gICAgY29uc3QgaGlkZGVuID0gISh0aGlzLnBhcmVudEV4cGFuZGVkIHx8IHRoaXMuZGVwdGggPT09IDEpO1xuICAgIGNvbnN0IGlzRXhwYW5kZWQgPSB0aGlzLnVwZGF0ZUFmdGVySW5pdGlhbFJlbmRlciAmJiB0aGlzLmV4cGFuZGVkO1xuICAgIGNvbnN0IHsgaGFzRW5kQWN0aW9ucyB9ID0gdGhpcztcbiAgICBjb25zdCBzbG90Tm9kZSA9IChoKFwic2xvdFwiLCB7IGtleTogXCJhY3Rpb25zRW5kU2xvdFwiLCBuYW1lOiBTTE9UUy5hY3Rpb25zRW5kLCBvblNsb3RjaGFuZ2U6IHRoaXMuYWN0aW9uc0VuZFNsb3RDaGFuZ2VIYW5kbGVyIH0pKTtcbiAgICBjb25zdCBpY29uU3RhcnRFbCA9IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pY29uU3RhcnQsIGZsaXBSdGw6IHRoaXMuaWNvbkZsaXBSdGwgPT09IFwic3RhcnRcIiB8fCB0aGlzLmljb25GbGlwUnRsID09PSBcImJvdGhcIiwgaWNvbjogdGhpcy5pY29uU3RhcnQsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1leHBhbmRlZFwiOiB0aGlzLmhhc0NoaWxkcmVuID8gdG9BcmlhQm9vbGVhbihpc0V4cGFuZGVkKSA6IHVuZGVmaW5lZCwgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKGhpZGRlbiksIFwiYXJpYS1zZWxlY3RlZFwiOiB0aGlzLnNlbGVjdGVkID8gXCJ0cnVlXCIgOiBzaG93Q2hlY2ttYXJrID8gXCJmYWxzZVwiIDogdW5kZWZpbmVkLCBcImNhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXCI6IGhpZGRlbiwgcm9sZTogXCJ0cmVlaXRlbVwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLml0ZW1FeHBhbmRlZF06IGlzRXhwYW5kZWQgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5ub2RlQW5kQWN0aW9uc0NvbnRhaW5lciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5ub2RlQ29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTU19VVElMSVRZLnJ0bF06IHJ0bFxuICAgICAgfSwgXCJkYXRhLXNlbGVjdGlvbi1tb2RlXCI6IHRoaXMuc2VsZWN0aW9uTW9kZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmRlZmF1bHRTbG90V3JhcHBlciA9IGVsKSB9LCBjaGV2cm9uLCBpdGVtSW5kaWNhdG9yLCB0aGlzLmljb25TdGFydCA/IGljb25TdGFydEVsIDogbnVsbCwgY2hlY2tib3ggPyBjaGVja2JveCA6IGRlZmF1bHRTbG90Tm9kZSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNFbmQsIGhpZGRlbjogIWhhc0VuZEFjdGlvbnMsIHJlZjogKGVsKSA9PiAodGhpcy5hY3Rpb25TbG90V3JhcHBlciA9IGVsKSB9LCBzbG90Tm9kZSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jaGlsZHJlbkNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBydGxcbiAgICAgIH0sIFwiZGF0YS10ZXN0LWlkXCI6IFwiY2FsY2l0ZS10cmVlLWNoaWxkcmVuXCIsIG9uQ2xpY2s6IHRoaXMuY2hpbGRyZW5DbGlja0hhbmRsZXIsIHJvbGU6IHRoaXMuaGFzQ2hpbGRyZW4gPyBcImdyb3VwXCIgOiB1bmRlZmluZWQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jaGlsZHJlbiB9KSkpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25DbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNBY3Rpb25FbmRFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU29sdmUgZm9yIGlmIHRoZSBpdGVtIGlzIGNsaWNrZWQgc29tZXdoZXJlIG91dHNpZGUgdGhlIHNsb3R0ZWQgYW5jaG9yLlxuICAgIC8vIEFuY2hvciBpcyB0cmlnZ2VyZWQgYW55d2hlcmUgeW91IGNsaWNrXG4gICAgY29uc3QgW2xpbmtdID0gZmlsdGVyRGlyZWN0Q2hpbGRyZW4odGhpcy5lbCwgXCJhXCIpO1xuICAgIGlmIChsaW5rICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJhXCIpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGxpbmsudGFyZ2V0ID09PSBcIlwiID8gXCJfc2VsZlwiIDogbGluay50YXJnZXQ7XG4gICAgICB3aW5kb3cub3BlbihsaW5rLmhyZWYsIHRhcmdldCk7XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICBtb2RpZnlDdXJyZW50U2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwiYW5jZXN0b3JzXCIgfHwgdGhpcy5pc1NlbGVjdGlvbk11bHRpTGlrZSxcbiAgICAgIGZvcmNlVG9nZ2xlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgbGV0IHJvb3Q7XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25FbmRFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICAgICAgbW9kaWZ5Q3VycmVudFNlbGVjdGlvbjogdGhpcy5pc1NlbGVjdGlvbk11bHRpTGlrZSxcbiAgICAgICAgICBmb3JjZVRvZ2dsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFjdGl2YXRlcyBhIG5vZGUsIGkuZS4sIHBlcmZvcm1zIGl0cyBkZWZhdWx0IGFjdGlvbi4gRm9yIHBhcmVudCBub2Rlcywgb25lIHBvc3NpYmxlIGRlZmF1bHQgYWN0aW9uIGlzIHRvIG9wZW4gb3IgY2xvc2UgdGhlIG5vZGUuIEluIHNpbmdsZS1zZWxlY3QgdHJlZXMgd2hlcmUgc2VsZWN0aW9uIGRvZXMgbm90IGZvbGxvdyBmb2N1cyAoc2VlIG5vdGUgYmVsb3cpLCB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgdHlwaWNhbGx5IHRvIHNlbGVjdCB0aGUgZm9jdXNlZCBub2RlLlxuICAgICAgICBjb25zdCBsaW5rID0gbm9kZUxpc3RUb0FycmF5KHRoaXMuZWwuY2hpbGRyZW4pLmZpbmQoKGVsKSA9PiBlbC5tYXRjaGVzKFwiYVwiKSk7XG4gICAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICAgICAgICBtb2RpZnlDdXJyZW50U2VsZWN0aW9uOiB0aGlzLmlzU2VsZWN0aW9uTXVsdGlMaWtlLFxuICAgICAgICAgICAgZm9yY2VUb2dnbGU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICByb290ID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlOm5vdChbY2hpbGRdKVwiKTtcbiAgICAgICAgY29uc3QgZmlyc3ROb2RlID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIik7XG4gICAgICAgIGZpcnN0Tm9kZT8uZm9jdXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgIHJvb3QgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWU6bm90KFtjaGlsZF0pXCIpO1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSByb290LmNoaWxkcmVuW3Jvb3QuY2hpbGRyZW4ubGVuZ3RoIC0gMV07IC8vIGxhc3QgY2hpbGRcbiAgICAgICAgbGV0IGN1cnJlbnRUcmVlID0gbm9kZUxpc3RUb0FycmF5KGN1cnJlbnROb2RlLmNoaWxkcmVuKS5maW5kKChlbCkgPT4gZWwubWF0Y2hlcyhcImNhbGNpdGUtdHJlZVwiKSk7XG4gICAgICAgIHdoaWxlIChjdXJyZW50VHJlZSkge1xuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudFRyZWUuY2hpbGRyZW5bcm9vdC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgICBjdXJyZW50VHJlZSA9IG5vZGVMaXN0VG9BcnJheShjdXJyZW50Tm9kZS5jaGlsZHJlbikuZmluZCgoZWwpID0+IGVsLm1hdGNoZXMoXCJjYWxjaXRlLXRyZWVcIikpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlPy5mb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNBY3Rpb25FbmRFdmVudChldmVudCkge1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIHJldHVybiBjb21wb3NlZFBhdGguaW5jbHVkZXModGhpcy5hY3Rpb25TbG90V3JhcHBlcik7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgaXMgbWVhbnQgdG8gYmUgY2FsbGVkIGluIGBjb21wb25lbnREaWRMb2FkYCBpbiBvcmRlciB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgaGllcmFyY2hpY2FsIGNvbXBvbmVudCBsaWZlY3ljbGVcbiAgICogYW5kIGhlbHAgY2hlY2sgZm9yIGl0ZW0gc2VsZWN0aW9uIGFzIGl0ZW1zIGFyZSBpbml0aWFsaXplZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdXBkYXRlQW5jZXN0b3JUcmVlKCkge1xuICAgIGNvbnN0IHBhcmVudEl0ZW0gPSB0aGlzLnBhcmVudFRyZWVJdGVtO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwiYW5jZXN0b3JzXCIgfHwgIXBhcmVudEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFRyZWUgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBzaWJsaW5ncyA9IEFycmF5LmZyb20ocGFyZW50VHJlZT8uY2hpbGRyZW4pO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTaWJsaW5ncyA9IHNpYmxpbmdzLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLnNlbGVjdGVkKTtcbiAgICAgIGlmIChzaWJsaW5ncy5sZW5ndGggPT09IHNlbGVjdGVkU2libGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHBhcmVudEl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBwYXJlbnRJdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlbGVjdGVkU2libGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBwYXJlbnRJdGVtLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEl0ZW0gPSB0aGlzLnBhcmVudFRyZWVJdGVtO1xuICAgICAgcGFyZW50SXRlbS5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZXhwYW5kZWRcIjogW1wiZXhwYW5kZWRIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbXCJnZXRTZWxlY3Rpb25Nb2RlXCJdXG4gIH07IH1cbn07XG5UcmVlSXRlbS5zdHlsZSA9IHRyZWVJdGVtQ3NzO1xuXG5leHBvcnQgeyBUcmVlIGFzIGNhbGNpdGVfdHJlZSwgVHJlZUl0ZW0gYXMgY2FsY2l0ZV90cmVlX2l0ZW0gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBmIGFzIGZvcmNlVXBkYXRlIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuXG5jb25zdCBvYnNlcnZlZCA9IG5ldyBTZXQoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LmVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIG9ic2VydmVkLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnRdIG9mIG9ic2VydmVkLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGZvcmNlVXBkYXRlKHRhcmdldCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0VXNlckFnZW50U3RyaW5nIH0gZnJvbSAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcblxuLy8g4pqg77iPIGJyb3dzZXItc25pZmZpbmcgaXMgbm90IGEgYmVzdCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGF2b2lkZWQg4pqg77iPXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VXNlckFnZW50U3RyaW5nKCkpO1xuY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQgPSBpc0ZpcmVmb3hcbiAgPyBuZXcgV2Vha01hcCgpXG4gIDogbnVsbDtcbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICBjb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChpbnRlcmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGludGVyYWN0aXZlRWxlbWVudDtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3Qgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXTtcbmZ1bmN0aW9uIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50KGV2ZW50KSB7XG4gIGlmIChpc0ZpcmVmb3ggJiYgIWludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gcHJldmVudCBkaXNhbGxvd2VkIG1vdXNlIGV2ZW50cyBmcm9tIGJlaW5nIGVtaXR0ZWQgb24gdGhlIGRpc2FibGVkIGhvc3QgKHBlciBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzU4ODYpXG4gIC8v4pqgIHdlIGdlbmVyYWxseSBhdm9pZCBzdG9wcGluZyBwcm9wYWdhdGlvbiBvZiBldmVudHMsIGJ1dCB0aGlzIGlzIG5lZWRlZCB0byBhZGhlcmUgdG8gdGhlIGludGVuZGVkIHNwZWMgY2hhbmdlcyBhYm92ZSDimqBcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuY29uc3QgY2FwdHVyZU9ubHlPcHRpb25zID0geyBjYXB0dXJlOiB0cnVlIH07XG4vKipcbiAqIFRoaXMgaGVscGVyIHVwZGF0ZXMgdGhlIGhvc3QgZWxlbWVudCB0byBwcmV2ZW50IGtleWJvYXJkIGludGVyYWN0aW9uIG9uIGl0cyBzdWJ0cmVlIGFuZCBzZXRzIHRoZSBhcHByb3ByaWF0ZSBhcmlhIGF0dHJpYnV0ZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkUmVuZGVyYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiAqKk5vdGVzKipcbiAqXG4gKiB0aGlzIHV0aWwgaXMgbm90IG5lZWRlZCBmb3Igc2ltcGxlIGNvbXBvbmVudHMgd2hvc2Ugcm9vdCBlbGVtZW50IG9yIGVsZW1lbnRzIGFyZSBhbiBpbnRlcmFjdGl2ZSBjb21wb25lbnQgKGN1c3RvbSBlbGVtZW50IG9yIG5hdGl2ZSBjb250cm9sKS4gRm9yIHRob3NlIGNhc2VzLCBzZXQgdGhlIGBkaXNhYmxlZGAgcHJvcHMgb24gdGhlIHJvb3QgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogdGVjaG5pY2FsbHksIHVzZXJzIGNhbiBvdmVycmlkZSBgdGFiaW5kZXhgIGFuZCByZXN0b3JlIGtleWJvYXJkIG5hdmlnYXRpb24sIGJ1dCB0aGlzIHdpbGwgYmUgY29uc2lkZXJlZCB1c2VyIGVycm9yXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RJc1RhYmJhYmxlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbihjb21wb25lbnQsIGhvc3RJc1RhYmJhYmxlID0gZmFsc2UpIHtcbiAgaWYgKGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICBpZiAoY29tcG9uZW50LmVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cbmZ1bmN0aW9uIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgZGVsZXRlIGNvbXBvbmVudC5lbC5jbGljazsgLy8gZmFsbGJhY2sgb24gSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrXG4gIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGlzRmlyZWZveCA/IGdldFBhcmVudEVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIC8vIHRoaXMgcGF0aCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gRmlyZWZveFxuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IGhlbHBzIGRpc2FibGUgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudC5kaXNhYmxlZCB8fCAhaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IGNvbXBvbmVudC5lbC5wYXJlbnRFbGVtZW50IHx8IGNvbXBvbmVudC5lbDsgLyogYXNzdW1lIGVsZW1lbnQgaXMgaG9zdCBpZiBpdCBoYXMgbm8gcGFyZW50IHdoZW4gY29ubmVjdGVkICovXG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LnNldChjb21wb25lbnQuZWwsIHBhcmVudCk7XG4gIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHJlc3RvcmVzIGludGVyYWN0aXZpdHkgdG8gZGlzYWJsZWQgY29tcG9uZW50cyBjb25zaXN0ZW50bHkgaW4gRmlyZWZveC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYCBhbmQgaXMgb25seSBuZWVkZWQgZm9yIEZpcmVmb3ggYXMgaXQgZG9lcyBub3QgY2FsbCBjYXB0dXJlIGV2ZW50IGxpc3RlbmVycyBiZWZvcmUgbm9uLWNhcHR1cmUgb25lcyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE3MzE1MDQpLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdEludGVyYWN0aXZlKGNvbXBvbmVudCkge1xuICBpZiAoIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhbHdheXMgcmVtb3ZlIG9uIGRpc2Nvbm5lY3QgYXMgcmVuZGVyIG9yIGNvbm5lY3Qgd2lsbCByZXN0b3JlIGl0XG4gIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdEludGVyYWN0aXZlIGFzIGMsIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSBhcyBkLCB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=