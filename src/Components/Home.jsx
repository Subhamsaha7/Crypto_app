import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import btcSrc from "../Assets/btc.png";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} overflow={"hidden"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "80px",
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;