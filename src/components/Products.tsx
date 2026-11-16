import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SlideUp from "../animations/SlideUp";
import { products, type PohaProduct } from "../data/products";

function ProductCard({ product }: { product: PohaProduct }) {
  return (
    <Box
      as="article"
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="md"
      border="1px solid"
      borderColor="blackAlpha.100"
      transition="transform 0.25s ease, box-shadow 0.25s ease"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
    >
      <Box bg="#f7f3e9" h={{ base: "220px", md: "240px" }} p={4}>
        <Image src={product.image} alt={product.name} w="100%" h="100%" objectFit="contain" />
      </Box>
      <Stack align="flex-start" gap={3} p={{ base: 5, md: 6 }}>
        <Text textTransform="uppercase" letterSpacing="0.14em" fontSize="xs" fontWeight="bold" color="#a35c15">
          {product.brand}
        </Text>
        <Heading as="h3" size="md" color="gray.900" minH={{ md: "3.5rem" }}>
          {product.name}
        </Heading>
        <Text color="gray.600" fontSize="sm" lineHeight="tall" minH={{ md: "4.5rem" }}>
          {product.description}
        </Text>
        <Button as="a" href={`/products/${product.slug}`} variant="outline" colorPalette="orange" mt={1}>
          View Details <span aria-hidden="true">→</span>
        </Button>
      </Stack>
    </Box>
  );
}

function BrandSelection({ brand, items }: { brand: PohaProduct["brand"]; items: PohaProduct[] }) {
  return (
    <Box as="section" mt={{ base: 12, md: 16 }}>
      <Stack direction={{ base: "column", sm: "row" }} align={{ sm: "end" }} justify="space-between" mb={7} gap={2}>
        <Box>
          <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.18em" fontSize="sm" fontWeight="bold">
            {brand === "Mithas" ? "Our signature range" : "A second house selection"}
          </Text>
          <Heading as="h2" mt={2} size={{ base: "xl", md: "2xl" }} color="gray.900">{brand}</Heading>
        </Box>
        <Text color="gray.600" fontWeight="semibold">{items.length} Products</Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 5, md: 7 }}>
        {items.map((product, index) => (
          <SlideUp key={product.slug} delay={index * 0.06}>
            <ProductCard product={product} />
          </SlideUp>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default function Products() {
  const mithasProducts = products.filter((product) => product.brand === "Mithas");
  const amritKalashProducts = products.filter((product) => product.brand === "Amrit Kalash");

  return (
    <Box id="products" bg="#DFF1FE" w="100%" py={{ base: 16, md: 24 }} className="section">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SlideUp>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Text color="#a35c15" textTransform="uppercase" letterSpacing="0.2em" fontWeight="bold" fontSize="sm">
              Seven selections · Two brands
            </Text>
            <Heading mt={3} fontWeight="800" color="gray.900" lineHeight="shorter" fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}>
              Signature Poha Selection
            </Heading>
            <Text mt={5} color="gray.600" lineHeight="tall" fontSize={{ base: "md", md: "lg" }}>
              Find the right poha for family breakfasts, food service and snack making.
            </Text>
          </Box>
        </SlideUp>
        <BrandSelection brand="Mithas" items={mithasProducts} />
        <BrandSelection brand="Amrit Kalash" items={amritKalashProducts} />
      </Container>
    </Box>
  );
}
