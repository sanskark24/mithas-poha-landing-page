import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SlideUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
}
