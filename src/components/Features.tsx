import { Box, Card, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import SlideUp from "../animations/SlideUp";

interface ITestimonial {
    name: string;
    icon: string;
    description: string;
    color: string;
}
function Feature({ name, icon, description, color }: ITestimonial) {
    return (
        <Card.Root shadow={'md'} variant={'elevated'} border={'none'} width="320px" rounded="4xl">
            <Card.Body>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    fontSize={'4xl'}
                    bg={color}>
                    {icon}
                </Flex>
                <Card.Title>{name}</Card.Title>
                <Card.Description>
                    <Text fontStyle={'italic'}>"{description}"</Text>
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}
export default function Features() {
    return (
        <Box w={'100%'} className="section" >
            <Container maxW="7xl" >
                <SlideUp
                    initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
                    whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                    viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
                    transition={{ duration: 0.8 }}
                >
                    <Stack textAlign={'center'} marginBottom={10} w={'100%'}>
                        <Heading fontWeight={700} fontSize={{ base: '4xl' }}>
                            The <Text as="span" className="gradient-text">Mithas </Text> Difference
                        </Heading>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: 'md', sm: 'md', md: 'md' }}
                        >
                            Hear what our customers have to say about Mithas Poha.
                        </Heading>
                    </Stack>
                </SlideUp>
                <SlideUp>
                    <Stack direction={{ base: 'column', md: 'row' }} display={'flex'} justifyContent={'space-around'}>
                        <Feature
                            color="green.100"
                            name="Premium Quality Paddy"
                            icon="🌾"
                            description="Sourced from the finest farms, ensuring every flake is perfect for a light, fluffy texture." />

                        <Feature
                            color="blue.100"
                            name="Authentic Indian Taste"
                            icon="😋"
                            description="Processed with traditional methods to retain the natural aroma and taste of true Indian Poha." />

                        <Feature
                            color="yellow.100"
                            name="Naturally Nutritious"
                            icon="💪"
                            description="A wholesome choice, rich in fiber and essential nutrients, perfect for a healthy lifestyle." />
                    </Stack>
                </SlideUp>
            </Container>
        </Box>

    );
}