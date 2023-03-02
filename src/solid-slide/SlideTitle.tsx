import { Component, JSXElement, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Quote } from "../solid-slide/Quote";
import { Slide } from "../solid-slide/Slide";

export const SlideTitle: Component<{
  children: JSXElement;
  subTitle?: JSXElement | string;
}> = (props) => {
  return (
    <>
      <h2
        classList={{ "mt-6 mb-14": !props.subTitle }}
        class="text-[1.75rem] font-extrabold leading-9 tracking-tight  text-slate-900 md:text-4xl "
      >
        {props.children}
      </h2>
      <Show when={props.subTitle}>
        {(subTitle) => (
          <h3 class="text-slate-500 mb-14 text-base">{subTitle}</h3>
        )}
      </Show>
    </>
  );
};
