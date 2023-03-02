import { Component, JSXElement } from "solid-js";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

const Tr: Component<{ children: JSXElement; framework: JSXElement }> = (
  props
) => {
  return (
    <tr class="bg-white border-b text-xs dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.framework}
      </th>
      <td class="px-6 py-4">{props.children}</td>
    </tr>
  );
};

export const MetaFrameworks: Component = () => {
  return (
    <Slide class="bg-white p-10">
      <SlideTitle>Gängige Meta Frameworks</SlideTitle>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Meta Framework
              </th>
              <th scope="col" class="px-6 py-3">
                Framework Support
              </th>
            </tr>
          </thead>
          <tbody>
            <Tr framework={<>NextJS</>}>React</Tr>
            <Tr framework={<>Remix</>}>React</Tr>
            <Tr framework={<>SvelteKit</>}>Svelte</Tr>
            <Tr framework={<>SolidStart</>}>SolidJS</Tr>
            <Tr
              framework={
                <>
                  Tanstack Start
                  <br />
                  (noch nicht released)
                </>
              }
            >
              React, Preact
            </Tr>
            <Tr framework={<>Analog</>}>Angular</Tr>
            <Tr framework={<>Vue</>}>Nuxt</Tr>
            <Tr framework={<>Qwik</>}>Qwik City</Tr>
            <Tr framework={<>Fresh</>}>Preact</Tr>
            <Tr framework={<>Astro</>}>
              <strong>
                SolidJS, React, Preact, Angular, Vue, Lit, AplineJS, Mithril,
                ...
              </strong>
            </Tr>
          </tbody>
        </table>
      </div>
    </Slide>
  );
};
