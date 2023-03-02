import { Component } from "solid-js";
import { List, ListEntry } from "../solid-slide/List";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
import prism from "../solid-slide/Code";
prism;

export const ImageIntegration: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[70vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>@astrojs/image Integration</SlideTitle>
        <pre class="pre-condensed">
          <code use:prism="javascript">{"npx astro add image"}</code>
        </pre>
        <pre class="pre-condensed">
          <code use:prism="javascript">{"pnpm install sharp"}</code>
        </pre>
        <div class="my-8">
          <List>
            <ListEntry>
              Image Integration aktuell nicht supported für einige SSR Setups:
              Cloudflare SSR, Deno, Netlify Edge Functions, Vercel Edge
              Functions
            </ListEntry>
          </List>
        </div>
        <pre class="pre-condensed">
          {/* prettier-ignore */}
          <code use:prism={"javascript"}>
            
{`// astro.config.mjs
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  // ...
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
})`}
          </code>
        </pre>
      </div>
      <div class="w-[30vw] bg-[url(/images.jpg)] bg-bottom bg-cover"></div>
    </Slide>
  );
};
