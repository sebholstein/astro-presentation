import { Component } from "solid-js";
import prism from "../solid-slide/Code";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
prism;

export const IslandHydrationAstroOptionsSlide: Component = () => {
  return (
    <Slide class="bg-white p-10 text-base">
      <SlideTitle>Optionen für Islands in Astro (Client Directives)</SlideTitle>

      <pre class="pre-condensed">
        {/* prettier-ignore */}
        <code use:prism="html">
            ---\n
                import MyComponent from '../../components/MyComponent.tsx';\n
            ---\n
            &lt;MyComponent /&gt; &lt;!-- SRR only --&gt;
        </code>
      </pre>
      <pre class="pre-condensed">
        {/* prettier-ignore */}
        <code use:prism="html">
            &lt;MyComponent client:load /&gt; &lt;!-- Priorität: hoch - Sofortiges Laden und Hydration --&gt;
        </code>
      </pre>
      <pre class="p-1">
        <code use:prism="html">
          &lt;MyComponent client:idle /&gt; \n&lt;!-- Priorität: Mittel - Wenn
          die Seite geladen ist (requestIdleCallback) --&gt;
        </code>
      </pre>
      <pre class="pre-condensed">
        <code use:prism="html">
          &lt;MyComponent client:visible /&gt; \n&lt;!-- Priorität: Niedrig -
          Laden und Hydration sobald die \nKomponente sichtbar wird
          (IntersectionObserver) --&gt;
        </code>
      </pre>
      <pre class="pre-condensed">
        <code use:prism="html">
          &lt;MyComponent client:media="(max-width: 768px)" /&gt; \n&lt;!--
          Priorität: Niedrig - Laden und Hydration sobald Media Query zutrifft
          --&gt;
        </code>
      </pre>
      <pre class="pre-condensed">
        <code use:prism="html">
          &lt;MyComponent client:only="react" /&gt; \n&lt;!-- CSR only --&gt;
        </code>
      </pre>
    </Slide>
  );
};
