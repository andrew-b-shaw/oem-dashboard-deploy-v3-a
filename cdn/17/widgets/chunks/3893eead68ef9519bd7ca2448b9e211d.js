"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-graph_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-graph_2.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-graph_2.entry.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_graph": () => (/* binding */ Graph),
/* harmony export */   "calcite_slider": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math-e6aff5b3.js */ "./node_modules/@esri/calcite-components/dist/esm/math-e6aff5b3.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */













/**
 * Calculate slope of the tangents
 * uses Steffen interpolation as it's monotonic
 * http://jrwalsh1.github.io/posts/interpolations/
 *
 * @param p0
 * @param p1
 * @param p2
 */
function slope(p0, p1, p2) {
  const dx = p1[0] - p0[0];
  const dx1 = p2[0] - p1[0];
  const dy = p1[1] - p0[1];
  const dy1 = p2[1] - p1[1];
  const m = dy / (dx || (dx1 < 0 && 0));
  const m1 = dy1 / (dx1 || (dx < 0 && 0));
  const p = (m * dx1 + m1 * dx) / (dx + dx1);
  return (Math.sign(m) + Math.sign(m1)) * Math.min(Math.abs(m), Math.abs(m1), 0.5 * Math.abs(p)) || 0;
}
/**
 * Calculate slope for just one tangent (single-sided)
 *
 * @param p0
 * @param p1
 * @param m
 */
function slopeSingle(p0, p1, m) {
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  return dx ? ((3 * dy) / dx - m) / 2 : m;
}
/**
 * Given two points and their tangent slopes,
 * calculate the bezier handle coordinates and return draw command.
 *
 * Translates Hermite Spline to Beziér curve:
 * stackoverflow.com/questions/42574940/
 *
 * @param p0
 * @param p1
 * @param m0
 * @param m1
 * @param t
 */
function bezier(p0, p1, m0, m1, t) {
  const [x0, y0] = p0;
  const [x1, y1] = p1;
  const dx = (x1 - x0) / 3;
  const h1 = t([x0 + dx, y0 + dx * m0]).join(",");
  const h2 = t([x1 - dx, y1 - dx * m1]).join(",");
  const p = t([x1, y1]).join(",");
  return `C ${h1} ${h2} ${p}`;
}
/**
 * Generate a function which will translate a point
 * from the data coordinate space to svg viewbox oriented pixels
 *
 * @param root0
 * @param root0.width
 * @param root0.height
 * @param root0.min
 * @param root0.max
 */
function translate({ width, height, min, max }) {
  const rangeX = max[0] - min[0];
  const rangeY = max[1] - min[1];
  return (point) => {
    const x = ((point[0] - min[0]) / rangeX) * width;
    const y = height - (point[1] / rangeY) * height;
    return [x, y];
  };
}
/**
 * Get the min and max values from the dataset
 *
 * @param data
 */
function range(data) {
  const [startX, startY] = data[0];
  const min = [startX, startY];
  const max = [startX, startY];
  return data.reduce(({ min, max }, [x, y]) => ({
    min: [Math.min(min[0], x), Math.min(min[1], y)],
    max: [Math.max(max[0], x), Math.max(max[1], y)]
  }), { min, max });
}
/**
 * Generate drawing commands for an area graph
 * returns a string can can be passed directly to a path element's `d` attribute
 *
 * @param root0
 * @param root0.data
 * @param root0.min
 * @param root0.max
 * @param root0.t
 */
function area({ data, min, max, t }) {
  if (data.length === 0) {
    return "";
  }
  // important points for beginning and ending the path
  const [startX, startY] = t(data[0]);
  const [minX, minY] = t(min);
  const [maxX] = t(max);
  // keep track of previous slope/points
  let m;
  let p0;
  let p1;
  // iterate over data points, calculating command for each
  const commands = data.reduce((acc, point, i) => {
    p0 = data[i - 2];
    p1 = data[i - 1];
    if (i > 1) {
      const m1 = slope(p0, p1, point);
      const m0 = m === undefined ? slopeSingle(p0, p1, m1) : m;
      const command = bezier(p0, p1, m0, m1, t);
      m = m1;
      return `${acc} ${command}`;
    }
    return acc;
  }, `M ${minX},${minY} L ${minX},${startY} L ${startX},${startY}`);
  // close the path
  const last = data[data.length - 1];
  const end = bezier(p1, last, m, slopeSingle(p1, last, m), t);
  return `${commands} ${end} L ${maxX},${minY} Z`;
}

const graphCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}";

