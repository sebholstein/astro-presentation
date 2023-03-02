import { Component } from "solid-js";
import prism from "../solid-slide/Code";
import { List, ListEntry } from "../solid-slide/List";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
prism;

export const Endpoints: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[60vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>Endpoints</SlideTitle>
        <List>
          <ListEntry>
            Ausgabeformat != HTML
            <List>
              <List>
                <span class="font-mono">
                  robots.txt -&gt; pages/robots.txt.ts
                  <pre>
                    <code use:prism="javascript">{`export function get() {
	return {
		body: \`User-agent: *\nAllow: /\`,
	};
}`}</code>
                  </pre>
                </span>
              </List>
            </List>
            <ListEntry>Generierung von JSON Dateien, Bildern, etc.</ListEntry>
          </ListEntry>
          <ListEntry>SSG und SSR unterstützt</ListEntry>
        </List>
      </div>
      <div class="w-[40vw] bg-[url(/endpoints.jpg)]"></div>
    </Slide>
  );
};
