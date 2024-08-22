import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import btcLogo from "../Assets/btc.png";

const Home = () => {
  return <Box bgColor={"blackAlpha.900"} w={"full"} h={"full"} overflow="hidden">

    <motion.div style={{
      height: "80vh",
    }}
    animate = {{
      rotate: [0, 360],
    }}

    transition={{
      duration:40,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    >
      <Image w={"full"} h={"full"} objectFit={"contain"} src={btcLogo} />
    </motion.div>

    <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={["-20","-25"]}>Xcrypto</Text>
  </Box>;
};

export default Home;
