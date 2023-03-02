import { Component } from "solid-js";
import { Quote } from "../solid-slide/Quote";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

export const EinsatzbereicheLoad: Component = () => {
  return (
    <Slide class="bg-white p-10">
      <SlideTitle>Einsatzbereiche</SlideTitle>
      <img src="/tweet-2mb.png" class="max-h-[560px] mx-auto" />
    </Slide>
  );
};
