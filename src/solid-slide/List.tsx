import { Component, JSXElement } from "solid-js";

export const ListEntry: Component<{ children: JSXElement }> = (props) => {
  return <li>{props.children}</li>;
};

export const List: Component<{ children: JSXElement; child?: boolean }> = (
  props
) => {
  return (
    <ul
      class={
        "list-inside list-disc text-xl flex flex-col gap-4" +
        (props.child === true ? "pl-10 mt-2" : "")
      }
    >
      {props.children}
    </ul>
  );
};
