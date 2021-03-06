const booleans = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "truespeed"
];

const BooleanAttributes = new Set(booleans);

const Properties = new Set([
  "className",
  "indeterminate",
  "value",
  ...booleans
]);

const ChildProperties = new Set(["innerHTML", "textContent", "innerText", "children"]);

// React Compat
const Aliases = {
  className: "class",
  htmlFor: "for"
};

// list of Element events that will not be delegated
const NonComposedEvents = new Set([
  "abort",
  "animationstart",
  "animationend",
  "animationiteration",
  "blur",
  "change",
  "copy",
  "cut",
  "error",
  "focus",
  "gotpointercapture",
  "load",
  "loadend",
  "loadstart",
  "lostpointercapture",
  "mouseenter",
  "mouseleave",
  "paste",
  "pointerenter",
  "pointerleave",
  "progress",
  "reset",
  "scroll",
  "select",
  "submit",
  "toggle",
  "transitionstart",
  "transitioncancel",
  "transitionend",
  "transitionrun"
]);

const SVGElements = new Set([
  // "a",
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  // "script",
  "set",
  "stop",
  // "style",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  // "title",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]);

const SVGNamespace = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};

export { BooleanAttributes, Properties, ChildProperties, Aliases, NonComposedEvents, SVGElements, SVGNamespace };
