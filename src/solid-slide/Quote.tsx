import { Component, JSXElement } from "solid-js";

export const Quote: Component<{ children: JSXElement }> = (props) => {
  return (
    <blockquote class="p-4 mt-5 my-8 border-l-8 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
      <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
        {props.children}
      </p>
    </blockquote>
  );
};
