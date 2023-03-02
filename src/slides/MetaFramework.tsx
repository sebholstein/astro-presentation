import { Component } from "solid-js";
import { Slide } from "../solid-slide/Slide";
import styles from "./MetaFramework.module.css";

export const MetaFramework: Component = () => {
  return (
    <Slide class="flex content-center items-center justify-center text-white font-bold">
      <span class={"text-6xl " + styles.text}>Meta Framework 😱</span>
    </Slide>
  );
};
