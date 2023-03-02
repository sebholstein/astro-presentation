import { Component, JSXElement } from "solid-js";
import prism from "../solid-slide/Code";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
console.log(prism);

const Tr: Component<{ children: JSXElement }> = (props) => {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="px-6 py-4">{props.children}</td>
    </tr>
  );
};

export const SSRAdapters: Component = () => {
  return (
    <Slide class="bg-white p-10">
      <SlideTitle>SSR Adapter</SlideTitle>
      <div class="flex gap-7 flex-wrap justify-center mt-11">
        <div>
          <img src="/nodejs.png" width={200} />
        </div>
        <div>
          <img src="/deno.webp" width={200} />
        </div>
        <div>
          <img src="/cloudflare.png" width={200} />
        </div>
        <div>
          <img src="/netlify.png" width={200} />
        </div>
        <div>
          <img src="/vercel.png" class="mt-9" width={200} />
        </div>
      </div>
      <h3 class="font-bold pb-5 pt-14">Installation</h3>
      <pre>
        {/* prettier-ignore */}
        <code use:prism="bash">
          # Using NPM\n 
          npx astro add cloudflare\n
          # Using Yarn\n
          yarn astro add cloudflare\n
          # Using PNPM pnpm\n
           astro add cloudflare
        </code>
      </pre>
    </Slide>
  );
};
