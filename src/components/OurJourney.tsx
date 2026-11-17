import { Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SlideUp from "../animations/SlideUp";

const commitments = [
  {
    title: "30+ years of experience",
    description: "Three decades of knowledge and expertise in the poha industry.",
  },
  {
    title: "Carefully selected paddy",
    description: "Premium-quality poha made with a focus on the quality of our grains.",
  },
  {
    title: "Advanced processing",
    description: "Modern cleaning and processing techniques support quality at every stage.",
  },
  {
    title: "Continuous improvement",
    description: "Research, development and product improvement are part of our journey.",
  },
  {
    title: "Customer trust",
    description: "Consistent quality and customer satisfaction remain our commitment.",
  },
];

const whyMithasReasons = [
  "Carefully selected grains and premium-quality poha.",
  "Multi-stage cleaning for a cleaner finished product.",
  "Fluffy swelling, lasting crispness and lower oil absorption.",
  "Consistent quality for homes, hotels and food businesses.",
];

const pohaRange = [
  {
    name: "Special Breakfast Poha",
    description: "For everyday breakfasts.",
  },
  {
    name: "Hotel Special Poha",
    description: "For hotels, restaurants and commercial kitchens.",
  },
  {
    name: "Mota / Dagdi Poha",
    description: "For frying.",
  },
  {
    name: "Sika / Roasted / Bhajka Poha",
    description: "Roasted poha varieties.",
  },
];

export default function OurJourney() {
  return (
    <Box as="section" id="our-journey" bg="#fffdf7" py={{ base: 16, md: 24 }}>
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 16 }} alignItems="stretch">
          <SlideUp>
            <Stack gap={5} h="100%" justify="center">
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.18em" fontSize="sm" fontWeight="bold">
                Our Journey
              </Text>
              <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="shorter" color="gray.900">
                30+ Years of Trust, Quality &amp; Excellence
              </Heading>
              <Heading as="h3" size={{ base: "md", md: "lg" }} color="gray.700">
                From Ujjain to the world—a journey built on quality.
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                Every successful journey begins with a vision. Ours began with a simple belief: to deliver the
                finest quality poha through dedication, innovation and an uncompromising commitment to excellence.
              </Text>
              <Text color="gray.600" lineHeight="tall">
                With more than 30 years of experience in the poha industry, Khandelwal Industries has built a
                legacy rooted in quality, trust and customer satisfaction. From our roots in Ujjain, Madhya
                Pradesh, we have evolved our manufacturing capabilities to serve customers who value premium
                poha. Today, Mithas combines traditional expertise with modern manufacturing techniques.
              </Text>
            </Stack>
          </SlideUp>

          <SlideUp delay={0.12}>
            <Box
              position="relative"
              h="100%"
              minH={{ base: "300px", md: "420px" }}
              p={{ base: 7, md: 10 }}
              borderRadius="3xl"
              overflow="hidden"
              bg="#182b36"
              color="white"
              display="flex"
              alignItems="center"
            >
              <Box
                position="absolute"
                w="300px"
                h="300px"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="full"
                top="-110px"
                right="-80px"
              />
              <Stack position="relative" gap={5}>
                <Text color="#e8bd72" textTransform="uppercase" letterSpacing="0.2em" fontSize="sm" fontWeight="bold">
                  Three decades. One commitment.
                </Text>
                <Heading as="h3" fontSize={{ base: "3xl", md: "4xl" }} lineHeight="shorter">
                  Quality, at every step.
                </Heading>
                <Text color="whiteAlpha.800" lineHeight="tall">
                  Our experience guides the way we select raw materials, improve processing and deliver poha
                  that meets the expectations of our customers.
                </Text>
                <SimpleGrid columns={2} gap={4} pt={2}>
                  <Box borderLeft="2px solid" borderColor="#e8bd72" pl={4}>
                    <Text color="#e8bd72" fontSize="2xl" fontWeight="bold">30+</Text>
                    <Text color="whiteAlpha.800" fontSize="sm">years in the poha industry</Text>
                  </Box>
                  <Box borderLeft="2px solid" borderColor="#e8bd72" pl={4}>
                    <Text color="#e8bd72" fontSize="2xl" fontWeight="bold">Worldwide</Text>
                    <Text color="whiteAlpha.800" fontSize="sm">ambition, rooted in Ujjain</Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </Box>
          </SlideUp>
        </SimpleGrid>

        <Box mt={{ base: 16, md: 24 }}>
          <SlideUp>
            <Stack textAlign="center" gap={3} mb={10}>
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.18em" fontSize="sm" fontWeight="bold">
                Three decades of experience
              </Text>
              <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }} color="gray.900">
                One commitment—quality.
              </Heading>
            </Stack>
          </SlideUp>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap={4}>
            {commitments.map((item, index) => (
              <SlideUp key={item.title} delay={index * 0.06}>
                <Box
                  h="100%"
                  minH={{ md: "190px" }}
                  bg="#f7f3e9"
                  p={{ base: 5, md: 6 }}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="blackAlpha.100"
                  transition="transform 0.25s ease, box-shadow 0.25s ease"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
                >
                  <Text color="#a35c15" fontSize="sm" fontWeight="bold">
                    0{index + 1}
                  </Text>
                  <Heading as="h4" size="sm" mt={3} color="gray.900">
                    {item.title}
                  </Heading>
                  <Text mt={2} color="gray.600" fontSize="sm" lineHeight="tall">
                    {item.description}
                  </Text>
                </Box>
              </SlideUp>
            ))}
          </SimpleGrid>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6} mt={{ base: 14, md: 20 }}>
          <SlideUp>
            <Box h="100%" p={{ base: 6, md: 8 }} border="1px solid" borderColor="blackAlpha.100" borderRadius="3xl">
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.16em" fontSize="sm" fontWeight="bold">
                From Ujjain to international markets
              </Text>
              <Heading as="h3" size="xl" mt={3} color="gray.900">
                Sharing the goodness of poha with the world.
              </Heading>
              <Text mt={4} color="gray.600" lineHeight="tall">
                What began as a vision to deliver quality poha has grown beyond geographical boundaries. Our
                distribution reaches customers across multiple countries, reflecting the trust of customers and
                business partners. We aim to make Mithas a recognised name in premium poha around the globe.
              </Text>
            </Box>
          </SlideUp>
          <SlideUp delay={0.1}>
            <Box h="100%" p={{ base: 6, md: 8 }} border="1px solid" borderColor="blackAlpha.100" borderRadius="3xl">
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.16em" fontSize="sm" fontWeight="bold">
                Our range of poha
              </Text>
              <Heading as="h3" size="xl" mt={3} color="gray.900">
                A poha for every preparation.
              </Heading>
              <Stack gap={3} mt={4}>
                {pohaRange.map((variety) => (
                  <Box key={variety.name}>
                    <Heading as="h4" size="sm" color="gray.900">{variety.name}</Heading>
                    <Text mt={1} color="gray.600" fontSize="sm" lineHeight="tall">{variety.description}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </SlideUp>
          <SlideUp delay={0.2}>
            <Box h="100%" p={{ base: 6, md: 8 }} bg="#f7f3e9" borderRadius="3xl">
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.16em" fontSize="sm" fontWeight="bold">
                Why Mithas?
              </Text>
              <Heading as="h3" size="xl" mt={3} color="gray.900">
                Quality you can believe in.
              </Heading>
              <Stack gap={3} mt={4}>
                {whyMithasReasons.map((reason) => (
                  <Text key={reason} color="gray.600" lineHeight="tall">
                    <Text as="span" color="#a35c15" fontWeight="bold">✓ </Text>
                    {reason}
                  </Text>
                ))}
              </Stack>
            </Box>
          </SlideUp>
        </SimpleGrid>

        <SlideUp>
          <Stack
            textAlign="center"
            align="center"
            gap={4}
            mt={{ base: 14, md: 20 }}
            px={{ base: 4, md: 12 }}
          >
            <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.2em" fontSize="sm" fontWeight="bold">
              Our Vision
            </Text>
            <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }} color="gray.900">
              Taking Indian poha to the world.
            </Heading>
            <Text maxW="3xl" color="gray.600" lineHeight="tall">
              We envision making Mithas Poha a globally recognised premium brand. With decades of experience,
              continuous innovation and a strong commitment to quality, we aspire to expand our reach, strengthen
              our international distribution network and introduce the authentic goodness of Indian poha to more
              markets worldwide.
            </Text>
            <Text color="#a35c15" fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
              30+ Years of Experience. One Promise of Quality. A Vision Without Boundaries.
            </Text>
            <Heading as="h4" size="md" color="gray.900">
              MITHAS POHA — A Name You Believe In.
            </Heading>
            <Text color="gray.500" fontSize="sm">Khandelwal Industries | Ujjain, Madhya Pradesh, India</Text>
          </Stack>
        </SlideUp>
      </Container>
    </Box>
  );
}
