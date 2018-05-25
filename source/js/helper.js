// Element selector functions
let select = (selector) => { return document.querySelector(selector) };
let selectAll = (selector) => { return document.querySelectorAll(selector) };
let parentEl = (node) => { if (node.parentNode) { return node.parentNode } };