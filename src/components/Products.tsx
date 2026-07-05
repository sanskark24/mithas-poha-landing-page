import { Box, Card, Container, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import SlideUp from "../animations/SlideUp";
import hotel from "../assets/hotel.jpg";
import mota from "../assets/mota.jpeg";
import patla from "../assets/patla.jpg";
import packing from "../assets/packing.jpg";
interface IProduct {
    name: string;
    image: string;
    description: string;
}
function Product({ name, image, description }: IProduct) {
    return (
        <Card.Root maxW="sm" >
            <Image
                src={image}
                maxH={450}
                alt="Poha Product"
            />
            <Card.Body gap="2">
                <Card.Title>{name}</Card.Title>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
                <Link className="gradient-text" href='#'>Learn more</Link>
            </Card.Footer>
        </Card.Root>
    );
}
export default function Products() {
    return (
        <Box bg={"#DFF1FE"} w={'100%'} className="section">
            <Container maxW="6xl" >
                <SlideUp>
                    <Box textAlign={'center'} marginBottom={10}>
                        <Heading fontWeight={700} fontSize={{ base: '4xl' }}>
                            Our Signature Poha Selection
                        </Heading>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: 'md', sm: 'md', md: 'md' }}
                        >
                            Catering to every taste and culinary need, from homes to hotels.
                        </Heading>
                    </Box>
                </SlideUp>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <SlideUp>
                        <Flex justify="around">
                            <Product
                                name="Mithas 1KG Poha"
                                image={packing}
                                description="Our Mithas Packing Poha is Indore's famous poha which is great in taste , high in protein " />
                        </Flex>
                    </SlideUp>
                    <SlideUp>
                        <Flex justify="around">
                            <Product
                                name="Breakfast Special Poha"
                                image={patla}
                                description="Our Patla Poha is light, fluffy, and perfect for a quick, wholesome start to your day. Loved by families across India." />
                        </Flex>
                    </SlideUp>
                    <SlideUp>
                        <Flex justify="around">
                            <Product
                                name="Hotel Special Poha"
                                image={hotel}
                                description="The preferred choice of chefs for its consistent quality, superior texture, and ability to absorb flavors beautifully in bulk preparations." />
                        </Flex>
                    </SlideUp>
                    <SlideUp>
                        <Flex justify="around">
                            <Product
                                name="Namkeen Special Poha"
                                image={mota}
                                description="Crispy, versatile, and ideal for creating your favorite savory snacks (namkeen). Adds the perfect crunch and taste." />
                        </Flex>
                    </SlideUp>
                </Stack>
            </Container>
        </Box >
    );
}
