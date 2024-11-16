import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Checkbox,
  Link,
  Select,
} from "@chakra-ui/react";

function SignUp() {
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
          bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RQlc6supPZNxQTfOXhbp0Th-Y_2HLt7C1w&s')"
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
              Your All-Access Pass
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              mb={6}
              color={"brand.secondary"}
            >
              This is it — millions of live events, up-to-the-minute alerts for
              your favorite artists and teams and, of course, always safe,
              secure ticketing.
            </Text>
          </Flex>
        </Box>

        {/* Right Section (Sign Up Form) */}
        <Box w={{ base: "100%", md: "60%" }} p={8}>
          <Heading fontSize="2xl" mb={4}>
            Sign Up
          </Heading>
          <Text mb={4}>
            Create a new Ticketmaster account. Already have an account?{" "}
            <Link color="brand.primary" href="/login">
              Sign In
            </Link>
          </Text>

          {/* Form */}
          <Box as="form">
            {/* Email */}
            <Input placeholder="Email" mb={4} />

            {/* Password */}
            <Input placeholder="Password" type="password" mb={4} />

            {/* First Name / Last Name */}
            <Flex gap={4} mb={4}>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </Flex>

            {/* Country of Residence / Zip Code */}
            <Flex gap={4} mb={6}>
              <Select placeholder="Country of Residence">
                <option value="US">United States</option>
                {/* Add more countries as needed */}
              </Select>
              <Input placeholder="Zip/Postal Code" />
            </Flex>

            {/* Agree to Terms */}
            <Checkbox mb={6}>
              I agree to the <Link color="brand.primary">Terms of Use</Link> and{" "}
              <Link color="brand.primary">Privacy Policy</Link>.
            </Checkbox>

            {/* Sign Up Button */}
            <Button colorScheme="blue" w="full">
              Next
            </Button>

            {/* Terms of Use and Privacy Policy */}
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

export default SignUp;
