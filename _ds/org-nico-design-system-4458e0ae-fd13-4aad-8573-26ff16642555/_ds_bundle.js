/* @ds-bundle: {"format":4,"namespace":"OrgNicoDesignSystem_4458e0","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"c9495f599c2d","components/forms/Button.jsx":"52125810258b","components/forms/IconButton.jsx":"087fc3f3c072","components/forms/Input.jsx":"6cdab9edfbb7","components/surfaces/Badge.jsx":"adc38c9991a0","components/surfaces/Card.jsx":"a539667d272f","ui_kits/website/ContactScreen.jsx":"ea6d361abc1e","ui_kits/website/HomeScreen.jsx":"6443d208030d","ui_kits/website/Icons.jsx":"ec67b53ae070","ui_kits/website/NavBar.jsx":"6ba6388a29fe","ui_kits/website/ProjectsScreen.jsx":"bc78e811e788"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrgNicoDesignSystem_4458e0 = window.OrgNicoDesignSystem_4458e0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orgànico Logo — renders the brand lockup from a provided asset URL.
 * Pass `src` pointing at the copied SVG/PNG (logo-principal, logo-isotipo,
 * or logo-responsive). Falls back to a styled wordmark if no src is given.
 * `invert` flips a dark mark to light for use on charcoal.
 */
function Logo({
  src,
  variant = "principal",
  height = 40,
  invert = false,
  alt = "Orgànico Studio",
  style = {},
  ...rest
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt,
      style: {
        height,
        width: "auto",
        display: "block",
        filter: invert ? "invert(1) brightness(2)" : "none",
        ...style
      }
    }, rest));
  }
  // Text fallback (no asset supplied)
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: height * 0.55,
      letterSpacing: "-0.02em",
      color: invert ? "var(--white)" : "var(--charcoal-500)",
      display: "inline-flex",
      alignItems: "baseline",
      gap: 2,
      ...style
    }
  }, rest), "org\xE0nico", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: "0.4em",
      fontWeight: 600
    }
  }, "\u2122"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orgànico Button — pill-shaped action.
 * Variants map to the brand's flat surfaces: solid charcoal, yellow signal,
 * outline, and quiet ghost. No gradients, minimal shadow.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconRight = null,
  iconLeft = null,
  disabled = false,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      padding: "8px 16px",
      gap: 6
    },
    md: {
      fontSize: 15,
      padding: "12px 22px",
      gap: 8
    },
    lg: {
      fontSize: 17,
      padding: "16px 30px",
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--charcoal-500)",
      color: "var(--white)",
      border: "1.5px solid var(--charcoal-500)"
    },
    accent: {
      background: "var(--yellow)",
      color: "var(--charcoal-500)",
      border: "1.5px solid var(--yellow)"
    },
    outline: {
      background: "transparent",
      color: "var(--charcoal-500)",
      border: "1.5px solid var(--charcoal-500)"
    },
    ghost: {
      background: "transparent",
      color: "var(--charcoal-500)",
      border: "1.5px solid transparent"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: "-0.01em",
      lineHeight: 1,
      padding: s.padding,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      if (!disabled) e.currentTarget.style.opacity = v === variants.ghost ? 1 : 1;
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = 0.88;
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orgànico IconButton — circular icon-only control.
 * Mirrors the site's round arrow buttons. Pass a Lucide/SVG icon as children.
 */
function IconButton({
  children,
  variant = "outline",
  size = "md",
  disabled = false,
  onClick,
  ariaLabel,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 44,
    lg: 56
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: "var(--charcoal-500)",
      color: "var(--white)",
      border: "1.5px solid var(--charcoal-500)"
    },
    accent: {
      background: "var(--yellow)",
      color: "var(--charcoal-500)",
      border: "1.5px solid var(--yellow)"
    },
    outline: {
      background: "transparent",
      color: "var(--charcoal-500)",
      border: "1.5px solid var(--charcoal-500)"
    },
    ghost: {
      background: "var(--white)",
      color: "var(--charcoal-500)",
      border: "1.5px solid transparent"
    }
  };
  const v = variants[variant] || variants.outline;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    onClick: onClick,
    disabled: disabled,
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard)",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = 0.85;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = disabled ? 0.4 : 1;
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.94)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orgànico Input — text field with optional label.
 * Clean rounded field, charcoal focus ring, no shadow.
 */
