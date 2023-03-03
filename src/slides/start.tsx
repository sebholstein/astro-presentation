import { Slide } from "../solid-slide/Slide";
import { Motion } from "@motionone/solid";

export function StartSlide() {
  return (
    <Slide class="bg-gray-800 flex text-white justify-center items-center text-3xl w-full">
      <div class="text-center z-10">
        <Motion.div
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2 }}
          initial={{ y: -100, opacity: 0 }}
        >
          <img src="/astro-logo-white.svg" class="max-w-xl block" />
        </Motion.div>
        <div class="mt-4">
          <p class=" text-gray-100 leading-7 text-4xl font-bold">
            Sebastian Holstein
          </p>
          <p class="mt-6 text-slate-200">03.03.2023</p>
        </div>
      </div>
      <video
        src="/astro-bg.mp4"
        autoplay
        loop
        class="w-screen bg-black max-w-none h-screen absolute z-0 object-fill"
      ></video>
    </Slide>
  );
}
