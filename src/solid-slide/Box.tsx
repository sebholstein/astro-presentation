import { Component, JSXElement } from "solid-js";

export const Box: Component<{ children: JSXElement }> = (props) => {
  return (
    <>
      <div class="px-10 py-5 max text-black bg-white drop-shadow-lg rounded-lg">
        {props.children}
      </div>
    </>
  );
};
