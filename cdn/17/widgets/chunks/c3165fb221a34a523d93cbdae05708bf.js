"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input-time-picker_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-8e720ee4.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-8e720ee4.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputTimePicker),
/* harmony export */   "T": () => (/* binding */ TimePicker),
/* harmony export */   "d": () => (/* binding */ dayjs)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./focusTrapComponent-b3a29d9c.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-b3a29d9c.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */











const maxTenthForMinuteAndSecond = 5;
function createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds = true) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    numberingSystem: (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.e)(numberingSystem)
  };
  if (includeSeconds) {
    options.second = "2-digit";
  }
  return (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.b)(locale, options);
}
function formatTimePart(number) {
  const numberAsString = number.toString();
  return number >= 0 && number <= 9 ? numberAsString.padStart(2, "0") : numberAsString;
}
function formatTimeString(value) {
  if (!isValidTime(value)) {
    return null;
  }
  const [hourString, minuteString, secondString] = value.split(":");
  const hour = formatTimePart(parseInt(hourString));
  const minute = formatTimePart(parseInt(minuteString));
  if (secondString) {
    const second = formatTimePart(parseInt(secondString));
    return `${hour}:${minute}:${second}`;
  }
  return `${hour}:${minute}`;
}
function getLocaleHourCycle(locale, numberingSystem) {
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
  return getLocalizedTimePart("meridiem", parts) ? "12" : "24";
}
function getLocalizedTimePart(part, parts) {
  if (!part || !parts) {
    return null;
  }
  if (part === "hourSuffix") {
    const hourIndex = parts.indexOf(parts.find(({ type }) => type === "hour"));
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const hourSuffix = parts[hourIndex + 1];
    return hourSuffix && hourSuffix.type === "literal" && minuteIndex - hourIndex === 2
      ? hourSuffix.value?.trim() || null
      : null;
  }
  if (part === "minuteSuffix") {
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const minuteSuffix = parts[minuteIndex + 1];
    return minuteSuffix && minuteSuffix.type === "literal" && secondIndex - minuteIndex === 2
      ? minuteSuffix.value?.trim() || null
      : null;
  }
  if (part === "secondSuffix") {
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const secondSuffix = parts[secondIndex + 1];
    return secondSuffix && secondSuffix.type === "literal" ? secondSuffix.value?.trim() || null : null;
  }
  return parts.find(({ type }) => (part == "meridiem" ? type === "dayPeriod" : type === part))?.value || null;
}
function getMeridiem(hour) {
  if (!(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(hour)) {
    return null;
  }
  const hourAsNumber = parseInt(hour);
  return hourAsNumber >= 0 && hourAsNumber <= 11 ? "AM" : "PM";
}
function isValidTime(value) {
  if (!value || value.startsWith(":") || value.endsWith(":")) {
    return false;
  }
  const splitValue = value.split(":");
  const validLength = splitValue.length > 1 && splitValue.length < 4;
  if (!validLength) {
    return false;
  }
  const [hour, minute, second] = splitValue;
  const hourAsNumber = parseInt(splitValue[0]);
  const minuteAsNumber = parseInt(splitValue[1]);
  const secondAsNumber = parseInt(splitValue[2]);
  const hourValid = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(hour) && hourAsNumber >= 0 && hourAsNumber < 24;
  const minuteValid = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(minute) && minuteAsNumber >= 0 && minuteAsNumber < 60;
  const secondValid = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(second) && secondAsNumber >= 0 && secondAsNumber < 60;
  if ((hourValid && minuteValid && !second) || (hourValid && minuteValid && secondValid)) {
    return true;
  }
}
function isValidTimePart(value, part) {
  if (part === "meridiem") {
    return value === "AM" || value === "PM";
  }
  if (!(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(value)) {
    return false;
  }
  const valueAsNumber = Number(value);
  return part === "hour" ? valueAsNumber >= 0 && valueAsNumber < 24 : valueAsNumber >= 0 && valueAsNumber < 60;
}
function localizeTimePart({ value, part, locale, numberingSystem }) {
  if (!isValidTimePart(value, part)) {
    return;
  }
  const valueAsNumber = parseInt(value);
  const date = new Date(Date.UTC(0, 0, 0, part === "hour" ? valueAsNumber : part === "meridiem" ? (value === "AM" ? 0 : 12) : 0, part === "minute" ? valueAsNumber : 0, part === "second" ? valueAsNumber : 0));
  if (!date) {
    return;
  }
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(date);
  return getLocalizedTimePart(part, parts);
}
function localizeTimeString({ value, locale, numberingSystem, includeSeconds = true }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds);
  return formatter?.format(dateFromTimeString) || null;
}
function localizeTimeStringToParts({ value, locale, numberingSystem }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return {
      localizedHour: getLocalizedTimePart("hour", parts),
      localizedHourSuffix: getLocalizedTimePart("hourSuffix", parts),
      localizedMinute: getLocalizedTimePart("minute", parts),
      localizedMinuteSuffix: getLocalizedTimePart("minuteSuffix", parts),
      localizedSecond: getLocalizedTimePart("second", parts),
      localizedSecondSuffix: getLocalizedTimePart("secondSuffix", parts),
      localizedMeridiem: getLocalizedTimePart("meridiem", parts)
    };
  }
  return null;
}
function getTimeParts({ value, locale, numberingSystem }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return parts;
  }
  return null;
}
function parseTimeString(value) {
  if (isValidTime(value)) {
    const [hour, minute, second] = value.split(":");
    return {
      hour,
      minute,
      second
    };
  }
  return {
    hour: null,
    minute: null,
    second: null
  };
}
function toISOTimeString(value, includeSeconds = true) {
  if (!isValidTime(value)) {
    return "";
  }
  const { hour, minute, second } = parseTimeString(value);
  let isoTimeString = `${formatTimePart(parseInt(hour))}:${formatTimePart(parseInt(minute))}`;
  if (includeSeconds) {
    isoTimeString += `:${formatTimePart(parseInt((includeSeconds && second) || "0"))}`;
  }
  return isoTimeString;
}

const CSS$1 = {
  toggleIcon: "toggle-icon"
};

var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
const en = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  ordinal: function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};

const en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': en
});

var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var prettyUnit = function prettyUnit(u) {
  var special = {
    M: M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q: Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

const U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};

var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = en;

var isDayjs = function isDayjs(d) {
  return d instanceof Dayjs;
}; // eslint-disable-line no-use-before-define


var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    var presetLower = preset.toLowerCase();

    if (Ls[presetLower]) {
      l = presetLower;
    }

    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }

    var presetSplit = preset.split('-');

    if (!l && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = U; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var parseDate = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;

    if (unit === M || unit === Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === M) {
      return this.set(M, this.$M + number);
    }

    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }

    if (unit === D) {
      return instanceFactorySet(1);
    }

    if (unit === W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below

    };
    return str.replace(REGEX_FORMAT, function (match, $1) {
      return $1 || matches[match] || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', MS], ['$s', S], ['$m', MIN], ['$H', H], ['$W', D], ['$M', M], ['$y', Y], ['$D', DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};

// eslint-disable-next-line import/prefer-default-export
var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};

var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchOffset = /[+-]\d\d:?(\d\d)?|Z/; // +00:00 -00:00 +0000 or -0000 +00 or Z

var matchWord = /\d*[^-_:/,()\s\d]+/; // Word

var locale = {};

var parseTwoDigitYear = function parseTwoDigitYear(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2000);
};

function offsetFromString(string) {
  if (!string) return 0;
  if (string === 'Z') return 0;
  var parts = string.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes; // eslint-disable-line no-nested-ternary
}

var addInput = function addInput(property) {
  return function (input) {
    this[property] = +input;
  };
};

var zoneExpressions = [matchOffset, function (input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];

var getLocalePart = function getLocalePart(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};

var meridiemMatch = function meridiemMatch(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale,
      meridiem = _locale.meridiem;

  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? 'pm' : 'PM');
  } else {
    for (var i = 1; i <= 24; i += 1) {
      // todo: fix input === meridiem(i, 0, isLowerCase)
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }

  return isAfternoon;
};

var expressions = {
  A: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  S: [match1, function (input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function (input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function (input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput('seconds')],
  ss: [match1to2, addInput('seconds')],
  m: [match1to2, addInput('minutes')],
  mm: [match1to2, addInput('minutes')],
  H: [match1to2, addInput('hours')],
  h: [match1to2, addInput('hours')],
  HH: [match1to2, addInput('hours')],
  hh: [match1to2, addInput('hours')],
  D: [match1to2, addInput('day')],
  DD: [match2, addInput('day')],
  Do: [matchWord, function (input) {
    var _locale2 = locale,
        ordinal = _locale2.ordinal;

    var _input$match = input.match(/\d+/);

    this.day = _input$match[0];
    if (!ordinal) return;

    for (var i = 1; i <= 31; i += 1) {
      if (ordinal(i).replace(/\[|\]/g, '') === input) {
        this.day = i;
      }
    }
  }],
  M: [match1to2, addInput('month')],
  MM: [match2, addInput('month')],
  MMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var monthsShort = getLocalePart('monthsShort');
    var matchIndex = (monthsShort || months.map(function (_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var matchIndex = months.indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput('year')],
  YY: [match2, function (input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput('year')],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};

function correctHours(time) {
  var afternoon = time.afternoon;

  if (afternoon !== undefined) {
    var hours = time.hours;

    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }

    delete time.afternoon;
  }
}

function makeParser(format) {
  format = u(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;

  for (var i = 0; i < length; i += 1) {
    var token = array[i];
    var parseTo = expressions[token];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];

    if (parser) {
      array[i] = {
        regex: regex,
        parser: parser
      };
    } else {
      array[i] = token.replace(/^\[|\]$/g, '');
    }
  }

  return function (input) {
    var time = {};

    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];

      if (typeof _token === 'string') {
        start += _token.length;
      } else {
        var _regex = _token.regex,
            _parser = _token.parser;
        var part = input.slice(start);

        var match = _regex.exec(part);

        var value = match[0];

        _parser.call(time, value);

        input = input.replace(value, '');
      }
    }

    correctHours(time);
    return time;
  };
}

var parseFormattedInput = function parseFormattedInput(input, format, utc) {
  try {
    if (['x', 'X'].indexOf(format) > -1) return new Date((format === 'X' ? 1000 : 1) * input);
    var parser = makeParser(format);

    var _parser2 = parser(input),
        year = _parser2.year,
        month = _parser2.month,
        day = _parser2.day,
        hours = _parser2.hours,
        minutes = _parser2.minutes,
        seconds = _parser2.seconds,
        milliseconds = _parser2.milliseconds,
        zone = _parser2.zone;

    var now = new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M = 0;

    if (!(year && !month)) {
      M = month > 0 ? month - 1 : now.getMonth();
    }

    var h = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;

    if (zone) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms + zone.offset * 60 * 1000));
    }

    if (utc) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms));
    }

    return new Date(y, M, d, h, m, s, ms);
  } catch (e) {
    return new Date(''); // Invalid Date
  }
};

const customParseFormat = (function (o, C, d) {
  d.p.customParseFormat = true;

  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }

  var proto = C.prototype;
  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    var date = cfg.date,
        utc = cfg.utc,
        args = cfg.args;
    this.$u = utc;
    var format = args[1];

    if (typeof format === 'string') {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];

      if (isStrictWithLocale) {
        pl = args[2];
      }

      locale = this.$locale();

      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }

      this.$d = parseFormattedInput(date, format, utc);
      this.init();
      if (pl && pl !== true) this.$L = this.locale(pl).$L; // use != to treat
      // input number 1410715640579 and format string '1410715640579' equal
      // eslint-disable-next-line eqeqeq

      if (isStrict && date != this.format(format)) {
        this.$d = new Date('');
      } // reset global locale to make parallel unit test


      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;

      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);

        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }

        if (i === len) this.$d = new Date('');
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
});

const localeData = (function (o, c, dayjs) {
  // locale needed later
  var proto = c.prototype;

  var getLocalePart = function getLocalePart(part) {
    return part && (part.indexOf ? part : part.s);
  };

  var getShort = function getShort(ins, target, full, num, localeOrder) {
    var locale = ins.name ? ins : ins.$locale();
    var targetLocale = getLocalePart(locale[target]);
    var fullLocale = getLocalePart(locale[full]);
    var result = targetLocale || fullLocale.map(function (f) {
      return f.slice(0, num);
    });
    if (!localeOrder) return result;
    var weekStart = locale.weekStart;
    return result.map(function (_, index) {
      return result[(index + (weekStart || 0)) % 7];
    });
  };

  var getDayjsLocaleObject = function getDayjsLocaleObject() {
    return dayjs.Ls[dayjs.locale()];
  };

  var getLongDateFormat = function getLongDateFormat(l, format) {
    return l.formats[format] || t(l.formats[format.toUpperCase()]);
  };

  var localeData = function localeData() {
    var _this = this;

    return {
      months: function months(instance) {
        return instance ? instance.format('MMMM') : getShort(_this, 'months');
      },
      monthsShort: function monthsShort(instance) {
        return instance ? instance.format('MMM') : getShort(_this, 'monthsShort', 'months', 3);
      },
      firstDayOfWeek: function firstDayOfWeek() {
        return _this.$locale().weekStart || 0;
      },
      weekdays: function weekdays(instance) {
        return instance ? instance.format('dddd') : getShort(_this, 'weekdays');
      },
      weekdaysMin: function weekdaysMin(instance) {
        return instance ? instance.format('dd') : getShort(_this, 'weekdaysMin', 'weekdays', 2);
      },
      weekdaysShort: function weekdaysShort(instance) {
        return instance ? instance.format('ddd') : getShort(_this, 'weekdaysShort', 'weekdays', 3);
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(_this.$locale(), format);
      },
      meridiem: this.$locale().meridiem,
      ordinal: this.$locale().ordinal
    };
  };

  proto.localeData = function () {
    return localeData.bind(this)();
  };

  dayjs.localeData = function () {
    var localeObject = getDayjsLocaleObject();
    return {
      firstDayOfWeek: function firstDayOfWeek() {
        return localeObject.weekStart || 0;
      },
      weekdays: function weekdays() {
        return dayjs.weekdays();
      },
      weekdaysShort: function weekdaysShort() {
        return dayjs.weekdaysShort();
      },
      weekdaysMin: function weekdaysMin() {
        return dayjs.weekdaysMin();
      },
      months: function months() {
        return dayjs.months();
      },
      monthsShort: function monthsShort() {
        return dayjs.monthsShort();
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(localeObject, format);
      },
      meridiem: localeObject.meridiem,
      ordinal: localeObject.ordinal
    };
  };

  dayjs.months = function () {
    return getShort(getDayjsLocaleObject(), 'months');
  };

  dayjs.monthsShort = function () {
    return getShort(getDayjsLocaleObject(), 'monthsShort', 'months', 3);
  };

  dayjs.weekdays = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdays', null, null, localeOrder);
  };

  dayjs.weekdaysShort = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysShort', 'weekdays', 3, localeOrder);
  };

  dayjs.weekdaysMin = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysMin', 'weekdays', 2, localeOrder);
  };
});

const localizedFormat = (function (o, c, d) {
  var proto = c.prototype;
  var oldFormat = proto.format;
  d.en.formats = englishFormats;

  proto.format = function (formatStr) {
    if (formatStr === void 0) {
      formatStr = FORMAT_DEFAULT;
    }

    var _this$$locale = this.$locale(),
        _this$$locale$formats = _this$$locale.formats,
        formats = _this$$locale$formats === void 0 ? {} : _this$$locale$formats;

    var result = u(formatStr, formats);
    return oldFormat.call(this, result);
  };
});

// Plugin template from https://day.js.org/docs/en/plugin/plugin
const preParsePostFormat = (function (option, dayjsClass) {
  var oldParse = dayjsClass.prototype.parse;

  dayjsClass.prototype.parse = function (cfg) {
    if (typeof cfg.date === 'string') {
      var locale = this.$locale();
      cfg.date = locale && locale.preparse ? locale.preparse(cfg.date) : cfg.date;
    } // original parse result


    return oldParse.bind(this)(cfg);
  }; // // overriding existing API
  // // e.g. extend dayjs().format()


  var oldFormat = dayjsClass.prototype.format;

  dayjsClass.prototype.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // original format result
    var result = oldFormat.call.apply(oldFormat, [this].concat(args)); // return modified result

    var locale = this.$locale();
    return locale && locale.postformat ? locale.postformat(result) : result;
  };

  var oldFromTo = dayjsClass.prototype.fromToBase;

  if (oldFromTo) {
    dayjsClass.prototype.fromToBase = function (input, withoutSuffix, instance, isFrom) {
      var locale = this.$locale() || instance.$locale(); // original format result

      return oldFromTo.call(this, input, withoutSuffix, instance, isFrom, locale && locale.postformat);
    };
  }
});

const updateLocale = (function (option, Dayjs, dayjs) {
  dayjs.updateLocale = function (locale, customConfig) {
    var localeList = dayjs.Ls;
    var localeConfig = localeList[locale];
    if (!localeConfig) return;
    var customConfigKeys = customConfig ? Object.keys(customConfig) : [];
    customConfigKeys.forEach(function (c) {
      localeConfig[c] = customConfig[c];
    });
    return localeConfig; // eslint-disable-line consistent-return
  };
});

const inputTimePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([scale=s]){--calcite-toggle-spacing:0.5rem}:host([scale=m]){--calcite-toggle-spacing:0.75rem}:host([scale=l]){--calcite-toggle-spacing:1rem}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;inline-size:1rem;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}";

