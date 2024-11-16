import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Icon,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { EventCard } from "../../components/eventCard";

const Home = () => {
  return (
    <Flex w="100%" flexDirection={"column"}>
      <Flex
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition={"50% 0px"}
        bgImage="url('https://assets.goal.com/images/v3/blt4d50964c91c5450b/NFL_header.jpg?auto=webp&format=pjpg&width=3840&quality=60')"
        textAlign="center"
        py={16}
        px={8}
        w="100%"
        flexDirection={"column"}
        color={"brand.secondary"}
        minHeight={"50vh"}
        justifyContent={"flex-end"}
        overflow="hidden" // Ensure no overflow if content exceeds bounds
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgGradient: "linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%)",
          zIndex: 1, // Overlay above the background image but below content
        }}
      >
        <Flex flexDirection={"column"} maxWidth={"400px"} zIndex={"100"}>
          {/* Disney Logo and Title */}
          <Heading as="h1" fontSize="4xl" mb={4}>
            Disney Descendants/Zombies
          </Heading>

          {/* Subtitle */}
          <Text fontSize="xl" mb={6}>
            VIP Packages Available
          </Text>

          {/* Find Tickets Button */}
          <Button
            size="lg"
            colorScheme="brand.primary"
            bg="brand.primary"
            _hover={{ bg: "brand.primary.900" }}
            px={8}
            py={6}
          >
            Find Tickets
          </Button>
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        flexWrap={"wrap"}
        p="4"
        gap={"4"}
        justifyContent={"space-around"}
      >
        <EventCard />
        <EventCard />
        <EventCard />
      </Flex>
    </Flex>
  );
};

export default Home;