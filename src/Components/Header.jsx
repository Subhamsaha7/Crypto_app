import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"3"} shadow={"base"} bgColor={"current"} spacing={["10", "10"]}>
      <Button variant={"unstyled"} color={'white'}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={'white'}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={'white'}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
