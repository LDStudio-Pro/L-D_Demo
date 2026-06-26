/* @ds-bundle: {"format":3,"namespace":"PolloCamperoDesignSystem_af736f","components":[{"name":"Callout","sourcePath":"components/brand/Callout.jsx"},{"name":"Doodle","sourcePath":"components/brand/Doodle.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Mascot","sourcePath":"components/brand/Mascot.jsx"},{"name":"PriceTag","sourcePath":"components/brand/PriceTag.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Callout.jsx":"0d7147c1eda6","components/brand/Doodle.jsx":"c6025cf727ff","components/brand/Eyebrow.jsx":"bbed65042bf8","components/brand/Mascot.jsx":"7ffdc6ba6562","components/brand/PriceTag.jsx":"71e8afe04029","components/core/Badge.jsx":"19cd62335147","components/core/Button.jsx":"b1bbe6e7e453","components/core/Card.jsx":"d880d13302a5","components/forms/Checkbox.jsx":"6c75d5d60666","components/forms/Input.jsx":"37cf3fd5f318","components/forms/Select.jsx":"cea6b513c1ba","components/forms/Switch.jsx":"509c41d9c550","components/navigation/Tabs.jsx":"036d9abb579f","ui_kits/website/HomeScreen.jsx":"b9c1728514c9","ui_kits/website/MenuScreen.jsx":"9ec0aef99a5b","ui_kits/website/RewardsScreen.jsx":"cb3008543dd1","ui_kits/website/parts.jsx":"5dd830e95f92"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PolloCamperoDesignSystem_af736f = window.PolloCamperoDesignSystem_af736f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Friendly notice / callout block with the maroon ink outline and a
 * leading emoji or icon. Tones tint the background softly.
 */
function Callout({
  children,
  title,
  icon = "🐔",
  tone = "yellow",
  style,
  ...rest
}) {
  const tones = {
    yellow: {
      bg: "var(--pc-yellow-100)",
      bar: "var(--pc-yellow)"
    },
    orange: {
      bg: "var(--pc-orange-100)",
      bar: "var(--pc-orange)"
    },
    lime: {
      bg: "var(--pc-lime-100)",
      bar: "var(--pc-lime)"
    },
    cream: {
      bg: "var(--pc-bone)",
      bar: "var(--pc-maroon)"
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      fontFamily: "var(--font-body)",
      background: tones.bg,
      border: "2.5px solid var(--pc-maroon)",
      borderLeft: `8px solid ${tones.bar}`,
      borderRadius: "var(--radius-md)",
      padding: "16px 18px",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.5rem",
      lineHeight: 1,
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: "1rem",
      color: "var(--pc-maroon)",
      marginBottom: 3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.92rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "var(--pc-ink)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Callout.jsx", error: String((e && e.message) || e) }); }

// components/brand/Doodle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Renders a hand-drawn orange brand doodle (divider, underline, accent).
 * Builds the path from `name` + `base`, or pass an explicit `src`.
 */
function Doodle({
  name = "squiggle-wave",
  base = "assets/doodles",
  src,
  height = 24,
  alt = "",
  rotate = 0,
  style,
  ...rest
}) {
  const resolved = src || `${base.replace(/\/$/, "")}/${name}.png`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: resolved,
    alt: alt,
    role: alt ? undefined : "presentation",
    style: {
      height,
      width: "auto",
      display: "block",
      objectFit: "contain",
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Doodle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Doodle.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Uppercase orange kicker/eyebrow with an optional hand-drawn underline accent
 * drawn in pure CSS (no asset dependency).
 */
function Eyebrow({
  children,
  color = "var(--pc-orange)",
  underline = false,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "0.8rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color,
      lineHeight: 1.2
    }
  }, children), underline && /*#__PURE__*/React.createElement("svg", {
    width: "84",
    height: "9",
    viewBox: "0 0 84 9",
    fill: "none",
    style: {
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5.5C18 2.5 40 1.5 60 3.5C70 4.5 78 5 82 6.5",
    stroke: color,
    strokeWidth: "3.5",
    strokeLinecap: "round"
  })));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Mascot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Renders Pollito, the brand mascot. By default it builds the path from
 * `pose` + `base`; pass `src` to point anywhere. Copy the mascot PNGs into
 * your project and set `base` to their folder.
 */
