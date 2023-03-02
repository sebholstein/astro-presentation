import { Component, createEffect } from "solid-js";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

export const NewProject: Component = () => {
  let video: HTMLVideoElement;

  createEffect(() => (video.playbackRate = 1.8));
  return (
    <Slide class="bg-white p-10">
      <SlideTitle subTitle="npm create astro@latest / yarn create astro / pnpm create astro@latest">
        Neues Astro Projekt anlegen
      </SlideTitle>
      <video
        class="mx-auto block max-h-[530px]"
        src="/create-astro.mov"
        ref={video}
        autoplay
      />
    </Slide>
  );
};
