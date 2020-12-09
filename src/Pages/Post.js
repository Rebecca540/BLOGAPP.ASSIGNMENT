import React, { useContext, useState } from "react";
import axios from "axios";
import Posts from "../Components/Posts";
import { Box, Button, Heading, Flex, Input } from "@chakra-ui/react";
import AddPost from "../Components/Modals/AddPostModal";
import NavBar from "../Components/Modals/Navbar";
// import { BlogContext } from "../context/blogContext";
//import Banner from "../assets/Banner.jpg";

const Post = () => {
  const [posts, setPosts] = useState([]);
  // const { addBlog, getBlogs, blog } = useContext(BlogContext);

  return (
    <Box>
      <NavBar />
      <Box bg="blue.200" py="150px">
        <Flex m="auto" h={{ md: "40%" }} w={{ md: "50%" }}>
          <Input placeholder="Search blog post" rounded="30px" />
          <Button rounded="30px" bg="red.300" ml={4}>
            Search
          </Button>
        </Flex>
      </Box>
      <Box pl="20px">
        <AddPost />
        <Posts />
      </Box>
    </Box>
  );
};

export default Post;
