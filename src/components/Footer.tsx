'use client'

import {
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import logo from "../assets/logo.png";
import SlideUp from "../animations/SlideUp";

export default function Footer() {
    return (
        <SlideUp>
        <Stack
            w={'100%'}
            bg={'#1E293B'}
            color={'gray.500'}
            py={4}
            gap={4}
            justify={'center'}
            align={'center'}>
            <Image
                src={logo}
                textAlign={'center'}
                fontFamily="heading"
                width={100}
            />

            <Stack direction={'column'} textAlign={'center'}>
                <Text fontSize={'2xl'} fontWeight={600} className='gradient-text'>Mithas Poha</Text>
                <Text>by Khandelwal Industries</Text>
            </Stack>
            <Stack direction={'row'} gap={6}>
                <Text fontSize={'xs'}>© 2025 Mithas Poha (Khandelwal Industries). All Rights Reserved. Designed with ❤️.</Text>

            </Stack>
        </Stack>
        </SlideUp>
    )
}