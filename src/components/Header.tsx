'use client'

import {
    Box,
    Collapsible,
    Flex,
    IconButton,
    Image,
    Link,
    Popover,
    Stack,
    Text,
    useBreakpointValue,
    useDisclosure
} from '@chakra-ui/react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const DesktopNav = ({items}: {items: NavItem[]}) => {
    const linkColor = 'gray.600';
    const linkHoverColor = 'gray.800';

    return (
        <Stack direction={'row'} gap={4}>
            {items.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover.Root trigger={'hover'} placement={'bottom-start'}>
                        <Popover.Trigger>
                            <Link
                                as="a"
                                p={2}
                                onClick={() => navItem.ref.current.scrollIntoView({ behavior: 'smooth' })}
                                fontSize={'md'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </Popover.Trigger>
                    </Popover.Root>
                </Box>
            ))}
        </Stack>
    )
}

const MobileNav = ({items}: {items: NavItem[]}) => {
    return (
        <Stack bg={'white'} p={4} display={{ md: 'none' }}>
            {items.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, ref }: NavItem) => {
    return (
        <Stack gap={4} >
            <Link
                py={2}
                as="button"
                onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={'gray.600'}>
                    {label}
                </Text>
            </Link>
        </Stack>
    )
}

interface IHeaderProps{
    items: NavItem[];
}

export default function Header({items}: IHeaderProps) {
    const { open, onToggle } = useDisclosure()

    return (
        <Box position={'sticky'} zIndex={1000} top={0} left={0} w={'full'} gap={12}>
            <Flex
                bg={'#ffffff'}
                color={'gray.600'}
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom="1px solid"
                borderColor={'gray.200'}
                align="center"
            >
                <Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        variant="ghost"
                        aria-label="Toggle Navigation"
                    >
                        {open
                            ? <FaTimes size={12} />
                            : <FaBars size={12} />
                        }

                    </IconButton>
                </Flex>
                <Flex flex={1} justify={{ base: 'center', md: 'start' }}>
                    <Image
                        src={logo}
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily="heading"
                        color={'gray.800'}
                        width={100}
                    />

                </Flex>
                <Stack flex={{ base: 1, md: 0 }} direction="row" gap={12} display={{ base: 'none', md: 'flex' }} justify="end">
                    <DesktopNav items={items} />
                </Stack>
            </Flex>
            <Collapsible.Root open={open}>
                <Collapsible.Content>
                    <MobileNav items={items} />
                </Collapsible.Content>
            </Collapsible.Root>

        </Box>
    )
}

export interface NavItem {
    label: string
    ref?: any
}


