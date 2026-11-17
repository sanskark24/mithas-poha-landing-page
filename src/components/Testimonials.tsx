import { Avatar, Box, Card, Container, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import SlideUp from "../animations/SlideUp";

interface ITestimonial {
    name: string;
    designation: string;
    description: string;
    color: string;
}
function Testimonial({ name, designation, description, color }: ITestimonial) {
    return (
        <Card.Root
            width="320px"
            rounded="4xl"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: "translateY(-8px)", boxShadow: "xl" }}
        >
            <Card.Body>
                <HStack mb="6" gap="3">
                    <Avatar.Root variant={'solid'} colorPalette={color}>
                        <Avatar.Fallback name={name} />
                    </Avatar.Root>
                    <Stack gap="0">
                        <Text fontWeight="semibold" textStyle="sm">
                            {name}
                        </Text>
                        <Text color="fg.muted" textStyle="sm">
                            {designation}
                        </Text>
                    </Stack>
                </HStack>
                <Card.Description>
                    <Text fontStyle={'italic'}>"{description}"</Text>
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}
export default function Testimonials() {
    return (
        <Box bg={"#D1FAE4"} w={'100%'} className="section" >
            <Container maxW="7xl" >
                <SlideUp>
                    <Stack textAlign={'center'} marginBottom={10} w={'100%'}>
                        <Heading fontWeight={700} fontSize={{ base: '4xl' }}>
                            Voices of <Text as="span" color={"#047857"}>Delight</Text>
                        </Heading>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: 'md', sm: 'md', md: 'md' }}
                        >
                            Hear what our customers have to say about Mithas Poha.
                        </Heading>
                    </Stack>
                    <Stack direction={{ base: 'column', md: 'row' }} display={'flex'} justifyContent={'space-around'}>
                        <Testimonial
                            color="yellow"
                            name="Manoj Sharma"
                            designation="Home Cook, Indore"
                            description="I've tried various brands, but Mithas Poha is simply the best. The flakes are perfect, and it cooks so fluffy without getting soggy. My family loves it!" />

                        <Testimonial
                            color="green"
                            name="Harpreet Singh"
                            designation="Restaurant Owner, Ujjain"
                            description="For our hotel, Mithas Poha is the only choice. Consistent quality, great taste, and our customers always compliment the poha dishes. Highly reliable." />

                        <Testimonial
                            color="pink"
                            name="Anjali Patel"
                            designation="Caterer, Bhopal"
                            description="Mithas Namkeen Special Poha is fantastic for my catering business. It makes the crispiest chivda. My clients always ask for it!" />
                    </Stack>

                </SlideUp>

            </Container>
        </Box>

    );
}