import { shallowReactive, watch } from "vue";

let mouse = shallowReactive({
  x: 0,
  y: 0,
});

export const useMouse = () => mouse;

window.addEventListener("pointermove", ({ x, y }) => {
  mouse.x = x;
  mouse.y = y;
});

// @todo make this standard
export const useMouseNext = (cb: (m: typeof mouse) => void) => {
  watch(mouse, cb);

  return mouse;
};
