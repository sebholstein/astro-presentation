import { Motion } from "@motionone/solid";
import { Component } from "solid-js";
import { Box } from "../solid-slide/Box";
import { Slide } from "../solid-slide/Slide";
import { VideoBg } from "../solid-slide/VideoBg";

export const Danke: Component = () => {
  return (
    <Slide
      bgImagePosition="top right"
      class="flex justify-center content-center items-center"
    >
      <div class="absolute z-10">
        <Motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Box>
            <div class="text-center">
              <div>
                <img
                  src="/astro-logo-black.svg"
                  class="inline-block mb-6 mt-4"
                  width={200}
                />
              </div>
              <h2 class="text-5xl font-bold mb-10">Vielen Dank!</h2>
              <h3 class="text-base font-medium">Nützliche Links</h3>
              <div class="text-sm">
                <a href="https://astro.build/">Website</a> /{" "}
                <a href="https://docs.astro.build/en/getting-started/">
                  Docs (Getting Started)
                </a>{" "}
                / <a href="https://astro.build/integrations/">Integrations</a> /{" "}
                <a href="https://discord.com/invite/grF4GTXXYm">Discord</a>
              </div>
            </div>
          </Box>
        </Motion.div>
      </div>
      <VideoBg src="/hands-on.mp4"></VideoBg>
    </Slide>
  );
};
