import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"16"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}>About Us</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
                        At Xcrypto, we are dedicated to providing a secure
                        and user-friendly platform for trading and managing
                        cryptocurrencies.
                    </Text>
                </VStack>

                <VStack>
                    <Avatar boxSize={"28"} mt={["4", "0"]} />
                    <Text>Our Founder</Text>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;
