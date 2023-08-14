"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-tree_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-tree_2.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-tree_2.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_tree": () => (/* binding */ Tree),
/* harmony export */   "calcite_tree_item": () => (/* binding */ TreeItem)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditionalSlot-02722e44.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent-a26b009f.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTreeSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTreeSelect", 6);
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-multiselectable": this.child
        ? undefined
        : (this.selectionMode === "multiple" || this.selectionMode === "multichildren").toString(), role: !this.child ? "tree" : undefined, tabIndex: this.getRootTabIndex() }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onFocus() {
    if (!this.child) {
      const focusTarget = this.el.querySelector("calcite-tree-item[selected]:not([disabled])") || this.el.querySelector("calcite-tree-item:not([disabled])");
      (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.f)(focusTarget);
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
    const childItems = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(target.querySelectorAll("calcite-tree-item"));
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
        const selectedItems = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.querySelectorAll("calcite-tree-item[selected]"));
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
      : (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected);
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
        if (target.expanded && (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.y)(this.el).activeElement === target) {
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
      const descendants = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(ancestor.querySelectorAll("calcite-tree-item"));
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
    this.selectedItems = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected);
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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

const treeItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}[hidden]{display:none}.node-actions-container{display:flex;justify-content:space-between}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .chevron,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .chevron,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .chevron,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:var(--calcite-app-z-index);inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:\"\";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline-color:transparent}:host:focus,:host:active{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:focus:not([disabled])){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;overflow:hidden;margin-inline-start:1.25rem;transform:scaleY(0);opacity:0;transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;transform-origin:top}.item--expanded>.children-container{overflow:visible;opacity:1;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]):not([selection-mode=none])) .node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected]) .node-container[data-selection-mode=children],:host([has-children][selected]) .node-container[data-selection-mode=multichildren]{color:var(--calcite-ui-brand)}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}";

const TreeItem = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalTreeItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTreeItemSelect", 6);
    this.openTransitionProp = "opacity";
    this.transitionProp = "expanded";
    this.iconClickHandler = (event) => {
      event.stopPropagation();
      this.expanded = !this.expanded;
    };
    this.childrenClickHandler = (event) => event.stopPropagation();
    this.updateParentIsExpanded = (el, expanded) => {
      const items = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.g)(el, SLOTS.children, {
        all: true,
        selector: "calcite-tree-item"
      });
      items.forEach((item) => (item.parentExpanded = expanded));
    };
    this.actionsEndSlotChangeHandler = (event) => {
      this.hasEndActions = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
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
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.o)(this, true);
  }
  getselectionMode() {
    this.isSelectionMultiLike =
      this.selectionMode === "multiple" || this.selectionMode === "multichildren";
  }
  /**
   * Defines method for `beforeOpen` event handler.
   */
  onBeforeOpen() {
    this.transitionEl.style.transform = "scaleY(1)";
  }
  /**
   * Defines method for `open` event handler:
   */
  onOpen() {
    this.transitionEl.style.transform = "none";
  }
  /**
   * Defines method for `beforeClose` event handler:
   */
  onBeforeClose() {
    // pattern needs to be defined on how we emit events for components without `open` prop.
  }
  /**
   * Defines method for `close` event handler:
   */
  onClose() {
    this.transitionEl.style.transform = "scaleY(0)";
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
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
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
    if (this.expanded) {
      (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.o)(this, true);
    }
    requestAnimationFrame(() => (this.updateAfterInitialRender = true));
  }
  componentDidLoad() {
    this.updateAncestorTree();
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, () => this.parentExpanded || this.depth === 1);
  }
  render() {
    const rtl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el) === "rtl";
    const showBulletPoint = this.selectionMode === "single" || this.selectionMode === "children";
    const showCheckmark = this.selectionMode === "multiple" || this.selectionMode === "multichildren";
    const showBlank = this.selectionMode === "none" && !this.hasChildren;
    const chevron = this.hasChildren ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS.chevron]: true,
        [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_5__.C.rtl]: rtl
      }, "data-test-id": "icon", icon: ICONS.chevronRight, onClick: this.iconClickHandler, scale: this.scale === "l" ? "m" : "s" })) : null;
    const defaultSlotNode = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "default-slot" });
    const checkbox = this.selectionMode === "ancestors" ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: CSS.checkboxLabel, key: "checkbox-label" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-checkbox", { checked: this.selected, class: CSS.checkbox, "data-test-id": "checkbox", indeterminate: this.hasChildren && this.indeterminate, scale: this.scale, tabIndex: -1 }), defaultSlotNode)) : null;
    const selectedIcon = showBulletPoint
      ? ICONS.bulletPoint
      : showCheckmark
        ? ICONS.checkmark
        : showBlank
          ? ICONS.blank
          : null;
    const itemIndicator = selectedIcon ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS.bulletPointIcon]: selectedIcon === ICONS.bulletPoint,
        [CSS.checkmarkIcon]: selectedIcon === ICONS.checkmark,
        [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_5__.C.rtl]: rtl
      }, icon: selectedIcon, scale: this.scale === "l" ? "m" : "s" })) : null;
    const hidden = !(this.parentExpanded || this.depth === 1);
    const isExpanded = this.updateAfterInitialRender && this.expanded;
    const { hasEndActions } = this;
    const slotNode = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "actionsEndSlot", name: SLOTS.actionsEnd, onSlotchange: this.actionsEndSlotChangeHandler }));
    const iconStartEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: this.scale === "l" ? "m" : "s" }));
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-expanded": this.hasChildren ? (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(isExpanded) : undefined, "aria-hidden": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(hidden), "aria-selected": this.selected ? "true" : showCheckmark ? "false" : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.itemExpanded]: isExpanded } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.nodeAndActionsContainer }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.nodeContainer]: true,
        [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_5__.C.rtl]: rtl
      }, "data-selection-mode": this.selectionMode,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.defaultSlotWrapper = el) }, chevron, itemIndicator, this.iconStart ? iconStartEl : null, checkbox ? checkbox : defaultSlotNode), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsEnd, hidden: !hasEndActions, ref: (el) => (this.actionSlotWrapper = el) }, slotNode)), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.childrenContainer]: true,
        [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_5__.C.rtl]: rtl
      }, "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, role: this.hasChildren ? "group" : undefined,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => this.setTransitionEl(el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.children })))));
  }
  setTransitionEl(el) {
    this.transitionEl = el;
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
    const [link] = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.z)(this.el, "a");
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
        const link = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(this.el.children).find((el) => el.matches("a"));
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
        let currentTree = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(currentNode.children).find((el) => el.matches("calcite-tree"));
        while (currentTree) {
          currentNode = currentTree.children[root.children.length - 1];
          currentTree = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.x)(currentNode.children).find((el) => el.matches("calcite-tree"));
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "selectionMode": ["getselectionMode"]
  }; }
};
TreeItem.style = treeItemCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   "d": () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_1__.c)("mutation", processMutations);
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.f)(target);
  });
}




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectOpenCloseComponent),
/* harmony export */   "d": () => (/* binding */ disconnectOpenCloseComponent),
/* harmony export */   "o": () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


const componentToTransitionListeners = new WeakMap();
function transitionStart(event) {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onBeforeOpen() : this.onBeforeClose();
  }
}
function transitionEnd(event) {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onOpen() : this.onClose();
  }
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @param component
 * @param nonOpenCloseComponent
 */
