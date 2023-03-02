import { Component } from "solid-js";
import { List, ListEntry } from "../solid-slide/List";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
import prism from "../solid-slide/Code";
prism;

export const Images: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[70vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>Images</SlideTitle>
        <List>
          <ListEntry>
            Images könnnen via ESM Imports in JS/TypeScript/MDX Files importiert
            werden (via Vite)
            <pre>
              <code use:prism="javascript">
                {"import myImage from './my-image.jpg';"}
              </code>
            </pre>
            <pre>
              <code use:prism="tsx">
                {'<img src={myImage} alt="my image" />'}
              </code>
            </pre>
            <div>wird zu</div>
            <pre>
              <code use:prism="html">
                {'<img src="/_astro/my-image.b9077475.jpg" alt="my image" />'}
              </code>
            </pre>
          </ListEntry>
          <ListEntry>
            Dateien im <code>public/</code> können mit absoluten Pfad genutzt
            werden. Es werden allerdings keine Optimierungen für diese Dateien
            vorgenommen.
          </ListEntry>
          <pre>
            <code use:prism="html">
              {'<img src="/images/dummy.jpg" alt="my image" />'}
            </code>
          </pre>
        </List>
      </div>
      <div class="w-[30vw] bg-[url(/images.jpg)] bg-bottom bg-cover"></div>
    </Slide>
  );
};
