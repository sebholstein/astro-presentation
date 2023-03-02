import { Component } from "solid-js";
import { Quote } from "../solid-slide/Quote";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

export const Einsatzbereiche2: Component = () => {
  return (
    <Slide class="bg-white p-10">
      <SlideTitle>Einsatzbereiche</SlideTitle>
      <div class="flex align-middle justify-between">
        <div class="pr-10 w-2/4 text-center text-[100px] leading-normal">
          SEO
          <div class="text-4xl text-slate-400">Search Engine Optimization</div>
        </div>
        <div class="border-dotted border-r border-slate-400 w-[1px]"></div>
        <div class="pl-10 w-2/4 text-center">
          <div class=" text-4xl pb-6">Lighthouse Scores</div>
          <img src="/lighthouse.png" alt="Lighthouse" />
        </div>
      </div>
    </Slide>
  );
};
