'use client'

import {
    Button,
    Container,
    Field,
    Flex,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react';
import { useState } from 'react';
import SlideUp from '../animations/SlideUp';
import "./Contact.css";

export default function Contact() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const isValid = () => {
        return name && phoneNumber && phoneNumber.length === 10;
    }

    const handleSubmit = async () => {
        if (isValid()) {
            setLoading(true);
            try {
                const response = await fetch('https://dbdj65ecy2.execute-api.ap-south-1.amazonaws.com/Prod/send-email/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        subject: "Response Received",
                        message: `Hi, we received a new response on your website. Here are the details they shared: \nName: ${name}\nPhone Number: ${phoneNumber}\nCity: ${city}\nMessage: ${message}\nThank You! `,
                        domain: "mithaspoha.in"
                    }),
                });
                if (!response.ok) console.error(`Server responded with status ${response.status}`);

            } catch (e) {
                console.log(e);
            }
            setLoading(false);
            setName('');
            setPhoneNumber('');
            setCity('');
            setMessage('');


        }
    }

    return (
        <Container className='contact-bg section' maxW="full" mt={0} centerContent overflow="hidden">
            <SlideUp>
                <Stack textAlign={'center'} w={'100%'}>
                    <Heading fontWeight={700} fontSize={{ base: '4xl' }}>
                        Get in Touch with Mithas
                    </Heading>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: 'md', sm: 'md', md: 'md' }}
                    >
                        We'd love to hear from you! For inquiries, distributorship, or bulk orders.
                    </Heading>
                </Stack>
                <Flex
                    direction={'column'}
                    bg="white"
                    borderRadius="lg"
                    gap={4}
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Field.Root required>
                        <Field.Label>
                            Full Name / Firm Name <Field.RequiredIndicator />
                        </Field.Label>
                        <Input value={name} onChange={(e) => setName(e.target.value)} name='name' placeholder="John Doe" required />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label>
                            Phone Number <Field.RequiredIndicator />
                        </Field.Label>
                        <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name='phone' placeholder="123456789" type='tel' required />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label>
                            City
                        </Field.Label>
                        <Input value={city} onChange={(e) => setCity(e.target.value)} name='city' placeholder="Your City" />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label>
                            Message (Optional)
                        </Field.Label>
                        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} name='message' rows={8} placeholder="Your Name or Firm Name" />
                    </Field.Root>

                    <Button
                        disabled={!isValid() || loading}
                        className='contact-btn'
                        rounded="md"
                        px={8}
                        py={6}
                        transition="transform 0.2s ease, box-shadow 0.2s ease"
                        _hover={{ bg: 'yellow.500', transform: "translateY(-2px)", boxShadow: "lg" }}
                        fontWeight={800}
                        fontSize={'lg'}
                        onClick={handleSubmit}
                    >
                        Send Inquiry
                    </Button>
                    <Stack textAlign={'center'} pt={10}>
                        <Text color={'gray.700'} fontSize={'sm'}>Or reach us directly at:</Text>
                        <Text color={'gray.700'} fontSize={'sm'}><Link href='tel:7697799979'>+91 76977-99979</Link> | mithaspoha@gmail.com</Text>
                        <Text color={'gray.500'} fontSize={'xs'}>Khandelwal Industries, Maksi Road Industrial Area, Ujjain (M.P.)</Text>
                        <Text color={'gray.500'} fontSize={'xx-small'}>GST: 23ABCFK8785B1ZC | FSSAI: 11424730000246</Text>
                    </Stack>
                </Flex>
            </SlideUp>

        </Container>
    )
}