import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function SlideLeft({ children }: { children: ReactNode }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20 }}
        >
            {children}
        </motion.div>
    );
}