export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function contentTransition(reduce: boolean, delay = 0) {
  return reduce
    ? { duration: 0 }
    : { duration: 0.55, ease: easeOutExpo, delay };
}

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};
