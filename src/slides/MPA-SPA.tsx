import { Motion } from "@motionone/solid";
import { Component } from "solid-js";
import { Box } from "../solid-slide/Box";
import { List, ListEntry } from "../solid-slide/List";
import { Slide } from "../solid-slide/Slide";
import { SlideTitle } from "../solid-slide/SlideTitle";
import { VideoBg } from "../solid-slide/VideoBg";

export const MPAAndSPA: Component = () => {
  return (
    <Slide class="p-10 bg-white">
      <SlideTitle>SPA & MPA</SlideTitle>

      <table class="w-full text-2xl text-left text-gray-500 dark:text-gray-400">
        <thead class="text-lg text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              <span class="text-4xl">SPA</span>
              <br />
              <span class="text-slate-400">Single Page Application</span>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="text-4xl">MPA</span>
              <br />
              <span class="text-slate-400">Multi Page Application</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-4 w-2/4 align-top">
              <div class="my-6">
                Keine full page loads - Client side routing/rendering
              </div>
              <div class="my-6">Rendering des HTML im Client</div>
              <div class="my-6">
                Nützlich bei sehr dynamischen/komplexen/stateful Anwendungen
                <br />
                (Beispiele: Dashboards, Google Mail, Google Docs, Figma) bzw.
                Desktop-like Anwendungen
              </div>
              <div>JavaScript notwendig</div>
            </td>
            <td class="p-4 align-top">
              <div class="my-6">
                Full page recreation für jede Navigation - Server side routing
              </div>
              <div class="my-6">
                Full page creation schnell bei hauptsächlich statischen Inhalten
              </div>
              <div class="my-6">Rendering des HTML auf dem Server</div>
              <div class="my-6">Sinnvoll bei Content-heavy Anwendungen</div>
              <div class="my-6">Häufig wenig/kein JavaScript notwendig</div>
              <div class="my-6">Sinvoll bei SEO Requirements</div>
            </td>
          </tr>
        </tbody>
      </table>
    </Slide>
  );
};
