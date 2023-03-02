import { Component } from "solid-js";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

export const RenderingComparison: Component = () => {
  return (
    <Slide class="bg-white p-10">
      <SlideTitle>Rendering</SlideTitle>
      <div class="mb-10">
        <img src="framework-rendering.png" class="max-h-[calc(100vh-180px)]" />
      </div>
    </Slide>
  );
};
