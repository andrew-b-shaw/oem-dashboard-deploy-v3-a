"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_floating-ui-1033e8bb_js-node_modules_es-751fa3"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-1033e8bb.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/floating-ui-1033e8bb.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FloatingCSS),
/* harmony export */   "a": () => (/* binding */ disconnectFloatingUI),
/* harmony export */   "b": () => (/* binding */ defaultOffsetDistance),
/* harmony export */   "c": () => (/* binding */ connectFloatingUI),
/* harmony export */   "d": () => (/* binding */ defaultMenuPlacement),
/* harmony export */   "f": () => (/* binding */ filterComputedPlacements),
/* harmony export */   "r": () => (/* binding */ reposition)
/* harmony export */ });
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = options || {};
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }
});

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      const placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = options;
      const {
        rects
      } = state;
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

async function convertValueToCoords(state, value) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(state) : value;

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: 'offset',
    options: value,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = {
  x: 0,
  y: 0
};
function getVisualOffsets(element, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element ? getWindow(element) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    // ignores Window, checks for [object VisualViewport]
    const isVisualViewport = !isElement(ancestor) && ancestor.toString().includes('V');
    if (ancestorScroll && (animationFrame ? isVisualViewport : true)) {
      ancestor.addEventListener('scroll', update, {
        passive: true
      });
    }
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/**
 * This module helps users provide custom configuration for component internals.
 *
 * @internal
 */
const configOverrides = globalThis["calciteComponentsConfig"];
const config = {
  /**
   * We apply a custom fix to improve positioning for non-Chromium browsers.
   * The fix comes at a performance cost, so provides users a way to opt-out if necessary.
   *
   * @internal
   */
  floatingUINonChromiumPositioningFix: true,
  ...configOverrides
};

const floatingUIBrowserCheck = patchFloatingUiForNonChromiumBrowsers();
async function patchFloatingUiForNonChromiumBrowsers() {
  function getUAData() {
    return navigator.userAgentData;
  }
  function getUAString() {
    const uaData = getUAData();
    return uaData?.brands
      ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
      : navigator.userAgent;
  }
  function isChrome109OrAbove() {
    const uaData = getUAData();
    if (uaData?.brands) {
      return !!uaData.brands.find(({ brand, version }) => (brand === "Google Chrome" || brand === "Chromium") && Number(version) >= 109);
    }
    return !!navigator.userAgent.split(" ").find((ua) => {
      const [browser, version] = ua.split("/");
      return browser === "Chrome" && parseInt(version) >= 109;
    });
  }
  if (config.floatingUINonChromiumPositioningFix &&
    // ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
    (/firefox|safari/i.test(getUAString()) || isChrome109OrAbove())) {
    const { offsetParent } = await __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_composed-offset-position_esm-bbcebb75_js").then(__webpack_require__.bind(__webpack_require__, /*! ./composed-offset-position.esm-bbcebb75.js */ "./node_modules/@esri/calcite-components/dist/esm/composed-offset-position.esm-bbcebb75.js"));
    const originalGetOffsetParent = platform.getOffsetParent;
    platform.getOffsetParent = (element) => originalGetOffsetParent(element, offsetParent);
  }
}
/**
 * Exported for testing purposes only
 */
const placementDataAttribute = "data-placement";
/**
 * Exported for testing purposes only
 */
const repositionDebounceTimeout = 100;
const effectivePlacements = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
];
const defaultMenuPlacement = "bottom-start";
const FloatingCSS = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active"
};
function getMiddleware({ placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type }) {
  const defaultMiddleware = [shift(), hide()];
  if (type === "menu") {
    return [
      ...defaultMiddleware,
      flip({
        fallbackPlacements: flipPlacements || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
      })
    ];
  }
  if (type === "popover" || type === "tooltip") {
    const middleware = [
      ...defaultMiddleware,
      offset({
        mainAxis: typeof offsetDistance === "number" ? offsetDistance : 0,
        crossAxis: typeof offsetSkidding === "number" ? offsetSkidding : 0
      })
    ];
    if (placement === "auto" || placement === "auto-start" || placement === "auto-end") {
      middleware.push(autoPlacement({ alignment: placement === "auto-start" ? "start" : placement === "auto-end" ? "end" : null }));
    }
    else if (!flipDisabled) {
      middleware.push(flip(flipPlacements ? { fallbackPlacements: flipPlacements } : {}));
    }
    if (arrowEl) {
      middleware.push(arrow({
        element: arrowEl
      }));
    }
    return middleware;
  }
  return [];
}
function filterComputedPlacements(placements, el) {
  const filteredPlacements = placements.filter((placement) => effectivePlacements.includes(placement));
  if (filteredPlacements.length !== placements.length) {
    console.warn(`${el.tagName}: Invalid value found in: flipPlacements. Try any of these: ${effectivePlacements
      .map((placement) => `"${placement}"`)
      .join(", ")
      .trim()}`, { el });
  }
  return filteredPlacements;
}
function getEffectivePlacement(floatingEl, placement) {
  const placements = ["left", "right"];
  if ((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.b)(floatingEl) === "rtl") {
    placements.reverse();
  }
  return placement.replace(/leading/gi, placements[0]).replace(/trailing/gi, placements[1]);
}
/**
 * Convenience function to manage `reposition` calls for FloatingUIComponents that use `positionFloatingUI.
 *
 * Note: this is not needed for components that use `calcite-popover`.
 *
 * @param component
 * @param options
 * @param options.referenceEl
 * @param options.floatingEl
 * @param options.overlayPositioning
 * @param options.placement
 * @param options.flipDisabled
 * @param options.flipPlacements
 * @param options.offsetDistance
 * @param options.offsetSkidding
 * @param options.arrowEl
 * @param options.type
 * @param delayed
 */
async function reposition(component, options, delayed = false) {
  if (!component.open) {
    return;
  }
  return delayed ? debouncedReposition(component, options) : positionFloatingUI(component, options);
}
const debouncedReposition = (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_1__.d)(positionFloatingUI, repositionDebounceTimeout, {
  leading: true,
  maxWait: repositionDebounceTimeout
});
const ARROW_CSS_TRANSFORM = {
  top: "",
  left: "rotate(-90deg)",
  bottom: "rotate(180deg)",
  right: "rotate(90deg)"
};
/**
 * Positions the floating element relative to the reference element.
 *
 * **Note:** exported for testing purposes only
 *
 * @param root0
 * @param root0.referenceEl
 * @param root0.floatingEl
 * @param root0.overlayPositioning
 * @param root0.placement
 * @param root0.flipDisabled
 * @param root0.flipPlacements
 * @param root0.offsetDistance
 * @param root0.offsetSkidding
 * @param root0.arrowEl
 * @param root0.type
 * @param component
 * @param root0.referenceEl.referenceEl
 * @param root0.referenceEl.floatingEl
 * @param root0.referenceEl.overlayPositioning
 * @param root0.referenceEl.placement
 * @param root0.referenceEl.flipDisabled
 * @param root0.referenceEl.flipPlacements
 * @param root0.referenceEl.offsetDistance
 * @param root0.referenceEl.offsetSkidding
 * @param root0.referenceEl.arrowEl
 * @param root0.referenceEl.type
 * @param component.referenceEl
 * @param component.floatingEl
 * @param component.overlayPositioning
 * @param component.placement
 * @param component.flipDisabled
 * @param component.flipPlacements
 * @param component.offsetDistance
 * @param component.offsetSkidding
 * @param component.arrowEl
 * @param component.type
 */
async function positionFloatingUI(component, { referenceEl, floatingEl, overlayPositioning = "absolute", placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type }) {
  if (!referenceEl || !floatingEl) {
    return null;
  }
  await floatingUIBrowserCheck;
  const { x, y, placement: effectivePlacement, strategy: position, middlewareData } = await computePosition(referenceEl, floatingEl, {
    strategy: overlayPositioning,
    placement: placement === "auto" || placement === "auto-start" || placement === "auto-end"
      ? undefined
      : getEffectivePlacement(floatingEl, placement),
    middleware: getMiddleware({
      placement,
      flipDisabled,
      flipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type
    })
  });
  if (arrowEl && middlewareData.arrow) {
    const { x, y } = middlewareData.arrow;
    const side = effectivePlacement.split("-")[0];
    const alignment = x != null ? "left" : "top";
    const transform = ARROW_CSS_TRANSFORM[side];
    const reset = { left: "", top: "", bottom: "", right: "" };
    if ("floatingLayout" in component) {
      component.floatingLayout = side === "left" || side === "right" ? "horizontal" : "vertical";
    }
    Object.assign(arrowEl.style, {
      ...reset,
      [alignment]: `${alignment == "left" ? x : y}px`,
      [side]: "100%",
      transform
    });
  }
  const referenceHidden = middlewareData.hide?.referenceHidden;
  const visibility = referenceHidden ? "hidden" : null;
  const pointerEvents = visibility ? "none" : null;
  floatingEl.setAttribute(placementDataAttribute, effectivePlacement);
  const transform = `translate(${Math.round(x)}px,${Math.round(y)}px)`;
  Object.assign(floatingEl.style, {
    visibility,
    pointerEvents,
    position,
    top: "0",
    left: "0",
    transform
  });
}
/**
 * Exported for testing purposes only
 *
 * @internal
 */
const cleanupMap = new WeakMap();
/**
 * Helper to set up floating element interactions on connectedCallback.
 *
 * @param component
 * @param referenceEl
 * @param floatingEl
 */
function connectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  disconnectFloatingUI(component, referenceEl, floatingEl);
  Object.assign(floatingEl.style, {
    visibility: "hidden",
    pointerEvents: "none",
    // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
    position: component.overlayPositioning,
    top: "0",
    left: "0"
  });
  const runAutoUpdate = autoUpdate
    ;
  cleanupMap.set(component, runAutoUpdate(referenceEl, floatingEl, () => component.reposition()));
}
/**
 * Helper to tear down floating element interactions on disconnectedCallback.
 *
 * @param component
 * @param referenceEl
 * @param floatingEl
 */
function disconnectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  const cleanup = cleanupMap.get(component);
  if (cleanup) {
    cleanup();
  }
  cleanupMap.delete(component);
}
const visiblePointerSize = 4;
/**
 * Default offset the position of the floating element away from the reference element.
 *
 * @default 6
 */
