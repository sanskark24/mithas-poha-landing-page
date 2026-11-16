import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

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
          <Box
            role="img"
            aria-label="Portrait placeholder for Sanskar Khandelwal"
            position="relative"
            minH={{ base: "360px", md: "560px" }}
            overflow="hidden"
            borderRadius="3xl"
            bg="linear-gradient(145deg, #d9b77b 0%, #9d7540 42%, #263d43 100%)"
            display="grid"
            placeItems="center"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            <Box position="absolute" w="72%" aspectRatio="0.82" border="1px solid" borderColor="whiteAlpha.400" borderRadius="48% 48% 22px 22px" />
            <Stack align="center" gap={3} zIndex={1}>
              <Text fontFamily="serif" fontSize={{ base: "8xl", md: "9xl" }} lineHeight="1" color="whiteAlpha.900">SK</Text>
              <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.25em" color="whiteAlpha.900">Portrait of the Director</Text>
            </Stack>
            <Text position="absolute" bottom={5} left={0} right={0} textAlign="center" px={4} fontSize="xs" color="whiteAlpha.800">
              Replace this placeholder with Sanskar Khandelwal’s photograph
            </Text>
          </Box>

          <Stack gap={6} align="flex-start">
            <Text color="#e8bd72" textTransform="uppercase" letterSpacing="0.22em" fontSize="sm" fontWeight="bold">
              Director&apos;s Vision
            </Text>
            <Box>
              <Heading as="h2" fontFamily="serif" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="medium" lineHeight="1.05">
                Sanskar Khandelwal
              </Heading>
              <Text mt={3} color="whiteAlpha.700" letterSpacing="0.08em">Director, Khandelwal Industries</Text>
            </Box>
            <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold" color="#e8bd72">
              Taking Poha to the Next Level.
            </Heading>
            <Box borderLeft="2px solid" borderColor="#e8bd72" pl={{ base: 5, md: 7 }}>
              <Stack gap={4}>
                {visionParagraphs.map((paragraph) => (
                  <Text key={paragraph} color="whiteAlpha.800" lineHeight="tall" fontSize={{ base: "md", md: "lg" }}>
                    {paragraph}
                  </Text>
                ))}
                <Text pt={2} color="#e8bd72" fontWeight="semibold">— Sanskar Khandelwal, Director</Text>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