const Graph = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.graphId = `calcite-graph-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_2__.c)("resize", () => (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.f)(this));
    this.data = [];
    this.colorStops = undefined;
    this.highlightMin = undefined;
    this.highlightMax = undefined;
    this.min = undefined;
    this.max = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }
  render() {
    const { data, colorStops, el, highlightMax, highlightMin, min, max } = this;
    const id = this.graphId;
    const { clientHeight: height, clientWidth: width } = el;
    // if we have no data, return empty svg
    if (!data || data.length === 0) {
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }));
    }
    const { min: rangeMin, max: rangeMax } = range(data);
    let currentMin = rangeMin;
    let currentMax = rangeMax;
    if (min < rangeMin[0] || min > rangeMin[0]) {
      currentMin = [min, 0];
    }
    if (max > rangeMax[0] || max < rangeMax[0]) {
      currentMax = [max, rangeMax[1]];
    }
    const t = translate({ min: currentMin, max: currentMax, width, height });
    const [hMinX] = t([highlightMin, currentMax[1]]);
    const [hMaxX] = t([highlightMax, currentMax[1]]);
    const areaPath = area({ data, min: rangeMin, max: rangeMax, t });
    const fill = colorStops ? `url(#linear-gradient-${id})` : undefined;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }, colorStops ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("linearGradient", { id: `linear-gradient-${id}`, x1: "0", x2: "1", y1: "0", y2: "0" }, colorStops.map(({ offset, color, opacity }) => ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("stop", { offset: `${offset * 100}%`, "stop-color": color, "stop-opacity": opacity })))))) : null, highlightMin !== undefined ? ([
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("mask", { height: "100%", id: `${id}1`, width: "100%", x: "0%", y: "0%" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: `
            M 0,0
            L ${hMinX - 1},0
            L ${hMinX - 1},${height}
            L 0,${height}
            Z
          `, fill: "white" })),
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("mask", { height: "100%", id: `${id}2`, width: "100%", x: "0%", y: "0%" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: `
            M ${hMinX + 1},0
            L ${hMaxX - 1},0
            L ${hMaxX - 1},${height}
            L ${hMinX + 1}, ${height}
            Z
          `, fill: "white" })),
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("mask", { height: "100%", id: `${id}3`, width: "100%", x: "0%", y: "0%" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: `
                M ${hMaxX + 1},0
                L ${width},0
                L ${width},${height}
                L ${hMaxX + 1}, ${height}
                Z
              `, fill: "white" })),
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}1)` }),
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path--highlight", d: areaPath, fill: fill, mask: `url(#${id}2)` }),
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}3)` })
    ]) : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path", d: areaPath, fill: fill }))));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Graph.style = graphCss;

const CSS = {
  handleLabel: "handle__label",
  handleLabelMinValue: "handle__label--minValue",
  handleLabelValue: "handle__label--value",
  tickMin: "tick__label--min",
  tickMax: "tick__label--max"
};

const sliderCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:\"—\";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:\"\";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

function isRange(value) {
  return Array.isArray(value);
}
const Slider = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteSliderInput = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteSliderInput", 6);
    this.calciteSliderChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteSliderChange", 6);
    this.activeProp = "value";
    this.guid = `calcite-slider-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.dragUpdate = (event) => {
      if (this.disabled) {
        return;
      }
      event.preventDefault();
      if (this.dragProp) {
        const value = this.translate(event.clientX || event.pageX);
        if (isRange(this.value) && this.dragProp === "minMaxValue") {
          if (this.minValueDragRange && this.maxValueDragRange && this.minMaxValueRange) {
            const newMinValue = value - this.minValueDragRange;
            const newMaxValue = value + this.maxValueDragRange;
            if (newMaxValue <= this.max &&
              newMinValue >= this.min &&
              newMaxValue - newMinValue === this.minMaxValueRange) {
              this.setValue({
                minValue: this.clamp(newMinValue, "minValue"),
                maxValue: this.clamp(newMaxValue, "maxValue")
              });
            }
          }
          else {
            this.minValueDragRange = value - this.minValue;
            this.maxValueDragRange = this.maxValue - value;
            this.minMaxValueRange = this.maxValue - this.minValue;
          }
        }
        else {
          this.setValue({ [this.dragProp]: this.clamp(value, this.dragProp) });
        }
      }
    };
    this.pointerUpDragEnd = (event) => {
      if (this.disabled || !(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
        return;
      }
      this.dragEnd(event);
    };
    this.dragEnd = (event) => {
      if (this.disabled) {
        return;
      }
      this.removeDragListeners();
      this.focusActiveHandle(event.clientX);
      if (this.lastDragPropValue != this[this.dragProp]) {
        this.emitChange();
      }
      this.dragProp = null;
      this.lastDragPropValue = null;
      this.minValueDragRange = null;
      this.maxValueDragRange = null;
      this.minMaxValueRange = null;
    };
    /**
     * Set the reference of the track Element
     *
     * @internal
     * @param node
     */
    this.storeTrackRef = (node) => {
      this.trackEl = node;
    };
    /**
     * Returns a string representing the localized label value based if the groupSeparator prop is parsed.
     *
     * @param value
     */
    this.determineGroupSeparator = (value) => {
      if (typeof value === "number") {
        _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator
        };
        return _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.n.localize(value.toString());
      }
    };
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hasHistogram = false;
    this.histogram = undefined;
    this.histogramStops = undefined;
    this.labelHandles = false;
    this.labelTicks = false;
    this.max = 100;
    this.maxLabel = undefined;
    this.maxValue = undefined;
    this.min = 0;
    this.minLabel = undefined;
    this.minValue = undefined;
    this.mirrored = false;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.pageStep = undefined;
    this.precise = false;
    this.required = false;
    this.snap = false;
    this.step = 1;
    this.ticks = undefined;
    this.value = 0;
    this.scale = "m";
    this.effectiveLocale = "";
    this.minMaxValueRange = null;
    this.minValueDragRange = null;
    this.maxValueDragRange = null;
    this.tickValues = [];
  }
  histogramWatcher(newHistogram) {
    this.hasHistogram = !!newHistogram;
  }
  valueHandler() {
    this.setMinMaxFromValue();
  }
  minMaxValueHandler() {
    this.setValueFromMinMax();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    this.setMinMaxFromValue();
    this.setValueFromMinMax();
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    this.removeDragListeners();
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    this.tickValues = this.generateTickValues();
    if (!isRange(this.value)) {
      this.value = this.clamp(this.value);
    }
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.a)(this, this.value);
    if (this.snap && !isRange(this.value)) {
      this.value = this.getClosestStep(this.value);
    }
    if (this.histogram) {
      this.hasHistogram = true;
    }
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
  }
  componentDidRender() {
    if (this.labelHandles) {
      this.adjustHostObscuredHandleLabel("value");
      if (isRange(this.value)) {
        this.adjustHostObscuredHandleLabel("minValue");
        if (!(this.precise && !this.hasHistogram)) {
          this.hyphenateCollidingRangeHandleLabels();
        }
      }
    }
    this.hideObscuredBoundingTickLabels();
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_5__.u)(this);
  }
  render() {
    const id = this.el.id || this.guid;
    const maxProp = isRange(this.value) ? "maxValue" : "value";
    const value = isRange(this.value) ? this.maxValue : this.value;
    const displayedValue = this.determineGroupSeparator(value);
    const displayedMinValue = this.determineGroupSeparator(this.minValue);
    const min = this.minValue || this.min;
    const useMinValue = this.shouldUseMinValue();
    const minInterval = this.getUnitInterval(useMinValue ? this.minValue : min) * 100;
    const maxInterval = this.getUnitInterval(value) * 100;
    const mirror = this.shouldMirror();
    const leftThumbOffset = `${mirror ? 100 - minInterval : minInterval}%`;
    const rightThumbOffset = `${mirror ? maxInterval : 100 - maxInterval}%`;
    const valueIsRange = isRange(this.value);
    const handleLabelMinValueClasses = `${CSS.handleLabel} ${CSS.handleLabelMinValue}`;
    const handleLabelValueClasses = `${CSS.handleLabel} ${CSS.handleLabelValue}`;
    const handle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const labeledHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const histogramLabeledHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue)));
    const preciseHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" })));
    const histogramPreciseHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const labeledPreciseHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" })));
    const histogramLabeledPreciseHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue)));
    const minHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const minLabeledHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const minHistogramLabeledHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue)));
    const minPreciseHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const minLabeledPreciseHandle = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue)));
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { id: id, onTouchStart: this.handleTouchStart }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.g)(this), class: {
        ["container"]: true,
        ["container--range"]: valueIsRange,
        [`scale--${this.scale}`]: true
      } }, this.renderGraph(), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "track",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeTrackRef }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "track__range", onPointerDown: (event) => this.pointerDownDragStart(event, "minMaxValue"), style: {
        left: `${mirror ? 100 - maxInterval : minInterval}%`,
        right: `${mirror ? minInterval : 100 - maxInterval}%`
      } }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ticks" }, this.tickValues.map((tick) => {
      const tickOffset = `${this.getUnitInterval(tick) * 100}%`;
      let activeTicks = tick >= min && tick <= value;
      if (useMinValue) {
        activeTicks = tick >= this.minValue && tick <= this.maxValue;
      }
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
          tick: true,
          "tick--active": activeTicks
        }, style: {
          left: mirror ? "" : tickOffset,
          right: mirror ? tickOffset : ""
        } }, this.renderTickLabel(tick)));
    }))), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "thumb-container" }, !this.precise && !this.labelHandles && valueIsRange && minHandle, !this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minLabeledHandle, this.precise && !this.labelHandles && valueIsRange && minPreciseHandle, this.precise && this.labelHandles && valueIsRange && minLabeledPreciseHandle, this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minHistogramLabeledHandle, !this.precise && !this.labelHandles && handle, !this.hasHistogram && !this.precise && this.labelHandles && labeledHandle, !this.hasHistogram && this.precise && !this.labelHandles && preciseHandle, this.hasHistogram && this.precise && !this.labelHandles && histogramPreciseHandle, !this.hasHistogram && this.precise && this.labelHandles && labeledPreciseHandle, this.hasHistogram && !this.precise && this.labelHandles && histogramLabeledHandle, this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      histogramLabeledPreciseHandle, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.H, { component: this })))));
  }
  renderGraph() {
    return this.histogram ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-graph", { class: "graph", colorStops: this.histogramStops, data: this.histogram, highlightMax: isRange(this.value) ? this.maxValue : this.value, highlightMin: isRange(this.value) ? this.minValue : this.min, max: this.max, min: this.min })) : null;
  }
  renderTickLabel(tick) {
    const valueIsRange = isRange(this.value);
    const isMinTickLabel = tick === this.min;
    const isMaxTickLabel = tick === this.max;
    const displayedTickValue = this.determineGroupSeparator(tick);
    const tickLabel = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        tick__label: true,
        [CSS.tickMin]: isMinTickLabel,
        [CSS.tickMax]: isMaxTickLabel
      } }, displayedTickValue));
    if (this.labelTicks && !this.hasHistogram && !valueIsRange) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      this.precise &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks && this.hasHistogram && !this.precise && !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      !this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    return null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    const mirror = this.shouldMirror();
    const { activeProp, max, min, pageStep, step } = this;
    const value = this[activeProp];
    const { key } = event;
    if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_6__.i)(key)) {
      event.preventDefault();
      return;
    }
    let adjustment;
    if (key === "ArrowUp" || key === "ArrowRight") {
      const directionFactor = mirror && key === "ArrowRight" ? -1 : 1;
      adjustment = value + step * directionFactor;
    }
    else if (key === "ArrowDown" || key === "ArrowLeft") {
      const directionFactor = mirror && key === "ArrowLeft" ? -1 : 1;
      adjustment = value - step * directionFactor;
    }
    else if (key === "PageUp") {
      if (pageStep) {
        adjustment = value + pageStep;
      }
    }
    else if (key === "PageDown") {
      if (pageStep) {
        adjustment = value - pageStep;
      }
    }
    else if (key === "Home") {
      adjustment = min;
    }
    else if (key === "End") {
      adjustment = max;
    }
    if (isNaN(adjustment)) {
      return;
    }
    event.preventDefault();
    const fixedDecimalAdjustment = Number(adjustment.toFixed((0,_math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_10__.d)(step)));
    this.setValue({
      [activeProp]: this.clamp(fixedDecimalAdjustment, activeProp)
    });
  }
  pointerDownHandler(event) {
    if (this.disabled || !(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
      return;
    }
    const x = event.clientX || event.pageX;
    const position = this.translate(x);
    let prop = "value";
    if (isRange(this.value)) {
      const inRange = position >= this.minValue && position <= this.maxValue;
      if (inRange && this.lastDragProp === "minMaxValue") {
        prop = "minMaxValue";
      }
      else {
        const closerToMax = Math.abs(this.maxValue - position) < Math.abs(this.minValue - position);
        prop = closerToMax || position > this.maxValue ? "maxValue" : "minValue";
      }
    }
    this.lastDragPropValue = this[prop];
    this.dragStart(prop);
    const isThumbActive = this.el.shadowRoot.querySelector(".thumb:active");
    if (!isThumbActive) {
      this.setValue({ [prop]: this.clamp(position, prop) });
    }
    this.focusActiveHandle(x);
  }
  handleTouchStart(event) {
    // needed to prevent extra click at the end of a handle drag
    event.preventDefault();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    const handle = this.minHandle ? this.minHandle : this.maxHandle;
    handle?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  setValueFromMinMax() {
    const { minValue, maxValue } = this;
    if (typeof minValue === "number" && typeof maxValue === "number") {
      this.value = [minValue, maxValue];
    }
  }
  setMinMaxFromValue() {
    const { value } = this;
    if (isRange(value)) {
      this.minValue = value[0];
      this.maxValue = value[1];
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldMirror() {
    return this.mirrored && !this.hasHistogram;
  }
  shouldUseMinValue() {
    if (!isRange(this.value)) {
      return false;
    }
    return ((this.hasHistogram && this.maxValue === 0) || (!this.hasHistogram && this.minValue === 0));
  }
  generateTickValues() {
    const ticks = [];
    let current = this.min;
    while (this.ticks && current < this.max + this.ticks) {
      ticks.push(Math.min(current, this.max));
      current = current + this.ticks;
    }
    return ticks;
  }
  pointerDownDragStart(event, prop) {
    if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
      return;
    }
    this.dragStart(prop);
  }
  dragStart(prop) {
    this.dragProp = prop;
    this.lastDragProp = this.dragProp;
    this.activeProp = prop;
    document.addEventListener("pointermove", this.dragUpdate);
    document.addEventListener("pointerup", this.pointerUpDragEnd);
    document.addEventListener("pointercancel", this.dragEnd);
  }
  focusActiveHandle(valueX) {
    switch (this.dragProp) {
      case "minValue":
        this.minHandle.focus();
        break;
      case "maxValue":
      case "value":
        this.maxHandle.focus();
        break;
      case "minMaxValue":
        this.getClosestHandle(valueX).focus();
        break;
    }
  }
  emitInput() {
    this.calciteSliderInput.emit();
  }
  emitChange() {
    this.calciteSliderChange.emit();
  }
  removeDragListeners() {
    document.removeEventListener("pointermove", this.dragUpdate);
    document.removeEventListener("pointerup", this.pointerUpDragEnd);
    document.removeEventListener("pointercancel", this.dragEnd);
  }
  /**
   * Set prop value(s) if changed at the component level
   *
   * @param {object} values - a set of key/value pairs delineating what properties in the component to update
   */
  setValue(values) {
    let valueChanged;
    Object.keys(values).forEach((propName) => {
      const newValue = values[propName];
      if (!valueChanged) {
        const oldValue = this[propName];
        valueChanged = oldValue !== newValue;
      }
      this[propName] = newValue;
    });
    if (!valueChanged) {
      return;
    }
    const dragging = this.dragProp;
    if (!dragging) {
      this.emitChange();
    }
    this.emitInput();
  }
  /**
   * If number is outside range, constrain to min or max
   *
   * @param value
   * @param prop
   * @internal
   */
  clamp(value, prop) {
    value = (0,_math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_10__.c)(value, this.min, this.max);
    // ensure that maxValue and minValue don't swap positions
    if (prop === "maxValue") {
      value = Math.max(value, this.minValue);
    }
    if (prop === "minValue") {
      value = Math.min(value, this.maxValue);
    }
    return value;
  }
  /**
   * Translate a pixel position to value along the range
   *
   * @param x
   * @internal
   */
  translate(x) {
    const range = this.max - this.min;
    const { left, width } = this.trackEl.getBoundingClientRect();
    const percent = (x - left) / width;
    const mirror = this.shouldMirror();
    const clampedValue = this.clamp(this.min + range * (mirror ? 1 - percent : percent));
    let value = Number(clampedValue.toFixed((0,_math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_10__.d)(this.step)));
    if (this.snap && this.step) {
      value = this.getClosestStep(value);
    }
    return value;
  }
  /**
   * Get closest allowed value along stepped values
   *
   * @param num
   * @internal
   */
  getClosestStep(num) {
    num = Number(this.clamp(num).toFixed((0,_math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_10__.d)(this.step)));
    if (this.step) {
      const step = Math.round(num / this.step) * this.step;
      num = Number(this.clamp(step).toFixed((0,_math_e6aff5b3_js__WEBPACK_IMPORTED_MODULE_10__.d)(this.step)));
    }
    return num;
  }
  getClosestHandle(valueX) {
    return this.getDistanceX(this.maxHandle, valueX) > this.getDistanceX(this.minHandle, valueX)
      ? this.minHandle
      : this.maxHandle;
  }
  getDistanceX(el, valueX) {
    return Math.abs(el.getBoundingClientRect().left - valueX);
  }
  getFontSizeForElement(element) {
    return Number(window.getComputedStyle(element).getPropertyValue("font-size").match(/\d+/)[0]);
  }
  /**
   * Get position of value along range as fractional value
   *
   * @param num
   * @return {number} number in the unit interval [0,1]
   * @internal
   */
  getUnitInterval(num) {
    num = this.clamp(num);
    const range = this.max - this.min;
    return (num - this.min) / range;
  }
  adjustHostObscuredHandleLabel(name) {
    const label = this.el.shadowRoot.querySelector(`.handle__label--${name}`);
    const labelStatic = this.el.shadowRoot.querySelector(`.handle__label--${name}.static`);
    const labelTransformed = this.el.shadowRoot.querySelector(`.handle__label--${name}.transformed`);
    const labelStaticBounds = labelStatic.getBoundingClientRect();
    const labelStaticOffset = this.getHostOffset(labelStaticBounds.left, labelStaticBounds.right);
    label.style.transform = `translateX(${labelStaticOffset}px)`;
    labelTransformed.style.transform = `translateX(${labelStaticOffset}px)`;
  }
  hyphenateCollidingRangeHandleLabels() {
    const { shadowRoot } = this.el;
    const mirror = this.shouldMirror();
    const leftModifier = mirror ? "value" : "minValue";
    const rightModifier = mirror ? "minValue" : "value";
    const leftValueLabel = shadowRoot.querySelector(`.handle__label--${leftModifier}`);
    const leftValueLabelStatic = shadowRoot.querySelector(`.handle__label--${leftModifier}.static`);
    const leftValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${leftModifier}.transformed`);
    const leftValueLabelStaticHostOffset = this.getHostOffset(leftValueLabelStatic.getBoundingClientRect().left, leftValueLabelStatic.getBoundingClientRect().right);
    const rightValueLabel = shadowRoot.querySelector(`.handle__label--${rightModifier}`);
    const rightValueLabelStatic = shadowRoot.querySelector(`.handle__label--${rightModifier}.static`);
    const rightValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${rightModifier}.transformed`);
    const rightValueLabelStaticHostOffset = this.getHostOffset(rightValueLabelStatic.getBoundingClientRect().left, rightValueLabelStatic.getBoundingClientRect().right);
    const labelFontSize = this.getFontSizeForElement(leftValueLabel);
    const labelTransformedOverlap = this.getRangeLabelOverlap(leftValueLabelTransformed, rightValueLabelTransformed);
    const hyphenLabel = leftValueLabel;
    const labelOffset = labelFontSize / 2;
    if (labelTransformedOverlap > 0) {
      hyphenLabel.classList.add("hyphen", "hyphen--wrap");
      if (rightValueLabelStaticHostOffset === 0 && leftValueLabelStaticHostOffset === 0) {
        // Neither handle overlaps the host boundary
        let leftValueLabelTranslate = labelTransformedOverlap / 2 - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        const leftValueLabelTransformedHostOffset = this.getHostOffset(leftValueLabelTransformed.getBoundingClientRect().left +
          leftValueLabelTranslate -
          labelOffset, leftValueLabelTransformed.getBoundingClientRect().right +
          leftValueLabelTranslate -
          labelOffset);
        let rightValueLabelTranslate = labelTransformedOverlap / 2;
        const rightValueLabelTransformedHostOffset = this.getHostOffset(rightValueLabelTransformed.getBoundingClientRect().left + rightValueLabelTranslate, rightValueLabelTransformed.getBoundingClientRect().right + rightValueLabelTranslate);
        if (leftValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += leftValueLabelTransformedHostOffset;
          rightValueLabelTranslate += leftValueLabelTransformedHostOffset;
        }
        if (rightValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += rightValueLabelTransformedHostOffset;
          rightValueLabelTranslate += rightValueLabelTransformedHostOffset;
        }
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${rightValueLabelTranslate}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelTranslate}px)`;
      }
      else if (leftValueLabelStaticHostOffset > 0 || rightValueLabelStaticHostOffset > 0) {
        // labels overlap host boundary on the left side
        leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset + labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
      }
      else if (leftValueLabelStaticHostOffset < 0 || rightValueLabelStaticHostOffset < 0) {
        // labels overlap host boundary on the right side
        let leftValueLabelTranslate = Math.abs(leftValueLabelStaticHostOffset) + labelTransformedOverlap - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
      }
    }
    else {
      hyphenLabel.classList.remove("hyphen", "hyphen--wrap");
      leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      rightValueLabel.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
      rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
    }
  }
  /**
   * Hides bounding tick labels that are obscured by either handle.
   */
  hideObscuredBoundingTickLabels() {
    const valueIsRange = isRange(this.value);
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && valueIsRange && !this.precise) {
      return;
    }
    if (this.hasHistogram && !this.precise && !this.labelHandles) {
      return;
    }
    const minHandle = this.el.shadowRoot.querySelector(".thumb--minValue");
    const maxHandle = this.el.shadowRoot.querySelector(".thumb--value");
    const minTickLabel = this.el.shadowRoot.querySelector(".tick__label--min");
    const maxTickLabel = this.el.shadowRoot.querySelector(".tick__label--max");
    if (!minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity = this.isMinTickLabelObscured(minTickLabel, maxHandle) ? "0" : "1";
      maxTickLabel.style.opacity = this.isMaxTickLabelObscured(maxTickLabel, maxHandle) ? "0" : "1";
    }
    if (minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity =
        this.isMinTickLabelObscured(minTickLabel, minHandle) ||
          this.isMinTickLabelObscured(minTickLabel, maxHandle)
          ? "0"
          : "1";
      maxTickLabel.style.opacity =
        this.isMaxTickLabelObscured(maxTickLabel, minHandle) ||
          (this.isMaxTickLabelObscured(maxTickLabel, maxHandle) && this.hasHistogram)
          ? "0"
          : "1";
    }
  }
  /**
   * Returns an integer representing the number of pixels to offset on the left or right side based on desired position behavior.
   *
   * @param leftBounds
   * @param rightBounds
   * @internal
   */
  getHostOffset(leftBounds, rightBounds) {
    const hostBounds = this.el.getBoundingClientRect();
    const buffer = 7;
    if (leftBounds + buffer < hostBounds.left) {
      return hostBounds.left - leftBounds - buffer;
    }
    if (rightBounds - buffer > hostBounds.right) {
      return -(rightBounds - hostBounds.right) + buffer;
    }
    return 0;
  }
  /**
   * Returns an integer representing the number of pixels that the two given span elements are overlapping, taking into account
   * a space in between the two spans equal to the font-size set on them to account for the space needed to render a hyphen.
   *
   * @param leftLabel
   * @param rightLabel
   */
  getRangeLabelOverlap(leftLabel, rightLabel) {
    const leftLabelBounds = leftLabel.getBoundingClientRect();
    const rightLabelBounds = rightLabel.getBoundingClientRect();
    const leftLabelFontSize = this.getFontSizeForElement(leftLabel);
    const rangeLabelOverlap = leftLabelBounds.right + leftLabelFontSize - rightLabelBounds.left;
    return Math.max(rangeLabelOverlap, 0);
  }
  /**
   * Returns a boolean value representing if the minLabel span element is obscured (being overlapped) by the given handle div element.
   *
   * @param minLabel
   * @param handle
   */
  isMinTickLabelObscured(minLabel, handle) {
    const minLabelBounds = minLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.w)(minLabelBounds, handleBounds);
  }
  /**
   * Returns a boolean value representing if the maxLabel span element is obscured (being overlapped) by the given handle div element.
   *
   * @param maxLabel
   * @param handle
   */
  isMaxTickLabelObscured(maxLabel, handle) {
    const maxLabelBounds = maxLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.w)(maxLabelBounds, handleBounds);
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "histogram": ["histogramWatcher"],
    "value": ["valueHandler"],
    "minValue": ["minMaxValueHandler"],
    "maxValue": ["minMaxValueHandler"]
  }; }
};
Slider.style = sliderCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/math-e6aff5b3.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/math-e6aff5b3.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ clamp),
/* harmony export */   "d": () => (/* binding */ decimalPlaces)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzg5M2VlYWQ2OGVmOTUxOWJkN2NhMjQ0OGI5ZTIxMWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytIO0FBQ2hGO0FBQ2U7QUFDbUI7QUFDc0Q7QUFDaEU7QUFDZDtBQUN3QztBQUNtQjtBQUNEO0FBQy9DO0FBQ25DOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBLEdBQUcsS0FBSyxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSyxF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Q0EsV0FBVyxtREFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQVU7QUFDckI7QUFDQSxnQ0FBZ0M7QUFDaEMsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1aUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1ncmFwaF8yLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL21hdGgtZTZhZmY1YjMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgYSBhcyBnZXRFbGVtZW50LCBmIGFzIGZvcmNlVXBkYXRlLCBjIGFzIGNyZWF0ZUV2ZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCB3IGFzIGludGVyc2VjdHMgfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBhIGFzIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLTQ0NTMwMDAxLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LTMzODlkODcwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsLTU5YzlkNDcyLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlY2ltYWxQbGFjZXMsIGMgYXMgY2xhbXAgfSBmcm9tICcuL21hdGgtZTZhZmY1YjMuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy1kMDhhNjczNy5qcyc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIHNsb3BlIG9mIHRoZSB0YW5nZW50c1xuICogdXNlcyBTdGVmZmVuIGludGVycG9sYXRpb24gYXMgaXQncyBtb25vdG9uaWNcbiAqIGh0dHA6Ly9qcndhbHNoMS5naXRodWIuaW8vcG9zdHMvaW50ZXJwb2xhdGlvbnMvXG4gKlxuICogQHBhcmFtIHAwXG4gKiBAcGFyYW0gcDFcbiAqIEBwYXJhbSBwMlxuICovXG5mdW5jdGlvbiBzbG9wZShwMCwgcDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDFbMF0gLSBwMFswXTtcbiAgY29uc3QgZHgxID0gcDJbMF0gLSBwMVswXTtcbiAgY29uc3QgZHkgPSBwMVsxXSAtIHAwWzFdO1xuICBjb25zdCBkeTEgPSBwMlsxXSAtIHAxWzFdO1xuICBjb25zdCBtID0gZHkgLyAoZHggfHwgKGR4MSA8IDAgJiYgMCkpO1xuICBjb25zdCBtMSA9IGR5MSAvIChkeDEgfHwgKGR4IDwgMCAmJiAwKSk7XG4gIGNvbnN0IHAgPSAobSAqIGR4MSArIG0xICogZHgpIC8gKGR4ICsgZHgxKTtcbiAgcmV0dXJuIChNYXRoLnNpZ24obSkgKyBNYXRoLnNpZ24obTEpKSAqIE1hdGgubWluKE1hdGguYWJzKG0pLCBNYXRoLmFicyhtMSksIDAuNSAqIE1hdGguYWJzKHApKSB8fCAwO1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgc2xvcGUgZm9yIGp1c3Qgb25lIHRhbmdlbnQgKHNpbmdsZS1zaWRlZClcbiAqXG4gKiBAcGFyYW0gcDBcbiAqIEBwYXJhbSBwMVxuICogQHBhcmFtIG1cbiAqL1xuZnVuY3Rpb24gc2xvcGVTaW5nbGUocDAsIHAxLCBtKSB7XG4gIGNvbnN0IGR4ID0gcDFbMF0gLSBwMFswXTtcbiAgY29uc3QgZHkgPSBwMVsxXSAtIHAwWzFdO1xuICByZXR1cm4gZHggPyAoKDMgKiBkeSkgLyBkeCAtIG0pIC8gMiA6IG07XG59XG4vKipcbiAqIEdpdmVuIHR3byBwb2ludHMgYW5kIHRoZWlyIHRhbmdlbnQgc2xvcGVzLFxuICogY2FsY3VsYXRlIHRoZSBiZXppZXIgaGFuZGxlIGNvb3JkaW5hdGVzIGFuZCByZXR1cm4gZHJhdyBjb21tYW5kLlxuICpcbiAqIFRyYW5zbGF0ZXMgSGVybWl0ZSBTcGxpbmUgdG8gQmV6acOpciBjdXJ2ZTpcbiAqIHN0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MjU3NDk0MC9cbiAqXG4gKiBAcGFyYW0gcDBcbiAqIEBwYXJhbSBwMVxuICogQHBhcmFtIG0wXG4gKiBAcGFyYW0gbTFcbiAqIEBwYXJhbSB0XG4gKi9cbmZ1bmN0aW9uIGJlemllcihwMCwgcDEsIG0wLCBtMSwgdCkge1xuICBjb25zdCBbeDAsIHkwXSA9IHAwO1xuICBjb25zdCBbeDEsIHkxXSA9IHAxO1xuICBjb25zdCBkeCA9ICh4MSAtIHgwKSAvIDM7XG4gIGNvbnN0IGgxID0gdChbeDAgKyBkeCwgeTAgKyBkeCAqIG0wXSkuam9pbihcIixcIik7XG4gIGNvbnN0IGgyID0gdChbeDEgLSBkeCwgeTEgLSBkeCAqIG0xXSkuam9pbihcIixcIik7XG4gIGNvbnN0IHAgPSB0KFt4MSwgeTFdKS5qb2luKFwiLFwiKTtcbiAgcmV0dXJuIGBDICR7aDF9ICR7aDJ9ICR7cH1gO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgdHJhbnNsYXRlIGEgcG9pbnRcbiAqIGZyb20gdGhlIGRhdGEgY29vcmRpbmF0ZSBzcGFjZSB0byBzdmcgdmlld2JveCBvcmllbnRlZCBwaXhlbHNcbiAqXG4gKiBAcGFyYW0gcm9vdDBcbiAqIEBwYXJhbSByb290MC53aWR0aFxuICogQHBhcmFtIHJvb3QwLmhlaWdodFxuICogQHBhcmFtIHJvb3QwLm1pblxuICogQHBhcmFtIHJvb3QwLm1heFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUoeyB3aWR0aCwgaGVpZ2h0LCBtaW4sIG1heCB9KSB7XG4gIGNvbnN0IHJhbmdlWCA9IG1heFswXSAtIG1pblswXTtcbiAgY29uc3QgcmFuZ2VZID0gbWF4WzFdIC0gbWluWzFdO1xuICByZXR1cm4gKHBvaW50KSA9PiB7XG4gICAgY29uc3QgeCA9ICgocG9pbnRbMF0gLSBtaW5bMF0pIC8gcmFuZ2VYKSAqIHdpZHRoO1xuICAgIGNvbnN0IHkgPSBoZWlnaHQgLSAocG9pbnRbMV0gLyByYW5nZVkpICogaGVpZ2h0O1xuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG59XG4vKipcbiAqIEdldCB0aGUgbWluIGFuZCBtYXggdmFsdWVzIGZyb20gdGhlIGRhdGFzZXRcbiAqXG4gKiBAcGFyYW0gZGF0YVxuICovXG5mdW5jdGlvbiByYW5nZShkYXRhKSB7XG4gIGNvbnN0IFtzdGFydFgsIHN0YXJ0WV0gPSBkYXRhWzBdO1xuICBjb25zdCBtaW4gPSBbc3RhcnRYLCBzdGFydFldO1xuICBjb25zdCBtYXggPSBbc3RhcnRYLCBzdGFydFldO1xuICByZXR1cm4gZGF0YS5yZWR1Y2UoKHsgbWluLCBtYXggfSwgW3gsIHldKSA9PiAoe1xuICAgIG1pbjogW01hdGgubWluKG1pblswXSwgeCksIE1hdGgubWluKG1pblsxXSwgeSldLFxuICAgIG1heDogW01hdGgubWF4KG1heFswXSwgeCksIE1hdGgubWF4KG1heFsxXSwgeSldXG4gIH0pLCB7IG1pbiwgbWF4IH0pO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBkcmF3aW5nIGNvbW1hbmRzIGZvciBhbiBhcmVhIGdyYXBoXG4gKiByZXR1cm5zIGEgc3RyaW5nIGNhbiBjYW4gYmUgcGFzc2VkIGRpcmVjdGx5IHRvIGEgcGF0aCBlbGVtZW50J3MgYGRgIGF0dHJpYnV0ZVxuICpcbiAqIEBwYXJhbSByb290MFxuICogQHBhcmFtIHJvb3QwLmRhdGFcbiAqIEBwYXJhbSByb290MC5taW5cbiAqIEBwYXJhbSByb290MC5tYXhcbiAqIEBwYXJhbSByb290MC50XG4gKi9cbmZ1bmN0aW9uIGFyZWEoeyBkYXRhLCBtaW4sIG1heCwgdCB9KSB7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIC8vIGltcG9ydGFudCBwb2ludHMgZm9yIGJlZ2lubmluZyBhbmQgZW5kaW5nIHRoZSBwYXRoXG4gIGNvbnN0IFtzdGFydFgsIHN0YXJ0WV0gPSB0KGRhdGFbMF0pO1xuICBjb25zdCBbbWluWCwgbWluWV0gPSB0KG1pbik7XG4gIGNvbnN0IFttYXhYXSA9IHQobWF4KTtcbiAgLy8ga2VlcCB0cmFjayBvZiBwcmV2aW91cyBzbG9wZS9wb2ludHNcbiAgbGV0IG07XG4gIGxldCBwMDtcbiAgbGV0IHAxO1xuICAvLyBpdGVyYXRlIG92ZXIgZGF0YSBwb2ludHMsIGNhbGN1bGF0aW5nIGNvbW1hbmQgZm9yIGVhY2hcbiAgY29uc3QgY29tbWFuZHMgPSBkYXRhLnJlZHVjZSgoYWNjLCBwb2ludCwgaSkgPT4ge1xuICAgIHAwID0gZGF0YVtpIC0gMl07XG4gICAgcDEgPSBkYXRhW2kgLSAxXTtcbiAgICBpZiAoaSA+IDEpIHtcbiAgICAgIGNvbnN0IG0xID0gc2xvcGUocDAsIHAxLCBwb2ludCk7XG4gICAgICBjb25zdCBtMCA9IG0gPT09IHVuZGVmaW5lZCA/IHNsb3BlU2luZ2xlKHAwLCBwMSwgbTEpIDogbTtcbiAgICAgIGNvbnN0IGNvbW1hbmQgPSBiZXppZXIocDAsIHAxLCBtMCwgbTEsIHQpO1xuICAgICAgbSA9IG0xO1xuICAgICAgcmV0dXJuIGAke2FjY30gJHtjb21tYW5kfWA7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIGBNICR7bWluWH0sJHttaW5ZfSBMICR7bWluWH0sJHtzdGFydFl9IEwgJHtzdGFydFh9LCR7c3RhcnRZfWApO1xuICAvLyBjbG9zZSB0aGUgcGF0aFxuICBjb25zdCBsYXN0ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xuICBjb25zdCBlbmQgPSBiZXppZXIocDEsIGxhc3QsIG0sIHNsb3BlU2luZ2xlKHAxLCBsYXN0LCBtKSwgdCk7XG4gIHJldHVybiBgJHtjb21tYW5kc30gJHtlbmR9IEwgJHttYXhYfSwke21pbll9IFpgO1xufVxuXG5jb25zdCBncmFwaENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZToxMDAlfS5zdmd7ZmlsbDpjdXJyZW50Q29sb3I7c3Ryb2tlOnRyYW5zcGFyZW50O21hcmdpbjowcHg7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtwYWRkaW5nOjBweH0uc3ZnIC5ncmFwaC1wYXRoLS1oaWdobGlnaHR7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtvcGFjaXR5OjAuNX1cIjtcblxuY29uc3QgR3JhcGggPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFN0YXRlL1Byb3BzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5ncmFwaElkID0gYGNhbGNpdGUtZ3JhcGgtJHtndWlkKCl9YDtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4gZm9yY2VVcGRhdGUodGhpcykpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuY29sb3JTdG9wcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZ2hsaWdodE1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhpZ2hsaWdodE1heCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBjb2xvclN0b3BzLCBlbCwgaGlnaGxpZ2h0TWF4LCBoaWdobGlnaHRNaW4sIG1pbiwgbWF4IH0gPSB0aGlzO1xuICAgIGNvbnN0IGlkID0gdGhpcy5ncmFwaElkO1xuICAgIGNvbnN0IHsgY2xpZW50SGVpZ2h0OiBoZWlnaHQsIGNsaWVudFdpZHRoOiB3aWR0aCB9ID0gZWw7XG4gICAgLy8gaWYgd2UgaGF2ZSBubyBkYXRhLCByZXR1cm4gZW1wdHkgc3ZnXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJzdmdcIiwgaGVpZ2h0OiBoZWlnaHQsIHByZXNlcnZlQXNwZWN0UmF0aW86IFwibm9uZVwiLCB2aWV3Qm94OiBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWAsIHdpZHRoOiB3aWR0aCB9KSk7XG4gICAgfVxuICAgIGNvbnN0IHsgbWluOiByYW5nZU1pbiwgbWF4OiByYW5nZU1heCB9ID0gcmFuZ2UoZGF0YSk7XG4gICAgbGV0IGN1cnJlbnRNaW4gPSByYW5nZU1pbjtcbiAgICBsZXQgY3VycmVudE1heCA9IHJhbmdlTWF4O1xuICAgIGlmIChtaW4gPCByYW5nZU1pblswXSB8fCBtaW4gPiByYW5nZU1pblswXSkge1xuICAgICAgY3VycmVudE1pbiA9IFttaW4sIDBdO1xuICAgIH1cbiAgICBpZiAobWF4ID4gcmFuZ2VNYXhbMF0gfHwgbWF4IDwgcmFuZ2VNYXhbMF0pIHtcbiAgICAgIGN1cnJlbnRNYXggPSBbbWF4LCByYW5nZU1heFsxXV07XG4gICAgfVxuICAgIGNvbnN0IHQgPSB0cmFuc2xhdGUoeyBtaW46IGN1cnJlbnRNaW4sIG1heDogY3VycmVudE1heCwgd2lkdGgsIGhlaWdodCB9KTtcbiAgICBjb25zdCBbaE1pblhdID0gdChbaGlnaGxpZ2h0TWluLCBjdXJyZW50TWF4WzFdXSk7XG4gICAgY29uc3QgW2hNYXhYXSA9IHQoW2hpZ2hsaWdodE1heCwgY3VycmVudE1heFsxXV0pO1xuICAgIGNvbnN0IGFyZWFQYXRoID0gYXJlYSh7IGRhdGEsIG1pbjogcmFuZ2VNaW4sIG1heDogcmFuZ2VNYXgsIHQgfSk7XG4gICAgY29uc3QgZmlsbCA9IGNvbG9yU3RvcHMgPyBgdXJsKCNsaW5lYXItZ3JhZGllbnQtJHtpZH0pYCA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJzdmdcIiwgaGVpZ2h0OiBoZWlnaHQsIHByZXNlcnZlQXNwZWN0UmF0aW86IFwibm9uZVwiLCB2aWV3Qm94OiBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWAsIHdpZHRoOiB3aWR0aCB9LCBjb2xvclN0b3BzID8gKGgoXCJkZWZzXCIsIG51bGwsIGgoXCJsaW5lYXJHcmFkaWVudFwiLCB7IGlkOiBgbGluZWFyLWdyYWRpZW50LSR7aWR9YCwgeDE6IFwiMFwiLCB4MjogXCIxXCIsIHkxOiBcIjBcIiwgeTI6IFwiMFwiIH0sIGNvbG9yU3RvcHMubWFwKCh7IG9mZnNldCwgY29sb3IsIG9wYWNpdHkgfSkgPT4gKGgoXCJzdG9wXCIsIHsgb2Zmc2V0OiBgJHtvZmZzZXQgKiAxMDB9JWAsIFwic3RvcC1jb2xvclwiOiBjb2xvciwgXCJzdG9wLW9wYWNpdHlcIjogb3BhY2l0eSB9KSkpKSkpIDogbnVsbCwgaGlnaGxpZ2h0TWluICE9PSB1bmRlZmluZWQgPyAoW1xuICAgICAgaChcIm1hc2tcIiwgeyBoZWlnaHQ6IFwiMTAwJVwiLCBpZDogYCR7aWR9MWAsIHdpZHRoOiBcIjEwMCVcIiwgeDogXCIwJVwiLCB5OiBcIjAlXCIgfSwgaChcInBhdGhcIiwgeyBkOiBgXG4gICAgICAgICAgICBNIDAsMFxuICAgICAgICAgICAgTCAke2hNaW5YIC0gMX0sMFxuICAgICAgICAgICAgTCAke2hNaW5YIC0gMX0sJHtoZWlnaHR9XG4gICAgICAgICAgICBMIDAsJHtoZWlnaHR9XG4gICAgICAgICAgICBaXG4gICAgICAgICAgYCwgZmlsbDogXCJ3aGl0ZVwiIH0pKSxcbiAgICAgIGgoXCJtYXNrXCIsIHsgaGVpZ2h0OiBcIjEwMCVcIiwgaWQ6IGAke2lkfTJgLCB3aWR0aDogXCIxMDAlXCIsIHg6IFwiMCVcIiwgeTogXCIwJVwiIH0sIGgoXCJwYXRoXCIsIHsgZDogYFxuICAgICAgICAgICAgTSAke2hNaW5YICsgMX0sMFxuICAgICAgICAgICAgTCAke2hNYXhYIC0gMX0sMFxuICAgICAgICAgICAgTCAke2hNYXhYIC0gMX0sJHtoZWlnaHR9XG4gICAgICAgICAgICBMICR7aE1pblggKyAxfSwgJHtoZWlnaHR9XG4gICAgICAgICAgICBaXG4gICAgICAgICAgYCwgZmlsbDogXCJ3aGl0ZVwiIH0pKSxcbiAgICAgIGgoXCJtYXNrXCIsIHsgaGVpZ2h0OiBcIjEwMCVcIiwgaWQ6IGAke2lkfTNgLCB3aWR0aDogXCIxMDAlXCIsIHg6IFwiMCVcIiwgeTogXCIwJVwiIH0sIGgoXCJwYXRoXCIsIHsgZDogYFxuICAgICAgICAgICAgICAgIE0gJHtoTWF4WCArIDF9LDBcbiAgICAgICAgICAgICAgICBMICR7d2lkdGh9LDBcbiAgICAgICAgICAgICAgICBMICR7d2lkdGh9LCR7aGVpZ2h0fVxuICAgICAgICAgICAgICAgIEwgJHtoTWF4WCArIDF9LCAke2hlaWdodH1cbiAgICAgICAgICAgICAgICBaXG4gICAgICAgICAgICAgIGAsIGZpbGw6IFwid2hpdGVcIiB9KSksXG4gICAgICBoKFwicGF0aFwiLCB7IGNsYXNzOiBcImdyYXBoLXBhdGhcIiwgZDogYXJlYVBhdGgsIGZpbGw6IGZpbGwsIG1hc2s6IGB1cmwoIyR7aWR9MSlgIH0pLFxuICAgICAgaChcInBhdGhcIiwgeyBjbGFzczogXCJncmFwaC1wYXRoLS1oaWdobGlnaHRcIiwgZDogYXJlYVBhdGgsIGZpbGw6IGZpbGwsIG1hc2s6IGB1cmwoIyR7aWR9MilgIH0pLFxuICAgICAgaChcInBhdGhcIiwgeyBjbGFzczogXCJncmFwaC1wYXRoXCIsIGQ6IGFyZWFQYXRoLCBmaWxsOiBmaWxsLCBtYXNrOiBgdXJsKCMke2lkfTMpYCB9KVxuICAgIF0pIDogKGgoXCJwYXRoXCIsIHsgY2xhc3M6IFwiZ3JhcGgtcGF0aFwiLCBkOiBhcmVhUGF0aCwgZmlsbDogZmlsbCB9KSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuR3JhcGguc3R5bGUgPSBncmFwaENzcztcblxuY29uc3QgQ1NTID0ge1xuICBoYW5kbGVMYWJlbDogXCJoYW5kbGVfX2xhYmVsXCIsXG4gIGhhbmRsZUxhYmVsTWluVmFsdWU6IFwiaGFuZGxlX19sYWJlbC0tbWluVmFsdWVcIixcbiAgaGFuZGxlTGFiZWxWYWx1ZTogXCJoYW5kbGVfX2xhYmVsLS12YWx1ZVwiLFxuICB0aWNrTWluOiBcInRpY2tfX2xhYmVsLS1taW5cIixcbiAgdGlja01heDogXCJ0aWNrX19sYWJlbC0tbWF4XCJcbn07XG5cbmNvbnN0IHNsaWRlckNzcyA9IFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9LnNjYWxlLS1zey0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemU6MC42MjVyZW07LS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtZXh0ZW5zaW9uLWhlaWdodDowLjRyZW07LS1jYWxjaXRlLXNsaWRlci1jb250YWluZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0zKX0uc2NhbGUtLXMgLmhhbmRsZV9fbGFiZWwsLnNjYWxlLS1zIC50aWNrX19sYWJlbHtsaW5lLWhlaWdodDouNzVyZW19LnNjYWxlLS1tey0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemU6MC44NzVyZW07LS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtZXh0ZW5zaW9uLWhlaWdodDowLjVyZW07LS1jYWxjaXRlLXNsaWRlci1jb250YWluZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKX0uc2NhbGUtLW0gLmhhbmRsZV9fbGFiZWwsLnNjYWxlLS1tIC50aWNrX19sYWJlbHtsaW5lLWhlaWdodDoxcmVtfS5zY2FsZS0tbHstLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplOjFyZW07LS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtZXh0ZW5zaW9uLWhlaWdodDowLjY1cmVtOy0tY2FsY2l0ZS1zbGlkZXItY29udGFpbmVyLWZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9LnNjYWxlLS1sIC5oYW5kbGVfX2xhYmVsLC5zY2FsZS0tbCAudGlja19fbGFiZWx7bGluZS1oZWlnaHQ6MXJlbX0uaGFuZGxlX19sYWJlbCwudGlja19fbGFiZWx7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1zbGlkZXItY29udGFpbmVyLWZvbnQtc2l6ZSl9Omhvc3R7ZGlzcGxheTpibG9ja30uY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3ctd3JhcDpub3JtYWw7d29yZC1icmVhazpub3JtYWw7cGFkZGluZy1pbmxpbmU6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSkgKiAwLjUpO3BhZGRpbmctYmxvY2s6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSkgKiAwLjUpO21hcmdpbi1ibG9jazpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKSAqIDAuNSk7bWFyZ2luLWlubGluZTowOy0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0OmNhbGMoXFxuICAgIHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKSArIHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1leHRlbnNpb24taGVpZ2h0KVxcbiAgKTt0b3VjaC1hY3Rpb246bm9uZX06aG9zdChbZGlzYWJsZWRdKSAudHJhY2tfX3JhbmdlLDpob3N0KFtkaXNhYmxlZF0pIC50aWNrLS1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5zY2FsZS0tcyAudGh1bWI6bm90KC50aHVtYi0tcHJlY2lzZSl7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMC4zNzVyZW19LnNjYWxlLS1tIC50aHVtYjpub3QoLnRodW1iLS1wcmVjaXNlKXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0wLjVyZW19LnNjYWxlLS1sIC50aHVtYjpub3QoLnRodW1iLS1wcmVjaXNlKXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0wLjU1cmVtfTpob3N0KFtwcmVjaXNlXTpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLmNvbnRhaW5lciAudGh1bWItLXZhbHVley0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpICogLTEpfS50aHVtYi1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7bWF4LWlubGluZS1zaXplOjEwMCV9LnRodW1iey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteC1vZmZzZXQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSkgKiAwLjUpO3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nOjBweDtmb250LWZhbWlseTppbmhlcml0O291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLWNhbGNpdGUtc2xpZGVyLXRodW1iLXgtb2Zmc2V0KSwgdmFyKC0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQpKX0udGh1bWIgLmhhbmRsZV9fbGFiZWwuc3RhdGljLC50aHVtYiAuaGFuZGxlX19sYWJlbC50cmFuc2Zvcm1lZHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jazowcHg7b3BhY2l0eTowfS50aHVtYiAuaGFuZGxlX19sYWJlbC5oeXBoZW46OmFmdGVye2NvbnRlbnQ6XFxcIuKAlFxcXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7aW5saW5lLXNpemU6MWVtfS50aHVtYiAuaGFuZGxlX19sYWJlbC5oeXBoZW4tLXdyYXB7ZGlzcGxheTpmbGV4fS50aHVtYiAuaGFuZGxle2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItcmFkaXVzOjk5OTlweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKTtib3gtc2hhZG93OjAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLXRleHQtMykgaW5zZXQ7dHJhbnNpdGlvbjpib3JkZXIgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bSkgZWFzZSwgYmFja2dyb3VuZC1jb2xvciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBlYXNlLCBib3gtc2hhZG93IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZX0udGh1bWIgLmhhbmRsZS1leHRlbnNpb257aW5saW5lLXNpemU6MC4xMjVyZW07YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtZXh0ZW5zaW9uLWhlaWdodCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LnRodW1iOmhvdmVyIC5oYW5kbGV7Ym94LXNoYWRvdzowIDAgMCAzcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkgaW5zZXR9LnRodW1iOmhvdmVyIC5oYW5kbGUtZXh0ZW5zaW9ue2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LnRodW1iOmZvY3VzIC5oYW5kbGV7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LnRodW1iOmZvY3VzIC5oYW5kbGUtZXh0ZW5zaW9ue2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LnRodW1iLnRodW1iLS1taW5WYWx1ZXt0cmFuc2Zvcm06dHJhbnNsYXRlKGNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteC1vZmZzZXQpICogLTEpLCB2YXIoLS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldCkpfS50aHVtYi50aHVtYi0tcHJlY2lzZXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0wLjEyNXJlbX06aG9zdChbbGFiZWwtaGFuZGxlc10pIC50aHVtYnstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXgtb2Zmc2V0OjUwJX06aG9zdChbbGFiZWwtaGFuZGxlc10pOmhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAuc2NhbGUtLXMgLnRodW1iOm5vdCgudGh1bWItLXByZWNpc2Upey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTEuNDM3NXJlbX06aG9zdChbbGFiZWwtaGFuZGxlc10pOmhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAuc2NhbGUtLW0gLnRodW1iOm5vdCgudGh1bWItLXByZWNpc2Upey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTEuODc1cmVtfTpob3N0KFtsYWJlbC1oYW5kbGVzXSk6aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpIC5zY2FsZS0tbCAudGh1bWI6bm90KC50aHVtYi0tcHJlY2lzZSl7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMnJlbX06aG9zdChbaGFzLWhpc3RvZ3JhbV1bbGFiZWwtaGFuZGxlc10pIC5oYW5kbGVfX2xhYmVsLDpob3N0KFtsYWJlbC1oYW5kbGVzXTpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnRodW1iLS1taW5WYWx1ZS50aHVtYi0tcHJlY2lzZSAuaGFuZGxlX19sYWJlbHttYXJnaW4tYmxvY2stc3RhcnQ6MC41ZW19Omhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pOm5vdChbcHJlY2lzZV0pKSAuaGFuZGxlX19sYWJlbCw6aG9zdChbbGFiZWwtaGFuZGxlc106bm90KFtoYXMtaGlzdG9ncmFtXSkpIC50aHVtYi0tdmFsdWUgLmhhbmRsZV9fbGFiZWx7bWFyZ2luLWJsb2NrLWVuZDowLjVlbX06aG9zdChbbGFiZWwtaGFuZGxlc11bcHJlY2lzZV0pOmhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAuc2NhbGUtLXMgLnRodW1iLS12YWx1ZXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0yLjA3NXJlbX06aG9zdChbbGFiZWwtaGFuZGxlc11bcHJlY2lzZV0pOmhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAuc2NhbGUtLW0gLnRodW1iLS12YWx1ZXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0yLjc1cmVtfTpob3N0KFtsYWJlbC1oYW5kbGVzXVtwcmVjaXNlXSk6aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpIC5zY2FsZS0tbCAudGh1bWItLXZhbHVley0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTMuMDYyNXJlbX0udGh1bWI6Zm9jdXMgLmhhbmRsZSwudGh1bWItLWFjdGl2ZSAuaGFuZGxle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7Ym94LXNoYWRvdzowIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KX0udGh1bWI6aG92ZXIudGh1bWItLXByZWNpc2U6YWZ0ZXIsLnRodW1iOmZvY3VzLnRodW1iLS1wcmVjaXNlOmFmdGVyLC50aHVtYi0tYWN0aXZlLnRodW1iLS1wcmVjaXNlOmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LnRyYWNre3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6MC4xMjVyZW07Ym9yZGVyLXJhZGl1czowcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBlYXNlLWlufS50cmFja19fcmFuZ2V7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O2Jsb2NrLXNpemU6MC4xMjVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0uY29udGFpbmVyLS1yYW5nZSAudHJhY2tfX3JhbmdlOmhvdmVye2N1cnNvcjpldy1yZXNpemV9LmNvbnRhaW5lci0tcmFuZ2UgLnRyYWNrX19yYW5nZTphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtpbmxpbmUtc2l6ZToxMDAlO2NvbnRlbnQ6XFxcIlxcXCI7aW5zZXQtYmxvY2stc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpICogMC41ICogLTEpO2Jsb2NrLXNpemU6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSkgKyB2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtZXh0ZW5zaW9uLWhlaWdodCkpfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXsudGh1bWJ7b3V0bGluZS13aWR0aDowO291dGxpbmUtb2Zmc2V0OjB9LmhhbmRsZXtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9LnRodW1iOmZvY3VzIC5oYW5kbGUsLnRodW1iIC5oYW5kbGUtZXh0ZW5zaW9uLC50aHVtYjpob3ZlciAuaGFuZGxlLWV4dGVuc2lvbiwudGh1bWI6Zm9jdXMgLmhhbmRsZS1leHRlbnNpb24sLnRodW1iOmFjdGl2ZSAuaGFuZGxlLWV4dGVuc2lvbntiYWNrZ3JvdW5kLWNvbG9yOmNhbnZhc1RleHR9LnRyYWNre2JhY2tncm91bmQtY29sb3I6Y2FudmFzVGV4dH0udHJhY2tfX3Jhbmdle2JhY2tncm91bmQtY29sb3I6aGlnaGxpZ2h0fX0udGlja3twb3NpdGlvbjphYnNvbHV0ZTtibG9jay1zaXplOjAuMjVyZW07aW5saW5lLXNpemU6MC4xMjVyZW07Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtpbnNldC1ibG9jay1zdGFydDotMnB4O3BvaW50ZXItZXZlbnRzOm5vbmU7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKC0xICogMC4xMjVyZW0pfS50aWNrLS1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0udGlja19fbGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZTttYXJnaW4tYmxvY2stc3RhcnQ6MC44NzVyZW07ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnRpY2tfX2xhYmVsLS1taW57dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LnRpY2tfX2xhYmVsLS1tYXh7dHJhbnNpdGlvbjpvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0KX06aG9zdChbaGFzLWhpc3RvZ3JhbV1bbGFiZWwtaGFuZGxlc10pIC50aWNrX19sYWJlbC0tbWluLDpob3N0KFtoYXMtaGlzdG9ncmFtXVtsYWJlbC1oYW5kbGVzXSkgLnRpY2tfX2xhYmVsLS1tYXgsOmhvc3QoW2hhcy1oaXN0b2dyYW1dW3ByZWNpc2VdKSAudGlja19fbGFiZWwtLW1pbiw6aG9zdChbaGFzLWhpc3RvZ3JhbV1bcHJlY2lzZV0pIC50aWNrX19sYWJlbC0tbWF4e2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LmdyYXBoe2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtibG9jay1zaXplOjQ4cHh9Omhvc3QoW2xhYmVsLXRpY2tzXVt0aWNrc10pIC5jb250YWluZXJ7cGFkZGluZy1ibG9jay1lbmQ6Y2FsYygwLjg3NXJlbSArIHZhcigtLWNhbGNpdGUtc2xpZGVyLWNvbnRhaW5lci1mb250LXNpemUpKX06aG9zdChbaGFzLWhpc3RvZ3JhbV0pOmhvc3QoW3ByZWNpc2VdW2xhYmVsLWhhbmRsZXNdKSAuY29udGFpbmVye3BhZGRpbmctYmxvY2stZW5kOmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KSArIDFlbSl9Omhvc3QoW2hhcy1oaXN0b2dyYW1dKTpob3N0KFtsYWJlbC1oYW5kbGVzXTpub3QoW3ByZWNpc2VdKSkgLmNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLWVuZDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKSAqIDAuNSArIDFlbSl9Omhvc3QoW2hhcy1oaXN0b2dyYW1dKTpob3N0KFtwcmVjaXNlXTpub3QoW2xhYmVsLWhhbmRsZXNdKSkgLmNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpfTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSk6aG9zdChbcHJlY2lzZV06bm90KFtsYWJlbC1oYW5kbGVzXSkpIC5jb250YWluZXJ7cGFkZGluZy1ibG9jay1zdGFydDp2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpfTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSk6aG9zdChbcHJlY2lzZV06bm90KFtsYWJlbC1oYW5kbGVzXSkpIC5jb250YWluZXItLXJhbmdle3BhZGRpbmctYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCl9Omhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKTpob3N0KFtsYWJlbC1oYW5kbGVzXTpub3QoW3ByZWNpc2VdKSkgLmNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KSArIDRweCl9Omhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKTpob3N0KFtsYWJlbC1oYW5kbGVzXVtwcmVjaXNlXSkgLmNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KSArIHZhcigtLWNhbGNpdGUtc2xpZGVyLWNvbnRhaW5lci1mb250LXNpemUpICsgNHB4KX06aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpOmhvc3QoW2xhYmVsLWhhbmRsZXNdW3ByZWNpc2VdKSAuY29udGFpbmVyLS1yYW5nZXtwYWRkaW5nLWJsb2NrLWVuZDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCkgKyB2YXIoLS1jYWxjaXRlLXNsaWRlci1jb250YWluZXItZm9udC1zaXplKSArIDRweCl9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmZ1bmN0aW9uIGlzUmFuZ2UodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuY29uc3QgU2xpZGVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVTbGlkZXJJbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVNsaWRlcklucHV0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVNsaWRlckNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVNsaWRlckNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmFjdGl2ZVByb3AgPSBcInZhbHVlXCI7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtc2xpZGVyLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5kcmFnVXBkYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuZHJhZ1Byb3ApIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnRyYW5zbGF0ZShldmVudC5jbGllbnRYIHx8IGV2ZW50LnBhZ2VYKTtcbiAgICAgICAgaWYgKGlzUmFuZ2UodGhpcy52YWx1ZSkgJiYgdGhpcy5kcmFnUHJvcCA9PT0gXCJtaW5NYXhWYWx1ZVwiKSB7XG4gICAgICAgICAgaWYgKHRoaXMubWluVmFsdWVEcmFnUmFuZ2UgJiYgdGhpcy5tYXhWYWx1ZURyYWdSYW5nZSAmJiB0aGlzLm1pbk1heFZhbHVlUmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01pblZhbHVlID0gdmFsdWUgLSB0aGlzLm1pblZhbHVlRHJhZ1JhbmdlO1xuICAgICAgICAgICAgY29uc3QgbmV3TWF4VmFsdWUgPSB2YWx1ZSArIHRoaXMubWF4VmFsdWVEcmFnUmFuZ2U7XG4gICAgICAgICAgICBpZiAobmV3TWF4VmFsdWUgPD0gdGhpcy5tYXggJiZcbiAgICAgICAgICAgICAgbmV3TWluVmFsdWUgPj0gdGhpcy5taW4gJiZcbiAgICAgICAgICAgICAgbmV3TWF4VmFsdWUgLSBuZXdNaW5WYWx1ZSA9PT0gdGhpcy5taW5NYXhWYWx1ZVJhbmdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICAgICAgICAgIG1pblZhbHVlOiB0aGlzLmNsYW1wKG5ld01pblZhbHVlLCBcIm1pblZhbHVlXCIpLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlOiB0aGlzLmNsYW1wKG5ld01heFZhbHVlLCBcIm1heFZhbHVlXCIpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWluVmFsdWVEcmFnUmFuZ2UgPSB2YWx1ZSAtIHRoaXMubWluVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlRHJhZ1JhbmdlID0gdGhpcy5tYXhWYWx1ZSAtIHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5taW5NYXhWYWx1ZVJhbmdlID0gdGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUoeyBbdGhpcy5kcmFnUHJvcF06IHRoaXMuY2xhbXAodmFsdWUsIHRoaXMuZHJhZ1Byb3ApIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnBvaW50ZXJVcERyYWdFbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRyYWdFbmQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5kcmFnRW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZURyYWdMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuZm9jdXNBY3RpdmVIYW5kbGUoZXZlbnQuY2xpZW50WCk7XG4gICAgICBpZiAodGhpcy5sYXN0RHJhZ1Byb3BWYWx1ZSAhPSB0aGlzW3RoaXMuZHJhZ1Byb3BdKSB7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kcmFnUHJvcCA9IG51bGw7XG4gICAgICB0aGlzLmxhc3REcmFnUHJvcFZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMubWluVmFsdWVEcmFnUmFuZ2UgPSBudWxsO1xuICAgICAgdGhpcy5tYXhWYWx1ZURyYWdSYW5nZSA9IG51bGw7XG4gICAgICB0aGlzLm1pbk1heFZhbHVlUmFuZ2UgPSBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByZWZlcmVuY2Ugb2YgdGhlIHRyYWNrIEVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICovXG4gICAgdGhpcy5zdG9yZVRyYWNrUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMudHJhY2tFbCA9IG5vZGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbG9jYWxpemVkIGxhYmVsIHZhbHVlIGJhc2VkIGlmIHRoZSBncm91cFNlcGFyYXRvciBwcm9wIGlzIHBhcnNlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHRoaXMuZGV0ZXJtaW5lR3JvdXBTZXBhcmF0b3IgPSAodmFsdWUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICAgIHVzZUdyb3VwaW5nOiB0aGlzLmdyb3VwU2VwYXJhdG9yXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3JvdXBTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0hpc3RvZ3JhbSA9IGZhbHNlO1xuICAgIHRoaXMuaGlzdG9ncmFtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlzdG9ncmFtU3RvcHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbEhhbmRsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsVGlja3MgPSBmYWxzZTtcbiAgICB0aGlzLm1heCA9IDEwMDtcbiAgICB0aGlzLm1heExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSAwO1xuICAgIHRoaXMubWluTGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pcnJvcmVkID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZVN0ZXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmVjaXNlID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc25hcCA9IGZhbHNlO1xuICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgdGhpcy50aWNrcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMubWluTWF4VmFsdWVSYW5nZSA9IG51bGw7XG4gICAgdGhpcy5taW5WYWx1ZURyYWdSYW5nZSA9IG51bGw7XG4gICAgdGhpcy5tYXhWYWx1ZURyYWdSYW5nZSA9IG51bGw7XG4gICAgdGhpcy50aWNrVmFsdWVzID0gW107XG4gIH1cbiAgaGlzdG9ncmFtV2F0Y2hlcihuZXdIaXN0b2dyYW0pIHtcbiAgICB0aGlzLmhhc0hpc3RvZ3JhbSA9ICEhbmV3SGlzdG9ncmFtO1xuICB9XG4gIHZhbHVlSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldE1pbk1heEZyb21WYWx1ZSgpO1xuICB9XG4gIG1pbk1heFZhbHVlSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFZhbHVlRnJvbU1pbk1heCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgdGhpcy5zZXRNaW5NYXhGcm9tVmFsdWUoKTtcbiAgICB0aGlzLnNldFZhbHVlRnJvbU1pbk1heCgpO1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZURyYWdMaXN0ZW5lcnMoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMudGlja1ZhbHVlcyA9IHRoaXMuZ2VuZXJhdGVUaWNrVmFsdWVzKCk7XG4gICAgaWYgKCFpc1JhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5jbGFtcCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgYWZ0ZXJDb25uZWN0RGVmYXVsdFZhbHVlU2V0KHRoaXMsIHRoaXMudmFsdWUpO1xuICAgIGlmICh0aGlzLnNuYXAgJiYgIWlzUmFuZ2UodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldENsb3Nlc3RTdGVwKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oaXN0b2dyYW0pIHtcbiAgICAgIHRoaXMuaGFzSGlzdG9ncmFtID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmxhYmVsSGFuZGxlcykge1xuICAgICAgdGhpcy5hZGp1c3RIb3N0T2JzY3VyZWRIYW5kbGVMYWJlbChcInZhbHVlXCIpO1xuICAgICAgaWYgKGlzUmFuZ2UodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5hZGp1c3RIb3N0T2JzY3VyZWRIYW5kbGVMYWJlbChcIm1pblZhbHVlXCIpO1xuICAgICAgICBpZiAoISh0aGlzLnByZWNpc2UgJiYgIXRoaXMuaGFzSGlzdG9ncmFtKSkge1xuICAgICAgICAgIHRoaXMuaHlwaGVuYXRlQ29sbGlkaW5nUmFuZ2VIYW5kbGVMYWJlbHMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmhpZGVPYnNjdXJlZEJvdW5kaW5nVGlja0xhYmVscygpO1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICBjb25zdCBtYXhQcm9wID0gaXNSYW5nZSh0aGlzLnZhbHVlKSA/IFwibWF4VmFsdWVcIiA6IFwidmFsdWVcIjtcbiAgICBjb25zdCB2YWx1ZSA9IGlzUmFuZ2UodGhpcy52YWx1ZSkgPyB0aGlzLm1heFZhbHVlIDogdGhpcy52YWx1ZTtcbiAgICBjb25zdCBkaXNwbGF5ZWRWYWx1ZSA9IHRoaXMuZGV0ZXJtaW5lR3JvdXBTZXBhcmF0b3IodmFsdWUpO1xuICAgIGNvbnN0IGRpc3BsYXllZE1pblZhbHVlID0gdGhpcy5kZXRlcm1pbmVHcm91cFNlcGFyYXRvcih0aGlzLm1pblZhbHVlKTtcbiAgICBjb25zdCBtaW4gPSB0aGlzLm1pblZhbHVlIHx8IHRoaXMubWluO1xuICAgIGNvbnN0IHVzZU1pblZhbHVlID0gdGhpcy5zaG91bGRVc2VNaW5WYWx1ZSgpO1xuICAgIGNvbnN0IG1pbkludGVydmFsID0gdGhpcy5nZXRVbml0SW50ZXJ2YWwodXNlTWluVmFsdWUgPyB0aGlzLm1pblZhbHVlIDogbWluKSAqIDEwMDtcbiAgICBjb25zdCBtYXhJbnRlcnZhbCA9IHRoaXMuZ2V0VW5pdEludGVydmFsKHZhbHVlKSAqIDEwMDtcbiAgICBjb25zdCBtaXJyb3IgPSB0aGlzLnNob3VsZE1pcnJvcigpO1xuICAgIGNvbnN0IGxlZnRUaHVtYk9mZnNldCA9IGAke21pcnJvciA/IDEwMCAtIG1pbkludGVydmFsIDogbWluSW50ZXJ2YWx9JWA7XG4gICAgY29uc3QgcmlnaHRUaHVtYk9mZnNldCA9IGAke21pcnJvciA/IG1heEludGVydmFsIDogMTAwIC0gbWF4SW50ZXJ2YWx9JWA7XG4gICAgY29uc3QgdmFsdWVJc1JhbmdlID0gaXNSYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3NlcyA9IGAke0NTUy5oYW5kbGVMYWJlbH0gJHtDU1MuaGFuZGxlTGFiZWxNaW5WYWx1ZX1gO1xuICAgIGNvbnN0IGhhbmRsZUxhYmVsVmFsdWVDbGFzc2VzID0gYCR7Q1NTLmhhbmRsZUxhYmVsfSAke0NTUy5oYW5kbGVMYWJlbFZhbHVlfWA7XG4gICAgY29uc3QgaGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSkpKTtcbiAgICBjb25zdCBsYWJlbGVkSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbFZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IGhpc3RvZ3JhbUxhYmVsZWRIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdmFsdWVJc1JhbmdlID8gdGhpcy5tYXhMYWJlbCA6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLXZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmxhc3REcmFnUHJvcCAhPT0gXCJtaW5NYXhWYWx1ZVwiICYmIHRoaXMuZHJhZ1Byb3AgPT09IG1heFByb3BcbiAgICAgIH0sIG9uQmx1cjogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG51bGwpLCBvbkZvY3VzOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbWF4UHJvcCksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgbWF4UHJvcCksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IHJpZ2h0OiByaWdodFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4SGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogaGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXMgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbFZhbHVlQ2xhc3Nlc30gc3RhdGljYCB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSB0cmFuc2Zvcm1lZGAgfSwgZGlzcGxheWVkVmFsdWUpKSk7XG4gICAgY29uc3QgcHJlY2lzZUhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB2YWx1ZUlzUmFuZ2UgPyB0aGlzLm1heExhYmVsIDogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tdmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMubGFzdERyYWdQcm9wICE9PSBcIm1pbk1heFZhbHVlXCIgJiYgdGhpcy5kcmFnUHJvcCA9PT0gbWF4UHJvcCxcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSkpKTtcbiAgICBjb25zdCBoaXN0b2dyYW1QcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wLFxuICAgICAgICBcInRodW1iLS1wcmVjaXNlXCI6IHRydWVcbiAgICAgIH0sIG9uQmx1cjogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG51bGwpLCBvbkZvY3VzOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbWF4UHJvcCksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgbWF4UHJvcCksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IHJpZ2h0OiByaWdodFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4SGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IGxhYmVsZWRQcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wLFxuICAgICAgICBcInRodW1iLS1wcmVjaXNlXCI6IHRydWVcbiAgICAgIH0sIG9uQmx1cjogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG51bGwpLCBvbkZvY3VzOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbWF4UHJvcCksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgbWF4UHJvcCksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IHJpZ2h0OiByaWdodFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4SGFuZGxlID0gZWwpIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGhhbmRsZUxhYmVsVmFsdWVDbGFzc2VzIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHN0YXRpY2AgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbFZhbHVlQ2xhc3Nlc30gdHJhbnNmb3JtZWRgIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlLWV4dGVuc2lvblwiIH0pKSk7XG4gICAgY29uc3QgaGlzdG9ncmFtTGFiZWxlZFByZWNpc2VIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdmFsdWVJc1JhbmdlID8gdGhpcy5tYXhMYWJlbCA6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLXZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmxhc3REcmFnUHJvcCAhPT0gXCJtaW5NYXhWYWx1ZVwiICYmIHRoaXMuZHJhZ1Byb3AgPT09IG1heFByb3AsXG4gICAgICAgIFwidGh1bWItLXByZWNpc2VcIjogdHJ1ZVxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBtYXhQcm9wKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBtYXhQcm9wKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgcmlnaHQ6IHJpZ2h0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5tYXhIYW5kbGUgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZS1leHRlbnNpb25cIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbFZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRWYWx1ZSkpKTtcbiAgICBjb25zdCBtaW5IYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHRoaXMubWluVmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1taW5WYWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5kcmFnUHJvcCA9PT0gXCJtaW5WYWx1ZVwiXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IFwibWluVmFsdWVcIiksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5WYWx1ZVwiKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgbGVmdDogbGVmdFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IG1pbkxhYmVsZWRIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHRoaXMubWluVmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1taW5WYWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5kcmFnUHJvcCA9PT0gXCJtaW5WYWx1ZVwiXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IFwibWluVmFsdWVcIiksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5WYWx1ZVwiKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgbGVmdDogbGVmdFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGhhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXN9IHN0YXRpY2AgfSwgZGlzcGxheWVkTWluVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3Nlc30gdHJhbnNmb3JtZWRgIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pKSk7XG4gICAgY29uc3QgbWluSGlzdG9ncmFtTGFiZWxlZEhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdGhpcy5taW5WYWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLW1pblZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmRyYWdQcm9wID09PSBcIm1pblZhbHVlXCJcbiAgICAgIH0sIG9uQmx1cjogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG51bGwpLCBvbkZvY3VzOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gXCJtaW5WYWx1ZVwiKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBcIm1pblZhbHVlXCIpLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyBsZWZ0OiBsZWZ0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5taW5IYW5kbGUgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSkpKTtcbiAgICBjb25zdCBtaW5QcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB0aGlzLm1pblZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tbWluVmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMuZHJhZ1Byb3AgPT09IFwibWluVmFsdWVcIixcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IFwibWluVmFsdWVcIiksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5WYWx1ZVwiKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgbGVmdDogbGVmdFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IG1pbkxhYmVsZWRQcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB0aGlzLm1pblZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tbWluVmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMuZHJhZ1Byb3AgPT09IFwibWluVmFsdWVcIixcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IFwibWluVmFsdWVcIiksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5WYWx1ZVwiKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgbGVmdDogbGVmdFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogaGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXMgfSwgZGlzcGxheWVkTWluVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3Nlc30gc3RhdGljYCB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzfSB0cmFuc2Zvcm1lZGAgfSwgZGlzcGxheWVkTWluVmFsdWUpKSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgaWQ6IGlkLCBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IGdldExhYmVsVGV4dCh0aGlzKSwgY2xhc3M6IHtcbiAgICAgICAgW1wiY29udGFpbmVyXCJdOiB0cnVlLFxuICAgICAgICBbXCJjb250YWluZXItLXJhbmdlXCJdOiB2YWx1ZUlzUmFuZ2UsXG4gICAgICAgIFtgc2NhbGUtLSR7dGhpcy5zY2FsZX1gXTogdHJ1ZVxuICAgICAgfSB9LCB0aGlzLnJlbmRlckdyYXBoKCksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFja1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc3RvcmVUcmFja1JlZiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhY2tfX3JhbmdlXCIsIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5NYXhWYWx1ZVwiKSwgc3R5bGU6IHtcbiAgICAgICAgbGVmdDogYCR7bWlycm9yID8gMTAwIC0gbWF4SW50ZXJ2YWwgOiBtaW5JbnRlcnZhbH0lYCxcbiAgICAgICAgcmlnaHQ6IGAke21pcnJvciA/IG1pbkludGVydmFsIDogMTAwIC0gbWF4SW50ZXJ2YWx9JWBcbiAgICAgIH0gfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0aWNrc1wiIH0sIHRoaXMudGlja1ZhbHVlcy5tYXAoKHRpY2spID0+IHtcbiAgICAgIGNvbnN0IHRpY2tPZmZzZXQgPSBgJHt0aGlzLmdldFVuaXRJbnRlcnZhbCh0aWNrKSAqIDEwMH0lYDtcbiAgICAgIGxldCBhY3RpdmVUaWNrcyA9IHRpY2sgPj0gbWluICYmIHRpY2sgPD0gdmFsdWU7XG4gICAgICBpZiAodXNlTWluVmFsdWUpIHtcbiAgICAgICAgYWN0aXZlVGlja3MgPSB0aWNrID49IHRoaXMubWluVmFsdWUgJiYgdGljayA8PSB0aGlzLm1heFZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChoKFwic3BhblwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgdGljazogdHJ1ZSxcbiAgICAgICAgICBcInRpY2stLWFjdGl2ZVwiOiBhY3RpdmVUaWNrc1xuICAgICAgICB9LCBzdHlsZToge1xuICAgICAgICAgIGxlZnQ6IG1pcnJvciA/IFwiXCIgOiB0aWNrT2Zmc2V0LFxuICAgICAgICAgIHJpZ2h0OiBtaXJyb3IgPyB0aWNrT2Zmc2V0IDogXCJcIlxuICAgICAgICB9IH0sIHRoaXMucmVuZGVyVGlja0xhYmVsKHRpY2spKSk7XG4gICAgfSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRodW1iLWNvbnRhaW5lclwiIH0sICF0aGlzLnByZWNpc2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzICYmIHZhbHVlSXNSYW5nZSAmJiBtaW5IYW5kbGUsICF0aGlzLmhhc0hpc3RvZ3JhbSAmJlxuICAgICAgIXRoaXMucHJlY2lzZSAmJlxuICAgICAgdGhpcy5sYWJlbEhhbmRsZXMgJiZcbiAgICAgIHZhbHVlSXNSYW5nZSAmJlxuICAgICAgbWluTGFiZWxlZEhhbmRsZSwgdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiB2YWx1ZUlzUmFuZ2UgJiYgbWluUHJlY2lzZUhhbmRsZSwgdGhpcy5wcmVjaXNlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIHZhbHVlSXNSYW5nZSAmJiBtaW5MYWJlbGVkUHJlY2lzZUhhbmRsZSwgdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzICYmXG4gICAgICB2YWx1ZUlzUmFuZ2UgJiZcbiAgICAgIG1pbkhpc3RvZ3JhbUxhYmVsZWRIYW5kbGUsICF0aGlzLnByZWNpc2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzICYmIGhhbmRsZSwgIXRoaXMuaGFzSGlzdG9ncmFtICYmICF0aGlzLnByZWNpc2UgJiYgdGhpcy5sYWJlbEhhbmRsZXMgJiYgbGFiZWxlZEhhbmRsZSwgIXRoaXMuaGFzSGlzdG9ncmFtICYmIHRoaXMucHJlY2lzZSAmJiAhdGhpcy5sYWJlbEhhbmRsZXMgJiYgcHJlY2lzZUhhbmRsZSwgdGhpcy5oYXNIaXN0b2dyYW0gJiYgdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiBoaXN0b2dyYW1QcmVjaXNlSGFuZGxlLCAhdGhpcy5oYXNIaXN0b2dyYW0gJiYgdGhpcy5wcmVjaXNlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIGxhYmVsZWRQcmVjaXNlSGFuZGxlLCB0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdGhpcy5wcmVjaXNlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIGhpc3RvZ3JhbUxhYmVsZWRIYW5kbGUsIHRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICB0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzICYmXG4gICAgICBoaXN0b2dyYW1MYWJlbGVkUHJlY2lzZUhhbmRsZSwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpKSk7XG4gIH1cbiAgcmVuZGVyR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlzdG9ncmFtID8gKGgoXCJjYWxjaXRlLWdyYXBoXCIsIHsgY2xhc3M6IFwiZ3JhcGhcIiwgY29sb3JTdG9wczogdGhpcy5oaXN0b2dyYW1TdG9wcywgZGF0YTogdGhpcy5oaXN0b2dyYW0sIGhpZ2hsaWdodE1heDogaXNSYW5nZSh0aGlzLnZhbHVlKSA/IHRoaXMubWF4VmFsdWUgOiB0aGlzLnZhbHVlLCBoaWdobGlnaHRNaW46IGlzUmFuZ2UodGhpcy52YWx1ZSkgPyB0aGlzLm1pblZhbHVlIDogdGhpcy5taW4sIG1heDogdGhpcy5tYXgsIG1pbjogdGhpcy5taW4gfSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJUaWNrTGFiZWwodGljaykge1xuICAgIGNvbnN0IHZhbHVlSXNSYW5nZSA9IGlzUmFuZ2UodGhpcy52YWx1ZSk7XG4gICAgY29uc3QgaXNNaW5UaWNrTGFiZWwgPSB0aWNrID09PSB0aGlzLm1pbjtcbiAgICBjb25zdCBpc01heFRpY2tMYWJlbCA9IHRpY2sgPT09IHRoaXMubWF4O1xuICAgIGNvbnN0IGRpc3BsYXllZFRpY2tWYWx1ZSA9IHRoaXMuZGV0ZXJtaW5lR3JvdXBTZXBhcmF0b3IodGljayk7XG4gICAgY29uc3QgdGlja0xhYmVsID0gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgdGlja19fbGFiZWw6IHRydWUsXG4gICAgICAgIFtDU1MudGlja01pbl06IGlzTWluVGlja0xhYmVsLFxuICAgICAgICBbQ1NTLnRpY2tNYXhdOiBpc01heFRpY2tMYWJlbFxuICAgICAgfSB9LCBkaXNwbGF5ZWRUaWNrVmFsdWUpKTtcbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmICF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmXG4gICAgICAhdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgIHZhbHVlSXNSYW5nZSAmJlxuICAgICAgIXRoaXMucHJlY2lzZSAmJlxuICAgICAgIXRoaXMubGFiZWxIYW5kbGVzKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmXG4gICAgICAhdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgIHZhbHVlSXNSYW5nZSAmJlxuICAgICAgIXRoaXMucHJlY2lzZSAmJlxuICAgICAgdGhpcy5sYWJlbEhhbmRsZXMpIHtcbiAgICAgIHJldHVybiB0aWNrTGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsVGlja3MgJiZcbiAgICAgICF0aGlzLmhhc0hpc3RvZ3JhbSAmJlxuICAgICAgdmFsdWVJc1JhbmdlICYmXG4gICAgICB0aGlzLnByZWNpc2UgJiZcbiAgICAgIChpc01pblRpY2tMYWJlbCB8fCBpc01heFRpY2tMYWJlbCkpIHtcbiAgICAgIHJldHVybiB0aWNrTGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsVGlja3MgJiYgdGhpcy5oYXNIaXN0b2dyYW0gJiYgIXRoaXMucHJlY2lzZSAmJiAhdGhpcy5sYWJlbEhhbmRsZXMpIHtcbiAgICAgIHJldHVybiB0aWNrTGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsVGlja3MgJiZcbiAgICAgIHRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICB0aGlzLnByZWNpc2UgJiZcbiAgICAgICF0aGlzLmxhYmVsSGFuZGxlcyAmJlxuICAgICAgKGlzTWluVGlja0xhYmVsIHx8IGlzTWF4VGlja0xhYmVsKSkge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJlxuICAgICAgdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzICYmXG4gICAgICAoaXNNaW5UaWNrTGFiZWwgfHwgaXNNYXhUaWNrTGFiZWwpKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmXG4gICAgICB0aGlzLmhhc0hpc3RvZ3JhbSAmJlxuICAgICAgdGhpcy5wcmVjaXNlICYmXG4gICAgICB0aGlzLmxhYmVsSGFuZGxlcyAmJlxuICAgICAgKGlzTWluVGlja0xhYmVsIHx8IGlzTWF4VGlja0xhYmVsKSkge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBtaXJyb3IgPSB0aGlzLnNob3VsZE1pcnJvcigpO1xuICAgIGNvbnN0IHsgYWN0aXZlUHJvcCwgbWF4LCBtaW4sIHBhZ2VTdGVwLCBzdGVwIH0gPSB0aGlzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpc1thY3RpdmVQcm9wXTtcbiAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgaWYgKGlzQWN0aXZhdGlvbktleShrZXkpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYWRqdXN0bWVudDtcbiAgICBpZiAoa2V5ID09PSBcIkFycm93VXBcIiB8fCBrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb25GYWN0b3IgPSBtaXJyb3IgJiYga2V5ID09PSBcIkFycm93UmlnaHRcIiA/IC0xIDogMTtcbiAgICAgIGFkanVzdG1lbnQgPSB2YWx1ZSArIHN0ZXAgKiBkaXJlY3Rpb25GYWN0b3I7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBrZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbkZhY3RvciA9IG1pcnJvciAmJiBrZXkgPT09IFwiQXJyb3dMZWZ0XCIgPyAtMSA6IDE7XG4gICAgICBhZGp1c3RtZW50ID0gdmFsdWUgLSBzdGVwICogZGlyZWN0aW9uRmFjdG9yO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiUGFnZVVwXCIpIHtcbiAgICAgIGlmIChwYWdlU3RlcCkge1xuICAgICAgICBhZGp1c3RtZW50ID0gdmFsdWUgKyBwYWdlU3RlcDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID09PSBcIlBhZ2VEb3duXCIpIHtcbiAgICAgIGlmIChwYWdlU3RlcCkge1xuICAgICAgICBhZGp1c3RtZW50ID0gdmFsdWUgLSBwYWdlU3RlcDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID09PSBcIkhvbWVcIikge1xuICAgICAgYWRqdXN0bWVudCA9IG1pbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID09PSBcIkVuZFwiKSB7XG4gICAgICBhZGp1c3RtZW50ID0gbWF4O1xuICAgIH1cbiAgICBpZiAoaXNOYU4oYWRqdXN0bWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaXhlZERlY2ltYWxBZGp1c3RtZW50ID0gTnVtYmVyKGFkanVzdG1lbnQudG9GaXhlZChkZWNpbWFsUGxhY2VzKHN0ZXApKSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICBbYWN0aXZlUHJvcF06IHRoaXMuY2xhbXAoZml4ZWREZWNpbWFsQWRqdXN0bWVudCwgYWN0aXZlUHJvcClcbiAgICB9KTtcbiAgfVxuICBwb2ludGVyRG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQucGFnZVg7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnRyYW5zbGF0ZSh4KTtcbiAgICBsZXQgcHJvcCA9IFwidmFsdWVcIjtcbiAgICBpZiAoaXNSYW5nZSh0aGlzLnZhbHVlKSkge1xuICAgICAgY29uc3QgaW5SYW5nZSA9IHBvc2l0aW9uID49IHRoaXMubWluVmFsdWUgJiYgcG9zaXRpb24gPD0gdGhpcy5tYXhWYWx1ZTtcbiAgICAgIGlmIChpblJhbmdlICYmIHRoaXMubGFzdERyYWdQcm9wID09PSBcIm1pbk1heFZhbHVlXCIpIHtcbiAgICAgICAgcHJvcCA9IFwibWluTWF4VmFsdWVcIjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjbG9zZXJUb01heCA9IE1hdGguYWJzKHRoaXMubWF4VmFsdWUgLSBwb3NpdGlvbikgPCBNYXRoLmFicyh0aGlzLm1pblZhbHVlIC0gcG9zaXRpb24pO1xuICAgICAgICBwcm9wID0gY2xvc2VyVG9NYXggfHwgcG9zaXRpb24gPiB0aGlzLm1heFZhbHVlID8gXCJtYXhWYWx1ZVwiIDogXCJtaW5WYWx1ZVwiO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxhc3REcmFnUHJvcFZhbHVlID0gdGhpc1twcm9wXTtcbiAgICB0aGlzLmRyYWdTdGFydChwcm9wKTtcbiAgICBjb25zdCBpc1RodW1iQWN0aXZlID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGh1bWI6YWN0aXZlXCIpO1xuICAgIGlmICghaXNUaHVtYkFjdGl2ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh7IFtwcm9wXTogdGhpcy5jbGFtcChwb3NpdGlvbiwgcHJvcCkgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9jdXNBY3RpdmVIYW5kbGUoeCk7XG4gIH1cbiAgaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuICAgIC8vIG5lZWRlZCB0byBwcmV2ZW50IGV4dHJhIGNsaWNrIGF0IHRoZSBlbmQgb2YgYSBoYW5kbGUgZHJhZ1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgY29uc3QgaGFuZGxlID0gdGhpcy5taW5IYW5kbGUgPyB0aGlzLm1pbkhhbmRsZSA6IHRoaXMubWF4SGFuZGxlO1xuICAgIGhhbmRsZT8uZm9jdXMoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRWYWx1ZUZyb21NaW5NYXgoKSB7XG4gICAgY29uc3QgeyBtaW5WYWx1ZSwgbWF4VmFsdWUgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWx1ZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgbWF4VmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbbWluVmFsdWUsIG1heFZhbHVlXTtcbiAgICB9XG4gIH1cbiAgc2V0TWluTWF4RnJvbVZhbHVlKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXM7XG4gICAgaWYgKGlzUmFuZ2UodmFsdWUpKSB7XG4gICAgICB0aGlzLm1pblZhbHVlID0gdmFsdWVbMF07XG4gICAgICB0aGlzLm1heFZhbHVlID0gdmFsdWVbMV07XG4gICAgfVxuICB9XG4gIG9uTGFiZWxDbGljaygpIHtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgc2hvdWxkTWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLm1pcnJvcmVkICYmICF0aGlzLmhhc0hpc3RvZ3JhbTtcbiAgfVxuICBzaG91bGRVc2VNaW5WYWx1ZSgpIHtcbiAgICBpZiAoIWlzUmFuZ2UodGhpcy52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICgodGhpcy5oYXNIaXN0b2dyYW0gJiYgdGhpcy5tYXhWYWx1ZSA9PT0gMCkgfHwgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiB0aGlzLm1pblZhbHVlID09PSAwKSk7XG4gIH1cbiAgZ2VuZXJhdGVUaWNrVmFsdWVzKCkge1xuICAgIGNvbnN0IHRpY2tzID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLm1pbjtcbiAgICB3aGlsZSAodGhpcy50aWNrcyAmJiBjdXJyZW50IDwgdGhpcy5tYXggKyB0aGlzLnRpY2tzKSB7XG4gICAgICB0aWNrcy5wdXNoKE1hdGgubWluKGN1cnJlbnQsIHRoaXMubWF4KSk7XG4gICAgICBjdXJyZW50ID0gY3VycmVudCArIHRoaXMudGlja3M7XG4gICAgfVxuICAgIHJldHVybiB0aWNrcztcbiAgfVxuICBwb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgcHJvcCkge1xuICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmFnU3RhcnQocHJvcCk7XG4gIH1cbiAgZHJhZ1N0YXJ0KHByb3ApIHtcbiAgICB0aGlzLmRyYWdQcm9wID0gcHJvcDtcbiAgICB0aGlzLmxhc3REcmFnUHJvcCA9IHRoaXMuZHJhZ1Byb3A7XG4gICAgdGhpcy5hY3RpdmVQcm9wID0gcHJvcDtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5kcmFnVXBkYXRlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMucG9pbnRlclVwRHJhZ0VuZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgdGhpcy5kcmFnRW5kKTtcbiAgfVxuICBmb2N1c0FjdGl2ZUhhbmRsZSh2YWx1ZVgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZHJhZ1Byb3ApIHtcbiAgICAgIGNhc2UgXCJtaW5WYWx1ZVwiOlxuICAgICAgICB0aGlzLm1pbkhhbmRsZS5mb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYXhWYWx1ZVwiOlxuICAgICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICAgIHRoaXMubWF4SGFuZGxlLmZvY3VzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1pbk1heFZhbHVlXCI6XG4gICAgICAgIHRoaXMuZ2V0Q2xvc2VzdEhhbmRsZSh2YWx1ZVgpLmZvY3VzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBlbWl0SW5wdXQoKSB7XG4gICAgdGhpcy5jYWxjaXRlU2xpZGVySW5wdXQuZW1pdCgpO1xuICB9XG4gIGVtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlU2xpZGVyQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICByZW1vdmVEcmFnTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLmRyYWdVcGRhdGUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5wb2ludGVyVXBEcmFnRW5kKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCB0aGlzLmRyYWdFbmQpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgcHJvcCB2YWx1ZShzKSBpZiBjaGFuZ2VkIGF0IHRoZSBjb21wb25lbnQgbGV2ZWxcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyAtIGEgc2V0IG9mIGtleS92YWx1ZSBwYWlycyBkZWxpbmVhdGluZyB3aGF0IHByb3BlcnRpZXMgaW4gdGhlIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICovXG4gIHNldFZhbHVlKHZhbHVlcykge1xuICAgIGxldCB2YWx1ZUNoYW5nZWQ7XG4gICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZXNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCF2YWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgdmFsdWVDaGFuZ2VkID0gb2xkVmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpc1twcm9wTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoIXZhbHVlQ2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuZHJhZ1Byb3A7XG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgfVxuICAgIHRoaXMuZW1pdElucHV0KCk7XG4gIH1cbiAgLyoqXG4gICAqIElmIG51bWJlciBpcyBvdXRzaWRlIHJhbmdlLCBjb25zdHJhaW4gdG8gbWluIG9yIG1heFxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIHByb3BcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjbGFtcCh2YWx1ZSwgcHJvcCkge1xuICAgIHZhbHVlID0gY2xhbXAodmFsdWUsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgLy8gZW5zdXJlIHRoYXQgbWF4VmFsdWUgYW5kIG1pblZhbHVlIGRvbid0IHN3YXAgcG9zaXRpb25zXG4gICAgaWYgKHByb3AgPT09IFwibWF4VmFsdWVcIikge1xuICAgICAgdmFsdWUgPSBNYXRoLm1heCh2YWx1ZSwgdGhpcy5taW5WYWx1ZSk7XG4gICAgfVxuICAgIGlmIChwcm9wID09PSBcIm1pblZhbHVlXCIpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIHRoaXMubWF4VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZSBhIHBpeGVsIHBvc2l0aW9uIHRvIHZhbHVlIGFsb25nIHRoZSByYW5nZVxuICAgKlxuICAgKiBAcGFyYW0geFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHRyYW5zbGF0ZSh4KSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuICAgIGNvbnN0IHsgbGVmdCwgd2lkdGggfSA9IHRoaXMudHJhY2tFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwZXJjZW50ID0gKHggLSBsZWZ0KSAvIHdpZHRoO1xuICAgIGNvbnN0IG1pcnJvciA9IHRoaXMuc2hvdWxkTWlycm9yKCk7XG4gICAgY29uc3QgY2xhbXBlZFZhbHVlID0gdGhpcy5jbGFtcCh0aGlzLm1pbiArIHJhbmdlICogKG1pcnJvciA/IDEgLSBwZXJjZW50IDogcGVyY2VudCkpO1xuICAgIGxldCB2YWx1ZSA9IE51bWJlcihjbGFtcGVkVmFsdWUudG9GaXhlZChkZWNpbWFsUGxhY2VzKHRoaXMuc3RlcCkpKTtcbiAgICBpZiAodGhpcy5zbmFwICYmIHRoaXMuc3RlcCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldENsb3Nlc3RTdGVwKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBhbGxvd2VkIHZhbHVlIGFsb25nIHN0ZXBwZWQgdmFsdWVzXG4gICAqXG4gICAqIEBwYXJhbSBudW1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRDbG9zZXN0U3RlcChudW0pIHtcbiAgICBudW0gPSBOdW1iZXIodGhpcy5jbGFtcChudW0pLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApKSk7XG4gICAgaWYgKHRoaXMuc3RlcCkge1xuICAgICAgY29uc3Qgc3RlcCA9IE1hdGgucm91bmQobnVtIC8gdGhpcy5zdGVwKSAqIHRoaXMuc3RlcDtcbiAgICAgIG51bSA9IE51bWJlcih0aGlzLmNsYW1wKHN0ZXApLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApKSk7XG4gICAgfVxuICAgIHJldHVybiBudW07XG4gIH1cbiAgZ2V0Q2xvc2VzdEhhbmRsZSh2YWx1ZVgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZVgodGhpcy5tYXhIYW5kbGUsIHZhbHVlWCkgPiB0aGlzLmdldERpc3RhbmNlWCh0aGlzLm1pbkhhbmRsZSwgdmFsdWVYKVxuICAgICAgPyB0aGlzLm1pbkhhbmRsZVxuICAgICAgOiB0aGlzLm1heEhhbmRsZTtcbiAgfVxuICBnZXREaXN0YW5jZVgoZWwsIHZhbHVlWCkge1xuICAgIHJldHVybiBNYXRoLmFicyhlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdmFsdWVYKTtcbiAgfVxuICBnZXRGb250U2l6ZUZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBOdW1iZXIod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnQtc2l6ZVwiKS5tYXRjaCgvXFxkKy8pWzBdKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHBvc2l0aW9uIG9mIHZhbHVlIGFsb25nIHJhbmdlIGFzIGZyYWN0aW9uYWwgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIG51bVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IG51bWJlciBpbiB0aGUgdW5pdCBpbnRlcnZhbCBbMCwxXVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldFVuaXRJbnRlcnZhbChudW0pIHtcbiAgICBudW0gPSB0aGlzLmNsYW1wKG51bSk7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuICAgIHJldHVybiAobnVtIC0gdGhpcy5taW4pIC8gcmFuZ2U7XG4gIH1cbiAgYWRqdXN0SG9zdE9ic2N1cmVkSGFuZGxlTGFiZWwobmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke25hbWV9YCk7XG4gICAgY29uc3QgbGFiZWxTdGF0aWMgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7bmFtZX0uc3RhdGljYCk7XG4gICAgY29uc3QgbGFiZWxUcmFuc2Zvcm1lZCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtuYW1lfS50cmFuc2Zvcm1lZGApO1xuICAgIGNvbnN0IGxhYmVsU3RhdGljQm91bmRzID0gbGFiZWxTdGF0aWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGFiZWxTdGF0aWNPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQobGFiZWxTdGF0aWNCb3VuZHMubGVmdCwgbGFiZWxTdGF0aWNCb3VuZHMucmlnaHQpO1xuICAgIGxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxTdGF0aWNPZmZzZXR9cHgpYDtcbiAgICBsYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxTdGF0aWNPZmZzZXR9cHgpYDtcbiAgfVxuICBoeXBoZW5hdGVDb2xsaWRpbmdSYW5nZUhhbmRsZUxhYmVscygpIHtcbiAgICBjb25zdCB7IHNoYWRvd1Jvb3QgfSA9IHRoaXMuZWw7XG4gICAgY29uc3QgbWlycm9yID0gdGhpcy5zaG91bGRNaXJyb3IoKTtcbiAgICBjb25zdCBsZWZ0TW9kaWZpZXIgPSBtaXJyb3IgPyBcInZhbHVlXCIgOiBcIm1pblZhbHVlXCI7XG4gICAgY29uc3QgcmlnaHRNb2RpZmllciA9IG1pcnJvciA/IFwibWluVmFsdWVcIiA6IFwidmFsdWVcIjtcbiAgICBjb25zdCBsZWZ0VmFsdWVMYWJlbCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7bGVmdE1vZGlmaWVyfWApO1xuICAgIGNvbnN0IGxlZnRWYWx1ZUxhYmVsU3RhdGljID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtsZWZ0TW9kaWZpZXJ9LnN0YXRpY2ApO1xuICAgIGNvbnN0IGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke2xlZnRNb2RpZmllcn0udHJhbnNmb3JtZWRgKTtcbiAgICBjb25zdCBsZWZ0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQobGVmdFZhbHVlTGFiZWxTdGF0aWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCwgbGVmdFZhbHVlTGFiZWxTdGF0aWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQpO1xuICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7cmlnaHRNb2RpZmllcn1gKTtcbiAgICBjb25zdCByaWdodFZhbHVlTGFiZWxTdGF0aWMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke3JpZ2h0TW9kaWZpZXJ9LnN0YXRpY2ApO1xuICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtyaWdodE1vZGlmaWVyfS50cmFuc2Zvcm1lZGApO1xuICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQocmlnaHRWYWx1ZUxhYmVsU3RhdGljLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsIHJpZ2h0VmFsdWVMYWJlbFN0YXRpYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCk7XG4gICAgY29uc3QgbGFiZWxGb250U2l6ZSA9IHRoaXMuZ2V0Rm9udFNpemVGb3JFbGVtZW50KGxlZnRWYWx1ZUxhYmVsKTtcbiAgICBjb25zdCBsYWJlbFRyYW5zZm9ybWVkT3ZlcmxhcCA9IHRoaXMuZ2V0UmFuZ2VMYWJlbE92ZXJsYXAobGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZCwgcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQpO1xuICAgIGNvbnN0IGh5cGhlbkxhYmVsID0gbGVmdFZhbHVlTGFiZWw7XG4gICAgY29uc3QgbGFiZWxPZmZzZXQgPSBsYWJlbEZvbnRTaXplIC8gMjtcbiAgICBpZiAobGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgPiAwKSB7XG4gICAgICBoeXBoZW5MYWJlbC5jbGFzc0xpc3QuYWRkKFwiaHlwaGVuXCIsIFwiaHlwaGVuLS13cmFwXCIpO1xuICAgICAgaWYgKHJpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPT09IDAgJiYgbGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0ID09PSAwKSB7XG4gICAgICAgIC8vIE5laXRoZXIgaGFuZGxlIG92ZXJsYXBzIHRoZSBob3N0IGJvdW5kYXJ5XG4gICAgICAgIGxldCBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSA9IGxhYmVsVHJhbnNmb3JtZWRPdmVybGFwIC8gMiAtIGxhYmVsT2Zmc2V0O1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgTWF0aC5zaWduKGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlKSA9PT0gLTFcbiAgICAgICAgICAgID8gTWF0aC5hYnMobGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUpXG4gICAgICAgICAgICA6IC1sZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZTtcbiAgICAgICAgY29uc3QgbGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZEhvc3RPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQobGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICtcbiAgICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSAtXG4gICAgICAgICAgbGFiZWxPZmZzZXQsIGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgK1xuICAgICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlIC1cbiAgICAgICAgICBsYWJlbE9mZnNldCk7XG4gICAgICAgIGxldCByaWdodFZhbHVlTGFiZWxUcmFuc2xhdGUgPSBsYWJlbFRyYW5zZm9ybWVkT3ZlcmxhcCAvIDI7XG4gICAgICAgIGNvbnN0IHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldCA9IHRoaXMuZ2V0SG9zdE9mZnNldChyaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgcmlnaHRWYWx1ZUxhYmVsVHJhbnNsYXRlLCByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCArIHJpZ2h0VmFsdWVMYWJlbFRyYW5zbGF0ZSk7XG4gICAgICAgIGlmIChsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldCAhPT0gMCkge1xuICAgICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlICs9IGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0O1xuICAgICAgICAgIHJpZ2h0VmFsdWVMYWJlbFRyYW5zbGF0ZSArPSBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgbGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgKz0gcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0O1xuICAgICAgICAgIHJpZ2h0VmFsdWVMYWJlbFRyYW5zbGF0ZSArPSByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZEhvc3RPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgbGVmdFZhbHVlTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZX1weClgO1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgLSBsYWJlbE9mZnNldH1weClgO1xuICAgICAgICByaWdodFZhbHVlTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyaWdodFZhbHVlTGFiZWxUcmFuc2xhdGV9cHgpYDtcbiAgICAgICAgcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyaWdodFZhbHVlTGFiZWxUcmFuc2xhdGV9cHgpYDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGxlZnRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldCA+IDAgfHwgcmlnaHRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldCA+IDApIHtcbiAgICAgICAgLy8gbGFiZWxzIG92ZXJsYXAgaG9zdCBib3VuZGFyeSBvbiB0aGUgbGVmdCBzaWRlXG4gICAgICAgIGxlZnRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0ICsgbGFiZWxPZmZzZXR9cHgpYDtcbiAgICAgICAgcmlnaHRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgKyByaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICAgIHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgKyByaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChsZWZ0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPCAwIHx8IHJpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPCAwKSB7XG4gICAgICAgIC8vIGxhYmVscyBvdmVybGFwIGhvc3QgYm91bmRhcnkgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgbGV0IGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlID0gTWF0aC5hYnMobGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0KSArIGxhYmVsVHJhbnNmb3JtZWRPdmVybGFwIC0gbGFiZWxPZmZzZXQ7XG4gICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlID1cbiAgICAgICAgICBNYXRoLnNpZ24obGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUpID09PSAtMVxuICAgICAgICAgICAgPyBNYXRoLmFicyhsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSlcbiAgICAgICAgICAgIDogLWxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlO1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlfXB4KWA7XG4gICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSAtIGxhYmVsT2Zmc2V0fXB4KWA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaHlwaGVuTGFiZWwuY2xhc3NMaXN0LnJlbW92ZShcImh5cGhlblwiLCBcImh5cGhlbi0td3JhcFwiKTtcbiAgICAgIGxlZnRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICByaWdodFZhbHVlTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgICByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3JpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXR9cHgpYDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEhpZGVzIGJvdW5kaW5nIHRpY2sgbGFiZWxzIHRoYXQgYXJlIG9ic2N1cmVkIGJ5IGVpdGhlciBoYW5kbGUuXG4gICAqL1xuICBoaWRlT2JzY3VyZWRCb3VuZGluZ1RpY2tMYWJlbHMoKSB7XG4gICAgY29uc3QgdmFsdWVJc1JhbmdlID0gaXNSYW5nZSh0aGlzLnZhbHVlKTtcbiAgICBpZiAoIXRoaXMuaGFzSGlzdG9ncmFtICYmICF2YWx1ZUlzUmFuZ2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzICYmICF0aGlzLnByZWNpc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmICF0aGlzLnByZWNpc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiB0aGlzLnByZWNpc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIHRoaXMucHJlY2lzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGFzSGlzdG9ncmFtICYmIHZhbHVlSXNSYW5nZSAmJiAhdGhpcy5wcmVjaXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtaW5IYW5kbGUgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aHVtYi0tbWluVmFsdWVcIik7XG4gICAgY29uc3QgbWF4SGFuZGxlID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGh1bWItLXZhbHVlXCIpO1xuICAgIGNvbnN0IG1pblRpY2tMYWJlbCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRpY2tfX2xhYmVsLS1taW5cIik7XG4gICAgY29uc3QgbWF4VGlja0xhYmVsID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGlja19fbGFiZWwtLW1heFwiKTtcbiAgICBpZiAoIW1pbkhhbmRsZSAmJiBtYXhIYW5kbGUgJiYgbWluVGlja0xhYmVsICYmIG1heFRpY2tMYWJlbCkge1xuICAgICAgbWluVGlja0xhYmVsLnN0eWxlLm9wYWNpdHkgPSB0aGlzLmlzTWluVGlja0xhYmVsT2JzY3VyZWQobWluVGlja0xhYmVsLCBtYXhIYW5kbGUpID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgIG1heFRpY2tMYWJlbC5zdHlsZS5vcGFjaXR5ID0gdGhpcy5pc01heFRpY2tMYWJlbE9ic2N1cmVkKG1heFRpY2tMYWJlbCwgbWF4SGFuZGxlKSA/IFwiMFwiIDogXCIxXCI7XG4gICAgfVxuICAgIGlmIChtaW5IYW5kbGUgJiYgbWF4SGFuZGxlICYmIG1pblRpY2tMYWJlbCAmJiBtYXhUaWNrTGFiZWwpIHtcbiAgICAgIG1pblRpY2tMYWJlbC5zdHlsZS5vcGFjaXR5ID1cbiAgICAgICAgdGhpcy5pc01pblRpY2tMYWJlbE9ic2N1cmVkKG1pblRpY2tMYWJlbCwgbWluSGFuZGxlKSB8fFxuICAgICAgICAgIHRoaXMuaXNNaW5UaWNrTGFiZWxPYnNjdXJlZChtaW5UaWNrTGFiZWwsIG1heEhhbmRsZSlcbiAgICAgICAgICA/IFwiMFwiXG4gICAgICAgICAgOiBcIjFcIjtcbiAgICAgIG1heFRpY2tMYWJlbC5zdHlsZS5vcGFjaXR5ID1cbiAgICAgICAgdGhpcy5pc01heFRpY2tMYWJlbE9ic2N1cmVkKG1heFRpY2tMYWJlbCwgbWluSGFuZGxlKSB8fFxuICAgICAgICAgICh0aGlzLmlzTWF4VGlja0xhYmVsT2JzY3VyZWQobWF4VGlja0xhYmVsLCBtYXhIYW5kbGUpICYmIHRoaXMuaGFzSGlzdG9ncmFtKVxuICAgICAgICAgID8gXCIwXCJcbiAgICAgICAgICA6IFwiMVwiO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0byBvZmZzZXQgb24gdGhlIGxlZnQgb3IgcmlnaHQgc2lkZSBiYXNlZCBvbiBkZXNpcmVkIHBvc2l0aW9uIGJlaGF2aW9yLlxuICAgKlxuICAgKiBAcGFyYW0gbGVmdEJvdW5kc1xuICAgKiBAcGFyYW0gcmlnaHRCb3VuZHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRIb3N0T2Zmc2V0KGxlZnRCb3VuZHMsIHJpZ2h0Qm91bmRzKSB7XG4gICAgY29uc3QgaG9zdEJvdW5kcyA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYnVmZmVyID0gNztcbiAgICBpZiAobGVmdEJvdW5kcyArIGJ1ZmZlciA8IGhvc3RCb3VuZHMubGVmdCkge1xuICAgICAgcmV0dXJuIGhvc3RCb3VuZHMubGVmdCAtIGxlZnRCb3VuZHMgLSBidWZmZXI7XG4gICAgfVxuICAgIGlmIChyaWdodEJvdW5kcyAtIGJ1ZmZlciA+IGhvc3RCb3VuZHMucmlnaHQpIHtcbiAgICAgIHJldHVybiAtKHJpZ2h0Qm91bmRzIC0gaG9zdEJvdW5kcy5yaWdodCkgKyBidWZmZXI7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIHR3byBnaXZlbiBzcGFuIGVsZW1lbnRzIGFyZSBvdmVybGFwcGluZywgdGFraW5nIGludG8gYWNjb3VudFxuICAgKiBhIHNwYWNlIGluIGJldHdlZW4gdGhlIHR3byBzcGFucyBlcXVhbCB0byB0aGUgZm9udC1zaXplIHNldCBvbiB0aGVtIHRvIGFjY291bnQgZm9yIHRoZSBzcGFjZSBuZWVkZWQgdG8gcmVuZGVyIGEgaHlwaGVuLlxuICAgKlxuICAgKiBAcGFyYW0gbGVmdExhYmVsXG4gICAqIEBwYXJhbSByaWdodExhYmVsXG4gICAqL1xuICBnZXRSYW5nZUxhYmVsT3ZlcmxhcChsZWZ0TGFiZWwsIHJpZ2h0TGFiZWwpIHtcbiAgICBjb25zdCBsZWZ0TGFiZWxCb3VuZHMgPSBsZWZ0TGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmlnaHRMYWJlbEJvdW5kcyA9IHJpZ2h0TGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVmdExhYmVsRm9udFNpemUgPSB0aGlzLmdldEZvbnRTaXplRm9yRWxlbWVudChsZWZ0TGFiZWwpO1xuICAgIGNvbnN0IHJhbmdlTGFiZWxPdmVybGFwID0gbGVmdExhYmVsQm91bmRzLnJpZ2h0ICsgbGVmdExhYmVsRm9udFNpemUgLSByaWdodExhYmVsQm91bmRzLmxlZnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KHJhbmdlTGFiZWxPdmVybGFwLCAwKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgcmVwcmVzZW50aW5nIGlmIHRoZSBtaW5MYWJlbCBzcGFuIGVsZW1lbnQgaXMgb2JzY3VyZWQgKGJlaW5nIG92ZXJsYXBwZWQpIGJ5IHRoZSBnaXZlbiBoYW5kbGUgZGl2IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBtaW5MYWJlbFxuICAgKiBAcGFyYW0gaGFuZGxlXG4gICAqL1xuICBpc01pblRpY2tMYWJlbE9ic2N1cmVkKG1pbkxhYmVsLCBoYW5kbGUpIHtcbiAgICBjb25zdCBtaW5MYWJlbEJvdW5kcyA9IG1pbkxhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGhhbmRsZUJvdW5kcyA9IGhhbmRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gaW50ZXJzZWN0cyhtaW5MYWJlbEJvdW5kcywgaGFuZGxlQm91bmRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gdmFsdWUgcmVwcmVzZW50aW5nIGlmIHRoZSBtYXhMYWJlbCBzcGFuIGVsZW1lbnQgaXMgb2JzY3VyZWQgKGJlaW5nIG92ZXJsYXBwZWQpIGJ5IHRoZSBnaXZlbiBoYW5kbGUgZGl2IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBtYXhMYWJlbFxuICAgKiBAcGFyYW0gaGFuZGxlXG4gICAqL1xuICBpc01heFRpY2tMYWJlbE9ic2N1cmVkKG1heExhYmVsLCBoYW5kbGUpIHtcbiAgICBjb25zdCBtYXhMYWJlbEJvdW5kcyA9IG1heExhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGhhbmRsZUJvdW5kcyA9IGhhbmRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gaW50ZXJzZWN0cyhtYXhMYWJlbEJvdW5kcywgaGFuZGxlQm91bmRzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJoaXN0b2dyYW1cIjogW1wiaGlzdG9ncmFtV2F0Y2hlclwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlSGFuZGxlclwiXSxcbiAgICBcIm1pblZhbHVlXCI6IFtcIm1pbk1heFZhbHVlSGFuZGxlclwiXSxcbiAgICBcIm1heFZhbHVlXCI6IFtcIm1pbk1heFZhbHVlSGFuZGxlclwiXVxuICB9OyB9XG59O1xuU2xpZGVyLnN0eWxlID0gc2xpZGVyQ3NzO1xuXG5leHBvcnQgeyBHcmFwaCBhcyBjYWxjaXRlX2dyYXBoLCBTbGlkZXIgYXMgY2FsY2l0ZV9zbGlkZXIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xuY29uc3QgZGVjaW1hbE51bWJlclJlZ2V4ID0gbmV3IFJlZ0V4cCgvKD86XFwuKFxcZCspKT8oPzpbZUVdKFsrLV0/XFxkKykpPyQvKTtcbmNvbnN0IGRlY2ltYWxQbGFjZXMgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgbWF0Y2ggPSAoXCJcIiArIHZhbHVlKS5tYXRjaChkZWNpbWFsTnVtYmVyUmVnZXgpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIE1hdGgubWF4KDAsIFxuICAvLyBOdW1iZXIgb2YgZGlnaXRzIHJpZ2h0IG9mIGRlY2ltYWwgcG9pbnQuXG4gIChtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDApIC1cbiAgICAvLyBBZGp1c3QgZm9yIHNjaWVudGlmaWMgbm90YXRpb24uXG4gICAgKG1hdGNoWzJdID8gK21hdGNoWzJdIDogMCkpO1xufTtcblxuZXhwb3J0IHsgY2xhbXAgYXMgYywgZGVjaW1hbFBsYWNlcyBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=