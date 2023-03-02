import { Motion } from "@motionone/solid";
import { Component } from "solid-js";
import { Box } from "../solid-slide/Box";
import { Slide } from "../solid-slide/Slide";
import { VideoBg } from "../solid-slide/VideoBg";

export const MPA: Component = () => {
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
              <span class="text-5xl font-bold">MPA Framework</span>
              <div class="text-lg text-slate-400 font-bold uppercase">
                Multi Page Application Framework
              </div>
            </div>
          </Box>
        </Motion.div>
      </div>
      <VideoBg src="/space-bg.mp4" playbackRate={1.4}></VideoBg>
    </Slide>
  );
};
