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
import Poha from "../assets/poha.png";

export default function OurCommitment() {
  return (
    <Box className="section">
      <Container maxW="6xl">
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} mx={10}>
            <SlideRight>
              <Box bg={'white'} boxShadow="md" paddingRight={5} paddingLeft={5} borderRadius={'md'}>
                <Image
                  alt="Login Image"
                  objectFit="fit"
                  width={400}
                  src={Poha}
                />
              </Box>
            </SlideRight>

          </Flex>
          <Flex p={8} flex={1} align="center" justify="center">
            <SlideLeft>
              <Stack gap={6} w="full" maxW="lg">
                <Box>
                  <Text className='gradient-text' fontSize={'lg'} fontWeight={800}>
                    Our Commitment
                  </Text>
                  <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
                    <Text as="span" >
                      {'Crafted with care, sealed with trust'}
                    </Text>
                  </Heading>
                </Box>
                <Text fontSize='md' color="gray.500">
                  At Khandelwal Industries, quality isn't just a standard; it's our promise. From sourcing the finest paddy to employing state-of-the-art processing techniques, every step is meticulously monitored. Our FSSAI certification (License: 11424730000246) is a testament to our unwavering dedication to hygiene, safety, and excellence.
                  <br />
                  <br />
                  We ensure that every pack of Mithas Poha delivers the authentic taste and nutrition that you and your family deserve.
                </Text>
              </Stack>
            </SlideLeft>
          </Flex>
        </Stack>
      </Container>
    </Box>


  );
}
