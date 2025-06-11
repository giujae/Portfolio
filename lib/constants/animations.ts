export const INTRO_ANIMATION_CONFIG = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
} as const;

export const PHASE_TIMINGS = [1000, 1600, 2200, 2800] as const;

export const FRONT_END_OPACITY = {
    1: 0.32,
    2: 0.48,
    3: 0.64,
    4: 0.8,
    0: 0,
} as const;

export const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
} as const;

export const STAGGER_CONTAINER_VARIANTS = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
} as const;
