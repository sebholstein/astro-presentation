import {
  Component,
  createEffect,
  createSignal,
  JSXElement,
  onCleanup,
} from "solid-js";
import { useSearchParams } from "solid-app-router";
import { Motion, Presence } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";

export interface PresentationProps {
  children: JSXElement[];
}

export const Presentation: Component<PresentationProps> = function Presentation(
  props
) {
  const [params, setParams] = useSearchParams();
  const slideParsed =
    Number(params["slide"]) >= 0 ? Number(params["slide"]) : 0;
  const [slide, setSlide] = createSignal<number>(slideParsed);
  const [slideDirection, setSlideDirection] = createSignal<
    "forward" | "backward"
  >("forward");
  const slides = props.children.length;

  createEffect(() => {
    const keypressHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && slide() < slides) {
        e.preventDefault();
        setSlideDirection("forward");
        setSlide(slide() + 1);
        setParams({ ...params, slide: slide() });
      }
      if (e.key === "ArrowLeft" && slide() > 0) {
        e.preventDefault();
        setSlideDirection("backward");
        setSlide(slide() - 1);
        setParams({ ...params, slide: slide() });
      }
    };
    window.addEventListener("keyup", keypressHandler);

    onCleanup(() => window.removeEventListener("keyup", keypressHandler));
  });

  createEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      e.preventDefault();
      setSlideDirection("backward");
      setSlide(slide() - 1);
      setParams({ ...params, slide: slide() });
    };
    window.addEventListener("contextmenu", clickHandler);

    onCleanup(() => window.removeEventListener("contextmenu", clickHandler));
  });
  return (
    <Presence>
      <Rerun on={slide()}>
        <Motion
          initial={{
            opacity: 0,
            x: slideDirection() == "forward" ? 50 : -50,
            willChange: "transform",
          }}
          animate={{
            opacity: 1,
            x: 0,
            top: 0,
            transition: { delay: 0.05 },
            overflow: "hidden",
          }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, x: slideDirection() == "forward" ? -50 : 50 }}
          class=" bg-black w-screen h-screen max-h-screen max-w-screen absolute overflow-hidden"
        >
          {props.children.find((_, idx) => idx === slide())}
        </Motion>
      </Rerun>
    </Presence>
  );
};
