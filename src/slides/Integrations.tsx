import { Component, createEffect, onCleanup } from "solid-js";
import prism from "../solid-slide/Code";
import { Slide } from "../solid-slide/Slide";
prism;

export const Integrations: Component = () => {
  return (
    <Slide>
      <div class="z-100 w-screen h-screen absolute"></div>
      <video
        autoplay
        loop
        src="/astro-integrations.mov"
        muted
        class="w-screen h-screen"
      ></video>
    </Slide>
  );
};
