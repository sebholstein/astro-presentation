import { Component, JSX, JSXElement } from "solid-js";

export interface SlideProps {
  children?: JSXElement;
  class?: string;
  bgImage?: string;
  bgImagePosition?: string;
}

export const Slide: Component<SlideProps> = function Slide(props) {
  const styles: JSX.CSSProperties = props.bgImage
    ? {
        background: `url('${props.bgImage}') no-repeat`,
        "background-attachment": "fixed",
        "background-position": props.bgImagePosition ?? "top center",
      }
    : {};
  return (
    <div class={"w-full h-full text-xl " + props.class} style={styles}>
      {props.children}
    </div>
  );
};
