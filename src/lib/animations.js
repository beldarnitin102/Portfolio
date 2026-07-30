export const fadeUp = {

    hidden: {
        opacity: 0,
        y: 60,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {

            duration: .8,
            ease: [0.22,1,0.36,1]

        }

    }

};

export const fadeLeft = {

    hidden: {
        opacity: 0,
        x: -60,
    },

    show: {

        opacity: 1,
        x: 0,

        transition: {

            duration: .8,
            ease: [0.22,1,0.36,1]

        }

    }

};

export const fadeRight = {

    hidden: {
        opacity: 0,
        x: 60,
    },

    show: {

        opacity: 1,
        x: 0,

        transition: {

            duration: .8,
            ease: [0.22,1,0.36,1]

        }

    }

};

export const scaleIn = {

    hidden: {

        opacity: 0,
        scale: .9,

    },

    show: {

        opacity: 1,
        scale: 1,

        transition: {

            duration: .7,
            ease: [0.22,1,0.36,1]

        }

    }

};

export const stagger = {

    hidden: {},

    show: {

        transition: {

            staggerChildren: .15,
            delayChildren: .2,

        }

    }

};

export const floating = {

    animate: {

        y: [-8,8,-8],

        transition: {

            repeat: Infinity,

            duration: 5,

            ease: "easeInOut"

        }

    }

};

export const rotateSlow = {

    animate: {

        rotate: 360,

        transition: {

            repeat: Infinity,

            duration: 40,

            ease: "linear"

        }

    }

};