// some bundlers (e.g., Webpack) need dynamic import paths to be static
const supportedDayJsLocaleToLocaleConfigImport = new Map([
  ["ar", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ar-09f32ebb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ar-09f32ebb.js */ "./node_modules/@esri/calcite-components/dist/esm/ar-09f32ebb.js"))],
  ["bg", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_bg-1dfc492a_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bg-1dfc492a.js */ "./node_modules/@esri/calcite-components/dist/esm/bg-1dfc492a.js"))],
  ["bs", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_bs-fb689a58_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bs-fb689a58.js */ "./node_modules/@esri/calcite-components/dist/esm/bs-fb689a58.js"))],
  ["ca", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ca-730b41bc_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ca-730b41bc.js */ "./node_modules/@esri/calcite-components/dist/esm/ca-730b41bc.js"))],
  ["cs", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_cs-b0a44568_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-b0a44568.js */ "./node_modules/@esri/calcite-components/dist/esm/cs-b0a44568.js"))],
  ["da", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_da-1dca1960_js").then(__webpack_require__.bind(__webpack_require__, /*! ./da-1dca1960.js */ "./node_modules/@esri/calcite-components/dist/esm/da-1dca1960.js"))],
  ["de", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_de-fc323096_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-fc323096.js */ "./node_modules/@esri/calcite-components/dist/esm/de-fc323096.js"))],
  ["de-at", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_de-at-d1976a17_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-at-d1976a17.js */ "./node_modules/@esri/calcite-components/dist/esm/de-at-d1976a17.js"))],
  ["de-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_de-ch-cbcecccc_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-ch-cbcecccc.js */ "./node_modules/@esri/calcite-components/dist/esm/de-ch-cbcecccc.js"))],
  ["el", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_el-f8bf6fd0_js").then(__webpack_require__.bind(__webpack_require__, /*! ./el-f8bf6fd0.js */ "./node_modules/@esri/calcite-components/dist/esm/el-f8bf6fd0.js"))],
  ["en", () => Promise.resolve().then(function () { return en$1; })],
  ["en-au", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_en-au-39a66c21_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-au-39a66c21.js */ "./node_modules/@esri/calcite-components/dist/esm/en-au-39a66c21.js"))],
  ["en-ca", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_en-ca-49c97e94_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-ca-49c97e94.js */ "./node_modules/@esri/calcite-components/dist/esm/en-ca-49c97e94.js"))],
  ["en-gb", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_en-gb-83bf0bde_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-gb-83bf0bde.js */ "./node_modules/@esri/calcite-components/dist/esm/en-gb-83bf0bde.js"))],
  ["es", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_es-ceddecc8_js").then(__webpack_require__.bind(__webpack_require__, /*! ./es-ceddecc8.js */ "./node_modules/@esri/calcite-components/dist/esm/es-ceddecc8.js"))],
  ["es-mx", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_es-mx-861b3de1_js").then(__webpack_require__.bind(__webpack_require__, /*! ./es-mx-861b3de1.js */ "./node_modules/@esri/calcite-components/dist/esm/es-mx-861b3de1.js"))],
  ["et", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_et-c6d3ed56_js").then(__webpack_require__.bind(__webpack_require__, /*! ./et-c6d3ed56.js */ "./node_modules/@esri/calcite-components/dist/esm/et-c6d3ed56.js"))],
  ["fi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_fi-6fa6c857_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fi-6fa6c857.js */ "./node_modules/@esri/calcite-components/dist/esm/fi-6fa6c857.js"))],
  ["fr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_fr-e291c87c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fr-e291c87c.js */ "./node_modules/@esri/calcite-components/dist/esm/fr-e291c87c.js"))],
  ["fr-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_fr-ch-f9209299_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fr-ch-f9209299.js */ "./node_modules/@esri/calcite-components/dist/esm/fr-ch-f9209299.js"))],
  ["he", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_he-3bf0d39f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./he-3bf0d39f.js */ "./node_modules/@esri/calcite-components/dist/esm/he-3bf0d39f.js"))],
  ["hi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_hi-a5fe5ca9_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hi-a5fe5ca9.js */ "./node_modules/@esri/calcite-components/dist/esm/hi-a5fe5ca9.js"))],
  ["hr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_hr-19be5a96_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hr-19be5a96.js */ "./node_modules/@esri/calcite-components/dist/esm/hr-19be5a96.js"))],
  ["hu", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_hu-ebd2c8dd_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hu-ebd2c8dd.js */ "./node_modules/@esri/calcite-components/dist/esm/hu-ebd2c8dd.js"))],
  ["id", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_id-aae89438_js").then(__webpack_require__.bind(__webpack_require__, /*! ./id-aae89438.js */ "./node_modules/@esri/calcite-components/dist/esm/id-aae89438.js"))],
  ["it", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_it-b2d048ca_js").then(__webpack_require__.bind(__webpack_require__, /*! ./it-b2d048ca.js */ "./node_modules/@esri/calcite-components/dist/esm/it-b2d048ca.js"))],
  ["it-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_it-ch-8250cf6a_js").then(__webpack_require__.bind(__webpack_require__, /*! ./it-ch-8250cf6a.js */ "./node_modules/@esri/calcite-components/dist/esm/it-ch-8250cf6a.js"))],
  ["ja", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ja-4dd1e27b_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ja-4dd1e27b.js */ "./node_modules/@esri/calcite-components/dist/esm/ja-4dd1e27b.js"))],
  ["ko", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ko-aaf0a0e0_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ko-aaf0a0e0.js */ "./node_modules/@esri/calcite-components/dist/esm/ko-aaf0a0e0.js"))],
  ["lt", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_lt-3ad4f061_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lt-3ad4f061.js */ "./node_modules/@esri/calcite-components/dist/esm/lt-3ad4f061.js"))],
  ["lv", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_lv-175e99a5_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lv-175e99a5.js */ "./node_modules/@esri/calcite-components/dist/esm/lv-175e99a5.js"))],
  ["mk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_mk-0a1f53b2_js").then(__webpack_require__.bind(__webpack_require__, /*! ./mk-0a1f53b2.js */ "./node_modules/@esri/calcite-components/dist/esm/mk-0a1f53b2.js"))],
  ["nl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_nl-109e7897_js").then(__webpack_require__.bind(__webpack_require__, /*! ./nl-109e7897.js */ "./node_modules/@esri/calcite-components/dist/esm/nl-109e7897.js"))],
  ["nb", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_nb-4557db6c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./nb-4557db6c.js */ "./node_modules/@esri/calcite-components/dist/esm/nb-4557db6c.js"))],
  ["pl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_pl-572e0b8e_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pl-572e0b8e.js */ "./node_modules/@esri/calcite-components/dist/esm/pl-572e0b8e.js"))],
  ["pt", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_pt-59688494_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pt-59688494.js */ "./node_modules/@esri/calcite-components/dist/esm/pt-59688494.js"))],
  ["pt-br", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_pt-br-b4a9b3a7_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pt-br-b4a9b3a7.js */ "./node_modules/@esri/calcite-components/dist/esm/pt-br-b4a9b3a7.js"))],
  ["ro", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ro-6b06f731_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ro-6b06f731.js */ "./node_modules/@esri/calcite-components/dist/esm/ro-6b06f731.js"))],
  ["ru", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ru-f1892e20_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ru-f1892e20.js */ "./node_modules/@esri/calcite-components/dist/esm/ru-f1892e20.js"))],
  ["sk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sk-ecabc8fb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sk-ecabc8fb.js */ "./node_modules/@esri/calcite-components/dist/esm/sk-ecabc8fb.js"))],
  ["sl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sl-5de9e72e_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sl-5de9e72e.js */ "./node_modules/@esri/calcite-components/dist/esm/sl-5de9e72e.js"))],
  ["sr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sr-5fe44f8f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sr-5fe44f8f.js */ "./node_modules/@esri/calcite-components/dist/esm/sr-5fe44f8f.js"))],
  ["sv", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sv-00d04b1d_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sv-00d04b1d.js */ "./node_modules/@esri/calcite-components/dist/esm/sv-00d04b1d.js"))],
  ["th", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_th-0cc8ecd3_js").then(__webpack_require__.bind(__webpack_require__, /*! ./th-0cc8ecd3.js */ "./node_modules/@esri/calcite-components/dist/esm/th-0cc8ecd3.js"))],
  ["tr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_tr-817bdba8_js").then(__webpack_require__.bind(__webpack_require__, /*! ./tr-817bdba8.js */ "./node_modules/@esri/calcite-components/dist/esm/tr-817bdba8.js"))],
  ["uk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_uk-67c7242c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./uk-67c7242c.js */ "./node_modules/@esri/calcite-components/dist/esm/uk-67c7242c.js"))],
  ["vi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_vi-256749df_js").then(__webpack_require__.bind(__webpack_require__, /*! ./vi-256749df.js */ "./node_modules/@esri/calcite-components/dist/esm/vi-256749df.js"))],
  ["zh-cn", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_zh-cn-f5161c11_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-cn-f5161c11.js */ "./node_modules/@esri/calcite-components/dist/esm/zh-cn-f5161c11.js"))],
  ["zh-hk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_zh-hk-7cbfe66f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-hk-7cbfe66f.js */ "./node_modules/@esri/calcite-components/dist/esm/zh-hk-7cbfe66f.js"))],
  ["zh-tw", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_zh-tw-c56b90fe_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-tw-c56b90fe.js */ "./node_modules/@esri/calcite-components/dist/esm/zh-tw-c56b90fe.js"))]
]);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(preParsePostFormat);
dayjs.extend(updateLocale);
const InputTimePicker = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInputTimePickerChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputTimePickerChange", 7);
    this.focusOnOpen = false;
    this.dialogId = `time-picker-dialog--${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    /** whether the value of the input was changed as a result of user typing or not */
    this.userChangedValue = false;
    this.referenceElementId = `input-time-picker-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.hostBlurHandler = () => {
      const inputValue = this.calciteInputEl.value;
      const delocalizedInputValue = this.delocalizeTimeString(inputValue);
      if (!delocalizedInputValue) {
        this.setValue("");
        return;
      }
      if (delocalizedInputValue !== this.value) {
        this.setValue(delocalizedInputValue);
      }
      const localizedTimeString = localizeTimeString({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds()
      });
      if (localizedTimeString !== inputValue) {
        this.setInputValue(localizedTimeString);
      }
      this.deactivate();
    };
    this.calciteInternalInputFocusHandler = (event) => {
      if (!this.readOnly) {
        event.stopPropagation();
      }
    };
    this.calciteInternalInputInputHandler = (event) => {
      const { effectiveLocale: locale, numberingSystem } = this;
      if (numberingSystem && numberingSystem !== "latn") {
        const target = event.target;
        _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
          locale,
          numberingSystem,
          useGrouping: false
        };
        const valueInNumberingSystem = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(target.value)
          .split("")
          .map((char) => _key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(char)
          ? _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatter.format(Number(char))
          : char)
          .join("");
        this.setInputValue(valueInNumberingSystem);
      }
    };
    this.timePickerChangeHandler = (event) => {
      event.stopPropagation();
      const target = event.target;
      const value = target.value;
      const includeSeconds = this.shouldIncludeSeconds();
      this.setValue(toISOTimeString(value, includeSeconds));
      this.setInputValue(localizeTimeString({
        value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds
      }));
    };
    this.popoverCloseHandler = () => {
      (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_8__.d)(this, {
        onDeactivate: () => {
          this.calciteInputEl.setFocus();
          this.focusOnOpen = false;
        }
      });
    };
    this.popoverOpenHandler = () => {
      (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_8__.a)(this, {
        onActivate: () => {
          if (this.focusOnOpen) {
            this.calciteTimePickerEl.setFocus();
            this.focusOnOpen = false;
          }
        }
      });
    };
    this.keyDownHandler = (event) => {
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Enter") {
        if ((0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.s)(this)) {
          event.preventDefault();
          this.calciteInputEl.setFocus();
        }
        if (event.composedPath().includes(this.calciteTimePickerEl)) {
          return;
        }
        const newValue = this.delocalizeTimeString(this.calciteInputEl.value);
        this.setValue(newValue);
        const localizedTimeString = localizeTimeString({
          value: this.value,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          includeSeconds: this.shouldIncludeSeconds()
        });
        if (newValue && this.calciteInputEl.value !== localizedTimeString) {
          this.setInputValue(localizedTimeString);
        }
      }
      else if (key === "ArrowDown") {
        this.open = true;
        this.focusOnOpen = true;
        event.preventDefault();
      }
      else if (key === "Escape" && this.open) {
        this.open = false;
        event.preventDefault();
        this.calciteInputEl.setFocus();
      }
    };
    this.setCalcitePopoverEl = (el) => {
      this.popoverEl = el;
    };
    this.setCalciteInputEl = (el) => {
      this.calciteInputEl = el;
    };
    this.setCalciteTimePickerEl = (el) => {
      this.calciteTimePickerEl = el;
      (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_8__.c)(this, {
        focusTrapEl: el,
        focusTrapOptions: {
          initialFocus: false,
          setReturnFocus: false
        }
      });
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      this.calciteInputEl.value = newInputValue;
    };
    /**
     * Sets the value and emits a change event.
     * This is used to update the value as a result of user interaction.
     *
     * @param value
     */
    this.setValue = (value) => {
      const oldValue = this.value;
      const newValue = formatTimeString(value) || "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue || "";
      const changeEvent = this.calciteInputTimePickerChange.emit();
      if (changeEvent.defaultPrevented) {
        this.userChangedValue = false;
        this.value = oldValue;
        this.setInputValue(localizeTimeString({
          value: oldValue,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          includeSeconds: this.shouldIncludeSeconds()
        }));
      }
    };
    /**
     * Sets the value directly without emitting a change event.
     * This is used to update the value on initial load and when props change that are not the result of user interaction.
     *
     * @param value
     */
    this.setValueDirectly = (value) => {
      const includeSeconds = this.shouldIncludeSeconds();
      this.value = toISOTimeString(value, includeSeconds);
      this.setInputValue(this.value
        ? localizeTimeString({
          value: this.value,
          includeSeconds,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem
        })
        : "");
    };
    this.onInputWrapperClick = () => {
      this.open = !this.open;
    };
    this.deactivate = () => {
      this.open = false;
    };
    this.open = false;
    this.disabled = false;
    this.focusTrapDisabled = false;
    this.form = undefined;
    this.readOnly = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.required = false;
    this.scale = "m";
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.step = 60;
    this.value = null;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  openHandler(value) {
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    if (value) {
      this.reposition(true);
    }
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_8__.d)(this) : (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
  }
  handleDisabledAndReadOnlyChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  numberingSystemWatcher(numberingSystem) {
    this.setInputValue(localizeTimeString({
      value: this.value,
      locale: this.effectiveLocale,
      numberingSystem,
      includeSeconds: this.shouldIncludeSeconds()
    }));
  }
  stepWatcher(newStep, oldStep) {
    if ((oldStep >= 60 && newStep > 0 && newStep < 60) ||
      (newStep >= 60 && oldStep > 0 && oldStep < 60)) {
      this.setValueDirectly(this.value);
    }
  }
  valueWatcher(newValue) {
    if (!this.userChangedValue) {
      this.setValueDirectly(newValue);
    }
    this.userChangedValue = false;
  }
  async effectiveLocaleWatcher(locale) {
    await this.loadDateTimeLocaleData();
    this.setInputValue(localizeTimeString({
      value: this.value,
      locale,
      numberingSystem: this.numberingSystem,
      includeSeconds: this.shouldIncludeSeconds()
    }));
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el.focus();
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    this.popoverEl?.reposition(delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  delocalizeTimeString(value) {
    // we need to set the corresponding locale before parsing, otherwise it defaults to English (possible dayjs bug)
    dayjs.locale(this.effectiveLocale.toLowerCase());
    const dayjsParseResult = dayjs(value, ["LTS", "LT"]);
    if (dayjsParseResult.isValid()) {
      let unformattedTimeString = `${dayjsParseResult.get("hour")}:${dayjsParseResult.get("minute")}`;
      if (this.shouldIncludeSeconds()) {
        unformattedTimeString += `:${dayjsParseResult.get("seconds") || 0}`;
      }
      return formatTimeString(unformattedTimeString) || "";
    }
    return "";
  }
  async loadDateTimeLocaleData() {
    let supportedLocale = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.g)(this.effectiveLocale).toLowerCase();
    if (supportedLocale === "no") {
      supportedLocale = "nb";
    }
    if (supportedLocale === "pt-pt") {
      supportedLocale = "pt";
    }
    const { default: localeConfig } = await supportedDayJsLocaleToLocaleConfigImport.get(supportedLocale)();
    dayjs.locale(localeConfig, null, true);
    dayjs.updateLocale(supportedLocale, this.getExtendedLocaleConfig(supportedLocale));
  }
  getExtendedLocaleConfig(locale) {
    if (locale === "ar") {
      return {
        meridiem: (hour) => (hour > 12 ? "م" : "ص"),
        formats: {
          LT: "HH:mm A",
          LTS: "HH:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm A",
          LLLL: "dddd D MMMM YYYY HH:mm A"
        }
      };
    }
    if (locale === "en-au") {
      return {
        meridiem: (hour) => (hour > 12 ? "pm" : "am")
      };
    }
    if (locale === "en-ca") {
      return {
        meridiem: (hour) => (hour > 12 ? "p.m." : "a.m.")
      };
    }
    if (locale === "el") {
      return {
        meridiem: (hour) => (hour > 12 ? "μ.μ." : "π.μ.")
      };
    }
    if (locale === "hi") {
      return {
        formats: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, h:mm A",
          LLLL: "dddd, D MMMM YYYY, h:mm A"
        },
        meridiem: (hour) => (hour > 12 ? "pm" : "am")
      };
    }
    if (locale === "ko") {
      return {
        meridiem: (hour) => (hour > 12 ? "오후" : "오전")
      };
    }
    if (locale === "zh-tw") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss"
        }
      };
    }
    if (locale === "zh-hk") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss"
        },
        meridiem: (hour) => (hour > 12 ? "下午" : "上午")
      };
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldIncludeSeconds() {
    return this.step < 60;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    if (isValidTime(this.value)) {
      this.setValueDirectly(this.value);
    }
    else {
      this.value = undefined;
    }
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    await Promise.all([(0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.s)(this), this.loadDateTimeLocaleData()]);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    if (isValidTime(this.value)) {
      this.setInputValue(localizeTimeString({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds()
      }));
    }
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, messages, readOnly, dialogId } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.hostBlurHandler, onKeyDown: this.keyDownHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { "aria-autocomplete": "none", "aria-haspopup": "dialog", disabled: disabled, icon: "clock", id: this.referenceElementId, label: (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), lang: this.effectiveLocale, onCalciteInputInput: this.calciteInternalInputInputHandler, onCalciteInternalInputFocus: this.calciteInternalInputFocusHandler, readOnly: readOnly, role: "combobox", scale: this.scale, step: this.step,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalciteInputEl }), this.renderToggleIcon(this.open)), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-popover", { focusTrapDisabled: true, id: dialogId, label: messages.chooseTime, lang: this.effectiveLocale, onCalcitePopoverClose: this.popoverCloseHandler, onCalcitePopoverOpen: this.popoverOpenHandler, open: this.open, overlayPositioning: this.overlayPositioning, placement: this.placement, referenceElement: this.referenceElementId, triggerDisabled: true,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalcitePopoverEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-time-picker", { lang: this.effectiveLocale, messageOverrides: this.messageOverrides, numberingSystem: this.numberingSystem, onCalciteInternalTimePickerChange: this.timePickerChangeHandler, scale: this.scale, step: this.step, tabIndex: this.open ? undefined : -1, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalciteTimePickerEl })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this })));
  }
  renderToggleIcon(open) {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS$1.toggleIcon }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "open": ["openHandler"],
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "disabled": ["handleDisabledAndReadOnlyChange"],
    "readOnly": ["handleDisabledAndReadOnlyChange"],
    "messageOverrides": ["onMessagesChange"],
    "numberingSystem": ["numberingSystemWatcher"],
    "step": ["stepWatcher"],
    "value": ["valueWatcher"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
InputTimePicker.style = inputTimePickerCss;

const CSS = {
  button: "button",
  buttonBottomLeft: "button--bottom-left",
  buttonBottomRight: "button--bottom-right",
  buttonHourDown: "button--hour-down",
  buttonHourUp: "button--hour-up",
  buttonMeridiemDown: "button--meridiem-down",
  buttonMeridiemUp: "button--meridiem-up",
  buttonMinuteDown: "button--minute-down",
  buttonMinuteUp: "button--minute-up",
  buttonSecondDown: "button--second-down",
  buttonSecondUp: "button--second-up",
  buttonTopLeft: "button--top-left",
  buttonTopRight: "button--top-right",
  column: "column",
  delimiter: "delimiter",
  hour: "hour",
  input: "input",
  meridiem: "meridiem",
  minute: "minute",
  second: "second",
  showMeridiem: "show-meridiem",
  showSecond: "show-second",
  "scale-s": "scale-s",
  "scale-m": "scale-m",
  "scale-l": "scale-l",
  timePicker: "time-picker",
  meridiemStart: "meridiem--start"
};

const timePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:var(--calcite-app-z-index-header);outline-offset:0}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);z-index:var(--calcite-app-z-index-header)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);z-index:var(--calcite-app-z-index-header);outline-offset:0}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const TimePicker = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalTimePickerBlur = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTimePickerBlur", 6);
    this.calciteInternalTimePickerChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTimePickerChange", 6);
    this.calciteInternalTimePickerFocus = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTimePickerFocus", 6);
    this.decrementHour = () => {
      const newHour = !this.hour ? 0 : this.hour === "00" ? 23 : parseInt(this.hour) - 1;
      this.setValuePart("hour", newHour);
    };
    this.decrementMeridiem = () => {
      const newMeridiem = this.meridiem === "PM" ? "AM" : "PM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.decrementMinuteOrSecond = (key) => {
      let newValue;
      if ((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this[key])) {
        const valueAsNumber = parseInt(this[key]);
        newValue = valueAsNumber === 0 ? 59 : valueAsNumber - 1;
      }
      else {
        newValue = 59;
      }
      this.setValuePart(key, newValue);
    };
    this.decrementMinute = () => {
      this.decrementMinuteOrSecond("minute");
    };
    this.decrementSecond = () => {
      this.decrementMinuteOrSecond("second");
    };
    this.focusHandler = (event) => {
      this.activeEl = event.currentTarget;
    };
    this.hourDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementHour();
      }
    };
    this.hourKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newHour;
        if ((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour)) {
          switch (this.hourCycle) {
            case "12":
              newHour =
                this.hour === "01" && keyAsNumber >= 0 && keyAsNumber <= 2
                  ? `1${keyAsNumber}`
                  : keyAsNumber;
              break;
            case "24":
              if (this.hour === "01") {
                newHour = `1${keyAsNumber}`;
              }
              else if (this.hour === "02" && keyAsNumber >= 0 && keyAsNumber <= 3) {
                newHour = `2${keyAsNumber}`;
              }
              else {
                newHour = keyAsNumber;
              }
              break;
          }
        }
        else {
          newHour = keyAsNumber;
        }
        this.setValuePart("hour", newHour);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("hour", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementHour();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementHour();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.hourUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementHour();
      }
    };
    this.incrementMeridiem = () => {
      const newMeridiem = this.meridiem === "AM" ? "PM" : "AM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.incrementHour = () => {
      const newHour = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour)
        ? this.hour === "23"
          ? 0
          : parseInt(this.hour) + 1
        : 1;
      this.setValuePart("hour", newHour);
    };
    this.incrementMinuteOrSecond = (key) => {
      const newValue = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this[key])
        ? this[key] === "59"
          ? 0
          : parseInt(this[key]) + 1
        : 0;
      this.setValuePart(key, newValue);
    };
    this.incrementMinute = () => {
      this.incrementMinuteOrSecond("minute");
    };
    this.incrementSecond = () => {
      this.incrementMinuteOrSecond("second");
    };
    this.meridiemDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementMeridiem();
      }
    };
    this.meridiemKeyDownHandler = (event) => {
      switch (event.key) {
        case "a":
          this.setValuePart("meridiem", "AM");
          break;
        case "p":
          this.setValuePart("meridiem", "PM");
          break;
        case "Backspace":
        case "Delete":
          this.setValuePart("meridiem", null);
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementMeridiem();
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementMeridiem();
          break;
        case " ":
          event.preventDefault();
          break;
      }
    };
    this.meridiemUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementMeridiem();
      }
    };
    this.minuteDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementMinute();
      }
    };
    this.minuteKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newMinute;
        if ((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.minute) && this.minute.startsWith("0")) {
          const minuteAsNumber = parseInt(this.minute);
          newMinute =
            minuteAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${minuteAsNumber}${keyAsNumber}`;
        }
        else {
          newMinute = keyAsNumber;
        }
        this.setValuePart("minute", newMinute);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("minute", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementMinute();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementMinute();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.minuteUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementMinute();
      }
    };
    this.secondDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementSecond();
      }
    };
    this.secondKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newSecond;
        if ((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.second) && this.second.startsWith("0")) {
          const secondAsNumber = parseInt(this.second);
          newSecond =
            secondAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${secondAsNumber}${keyAsNumber}`;
        }
        else {
          newSecond = keyAsNumber;
        }
        this.setValuePart("second", newSecond);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("second", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementSecond();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementSecond();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.secondUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementSecond();
      }
    };
    this.setHourEl = (el) => (this.hourEl = el);
    this.setMeridiemEl = (el) => (this.meridiemEl = el);
    this.setMinuteEl = (el) => (this.minuteEl = el);
    this.setSecondEl = (el) => (this.secondEl = el);
    this.setValue = (value, emit = true) => {
      if (isValidTime(value)) {
        const { hour, minute, second } = parseTimeString(value);
        const { effectiveLocale: locale, numberingSystem } = this;
        const { localizedHour, localizedHourSuffix, localizedMinute, localizedMinuteSuffix, localizedSecond, localizedSecondSuffix, localizedMeridiem } = localizeTimeStringToParts({ value, locale, numberingSystem });
        this.localizedHour = localizedHour;
        this.localizedHourSuffix = localizedHourSuffix;
        this.localizedMinute = localizedMinute;
        this.localizedMinuteSuffix = localizedMinuteSuffix;
        this.localizedSecond = localizedSecond;
        this.localizedSecondSuffix = localizedSecondSuffix;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        if (localizedMeridiem) {
          this.localizedMeridiem = localizedMeridiem;
          this.meridiem = getMeridiem(this.hour);
          const formatParts = getTimeParts({ value, locale, numberingSystem });
          this.meridiemOrder = this.getMeridiemOrder(formatParts);
        }
      }
      else {
        this.hour = null;
        this.localizedHour = null;
        this.localizedHourSuffix = null;
        this.localizedMeridiem = null;
        this.localizedMinute = null;
        this.localizedMinuteSuffix = null;
        this.localizedSecond = null;
        this.localizedSecondSuffix = null;
        this.meridiem = null;
        this.minute = null;
        this.second = null;
        this.value = null;
      }
      if (emit) {
        this.calciteInternalTimePickerChange.emit();
      }
    };
    this.setValuePart = (key, value, emit = true) => {
      const { effectiveLocale: locale, numberingSystem } = this;
      if (key === "meridiem") {
        this.meridiem = value;
        if ((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour)) {
          const hourAsNumber = parseInt(this.hour);
          switch (value) {
            case "AM":
              if (hourAsNumber >= 12) {
                this.hour = formatTimePart(hourAsNumber - 12);
              }
              break;
            case "PM":
              if (hourAsNumber < 12) {
                this.hour = formatTimePart(hourAsNumber + 12);
              }
              break;
          }
          this.localizedHour = localizeTimePart({
            value: this.hour,
            part: "hour",
            locale,
            numberingSystem
          });
        }
      }
      else {
        this[key] = typeof value === "number" ? formatTimePart(value) : value;
        this[`localized${capitalize(key)}`] = localizeTimePart({
          value: this[key],
          part: key,
          locale,
          numberingSystem
        });
      }
      if (this.hour && this.minute) {
        let newValue = `${this.hour}:${this.minute}`;
        if (this.showSecond) {
          newValue = `${newValue}:${this.second ?? "00"}`;
        }
        this.value = newValue;
      }
      else {
        this.value = null;
      }
      this.localizedMeridiem = this.value
        ? localizeTimeStringToParts({ value: this.value, locale, numberingSystem })
          ?.localizedMeridiem || null
        : localizeTimePart({ value: this.meridiem, part: "meridiem", locale, numberingSystem });
      if (emit) {
        this.calciteInternalTimePickerChange.emit();
      }
    };
    this.scale = "m";
    this.step = 60;
    this.numberingSystem = undefined;
    this.value = null;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.hour = undefined;
    this.hourCycle = undefined;
    this.localizedHour = undefined;
    this.localizedHourSuffix = undefined;
    this.localizedMeridiem = undefined;
    this.localizedMinute = undefined;
    this.localizedMinuteSuffix = undefined;
    this.localizedSecond = undefined;
    this.localizedSecondSuffix = undefined;
    this.meridiem = undefined;
    this.minute = undefined;
    this.second = undefined;
    this.showSecond = undefined;
    this.defaultMessages = undefined;
  }
  stepChange() {
    this.updateShowSecond();
  }
  valueWatcher(newValue) {
    this.setValue(newValue, false);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleWatcher() {
    this.updateLocale();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  hostBlurHandler() {
    this.calciteInternalTimePickerBlur.emit();
  }
  hostFocusHandler() {
    this.calciteInternalTimePickerFocus.emit();
  }
  keyDownHandler(event) {
    const { defaultPrevented, key } = event;
    if (defaultPrevented) {
      return;
    }
    switch (this.activeEl) {
      case this.hourEl:
        if (key === "ArrowRight") {
          this.focusPart("minute");
          event.preventDefault();
        }
        break;
      case this.minuteEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("hour");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            }
            else if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.secondEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("minute");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.meridiemEl:
        switch (key) {
          case "ArrowLeft":
            if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            }
            else {
              this.focusPart("minute");
              event.preventDefault();
            }
            break;
        }
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  updateShowSecond() {
    this.showSecond = this.step < 60;
  }
  async focusPart(target) {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this[`${target || "hour"}El`]?.focus();
  }
  buttonActivated(event) {
    const { key } = event;
    if (key === " ") {
      event.preventDefault();
    }
    return (0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.i)(key);
  }
  getMeridiemOrder(formatParts) {
    const locale = this.effectiveLocale;
    const isRTLKind = locale === "ar" || locale === "he";
    if (formatParts && !isRTLKind) {
      const index = formatParts.findIndex((parts) => {
        return parts.value === this.localizedMeridiem;
      });
      return index;
    }
    return 0;
  }
  updateLocale() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.u)(this, this.effectiveLocale);
    this.hourCycle = getLocaleHourCycle(this.effectiveLocale, this.numberingSystem);
    this.setValue(this.value, false);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.updateLocale();
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    this.updateShowSecond();
    this.meridiemOrder = this.getMeridiemOrder(getTimeParts({
      value: "0:00:00",
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem
    }));
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const hourIsNumber = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour);
    const iconScale = this.scale === "s" || this.scale === "m" ? "s" : "m";
    const minuteIsNumber = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.minute);
    const secondIsNumber = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.second);
    const showMeridiem = this.hourCycle === "12";
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.timePicker]: true,
        [CSS.showMeridiem]: showMeridiem,
        [CSS.showSecond]: this.showSecond,
        [CSS[`scale-${this.scale}`]]: true
      }, dir: "ltr" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.column, role: "group" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.hourUp, class: {
        [CSS.button]: true,
        [CSS.buttonHourUp]: true,
        [CSS.buttonTopLeft]: true
      }, onClick: this.incrementHour, onKeyDown: this.hourUpButtonKeyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.hour, "aria-valuemax": "23", "aria-valuemin": "1", "aria-valuenow": (hourIsNumber && parseInt(this.hour)) || "0", "aria-valuetext": this.hour, class: {
        [CSS.input]: true,
        [CSS.hour]: true
      }, onFocus: this.focusHandler, onKeyDown: this.hourKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setHourEl }, this.localizedHour || "--"), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.hourDown, class: {
        [CSS.button]: true,
        [CSS.buttonHourDown]: true,
        [CSS.buttonBottomLeft]: true
      }, onClick: this.decrementHour, onKeyDown: this.hourDownButtonKeyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.delimiter }, this.localizedHourSuffix), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.column, role: "group" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.minuteUp, class: {
        [CSS.button]: true,
        [CSS.buttonMinuteUp]: true
      }, onClick: this.incrementMinute, onKeyDown: this.minuteUpButtonKeyDownHandler, role: "button", tabIndex: -1 }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.minute, "aria-valuemax": "12", "aria-valuemin": "1", "aria-valuenow": (minuteIsNumber && parseInt(this.minute)) || "0", "aria-valuetext": this.minute, class: {
        [CSS.input]: true,
        [CSS.minute]: true
      }, onFocus: this.focusHandler, onKeyDown: this.minuteKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setMinuteEl }, this.localizedMinute || "--"), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.minuteDown, class: {
        [CSS.button]: true,
        [CSS.buttonMinuteDown]: true
      }, onClick: this.decrementMinute, onKeyDown: this.minuteDownButtonKeyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))), this.showSecond && (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.delimiter }, this.localizedMinuteSuffix), this.showSecond && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.column, role: "group" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.secondUp, class: {
        [CSS.button]: true,
        [CSS.buttonSecondUp]: true
      }, onClick: this.incrementSecond, onKeyDown: this.secondUpButtonKeyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.second, "aria-valuemax": "59", "aria-valuemin": "0", "aria-valuenow": (secondIsNumber && parseInt(this.second)) || "0", "aria-valuetext": this.second, class: {
        [CSS.input]: true,
        [CSS.second]: true
      }, onFocus: this.focusHandler, onKeyDown: this.secondKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setSecondEl }, this.localizedSecond || "--"), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.secondDown, class: {
        [CSS.button]: true,
        [CSS.buttonSecondDown]: true
      }, onClick: this.decrementSecond, onKeyDown: this.secondDownButtonKeyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale })))), this.localizedSecondSuffix && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.delimiter }, this.localizedSecondSuffix)), showMeridiem && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.column]: true,
        [CSS.meridiemStart]: this.meridiemOrder === 0
      }, role: "group" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.meridiemUp, class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemUp]: true,
        [CSS.buttonTopRight]: true
      }, onClick: this.incrementMeridiem, onKeyDown: this.meridiemUpButtonKeyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.meridiem, "aria-valuemax": "2", "aria-valuemin": "1", "aria-valuenow": (this.meridiem === "PM" && "2") || "1", "aria-valuetext": this.meridiem, class: {
        [CSS.input]: true,
        [CSS.meridiem]: true
      }, onFocus: this.focusHandler, onKeyDown: this.meridiemKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setMeridiemEl }, this.localizedMeridiem || "--"), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.meridiemDown, class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemDown]: true,
        [CSS.buttonBottomRight]: true
      }, onClick: this.decrementMeridiem, onKeyDown: this.meridiemDownButtonKeyDownHandler, role: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "step": ["stepChange"],
    "value": ["valueWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
TimePicker.style = timePickerCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker_2.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker_2.entry.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input_time_picker": () => (/* reexport safe */ _calcite_input_time_picker_calcite_time_picker_8e720ee4_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "calcite_time_picker": () => (/* reexport safe */ _calcite_input_time_picker_calcite_time_picker_8e720ee4_js__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _calcite_input_time_picker_calcite_time_picker_8e720ee4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-input-time-picker.calcite-time-picker-8e720ee4.js */ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-8e720ee4.js");
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./focusTrapComponent-b3a29d9c.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-b3a29d9c.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzMxNjVmYjIyMWEzNGE1MjNkOTNjYmRhZTA1NzA4YmYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDUztBQUN2RTtBQUN3QjtBQUNHO0FBQ3VCO0FBQ21CO0FBQ3NHO0FBQy9GO0FBQ0E7O0FBRTNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUFpQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU87QUFDdkM7QUFDQSxZQUFZLEtBQUssR0FBRyxPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsTUFBTTtBQUN4RCxvREFBb0QsTUFBTTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsTUFBTTtBQUMxRCxvREFBb0QsTUFBTTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsTUFBTTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBO0FBQ0EsT0FBTyxzREFBYTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQWE7QUFDakMsc0JBQXNCLHNEQUFhO0FBQ25DLHNCQUFzQixzREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzREFBYTtBQUNwQjtBQUNBO0FB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QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsbUxBQW1MOztBQUUzTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QixrRUFBbUIsU0FBUyxrRUFBaUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkIsR0FBRywrQkFBK0I7QUFDcEc7QUFDQSxxQ0FBcUMscUNBQXFDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3QkFBd0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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REFBQyxtQkFBbUIsc0NBQXNDLElBQUkscURBQUMsV0FBVztBQUN0TDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0JBQStCLG1DQUFtQyxxREFBQyxXQUFXO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUdBQXFHLEVBQUUscURBQUMsbUJBQW1CLHdDQUF3QztBQUMxSztBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2w0RTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUk7QUFDMUc7QUFDRDtBQUNEO0FBQ0M7QUFDSztBQUNFO0FBQ1I7QUFDRTtBQUNHO0FBQ0Y7QUFDRztBQUNTO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmNhbGNpdGUtdGltZS1waWNrZXItOGU3MjBlZTQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlcl8yLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBzIGFzIHN1Ym1pdEZvcm0sIGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS00NDUzMDAwMS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtZDU5NDNiODMuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cywgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbC01OWM5ZDQ3Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudExvYWRlZCwgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXREYXRlVGltZUZvcm1hdCwgaSBhcyBpc1ZhbGlkTnVtYmVyLCBlIGFzIGdldFN1cHBvcnRlZE51bWJlcmluZ1N5c3RlbSwgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCB7IGQgYXMgZGVhY3RpdmF0ZUZvY3VzVHJhcCwgYSBhcyBhY3RpdmF0ZUZvY3VzVHJhcCwgYyBhcyBjb25uZWN0Rm9jdXNUcmFwIH0gZnJvbSAnLi9mb2N1c1RyYXBDb21wb25lbnQtYjNhMjlkOWMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5cbmNvbnN0IG1heFRlbnRoRm9yTWludXRlQW5kU2Vjb25kID0gNTtcbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBpbmNsdWRlU2Vjb25kcyA9IHRydWUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIHRpbWVab25lOiBcIlVUQ1wiLFxuICAgIG51bWJlcmluZ1N5c3RlbTogZ2V0U3VwcG9ydGVkTnVtYmVyaW5nU3lzdGVtKG51bWJlcmluZ1N5c3RlbSlcbiAgfTtcbiAgaWYgKGluY2x1ZGVTZWNvbmRzKSB7XG4gICAgb3B0aW9ucy5zZWNvbmQgPSBcIjItZGlnaXRcIjtcbiAgfVxuICByZXR1cm4gZ2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWVQYXJ0KG51bWJlcikge1xuICBjb25zdCBudW1iZXJBc1N0cmluZyA9IG51bWJlci50b1N0cmluZygpO1xuICByZXR1cm4gbnVtYmVyID49IDAgJiYgbnVtYmVyIDw9IDkgPyBudW1iZXJBc1N0cmluZy5wYWRTdGFydCgyLCBcIjBcIikgOiBudW1iZXJBc1N0cmluZztcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWVTdHJpbmcodmFsdWUpIHtcbiAgaWYgKCFpc1ZhbGlkVGltZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBbaG91clN0cmluZywgbWludXRlU3RyaW5nLCBzZWNvbmRTdHJpbmddID0gdmFsdWUuc3BsaXQoXCI6XCIpO1xuICBjb25zdCBob3VyID0gZm9ybWF0VGltZVBhcnQocGFyc2VJbnQoaG91clN0cmluZykpO1xuICBjb25zdCBtaW51dGUgPSBmb3JtYXRUaW1lUGFydChwYXJzZUludChtaW51dGVTdHJpbmcpKTtcbiAgaWYgKHNlY29uZFN0cmluZykge1xuICAgIGNvbnN0IHNlY29uZCA9IGZvcm1hdFRpbWVQYXJ0KHBhcnNlSW50KHNlY29uZFN0cmluZykpO1xuICAgIHJldHVybiBgJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9YDtcbiAgfVxuICByZXR1cm4gYCR7aG91cn06JHttaW51dGV9YDtcbn1cbmZ1bmN0aW9uIGdldExvY2FsZUhvdXJDeWNsZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSkge1xuICBjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVMb2NhbGVEYXRlVGltZUZvcm1hdHRlcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSk7XG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdFRvUGFydHMobmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgMCwgMCwgMCkpKTtcbiAgcmV0dXJuIGdldExvY2FsaXplZFRpbWVQYXJ0KFwibWVyaWRpZW1cIiwgcGFydHMpID8gXCIxMlwiIDogXCIyNFwiO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxpemVkVGltZVBhcnQocGFydCwgcGFydHMpIHtcbiAgaWYgKCFwYXJ0IHx8ICFwYXJ0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwYXJ0ID09PSBcImhvdXJTdWZmaXhcIikge1xuICAgIGNvbnN0IGhvdXJJbmRleCA9IHBhcnRzLmluZGV4T2YocGFydHMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwiaG91clwiKSk7XG4gICAgY29uc3QgbWludXRlSW5kZXggPSBwYXJ0cy5pbmRleE9mKHBhcnRzLmZpbmQoKHsgdHlwZSB9KSA9PiB0eXBlID09PSBcIm1pbnV0ZVwiKSk7XG4gICAgY29uc3QgaG91clN1ZmZpeCA9IHBhcnRzW2hvdXJJbmRleCArIDFdO1xuICAgIHJldHVybiBob3VyU3VmZml4ICYmIGhvdXJTdWZmaXgudHlwZSA9PT0gXCJsaXRlcmFsXCIgJiYgbWludXRlSW5kZXggLSBob3VySW5kZXggPT09IDJcbiAgICAgID8gaG91clN1ZmZpeC52YWx1ZT8udHJpbSgpIHx8IG51bGxcbiAgICAgIDogbnVsbDtcbiAgfVxuICBpZiAocGFydCA9PT0gXCJtaW51dGVTdWZmaXhcIikge1xuICAgIGNvbnN0IG1pbnV0ZUluZGV4ID0gcGFydHMuaW5kZXhPZihwYXJ0cy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJtaW51dGVcIikpO1xuICAgIGNvbnN0IHNlY29uZEluZGV4ID0gcGFydHMuaW5kZXhPZihwYXJ0cy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJzZWNvbmRcIikpO1xuICAgIGNvbnN0IG1pbnV0ZVN1ZmZpeCA9IHBhcnRzW21pbnV0ZUluZGV4ICsgMV07XG4gICAgcmV0dXJuIG1pbnV0ZVN1ZmZpeCAmJiBtaW51dGVTdWZmaXgudHlwZSA9PT0gXCJsaXRlcmFsXCIgJiYgc2Vjb25kSW5kZXggLSBtaW51dGVJbmRleCA9PT0gMlxuICAgICAgPyBtaW51dGVTdWZmaXgudmFsdWU/LnRyaW0oKSB8fCBudWxsXG4gICAgICA6IG51bGw7XG4gIH1cbiAgaWYgKHBhcnQgPT09IFwic2Vjb25kU3VmZml4XCIpIHtcbiAgICBjb25zdCBzZWNvbmRJbmRleCA9IHBhcnRzLmluZGV4T2YocGFydHMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwic2Vjb25kXCIpKTtcbiAgICBjb25zdCBzZWNvbmRTdWZmaXggPSBwYXJ0c1tzZWNvbmRJbmRleCArIDFdO1xuICAgIHJldHVybiBzZWNvbmRTdWZmaXggJiYgc2Vjb25kU3VmZml4LnR5cGUgPT09IFwibGl0ZXJhbFwiID8gc2Vjb25kU3VmZml4LnZhbHVlPy50cmltKCkgfHwgbnVsbCA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcnRzLmZpbmQoKHsgdHlwZSB9KSA9PiAocGFydCA9PSBcIm1lcmlkaWVtXCIgPyB0eXBlID09PSBcImRheVBlcmlvZFwiIDogdHlwZSA9PT0gcGFydCkpPy52YWx1ZSB8fCBudWxsO1xufVxuZnVuY3Rpb24gZ2V0TWVyaWRpZW0oaG91cikge1xuICBpZiAoIWlzVmFsaWROdW1iZXIoaG91cikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBob3VyQXNOdW1iZXIgPSBwYXJzZUludChob3VyKTtcbiAgcmV0dXJuIGhvdXJBc051bWJlciA+PSAwICYmIGhvdXJBc051bWJlciA8PSAxMSA/IFwiQU1cIiA6IFwiUE1cIjtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRUaW1lKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdmFsdWUuc3RhcnRzV2l0aChcIjpcIikgfHwgdmFsdWUuZW5kc1dpdGgoXCI6XCIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHNwbGl0VmFsdWUgPSB2YWx1ZS5zcGxpdChcIjpcIik7XG4gIGNvbnN0IHZhbGlkTGVuZ3RoID0gc3BsaXRWYWx1ZS5sZW5ndGggPiAxICYmIHNwbGl0VmFsdWUubGVuZ3RoIDwgNDtcbiAgaWYgKCF2YWxpZExlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBbaG91ciwgbWludXRlLCBzZWNvbmRdID0gc3BsaXRWYWx1ZTtcbiAgY29uc3QgaG91ckFzTnVtYmVyID0gcGFyc2VJbnQoc3BsaXRWYWx1ZVswXSk7XG4gIGNvbnN0IG1pbnV0ZUFzTnVtYmVyID0gcGFyc2VJbnQoc3BsaXRWYWx1ZVsxXSk7XG4gIGNvbnN0IHNlY29uZEFzTnVtYmVyID0gcGFyc2VJbnQoc3BsaXRWYWx1ZVsyXSk7XG4gIGNvbnN0IGhvdXJWYWxpZCA9IGlzVmFsaWROdW1iZXIoaG91cikgJiYgaG91ckFzTnVtYmVyID49IDAgJiYgaG91ckFzTnVtYmVyIDwgMjQ7XG4gIGNvbnN0IG1pbnV0ZVZhbGlkID0gaXNWYWxpZE51bWJlcihtaW51dGUpICYmIG1pbnV0ZUFzTnVtYmVyID49IDAgJiYgbWludXRlQXNOdW1iZXIgPCA2MDtcbiAgY29uc3Qgc2Vjb25kVmFsaWQgPSBpc1ZhbGlkTnVtYmVyKHNlY29uZCkgJiYgc2Vjb25kQXNOdW1iZXIgPj0gMCAmJiBzZWNvbmRBc051bWJlciA8IDYwO1xuICBpZiAoKGhvdXJWYWxpZCAmJiBtaW51dGVWYWxpZCAmJiAhc2Vjb25kKSB8fCAoaG91clZhbGlkICYmIG1pbnV0ZVZhbGlkICYmIHNlY29uZFZhbGlkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBpc1ZhbGlkVGltZVBhcnQodmFsdWUsIHBhcnQpIHtcbiAgaWYgKHBhcnQgPT09IFwibWVyaWRpZW1cIikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJBTVwiIHx8IHZhbHVlID09PSBcIlBNXCI7XG4gIH1cbiAgaWYgKCFpc1ZhbGlkTnVtYmVyKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB2YWx1ZUFzTnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgcmV0dXJuIHBhcnQgPT09IFwiaG91clwiID8gdmFsdWVBc051bWJlciA+PSAwICYmIHZhbHVlQXNOdW1iZXIgPCAyNCA6IHZhbHVlQXNOdW1iZXIgPj0gMCAmJiB2YWx1ZUFzTnVtYmVyIDwgNjA7XG59XG5mdW5jdGlvbiBsb2NhbGl6ZVRpbWVQYXJ0KHsgdmFsdWUsIHBhcnQsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pIHtcbiAgaWYgKCFpc1ZhbGlkVGltZVBhcnQodmFsdWUsIHBhcnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbHVlQXNOdW1iZXIgPSBwYXJzZUludCh2YWx1ZSk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygwLCAwLCAwLCBwYXJ0ID09PSBcImhvdXJcIiA/IHZhbHVlQXNOdW1iZXIgOiBwYXJ0ID09PSBcIm1lcmlkaWVtXCIgPyAodmFsdWUgPT09IFwiQU1cIiA/IDAgOiAxMikgOiAwLCBwYXJ0ID09PSBcIm1pbnV0ZVwiID8gdmFsdWVBc051bWJlciA6IDAsIHBhcnQgPT09IFwic2Vjb25kXCIgPyB2YWx1ZUFzTnVtYmVyIDogMCkpO1xuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZm9ybWF0dGVyID0gY3JlYXRlTG9jYWxlRGF0ZVRpbWVGb3JtYXR0ZXIobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0pO1xuICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKGRhdGUpO1xuICByZXR1cm4gZ2V0TG9jYWxpemVkVGltZVBhcnQocGFydCwgcGFydHMpO1xufVxuZnVuY3Rpb24gbG9jYWxpemVUaW1lU3RyaW5nKHsgdmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBpbmNsdWRlU2Vjb25kcyA9IHRydWUgfSkge1xuICBpZiAoIWlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgPSBcIjBcIiB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgY29uc3QgZGF0ZUZyb21UaW1lU3RyaW5nID0gbmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgcGFyc2VJbnQoaG91ciksIHBhcnNlSW50KG1pbnV0ZSksIHBhcnNlSW50KHNlY29uZCkpKTtcbiAgY29uc3QgZm9ybWF0dGVyID0gY3JlYXRlTG9jYWxlRGF0ZVRpbWVGb3JtYXR0ZXIobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGluY2x1ZGVTZWNvbmRzKTtcbiAgcmV0dXJuIGZvcm1hdHRlcj8uZm9ybWF0KGRhdGVGcm9tVGltZVN0cmluZykgfHwgbnVsbDtcbn1cbmZ1bmN0aW9uIGxvY2FsaXplVGltZVN0cmluZ1RvUGFydHMoeyB2YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSkge1xuICBpZiAoIWlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgPSBcIjBcIiB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgY29uc3QgZGF0ZUZyb21UaW1lU3RyaW5nID0gbmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgcGFyc2VJbnQoaG91ciksIHBhcnNlSW50KG1pbnV0ZSksIHBhcnNlSW50KHNlY29uZCkpKTtcbiAgaWYgKGRhdGVGcm9tVGltZVN0cmluZykge1xuICAgIGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtKTtcbiAgICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKGRhdGVGcm9tVGltZVN0cmluZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsaXplZEhvdXI6IGdldExvY2FsaXplZFRpbWVQYXJ0KFwiaG91clwiLCBwYXJ0cyksXG4gICAgICBsb2NhbGl6ZWRIb3VyU3VmZml4OiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcImhvdXJTdWZmaXhcIiwgcGFydHMpLFxuICAgICAgbG9jYWxpemVkTWludXRlOiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcIm1pbnV0ZVwiLCBwYXJ0cyksXG4gICAgICBsb2NhbGl6ZWRNaW51dGVTdWZmaXg6IGdldExvY2FsaXplZFRpbWVQYXJ0KFwibWludXRlU3VmZml4XCIsIHBhcnRzKSxcbiAgICAgIGxvY2FsaXplZFNlY29uZDogZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJzZWNvbmRcIiwgcGFydHMpLFxuICAgICAgbG9jYWxpemVkU2Vjb25kU3VmZml4OiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcInNlY29uZFN1ZmZpeFwiLCBwYXJ0cyksXG4gICAgICBsb2NhbGl6ZWRNZXJpZGllbTogZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJtZXJpZGllbVwiLCBwYXJ0cylcbiAgICB9O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0VGltZVBhcnRzKHsgdmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pIHtcbiAgaWYgKCFpc1ZhbGlkVGltZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kID0gXCIwXCIgfSA9IHBhcnNlVGltZVN0cmluZyh2YWx1ZSk7XG4gIGNvbnN0IGRhdGVGcm9tVGltZVN0cmluZyA9IG5ldyBEYXRlKERhdGUuVVRDKDAsIDAsIDAsIHBhcnNlSW50KGhvdXIpLCBwYXJzZUludChtaW51dGUpLCBwYXJzZUludChzZWNvbmQpKSk7XG4gIGlmIChkYXRlRnJvbVRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVMb2NhbGVEYXRlVGltZUZvcm1hdHRlcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSk7XG4gICAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0VG9QYXJ0cyhkYXRlRnJvbVRpbWVTdHJpbmcpO1xuICAgIHJldHVybiBwYXJ0cztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZVN0cmluZyh2YWx1ZSkge1xuICBpZiAoaXNWYWxpZFRpbWUodmFsdWUpKSB7XG4gICAgY29uc3QgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXSA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgaG91cixcbiAgICAgIG1pbnV0ZSxcbiAgICAgIHNlY29uZFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBob3VyOiBudWxsLFxuICAgIG1pbnV0ZTogbnVsbCxcbiAgICBzZWNvbmQ6IG51bGxcbiAgfTtcbn1cbmZ1bmN0aW9uIHRvSVNPVGltZVN0cmluZyh2YWx1ZSwgaW5jbHVkZVNlY29uZHMgPSB0cnVlKSB7XG4gIGlmICghaXNWYWxpZFRpbWUodmFsdWUpKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgbGV0IGlzb1RpbWVTdHJpbmcgPSBgJHtmb3JtYXRUaW1lUGFydChwYXJzZUludChob3VyKSl9OiR7Zm9ybWF0VGltZVBhcnQocGFyc2VJbnQobWludXRlKSl9YDtcbiAgaWYgKGluY2x1ZGVTZWNvbmRzKSB7XG4gICAgaXNvVGltZVN0cmluZyArPSBgOiR7Zm9ybWF0VGltZVBhcnQocGFyc2VJbnQoKGluY2x1ZGVTZWNvbmRzICYmIHNlY29uZCkgfHwgXCIwXCIpKX1gO1xuICB9XG4gIHJldHVybiBpc29UaW1lU3RyaW5nO1xufVxuXG5jb25zdCBDU1MkMSA9IHtcbiAgdG9nZ2xlSWNvbjogXCJ0b2dnbGUtaWNvblwiXG59O1xuXG52YXIgU0VDT05EU19BX01JTlVURSA9IDYwO1xudmFyIFNFQ09ORFNfQV9IT1VSID0gU0VDT05EU19BX01JTlVURSAqIDYwO1xudmFyIFNFQ09ORFNfQV9EQVkgPSBTRUNPTkRTX0FfSE9VUiAqIDI0O1xudmFyIFNFQ09ORFNfQV9XRUVLID0gU0VDT05EU19BX0RBWSAqIDc7XG52YXIgTUlMTElTRUNPTkRTX0FfU0VDT05EID0gMWUzO1xudmFyIE1JTExJU0VDT05EU19BX01JTlVURSA9IFNFQ09ORFNfQV9NSU5VVEUgKiBNSUxMSVNFQ09ORFNfQV9TRUNPTkQ7XG52YXIgTUlMTElTRUNPTkRTX0FfSE9VUiA9IFNFQ09ORFNfQV9IT1VSICogTUlMTElTRUNPTkRTX0FfU0VDT05EO1xudmFyIE1JTExJU0VDT05EU19BX0RBWSA9IFNFQ09ORFNfQV9EQVkgKiBNSUxMSVNFQ09ORFNfQV9TRUNPTkQ7XG52YXIgTUlMTElTRUNPTkRTX0FfV0VFSyA9IFNFQ09ORFNfQV9XRUVLICogTUlMTElTRUNPTkRTX0FfU0VDT05EOyAvLyBFbmdsaXNoIGxvY2FsZXNcblxudmFyIE1TID0gJ21pbGxpc2Vjb25kJztcbnZhciBTID0gJ3NlY29uZCc7XG52YXIgTUlOID0gJ21pbnV0ZSc7XG52YXIgSCA9ICdob3VyJztcbnZhciBEID0gJ2RheSc7XG52YXIgVyA9ICd3ZWVrJztcbnZhciBNID0gJ21vbnRoJztcbnZhciBRID0gJ3F1YXJ0ZXInO1xudmFyIFkgPSAneWVhcic7XG52YXIgREFURSA9ICdkYXRlJztcbnZhciBGT1JNQVRfREVGQVVMVCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG52YXIgSU5WQUxJRF9EQVRFX1NUUklORyA9ICdJbnZhbGlkIERhdGUnOyAvLyByZWdleFxuXG52YXIgUkVHRVhfUEFSU0UgPSAvXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvO1xudmFyIFJFR0VYX0ZPUk1BVCA9IC9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZztcblxuLy8gRW5nbGlzaCBbZW5dXG4vLyBXZSBkb24ndCBuZWVkIHdlZWtkYXlzU2hvcnQsIHdlZWtkYXlzTWluLCBtb250aHNTaG9ydCBpbiBlbi5qcyBsb2NhbGVcbmNvbnN0IGVuID0ge1xuICBuYW1lOiAnZW4nLFxuICB3ZWVrZGF5czogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICBtb250aHM6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICB2YXIgcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXTtcbiAgICB2YXIgdiA9IG4gJSAxMDA7XG4gICAgcmV0dXJuIFwiW1wiICsgbiArIChzWyh2IC0gMjApICUgMTBdIHx8IHNbdl0gfHwgc1swXSkgKyBcIl1cIjtcbiAgfVxufTtcblxuY29uc3QgZW4kMSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICAnZGVmYXVsdCc6IGVuXG59KTtcblxudmFyIHBhZFN0YXJ0ID0gZnVuY3Rpb24gcGFkU3RhcnQoc3RyaW5nLCBsZW5ndGgsIHBhZCkge1xuICB2YXIgcyA9IFN0cmluZyhzdHJpbmcpO1xuICBpZiAoIXMgfHwgcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gc3RyaW5nO1xuICByZXR1cm4gXCJcIiArIEFycmF5KGxlbmd0aCArIDEgLSBzLmxlbmd0aCkuam9pbihwYWQpICsgc3RyaW5nO1xufTtcblxudmFyIHBhZFpvbmVTdHIgPSBmdW5jdGlvbiBwYWRab25lU3RyKGluc3RhbmNlKSB7XG4gIHZhciBuZWdNaW51dGVzID0gLWluc3RhbmNlLnV0Y09mZnNldCgpO1xuICB2YXIgbWludXRlcyA9IE1hdGguYWJzKG5lZ01pbnV0ZXMpO1xuICB2YXIgaG91ck9mZnNldCA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgdmFyIG1pbnV0ZU9mZnNldCA9IG1pbnV0ZXMgJSA2MDtcbiAgcmV0dXJuIFwiXCIgKyAobmVnTWludXRlcyA8PSAwID8gJysnIDogJy0nKSArIHBhZFN0YXJ0KGhvdXJPZmZzZXQsIDIsICcwJykgKyBcIjpcIiArIHBhZFN0YXJ0KG1pbnV0ZU9mZnNldCwgMiwgJzAnKTtcbn07XG5cbnZhciBtb250aERpZmYgPSBmdW5jdGlvbiBtb250aERpZmYoYSwgYikge1xuICAvLyBmdW5jdGlvbiBmcm9tIG1vbWVudC5qcyBpbiBvcmRlciB0byBrZWVwIHRoZSBzYW1lIHJlc3VsdFxuICBpZiAoYS5kYXRlKCkgPCBiLmRhdGUoKSkgcmV0dXJuIC1tb250aERpZmYoYiwgYSk7XG4gIHZhciB3aG9sZU1vbnRoRGlmZiA9IChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyICsgKGIubW9udGgoKSAtIGEubW9udGgoKSk7XG4gIHZhciBhbmNob3IgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmLCBNKTtcbiAgdmFyIGMgPSBiIC0gYW5jaG9yIDwgMDtcbiAgdmFyIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgKGMgPyAtMSA6IDEpLCBNKTtcbiAgcmV0dXJuICsoLSh3aG9sZU1vbnRoRGlmZiArIChiIC0gYW5jaG9yKSAvIChjID8gYW5jaG9yIC0gYW5jaG9yMiA6IGFuY2hvcjIgLSBhbmNob3IpKSB8fCAwKTtcbn07XG5cbnZhciBhYnNGbG9vciA9IGZ1bmN0aW9uIGFic0Zsb29yKG4pIHtcbiAgcmV0dXJuIG4gPCAwID8gTWF0aC5jZWlsKG4pIHx8IDAgOiBNYXRoLmZsb29yKG4pO1xufTtcblxudmFyIHByZXR0eVVuaXQgPSBmdW5jdGlvbiBwcmV0dHlVbml0KHUpIHtcbiAgdmFyIHNwZWNpYWwgPSB7XG4gICAgTTogTSxcbiAgICB5OiBZLFxuICAgIHc6IFcsXG4gICAgZDogRCxcbiAgICBEOiBEQVRFLFxuICAgIGg6IEgsXG4gICAgbTogTUlOLFxuICAgIHM6IFMsXG4gICAgbXM6IE1TLFxuICAgIFE6IFFcbiAgfTtcbiAgcmV0dXJuIHNwZWNpYWxbdV0gfHwgU3RyaW5nKHUgfHwgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLCAnJyk7XG59O1xuXG52YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBpc1VuZGVmaW5lZChzKSB7XG4gIHJldHVybiBzID09PSB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBVID0ge1xuICBzOiBwYWRTdGFydCxcbiAgejogcGFkWm9uZVN0cixcbiAgbTogbW9udGhEaWZmLFxuICBhOiBhYnNGbG9vcixcbiAgcDogcHJldHR5VW5pdCxcbiAgdTogaXNVbmRlZmluZWRcbn07XG5cbnZhciBMID0gJ2VuJzsgLy8gZ2xvYmFsIGxvY2FsZVxuXG52YXIgTHMgPSB7fTsgLy8gZ2xvYmFsIGxvYWRlZCBsb2NhbGVcblxuTHNbTF0gPSBlbjtcblxudmFyIGlzRGF5anMgPSBmdW5jdGlvbiBpc0RheWpzKGQpIHtcbiAgcmV0dXJuIGQgaW5zdGFuY2VvZiBEYXlqcztcbn07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblxuXG52YXIgcGFyc2VMb2NhbGUgPSBmdW5jdGlvbiBwYXJzZUxvY2FsZShwcmVzZXQsIG9iamVjdCwgaXNMb2NhbCkge1xuICB2YXIgbDtcbiAgaWYgKCFwcmVzZXQpIHJldHVybiBMO1xuXG4gIGlmICh0eXBlb2YgcHJlc2V0ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBwcmVzZXRMb3dlciA9IHByZXNldC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKExzW3ByZXNldExvd2VyXSkge1xuICAgICAgbCA9IHByZXNldExvd2VyO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIExzW3ByZXNldExvd2VyXSA9IG9iamVjdDtcbiAgICAgIGwgPSBwcmVzZXRMb3dlcjtcbiAgICB9XG5cbiAgICB2YXIgcHJlc2V0U3BsaXQgPSBwcmVzZXQuc3BsaXQoJy0nKTtcblxuICAgIGlmICghbCAmJiBwcmVzZXRTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcGFyc2VMb2NhbGUocHJlc2V0U3BsaXRbMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgbmFtZSA9IHByZXNldC5uYW1lO1xuICAgIExzW25hbWVdID0gcHJlc2V0O1xuICAgIGwgPSBuYW1lO1xuICB9XG5cbiAgaWYgKCFpc0xvY2FsICYmIGwpIEwgPSBsO1xuICByZXR1cm4gbCB8fCAhaXNMb2NhbCAmJiBMO1xufTtcblxudmFyIGRheWpzID0gZnVuY3Rpb24gZGF5anMoZGF0ZSwgYykge1xuICBpZiAoaXNEYXlqcyhkYXRlKSkge1xuICAgIHJldHVybiBkYXRlLmNsb25lKCk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG5cblxuICB2YXIgY2ZnID0gdHlwZW9mIGMgPT09ICdvYmplY3QnID8gYyA6IHt9O1xuICBjZmcuZGF0ZSA9IGRhdGU7XG4gIGNmZy5hcmdzID0gYXJndW1lbnRzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gIHJldHVybiBuZXcgRGF5anMoY2ZnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxufTtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiB3cmFwcGVyKGRhdGUsIGluc3RhbmNlKSB7XG4gIHJldHVybiBkYXlqcyhkYXRlLCB7XG4gICAgbG9jYWxlOiBpbnN0YW5jZS4kTCxcbiAgICB1dGM6IGluc3RhbmNlLiR1LFxuICAgIHg6IGluc3RhbmNlLiR4LFxuICAgICRvZmZzZXQ6IGluc3RhbmNlLiRvZmZzZXQgLy8gdG9kbzogcmVmYWN0b3I7IGRvIG5vdCB1c2UgdGhpcy4kb2Zmc2V0IGluIHlvdSBjb2RlXG5cbiAgfSk7XG59O1xuXG52YXIgVXRpbHMgPSBVOyAvLyBmb3IgcGx1Z2luIHVzZVxuXG5VdGlscy5sID0gcGFyc2VMb2NhbGU7XG5VdGlscy5pID0gaXNEYXlqcztcblV0aWxzLncgPSB3cmFwcGVyO1xuXG52YXIgcGFyc2VEYXRlID0gZnVuY3Rpb24gcGFyc2VEYXRlKGNmZykge1xuICB2YXIgZGF0ZSA9IGNmZy5kYXRlLFxuICAgICAgdXRjID0gY2ZnLnV0YztcbiAgaWYgKGRhdGUgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pOyAvLyBudWxsIGlzIGludmFsaWRcblxuICBpZiAoVXRpbHMudShkYXRlKSkgcmV0dXJuIG5ldyBEYXRlKCk7IC8vIHRvZGF5XG5cbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyAmJiAhL1okL2kudGVzdChkYXRlKSkge1xuICAgIHZhciBkID0gZGF0ZS5tYXRjaChSRUdFWF9QQVJTRSk7XG5cbiAgICBpZiAoZCkge1xuICAgICAgdmFyIG0gPSBkWzJdIC0gMSB8fCAwO1xuICAgICAgdmFyIG1zID0gKGRbN10gfHwgJzAnKS5zdWJzdHJpbmcoMCwgMyk7XG5cbiAgICAgIGlmICh1dGMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGRbMV0sIG0sIGRbM10gfHwgMSwgZFs0XSB8fCAwLCBkWzVdIHx8IDAsIGRbNl0gfHwgMCwgbXMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRbMV0sIG0sIGRbM10gfHwgMSwgZFs0XSB8fCAwLCBkWzVdIHx8IDAsIGRbNl0gfHwgMCwgbXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKTsgLy8gZXZlcnl0aGluZyBlbHNlXG59O1xuXG52YXIgRGF5anMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEYXlqcyhjZmcpIHtcbiAgICB0aGlzLiRMID0gcGFyc2VMb2NhbGUoY2ZnLmxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG4gICAgdGhpcy5wYXJzZShjZmcpOyAvLyBmb3IgcGx1Z2luXG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGF5anMucHJvdG90eXBlO1xuXG4gIF9wcm90by5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGNmZykge1xuICAgIHRoaXMuJGQgPSBwYXJzZURhdGUoY2ZnKTtcbiAgICB0aGlzLiR4ID0gY2ZnLnggfHwge307XG4gICAgdGhpcy5pbml0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciAkZCA9IHRoaXMuJGQ7XG4gICAgdGhpcy4keSA9ICRkLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy4kTSA9ICRkLmdldE1vbnRoKCk7XG4gICAgdGhpcy4kRCA9ICRkLmdldERhdGUoKTtcbiAgICB0aGlzLiRXID0gJGQuZ2V0RGF5KCk7XG4gICAgdGhpcy4kSCA9ICRkLmdldEhvdXJzKCk7XG4gICAgdGhpcy4kbSA9ICRkLmdldE1pbnV0ZXMoKTtcbiAgICB0aGlzLiRzID0gJGQuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMuJG1zID0gJGQuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgO1xuXG4gIF9wcm90by4kdXRpbHMgPSBmdW5jdGlvbiAkdXRpbHMoKSB7XG4gICAgcmV0dXJuIFV0aWxzO1xuICB9O1xuXG4gIF9wcm90by5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gISh0aGlzLiRkLnRvU3RyaW5nKCkgPT09IElOVkFMSURfREFURV9TVFJJTkcpO1xuICB9O1xuXG4gIF9wcm90by5pc1NhbWUgPSBmdW5jdGlvbiBpc1NhbWUodGhhdCwgdW5pdHMpIHtcbiAgICB2YXIgb3RoZXIgPSBkYXlqcyh0aGF0KTtcbiAgICByZXR1cm4gdGhpcy5zdGFydE9mKHVuaXRzKSA8PSBvdGhlciAmJiBvdGhlciA8PSB0aGlzLmVuZE9mKHVuaXRzKTtcbiAgfTtcblxuICBfcHJvdG8uaXNBZnRlciA9IGZ1bmN0aW9uIGlzQWZ0ZXIodGhhdCwgdW5pdHMpIHtcbiAgICByZXR1cm4gZGF5anModGhhdCkgPCB0aGlzLnN0YXJ0T2YodW5pdHMpO1xuICB9O1xuXG4gIF9wcm90by5pc0JlZm9yZSA9IGZ1bmN0aW9uIGlzQmVmb3JlKHRoYXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kT2YodW5pdHMpIDwgZGF5anModGhhdCk7XG4gIH07XG5cbiAgX3Byb3RvLiRnID0gZnVuY3Rpb24gJGcoaW5wdXQsIGdldCwgc2V0KSB7XG4gICAgaWYgKFV0aWxzLnUoaW5wdXQpKSByZXR1cm4gdGhpc1tnZXRdO1xuICAgIHJldHVybiB0aGlzLnNldChzZXQsIGlucHV0KTtcbiAgfTtcblxuICBfcHJvdG8udW5peCA9IGZ1bmN0aW9uIHVuaXgoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgLy8gdGltZXpvbmUoaG91cikgKiA2MCAqIDYwICogMTAwMCA9PiBtc1xuICAgIHJldHVybiB0aGlzLiRkLmdldFRpbWUoKTtcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRPZiA9IGZ1bmN0aW9uIHN0YXJ0T2YodW5pdHMsIF9zdGFydE9mKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIHN0YXJ0T2YgLT4gZW5kT2ZcbiAgICB2YXIgaXNTdGFydE9mID0gIVV0aWxzLnUoX3N0YXJ0T2YpID8gX3N0YXJ0T2YgOiB0cnVlO1xuICAgIHZhciB1bml0ID0gVXRpbHMucCh1bml0cyk7XG5cbiAgICB2YXIgaW5zdGFuY2VGYWN0b3J5ID0gZnVuY3Rpb24gaW5zdGFuY2VGYWN0b3J5KGQsIG0pIHtcbiAgICAgIHZhciBpbnMgPSBVdGlscy53KF90aGlzLiR1ID8gRGF0ZS5VVEMoX3RoaXMuJHksIG0sIGQpIDogbmV3IERhdGUoX3RoaXMuJHksIG0sIGQpLCBfdGhpcyk7XG4gICAgICByZXR1cm4gaXNTdGFydE9mID8gaW5zIDogaW5zLmVuZE9mKEQpO1xuICAgIH07XG5cbiAgICB2YXIgaW5zdGFuY2VGYWN0b3J5U2V0ID0gZnVuY3Rpb24gaW5zdGFuY2VGYWN0b3J5U2V0KG1ldGhvZCwgc2xpY2UpIHtcbiAgICAgIHZhciBhcmd1bWVudFN0YXJ0ID0gWzAsIDAsIDAsIDBdO1xuICAgICAgdmFyIGFyZ3VtZW50RW5kID0gWzIzLCA1OSwgNTksIDk5OV07XG4gICAgICByZXR1cm4gVXRpbHMudyhfdGhpcy50b0RhdGUoKVttZXRob2RdLmFwcGx5KCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgIF90aGlzLnRvRGF0ZSgncycpLCAoaXNTdGFydE9mID8gYXJndW1lbnRTdGFydCA6IGFyZ3VtZW50RW5kKS5zbGljZShzbGljZSkpLCBfdGhpcyk7XG4gICAgfTtcblxuICAgIHZhciAkVyA9IHRoaXMuJFcsXG4gICAgICAgICRNID0gdGhpcy4kTSxcbiAgICAgICAgJEQgPSB0aGlzLiREO1xuICAgIHZhciB1dGNQYWQgPSBcInNldFwiICsgKHRoaXMuJHUgPyAnVVRDJyA6ICcnKTtcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSBZOlxuICAgICAgICByZXR1cm4gaXNTdGFydE9mID8gaW5zdGFuY2VGYWN0b3J5KDEsIDApIDogaW5zdGFuY2VGYWN0b3J5KDMxLCAxMSk7XG5cbiAgICAgIGNhc2UgTTpcbiAgICAgICAgcmV0dXJuIGlzU3RhcnRPZiA/IGluc3RhbmNlRmFjdG9yeSgxLCAkTSkgOiBpbnN0YW5jZUZhY3RvcnkoMCwgJE0gKyAxKTtcblxuICAgICAgY2FzZSBXOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHdlZWtTdGFydCA9IHRoaXMuJGxvY2FsZSgpLndlZWtTdGFydCB8fCAwO1xuICAgICAgICAgIHZhciBnYXAgPSAoJFcgPCB3ZWVrU3RhcnQgPyAkVyArIDcgOiAkVykgLSB3ZWVrU3RhcnQ7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlRmFjdG9yeShpc1N0YXJ0T2YgPyAkRCAtIGdhcCA6ICREICsgKDYgLSBnYXApLCAkTSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBEOlxuICAgICAgY2FzZSBEQVRFOlxuICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KHV0Y1BhZCArIFwiSG91cnNcIiwgMCk7XG5cbiAgICAgIGNhc2UgSDpcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlRmFjdG9yeVNldCh1dGNQYWQgKyBcIk1pbnV0ZXNcIiwgMSk7XG5cbiAgICAgIGNhc2UgTUlOOlxuICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KHV0Y1BhZCArIFwiU2Vjb25kc1wiLCAyKTtcblxuICAgICAgY2FzZSBTOlxuICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KHV0Y1BhZCArIFwiTWlsbGlzZWNvbmRzXCIsIDMpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZW5kT2YgPSBmdW5jdGlvbiBlbmRPZihhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydE9mKGFyZywgZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by4kc2V0ID0gZnVuY3Rpb24gJHNldCh1bml0cywgX2ludCkge1xuICAgIHZhciBfQyREJEMkREFURSRDJE0kQyRZJEM7XG5cbiAgICAvLyBwcml2YXRlIHNldFxuICAgIHZhciB1bml0ID0gVXRpbHMucCh1bml0cyk7XG4gICAgdmFyIHV0Y1BhZCA9IFwic2V0XCIgKyAodGhpcy4kdSA/ICdVVEMnIDogJycpO1xuICAgIHZhciBuYW1lID0gKF9DJEQkQyREQVRFJEMkTSRDJFkkQyA9IHt9LCBfQyREJEMkREFURSRDJE0kQyRZJENbRF0gPSB1dGNQYWQgKyBcIkRhdGVcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDW0RBVEVdID0gdXRjUGFkICsgXCJEYXRlXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tNXSA9IHV0Y1BhZCArIFwiTW9udGhcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDW1ldID0gdXRjUGFkICsgXCJGdWxsWWVhclwiLCBfQyREJEMkREFURSRDJE0kQyRZJENbSF0gPSB1dGNQYWQgKyBcIkhvdXJzXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tNSU5dID0gdXRjUGFkICsgXCJNaW51dGVzXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tTXSA9IHV0Y1BhZCArIFwiU2Vjb25kc1wiLCBfQyREJEMkREFURSRDJE0kQyRZJENbTVNdID0gdXRjUGFkICsgXCJNaWxsaXNlY29uZHNcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDKVt1bml0XTtcbiAgICB2YXIgYXJnID0gdW5pdCA9PT0gRCA/IHRoaXMuJEQgKyAoX2ludCAtIHRoaXMuJFcpIDogX2ludDtcblxuICAgIGlmICh1bml0ID09PSBNIHx8IHVuaXQgPT09IFkpIHtcbiAgICAgIC8vIGNsb25lIGlzIGZvciBiYWRNdXRhYmxlIHBsdWdpblxuICAgICAgdmFyIGRhdGUgPSB0aGlzLmNsb25lKCkuc2V0KERBVEUsIDEpO1xuICAgICAgZGF0ZS4kZFtuYW1lXShhcmcpO1xuICAgICAgZGF0ZS5pbml0KCk7XG4gICAgICB0aGlzLiRkID0gZGF0ZS5zZXQoREFURSwgTWF0aC5taW4odGhpcy4kRCwgZGF0ZS5kYXlzSW5Nb250aCgpKSkuJGQ7XG4gICAgfSBlbHNlIGlmIChuYW1lKSB0aGlzLiRkW25hbWVdKGFyZyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHN0cmluZywgX2ludDIpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQoc3RyaW5nLCBfaW50Mik7XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbVXRpbHMucCh1bml0KV0oKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG51bWJlciwgdW5pdHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgX0MkTUlOJEMkSCRDJFMkdW5pdDtcblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgICB2YXIgdW5pdCA9IFV0aWxzLnAodW5pdHMpO1xuXG4gICAgdmFyIGluc3RhbmNlRmFjdG9yeVNldCA9IGZ1bmN0aW9uIGluc3RhbmNlRmFjdG9yeVNldChuKSB7XG4gICAgICB2YXIgZCA9IGRheWpzKF90aGlzMik7XG4gICAgICByZXR1cm4gVXRpbHMudyhkLmRhdGUoZC5kYXRlKCkgKyBNYXRoLnJvdW5kKG4gKiBudW1iZXIpKSwgX3RoaXMyKTtcbiAgICB9O1xuXG4gICAgaWYgKHVuaXQgPT09IE0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChNLCB0aGlzLiRNICsgbnVtYmVyKTtcbiAgICB9XG5cbiAgICBpZiAodW5pdCA9PT0gWSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KFksIHRoaXMuJHkgKyBudW1iZXIpO1xuICAgIH1cblxuICAgIGlmICh1bml0ID09PSBEKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KDEpO1xuICAgIH1cblxuICAgIGlmICh1bml0ID09PSBXKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KDcpO1xuICAgIH1cblxuICAgIHZhciBzdGVwID0gKF9DJE1JTiRDJEgkQyRTJHVuaXQgPSB7fSwgX0MkTUlOJEMkSCRDJFMkdW5pdFtNSU5dID0gTUlMTElTRUNPTkRTX0FfTUlOVVRFLCBfQyRNSU4kQyRIJEMkUyR1bml0W0hdID0gTUlMTElTRUNPTkRTX0FfSE9VUiwgX0MkTUlOJEMkSCRDJFMkdW5pdFtTXSA9IE1JTExJU0VDT05EU19BX1NFQ09ORCwgX0MkTUlOJEMkSCRDJFMkdW5pdClbdW5pdF0gfHwgMTsgLy8gbXNcblxuICAgIHZhciBuZXh0VGltZVN0YW1wID0gdGhpcy4kZC5nZXRUaW1lKCkgKyBudW1iZXIgKiBzdGVwO1xuICAgIHJldHVybiBVdGlscy53KG5leHRUaW1lU3RhbXAsIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zdWJ0cmFjdCA9IGZ1bmN0aW9uIHN1YnRyYWN0KG51bWJlciwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG51bWJlciAqIC0xLCBzdHJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoZm9ybWF0U3RyKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCk7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkgcmV0dXJuIGxvY2FsZS5pbnZhbGlkRGF0ZSB8fCBJTlZBTElEX0RBVEVfU1RSSU5HO1xuICAgIHZhciBzdHIgPSBmb3JtYXRTdHIgfHwgRk9STUFUX0RFRkFVTFQ7XG4gICAgdmFyIHpvbmVTdHIgPSBVdGlscy56KHRoaXMpO1xuICAgIHZhciAkSCA9IHRoaXMuJEgsXG4gICAgICAgICRtID0gdGhpcy4kbSxcbiAgICAgICAgJE0gPSB0aGlzLiRNO1xuICAgIHZhciB3ZWVrZGF5cyA9IGxvY2FsZS53ZWVrZGF5cyxcbiAgICAgICAgbW9udGhzID0gbG9jYWxlLm1vbnRocyxcbiAgICAgICAgbWVyaWRpZW0gPSBsb2NhbGUubWVyaWRpZW07XG5cbiAgICB2YXIgZ2V0U2hvcnQgPSBmdW5jdGlvbiBnZXRTaG9ydChhcnIsIGluZGV4LCBmdWxsLCBsZW5ndGgpIHtcbiAgICAgIHJldHVybiBhcnIgJiYgKGFycltpbmRleF0gfHwgYXJyKF90aGlzMywgc3RyKSkgfHwgZnVsbFtpbmRleF0uc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldCRIID0gZnVuY3Rpb24gZ2V0JEgobnVtKSB7XG4gICAgICByZXR1cm4gVXRpbHMucygkSCAlIDEyIHx8IDEyLCBudW0sICcwJyk7XG4gICAgfTtcblxuICAgIHZhciBtZXJpZGllbUZ1bmMgPSBtZXJpZGllbSB8fCBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyY2FzZSkge1xuICAgICAgdmFyIG0gPSBob3VyIDwgMTIgPyAnQU0nIDogJ1BNJztcbiAgICAgIHJldHVybiBpc0xvd2VyY2FzZSA/IG0udG9Mb3dlckNhc2UoKSA6IG07XG4gICAgfTtcblxuICAgIHZhciBtYXRjaGVzID0ge1xuICAgICAgWVk6IFN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksXG4gICAgICBZWVlZOiB0aGlzLiR5LFxuICAgICAgTTogJE0gKyAxLFxuICAgICAgTU06IFV0aWxzLnMoJE0gKyAxLCAyLCAnMCcpLFxuICAgICAgTU1NOiBnZXRTaG9ydChsb2NhbGUubW9udGhzU2hvcnQsICRNLCBtb250aHMsIDMpLFxuICAgICAgTU1NTTogZ2V0U2hvcnQobW9udGhzLCAkTSksXG4gICAgICBEOiB0aGlzLiRELFxuICAgICAgREQ6IFV0aWxzLnModGhpcy4kRCwgMiwgJzAnKSxcbiAgICAgIGQ6IFN0cmluZyh0aGlzLiRXKSxcbiAgICAgIGRkOiBnZXRTaG9ydChsb2NhbGUud2Vla2RheXNNaW4sIHRoaXMuJFcsIHdlZWtkYXlzLCAyKSxcbiAgICAgIGRkZDogZ2V0U2hvcnQobG9jYWxlLndlZWtkYXlzU2hvcnQsIHRoaXMuJFcsIHdlZWtkYXlzLCAzKSxcbiAgICAgIGRkZGQ6IHdlZWtkYXlzW3RoaXMuJFddLFxuICAgICAgSDogU3RyaW5nKCRIKSxcbiAgICAgIEhIOiBVdGlscy5zKCRILCAyLCAnMCcpLFxuICAgICAgaDogZ2V0JEgoMSksXG4gICAgICBoaDogZ2V0JEgoMiksXG4gICAgICBhOiBtZXJpZGllbUZ1bmMoJEgsICRtLCB0cnVlKSxcbiAgICAgIEE6IG1lcmlkaWVtRnVuYygkSCwgJG0sIGZhbHNlKSxcbiAgICAgIG06IFN0cmluZygkbSksXG4gICAgICBtbTogVXRpbHMucygkbSwgMiwgJzAnKSxcbiAgICAgIHM6IFN0cmluZyh0aGlzLiRzKSxcbiAgICAgIHNzOiBVdGlscy5zKHRoaXMuJHMsIDIsICcwJyksXG4gICAgICBTU1M6IFV0aWxzLnModGhpcy4kbXMsIDMsICcwJyksXG4gICAgICBaOiB6b25lU3RyIC8vICdaWicgbG9naWMgYmVsb3dcblxuICAgIH07XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYX0ZPUk1BVCwgZnVuY3Rpb24gKG1hdGNoLCAkMSkge1xuICAgICAgcmV0dXJuICQxIHx8IG1hdGNoZXNbbWF0Y2hdIHx8IHpvbmVTdHIucmVwbGFjZSgnOicsICcnKTtcbiAgICB9KTsgLy8gJ1paJ1xuICB9O1xuXG4gIF9wcm90by51dGNPZmZzZXQgPSBmdW5jdGlvbiB1dGNPZmZzZXQoKSB7XG4gICAgLy8gQmVjYXVzZSBhIGJ1ZyBhdCBGRjI0LCB3ZSdyZSByb3VuZGluZyB0aGUgdGltZXpvbmUgb2Zmc2V0IGFyb3VuZCAxNSBtaW51dGVzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgcmV0dXJuIC1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xuICB9O1xuXG4gIF9wcm90by5kaWZmID0gZnVuY3Rpb24gZGlmZihpbnB1dCwgdW5pdHMsIF9mbG9hdCkge1xuICAgIHZhciBfQyRZJEMkTSRDJFEkQyRXJEMkRCQ7XG5cbiAgICB2YXIgdW5pdCA9IFV0aWxzLnAodW5pdHMpO1xuICAgIHZhciB0aGF0ID0gZGF5anMoaW5wdXQpO1xuICAgIHZhciB6b25lRGVsdGEgPSAodGhhdC51dGNPZmZzZXQoKSAtIHRoaXMudXRjT2Zmc2V0KCkpICogTUlMTElTRUNPTkRTX0FfTUlOVVRFO1xuICAgIHZhciBkaWZmID0gdGhpcyAtIHRoYXQ7XG4gICAgdmFyIHJlc3VsdCA9IFV0aWxzLm0odGhpcywgdGhhdCk7XG4gICAgcmVzdWx0ID0gKF9DJFkkQyRNJEMkUSRDJFckQyREJCA9IHt9LCBfQyRZJEMkTSRDJFEkQyRXJEMkRCRbWV0gPSByZXN1bHQgLyAxMiwgX0MkWSRDJE0kQyRRJEMkVyRDJEQkW01dID0gcmVzdWx0LCBfQyRZJEMkTSRDJFEkQyRXJEMkRCRbUV0gPSByZXN1bHQgLyAzLCBfQyRZJEMkTSRDJFEkQyRXJEMkRCRbV10gPSAoZGlmZiAtIHpvbmVEZWx0YSkgLyBNSUxMSVNFQ09ORFNfQV9XRUVLLCBfQyRZJEMkTSRDJFEkQyRXJEMkRCRbRF0gPSAoZGlmZiAtIHpvbmVEZWx0YSkgLyBNSUxMSVNFQ09ORFNfQV9EQVksIF9DJFkkQyRNJEMkUSRDJFckQyREJFtIXSA9IGRpZmYgLyBNSUxMSVNFQ09ORFNfQV9IT1VSLCBfQyRZJEMkTSRDJFEkQyRXJEMkRCRbTUlOXSA9IGRpZmYgLyBNSUxMSVNFQ09ORFNfQV9NSU5VVEUsIF9DJFkkQyRNJEMkUSRDJFckQyREJFtTXSA9IGRpZmYgLyBNSUxMSVNFQ09ORFNfQV9TRUNPTkQsIF9DJFkkQyRNJEMkUSRDJFckQyREJClbdW5pdF0gfHwgZGlmZjsgLy8gbWlsbGlzZWNvbmRzXG5cbiAgICByZXR1cm4gX2Zsb2F0ID8gcmVzdWx0IDogVXRpbHMuYShyZXN1bHQpO1xuICB9O1xuXG4gIF9wcm90by5kYXlzSW5Nb250aCA9IGZ1bmN0aW9uIGRheXNJbk1vbnRoKCkge1xuICAgIHJldHVybiB0aGlzLmVuZE9mKE0pLiREO1xuICB9O1xuXG4gIF9wcm90by4kbG9jYWxlID0gZnVuY3Rpb24gJGxvY2FsZSgpIHtcbiAgICAvLyBnZXQgbG9jYWxlIG9iamVjdFxuICAgIHJldHVybiBMc1t0aGlzLiRMXTtcbiAgfTtcblxuICBfcHJvdG8ubG9jYWxlID0gZnVuY3Rpb24gbG9jYWxlKHByZXNldCwgb2JqZWN0KSB7XG4gICAgaWYgKCFwcmVzZXQpIHJldHVybiB0aGlzLiRMO1xuICAgIHZhciB0aGF0ID0gdGhpcy5jbG9uZSgpO1xuICAgIHZhciBuZXh0TG9jYWxlTmFtZSA9IHBhcnNlTG9jYWxlKHByZXNldCwgb2JqZWN0LCB0cnVlKTtcbiAgICBpZiAobmV4dExvY2FsZU5hbWUpIHRoYXQuJEwgPSBuZXh0TG9jYWxlTmFtZTtcbiAgICByZXR1cm4gdGhhdDtcbiAgfTtcblxuICBfcHJvdG8uY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gVXRpbHMudyh0aGlzLiRkLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8udG9EYXRlID0gZnVuY3Rpb24gdG9EYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XG4gIH07XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xuICB9O1xuXG4gIF9wcm90by50b0lTT1N0cmluZyA9IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xuICAgIC8vIGllIDggcmV0dXJuXG4gICAgLy8gbmV3IERheWpzKHRoaXMudmFsdWVPZigpICsgdGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApXG4gICAgLy8gLmZvcm1hdCgnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NbWl0nKVxuICAgIHJldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCk7XG4gIH07XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKTtcbiAgfTtcblxuICByZXR1cm4gRGF5anM7XG59KCk7XG5cbnZhciBwcm90byA9IERheWpzLnByb3RvdHlwZTtcbmRheWpzLnByb3RvdHlwZSA9IHByb3RvO1xuW1snJG1zJywgTVNdLCBbJyRzJywgU10sIFsnJG0nLCBNSU5dLCBbJyRIJywgSF0sIFsnJFcnLCBEXSwgWyckTScsIE1dLCBbJyR5JywgWV0sIFsnJEQnLCBEQVRFXV0uZm9yRWFjaChmdW5jdGlvbiAoZykge1xuICBwcm90b1tnWzFdXSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLiRnKGlucHV0LCBnWzBdLCBnWzFdKTtcbiAgfTtcbn0pO1xuXG5kYXlqcy5leHRlbmQgPSBmdW5jdGlvbiAocGx1Z2luLCBvcHRpb24pIHtcbiAgaWYgKCFwbHVnaW4uJGkpIHtcbiAgICAvLyBpbnN0YWxsIHBsdWdpbiBvbmx5IG9uY2VcbiAgICBwbHVnaW4ob3B0aW9uLCBEYXlqcywgZGF5anMpO1xuICAgIHBsdWdpbi4kaSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZGF5anM7XG59O1xuXG5kYXlqcy5sb2NhbGUgPSBwYXJzZUxvY2FsZTtcbmRheWpzLmlzRGF5anMgPSBpc0RheWpzO1xuXG5kYXlqcy51bml4ID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICByZXR1cm4gZGF5anModGltZXN0YW1wICogMWUzKTtcbn07XG5cbmRheWpzLmVuID0gTHNbTF07XG5kYXlqcy5McyA9IExzO1xuZGF5anMucCA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxudmFyIHQgPSBmdW5jdGlvbiB0KGZvcm1hdCkge1xuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoLyhcXFtbXlxcXV0rXSl8KE1NTU18TU18RER8ZGRkZCkvZywgZnVuY3Rpb24gKF8sIGEsIGIpIHtcbiAgICByZXR1cm4gYSB8fCBiLnNsaWNlKDEpO1xuICB9KTtcbn07XG52YXIgZW5nbGlzaEZvcm1hdHMgPSB7XG4gIExUUzogJ2g6bW06c3MgQScsXG4gIExUOiAnaDptbSBBJyxcbiAgTDogJ01NL0REL1lZWVknLFxuICBMTDogJ01NTU0gRCwgWVlZWScsXG4gIExMTDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICBMTExMOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQSdcbn07XG52YXIgdSA9IGZ1bmN0aW9uIHUoZm9ybWF0U3RyLCBmb3JtYXRzKSB7XG4gIHJldHVybiBmb3JtYXRTdHIucmVwbGFjZSgvKFxcW1teXFxdXStdKXwoTFRTP3xsezEsNH18THsxLDR9KS9nLCBmdW5jdGlvbiAoXywgYSwgYikge1xuICAgIHZhciBCID0gYiAmJiBiLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIGEgfHwgZm9ybWF0c1tiXSB8fCBlbmdsaXNoRm9ybWF0c1tiXSB8fCB0KGZvcm1hdHNbQl0pO1xuICB9KTtcbn07XG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXltdKlxcXSl8KFstXzovLiwoKVxcc10rKXwoQXxhfFlZWVl8WVk/fE1NP00/TT98RG98REQ/fGhoP3xISD98bW0/fHNzP3xTezEsM318enxaWj8pL2c7XG52YXIgbWF0Y2gxID0gL1xcZC87IC8vIDAgLSA5XG5cbnZhciBtYXRjaDIgPSAvXFxkXFxkLzsgLy8gMDAgLSA5OVxuXG52YXIgbWF0Y2gzID0gL1xcZHszfS87IC8vIDAwMCAtIDk5OVxuXG52YXIgbWF0Y2g0ID0gL1xcZHs0fS87IC8vIDAwMDAgLSA5OTk5XG5cbnZhciBtYXRjaDF0bzIgPSAvXFxkXFxkPy87IC8vIDAgLSA5OVxuXG52YXIgbWF0Y2hTaWduZWQgPSAvWystXT9cXGQrLzsgLy8gLWluZiAtIGluZlxuXG52YXIgbWF0Y2hPZmZzZXQgPSAvWystXVxcZFxcZDo/KFxcZFxcZCk/fFovOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIG9yIC0wMDAwICswMCBvciBaXG5cbnZhciBtYXRjaFdvcmQgPSAvXFxkKlteLV86LywoKVxcc1xcZF0rLzsgLy8gV29yZFxuXG52YXIgbG9jYWxlID0ge307XG5cbnZhciBwYXJzZVR3b0RpZ2l0WWVhciA9IGZ1bmN0aW9uIHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSB7XG4gIGlucHV0ID0gK2lucHV0O1xuICByZXR1cm4gaW5wdXQgKyAoaW5wdXQgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbn07XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGlmICghc3RyaW5nKSByZXR1cm4gMDtcbiAgaWYgKHN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIHBhcnRzID0gc3RyaW5nLm1hdGNoKC8oWystXXxcXGRcXGQpL2cpO1xuICB2YXIgbWludXRlcyA9ICsocGFydHNbMV0gKiA2MCkgKyAoK3BhcnRzWzJdIHx8IDApO1xuICByZXR1cm4gbWludXRlcyA9PT0gMCA/IDAgOiBwYXJ0c1swXSA9PT0gJysnID8gLW1pbnV0ZXMgOiBtaW51dGVzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG59XG5cbnZhciBhZGRJbnB1dCA9IGZ1bmN0aW9uIGFkZElucHV0KHByb3BlcnR5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzW3Byb3BlcnR5XSA9ICtpbnB1dDtcbiAgfTtcbn07XG5cbnZhciB6b25lRXhwcmVzc2lvbnMgPSBbbWF0Y2hPZmZzZXQsIGZ1bmN0aW9uIChpbnB1dCkge1xuICB2YXIgem9uZSA9IHRoaXMuem9uZSB8fCAodGhpcy56b25lID0ge30pO1xuICB6b25lLm9mZnNldCA9IG9mZnNldEZyb21TdHJpbmcoaW5wdXQpO1xufV07XG5cbnZhciBnZXRMb2NhbGVQYXJ0ID0gZnVuY3Rpb24gZ2V0TG9jYWxlUGFydChuYW1lKSB7XG4gIHZhciBwYXJ0ID0gbG9jYWxlW25hbWVdO1xuICByZXR1cm4gcGFydCAmJiAocGFydC5pbmRleE9mID8gcGFydCA6IHBhcnQucy5jb25jYXQocGFydC5mKSk7XG59O1xuXG52YXIgbWVyaWRpZW1NYXRjaCA9IGZ1bmN0aW9uIG1lcmlkaWVtTWF0Y2goaW5wdXQsIGlzTG93ZXJDYXNlKSB7XG4gIHZhciBpc0FmdGVybm9vbjtcbiAgdmFyIF9sb2NhbGUgPSBsb2NhbGUsXG4gICAgICBtZXJpZGllbSA9IF9sb2NhbGUubWVyaWRpZW07XG5cbiAgaWYgKCFtZXJpZGllbSkge1xuICAgIGlzQWZ0ZXJub29uID0gaW5wdXQgPT09IChpc0xvd2VyQ2FzZSA/ICdwbScgOiAnUE0nKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAyNDsgaSArPSAxKSB7XG4gICAgICAvLyB0b2RvOiBmaXggaW5wdXQgPT09IG1lcmlkaWVtKGksIDAsIGlzTG93ZXJDYXNlKVxuICAgICAgaWYgKGlucHV0LmluZGV4T2YobWVyaWRpZW0oaSwgMCwgaXNMb3dlckNhc2UpKSA+IC0xKSB7XG4gICAgICAgIGlzQWZ0ZXJub29uID0gaSA+IDEyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNBZnRlcm5vb247XG59O1xuXG52YXIgZXhwcmVzc2lvbnMgPSB7XG4gIEE6IFttYXRjaFdvcmQsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHRoaXMuYWZ0ZXJub29uID0gbWVyaWRpZW1NYXRjaChpbnB1dCwgZmFsc2UpO1xuICB9XSxcbiAgYTogW21hdGNoV29yZCwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5hZnRlcm5vb24gPSBtZXJpZGllbU1hdGNoKGlucHV0LCB0cnVlKTtcbiAgfV0sXG4gIFM6IFttYXRjaDEsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHRoaXMubWlsbGlzZWNvbmRzID0gK2lucHV0ICogMTAwO1xuICB9XSxcbiAgU1M6IFttYXRjaDIsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHRoaXMubWlsbGlzZWNvbmRzID0gK2lucHV0ICogMTA7XG4gIH1dLFxuICBTU1M6IFttYXRjaDMsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHRoaXMubWlsbGlzZWNvbmRzID0gK2lucHV0O1xuICB9XSxcbiAgczogW21hdGNoMXRvMiwgYWRkSW5wdXQoJ3NlY29uZHMnKV0sXG4gIHNzOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnc2Vjb25kcycpXSxcbiAgbTogW21hdGNoMXRvMiwgYWRkSW5wdXQoJ21pbnV0ZXMnKV0sXG4gIG1tOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnbWludXRlcycpXSxcbiAgSDogW21hdGNoMXRvMiwgYWRkSW5wdXQoJ2hvdXJzJyldLFxuICBoOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnaG91cnMnKV0sXG4gIEhIOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnaG91cnMnKV0sXG4gIGhoOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnaG91cnMnKV0sXG4gIEQ6IFttYXRjaDF0bzIsIGFkZElucHV0KCdkYXknKV0sXG4gIEREOiBbbWF0Y2gyLCBhZGRJbnB1dCgnZGF5JyldLFxuICBEbzogW21hdGNoV29yZCwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIF9sb2NhbGUyID0gbG9jYWxlLFxuICAgICAgICBvcmRpbmFsID0gX2xvY2FsZTIub3JkaW5hbDtcblxuICAgIHZhciBfaW5wdXQkbWF0Y2ggPSBpbnB1dC5tYXRjaCgvXFxkKy8pO1xuXG4gICAgdGhpcy5kYXkgPSBfaW5wdXQkbWF0Y2hbMF07XG4gICAgaWYgKCFvcmRpbmFsKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAzMTsgaSArPSAxKSB7XG4gICAgICBpZiAob3JkaW5hbChpKS5yZXBsYWNlKC9cXFt8XFxdL2csICcnKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgdGhpcy5kYXkgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfV0sXG4gIE06IFttYXRjaDF0bzIsIGFkZElucHV0KCdtb250aCcpXSxcbiAgTU06IFttYXRjaDIsIGFkZElucHV0KCdtb250aCcpXSxcbiAgTU1NOiBbbWF0Y2hXb3JkLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgbW9udGhzID0gZ2V0TG9jYWxlUGFydCgnbW9udGhzJyk7XG4gICAgdmFyIG1vbnRoc1Nob3J0ID0gZ2V0TG9jYWxlUGFydCgnbW9udGhzU2hvcnQnKTtcbiAgICB2YXIgbWF0Y2hJbmRleCA9IChtb250aHNTaG9ydCB8fCBtb250aHMubWFwKGZ1bmN0aW9uIChfKSB7XG4gICAgICByZXR1cm4gXy5zbGljZSgwLCAzKTtcbiAgICB9KSkuaW5kZXhPZihpbnB1dCkgKyAxO1xuXG4gICAgaWYgKG1hdGNoSW5kZXggPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vbnRoID0gbWF0Y2hJbmRleCAlIDEyIHx8IG1hdGNoSW5kZXg7XG4gIH1dLFxuICBNTU1NOiBbbWF0Y2hXb3JkLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgbW9udGhzID0gZ2V0TG9jYWxlUGFydCgnbW9udGhzJyk7XG4gICAgdmFyIG1hdGNoSW5kZXggPSBtb250aHMuaW5kZXhPZihpbnB1dCkgKyAxO1xuXG4gICAgaWYgKG1hdGNoSW5kZXggPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vbnRoID0gbWF0Y2hJbmRleCAlIDEyIHx8IG1hdGNoSW5kZXg7XG4gIH1dLFxuICBZOiBbbWF0Y2hTaWduZWQsIGFkZElucHV0KCd5ZWFyJyldLFxuICBZWTogW21hdGNoMiwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy55ZWFyID0gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xuICB9XSxcbiAgWVlZWTogW21hdGNoNCwgYWRkSW5wdXQoJ3llYXInKV0sXG4gIFo6IHpvbmVFeHByZXNzaW9ucyxcbiAgWlo6IHpvbmVFeHByZXNzaW9uc1xufTtcblxuZnVuY3Rpb24gY29ycmVjdEhvdXJzKHRpbWUpIHtcbiAgdmFyIGFmdGVybm9vbiA9IHRpbWUuYWZ0ZXJub29uO1xuXG4gIGlmIChhZnRlcm5vb24gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBob3VycyA9IHRpbWUuaG91cnM7XG5cbiAgICBpZiAoYWZ0ZXJub29uKSB7XG4gICAgICBpZiAoaG91cnMgPCAxMikge1xuICAgICAgICB0aW1lLmhvdXJzICs9IDEyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICB0aW1lLmhvdXJzID0gMDtcbiAgICB9XG5cbiAgICBkZWxldGUgdGltZS5hZnRlcm5vb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVBhcnNlcihmb3JtYXQpIHtcbiAgZm9ybWF0ID0gdShmb3JtYXQsIGxvY2FsZSAmJiBsb2NhbGUuZm9ybWF0cyk7XG4gIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKTtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHRva2VuID0gYXJyYXlbaV07XG4gICAgdmFyIHBhcnNlVG8gPSBleHByZXNzaW9uc1t0b2tlbl07XG4gICAgdmFyIHJlZ2V4ID0gcGFyc2VUbyAmJiBwYXJzZVRvWzBdO1xuICAgIHZhciBwYXJzZXIgPSBwYXJzZVRvICYmIHBhcnNlVG9bMV07XG5cbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICBhcnJheVtpXSA9IHtcbiAgICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgICBwYXJzZXI6IHBhcnNlclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyYXlbaV0gPSB0b2tlbi5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgdGltZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBzdGFydCA9IDA7IF9pIDwgbGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICB2YXIgX3Rva2VuID0gYXJyYXlbX2ldO1xuXG4gICAgICBpZiAodHlwZW9mIF90b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RhcnQgKz0gX3Rva2VuLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfcmVnZXggPSBfdG9rZW4ucmVnZXgsXG4gICAgICAgICAgICBfcGFyc2VyID0gX3Rva2VuLnBhcnNlcjtcbiAgICAgICAgdmFyIHBhcnQgPSBpbnB1dC5zbGljZShzdGFydCk7XG5cbiAgICAgICAgdmFyIG1hdGNoID0gX3JlZ2V4LmV4ZWMocGFydCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gbWF0Y2hbMF07XG5cbiAgICAgICAgX3BhcnNlci5jYWxsKHRpbWUsIHZhbHVlKTtcblxuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UodmFsdWUsICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb3JyZWN0SG91cnModGltZSk7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH07XG59XG5cbnZhciBwYXJzZUZvcm1hdHRlZElucHV0ID0gZnVuY3Rpb24gcGFyc2VGb3JtYXR0ZWRJbnB1dChpbnB1dCwgZm9ybWF0LCB1dGMpIHtcbiAgdHJ5IHtcbiAgICBpZiAoWyd4JywgJ1gnXS5pbmRleE9mKGZvcm1hdCkgPiAtMSkgcmV0dXJuIG5ldyBEYXRlKChmb3JtYXQgPT09ICdYJyA/IDEwMDAgOiAxKSAqIGlucHV0KTtcbiAgICB2YXIgcGFyc2VyID0gbWFrZVBhcnNlcihmb3JtYXQpO1xuXG4gICAgdmFyIF9wYXJzZXIyID0gcGFyc2VyKGlucHV0KSxcbiAgICAgICAgeWVhciA9IF9wYXJzZXIyLnllYXIsXG4gICAgICAgIG1vbnRoID0gX3BhcnNlcjIubW9udGgsXG4gICAgICAgIGRheSA9IF9wYXJzZXIyLmRheSxcbiAgICAgICAgaG91cnMgPSBfcGFyc2VyMi5ob3VycyxcbiAgICAgICAgbWludXRlcyA9IF9wYXJzZXIyLm1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHMgPSBfcGFyc2VyMi5zZWNvbmRzLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBfcGFyc2VyMi5taWxsaXNlY29uZHMsXG4gICAgICAgIHpvbmUgPSBfcGFyc2VyMi56b25lO1xuXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGQgPSBkYXkgfHwgKCF5ZWFyICYmICFtb250aCA/IG5vdy5nZXREYXRlKCkgOiAxKTtcbiAgICB2YXIgeSA9IHllYXIgfHwgbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgdmFyIE0gPSAwO1xuXG4gICAgaWYgKCEoeWVhciAmJiAhbW9udGgpKSB7XG4gICAgICBNID0gbW9udGggPiAwID8gbW9udGggLSAxIDogbm93LmdldE1vbnRoKCk7XG4gICAgfVxuXG4gICAgdmFyIGggPSBob3VycyB8fCAwO1xuICAgIHZhciBtID0gbWludXRlcyB8fCAwO1xuICAgIHZhciBzID0gc2Vjb25kcyB8fCAwO1xuICAgIHZhciBtcyA9IG1pbGxpc2Vjb25kcyB8fCAwO1xuXG4gICAgaWYgKHpvbmUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5LCBNLCBkLCBoLCBtLCBzLCBtcyArIHpvbmUub2Zmc2V0ICogNjAgKiAxMDAwKSk7XG4gICAgfVxuXG4gICAgaWYgKHV0Yykge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHksIE0sIGQsIGgsIG0sIHMsIG1zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHksIE0sIGQsIGgsIG0sIHMsIG1zKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgnJyk7IC8vIEludmFsaWQgRGF0ZVxuICB9XG59O1xuXG5jb25zdCBjdXN0b21QYXJzZUZvcm1hdCA9IChmdW5jdGlvbiAobywgQywgZCkge1xuICBkLnAuY3VzdG9tUGFyc2VGb3JtYXQgPSB0cnVlO1xuXG4gIGlmIChvICYmIG8ucGFyc2VUd29EaWdpdFllYXIpIHtcbiAgICBwYXJzZVR3b0RpZ2l0WWVhciA9IG8ucGFyc2VUd29EaWdpdFllYXI7XG4gIH1cblxuICB2YXIgcHJvdG8gPSBDLnByb3RvdHlwZTtcbiAgdmFyIG9sZFBhcnNlID0gcHJvdG8ucGFyc2U7XG5cbiAgcHJvdG8ucGFyc2UgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgdmFyIGRhdGUgPSBjZmcuZGF0ZSxcbiAgICAgICAgdXRjID0gY2ZnLnV0YyxcbiAgICAgICAgYXJncyA9IGNmZy5hcmdzO1xuICAgIHRoaXMuJHUgPSB1dGM7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3NbMV07XG5cbiAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBpc1N0cmljdFdpdGhvdXRMb2NhbGUgPSBhcmdzWzJdID09PSB0cnVlO1xuICAgICAgdmFyIGlzU3RyaWN0V2l0aExvY2FsZSA9IGFyZ3NbM10gPT09IHRydWU7XG4gICAgICB2YXIgaXNTdHJpY3QgPSBpc1N0cmljdFdpdGhvdXRMb2NhbGUgfHwgaXNTdHJpY3RXaXRoTG9jYWxlO1xuICAgICAgdmFyIHBsID0gYXJnc1syXTtcblxuICAgICAgaWYgKGlzU3RyaWN0V2l0aExvY2FsZSkge1xuICAgICAgICBwbCA9IGFyZ3NbMl07XG4gICAgICB9XG5cbiAgICAgIGxvY2FsZSA9IHRoaXMuJGxvY2FsZSgpO1xuXG4gICAgICBpZiAoIWlzU3RyaWN0V2l0aG91dExvY2FsZSAmJiBwbCkge1xuICAgICAgICBsb2NhbGUgPSBkLkxzW3BsXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kZCA9IHBhcnNlRm9ybWF0dGVkSW5wdXQoZGF0ZSwgZm9ybWF0LCB1dGMpO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICBpZiAocGwgJiYgcGwgIT09IHRydWUpIHRoaXMuJEwgPSB0aGlzLmxvY2FsZShwbCkuJEw7IC8vIHVzZSAhPSB0byB0cmVhdFxuICAgICAgLy8gaW5wdXQgbnVtYmVyIDE0MTA3MTU2NDA1NzkgYW5kIGZvcm1hdCBzdHJpbmcgJzE0MTA3MTU2NDA1NzknIGVxdWFsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cbiAgICAgIGlmIChpc1N0cmljdCAmJiBkYXRlICE9IHRoaXMuZm9ybWF0KGZvcm1hdCkpIHtcbiAgICAgICAgdGhpcy4kZCA9IG5ldyBEYXRlKCcnKTtcbiAgICAgIH0gLy8gcmVzZXQgZ2xvYmFsIGxvY2FsZSB0byBtYWtlIHBhcmFsbGVsIHVuaXQgdGVzdFxuXG5cbiAgICAgIGxvY2FsZSA9IHt9O1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHZhciBsZW4gPSBmb3JtYXQubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBsZW47IGkgKz0gMSkge1xuICAgICAgICBhcmdzWzFdID0gZm9ybWF0W2kgLSAxXTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGQuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICB0aGlzLiRkID0gcmVzdWx0LiRkO1xuICAgICAgICAgIHRoaXMuJEwgPSByZXN1bHQuJEw7XG4gICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gbGVuKSB0aGlzLiRkID0gbmV3IERhdGUoJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvbGRQYXJzZS5jYWxsKHRoaXMsIGNmZyk7XG4gICAgfVxuICB9O1xufSk7XG5cbmNvbnN0IGxvY2FsZURhdGEgPSAoZnVuY3Rpb24gKG8sIGMsIGRheWpzKSB7XG4gIC8vIGxvY2FsZSBuZWVkZWQgbGF0ZXJcbiAgdmFyIHByb3RvID0gYy5wcm90b3R5cGU7XG5cbiAgdmFyIGdldExvY2FsZVBhcnQgPSBmdW5jdGlvbiBnZXRMb2NhbGVQYXJ0KHBhcnQpIHtcbiAgICByZXR1cm4gcGFydCAmJiAocGFydC5pbmRleE9mID8gcGFydCA6IHBhcnQucyk7XG4gIH07XG5cbiAgdmFyIGdldFNob3J0ID0gZnVuY3Rpb24gZ2V0U2hvcnQoaW5zLCB0YXJnZXQsIGZ1bGwsIG51bSwgbG9jYWxlT3JkZXIpIHtcbiAgICB2YXIgbG9jYWxlID0gaW5zLm5hbWUgPyBpbnMgOiBpbnMuJGxvY2FsZSgpO1xuICAgIHZhciB0YXJnZXRMb2NhbGUgPSBnZXRMb2NhbGVQYXJ0KGxvY2FsZVt0YXJnZXRdKTtcbiAgICB2YXIgZnVsbExvY2FsZSA9IGdldExvY2FsZVBhcnQobG9jYWxlW2Z1bGxdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0TG9jYWxlIHx8IGZ1bGxMb2NhbGUubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgICByZXR1cm4gZi5zbGljZSgwLCBudW0pO1xuICAgIH0pO1xuICAgIGlmICghbG9jYWxlT3JkZXIpIHJldHVybiByZXN1bHQ7XG4gICAgdmFyIHdlZWtTdGFydCA9IGxvY2FsZS53ZWVrU3RhcnQ7XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgICByZXR1cm4gcmVzdWx0WyhpbmRleCArICh3ZWVrU3RhcnQgfHwgMCkpICUgN107XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdldERheWpzTG9jYWxlT2JqZWN0ID0gZnVuY3Rpb24gZ2V0RGF5anNMb2NhbGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRheWpzLkxzW2RheWpzLmxvY2FsZSgpXTtcbiAgfTtcblxuICB2YXIgZ2V0TG9uZ0RhdGVGb3JtYXQgPSBmdW5jdGlvbiBnZXRMb25nRGF0ZUZvcm1hdChsLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gbC5mb3JtYXRzW2Zvcm1hdF0gfHwgdChsLmZvcm1hdHNbZm9ybWF0LnRvVXBwZXJDYXNlKCldKTtcbiAgfTtcblxuICB2YXIgbG9jYWxlRGF0YSA9IGZ1bmN0aW9uIGxvY2FsZURhdGEoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiB7XG4gICAgICBtb250aHM6IGZ1bmN0aW9uIG1vbnRocyhpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZS5mb3JtYXQoJ01NTU0nKSA6IGdldFNob3J0KF90aGlzLCAnbW9udGhzJyk7XG4gICAgICB9LFxuICAgICAgbW9udGhzU2hvcnQ6IGZ1bmN0aW9uIG1vbnRoc1Nob3J0KGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlLmZvcm1hdCgnTU1NJykgOiBnZXRTaG9ydChfdGhpcywgJ21vbnRoc1Nob3J0JywgJ21vbnRocycsIDMpO1xuICAgICAgfSxcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBmdW5jdGlvbiBmaXJzdERheU9mV2VlaygpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnQgfHwgMDtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5czogZnVuY3Rpb24gd2Vla2RheXMoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuZm9ybWF0KCdkZGRkJykgOiBnZXRTaG9ydChfdGhpcywgJ3dlZWtkYXlzJyk7XG4gICAgICB9LFxuICAgICAgd2Vla2RheXNNaW46IGZ1bmN0aW9uIHdlZWtkYXlzTWluKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlLmZvcm1hdCgnZGQnKSA6IGdldFNob3J0KF90aGlzLCAnd2Vla2RheXNNaW4nLCAnd2Vla2RheXMnLCAyKTtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5c1Nob3J0OiBmdW5jdGlvbiB3ZWVrZGF5c1Nob3J0KGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlLmZvcm1hdCgnZGRkJykgOiBnZXRTaG9ydChfdGhpcywgJ3dlZWtkYXlzU2hvcnQnLCAnd2Vla2RheXMnLCAzKTtcbiAgICAgIH0sXG4gICAgICBsb25nRGF0ZUZvcm1hdDogZnVuY3Rpb24gbG9uZ0RhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBnZXRMb25nRGF0ZUZvcm1hdChfdGhpcy4kbG9jYWxlKCksIGZvcm1hdCk7XG4gICAgICB9LFxuICAgICAgbWVyaWRpZW06IHRoaXMuJGxvY2FsZSgpLm1lcmlkaWVtLFxuICAgICAgb3JkaW5hbDogdGhpcy4kbG9jYWxlKCkub3JkaW5hbFxuICAgIH07XG4gIH07XG5cbiAgcHJvdG8ubG9jYWxlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9jYWxlRGF0YS5iaW5kKHRoaXMpKCk7XG4gIH07XG5cbiAgZGF5anMubG9jYWxlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9jYWxlT2JqZWN0ID0gZ2V0RGF5anNMb2NhbGVPYmplY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZmlyc3REYXlPZldlZWs6IGZ1bmN0aW9uIGZpcnN0RGF5T2ZXZWVrKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlT2JqZWN0LndlZWtTdGFydCB8fCAwO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXlzOiBmdW5jdGlvbiB3ZWVrZGF5cygpIHtcbiAgICAgICAgcmV0dXJuIGRheWpzLndlZWtkYXlzKCk7XG4gICAgICB9LFxuICAgICAgd2Vla2RheXNTaG9ydDogZnVuY3Rpb24gd2Vla2RheXNTaG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIGRheWpzLndlZWtkYXlzU2hvcnQoKTtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5c01pbjogZnVuY3Rpb24gd2Vla2RheXNNaW4oKSB7XG4gICAgICAgIHJldHVybiBkYXlqcy53ZWVrZGF5c01pbigpO1xuICAgICAgfSxcbiAgICAgIG1vbnRoczogZnVuY3Rpb24gbW9udGhzKCkge1xuICAgICAgICByZXR1cm4gZGF5anMubW9udGhzKCk7XG4gICAgICB9LFxuICAgICAgbW9udGhzU2hvcnQ6IGZ1bmN0aW9uIG1vbnRoc1Nob3J0KCkge1xuICAgICAgICByZXR1cm4gZGF5anMubW9udGhzU2hvcnQoKTtcbiAgICAgIH0sXG4gICAgICBsb25nRGF0ZUZvcm1hdDogZnVuY3Rpb24gbG9uZ0RhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBnZXRMb25nRGF0ZUZvcm1hdChsb2NhbGVPYmplY3QsIGZvcm1hdCk7XG4gICAgICB9LFxuICAgICAgbWVyaWRpZW06IGxvY2FsZU9iamVjdC5tZXJpZGllbSxcbiAgICAgIG9yZGluYWw6IGxvY2FsZU9iamVjdC5vcmRpbmFsXG4gICAgfTtcbiAgfTtcblxuICBkYXlqcy5tb250aHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFNob3J0KGdldERheWpzTG9jYWxlT2JqZWN0KCksICdtb250aHMnKTtcbiAgfTtcblxuICBkYXlqcy5tb250aHNTaG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ21vbnRoc1Nob3J0JywgJ21vbnRocycsIDMpO1xuICB9O1xuXG4gIGRheWpzLndlZWtkYXlzID0gZnVuY3Rpb24gKGxvY2FsZU9yZGVyKSB7XG4gICAgcmV0dXJuIGdldFNob3J0KGdldERheWpzTG9jYWxlT2JqZWN0KCksICd3ZWVrZGF5cycsIG51bGwsIG51bGwsIGxvY2FsZU9yZGVyKTtcbiAgfTtcblxuICBkYXlqcy53ZWVrZGF5c1Nob3J0ID0gZnVuY3Rpb24gKGxvY2FsZU9yZGVyKSB7XG4gICAgcmV0dXJuIGdldFNob3J0KGdldERheWpzTG9jYWxlT2JqZWN0KCksICd3ZWVrZGF5c1Nob3J0JywgJ3dlZWtkYXlzJywgMywgbG9jYWxlT3JkZXIpO1xuICB9O1xuXG4gIGRheWpzLndlZWtkYXlzTWluID0gZnVuY3Rpb24gKGxvY2FsZU9yZGVyKSB7XG4gICAgcmV0dXJuIGdldFNob3J0KGdldERheWpzTG9jYWxlT2JqZWN0KCksICd3ZWVrZGF5c01pbicsICd3ZWVrZGF5cycsIDIsIGxvY2FsZU9yZGVyKTtcbiAgfTtcbn0pO1xuXG5jb25zdCBsb2NhbGl6ZWRGb3JtYXQgPSAoZnVuY3Rpb24gKG8sIGMsIGQpIHtcbiAgdmFyIHByb3RvID0gYy5wcm90b3R5cGU7XG4gIHZhciBvbGRGb3JtYXQgPSBwcm90by5mb3JtYXQ7XG4gIGQuZW4uZm9ybWF0cyA9IGVuZ2xpc2hGb3JtYXRzO1xuXG4gIHByb3RvLmZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXRTdHIpIHtcbiAgICBpZiAoZm9ybWF0U3RyID09PSB2b2lkIDApIHtcbiAgICAgIGZvcm1hdFN0ciA9IEZPUk1BVF9ERUZBVUxUO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyQkbG9jYWxlID0gdGhpcy4kbG9jYWxlKCksXG4gICAgICAgIF90aGlzJCRsb2NhbGUkZm9ybWF0cyA9IF90aGlzJCRsb2NhbGUuZm9ybWF0cyxcbiAgICAgICAgZm9ybWF0cyA9IF90aGlzJCRsb2NhbGUkZm9ybWF0cyA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyQkbG9jYWxlJGZvcm1hdHM7XG5cbiAgICB2YXIgcmVzdWx0ID0gdShmb3JtYXRTdHIsIGZvcm1hdHMpO1xuICAgIHJldHVybiBvbGRGb3JtYXQuY2FsbCh0aGlzLCByZXN1bHQpO1xuICB9O1xufSk7XG5cbi8vIFBsdWdpbiB0ZW1wbGF0ZSBmcm9tIGh0dHBzOi8vZGF5LmpzLm9yZy9kb2NzL2VuL3BsdWdpbi9wbHVnaW5cbmNvbnN0IHByZVBhcnNlUG9zdEZvcm1hdCA9IChmdW5jdGlvbiAob3B0aW9uLCBkYXlqc0NsYXNzKSB7XG4gIHZhciBvbGRQYXJzZSA9IGRheWpzQ2xhc3MucHJvdG90eXBlLnBhcnNlO1xuXG4gIGRheWpzQ2xhc3MucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGNmZykge1xuICAgIGlmICh0eXBlb2YgY2ZnLmRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCk7XG4gICAgICBjZmcuZGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUucHJlcGFyc2UgPyBsb2NhbGUucHJlcGFyc2UoY2ZnLmRhdGUpIDogY2ZnLmRhdGU7XG4gICAgfSAvLyBvcmlnaW5hbCBwYXJzZSByZXN1bHRcblxuXG4gICAgcmV0dXJuIG9sZFBhcnNlLmJpbmQodGhpcykoY2ZnKTtcbiAgfTsgLy8gLy8gb3ZlcnJpZGluZyBleGlzdGluZyBBUElcbiAgLy8gLy8gZS5nLiBleHRlbmQgZGF5anMoKS5mb3JtYXQoKVxuXG5cbiAgdmFyIG9sZEZvcm1hdCA9IGRheWpzQ2xhc3MucHJvdG90eXBlLmZvcm1hdDtcblxuICBkYXlqc0NsYXNzLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIG9yaWdpbmFsIGZvcm1hdCByZXN1bHRcbiAgICB2YXIgcmVzdWx0ID0gb2xkRm9ybWF0LmNhbGwuYXBwbHkob2xkRm9ybWF0LCBbdGhpc10uY29uY2F0KGFyZ3MpKTsgLy8gcmV0dXJuIG1vZGlmaWVkIHJlc3VsdFxuXG4gICAgdmFyIGxvY2FsZSA9IHRoaXMuJGxvY2FsZSgpO1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlLnBvc3Rmb3JtYXQgPyBsb2NhbGUucG9zdGZvcm1hdChyZXN1bHQpIDogcmVzdWx0O1xuICB9O1xuXG4gIHZhciBvbGRGcm9tVG8gPSBkYXlqc0NsYXNzLnByb3RvdHlwZS5mcm9tVG9CYXNlO1xuXG4gIGlmIChvbGRGcm9tVG8pIHtcbiAgICBkYXlqc0NsYXNzLnByb3RvdHlwZS5mcm9tVG9CYXNlID0gZnVuY3Rpb24gKGlucHV0LCB3aXRob3V0U3VmZml4LCBpbnN0YW5jZSwgaXNGcm9tKSB7XG4gICAgICB2YXIgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCkgfHwgaW5zdGFuY2UuJGxvY2FsZSgpOyAvLyBvcmlnaW5hbCBmb3JtYXQgcmVzdWx0XG5cbiAgICAgIHJldHVybiBvbGRGcm9tVG8uY2FsbCh0aGlzLCBpbnB1dCwgd2l0aG91dFN1ZmZpeCwgaW5zdGFuY2UsIGlzRnJvbSwgbG9jYWxlICYmIGxvY2FsZS5wb3N0Zm9ybWF0KTtcbiAgICB9O1xuICB9XG59KTtcblxuY29uc3QgdXBkYXRlTG9jYWxlID0gKGZ1bmN0aW9uIChvcHRpb24sIERheWpzLCBkYXlqcykge1xuICBkYXlqcy51cGRhdGVMb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlLCBjdXN0b21Db25maWcpIHtcbiAgICB2YXIgbG9jYWxlTGlzdCA9IGRheWpzLkxzO1xuICAgIHZhciBsb2NhbGVDb25maWcgPSBsb2NhbGVMaXN0W2xvY2FsZV07XG4gICAgaWYgKCFsb2NhbGVDb25maWcpIHJldHVybjtcbiAgICB2YXIgY3VzdG9tQ29uZmlnS2V5cyA9IGN1c3RvbUNvbmZpZyA/IE9iamVjdC5rZXlzKGN1c3RvbUNvbmZpZykgOiBbXTtcbiAgICBjdXN0b21Db25maWdLZXlzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIGxvY2FsZUNvbmZpZ1tjXSA9IGN1c3RvbUNvbmZpZ1tjXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbG9jYWxlQ29uZmlnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIH07XG59KTtcblxuY29uc3QgaW5wdXRUaW1lUGlja2VyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS10b2dnbGUtc3BhY2luZzowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjFyZW19LmlucHV0LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmV9LnRvZ2dsZS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxcmVtO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtpbnNldC1pbmxpbmUtZW5kOjA7aW5zZXQtYmxvY2s6MDtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nKX1cIjtcblxuLy8gc29tZSBidW5kbGVycyAoZS5nLiwgV2VicGFjaykgbmVlZCBkeW5hbWljIGltcG9ydCBwYXRocyB0byBiZSBzdGF0aWNcbmNvbnN0IHN1cHBvcnRlZERheUpzTG9jYWxlVG9Mb2NhbGVDb25maWdJbXBvcnQgPSBuZXcgTWFwKFtcbiAgW1wiYXJcIiwgKCkgPT4gaW1wb3J0KCcuL2FyLTA5ZjMyZWJiLmpzJyldLFxuICBbXCJiZ1wiLCAoKSA9PiBpbXBvcnQoJy4vYmctMWRmYzQ5MmEuanMnKV0sXG4gIFtcImJzXCIsICgpID0+IGltcG9ydCgnLi9icy1mYjY4OWE1OC5qcycpXSxcbiAgW1wiY2FcIiwgKCkgPT4gaW1wb3J0KCcuL2NhLTczMGI0MWJjLmpzJyldLFxuICBbXCJjc1wiLCAoKSA9PiBpbXBvcnQoJy4vY3MtYjBhNDQ1NjguanMnKV0sXG4gIFtcImRhXCIsICgpID0+IGltcG9ydCgnLi9kYS0xZGNhMTk2MC5qcycpXSxcbiAgW1wiZGVcIiwgKCkgPT4gaW1wb3J0KCcuL2RlLWZjMzIzMDk2LmpzJyldLFxuICBbXCJkZS1hdFwiLCAoKSA9PiBpbXBvcnQoJy4vZGUtYXQtZDE5NzZhMTcuanMnKV0sXG4gIFtcImRlLWNoXCIsICgpID0+IGltcG9ydCgnLi9kZS1jaC1jYmNlY2NjYy5qcycpXSxcbiAgW1wiZWxcIiwgKCkgPT4gaW1wb3J0KCcuL2VsLWY4YmY2ZmQwLmpzJyldLFxuICBbXCJlblwiLCAoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuJDE7IH0pXSxcbiAgW1wiZW4tYXVcIiwgKCkgPT4gaW1wb3J0KCcuL2VuLWF1LTM5YTY2YzIxLmpzJyldLFxuICBbXCJlbi1jYVwiLCAoKSA9PiBpbXBvcnQoJy4vZW4tY2EtNDljOTdlOTQuanMnKV0sXG4gIFtcImVuLWdiXCIsICgpID0+IGltcG9ydCgnLi9lbi1nYi04M2JmMGJkZS5qcycpXSxcbiAgW1wiZXNcIiwgKCkgPT4gaW1wb3J0KCcuL2VzLWNlZGRlY2M4LmpzJyldLFxuICBbXCJlcy1teFwiLCAoKSA9PiBpbXBvcnQoJy4vZXMtbXgtODYxYjNkZTEuanMnKV0sXG4gIFtcImV0XCIsICgpID0+IGltcG9ydCgnLi9ldC1jNmQzZWQ1Ni5qcycpXSxcbiAgW1wiZmlcIiwgKCkgPT4gaW1wb3J0KCcuL2ZpLTZmYTZjODU3LmpzJyldLFxuICBbXCJmclwiLCAoKSA9PiBpbXBvcnQoJy4vZnItZTI5MWM4N2MuanMnKV0sXG4gIFtcImZyLWNoXCIsICgpID0+IGltcG9ydCgnLi9mci1jaC1mOTIwOTI5OS5qcycpXSxcbiAgW1wiaGVcIiwgKCkgPT4gaW1wb3J0KCcuL2hlLTNiZjBkMzlmLmpzJyldLFxuICBbXCJoaVwiLCAoKSA9PiBpbXBvcnQoJy4vaGktYTVmZTVjYTkuanMnKV0sXG4gIFtcImhyXCIsICgpID0+IGltcG9ydCgnLi9oci0xOWJlNWE5Ni5qcycpXSxcbiAgW1wiaHVcIiwgKCkgPT4gaW1wb3J0KCcuL2h1LWViZDJjOGRkLmpzJyldLFxuICBbXCJpZFwiLCAoKSA9PiBpbXBvcnQoJy4vaWQtYWFlODk0MzguanMnKV0sXG4gIFtcIml0XCIsICgpID0+IGltcG9ydCgnLi9pdC1iMmQwNDhjYS5qcycpXSxcbiAgW1wiaXQtY2hcIiwgKCkgPT4gaW1wb3J0KCcuL2l0LWNoLTgyNTBjZjZhLmpzJyldLFxuICBbXCJqYVwiLCAoKSA9PiBpbXBvcnQoJy4vamEtNGRkMWUyN2IuanMnKV0sXG4gIFtcImtvXCIsICgpID0+IGltcG9ydCgnLi9rby1hYWYwYTBlMC5qcycpXSxcbiAgW1wibHRcIiwgKCkgPT4gaW1wb3J0KCcuL2x0LTNhZDRmMDYxLmpzJyldLFxuICBbXCJsdlwiLCAoKSA9PiBpbXBvcnQoJy4vbHYtMTc1ZTk5YTUuanMnKV0sXG4gIFtcIm1rXCIsICgpID0+IGltcG9ydCgnLi9tay0wYTFmNTNiMi5qcycpXSxcbiAgW1wibmxcIiwgKCkgPT4gaW1wb3J0KCcuL25sLTEwOWU3ODk3LmpzJyldLFxuICBbXCJuYlwiLCAoKSA9PiBpbXBvcnQoJy4vbmItNDU1N2RiNmMuanMnKV0sXG4gIFtcInBsXCIsICgpID0+IGltcG9ydCgnLi9wbC01NzJlMGI4ZS5qcycpXSxcbiAgW1wicHRcIiwgKCkgPT4gaW1wb3J0KCcuL3B0LTU5Njg4NDk0LmpzJyldLFxuICBbXCJwdC1iclwiLCAoKSA9PiBpbXBvcnQoJy4vcHQtYnItYjRhOWIzYTcuanMnKV0sXG4gIFtcInJvXCIsICgpID0+IGltcG9ydCgnLi9yby02YjA2ZjczMS5qcycpXSxcbiAgW1wicnVcIiwgKCkgPT4gaW1wb3J0KCcuL3J1LWYxODkyZTIwLmpzJyldLFxuICBbXCJza1wiLCAoKSA9PiBpbXBvcnQoJy4vc2stZWNhYmM4ZmIuanMnKV0sXG4gIFtcInNsXCIsICgpID0+IGltcG9ydCgnLi9zbC01ZGU5ZTcyZS5qcycpXSxcbiAgW1wic3JcIiwgKCkgPT4gaW1wb3J0KCcuL3NyLTVmZTQ0ZjhmLmpzJyldLFxuICBbXCJzdlwiLCAoKSA9PiBpbXBvcnQoJy4vc3YtMDBkMDRiMWQuanMnKV0sXG4gIFtcInRoXCIsICgpID0+IGltcG9ydCgnLi90aC0wY2M4ZWNkMy5qcycpXSxcbiAgW1widHJcIiwgKCkgPT4gaW1wb3J0KCcuL3RyLTgxN2JkYmE4LmpzJyldLFxuICBbXCJ1a1wiLCAoKSA9PiBpbXBvcnQoJy4vdWstNjdjNzI0MmMuanMnKV0sXG4gIFtcInZpXCIsICgpID0+IGltcG9ydCgnLi92aS0yNTY3NDlkZi5qcycpXSxcbiAgW1wiemgtY25cIiwgKCkgPT4gaW1wb3J0KCcuL3poLWNuLWY1MTYxYzExLmpzJyldLFxuICBbXCJ6aC1oa1wiLCAoKSA9PiBpbXBvcnQoJy4vemgtaGstN2NiZmU2NmYuanMnKV0sXG4gIFtcInpoLXR3XCIsICgpID0+IGltcG9ydCgnLi96aC10dy1jNTZiOTBmZS5qcycpXVxuXSk7XG5kYXlqcy5leHRlbmQoY3VzdG9tUGFyc2VGb3JtYXQpO1xuZGF5anMuZXh0ZW5kKGxvY2FsZURhdGEpO1xuZGF5anMuZXh0ZW5kKGxvY2FsaXplZEZvcm1hdCk7XG5kYXlqcy5leHRlbmQocHJlUGFyc2VQb3N0Rm9ybWF0KTtcbmRheWpzLmV4dGVuZCh1cGRhdGVMb2NhbGUpO1xuY29uc3QgSW5wdXRUaW1lUGlja2VyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnB1dFRpbWVQaWNrZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dFRpbWVQaWNrZXJDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nSWQgPSBgdGltZS1waWNrZXItZGlhbG9nLS0ke2d1aWQoKX1gO1xuICAgIC8qKiB3aGV0aGVyIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgd2FzIGNoYW5nZWQgYXMgYSByZXN1bHQgb2YgdXNlciB0eXBpbmcgb3Igbm90ICovXG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50SWQgPSBgaW5wdXQtdGltZS1waWNrZXItJHtndWlkKCl9YDtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5ob3N0Qmx1ckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5jYWxjaXRlSW5wdXRFbC52YWx1ZTtcbiAgICAgIGNvbnN0IGRlbG9jYWxpemVkSW5wdXRWYWx1ZSA9IHRoaXMuZGVsb2NhbGl6ZVRpbWVTdHJpbmcoaW5wdXRWYWx1ZSk7XG4gICAgICBpZiAoIWRlbG9jYWxpemVkSW5wdXRWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKFwiXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZGVsb2NhbGl6ZWRJbnB1dFZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZGVsb2NhbGl6ZWRJbnB1dFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxvY2FsaXplZFRpbWVTdHJpbmcgPSBsb2NhbGl6ZVRpbWVTdHJpbmcoe1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgaW5jbHVkZVNlY29uZHM6IHRoaXMuc2hvdWxkSW5jbHVkZVNlY29uZHMoKVxuICAgICAgfSk7XG4gICAgICBpZiAobG9jYWxpemVkVGltZVN0cmluZyAhPT0gaW5wdXRWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVkVGltZVN0cmluZyk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRGb2N1c0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5yZWFkT25seSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRJbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlTG9jYWxlOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9ID0gdGhpcztcbiAgICAgIGlmIChudW1iZXJpbmdTeXN0ZW0gJiYgbnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIikge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHZhbHVlSW5OdW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXJcbiAgICAgICAgICAuZGVsb2NhbGl6ZSh0YXJnZXQudmFsdWUpXG4gICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgLm1hcCgoY2hhcikgPT4gbnVtYmVyS2V5cy5pbmNsdWRlcyhjaGFyKVxuICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKGNoYXIpKVxuICAgICAgICAgIDogY2hhcilcbiAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHZhbHVlSW5OdW1iZXJpbmdTeXN0ZW0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50aW1lUGlja2VyQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGluY2x1ZGVTZWNvbmRzID0gdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0b0lTT1RpbWVTdHJpbmcodmFsdWUsIGluY2x1ZGVTZWNvbmRzKSk7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGluY2x1ZGVTZWNvbmRzXG4gICAgICB9KSk7XG4gICAgfTtcbiAgICB0aGlzLnBvcG92ZXJDbG9zZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMsIHtcbiAgICAgICAgb25EZWFjdGl2YXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXRFbC5zZXRGb2N1cygpO1xuICAgICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnBvcG92ZXJPcGVuSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMsIHtcbiAgICAgICAgb25BY3RpdmF0ZTogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZvY3VzT25PcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGNpdGVUaW1lUGlja2VyRWwuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNPbk9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBkZWZhdWx0UHJldmVudGVkLCBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGlmIChzdWJtaXRGb3JtKHRoaXMpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVJbnB1dEVsLnNldEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMuY2FsY2l0ZVRpbWVQaWNrZXJFbCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmRlbG9jYWxpemVUaW1lU3RyaW5nKHRoaXMuY2FsY2l0ZUlucHV0RWwudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgY29uc3QgbG9jYWxpemVkVGltZVN0cmluZyA9IGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICAgIGluY2x1ZGVTZWNvbmRzOiB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKClcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiB0aGlzLmNhbGNpdGVJbnB1dEVsLnZhbHVlICE9PSBsb2NhbGl6ZWRUaW1lU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKGxvY2FsaXplZFRpbWVTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb2N1c09uT3BlbiA9IHRydWU7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiRXNjYXBlXCIgJiYgdGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnB1dEVsLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldENhbGNpdGVQb3BvdmVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucG9wb3ZlckVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldENhbGNpdGVJbnB1dEVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnB1dEVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldENhbGNpdGVUaW1lUGlja2VyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZVRpbWVQaWNrZXJFbCA9IGVsO1xuICAgICAgY29ubmVjdEZvY3VzVHJhcCh0aGlzLCB7XG4gICAgICAgIGZvY3VzVHJhcEVsOiBlbCxcbiAgICAgICAgZm9jdXNUcmFwT3B0aW9uczoge1xuICAgICAgICAgIGluaXRpYWxGb2N1czogZmFsc2UsXG4gICAgICAgICAgc2V0UmV0dXJuRm9jdXM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlID0gKG5ld0lucHV0VmFsdWUpID0+IHtcbiAgICAgIGlmICghdGhpcy5jYWxjaXRlSW5wdXRFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNpdGVJbnB1dEVsLnZhbHVlID0gbmV3SW5wdXRWYWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIGFuZCBlbWl0cyBhIGNoYW5nZSBldmVudC5cbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSBhcyBhIHJlc3VsdCBvZiB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBmb3JtYXRUaW1lU3RyaW5nKHZhbHVlKSB8fCBcIlwiO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlIHx8IFwiXCI7XG4gICAgICBjb25zdCBjaGFuZ2VFdmVudCA9IHRoaXMuY2FsY2l0ZUlucHV0VGltZVBpY2tlckNoYW5nZS5lbWl0KCk7XG4gICAgICBpZiAoY2hhbmdlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgICAgICB2YWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICAgIGluY2x1ZGVTZWNvbmRzOiB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKClcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgZGlyZWN0bHkgd2l0aG91dCBlbWl0dGluZyBhIGNoYW5nZSBldmVudC5cbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvbiBpbml0aWFsIGxvYWQgYW5kIHdoZW4gcHJvcHMgY2hhbmdlIHRoYXQgYXJlIG5vdCB0aGUgcmVzdWx0IG9mIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICB0aGlzLnNldFZhbHVlRGlyZWN0bHkgPSAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVTZWNvbmRzID0gdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRvSVNPVGltZVN0cmluZyh2YWx1ZSwgaW5jbHVkZVNlY29uZHMpO1xuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHRoaXMudmFsdWVcbiAgICAgICAgPyBsb2NhbGl6ZVRpbWVTdHJpbmcoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIGluY2x1ZGVTZWNvbmRzLFxuICAgICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbVxuICAgICAgICB9KVxuICAgICAgICA6IFwiXCIpO1xuICAgIH07XG4gICAgdGhpcy5vbklucHV0V3JhcHBlckNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICB9O1xuICAgIHRoaXMuZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNUcmFwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucGxhY2VtZW50ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5zdGVwID0gNjA7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICB9XG4gIG9wZW5IYW5kbGVyKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIG51bWJlcmluZ1N5c3RlbVdhdGNoZXIobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBpbmNsdWRlU2Vjb25kczogdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpXG4gICAgfSkpO1xuICB9XG4gIHN0ZXBXYXRjaGVyKG5ld1N0ZXAsIG9sZFN0ZXApIHtcbiAgICBpZiAoKG9sZFN0ZXAgPj0gNjAgJiYgbmV3U3RlcCA+IDAgJiYgbmV3U3RlcCA8IDYwKSB8fFxuICAgICAgKG5ld1N0ZXAgPj0gNjAgJiYgb2xkU3RlcCA+IDAgJiYgb2xkU3RlcCA8IDYwKSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZURpcmVjdGx5KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuICB2YWx1ZVdhdGNoZXIobmV3VmFsdWUpIHtcbiAgICBpZiAoIXRoaXMudXNlckNoYW5nZWRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZURpcmVjdGx5KG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgYXN5bmMgZWZmZWN0aXZlTG9jYWxlV2F0Y2hlcihsb2NhbGUpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRlVGltZUxvY2FsZURhdGEoKTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgbG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGluY2x1ZGVTZWNvbmRzOiB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKClcbiAgICB9KSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMucG9wb3ZlckVsPy5yZXBvc2l0aW9uKGRlbGF5ZWQpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVsb2NhbGl6ZVRpbWVTdHJpbmcodmFsdWUpIHtcbiAgICAvLyB3ZSBuZWVkIHRvIHNldCB0aGUgY29ycmVzcG9uZGluZyBsb2NhbGUgYmVmb3JlIHBhcnNpbmcsIG90aGVyd2lzZSBpdCBkZWZhdWx0cyB0byBFbmdsaXNoIChwb3NzaWJsZSBkYXlqcyBidWcpXG4gICAgZGF5anMubG9jYWxlKHRoaXMuZWZmZWN0aXZlTG9jYWxlLnRvTG93ZXJDYXNlKCkpO1xuICAgIGNvbnN0IGRheWpzUGFyc2VSZXN1bHQgPSBkYXlqcyh2YWx1ZSwgW1wiTFRTXCIsIFwiTFRcIl0pO1xuICAgIGlmIChkYXlqc1BhcnNlUmVzdWx0LmlzVmFsaWQoKSkge1xuICAgICAgbGV0IHVuZm9ybWF0dGVkVGltZVN0cmluZyA9IGAke2RheWpzUGFyc2VSZXN1bHQuZ2V0KFwiaG91clwiKX06JHtkYXlqc1BhcnNlUmVzdWx0LmdldChcIm1pbnV0ZVwiKX1gO1xuICAgICAgaWYgKHRoaXMuc2hvdWxkSW5jbHVkZVNlY29uZHMoKSkge1xuICAgICAgICB1bmZvcm1hdHRlZFRpbWVTdHJpbmcgKz0gYDoke2RheWpzUGFyc2VSZXN1bHQuZ2V0KFwic2Vjb25kc1wiKSB8fCAwfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0VGltZVN0cmluZyh1bmZvcm1hdHRlZFRpbWVTdHJpbmcpIHx8IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGFzeW5jIGxvYWREYXRlVGltZUxvY2FsZURhdGEoKSB7XG4gICAgbGV0IHN1cHBvcnRlZExvY2FsZSA9IGdldFN1cHBvcnRlZExvY2FsZSh0aGlzLmVmZmVjdGl2ZUxvY2FsZSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc3VwcG9ydGVkTG9jYWxlID09PSBcIm5vXCIpIHtcbiAgICAgIHN1cHBvcnRlZExvY2FsZSA9IFwibmJcIjtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnRlZExvY2FsZSA9PT0gXCJwdC1wdFwiKSB7XG4gICAgICBzdXBwb3J0ZWRMb2NhbGUgPSBcInB0XCI7XG4gICAgfVxuICAgIGNvbnN0IHsgZGVmYXVsdDogbG9jYWxlQ29uZmlnIH0gPSBhd2FpdCBzdXBwb3J0ZWREYXlKc0xvY2FsZVRvTG9jYWxlQ29uZmlnSW1wb3J0LmdldChzdXBwb3J0ZWRMb2NhbGUpKCk7XG4gICAgZGF5anMubG9jYWxlKGxvY2FsZUNvbmZpZywgbnVsbCwgdHJ1ZSk7XG4gICAgZGF5anMudXBkYXRlTG9jYWxlKHN1cHBvcnRlZExvY2FsZSwgdGhpcy5nZXRFeHRlbmRlZExvY2FsZUNvbmZpZyhzdXBwb3J0ZWRMb2NhbGUpKTtcbiAgfVxuICBnZXRFeHRlbmRlZExvY2FsZUNvbmZpZyhsb2NhbGUpIHtcbiAgICBpZiAobG9jYWxlID09PSBcImFyXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lcmlkaWVtOiAoaG91cikgPT4gKGhvdXIgPiAxMiA/IFwi2YVcIiA6IFwi2LVcIiksXG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICBMVDogXCJISDptbSBBXCIsXG4gICAgICAgICAgTFRTOiBcIkhIOm1tOnNzIEFcIixcbiAgICAgICAgICBMOiBcIkREL01NL1lZWVlcIixcbiAgICAgICAgICBMTDogXCJEIE1NTU0gWVlZWVwiLFxuICAgICAgICAgIExMTDogXCJEIE1NTU0gWVlZWSBISDptbSBBXCIsXG4gICAgICAgICAgTExMTDogXCJkZGRkIEQgTU1NTSBZWVlZIEhIOm1tIEFcIlxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcImVuLWF1XCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lcmlkaWVtOiAoaG91cikgPT4gKGhvdXIgPiAxMiA/IFwicG1cIiA6IFwiYW1cIilcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbGUgPT09IFwiZW4tY2FcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVyaWRpZW06IChob3VyKSA9PiAoaG91ciA+IDEyID8gXCJwLm0uXCIgOiBcImEubS5cIilcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbGUgPT09IFwiZWxcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVyaWRpZW06IChob3VyKSA9PiAoaG91ciA+IDEyID8gXCLOvC7OvC5cIiA6IFwiz4AuzrwuXCIpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcImhpXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICBMVDogXCJoOm1tIEFcIixcbiAgICAgICAgICBMVFM6IFwiaDptbTpzcyBBXCIsXG4gICAgICAgICAgTDogXCJERC9NTS9ZWVlZXCIsXG4gICAgICAgICAgTEw6IFwiRCBNTU1NIFlZWVlcIixcbiAgICAgICAgICBMTEw6IFwiRCBNTU1NIFlZWVksIGg6bW0gQVwiLFxuICAgICAgICAgIExMTEw6IFwiZGRkZCwgRCBNTU1NIFlZWVksIGg6bW0gQVwiXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiAoaG91cikgPT4gKGhvdXIgPiAxMiA/IFwicG1cIiA6IFwiYW1cIilcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbGUgPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVyaWRpZW06IChob3VyKSA9PiAoaG91ciA+IDEyID8gXCLsmKTtm4RcIiA6IFwi7Jik7KCEXCIpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcInpoLXR3XCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICBMVDogXCJBSEg6bW1cIixcbiAgICAgICAgICBMVFM6IFwiQUhIOm1tOnNzXCJcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJ6aC1oa1wiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXRzOiB7XG4gICAgICAgICAgTFQ6IFwiQUhIOm1tXCIsXG4gICAgICAgICAgTFRTOiBcIkFISDptbTpzc1wiXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiAoaG91cikgPT4gKGhvdXIgPiAxMiA/IFwi5LiL5Y2IXCIgOiBcIuS4iuWNiFwiKVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgb25MYWJlbENsaWNrKCkge1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBzaG91bGRJbmNsdWRlU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwIDwgNjA7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBpZiAoaXNWYWxpZFRpbWUodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVEaXJlY3RseSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NldFVwTWVzc2FnZXModGhpcyksIHRoaXMubG9hZERhdGVUaW1lTG9jYWxlRGF0YSgpXSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaWYgKGlzVmFsaWRUaW1lKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGluY2x1ZGVTZWNvbmRzOiB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKClcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG1lc3NhZ2VzLCByZWFkT25seSwgZGlhbG9nSWQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25CbHVyOiB0aGlzLmhvc3RCbHVySGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC13cmFwcGVyXCIsIG9uQ2xpY2s6IHRoaXMub25JbnB1dFdyYXBwZXJDbGljayB9LCBoKFwiY2FsY2l0ZS1pbnB1dFwiLCB7IFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJub25lXCIsIFwiYXJpYS1oYXNwb3B1cFwiOiBcImRpYWxvZ1wiLCBkaXNhYmxlZDogZGlzYWJsZWQsIGljb246IFwiY2xvY2tcIiwgaWQ6IHRoaXMucmVmZXJlbmNlRWxlbWVudElkLCBsYWJlbDogZ2V0TGFiZWxUZXh0KHRoaXMpLCBsYW5nOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgb25DYWxjaXRlSW5wdXRJbnB1dDogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciwgb25DYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzOiB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXNIYW5kbGVyLCByZWFkT25seTogcmVhZE9ubHksIHJvbGU6IFwiY29tYm9ib3hcIiwgc2NhbGU6IHRoaXMuc2NhbGUsIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldENhbGNpdGVJbnB1dEVsIH0pLCB0aGlzLnJlbmRlclRvZ2dsZUljb24odGhpcy5vcGVuKSksIGgoXCJjYWxjaXRlLXBvcG92ZXJcIiwgeyBmb2N1c1RyYXBEaXNhYmxlZDogdHJ1ZSwgaWQ6IGRpYWxvZ0lkLCBsYWJlbDogbWVzc2FnZXMuY2hvb3NlVGltZSwgbGFuZzogdGhpcy5lZmZlY3RpdmVMb2NhbGUsIG9uQ2FsY2l0ZVBvcG92ZXJDbG9zZTogdGhpcy5wb3BvdmVyQ2xvc2VIYW5kbGVyLCBvbkNhbGNpdGVQb3BvdmVyT3BlbjogdGhpcy5wb3BvdmVyT3BlbkhhbmRsZXIsIG9wZW46IHRoaXMub3Blbiwgb3ZlcmxheVBvc2l0aW9uaW5nOiB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZywgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCwgcmVmZXJlbmNlRWxlbWVudDogdGhpcy5yZWZlcmVuY2VFbGVtZW50SWQsIHRyaWdnZXJEaXNhYmxlZDogdHJ1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldENhbGNpdGVQb3BvdmVyRWwgfSwgaChcImNhbGNpdGUtdGltZS1waWNrZXJcIiwgeyBsYW5nOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgbWVzc2FnZU92ZXJyaWRlczogdGhpcy5tZXNzYWdlT3ZlcnJpZGVzLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCBvbkNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJDaGFuZ2U6IHRoaXMudGltZVBpY2tlckNoYW5nZUhhbmRsZXIsIHNjYWxlOiB0aGlzLnNjYWxlLCBzdGVwOiB0aGlzLnN0ZXAsIHRhYkluZGV4OiB0aGlzLm9wZW4gPyB1bmRlZmluZWQgOiAtMSwgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRDYWxjaXRlVGltZVBpY2tlckVsIH0pKSwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpO1xuICB9XG4gIHJlbmRlclRvZ2dsZUljb24ob3Blbikge1xuICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTJDEudG9nZ2xlSWNvbiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogb3BlbiA/IFwiY2hldnJvbi11cFwiIDogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IFwic1wiIH0pKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbXCJoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZFwiXSxcbiAgICBcImRpc2FibGVkXCI6IFtcImhhbmRsZURpc2FibGVkQW5kUmVhZE9ubHlDaGFuZ2VcIl0sXG4gICAgXCJyZWFkT25seVwiOiBbXCJoYW5kbGVEaXNhYmxlZEFuZFJlYWRPbmx5Q2hhbmdlXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwibnVtYmVyaW5nU3lzdGVtXCI6IFtcIm51bWJlcmluZ1N5c3RlbVdhdGNoZXJcIl0sXG4gICAgXCJzdGVwXCI6IFtcInN0ZXBXYXRjaGVyXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVXYXRjaGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZVdhdGNoZXJcIl1cbiAgfTsgfVxufTtcbklucHV0VGltZVBpY2tlci5zdHlsZSA9IGlucHV0VGltZVBpY2tlckNzcztcblxuY29uc3QgQ1NTID0ge1xuICBidXR0b246IFwiYnV0dG9uXCIsXG4gIGJ1dHRvbkJvdHRvbUxlZnQ6IFwiYnV0dG9uLS1ib3R0b20tbGVmdFwiLFxuICBidXR0b25Cb3R0b21SaWdodDogXCJidXR0b24tLWJvdHRvbS1yaWdodFwiLFxuICBidXR0b25Ib3VyRG93bjogXCJidXR0b24tLWhvdXItZG93blwiLFxuICBidXR0b25Ib3VyVXA6IFwiYnV0dG9uLS1ob3VyLXVwXCIsXG4gIGJ1dHRvbk1lcmlkaWVtRG93bjogXCJidXR0b24tLW1lcmlkaWVtLWRvd25cIixcbiAgYnV0dG9uTWVyaWRpZW1VcDogXCJidXR0b24tLW1lcmlkaWVtLXVwXCIsXG4gIGJ1dHRvbk1pbnV0ZURvd246IFwiYnV0dG9uLS1taW51dGUtZG93blwiLFxuICBidXR0b25NaW51dGVVcDogXCJidXR0b24tLW1pbnV0ZS11cFwiLFxuICBidXR0b25TZWNvbmREb3duOiBcImJ1dHRvbi0tc2Vjb25kLWRvd25cIixcbiAgYnV0dG9uU2Vjb25kVXA6IFwiYnV0dG9uLS1zZWNvbmQtdXBcIixcbiAgYnV0dG9uVG9wTGVmdDogXCJidXR0b24tLXRvcC1sZWZ0XCIsXG4gIGJ1dHRvblRvcFJpZ2h0OiBcImJ1dHRvbi0tdG9wLXJpZ2h0XCIsXG4gIGNvbHVtbjogXCJjb2x1bW5cIixcbiAgZGVsaW1pdGVyOiBcImRlbGltaXRlclwiLFxuICBob3VyOiBcImhvdXJcIixcbiAgaW5wdXQ6IFwiaW5wdXRcIixcbiAgbWVyaWRpZW06IFwibWVyaWRpZW1cIixcbiAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gIHNob3dNZXJpZGllbTogXCJzaG93LW1lcmlkaWVtXCIsXG4gIHNob3dTZWNvbmQ6IFwic2hvdy1zZWNvbmRcIixcbiAgXCJzY2FsZS1zXCI6IFwic2NhbGUtc1wiLFxuICBcInNjYWxlLW1cIjogXCJzY2FsZS1tXCIsXG4gIFwic2NhbGUtbFwiOiBcInNjYWxlLWxcIixcbiAgdGltZVBpY2tlcjogXCJ0aW1lLXBpY2tlclwiLFxuICBtZXJpZGllbVN0YXJ0OiBcIm1lcmlkaWVtLS1zdGFydFwiXG59O1xuXG5jb25zdCB0aW1lUGlja2VyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnRpbWUtcGlja2Vye2Rpc3BsYXk6ZmxleDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuY29sdW1ue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnRpbWUtcGlja2VyIC5tZXJpZGllbS0tc3RhcnR7b3JkZXI6LTF9LnRpbWUtcGlja2VyIC5idXR0b257ZGlzcGxheTppbmxpbmUtZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0udGltZS1waWNrZXIgLmJ1dHRvbjpob3ZlciwudGltZS1waWNrZXIgLmJ1dHRvbjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7b3V0bGluZS1vZmZzZXQ6MH0udGltZS1waWNrZXIgLmJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LnRpbWUtcGlja2VyIC5idXR0b24udG9wLWxlZnR7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuYnV0dG9uLmJvdHRvbS1sZWZ0e2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LnRpbWUtcGlja2VyIC5idXR0b24udG9wLXJpZ2h0e2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LnRpbWUtcGlja2VyIC5idXR0b24uYm90dG9tLXJpZ2h0e2JvcmRlci1lbmQtZW5kLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuYnV0dG9uIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LnRpbWUtcGlja2VyIC5pbnB1dHtkaXNwbGF5OmlubGluZS1mbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKX0udGltZS1waWNrZXIgLmlucHV0OmhvdmVye2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKX0udGltZS1waWNrZXIgLmlucHV0OmZvY3VzLC50aW1lLXBpY2tlciAuaW5wdXQ6aG92ZXI6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktYnJhbmQpO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpO291dGxpbmUtb2Zmc2V0OjB9LnRpbWUtcGlja2VyLnNjYWxlLXN7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX0udGltZS1waWNrZXIuc2NhbGUtcyAuYnV0dG9uLC50aW1lLXBpY2tlci5zY2FsZS1zIC5pbnB1dHtwYWRkaW5nLWlubGluZTowLjc1cmVtO3BhZGRpbmctYmxvY2s6MC4yNXJlbX0udGltZS1waWNrZXIuc2NhbGUtczpub3QoLnNob3ctbWVyaWRpZW0pIC5kZWxpbWl0ZXI6bGFzdC1jaGlsZHtwYWRkaW5nLWlubGluZS1lbmQ6MC43NXJlbX0udGltZS1waWNrZXIuc2NhbGUtbXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9LnRpbWUtcGlja2VyLnNjYWxlLW0gLmJ1dHRvbiwudGltZS1waWNrZXIuc2NhbGUtbSAuaW5wdXR7cGFkZGluZy1pbmxpbmU6MXJlbTtwYWRkaW5nLWJsb2NrOjAuNXJlbX0udGltZS1waWNrZXIuc2NhbGUtbTpub3QoLnNob3ctbWVyaWRpZW0pIC5kZWxpbWl0ZXI6bGFzdC1jaGlsZHtwYWRkaW5nLWlubGluZS1lbmQ6MXJlbX0udGltZS1waWNrZXIuc2NhbGUtbHtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSl9LnRpbWUtcGlja2VyLnNjYWxlLWwgLmJ1dHRvbiwudGltZS1waWNrZXIuc2NhbGUtbCAuaW5wdXR7cGFkZGluZy1pbmxpbmU6MS4yNXJlbTtwYWRkaW5nLWJsb2NrOjAuNzVyZW19LnRpbWUtcGlja2VyLnNjYWxlLWw6bm90KC5zaG93LW1lcmlkaWVtKSAuZGVsaW1pdGVyOmxhc3QtY2hpbGR7cGFkZGluZy1pbmxpbmUtZW5kOjEuMjVyZW19XCI7XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5jb25zdCBUaW1lUGlja2VyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJCbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyQmx1clwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJGb2N1c1wiLCA2KTtcbiAgICB0aGlzLmRlY3JlbWVudEhvdXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdIb3VyID0gIXRoaXMuaG91ciA/IDAgOiB0aGlzLmhvdXIgPT09IFwiMDBcIiA/IDIzIDogcGFyc2VJbnQodGhpcy5ob3VyKSAtIDE7XG4gICAgICB0aGlzLnNldFZhbHVlUGFydChcImhvdXJcIiwgbmV3SG91cik7XG4gICAgfTtcbiAgICB0aGlzLmRlY3JlbWVudE1lcmlkaWVtID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3TWVyaWRpZW0gPSB0aGlzLm1lcmlkaWVtID09PSBcIlBNXCIgPyBcIkFNXCIgOiBcIlBNXCI7XG4gICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1lcmlkaWVtXCIsIG5ld01lcmlkaWVtKTtcbiAgICB9O1xuICAgIHRoaXMuZGVjcmVtZW50TWludXRlT3JTZWNvbmQgPSAoa2V5KSA9PiB7XG4gICAgICBsZXQgbmV3VmFsdWU7XG4gICAgICBpZiAoaXNWYWxpZE51bWJlcih0aGlzW2tleV0pKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlQXNOdW1iZXIgPSBwYXJzZUludCh0aGlzW2tleV0pO1xuICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlQXNOdW1iZXIgPT09IDAgPyA1OSA6IHZhbHVlQXNOdW1iZXIgLSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gNTk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlUGFydChrZXksIG5ld1ZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuZGVjcmVtZW50TWludXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5kZWNyZW1lbnRNaW51dGVPclNlY29uZChcIm1pbnV0ZVwiKTtcbiAgICB9O1xuICAgIHRoaXMuZGVjcmVtZW50U2Vjb25kID0gKCkgPT4ge1xuICAgICAgdGhpcy5kZWNyZW1lbnRNaW51dGVPclNlY29uZChcInNlY29uZFwiKTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUVsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICB9O1xuICAgIHRoaXMuaG91ckRvd25CdXR0b25LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYnV0dG9uQWN0aXZhdGVkKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmRlY3JlbWVudEhvdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaG91cktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAobnVtYmVyS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIGNvbnN0IGtleUFzTnVtYmVyID0gcGFyc2VJbnQoa2V5KTtcbiAgICAgICAgbGV0IG5ld0hvdXI7XG4gICAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKHRoaXMuaG91cikpIHtcbiAgICAgICAgICBzd2l0Y2ggKHRoaXMuaG91ckN5Y2xlKSB7XG4gICAgICAgICAgICBjYXNlIFwiMTJcIjpcbiAgICAgICAgICAgICAgbmV3SG91ciA9XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VyID09PSBcIjAxXCIgJiYga2V5QXNOdW1iZXIgPj0gMCAmJiBrZXlBc051bWJlciA8PSAyXG4gICAgICAgICAgICAgICAgICA/IGAxJHtrZXlBc051bWJlcn1gXG4gICAgICAgICAgICAgICAgICA6IGtleUFzTnVtYmVyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyNFwiOlxuICAgICAgICAgICAgICBpZiAodGhpcy5ob3VyID09PSBcIjAxXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdIb3VyID0gYDEke2tleUFzTnVtYmVyfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ob3VyID09PSBcIjAyXCIgJiYga2V5QXNOdW1iZXIgPj0gMCAmJiBrZXlBc051bWJlciA8PSAzKSB7XG4gICAgICAgICAgICAgICAgbmV3SG91ciA9IGAyJHtrZXlBc051bWJlcn1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0hvdXIgPSBrZXlBc051bWJlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmV3SG91ciA9IGtleUFzTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwiaG91clwiLCBuZXdIb3VyKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcImhvdXJcIiwgbnVsbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRIb3VyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50SG91cigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5ob3VyVXBCdXR0b25LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYnV0dG9uQWN0aXZhdGVkKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmluY3JlbWVudEhvdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5jcmVtZW50TWVyaWRpZW0gPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdNZXJpZGllbSA9IHRoaXMubWVyaWRpZW0gPT09IFwiQU1cIiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwibWVyaWRpZW1cIiwgbmV3TWVyaWRpZW0pO1xuICAgIH07XG4gICAgdGhpcy5pbmNyZW1lbnRIb3VyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3SG91ciA9IGlzVmFsaWROdW1iZXIodGhpcy5ob3VyKVxuICAgICAgICA/IHRoaXMuaG91ciA9PT0gXCIyM1wiXG4gICAgICAgICAgPyAwXG4gICAgICAgICAgOiBwYXJzZUludCh0aGlzLmhvdXIpICsgMVxuICAgICAgICA6IDE7XG4gICAgICB0aGlzLnNldFZhbHVlUGFydChcImhvdXJcIiwgbmV3SG91cik7XG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudE1pbnV0ZU9yU2Vjb25kID0gKGtleSkgPT4ge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBpc1ZhbGlkTnVtYmVyKHRoaXNba2V5XSlcbiAgICAgICAgPyB0aGlzW2tleV0gPT09IFwiNTlcIlxuICAgICAgICAgID8gMFxuICAgICAgICAgIDogcGFyc2VJbnQodGhpc1trZXldKSArIDFcbiAgICAgICAgOiAwO1xuICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoa2V5LCBuZXdWYWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudE1pbnV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5jcmVtZW50TWludXRlT3JTZWNvbmQoXCJtaW51dGVcIik7XG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudFNlY29uZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5jcmVtZW50TWludXRlT3JTZWNvbmQoXCJzZWNvbmRcIik7XG4gICAgfTtcbiAgICB0aGlzLm1lcmlkaWVtRG93bkJ1dHRvbktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5idXR0b25BY3RpdmF0ZWQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuZGVjcmVtZW50TWVyaWRpZW0oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubWVyaWRpZW1LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1lcmlkaWVtXCIsIFwiQU1cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwXCI6XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJtZXJpZGllbVwiLCBcIlBNXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XG4gICAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1lcmlkaWVtXCIsIG51bGwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5pbmNyZW1lbnRNZXJpZGllbSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmRlY3JlbWVudE1lcmlkaWVtKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubWVyaWRpZW1VcEJ1dHRvbktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5idXR0b25BY3RpdmF0ZWQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50TWVyaWRpZW0oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubWludXRlRG93bkJ1dHRvbktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5idXR0b25BY3RpdmF0ZWQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuZGVjcmVtZW50TWludXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1pbnV0ZUtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAobnVtYmVyS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIGNvbnN0IGtleUFzTnVtYmVyID0gcGFyc2VJbnQoa2V5KTtcbiAgICAgICAgbGV0IG5ld01pbnV0ZTtcbiAgICAgICAgaWYgKGlzVmFsaWROdW1iZXIodGhpcy5taW51dGUpICYmIHRoaXMubWludXRlLnN0YXJ0c1dpdGgoXCIwXCIpKSB7XG4gICAgICAgICAgY29uc3QgbWludXRlQXNOdW1iZXIgPSBwYXJzZUludCh0aGlzLm1pbnV0ZSk7XG4gICAgICAgICAgbmV3TWludXRlID1cbiAgICAgICAgICAgIG1pbnV0ZUFzTnVtYmVyID4gbWF4VGVudGhGb3JNaW51dGVBbmRTZWNvbmRcbiAgICAgICAgICAgICAgPyBrZXlBc051bWJlclxuICAgICAgICAgICAgICA6IGAke21pbnV0ZUFzTnVtYmVyfSR7a2V5QXNOdW1iZXJ9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBuZXdNaW51dGUgPSBrZXlBc051bWJlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1pbnV0ZVwiLCBuZXdNaW51dGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwibWludXRlXCIsIG51bGwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50TWludXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50TWludXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1pbnV0ZVVwQnV0dG9uS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmJ1dHRvbkFjdGl2YXRlZChldmVudCkpIHtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRNaW51dGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2Vjb25kRG93bkJ1dHRvbktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5idXR0b25BY3RpdmF0ZWQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuZGVjcmVtZW50U2Vjb25kKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlY29uZEtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAobnVtYmVyS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIGNvbnN0IGtleUFzTnVtYmVyID0gcGFyc2VJbnQoa2V5KTtcbiAgICAgICAgbGV0IG5ld1NlY29uZDtcbiAgICAgICAgaWYgKGlzVmFsaWROdW1iZXIodGhpcy5zZWNvbmQpICYmIHRoaXMuc2Vjb25kLnN0YXJ0c1dpdGgoXCIwXCIpKSB7XG4gICAgICAgICAgY29uc3Qgc2Vjb25kQXNOdW1iZXIgPSBwYXJzZUludCh0aGlzLnNlY29uZCk7XG4gICAgICAgICAgbmV3U2Vjb25kID1cbiAgICAgICAgICAgIHNlY29uZEFzTnVtYmVyID4gbWF4VGVudGhGb3JNaW51dGVBbmRTZWNvbmRcbiAgICAgICAgICAgICAgPyBrZXlBc051bWJlclxuICAgICAgICAgICAgICA6IGAke3NlY29uZEFzTnVtYmVyfSR7a2V5QXNOdW1iZXJ9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBuZXdTZWNvbmQgPSBrZXlBc051bWJlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcInNlY29uZFwiLCBuZXdTZWNvbmQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwic2Vjb25kXCIsIG51bGwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50U2Vjb25kKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50U2Vjb25kKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlY29uZFVwQnV0dG9uS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmJ1dHRvbkFjdGl2YXRlZChldmVudCkpIHtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRTZWNvbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0SG91ckVsID0gKGVsKSA9PiAodGhpcy5ob3VyRWwgPSBlbCk7XG4gICAgdGhpcy5zZXRNZXJpZGllbUVsID0gKGVsKSA9PiAodGhpcy5tZXJpZGllbUVsID0gZWwpO1xuICAgIHRoaXMuc2V0TWludXRlRWwgPSAoZWwpID0+ICh0aGlzLm1pbnV0ZUVsID0gZWwpO1xuICAgIHRoaXMuc2V0U2Vjb25kRWwgPSAoZWwpID0+ICh0aGlzLnNlY29uZEVsID0gZWwpO1xuICAgIHRoaXMuc2V0VmFsdWUgPSAodmFsdWUsIGVtaXQgPSB0cnVlKSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZFRpbWUodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgfSA9IHBhcnNlVGltZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHsgZWZmZWN0aXZlTG9jYWxlOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBsb2NhbGl6ZWRIb3VyLCBsb2NhbGl6ZWRIb3VyU3VmZml4LCBsb2NhbGl6ZWRNaW51dGUsIGxvY2FsaXplZE1pbnV0ZVN1ZmZpeCwgbG9jYWxpemVkU2Vjb25kLCBsb2NhbGl6ZWRTZWNvbmRTdWZmaXgsIGxvY2FsaXplZE1lcmlkaWVtIH0gPSBsb2NhbGl6ZVRpbWVTdHJpbmdUb1BhcnRzKHsgdmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pO1xuICAgICAgICB0aGlzLmxvY2FsaXplZEhvdXIgPSBsb2NhbGl6ZWRIb3VyO1xuICAgICAgICB0aGlzLmxvY2FsaXplZEhvdXJTdWZmaXggPSBsb2NhbGl6ZWRIb3VyU3VmZml4O1xuICAgICAgICB0aGlzLmxvY2FsaXplZE1pbnV0ZSA9IGxvY2FsaXplZE1pbnV0ZTtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRNaW51dGVTdWZmaXggPSBsb2NhbGl6ZWRNaW51dGVTdWZmaXg7XG4gICAgICAgIHRoaXMubG9jYWxpemVkU2Vjb25kID0gbG9jYWxpemVkU2Vjb25kO1xuICAgICAgICB0aGlzLmxvY2FsaXplZFNlY29uZFN1ZmZpeCA9IGxvY2FsaXplZFNlY29uZFN1ZmZpeDtcbiAgICAgICAgdGhpcy5ob3VyID0gaG91cjtcbiAgICAgICAgdGhpcy5taW51dGUgPSBtaW51dGU7XG4gICAgICAgIHRoaXMuc2Vjb25kID0gc2Vjb25kO1xuICAgICAgICBpZiAobG9jYWxpemVkTWVyaWRpZW0pIHtcbiAgICAgICAgICB0aGlzLmxvY2FsaXplZE1lcmlkaWVtID0gbG9jYWxpemVkTWVyaWRpZW07XG4gICAgICAgICAgdGhpcy5tZXJpZGllbSA9IGdldE1lcmlkaWVtKHRoaXMuaG91cik7XG4gICAgICAgICAgY29uc3QgZm9ybWF0UGFydHMgPSBnZXRUaW1lUGFydHMoeyB2YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSk7XG4gICAgICAgICAgdGhpcy5tZXJpZGllbU9yZGVyID0gdGhpcy5nZXRNZXJpZGllbU9yZGVyKGZvcm1hdFBhcnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaG91ciA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxpemVkSG91ciA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxpemVkSG91clN1ZmZpeCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxpemVkTWVyaWRpZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZE1pbnV0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxpemVkTWludXRlU3VmZml4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRTZWNvbmQgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZFNlY29uZFN1ZmZpeCA9IG51bGw7XG4gICAgICAgIHRoaXMubWVyaWRpZW0gPSBudWxsO1xuICAgICAgICB0aGlzLm1pbnV0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2Vjb25kID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRWYWx1ZVBhcnQgPSAoa2V5LCB2YWx1ZSwgZW1pdCA9IHRydWUpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlTG9jYWxlOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9ID0gdGhpcztcbiAgICAgIGlmIChrZXkgPT09IFwibWVyaWRpZW1cIikge1xuICAgICAgICB0aGlzLm1lcmlkaWVtID0gdmFsdWU7XG4gICAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKHRoaXMuaG91cikpIHtcbiAgICAgICAgICBjb25zdCBob3VyQXNOdW1iZXIgPSBwYXJzZUludCh0aGlzLmhvdXIpO1xuICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBTVwiOlxuICAgICAgICAgICAgICBpZiAoaG91ckFzTnVtYmVyID49IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VyID0gZm9ybWF0VGltZVBhcnQoaG91ckFzTnVtYmVyIC0gMTIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBNXCI6XG4gICAgICAgICAgICAgIGlmIChob3VyQXNOdW1iZXIgPCAxMikge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91ciA9IGZvcm1hdFRpbWVQYXJ0KGhvdXJBc051bWJlciArIDEyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sb2NhbGl6ZWRIb3VyID0gbG9jYWxpemVUaW1lUGFydCh7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5ob3VyLFxuICAgICAgICAgICAgcGFydDogXCJob3VyXCIsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBudW1iZXJpbmdTeXN0ZW1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IGZvcm1hdFRpbWVQYXJ0KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB0aGlzW2Bsb2NhbGl6ZWQke2NhcGl0YWxpemUoa2V5KX1gXSA9IGxvY2FsaXplVGltZVBhcnQoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzW2tleV0sXG4gICAgICAgICAgcGFydDoga2V5LFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ob3VyICYmIHRoaXMubWludXRlKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAke3RoaXMuaG91cn06JHt0aGlzLm1pbnV0ZX1gO1xuICAgICAgICBpZiAodGhpcy5zaG93U2Vjb25kKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBgJHtuZXdWYWx1ZX06JHt0aGlzLnNlY29uZCA/PyBcIjAwXCJ9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2FsaXplZE1lcmlkaWVtID0gdGhpcy52YWx1ZVxuICAgICAgICA/IGxvY2FsaXplVGltZVN0cmluZ1RvUGFydHMoeyB2YWx1ZTogdGhpcy52YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSlcbiAgICAgICAgICA/LmxvY2FsaXplZE1lcmlkaWVtIHx8IG51bGxcbiAgICAgICAgOiBsb2NhbGl6ZVRpbWVQYXJ0KHsgdmFsdWU6IHRoaXMubWVyaWRpZW0sIHBhcnQ6IFwibWVyaWRpZW1cIiwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSk7XG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc3RlcCA9IDYwO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmhvdXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ob3VyQ3ljbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGl6ZWRIb3VyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkSG91clN1ZmZpeCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsaXplZE1lcmlkaWVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkTWludXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkTWludXRlU3VmZml4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkU2Vjb25kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkU2Vjb25kU3VmZml4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVyaWRpZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW51dGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWNvbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaG93U2Vjb25kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIHN0ZXBDaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVTaG93U2Vjb25kKCk7XG4gIH1cbiAgdmFsdWVXYXRjaGVyKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVXYXRjaGVyKCkge1xuICAgIHRoaXMudXBkYXRlTG9jYWxlKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRXZlbnQgTGlzdGVuZXJzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaG9zdEJsdXJIYW5kbGVyKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckJsdXIuZW1pdCgpO1xuICB9XG4gIGhvc3RGb2N1c0hhbmRsZXIoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyRm9jdXMuZW1pdCgpO1xuICB9XG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBkZWZhdWx0UHJldmVudGVkLCBrZXkgfSA9IGV2ZW50O1xuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5hY3RpdmVFbCkge1xuICAgICAgY2FzZSB0aGlzLmhvdXJFbDpcbiAgICAgICAgaWYgKGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUGFydChcIm1pbnV0ZVwiKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLm1pbnV0ZUVsOlxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgaWYgKHRoaXMuc3RlcCAhPT0gNjApIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJzZWNvbmRcIik7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmhvdXJDeWNsZSA9PT0gXCIxMlwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwibWVyaWRpZW1cIik7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5zZWNvbmRFbDpcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcIm1pbnV0ZVwiKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgaWYgKHRoaXMuaG91ckN5Y2xlID09PSBcIjEyXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtZXJpZGllbVwiKTtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB0aGlzLm1lcmlkaWVtRWw6XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgaWYgKHRoaXMuc3RlcCAhPT0gNjApIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJzZWNvbmRcIik7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtaW51dGVcIik7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbD8uZm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVwZGF0ZVNob3dTZWNvbmQoKSB7XG4gICAgdGhpcy5zaG93U2Vjb25kID0gdGhpcy5zdGVwIDwgNjA7XG4gIH1cbiAgYXN5bmMgZm9jdXNQYXJ0KHRhcmdldCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzW2Ake3RhcmdldCB8fCBcImhvdXJcIn1FbGBdPy5mb2N1cygpO1xuICB9XG4gIGJ1dHRvbkFjdGl2YXRlZChldmVudCkge1xuICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICBpZiAoa2V5ID09PSBcIiBcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQWN0aXZhdGlvbktleShrZXkpO1xuICB9XG4gIGdldE1lcmlkaWVtT3JkZXIoZm9ybWF0UGFydHMpIHtcbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmVmZmVjdGl2ZUxvY2FsZTtcbiAgICBjb25zdCBpc1JUTEtpbmQgPSBsb2NhbGUgPT09IFwiYXJcIiB8fCBsb2NhbGUgPT09IFwiaGVcIjtcbiAgICBpZiAoZm9ybWF0UGFydHMgJiYgIWlzUlRMS2luZCkge1xuICAgICAgY29uc3QgaW5kZXggPSBmb3JtYXRQYXJ0cy5maW5kSW5kZXgoKHBhcnRzKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJ0cy52YWx1ZSA9PT0gdGhpcy5sb2NhbGl6ZWRNZXJpZGllbTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuICB1cGRhdGVMb2NhbGUoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICAgIHRoaXMuaG91ckN5Y2xlID0gZ2V0TG9jYWxlSG91ckN5Y2xlKHRoaXMuZWZmZWN0aXZlTG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCBmYWxzZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlTG9jYWxlKCk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlU2hvd1NlY29uZCgpO1xuICAgIHRoaXMubWVyaWRpZW1PcmRlciA9IHRoaXMuZ2V0TWVyaWRpZW1PcmRlcihnZXRUaW1lUGFydHMoe1xuICAgICAgdmFsdWU6IFwiMDowMDowMFwiLFxuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW1cbiAgICB9KSk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaG91cklzTnVtYmVyID0gaXNWYWxpZE51bWJlcih0aGlzLmhvdXIpO1xuICAgIGNvbnN0IGljb25TY2FsZSA9IHRoaXMuc2NhbGUgPT09IFwic1wiIHx8IHRoaXMuc2NhbGUgPT09IFwibVwiID8gXCJzXCIgOiBcIm1cIjtcbiAgICBjb25zdCBtaW51dGVJc051bWJlciA9IGlzVmFsaWROdW1iZXIodGhpcy5taW51dGUpO1xuICAgIGNvbnN0IHNlY29uZElzTnVtYmVyID0gaXNWYWxpZE51bWJlcih0aGlzLnNlY29uZCk7XG4gICAgY29uc3Qgc2hvd01lcmlkaWVtID0gdGhpcy5ob3VyQ3ljbGUgPT09IFwiMTJcIjtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLnRpbWVQaWNrZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLnNob3dNZXJpZGllbV06IHNob3dNZXJpZGllbSxcbiAgICAgICAgW0NTUy5zaG93U2Vjb25kXTogdGhpcy5zaG93U2Vjb25kLFxuICAgICAgICBbQ1NTW2BzY2FsZS0ke3RoaXMuc2NhbGV9YF1dOiB0cnVlXG4gICAgICB9LCBkaXI6IFwibHRyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29sdW1uLCByb2xlOiBcImdyb3VwXCIgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5ob3VyVXAsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25Ib3VyVXBdOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvblRvcExlZnRdOiB0cnVlXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmluY3JlbWVudEhvdXIsIG9uS2V5RG93bjogdGhpcy5ob3VyVXBCdXR0b25LZXlEb3duSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLXVwXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmhvdXIsIFwiYXJpYS12YWx1ZW1heFwiOiBcIjIzXCIsIFwiYXJpYS12YWx1ZW1pblwiOiBcIjFcIiwgXCJhcmlhLXZhbHVlbm93XCI6IChob3VySXNOdW1iZXIgJiYgcGFyc2VJbnQodGhpcy5ob3VyKSkgfHwgXCIwXCIsIFwiYXJpYS12YWx1ZXRleHRcIjogdGhpcy5ob3VyLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmlucHV0XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5ob3VyXTogdHJ1ZVxuICAgICAgfSwgb25Gb2N1czogdGhpcy5mb2N1c0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5ob3VyS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwic3BpbmJ1dHRvblwiLCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEhvdXJFbCB9LCB0aGlzLmxvY2FsaXplZEhvdXIgfHwgXCItLVwiKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5ob3VyRG93biwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkhvdXJEb3duXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25Cb3R0b21MZWZ0XTogdHJ1ZVxuICAgICAgfSwgb25DbGljazogdGhpcy5kZWNyZW1lbnRIb3VyLCBvbktleURvd246IHRoaXMuaG91ckRvd25CdXR0b25LZXlEb3duSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IGljb25TY2FsZSB9KSkpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuZGVsaW1pdGVyIH0sIHRoaXMubG9jYWxpemVkSG91clN1ZmZpeCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbHVtbiwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubWludXRlVXAsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25NaW51dGVVcF06IHRydWVcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuaW5jcmVtZW50TWludXRlLCBvbktleURvd246IHRoaXMubWludXRlVXBCdXR0b25LZXlEb3duSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiwgdGFiSW5kZXg6IC0xIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tdXBcIiwgc2NhbGU6IGljb25TY2FsZSB9KSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubWludXRlLCBcImFyaWEtdmFsdWVtYXhcIjogXCIxMlwiLCBcImFyaWEtdmFsdWVtaW5cIjogXCIxXCIsIFwiYXJpYS12YWx1ZW5vd1wiOiAobWludXRlSXNOdW1iZXIgJiYgcGFyc2VJbnQodGhpcy5taW51dGUpKSB8fCBcIjBcIiwgXCJhcmlhLXZhbHVldGV4dFwiOiB0aGlzLm1pbnV0ZSwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pbnB1dF06IHRydWUsXG4gICAgICAgIFtDU1MubWludXRlXTogdHJ1ZVxuICAgICAgfSwgb25Gb2N1czogdGhpcy5mb2N1c0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5taW51dGVLZXlEb3duSGFuZGxlciwgcm9sZTogXCJzcGluYnV0dG9uXCIsIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0TWludXRlRWwgfSwgdGhpcy5sb2NhbGl6ZWRNaW51dGUgfHwgXCItLVwiKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5taW51dGVEb3duLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uTWludXRlRG93bl06IHRydWVcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuZGVjcmVtZW50TWludXRlLCBvbktleURvd246IHRoaXMubWludXRlRG93bkJ1dHRvbktleURvd25IYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogaWNvblNjYWxlIH0pKSksIHRoaXMuc2hvd1NlY29uZCAmJiBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuZGVsaW1pdGVyIH0sIHRoaXMubG9jYWxpemVkTWludXRlU3VmZml4KSwgdGhpcy5zaG93U2Vjb25kICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb2x1bW4sIHJvbGU6IFwiZ3JvdXBcIiB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLnNlY29uZFVwLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uU2Vjb25kVXBdOiB0cnVlXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmluY3JlbWVudFNlY29uZCwgb25LZXlEb3duOiB0aGlzLnNlY29uZFVwQnV0dG9uS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogaWNvblNjYWxlIH0pKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5zZWNvbmQsIFwiYXJpYS12YWx1ZW1heFwiOiBcIjU5XCIsIFwiYXJpYS12YWx1ZW1pblwiOiBcIjBcIiwgXCJhcmlhLXZhbHVlbm93XCI6IChzZWNvbmRJc051bWJlciAmJiBwYXJzZUludCh0aGlzLnNlY29uZCkpIHx8IFwiMFwiLCBcImFyaWEtdmFsdWV0ZXh0XCI6IHRoaXMuc2Vjb25kLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmlucHV0XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5zZWNvbmRdOiB0cnVlXG4gICAgICB9LCBvbkZvY3VzOiB0aGlzLmZvY3VzSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLnNlY29uZEtleURvd25IYW5kbGVyLCByb2xlOiBcInNwaW5idXR0b25cIiwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRTZWNvbmRFbCB9LCB0aGlzLmxvY2FsaXplZFNlY29uZCB8fCBcIi0tXCIpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLnNlY29uZERvd24sIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25TZWNvbmREb3duXTogdHJ1ZVxuICAgICAgfSwgb25DbGljazogdGhpcy5kZWNyZW1lbnRTZWNvbmQsIG9uS2V5RG93bjogdGhpcy5zZWNvbmREb3duQnV0dG9uS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpKSksIHRoaXMubG9jYWxpemVkU2Vjb25kU3VmZml4ICYmIChoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuZGVsaW1pdGVyIH0sIHRoaXMubG9jYWxpemVkU2Vjb25kU3VmZml4KSksIHNob3dNZXJpZGllbSAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuY29sdW1uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5tZXJpZGllbVN0YXJ0XTogdGhpcy5tZXJpZGllbU9yZGVyID09PSAwXG4gICAgICB9LCByb2xlOiBcImdyb3VwXCIgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5tZXJpZGllbVVwLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uTWVyaWRpZW1VcF06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uVG9wUmlnaHRdOiB0cnVlXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmluY3JlbWVudE1lcmlkaWVtLCBvbktleURvd246IHRoaXMubWVyaWRpZW1VcEJ1dHRvbktleURvd25IYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tdXBcIiwgc2NhbGU6IGljb25TY2FsZSB9KSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubWVyaWRpZW0sIFwiYXJpYS12YWx1ZW1heFwiOiBcIjJcIiwgXCJhcmlhLXZhbHVlbWluXCI6IFwiMVwiLCBcImFyaWEtdmFsdWVub3dcIjogKHRoaXMubWVyaWRpZW0gPT09IFwiUE1cIiAmJiBcIjJcIikgfHwgXCIxXCIsIFwiYXJpYS12YWx1ZXRleHRcIjogdGhpcy5tZXJpZGllbSwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pbnB1dF06IHRydWUsXG4gICAgICAgIFtDU1MubWVyaWRpZW1dOiB0cnVlXG4gICAgICB9LCBvbkZvY3VzOiB0aGlzLmZvY3VzSGFuZGxlciwgb25LZXlEb3duOiB0aGlzLm1lcmlkaWVtS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwic3BpbmJ1dHRvblwiLCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldE1lcmlkaWVtRWwgfSwgdGhpcy5sb2NhbGl6ZWRNZXJpZGllbSB8fCBcIi0tXCIpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLm1lcmlkaWVtRG93biwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbk1lcmlkaWVtRG93bl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uQm90dG9tUmlnaHRdOiB0cnVlXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmRlY3JlbWVudE1lcmlkaWVtLCBvbktleURvd246IHRoaXMubWVyaWRpZW1Eb3duQnV0dG9uS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpKSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic3RlcFwiOiBbXCJzdGVwQ2hhbmdlXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVXYXRjaGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZVdhdGNoZXJcIl1cbiAgfTsgfVxufTtcblRpbWVQaWNrZXIuc3R5bGUgPSB0aW1lUGlja2VyQ3NzO1xuXG5leHBvcnQgeyBJbnB1dFRpbWVQaWNrZXIgYXMgSSwgVGltZVBpY2tlciBhcyBULCBkYXlqcyBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuZXhwb3J0IHsgSSBhcyBjYWxjaXRlX2lucHV0X3RpbWVfcGlja2VyLCBUIGFzIGNhbGNpdGVfdGltZV9waWNrZXIgfSBmcm9tICcuL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXIuY2FsY2l0ZS10aW1lLXBpY2tlci04ZTcyMGVlNC5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0ICcuL2Zvcm0tNDQ1MzAwMDEuanMnO1xuaW1wb3J0ICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgJy4va2V5LTMzODlkODcwLmpzJztcbmltcG9ydCAnLi9sYWJlbC01OWM5ZDQ3Mi5qcyc7XG5pbXBvcnQgJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuaW1wb3J0ICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcbmltcG9ydCAnLi9mb2N1c1RyYXBDb21wb25lbnQtYjNhMjlkOWMuanMnO1xuaW1wb3J0ICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=