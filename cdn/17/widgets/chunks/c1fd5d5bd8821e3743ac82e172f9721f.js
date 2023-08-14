"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_dom-1fb94ff6_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ containsCrossShadowBoundary),
/* harmony export */   "b": () => (/* binding */ getElementDir),
/* harmony export */   "c": () => (/* binding */ closestElementCrossShadowBoundary),
/* harmony export */   "d": () => (/* binding */ slotChangeHasAssignedElement),
/* harmony export */   "e": () => (/* binding */ setRequestedIcon),
/* harmony export */   "f": () => (/* binding */ focusElement),
/* harmony export */   "g": () => (/* binding */ getSlotted),
/* harmony export */   "h": () => (/* binding */ getModeName),
/* harmony export */   "i": () => (/* binding */ isPrimaryPointerButton),
/* harmony export */   "j": () => (/* binding */ focusElementInGroup),
/* harmony export */   "k": () => (/* binding */ tabbable),
/* harmony export */   "l": () => (/* binding */ focusable),
/* harmony export */   "m": () => (/* binding */ isTabbable),
/* harmony export */   "n": () => (/* binding */ isFocusable),
/* harmony export */   "o": () => (/* binding */ tabbableOptions),
/* harmony export */   "p": () => (/* binding */ focusFirstTabbable),
/* harmony export */   "q": () => (/* binding */ queryElementRoots),
/* harmony export */   "r": () => (/* binding */ ensureId),
/* harmony export */   "s": () => (/* binding */ slotChangeGetAssignedElements),
/* harmony export */   "t": () => (/* binding */ toAriaBoolean),
/* harmony export */   "u": () => (/* binding */ getShadowRootNode),
/* harmony export */   "v": () => (/* binding */ getElementProp),
/* harmony export */   "w": () => (/* binding */ intersects),
/* harmony export */   "x": () => (/* binding */ nodeListToArray),
/* harmony export */   "y": () => (/* binding */ getRootNode),
/* harmony export */   "z": () => (/* binding */ filterDirectChildren)
/* harmony export */ });
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



/*!
* tabbable 6.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode$1 = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var getTabindex = function getTabindex(node, isScope) {
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    //
    // isScope is positive for custom element with shadow root or slot that by default
    // have tabIndex -1, but need to be sorted by document order in order for their
    // content to be inserted in the correct position
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && isNaN(parseInt(node.getAttribute('tabindex'), 10))) {
      return 0;
    }
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode$1(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode$1(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode$1(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode$1(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

/**
 * The default `focus-trap/tabbable` options.
 *
 * See https://github.com/focus-trap/tabbable#tabbable
 */
const tabbableOptions = {
  getShadowRoot: true
};
/**
 * This helper will guarantee an ID on the provided element.
 *
 * If it already has an ID, it will be preserved, otherwise a unique one will be generated and assigned.
 *
 * @param {Element} el An element.
 * @returns {string} The element's ID.
 */
function ensureId(el) {
  if (!el) {
    return "";
  }
  return (el.id = el.id || `${el.tagName.toLowerCase()}-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_0__.g)()}`);
}
/**
 * This helper returns an array from a NodeList.
 *
 * @param {NodeList} nodeList A NodeList.
 * @returns {Element[]} An array of elements.
 */
function nodeListToArray(nodeList) {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
/**
 * This helper returns the Calcite "mode" of an element.
 *
 * @param {HTMLElement} el An element.
 * @returns {"light"|"dark"} The Calcite mode.
 */
function getModeName(el) {
  const closestElWithMode = closestElementCrossShadowBoundary(el, `.${_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_1__.C.darkMode}, .${_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_1__.C.lightMode}`);
  return closestElWithMode?.classList.contains("calcite-mode-dark") ? "dark" : "light";
}
/**
 * This helper returns the direction of a HTML element.
 *
 * @param {HTMLElement} el An element.
 * @returns {Direction} The direction.
 */
function getElementDir(el) {
  const prop = "dir";
  const selector = `[${prop}]`;
  const closest = closestElementCrossShadowBoundary(el, selector);
  return closest ? closest.getAttribute(prop) : "ltr";
}
/**
 * This helper returns the value of an attribute on an element.
 *
 * @param {HTMLElement} el An element.
 * @param {string} attribute An attribute name.
 * @param {any} fallbackValue A fallback value.
 * @returns {any} The value.
 * @deprecated
 */
function getElementProp(el, attribute, fallbackValue) {
  const selector = `[${attribute}]`;
  const closest = el.closest(selector);
  return closest ? closest.getAttribute(attribute) : fallbackValue;
}
/**
 * This helper returns the rootNode of an element.
 *
 * @param {Element} el An element.
 * @returns {Document|ShadowRoot} The element's root node.
 */
function getRootNode(el) {
  return el.getRootNode();
}
/**
 * This helper returns the node's shadowRoot root node if it exists.
 *
 * @param {Element} el The element.
 * @returns {ShadowRoot|null} The element's root node ShadowRoot.
 */
function getShadowRootNode(el) {
  const rootNode = getRootNode(el);
  return "host" in rootNode ? rootNode : null;
}
/**
 * This helper returns the host of a ShadowRoot.
 *
 * @param {Document | ShadowRoot} root A root element.
 * @returns {Element | null} The host element.
 */
function getHost(root) {
  return root.host || null;
}
/**
 * This helper queries an element's rootNode and any ancestor rootNodes.
 *
 * If both an 'id' and 'selector' are supplied, 'id' will take precedence over 'selector'.
 *
 * @param {Element} element An element.
 * @param root0
 * @param root0.selector
 * @param root0.id
 * @returns {Element} An element.
 */
function queryElementRoots(element, { selector, id }) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  // Based on: https://stackoverflow.com/q/54520554/194216
  function queryFrom(el) {
    if (!el) {
      return null;
    }
    if (el.assignedSlot) {
      el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const found = id
      ? "getElementById" in rootNode
        ? /*
          Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
          https://github.com/Esri/calcite-components/pull/4280
           */
          rootNode.getElementById(id)
        : null
      : selector
        ? rootNode.querySelector(selector)
        : null;
    const host = getHost(rootNode);
    return found ? found : host ? queryFrom(host) : null;
  }
  return queryFrom(element);
}
/**
 * This helper returns the closest element matching the selector by crossing he shadow boundary if necessary.
 *
 * @param {Element} element The starting element.
 * @param {string} selector The selector.
 * @returns {Element} The targeted element.
 */
function closestElementCrossShadowBoundary(element, selector) {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom(el) {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }
  return closestFrom(element);
}
/**
 * This utility helps invoke a callback as it traverses a node and its ancestors until reaching the root document.
 *
 * Returning early or undefined in `onVisit` will continue traversing up the DOM tree. Otherwise, traversal will halt with the returned value as the result of the function
 *
 * @param {Element} element An element.
 * @param {(node: Node) => Element} onVisit The callback.
 * @returns {Element} The result.
 */
function walkUpAncestry(element, onVisit) {
  return visit(element, onVisit);
}
function visit(node, onVisit) {
  if (!node) {
    return;
  }
  const result = onVisit(node);
  if (result !== undefined) {
    return result;
  }
  const { parentNode } = node;
  return visit(parentNode instanceof ShadowRoot ? parentNode.host : parentNode, onVisit);
}
/**
 * This helper returns true when an element has the descendant in question.
 *
 * @param {Element} element The starting element.
 * @param {Element} maybeDescendant The descendant.
 * @returns {boolean} The result.
 */
function containsCrossShadowBoundary(element, maybeDescendant) {
  return !!walkUpAncestry(maybeDescendant, (node) => (node === element ? true : undefined));
}
/**
 * This helper returns true when an element has a setFocus method.
 *
 * @param {Element} el An element.
 * @returns {boolean} The result.
 */
function isCalciteFocusable(el) {
  return typeof el?.setFocus === "function";
}
/**
 * This helper focuses an element using the `setFocus` method if available and falls back to using the `focus` method if not available.
 *
 * @param {Element} el An element.
 */
async function focusElement(el) {
  if (!el) {
    return;
  }
  return isCalciteFocusable(el) ? el.setFocus() : el.focus();
}
/**
 * Helper to focus the first tabbable element.
 *
 * @param {HTMLElement} element The html element containing tabbable elements.
 */
function focusFirstTabbable(element) {
  if (!element) {
    return;
  }
  (tabbable(element, tabbableOptions)[0] || element).focus();
}
const defaultSlotSelector = ":not([slot])";
function getSlotted(element, slotName, options) {
  if (slotName && !Array.isArray(slotName) && typeof slotName !== "string") {
    options = slotName;
    slotName = null;
  }
  const slotSelector = slotName
    ? Array.isArray(slotName)
      ? slotName.map((name) => `[slot="${name}"]`).join(",")
      : `[slot="${slotName}"]`
    : defaultSlotSelector;
  if (options?.all) {
    return queryMultiple(element, slotSelector, options);
  }
  return querySingle(element, slotSelector, options);
}
function getDirectChildren(el, selector) {
  return el ? Array.from(el.children || []).filter((child) => child?.matches(selector)) : [];
}
function queryMultiple(element, slotSelector, options) {
  let matches = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)
    : Array.from(element.querySelectorAll(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);
  matches = options?.matches ? matches.filter((el) => el?.matches(options.matches)) : matches;
  const selector = options?.selector;
  return selector
    ? matches
      .map((item) => Array.from(item.querySelectorAll(selector)))
      .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
      .filter((match) => !!match)
    : matches;
}
function querySingle(element, slotSelector, options) {
  let match = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)[0] || null
    : element.querySelector(slotSelector);
  match = options && options.direct === false ? match : match?.parentElement === element ? match : null;
  match = options?.matches ? (match?.matches(options.matches) ? match : null) : match;
  const selector = options?.selector;
  return selector ? match?.querySelector(selector) : match;
}
/**
 * Filters direct children.
 *
 * @param {Element} el An element.
 * @param {string} selector The selector.
 * @returns {Element[]} An array of elements.
 */
function filterDirectChildren(el, selector) {
  return Array.from(el.children).filter((child) => child.matches(selector));
}
/**
 * Set a default icon from a defined set or allow an override with an icon name string
 *
 * @param {Record<string, string>} iconObject The icon object.
 * @param {string | boolean} iconValue The icon value.
 * @param {string} matchedValue The matched value.
 * @returns {string|undefined} The resulting icon value.
 */
function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  }
  else if (iconValue === "") {
    return iconObject[matchedValue];
  }
}
/**
 * This helper returns true when two rectangles intersect.
 *
 * @param {DOMRect} rect1 The first rectangle.
 * @param {DOMRect} rect2 The second rectangle.
 * @returns {boolean} The result.
 */
function intersects(rect1, rect2) {
  return !(rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top);
}
/**
 * This helper makes sure that boolean aria attributes are properly converted to a string.
 *
 * It should only be used for aria attributes that require a string value of "true" or "false".
 *
 * @param {boolean} value The value.
 * @returns {string} The string conversion of a boolean value ("true" | "false").
 */
function toAriaBoolean(value) {
  return Boolean(value).toString();
}
/**
 * This helper returns `true` if the target `slot` element from the `onSlotchange` event has an assigned element.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any assigned elements.
 */
function slotChangeHasAssignedElement(event) {
  return !!slotChangeGetAssignedElements(event).length;
}
/**
 * This helper returns the assigned elements on a `slot` element from the `onSlotchange` event.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotElements = slotChangeGetAssignedElements(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any assigned elements.
 */
function slotChangeGetAssignedElements(event) {
  return event.target.assignedElements({
    flatten: true
  });
}
/**
 * This helper returns true if the pointer event fired from the primary button of the device.
 *
 * See https://www.w3.org/TR/pointerevents/#the-button-property.
 *
 * @param {PointerEvent} event The pointer event.
 * @returns {boolean} The value.
 */
function isPrimaryPointerButton(event) {
  return !!(event.isPrimary && event.button === 0);
}
/**
 * This helper sets focus on and returns a destination element from within a group of provided elements.
 *
 * @param {Element[]} elements An array of elements.
 * @param {Element} currentElement The current element.
 * @param {FocusElementInGroupDestination} destination The target destination element to focus.
 * @param {boolean} cycle Should navigation cycle through elements or stop at extent - defaults to true.
 * @returns {Element} The focused element
 */
const focusElementInGroup = (elements, currentElement, destination, cycle = true) => {
  const currentIndex = elements.indexOf(currentElement);
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === elements.length - 1;
  if (cycle) {
    destination =
      destination === "previous" && isFirstItem ? "last" : destination === "next" && isLastItem ? "first" : destination;
  }
  let focusTarget;
  if (destination === "previous") {
    focusTarget = elements[currentIndex - 1] || elements[cycle ? elements.length - 1 : currentIndex];
  }
  else if (destination === "next") {
    focusTarget = elements[currentIndex + 1] || elements[cycle ? 0 : currentIndex];
  }
  else if (destination === "last") {
    focusTarget = elements[elements.length - 1];
  }
  else {
    focusTarget = elements[0];
  }
  focusElement(focusTarget);
  return focusTarget;
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ guid)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function gen(counts) {
  return counts
    .map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  })
    .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS_UTILITY),
