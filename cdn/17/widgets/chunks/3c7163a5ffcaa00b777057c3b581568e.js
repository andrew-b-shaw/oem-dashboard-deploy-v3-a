"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_locale-b3c44dda_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isActivationKey),
/* harmony export */   "n": () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ BigDecimal),
/* harmony export */   "a": () => (/* binding */ defaultNumberingSystem),
/* harmony export */   "b": () => (/* binding */ getDateTimeFormat),
/* harmony export */   "c": () => (/* binding */ connectLocalized),
/* harmony export */   "d": () => (/* binding */ disconnectLocalized),
/* harmony export */   "e": () => (/* binding */ getSupportedNumberingSystem),
/* harmony export */   "g": () => (/* binding */ getSupportedLocale),
/* harmony export */   "i": () => (/* binding */ isValidNumber),
/* harmony export */   "n": () => (/* binding */ numberStringFormatter),
/* harmony export */   "p": () => (/* binding */ parseNumberString),
/* harmony export */   "s": () => (/* binding */ sanitizeNumberString)
/* harmony export */ });
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */




const unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
const trailingZeros = new RegExp("0+$");
// adopted from https://stackoverflow.com/a/66939244
class BigDecimal {
  constructor(input) {
    if (input instanceof BigDecimal) {
      return input;
    }
    const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
    this.value =
      BigInt(integers + decimals.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS)) +
        BigInt(BigDecimal.ROUNDED && decimals[BigDecimal.DECIMALS] >= "5");
    this.isNegative = input.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const s = this.value
      .toString()
      .replace("-", "")
      .padStart(BigDecimal.DECIMALS + 1, "0");
    const integers = s.slice(0, -BigDecimal.DECIMALS);
    const decimals = s.slice(-BigDecimal.DECIMALS).replace(trailingZeros, "");
    return { integers, decimals };
  }
  toString() {
    const { integers, decimals } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
  }
  formatToParts(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
    this.isNegative && parts.unshift({ type: "minusSign", value: formatter.minusSign });
    if (decimals.length) {
      parts.push({ type: "decimal", value: formatter.decimal });
      decimals.split("").forEach((char) => parts.push({ type: "fraction", value: char }));
    }
    return parts;
  }
  format(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(BigInt(integers))}`;
    const decimalsFormatted = decimals.length
      ? `${formatter.decimal}${decimals
        .split("")
        .map((char) => formatter.numberFormatter.format(Number(char)))
        .join("")}`
      : "";
    return `${integersFormatted}${decimalsFormatted}`;
  }
  add(n) {
    return BigDecimal.fromBigInt(this.value + new BigDecimal(n).value);
  }
  subtract(n) {
    return BigDecimal.fromBigInt(this.value - new BigDecimal(n).value);
  }
  multiply(n) {
    return BigDecimal._divRound(this.value * new BigDecimal(n).value, BigDecimal.SHIFT);
  }
  divide(n) {
    return BigDecimal._divRound(this.value * BigDecimal.SHIFT, new BigDecimal(n).value);
  }
}
// Configuration: constants
BigDecimal.DECIMALS = 100; // number of decimals on all instances
BigDecimal.ROUNDED = true; // numbers are truncated (false) or rounded (true)
BigDecimal.SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
BigDecimal._divRound = (dividend, divisor) => BigDecimal.fromBigInt(dividend / divisor + (BigDecimal.ROUNDED ? ((dividend * BigInt(2)) / divisor) % BigInt(2) : BigInt(0)));
BigDecimal.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), { value: bigint, isNegative: bigint < BigInt(0) });
function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return "";
  }
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    let containsDecimal = false;
    const result = nonExpoNumString
      .split("")
      .filter((value, i) => {
      if (value.match(/\./g) && !containsDecimal) {
        containsDecimal = true;
        return true;
      }
      if (value.match(/\-/g) && i === 0) {
        return true;
      }
      return _key_3389d870_js__WEBPACK_IMPORTED_MODULE_1__.n.includes(value);
    })
      .reduce((string, part) => string + part);
    return isValidNumber(result) ? new BigDecimal(result).toString() : "";
  });
}
// regex for number sanitization
const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
const decimalOnlyAtEndOfString = /(?!^\.)\.$/;
const allHyphensExceptTheStart = /(?!^-)-/g;
const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
const sanitizeNumberString = (numberString) => sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
  const sanitizedValue = nonExpoNumString
    .replace(allHyphensExceptTheStart, "")
    .replace(decimalOnlyAtEndOfString, "")
    .replace(allLeadingZerosOptionallyNegative, "$1");
  return isValidNumber(sanitizedValue)
    ? isNegativeDecimalOnlyZeros.test(sanitizedValue)
      ? sanitizedValue
      : new BigDecimal(sanitizedValue).toString()
    : nonExpoNumString;
});
function sanitizeExponentialNumberString(numberString, func) {
  if (!numberString) {
    return numberString;
  }
  const firstE = numberString.toLowerCase().indexOf("e") + 1;
  if (!firstE) {
    return func(numberString);
  }
  return numberString
    .replace(/[eE]*$/g, "")
    .substring(0, firstE)
    .concat(numberString.slice(firstE).replace(/[eE]/g, ""))
    .split(/[eE]/)
    .map((section, i) => (i === 1 ? func(section.replace(/\./g, "")) : func(section)))
    .join("e")
    .replace(/^e/, "1e");
}
/**
 * Converts an exponential notation numberString into decimal notation.
 * BigInt doesn't support exponential notation, so this is required to maintain precision
 *
 * @param {string} numberString - pre-validated exponential or decimal number
 * @returns {string} numberString in decimal notation
 */
function expandExponentialNumberString(numberString) {
  const exponentialParts = numberString.split(/[eE]/);
  if (exponentialParts.length === 1) {
    return numberString;
  }
  const number = +numberString;
  if (Number.isSafeInteger(number)) {
    return `${number}`;
  }
  const isNegative = numberString.charAt(0) === "-";
  const magnitude = +exponentialParts[1];
  const decimalParts = exponentialParts[0].split(".");
  const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
  const decimals = decimalParts[1] || "";
  const shiftDecimalLeft = (integers, magnitude) => {
    const magnitudeDelta = Math.abs(magnitude) - integers.length;
    const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers}` : integers;
    const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude)}${"."}${leftPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const shiftDecimalRight = (decimals, magnitude) => {
    const rightPaddedZeros = magnitude > decimals.length ? `${decimals}${"0".repeat(magnitude - decimals.length)}` : decimals;
    const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude)}${"."}${rightPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const expandedNumberString = magnitude > 0
    ? `${integers}${shiftDecimalRight(decimals, magnitude)}`
    : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
  return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString
    .replace(unnecessaryDecimal, "")
    .replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
  return _key_3389d870_js__WEBPACK_IMPORTED_MODULE_1__.n.some((number) => string.includes(number));
}

const defaultLocale = "en";
const t9nLocales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  defaultLocale,
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "no",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
const locales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  defaultLocale,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
const numberingSystems = [
  "arab",
  "arabext",
  "bali",
  "beng",
  "deva",
  "fullwide",
  "gujr",
  "guru",
  "hanidec",
  "khmr",
  "knda",
  "laoo",
  "latn",
  "limb",
  "mlym",
  "mong",
  "mymr",
  "orya",
  "tamldec",
  "telu",
  "thai",
  "tibt"
];
const isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
const defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem)
  ? "latn"
  : browserNumberingSystem;
const getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
/**
 * Gets the locale that best matches the context.
 *
 * @param locale – the BCP 47 locale code
 * @param context - specifies whether the locale code should match in the context of CLDR or T9N (translation)
 */
