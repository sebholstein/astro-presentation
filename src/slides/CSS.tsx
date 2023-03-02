import { Component } from "solid-js";
import { List, ListEntry } from "../solid-slide/List";
import prism from "../solid-slide/Code";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";

console.log(prism);

export const CSS: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[60vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>Styling / CSS mit Astro</SlideTitle>
        <List>
          <ListEntry>
            Style Tags können in Astro Components verwendet werden
          </ListEntry>
          <ListEntry>
            Die dort definierten Styles sind automatisch scoped
            <div class="ml-10">
              <pre class="text-xl">
                {/* prettier-ignore */}
                <code use:prism="css" >
                h2 &#123; color: black; &#125;\n
            </code>
              </pre>
              wird zu
              {/* prettier-ignore */}
              <pre class="text-xl">
                <code use:prism="css">
                    h2:where(.astro-HFNFFAE3) &#123;
                        color: black; 
                    &#125; 
                </code>
            </pre>
            </div>
          </ListEntry>
          <ListEntry>
            Globale Styles können mit Hilfe des{" "}
            <code class="font-mono font-semibold">is:global</code> Attribut am
            &lt;style&gt; Tag definiert werden
          </ListEntry>
          <ListEntry>Styles werden automatisch von Astro optimiert</ListEntry>
          <ListEntry>
            Alle bekannten CSS Features von Vite auch in Astro supported:
            <List>
              <ListEntry>ESM Imports</ListEntry>
              <ListEntry>Preprocessors: Sass, Stylus, Less</ListEntry>
              <ListEntry>CSS Modules</ListEntry>
            </List>
          </ListEntry>
        </List>
      </div>
      <div class="w-[40vw] bg-[url(/css.jpg)] bg-top"></div>
    </Slide>
  );
};
