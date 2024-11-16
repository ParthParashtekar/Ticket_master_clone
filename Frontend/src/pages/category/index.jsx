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
import { EventCard } from "../../components/eventCard";

export const Category = (props) => {
  return (
    <Flex w="100%" flexDirection={"column"}>
      <Flex
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        bgImage={`url(${props.image})`}
        w="100%"
        height={"300px"}
        alignItems={"center"}
        padding={"10"}
        zIndex={"-2"}
        position={"relative"}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgGradient: "linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%)",
          zIndex: -3, // Overlay above the background image but below content
        }}
      >
        <Text
          color={"brand.secondary"}
          fontSize={"4xl"}
          textTransform={"uppercase"}
          fontWeight={"900"}
          letterSpacing={"0.05em"}
          position={"relative"}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "0.2em",
            left: "0.8em",
            width: "100%",
            height: "15px",
            bgColor: "brand.primary",
            zIndex: "-1",
          }}
        >
          {props.name} Tickets
        </Text>
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
