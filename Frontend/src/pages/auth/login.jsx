import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Checkbox,
  Link,
} from "@chakra-ui/react";

function SignIn() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      width={"100%"}
    >
      <Box
        maxW="1200px"
        w="full"
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
        display={{ base: "block", md: "flex" }}
      >
        {/* Left Section */}
        <Box
          w={{ base: "100%", md: "40%" }}
          bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RQlc6supPZNxQTfOXhbp0Th-Y_2HLt7C1w&s')" // Replace with actual image URL
          bgSize="cover"
          p={8}
          color="white"
          textAlign="left"
          display="flex"
          flexDirection="column"
          bgColor="#121212"
          position={"relative"}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgGradient:
              "linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%)",
            zIndex: 1, // Overlay above the background image but below content
          }}
        >
          <Flex zIndex={"2"} flexDirection={"column"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={4}
              color="#00ffff"
            >
              Welcome Back
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              mb={6}
              color={"brand.secondary"}
              fontWeight={"400"}
            >
              Discover millions of events, get alerts about your favorite
              artists, teams, plays, and more — plus always-secure, effortless
              ticketing.
            </Text>
          </Flex>
        </Box>

        {/* Right Section (Sign In Form) */}
        <Box w={{ base: "100%", md: "60%" }} p={8}>
          <Heading fontSize="2xl" mb={4}>
            Sign In
          </Heading>
          <Text mb={4}>
            New to Ticketmaster?{" "}
            <Link color="brand.primary" href="/signup">
              Sign Up
            </Link>
          </Text>

          {/* Form */}
          <Box as="form">
            <Input placeholder="Email" mb={4} />
            <Input placeholder="Password" type="password" mb={4} />

            {/* Remember Me and Forgot Password */}
            <Flex justifyContent="space-between" alignItems="center" mb={6}>
              <Checkbox>Remember Me</Checkbox>
              <Link color="brand.primary">Forgot Password?</Link>
            </Flex>

            {/* Sign In Button */}
            <Button colorScheme="blue" w="full">
              Sign In
            </Button>

            {/* Terms of Use */}
            <Text mt={4} fontSize="sm" color="gray.500">
              By continuing past this page, you agree to the{" "}
              <Link color="brand.primary">Terms of Use</Link> and understand
              that your information will be used as described in our{" "}
              <Link color="brand.primary">Privacy Policy</Link>.
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default SignIn;
