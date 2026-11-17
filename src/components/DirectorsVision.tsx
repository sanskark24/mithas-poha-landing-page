import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SlideLeft from "../animations/SlideLeft";
import SlideRight from "../animations/SlideRight";

const visionParagraphs = [
  "At Khandelwal Industries, I believe that Poha is more than just a traditional Indian breakfast. It is an opportunity to create something extraordinary.",
  "My vision is to take Poha to the next level by combining traditional expertise with modern technology, continuous innovation and uncompromising quality standards.",
  "I want to bring Indian Poha to every household and establish a new benchmark for quality, taste and trust in the industry.",
  "Our journey is not just about manufacturing Poha; it is about redefining the future of Poha.",
];

export default function DirectorsVision() {
  return (
    <Box id="directors-vision" bg="#182b36" color="white" py={{ base: 16, md: 24 }}>
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 16 }} alignItems="center">
          <SlideRight>
            <Box
              position="relative"
              minH={{ base: "360px", md: "560px" }}
              overflow="hidden"
              borderRadius="3xl"
              bg="linear-gradient(145deg, #d9b77b 0%, #9d7540 42%, #263d43 100%)"
              display="grid"
              placeItems="center"
              border="1px solid"
              borderColor="whiteAlpha.300"
              textAlign="center"
              px={{ base: 6, md: 10 }}
            >
              <Box position="absolute" w="72%" aspectRatio="0.82" border="1px solid" borderColor="whiteAlpha.400" borderRadius="48% 48% 22px 22px" />
              <Stack align="center" gap={4} zIndex={1}>
                <Text color="whiteAlpha.800" textTransform="uppercase" letterSpacing="0.25em" fontSize="sm" fontWeight="bold">
                  Director
                </Text>
                <Heading as="h2" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="900" lineHeight="shorter" color="white">
                  Sanskar Khandelwal
                </Heading>
                <Text color="whiteAlpha.800" letterSpacing="0.08em">Khandelwal Industries</Text>
              </Stack>
            </Box>
          </SlideRight>

          <SlideLeft>
            <Stack gap={6} align="flex-start">
              <Text color="#e8bd72" textTransform="uppercase" letterSpacing="0.22em" fontSize="sm" fontWeight="bold">
                Director&apos;s Vision
              </Text>
              <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold" color="#e8bd72">
                Taking Poha to the Next Level.
              </Heading>
              <Box borderLeft="2px solid" borderColor="#e8bd72" pl={{ base: 5, md: 7 }}>
                <Stack gap={4}>
                  {visionParagraphs.map((paragraph) => (
                    <Text key={paragraph} color="whiteAlpha.800" lineHeight="tall" fontSize={{ base: "md", md: "lg" }}>
                      {paragraph}
                    </Text>
                  ))}
                </Stack>
              </Box>
              </Stack>
          </SlideLeft>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
