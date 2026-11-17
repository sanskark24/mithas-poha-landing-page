'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import SlideLeft from '../animations/SlideLeft';
import SlideRight from '../animations/SlideRight';
import Trust from "../assets/trust.jpg";


export default function OurHeritage() {
  return (
    <Box className="section">
      <Container maxW="6xl">
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Flex p={{ base: 4, md: 8 }} flex={1} align="center" justify="center">
            <Stack gap={6} w="full" maxW="lg">
              <SlideRight>
                <Box>
                  <Text className='gradient-text' fontSize={'lg'} fontWeight={800}>
                    Our Heritage
                  </Text>
                  <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
                    <Text as="span" >
                      {'Generations of Trust: Khandelwal Industries'}
                    </Text>
                  </Heading>
                </Box>


                <Text fontSize='md' color="gray.500">
                  Mithas Poha is a proud offering from Khandelwal Industries, a name synonymous with quality and trust in Ujjain , Indore and beyond. With decades of experience in food processing, we are committed to upholding the rich culinary traditions of India.
                  <br />
                  <br />
                  Our mission is to bring the authentic taste of premium Poha to every household, ensuring health, happiness, and satisfaction with every bite. We are India's No. 1 Quality Poha Manufacturer.
                </Text>
              </SlideRight>
            </Stack>
          </Flex>
          <Flex flex={1} mx={{ base: 0, md: 10 }}>
            <SlideLeft>
              <Box bg={'white'} boxShadow="md" paddingRight={5} paddingLeft={5} borderRadius={'md'}>
                <Image
                  alt="Login Image"
                  objectFit="contain"
                  width="100%"
                  maxW="400px"
                  src={Trust}
                />
              </Box>
            </SlideLeft>

          </Flex>
        </Stack>
      </Container>
    </Box>


  );
}
