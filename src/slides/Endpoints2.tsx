import { Component } from "solid-js";
import prism from "../solid-slide/Code";
import { List, ListEntry } from "../solid-slide/List";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
prism;

export const Endpoints2: Component = () => {
  return (
    <Slide class="bg-white flex">
      <div class="w-[60vw] text-gray-800 bg-white z-10 p-10">
        <SlideTitle>Endpoints</SlideTitle>
        <List>
          <ListEntry>
            SSR Mode: API Endpoints für dynamische Daten bzw. generelle
            Backend-Logik
          </ListEntry>

          <pre class="pre-condensed-xl">
            <code use:prism="javascript">
              {`import { getProduct } from '../db';
              
export async function get({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  if (!product) {
    return new Response(null, {
      status: 404,
      statusText: 'Nicht vorhanden'
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200
  });
}`}
            </code>
          </pre>
        </List>
      </div>
      <div class="w-[40vw] bg-[url(/endpoints.jpg)]"></div>
    </Slide>
  );
};
