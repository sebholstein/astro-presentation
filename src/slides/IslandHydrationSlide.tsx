import { Slide } from "../solid-slide/Slide";
import { Motion } from "@motionone/solid";

export function IslandHydrationSlide() {
  return (
    <Slide class="bg-gray-800 flex text-white justify-center items-center w-full">
      <div class="text-center z-10">
        <Motion.div
          animate={{
            y: 0,
            transition: { animation: { delay: 2 } },
          }}
          transition={{ animation: { delay: 2 } }}
          initial={{ y: -100 }}
          class="px-10 py-5 max text-black bg-white drop-shadow-lg rounded-lg text-center"
        >
          <div class="bg-purple-100 text-purple-600 rounded mb-2 p-1 inline-block text-sm">
            Performance Feature
          </div>
          <div class="font-bold text-5xl">Island Hydration 🏝</div>
          <div class="font-medium text-base mt-2 text-slate-500">
            (oder auch Partial Hydration)
          </div>
        </Motion.div>
        {/* <Motion.div
          initial={{ scale: 0, visibility: "hidden" }}
          animate={{ scale: 1, visibility: "visible" }}
          transition={{ duration: 1, easing: "ease-in-out" }}
          class="px-10 py-5 mt-4 text-black bg-white drop-shadow-lg rounded-lg text-center"
        >
          <div class="font-bold text-xl">Wer kennt Island Hydration?</div>
        </Motion.div> */}
      </div>
      <video
        src="/island-hydration-bg.mp4"
        autoplay
        loop
        class="w-screen bg-black max-w-none h-screen absolute z-0 object-fill"
      ></video>
    </Slide>
  );
}
