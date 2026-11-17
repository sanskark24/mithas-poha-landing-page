import { Box, Button, Container, Heading, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { products } from "../data/products";

export default function ProductDetails({ slug }: { slug: string }) {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return (
      <Container maxW="4xl" py={{ base: 16, md: 24 }}>
        <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.16em" fontWeight="bold">Product not found</Text>
        <Heading mt={3}>We couldn’t find that selection.</Heading>
        <Link href={`${import.meta.env.BASE_URL}#products`} color="#a35c15" mt={6} display="inline-block">← Back to all poha</Link>
      </Container>
    );
  }

  const enquiry = `https://wa.me/917697799979?text=${encodeURIComponent(`Hello, I would like to enquire about ${product.name} (${product.brand}).`)}`;

  return (
    <Box bg="#fffdf7" minH="70vh" py={{ base: 10, md: 16 }}>
      <Container maxW="6xl" px={{ base: 4, md: 8 }}>
        <Link href={`${import.meta.env.BASE_URL}#products`} color="#94520f" fontWeight="semibold">← All products</Link>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 14 }} alignItems="center" mt={8}>
          <Box bg="#f7f3e9" borderRadius="3xl" minH={{ base: "300px", md: "510px" }} p={{ base: 5, md: 10 }} display="grid" placeItems="center">
            <Image src={product.image} alt={product.name} maxH={{ base: "280px", md: "440px" }} w="100%" objectFit="contain" />
          </Box>
          <Stack align="flex-start" gap={5}>
            <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.2em" fontWeight="bold">{product.brand}</Text>
            <Heading as="h1" size={{ base: "2xl", md: "4xl" }} color="gray.900">{product.name}</Heading>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">{product.description}</Text>
            <Button asChild colorPalette="orange" size="lg" rounded="full">
              <a href={enquiry} target="_blank" rel="noreferrer">Enquire about this product</a>
            </Button>
          </Stack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mt={{ base: 12, md: 20 }}>
          <Box>
            <Heading as="h2" size="md" mb={4}>Key features</Heading>
            <Stack gap={3}>{product.features.map((feature) => <Text key={feature} color="gray.600">• {feature}</Text>)}</Stack>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>Suitable applications</Heading>
            <Stack gap={3}>{product.applications.map((application) => <Text key={application} color="gray.600">• {application}</Text>)}</Stack>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>Packaging</Heading>
            <Text color="gray.600" lineHeight="tall">{product.packaging}</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
