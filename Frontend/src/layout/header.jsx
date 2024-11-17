import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Icon,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const Header = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuthStore();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Flex bg="brand.primary" w={"100%"} p={2} alignItems="center">
      <Flex w={"100%"} alignItems="center">
        {/* Logo */}
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Box fontWeight="bold" fontSize="2xl" color="brand.secondary">
            ticketmaster
          </Box>
        </Link>

        <Flex>
          <HStack spacing={6} ml={8} display={{ base: "none", md: "flex" }}>
            <Link href="/concerts" color="brand.secondary" fontSize="md">
              Concerts
            </Link>
            <Link href="/sports" color="brand.secondary" fontSize="md">
              Sports
            </Link>
            <Link href="/arts" color="brand.secondary" fontSize="md">
              Arts, Theater & Comedy
            </Link>
            <Link href="/family" color="brand.secondary" fontSize="md">
              Family
            </Link>
          </HStack>
        </Flex>
      </Flex>

      {/* Sign In / Register Button */}
      {user ? (
        <Flex alignItems="center">
          <Text colorScheme="brand.secondary" fontWeight={"500"}>
            Welcome, {user?.firstName || "User"}!
          </Text>
          <Button colorScheme="brand.secondary" size="sm" onClick={logout}>
            Logout
          </Button>
        </Flex>
      ) : (
        <Flex alignItems="center">
          <Button
            variant="link"
            color="brand.secondary"
            rightIcon={<Icon as={FaUser} />}
            onClick={handleClick}
          >
            Sign In/Register
          </Button>
        </Flex>
      )}
      {/* Navigation Links */}
    </Flex>
  );
};

export default Header;
