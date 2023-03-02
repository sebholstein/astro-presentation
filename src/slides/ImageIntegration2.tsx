import { Component } from "solid-js";
import { List, ListEntry } from "../solid-slide/List";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
import prism from "../solid-slide/Code";
prism;

export const ImageIntegration2: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[70vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>@astrojs/image Integration</SlideTitle>
        <pre class="pre-condensed">
          <code use:prism="javascript">{`---
import { Image } from '@astrojs/image/components';
---

<Image src={import('./dummy.png')} format="avif" width={300} />
<Image
  src={import('./dummy.png')}
  alt="dummy2"
  width={200}
  aspectRatio="16:9"
  format="webp"
/> `}</code>
        </pre>
        <pre class="pre-condensed">
          <code use:prism="javascript">{`---
import myImage from './my-image.jpg';
---
<img src={myImage.src} alt="my image" />
`}</code>
        </pre>
      </div>
      <div class="w-[30vw] bg-[url(/images.jpg)] bg-bottom bg-cover"></div>
    </Slide>
  );
};
