import { Component } from "solid-js";
import { List, ListEntry } from "../solid-slide/List";
import { Quote } from "../solid-slide/Quote";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

export const Introduction: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[60vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>Was ist Astro?</SlideTitle>
        <img src="/astro-logo-black.svg" width={150} alt="Astro" />
        <Quote>
          Astro is an all-in-one web framework for building fast,
          content-focused websites.
        </Quote>
        <List>
          <ListEntry>Component-Ansatz basierend auf JSX</ListEntry>
          <ListEntry>Server-first Ansatz</ListEntry>
          <ListEntry>Support für statischen & dynamischen Content</ListEntry>
          <ListEntry>SSG & SSR (Hybrid Rendering) Support</ListEntry>
          <ListEntry>"Zero JS by default"</ListEntry>
          <ListEntry>File-based routing</ListEntry>
          <ListEntry>MIT License</ListEntry>
          <ListEntry>
            VC funded (
            <a
              href="https://astro.build/blog/the-astro-technology-company/"
              target="_blank"
            >
              The Astro Technology Company
            </a>
            )
          </ListEntry>
        </List>
      </div>
      <div class="w-[40vw] bg-[url(/nasa-space-shuttle.jpg)] bg-top"></div>
    </Slide>
  );
};