const defaultOffsetDistance = Math.ceil(Math.hypot(visiblePointerSize, visiblePointerSize));




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMDVmM2U5ZDY1MTMyNzI4MTMzN2E4YzQ4MjdhYjYxOTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNBOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZ0JBQWdCLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQkFBZ0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWUsUUFBUSxrVUFBb0Q7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0ZBQXdGO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQ0FBc0MsMkZBQTJGO0FBQ2pJO0FBQ0E7QUFDQSw4Q0FBOEMscUNBQXFDLElBQUk7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXLDhEQUE4RDtBQUM3Riw4QkFBOEIsVUFBVTtBQUN4QztBQUNBLGNBQWMsS0FBSyxJQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQVE7QUFDcEM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtKQUFrSjtBQUNqTTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMEVBQTBFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxjQUFjLEtBQUssY0FBYztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHdEdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLFlBQVk7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vZmxvYXRpbmctdWktMTAzM2U4YmIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vb3BlbkNsb3NlQ29tcG9uZW50LWEyNmIwMDlmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZS1iOTA3MjQyMi5qcyc7XG5cbmZ1bmN0aW9uIGdldEFsaWdubWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGhGcm9tQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG59XG5cbmZ1bmN0aW9uIGdldFNpZGUocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5jbHVkZXMoZ2V0U2lkZShwbGFjZW1lbnQpKSA/ICd4JyA6ICd5Jztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQoX3JlZiwgcGxhY2VtZW50LCBydGwpIHtcbiAgbGV0IHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmdcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBmbG9hdGluZy53aWR0aCAvIDI7XG4gIGNvbnN0IGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZmxvYXRpbmcuaGVpZ2h0IC8gMjtcbiAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoRnJvbUF4aXMobWFpbkF4aXMpO1xuICBjb25zdCBjb21tb25BbGlnbiA9IHJlZmVyZW5jZVtsZW5ndGhdIC8gMiAtIGZsb2F0aW5nW2xlbmd0aF0gLyAyO1xuICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gbWFpbkF4aXMgPT09ICd4JztcbiAgbGV0IGNvb3JkcztcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBmbG9hdGluZy5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZmxvYXRpbmcud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cbiAgc3dpdGNoIChnZXRBbGlnbm1lbnQocGxhY2VtZW50KSkge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIGNvb3Jkc1ttYWluQXhpc10gLT0gY29tbW9uQWxpZ24gKiAocnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZW5kJzpcbiAgICAgIGNvb3Jkc1ttYWluQXhpc10gKz0gY29tbW9uQWxpZ24gKiAocnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDEpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgcmVmZXJlbmNlIGVsZW1lbnQgd2hlbiBpdCBpcyBnaXZlbiBhIGNlcnRhaW4gcG9zaXRpb25pbmcgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBleHBvcnQgZG9lcyBub3QgaGF2ZSBhbnkgYHBsYXRmb3JtYCBpbnRlcmZhY2UgbG9naWMuIFlvdSB3aWxsIG5lZWQgdG9cbiAqIHdyaXRlIG9uZSBmb3IgdGhlIHBsYXRmb3JtIHlvdSBhcmUgdXNpbmcgRmxvYXRpbmcgVUkgd2l0aC5cbiAqL1xuY29uc3QgY29tcHV0ZVBvc2l0aW9uJDEgPSBhc3luYyAocmVmZXJlbmNlLCBmbG9hdGluZywgY29uZmlnKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbWlkZGxld2FyZSA9IFtdLFxuICAgIHBsYXRmb3JtXG4gIH0gPSBjb25maWc7XG4gIGNvbnN0IHZhbGlkTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBydGwgPSBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGZsb2F0aW5nKSk7XG4gIGxldCByZWN0cyA9IGF3YWl0IHBsYXRmb3JtLmdldEVsZW1lbnRSZWN0cyh7XG4gICAgcmVmZXJlbmNlLFxuICAgIGZsb2F0aW5nLFxuICAgIHN0cmF0ZWd5XG4gIH0pO1xuICBsZXQge1xuICAgIHgsXG4gICAgeVxuICB9ID0gY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQocmVjdHMsIHBsYWNlbWVudCwgcnRsKTtcbiAgbGV0IHN0YXRlZnVsUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICBsZXQgbWlkZGxld2FyZURhdGEgPSB7fTtcbiAgbGV0IHJlc2V0Q291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkTWlkZGxld2FyZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBmblxuICAgIH0gPSB2YWxpZE1pZGRsZXdhcmVbaV07XG4gICAgY29uc3Qge1xuICAgICAgeDogbmV4dFgsXG4gICAgICB5OiBuZXh0WSxcbiAgICAgIGRhdGEsXG4gICAgICByZXNldFxuICAgIH0gPSBhd2FpdCBmbih7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGluaXRpYWxQbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudDogc3RhdGVmdWxQbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneSxcbiAgICAgIG1pZGRsZXdhcmVEYXRhLFxuICAgICAgcmVjdHMsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgZmxvYXRpbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4ID0gbmV4dFggIT0gbnVsbCA/IG5leHRYIDogeDtcbiAgICB5ID0gbmV4dFkgIT0gbnVsbCA/IG5leHRZIDogeTtcbiAgICBtaWRkbGV3YXJlRGF0YSA9IHtcbiAgICAgIC4uLm1pZGRsZXdhcmVEYXRhLFxuICAgICAgW25hbWVdOiB7XG4gICAgICAgIC4uLm1pZGRsZXdhcmVEYXRhW25hbWVdLFxuICAgICAgICAuLi5kYXRhXG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAocmVzZXQgJiYgcmVzZXRDb3VudCA8PSA1MCkge1xuICAgICAgcmVzZXRDb3VudCsrO1xuICAgICAgaWYgKHR5cGVvZiByZXNldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlc2V0LnBsYWNlbWVudCkge1xuICAgICAgICAgIHN0YXRlZnVsUGxhY2VtZW50ID0gcmVzZXQucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNldC5yZWN0cykge1xuICAgICAgICAgIHJlY3RzID0gcmVzZXQucmVjdHMgPT09IHRydWUgPyBhd2FpdCBwbGF0Zm9ybS5nZXRFbGVtZW50UmVjdHMoe1xuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgZmxvYXRpbmcsXG4gICAgICAgICAgICBzdHJhdGVneVxuICAgICAgICAgIH0pIDogcmVzZXQucmVjdHM7XG4gICAgICAgIH1cbiAgICAgICAgKHtcbiAgICAgICAgICB4LFxuICAgICAgICAgIHlcbiAgICAgICAgfSA9IGNvbXB1dGVDb29yZHNGcm9tUGxhY2VtZW50KHJlY3RzLCBzdGF0ZWZ1bFBsYWNlbWVudCwgcnRsKSk7XG4gICAgICB9XG4gICAgICBpID0gLTE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHksXG4gICAgcGxhY2VtZW50OiBzdGF0ZWZ1bFBsYWNlbWVudCxcbiAgICBzdHJhdGVneSxcbiAgICBtaWRkbGV3YXJlRGF0YVxuICB9O1xufTtcblxuZnVuY3Rpb24gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC4uLnBhZGRpbmdcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2lkZU9iamVjdEZyb21QYWRkaW5nKHBhZGRpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykgOiB7XG4gICAgdG9wOiBwYWRkaW5nLFxuICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICBsZWZ0OiBwYWRkaW5nXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLnJlY3QsXG4gICAgdG9wOiByZWN0LnksXG4gICAgbGVmdDogcmVjdC54LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB3aXRoIGFuIG9iamVjdCBvZiBvdmVyZmxvdyBzaWRlIG9mZnNldHMgdGhhdCBkZXRlcm1pbmUgaG93IG11Y2ggdGhlXG4gKiBlbGVtZW50IGlzIG92ZXJmbG93aW5nIGEgZ2l2ZW4gY2xpcHBpbmcgYm91bmRhcnkgb24gZWFjaCBzaWRlLlxuICogLSBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBib3VuZGFyeSBieSB0aGF0IG51bWJlciBvZiBwaXhlbHNcbiAqIC0gbmVnYXRpdmUgPSBob3cgbWFueSBwaXhlbHMgbGVmdCBiZWZvcmUgaXQgd2lsbCBvdmVyZmxvd1xuICogLSAwID0gbGllcyBmbHVzaCB3aXRoIHRoZSBib3VuZGFyeVxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2RldGVjdE92ZXJmbG93XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBfYXdhaXQkcGxhdGZvcm0kaXNFbGU7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIHgsXG4gICAgeSxcbiAgICBwbGF0Zm9ybSxcbiAgICByZWN0cyxcbiAgICBlbGVtZW50cyxcbiAgICBzdHJhdGVneVxuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHtcbiAgICBib3VuZGFyeSA9ICdjbGlwcGluZ0FuY2VzdG9ycycsXG4gICAgcm9vdEJvdW5kYXJ5ID0gJ3ZpZXdwb3J0JyxcbiAgICBlbGVtZW50Q29udGV4dCA9ICdmbG9hdGluZycsXG4gICAgYWx0Qm91bmRhcnkgPSBmYWxzZSxcbiAgICBwYWRkaW5nID0gMFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGFkZGluZ09iamVjdCA9IGdldFNpZGVPYmplY3RGcm9tUGFkZGluZyhwYWRkaW5nKTtcbiAgY29uc3QgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSAnZmxvYXRpbmcnID8gJ3JlZmVyZW5jZScgOiAnZmxvYXRpbmcnO1xuICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICBjb25zdCBjbGlwcGluZ0NsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KGF3YWl0IHBsYXRmb3JtLmdldENsaXBwaW5nUmVjdCh7XG4gICAgZWxlbWVudDogKChfYXdhaXQkcGxhdGZvcm0kaXNFbGUgPSBhd2FpdCAocGxhdGZvcm0uaXNFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc0VsZW1lbnQoZWxlbWVudCkpKSAhPSBudWxsID8gX2F3YWl0JHBsYXRmb3JtJGlzRWxlIDogdHJ1ZSkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCAoYXdhaXQgKHBsYXRmb3JtLmdldERvY3VtZW50RWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnRzLmZsb2F0aW5nKSkpLFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9KSk7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gJ2Zsb2F0aW5nJyA/IHtcbiAgICAuLi5yZWN0cy5mbG9hdGluZyxcbiAgICB4LFxuICAgIHlcbiAgfSA6IHJlY3RzLnJlZmVyZW5jZTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gYXdhaXQgKHBsYXRmb3JtLmdldE9mZnNldFBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnRzLmZsb2F0aW5nKSk7XG4gIGNvbnN0IG9mZnNldFNjYWxlID0gKGF3YWl0IChwbGF0Zm9ybS5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzRWxlbWVudChvZmZzZXRQYXJlbnQpKSkgPyAoYXdhaXQgKHBsYXRmb3JtLmdldFNjYWxlID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRTY2FsZShvZmZzZXRQYXJlbnQpKSkgfHwge1xuICAgIHg6IDEsXG4gICAgeTogMVxuICB9IDoge1xuICAgIHg6IDEsXG4gICAgeTogMVxuICB9O1xuICBjb25zdCBlbGVtZW50Q2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QocGxhdGZvcm0uY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QgPyBhd2FpdCBwbGF0Zm9ybS5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCh7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSkgOiByZWN0KTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IChjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3ApIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBib3R0b206IChlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20pIC8gb2Zmc2V0U2NhbGUueSxcbiAgICBsZWZ0OiAoY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0KSAvIG9mZnNldFNjYWxlLngsXG4gICAgcmlnaHQ6IChlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHQpIC8gb2Zmc2V0U2NhbGUueFxuICB9O1xufVxuXG5jb25zdCBtaW4kMSA9IE1hdGgubWluO1xuY29uc3QgbWF4JDEgPSBNYXRoLm1heDtcblxuZnVuY3Rpb24gd2l0aGluKG1pbiQxJDEsIHZhbHVlLCBtYXgkMSQxKSB7XG4gIHJldHVybiBtYXgkMShtaW4kMSQxLCBtaW4kMSh2YWx1ZSwgbWF4JDEkMSkpO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gcG9zaXRpb24gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBzbyB0aGF0IGl0XG4gKiBhcHBlYXJzIGNlbnRlcmVkIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hcnJvd1xuICovXG5jb25zdCBhcnJvdyA9IG9wdGlvbnMgPT4gKHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgb3B0aW9ucyxcbiAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAvLyBTaW5jZSBgZWxlbWVudGAgaXMgcmVxdWlyZWQsIHdlIGRvbid0IFBhcnRpYWw8PiB0aGUgdHlwZS5cbiAgICBjb25zdCB7XG4gICAgICBlbGVtZW50LFxuICAgICAgcGFkZGluZyA9IDBcbiAgICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHJlY3RzLFxuICAgICAgcGxhdGZvcm0sXG4gICAgICBlbGVtZW50c1xuICAgIH0gPSBzdGF0ZTtcbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHBhZGRpbmdPYmplY3QgPSBnZXRTaWRlT2JqZWN0RnJvbVBhZGRpbmcocGFkZGluZyk7XG4gICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9O1xuICAgIGNvbnN0IGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGhGcm9tQXhpcyhheGlzKTtcbiAgICBjb25zdCBhcnJvd0RpbWVuc2lvbnMgPSBhd2FpdCBwbGF0Zm9ybS5nZXREaW1lbnNpb25zKGVsZW1lbnQpO1xuICAgIGNvbnN0IGlzWUF4aXMgPSBheGlzID09PSAneSc7XG4gICAgY29uc3QgbWluUHJvcCA9IGlzWUF4aXMgPyAndG9wJyA6ICdsZWZ0JztcbiAgICBjb25zdCBtYXhQcm9wID0gaXNZQXhpcyA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgICBjb25zdCBjbGllbnRQcm9wID0gaXNZQXhpcyA/ICdjbGllbnRIZWlnaHQnIDogJ2NsaWVudFdpZHRoJztcbiAgICBjb25zdCBlbmREaWZmID0gcmVjdHMucmVmZXJlbmNlW2xlbmd0aF0gKyByZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBjb29yZHNbYXhpc10gLSByZWN0cy5mbG9hdGluZ1tsZW5ndGhdO1xuICAgIGNvbnN0IHN0YXJ0RGlmZiA9IGNvb3Jkc1theGlzXSAtIHJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgICBjb25zdCBhcnJvd09mZnNldFBhcmVudCA9IGF3YWl0IChwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmdldE9mZnNldFBhcmVudChlbGVtZW50KSk7XG4gICAgbGV0IGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGFycm93T2Zmc2V0UGFyZW50W2NsaWVudFByb3BdIDogMDtcblxuICAgIC8vIERPTSBwbGF0Zm9ybSBjYW4gcmV0dXJuIGB3aW5kb3dgIGFzIHRoZSBgb2Zmc2V0UGFyZW50YC5cbiAgICBpZiAoIWNsaWVudFNpemUgfHwgIShhd2FpdCAocGxhdGZvcm0uaXNFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc0VsZW1lbnQoYXJyb3dPZmZzZXRQYXJlbnQpKSkpIHtcbiAgICAgIGNsaWVudFNpemUgPSBlbGVtZW50cy5mbG9hdGluZ1tjbGllbnRQcm9wXSB8fCByZWN0cy5mbG9hdGluZ1tsZW5ndGhdO1xuICAgIH1cbiAgICBjb25zdCBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgZmxvYXRpbmcgZWxlbWVudCBpZiB0aGUgY2VudGVyXG4gICAgLy8gcG9pbnQgaXMgb3V0c2lkZSB0aGUgZmxvYXRpbmcgZWxlbWVudCdzIGJvdW5kcy5cbiAgICBjb25zdCBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICAgIGNvbnN0IG1heCA9IGNsaWVudFNpemUgLSBhcnJvd0RpbWVuc2lvbnNbbGVuZ3RoXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gICAgY29uc3QgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd0RpbWVuc2lvbnNbbGVuZ3RoXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgICBjb25zdCBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7XG5cbiAgICAvLyBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsIGVub3VnaCB0aGF0IHRoZSBhcnJvdydzIHBhZGRpbmcgY2F1c2VzIGl0IHRvXG4gICAgLy8gdG8gcG9pbnQgdG8gbm90aGluZyBmb3IgYW4gYWxpZ25lZCBwbGFjZW1lbnQsIGFkanVzdCB0aGUgb2Zmc2V0IG9mIHRoZVxuICAgIC8vIGZsb2F0aW5nIGVsZW1lbnQgaXRzZWxmLiBUaGlzIHN0b3BzIGBzaGlmdCgpYCBmcm9tIHRha2luZyBhY3Rpb24sIGJ1dCBjYW5cbiAgICAvLyBiZSB3b3JrZWQgYXJvdW5kIGJ5IGNhbGxpbmcgaXQgYWdhaW4gYWZ0ZXIgdGhlIGBhcnJvdygpYCBpZiBkZXNpcmVkLlxuICAgIGNvbnN0IHNob3VsZEFkZE9mZnNldCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpICE9IG51bGwgJiYgY2VudGVyICE9IG9mZnNldCAmJiByZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSAvIDIgLSAoY2VudGVyIDwgbWluID8gcGFkZGluZ09iamVjdFttaW5Qcm9wXSA6IHBhZGRpbmdPYmplY3RbbWF4UHJvcF0pIC0gYXJyb3dEaW1lbnNpb25zW2xlbmd0aF0gLyAyIDwgMDtcbiAgICBjb25zdCBhbGlnbm1lbnRPZmZzZXQgPSBzaG91bGRBZGRPZmZzZXQgPyBjZW50ZXIgPCBtaW4gPyBtaW4gLSBjZW50ZXIgOiBtYXggLSBjZW50ZXIgOiAwO1xuICAgIHJldHVybiB7XG4gICAgICBbYXhpc106IGNvb3Jkc1theGlzXSAtIGFsaWdubWVudE9mZnNldCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgW2F4aXNdOiBvZmZzZXQsXG4gICAgICAgIGNlbnRlck9mZnNldDogY2VudGVyIC0gb2Zmc2V0XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IHNpZGVzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcbmNvbnN0IGFsbFBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovc2lkZXMucmVkdWNlKChhY2MsIHNpZGUpID0+IGFjYy5jb25jYXQoc2lkZSwgc2lkZSArIFwiLXN0YXJ0XCIsIHNpZGUgKyBcIi1lbmRcIiksIFtdKTtcblxuY29uc3Qgb3Bwb3NpdGVTaWRlTWFwID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIHNpZGUgPT4gb3Bwb3NpdGVTaWRlTWFwW3NpZGVdKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKSB7XG4gIGlmIChydGwgPT09IHZvaWQgMCkge1xuICAgIHJ0bCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGhGcm9tQXhpcyhtYWluQXhpcyk7XG4gIGxldCBtYWluQWxpZ25tZW50U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBhbGlnbm1lbnQgPT09IChydGwgPyAnZW5kJyA6ICdzdGFydCcpID8gJ3JpZ2h0JyA6ICdsZWZ0JyA6IGFsaWdubWVudCA9PT0gJ3N0YXJ0JyA/ICdib3R0b20nIDogJ3RvcCc7XG4gIGlmIChyZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSA+IHJlY3RzLmZsb2F0aW5nW2xlbmd0aF0pIHtcbiAgICBtYWluQWxpZ25tZW50U2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW5BbGlnbm1lbnRTaWRlLFxuICAgIGNyb3NzOiBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluQWxpZ25tZW50U2lkZSlcbiAgfTtcbn1cblxuY29uc3Qgb3Bwb3NpdGVBbGlnbm1lbnRNYXAgPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGFsaWdubWVudCA9PiBvcHBvc2l0ZUFsaWdubWVudE1hcFthbGlnbm1lbnRdKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50TGlzdChhbGlnbm1lbnQsIGF1dG9BbGlnbm1lbnQsIGFsbG93ZWRQbGFjZW1lbnRzKSB7XG4gIGNvbnN0IGFsbG93ZWRQbGFjZW1lbnRzU29ydGVkQnlBbGlnbm1lbnQgPSBhbGlnbm1lbnQgPyBbLi4uYWxsb3dlZFBsYWNlbWVudHMuZmlsdGVyKHBsYWNlbWVudCA9PiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSA9PT0gYWxpZ25tZW50KSwgLi4uYWxsb3dlZFBsYWNlbWVudHMuZmlsdGVyKHBsYWNlbWVudCA9PiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSAhPT0gYWxpZ25tZW50KV0gOiBhbGxvd2VkUGxhY2VtZW50cy5maWx0ZXIocGxhY2VtZW50ID0+IGdldFNpZGUocGxhY2VtZW50KSA9PT0gcGxhY2VtZW50KTtcbiAgcmV0dXJuIGFsbG93ZWRQbGFjZW1lbnRzU29ydGVkQnlBbGlnbm1lbnQuZmlsdGVyKHBsYWNlbWVudCA9PiB7XG4gICAgaWYgKGFsaWdubWVudCkge1xuICAgICAgcmV0dXJuIGdldEFsaWdubWVudChwbGFjZW1lbnQpID09PSBhbGlnbm1lbnQgfHwgKGF1dG9BbGlnbm1lbnQgPyBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpICE9PSBwbGFjZW1lbnQgOiBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGNob29zaW5nIHRoZSBwbGFjZW1lbnRcbiAqIHRoYXQgaGFzIHRoZSBtb3N0IHNwYWNlIGF2YWlsYWJsZSBhdXRvbWF0aWNhbGx5LCB3aXRob3V0IG5lZWRpbmcgdG8gc3BlY2lmeSBhXG4gKiBwcmVmZXJyZWQgcGxhY2VtZW50LiBBbHRlcm5hdGl2ZSB0byBgZmxpcGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1BsYWNlbWVudFxuICovXG5jb25zdCBhdXRvUGxhY2VtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdhdXRvUGxhY2VtZW50JyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGF1dG9QLCBfbWlkZGxld2FyZURhdGEkYXV0b1AyLCBfcGxhY2VtZW50c1RoYXRGaXRPbkU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJlY3RzLFxuICAgICAgICBtaWRkbGV3YXJlRGF0YSxcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBwbGF0Zm9ybSxcbiAgICAgICAgZWxlbWVudHNcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3Jvc3NBeGlzID0gZmFsc2UsXG4gICAgICAgIGFsaWdubWVudCxcbiAgICAgICAgYWxsb3dlZFBsYWNlbWVudHMgPSBhbGxQbGFjZW1lbnRzLFxuICAgICAgICBhdXRvQWxpZ25tZW50ID0gdHJ1ZSxcbiAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHBsYWNlbWVudHMgPSBhbGlnbm1lbnQgIT09IHVuZGVmaW5lZCB8fCBhbGxvd2VkUGxhY2VtZW50cyA9PT0gYWxsUGxhY2VtZW50cyA/IGdldFBsYWNlbWVudExpc3QoYWxpZ25tZW50IHx8IG51bGwsIGF1dG9BbGlnbm1lbnQsIGFsbG93ZWRQbGFjZW1lbnRzKSA6IGFsbG93ZWRQbGFjZW1lbnRzO1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9ICgoX21pZGRsZXdhcmVEYXRhJGF1dG9QID0gbWlkZGxld2FyZURhdGEuYXV0b1BsYWNlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9taWRkbGV3YXJlRGF0YSRhdXRvUC5pbmRleCkgfHwgMDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2N1cnJlbnRJbmRleF07XG4gICAgICBpZiAoY3VycmVudFBsYWNlbWVudCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFpbixcbiAgICAgICAgY3Jvc3NcbiAgICAgIH0gPSBnZXRBbGlnbm1lbnRTaWRlcyhjdXJyZW50UGxhY2VtZW50LCByZWN0cywgYXdhaXQgKHBsYXRmb3JtLmlzUlRMID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpKTtcblxuICAgICAgLy8gTWFrZSBgY29tcHV0ZUNvb3Jkc2Agc3RhcnQgZnJvbSB0aGUgcmlnaHQgcGxhY2UuXG4gICAgICBpZiAocGxhY2VtZW50ICE9PSBjdXJyZW50UGxhY2VtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50c1swXVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGN1cnJlbnRPdmVyZmxvd3MgPSBbb3ZlcmZsb3dbZ2V0U2lkZShjdXJyZW50UGxhY2VtZW50KV0sIG92ZXJmbG93W21haW5dLCBvdmVyZmxvd1tjcm9zc11dO1xuICAgICAgY29uc3QgYWxsT3ZlcmZsb3dzID0gWy4uLigoKF9taWRkbGV3YXJlRGF0YSRhdXRvUDIgPSBtaWRkbGV3YXJlRGF0YS5hdXRvUGxhY2VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGF1dG9QMi5vdmVyZmxvd3MpIHx8IFtdKSwge1xuICAgICAgICBwbGFjZW1lbnQ6IGN1cnJlbnRQbGFjZW1lbnQsXG4gICAgICAgIG92ZXJmbG93czogY3VycmVudE92ZXJmbG93c1xuICAgICAgfV07XG4gICAgICBjb25zdCBuZXh0UGxhY2VtZW50ID0gcGxhY2VtZW50c1tjdXJyZW50SW5kZXggKyAxXTtcblxuICAgICAgLy8gVGhlcmUgYXJlIG1vcmUgcGxhY2VtZW50cyB0byBjaGVjay5cbiAgICAgIGlmIChuZXh0UGxhY2VtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRJbmRleCArIDEsXG4gICAgICAgICAgICBvdmVyZmxvd3M6IGFsbE92ZXJmbG93c1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgIHBsYWNlbWVudDogbmV4dFBsYWNlbWVudFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBsYWNlbWVudHNTb3J0ZWRCeU1vc3RTcGFjZSA9IGFsbE92ZXJmbG93cy5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChkLnBsYWNlbWVudCk7XG4gICAgICAgIHJldHVybiBbZC5wbGFjZW1lbnQsIGFsaWdubWVudCAmJiBjcm9zc0F4aXMgP1xuICAgICAgICAvLyBDaGVjayBhbG9uZyB0aGUgbWFpbkF4aXMgYW5kIG1haW4gY3Jvc3NBeGlzIHNpZGUuXG4gICAgICAgIGQub3ZlcmZsb3dzLnNsaWNlKDAsIDIpLnJlZHVjZSgoYWNjLCB2KSA9PiBhY2MgKyB2LCAwKSA6XG4gICAgICAgIC8vIENoZWNrIG9ubHkgdGhlIG1haW5BeGlzLlxuICAgICAgICBkLm92ZXJmbG93c1swXSwgZC5vdmVyZmxvd3NdO1xuICAgICAgfSkuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuICAgICAgY29uc3QgcGxhY2VtZW50c1RoYXRGaXRPbkVhY2hTaWRlID0gcGxhY2VtZW50c1NvcnRlZEJ5TW9zdFNwYWNlLmZpbHRlcihkID0+IGRbMl0uc2xpY2UoMCxcbiAgICAgIC8vIEFsaWduZWQgcGxhY2VtZW50cyBzaG91bGQgbm90IGNoZWNrIHRoZWlyIG9wcG9zaXRlIGNyb3NzQXhpc1xuICAgICAgLy8gc2lkZS5cbiAgICAgIGdldEFsaWdubWVudChkWzBdKSA/IDIgOiAzKS5ldmVyeSh2ID0+IHYgPD0gMCkpO1xuICAgICAgY29uc3QgcmVzZXRQbGFjZW1lbnQgPSAoKF9wbGFjZW1lbnRzVGhhdEZpdE9uRSA9IHBsYWNlbWVudHNUaGF0Rml0T25FYWNoU2lkZVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9wbGFjZW1lbnRzVGhhdEZpdE9uRVswXSkgfHwgcGxhY2VtZW50c1NvcnRlZEJ5TW9zdFNwYWNlWzBdWzBdO1xuICAgICAgaWYgKHJlc2V0UGxhY2VtZW50ICE9PSBwbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbmRleDogY3VycmVudEluZGV4ICsgMSxcbiAgICAgICAgICAgIG92ZXJmbG93czogYWxsT3ZlcmZsb3dzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcGxhY2VtZW50OiByZXNldFBsYWNlbWVudFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZFBsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZ2V0U2lkZUxpc3Qoc2lkZSwgaXNTdGFydCwgcnRsKSB7XG4gIGNvbnN0IGxyID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gIGNvbnN0IHJsID0gWydyaWdodCcsICdsZWZ0J107XG4gIGNvbnN0IHRiID0gWyd0b3AnLCAnYm90dG9tJ107XG4gIGNvbnN0IGJ0ID0gWydib3R0b20nLCAndG9wJ107XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIGlmIChydGwpIHJldHVybiBpc1N0YXJ0ID8gcmwgOiBscjtcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gbHIgOiBybDtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gaXNTdGFydCA/IHRiIDogYnQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyhwbGFjZW1lbnQsIGZsaXBBbGlnbm1lbnQsIGRpcmVjdGlvbiwgcnRsKSB7XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBsZXQgbGlzdCA9IGdldFNpZGVMaXN0KGdldFNpZGUocGxhY2VtZW50KSwgZGlyZWN0aW9uID09PSAnc3RhcnQnLCBydGwpO1xuICBpZiAoYWxpZ25tZW50KSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKHNpZGUgPT4gc2lkZSArIFwiLVwiICsgYWxpZ25tZW50KTtcbiAgICBpZiAoZmxpcEFsaWdubWVudCkge1xuICAgICAgbGlzdCA9IGxpc3QuY29uY2F0KGxpc3QubWFwKGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBmbGlwcGluZyB0aGUgYHBsYWNlbWVudGBcbiAqIGluIG9yZGVyIHRvIGtlZXAgaXQgaW4gdmlldyB3aGVuIHRoZSBwcmVmZXJyZWQgcGxhY2VtZW50KHMpIHdpbGwgb3ZlcmZsb3cgdGhlXG4gKiBjbGlwcGluZyBib3VuZGFyeS4gQWx0ZXJuYXRpdmUgdG8gYGF1dG9QbGFjZW1lbnRgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2ZsaXBcbiAqL1xuY29uc3QgZmxpcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnZmxpcCcsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgdmFyIF9taWRkbGV3YXJlRGF0YSRmbGlwO1xuICAgICAgY29uc3Qge1xuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIG1pZGRsZXdhcmVEYXRhLFxuICAgICAgICByZWN0cyxcbiAgICAgICAgaW5pdGlhbFBsYWNlbWVudCxcbiAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgIGVsZW1lbnRzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1haW5BeGlzOiBjaGVja01haW5BeGlzID0gdHJ1ZSxcbiAgICAgICAgY3Jvc3NBeGlzOiBjaGVja0Nyb3NzQXhpcyA9IHRydWUsXG4gICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBmYWxsYmFja1N0cmF0ZWd5ID0gJ2Jlc3RGaXQnLFxuICAgICAgICBmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uID0gJ25vbmUnLFxuICAgICAgICBmbGlwQWxpZ25tZW50ID0gdHJ1ZSxcbiAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zXG4gICAgICB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHNpZGUgPSBnZXRTaWRlKHBsYWNlbWVudCk7XG4gICAgICBjb25zdCBpc0Jhc2VQbGFjZW1lbnQgPSBnZXRTaWRlKGluaXRpYWxQbGFjZW1lbnQpID09PSBpbml0aWFsUGxhY2VtZW50O1xuICAgICAgY29uc3QgcnRsID0gYXdhaXQgKHBsYXRmb3JtLmlzUlRMID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpO1xuICAgICAgY29uc3QgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBBbGlnbm1lbnQgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoaW5pdGlhbFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRQbGFjZW1lbnRzKGluaXRpYWxQbGFjZW1lbnQpKTtcbiAgICAgIGlmICghc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzICYmIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24gIT09ICdub25lJykge1xuICAgICAgICBmYWxsYmFja1BsYWNlbWVudHMucHVzaCguLi5nZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzKGluaXRpYWxQbGFjZW1lbnQsIGZsaXBBbGlnbm1lbnQsIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24sIHJ0bCkpO1xuICAgICAgfVxuICAgICAgY29uc3QgcGxhY2VtZW50cyA9IFtpbml0aWFsUGxhY2VtZW50LCAuLi5mYWxsYmFja1BsYWNlbWVudHNdO1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IG92ZXJmbG93cyA9IFtdO1xuICAgICAgbGV0IG92ZXJmbG93c0RhdGEgPSAoKF9taWRkbGV3YXJlRGF0YSRmbGlwID0gbWlkZGxld2FyZURhdGEuZmxpcCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9taWRkbGV3YXJlRGF0YSRmbGlwLm92ZXJmbG93cykgfHwgW107XG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBvdmVyZmxvd3MucHVzaChvdmVyZmxvd1tzaWRlXSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tDcm9zc0F4aXMpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG1haW4sXG4gICAgICAgICAgY3Jvc3NcbiAgICAgICAgfSA9IGdldEFsaWdubWVudFNpZGVzKHBsYWNlbWVudCwgcmVjdHMsIHJ0bCk7XG4gICAgICAgIG92ZXJmbG93cy5wdXNoKG92ZXJmbG93W21haW5dLCBvdmVyZmxvd1tjcm9zc10pO1xuICAgICAgfVxuICAgICAgb3ZlcmZsb3dzRGF0YSA9IFsuLi5vdmVyZmxvd3NEYXRhLCB7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgb3ZlcmZsb3dzXG4gICAgICB9XTtcblxuICAgICAgLy8gT25lIG9yIG1vcmUgc2lkZXMgaXMgb3ZlcmZsb3dpbmcuXG4gICAgICBpZiAoIW92ZXJmbG93cy5ldmVyeShzaWRlID0+IHNpZGUgPD0gMCkpIHtcbiAgICAgICAgdmFyIF9taWRkbGV3YXJlRGF0YSRmbGlwMiwgX292ZXJmbG93c0RhdGEkZmlsdGVyO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoKChfbWlkZGxld2FyZURhdGEkZmxpcDIgPSBtaWRkbGV3YXJlRGF0YS5mbGlwKSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGZsaXAyLmluZGV4KSB8fCAwKSArIDE7XG4gICAgICAgIGNvbnN0IG5leHRQbGFjZW1lbnQgPSBwbGFjZW1lbnRzW25leHRJbmRleF07XG4gICAgICAgIGlmIChuZXh0UGxhY2VtZW50KSB7XG4gICAgICAgICAgLy8gVHJ5IG5leHQgcGxhY2VtZW50IGFuZCByZS1ydW4gdGhlIGxpZmVjeWNsZS5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICAgICAgICBvdmVyZmxvd3M6IG92ZXJmbG93c0RhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgICBwbGFjZW1lbnQ6IG5leHRQbGFjZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyc3QsIGZpbmQgdGhlIGNhbmRpZGF0ZXMgdGhhdCBmaXQgb24gdGhlIG1haW5BeGlzIHNpZGUgb2Ygb3ZlcmZsb3csXG4gICAgICAgIC8vIHRoZW4gZmluZCB0aGUgcGxhY2VtZW50IHRoYXQgZml0cyB0aGUgYmVzdCBvbiB0aGUgbWFpbiBjcm9zc0F4aXMgc2lkZS5cbiAgICAgICAgbGV0IHJlc2V0UGxhY2VtZW50ID0gKF9vdmVyZmxvd3NEYXRhJGZpbHRlciA9IG92ZXJmbG93c0RhdGEuZmlsdGVyKGQgPT4gZC5vdmVyZmxvd3NbMF0gPD0gMCkuc29ydCgoYSwgYikgPT4gYS5vdmVyZmxvd3NbMV0gLSBiLm92ZXJmbG93c1sxXSlbMF0pID09IG51bGwgPyB2b2lkIDAgOiBfb3ZlcmZsb3dzRGF0YSRmaWx0ZXIucGxhY2VtZW50O1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSBmYWxsYmFjay5cbiAgICAgICAgaWYgKCFyZXNldFBsYWNlbWVudCkge1xuICAgICAgICAgIHN3aXRjaCAoZmFsbGJhY2tTdHJhdGVneSkge1xuICAgICAgICAgICAgY2FzZSAnYmVzdEZpdCc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgX292ZXJmbG93c0RhdGEkbWFwJHNvO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IChfb3ZlcmZsb3dzRGF0YSRtYXAkc28gPSBvdmVyZmxvd3NEYXRhLm1hcChkID0+IFtkLnBsYWNlbWVudCwgZC5vdmVyZmxvd3MuZmlsdGVyKG92ZXJmbG93ID0+IG92ZXJmbG93ID4gMCkucmVkdWNlKChhY2MsIG92ZXJmbG93KSA9PiBhY2MgKyBvdmVyZmxvdywgMCldKS5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSlbMF0pID09IG51bGwgPyB2b2lkIDAgOiBfb3ZlcmZsb3dzRGF0YSRtYXAkc29bMF07XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmVzZXRQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdpbml0aWFsUGxhY2VtZW50JzpcbiAgICAgICAgICAgICAgcmVzZXRQbGFjZW1lbnQgPSBpbml0aWFsUGxhY2VtZW50O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlbWVudCAhPT0gcmVzZXRQbGFjZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgICAgcGxhY2VtZW50OiByZXNldFBsYWNlbWVudFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQsXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoXG4gIH07XG59XG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIHNpZGVzLnNvbWUoc2lkZSA9PiBvdmVyZmxvd1tzaWRlXSA+PSAwKTtcbn1cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBoaWRlIHRoZSBmbG9hdGluZyBlbGVtZW50IGluIGFwcGxpY2FibGUgc2l0dWF0aW9ucywgc3VjaCBhc1xuICogd2hlbiBpdCBpcyBub3QgaW4gdGhlIHNhbWUgY2xpcHBpbmcgY29udGV4dCBhcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvaGlkZVxuICovXG5jb25zdCBoaWRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdoaWRlJyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHN0cmF0ZWd5ID0gJ3JlZmVyZW5jZUhpZGRlbicsXG4gICAgICAgIC4uLmRldGVjdE92ZXJmbG93T3B0aW9uc1xuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJlY3RzXG4gICAgICB9ID0gc3RhdGU7XG4gICAgICBzd2l0Y2ggKHN0cmF0ZWd5KSB7XG4gICAgICAgIGNhc2UgJ3JlZmVyZW5jZUhpZGRlbic6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnMsXG4gICAgICAgICAgICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3RzLnJlZmVyZW5jZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlSGlkZGVuT2Zmc2V0czogb2Zmc2V0cyxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VIaWRkZW46IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvZmZzZXRzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZXNjYXBlZCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnMsXG4gICAgICAgICAgICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdHMuZmxvYXRpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGVzY2FwZWRPZmZzZXRzOiBvZmZzZXRzLFxuICAgICAgICAgICAgICAgIGVzY2FwZWQ6IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvZmZzZXRzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZVRvQ29vcmRzKHN0YXRlLCB2YWx1ZSkge1xuICBjb25zdCB7XG4gICAgcGxhY2VtZW50LFxuICAgIHBsYXRmb3JtLFxuICAgIGVsZW1lbnRzXG4gIH0gPSBzdGF0ZTtcbiAgY29uc3QgcnRsID0gYXdhaXQgKHBsYXRmb3JtLmlzUlRMID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5pc1JUTChlbGVtZW50cy5mbG9hdGluZykpO1xuICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnQgPSBnZXRBbGlnbm1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpID09PSAneCc7XG4gIGNvbnN0IG1haW5BeGlzTXVsdGkgPSBbJ2xlZnQnLCAndG9wJ10uaW5jbHVkZXMoc2lkZSkgPyAtMSA6IDE7XG4gIGNvbnN0IGNyb3NzQXhpc011bHRpID0gcnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDE7XG4gIGNvbnN0IHJhd1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoc3RhdGUpIDogdmFsdWU7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICBsZXQge1xuICAgIG1haW5BeGlzLFxuICAgIGNyb3NzQXhpcyxcbiAgICBhbGlnbm1lbnRBeGlzXG4gIH0gPSB0eXBlb2YgcmF3VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiByYXdWYWx1ZSxcbiAgICBjcm9zc0F4aXM6IDAsXG4gICAgYWxpZ25tZW50QXhpczogbnVsbFxuICB9IDoge1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGNyb3NzQXhpczogMCxcbiAgICBhbGlnbm1lbnRBeGlzOiBudWxsLFxuICAgIC4uLnJhd1ZhbHVlXG4gIH07XG4gIGlmIChhbGlnbm1lbnQgJiYgdHlwZW9mIGFsaWdubWVudEF4aXMgPT09ICdudW1iZXInKSB7XG4gICAgY3Jvc3NBeGlzID0gYWxpZ25tZW50ID09PSAnZW5kJyA/IGFsaWdubWVudEF4aXMgKiAtMSA6IGFsaWdubWVudEF4aXM7XG4gIH1cbiAgcmV0dXJuIGlzVmVydGljYWwgPyB7XG4gICAgeDogY3Jvc3NBeGlzICogY3Jvc3NBeGlzTXVsdGksXG4gICAgeTogbWFpbkF4aXMgKiBtYWluQXhpc011bHRpXG4gIH0gOiB7XG4gICAgeDogbWFpbkF4aXMgKiBtYWluQXhpc011bHRpLFxuICAgIHk6IGNyb3NzQXhpcyAqIGNyb3NzQXhpc011bHRpXG4gIH07XG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHBsYWNlbWVudCBieSB0cmFuc2xhdGluZyB0aGUgZmxvYXRpbmcgZWxlbWVudCBhbG9uZyB0aGVcbiAqIHNwZWNpZmllZCBheGVzLlxuICogQSBudW1iZXIgKHNob3J0aGFuZCBmb3IgYG1haW5BeGlzYCBvciBkaXN0YW5jZSksIG9yIGFuIGF4ZXMgY29uZmlndXJhdGlvblxuICogb2JqZWN0IG1heSBiZSBwYXNzZWQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvb2Zmc2V0XG4gKi9cbmNvbnN0IG9mZnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHZhbHVlID0gMDtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgIG9wdGlvbnM6IHZhbHVlLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IGRpZmZDb29yZHMgPSBhd2FpdCBjb252ZXJ0VmFsdWVUb0Nvb3JkcyhzdGF0ZSwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCArIGRpZmZDb29yZHMueCxcbiAgICAgICAgeTogeSArIGRpZmZDb29yZHMueSxcbiAgICAgICAgZGF0YTogZGlmZkNvb3Jkc1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRDcm9zc0F4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBzaGlmdGluZyBpdCBpbiBvcmRlciB0b1xuICoga2VlcCBpdCBpbiB2aWV3IHdoZW4gaXQgd2lsbCBvdmVyZmxvdyB0aGUgY2xpcHBpbmcgYm91bmRhcnkuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2hpZnRcbiAqL1xuY29uc3Qgc2hpZnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3NoaWZ0JyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHBsYWNlbWVudFxuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYWluQXhpczogY2hlY2tNYWluQXhpcyA9IHRydWUsXG4gICAgICAgIGNyb3NzQXhpczogY2hlY2tDcm9zc0F4aXMgPSBmYWxzZSxcbiAgICAgICAgbGltaXRlciA9IHtcbiAgICAgICAgICBmbjogX3JlZiA9PiB7XG4gICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICB5XG4gICAgICAgICAgICB9ID0gX3JlZjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIHlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnNcbiAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9O1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGdldFNpZGUocGxhY2VtZW50KSk7XG4gICAgICBjb25zdCBjcm9zc0F4aXMgPSBnZXRDcm9zc0F4aXMobWFpbkF4aXMpO1xuICAgICAgbGV0IG1haW5BeGlzQ29vcmQgPSBjb29yZHNbbWFpbkF4aXNdO1xuICAgICAgbGV0IGNyb3NzQXhpc0Nvb3JkID0gY29vcmRzW2Nyb3NzQXhpc107XG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBjb25zdCBtaW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgICAgICBjb25zdCBtYXhTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgbWluID0gbWFpbkF4aXNDb29yZCArIG92ZXJmbG93W21pblNpZGVdO1xuICAgICAgICBjb25zdCBtYXggPSBtYWluQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIG1haW5BeGlzQ29vcmQgPSB3aXRoaW4obWluLCBtYWluQXhpc0Nvb3JkLCBtYXgpO1xuICAgICAgfVxuICAgICAgaWYgKGNoZWNrQ3Jvc3NBeGlzKSB7XG4gICAgICAgIGNvbnN0IG1pblNpZGUgPSBjcm9zc0F4aXMgPT09ICd5JyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgICAgICBjb25zdCBtYXhTaWRlID0gY3Jvc3NBeGlzID09PSAneScgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IG1pbiA9IGNyb3NzQXhpc0Nvb3JkICsgb3ZlcmZsb3dbbWluU2lkZV07XG4gICAgICAgIGNvbnN0IG1heCA9IGNyb3NzQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIGNyb3NzQXhpc0Nvb3JkID0gd2l0aGluKG1pbiwgY3Jvc3NBeGlzQ29vcmQsIG1heCk7XG4gICAgICB9XG4gICAgICBjb25zdCBsaW1pdGVkQ29vcmRzID0gbGltaXRlci5mbih7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbbWFpbkF4aXNdOiBtYWluQXhpc0Nvb3JkLFxuICAgICAgICBbY3Jvc3NBeGlzXTogY3Jvc3NBeGlzQ29vcmRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubGltaXRlZENvb3JkcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHg6IGxpbWl0ZWRDb29yZHMueCAtIHgsXG4gICAgICAgICAgeTogbGltaXRlZENvb3Jkcy55IC0geVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICByZXR1cm4gKChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX25vZGUkb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgfHwgd2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLk5vZGU7XG59XG5mdW5jdGlvbiBnZXROb2RlTmFtZShub2RlKSB7XG4gIHJldHVybiBpc05vZGUobm9kZSkgPyAobm9kZS5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuSFRNTEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5FbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gQnJvd3NlcnMgd2l0aG91dCBgU2hhZG93Um9vdGAgc3VwcG9ydC5cbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cbmZ1bmN0aW9uIGlzT3ZlcmZsb3dFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3Qge1xuICAgIG92ZXJmbG93LFxuICAgIG92ZXJmbG93WCxcbiAgICBvdmVyZmxvd1ksXG4gICAgZGlzcGxheVxuICB9ID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpO1xuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVufGNsaXAvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpICYmICFbJ2lubGluZScsICdjb250ZW50cyddLmluY2x1ZGVzKGRpc3BsYXkpO1xufVxuZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKGVsZW1lbnQpKTtcbn1cbmZ1bmN0aW9uIGlzQ29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgY29uc3Qgc2FmYXJpID0gaXNTYWZhcmkoKTtcbiAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpO1xuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG4gIHJldHVybiBjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgIXNhZmFyaSAmJiAoY3NzLmJhY2tkcm9wRmlsdGVyID8gY3NzLmJhY2tkcm9wRmlsdGVyICE9PSAnbm9uZScgOiBmYWxzZSkgfHwgIXNhZmFyaSAmJiAoY3NzLmZpbHRlciA/IGNzcy5maWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZScsICdmaWx0ZXInXS5zb21lKHZhbHVlID0+IChjc3Mud2lsbENoYW5nZSB8fCAnJykuaW5jbHVkZXModmFsdWUpKSB8fCBbJ3BhaW50JywgJ2xheW91dCcsICdzdHJpY3QnLCAnY29udGVudCddLnNvbWUodmFsdWUgPT4gKGNzcy5jb250YWluIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gIGlmICh0eXBlb2YgQ1NTID09PSAndW5kZWZpbmVkJyB8fCAhQ1NTLnN1cHBvcnRzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBDU1Muc3VwcG9ydHMoJy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyJywgJ25vbmUnKTtcbn1cbmZ1bmN0aW9uIGlzTGFzdFRyYXZlcnNhYmxlTm9kZShub2RlKSB7XG4gIHJldHVybiBbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmNsdWRlcyhnZXROb2RlTmFtZShub2RlKSk7XG59XG5cbmNvbnN0IG1pbiA9IE1hdGgubWluO1xuY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCByb3VuZCA9IE1hdGgucm91bmQ7XG5cbmZ1bmN0aW9uIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCkge1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG4gIC8vIEluIHRlc3RpbmcgZW52aXJvbm1lbnRzLCB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgcHJvcGVydGllcyBhcmUgZW1wdHlcbiAgLy8gc3RyaW5ncyBmb3IgU1ZHIGVsZW1lbnRzLCByZXR1cm5pbmcgTmFOLiBGYWxsYmFjayB0byBgMGAgaW4gdGhpcyBjYXNlLlxuICBsZXQgd2lkdGggPSBwYXJzZUZsb2F0KGNzcy53aWR0aCkgfHwgMDtcbiAgbGV0IGhlaWdodCA9IHBhcnNlRmxvYXQoY3NzLmhlaWdodCkgfHwgMDtcbiAgY29uc3QgaGFzT2Zmc2V0ID0gaXNIVE1MRWxlbWVudChlbGVtZW50KTtcbiAgY29uc3Qgb2Zmc2V0V2lkdGggPSBoYXNPZmZzZXQgPyBlbGVtZW50Lm9mZnNldFdpZHRoIDogd2lkdGg7XG4gIGNvbnN0IG9mZnNldEhlaWdodCA9IGhhc09mZnNldCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogaGVpZ2h0O1xuICBjb25zdCBzaG91bGRGYWxsYmFjayA9IHJvdW5kKHdpZHRoKSAhPT0gb2Zmc2V0V2lkdGggfHwgcm91bmQoaGVpZ2h0KSAhPT0gb2Zmc2V0SGVpZ2h0O1xuICBpZiAoc2hvdWxkRmFsbGJhY2spIHtcbiAgICB3aWR0aCA9IG9mZnNldFdpZHRoO1xuICAgIGhlaWdodCA9IG9mZnNldEhlaWdodDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBmYWxsYmFjazogc2hvdWxkRmFsbGJhY2tcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW53cmFwRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiAhaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5jb250ZXh0RWxlbWVudCA6IGVsZW1lbnQ7XG59XG5cbmNvbnN0IEZBTExCQUNLX1NDQUxFID0ge1xuICB4OiAxLFxuICB5OiAxXG59O1xuZnVuY3Rpb24gZ2V0U2NhbGUoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGRvbUVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIEZBTExCQUNLX1NDQUxFO1xuICB9XG4gIGNvbnN0IHJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGZhbGxiYWNrXG4gIH0gPSBnZXRDc3NEaW1lbnNpb25zKGRvbUVsZW1lbnQpO1xuICBsZXQgeCA9IChmYWxsYmFjayA/IHJvdW5kKHJlY3Qud2lkdGgpIDogcmVjdC53aWR0aCkgLyB3aWR0aDtcbiAgbGV0IHkgPSAoZmFsbGJhY2sgPyByb3VuZChyZWN0LmhlaWdodCkgOiByZWN0LmhlaWdodCkgLyBoZWlnaHQ7XG5cbiAgLy8gMCwgTmFOLCBvciBJbmZpbml0eSBzaG91bGQgYWx3YXlzIGZhbGxiYWNrIHRvIDEuXG5cbiAgaWYgKCF4IHx8ICFOdW1iZXIuaXNGaW5pdGUoeCkpIHtcbiAgICB4ID0gMTtcbiAgfVxuICBpZiAoIXkgfHwgIU51bWJlci5pc0Zpbml0ZSh5KSkge1xuICAgIHkgPSAxO1xuICB9XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmNvbnN0IG5vT2Zmc2V0cyA9IHtcbiAgeDogMCxcbiAgeTogMFxufTtcbmZ1bmN0aW9uIGdldFZpc3VhbE9mZnNldHMoZWxlbWVudCwgaXNGaXhlZCwgZmxvYXRpbmdPZmZzZXRQYXJlbnQpIHtcbiAgdmFyIF93aW4kdmlzdWFsVmlld3BvcnQsIF93aW4kdmlzdWFsVmlld3BvcnQyO1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IHRydWU7XG4gIH1cbiAgaWYgKCFpc1NhZmFyaSgpKSB7XG4gICAgcmV0dXJuIG5vT2Zmc2V0cztcbiAgfVxuICBjb25zdCB3aW4gPSBlbGVtZW50ID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93O1xuICBpZiAoIWZsb2F0aW5nT2Zmc2V0UGFyZW50IHx8IGlzRml4ZWQgJiYgZmxvYXRpbmdPZmZzZXRQYXJlbnQgIT09IHdpbikge1xuICAgIHJldHVybiBub09mZnNldHM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiAoKF93aW4kdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQpID09IG51bGwgPyB2b2lkIDAgOiBfd2luJHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQpIHx8IDAsXG4gICAgeTogKChfd2luJHZpc3VhbFZpZXdwb3J0MiA9IHdpbi52aXN1YWxWaWV3cG9ydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW4kdmlzdWFsVmlld3BvcnQyLm9mZnNldFRvcCkgfHwgMFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlLCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZG9tRWxlbWVudCA9IHVud3JhcEVsZW1lbnQoZWxlbWVudCk7XG4gIGxldCBzY2FsZSA9IEZBTExCQUNLX1NDQUxFO1xuICBpZiAoaW5jbHVkZVNjYWxlKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudCkge1xuICAgICAgaWYgKGlzRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdmlzdWFsT2Zmc2V0cyA9IGdldFZpc3VhbE9mZnNldHMoZG9tRWxlbWVudCwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpO1xuICBsZXQgeCA9IChjbGllbnRSZWN0LmxlZnQgKyB2aXN1YWxPZmZzZXRzLngpIC8gc2NhbGUueDtcbiAgbGV0IHkgPSAoY2xpZW50UmVjdC50b3AgKyB2aXN1YWxPZmZzZXRzLnkpIC8gc2NhbGUueTtcbiAgbGV0IHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlLng7XG4gIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlLnk7XG4gIGlmIChkb21FbGVtZW50KSB7XG4gICAgY29uc3Qgd2luID0gZ2V0V2luZG93KGRvbUVsZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldFdpbiA9IG9mZnNldFBhcmVudCAmJiBpc0VsZW1lbnQob2Zmc2V0UGFyZW50KSA/IGdldFdpbmRvdyhvZmZzZXRQYXJlbnQpIDogb2Zmc2V0UGFyZW50O1xuICAgIGxldCBjdXJyZW50SUZyYW1lID0gd2luLmZyYW1lRWxlbWVudDtcbiAgICB3aGlsZSAoY3VycmVudElGcmFtZSAmJiBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0V2luICE9PSB3aW4pIHtcbiAgICAgIGNvbnN0IGlmcmFtZVNjYWxlID0gZ2V0U2NhbGUoY3VycmVudElGcmFtZSk7XG4gICAgICBjb25zdCBpZnJhbWVSZWN0ID0gY3VycmVudElGcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudElGcmFtZSk7XG4gICAgICBpZnJhbWVSZWN0LnggKz0gKGN1cnJlbnRJRnJhbWUuY2xpZW50TGVmdCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdMZWZ0KSkgKiBpZnJhbWVTY2FsZS54O1xuICAgICAgaWZyYW1lUmVjdC55ICs9IChjdXJyZW50SUZyYW1lLmNsaWVudFRvcCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdUb3ApKSAqIGlmcmFtZVNjYWxlLnk7XG4gICAgICB4ICo9IGlmcmFtZVNjYWxlLng7XG4gICAgICB5ICo9IGlmcmFtZVNjYWxlLnk7XG4gICAgICB3aWR0aCAqPSBpZnJhbWVTY2FsZS54O1xuICAgICAgaGVpZ2h0ICo9IGlmcmFtZVNjYWxlLnk7XG4gICAgICB4ICs9IGlmcmFtZVJlY3QueDtcbiAgICAgIHkgKz0gaWZyYW1lUmVjdC55O1xuICAgICAgY3VycmVudElGcmFtZSA9IGdldFdpbmRvdyhjdXJyZW50SUZyYW1lKS5mcmFtZUVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQobm9kZSkge1xuICByZXR1cm4gKChpc05vZGUobm9kZSkgPyBub2RlLm93bmVyRG9jdW1lbnQgOiBub2RlLmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChlbGVtZW50KSB7XG4gIGlmIChpc0VsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnBhZ2VYT2Zmc2V0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5wYWdlWU9mZnNldFxuICB9O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdChfcmVmKSB7XG4gIGxldCB7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBsZXQgc2NhbGUgPSB7XG4gICAgeDogMSxcbiAgICB5OiAxXG4gIH07XG4gIGNvbnN0IG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgc3RyYXRlZ3kgIT09ICdmaXhlZCcpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ID0gb2Zmc2V0UmVjdC54ICsgb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgPSBvZmZzZXRSZWN0LnkgKyBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoICogc2NhbGUueCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICogc2NhbGUueSxcbiAgICB4OiByZWN0LnggKiBzY2FsZS54IC0gc2Nyb2xsLnNjcm9sbExlZnQgKiBzY2FsZS54ICsgb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QueSAqIHNjYWxlLnkgLSBzY3JvbGwuc2Nyb2xsVG9wICogc2NhbGUueSArIG9mZnNldHMueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59XG5cbi8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGUuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpO1xuICBjb25zdCBib2R5ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkuc2Nyb2xsV2lkdGgsIGJvZHkuY2xpZW50V2lkdGgpO1xuICBjb25zdCBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5jbGllbnRIZWlnaHQpO1xuICBsZXQgeCA9IC1zY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIGNvbnN0IHkgPSAtc2Nyb2xsLnNjcm9sbFRvcDtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUkMShib2R5KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keS5jbGllbnRXaWR0aCkgLSB3aWR0aDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIGlmIChnZXROb2RlTmFtZShub2RlKSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID1cbiAgLy8gU3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGUuXG4gIG5vZGUuYXNzaWduZWRTbG90IHx8XG4gIC8vIERPTSBFbGVtZW50IGRldGVjdGVkLlxuICBub2RlLnBhcmVudE5vZGUgfHxcbiAgLy8gU2hhZG93Um9vdCBkZXRlY3RlZC5cbiAgaXNTaGFkb3dSb290KG5vZGUpICYmIG5vZGUuaG9zdCB8fFxuICAvLyBGYWxsYmFjay5cbiAgZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpO1xuICByZXR1cm4gaXNTaGFkb3dSb290KHJlc3VsdCkgPyByZXN1bHQuaG9zdCA6IHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3Iobm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgaWYgKGlzTGFzdFRyYXZlcnNhYmxlTm9kZShwYXJlbnROb2RlKSkge1xuICAgIC8vIGBnZXRQYXJlbnROb2RlYCB3aWxsIG5ldmVyIHJldHVybiBhIGBEb2N1bWVudGAgZHVlIHRvIHRoZSBmYWxsYmFja1xuICAgIC8vIGNoZWNrLCBzbyBpdCdzIGVpdGhlciB0aGUgPGh0bWw+IG9yIDxib2R5PiBlbGVtZW50LlxuICAgIHJldHVybiBwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuICBpZiAoaXNIVE1MRWxlbWVudChwYXJlbnROb2RlKSAmJiBpc092ZXJmbG93RWxlbWVudChwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvcihwYXJlbnROb2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMobm9kZSwgbGlzdCkge1xuICB2YXIgX25vZGUkb3duZXJEb2N1bWVudDtcbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3IgPSBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKTtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsYWJsZUFuY2VzdG9yID09PSAoKF9ub2RlJG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbm9kZSRvd25lckRvY3VtZW50LmJvZHkpO1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsYWJsZUFuY2VzdG9yKTtcbiAgaWYgKGlzQm9keSkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCh3aW4sIHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNPdmVyZmxvd0VsZW1lbnQoc2Nyb2xsYWJsZUFuY2VzdG9yKSA/IHNjcm9sbGFibGVBbmNlc3RvciA6IFtdKTtcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoc2Nyb2xsYWJsZUFuY2VzdG9yLCBnZXRPdmVyZmxvd0FuY2VzdG9ycyhzY3JvbGxhYmxlQW5jZXN0b3IpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgY29uc3QgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIGxldCB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGNvbnN0IHZpc3VhbFZpZXdwb3J0QmFzZWQgPSBpc1NhZmFyaSgpO1xuICAgIGlmICghdmlzdWFsVmlld3BvcnRCYXNlZCB8fCB2aXN1YWxWaWV3cG9ydEJhc2VkICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG4vLyBSZXR1cm5zIHRoZSBpbm5lciBjbGllbnQgcmVjdCwgc3VidHJhY3Rpbmcgc2Nyb2xsYmFycyBpZiBwcmVzZW50LlxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3QgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCB0cnVlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG4gIGNvbnN0IHRvcCA9IGNsaWVudFJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIGNvbnN0IGxlZnQgPSBjbGllbnRSZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIGNvbnN0IHNjYWxlID0gaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldFNjYWxlKGVsZW1lbnQpIDoge1xuICAgIHg6IDEsXG4gICAgeTogMVxuICB9O1xuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY2FsZS54O1xuICBjb25zdCBoZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjYWxlLnk7XG4gIGNvbnN0IHggPSBsZWZ0ICogc2NhbGUueDtcbiAgY29uc3QgeSA9IHRvcCAqIHNjYWxlLnk7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21DbGlwcGluZ0FuY2VzdG9yKGVsZW1lbnQsIGNsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSB7XG4gIGxldCByZWN0O1xuICBpZiAoY2xpcHBpbmdBbmNlc3RvciA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgIHJlY3QgPSBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpO1xuICB9IGVsc2UgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09ICdkb2N1bWVudCcpIHtcbiAgICByZWN0ID0gZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSk7XG4gIH0gZWxzZSBpZiAoaXNFbGVtZW50KGNsaXBwaW5nQW5jZXN0b3IpKSB7XG4gICAgcmVjdCA9IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2aXN1YWxPZmZzZXRzID0gZ2V0VmlzdWFsT2Zmc2V0cyhlbGVtZW50KTtcbiAgICByZWN0ID0ge1xuICAgICAgLi4uY2xpcHBpbmdBbmNlc3RvcixcbiAgICAgIHg6IGNsaXBwaW5nQW5jZXN0b3IueCAtIHZpc3VhbE9mZnNldHMueCxcbiAgICAgIHk6IGNsaXBwaW5nQW5jZXN0b3IueSAtIHZpc3VhbE9mZnNldHMueVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3QocmVjdCk7XG59XG5mdW5jdGlvbiBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IoZWxlbWVudCwgc3RvcE5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmIChwYXJlbnROb2RlID09PSBzdG9wTm9kZSB8fCAhaXNFbGVtZW50KHBhcmVudE5vZGUpIHx8IGlzTGFzdFRyYXZlcnNhYmxlTm9kZShwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSQxKHBhcmVudE5vZGUpLnBvc2l0aW9uID09PSAnZml4ZWQnIHx8IGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihwYXJlbnROb2RlLCBzdG9wTm9kZSk7XG59XG5cbi8vIEEgXCJjbGlwcGluZyBhbmNlc3RvclwiIGlzIGFuIGBvdmVyZmxvd2AgZWxlbWVudCB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgY2hpbGQgZWxlbWVudHMuIFRoaXMgcmV0dXJucyBhbGwgY2xpcHBpbmcgYW5jZXN0b3JzXG4vLyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCB1cCB0aGUgdHJlZS5cbmZ1bmN0aW9uIGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCBjYWNoZSkge1xuICBjb25zdCBjYWNoZWRSZXN1bHQgPSBjYWNoZS5nZXQoZWxlbWVudCk7XG4gIGlmIChjYWNoZWRSZXN1bHQpIHtcbiAgICByZXR1cm4gY2FjaGVkUmVzdWx0O1xuICB9XG4gIGxldCByZXN1bHQgPSBnZXRPdmVyZmxvd0FuY2VzdG9ycyhlbGVtZW50KS5maWx0ZXIoZWwgPT4gaXNFbGVtZW50KGVsKSAmJiBnZXROb2RlTmFtZShlbCkgIT09ICdib2R5Jyk7XG4gIGxldCBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gIGNvbnN0IGVsZW1lbnRJc0ZpeGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnO1xuICBsZXQgY3VycmVudE5vZGUgPSBlbGVtZW50SXNGaXhlZCA/IGdldFBhcmVudE5vZGUoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG4gIHdoaWxlIChpc0VsZW1lbnQoY3VycmVudE5vZGUpICYmICFpc0xhc3RUcmF2ZXJzYWJsZU5vZGUoY3VycmVudE5vZGUpKSB7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUkMShjdXJyZW50Tm9kZSk7XG4gICAgY29uc3QgY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgPSBpc0NvbnRhaW5pbmdCbG9jayhjdXJyZW50Tm9kZSk7XG4gICAgaWYgKCFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZERyb3BDdXJyZW50Tm9kZSA9IGVsZW1lbnRJc0ZpeGVkID8gIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmICFjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA6ICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBjb21wdXRlZFN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJyAmJiAhIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlICYmIFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmNsdWRlcyhjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZS5wb3NpdGlvbikgfHwgaXNPdmVyZmxvd0VsZW1lbnQoY3VycmVudE5vZGUpICYmICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IoZWxlbWVudCwgY3VycmVudE5vZGUpO1xuICAgIGlmIChzaG91bGREcm9wQ3VycmVudE5vZGUpIHtcbiAgICAgIC8vIERyb3Agbm9uLWNvbnRhaW5pbmcgYmxvY2tzLlxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihhbmNlc3RvciA9PiBhbmNlc3RvciAhPT0gY3VycmVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWNvcmQgbGFzdCBjb250YWluaW5nIGJsb2NrIGZvciBuZXh0IGl0ZXJhdGlvbi5cbiAgICAgIGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZTtcbiAgICB9XG4gICAgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKTtcbiAgfVxuICBjYWNoZS5zZXQoZWxlbWVudCwgcmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgYW5jZXN0b3JzLlxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50LFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ0FuY2VzdG9ycycgPyBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnMoZWxlbWVudCwgdGhpcy5fYykgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICBjb25zdCBjbGlwcGluZ0FuY2VzdG9ycyA9IFsuLi5lbGVtZW50Q2xpcHBpbmdBbmNlc3RvcnMsIHJvb3RCb3VuZGFyeV07XG4gIGNvbnN0IGZpcnN0Q2xpcHBpbmdBbmNlc3RvciA9IGNsaXBwaW5nQW5jZXN0b3JzWzBdO1xuICBjb25zdCBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ0FuY2VzdG9ycy5yZWR1Y2UoKGFjY1JlY3QsIGNsaXBwaW5nQW5jZXN0b3IpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21DbGlwcGluZ0FuY2VzdG9yKGVsZW1lbnQsIGNsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgZmlyc3RDbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdCxcbiAgICBoZWlnaHQ6IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wLFxuICAgIHg6IGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIHk6IGNsaXBwaW5nUmVjdC50b3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDc3NEaW1lbnNpb25zKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAocG9seWZpbGwpIHtcbiAgICByZXR1cm4gcG9seWZpbGwoZWxlbWVudCk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgbGV0IGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmICFpc0xhc3RUcmF2ZXJzYWJsZU5vZGUoY3VycmVudE5vZGUpKSB7XG4gICAgaWYgKGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgbGV0IG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpO1xuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZSQxKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQsIHBvbHlmaWxsKTtcbiAgfVxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJyAmJiAhaXNDb250YWluaW5nQmxvY2sob2Zmc2V0UGFyZW50KSkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQoZWxlbWVudCwgb2Zmc2V0UGFyZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGlzRml4ZWQgPSBzdHJhdGVneSA9PT0gJ2ZpeGVkJztcbiAgY29uc3QgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCB0cnVlLCBpc0ZpeGVkLCBvZmZzZXRQYXJlbnQpO1xuICBsZXQgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIGNvbnN0IG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuXG5jb25zdCBwbGF0Zm9ybSA9IHtcbiAgZ2V0Q2xpcHBpbmdSZWN0LFxuICBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCxcbiAgaXNFbGVtZW50LFxuICBnZXREaW1lbnNpb25zLFxuICBnZXRPZmZzZXRQYXJlbnQsXG4gIGdldERvY3VtZW50RWxlbWVudCxcbiAgZ2V0U2NhbGUsXG4gIGFzeW5jIGdldEVsZW1lbnRSZWN0cyhfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHJlZmVyZW5jZSxcbiAgICAgIGZsb2F0aW5nLFxuICAgICAgc3RyYXRlZ3lcbiAgICB9ID0gX3JlZjtcbiAgICBjb25zdCBnZXRPZmZzZXRQYXJlbnRGbiA9IHRoaXMuZ2V0T2Zmc2V0UGFyZW50IHx8IGdldE9mZnNldFBhcmVudDtcbiAgICBjb25zdCBnZXREaW1lbnNpb25zRm4gPSB0aGlzLmdldERpbWVuc2lvbnM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZmVyZW5jZTogZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQocmVmZXJlbmNlLCBhd2FpdCBnZXRPZmZzZXRQYXJlbnRGbihmbG9hdGluZyksIHN0cmF0ZWd5KSxcbiAgICAgIGZsb2F0aW5nOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIC4uLihhd2FpdCBnZXREaW1lbnNpb25zRm4oZmxvYXRpbmcpKVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGdldENsaWVudFJlY3RzOiBlbGVtZW50ID0+IEFycmF5LmZyb20oZWxlbWVudC5nZXRDbGllbnRSZWN0cygpKSxcbiAgaXNSVEw6IGVsZW1lbnQgPT4gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbn07XG5cbi8qKlxuICogQXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCB3aGVuIG5lY2Vzc2FyeS5cbiAqIFNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuIHRoZSBmbG9hdGluZyBlbGVtZW50IGlzIG1vdW50ZWQgb24gdGhlIERPTSBvclxuICogdmlzaWJsZSBvbiB0aGUgc2NyZWVuLlxuICogQHJldHVybnMgY2xlYW51cCBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlIGZsb2F0aW5nIGVsZW1lbnQgaXNcbiAqIHJlbW92ZWQgZnJvbSB0aGUgRE9NIG9yIGhpZGRlbiBmcm9tIHRoZSBzY3JlZW4uXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1VwZGF0ZVxuICovXG5mdW5jdGlvbiBhdXRvVXBkYXRlKHJlZmVyZW5jZSwgZmxvYXRpbmcsIHVwZGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGNvbnN0IHtcbiAgICBhbmNlc3RvclNjcm9sbCA9IHRydWUsXG4gICAgYW5jZXN0b3JSZXNpemUgPSB0cnVlLFxuICAgIGVsZW1lbnRSZXNpemUgPSB0cnVlLFxuICAgIGFuaW1hdGlvbkZyYW1lID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGFuY2VzdG9ycyA9IGFuY2VzdG9yU2Nyb2xsIHx8IGFuY2VzdG9yUmVzaXplID8gWy4uLihpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGdldE92ZXJmbG93QW5jZXN0b3JzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10pLCAuLi5nZXRPdmVyZmxvd0FuY2VzdG9ycyhmbG9hdGluZyldIDogW107XG4gIGFuY2VzdG9ycy5mb3JFYWNoKGFuY2VzdG9yID0+IHtcbiAgICAvLyBpZ25vcmVzIFdpbmRvdywgY2hlY2tzIGZvciBbb2JqZWN0IFZpc3VhbFZpZXdwb3J0XVxuICAgIGNvbnN0IGlzVmlzdWFsVmlld3BvcnQgPSAhaXNFbGVtZW50KGFuY2VzdG9yKSAmJiBhbmNlc3Rvci50b1N0cmluZygpLmluY2x1ZGVzKCdWJyk7XG4gICAgaWYgKGFuY2VzdG9yU2Nyb2xsICYmIChhbmltYXRpb25GcmFtZSA/IGlzVmlzdWFsVmlld3BvcnQgOiB0cnVlKSkge1xuICAgICAgYW5jZXN0b3IuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBhbmNlc3RvclJlc2l6ZSAmJiBhbmNlc3Rvci5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xuICB9KTtcbiAgbGV0IG9ic2VydmVyID0gbnVsbDtcbiAgaWYgKGVsZW1lbnRSZXNpemUpIHtcbiAgICBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgICBpc0VsZW1lbnQocmVmZXJlbmNlKSAmJiAhYW5pbWF0aW9uRnJhbWUgJiYgb2JzZXJ2ZXIub2JzZXJ2ZShyZWZlcmVuY2UpO1xuICAgIGlmICghaXNFbGVtZW50KHJlZmVyZW5jZSkgJiYgcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ICYmICFhbmltYXRpb25GcmFtZSkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpO1xuICAgIH1cbiAgICBvYnNlcnZlci5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgfVxuICBsZXQgZnJhbWVJZDtcbiAgbGV0IHByZXZSZWZSZWN0ID0gYW5pbWF0aW9uRnJhbWUgPyBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlKSA6IG51bGw7XG4gIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgIGZyYW1lTG9vcCgpO1xuICB9XG4gIGZ1bmN0aW9uIGZyYW1lTG9vcCgpIHtcbiAgICBjb25zdCBuZXh0UmVmUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpO1xuICAgIGlmIChwcmV2UmVmUmVjdCAmJiAobmV4dFJlZlJlY3QueCAhPT0gcHJldlJlZlJlY3QueCB8fCBuZXh0UmVmUmVjdC55ICE9PSBwcmV2UmVmUmVjdC55IHx8IG5leHRSZWZSZWN0LndpZHRoICE9PSBwcmV2UmVmUmVjdC53aWR0aCB8fCBuZXh0UmVmUmVjdC5oZWlnaHQgIT09IHByZXZSZWZSZWN0LmhlaWdodCkpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgICBwcmV2UmVmUmVjdCA9IG5leHRSZWZSZWN0O1xuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWVMb29wKTtcbiAgfVxuICB1cGRhdGUoKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICB2YXIgX29ic2VydmVyO1xuICAgIGFuY2VzdG9ycy5mb3JFYWNoKGFuY2VzdG9yID0+IHtcbiAgICAgIGFuY2VzdG9yU2Nyb2xsICYmIGFuY2VzdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSk7XG4gICAgICBhbmNlc3RvclJlc2l6ZSAmJiBhbmNlc3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xuICAgIH0pO1xuICAgIChfb2JzZXJ2ZXIgPSBvYnNlcnZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBgeGAgYW5kIGB5YCBjb29yZGluYXRlcyB0aGF0IHdpbGwgcGxhY2UgdGhlIGZsb2F0aW5nIGVsZW1lbnRcbiAqIG5leHQgdG8gYSByZWZlcmVuY2UgZWxlbWVudCB3aGVuIGl0IGlzIGdpdmVuIGEgY2VydGFpbiBDU1MgcG9zaXRpb25pbmdcbiAqIHN0cmF0ZWd5LlxuICovXG5jb25zdCBjb21wdXRlUG9zaXRpb24gPSAocmVmZXJlbmNlLCBmbG9hdGluZywgb3B0aW9ucykgPT4ge1xuICAvLyBUaGlzIGNhY2hlcyB0aGUgZXhwZW5zaXZlIGBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnNgIGZ1bmN0aW9uIHNvIHRoYXRcbiAgLy8gbXVsdGlwbGUgbGlmZWN5Y2xlIHJlc2V0cyByZS11c2UgdGhlIHNhbWUgcmVzdWx0LiBJdCBvbmx5IGxpdmVzIGZvciBhXG4gIC8vIHNpbmdsZSBjYWxsLiBJZiBvdGhlciBmdW5jdGlvbnMgYmVjb21lIGV4cGVuc2l2ZSwgd2UgY2FuIGFkZCB0aGVtIGFzIHdlbGwuXG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIHBsYXRmb3JtLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3QgcGxhdGZvcm1XaXRoQ2FjaGUgPSB7XG4gICAgLi4ubWVyZ2VkT3B0aW9ucy5wbGF0Zm9ybSxcbiAgICBfYzogY2FjaGVcbiAgfTtcbiAgcmV0dXJuIGNvbXB1dGVQb3NpdGlvbiQxKHJlZmVyZW5jZSwgZmxvYXRpbmcsIHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLFxuICAgIHBsYXRmb3JtOiBwbGF0Zm9ybVdpdGhDYWNoZVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaGVscHMgdXNlcnMgcHJvdmlkZSBjdXN0b20gY29uZmlndXJhdGlvbiBmb3IgY29tcG9uZW50IGludGVybmFscy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgY29uZmlnT3ZlcnJpZGVzID0gZ2xvYmFsVGhpc1tcImNhbGNpdGVDb21wb25lbnRzQ29uZmlnXCJdO1xuY29uc3QgY29uZmlnID0ge1xuICAvKipcbiAgICogV2UgYXBwbHkgYSBjdXN0b20gZml4IHRvIGltcHJvdmUgcG9zaXRpb25pbmcgZm9yIG5vbi1DaHJvbWl1bSBicm93c2Vycy5cbiAgICogVGhlIGZpeCBjb21lcyBhdCBhIHBlcmZvcm1hbmNlIGNvc3QsIHNvIHByb3ZpZGVzIHVzZXJzIGEgd2F5IHRvIG9wdC1vdXQgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGZsb2F0aW5nVUlOb25DaHJvbWl1bVBvc2l0aW9uaW5nRml4OiB0cnVlLFxuICAuLi5jb25maWdPdmVycmlkZXNcbn07XG5cbmNvbnN0IGZsb2F0aW5nVUlCcm93c2VyQ2hlY2sgPSBwYXRjaEZsb2F0aW5nVWlGb3JOb25DaHJvbWl1bUJyb3dzZXJzKCk7XG5hc3luYyBmdW5jdGlvbiBwYXRjaEZsb2F0aW5nVWlGb3JOb25DaHJvbWl1bUJyb3dzZXJzKCkge1xuICBmdW5jdGlvbiBnZXRVQURhdGEoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xuICB9XG4gIGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICAgIGNvbnN0IHVhRGF0YSA9IGdldFVBRGF0YSgpO1xuICAgIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgICAgPyB1YURhdGEuYnJhbmRzLm1hcCgoeyBicmFuZCwgdmVyc2lvbiB9KSA9PiBgJHticmFuZH0vJHt2ZXJzaW9ufWApLmpvaW4oXCIgXCIpXG4gICAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIH1cbiAgZnVuY3Rpb24gaXNDaHJvbWUxMDlPckFib3ZlKCkge1xuICAgIGNvbnN0IHVhRGF0YSA9IGdldFVBRGF0YSgpO1xuICAgIGlmICh1YURhdGE/LmJyYW5kcykge1xuICAgICAgcmV0dXJuICEhdWFEYXRhLmJyYW5kcy5maW5kKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IChicmFuZCA9PT0gXCJHb29nbGUgQ2hyb21lXCIgfHwgYnJhbmQgPT09IFwiQ2hyb21pdW1cIikgJiYgTnVtYmVyKHZlcnNpb24pID49IDEwOSk7XG4gICAgfVxuICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQuc3BsaXQoXCIgXCIpLmZpbmQoKHVhKSA9PiB7XG4gICAgICBjb25zdCBbYnJvd3NlciwgdmVyc2lvbl0gPSB1YS5zcGxpdChcIi9cIik7XG4gICAgICByZXR1cm4gYnJvd3NlciA9PT0gXCJDaHJvbWVcIiAmJiBwYXJzZUludCh2ZXJzaW9uKSA+PSAxMDk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGNvbmZpZy5mbG9hdGluZ1VJTm9uQ2hyb21pdW1Qb3NpdGlvbmluZ0ZpeCAmJlxuICAgIC8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuICAgICgvZmlyZWZveHxzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpIHx8IGlzQ2hyb21lMTA5T3JBYm92ZSgpKSkge1xuICAgIGNvbnN0IHsgb2Zmc2V0UGFyZW50IH0gPSBhd2FpdCBpbXBvcnQoJy4vY29tcG9zZWQtb2Zmc2V0LXBvc2l0aW9uLmVzbS1iYmNlYmI3NS5qcycpO1xuICAgIGNvbnN0IG9yaWdpbmFsR2V0T2Zmc2V0UGFyZW50ID0gcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50O1xuICAgIHBsYXRmb3JtLmdldE9mZnNldFBhcmVudCA9IChlbGVtZW50KSA9PiBvcmlnaW5hbEdldE9mZnNldFBhcmVudChlbGVtZW50LCBvZmZzZXRQYXJlbnQpO1xuICB9XG59XG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqL1xuY29uc3QgcGxhY2VtZW50RGF0YUF0dHJpYnV0ZSA9IFwiZGF0YS1wbGFjZW1lbnRcIjtcbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICovXG5jb25zdCByZXBvc2l0aW9uRGVib3VuY2VUaW1lb3V0ID0gMTAwO1xuY29uc3QgZWZmZWN0aXZlUGxhY2VtZW50cyA9IFtcbiAgXCJ0b3BcIixcbiAgXCJib3R0b21cIixcbiAgXCJyaWdodFwiLFxuICBcImxlZnRcIixcbiAgXCJ0b3Atc3RhcnRcIixcbiAgXCJ0b3AtZW5kXCIsXG4gIFwiYm90dG9tLXN0YXJ0XCIsXG4gIFwiYm90dG9tLWVuZFwiLFxuICBcInJpZ2h0LXN0YXJ0XCIsXG4gIFwicmlnaHQtZW5kXCIsXG4gIFwibGVmdC1zdGFydFwiLFxuICBcImxlZnQtZW5kXCJcbl07XG5jb25zdCBkZWZhdWx0TWVudVBsYWNlbWVudCA9IFwiYm90dG9tLXN0YXJ0XCI7XG5jb25zdCBGbG9hdGluZ0NTUyA9IHtcbiAgYW5pbWF0aW9uOiBcImNhbGNpdGUtZmxvYXRpbmctdWktYW5pbVwiLFxuICBhbmltYXRpb25BY3RpdmU6IFwiY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmVcIlxufTtcbmZ1bmN0aW9uIGdldE1pZGRsZXdhcmUoeyBwbGFjZW1lbnQsIGZsaXBEaXNhYmxlZCwgZmxpcFBsYWNlbWVudHMsIG9mZnNldERpc3RhbmNlLCBvZmZzZXRTa2lkZGluZywgYXJyb3dFbCwgdHlwZSB9KSB7XG4gIGNvbnN0IGRlZmF1bHRNaWRkbGV3YXJlID0gW3NoaWZ0KCksIGhpZGUoKV07XG4gIGlmICh0eXBlID09PSBcIm1lbnVcIikge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5kZWZhdWx0TWlkZGxld2FyZSxcbiAgICAgIGZsaXAoe1xuICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IGZsaXBQbGFjZW1lbnRzIHx8IFtcInRvcC1zdGFydFwiLCBcInRvcFwiLCBcInRvcC1lbmRcIiwgXCJib3R0b20tc3RhcnRcIiwgXCJib3R0b21cIiwgXCJib3R0b20tZW5kXCJdXG4gICAgICB9KVxuICAgIF07XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwicG9wb3ZlclwiIHx8IHR5cGUgPT09IFwidG9vbHRpcFwiKSB7XG4gICAgY29uc3QgbWlkZGxld2FyZSA9IFtcbiAgICAgIC4uLmRlZmF1bHRNaWRkbGV3YXJlLFxuICAgICAgb2Zmc2V0KHtcbiAgICAgICAgbWFpbkF4aXM6IHR5cGVvZiBvZmZzZXREaXN0YW5jZSA9PT0gXCJudW1iZXJcIiA/IG9mZnNldERpc3RhbmNlIDogMCxcbiAgICAgICAgY3Jvc3NBeGlzOiB0eXBlb2Ygb2Zmc2V0U2tpZGRpbmcgPT09IFwibnVtYmVyXCIgPyBvZmZzZXRTa2lkZGluZyA6IDBcbiAgICAgIH0pXG4gICAgXTtcbiAgICBpZiAocGxhY2VtZW50ID09PSBcImF1dG9cIiB8fCBwbGFjZW1lbnQgPT09IFwiYXV0by1zdGFydFwiIHx8IHBsYWNlbWVudCA9PT0gXCJhdXRvLWVuZFwiKSB7XG4gICAgICBtaWRkbGV3YXJlLnB1c2goYXV0b1BsYWNlbWVudCh7IGFsaWdubWVudDogcGxhY2VtZW50ID09PSBcImF1dG8tc3RhcnRcIiA/IFwic3RhcnRcIiA6IHBsYWNlbWVudCA9PT0gXCJhdXRvLWVuZFwiID8gXCJlbmRcIiA6IG51bGwgfSkpO1xuICAgIH1cbiAgICBlbHNlIGlmICghZmxpcERpc2FibGVkKSB7XG4gICAgICBtaWRkbGV3YXJlLnB1c2goZmxpcChmbGlwUGxhY2VtZW50cyA/IHsgZmFsbGJhY2tQbGFjZW1lbnRzOiBmbGlwUGxhY2VtZW50cyB9IDoge30pKTtcbiAgICB9XG4gICAgaWYgKGFycm93RWwpIHtcbiAgICAgIG1pZGRsZXdhcmUucHVzaChhcnJvdyh7XG4gICAgICAgIGVsZW1lbnQ6IGFycm93RWxcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pZGRsZXdhcmU7XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuZnVuY3Rpb24gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKHBsYWNlbWVudHMsIGVsKSB7XG4gIGNvbnN0IGZpbHRlcmVkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKChwbGFjZW1lbnQpID0+IGVmZmVjdGl2ZVBsYWNlbWVudHMuaW5jbHVkZXMocGxhY2VtZW50KSk7XG4gIGlmIChmaWx0ZXJlZFBsYWNlbWVudHMubGVuZ3RoICE9PSBwbGFjZW1lbnRzLmxlbmd0aCkge1xuICAgIGNvbnNvbGUud2FybihgJHtlbC50YWdOYW1lfTogSW52YWxpZCB2YWx1ZSBmb3VuZCBpbjogZmxpcFBsYWNlbWVudHMuIFRyeSBhbnkgb2YgdGhlc2U6ICR7ZWZmZWN0aXZlUGxhY2VtZW50c1xuICAgICAgLm1hcCgocGxhY2VtZW50KSA9PiBgXCIke3BsYWNlbWVudH1cImApXG4gICAgICAuam9pbihcIiwgXCIpXG4gICAgICAudHJpbSgpfWAsIHsgZWwgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkUGxhY2VtZW50cztcbn1cbmZ1bmN0aW9uIGdldEVmZmVjdGl2ZVBsYWNlbWVudChmbG9hdGluZ0VsLCBwbGFjZW1lbnQpIHtcbiAgY29uc3QgcGxhY2VtZW50cyA9IFtcImxlZnRcIiwgXCJyaWdodFwiXTtcbiAgaWYgKGdldEVsZW1lbnREaXIoZmxvYXRpbmdFbCkgPT09IFwicnRsXCIpIHtcbiAgICBwbGFjZW1lbnRzLnJldmVyc2UoKTtcbiAgfVxuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlYWRpbmcvZ2ksIHBsYWNlbWVudHNbMF0pLnJlcGxhY2UoL3RyYWlsaW5nL2dpLCBwbGFjZW1lbnRzWzFdKTtcbn1cbi8qKlxuICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gbWFuYWdlIGByZXBvc2l0aW9uYCBjYWxscyBmb3IgRmxvYXRpbmdVSUNvbXBvbmVudHMgdGhhdCB1c2UgYHBvc2l0aW9uRmxvYXRpbmdVSS5cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIG5vdCBuZWVkZWQgZm9yIGNvbXBvbmVudHMgdGhhdCB1c2UgYGNhbGNpdGUtcG9wb3ZlcmAuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBvcHRpb25zLnJlZmVyZW5jZUVsXG4gKiBAcGFyYW0gb3B0aW9ucy5mbG9hdGluZ0VsXG4gKiBAcGFyYW0gb3B0aW9ucy5vdmVybGF5UG9zaXRpb25pbmdcbiAqIEBwYXJhbSBvcHRpb25zLnBsYWNlbWVudFxuICogQHBhcmFtIG9wdGlvbnMuZmxpcERpc2FibGVkXG4gKiBAcGFyYW0gb3B0aW9ucy5mbGlwUGxhY2VtZW50c1xuICogQHBhcmFtIG9wdGlvbnMub2Zmc2V0RGlzdGFuY2VcbiAqIEBwYXJhbSBvcHRpb25zLm9mZnNldFNraWRkaW5nXG4gKiBAcGFyYW0gb3B0aW9ucy5hcnJvd0VsXG4gKiBAcGFyYW0gb3B0aW9ucy50eXBlXG4gKiBAcGFyYW0gZGVsYXllZFxuICovXG5hc3luYyBmdW5jdGlvbiByZXBvc2l0aW9uKGNvbXBvbmVudCwgb3B0aW9ucywgZGVsYXllZCA9IGZhbHNlKSB7XG4gIGlmICghY29tcG9uZW50Lm9wZW4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIGRlbGF5ZWQgPyBkZWJvdW5jZWRSZXBvc2l0aW9uKGNvbXBvbmVudCwgb3B0aW9ucykgOiBwb3NpdGlvbkZsb2F0aW5nVUkoY29tcG9uZW50LCBvcHRpb25zKTtcbn1cbmNvbnN0IGRlYm91bmNlZFJlcG9zaXRpb24gPSBkZWJvdW5jZShwb3NpdGlvbkZsb2F0aW5nVUksIHJlcG9zaXRpb25EZWJvdW5jZVRpbWVvdXQsIHtcbiAgbGVhZGluZzogdHJ1ZSxcbiAgbWF4V2FpdDogcmVwb3NpdGlvbkRlYm91bmNlVGltZW91dFxufSk7XG5jb25zdCBBUlJPV19DU1NfVFJBTlNGT1JNID0ge1xuICB0b3A6IFwiXCIsXG4gIGxlZnQ6IFwicm90YXRlKC05MGRlZylcIixcbiAgYm90dG9tOiBcInJvdGF0ZSgxODBkZWcpXCIsXG4gIHJpZ2h0OiBcInJvdGF0ZSg5MGRlZylcIlxufTtcbi8qKlxuICogUG9zaXRpb25zIHRoZSBmbG9hdGluZyBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqXG4gKiAqKk5vdGU6KiogZXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBwYXJhbSByb290MFxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsXG4gKiBAcGFyYW0gcm9vdDAuZmxvYXRpbmdFbFxuICogQHBhcmFtIHJvb3QwLm92ZXJsYXlQb3NpdGlvbmluZ1xuICogQHBhcmFtIHJvb3QwLnBsYWNlbWVudFxuICogQHBhcmFtIHJvb3QwLmZsaXBEaXNhYmxlZFxuICogQHBhcmFtIHJvb3QwLmZsaXBQbGFjZW1lbnRzXG4gKiBAcGFyYW0gcm9vdDAub2Zmc2V0RGlzdGFuY2VcbiAqIEBwYXJhbSByb290MC5vZmZzZXRTa2lkZGluZ1xuICogQHBhcmFtIHJvb3QwLmFycm93RWxcbiAqIEBwYXJhbSByb290MC50eXBlXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5mbG9hdGluZ0VsXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwub3ZlcmxheVBvc2l0aW9uaW5nXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwucGxhY2VtZW50XG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuZmxpcERpc2FibGVkXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuZmxpcFBsYWNlbWVudHNcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLm9mZnNldFNraWRkaW5nXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuYXJyb3dFbFxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLnR5cGVcbiAqIEBwYXJhbSBjb21wb25lbnQucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSBjb21wb25lbnQuZmxvYXRpbmdFbFxuICogQHBhcmFtIGNvbXBvbmVudC5vdmVybGF5UG9zaXRpb25pbmdcbiAqIEBwYXJhbSBjb21wb25lbnQucGxhY2VtZW50XG4gKiBAcGFyYW0gY29tcG9uZW50LmZsaXBEaXNhYmxlZFxuICogQHBhcmFtIGNvbXBvbmVudC5mbGlwUGxhY2VtZW50c1xuICogQHBhcmFtIGNvbXBvbmVudC5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIGNvbXBvbmVudC5vZmZzZXRTa2lkZGluZ1xuICogQHBhcmFtIGNvbXBvbmVudC5hcnJvd0VsXG4gKiBAcGFyYW0gY29tcG9uZW50LnR5cGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcG9zaXRpb25GbG9hdGluZ1VJKGNvbXBvbmVudCwgeyByZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgb3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiLCBwbGFjZW1lbnQsIGZsaXBEaXNhYmxlZCwgZmxpcFBsYWNlbWVudHMsIG9mZnNldERpc3RhbmNlLCBvZmZzZXRTa2lkZGluZywgYXJyb3dFbCwgdHlwZSB9KSB7XG4gIGlmICghcmVmZXJlbmNlRWwgfHwgIWZsb2F0aW5nRWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhd2FpdCBmbG9hdGluZ1VJQnJvd3NlckNoZWNrO1xuICBjb25zdCB7IHgsIHksIHBsYWNlbWVudDogZWZmZWN0aXZlUGxhY2VtZW50LCBzdHJhdGVneTogcG9zaXRpb24sIG1pZGRsZXdhcmVEYXRhIH0gPSBhd2FpdCBjb21wdXRlUG9zaXRpb24ocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIHtcbiAgICBzdHJhdGVneTogb3ZlcmxheVBvc2l0aW9uaW5nLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50ID09PSBcImF1dG9cIiB8fCBwbGFjZW1lbnQgPT09IFwiYXV0by1zdGFydFwiIHx8IHBsYWNlbWVudCA9PT0gXCJhdXRvLWVuZFwiXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBnZXRFZmZlY3RpdmVQbGFjZW1lbnQoZmxvYXRpbmdFbCwgcGxhY2VtZW50KSxcbiAgICBtaWRkbGV3YXJlOiBnZXRNaWRkbGV3YXJlKHtcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBEaXNhYmxlZCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzLFxuICAgICAgb2Zmc2V0RGlzdGFuY2UsXG4gICAgICBvZmZzZXRTa2lkZGluZyxcbiAgICAgIGFycm93RWwsXG4gICAgICB0eXBlXG4gICAgfSlcbiAgfSk7XG4gIGlmIChhcnJvd0VsICYmIG1pZGRsZXdhcmVEYXRhLmFycm93KSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBtaWRkbGV3YXJlRGF0YS5hcnJvdztcbiAgICBjb25zdCBzaWRlID0gZWZmZWN0aXZlUGxhY2VtZW50LnNwbGl0KFwiLVwiKVswXTtcbiAgICBjb25zdCBhbGlnbm1lbnQgPSB4ICE9IG51bGwgPyBcImxlZnRcIiA6IFwidG9wXCI7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gQVJST1dfQ1NTX1RSQU5TRk9STVtzaWRlXTtcbiAgICBjb25zdCByZXNldCA9IHsgbGVmdDogXCJcIiwgdG9wOiBcIlwiLCBib3R0b206IFwiXCIsIHJpZ2h0OiBcIlwiIH07XG4gICAgaWYgKFwiZmxvYXRpbmdMYXlvdXRcIiBpbiBjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5mbG9hdGluZ0xheW91dCA9IHNpZGUgPT09IFwibGVmdFwiIHx8IHNpZGUgPT09IFwicmlnaHRcIiA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKGFycm93RWwuc3R5bGUsIHtcbiAgICAgIC4uLnJlc2V0LFxuICAgICAgW2FsaWdubWVudF06IGAke2FsaWdubWVudCA9PSBcImxlZnRcIiA/IHggOiB5fXB4YCxcbiAgICAgIFtzaWRlXTogXCIxMDAlXCIsXG4gICAgICB0cmFuc2Zvcm1cbiAgICB9KTtcbiAgfVxuICBjb25zdCByZWZlcmVuY2VIaWRkZW4gPSBtaWRkbGV3YXJlRGF0YS5oaWRlPy5yZWZlcmVuY2VIaWRkZW47XG4gIGNvbnN0IHZpc2liaWxpdHkgPSByZWZlcmVuY2VIaWRkZW4gPyBcImhpZGRlblwiIDogbnVsbDtcbiAgY29uc3QgcG9pbnRlckV2ZW50cyA9IHZpc2liaWxpdHkgPyBcIm5vbmVcIiA6IG51bGw7XG4gIGZsb2F0aW5nRWwuc2V0QXR0cmlidXRlKHBsYWNlbWVudERhdGFBdHRyaWJ1dGUsIGVmZmVjdGl2ZVBsYWNlbWVudCk7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtNYXRoLnJvdW5kKHgpfXB4LCR7TWF0aC5yb3VuZCh5KX1weClgO1xuICBPYmplY3QuYXNzaWduKGZsb2F0aW5nRWwuc3R5bGUsIHtcbiAgICB2aXNpYmlsaXR5LFxuICAgIHBvaW50ZXJFdmVudHMsXG4gICAgcG9zaXRpb24sXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICB0cmFuc2Zvcm1cbiAgfSk7XG59XG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgY2xlYW51cE1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgZmxvYXRpbmcgZWxlbWVudCBpbnRlcmFjdGlvbnMgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIHJlZmVyZW5jZUVsXG4gKiBAcGFyYW0gZmxvYXRpbmdFbFxuICovXG5mdW5jdGlvbiBjb25uZWN0RmxvYXRpbmdVSShjb21wb25lbnQsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsKSB7XG4gIGlmICghZmxvYXRpbmdFbCB8fCAhcmVmZXJlbmNlRWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGlzY29ubmVjdEZsb2F0aW5nVUkoY29tcG9uZW50LCByZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCk7XG4gIE9iamVjdC5hc3NpZ24oZmxvYXRpbmdFbC5zdHlsZSwge1xuICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgLy8gaW5pdGlhbCBwb3NpdGlvbmluZyBiYXNlZCBvbiBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2NvbXB1dGVQb3NpdGlvbiNpbml0aWFsLWxheW91dFxuICAgIHBvc2l0aW9uOiBjb21wb25lbnQub3ZlcmxheVBvc2l0aW9uaW5nLFxuICAgIHRvcDogXCIwXCIsXG4gICAgbGVmdDogXCIwXCJcbiAgfSk7XG4gIGNvbnN0IHJ1bkF1dG9VcGRhdGUgPSBhdXRvVXBkYXRlXG4gICAgO1xuICBjbGVhbnVwTWFwLnNldChjb21wb25lbnQsIHJ1bkF1dG9VcGRhdGUocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsICgpID0+IGNvbXBvbmVudC5yZXBvc2l0aW9uKCkpKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBmbG9hdGluZyBlbGVtZW50IGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gcmVmZXJlbmNlRWxcbiAqIEBwYXJhbSBmbG9hdGluZ0VsXG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKGNvbXBvbmVudCwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwpIHtcbiAgaWYgKCFmbG9hdGluZ0VsIHx8ICFyZWZlcmVuY2VFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjbGVhbnVwID0gY2xlYW51cE1hcC5nZXQoY29tcG9uZW50KTtcbiAgaWYgKGNsZWFudXApIHtcbiAgICBjbGVhbnVwKCk7XG4gIH1cbiAgY2xlYW51cE1hcC5kZWxldGUoY29tcG9uZW50KTtcbn1cbmNvbnN0IHZpc2libGVQb2ludGVyU2l6ZSA9IDQ7XG4vKipcbiAqIERlZmF1bHQgb2Zmc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBhd2F5IGZyb20gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICpcbiAqIEBkZWZhdWx0IDZcbiAqL1xuY29uc3QgZGVmYXVsdE9mZnNldERpc3RhbmNlID0gTWF0aC5jZWlsKE1hdGguaHlwb3QodmlzaWJsZVBvaW50ZXJTaXplLCB2aXNpYmxlUG9pbnRlclNpemUpKTtcblxuZXhwb3J0IHsgRmxvYXRpbmdDU1MgYXMgRiwgZGlzY29ubmVjdEZsb2F0aW5nVUkgYXMgYSwgZGVmYXVsdE9mZnNldERpc3RhbmNlIGFzIGIsIGNvbm5lY3RGbG9hdGluZ1VJIGFzIGMsIGRlZmF1bHRNZW51UGxhY2VtZW50IGFzIGQsIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyBhcyBmLCByZXBvc2l0aW9uIGFzIHIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBlIGFzIHJlYWRUYXNrIH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycyA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzLnRyYW5zaXRpb25FbCkge1xuICAgIHRoaXMub3BlbiA/IHRoaXMub25CZWZvcmVPcGVuKCkgOiB0aGlzLm9uQmVmb3JlQ2xvc2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChldmVudCkge1xuICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMudHJhbnNpdGlvbkVsKSB7XG4gICAgdGhpcy5vcGVuID8gdGhpcy5vbk9wZW4oKSA6IHRoaXMub25DbG9zZSgpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byBkZXRlcm1pbmUgZ2xvYmFsbHkgc2V0IHRyYW5zaXRpb24gZHVyYXRpb24gb24gdGhlIGdpdmVuIG9wZW5UcmFuc2l0aW9uUHJvcCwgd2hpY2ggaXMgaW1wb3J0ZWQgYW5kIHNldCBpbiB0aGUgQFdhdGNoKFwib3BlblwiKS5cbiAqIFVzZWQgdG8gZW1pdCAoYmVmb3JlKW9wZW4vY2xvc2UgZXZlbnRzIGJvdGggZm9yIHdoZW4gdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBwcmVzZW50IGFuZCB3aGVuIHRoZXJlIGlzIG5vbmUgKHRyYW5zaXRpb24tZHVyYXRpb24gaXMgc2V0IHRvIDApLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBub25PcGVuQ2xvc2VDb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50LCBub25PcGVuQ2xvc2VDb21wb25lbnQgPSBmYWxzZSkge1xuICByZWFkVGFzaygoKSA9PiB7XG4gICAgaWYgKGNvbXBvbmVudC50cmFuc2l0aW9uRWwpIHtcbiAgICAgIGNvbnN0IGFsbFRyYW5zaXRpb25Qcm9wc0FycmF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShjb21wb25lbnQudHJhbnNpdGlvbkVsKS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKTtcbiAgICAgIGNvbnN0IG9wZW5UcmFuc2l0aW9uUHJvcEluZGV4ID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXkuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wKTtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGFsbFRyYW5zaXRpb25Qcm9wc0FycmF5W29wZW5UcmFuc2l0aW9uUHJvcEluZGV4ICsgMV07XG4gICAgICBpZiAodHJhbnNpdGlvbkR1cmF0aW9uID09PSBcIjBzXCIpIHtcbiAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICA6IGNvbXBvbmVudC5vbkJlZm9yZUNsb3NlKCk7XG4gICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgID8gY29tcG9uZW50Lm9uT3BlbigpXG4gICAgICAgICAgOiBjb21wb25lbnQub25DbG9zZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCAoKSA9PiB7XG4gICAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgICA/IGNvbXBvbmVudC5vbkJlZm9yZU9wZW4oKVxuICAgICAgICAgICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIEhlbHBlciB0byBrZWVwIHRyYWNrIG9mIHRyYW5zaXRpb24gbGlzdGVuZXJzIG9uIHNldFRyYW5zaXRpb25FbCBhbmQgY29ubmVjdGVkQ2FsbGJhY2sgb24gT3BlbkNsb3NlQ29tcG9uZW50IGNvbXBvbmVudHMuXG4gKlxuICogRm9yIGNvbXBvbmVudCB3aGljaCBkbyBub3QgaGF2ZSBvcGVuIHByb3AsIHVzZSBgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnRgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQpO1xuICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgIGNvbnN0IGJvdW5kT25UcmFuc2l0aW9uU3RhcnQgPSB0cmFuc2l0aW9uU3RhcnQuYmluZChjb21wb25lbnQpO1xuICAgIGNvbnN0IGJvdW5kT25UcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZC5iaW5kKGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLnNldChjb21wb25lbnQsIFtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwsXG4gICAgICBib3VuZE9uVHJhbnNpdGlvblN0YXJ0LFxuICAgICAgYm91bmRPblRyYW5zaXRpb25FbmRcbiAgICBdKTtcbiAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgYm91bmRPblRyYW5zaXRpb25TdGFydCk7XG4gICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBib3VuZE9uVHJhbnNpdGlvbkVuZCk7XG4gIH1cbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biB0cmFuc2l0aW9uIGxpc3RlbmVycyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjayBvbiBPcGVuQ2xvc2VDb21wb25lbnQgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLmhhcyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IFt0cmFuc2l0aW9uRWwsIHN0YXJ0LCBlbmRdID0gY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLmdldChjb21wb25lbnQpO1xuICB0cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBzdGFydCk7XG4gIHRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpO1xuICBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuZGVsZXRlKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCBhcyBkLCBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCBhcyBvIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=