/* harmony export */   "a": () => (/* binding */ autoMode),
/* harmony export */   "d": () => (/* binding */ darkMode)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const autoMode = "calcite-mode-auto";
const darkMode = "calcite-mode-dark";
const lightMode = "calcite-mode-light";
const CSS_UTILITY = {
  autoMode,
  darkMode,
  lightMode,
  rtl: "calcite--rtl",
  calciteAnimate: "calcite-animate",
  calciteAnimateIn: "calcite-animate__in",
  calciteAnimateInUp: "calcite-animate__in-up",
  calciteAnimateInDown: "calcite-animate__in-down",
  calciteAnimateInRight: "calcite-animate__in-right",
  calciteAnimateInLeft: "calcite-animate__in-left",
  calciteAnimateInScale: "calcite-animate__in-scale"
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzFmZDVkNWJkODgyMWUzNzQzYWM4MmUxNzJmOTcyMWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0M7QUFDWTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FOztBQUVwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyw0QkFBNEI7QUFDdkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLG9CQUFvQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxXQUFXO0FBQ3pCOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsdUJBQXVCLGlEQUFpRDtBQUN0RjtB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dC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vZG9tLTFmYjk0ZmY2LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2d1aWQtNzEzNjk3NGIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vcmVzb3VyY2VzLTM0MmUxMmQxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcblxuLyohXG4qIHRhYmJhYmxlIDYuMS4yXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cbi8vIE5PVEU6IHNlcGFyYXRlIGA6bm90KClgIHNlbGVjdG9ycyBoYXMgYnJvYWRlciBicm93c2VyIHN1cHBvcnQgdGhhbiB0aGUgbmV3ZXJcbi8vICBgOm5vdChbaW5lcnRdLCBbaW5lcnRdICopYCAoRmViIDIwMjMpXG4vLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBzdXBwb3J0IGA6bm90KFtpbmVydF0gKilgIGFzIGEgc2VsZWN0b3I7IHVzaW5nIGl0IGNhdXNlc1xuLy8gIHRoZSBlbnRpcmUgcXVlcnkgdG8gZmFpbCwgcmVzdWx0aW5nIGluIG5vIG5vZGVzIGZvdW5kLCB3aGljaCB3aWxsIGJyZWFrIGEgbG90XG4vLyAgb2YgdGhpbmdzLi4uIHNvIHdlIGhhdmUgdG8gcmVseSBvbiBKUyB0byBpZGVudGlmeSBub2RlcyBpbnNpZGUgYW4gaW5lcnQgY29udGFpbmVyXG52YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gWydpbnB1dDpub3QoW2luZXJ0XSknLCAnc2VsZWN0Om5vdChbaW5lcnRdKScsICd0ZXh0YXJlYTpub3QoW2luZXJ0XSknLCAnYVtocmVmXTpub3QoW2luZXJ0XSknLCAnYnV0dG9uOm5vdChbaW5lcnRdKScsICdbdGFiaW5kZXhdOm5vdChzbG90KTpub3QoW2luZXJ0XSknLCAnYXVkaW9bY29udHJvbHNdOm5vdChbaW5lcnRdKScsICd2aWRlb1tjb250cm9sc106bm90KFtpbmVydF0pJywgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pOm5vdChbaW5lcnRdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZTpub3QoW2luZXJ0XSknLCAnZGV0YWlsczpub3QoW2luZXJ0XSknXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG52YXIgTm9FbGVtZW50ID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnO1xudmFyIG1hdGNoZXMgPSBOb0VsZW1lbnQgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xudmFyIGdldFJvb3ROb2RlJDEgPSAhTm9FbGVtZW50ICYmIEVsZW1lbnQucHJvdG90eXBlLmdldFJvb3ROb2RlID8gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JGdldFJvb3ROb2RlO1xuICByZXR1cm4gZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2VsZW1lbnQkZ2V0Um9vdE5vZGUgPSBlbGVtZW50LmdldFJvb3ROb2RlKSA9PT0gbnVsbCB8fCBfZWxlbWVudCRnZXRSb290Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VsZW1lbnQkZ2V0Um9vdE5vZGUuY2FsbChlbGVtZW50KTtcbn0gOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSBub2RlIGlzIGluZXJ0IG9yIGluIGFuIGluZXJ0IGFuY2VzdG9yLlxuICogQHBhcmFtIHtFbGVtZW50fSBbbm9kZV1cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2xvb2tVcF0gSWYgdHJ1ZSBhbmQgYG5vZGVgIGlzIG5vdCBpbmVydCwgbG9va3MgdXAgYXQgYW5jZXN0b3JzIHRvXG4gKiAgc2VlIGlmIGFueSBvZiB0aGVtIGFyZSBpbmVydC4gSWYgZmFsc2UsIG9ubHkgYG5vZGVgIGl0c2VsZiBpcyBjb25zaWRlcmVkLlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgaW5lcnQgaXRzZWxmIG9yIGJ5IHdheSBvZiBiZWluZyBpbiBhbiBpbmVydCBhbmNlc3Rvci5cbiAqICBGYWxzZSBpZiBgbm9kZWAgaXMgZmFsc3kuXG4gKi9cbnZhciBpc0luZXJ0ID0gZnVuY3Rpb24gaXNJbmVydChub2RlLCBsb29rVXApIHtcbiAgdmFyIF9ub2RlJGdldEF0dHJpYnV0ZTtcbiAgaWYgKGxvb2tVcCA9PT0gdm9pZCAwKSB7XG4gICAgbG9va1VwID0gdHJ1ZTtcbiAgfVxuICAvLyBDQVJFRlVMOiBKU0RvbSBkb2VzIG5vdCBzdXBwb3J0IGluZXJ0IGF0IGFsbCwgc28gd2UgY2FuJ3QgdXNlIHRoZSBgSFRNTEVsZW1lbnQuaW5lcnRgXG4gIC8vICBKUyBBUEkgcHJvcGVydHk7IHdlIGhhdmUgdG8gY2hlY2sgdGhlIGF0dHJpYnV0ZSwgd2hpY2ggY2FuIGVpdGhlciBiZSBlbXB0eSBvciAndHJ1ZSc7XG4gIC8vICBpZiBpdCdzIGBudWxsYCAobm90IHNwZWNpZmllZCkgb3IgJ2ZhbHNlJywgaXQncyBhbiBhY3RpdmUgZWxlbWVudFxuICB2YXIgaW5lcnRBdHQgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfbm9kZSRnZXRBdHRyaWJ1dGUgPSBub2RlLmdldEF0dHJpYnV0ZSkgPT09IG51bGwgfHwgX25vZGUkZ2V0QXR0cmlidXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRnZXRBdHRyaWJ1dGUuY2FsbChub2RlLCAnaW5lcnQnKTtcbiAgdmFyIGluZXJ0ID0gaW5lcnRBdHQgPT09ICcnIHx8IGluZXJ0QXR0ID09PSAndHJ1ZSc7XG5cbiAgLy8gTk9URTogdGhpcyBjb3VsZCBhbHNvIGJlIGhhbmRsZWQgd2l0aCBgbm9kZS5tYXRjaGVzKCdbaW5lcnRdLCA6aXMoW2luZXJ0XSAqKScpYFxuICAvLyAgaWYgaXQgd2VyZW4ndCBmb3IgYG1hdGNoZXMoKWAgbm90IGJlaW5nIGEgZnVuY3Rpb24gb24gc2hhZG93IHJvb3RzOyB0aGUgZm9sbG93aW5nXG4gIC8vICBjb2RlIHdvcmtzIGZvciBhbnkga2luZCBvZiBub2RlXG4gIC8vIENBUkVGVUw6IEpTRG9tIGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IGNlcnRhaW4gc2VsZWN0b3JzIGxpa2UgYDpub3QoW2luZXJ0XSAqKWBcbiAgLy8gIHNvIGl0IGxpa2VseSB3b3VsZCBub3Qgc3VwcG9ydCBgOmlzKFtpbmVydF0gKilgIGVpdGhlci4uLlxuICB2YXIgcmVzdWx0ID0gaW5lcnQgfHwgbG9va1VwICYmIG5vZGUgJiYgaXNJbmVydChub2RlLnBhcmVudE5vZGUpOyAvLyByZWN1cnNpdmVcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSdzIGNvbnRlbnQgaXMgZWRpdGFibGUuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtub2RlXVxuICogQHJldHVybnMgVHJ1ZSBpZiBpdCdzIGNvbnRlbnQtZWRpdGFibGU7IGZhbHNlIGlmIGl0J3Mgbm90IG9yIGBub2RlYCBpcyBmYWxzeS5cbiAqL1xudmFyIGlzQ29udGVudEVkaXRhYmxlID0gZnVuY3Rpb24gaXNDb250ZW50RWRpdGFibGUobm9kZSkge1xuICB2YXIgX25vZGUkZ2V0QXR0cmlidXRlMjtcbiAgLy8gQ0FSRUZVTDogSlNEb20gZG9lcyBub3Qgc3VwcG9ydCB0aGUgYEhUTUxFbGVtZW50LmlzQ29udGVudEVkaXRhYmxlYCBBUEkgc28gd2UgaGF2ZVxuICAvLyAgdG8gdXNlIHRoZSBhdHRyaWJ1dGUgZGlyZWN0bHkgdG8gY2hlY2sgZm9yIHRoaXMsIHdoaWNoIGNhbiBlaXRoZXIgYmUgZW1wdHkgb3IgJ3RydWUnO1xuICAvLyAgaWYgaXQncyBgbnVsbGAgKG5vdCBzcGVjaWZpZWQpIG9yICdmYWxzZScsIGl0J3MgYSBub24tZWRpdGFibGUgZWxlbWVudFxuICB2YXIgYXR0VmFsdWUgPSBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfbm9kZSRnZXRBdHRyaWJ1dGUyID0gbm9kZS5nZXRBdHRyaWJ1dGUpID09PSBudWxsIHx8IF9ub2RlJGdldEF0dHJpYnV0ZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlJGdldEF0dHJpYnV0ZTIuY2FsbChub2RlLCAnY29udGVudGVkaXRhYmxlJyk7XG4gIHJldHVybiBhdHRWYWx1ZSA9PT0gJycgfHwgYXR0VmFsdWUgPT09ICd0cnVlJztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBjb250YWluZXIgdG8gY2hlY2sgaW5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZUNvbnRhaW5lciBhZGQgY29udGFpbmVyIHRvIGNoZWNrXG4gKiBAcGFyYW0geyhub2RlOiBFbGVtZW50KSA9PiBib29sZWFufSBmaWx0ZXIgZmlsdGVyIGNhbmRpZGF0ZXNcbiAqIEByZXR1cm5zIHtFbGVtZW50W119XG4gKi9cbnZhciBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhlbCwgaW5jbHVkZUNvbnRhaW5lciwgZmlsdGVyKSB7XG4gIC8vIGV2ZW4gaWYgYGluY2x1ZGVDb250YWluZXI9ZmFsc2VgLCB3ZSBzdGlsbCBoYXZlIHRvIGNoZWNrIGl0IGZvciBpbmVydG5lc3MgYmVjYXVzZVxuICAvLyAgaWYgaXQncyBpbmVydCwgYWxsIGl0cyBjaGlsZHJlbiBhcmUgaW5lcnRcbiAgaWYgKGlzSW5lcnQoZWwpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpKTtcbiAgaWYgKGluY2x1ZGVDb250YWluZXIgJiYgbWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICB9XG4gIGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcihmaWx0ZXIpO1xuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIEdldFNoYWRvd1Jvb3RcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCB0byBjaGVjayBmb3Igc2hhZG93IHJvb3RcbiAqIEByZXR1cm5zIHtTaGFkb3dSb290fGJvb2xlYW59IFNoYWRvd1Jvb3QgaWYgYXZhaWxhYmxlIG9yIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBhIHNoYWRvd1Jvb3QgaXMgYXR0YWNoZWQgYnV0IG5vdCBhdmFpbGFibGUuXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgU2hhZG93Um9vdEZpbHRlclxuICogQHBhcmFtIHtFbGVtZW50fSBzaGFkb3dIb3N0Tm9kZSB0aGUgZWxlbWVudCB3aGljaCBjb250YWlucyBzaGFkb3cgY29udGVudFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYSBzaGFkb3cgcm9vdCBjb3VsZCBwb3RlbnRpYWxseSBjb250YWluIHZhbGlkIGNhbmRpZGF0ZXMuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDYW5kaWRhdGVTY29wZVxuICogQHByb3BlcnR5IHtFbGVtZW50fSBzY29wZVBhcmVudCBjb250YWlucyBpbm5lciBjYW5kaWRhdGVzXG4gKiBAcHJvcGVydHkge0VsZW1lbnRbXX0gY2FuZGlkYXRlcyBsaXN0IG9mIGNhbmRpZGF0ZXMgZm91bmQgaW4gdGhlIHNjb3BlIHBhcmVudFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSXRlcmF0aXZlT3B0aW9uc1xuICogQHByb3BlcnR5IHtHZXRTaGFkb3dSb290fGJvb2xlYW59IGdldFNoYWRvd1Jvb3QgdHJ1ZSBpZiBzaGFkb3cgc3VwcG9ydCBpcyBlbmFibGVkOyBmYWxzeSBpZiBub3Q7XG4gKiAgaWYgYSBmdW5jdGlvbiwgaW1wbGllcyBzaGFkb3cgc3VwcG9ydCBpcyBlbmFibGVkIGFuZCBlaXRoZXIgcmV0dXJucyB0aGUgc2hhZG93IHJvb3Qgb2YgYW4gZWxlbWVudFxuICogIG9yIGEgYm9vbGVhbiBzdGF0aW5nIGlmIGl0IGhhcyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgcm9vdFxuICogQHByb3BlcnR5IHsobm9kZTogRWxlbWVudCkgPT4gYm9vbGVhbn0gZmlsdGVyIGZpbHRlciBjYW5kaWRhdGVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGZsYXR0ZW4gaWYgdHJ1ZSB0aGVuIHJlc3VsdCB3aWxsIGZsYXR0ZW4gYW55IENhbmRpZGF0ZVNjb3BlIGludG8gdGhlIHJldHVybmVkIGxpc3RcbiAqIEBwcm9wZXJ0eSB7U2hhZG93Um9vdEZpbHRlcn0gc2hhZG93Um9vdEZpbHRlciBmaWx0ZXIgc2hhZG93IHJvb3RzO1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50W119IGVsZW1lbnRzIGxpc3Qgb2YgZWxlbWVudCBjb250YWluZXJzIHRvIG1hdGNoIGNhbmRpZGF0ZXMgZnJvbVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlQ29udGFpbmVyIGFkZCBjb250YWluZXIgbGlzdCB0byBjaGVja1xuICogQHBhcmFtIHtJdGVyYXRpdmVPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7QXJyYXkuPEVsZW1lbnR8Q2FuZGlkYXRlU2NvcGU+fVxuICovXG52YXIgZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5ID0gZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KGVsZW1lbnRzLCBpbmNsdWRlQ29udGFpbmVyLCBvcHRpb25zKSB7XG4gIHZhciBjYW5kaWRhdGVzID0gW107XG4gIHZhciBlbGVtZW50c1RvQ2hlY2sgPSBBcnJheS5mcm9tKGVsZW1lbnRzKTtcbiAgd2hpbGUgKGVsZW1lbnRzVG9DaGVjay5sZW5ndGgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzVG9DaGVjay5zaGlmdCgpO1xuICAgIGlmIChpc0luZXJ0KGVsZW1lbnQsIGZhbHNlKSkge1xuICAgICAgLy8gbm8gbmVlZCB0byBsb29rIHVwIHNpbmNlIHdlJ3JlIGRyaWxsaW5nIGRvd25cbiAgICAgIC8vIGFueXRoaW5nIGluc2lkZSB0aGlzIGNvbnRhaW5lciB3aWxsIGFsc28gYmUgaW5lcnRcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnU0xPVCcpIHtcbiAgICAgIC8vIGFkZCBzaGFkb3cgZG9tIHNsb3Qgc2NvcGUgKHNsb3QgaXRzZWxmIGNhbm5vdCBiZSBmb2N1c2FibGUpXG4gICAgICB2YXIgYXNzaWduZWQgPSBlbGVtZW50LmFzc2lnbmVkRWxlbWVudHMoKTtcbiAgICAgIHZhciBjb250ZW50ID0gYXNzaWduZWQubGVuZ3RoID8gYXNzaWduZWQgOiBlbGVtZW50LmNoaWxkcmVuO1xuICAgICAgdmFyIG5lc3RlZENhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoY29udGVudCwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5mbGF0dGVuKSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBuZXN0ZWRDYW5kaWRhdGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgc2NvcGVQYXJlbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgY2FuZGlkYXRlczogbmVzdGVkQ2FuZGlkYXRlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgY2FuZGlkYXRlIGVsZW1lbnRcbiAgICAgIHZhciB2YWxpZENhbmRpZGF0ZSA9IG1hdGNoZXMuY2FsbChlbGVtZW50LCBjYW5kaWRhdGVTZWxlY3Rvcik7XG4gICAgICBpZiAodmFsaWRDYW5kaWRhdGUgJiYgb3B0aW9ucy5maWx0ZXIoZWxlbWVudCkgJiYgKGluY2x1ZGVDb250YWluZXIgfHwgIWVsZW1lbnRzLmluY2x1ZGVzKGVsZW1lbnQpKSkge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGl0ZXJhdGUgb3ZlciBzaGFkb3cgY29udGVudCBpZiBwb3NzaWJsZVxuICAgICAgdmFyIHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3QgfHxcbiAgICAgIC8vIGNoZWNrIGZvciBhbiB1bmRpc2Nsb3NlZCBzaGFkb3dcbiAgICAgIHR5cGVvZiBvcHRpb25zLmdldFNoYWRvd1Jvb3QgPT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucy5nZXRTaGFkb3dSb290KGVsZW1lbnQpO1xuXG4gICAgICAvLyBubyBpbmVydCBsb29rIHVwIGJlY2F1c2Ugd2UncmUgYWxyZWFkeSBkcmlsbGluZyBkb3duIGFuZCBjaGVja2luZyBmb3IgaW5lcnRuZXNzXG4gICAgICAvLyAgb24gdGhlIHdheSBkb3duLCBzbyBhbGwgY29udGFpbmVycyB0byB0aGlzIHJvb3Qgbm9kZSBzaG91bGQgaGF2ZSBhbHJlYWR5IGJlZW5cbiAgICAgIC8vICB2ZXR0ZWQgYXMgbm9uLWluZXJ0XG4gICAgICB2YXIgdmFsaWRTaGFkb3dSb290ID0gIWlzSW5lcnQoc2hhZG93Um9vdCwgZmFsc2UpICYmICghb3B0aW9ucy5zaGFkb3dSb290RmlsdGVyIHx8IG9wdGlvbnMuc2hhZG93Um9vdEZpbHRlcihlbGVtZW50KSk7XG4gICAgICBpZiAoc2hhZG93Um9vdCAmJiB2YWxpZFNoYWRvd1Jvb3QpIHtcbiAgICAgICAgLy8gYWRkIHNoYWRvdyBkb20gc2NvcGUgSUlGIGEgc2hhZG93IHJvb3Qgbm9kZSB3YXMgZ2l2ZW47IG90aGVyd2lzZSwgYW4gdW5kaXNjbG9zZWRcbiAgICAgICAgLy8gIHNoYWRvdyBleGlzdHMsIHNvIGxvb2sgYXQgbGlnaHQgZG9tIGNoaWxkcmVuIGFzIGZhbGxiYWNrIEJVVCBjcmVhdGUgYSBzY29wZSBmb3IgYW55XG4gICAgICAgIC8vICBjaGlsZCBjYW5kaWRhdGVzIGZvdW5kIGJlY2F1c2UgdGhleSdyZSBsaWtlbHkgc2xvdHRlZCBlbGVtZW50cyAoZWxlbWVudHMgdGhhdCBhcmVcbiAgICAgICAgLy8gIGNoaWxkcmVuIG9mIHRoZSB3ZWIgY29tcG9uZW50IGVsZW1lbnQgKHdoaWNoIGhhcyB0aGUgc2hhZG93KSwgaW4gdGhlIGxpZ2h0IGRvbSwgYnV0XG4gICAgICAgIC8vICBzbG90dGVkIHNvbWV3aGVyZSBfaW5zaWRlXyB0aGUgdW5kaXNjbG9zZWQgc2hhZG93KSAtLSB0aGUgc2NvcGUgaXMgY3JlYXRlZCBiZWxvdyxcbiAgICAgICAgLy8gIF9hZnRlcl8gd2UgcmV0dXJuIGZyb20gdGhpcyByZWN1cnNpdmUgY2FsbFxuICAgICAgICB2YXIgX25lc3RlZENhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzSXRlcmF0aXZlbHkoc2hhZG93Um9vdCA9PT0gdHJ1ZSA/IGVsZW1lbnQuY2hpbGRyZW4gOiBzaGFkb3dSb290LmNoaWxkcmVuLCB0cnVlLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZmxhdHRlbikge1xuICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaC5hcHBseShjYW5kaWRhdGVzLCBfbmVzdGVkQ2FuZGlkYXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3BlUGFyZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgY2FuZGlkYXRlczogX25lc3RlZENhbmRpZGF0ZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlcmUncyBub3Qgc2hhZG93IHNvIGp1c3QgZGlnIGludG8gdGhlIGVsZW1lbnQncyAobGlnaHQgZG9tKSBjaGlsZHJlblxuICAgICAgICAvLyAgX193aXRob3V0X18gZ2l2aW5nIHRoZSBlbGVtZW50IHNwZWNpYWwgc2NvcGUgdHJlYXRtZW50XG4gICAgICAgIGVsZW1lbnRzVG9DaGVjay51bnNoaWZ0LmFwcGx5KGVsZW1lbnRzVG9DaGVjaywgZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcbnZhciBnZXRUYWJpbmRleCA9IGZ1bmN0aW9uIGdldFRhYmluZGV4KG5vZGUsIGlzU2NvcGUpIHtcbiAgaWYgKG5vZGUudGFiSW5kZXggPCAwKSB7XG4gICAgLy8gaW4gQ2hyb21lLCA8ZGV0YWlscy8+LCA8YXVkaW8gY29udHJvbHMvPiBhbmQgPHZpZGVvIGNvbnRyb2xzLz4gZWxlbWVudHMgZ2V0IGEgZGVmYXVsdFxuICAgIC8vIGB0YWJJbmRleGAgb2YgLTEgd2hlbiB0aGUgJ3RhYmluZGV4JyBhdHRyaWJ1dGUgaXNuJ3Qgc3BlY2lmaWVkIGluIHRoZSBET00sXG4gICAgLy8geWV0IHRoZXkgYXJlIHN0aWxsIHBhcnQgb2YgdGhlIHJlZ3VsYXIgdGFiIG9yZGVyOyBpbiBGRiwgdGhleSBnZXQgYSBkZWZhdWx0XG4gICAgLy8gYHRhYkluZGV4YCBvZiAwOyBzaW5jZSBDaHJvbWUgc3RpbGwgcHV0cyB0aG9zZSBlbGVtZW50cyBpbiB0aGUgcmVndWxhciB0YWJcbiAgICAvLyBvcmRlciwgY29uc2lkZXIgdGhlaXIgdGFiIGluZGV4IHRvIGJlIDAuXG4gICAgLy8gQWxzbyBicm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gICAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG4gICAgLy9cbiAgICAvLyBpc1Njb3BlIGlzIHBvc2l0aXZlIGZvciBjdXN0b20gZWxlbWVudCB3aXRoIHNoYWRvdyByb290IG9yIHNsb3QgdGhhdCBieSBkZWZhdWx0XG4gICAgLy8gaGF2ZSB0YWJJbmRleCAtMSwgYnV0IG5lZWQgdG8gYmUgc29ydGVkIGJ5IGRvY3VtZW50IG9yZGVyIGluIG9yZGVyIGZvciB0aGVpclxuICAgIC8vIGNvbnRlbnQgdG8gYmUgaW5zZXJ0ZWQgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb25cbiAgICBpZiAoKGlzU2NvcGUgfHwgL14oQVVESU98VklERU98REVUQUlMUykkLy50ZXN0KG5vZGUudGFnTmFtZSkgfHwgaXNDb250ZW50RWRpdGFibGUobm9kZSkpICYmIGlzTmFOKHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCkpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59O1xudmFyIHNvcnRPcmRlcmVkVGFiYmFibGVzID0gZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcbnZhciBpc0lucHV0ID0gZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59O1xudmFyIGlzSGlkZGVuSW5wdXQgPSBmdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn07XG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB7XG4gIHZhciByID0gbm9kZS50YWdOYW1lID09PSAnREVUQUlMUycgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLnRhZ05hbWUgPT09ICdTVU1NQVJZJztcbiAgfSk7XG4gIHJldHVybiByO1xufTtcbnZhciBnZXRDaGVja2VkUmFkaW8gPSBmdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMsIGZvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkICYmIG5vZGVzW2ldLmZvcm0gPT09IGZvcm0pIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgaXNUYWJiYWJsZVJhZGlvID0gZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBnZXRSb290Tm9kZSQxKG5vZGUpO1xuICB2YXIgcXVlcnlSYWRpb3MgPSBmdW5jdGlvbiBxdWVyeVJhZGlvcyhuYW1lKSB7XG4gICAgcmV0dXJuIHJhZGlvU2NvcGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbmFtZSArICdcIl0nKTtcbiAgfTtcbiAgdmFyIHJhZGlvU2V0O1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mod2luZG93LkNTUy5lc2NhcGUobm9kZS5uYW1lKSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJhZGlvU2V0ID0gcXVlcnlSYWRpb3Mobm9kZS5uYW1lKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCdMb29rcyBsaWtlIHlvdSBoYXZlIGEgcmFkaW8gYnV0dG9uIHdpdGggYSBuYW1lIGF0dHJpYnV0ZSBjb250YWluaW5nIGludmFsaWQgQ1NTIHNlbGVjdG9yIGNoYXJhY3RlcnMgYW5kIG5lZWQgdGhlIENTUy5lc2NhcGUgcG9seWZpbGw6ICVzJywgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCwgbm9kZS5mb3JtKTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59O1xudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufTtcbnZhciBpc05vblRhYmJhYmxlUmFkaW8gPSBmdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufTtcblxuLy8gZGV0ZXJtaW5lcyBpZiBhIG5vZGUgaXMgdWx0aW1hdGVseSBhdHRhY2hlZCB0byB0aGUgd2luZG93J3MgZG9jdW1lbnRcbnZhciBpc05vZGVBdHRhY2hlZCA9IGZ1bmN0aW9uIGlzTm9kZUF0dGFjaGVkKG5vZGUpIHtcbiAgdmFyIF9ub2RlUm9vdDtcbiAgLy8gVGhlIHJvb3Qgbm9kZSBpcyB0aGUgc2hhZG93IHJvb3QgaWYgdGhlIG5vZGUgaXMgaW4gYSBzaGFkb3cgRE9NOyBzb21lIGRvY3VtZW50IG90aGVyd2lzZVxuICAvLyAgKGJ1dCBOT1QgX3RoZV8gZG9jdW1lbnQ7IHNlZSBzZWNvbmQgJ0lmJyBjb21tZW50IGJlbG93IGZvciBtb3JlKS5cbiAgLy8gSWYgcm9vdE5vZGUgaXMgc2hhZG93IHJvb3QsIGl0J2xsIGhhdmUgYSBob3N0LCB3aGljaCBpcyB0aGUgZWxlbWVudCB0byB3aGljaCB0aGUgc2hhZG93XG4gIC8vICBpcyBhdHRhY2hlZCwgYW5kIHRoZSBvbmUgd2UgbmVlZCB0byBjaGVjayBpZiBpdCdzIGluIHRoZSBkb2N1bWVudCBvciBub3QgKGJlY2F1c2UgdGhlXG4gIC8vICBzaGFkb3csIGFuZCBhbGwgbm9kZXMgaXQgY29udGFpbnMsIGlzIG5ldmVyIGNvbnNpZGVyZWQgaW4gdGhlIGRvY3VtZW50IHNpbmNlIHNoYWRvd3NcbiAgLy8gIGJlaGF2ZSBsaWtlIHNlbGYtY29udGFpbmVkIERPTXM7IGJ1dCBpZiB0aGUgc2hhZG93J3MgSE9TVCwgd2hpY2ggaXMgcGFydCBvZiB0aGUgZG9jdW1lbnQsXG4gIC8vICBpcyBoaWRkZW4sIG9yIGlzIG5vdCBpbiB0aGUgZG9jdW1lbnQgaXRzZWxmIGJ1dCBpcyBkZXRhY2hlZCwgaXQgd2lsbCBhZmZlY3QgdGhlIHNoYWRvdydzXG4gIC8vICB2aXNpYmlsaXR5LCBpbmNsdWRpbmcgYWxsIHRoZSBub2RlcyBpdCBjb250YWlucykuIFRoZSBob3N0IGNvdWxkIGJlIGFueSBub3JtYWwgbm9kZSxcbiAgLy8gIG9yIGEgY3VzdG9tIGVsZW1lbnQgKGkuZS4gd2ViIGNvbXBvbmVudCkuIEVpdGhlciB3YXksIHRoYXQncyB0aGUgb25lIHRoYXQgaXMgY29uc2lkZXJlZFxuICAvLyAgcGFydCBvZiB0aGUgZG9jdW1lbnQsIG5vdCB0aGUgc2hhZG93IHJvb3QsIG5vciBhbnkgb2YgaXRzIGNoaWxkcmVuIChpLmUuIHRoZSBub2RlIGJlaW5nXG4gIC8vICB0ZXN0ZWQpLlxuICAvLyBUbyBmdXJ0aGVyIGNvbXBsaWNhdGUgdGhpbmdzLCB3ZSBoYXZlIHRvIGxvb2sgYWxsIHRoZSB3YXkgdXAgdW50aWwgd2UgZmluZCBhIHNoYWRvdyBIT1NUXG4gIC8vICB0aGF0IGlzIGF0dGFjaGVkIChvciBmaW5kIG5vbmUpIGJlY2F1c2UgdGhlIG5vZGUgbWlnaHQgYmUgaW4gbmVzdGVkIHNoYWRvd3MuLi5cbiAgLy8gSWYgcm9vdE5vZGUgaXMgbm90IGEgc2hhZG93IHJvb3QsIGl0IHdvbid0IGhhdmUgYSBob3N0LCBhbmQgc28gcm9vdE5vZGUgc2hvdWxkIGJlIHRoZVxuICAvLyAgZG9jdW1lbnQgKHBlciB0aGUgZG9jcykgYW5kIHdoaWxlIGl0J3MgYSBEb2N1bWVudC10eXBlIG9iamVjdCwgdGhhdCBkb2N1bWVudCBkb2VzIG5vdFxuICAvLyAgYXBwZWFyIHRvIGJlIHRoZSBzYW1lIGFzIHRoZSBub2RlJ3MgYG93bmVyRG9jdW1lbnRgIGZvciBzb21lIHJlYXNvbiwgc28gaXQncyBzYWZlclxuICAvLyAgdG8gaWdub3JlIHRoZSByb290Tm9kZSBhdCB0aGlzIHBvaW50LCBhbmQgdXNlIGBub2RlLm93bmVyRG9jdW1lbnRgLiBPdGhlcndpc2UsXG4gIC8vICB1c2luZyBgcm9vdE5vZGUuY29udGFpbnMobm9kZSlgIHdpbGwgX2Fsd2F5c18gYmUgdHJ1ZSB3ZSdsbCBnZXQgZmFsc2UtcG9zaXRpdmVzIHdoZW5cbiAgLy8gIG5vZGUgaXMgYWN0dWFsbHkgZGV0YWNoZWQuXG4gIC8vIE5PVEU6IElmIGBub2RlUm9vdEhvc3RgIG9yIGBub2RlYCBoYXBwZW5zIHRvIGJlIHRoZSBgZG9jdW1lbnRgIGl0c2VsZiAod2hpY2ggaXMgcG9zc2libGVcbiAgLy8gIGlmIGEgdGFiYmFibGUvZm9jdXNhYmxlIG5vZGUgd2FzIHF1aWNrbHkgYWRkZWQgdG8gdGhlIERPTSwgZm9jdXNlZCwgYW5kIHRoZW4gcmVtb3ZlZFxuICAvLyAgZnJvbSB0aGUgRE9NIGFzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAtcmVhY3QvaXNzdWVzLzkwNSksIHRoZW5cbiAgLy8gIGBvd25lckRvY3VtZW50YCB3aWxsIGJlIGBudWxsYCwgaGVuY2UgdGhlIG9wdGlvbmFsIGNoYWluaW5nIG9uIGl0LlxuICB2YXIgbm9kZVJvb3QgPSBub2RlICYmIGdldFJvb3ROb2RlJDEobm9kZSk7XG4gIHZhciBub2RlUm9vdEhvc3QgPSAoX25vZGVSb290ID0gbm9kZVJvb3QpID09PSBudWxsIHx8IF9ub2RlUm9vdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25vZGVSb290Lmhvc3Q7XG5cbiAgLy8gaW4gc29tZSBjYXNlcywgYSBkZXRhY2hlZCBub2RlIHdpbGwgcmV0dXJuIGl0c2VsZiBhcyB0aGUgcm9vdCBpbnN0ZWFkIG9mIGEgZG9jdW1lbnQgb3JcbiAgLy8gIHNoYWRvdyByb290IG9iamVjdCwgaW4gd2hpY2ggY2FzZSwgd2Ugc2hvdWxkbid0IHRyeSB0byBsb29rIGZ1cnRoZXIgdXAgdGhlIGhvc3QgY2hhaW5cbiAgdmFyIGF0dGFjaGVkID0gZmFsc2U7XG4gIGlmIChub2RlUm9vdCAmJiBub2RlUm9vdCAhPT0gbm9kZSkge1xuICAgIHZhciBfbm9kZVJvb3RIb3N0LCBfbm9kZVJvb3RIb3N0JG93bmVyRG8sIF9ub2RlJG93bmVyRG9jdW1lbnQ7XG4gICAgYXR0YWNoZWQgPSAhISgoX25vZGVSb290SG9zdCA9IG5vZGVSb290SG9zdCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdCAhPT0gdm9pZCAwICYmIChfbm9kZVJvb3RIb3N0JG93bmVyRG8gPSBfbm9kZVJvb3RIb3N0Lm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEbyAhPT0gdm9pZCAwICYmIF9ub2RlUm9vdEhvc3Qkb3duZXJEby5jb250YWlucyhub2RlUm9vdEhvc3QpIHx8IG5vZGUgIT09IG51bGwgJiYgbm9kZSAhPT0gdm9pZCAwICYmIChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSAhPT0gbnVsbCAmJiBfbm9kZSRvd25lckRvY3VtZW50ICE9PSB2b2lkIDAgJiYgX25vZGUkb3duZXJEb2N1bWVudC5jb250YWlucyhub2RlKSk7XG4gICAgd2hpbGUgKCFhdHRhY2hlZCAmJiBub2RlUm9vdEhvc3QpIHtcbiAgICAgIHZhciBfbm9kZVJvb3QyLCBfbm9kZVJvb3RIb3N0MiwgX25vZGVSb290SG9zdDIkb3duZXJEO1xuICAgICAgLy8gc2luY2UgaXQncyBub3QgYXR0YWNoZWQgYW5kIHdlIGhhdmUgYSByb290IGhvc3QsIHRoZSBub2RlIE1VU1QgYmUgaW4gYSBuZXN0ZWQgc2hhZG93IERPTSxcbiAgICAgIC8vICB3aGljaCBtZWFucyB3ZSBuZWVkIHRvIGdldCB0aGUgaG9zdCdzIGhvc3QgYW5kIGNoZWNrIGlmIHRoYXQgcGFyZW50IGhvc3QgaXMgY29udGFpbmVkXG4gICAgICAvLyAgaW4gKGkuZS4gYXR0YWNoZWQgdG8pIHRoZSBkb2N1bWVudFxuICAgICAgbm9kZVJvb3QgPSBnZXRSb290Tm9kZSQxKG5vZGVSb290SG9zdCk7XG4gICAgICBub2RlUm9vdEhvc3QgPSAoX25vZGVSb290MiA9IG5vZGVSb290KSA9PT0gbnVsbCB8fCBfbm9kZVJvb3QyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZVJvb3QyLmhvc3Q7XG4gICAgICBhdHRhY2hlZCA9ICEhKChfbm9kZVJvb3RIb3N0MiA9IG5vZGVSb290SG9zdCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdDIgIT09IHZvaWQgMCAmJiAoX25vZGVSb290SG9zdDIkb3duZXJEID0gX25vZGVSb290SG9zdDIub3duZXJEb2N1bWVudCkgIT09IG51bGwgJiYgX25vZGVSb290SG9zdDIkb3duZXJEICE9PSB2b2lkIDAgJiYgX25vZGVSb290SG9zdDIkb3duZXJELmNvbnRhaW5zKG5vZGVSb290SG9zdCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXR0YWNoZWQ7XG59O1xudmFyIGlzWmVyb0FyZWEgPSBmdW5jdGlvbiBpc1plcm9BcmVhKG5vZGUpIHtcbiAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgd2lkdGggPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUud2lkdGgsXG4gICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcbiAgcmV0dXJuIHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMDtcbn07XG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihub2RlLCBfcmVmKSB7XG4gIHZhciBkaXNwbGF5Q2hlY2sgPSBfcmVmLmRpc3BsYXlDaGVjayxcbiAgICBnZXRTaGFkb3dSb290ID0gX3JlZi5nZXRTaGFkb3dSb290O1xuICAvLyBOT1RFOiB2aXNpYmlsaXR5IHdpbGwgYmUgYHVuZGVmaW5lZGAgaWYgbm9kZSBpcyBkZXRhY2hlZCBmcm9tIHRoZSBkb2N1bWVudFxuICAvLyAgKHNlZSBub3RlcyBhYm91dCB0aGlzIGZ1cnRoZXIgZG93biksIHdoaWNoIG1lYW5zIHdlIHdpbGwgY29uc2lkZXIgaXQgdmlzaWJsZVxuICAvLyAgKHRoaXMgaXMgbGVnYWN5IGJlaGF2aW9yIGZyb20gYSB2ZXJ5IGxvbmcgd2F5IGJhY2spXG4gIC8vIE5PVEU6IHdlIGNoZWNrIHRoaXMgcmVnYXJkbGVzcyBvZiBgZGlzcGxheUNoZWNrPVwibm9uZVwiYCBiZWNhdXNlIHRoaXMgaXMgYVxuICAvLyAgX3Zpc2liaWxpdHlfIGNoZWNrLCBub3QgYSBfZGlzcGxheV8gY2hlY2tcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaXNEaXJlY3RTdW1tYXJ5ID0gbWF0Y2hlcy5jYWxsKG5vZGUsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScpO1xuICB2YXIgbm9kZVVuZGVyRGV0YWlscyA9IGlzRGlyZWN0U3VtbWFyeSA/IG5vZGUucGFyZW50RWxlbWVudCA6IG5vZGU7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZVVuZGVyRGV0YWlscywgJ2RldGFpbHM6bm90KFtvcGVuXSkgKicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFkaXNwbGF5Q2hlY2sgfHwgZGlzcGxheUNoZWNrID09PSAnZnVsbCcgfHwgZGlzcGxheUNoZWNrID09PSAnbGVnYWN5LWZ1bGwnKSB7XG4gICAgaWYgKHR5cGVvZiBnZXRTaGFkb3dSb290ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBmaWd1cmUgb3V0IGlmIHdlIHNob3VsZCBjb25zaWRlciB0aGUgbm9kZSB0byBiZSBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgYW5kIHVzZSB0aGVcbiAgICAgIC8vICAnbm9uLXplcm8tYXJlYScgZmFsbGJhY2tcbiAgICAgIHZhciBvcmlnaW5hbE5vZGUgPSBub2RlO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudEVsZW1lbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHZhciByb290Tm9kZSA9IGdldFJvb3ROb2RlJDEobm9kZSk7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICFwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QgJiYgZ2V0U2hhZG93Um9vdChwYXJlbnRFbGVtZW50KSA9PT0gdHJ1ZSAvLyBjaGVjayBpZiB0aGVyZSdzIGFuIHVuZGlzY2xvc2VkIHNoYWRvd1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBub2RlIGhhcyBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgd2hpY2ggbWVhbnMgd2UgY2FuIG9ubHkgdHJlYXQgaXQgYXMgYSBibGFjayBib3gsIHNvIHdlXG4gICAgICAgICAgLy8gIGZhbGwgYmFjayB0byBhIG5vbi16ZXJvLWFyZWEgdGVzdFxuICAgICAgICAgIHJldHVybiBpc1plcm9BcmVhKG5vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgLy8gaXRlcmF0ZSB1cCBzbG90XG4gICAgICAgICAgbm9kZSA9IG5vZGUuYXNzaWduZWRTbG90O1xuICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRFbGVtZW50ICYmIHJvb3ROb2RlICE9PSBub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAvLyBjcm9zcyBzaGFkb3cgYm91bmRhcnlcbiAgICAgICAgICBub2RlID0gcm9vdE5vZGUuaG9zdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpdGVyYXRlIHVwIG5vcm1hbCBkb21cbiAgICAgICAgICBub2RlID0gcGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IG9yaWdpbmFsTm9kZTtcbiAgICB9XG4gICAgLy8gZWxzZSwgYGdldFNoYWRvd1Jvb3RgIG1pZ2h0IGJlIHRydWUsIGJ1dCBhbGwgdGhhdCBkb2VzIGlzIGVuYWJsZSBzaGFkb3cgRE9NIHN1cHBvcnRcbiAgICAvLyAgKGkuZS4gaXQgZG9lcyBub3QgYWxzbyBwcmVzdW1lIHRoYXQgYWxsIG5vZGVzIG1pZ2h0IGhhdmUgdW5kaXNjbG9zZWQgc2hhZG93cyk7IG9yXG4gICAgLy8gIGl0IG1pZ2h0IGJlIGEgZmFsc3kgdmFsdWUsIHdoaWNoIG1lYW5zIHNoYWRvdyBET00gc3VwcG9ydCBpcyBkaXNhYmxlZFxuXG4gICAgLy8gU2luY2Ugd2UgZGlkbid0IGZpbmQgaXQgc2l0dGluZyBpbiBhbiB1bmRpc2Nsb3NlZCBzaGFkb3cgKG9yIHNoYWRvd3MgYXJlIGRpc2FibGVkKVxuICAgIC8vICBub3cgd2UgY2FuIGp1c3QgdGVzdCB0byBzZWUgaWYgaXQgd291bGQgbm9ybWFsbHkgYmUgdmlzaWJsZSBvciBub3QsIHByb3ZpZGVkIGl0J3NcbiAgICAvLyAgYXR0YWNoZWQgdG8gdGhlIG1haW4gZG9jdW1lbnQuXG4gICAgLy8gTk9URTogV2UgbXVzdCBjb25zaWRlciBjYXNlIHdoZXJlIG5vZGUgaXMgaW5zaWRlIGEgc2hhZG93IERPTSBhbmQgZ2l2ZW4gZGlyZWN0bHkgdG9cbiAgICAvLyAgYGlzVGFiYmFibGUoKWAgb3IgYGlzRm9jdXNhYmxlKClgIC0tIHJlZ2FyZGxlc3Mgb2YgYGdldFNoYWRvd1Jvb3RgIG9wdGlvbiBzZXR0aW5nLlxuXG4gICAgaWYgKGlzTm9kZUF0dGFjaGVkKG5vZGUpKSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIHdoZXJldmVyIHRoZSBub2RlIGlzOiBpZiB0aGVyZSdzIGF0IGxlYXN0IG9uZSBjbGllbnQgcmVjdCwgaXQnc1xuICAgICAgLy8gIHNvbWVob3cgZGlzcGxheWVkOyBpdCBhbHNvIGNvdmVycyB0aGUgQ1NTICdkaXNwbGF5OiBjb250ZW50cycgY2FzZSB3aGVyZSB0aGVcbiAgICAgIC8vICBub2RlIGl0c2VsZiBpcyBoaWRkZW4gaW4gcGxhY2Ugb2YgaXRzIGNvbnRlbnRzOyBhbmQgdGhlcmUncyBubyBuZWVkIHRvIHNlYXJjaFxuICAgICAgLy8gIHVwIHRoZSBoaWVyYXJjaHkgZWl0aGVyXG4gICAgICByZXR1cm4gIW5vZGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gRWxzZSwgdGhlIG5vZGUgaXNuJ3QgYXR0YWNoZWQgdG8gdGhlIGRvY3VtZW50LCB3aGljaCBtZWFucyB0aGUgYGdldENsaWVudFJlY3RzKClgXG4gICAgLy8gIEFQSSB3aWxsIF9fYWx3YXlzX18gcmV0dXJuIHplcm8gcmVjdHMgKHRoaXMgY2FuIGhhcHBlbiwgZm9yIGV4YW1wbGUsIGlmIFJlYWN0XG4gICAgLy8gIGlzIHVzZWQgdG8gcmVuZGVyIG5vZGVzIG9udG8gYSBkZXRhY2hlZCB0cmVlLCBhcyBjb25maXJtZWQgaW4gdGhpcyB0aHJlYWQ6XG4gICAgLy8gIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvOTExNyNpc3N1ZWNvbW1lbnQtMjg0MjI4ODcwKVxuICAgIC8vXG4gICAgLy8gSXQgYWxzbyBtZWFucyB0aGF0IGV2ZW4gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheSB3aWxsIHJldHVybiBgdW5kZWZpbmVkYFxuICAgIC8vICBiZWNhdXNlIHN0eWxlcyBhcmUgb25seSBjb21wdXRlZCBmb3Igbm9kZXMgdGhhdCBhcmUgaW4gdGhlIGRvY3VtZW50LlxuICAgIC8vXG4gICAgLy8gTk9URTogVEhJUyBIQVMgQkVFTiBUSEUgQ0FTRSBGT1IgWUVBUlMuIEl0IGlzIG5vdCBuZXcsIG5vciBpcyBpdCBjYXVzZWQgYnkgdGFiYmFibGVcbiAgICAvLyAgc29tZWhvdy4gVGhvdWdoIGl0IHdhcyBuZXZlciBzdGF0ZWQgb2ZmaWNpYWxseSwgYW55b25lIHdobyBoYXMgZXZlciB1c2VkIHRhYmJhYmxlXG4gICAgLy8gIEFQSXMgb24gbm9kZXMgaW4gZGV0YWNoZWQgY29udGFpbmVycyBoYXMgYWN0dWFsbHkgaW1wbGljaXRseSB1c2VkIHRhYmJhYmxlIGluIHdoYXRcbiAgICAvLyAgd2FzIGxhdGVyIChhcyBvZiB2NS4yLjAgb24gQXByIDksIDIwMjEpIGNhbGxlZCBgZGlzcGxheUNoZWNrPVwibm9uZVwiYCBtb2RlIC0tIGVzc2VudGlhbGx5XG4gICAgLy8gIGNvbnNpZGVyaW5nIF9fZXZlcnl0aGluZ19fIHRvIGJlIHZpc2libGUgYmVjYXVzZSBvZiB0aGUgaW5uYWJpbGl0eSB0byBkZXRlcm1pbmUgc3R5bGVzLlxuICAgIC8vXG4gICAgLy8gdjYuMC4wOiBBcyBvZiB0aGlzIG1ham9yIHJlbGVhc2UsIHRoZSBkZWZhdWx0ICdmdWxsJyBvcHRpb24gX19ubyBsb25nZXIgdHJlYXRzIGRldGFjaGVkXG4gICAgLy8gIG5vZGVzIGFzIHZpc2libGUgd2l0aCB0aGUgJ25vbmUnIGZhbGxiYWNrLl9fXG4gICAgaWYgKGRpc3BsYXlDaGVjayAhPT0gJ2xlZ2FjeS1mdWxsJykge1xuICAgICAgcmV0dXJuIHRydWU7IC8vIGhpZGRlblxuICAgIH1cbiAgICAvLyBlbHNlLCBmYWxsYmFjayB0byAnbm9uZScgbW9kZSBhbmQgY29uc2lkZXIgdGhlIG5vZGUgdmlzaWJsZVxuICB9IGVsc2UgaWYgKGRpc3BsYXlDaGVjayA9PT0gJ25vbi16ZXJvLWFyZWEnKSB7XG4gICAgLy8gTk9URTogRXZlbiB0aG91Z2ggdGhpcyB0ZXN0cyB0aGF0IHRoZSBub2RlJ3MgY2xpZW50IHJlY3QgaXMgbm9uLXplcm8gdG8gZGV0ZXJtaW5lXG4gICAgLy8gIHdoZXRoZXIgaXQncyBkaXNwbGF5ZWQsIGFuZCB0aGF0IGEgZGV0YWNoZWQgbm9kZSB3aWxsIF9fYWx3YXlzX18gaGF2ZSBhIHplcm8tYXJlYVxuICAgIC8vICBjbGllbnQgcmVjdCwgd2UgZG9uJ3Qgc3BlY2lhbC1jYXNlIGZvciB3aGV0aGVyIHRoZSBub2RlIGlzIGF0dGFjaGVkIG9yIG5vdC4gSW5cbiAgICAvLyAgdGhpcyBtb2RlLCB3ZSBkbyB3YW50IHRvIGNvbnNpZGVyIG5vZGVzIHRoYXQgaGF2ZSBhIHplcm8gYXJlYSB0byBiZSBoaWRkZW4gYXQgYWxsXG4gICAgLy8gIHRpbWVzLCBhbmQgdGhhdCBpbmNsdWRlcyBhdHRhY2hlZCBvciBub3QuXG4gICAgcmV0dXJuIGlzWmVyb0FyZWEobm9kZSk7XG4gIH1cblxuICAvLyB2aXNpYmxlLCBhcyBmYXIgYXMgd2UgY2FuIHRlbGwsIG9yIHBlciBjdXJyZW50IGBkaXNwbGF5Q2hlY2s9bm9uZWAgbW9kZSwgd2UgYXNzdW1lXG4gIC8vICBpdCdzIHZpc2libGVcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gZm9ybSBmaWVsZHMgKG5lc3RlZCkgaW5zaWRlIGEgZGlzYWJsZWQgZmllbGRzZXQgYXJlIG5vdCBmb2N1c2FibGUvdGFiYmFibGVcbi8vICB1bmxlc3MgdGhleSBhcmUgaW4gdGhlIF9maXJzdF8gPGxlZ2VuZD4gZWxlbWVudCBvZiB0aGUgdG9wLW1vc3QgZGlzYWJsZWRcbi8vICBmaWVsZHNldFxudmFyIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpIHtcbiAgaWYgKC9eKElOUFVUfEJVVFRPTnxTRUxFQ1R8VEVYVEFSRUEpJC8udGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gY2hlY2sgaWYgYG5vZGVgIGlzIGNvbnRhaW5lZCBpbiBhIGRpc2FibGVkIDxmaWVsZHNldD5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ0ZJRUxEU0VUJyAmJiBwYXJlbnROb2RlLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIGxvb2sgZm9yIHRoZSBmaXJzdCA8bGVnZW5kPiBhbW9uZyB0aGUgY2hpbGRyZW4gb2YgdGhlIGRpc2FibGVkIDxmaWVsZHNldD5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICAgIC8vIHdoZW4gdGhlIGZpcnN0IDxsZWdlbmQ+IChpbiBkb2N1bWVudCBvcmRlcikgaXMgZm91bmRcbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0xFR0VORCcpIHtcbiAgICAgICAgICAgIC8vIGlmIGl0cyBwYXJlbnQgPGZpZWxkc2V0PiBpcyBub3QgbmVzdGVkIGluIGFub3RoZXIgZGlzYWJsZWQgPGZpZWxkc2V0PixcbiAgICAgICAgICAgIC8vIHJldHVybiB3aGV0aGVyIGBub2RlYCBpcyBhIGRlc2NlbmRhbnQgb2YgaXRzIGZpcnN0IDxsZWdlbmQ+XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKHBhcmVudE5vZGUsICdmaWVsZHNldFtkaXNhYmxlZF0gKicpID8gdHJ1ZSA6ICFjaGlsZC5jb250YWlucyhub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIGRpc2FibGVkIDxmaWVsZHNldD4gY29udGFpbmluZyBgbm9kZWAgaGFzIG5vIDxsZWdlbmQ+XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICAvLyBlbHNlLCBub2RlJ3MgdGFiYmFibGUvZm9jdXNhYmxlIHN0YXRlIHNob3VsZCBub3QgYmUgYWZmZWN0ZWQgYnkgYSBmaWVsZHNldCdzXG4gIC8vICBlbmFibGVkL2Rpc2FibGVkIHN0YXRlXG4gIHJldHVybiBmYWxzZTtcbn07XG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkge1xuICBpZiAobm9kZS5kaXNhYmxlZCB8fFxuICAvLyB3ZSBtdXN0IGRvIGFuIGluZXJ0IGxvb2sgdXAgdG8gZmlsdGVyIG91dCBhbnkgZWxlbWVudHMgaW5zaWRlIGFuIGluZXJ0IGFuY2VzdG9yXG4gIC8vICBiZWNhdXNlIHdlJ3JlIGxpbWl0ZWQgaW4gdGhlIHR5cGUgb2Ygc2VsZWN0b3JzIHdlIGNhbiB1c2UgaW4gSlNEb20gKHNlZSByZWxhdGVkXG4gIC8vICBub3RlIHJlbGF0ZWQgdG8gYGNhbmRpZGF0ZVNlbGVjdG9yc2ApXG4gIGlzSW5lcnQobm9kZSkgfHwgaXNIaWRkZW5JbnB1dChub2RlKSB8fCBpc0hpZGRlbihub2RlLCBvcHRpb25zKSB8fFxuICAvLyBGb3IgYSBkZXRhaWxzIGVsZW1lbnQgd2l0aCBhIHN1bW1hcnksIHRoZSBzdW1tYXJ5IGVsZW1lbnQgZ2V0cyB0aGUgZm9jdXNcbiAgaXNEZXRhaWxzV2l0aFN1bW1hcnkobm9kZSkgfHwgaXNEaXNhYmxlZEZyb21GaWVsZHNldChub2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJpbmRleChub2RlKSA8IDAgfHwgIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUob3B0aW9ucywgbm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIGlzVmFsaWRTaGFkb3dSb290VGFiYmFibGUgPSBmdW5jdGlvbiBpc1ZhbGlkU2hhZG93Um9vdFRhYmJhYmxlKHNoYWRvd0hvc3ROb2RlKSB7XG4gIHZhciB0YWJJbmRleCA9IHBhcnNlSW50KHNoYWRvd0hvc3ROb2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICBpZiAoaXNOYU4odGFiSW5kZXgpIHx8IHRhYkluZGV4ID49IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBJZiBhIGN1c3RvbSBlbGVtZW50IGhhcyBhbiBleHBsaWNpdCBuZWdhdGl2ZSB0YWJpbmRleCxcbiAgLy8gYnJvd3NlcnMgd2lsbCBub3QgYWxsb3cgdGFiIHRhcmdldGluZyBzYWlkIGVsZW1lbnQncyBjaGlsZHJlbi5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LjxFbGVtZW50fENhbmRpZGF0ZVNjb3BlPn0gY2FuZGlkYXRlc1xuICogQHJldHVybnMgRWxlbWVudFtdXG4gKi9cbnZhciBzb3J0QnlPcmRlciA9IGZ1bmN0aW9uIHNvcnRCeU9yZGVyKGNhbmRpZGF0ZXMpIHtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcbiAgY2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgdmFyIGlzU2NvcGUgPSAhIWl0ZW0uc2NvcGVQYXJlbnQ7XG4gICAgdmFyIGVsZW1lbnQgPSBpc1Njb3BlID8gaXRlbS5zY29wZVBhcmVudCA6IGl0ZW07XG4gICAgdmFyIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoZWxlbWVudCwgaXNTY29wZSk7XG4gICAgdmFyIGVsZW1lbnRzID0gaXNTY29wZSA/IHNvcnRCeU9yZGVyKGl0ZW0uY2FuZGlkYXRlcykgOiBlbGVtZW50O1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgaXNTY29wZSA/IHJlZ3VsYXJUYWJiYWJsZXMucHVzaC5hcHBseShyZWd1bGFyVGFiYmFibGVzLCBlbGVtZW50cykgOiByZWd1bGFyVGFiYmFibGVzLnB1c2goZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgaXNTY29wZTogaXNTY29wZSxcbiAgICAgICAgY29udGVudDogZWxlbWVudHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzb3J0YWJsZSkge1xuICAgIHNvcnRhYmxlLmlzU2NvcGUgPyBhY2MucHVzaC5hcHBseShhY2MsIHNvcnRhYmxlLmNvbnRlbnQpIDogYWNjLnB1c2goc29ydGFibGUuY29udGVudCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcbn07XG52YXIgdGFiYmFibGUgPSBmdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXM7XG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUuYmluZChudWxsLCBvcHRpb25zKSxcbiAgICAgIGZsYXR0ZW46IGZhbHNlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290LFxuICAgICAgc2hhZG93Um9vdEZpbHRlcjogaXNWYWxpZFNoYWRvd1Jvb3RUYWJiYWJsZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKGVsLCBvcHRpb25zLmluY2x1ZGVDb250YWluZXIsIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuICByZXR1cm4gc29ydEJ5T3JkZXIoY2FuZGlkYXRlcyk7XG59O1xudmFyIGZvY3VzYWJsZSA9IGZ1bmN0aW9uIGZvY3VzYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGNhbmRpZGF0ZXM7XG4gIGlmIChvcHRpb25zLmdldFNoYWRvd1Jvb3QpIHtcbiAgICBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlc0l0ZXJhdGl2ZWx5KFtlbF0sIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwge1xuICAgICAgZmlsdGVyOiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlLmJpbmQobnVsbCwgb3B0aW9ucyksXG4gICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgZ2V0U2hhZG93Um9vdDogb3B0aW9ucy5nZXRTaGFkb3dSb290XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlcztcbn07XG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xudmFyIGlzRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpO1xufTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBgZm9jdXMtdHJhcC90YWJiYWJsZWAgb3B0aW9ucy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvdGFiYmFibGUjdGFiYmFibGVcbiAqL1xuY29uc3QgdGFiYmFibGVPcHRpb25zID0ge1xuICBnZXRTaGFkb3dSb290OiB0cnVlXG59O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB3aWxsIGd1YXJhbnRlZSBhbiBJRCBvbiB0aGUgcHJvdmlkZWQgZWxlbWVudC5cbiAqXG4gKiBJZiBpdCBhbHJlYWR5IGhhcyBhbiBJRCwgaXQgd2lsbCBiZSBwcmVzZXJ2ZWQsIG90aGVyd2lzZSBhIHVuaXF1ZSBvbmUgd2lsbCBiZSBnZW5lcmF0ZWQgYW5kIGFzc2lnbmVkLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgQW4gZWxlbWVudC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbGVtZW50J3MgSUQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZUlkKGVsKSB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZXR1cm4gKGVsLmlkID0gZWwuaWQgfHwgYCR7ZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpfS0ke2d1aWQoKX1gKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyBhbiBhcnJheSBmcm9tIGEgTm9kZUxpc3QuXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZUxpc3QgQSBOb2RlTGlzdC5cbiAqIEByZXR1cm5zIHtFbGVtZW50W119IEFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBub2RlTGlzdFRvQXJyYXkobm9kZUxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobm9kZUxpc3QpID8gbm9kZUxpc3QgOiBBcnJheS5mcm9tKG5vZGVMaXN0KTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyB0aGUgQ2FsY2l0ZSBcIm1vZGVcIiBvZiBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7XCJsaWdodFwifFwiZGFya1wifSBUaGUgQ2FsY2l0ZSBtb2RlLlxuICovXG5mdW5jdGlvbiBnZXRNb2RlTmFtZShlbCkge1xuICBjb25zdCBjbG9zZXN0RWxXaXRoTW9kZSA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShlbCwgYC4ke0NTU19VVElMSVRZLmRhcmtNb2RlfSwgLiR7Q1NTX1VUSUxJVFkubGlnaHRNb2RlfWApO1xuICByZXR1cm4gY2xvc2VzdEVsV2l0aE1vZGU/LmNsYXNzTGlzdC5jb250YWlucyhcImNhbGNpdGUtbW9kZS1kYXJrXCIpID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdGhlIGRpcmVjdGlvbiBvZiBhIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50LlxuICogQHJldHVybnMge0RpcmVjdGlvbn0gVGhlIGRpcmVjdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0RWxlbWVudERpcihlbCkge1xuICBjb25zdCBwcm9wID0gXCJkaXJcIjtcbiAgY29uc3Qgc2VsZWN0b3IgPSBgWyR7cHJvcH1dYDtcbiAgY29uc3QgY2xvc2VzdCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShlbCwgc2VsZWN0b3IpO1xuICByZXR1cm4gY2xvc2VzdCA/IGNsb3Nlc3QuZ2V0QXR0cmlidXRlKHByb3ApIDogXCJsdHJcIjtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlIG9uIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGUgQW4gYXR0cmlidXRlIG5hbWUuXG4gKiBAcGFyYW0ge2FueX0gZmFsbGJhY2tWYWx1ZSBBIGZhbGxiYWNrIHZhbHVlLlxuICogQHJldHVybnMge2FueX0gVGhlIHZhbHVlLlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZnVuY3Rpb24gZ2V0RWxlbWVudFByb3AoZWwsIGF0dHJpYnV0ZSwgZmFsbGJhY2tWYWx1ZSkge1xuICBjb25zdCBzZWxlY3RvciA9IGBbJHthdHRyaWJ1dGV9XWA7XG4gIGNvbnN0IGNsb3Nlc3QgPSBlbC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgcmV0dXJuIGNsb3Nlc3QgPyBjbG9zZXN0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpIDogZmFsbGJhY2tWYWx1ZTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyB0aGUgcm9vdE5vZGUgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIEFuIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7RG9jdW1lbnR8U2hhZG93Um9vdH0gVGhlIGVsZW1lbnQncyByb290IG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGdldFJvb3ROb2RlKGVsKSB7XG4gIHJldHVybiBlbC5nZXRSb290Tm9kZSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSBub2RlJ3Mgc2hhZG93Um9vdCByb290IG5vZGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgVGhlIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7U2hhZG93Um9vdHxudWxsfSBUaGUgZWxlbWVudCdzIHJvb3Qgbm9kZSBTaGFkb3dSb290LlxuICovXG5mdW5jdGlvbiBnZXRTaGFkb3dSb290Tm9kZShlbCkge1xuICBjb25zdCByb290Tm9kZSA9IGdldFJvb3ROb2RlKGVsKTtcbiAgcmV0dXJuIFwiaG9zdFwiIGluIHJvb3ROb2RlID8gcm9vdE5vZGUgOiBudWxsO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSBob3N0IG9mIGEgU2hhZG93Um9vdC5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50IHwgU2hhZG93Um9vdH0gcm9vdCBBIHJvb3QgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtFbGVtZW50IHwgbnVsbH0gVGhlIGhvc3QgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZ2V0SG9zdChyb290KSB7XG4gIHJldHVybiByb290Lmhvc3QgfHwgbnVsbDtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcXVlcmllcyBhbiBlbGVtZW50J3Mgcm9vdE5vZGUgYW5kIGFueSBhbmNlc3RvciByb290Tm9kZXMuXG4gKlxuICogSWYgYm90aCBhbiAnaWQnIGFuZCAnc2VsZWN0b3InIGFyZSBzdXBwbGllZCwgJ2lkJyB3aWxsIHRha2UgcHJlY2VkZW5jZSBvdmVyICdzZWxlY3RvcicuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IEFuIGVsZW1lbnQuXG4gKiBAcGFyYW0gcm9vdDBcbiAqIEBwYXJhbSByb290MC5zZWxlY3RvclxuICogQHBhcmFtIHJvb3QwLmlkXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gQW4gZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gcXVlcnlFbGVtZW50Um9vdHMoZWxlbWVudCwgeyBzZWxlY3RvciwgaWQgfSkge1xuICAvLyBHZXRzIHRoZSByb290Tm9kZSBhbmQgYW55IGFuY2VzdG9yIHJvb3ROb2RlcyAoc2hhZG93Um9vdCBvciBkb2N1bWVudCkgb2YgYW4gZWxlbWVudCBhbmQgcXVlcmllcyB0aGVtIGZvciBhIHNlbGVjdG9yLlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzU0NTIwNTU0LzE5NDIxNlxuICBmdW5jdGlvbiBxdWVyeUZyb20oZWwpIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGVsLmFzc2lnbmVkU2xvdCkge1xuICAgICAgZWwgPSBlbC5hc3NpZ25lZFNsb3Q7XG4gICAgfVxuICAgIGNvbnN0IHJvb3ROb2RlID0gZ2V0Um9vdE5vZGUoZWwpO1xuICAgIGNvbnN0IGZvdW5kID0gaWRcbiAgICAgID8gXCJnZXRFbGVtZW50QnlJZFwiIGluIHJvb3ROb2RlXG4gICAgICAgID8gLypcbiAgICAgICAgICBDaGVjayB0byBtYWtlIHN1cmUgJ2dldEVsZW1lbnRCeUlkJyBleGlzdHMgaW4gY2FzZXMgd2hlcmUgZWxlbWVudCBpcyBubyBsb25nZXIgY29ubmVjdGVkIHRvIHRoZSBET00gYW5kIGdldFJvb3ROb2RlKCkgcmV0dXJucyB0aGUgZWxlbWVudC5cbiAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvcHVsbC80MjgwXG4gICAgICAgICAgICovXG4gICAgICAgICAgcm9vdE5vZGUuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgIDogbnVsbFxuICAgICAgOiBzZWxlY3RvclxuICAgICAgICA/IHJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBob3N0ID0gZ2V0SG9zdChyb290Tm9kZSk7XG4gICAgcmV0dXJuIGZvdW5kID8gZm91bmQgOiBob3N0ID8gcXVlcnlGcm9tKGhvc3QpIDogbnVsbDtcbiAgfVxuICByZXR1cm4gcXVlcnlGcm9tKGVsZW1lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGJ5IGNyb3NzaW5nIGhlIHNoYWRvdyBib3VuZGFyeSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBzdGFydGluZyBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBzZWxlY3Rvci5cbiAqIEByZXR1cm5zIHtFbGVtZW50fSBUaGUgdGFyZ2V0ZWQgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS81NDUyMDU1NC8xOTQyMTZcbiAgZnVuY3Rpb24gY2xvc2VzdEZyb20oZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5jbG9zZXN0KHNlbGVjdG9yKSB8fCBjbG9zZXN0RnJvbShnZXRIb3N0KGdldFJvb3ROb2RlKGVsKSkpIDogbnVsbDtcbiAgfVxuICByZXR1cm4gY2xvc2VzdEZyb20oZWxlbWVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBpbnZva2UgYSBjYWxsYmFjayBhcyBpdCB0cmF2ZXJzZXMgYSBub2RlIGFuZCBpdHMgYW5jZXN0b3JzIHVudGlsIHJlYWNoaW5nIHRoZSByb290IGRvY3VtZW50LlxuICpcbiAqIFJldHVybmluZyBlYXJseSBvciB1bmRlZmluZWQgaW4gYG9uVmlzaXRgIHdpbGwgY29udGludWUgdHJhdmVyc2luZyB1cCB0aGUgRE9NIHRyZWUuIE90aGVyd2lzZSwgdHJhdmVyc2FsIHdpbGwgaGFsdCB3aXRoIHRoZSByZXR1cm5lZCB2YWx1ZSBhcyB0aGUgcmVzdWx0IG9mIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBBbiBlbGVtZW50LlxuICogQHBhcmFtIHsobm9kZTogTm9kZSkgPT4gRWxlbWVudH0gb25WaXNpdCBUaGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gd2Fsa1VwQW5jZXN0cnkoZWxlbWVudCwgb25WaXNpdCkge1xuICByZXR1cm4gdmlzaXQoZWxlbWVudCwgb25WaXNpdCk7XG59XG5mdW5jdGlvbiB2aXNpdChub2RlLCBvblZpc2l0KSB7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBvblZpc2l0KG5vZGUpO1xuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGNvbnN0IHsgcGFyZW50Tm9kZSB9ID0gbm9kZTtcbiAgcmV0dXJuIHZpc2l0KHBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcGFyZW50Tm9kZS5ob3N0IDogcGFyZW50Tm9kZSwgb25WaXNpdCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdHJ1ZSB3aGVuIGFuIGVsZW1lbnQgaGFzIHRoZSBkZXNjZW5kYW50IGluIHF1ZXN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgc3RhcnRpbmcgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbWF5YmVEZXNjZW5kYW50IFRoZSBkZXNjZW5kYW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zQ3Jvc3NTaGFkb3dCb3VuZGFyeShlbGVtZW50LCBtYXliZURlc2NlbmRhbnQpIHtcbiAgcmV0dXJuICEhd2Fsa1VwQW5jZXN0cnkobWF5YmVEZXNjZW5kYW50LCAobm9kZSkgPT4gKG5vZGUgPT09IGVsZW1lbnQgPyB0cnVlIDogdW5kZWZpbmVkKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgdHJ1ZSB3aGVuIGFuIGVsZW1lbnQgaGFzIGEgc2V0Rm9jdXMgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgQW4gZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUaGUgcmVzdWx0LlxuICovXG5mdW5jdGlvbiBpc0NhbGNpdGVGb2N1c2FibGUoZWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBlbD8uc2V0Rm9jdXMgPT09IFwiZnVuY3Rpb25cIjtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgZm9jdXNlcyBhbiBlbGVtZW50IHVzaW5nIHRoZSBgc2V0Rm9jdXNgIG1ldGhvZCBpZiBhdmFpbGFibGUgYW5kIGZhbGxzIGJhY2sgdG8gdXNpbmcgdGhlIGBmb2N1c2AgbWV0aG9kIGlmIG5vdCBhdmFpbGFibGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBBbiBlbGVtZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiBmb2N1c0VsZW1lbnQoZWwpIHtcbiAgaWYgKCFlbCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gaXNDYWxjaXRlRm9jdXNhYmxlKGVsKSA/IGVsLnNldEZvY3VzKCkgOiBlbC5mb2N1cygpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gZm9jdXMgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgaHRtbCBlbGVtZW50IGNvbnRhaW5pbmcgdGFiYmFibGUgZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGZvY3VzRmlyc3RUYWJiYWJsZShlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICAodGFiYmFibGUoZWxlbWVudCwgdGFiYmFibGVPcHRpb25zKVswXSB8fCBlbGVtZW50KS5mb2N1cygpO1xufVxuY29uc3QgZGVmYXVsdFNsb3RTZWxlY3RvciA9IFwiOm5vdChbc2xvdF0pXCI7XG5mdW5jdGlvbiBnZXRTbG90dGVkKGVsZW1lbnQsIHNsb3ROYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzbG90TmFtZSAmJiAhQXJyYXkuaXNBcnJheShzbG90TmFtZSkgJiYgdHlwZW9mIHNsb3ROYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgb3B0aW9ucyA9IHNsb3ROYW1lO1xuICAgIHNsb3ROYW1lID0gbnVsbDtcbiAgfVxuICBjb25zdCBzbG90U2VsZWN0b3IgPSBzbG90TmFtZVxuICAgID8gQXJyYXkuaXNBcnJheShzbG90TmFtZSlcbiAgICAgID8gc2xvdE5hbWUubWFwKChuYW1lKSA9PiBgW3Nsb3Q9XCIke25hbWV9XCJdYCkuam9pbihcIixcIilcbiAgICAgIDogYFtzbG90PVwiJHtzbG90TmFtZX1cIl1gXG4gICAgOiBkZWZhdWx0U2xvdFNlbGVjdG9yO1xuICBpZiAob3B0aW9ucz8uYWxsKSB7XG4gICAgcmV0dXJuIHF1ZXJ5TXVsdGlwbGUoZWxlbWVudCwgc2xvdFNlbGVjdG9yLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gcXVlcnlTaW5nbGUoZWxlbWVudCwgc2xvdFNlbGVjdG9yLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdENoaWxkcmVuKGVsLCBzZWxlY3Rvcikge1xuICByZXR1cm4gZWwgPyBBcnJheS5mcm9tKGVsLmNoaWxkcmVuIHx8IFtdKS5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZD8ubWF0Y2hlcyhzZWxlY3RvcikpIDogW107XG59XG5mdW5jdGlvbiBxdWVyeU11bHRpcGxlKGVsZW1lbnQsIHNsb3RTZWxlY3Rvciwgb3B0aW9ucykge1xuICBsZXQgbWF0Y2hlcyA9IHNsb3RTZWxlY3RvciA9PT0gZGVmYXVsdFNsb3RTZWxlY3RvclxuICAgID8gZ2V0RGlyZWN0Q2hpbGRyZW4oZWxlbWVudCwgZGVmYXVsdFNsb3RTZWxlY3RvcilcbiAgICA6IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNsb3RTZWxlY3RvcikpO1xuICBtYXRjaGVzID0gb3B0aW9ucyAmJiBvcHRpb25zLmRpcmVjdCA9PT0gZmFsc2UgPyBtYXRjaGVzIDogbWF0Y2hlcy5maWx0ZXIoKGVsKSA9PiBlbC5wYXJlbnRFbGVtZW50ID09PSBlbGVtZW50KTtcbiAgbWF0Y2hlcyA9IG9wdGlvbnM/Lm1hdGNoZXMgPyBtYXRjaGVzLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKG9wdGlvbnMubWF0Y2hlcykpIDogbWF0Y2hlcztcbiAgY29uc3Qgc2VsZWN0b3IgPSBvcHRpb25zPy5zZWxlY3RvcjtcbiAgcmV0dXJuIHNlbGVjdG9yXG4gICAgPyBtYXRjaGVzXG4gICAgICAubWFwKChpdGVtKSA9PiBBcnJheS5mcm9tKGl0ZW0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpKVxuICAgICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXSwgW10pXG4gICAgICAuZmlsdGVyKChtYXRjaCkgPT4gISFtYXRjaClcbiAgICA6IG1hdGNoZXM7XG59XG5mdW5jdGlvbiBxdWVyeVNpbmdsZShlbGVtZW50LCBzbG90U2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgbGV0IG1hdGNoID0gc2xvdFNlbGVjdG9yID09PSBkZWZhdWx0U2xvdFNlbGVjdG9yXG4gICAgPyBnZXREaXJlY3RDaGlsZHJlbihlbGVtZW50LCBkZWZhdWx0U2xvdFNlbGVjdG9yKVswXSB8fCBudWxsXG4gICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgbWF0Y2ggPSBvcHRpb25zICYmIG9wdGlvbnMuZGlyZWN0ID09PSBmYWxzZSA/IG1hdGNoIDogbWF0Y2g/LnBhcmVudEVsZW1lbnQgPT09IGVsZW1lbnQgPyBtYXRjaCA6IG51bGw7XG4gIG1hdGNoID0gb3B0aW9ucz8ubWF0Y2hlcyA/IChtYXRjaD8ubWF0Y2hlcyhvcHRpb25zLm1hdGNoZXMpID8gbWF0Y2ggOiBudWxsKSA6IG1hdGNoO1xuICBjb25zdCBzZWxlY3RvciA9IG9wdGlvbnM/LnNlbGVjdG9yO1xuICByZXR1cm4gc2VsZWN0b3IgPyBtYXRjaD8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBtYXRjaDtcbn1cbi8qKlxuICogRmlsdGVycyBkaXJlY3QgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBBbiBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBzZWxlY3Rvci5cbiAqIEByZXR1cm5zIHtFbGVtZW50W119IEFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJEaXJlY3RDaGlsZHJlbihlbCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbi8qKlxuICogU2V0IGEgZGVmYXVsdCBpY29uIGZyb20gYSBkZWZpbmVkIHNldCBvciBhbGxvdyBhbiBvdmVycmlkZSB3aXRoIGFuIGljb24gbmFtZSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGljb25PYmplY3QgVGhlIGljb24gb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmcgfCBib29sZWFufSBpY29uVmFsdWUgVGhlIGljb24gdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlZFZhbHVlIFRoZSBtYXRjaGVkIHZhbHVlLlxuICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IFRoZSByZXN1bHRpbmcgaWNvbiB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2V0UmVxdWVzdGVkSWNvbihpY29uT2JqZWN0LCBpY29uVmFsdWUsIG1hdGNoZWRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGljb25WYWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBpY29uVmFsdWUgIT09IFwiXCIpIHtcbiAgICByZXR1cm4gaWNvblZhbHVlO1xuICB9XG4gIGVsc2UgaWYgKGljb25WYWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybiBpY29uT2JqZWN0W21hdGNoZWRWYWx1ZV07XG4gIH1cbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgcmV0dXJucyB0cnVlIHdoZW4gdHdvIHJlY3RhbmdsZXMgaW50ZXJzZWN0LlxuICpcbiAqIEBwYXJhbSB7RE9NUmVjdH0gcmVjdDEgVGhlIGZpcnN0IHJlY3RhbmdsZS5cbiAqIEBwYXJhbSB7RE9NUmVjdH0gcmVjdDIgVGhlIHNlY29uZCByZWN0YW5nbGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gaW50ZXJzZWN0cyhyZWN0MSwgcmVjdDIpIHtcbiAgcmV0dXJuICEocmVjdDIubGVmdCA+IHJlY3QxLnJpZ2h0IHx8XG4gICAgcmVjdDIucmlnaHQgPCByZWN0MS5sZWZ0IHx8XG4gICAgcmVjdDIudG9wID4gcmVjdDEuYm90dG9tIHx8XG4gICAgcmVjdDIuYm90dG9tIDwgcmVjdDEudG9wKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgbWFrZXMgc3VyZSB0aGF0IGJvb2xlYW4gYXJpYSBhdHRyaWJ1dGVzIGFyZSBwcm9wZXJseSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcuXG4gKlxuICogSXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgYXJpYSBhdHRyaWJ1dGVzIHRoYXQgcmVxdWlyZSBhIHN0cmluZyB2YWx1ZSBvZiBcInRydWVcIiBvciBcImZhbHNlXCIuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSBUaGUgdmFsdWUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIGNvbnZlcnNpb24gb2YgYSBib29sZWFuIHZhbHVlIChcInRydWVcIiB8IFwiZmFsc2VcIikuXG4gKi9cbmZ1bmN0aW9uIHRvQXJpYUJvb2xlYW4odmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUpLnRvU3RyaW5nKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHJldHVybnMgYHRydWVgIGlmIHRoZSB0YXJnZXQgYHNsb3RgIGVsZW1lbnQgZnJvbSB0aGUgYG9uU2xvdGNoYW5nZWAgZXZlbnQgaGFzIGFuIGFzc2lnbmVkIGVsZW1lbnQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHNsb3QgaGFzIGFueSBhc3NpZ25lZCBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCkge1xuICByZXR1cm4gISFzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkubGVuZ3RoO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRoZSBhc3NpZ25lZCBlbGVtZW50cyBvbiBhIGBzbG90YCBlbGVtZW50IGZyb20gdGhlIGBvblNsb3RjaGFuZ2VgIGV2ZW50LlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90RWxlbWVudHMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCl9IC8+fVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHNsb3QgaGFzIGFueSBhc3NpZ25lZCBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICBmbGF0dGVuOiB0cnVlXG4gIH0pO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciByZXR1cm5zIHRydWUgaWYgdGhlIHBvaW50ZXIgZXZlbnQgZmlyZWQgZnJvbSB0aGUgcHJpbWFyeSBidXR0b24gb2YgdGhlIGRldmljZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3BvaW50ZXJldmVudHMvI3RoZS1idXR0b24tcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtQb2ludGVyRXZlbnR9IGV2ZW50IFRoZSBwb2ludGVyIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQuaXNQcmltYXJ5ICYmIGV2ZW50LmJ1dHRvbiA9PT0gMCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHNldHMgZm9jdXMgb24gYW5kIHJldHVybnMgYSBkZXN0aW5hdGlvbiBlbGVtZW50IGZyb20gd2l0aGluIGEgZ3JvdXAgb2YgcHJvdmlkZWQgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50W119IGVsZW1lbnRzIEFuIGFycmF5IG9mIGVsZW1lbnRzLlxuICogQHBhcmFtIHtFbGVtZW50fSBjdXJyZW50RWxlbWVudCBUaGUgY3VycmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtGb2N1c0VsZW1lbnRJbkdyb3VwRGVzdGluYXRpb259IGRlc3RpbmF0aW9uIFRoZSB0YXJnZXQgZGVzdGluYXRpb24gZWxlbWVudCB0byBmb2N1cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY3ljbGUgU2hvdWxkIG5hdmlnYXRpb24gY3ljbGUgdGhyb3VnaCBlbGVtZW50cyBvciBzdG9wIGF0IGV4dGVudCAtIGRlZmF1bHRzIHRvIHRydWUuXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIGZvY3VzZWQgZWxlbWVudFxuICovXG5jb25zdCBmb2N1c0VsZW1lbnRJbkdyb3VwID0gKGVsZW1lbnRzLCBjdXJyZW50RWxlbWVudCwgZGVzdGluYXRpb24sIGN5Y2xlID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjdXJyZW50SW5kZXggPSBlbGVtZW50cy5pbmRleE9mKGN1cnJlbnRFbGVtZW50KTtcbiAgY29uc3QgaXNGaXJzdEl0ZW0gPSBjdXJyZW50SW5kZXggPT09IDA7XG4gIGNvbnN0IGlzTGFzdEl0ZW0gPSBjdXJyZW50SW5kZXggPT09IGVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gIGlmIChjeWNsZSkge1xuICAgIGRlc3RpbmF0aW9uID1cbiAgICAgIGRlc3RpbmF0aW9uID09PSBcInByZXZpb3VzXCIgJiYgaXNGaXJzdEl0ZW0gPyBcImxhc3RcIiA6IGRlc3RpbmF0aW9uID09PSBcIm5leHRcIiAmJiBpc0xhc3RJdGVtID8gXCJmaXJzdFwiIDogZGVzdGluYXRpb247XG4gIH1cbiAgbGV0IGZvY3VzVGFyZ2V0O1xuICBpZiAoZGVzdGluYXRpb24gPT09IFwicHJldmlvdXNcIikge1xuICAgIGZvY3VzVGFyZ2V0ID0gZWxlbWVudHNbY3VycmVudEluZGV4IC0gMV0gfHwgZWxlbWVudHNbY3ljbGUgPyBlbGVtZW50cy5sZW5ndGggLSAxIDogY3VycmVudEluZGV4XTtcbiAgfVxuICBlbHNlIGlmIChkZXN0aW5hdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICBmb2N1c1RhcmdldCA9IGVsZW1lbnRzW2N1cnJlbnRJbmRleCArIDFdIHx8IGVsZW1lbnRzW2N5Y2xlID8gMCA6IGN1cnJlbnRJbmRleF07XG4gIH1cbiAgZWxzZSBpZiAoZGVzdGluYXRpb24gPT09IFwibGFzdFwiKSB7XG4gICAgZm9jdXNUYXJnZXQgPSBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgfVxuICBlbHNlIHtcbiAgICBmb2N1c1RhcmdldCA9IGVsZW1lbnRzWzBdO1xuICB9XG4gIGZvY3VzRWxlbWVudChmb2N1c1RhcmdldCk7XG4gIHJldHVybiBmb2N1c1RhcmdldDtcbn07XG5cbmV4cG9ydCB7IGNvbnRhaW5zQ3Jvc3NTaGFkb3dCb3VuZGFyeSBhcyBhLCBnZXRFbGVtZW50RGlyIGFzIGIsIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSBhcyBjLCBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50IGFzIGQsIHNldFJlcXVlc3RlZEljb24gYXMgZSwgZm9jdXNFbGVtZW50IGFzIGYsIGdldFNsb3R0ZWQgYXMgZywgZ2V0TW9kZU5hbWUgYXMgaCwgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiBhcyBpLCBmb2N1c0VsZW1lbnRJbkdyb3VwIGFzIGosIHRhYmJhYmxlIGFzIGssIGZvY3VzYWJsZSBhcyBsLCBpc1RhYmJhYmxlIGFzIG0sIGlzRm9jdXNhYmxlIGFzIG4sIHRhYmJhYmxlT3B0aW9ucyBhcyBvLCBmb2N1c0ZpcnN0VGFiYmFibGUgYXMgcCwgcXVlcnlFbGVtZW50Um9vdHMgYXMgcSwgZW5zdXJlSWQgYXMgciwgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMgYXMgcywgdG9BcmlhQm9vbGVhbiBhcyB0LCBnZXRTaGFkb3dSb290Tm9kZSBhcyB1LCBnZXRFbGVtZW50UHJvcCBhcyB2LCBpbnRlcnNlY3RzIGFzIHcsIG5vZGVMaXN0VG9BcnJheSBhcyB4LCBnZXRSb290Tm9kZSBhcyB5LCBmaWx0ZXJEaXJlY3RDaGlsZHJlbiBhcyB6IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2VuKGNvdW50cykge1xuICByZXR1cm4gY291bnRzXG4gICAgLm1hcCgoY291bnQpID0+IHtcbiAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIG91dCArPSAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0pXG4gICAgLmpvaW4oXCItXCIpO1xufVxuY29uc3QgZ3VpZCA9ICgpID0+IGdlbihbMiwgMSwgMSwgMSwgM10pO1xuXG5leHBvcnQgeyBndWlkIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCBhdXRvTW9kZSA9IFwiY2FsY2l0ZS1tb2RlLWF1dG9cIjtcbmNvbnN0IGRhcmtNb2RlID0gXCJjYWxjaXRlLW1vZGUtZGFya1wiO1xuY29uc3QgbGlnaHRNb2RlID0gXCJjYWxjaXRlLW1vZGUtbGlnaHRcIjtcbmNvbnN0IENTU19VVElMSVRZID0ge1xuICBhdXRvTW9kZSxcbiAgZGFya01vZGUsXG4gIGxpZ2h0TW9kZSxcbiAgcnRsOiBcImNhbGNpdGUtLXJ0bFwiLFxuICBjYWxjaXRlQW5pbWF0ZTogXCJjYWxjaXRlLWFuaW1hdGVcIixcbiAgY2FsY2l0ZUFuaW1hdGVJbjogXCJjYWxjaXRlLWFuaW1hdGVfX2luXCIsXG4gIGNhbGNpdGVBbmltYXRlSW5VcDogXCJjYWxjaXRlLWFuaW1hdGVfX2luLXVwXCIsXG4gIGNhbGNpdGVBbmltYXRlSW5Eb3duOiBcImNhbGNpdGUtYW5pbWF0ZV9faW4tZG93blwiLFxuICBjYWxjaXRlQW5pbWF0ZUluUmlnaHQ6IFwiY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodFwiLFxuICBjYWxjaXRlQW5pbWF0ZUluTGVmdDogXCJjYWxjaXRlLWFuaW1hdGVfX2luLWxlZnRcIixcbiAgY2FsY2l0ZUFuaW1hdGVJblNjYWxlOiBcImNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGVcIlxufTtcblxuZXhwb3J0IHsgQ1NTX1VUSUxJVFkgYXMgQywgYXV0b01vZGUgYXMgYSwgZGFya01vZGUgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9