const POSES = {
  full: "pollito-full.png",
  circle: "pollito-circle.png",
  emoji: "pollito-emoji.png",
  cool: "pollito-emoji-cool.png"
};
function Mascot({
  pose = "circle",
  base = "assets/mascot",
  src,
  size = 120,
  alt = "Pollito, the Pollo Campero mascot",
  style,
  ...rest
}) {
  const resolved = src || `${base.replace(/\/$/, "")}/${POSES[pose] || POSES.circle}`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: resolved,
    alt: alt,
    style: {
      width: size,
      height: "auto",
      display: "block",
      objectFit: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Mascot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Mascot.jsx", error: String((e && e.message) || e) }); }

// components/brand/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tilted "sticker" price tag — the playful promo treatment seen across
 * Campero menus and offers. Pure CSS, no asset dependency.
 */
function PriceTag({
  price = "$5.99",
  caption,
  tone = "orange",
  rotate = -6,
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    orange: {
      bg: "var(--pc-orange)",
      fg: "#fff"
    },
    yellow: {
      bg: "var(--pc-yellow)",
      fg: "var(--pc-maroon)"
    },
    lime: {
      bg: "var(--pc-lime)",
      fg: "var(--pc-maroon-800)"
    },
    maroon: {
      bg: "var(--pc-maroon)",
      fg: "var(--pc-cream)"
    }
  }[tone] || {};
  const sizes = {
    sm: {
      price: "1.4rem",
      cap: "0.6rem",
      pad: "8px 14px"
    },
    md: {
      price: "2.1rem",
      cap: "0.7rem",
      pad: "12px 20px"
    },
    lg: {
      price: "3rem",
      cap: "0.85rem",
      pad: "16px 28px"
    }
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      background: tones.bg,
      color: tones.fg,
      border: "2.5px solid var(--pc-maroon)",
      borderRadius: "var(--radius-lg)",
      padding: sizes.pad,
      transform: `rotate(${rotate}deg)`,
      boxShadow: "4px 4px 0 var(--pc-maroon)",
      lineHeight: 1,
      ...style
    }
  }, rest), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: sizes.cap,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: 3,
      opacity: 0.95
    }
  }, caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: sizes.price,
      fontStyle: "italic"
    }
  }, price));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category pill. Great for "NEW", "HOT", "REWARDS", spice level, etc.
 */
