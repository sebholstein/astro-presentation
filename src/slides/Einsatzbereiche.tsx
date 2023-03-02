import { Component } from "solid-js";
import { Quote } from "../solid-slide/Quote";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

export const Einsatzbereiche: Component = () => {
  return (
    <Slide class="bg-white p-10">
      <SlideTitle>Einsatzbereiche</SlideTitle>
      <div class="flex align-middle justify-between">
        <div class="pr-10 w-2/4 text-center">
          <h2 class="font-medium text-slate-500">
            Hauptsächlich statische Seiten mit einigen Islands
          </h2>
          <img
            src="/headless-cms.svg"
            class="inline-block max-h-[550px]"
            alt="Headless CMS -> Astro"
          />
        </div>
        <div class="border-dotted border-r border-slate-400 w-[1px]"></div>
        <div class="pl-10 w-2/4 text-center ">
          <h2 class="font-medium text-slate-500">E-Commerce Seiten</h2>
          <img
            src="/ecommerce.svg"
            class="inline-block max-h-[550px]"
            alt="Headless Commerce -> Storefront"
          />
        </div>
      </div>
    </Slide>
  );
};
