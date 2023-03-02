import { Component, createEffect, createRenderEffect } from "solid-js";

export const VideoBg: Component<{ src: string; playbackRate?: number }> = (
  props
) => {
  let videoRef: HTMLVideoElement;

  createEffect(() => {
    if (props.playbackRate != undefined) {
      videoRef.playbackRate = props.playbackRate;
    }
  });
  return (
    <video
      ref={videoRef}
      src={props.src}
      autoplay
      loop
      class="w-screen bg-black max-w-none h-screen absolute z-0 object-fill"
    ></video>
  );
};
