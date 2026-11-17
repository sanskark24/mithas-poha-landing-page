import { Image, Stack, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function SplashScreen() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) return;
    const timeoutId = window.setTimeout(() => setVisible(false), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [reduceMotion]);

  if (reduceMotion || !visible) return null;

  return (
    <motion.div
      className="site-splash"
      role="status"
      aria-label="Mithas by Khandelwal Industries"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.75, duration: 0.25, ease: "easeOut" }}
    >
      <Stack align="center" gap={4}>
        <Image src={logo} alt="Mithas" className="splash-glow" w={{ base: "220px", md: "300px" }} />
        <Text color="#6b4226" fontSize={{ base: "sm", md: "md" }} letterSpacing="0.18em" textTransform="uppercase">
          by Khandelwal Industries
        </Text>
      </Stack>
    </motion.div>
  );
}
