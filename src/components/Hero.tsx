'use client'

import {
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import { motion } from "framer-motion";
import { slideUp } from '../animations/AnimationStyles';
import './Hero.css';


export default function Hero({productRef}: {productRef: any}) {
    return (
        <Box className='rotated-bg'>
            <Container maxW="4xl" minHeight={'100vh'}>
                <Stack
                    as={Box}
                    textAlign="center"
                    gap={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}

                >
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <Box style={{ boxShadow: '0px 0px 40px 40px #000000;' }}
                            padding={{base: 5, md: 10}}
                            bg={'#ffffff80'}
                            animationDuration="slow"
                            animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
                        >
                            <Box>
                                <Heading fontWeight={800} fontSize={{ base: 'lg' }} className='gradient-text'>
                                    Welcome to Mithas Poha
                                </Heading>
                                <Heading
                                    fontWeight={800}
                                    fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                                    lineHeight="110%"
                                >
                                    Savor the
                                    <Text as="span" className='gradient-text'>
                                        {' Authentic Taste '}
                                    </Text>
                                    of India's Finest Poha
                                </Heading>
                            </Box>
                            <Text fontSize='lg' color="gray.500" px={10}>
                                Crafted with tradition by Khandelwal Industries, Ujjain. Pure, nutritious, and irresistibly delicious – the perfect start to your day, every day.
                            </Text>
                            <Stack
                                direction="column"
                                gap={3}
                                align="center"
                                position="relative"
                            >
                                <Button
                                    className='title-btn'
                                    rounded="full"
                                    px={8}
                                    py={6}
                                    _hover={{ bg: 'yellow.500' }}
                                    fontWeight={800}
                                    fontSize={'lg'}
                                    onClick={()=> productRef.current.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Discover Our Poha
                                </Button>
                            </Stack>
                        </Box>
                    </motion.div>

                </Stack>
            </Container>
        </Box>
    )
}