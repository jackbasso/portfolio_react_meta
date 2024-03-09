import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Jack!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <Avatar name='PT' src='https://i.pravatar.cc/150?img=7' size="2xl" />
      <Heading as="h1" fontSize="sm">
        {greeting}
      </Heading>
      <Heading as="h2" fontSize="3xl" fontWeight='bold'>
        {bio1}
        <br />
        {bio2}
      </Heading>
      
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
