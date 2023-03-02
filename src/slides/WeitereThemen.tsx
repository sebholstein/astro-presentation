import { Component } from "solid-js";
import { List, ListEntry } from "../solid-slide/List";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
import prism from "../solid-slide/Code";
prism;

export const WeitereThemen: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[70vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>Weiterführende Themen</SlideTitle>
        <List>
          <ListEntry>
            <code>getStaticPaths</code>{" "}
            <a href="https://docs.astro.build/en/reference/api-reference/#getstaticpaths">
              (Doku)
            </a>{" "}
            - Notwendig im SSG Mode für die Generierung von statischen Seiten
            mit dynamischen Parameter. Beispiel Page:{" "}
            <span class="font-mono">pages/blog/[slug].astro</span>
          </ListEntry>
          <ListEntry>
            <a href="https://docs.astro.build/en/core-concepts/routing/#pagination">
              Pagination Support
            </a>
          </ListEntry>
          <ListEntry>
            <a
              href="https://docs.astro.build/de/guides/content-collections/"
              target="blank"
            >
              Content Collections (Astro 2.0)
            </a>{" "}
            - Type-safe Markdown inkl. Validierung
          </ListEntry>
          <ListEntry>
            <a href="https://docs.astro.build/de/core-concepts/sharing-state/">
              State Sharing für Islands
            </a>{" "}
            mit Hilfe von "Nano Stores"
          </ListEntry>
          <ListEntry>
            <a href="https://docs.astro.build/en/guides/cms/">
              Anbindung von gängigen Headlesss CMS Systemen
            </a>{" "}
            - 15 Guides aktuell verfügbar
          </ListEntry>
          <ListEntry>
            <a href="https://docs.astro.build/en/guides/deploy/">
              Deployment Guides
            </a>{" "}
            - Deployment Doku für alle gängigen Provider
          </ListEntry>
          <ListEntry>
            <a href="https://github.com/withastro/compiler">Astro Compiler</a> -
            Geschrieben in Go und ausgeliefert in WASM.
          </ListEntry>
          <ListEntry>
            IDE Support:{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode">
              VSCode Extension
            </a>{" "}
            & seit 02.03.{" "}
            <a href="https://astro.build/blog/astro-webstorm-support/">
              offizieller Webstorm Support
            </a>
          </ListEntry>
        </List>
      </div>
      <div class="w-[30vw] bg-[url(/weitere-themen.jpg)] bg-bottom bg-cover"></div>
    </Slide>
  );
};
