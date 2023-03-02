import { Component, createEffect, JSXElement } from "solid-js";

import "./prism.css";
import "./prism-js.js";

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      prism: string;
    }
  }
}

export const prism = (el: Element, accessor: () => string): void => {
  createEffect(() => {
    el.classList.add("language-" + accessor(), "diff-highlight");
    (window as any).Prism.highlightElement(el);
  });
};

export default prism;
