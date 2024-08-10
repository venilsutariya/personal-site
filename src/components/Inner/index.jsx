import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { slide, opacity, perspective } from './anim';

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Layout({ children }) {

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <div className='inner'>
            <motion.div className='slide' {...anim(slide)} />
            <motion.div className='page' {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    )
}