function Input({
  label,
  hint,
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  invalid = false,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const borderColor = invalid ? "var(--charcoal-900)" : focused ? "var(--charcoal-500)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-primary)",
      letterSpacing: "-0.01em"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: disabled ? "var(--grey-100)" : "var(--white)",
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: `1.5px solid ${borderColor}`,
      outline: "none",
      boxShadow: focused && !invalid ? "0 0 0 3px rgba(51,51,51,0.10)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: invalid ? "var(--charcoal-500)" : "var(--text-muted)",
      fontFamily: "var(--font-longform)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orgànico Badge — small label / tag.
 */
function Badge({
  children,
  tone = "charcoal",
  style = {},
  ...rest
}) {
  const tones = {
    charcoal: {
      background: "var(--charcoal-500)",
      color: "var(--white)"
    },
    accent: {
      background: "var(--yellow)",
      color: "var(--charcoal-500)"
    },
    muted: {
      background: "var(--grey-200)",
      color: "var(--charcoal-500)"
    },
    outline: {
      background: "transparent",
      color: "var(--charcoal-500)",
      border: "1.5px solid var(--charcoal-500)"
    }
  };
  const t = tones[tone] || tones.charcoal;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.02em",
      lineHeight: 1,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid transparent",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orgànico Card — the signature bento surface.
 * `tone` sets the flat fill; the whole card is optionally clickable and lifts
 * on hover. Compose freely with children.
 */
function Card({
  children,
  tone = "light",
  radius = "lg",
  padding = "lg",
  interactive = false,
  onClick,
  style = {},
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--white)",
      color: "var(--charcoal-500)",
      border: "1px solid var(--border-subtle)"
    },
    dark: {
      background: "var(--charcoal-500)",
      color: "var(--white)",
      border: "1px solid var(--charcoal-500)"
    },
    accent: {
      background: "var(--yellow)",
      color: "var(--charcoal-500)",
      border: "1px solid var(--yellow)"
    },
    muted: {
      background: "var(--grey-200)",
      color: "var(--charcoal-500)",
      border: "1px solid var(--grey-200)"
    }
  };
  const radii = {
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)"
  };
  const pads = {
    sm: "16px",
    md: "24px",
    lg: "32px"
  };
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      borderRadius: radii[radius] || radii.lg,
      padding: pads[padding] || pads.lg,
      fontFamily: "var(--font-body)",
      cursor: interactive ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      boxSizing: "border-box",
      ...t,
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Contact screen — form on a bento layout with a yellow prompt card.
function ContactScreen({
  onNavigate
}) {
  const {
    Card,
    Button,
    Input,
    Badge
  } = window.OrgNicoDesignSystem_4458e0;
  const {
    IconSend
  } = window;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "8px 40px 64px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    radius: "xl",
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 460
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "charcoal"
  }, "Contacto"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 52,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      margin: "18px 0 0"
    }
  }, "Hablemos de", /*#__PURE__*/React.createElement("br", null), "tu marca")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-longform)",
      fontWeight: 500,
      fontSize: 15,
      margin: 0,
      maxWidth: 300
    }
  }, "Cu\xE9ntanos qu\xE9 necesitas comunicar. Respondemos en 48 horas.")), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    radius: "xl",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      minHeight: 400,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Enviado"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "Gracias."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-longform)",
      fontSize: 15,
      color: "var(--grey-400)",
      margin: 0
    }
  }, "Tu mensaje lleg\xF3 al estudio."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Enviar otro")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "tu@correo.com",
    type: "email"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Opcional"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "-0.01em"
    }
  }, "Mensaje"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "\xBFQu\xE9 necesitas comunicar?",
    rows: 4,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--border-subtle)",
      outline: "none",
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(IconSend, {
      size: 16
    }),
    onClick: () => setSent(true),
    style: {
      alignSelf: "flex-start"
    }
  }, "Enviar mensaje")))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Homepage — the signature Orgànico bento hero.
