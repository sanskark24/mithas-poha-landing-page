import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function SlideUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20, delay }}
        >
            {children}
        </motion.div>
    );
}
