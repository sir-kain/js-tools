export const $ = (selector) => {
  return document.querySelector(selector);
};

export const $$ = (selector) => {
  return document.querySelectorAll(selector);
};

export const createNode = (element) => {
  return document.createElement(element);
};

export const append = (parent, el) => {
  parent.insertAdjacentElement("beforeend", el);
};