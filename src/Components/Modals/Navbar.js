import React from "react";
import { Box, Link, Flex, List, Text, Spacer } from "@chakra-ui/react";
import SideBar from "../SideBar";
import MenuOptions from "../Menu";

const NavBar = () => {
  return (
    <Box bg="red.300" color="white" py={3}>
      <List>
        <Flex>
          {/* <SideBar/> */}
          <Text pl={10} pt={1}>
            {" "}
            Becs Daily Post
          </Text>
          <Spacer />
          <Flex pr={8}>
            <Box pt={1}>
              <Link href="/signup">Sign Up</Link>
              <Link href="/login" ml={5}>
                Login
              </Link>
              <Link href="/login" ml={5}>
                Logout
              </Link>
            </Box>

            <MenuOptions />
          </Flex>
        </Flex>
      </List>
    </Box>
  );
};

export default NavBar;
