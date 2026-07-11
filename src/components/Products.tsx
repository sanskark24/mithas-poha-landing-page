import {
    Box,
    Card,
    Container,
    Heading,
    Image,
    Link,
    SimpleGrid,
} from "@chakra-ui/react";
import SlideUp from "../animations/SlideUp";
import hotel from "../assets/hotel.jpg";
import mota from "../assets/mota.jpg";
import patla from "../assets/patla.jpg";
import packing from "../assets/packing.jpg";

interface IProduct {
    name: string;
    image: string;
    description: string;
}

function Product({ name, image, description }: IProduct) {
    return (
        <Card.Root
            h="100%"
            overflow="hidden"
            borderRadius="2xl"
            bg="white"
            border="none"
            boxShadow="lg"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
                "& .product-image": {
                    transform: "scale(1.05)",
                },
                "& .product-link": {
                    transform: "translateX(4px)",
                    color: "blue.600",
                },
            }}
        >
            {/* Image Container with contain to prevent cropping */}
            <Box overflow="hidden" bg="gray.50">
                <Image
                    className="product-image"
                    src={image}
                    alt={name}
                    w="100%"
                    h={{ base: "220px", md: "250px" }}
                    objectFit="contain"
                    transition="transform 0.5s ease"
                    p={4}
                />
            </Box>

            <Card.Body
                display="flex"
                flexDirection="column"
                gap={3}
                flex="1"
                p={{ base: 5, md: 6 }}
            >
                <Card.Title
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="800"
                    color="gray.800"
                    lineHeight="tight"
                >
                    {name}
                </Card.Title>

                <Card.Description
                    color="gray.600"
                    flex="1"
                    fontSize={{ base: "sm", md: "md" }}
                    lineHeight="tall"
                >
                    {description}
                </Card.Description>
            </Card.Body>

            <Card.Footer px={{ base: 5, md: 6 }} pb={{ base: 5, md: 6 }} pt={0}>
                <Link
                    href="#"
                    className="product-link gradient-text"
                    fontWeight="bold"
                    fontSize="sm"
                    display="inline-flex"
                    alignItems="center"
                    transition="all 0.3s ease"
                >
                    Learn More →
                </Link>
            </Card.Footer>
        </Card.Root>
    );
}

export default function Products() {
    return (
        <Box
            bg="#DFF1FE"
            w="100%"
            py={{ base: 16, md: 24 }}
            className="section"
        >
            <Container maxW="7xl" px={{ base: 4, md: 8 }}>
                <SlideUp>
                    <Box
                        textAlign="center"
                        mb={{ base: 12, md: 16 }}
                        maxW="3xl"
                        mx="auto"
                    >
                        <Heading
                            fontWeight="800"
                            color="gray.900"
                            lineHeight="shorter"
                            fontSize={{
                                base: "3xl",
                                sm: "4xl",
                                lg: "5xl",
                            }}
                        >
                            Our Signature Poha Selection
                        </Heading>

                        <Heading
                            mt={5}
                            fontWeight="500"
                            color="gray.600"
                            lineHeight="tall"
                            fontSize={{
                                base: "md",
                                md: "lg",
                            }}
                        >
                            Catering to every taste and culinary need, from
                            homes to hotels. Discover the perfect crunch and authentic flavor.
                        </Heading>
                    </Box>
                </SlideUp>

                <SimpleGrid
                    columns={{
                        base: 1,
                        sm: 2,
                        lg: 4,
                    }}
                    gap={{ base: 6, md: 8 }}
                >
                    <SlideUp>
                        <Product
                            name="Mithas 1KG Poha"
                            image={packing}
                            description="Our Mithas Packing Poha is Indore's famous poha, known for its authentic taste, premium quality, and high nutritional value. Perfect for families who love a healthy and delicious breakfast."
                        />
                    </SlideUp>

                    <SlideUp>
                        <Product
                            name="Breakfast Special Poha"
                            image={patla}
                            description="Our Patla Poha is light, fluffy, and cooks quickly, making it the perfect choice for a wholesome breakfast. Loved by families for its soft texture and delicious taste."
                        />
                    </SlideUp>

                    <SlideUp>
                        <Product
                            name="Hotel Special Poha"
                            image={hotel}
                            description="Specially crafted for hotels, restaurants, and caterers. It delivers consistent quality, excellent texture, and absorbs flavors beautifully for large-scale cooking."
                        />
                    </SlideUp>

                    <SlideUp>
                        <Product
                            name="Namkeen Special Poha"
                            image={mota}
                            description="Crispy and versatile, our Mota Poha is ideal for making a wide variety of namkeen and snacks. It provides the perfect crunch while maintaining excellent taste."
                        />
                    </SlideUp>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