function Badge({
  children,
  tone = "orange",
  size = "md",
  outline = false,
  iconLeft = null,
  style,
  ...rest
}) {
  const tones = {
    orange: {
      bg: "var(--pc-orange)",
      fg: "#fff"
    },
    yellow: {
      bg: "var(--pc-yellow)",
      fg: "var(--pc-maroon)"
    },
    lime: {
      bg: "var(--pc-lime)",
      fg: "var(--pc-maroon-800)"
    },
    maroon: {
      bg: "var(--pc-maroon)",
      fg: "var(--pc-cream)"
    },
    grape: {
      bg: "var(--pc-grape)",
      fg: "#fff"
    },
    cream: {
      bg: "var(--pc-bone)",
      fg: "var(--pc-maroon)"
    }
  }[tone] || {};
  const sizes = {
    sm: {
      padding: "3px 9px",
      font: "0.62rem"
    },
    md: {
      padding: "5px 12px",
      font: "0.72rem"
    },
    lg: {
      padding: "7px 16px",
      font: "0.84rem"
    }
  }[size];
  const s = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4em",
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: sizes.font,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    lineHeight: 1,
    color: outline ? tones.bg : tones.fg,
    background: outline ? "transparent" : tones.bg,
    border: `2px solid ${tones.bg}`,
    borderRadius: "var(--radius-pill)",
    padding: sizes.padding,
    whiteSpace: "nowrap",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pollo Campero primary action control.
 * Chunky, rounded, confident — the brand's "sticker" personality.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pop = false,
  block = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const palette = {
    primary: {
      bg: "var(--pc-orange)",
      fg: "#fff",
      line: "var(--pc-maroon)"
    },
    secondary: {
      bg: "var(--pc-yellow)",
      fg: "var(--pc-maroon)",
      line: "var(--pc-maroon)"
    },
    lime: {
      bg: "var(--pc-lime)",
      fg: "var(--pc-maroon-800)",
      line: "var(--pc-maroon)"
    },
    ink: {
      bg: "var(--pc-maroon)",
      fg: "var(--pc-cream)",
      line: "var(--pc-maroon)"
    },
    ghost: {
      bg: "transparent",
      fg: "var(--pc-maroon)",
      line: "var(--pc-maroon)"
    }
  }[variant] || {};
  const sizing = {
    sm: {
      padding: "8px 16px",
      font: "0.82rem",
      radius: "var(--radius-pill)"
    },
    md: {
      padding: "12px 26px",
      font: "0.95rem",
      radius: "var(--radius-pill)"
    },
    lg: {
      padding: "17px 38px",
      font: "1.1rem",
      radius: "var(--radius-pill)"
    }
  }[size];
  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5em",
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: sizing.font,
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    lineHeight: 1,
    color: palette.fg,
    background: palette.bg,
    border: `2.5px solid ${palette.line}`,
    borderRadius: sizing.radius,
    padding: sizing.padding,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    boxShadow: pop ? "4px 4px 0 var(--pc-maroon)" : "none",
    transition: "transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)",
    WebkitTapHighlightColor: "transparent",
    ...style
  };
  const onDown = e => {
    if (!disabled && pop) {
      e.currentTarget.style.transform = "translate(3px,3px)";
      e.currentTarget.style.boxShadow = "1px 1px 0 var(--pc-maroon)";
    }
  };
  const onUp = e => {
    if (!disabled && pop) {
      e.currentTarget.style.transform = "translate(0,0)";
      e.currentTarget.style.boxShadow = "4px 4px 0 var(--pc-maroon)";
    }
  };
  const onEnter = e => {
    if (!disabled) {
      e.currentTarget.style.filter = "brightness(1.05)";
      if (!pop) e.currentTarget.style.transform = "translateY(-1px)";
    }
  };
  const onLeave = e => {
    if (!disabled) {
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.transform = "translate(0,0)";
      onUp(e);
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Branded surface container. Optional ink outline + sticker-pop shadow,
 * optional colored/textured header strip.
 */
function Card({
  children,
  ink = false,
  pop = false,
  pad = true,
  accent,
  // "orange" | "yellow" | "lime" | "maroon" — top accent bar
  hoverable = false,
  style,
  ...rest
}) {
  const accentColor = {
    orange: "var(--pc-orange)",
    yellow: "var(--pc-yellow)",
    lime: "var(--pc-lime)",
    maroon: "var(--pc-maroon)"
  }[accent];
  const s = {
    position: "relative",
    background: "var(--pc-white)",
    borderRadius: "var(--radius-lg)",
    border: ink ? "2.5px solid var(--pc-maroon)" : "1.5px solid var(--color-border)",
    boxShadow: pop ? "6px 6px 0 var(--pc-maroon)" : "var(--shadow-md)",
    overflow: "hidden",
    transition: "transform var(--dur-base) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-out)",
    ...style
  };
  const onEnter = e => {
    if (hoverable) {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = pop ? "8px 10px 0 var(--pc-maroon)" : "var(--shadow-lg)";
    }
  };
  const onLeave = e => {
    if (hoverable) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = pop ? "6px 6px 0 var(--pc-maroon)" : "var(--shadow-md)";
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), accent && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      background: accentColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad ? "var(--pad-card)" : 0
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with a maroon ink box and orange check. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  ...rest
}) {
  const cbId = id || (label ? "cb-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 24,
      height: 24,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: "2.5px solid var(--pc-maroon)",
      background: checked ? "var(--pc-orange)" : "var(--pc-white)",
      display: "grid",
      placeItems: "center",
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.95rem",
      fontWeight: 600,
      color: "var(--pc-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      display: "none"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with the brand's friendly ink-outline-on-focus treatment.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--color-danger)" : "var(--color-border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "0.78rem",
      fontWeight: 800,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--pc-maroon)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "flex",
      color: "var(--pc-maroon-300)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: "1rem",
      fontWeight: 500,
      color: "var(--pc-ink)",
      background: "var(--pc-white)",
      border: `2px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: iconLeft ? "12px 16px 12px 40px" : "12px 16px",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--pc-orange)";
      e.target.style.boxShadow = "0 0 0 4px var(--pc-orange-100)";
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      e.target.style.borderColor = borderColor;
      e.target.style.boxShadow = "none";
      rest.onBlur && rest.onBlur(e);
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.74rem",
      fontWeight: 600,
      color: error ? "var(--color-danger)" : "var(--pc-maroon-300)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled in the brand's ink-outline look. */
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  id,
  style,
  ...rest
}) {
  const selId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: "0.78rem",
      fontWeight: 800,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--pc-maroon)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    style: {
      width: "100%",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: "1rem",
      fontWeight: 600,
      color: "var(--pc-ink)",
      background: "var(--pc-white)",
      border: "2px solid var(--color-border)",
      borderRadius: "var(--radius-md)",
      padding: "12px 42px 12px 16px",
      cursor: "pointer",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-out)",
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--pc-orange)";
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--color-border)";
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.74rem",
      fontWeight: 600,
      color: "var(--pc-maroon-300)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill toggle switch in brand colors. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  ...rest
}) {
  const switchId = id || (label ? "sw-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 46,
      height: 26,
      borderRadius: 999,
      flex: "none",
      background: checked ? "var(--pc-orange)" : "var(--pc-sand)",
      border: "2px solid var(--pc-maroon)",
      position: "relative",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 1,
      left: checked ? 21 : 1,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--pc-white)",
      border: "2px solid var(--pc-maroon)",
      boxSizing: "border-box",
      transition: "left var(--dur-base) var(--ease-bounce)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.95rem",
      fontWeight: 600,
      color: "var(--pc-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: switchId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      display: "none"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Pill tab bar. Controlled via value/onChange or self-managed. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(tabs[0]?.value ?? tabs[0]);
  const active = value !== undefined ? value : internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 5,
      background: "var(--pc-bone)",
      borderRadius: "var(--radius-pill)",
      border: "2px solid var(--pc-maroon)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, tabs.map(t => {
    const tab = typeof t === "string" ? {
      value: t,
      label: t
    } : t;
    const on = tab.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      onClick: () => select(tab.value),
      style: {
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: "0.85rem",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
        color: on ? "#fff" : "var(--pc-maroon)",
        background: on ? "var(--pc-orange)" : "transparent",
        borderRadius: "var(--radius-pill)",
        padding: "9px 20px",
        transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)"
      }
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* Home screen — recreation of the us.campero.com landing experience. */

function HomeScreen({
  go
}) {
  const A = window.PC_A;
  const Btn = window.PCBtn,
    Squiggle = window.PCSquiggle;
  const tiles = [{
    t: "New Gift Card",
    s: "Show you care the flavorful way.",
    tone: "var(--pc-yellow)",
    fg: "var(--pc-maroon)"
  }, {
    t: "We ♥ St. Jude",
    s: "Because we are #CamperoFamily.",
    tone: "var(--pc-orange)",
    fg: "#fff"
  }, {
    t: "MMMM, Rewards!",
    s: "Sign up for insider info & a $10 reward.",
    tone: "var(--pc-lime)",
    fg: "var(--pc-maroon-800)"
  }, {
    t: "We Cater Any Event",
    s: "Any event, any size.",
    tone: "var(--pc-grape)",
    fg: "#fff"
  }];
  const news = [{
    tag: "New",
    title: "Mini Churros are here. Big flavor, small bites.",
    img: "food-flan"
  }, {
    tag: "Back",
    title: "The Deluxe Chicken Sandwiches are back.",
    img: "food-maccheese"
  }, {
    tag: "Deal",
    title: "Our legendary hot green sauce for just $3.99.",
    img: "food-fries"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundImage: `url(${window.ASSET(`textures/wood-white.png`)})`,
      backgroundSize: "cover",
      borderBottom: "2.5px solid var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: 24,
      alignItems: "center",
      padding: "56px 24px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: ".82rem",
      textTransform: "uppercase",
      letterSpacing: ".09em",
      color: "var(--pc-orange)",
      marginBottom: 12
    }
  }, "Award-winning chicken"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 64,
      lineHeight: .92,
      letterSpacing: "-.01em",
      textTransform: "uppercase",
      color: "var(--pc-maroon)",
      margin: "0 0 6px"
    }
  }, "Skip the line", /*#__PURE__*/React.createElement("br", null), "& order ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pc-orange)"
    }
  }, "online")), /*#__PURE__*/React.createElement(Squiggle, {
    name: "underline-thick",
    h: 12,
    style: {
      display: "block",
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--pc-ink)",
      maxWidth: 460,
      margin: "0 0 26px"
    }
  }, "Fried & grilled chicken, deluxe sandwiches, and flavorful meals \u2014 citrus-marinated and made the Campero way since 1971."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    size: "lg",
    pop: true,
    onClick: () => go("menu")
  }, "Order online"), /*#__PURE__*/React.createElement(Btn, {
    kind: "secondary",
    size: "lg",
    onClick: () => go("menu")
  }, "View menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 22,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-marker)",
      fontSize: 22,
      color: "var(--pc-amber)"
    }
  }, "Get the app \u2192"), ["App Store", "Google Play"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      background: "var(--pc-maroon)",
      color: "#fff",
      borderRadius: 8,
      padding: "7px 13px",
      fontSize: ".72rem",
      fontWeight: 700
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "var(--pc-yellow)",
      border: "3px solid var(--pc-maroon)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`mascot/pollito-full.png`),
    alt: "Pollito",
    style: {
      position: "relative",
      height: 360,
      filter: "drop-shadow(8px 10px 0 rgba(94,42,43,.25))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      right: 10,
      transform: "rotate(8deg)",
      background: "var(--pc-orange)",
      color: "#fff",
      border: "2.5px solid var(--pc-maroon)",
      borderRadius: 16,
      padding: "10px 16px",
      textAlign: "center",
      boxShadow: "4px 4px 0 var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".62rem",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Combo from"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "2rem",
      fontWeight: 900,
      fontStyle: "italic",
      lineHeight: 1
    }
  }, "$12"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pc-orange)",
      borderBottom: "2.5px solid var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 18,
      padding: "16px 24px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      color: "#fff"
    }
  }, "GOOOOOOL BOX"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 600,
      fontSize: 15
    }
  }, "3 pc chicken \xB7 4 nuggets \xB7 fries \xB7 drink \xB7 dip \u2014"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--pc-yellow)",
      color: "var(--pc-maroon)",
      fontWeight: 900,
      fontStyle: "italic",
      fontSize: 22,
      borderRadius: 10,
      padding: "4px 14px",
      border: "2px solid var(--pc-maroon)"
    }
  }, "$12"), /*#__PURE__*/React.createElement(Btn, {
    kind: "ink",
    size: "sm",
    onClick: () => go("menu")
  }, "Get it"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "52px 24px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.t,
    className: "pc-tile",
    style: {
      background: t.tone,
      color: t.fg,
      border: "2.5px solid var(--pc-maroon)",
      borderRadius: 22,
      padding: "22px 20px",
      minHeight: 150,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "pointer",
      boxShadow: "5px 5px 0 var(--pc-maroon)"
    },
    onClick: () => go("rewards")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 21,
      lineHeight: 1,
      textTransform: "uppercase"
    }
  }, t.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      opacity: .92
    }
  }, t.s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      margin: "48px 0 0",
      backgroundImage: `url(${window.ASSET(`textures/wood-green.png`)})`,
      backgroundSize: "cover",
      borderTop: "2.5px solid var(--pc-maroon)",
      borderBottom: "2.5px solid var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 30,
      padding: "36px 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`mascot/pollito-emoji.png`),
    alt: "",
    style: {
      height: 110
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 42,
      color: "#fff",
      lineHeight: .85
    }
  }, "\xA1Bienvenido a la familia!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 30,
      textTransform: "uppercase",
      color: "var(--pc-maroon)",
      lineHeight: 1
    }
  }, "Join Campero Rewards & get $10")), /*#__PURE__*/React.createElement(Btn, {
    kind: "secondary",
    size: "lg",
    pop: true,
    onClick: () => go("rewards")
  }, "Join free"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "52px 24px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Squiggle, {
    name: "quote-pair",
    h: 26
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 34,
      textTransform: "uppercase",
      color: "var(--pc-maroon)",
      margin: 0
    }
  }, "Latest News"), /*#__PURE__*/React.createElement(Squiggle, {
    name: "quote-pair",
    h: 26,
    style: {
      transform: "scaleX(-1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, news.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.title,
    className: "pc-tile",
    style: {
      background: "#fff",
      border: "2px solid var(--pc-sand)",
      borderRadius: 18,
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pc-bone)",
      height: 150,
      display: "grid",
      placeItems: "center",
      borderBottom: "2px solid var(--pc-sand)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`illustrations/${n.img}.png`),
    alt: "",
    style: {
      height: 110
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--pc-orange)",
      color: "#fff",
      fontSize: ".62rem",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      borderRadius: 999,
      padding: "3px 10px"
    }
  }, n.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: "var(--pc-maroon)",
      margin: "10px 0 4px",
      lineHeight: 1.15
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".8rem",
      fontWeight: 700,
      color: "var(--pc-orange)"
    }
  }, "Read more \u2192")))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuScreen.jsx
try { (() => {
/* Menu screen — category tabs, product grid, add-to-cart. */

const PC_MENU = {
  "Fried Chicken": [{
    n: "2 Pc Fried Chicken Combo",
    d: "Two pieces, one side, a roll or tortillas.",
    p: 8.99,
    img: "line-chickens",
    hot: false
  }, {
    n: "8 Pc Family Meal",
    d: "8 pieces, 2 family sides, 4 tortillas.",
    p: 24.99,
    img: "line-bag",
    tag: "Feeds 4"
  }, {
    n: "Campero Nuggets (8 pc)",
    d: "Crispy white-meat bites with dipping sauce.",
    p: 5.49,
    img: "line-nuggets"
  }, {
    n: "12 Pc Bucket",
    d: "All the crispy, citrus-marinated goodness.",
    p: 21.99,
    img: "line-chickens",
    tag: "Share"
  }],
  "Grilled Chicken": [{
    n: "2 Pc Grilled Combo",
    d: "Flame-grilled, one side, roll or tortillas.",
    p: 8.99,
    img: "line-chickens"
  }, {
    n: "Grilled Family Meal",
    d: "8 grilled pieces, 2 sides, tortillas.",
    p: 25.99,
    img: "line-bag",
    tag: "Feeds 4"
  }],
  "Sandwiches": [{
    n: "Classic Chicken Sandwich",
    d: "Crispy fillet, pickles, brioche bun.",
    p: 5.99,
    img: "line-fries"
  }, {
    n: "Spicy Chicken Sandwich",
    d: "Turn up the heat. Same crispy fillet.",
    p: 5.99,
    img: "line-fries",
    hot: true
  }, {
    n: "The Buffalo Slaw Deluxe",
    d: "Buffalo-tossed fillet topped with slaw.",
    p: 7.49,
    img: "line-fries",
    tag: "Back!"
  }, {
    n: "The Queso Bacon Deluxe",
    d: "Fried chicken, bacon & melty queso.",
    p: 7.99,
    img: "line-fries",
    tag: "Back!"
  }],
  "Sides": [{
    n: "Campero Fries",
    d: "Golden, seasoned, crave-able.",
    p: 2.99,
    img: "food-fries"
  }, {
    n: "Mac & Cheese",
    d: "Creamy, cheesy, comforting.",
    p: 3.49,
    img: "food-maccheese"
  }, {
    n: "Mashed Potatoes",
    d: "With our signature gravy.",
    p: 2.99,
    img: "food-mashed"
  }, {
    n: "Fried Plantains",
    d: "Sweet maduros, a Campero classic.",
    p: 3.29,
    img: "food-tray"
  }],
  "Sweets": [{
    n: "Mini Churros (5 pc)",
    d: "Big flavor, small bites. Cinnamon sugar.",
    p: 3.00,
    img: "food-flan",
    tag: "New"
  }, {
    n: "Flan",
    d: "Silky caramel custard, hecho en casa.",
    p: 3.49,
    img: "food-flan"
  }]
};
function MenuScreen({
  addToCart
}) {
  const A = window.PC_A,
    Btn = window.PCBtn;
  const cats = Object.keys(PC_MENU);
  const [cat, setCat] = React.useState(cats[0]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundImage: `url(${window.ASSET(`textures/wood-orange.png`)})`,
      backgroundSize: "cover",
      borderBottom: "2.5px solid var(--pc-maroon)",
      padding: "34px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 34,
      color: "var(--pc-yellow)",
      lineHeight: .8
    }
  }, "buen provecho"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 48,
      textTransform: "uppercase",
      color: "#fff",
      margin: 0,
      lineHeight: 1
    }
  }, "Our Menu")), /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`mascot/pollito-emoji-cool.png`),
    alt: "",
    style: {
      height: 90
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 71,
      zIndex: 30,
      background: "var(--pc-cream)",
      borderBottom: "2px solid var(--pc-sand)",
      padding: "14px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      gap: 8,
      overflowX: "auto"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      border: "2.5px solid var(--pc-maroon)",
      whiteSpace: "nowrap",
      background: cat === c ? "var(--pc-orange)" : "transparent",
      color: cat === c ? "#fff" : "var(--pc-maroon)",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: ".82rem",
      textTransform: "uppercase",
      letterSpacing: ".03em",
      padding: "9px 18px",
      borderRadius: 999,
      cursor: "pointer"
    }
  }, c)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "32px 24px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 18
    }
  }, PC_MENU[cat].map(item => /*#__PURE__*/React.createElement("div", {
    key: item.n,
    style: {
      display: "flex",
      gap: 16,
      background: "#fff",
      border: "2.5px solid var(--pc-maroon)",
      borderRadius: 20,
      padding: 16,
      boxShadow: "5px 5px 0 var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: 96,
      height: 96,
      borderRadius: 14,
      background: "var(--pc-bone)",
      border: "2px solid var(--pc-sand)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`illustrations/${item.img}.png`),
    alt: "",
    style: {
      maxHeight: 72,
      maxWidth: 80
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 17,
      color: "var(--pc-maroon)",
      lineHeight: 1.1
    }
  }, item.n), item.hot && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".6rem",
      fontWeight: 800,
      color: "#fff",
      background: "var(--color-danger)",
      borderRadius: 999,
      padding: "2px 7px",
      textTransform: "uppercase"
    }
  }, "Spicy"), item.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".6rem",
      fontWeight: 800,
      color: "var(--pc-maroon)",
      background: "var(--pc-yellow)",
      borderRadius: 999,
      padding: "2px 7px",
      textTransform: "uppercase"
    }
  }, item.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--pc-ink)",
      margin: "4px 0 10px",
      lineHeight: 1.4,
      flex: 1
    }
  }, item.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontStyle: "italic",
      fontSize: 22,
      color: "var(--pc-orange)"
    }
  }, "$", item.p.toFixed(2)), /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    size: "sm",
    pop: true,
    onClick: () => addToCart(item)
  }, "Add +"))))))));
}
window.MenuScreen = MenuScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RewardsScreen.jsx
try { (() => {
/* Rewards screen — join the family + how it works + a join form. */

function RewardsScreen({
  go
}) {
  const A = window.PC_A,
    Btn = window.PCBtn,
    Squiggle = window.PCSquiggle;
  const [email, setEmail] = React.useState("");
  const [joined, setJoined] = React.useState(false);
  const steps = [{
    n: "1",
    t: "Join free",
    d: "Sign up in the app or online in seconds."
  }, {
    n: "2",
    t: "Earn points",
    d: "Get points on every dollar you spend."
  }, {
    n: "3",
    t: "Get rewards",
    d: "Redeem for free chicken, sides & more."
  }];
  const perks = [{
    t: "$10 welcome reward",
    d: "Just for joining the family."
  }, {
    t: "Birthday treat",
    d: "A little something on your special day."
  }, {
    t: "Members-only drops",
    d: "First dibs on new menu items & deals."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundImage: `url(${window.ASSET(`textures/wood-yellow.png`)})`,
      backgroundSize: "cover",
      borderBottom: "2.5px solid var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr .8fr",
      gap: 20,
      alignItems: "center",
      padding: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: ".82rem",
      textTransform: "uppercase",
      letterSpacing: ".09em",
      color: "var(--pc-orange)"
    }
  }, "Campero Rewards"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 58,
      lineHeight: .9,
      textTransform: "uppercase",
      color: "var(--pc-maroon)",
      margin: "8px 0 4px"
    }
  }, "MMMM,", /*#__PURE__*/React.createElement("br", null), "rewards!"), /*#__PURE__*/React.createElement(Squiggle, {
    name: "squiggle-wave",
    h: 16,
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 18,
      color: "var(--pc-ink)",
      maxWidth: 420,
      margin: "0 0 22px"
    }
  }, "Join the family and get a ", /*#__PURE__*/React.createElement("b", null, "$10 reward"), " on your first order. The more you crave, the more you earn."), joined ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "var(--pc-lime)",
      border: "2.5px solid var(--pc-maroon)",
      borderRadius: 14,
      padding: "14px 20px",
      boxShadow: "4px 4px 0 var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: "var(--pc-maroon-800)"
    }
  }, "You're in! Check ", email, " for your $10 reward.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@email.com",
    type: "email",
    style: {
      flex: "1 1 220px",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      fontWeight: 500,
      border: "2.5px solid var(--pc-maroon)",
      borderRadius: 14,
      padding: "13px 16px",
      outline: "none",
      background: "#fff"
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    size: "lg",
    pop: true,
    onClick: () => email.includes("@") && setJoined(true)
  }, "Join free"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`mascot/pollito-circle.png`),
    alt: "Pollito",
    style: {
      width: 280,
      filter: "drop-shadow(6px 8px 0 rgba(94,42,43,.2))"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "54px 24px 20px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 32,
      textTransform: "uppercase",
      color: "var(--pc-maroon)",
      margin: "0 0 32px"
    }
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      textAlign: "center",
      background: "#fff",
      border: "2.5px solid var(--pc-maroon)",
      borderRadius: 22,
      padding: "28px 22px",
      boxShadow: "5px 5px 0 var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      margin: "0 auto 14px",
      borderRadius: "50%",
      background: "var(--pc-orange)",
      color: "#fff",
      border: "2.5px solid var(--pc-maroon)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: 26
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 19,
      color: "var(--pc-maroon)",
      textTransform: "uppercase"
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--pc-ink)",
      marginTop: 6
    }
  }, s.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "30px 24px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, perks.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      background: ["var(--pc-yellow-100)", "var(--pc-orange-100)", "var(--pc-lime-100)"][i],
      border: "2.5px solid var(--pc-maroon)",
      borderLeft: "8px solid var(--pc-orange)",
      borderRadius: 14,
      padding: "18px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, ["⭐️", "🎂", "🔥"][i]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      color: "var(--pc-maroon)"
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--pc-ink)",
      marginTop: 2
    }
  }, p.d)))))));
}
window.RewardsScreen = RewardsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RewardsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
window.ASSET = window.ASSET || function (rel) {
  var id = rel.replace(/[^a-z0-9]/gi, "_");
  return window.__resources && window.__resources[id] || "../../assets/" + rel;
};
/* ui_kits/website — shared presentational parts (Nav, Footer, atoms).
   Token-driven, mirrors the design-system components for a faithful,
   self-contained recreation of us.campero.com. */

const A = "../../assets";
function Btn({
  children,
  kind = "primary",
  size = "md",
  pop,
  onClick,
  style
}) {
  const pal = {
    primary: {
      bg: "var(--pc-orange)",
      fg: "#fff",
      line: "var(--pc-maroon)"
    },
    secondary: {
      bg: "var(--pc-yellow)",
      fg: "var(--pc-maroon)",
      line: "var(--pc-maroon)"
    },
    lime: {
      bg: "var(--pc-lime)",
      fg: "var(--pc-maroon-800)",
      line: "var(--pc-maroon)"
    },
    ink: {
      bg: "var(--pc-maroon)",
      fg: "var(--pc-cream)",
      line: "var(--pc-maroon)"
    },
    ghost: {
      bg: "transparent",
      fg: "#fff",
      line: "#fff"
    }
  }[kind];
  const sz = {
    sm: "8px 16px",
    md: "12px 26px",
    lg: "16px 36px"
  }[size];
  const fs = {
    sm: ".8rem",
    md: ".95rem",
    lg: "1.05rem"
  }[size];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "pc-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: ".5em",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: fs,
      textTransform: "uppercase",
      letterSpacing: ".02em",
      color: pal.fg,
      background: pal.bg,
      border: `2.5px solid ${pal.line}`,
      borderRadius: 999,
      padding: sz,
      cursor: "pointer",
      lineHeight: 1,
      boxShadow: pop ? "4px 4px 0 var(--pc-maroon)" : "none",
      ...style
    }
  }, children);
}
function Squiggle({
  name = "squiggle-wave",
  h = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`doodles/${name}.png`),
    alt: "",
    style: {
      height: h,
      ...style
    }
  });
}
function Nav({
  screen,
  go,
  cartCount
}) {
  const links = [["menu", "Menu"], ["catering", "Catering"], ["rewards", "Rewards"], ["story", "Our Story"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--pc-cream)",
      borderBottom: "2.5px solid var(--pc-maroon)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: "12px 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`logos/logo-primary.png`),
    alt: "Pollo Campero",
    onClick: () => go("home"),
    style: {
      height: 46,
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 8
    }
  }, links.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k),
    style: {
      border: "none",
      background: screen === k ? "var(--pc-maroon)" : "transparent",
      color: screen === k ? "var(--pc-cream)" : "var(--pc-maroon)",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: ".82rem",
      textTransform: "uppercase",
      letterSpacing: ".04em",
      padding: "9px 15px",
      borderRadius: 999,
      cursor: "pointer"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("rewards"),
    className: "pc-link",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: ".8rem",
      color: "var(--pc-maroon)",
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Btn, {
    kind: "primary",
    size: "sm",
    pop: true,
    onClick: () => go("menu")
  }, "Order", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#fff",
      color: "var(--pc-orange)",
      borderRadius: 999,
      minWidth: 20,
      height: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: ".72rem",
      fontWeight: 900
    }
  }, cartCount)))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--pc-maroon)",
      color: "var(--pc-cream)",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: "var(--pc-lime)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "44px 24px",
      display: "flex",
      flexWrap: "wrap",
      gap: 40,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 260px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.ASSET(`logos/logo-white.png`),
    alt: "Pollo Campero",
    style: {
      height: 44,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 30,
      color: "var(--pc-yellow)",
      lineHeight: .9
    }
  }, "Follow the flavor"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 16
    }
  }, ["f", "X", "ig"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      border: "2px solid var(--pc-cream)",
      display: "grid",
      placeItems: "center",
      fontWeight: 800,
      fontSize: ".85rem"
    }
  }, s)))), [["Explore", ["Menu", "Catering", "Rewards", "Find a Campero"]], ["Company", ["Our Story", "Careers", "News", "Gift Cards"]], ["Support", ["Connect", "Terms of Use", "Privacy Policy", "Accessibility"]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      flex: "1 1 160px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      fontSize: ".8rem",
      color: "var(--pc-yellow)",
      marginBottom: 12
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => go("menu"),
    style: {
      fontSize: ".88rem",
      fontWeight: 500,
      opacity: .9,
      padding: "5px 0",
      cursor: "pointer"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,251,243,.2)",
      padding: "16px 24px",
      textAlign: "center",
      fontSize: ".75rem",
      opacity: .8
    }
  }, "\xA9 2026 Campero USA. All rights reserved. \xB7 Born in Guatemala, 1971 \xB7 #CamperoFamily"));
}
Object.assign(window, {
  PCBtn: Btn,
  PCNav: Nav,
  PCFooter: Footer,
  PCSquiggle: Squiggle,
  PC_A: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Doodle = __ds_scope.Doodle;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Mascot = __ds_scope.Mascot;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