function onToggleOpenCloseComponent(component, nonOpenCloseComponent = false) {
  (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
    if (component.transitionEl) {
      const allTransitionPropsArray = getComputedStyle(component.transitionEl).transition.split(" ");
      const openTransitionPropIndex = allTransitionPropsArray.findIndex((item) => item === component.openTransitionProp);
      const transitionDuration = allTransitionPropsArray[openTransitionPropIndex + 1];
      if (transitionDuration === "0s") {
        (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
          ? component.onBeforeOpen()
          : component.onBeforeClose();
        (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
          ? component.onOpen()
          : component.onClose();
      }
      else {
        component.transitionEl.addEventListener("transitionstart", () => {
          (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
            ? component.onBeforeOpen()
            : component.onBeforeClose();
        }, { once: true });
        component.transitionEl.addEventListener("transitionend", () => {
          (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
            ? component.onOpen()
            : component.onClose();
        }, { once: true });
      }
    }
  });
}
/**
 * Helper to keep track of transition listeners on setTransitionEl and connectedCallback on OpenCloseComponent components.
 *
 * For component which do not have open prop, use `onToggleOpenCloseComponent` implementation.
 *
 * @param component
 */
function connectOpenCloseComponent(component) {
  disconnectOpenCloseComponent(component);
  if (component.transitionEl) {
    const boundOnTransitionStart = transitionStart.bind(component);
    const boundOnTransitionEnd = transitionEnd.bind(component);
    componentToTransitionListeners.set(component, [
      component.transitionEl,
      boundOnTransitionStart,
      boundOnTransitionEnd
    ]);
    component.transitionEl.addEventListener("transitionstart", boundOnTransitionStart);
    component.transitionEl.addEventListener("transitionend", boundOnTransitionEnd);
  }
}
/**
 * Helper to tear down transition listeners on disconnectedCallback on OpenCloseComponent components.
 *
 * @param component
 */
function disconnectOpenCloseComponent(component) {
  if (!componentToTransitionListeners.has(component)) {
    return;
  }
  const [transitionEl, start, end] = componentToTransitionListeners.get(component);
  transitionEl.removeEventListener("transitionstart", start);
  transitionEl.removeEventListener("transitionend", end);
  componentToTransitionListeners.delete(component);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDJjZDNiYTY2YTYxZWMzMjg4NGVjYWU3M2ZmMGYyOTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDd0c7QUFDdkY7QUFDdkQ7QUFDWTtBQUN4QjtBQUMvQjtBQUNLOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxNQUFNLGNBQWMsY0FBYyw4QkFBOEIsbUJBQW1COztBQUV4dkQ7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLDZCQUE2QixxREFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQUMsQ0FBQyxpREFBSSxJ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLXRyZWVfMi5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jb25kaXRpb25hbFNsb3QtMDI3MjJlNDQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL29wZW5DbG9zZUNvbXBvbmVudC1hMjZiMDA5Zi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZiBhcyBmb2N1c0VsZW1lbnQsIHggYXMgbm9kZUxpc3RUb0FycmF5LCB5IGFzIGdldFJvb3ROb2RlLCBnIGFzIGdldFNsb3R0ZWQsIGQgYXMgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudCwgYiBhcyBnZXRFbGVtZW50RGlyLCB0IGFzIHRvQXJpYUJvb2xlYW4sIHogYXMgZmlsdGVyRGlyZWN0Q2hpbGRyZW4gfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LTAyNzIyZTQ0LmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBvIGFzIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtYTI2YjAwOWYuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuXG5mdW5jdGlvbiBpc1RyZWVJdGVtKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQ/Lm1hdGNoZXMoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKTtcbn1cbmZ1bmN0aW9uIGdldEVuYWJsZWRTaWJsaW5nSXRlbShlbCwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IGRpcmVjdGlvblByb3AgPSBkaXJlY3Rpb24gPT09IFwiZG93blwiID8gXCJuZXh0RWxlbWVudFNpYmxpbmdcIiA6IFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiO1xuICBsZXQgY3VycmVudEVsID0gZWw7XG4gIGxldCBlbmFibGVkRWwgPSBudWxsO1xuICB3aGlsZSAoaXNUcmVlSXRlbShjdXJyZW50RWwpKSB7XG4gICAgaWYgKCFjdXJyZW50RWwuZGlzYWJsZWQpIHtcbiAgICAgIGVuYWJsZWRFbCA9IGN1cnJlbnRFbDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjdXJyZW50RWwgPSBjdXJyZW50RWxbZGlyZWN0aW9uUHJvcF07XG4gIH1cbiAgcmV0dXJuIGVuYWJsZWRFbDtcbn1cblxuY29uc3QgdHJlZUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoOmZvY3VzKXtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9XCI7XG5cbmNvbnN0IFRyZWUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVRyZWVTZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUcmVlU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMubGluZXMgPSBmYWxzZTtcbiAgICB0aGlzLmNoaWxkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcInNpbmdsZVwiO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlXCIpO1xuICAgIHRoaXMubGluZXMgPSBwYXJlbnQgPyBwYXJlbnQubGluZXMgOiB0aGlzLmxpbmVzO1xuICAgIHRoaXMuc2NhbGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NhbGUgOiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IHBhcmVudCA/IHBhcmVudC5zZWxlY3Rpb25Nb2RlIDogdGhpcy5zZWxlY3Rpb25Nb2RlO1xuICAgIHRoaXMuY2hpbGQgPSAhIXBhcmVudDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiOiB0aGlzLmNoaWxkXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiIHx8IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aWNoaWxkcmVuXCIpLnRvU3RyaW5nKCksIHJvbGU6ICF0aGlzLmNoaWxkID8gXCJ0cmVlXCIgOiB1bmRlZmluZWQsIHRhYkluZGV4OiB0aGlzLmdldFJvb3RUYWJJbmRleCgpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25Gb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuY2hpbGQpIHtcbiAgICAgIGNvbnN0IGZvY3VzVGFyZ2V0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10cmVlLWl0ZW1bc2VsZWN0ZWRdOm5vdChbZGlzYWJsZWRdKVwiKSB8fCB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCJjYWxjaXRlLXRyZWUtaXRlbTpub3QoW2Rpc2FibGVkXSlcIik7XG4gICAgICBmb2N1c0VsZW1lbnQoZm9jdXNUYXJnZXQpO1xuICAgIH1cbiAgfVxuICBvbkZvY3VzSW4oZXZlbnQpIHtcbiAgICBjb25zdCBmb2N1c2VkRnJvbVJvb3RPck91dHNpZGVUcmVlID0gZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gdGhpcy5lbCB8fCAhdGhpcy5lbC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KTtcbiAgICBpZiAoZm9jdXNlZEZyb21Sb290T3JPdXRzaWRlVHJlZSkge1xuICAgICAgLy8gZ2l2ZXMgdXNlciB0aGUgYWJpbGl0eSB0byB0YWIgaW50byBleHRlcm5hbCBlbGVtZW50cyAobW9kaWZ5aW5nIHRhYmluZGV4IHByb3BlcnR5IHdpbGwgbm90IHdvcmsgaW4gZmlyZWZveClcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgfVxuICB9XG4gIG9uRm9jdXNPdXQoZXZlbnQpIHtcbiAgICBjb25zdCB3aWxsRm9jdXNPdXRzaWRlVHJlZSA9ICF0aGlzLmVsLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuICAgIGlmICh3aWxsRm9jdXNPdXRzaWRlVHJlZSkge1xuICAgICAgdGhpcy5lbC50YWJJbmRleCA9IHRoaXMuZ2V0Um9vdFRhYkluZGV4KCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgY2hpbGRJdGVtcyA9IG5vZGVMaXN0VG9BcnJheSh0YXJnZXQucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdHJlZS1pdGVtXCIpKTtcbiAgICBpZiAodGhpcy5jaGlsZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY2hpbGQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJhbmNlc3RvcnNcIiAmJiAhdGhpcy5jaGlsZCkge1xuICAgICAgdGhpcy51cGRhdGVBbmNlc3RvclRyZWUoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc05vbmVTZWxlY3Rpb25Nb2RlID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm5vbmVcIjtcbiAgICBjb25zdCBzaG91bGRTZWxlY3QgPSB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IG51bGwgJiZcbiAgICAgICghdGFyZ2V0Lmhhc0NoaWxkcmVuIHx8XG4gICAgICAgICh0YXJnZXQuaGFzQ2hpbGRyZW4gJiZcbiAgICAgICAgICAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImNoaWxkcmVuXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIikpKTtcbiAgICBjb25zdCBzaG91bGREZXNlbGVjdEFsbENoaWxkcmVuID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIiAmJiB0YXJnZXQuaGFzQ2hpbGRyZW47XG4gICAgY29uc3Qgc2hvdWxkTW9kaWZ5VG9DdXJyZW50U2VsZWN0aW9uID0gIWlzTm9uZVNlbGVjdGlvbk1vZGUgJiZcbiAgICAgIGV2ZW50LmRldGFpbC5tb2RpZnlDdXJyZW50U2VsZWN0aW9uICYmXG4gICAgICAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCIgfHwgdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIik7XG4gICAgY29uc3Qgc2hvdWxkQ2xlYXJDdXJyZW50U2VsZWN0aW9uID0gIXNob3VsZE1vZGlmeVRvQ3VycmVudFNlbGVjdGlvbiAmJlxuICAgICAgKCgodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiIHx8IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiKSAmJlxuICAgICAgICBjaGlsZEl0ZW1zLmxlbmd0aCA8PSAwKSB8fFxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwiY2hpbGRyZW5cIiB8fFxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGVFeHBhbmQgPSBbXCJjaGlsZHJlblwiLCBcIm11bHRpY2hpbGRyZW5cIl0uaW5jbHVkZXModGhpcy5zZWxlY3Rpb25Nb2RlKSB8fFxuICAgICAgKFtcInNpbmdsZVwiLCBcIm11bHRpcGxlXCJdLmluY2x1ZGVzKHRoaXMuc2VsZWN0aW9uTW9kZSkgJiZcbiAgICAgICAgdGFyZ2V0Lmhhc0NoaWxkcmVuICYmXG4gICAgICAgICFldmVudC5kZXRhaWwuZm9yY2VUb2dnbGUpO1xuICAgIGlmICghdGhpcy5jaGlsZCkge1xuICAgICAgY29uc3QgdGFyZ2V0SXRlbXMgPSBbXTtcbiAgICAgIGlmIChzaG91bGRTZWxlY3QpIHtcbiAgICAgICAgdGFyZ2V0SXRlbXMucHVzaCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgaWYgKHNob3VsZENsZWFyQ3VycmVudFNlbGVjdGlvbikge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gbm9kZUxpc3RUb0FycmF5KHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdHJlZS1pdGVtW3NlbGVjdGVkXVwiKSk7XG4gICAgICAgIHNlbGVjdGVkSXRlbXMuZm9yRWFjaCgodHJlZUl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIXRhcmdldEl0ZW1zLmluY2x1ZGVzKHRyZWVJdGVtKSkge1xuICAgICAgICAgICAgdHJlZUl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHNob3VsZFVwZGF0ZUV4cGFuZCkge1xuICAgICAgICBpZiAoW1wic2luZ2xlXCIsIFwibXVsdGlwbGVcIl0uaW5jbHVkZXModGhpcy5zZWxlY3Rpb25Nb2RlKSkge1xuICAgICAgICAgIHRhcmdldC5leHBhbmRlZCA9ICF0YXJnZXQuZXhwYW5kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpY2hpbGRyZW5cIikge1xuICAgICAgICAgIHRhcmdldC5leHBhbmRlZCA9ICF0YXJnZXQuc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImNoaWxkcmVuXCIpIHtcbiAgICAgICAgICB0YXJnZXQuZXhwYW5kZWQgPSB0YXJnZXQuc2VsZWN0ZWQgPyAhdGFyZ2V0LmV4cGFuZGVkIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNob3VsZERlc2VsZWN0QWxsQ2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmIChpdGVtLmhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICBpdGVtLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRNb2RpZnlUb0N1cnJlbnRTZWxlY3Rpb24pIHtcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgICAgaWYgKChzaG91bGRNb2RpZnlUb0N1cnJlbnRTZWxlY3Rpb24gJiYgdGFyZ2V0LnNlbGVjdGVkKSB8fCBldmVudC5kZXRhaWwuZm9yY2VUb2dnbGUpIHtcbiAgICAgICAgdGFyZ2V0SXRlbXMuZm9yRWFjaCgodHJlZUl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIXRyZWVJdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0cmVlSXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaXNOb25lU2VsZWN0aW9uTW9kZSkge1xuICAgICAgICB0YXJnZXRJdGVtcy5mb3JFYWNoKCh0cmVlSXRlbSkgPT4ge1xuICAgICAgICAgIGlmICghdHJlZUl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRyZWVJdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBpc05vbmVTZWxlY3Rpb25Nb2RlXG4gICAgICA/IFt0YXJnZXRdXG4gICAgICA6IG5vZGVMaXN0VG9BcnJheSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKSkuZmlsdGVyKChpKSA9PiBpLnNlbGVjdGVkKTtcbiAgICB0aGlzLmNhbGNpdGVUcmVlU2VsZWN0LmVtaXQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWU6bm90KFtjaGlsZF0pXCIpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoIShyb290ID09PSB0aGlzLmVsICYmIHRhcmdldC50YWdOYW1lID09PSBcIkNBTENJVEUtVFJFRS1JVEVNXCIgJiYgdGhpcy5lbC5jb250YWlucyh0YXJnZXQpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICBjb25zdCBuZXh0ID0gZ2V0RW5hYmxlZFNpYmxpbmdJdGVtKHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcsIFwiZG93blwiKTtcbiAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgIG5leHQuZm9jdXMoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gZ2V0RW5hYmxlZFNpYmxpbmdJdGVtKHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBcInVwXCIpO1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIHByZXZpb3VzLmZvY3VzKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIgJiYgIXRhcmdldC5kaXNhYmxlZCkge1xuICAgICAgLy8gV2hlbiBmb2N1cyBpcyBvbiBhbiBvcGVuIG5vZGUsIGNsb3NlcyB0aGUgbm9kZS5cbiAgICAgIGlmICh0YXJnZXQuaGFzQ2hpbGRyZW4gJiYgdGFyZ2V0LmV4cGFuZGVkKSB7XG4gICAgICAgIHRhcmdldC5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBXaGVuIGZvY3VzIGlzIG9uIGEgY2hpbGQgbm9kZSB0aGF0IGlzIGFsc28gZWl0aGVyIGFuIGVuZCBub2RlIG9yIGEgY2xvc2VkIG5vZGUsIG1vdmVzIGZvY3VzIHRvIGl0cyBwYXJlbnQgbm9kZS5cbiAgICAgIGNvbnN0IHBhcmVudEl0ZW0gPSB0YXJnZXQucGFyZW50RWxlbWVudC5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlLWl0ZW1cIik7XG4gICAgICBpZiAocGFyZW50SXRlbSAmJiAoIXRhcmdldC5oYXNDaGlsZHJlbiB8fCB0YXJnZXQuZXhwYW5kZWQgPT09IGZhbHNlKSkge1xuICAgICAgICBwYXJlbnRJdGVtLmZvY3VzKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFdoZW4gZm9jdXMgaXMgb24gYSByb290IG5vZGUgdGhhdCBpcyBhbHNvIGVpdGhlciBhbiBlbmQgbm9kZSBvciBhIGNsb3NlZCBub2RlLCBkb2VzIG5vdGhpbmcuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiICYmICF0YXJnZXQuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0YXJnZXQuaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKHRhcmdldC5leHBhbmRlZCAmJiBnZXRSb290Tm9kZSh0aGlzLmVsKS5hY3RpdmVFbGVtZW50ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAvLyBXaGVuIGZvY3VzIGlzIG9uIGFuIG9wZW4gbm9kZSwgbW92ZXMgZm9jdXMgdG8gdGhlIGZpcnN0IGNoaWxkIG5vZGUuXG4gICAgICAgICAgZ2V0RW5hYmxlZFNpYmxpbmdJdGVtKHRhcmdldC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIiksIFwiZG93blwiKT8uZm9jdXMoKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIFdoZW4gZm9jdXMgaXMgb24gYSBjbG9zZWQgbm9kZSwgb3BlbnMgdGhlIG5vZGU7IGZvY3VzIGRvZXMgbm90IG1vdmUuXG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHVwZGF0ZUFuY2VzdG9yVHJlZShldmVudCkge1xuICAgIGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYW5jZXN0b3JzID0gW107XG4gICAgbGV0IHBhcmVudCA9IGl0ZW0ucGFyZW50RWxlbWVudC5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlLWl0ZW1cIik7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgYW5jZXN0b3JzLnB1c2gocGFyZW50KTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWUtaXRlbVwiKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRJdGVtcyA9IEFycmF5LmZyb20oaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW06bm90KFtkaXNhYmxlZF0pXCIpKTtcbiAgICBjb25zdCBjaGlsZEl0ZW1zV2l0aE5vQ2hpbGRyZW4gPSBjaGlsZEl0ZW1zLmZpbHRlcigoY2hpbGQpID0+ICFjaGlsZC5oYXNDaGlsZHJlbik7XG4gICAgY29uc3QgY2hpbGRJdGVtc1dpdGhDaGlsZHJlbiA9IGNoaWxkSXRlbXMuZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQuaGFzQ2hpbGRyZW4pO1xuICAgIGNvbnN0IGZ1dHVyZVNlbGVjdGVkID0gaXRlbS5oYXNDaGlsZHJlblxuICAgICAgPyAhKGl0ZW0uc2VsZWN0ZWQgfHwgaXRlbS5pbmRldGVybWluYXRlKVxuICAgICAgOiAhaXRlbS5zZWxlY3RlZDtcbiAgICBjaGlsZEl0ZW1zV2l0aE5vQ2hpbGRyZW4uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLnNlbGVjdGVkID0gZnV0dXJlU2VsZWN0ZWQ7XG4gICAgICBlbC5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdXBkYXRlSXRlbVN0YXRlKGNoaWxkSXRlbXMsIGl0ZW0pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gY2hpbGRJdGVtcy5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZC5zZWxlY3RlZCk7XG4gICAgICBjb25zdCB1bnNlbGVjdGVkID0gY2hpbGRJdGVtcy5maWx0ZXIoKGNoaWxkKSA9PiAhY2hpbGQuc2VsZWN0ZWQpO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IHNlbGVjdGVkLmxlbmd0aCA9PT0gY2hpbGRJdGVtcy5sZW5ndGg7XG4gICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBzZWxlY3RlZC5sZW5ndGggPiAwICYmIHVuc2VsZWN0ZWQubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgY2hpbGRJdGVtc1dpdGhDaGlsZHJlbi5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0Q2hpbGRJdGVtcyA9IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSA+IGNhbGNpdGUtdHJlZSA+IGNhbGNpdGUtdHJlZS1pdGVtXCIpKTtcbiAgICAgIHVwZGF0ZUl0ZW1TdGF0ZShkaXJlY3RDaGlsZEl0ZW1zLCBlbCk7XG4gICAgfSk7XG4gICAgaWYgKGl0ZW0uaGFzQ2hpbGRyZW4pIHtcbiAgICAgIHVwZGF0ZUl0ZW1TdGF0ZShjaGlsZEl0ZW1zLCBpdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gZnV0dXJlU2VsZWN0ZWQ7XG4gICAgICBpdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgYW5jZXN0b3JzLmZvckVhY2goKGFuY2VzdG9yKSA9PiB7XG4gICAgICBjb25zdCBkZXNjZW5kYW50cyA9IG5vZGVMaXN0VG9BcnJheShhbmNlc3Rvci5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIikpO1xuICAgICAgY29uc3QgYWN0aXZlRGVzY2VuZGFudHMgPSBkZXNjZW5kYW50cy5maWx0ZXIoKGVsKSA9PiBlbC5zZWxlY3RlZCk7XG4gICAgICBpZiAoYWN0aXZlRGVzY2VuZGFudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFuY2VzdG9yLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGFuY2VzdG9yLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9IGFjdGl2ZURlc2NlbmRhbnRzLmxlbmd0aCA8IGRlc2NlbmRhbnRzLmxlbmd0aDtcbiAgICAgIGFuY2VzdG9yLmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuICAgICAgYW5jZXN0b3Iuc2VsZWN0ZWQgPSAhaW5kZXRlcm1pbmF0ZTtcbiAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBub2RlTGlzdFRvQXJyYXkodGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIikpLmZpbHRlcigoaSkgPT4gaS5zZWxlY3RlZCk7XG4gICAgdGhpcy5jYWxjaXRlVHJlZVNlbGVjdC5lbWl0KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldFJvb3RUYWJJbmRleCgpIHtcbiAgICByZXR1cm4gIXRoaXMuY2hpbGQgPyAwIDogLTE7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcblRyZWUuc3R5bGUgPSB0cmVlQ3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbiAgY2hlY2tib3hMYWJlbDogXCJjaGVja2JveC1sYWJlbFwiLFxuICBjaGVja2JveDogXCJjaGVja2JveFwiLFxuICBjaGV2cm9uOiBcImNoZXZyb25cIixcbiAgbm9kZUNvbnRhaW5lcjogXCJub2RlLWNvbnRhaW5lclwiLFxuICBjaGlsZHJlbkNvbnRhaW5lcjogXCJjaGlsZHJlbi1jb250YWluZXJcIixcbiAgYnVsbGV0UG9pbnRJY29uOiBcImJ1bGxldC1wb2ludFwiLFxuICBjaGVja21hcmtJY29uOiBcImNoZWNrbWFya1wiLFxuICBpdGVtRXhwYW5kZWQ6IFwiaXRlbS0tZXhwYW5kZWRcIixcbiAgaWNvblN0YXJ0OiBcImljb24tc3RhcnRcIixcbiAgbm9kZUFuZEFjdGlvbnNDb250YWluZXI6IFwibm9kZS1hY3Rpb25zLWNvbnRhaW5lclwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIixcbiAgY2hpbGRyZW46IFwiY2hpbGRyZW5cIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBidWxsZXRQb2ludDogXCJidWxsZXQtcG9pbnRcIixcbiAgY2hlY2ttYXJrOiBcImNoZWNrXCIsXG4gIGNoZXZyb25SaWdodDogXCJjaGV2cm9uLXJpZ2h0XCIsXG4gIGJsYW5rOiBcImJsYW5rXCJcbn07XG5cbmNvbnN0IHRyZWVJdGVtQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpibG9jazttYXgtaW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9W2hpZGRlbl17ZGlzcGxheTpub25lfS5ub2RlLWFjdGlvbnMtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdChbY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5dKXt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1zXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXJ7bWluLWJsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGVja2JveCw6aG9zdChbc2NhbGU9c10pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hldnJvbiw6aG9zdChbc2NhbGU9c10pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuY2hlY2ttYXJrLDpob3N0KFtzY2FsZT1zXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnR7bWFyZ2luLWlubGluZTowLjI1cmVtfTpob3N0KFtzY2FsZT1zXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5pY29uLXN0YXJ0e21hcmdpbi1pbmxpbmU6MC43NXJlbX06aG9zdChbc2NhbGU9bV0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVye21pbi1ibG9jay1zaXplOjJyZW19Omhvc3QoW3NjYWxlPW1dKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZWNrYm94LDpob3N0KFtzY2FsZT1tXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGV2cm9uLDpob3N0KFtzY2FsZT1tXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGVja21hcmssOmhvc3QoW3NjYWxlPW1dKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmJ1bGxldC1wb2ludHttYXJnaW4taW5saW5lOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVyIC5ub2RlLWNvbnRhaW5lciAuaWNvbi1zdGFydHttYXJnaW4taW5saW5lOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bF0pIC5ub2RlLWFjdGlvbnMtY29udGFpbmVye21pbi1ibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmNoZWNrYm94LDpob3N0KFtzY2FsZT1sXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGV2cm9uLDpob3N0KFtzY2FsZT1sXSkgLm5vZGUtYWN0aW9ucy1jb250YWluZXIgLm5vZGUtY29udGFpbmVyIC5jaGVja21hcmssOmhvc3QoW3NjYWxlPWxdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmJ1bGxldC1wb2ludHttYXJnaW4taW5saW5lOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAubm9kZS1hY3Rpb25zLWNvbnRhaW5lciAubm9kZS1jb250YWluZXIgLmljb24tc3RhcnR7bWFyZ2luLWlubGluZTowLjc1cmVtfTpob3N0KFtsaW5lc10pIC5jaGlsZHJlbi1jb250YWluZXI6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7aW5saW5lLXNpemU6MXB4O3RyYW5zaXRpb24tcHJvcGVydHk6Y29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2Jsb2NrLXNpemU6OTYlO2NvbnRlbnQ6XFxcIlxcXCI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKX06aG9zdCg6bm90KFtsaW5lc10pKSAubm9kZS1jb250YWluZXI6YWZ0ZXJ7ZGlzcGxheTpub25lfTo6c2xvdHRlZCgqKXttaW4taW5saW5lLXNpemU6MHB4O21heC1pbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnR9OjpzbG90dGVkKCopOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnR9OjpzbG90dGVkKGEpe2lubGluZS1zaXplOjEwMCU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZX06aG9zdHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0OmZvY3VzLDpob3N0OmFjdGl2ZXtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSkpe291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmFjdGlvbnMtZW5ke2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaH0uY2hlY2tib3h7bGluZS1oZWlnaHQ6MH0uY2hlY2tib3gtbGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5jaGVja2JveDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9LmNoaWxkcmVuLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtibG9jay1zaXplOjBweDtvdmVyZmxvdzpoaWRkZW47bWFyZ2luLWlubGluZS1zdGFydDoxLjI1cmVtO3RyYW5zZm9ybTpzY2FsZVkoMCk7b3BhY2l0eTowO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjQ0LCAwLjQyLCAwLjg4KSwgYWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtLW9yaWdpbjp0b3B9Lml0ZW0tLWV4cGFuZGVkPi5jaGlsZHJlbi1jb250YWluZXJ7b3ZlcmZsb3c6dmlzaWJsZTtvcGFjaXR5OjE7YmxvY2stc2l6ZTphdXRvfS5ub2RlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7bWluLWlubGluZS1zaXplOjBweDthbGlnbi1pdGVtczpjZW50ZXJ9Lm5vZGUtY29udGFpbmVyIC5jaGVja21hcmssLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnR7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfS5ub2RlLWNvbnRhaW5lcjpob3ZlciAuY2hlY2ttYXJrLC5ub2RlLWNvbnRhaW5lcjpob3ZlciAuYnVsbGV0LXBvaW50LDpob3N0KFtzZWxlY3RlZF0pIC5ub2RlLWNvbnRhaW5lcjpob3ZlciAuY2hlY2ttYXJrLDpob3N0KFtzZWxlY3RlZF0pIC5ub2RlLWNvbnRhaW5lcjpob3ZlciAuYnVsbGV0LXBvaW50LDpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSkpIC5ub2RlLWNvbnRhaW5lciAuY2hlY2ttYXJrLDpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSkpIC5ub2RlLWNvbnRhaW5lciAuYnVsbGV0LXBvaW50e29wYWNpdHk6MX06aG9zdChbc2VsZWN0ZWRdKSAubm9kZS1jb250YWluZXIsOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyOmhvdmVye2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyIC5jaGVja21hcmssOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyOmhvdmVyIC5idWxsZXQtcG9pbnQsOmhvc3QoW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyOmhvdmVyIC5jaGVja21hcmt7b3BhY2l0eToxO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtzZWxlY3Rpb24tbW9kZT1ub25lXTpub3QoW2hhcy1jaGlsZHJlbl0pKTpob3N0KFtzY2FsZT1zXSkgLm5vZGUtY29udGFpbmVye3BhZGRpbmctaW5saW5lLXN0YXJ0OjAuNXJlbX06aG9zdChbc2VsZWN0aW9uLW1vZGU9bm9uZV06bm90KFtoYXMtY2hpbGRyZW5dKSk6aG9zdChbc2NhbGU9bV0pIC5ub2RlLWNvbnRhaW5lcntwYWRkaW5nLWlubGluZS1zdGFydDoxcmVtfTpob3N0KFtzZWxlY3Rpb24tbW9kZT1ub25lXTpub3QoW2hhcy1jaGlsZHJlbl0pKTpob3N0KFtzY2FsZT1sXSkgLm5vZGUtY29udGFpbmVye3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNXJlbX06aG9zdCg6bm90KFtoYXMtY2hpbGRyZW5dKSk6aG9zdChbc2NhbGU9c10pIC5ub2RlLWNvbnRhaW5lcltkYXRhLXNlbGVjdGlvbi1tb2RlPWFuY2VzdG9yc10gLmNoZWNrYm94e3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuMjVyZW19Omhvc3QoOm5vdChbaGFzLWNoaWxkcmVuXSkpOmhvc3QoW3NjYWxlPW1dKSAubm9kZS1jb250YWluZXJbZGF0YS1zZWxlY3Rpb24tbW9kZT1hbmNlc3RvcnNdIC5jaGVja2JveHtwYWRkaW5nLWlubGluZS1zdGFydDoxLjVyZW19Omhvc3QoOm5vdChbaGFzLWNoaWxkcmVuXSkpOmhvc3QoW3NjYWxlPWxdKSAubm9kZS1jb250YWluZXJbZGF0YS1zZWxlY3Rpb24tbW9kZT1hbmNlc3RvcnNdIC5jaGVja2JveHtwYWRkaW5nLWlubGluZS1zdGFydDoxLjc1cmVtfTpob3N0KFtoYXMtY2hpbGRyZW5dKSAubm9kZS1jb250YWluZXJbZGF0YS1zZWxlY3Rpb24tbW9kZT1hbmNlc3RvcnNdIC5jaGVja2JveHttYXJnaW4taW5saW5lLXN0YXJ0OjB9Omhvc3QoW2hhcy1jaGlsZHJlbl0pIC5ub2RlLWNvbnRhaW5lciAuYnVsbGV0LXBvaW50LDpob3N0KFtoYXMtY2hpbGRyZW5dKSAubm9kZS1jb250YWluZXIgLmNoZWNrbWFya3tkaXNwbGF5Om5vbmV9Omhvc3QoW2hhcy1jaGlsZHJlbl1bZXhwYW5kZWRdOm5vdChbc2VsZWN0ZWRdKTpub3QoW3NlbGVjdGlvbi1tb2RlPW5vbmVdKSkgLm5vZGUtY29udGFpbmVyIDo6c2xvdHRlZCgqKXtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtoYXMtY2hpbGRyZW5dW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyW2RhdGEtc2VsZWN0aW9uLW1vZGU9Y2hpbGRyZW5dLDpob3N0KFtoYXMtY2hpbGRyZW5dW3NlbGVjdGVkXSkgLm5vZGUtY29udGFpbmVyW2RhdGEtc2VsZWN0aW9uLW1vZGU9bXVsdGljaGlsZHJlbl17Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LmNoZXZyb257cG9zaXRpb246cmVsYXRpdmU7YWxpZ24tc2VsZjpjZW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2ZsZXg6MCAwIGF1dG87dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0uY2FsY2l0ZS0tcnRsIC5jaGV2cm9ue3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uaXRlbS0tZXhwYW5kZWQgLm5vZGUtY29udGFpbmVyPi5jaGV2cm9ue3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfTpob3N0KFtzZWxlY3RlZF0pIC5jaGVja21hcmssOmhvc3QoW3NlbGVjdGVkXSkgLmJ1bGxldC1wb2ludHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX1cIjtcblxuY29uc3QgVHJlZUl0ZW0gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRyZWVJdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMub3BlblRyYW5zaXRpb25Qcm9wID0gXCJvcGFjaXR5XCI7XG4gICAgdGhpcy50cmFuc2l0aW9uUHJvcCA9IFwiZXhwYW5kZWRcIjtcbiAgICB0aGlzLmljb25DbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgIH07XG4gICAgdGhpcy5jaGlsZHJlbkNsaWNrSGFuZGxlciA9IChldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVQYXJlbnRJc0V4cGFuZGVkID0gKGVsLCBleHBhbmRlZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbXMgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5jaGlsZHJlbiwge1xuICAgICAgICBhbGw6IHRydWUsXG4gICAgICAgIHNlbGVjdG9yOiBcImNhbGNpdGUtdHJlZS1pdGVtXCJcbiAgICAgIH0pO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0ucGFyZW50RXhwYW5kZWQgPSBleHBhbmRlZCkpO1xuICAgIH07XG4gICAgdGhpcy5hY3Rpb25zRW5kU2xvdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzRW5kQWN0aW9ucyA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvblN0YXJ0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnBhcmVudEV4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXB0aCA9IC0xO1xuICAgIHRoaXMuaGFzQ2hpbGRyZW4gPSBudWxsO1xuICAgIHRoaXMubGluZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cGRhdGVBZnRlckluaXRpYWxSZW5kZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0VuZEFjdGlvbnMgPSBmYWxzZTtcbiAgfVxuICBleHBhbmRlZEhhbmRsZXIobmV3VmFsdWUpIHtcbiAgICB0aGlzLnVwZGF0ZVBhcmVudElzRXhwYW5kZWQodGhpcy5lbCwgbmV3VmFsdWUpO1xuICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMsIHRydWUpO1xuICB9XG4gIGdldHNlbGVjdGlvbk1vZGUoKSB7XG4gICAgdGhpcy5pc1NlbGVjdGlvbk11bHRpTGlrZSA9XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiO1xuICB9XG4gIC8qKlxuICAgKiBEZWZpbmVzIG1ldGhvZCBmb3IgYGJlZm9yZU9wZW5gIGV2ZW50IGhhbmRsZXIuXG4gICAqL1xuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy50cmFuc2l0aW9uRWwuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZVkoMSlcIjtcbiAgfVxuICAvKipcbiAgICogRGVmaW5lcyBtZXRob2QgZm9yIGBvcGVuYCBldmVudCBoYW5kbGVyOlxuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLnN0eWxlLnRyYW5zZm9ybSA9IFwibm9uZVwiO1xuICB9XG4gIC8qKlxuICAgKiBEZWZpbmVzIG1ldGhvZCBmb3IgYGJlZm9yZUNsb3NlYCBldmVudCBoYW5kbGVyOlxuICAgKi9cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICAvLyBwYXR0ZXJuIG5lZWRzIHRvIGJlIGRlZmluZWQgb24gaG93IHdlIGVtaXQgZXZlbnRzIGZvciBjb21wb25lbnRzIHdpdGhvdXQgYG9wZW5gIHByb3AuXG4gIH1cbiAgLyoqXG4gICAqIERlZmluZXMgbWV0aG9kIGZvciBgY2xvc2VgIGV2ZW50IGhhbmRsZXI6XG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGVZKDApXCI7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5wYXJlbnRUcmVlSXRlbSA9IHRoaXMuZWwucGFyZW50RWxlbWVudD8uY2xvc2VzdChcImNhbGNpdGUtdHJlZS1pdGVtXCIpO1xuICAgIGlmICh0aGlzLnBhcmVudFRyZWVJdGVtKSB7XG4gICAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnBhcmVudFRyZWVJdGVtO1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRJc0V4cGFuZGVkKHRoaXMucGFyZW50VHJlZUl0ZW0sIGV4cGFuZGVkKTtcbiAgICB9XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZW5kZXIoKSB7XG4gICAgdGhpcy5oYXNDaGlsZHJlbiA9ICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10cmVlXCIpO1xuICAgIHRoaXMuZGVwdGggPSAwO1xuICAgIGxldCBwYXJlbnRUcmVlID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlXCIpO1xuICAgIGlmICghcGFyZW50VHJlZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBwYXJlbnRUcmVlLnNlbGVjdGlvbk1vZGU7XG4gICAgdGhpcy5zY2FsZSA9IHBhcmVudFRyZWUuc2NhbGUgfHwgXCJtXCI7XG4gICAgdGhpcy5saW5lcyA9IHBhcmVudFRyZWUubGluZXM7XG4gICAgbGV0IG5leHRQYXJlbnRUcmVlO1xuICAgIHdoaWxlIChwYXJlbnRUcmVlKSB7XG4gICAgICBuZXh0UGFyZW50VHJlZSA9IHBhcmVudFRyZWUucGFyZW50RWxlbWVudD8uY2xvc2VzdChcImNhbGNpdGUtdHJlZVwiKTtcbiAgICAgIGlmIChuZXh0UGFyZW50VHJlZSA9PT0gcGFyZW50VHJlZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnRUcmVlID0gbmV4dFBhcmVudFRyZWU7XG4gICAgICAgIHRoaXMuZGVwdGggPSB0aGlzLmRlcHRoICsgMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcbiAgICAgIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gKHRoaXMudXBkYXRlQWZ0ZXJJbml0aWFsUmVuZGVyID0gdHJ1ZSkpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy51cGRhdGVBbmNlc3RvclRyZWUoKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMsICgpID0+IHRoaXMucGFyZW50RXhwYW5kZWQgfHwgdGhpcy5kZXB0aCA9PT0gMSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJ0bCA9IGdldEVsZW1lbnREaXIodGhpcy5lbCkgPT09IFwicnRsXCI7XG4gICAgY29uc3Qgc2hvd0J1bGxldFBvaW50ID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiIHx8IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJjaGlsZHJlblwiO1xuICAgIGNvbnN0IHNob3dDaGVja21hcmsgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGljaGlsZHJlblwiO1xuICAgIGNvbnN0IHNob3dCbGFuayA9IHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJub25lXCIgJiYgIXRoaXMuaGFzQ2hpbGRyZW47XG4gICAgY29uc3QgY2hldnJvbiA9IHRoaXMuaGFzQ2hpbGRyZW4gPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY2hldnJvbl06IHRydWUsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBydGxcbiAgICAgIH0sIFwiZGF0YS10ZXN0LWlkXCI6IFwiaWNvblwiLCBpY29uOiBJQ09OUy5jaGV2cm9uUmlnaHQsIG9uQ2xpY2s6IHRoaXMuaWNvbkNsaWNrSGFuZGxlciwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkgOiBudWxsO1xuICAgIGNvbnN0IGRlZmF1bHRTbG90Tm9kZSA9IGgoXCJzbG90XCIsIHsga2V5OiBcImRlZmF1bHQtc2xvdFwiIH0pO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcImFuY2VzdG9yc1wiID8gKGgoXCJsYWJlbFwiLCB7IGNsYXNzOiBDU1MuY2hlY2tib3hMYWJlbCwga2V5OiBcImNoZWNrYm94LWxhYmVsXCIgfSwgaChcImNhbGNpdGUtY2hlY2tib3hcIiwgeyBjaGVja2VkOiB0aGlzLnNlbGVjdGVkLCBjbGFzczogQ1NTLmNoZWNrYm94LCBcImRhdGEtdGVzdC1pZFwiOiBcImNoZWNrYm94XCIsIGluZGV0ZXJtaW5hdGU6IHRoaXMuaGFzQ2hpbGRyZW4gJiYgdGhpcy5pbmRldGVybWluYXRlLCBzY2FsZTogdGhpcy5zY2FsZSwgdGFiSW5kZXg6IC0xIH0pLCBkZWZhdWx0U2xvdE5vZGUpKSA6IG51bGw7XG4gICAgY29uc3Qgc2VsZWN0ZWRJY29uID0gc2hvd0J1bGxldFBvaW50XG4gICAgICA/IElDT05TLmJ1bGxldFBvaW50XG4gICAgICA6IHNob3dDaGVja21hcmtcbiAgICAgICAgPyBJQ09OUy5jaGVja21hcmtcbiAgICAgICAgOiBzaG93QmxhbmtcbiAgICAgICAgICA/IElDT05TLmJsYW5rXG4gICAgICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGl0ZW1JbmRpY2F0b3IgPSBzZWxlY3RlZEljb24gPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnVsbGV0UG9pbnRJY29uXTogc2VsZWN0ZWRJY29uID09PSBJQ09OUy5idWxsZXRQb2ludCxcbiAgICAgICAgW0NTUy5jaGVja21hcmtJY29uXTogc2VsZWN0ZWRJY29uID09PSBJQ09OUy5jaGVja21hcmssXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBydGxcbiAgICAgIH0sIGljb246IHNlbGVjdGVkSWNvbiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkgOiBudWxsO1xuICAgIGNvbnN0IGhpZGRlbiA9ICEodGhpcy5wYXJlbnRFeHBhbmRlZCB8fCB0aGlzLmRlcHRoID09PSAxKTtcbiAgICBjb25zdCBpc0V4cGFuZGVkID0gdGhpcy51cGRhdGVBZnRlckluaXRpYWxSZW5kZXIgJiYgdGhpcy5leHBhbmRlZDtcbiAgICBjb25zdCB7IGhhc0VuZEFjdGlvbnMgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2xvdE5vZGUgPSAoaChcInNsb3RcIiwgeyBrZXk6IFwiYWN0aW9uc0VuZFNsb3RcIiwgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmFjdGlvbnNFbmRTbG90Q2hhbmdlSGFuZGxlciB9KSk7XG4gICAgY29uc3QgaWNvblN0YXJ0RWwgPSAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvblN0YXJ0LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsID09PSBcInN0YXJ0XCIgfHwgdGhpcy5pY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIsIGljb246IHRoaXMuaWNvblN0YXJ0LCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtZXhwYW5kZWRcIjogdGhpcy5oYXNDaGlsZHJlbiA/IHRvQXJpYUJvb2xlYW4oaXNFeHBhbmRlZCkgOiB1bmRlZmluZWQsIFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbihoaWRkZW4pLCBcImFyaWEtc2VsZWN0ZWRcIjogdGhpcy5zZWxlY3RlZCA/IFwidHJ1ZVwiIDogc2hvd0NoZWNrbWFyayA/IFwiZmFsc2VcIiA6IHVuZGVmaW5lZCwgXCJjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlblwiOiBoaWRkZW4sIHJvbGU6IFwidHJlZWl0ZW1cIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5pdGVtRXhwYW5kZWRdOiBpc0V4cGFuZGVkIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1Mubm9kZUFuZEFjdGlvbnNDb250YWluZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1Mubm9kZUNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1NfVVRJTElUWS5ydGxdOiBydGxcbiAgICAgIH0sIFwiZGF0YS1zZWxlY3Rpb24tbW9kZVwiOiB0aGlzLnNlbGVjdGlvbk1vZGUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5kZWZhdWx0U2xvdFdyYXBwZXIgPSBlbCkgfSwgY2hldnJvbiwgaXRlbUluZGljYXRvciwgdGhpcy5pY29uU3RhcnQgPyBpY29uU3RhcnRFbCA6IG51bGwsIGNoZWNrYm94ID8gY2hlY2tib3ggOiBkZWZhdWx0U2xvdE5vZGUpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zRW5kLCBoaWRkZW46ICFoYXNFbmRBY3Rpb25zLCByZWY6IChlbCkgPT4gKHRoaXMuYWN0aW9uU2xvdFdyYXBwZXIgPSBlbCkgfSwgc2xvdE5vZGUpKSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY2hpbGRyZW5Db250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTX1VUSUxJVFkucnRsXTogcnRsXG4gICAgICB9LCBcImRhdGEtdGVzdC1pZFwiOiBcImNhbGNpdGUtdHJlZS1jaGlsZHJlblwiLCBvbkNsaWNrOiB0aGlzLmNoaWxkcmVuQ2xpY2tIYW5kbGVyLCByb2xlOiB0aGlzLmhhc0NoaWxkcmVuID8gXCJncm91cFwiIDogdW5kZWZpbmVkLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gdGhpcy5zZXRUcmFuc2l0aW9uRWwoZWwpIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY2hpbGRyZW4gfSkpKSkpO1xuICB9XG4gIHNldFRyYW5zaXRpb25FbChlbCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25DbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNBY3Rpb25FbmRFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU29sdmUgZm9yIGlmIHRoZSBpdGVtIGlzIGNsaWNrZWQgc29tZXdoZXJlIG91dHNpZGUgdGhlIHNsb3R0ZWQgYW5jaG9yLlxuICAgIC8vIEFuY2hvciBpcyB0cmlnZ2VyZWQgYW55d2hlcmUgeW91IGNsaWNrXG4gICAgY29uc3QgW2xpbmtdID0gZmlsdGVyRGlyZWN0Q2hpbGRyZW4odGhpcy5lbCwgXCJhXCIpO1xuICAgIGlmIChsaW5rICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJhXCIpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGxpbmsudGFyZ2V0ID09PSBcIlwiID8gXCJfc2VsZlwiIDogbGluay50YXJnZXQ7XG4gICAgICB3aW5kb3cub3BlbihsaW5rLmhyZWYsIHRhcmdldCk7XG4gICAgfVxuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICBtb2RpZnlDdXJyZW50U2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwiYW5jZXN0b3JzXCIgfHwgdGhpcy5pc1NlbGVjdGlvbk11bHRpTGlrZSxcbiAgICAgIGZvcmNlVG9nZ2xlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgbGV0IHJvb3Q7XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25FbmRFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICAgICAgbW9kaWZ5Q3VycmVudFNlbGVjdGlvbjogdGhpcy5pc1NlbGVjdGlvbk11bHRpTGlrZSxcbiAgICAgICAgICBmb3JjZVRvZ2dsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFjdGl2YXRlcyBhIG5vZGUsIGkuZS4sIHBlcmZvcm1zIGl0cyBkZWZhdWx0IGFjdGlvbi4gRm9yIHBhcmVudCBub2Rlcywgb25lIHBvc3NpYmxlIGRlZmF1bHQgYWN0aW9uIGlzIHRvIG9wZW4gb3IgY2xvc2UgdGhlIG5vZGUuIEluIHNpbmdsZS1zZWxlY3QgdHJlZXMgd2hlcmUgc2VsZWN0aW9uIGRvZXMgbm90IGZvbGxvdyBmb2N1cyAoc2VlIG5vdGUgYmVsb3cpLCB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgdHlwaWNhbGx5IHRvIHNlbGVjdCB0aGUgZm9jdXNlZCBub2RlLlxuICAgICAgICBjb25zdCBsaW5rID0gbm9kZUxpc3RUb0FycmF5KHRoaXMuZWwuY2hpbGRyZW4pLmZpbmQoKGVsKSA9PiBlbC5tYXRjaGVzKFwiYVwiKSk7XG4gICAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVHJlZUl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICAgICAgICBtb2RpZnlDdXJyZW50U2VsZWN0aW9uOiB0aGlzLmlzU2VsZWN0aW9uTXVsdGlMaWtlLFxuICAgICAgICAgICAgZm9yY2VUb2dnbGU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICByb290ID0gdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS10cmVlOm5vdChbY2hpbGRdKVwiKTtcbiAgICAgICAgY29uc3QgZmlyc3ROb2RlID0gcm9vdC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS10cmVlLWl0ZW1cIik7XG4gICAgICAgIGZpcnN0Tm9kZT8uZm9jdXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRW5kXCI6XG4gICAgICAgIHJvb3QgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLXRyZWU6bm90KFtjaGlsZF0pXCIpO1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSByb290LmNoaWxkcmVuW3Jvb3QuY2hpbGRyZW4ubGVuZ3RoIC0gMV07IC8vIGxhc3QgY2hpbGRcbiAgICAgICAgbGV0IGN1cnJlbnRUcmVlID0gbm9kZUxpc3RUb0FycmF5KGN1cnJlbnROb2RlLmNoaWxkcmVuKS5maW5kKChlbCkgPT4gZWwubWF0Y2hlcyhcImNhbGNpdGUtdHJlZVwiKSk7XG4gICAgICAgIHdoaWxlIChjdXJyZW50VHJlZSkge1xuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudFRyZWUuY2hpbGRyZW5bcm9vdC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgICBjdXJyZW50VHJlZSA9IG5vZGVMaXN0VG9BcnJheShjdXJyZW50Tm9kZS5jaGlsZHJlbikuZmluZCgoZWwpID0+IGVsLm1hdGNoZXMoXCJjYWxjaXRlLXRyZWVcIikpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlPy5mb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNBY3Rpb25FbmRFdmVudChldmVudCkge1xuICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgIHJldHVybiBjb21wb3NlZFBhdGguaW5jbHVkZXModGhpcy5hY3Rpb25TbG90V3JhcHBlcik7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgaXMgbWVhbnQgdG8gYmUgY2FsbGVkIGluIGBjb21wb25lbnREaWRMb2FkYCBpbiBvcmRlciB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgaGllcmFyY2hpY2FsIGNvbXBvbmVudCBsaWZlY3ljbGVcbiAgICogYW5kIGhlbHAgY2hlY2sgZm9yIGl0ZW0gc2VsZWN0aW9uIGFzIGl0ZW1zIGFyZSBpbml0aWFsaXplZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdXBkYXRlQW5jZXN0b3JUcmVlKCkge1xuICAgIGNvbnN0IHBhcmVudEl0ZW0gPSB0aGlzLnBhcmVudFRyZWVJdGVtO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwiYW5jZXN0b3JzXCIgfHwgIXBhcmVudEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudFRyZWUgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBzaWJsaW5ncyA9IEFycmF5LmZyb20ocGFyZW50VHJlZT8uY2hpbGRyZW4pO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTaWJsaW5ncyA9IHNpYmxpbmdzLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLnNlbGVjdGVkKTtcbiAgICAgIGlmIChzaWJsaW5ncy5sZW5ndGggPT09IHNlbGVjdGVkU2libGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHBhcmVudEl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBwYXJlbnRJdGVtLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlbGVjdGVkU2libGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBwYXJlbnRJdGVtLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IHBhcmVudEl0ZW0gPSB0aGlzLnBhcmVudFRyZWVJdGVtO1xuICAgICAgcGFyZW50SXRlbS5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZXhwYW5kZWRcIjogW1wiZXhwYW5kZWRIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbXCJnZXRzZWxlY3Rpb25Nb2RlXCJdXG4gIH07IH1cbn07XG5UcmVlSXRlbS5zdHlsZSA9IHRyZWVJdGVtQ3NzO1xuXG5leHBvcnQgeyBUcmVlIGFzIGNhbGNpdGVfdHJlZSwgVHJlZUl0ZW0gYXMgY2FsY2l0ZV90cmVlX2l0ZW0gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBmIGFzIGZvcmNlVXBkYXRlIH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuXG5jb25zdCBvYnNlcnZlZCA9IG5ldyBTZXQoKTtcbmxldCBtdXRhdGlvbk9ic2VydmVyO1xuY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbi8qKlxuICogSGVscGVyIHRvIHNldCB1cCBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIW11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBwcm9jZXNzTXV0YXRpb25zKTtcbiAgfVxuICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LmVsLCBvYnNlcnZlck9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIG9ic2VydmVkLmRlbGV0ZShjb21wb25lbnQuZWwpO1xuICAvLyB3ZSBleHBsaWNpdGx5IHByb2Nlc3MgcXVldWVkIG11dGF0aW9ucyBhbmQgZGlzY29ubmVjdCBhbmQgcmVjb25uZWN0XG4gIC8vIHRoZSBvYnNlcnZlciB1bnRpbCBNdXRhdGlvbk9ic2VydmVyIGdldHMgYW4gYHVub2JzZXJ2ZWAgbWV0aG9kXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2XG4gIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25PYnNlcnZlci50YWtlUmVjb3JkcygpKTtcbiAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGZvciAoY29uc3QgW2VsZW1lbnRdIG9mIG9ic2VydmVkLmVudHJpZXMoKSkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucykge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGZvcmNlVXBkYXRlKHRhcmdldCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gICAgY29tcG9uZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICAgIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcbiAgY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZSBhcyByZWFkVGFzayB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuXG5jb25zdCBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KGV2ZW50KSB7XG4gIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT09IHRoaXMub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy50cmFuc2l0aW9uRWwpIHtcbiAgICB0aGlzLm9wZW4gPyB0aGlzLm9uQmVmb3JlT3BlbigpIDogdGhpcy5vbkJlZm9yZUNsb3NlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzLnRyYW5zaXRpb25FbCkge1xuICAgIHRoaXMub3BlbiA/IHRoaXMub25PcGVuKCkgOiB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gZGV0ZXJtaW5lIGdsb2JhbGx5IHNldCB0cmFuc2l0aW9uIGR1cmF0aW9uIG9uIHRoZSBnaXZlbiBvcGVuVHJhbnNpdGlvblByb3AsIHdoaWNoIGlzIGltcG9ydGVkIGFuZCBzZXQgaW4gdGhlIEBXYXRjaChcIm9wZW5cIikuXG4gKiBVc2VkIHRvIGVtaXQgKGJlZm9yZSlvcGVuL2Nsb3NlIGV2ZW50cyBib3RoIGZvciB3aGVuIHRoZSBvcGFjaXR5IHRyYW5zaXRpb24gaXMgcHJlc2VudCBhbmQgd2hlbiB0aGVyZSBpcyBub25lICh0cmFuc2l0aW9uLWR1cmF0aW9uIGlzIHNldCB0byAwKS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbm9uT3BlbkNsb3NlQ29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCwgbm9uT3BlbkNsb3NlQ29tcG9uZW50ID0gZmFsc2UpIHtcbiAgcmVhZFRhc2soKCkgPT4ge1xuICAgIGlmIChjb21wb25lbnQudHJhbnNpdGlvbkVsKSB7XG4gICAgICBjb25zdCBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheSA9IGdldENvbXB1dGVkU3R5bGUoY29tcG9uZW50LnRyYW5zaXRpb25FbCkudHJhbnNpdGlvbi5zcGxpdChcIiBcIik7XG4gICAgICBjb25zdCBvcGVuVHJhbnNpdGlvblByb3BJbmRleCA9IGFsbFRyYW5zaXRpb25Qcm9wc0FycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gY29tcG9uZW50Lm9wZW5UcmFuc2l0aW9uUHJvcCk7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheVtvcGVuVHJhbnNpdGlvblByb3BJbmRleCArIDFdO1xuICAgICAgaWYgKHRyYW5zaXRpb25EdXJhdGlvbiA9PT0gXCIwc1wiKSB7XG4gICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgICAgICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICAgID8gY29tcG9uZW50Lm9uT3BlbigpXG4gICAgICAgICAgICA6IGNvbXBvbmVudC5vbkNsb3NlKCk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8ga2VlcCB0cmFjayBvZiB0cmFuc2l0aW9uIGxpc3RlbmVycyBvbiBzZXRUcmFuc2l0aW9uRWwgYW5kIGNvbm5lY3RlZENhbGxiYWNrIG9uIE9wZW5DbG9zZUNvbXBvbmVudCBjb21wb25lbnRzLlxuICpcbiAqIEZvciBjb21wb25lbnQgd2hpY2ggZG8gbm90IGhhdmUgb3BlbiBwcm9wLCB1c2UgYG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50YCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KTtcbiAgaWYgKGNvbXBvbmVudC50cmFuc2l0aW9uRWwpIHtcbiAgICBjb25zdCBib3VuZE9uVHJhbnNpdGlvblN0YXJ0ID0gdHJhbnNpdGlvblN0YXJ0LmJpbmQoY29tcG9uZW50KTtcbiAgICBjb25zdCBib3VuZE9uVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQuYmluZChjb21wb25lbnQpO1xuICAgIGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5zZXQoY29tcG9uZW50LCBbXG4gICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLFxuICAgICAgYm91bmRPblRyYW5zaXRpb25TdGFydCxcbiAgICAgIGJvdW5kT25UcmFuc2l0aW9uRW5kXG4gICAgXSk7XG4gICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIGJvdW5kT25UcmFuc2l0aW9uU3RhcnQpO1xuICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgYm91bmRPblRyYW5zaXRpb25FbmQpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gdHJhbnNpdGlvbiBsaXN0ZW5lcnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2sgb24gT3BlbkNsb3NlQ29tcG9uZW50IGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5oYXMoY29tcG9uZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBbdHJhbnNpdGlvbkVsLCBzdGFydCwgZW5kXSA9IGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5nZXQoY29tcG9uZW50KTtcbiAgdHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgc3RhcnQpO1xuICB0cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKTtcbiAgY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLmRlbGV0ZShjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQgYXMgZCwgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgYXMgbyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9