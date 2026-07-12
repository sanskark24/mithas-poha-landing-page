import { motion } from "framer-motion";

export default function SlideLeft({ ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }} // Initial state (hidden and slightly below)
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible and original position
            viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
            transition={{ duration: 0.8 }}
        >
            {props.children}
        </motion.div>
    );
}