function getSupportedLocale(locale, context = "cldr") {
  const contextualLocales = context === "cldr" ? locales : t9nLocales;
  if (!locale) {
    return defaultLocale;
  }
  if (contextualLocales.includes(locale)) {
    return locale;
  }
  locale = locale.toLowerCase();
  // we support both 'nb' and 'no' (BCP 47) for Norwegian but only `no` has corresponding bundle
  if (locale === "nb") {
    return "no";
  }
  // we use `pt-BR` as it will have the same translations as `pt`, which has no corresponding bundle
  if (context === "t9n" && locale === "pt") {
    return "pt-BR";
  }
  if (locale.includes("-")) {
    locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
    if (!contextualLocales.includes(locale)) {
      locale = locale.split("-")[0];
    }
  }
  // we can `zh-CN` as base translation for chinese locales which has no corresponding bundle.
  if (locale === "zh") {
    return "zh-CN";
  }
  if (!contextualLocales.includes(locale)) {
    console.warn(`Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`);
    return defaultLocale;
  }
  return locale;
}
const connectedComponents = new Set();
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
function connectLocalized(component) {
  updateEffectiveLocale(component);
  if (connectedComponents.size === 0) {
    mutationObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
      subtree: true
    });
  }
  connectedComponents.add(component);
}
/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
function updateEffectiveLocale(component) {
  component.effectiveLocale = getLocale(component);
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectLocalized(component) {
  connectedComponents.delete(component);
  if (connectedComponents.size === 0) {
    mutationObserver.disconnect();
  }
}
const mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", (records) => {
  records.forEach((record) => {
    const el = record.target;
    connectedComponents.forEach((component) => {
      const inUnrelatedSubtree = !(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.a)(el, component.el);
      if (inUnrelatedSubtree) {
        return;
      }
      const closestLangEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]");
      if (!closestLangEl) {
        component.effectiveLocale = defaultLocale;
        return;
      }
      const closestLang = closestLangEl.lang;
      component.effectiveLocale =
        // user set lang="" means unknown language, so we use default
        closestLangEl.hasAttribute("lang") && closestLang === "" ? defaultLocale : closestLang;
    });
  });
});
/**
 * This util helps resolve a component's locale.
 * It will also fall back on the deprecated `locale` if a component implemented this previously.
 *
 * @param component
 */
function getLocale(component) {
  return (component.el.lang ||
    (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]")?.lang ||
    document.documentElement.lang ||
    defaultLocale);
}
/**
 * This util formats and parses numbers for localization
 */
class NumberStringFormat {
  constructor() {
    this.delocalize = (numberString) => 
    // For performance, (de)localization is skipped if the formatter isn't initialized.
    // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
    // `numberFormatOptions` must be set in a component to create and cache the formatter.
    this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => nonExpoNumString
        .replace(new RegExp(`[${this._minusSign}]`, "g"), "-")
        .replace(new RegExp(`[${this._group}]`, "g"), "")
        .replace(new RegExp(`[${this._decimal}]`, "g"), ".")
        .replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex))
      : numberString;
    this.localize = (numberString) => this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => isValidNumber(nonExpoNumString.trim())
        ? new BigDecimal(nonExpoNumString.trim())
          .format(this)
          .replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group)
        : nonExpoNumString)
      : numberString;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(options) {
    options.locale = getSupportedLocale(options?.locale);
    options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
    if (
    // No need to create the formatter if `locale` and `numberingSystem`
    // are the default values and `numberFormatOptions` has not been set
    (!this._numberFormatOptions &&
      options.locale === defaultLocale &&
      options.numberingSystem === defaultNumberingSystem &&
      // don't skip initialization if any options besides locale/numberingSystem are set
      Object.keys(options).length === 2) ||
      // cache formatter by only recreating when options change
      JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)) {
      return;
    }
    this._numberFormatOptions = options;
    this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions);
    this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: false,
        numberingSystem: this._numberFormatOptions.numberingSystem
      }).format(9876543210)
    ].reverse();
    const index = new Map(this._digits.map((d, i) => [d, i]));
    const parts = new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);
    this._actualGroup = parts.find((d) => d.type === "group").value;
    // change whitespace group characters that don't render correctly
    this._group = this._actualGroup.trim().length === 0 ? " " : this._actualGroup;
    this._decimal = parts.find((d) => d.type === "decimal").value;
    this._minusSign = parts.find((d) => d.type === "minusSign").value;
    this._getDigitIndex = (d) => index.get(d);
  }
}
const numberStringFormatter = new NumberStringFormat();
/**
 * Exported for testing purposes only.
 *
 * @internal
 */
let dateTimeFormatCache;
/**
 * Used to ensure all cached formats are for the same locale.
 *
 * @internal
 */
let previousLocaleUsedForCaching;
/**
 * Generates a cache key for date time format lookups.
 *
 * @internal
 */
function buildDateTimeFormatCacheKey(options = {}) {
  return Object.entries(options)
    .sort(([key1], [key2]) => key1.localeCompare(key2))
    .map((keyValue) => `${keyValue[0]}-${keyValue[1]}`)
    .flat()
    .join(":");
}
/**
 * Returns an instance of Intl.DateTimeFormat and reuses it if requested with the same locale and options.
 *
 * **Note**: the cache will be cleared if a different locale is provided
 *
 * @internal
 */
