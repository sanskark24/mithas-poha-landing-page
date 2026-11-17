import { Box, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SlideUp from "../animations/SlideUp";
import trustPhoto from "../assets/trust.jpg";

const reasons = [
  {
    title: "Carefully selected grains",
    description: "Quality paddy is selected for excellent appearance, texture and consistency in every batch.",
  },
  {
    title: "Naturally pure white poha",
    description: "Carefully monitored processing helps deliver clean, bright and visually appealing poha.",
  },
  {
    title: "Triple-cleaning process",
    description: "Multi-stage cleaning helps remove unwanted impurities before the poha is packed.",
  },
  {
    title: "Fluffy, satisfying results",
    description: "Developed for excellent swelling and a soft, fluffy texture when prepared.",
  },
  {
    title: "Made for snack makers",
    description: "Lower oil absorption and lasting crispiness support namkeen, mixtures and other food applications.",
  },
  {
    title: "Consistent from batch to batch",
    description: "Reliable quality for households, retailers, wholesalers, hotels and food businesses.",
  },
  {
    title: "Always improving",
    description: "Over 100 quality and product tests, alongside two years of dedicated research and development, inform our work.",
  },
  {
    title: "Proudly made in Ujjain",
    description: "Khandelwal Industries combines product innovation and advanced processing with a commitment to customers across India.",
  },
];

const varieties = [
  {
    name: "Special Breakfast Poha",
    description: "For everyday breakfasts, with a soft texture and excellent swelling.",
  },
  {
    name: "Hotel Special Poha",
    description: "For hotels, restaurants, caterers and commercial kitchens.",
  },
  {
    name: "Mota / Dagdi Poha",
    description: "A thicker poha variety suited to frying.",
  },
  {
    name: "Sika / Roasted / Bhajka Poha",
    description: "Roasted poha varieties for distinctive taste and preparation.",
  },
];

export default function WhyChooseMithas() {
  return (
    <Box as="section" id="why-mithas" bg="#fffdf7" py={{ base: 16, md: 24 }} overflow="hidden">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 16 }} alignItems="center">
          <SlideUp>
            <Box
              aspectRatio={{ base: "4 / 5", md: "4 / 5" }}
              maxH="620px"
              overflow="hidden"
              borderRadius="3xl"
              bg="#f7f3e9"
              boxShadow="xl"
            >
              <Image
                src={trustPhoto}
                alt="A chef holding a pack of Mithas Poha"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center 20%"
              />
            </Box>
          </SlideUp>

          <SlideUp delay={0.12}>
            <Stack gap={5}>
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.18em" fontSize="sm" fontWeight="bold">
                Quality you can believe in
              </Text>
              <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="shorter" color="gray.900">
                Why Choose <Text as="span" color="#a35c15">Mithas Poha?</Text>
              </Heading>
              <Heading as="h3" size={{ base: "md", md: "lg" }} color="gray.700">
                Experience the goodness of India’s premium quality poha.
              </Heading>
              <Text color="gray.600" lineHeight="tall">
                Quality is more than appearance—it is purity, texture, taste, consistency and trust. Mithas Poha,
                from Khandelwal Industries in Ujjain, Madhya Pradesh, is made with carefully selected paddy,
                advanced processing and a strong focus on quality.
              </Text>
              <Text color="gray.600" lineHeight="tall">
                From everyday breakfasts to large-scale namkeen making, we bring together carefully chosen grains,
                monitored processing and dependable performance. Great poha begins with great grains, and every
                step is designed to deliver a consistently satisfying experience.
              </Text>
            </Stack>
          </SlideUp>
        </SimpleGrid>

        <Box mt={{ base: 16, md: 24 }}>
          <SlideUp>
            <Stack textAlign="center" gap={3} mb={10}>
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.18em" fontSize="sm" fontWeight="bold">
                The Mithas difference
              </Text>
              <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }} color="gray.900">
                What makes Mithas Poha different?
              </Heading>
            </Stack>
          </SlideUp>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={5}>
            {reasons.map((reason, index) => (
              <SlideUp key={reason.title} delay={index * 0.06}>
                <Box
                  h="100%"
                  minH={{ md: "210px" }}
                  bg="white"
                  p={{ base: 5, md: 6 }}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="blackAlpha.100"
                  boxShadow="sm"
                  transition="transform 0.25s ease, box-shadow 0.25s ease"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
                >
                  <Text color="#a35c15" fontWeight="bold" fontSize="sm">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading as="h4" size="sm" mt={3} color="gray.900">
                    {reason.title}
                  </Heading>
                  <Text mt={2} color="gray.600" fontSize="sm" lineHeight="tall">
                    {reason.description}
                  </Text>
                </Box>
              </SlideUp>
            ))}
          </SimpleGrid>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} mt={{ base: 16, md: 20 }}>
          <SlideUp>
            <Box h="100%" bg="#f7f3e9" borderRadius="3xl" p={{ base: 6, md: 9 }}>
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.16em" fontSize="sm" fontWeight="bold">
                From Ujjain to India
              </Text>
              <Heading as="h3" size="xl" mt={3} color="gray.900">
                A commitment to quality
              </Heading>
              <Text mt={4} color="gray.600" lineHeight="tall">
                Located in Ujjain, Madhya Pradesh, Khandelwal Industries is dedicated to premium-quality poha,
                product innovation and customer satisfaction. Whether you are a household, retailer, hotel or
                wholesale buyer, Mithas stands for quality you can believe in.
              </Text>
            </Box>
          </SlideUp>
          <SlideUp delay={0.12}>
            <Box h="100%" bg="#f7f3e9" borderRadius="3xl" p={{ base: 6, md: 9 }}>
              <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.16em" fontSize="sm" fontWeight="bold">
                Our range of premium poha
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={5} mt={5}>
                {varieties.map((variety) => (
                  <Box key={variety.name}>
                    <Heading as="h4" size="sm" color="gray.900">{variety.name}</Heading>
                    <Text mt={1} color="gray.600" fontSize="sm" lineHeight="tall">{variety.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </SlideUp>
        </SimpleGrid>

        <SlideUp>
          <Stack
            textAlign="center"
            align="center"
            gap={3}
            mt={{ base: 14, md: 20 }}
            px={{ base: 4, md: 12 }}
          >
            <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.18em" fontSize="sm" fontWeight="bold">
              Our promise
            </Text>
            <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }} color="gray.900">
              Mithas, a name you believe in.
            </Heading>
            <Text maxW="3xl" color="gray.600" lineHeight="tall">
              We are building a promise of quality, trust and continuous improvement. Every grain reflects our
              dedication, every batch represents our commitment, and every customer inspires us to do better.
            </Text>
            <Text color="#a35c15" fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
              Mithas Poha — Goodness of Grains. Quality You Can Believe In.
            </Text>
            <Text color="gray.500" fontSize="sm">Khandelwal Industries | Ujjain, Madhya Pradesh, India</Text>
          </Stack>
        </SlideUp>
      </Container>
    </Box>
  );
}
