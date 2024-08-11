export const perspective = {
    initial: {
        scale: 1,
        y: 0,
    },
    enter: {
        scale: 1,
        y: 0,
    },
    exit: {
        scale: 0.8,
        y: 0,
        opacity: 0.5,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

export const slide = {
    initial: {
        y: "100%",
    },
    enter: {
        y: "100%"
    },
    exit: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}