function getDateTimeFormat(locale, options) {
  locale = getSupportedLocale(locale);
  if (!dateTimeFormatCache) {
    dateTimeFormatCache = new Map();
  }
  if (previousLocaleUsedForCaching !== locale) {
    dateTimeFormatCache.clear();
    previousLocaleUsedForCaching = locale;
  }
  const key = buildDateTimeFormatCacheKey(options);
  const cached = dateTimeFormatCache.get(key);
  if (cached) {
    return cached;
  }
  const format = new Intl.DateTimeFormat(locale, options);
  dateTimeFormatCache.set(key, format);
  return format;
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvM2M3MTYzYTVmZmNhYTAwYjc3NzA1N2MzYjU4MTU2OGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDekQ7QUFDVTs7QUFFOUQsMkNBQTJDLElBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakMsY0FBYywyQkFBMkIsRUFBRSxTQUFTLEVBQUUsc0NBQXNDO0FBQzVGO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBLHVDQUF1QywrQ0FBK0M7QUFDdEY7QUFDQSxtQkFBbUIsMkNBQTJDO0FBQzlELHdEQUF3RCwrQkFBK0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQyxpQ0FBaUMsMkNBQTJDLEVBQUUsbURBQW1EO0FBQ2pJO0FBQ0EsV0FBVyxrQkFBa0IsRUFBRTtBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsY0FBYyxrQkFBa0IsRUFBRSxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixrRUFBa0U7QUFDbEU7QUFDQSx5RkFBeUYsK0NBQStDO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3REFBbUI7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsMkJBQTJCLEVBQUUsU0FBUztBQUMxRiw4QkFBOEIsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLGlDQUFpQztBQUMzRztBQUNBO0FBQ0E7QUFDQSw4REFBOEQsU0FBUyxFQUFFLHdDQUF3QztBQUNqSCw4QkFBOEIscUNBQXFDLEVBQUUsSUFBSSxFQUFFLGtDQUFrQztBQUM3RztBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsRUFBRSx1Q0FBdUM7QUFDM0QsU0FBUyxzQ0FBc0MsRUFBRSxTQUFTO0FBQzFELFlBQVksc0JBQXNCLEVBQUUsa0RBQWtELEVBQUU7QUFDeEY7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLFNBQVMsb0RBQWU7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxTQUFTLEdBQUcscUJBQXFCO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseURBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBaUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQsZ0NBQWdDLFlBQVk7QUFDNUMsZ0NBQWdDLGNBQWM7QUFDOUMsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsMEJBQTBCLFlBQVksR0FBRyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrUjs7Ozs7Ozs7Ozs7Ozs7O0FDaGlCL1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2tleS0zMzg5ZDg3MC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2NhbGUtYjNjNDRkZGEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5mdW5jdGlvbiBpc0FjdGl2YXRpb25LZXkoa2V5KSB7XG4gIHJldHVybiBrZXkgPT09IFwiRW50ZXJcIiB8fCBrZXkgPT09IFwiIFwiO1xufVxuY29uc3QgbnVtYmVyS2V5cyA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl07XG5cbmV4cG9ydCB7IGlzQWN0aXZhdGlvbktleSBhcyBpLCBudW1iZXJLZXlzIGFzIG4gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBjIGFzIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSwgYSBhcyBjb250YWluc0Nyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlcktleXMgfSBmcm9tICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuXG5jb25zdCB1bm5lY2Vzc2FyeURlY2ltYWwgPSBuZXcgUmVnRXhwKGBcXFxcJHtcIi5cIn0oMCspPyRgKTtcbmNvbnN0IHRyYWlsaW5nWmVyb3MgPSBuZXcgUmVnRXhwKFwiMCskXCIpO1xuLy8gYWRvcHRlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82NjkzOTI0NFxuY2xhc3MgQmlnRGVjaW1hbCB7XG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQmlnRGVjaW1hbCkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBjb25zdCBbaW50ZWdlcnMsIGRlY2ltYWxzXSA9IGV4cGFuZEV4cG9uZW50aWFsTnVtYmVyU3RyaW5nKGlucHV0KS5zcGxpdChcIi5cIikuY29uY2F0KFwiXCIpO1xuICAgIHRoaXMudmFsdWUgPVxuICAgICAgQmlnSW50KGludGVnZXJzICsgZGVjaW1hbHMucGFkRW5kKEJpZ0RlY2ltYWwuREVDSU1BTFMsIFwiMFwiKS5zbGljZSgwLCBCaWdEZWNpbWFsLkRFQ0lNQUxTKSkgK1xuICAgICAgICBCaWdJbnQoQmlnRGVjaW1hbC5ST1VOREVEICYmIGRlY2ltYWxzW0JpZ0RlY2ltYWwuREVDSU1BTFNdID49IFwiNVwiKTtcbiAgICB0aGlzLmlzTmVnYXRpdmUgPSBpbnB1dC5jaGFyQXQoMCkgPT09IFwiLVwiO1xuICB9XG4gIGdldEludGVnZXJzQW5kRGVjaW1hbHMoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMudmFsdWVcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucmVwbGFjZShcIi1cIiwgXCJcIilcbiAgICAgIC5wYWRTdGFydChCaWdEZWNpbWFsLkRFQ0lNQUxTICsgMSwgXCIwXCIpO1xuICAgIGNvbnN0IGludGVnZXJzID0gcy5zbGljZSgwLCAtQmlnRGVjaW1hbC5ERUNJTUFMUyk7XG4gICAgY29uc3QgZGVjaW1hbHMgPSBzLnNsaWNlKC1CaWdEZWNpbWFsLkRFQ0lNQUxTKS5yZXBsYWNlKHRyYWlsaW5nWmVyb3MsIFwiXCIpO1xuICAgIHJldHVybiB7IGludGVnZXJzLCBkZWNpbWFscyB9O1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHsgaW50ZWdlcnMsIGRlY2ltYWxzIH0gPSB0aGlzLmdldEludGVnZXJzQW5kRGVjaW1hbHMoKTtcbiAgICByZXR1cm4gYCR7dGhpcy5pc05lZ2F0aXZlID8gXCItXCIgOiBcIlwifSR7aW50ZWdlcnN9JHtkZWNpbWFscy5sZW5ndGggPyBcIi5cIiArIGRlY2ltYWxzIDogXCJcIn1gO1xuICB9XG4gIGZvcm1hdFRvUGFydHMoZm9ybWF0dGVyKSB7XG4gICAgY29uc3QgeyBpbnRlZ2VycywgZGVjaW1hbHMgfSA9IHRoaXMuZ2V0SW50ZWdlcnNBbmREZWNpbWFscygpO1xuICAgIGNvbnN0IHBhcnRzID0gZm9ybWF0dGVyLm51bWJlckZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKEJpZ0ludChpbnRlZ2VycykpO1xuICAgIHRoaXMuaXNOZWdhdGl2ZSAmJiBwYXJ0cy51bnNoaWZ0KHsgdHlwZTogXCJtaW51c1NpZ25cIiwgdmFsdWU6IGZvcm1hdHRlci5taW51c1NpZ24gfSk7XG4gICAgaWYgKGRlY2ltYWxzLmxlbmd0aCkge1xuICAgICAgcGFydHMucHVzaCh7IHR5cGU6IFwiZGVjaW1hbFwiLCB2YWx1ZTogZm9ybWF0dGVyLmRlY2ltYWwgfSk7XG4gICAgICBkZWNpbWFscy5zcGxpdChcIlwiKS5mb3JFYWNoKChjaGFyKSA9PiBwYXJ0cy5wdXNoKHsgdHlwZTogXCJmcmFjdGlvblwiLCB2YWx1ZTogY2hhciB9KSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbiAgfVxuICBmb3JtYXQoZm9ybWF0dGVyKSB7XG4gICAgY29uc3QgeyBpbnRlZ2VycywgZGVjaW1hbHMgfSA9IHRoaXMuZ2V0SW50ZWdlcnNBbmREZWNpbWFscygpO1xuICAgIGNvbnN0IGludGVnZXJzRm9ybWF0dGVkID0gYCR7dGhpcy5pc05lZ2F0aXZlID8gZm9ybWF0dGVyLm1pbnVzU2lnbiA6IFwiXCJ9JHtmb3JtYXR0ZXIubnVtYmVyRm9ybWF0dGVyLmZvcm1hdChCaWdJbnQoaW50ZWdlcnMpKX1gO1xuICAgIGNvbnN0IGRlY2ltYWxzRm9ybWF0dGVkID0gZGVjaW1hbHMubGVuZ3RoXG4gICAgICA/IGAke2Zvcm1hdHRlci5kZWNpbWFsfSR7ZGVjaW1hbHNcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC5tYXAoKGNoYXIpID0+IGZvcm1hdHRlci5udW1iZXJGb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihjaGFyKSkpXG4gICAgICAgIC5qb2luKFwiXCIpfWBcbiAgICAgIDogXCJcIjtcbiAgICByZXR1cm4gYCR7aW50ZWdlcnNGb3JtYXR0ZWR9JHtkZWNpbWFsc0Zvcm1hdHRlZH1gO1xuICB9XG4gIGFkZChuKSB7XG4gICAgcmV0dXJuIEJpZ0RlY2ltYWwuZnJvbUJpZ0ludCh0aGlzLnZhbHVlICsgbmV3IEJpZ0RlY2ltYWwobikudmFsdWUpO1xuICB9XG4gIHN1YnRyYWN0KG4pIHtcbiAgICByZXR1cm4gQmlnRGVjaW1hbC5mcm9tQmlnSW50KHRoaXMudmFsdWUgLSBuZXcgQmlnRGVjaW1hbChuKS52YWx1ZSk7XG4gIH1cbiAgbXVsdGlwbHkobikge1xuICAgIHJldHVybiBCaWdEZWNpbWFsLl9kaXZSb3VuZCh0aGlzLnZhbHVlICogbmV3IEJpZ0RlY2ltYWwobikudmFsdWUsIEJpZ0RlY2ltYWwuU0hJRlQpO1xuICB9XG4gIGRpdmlkZShuKSB7XG4gICAgcmV0dXJuIEJpZ0RlY2ltYWwuX2RpdlJvdW5kKHRoaXMudmFsdWUgKiBCaWdEZWNpbWFsLlNISUZULCBuZXcgQmlnRGVjaW1hbChuKS52YWx1ZSk7XG4gIH1cbn1cbi8vIENvbmZpZ3VyYXRpb246IGNvbnN0YW50c1xuQmlnRGVjaW1hbC5ERUNJTUFMUyA9IDEwMDsgLy8gbnVtYmVyIG9mIGRlY2ltYWxzIG9uIGFsbCBpbnN0YW5jZXNcbkJpZ0RlY2ltYWwuUk9VTkRFRCA9IHRydWU7IC8vIG51bWJlcnMgYXJlIHRydW5jYXRlZCAoZmFsc2UpIG9yIHJvdW5kZWQgKHRydWUpXG5CaWdEZWNpbWFsLlNISUZUID0gQmlnSW50KFwiMVwiICsgXCIwXCIucmVwZWF0KEJpZ0RlY2ltYWwuREVDSU1BTFMpKTsgLy8gZGVyaXZlZCBjb25zdGFudFxuQmlnRGVjaW1hbC5fZGl2Um91bmQgPSAoZGl2aWRlbmQsIGRpdmlzb3IpID0+IEJpZ0RlY2ltYWwuZnJvbUJpZ0ludChkaXZpZGVuZCAvIGRpdmlzb3IgKyAoQmlnRGVjaW1hbC5ST1VOREVEID8gKChkaXZpZGVuZCAqIEJpZ0ludCgyKSkgLyBkaXZpc29yKSAlIEJpZ0ludCgyKSA6IEJpZ0ludCgwKSkpO1xuQmlnRGVjaW1hbC5mcm9tQmlnSW50ID0gKGJpZ2ludCkgPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKEJpZ0RlY2ltYWwucHJvdG90eXBlKSwgeyB2YWx1ZTogYmlnaW50LCBpc05lZ2F0aXZlOiBiaWdpbnQgPCBCaWdJbnQoMCkgfSk7XG5mdW5jdGlvbiBpc1ZhbGlkTnVtYmVyKG51bWJlclN0cmluZykge1xuICByZXR1cm4gISghbnVtYmVyU3RyaW5nIHx8IGlzTmFOKE51bWJlcihudW1iZXJTdHJpbmcpKSk7XG59XG5mdW5jdGlvbiBwYXJzZU51bWJlclN0cmluZyhudW1iZXJTdHJpbmcpIHtcbiAgaWYgKCFudW1iZXJTdHJpbmcgfHwgIXN0cmluZ0NvbnRhaW5zTnVtYmVycyhudW1iZXJTdHJpbmcpKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIHNhbml0aXplRXhwb25lbnRpYWxOdW1iZXJTdHJpbmcobnVtYmVyU3RyaW5nLCAobm9uRXhwb051bVN0cmluZykgPT4ge1xuICAgIGxldCBjb250YWluc0RlY2ltYWwgPSBmYWxzZTtcbiAgICBjb25zdCByZXN1bHQgPSBub25FeHBvTnVtU3RyaW5nXG4gICAgICAuc3BsaXQoXCJcIilcbiAgICAgIC5maWx0ZXIoKHZhbHVlLCBpKSA9PiB7XG4gICAgICBpZiAodmFsdWUubWF0Y2goL1xcLi9nKSAmJiAhY29udGFpbnNEZWNpbWFsKSB7XG4gICAgICAgIGNvbnRhaW5zRGVjaW1hbCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLm1hdGNoKC9cXC0vZykgJiYgaSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW1iZXJLZXlzLmluY2x1ZGVzKHZhbHVlKTtcbiAgICB9KVxuICAgICAgLnJlZHVjZSgoc3RyaW5nLCBwYXJ0KSA9PiBzdHJpbmcgKyBwYXJ0KTtcbiAgICByZXR1cm4gaXNWYWxpZE51bWJlcihyZXN1bHQpID8gbmV3IEJpZ0RlY2ltYWwocmVzdWx0KS50b1N0cmluZygpIDogXCJcIjtcbiAgfSk7XG59XG4vLyByZWdleCBmb3IgbnVtYmVyIHNhbml0aXphdGlvblxuY29uc3QgYWxsTGVhZGluZ1plcm9zT3B0aW9uYWxseU5lZ2F0aXZlID0gL14oWy0wXSkwKyg/PVxcZCkvO1xuY29uc3QgZGVjaW1hbE9ubHlBdEVuZE9mU3RyaW5nID0gLyg/IV5cXC4pXFwuJC87XG5jb25zdCBhbGxIeXBoZW5zRXhjZXB0VGhlU3RhcnQgPSAvKD8hXi0pLS9nO1xuY29uc3QgaXNOZWdhdGl2ZURlY2ltYWxPbmx5WmVyb3MgPSAvXi1cXGIwXFxiXFwuPzAqJC87XG5jb25zdCBzYW5pdGl6ZU51bWJlclN0cmluZyA9IChudW1iZXJTdHJpbmcpID0+IHNhbml0aXplRXhwb25lbnRpYWxOdW1iZXJTdHJpbmcobnVtYmVyU3RyaW5nLCAobm9uRXhwb051bVN0cmluZykgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRWYWx1ZSA9IG5vbkV4cG9OdW1TdHJpbmdcbiAgICAucmVwbGFjZShhbGxIeXBoZW5zRXhjZXB0VGhlU3RhcnQsIFwiXCIpXG4gICAgLnJlcGxhY2UoZGVjaW1hbE9ubHlBdEVuZE9mU3RyaW5nLCBcIlwiKVxuICAgIC5yZXBsYWNlKGFsbExlYWRpbmdaZXJvc09wdGlvbmFsbHlOZWdhdGl2ZSwgXCIkMVwiKTtcbiAgcmV0dXJuIGlzVmFsaWROdW1iZXIoc2FuaXRpemVkVmFsdWUpXG4gICAgPyBpc05lZ2F0aXZlRGVjaW1hbE9ubHlaZXJvcy50ZXN0KHNhbml0aXplZFZhbHVlKVxuICAgICAgPyBzYW5pdGl6ZWRWYWx1ZVxuICAgICAgOiBuZXcgQmlnRGVjaW1hbChzYW5pdGl6ZWRWYWx1ZSkudG9TdHJpbmcoKVxuICAgIDogbm9uRXhwb051bVN0cmluZztcbn0pO1xuZnVuY3Rpb24gc2FuaXRpemVFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcsIGZ1bmMpIHtcbiAgaWYgKCFudW1iZXJTdHJpbmcpIHtcbiAgICByZXR1cm4gbnVtYmVyU3RyaW5nO1xuICB9XG4gIGNvbnN0IGZpcnN0RSA9IG51bWJlclN0cmluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJlXCIpICsgMTtcbiAgaWYgKCFmaXJzdEUpIHtcbiAgICByZXR1cm4gZnVuYyhudW1iZXJTdHJpbmcpO1xuICB9XG4gIHJldHVybiBudW1iZXJTdHJpbmdcbiAgICAucmVwbGFjZSgvW2VFXSokL2csIFwiXCIpXG4gICAgLnN1YnN0cmluZygwLCBmaXJzdEUpXG4gICAgLmNvbmNhdChudW1iZXJTdHJpbmcuc2xpY2UoZmlyc3RFKS5yZXBsYWNlKC9bZUVdL2csIFwiXCIpKVxuICAgIC5zcGxpdCgvW2VFXS8pXG4gICAgLm1hcCgoc2VjdGlvbiwgaSkgPT4gKGkgPT09IDEgPyBmdW5jKHNlY3Rpb24ucmVwbGFjZSgvXFwuL2csIFwiXCIpKSA6IGZ1bmMoc2VjdGlvbikpKVxuICAgIC5qb2luKFwiZVwiKVxuICAgIC5yZXBsYWNlKC9eZS8sIFwiMWVcIik7XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIGV4cG9uZW50aWFsIG5vdGF0aW9uIG51bWJlclN0cmluZyBpbnRvIGRlY2ltYWwgbm90YXRpb24uXG4gKiBCaWdJbnQgZG9lc24ndCBzdXBwb3J0IGV4cG9uZW50aWFsIG5vdGF0aW9uLCBzbyB0aGlzIGlzIHJlcXVpcmVkIHRvIG1haW50YWluIHByZWNpc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBudW1iZXJTdHJpbmcgLSBwcmUtdmFsaWRhdGVkIGV4cG9uZW50aWFsIG9yIGRlY2ltYWwgbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBudW1iZXJTdHJpbmcgaW4gZGVjaW1hbCBub3RhdGlvblxuICovXG5mdW5jdGlvbiBleHBhbmRFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcpIHtcbiAgY29uc3QgZXhwb25lbnRpYWxQYXJ0cyA9IG51bWJlclN0cmluZy5zcGxpdCgvW2VFXS8pO1xuICBpZiAoZXhwb25lbnRpYWxQYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbnVtYmVyU3RyaW5nO1xuICB9XG4gIGNvbnN0IG51bWJlciA9ICtudW1iZXJTdHJpbmc7XG4gIGlmIChOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpKSB7XG4gICAgcmV0dXJuIGAke251bWJlcn1gO1xuICB9XG4gIGNvbnN0IGlzTmVnYXRpdmUgPSBudW1iZXJTdHJpbmcuY2hhckF0KDApID09PSBcIi1cIjtcbiAgY29uc3QgbWFnbml0dWRlID0gK2V4cG9uZW50aWFsUGFydHNbMV07XG4gIGNvbnN0IGRlY2ltYWxQYXJ0cyA9IGV4cG9uZW50aWFsUGFydHNbMF0uc3BsaXQoXCIuXCIpO1xuICBjb25zdCBpbnRlZ2VycyA9IChpc05lZ2F0aXZlID8gZGVjaW1hbFBhcnRzWzBdLnN1YnN0cmluZygxKSA6IGRlY2ltYWxQYXJ0c1swXSkgfHwgXCJcIjtcbiAgY29uc3QgZGVjaW1hbHMgPSBkZWNpbWFsUGFydHNbMV0gfHwgXCJcIjtcbiAgY29uc3Qgc2hpZnREZWNpbWFsTGVmdCA9IChpbnRlZ2VycywgbWFnbml0dWRlKSA9PiB7XG4gICAgY29uc3QgbWFnbml0dWRlRGVsdGEgPSBNYXRoLmFicyhtYWduaXR1ZGUpIC0gaW50ZWdlcnMubGVuZ3RoO1xuICAgIGNvbnN0IGxlZnRQYWRkZWRaZXJvcyA9IG1hZ25pdHVkZURlbHRhID4gMCA/IGAke1wiMFwiLnJlcGVhdChtYWduaXR1ZGVEZWx0YSl9JHtpbnRlZ2Vyc31gIDogaW50ZWdlcnM7XG4gICAgY29uc3Qgc2hpZnRlZERlY2ltYWwgPSBgJHtsZWZ0UGFkZGVkWmVyb3Muc2xpY2UoMCwgbWFnbml0dWRlKX0ke1wiLlwifSR7bGVmdFBhZGRlZFplcm9zLnNsaWNlKG1hZ25pdHVkZSl9YDtcbiAgICByZXR1cm4gc2hpZnRlZERlY2ltYWw7XG4gIH07XG4gIGNvbnN0IHNoaWZ0RGVjaW1hbFJpZ2h0ID0gKGRlY2ltYWxzLCBtYWduaXR1ZGUpID0+IHtcbiAgICBjb25zdCByaWdodFBhZGRlZFplcm9zID0gbWFnbml0dWRlID4gZGVjaW1hbHMubGVuZ3RoID8gYCR7ZGVjaW1hbHN9JHtcIjBcIi5yZXBlYXQobWFnbml0dWRlIC0gZGVjaW1hbHMubGVuZ3RoKX1gIDogZGVjaW1hbHM7XG4gICAgY29uc3Qgc2hpZnRlZERlY2ltYWwgPSBgJHtyaWdodFBhZGRlZFplcm9zLnNsaWNlKDAsIG1hZ25pdHVkZSl9JHtcIi5cIn0ke3JpZ2h0UGFkZGVkWmVyb3Muc2xpY2UobWFnbml0dWRlKX1gO1xuICAgIHJldHVybiBzaGlmdGVkRGVjaW1hbDtcbiAgfTtcbiAgY29uc3QgZXhwYW5kZWROdW1iZXJTdHJpbmcgPSBtYWduaXR1ZGUgPiAwXG4gICAgPyBgJHtpbnRlZ2Vyc30ke3NoaWZ0RGVjaW1hbFJpZ2h0KGRlY2ltYWxzLCBtYWduaXR1ZGUpfWBcbiAgICA6IGAke3NoaWZ0RGVjaW1hbExlZnQoaW50ZWdlcnMsIG1hZ25pdHVkZSl9JHtkZWNpbWFsc31gO1xuICByZXR1cm4gYCR7aXNOZWdhdGl2ZSA/IFwiLVwiIDogXCJcIn0ke2V4cGFuZGVkTnVtYmVyU3RyaW5nLmNoYXJBdCgwKSA9PT0gXCIuXCIgPyBcIjBcIiA6IFwiXCJ9JHtleHBhbmRlZE51bWJlclN0cmluZ1xuICAgIC5yZXBsYWNlKHVubmVjZXNzYXJ5RGVjaW1hbCwgXCJcIilcbiAgICAucmVwbGFjZShhbGxMZWFkaW5nWmVyb3NPcHRpb25hbGx5TmVnYXRpdmUsIFwiXCIpfWA7XG59XG5mdW5jdGlvbiBzdHJpbmdDb250YWluc051bWJlcnMoc3RyaW5nKSB7XG4gIHJldHVybiBudW1iZXJLZXlzLnNvbWUoKG51bWJlcikgPT4gc3RyaW5nLmluY2x1ZGVzKG51bWJlcikpO1xufVxuXG5jb25zdCBkZWZhdWx0TG9jYWxlID0gXCJlblwiO1xuY29uc3QgdDluTG9jYWxlcyA9IFtcbiAgXCJhclwiLFxuICBcImJnXCIsXG4gIFwiYnNcIixcbiAgXCJjYVwiLFxuICBcImNzXCIsXG4gIFwiZGFcIixcbiAgXCJkZVwiLFxuICBcImVsXCIsXG4gIGRlZmF1bHRMb2NhbGUsXG4gIFwiZXNcIixcbiAgXCJldFwiLFxuICBcImZpXCIsXG4gIFwiZnJcIixcbiAgXCJoZVwiLFxuICBcImhyXCIsXG4gIFwiaHVcIixcbiAgXCJpZFwiLFxuICBcIml0XCIsXG4gIFwiamFcIixcbiAgXCJrb1wiLFxuICBcImx0XCIsXG4gIFwibHZcIixcbiAgXCJub1wiLFxuICBcIm5sXCIsXG4gIFwicGxcIixcbiAgXCJwdC1CUlwiLFxuICBcInB0LVBUXCIsXG4gIFwicm9cIixcbiAgXCJydVwiLFxuICBcInNrXCIsXG4gIFwic2xcIixcbiAgXCJzclwiLFxuICBcInN2XCIsXG4gIFwidGhcIixcbiAgXCJ0clwiLFxuICBcInVrXCIsXG4gIFwidmlcIixcbiAgXCJ6aC1DTlwiLFxuICBcInpoLUhLXCIsXG4gIFwiemgtVFdcIlxuXTtcbmNvbnN0IGxvY2FsZXMgPSBbXG4gIFwiYXJcIixcbiAgXCJiZ1wiLFxuICBcImJzXCIsXG4gIFwiY2FcIixcbiAgXCJjc1wiLFxuICBcImRhXCIsXG4gIFwiZGVcIixcbiAgXCJkZS1BVFwiLFxuICBcImRlLUNIXCIsXG4gIFwiZWxcIixcbiAgZGVmYXVsdExvY2FsZSxcbiAgXCJlbi1BVVwiLFxuICBcImVuLUNBXCIsXG4gIFwiZW4tR0JcIixcbiAgXCJlc1wiLFxuICBcImVzLU1YXCIsXG4gIFwiZXRcIixcbiAgXCJmaVwiLFxuICBcImZyXCIsXG4gIFwiZnItQ0hcIixcbiAgXCJoZVwiLFxuICBcImhpXCIsXG4gIFwiaHJcIixcbiAgXCJodVwiLFxuICBcImlkXCIsXG4gIFwiaXRcIixcbiAgXCJpdC1DSFwiLFxuICBcImphXCIsXG4gIFwia29cIixcbiAgXCJsdFwiLFxuICBcImx2XCIsXG4gIFwibWtcIixcbiAgXCJub1wiLFxuICBcIm5sXCIsXG4gIFwicGxcIixcbiAgXCJwdFwiLFxuICBcInB0LVBUXCIsXG4gIFwicm9cIixcbiAgXCJydVwiLFxuICBcInNrXCIsXG4gIFwic2xcIixcbiAgXCJzclwiLFxuICBcInN2XCIsXG4gIFwidGhcIixcbiAgXCJ0clwiLFxuICBcInVrXCIsXG4gIFwidmlcIixcbiAgXCJ6aC1DTlwiLFxuICBcInpoLUhLXCIsXG4gIFwiemgtVFdcIlxuXTtcbmNvbnN0IG51bWJlcmluZ1N5c3RlbXMgPSBbXG4gIFwiYXJhYlwiLFxuICBcImFyYWJleHRcIixcbiAgXCJiYWxpXCIsXG4gIFwiYmVuZ1wiLFxuICBcImRldmFcIixcbiAgXCJmdWxsd2lkZVwiLFxuICBcImd1anJcIixcbiAgXCJndXJ1XCIsXG4gIFwiaGFuaWRlY1wiLFxuICBcImtobXJcIixcbiAgXCJrbmRhXCIsXG4gIFwibGFvb1wiLFxuICBcImxhdG5cIixcbiAgXCJsaW1iXCIsXG4gIFwibWx5bVwiLFxuICBcIm1vbmdcIixcbiAgXCJteW1yXCIsXG4gIFwib3J5YVwiLFxuICBcInRhbWxkZWNcIixcbiAgXCJ0ZWx1XCIsXG4gIFwidGhhaVwiLFxuICBcInRpYnRcIlxuXTtcbmNvbnN0IGlzTnVtYmVyaW5nU3lzdGVtU3VwcG9ydGVkID0gKG51bWJlcmluZ1N5c3RlbSkgPT4gbnVtYmVyaW5nU3lzdGVtcy5pbmNsdWRlcyhudW1iZXJpbmdTeXN0ZW0pO1xuY29uc3QgYnJvd3Nlck51bWJlcmluZ1N5c3RlbSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbTtcbmNvbnN0IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBicm93c2VyTnVtYmVyaW5nU3lzdGVtID09PSBcImFyYWJcIiB8fCAhaXNOdW1iZXJpbmdTeXN0ZW1TdXBwb3J0ZWQoYnJvd3Nlck51bWJlcmluZ1N5c3RlbSlcbiAgPyBcImxhdG5cIlxuICA6IGJyb3dzZXJOdW1iZXJpbmdTeXN0ZW07XG5jb25zdCBnZXRTdXBwb3J0ZWROdW1iZXJpbmdTeXN0ZW0gPSAobnVtYmVyaW5nU3lzdGVtKSA9PiBpc051bWJlcmluZ1N5c3RlbVN1cHBvcnRlZChudW1iZXJpbmdTeXN0ZW0pID8gbnVtYmVyaW5nU3lzdGVtIDogZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbi8qKlxuICogR2V0cyB0aGUgbG9jYWxlIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSBsb2NhbGUg4oCTIHRoZSBCQ1AgNDcgbG9jYWxlIGNvZGVcbiAqIEBwYXJhbSBjb250ZXh0IC0gc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGxvY2FsZSBjb2RlIHNob3VsZCBtYXRjaCBpbiB0aGUgY29udGV4dCBvZiBDTERSIG9yIFQ5TiAodHJhbnNsYXRpb24pXG4gKi9cbmZ1bmN0aW9uIGdldFN1cHBvcnRlZExvY2FsZShsb2NhbGUsIGNvbnRleHQgPSBcImNsZHJcIikge1xuICBjb25zdCBjb250ZXh0dWFsTG9jYWxlcyA9IGNvbnRleHQgPT09IFwiY2xkclwiID8gbG9jYWxlcyA6IHQ5bkxvY2FsZXM7XG4gIGlmICghbG9jYWxlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XG4gIH1cbiAgaWYgKGNvbnRleHR1YWxMb2NhbGVzLmluY2x1ZGVzKGxvY2FsZSkpIHtcbiAgICByZXR1cm4gbG9jYWxlO1xuICB9XG4gIGxvY2FsZSA9IGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAvLyB3ZSBzdXBwb3J0IGJvdGggJ25iJyBhbmQgJ25vJyAoQkNQIDQ3KSBmb3IgTm9yd2VnaWFuIGJ1dCBvbmx5IGBub2AgaGFzIGNvcnJlc3BvbmRpbmcgYnVuZGxlXG4gIGlmIChsb2NhbGUgPT09IFwibmJcIikge1xuICAgIHJldHVybiBcIm5vXCI7XG4gIH1cbiAgLy8gd2UgdXNlIGBwdC1CUmAgYXMgaXQgd2lsbCBoYXZlIHRoZSBzYW1lIHRyYW5zbGF0aW9ucyBhcyBgcHRgLCB3aGljaCBoYXMgbm8gY29ycmVzcG9uZGluZyBidW5kbGVcbiAgaWYgKGNvbnRleHQgPT09IFwidDluXCIgJiYgbG9jYWxlID09PSBcInB0XCIpIHtcbiAgICByZXR1cm4gXCJwdC1CUlwiO1xuICB9XG4gIGlmIChsb2NhbGUuaW5jbHVkZXMoXCItXCIpKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlLnJlcGxhY2UoLyhcXHcrKS0oXFx3KykvLCAoX21hdGNoLCBsYW5ndWFnZSwgcmVnaW9uKSA9PiBgJHtsYW5ndWFnZX0tJHtyZWdpb24udG9VcHBlckNhc2UoKX1gKTtcbiAgICBpZiAoIWNvbnRleHR1YWxMb2NhbGVzLmluY2x1ZGVzKGxvY2FsZSkpIHtcbiAgICAgIGxvY2FsZSA9IGxvY2FsZS5zcGxpdChcIi1cIilbMF07XG4gICAgfVxuICB9XG4gIC8vIHdlIGNhbiBgemgtQ05gIGFzIGJhc2UgdHJhbnNsYXRpb24gZm9yIGNoaW5lc2UgbG9jYWxlcyB3aGljaCBoYXMgbm8gY29ycmVzcG9uZGluZyBidW5kbGUuXG4gIGlmIChsb2NhbGUgPT09IFwiemhcIikge1xuICAgIHJldHVybiBcInpoLUNOXCI7XG4gIH1cbiAgaWYgKCFjb250ZXh0dWFsTG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUpKSB7XG4gICAgY29uc29sZS53YXJuKGBUcmFuc2xhdGlvbnMgZm9yIHRoZSBcIiR7bG9jYWxlfVwiIGxvY2FsZSBhcmUgbm90IGF2YWlsYWJsZSBhbmQgd2lsbCBmYWxsIGJhY2sgdG8gdGhlIGRlZmF1bHQsIEVuZ2xpc2ggKGVuKS5gKTtcbiAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgfVxuICByZXR1cm4gbG9jYWxlO1xufVxuY29uc3QgY29ubmVjdGVkQ29tcG9uZW50cyA9IG5ldyBTZXQoKTtcbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGJlZm9yZSBhbnkgbG9naWMgdGhhdCBkZXBlbmRzIG9uIGxvY2FsZVxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdExvY2FsaXplZChjb21wb25lbnQpIHtcbiAgdXBkYXRlRWZmZWN0aXZlTG9jYWxlKGNvbXBvbmVudCk7XG4gIGlmIChjb25uZWN0ZWRDb21wb25lbnRzLnNpemUgPT09IDApIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wibGFuZ1wiXSxcbiAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgfVxuICBjb25uZWN0ZWRDb21wb25lbnRzLmFkZChjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIGlzIG9ubHkgZXhwb3J0ZWQgZm9yIGNvbXBvbmVudHMgdGhhdCBpbXBsZW1lbnRlZCB0aGUgbm93IGRlcHJlY2F0ZWQgYGxvY2FsZWAgcHJvcC5cbiAqXG4gKiBEbyBub3QgdXNlIHRoaXMgdXRpbHMgZm9yIG5ldyBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdXBkYXRlRWZmZWN0aXZlTG9jYWxlKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlID0gZ2V0TG9jYWxlKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdExvY2FsaXplZChjb21wb25lbnQpIHtcbiAgY29ubmVjdGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgaWYgKGNvbm5lY3RlZENvbXBvbmVudHMuc2l6ZSA9PT0gMCkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9XG59XG5jb25zdCBtdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAocmVjb3JkcykgPT4ge1xuICByZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xuICAgIGNvbnN0IGVsID0gcmVjb3JkLnRhcmdldDtcbiAgICBjb25uZWN0ZWRDb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgY29uc3QgaW5VbnJlbGF0ZWRTdWJ0cmVlID0gIWNvbnRhaW5zQ3Jvc3NTaGFkb3dCb3VuZGFyeShlbCwgY29tcG9uZW50LmVsKTtcbiAgICAgIGlmIChpblVucmVsYXRlZFN1YnRyZWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xvc2VzdExhbmdFbCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShjb21wb25lbnQuZWwsIFwiW2xhbmddXCIpO1xuICAgICAgaWYgKCFjbG9zZXN0TGFuZ0VsKSB7XG4gICAgICAgIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjbG9zZXN0TGFuZyA9IGNsb3Nlc3RMYW5nRWwubGFuZztcbiAgICAgIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUgPVxuICAgICAgICAvLyB1c2VyIHNldCBsYW5nPVwiXCIgbWVhbnMgdW5rbm93biBsYW5ndWFnZSwgc28gd2UgdXNlIGRlZmF1bHRcbiAgICAgICAgY2xvc2VzdExhbmdFbC5oYXNBdHRyaWJ1dGUoXCJsYW5nXCIpICYmIGNsb3Nlc3RMYW5nID09PSBcIlwiID8gZGVmYXVsdExvY2FsZSA6IGNsb3Nlc3RMYW5nO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuLyoqXG4gKiBUaGlzIHV0aWwgaGVscHMgcmVzb2x2ZSBhIGNvbXBvbmVudCdzIGxvY2FsZS5cbiAqIEl0IHdpbGwgYWxzbyBmYWxsIGJhY2sgb24gdGhlIGRlcHJlY2F0ZWQgYGxvY2FsZWAgaWYgYSBjb21wb25lbnQgaW1wbGVtZW50ZWQgdGhpcyBwcmV2aW91c2x5LlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0TG9jYWxlKGNvbXBvbmVudCkge1xuICByZXR1cm4gKGNvbXBvbmVudC5lbC5sYW5nIHx8XG4gICAgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudC5lbCwgXCJbbGFuZ11cIik/LmxhbmcgfHxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyB8fFxuICAgIGRlZmF1bHRMb2NhbGUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWwgZm9ybWF0cyBhbmQgcGFyc2VzIG51bWJlcnMgZm9yIGxvY2FsaXphdGlvblxuICovXG5jbGFzcyBOdW1iZXJTdHJpbmdGb3JtYXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlbG9jYWxpemUgPSAobnVtYmVyU3RyaW5nKSA9PiBcbiAgICAvLyBGb3IgcGVyZm9ybWFuY2UsIChkZSlsb2NhbGl6YXRpb24gaXMgc2tpcHBlZCBpZiB0aGUgZm9ybWF0dGVyIGlzbid0IGluaXRpYWxpemVkLlxuICAgIC8vIEluIG9yZGVyIHRvIGxvY2FsaXplL2RlbG9jYWxpemUsIGUuZy4gd2hlbiBsYW5nL251bWJlcmluZ1N5c3RlbSBwcm9wcyBhcmUgbm90IGRlZmF1bHQgdmFsdWVzLFxuICAgIC8vIGBudW1iZXJGb3JtYXRPcHRpb25zYCBtdXN0IGJlIHNldCBpbiBhIGNvbXBvbmVudCB0byBjcmVhdGUgYW5kIGNhY2hlIHRoZSBmb3JtYXR0ZXIuXG4gICAgdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9uc1xuICAgICAgPyBzYW5pdGl6ZUV4cG9uZW50aWFsTnVtYmVyU3RyaW5nKG51bWJlclN0cmluZywgKG5vbkV4cG9OdW1TdHJpbmcpID0+IG5vbkV4cG9OdW1TdHJpbmdcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7dGhpcy5fbWludXNTaWdufV1gLCBcImdcIiksIFwiLVwiKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBbJHt0aGlzLl9ncm91cH1dYCwgXCJnXCIpLCBcIlwiKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBbJHt0aGlzLl9kZWNpbWFsfV1gLCBcImdcIiksIFwiLlwiKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBbJHt0aGlzLl9kaWdpdHMuam9pbihcIlwiKX1dYCwgXCJnXCIpLCB0aGlzLl9nZXREaWdpdEluZGV4KSlcbiAgICAgIDogbnVtYmVyU3RyaW5nO1xuICAgIHRoaXMubG9jYWxpemUgPSAobnVtYmVyU3RyaW5nKSA9PiB0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zXG4gICAgICA/IHNhbml0aXplRXhwb25lbnRpYWxOdW1iZXJTdHJpbmcobnVtYmVyU3RyaW5nLCAobm9uRXhwb051bVN0cmluZykgPT4gaXNWYWxpZE51bWJlcihub25FeHBvTnVtU3RyaW5nLnRyaW0oKSlcbiAgICAgICAgPyBuZXcgQmlnRGVjaW1hbChub25FeHBvTnVtU3RyaW5nLnRyaW0oKSlcbiAgICAgICAgICAuZm9ybWF0KHRoaXMpXG4gICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7dGhpcy5fYWN0dWFsR3JvdXB9XWAsIFwiZ1wiKSwgdGhpcy5fZ3JvdXApXG4gICAgICAgIDogbm9uRXhwb051bVN0cmluZylcbiAgICAgIDogbnVtYmVyU3RyaW5nO1xuICB9XG4gIGdldCBncm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JvdXA7XG4gIH1cbiAgZ2V0IGRlY2ltYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY2ltYWw7XG4gIH1cbiAgZ2V0IG1pbnVzU2lnbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWludXNTaWduO1xuICB9XG4gIGdldCBkaWdpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpZ2l0cztcbiAgfVxuICBnZXQgbnVtYmVyRm9ybWF0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJGb3JtYXR0ZXI7XG4gIH1cbiAgZ2V0IG51bWJlckZvcm1hdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIG51bWJlckZvcm1hdE9wdGlvbnMgbmVlZHMgdG8gYmUgc2V0IGJlZm9yZSBsb2NhbGl6ZS9kZWxvY2FsaXplIGlzIGNhbGxlZCB0byBlbnN1cmUgdGhlIG9wdGlvbnMgYXJlIHVwIHRvIGRhdGVcbiAgICovXG4gIHNldCBudW1iZXJGb3JtYXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmxvY2FsZSA9IGdldFN1cHBvcnRlZExvY2FsZShvcHRpb25zPy5sb2NhbGUpO1xuICAgIG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtID0gZ2V0U3VwcG9ydGVkTnVtYmVyaW5nU3lzdGVtKG9wdGlvbnM/Lm51bWJlcmluZ1N5c3RlbSk7XG4gICAgaWYgKFxuICAgIC8vIE5vIG5lZWQgdG8gY3JlYXRlIHRoZSBmb3JtYXR0ZXIgaWYgYGxvY2FsZWAgYW5kIGBudW1iZXJpbmdTeXN0ZW1gXG4gICAgLy8gYXJlIHRoZSBkZWZhdWx0IHZhbHVlcyBhbmQgYG51bWJlckZvcm1hdE9wdGlvbnNgIGhhcyBub3QgYmVlbiBzZXRcbiAgICAoIXRoaXMuX251bWJlckZvcm1hdE9wdGlvbnMgJiZcbiAgICAgIG9wdGlvbnMubG9jYWxlID09PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSA9PT0gZGVmYXVsdE51bWJlcmluZ1N5c3RlbSAmJlxuICAgICAgLy8gZG9uJ3Qgc2tpcCBpbml0aWFsaXphdGlvbiBpZiBhbnkgb3B0aW9ucyBiZXNpZGVzIGxvY2FsZS9udW1iZXJpbmdTeXN0ZW0gYXJlIHNldFxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID09PSAyKSB8fFxuICAgICAgLy8gY2FjaGUgZm9ybWF0dGVyIGJ5IG9ubHkgcmVjcmVhdGluZyB3aGVuIG9wdGlvbnMgY2hhbmdlXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zKSA9PT0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5fbnVtYmVyRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnMubG9jYWxlLCB0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zKTtcbiAgICB0aGlzLl9kaWdpdHMgPSBbXG4gICAgICAuLi5uZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucy5sb2NhbGUsIHtcbiAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnMubnVtYmVyaW5nU3lzdGVtXG4gICAgICB9KS5mb3JtYXQoOTg3NjU0MzIxMClcbiAgICBdLnJldmVyc2UoKTtcbiAgICBjb25zdCBpbmRleCA9IG5ldyBNYXAodGhpcy5fZGlnaXRzLm1hcCgoZCwgaSkgPT4gW2QsIGldKSk7XG4gICAgY29uc3QgcGFydHMgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucy5sb2NhbGUpLmZvcm1hdFRvUGFydHMoLTEyMzQ1Njc4LjkpO1xuICAgIHRoaXMuX2FjdHVhbEdyb3VwID0gcGFydHMuZmluZCgoZCkgPT4gZC50eXBlID09PSBcImdyb3VwXCIpLnZhbHVlO1xuICAgIC8vIGNoYW5nZSB3aGl0ZXNwYWNlIGdyb3VwIGNoYXJhY3RlcnMgdGhhdCBkb24ndCByZW5kZXIgY29ycmVjdGx5XG4gICAgdGhpcy5fZ3JvdXAgPSB0aGlzLl9hY3R1YWxHcm91cC50cmltKCkubGVuZ3RoID09PSAwID8gXCIgXCIgOiB0aGlzLl9hY3R1YWxHcm91cDtcbiAgICB0aGlzLl9kZWNpbWFsID0gcGFydHMuZmluZCgoZCkgPT4gZC50eXBlID09PSBcImRlY2ltYWxcIikudmFsdWU7XG4gICAgdGhpcy5fbWludXNTaWduID0gcGFydHMuZmluZCgoZCkgPT4gZC50eXBlID09PSBcIm1pbnVzU2lnblwiKS52YWx1ZTtcbiAgICB0aGlzLl9nZXREaWdpdEluZGV4ID0gKGQpID0+IGluZGV4LmdldChkKTtcbiAgfVxufVxuY29uc3QgbnVtYmVyU3RyaW5nRm9ybWF0dGVyID0gbmV3IE51bWJlclN0cmluZ0Zvcm1hdCgpO1xuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5sZXQgZGF0ZVRpbWVGb3JtYXRDYWNoZTtcbi8qKlxuICogVXNlZCB0byBlbnN1cmUgYWxsIGNhY2hlZCBmb3JtYXRzIGFyZSBmb3IgdGhlIHNhbWUgbG9jYWxlLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5sZXQgcHJldmlvdXNMb2NhbGVVc2VkRm9yQ2FjaGluZztcbi8qKlxuICogR2VuZXJhdGVzIGEgY2FjaGUga2V5IGZvciBkYXRlIHRpbWUgZm9ybWF0IGxvb2t1cHMuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVRpbWVGb3JtYXRDYWNoZUtleShvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpXG4gICAgLnNvcnQoKFtrZXkxXSwgW2tleTJdKSA9PiBrZXkxLmxvY2FsZUNvbXBhcmUoa2V5MikpXG4gICAgLm1hcCgoa2V5VmFsdWUpID0+IGAke2tleVZhbHVlWzBdfS0ke2tleVZhbHVlWzFdfWApXG4gICAgLmZsYXQoKVxuICAgIC5qb2luKFwiOlwiKTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBJbnRsLkRhdGVUaW1lRm9ybWF0IGFuZCByZXVzZXMgaXQgaWYgcmVxdWVzdGVkIHdpdGggdGhlIHNhbWUgbG9jYWxlIGFuZCBvcHRpb25zLlxuICpcbiAqICoqTm90ZSoqOiB0aGUgY2FjaGUgd2lsbCBiZSBjbGVhcmVkIGlmIGEgZGlmZmVyZW50IGxvY2FsZSBpcyBwcm92aWRlZFxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMpIHtcbiAgbG9jYWxlID0gZ2V0U3VwcG9ydGVkTG9jYWxlKGxvY2FsZSk7XG4gIGlmICghZGF0ZVRpbWVGb3JtYXRDYWNoZSkge1xuICAgIGRhdGVUaW1lRm9ybWF0Q2FjaGUgPSBuZXcgTWFwKCk7XG4gIH1cbiAgaWYgKHByZXZpb3VzTG9jYWxlVXNlZEZvckNhY2hpbmcgIT09IGxvY2FsZSkge1xuICAgIGRhdGVUaW1lRm9ybWF0Q2FjaGUuY2xlYXIoKTtcbiAgICBwcmV2aW91c0xvY2FsZVVzZWRGb3JDYWNoaW5nID0gbG9jYWxlO1xuICB9XG4gIGNvbnN0IGtleSA9IGJ1aWxkRGF0ZVRpbWVGb3JtYXRDYWNoZUtleShvcHRpb25zKTtcbiAgY29uc3QgY2FjaGVkID0gZGF0ZVRpbWVGb3JtYXRDYWNoZS5nZXQoa2V5KTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cbiAgY29uc3QgZm9ybWF0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBvcHRpb25zKTtcbiAgZGF0ZVRpbWVGb3JtYXRDYWNoZS5zZXQoa2V5LCBmb3JtYXQpO1xuICByZXR1cm4gZm9ybWF0O1xufVxuXG5leHBvcnQgeyBCaWdEZWNpbWFsIGFzIEIsIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gYXMgYSwgZ2V0RGF0ZVRpbWVGb3JtYXQgYXMgYiwgY29ubmVjdExvY2FsaXplZCBhcyBjLCBkaXNjb25uZWN0TG9jYWxpemVkIGFzIGQsIGdldFN1cHBvcnRlZE51bWJlcmluZ1N5c3RlbSBhcyBlLCBnZXRTdXBwb3J0ZWRMb2NhbGUgYXMgZywgaXNWYWxpZE51bWJlciBhcyBpLCBudW1iZXJTdHJpbmdGb3JtYXR0ZXIgYXMgbiwgcGFyc2VOdW1iZXJTdHJpbmcgYXMgcCwgc2FuaXRpemVOdW1iZXJTdHJpbmcgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=