function HomeScreen({
  onNavigate
}) {
  const {
    Card,
    Button,
    IconButton
  } = window.OrgNicoDesignSystem_4458e0;
  const {
    IconUpRight,
    IconDown,
    IconSend,
    IconBag
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "8px 40px 56px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.9fr 1fr",
      gap: 18,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    radius: "xl",
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      color: "#fff",
      fontSize: 76,
      lineHeight: 0.98,
      letterSpacing: "-0.03em",
      margin: 0
    }
  }, "Cada detalle", /*#__PURE__*/React.createElement("br", null), "cuenta"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 500,
      color: "#fff",
      fontSize: 26,
      marginTop: 28,
      marginBottom: 4
    }
  }, "Org\xE0nico Regular"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-longform)",
      color: "var(--grey-300)",
      fontSize: 15,
      margin: 0
    }
  }, "Branding")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    radius: "md",
    padding: "sm",
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-longform)",
      fontSize: 11,
      color: "var(--grey-400)"
    }
  }, "Shop"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 14
    }
  }, "Todos Los Productos ", /*#__PURE__*/React.createElement(IconBag, {
    size: 16
  }))), /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Desplazar",
    variant: "ghost",
    size: "lg",
    style: {
      border: "1.5px solid rgba(255,255,255,0.5)",
      color: "#fff",
      background: "transparent"
    },
    onClick: () => onNavigate("projects")
  }, /*#__PURE__*/React.createElement(IconDown, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "1.15fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    radius: "xl",
    padding: "lg",
    interactive: true,
    onClick: () => onNavigate("projects"),
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "Ver", /*#__PURE__*/React.createElement("br", null), "Proyectos"), /*#__PURE__*/React.createElement(IconUpRight, {
    size: 28
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    radius: "xl",
    padding: "lg",
    interactive: true,
    onClick: () => onNavigate("contact"),
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-longform)",
      fontWeight: 500,
      fontSize: 15,
      maxWidth: 120
    }
  }, "\xBFTienes alguna pregunta?"), /*#__PURE__*/React.createElement(IconSend, {
    size: 24
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "Cont\xE1ctanos")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
// Shared thin-line icons (Feather/Lucide style — the brand's icon language).
const IconBase = ({
  children,
  size = 20,
  stroke = 2,
  style = {}
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: style
}, children);
const ArrowUpRight = p => /*#__PURE__*/React.createElement(IconBase, p, /*#__PURE__*/React.createElement("line", {
  x1: "7",
  y1: "17",
  x2: "17",
  y2: "7"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 7 17 7 17 17"
}));
const ArrowDown = p => /*#__PURE__*/React.createElement(IconBase, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "19 12 12 19 5 12"
}));
const ArrowLeft = p => /*#__PURE__*/React.createElement(IconBase, p, /*#__PURE__*/React.createElement("line", {
  x1: "19",
  y1: "12",
  x2: "5",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 19 5 12 12 5"
}));
const Send = p => /*#__PURE__*/React.createElement(IconBase, p, /*#__PURE__*/React.createElement("line", {
  x1: "22",
  y1: "2",
  x2: "11",
  y2: "13"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "22 2 15 22 11 13 2 9 22 2"
}));
const Bag = p => /*#__PURE__*/React.createElement(IconBase, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 10a4 4 0 0 1-8 0"
}));
const Menu = p => /*#__PURE__*/React.createElement(IconBase, p, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
}));
Object.assign(window, {
  IconUpRight: ArrowUpRight,
  IconDown: ArrowDown,
  IconLeft: ArrowLeft,
  IconSend: Send,
  IconBag: Bag,
  IconMenu: Menu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NavBar.jsx
try { (() => {
// Top navigation bar for the Orgànico Studio site.
function NavBar({
  onNavigate,
  current
}) {
  const {
    Logo,
    Button
  } = window.OrgNicoDesignSystem_4458e0;
  const links = [{
    id: "home",
    label: "Proyectos"
  }, {
    id: "projects",
    label: "Productos"
  }, {
    id: "contact",
    label: "FAQ"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "22px 40px",
      maxWidth: 1280,
      margin: "0 auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo-principal.svg",
    height: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-heading)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--charcoal-500)",
      opacity: current === l.id ? 1 : 0.65,
      padding: 0
    }
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNavigate("contact")
  }, "Log In"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNavigate("contact")
  }, "Sign Up")));
}
window.NavBar = NavBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
// Projects grid — bento gallery of studio work.
function ProjectsScreen({
  onNavigate
}) {
  const {
    Card,
    Badge
  } = window.OrgNicoDesignSystem_4458e0;
  const {
    IconUpRight
  } = window;
  const projects = [{
    t: "Cerámica Norte",
    cat: "Branding · Packaging",
    tone: "dark"
  }, {
    t: "Estudio Flora",
    cat: "Identidad",
    tone: "accent"
  }, {
    t: "Café Matiz",
    cat: "Branding",
    tone: "muted"
  }, {
    t: "Editorial Sur",
    cat: "Editorial · Web",
    tone: "light"
  }, {
    t: "Marca Lumen",
    cat: "Naming · Identidad",
    tone: "dark"
  }, {
    t: "Textil Andes",
    cat: "Packaging",
    tone: "muted"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "8px 40px 64px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Proyectos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: 72,
      letterSpacing: "-0.01em",
      margin: "14px 0 0",
      lineHeight: 0.95
    }
  }, "Trabajo", /*#__PURE__*/React.createElement("br", null), "seleccionado")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-longform)",
      fontWeight: 500,
      fontSize: 15,
      color: "var(--grey-400)",
      maxWidth: 260,
      textAlign: "right",
      margin: 0
    }
  }, "Identidades construidas con m\xE9todo, forma y detalle.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18
    }
  }, projects.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: p.tone,
    radius: "lg",
    padding: "lg",
    interactive: true,
    style: {
      height: 260,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-longform)",
      fontSize: 12,
      opacity: 0.7
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement(IconUpRight, {
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-longform)",
      fontSize: 13,
      opacity: 0.75,
      margin: "6px 0 0"
    }
  }, p.cat))))));
}
window.ProjectsScreen = ProjectsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

})();
