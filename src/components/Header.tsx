'use client'

import {
    Box,
    Collapsible,
    Flex,
    IconButton,
    Image,
    Link,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const DesktopNav = ({items}: {items: NavItem[]}) => {
    const linkColor = 'gray.600';
    const linkHoverColor = 'gray.800';

    return (
        <Stack direction={'row'} gap={{ md: 1, lg: 3 }}>
            {items.map((navItem) => (
                <Box key={navItem.label}>
                    <Link
                        href={`${import.meta.env.BASE_URL}#${navItem.id}`}
                        p={2}
                        onClick={(event) => {
                            if (navItem.ref?.current) {
                                event.preventDefault();
                                navItem.ref.current.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        fontSize={{ md: 'sm', lg: 'md' }}
                        fontWeight={500}
                        color={linkColor}
                        whiteSpace="nowrap"
                        transition="color 0.2s ease, transform 0.2s ease"
                        _hover={{ textDecoration: 'none', color: linkHoverColor, transform: "translateY(-2px)" }}
                    >
                        {navItem.label}
                    </Link>
                </Box>
            ))}
        </Stack>
    )
}

const MobileNav = ({items, onNavigate}: {items: NavItem[]; onNavigate: () => void}) => {
    return (
        <Stack bg={'white'} p={4} display={{ md: 'none' }}>
            {items.map((navItem) => (
                <MobileNavItem key={navItem.label} item={navItem} onNavigate={onNavigate} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ item, onNavigate }: {item: NavItem; onNavigate: () => void}) => {
    return (
        <Stack gap={4} >
            <Link
                href={`${import.meta.env.BASE_URL}#${item.id}`}
                py={2}
                onClick={(event) => {
                    onNavigate();
                    if (item.ref?.current) {
                        event.preventDefault();
                        item.ref.current.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={'gray.600'}>
                    {item.label}
                </Text>
            </Link>
        </Stack>
    )
}

interface IHeaderProps{
    items: NavItem[];
}

export default function Header({items}: IHeaderProps) {
    const { open, onToggle, onClose } = useDisclosure()

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
                    <Link
                        href={import.meta.env.BASE_URL}
                        aria-label="Mithas Poha home"
                        display="inline-flex"
                        transition="transform 0.25s ease"
                        _hover={{ transform: "scale(1.06)" }}
                    >
                        <Image
                            src={logo}
                            alt="Mithas Poha"
                            fontFamily="heading"
                            color={'gray.800'}
                            width={100}
                        />
                    </Link>

                </Flex>
                <Stack flex={{ base: 1, md: 0 }} direction="row" gap={4} display={{ base: 'none', md: 'flex' }} justify="end">
                    <DesktopNav items={items} />
                </Stack>
            </Flex>
            <Collapsible.Root open={open}>
                <Collapsible.Content>
                    <MobileNav items={items} onNavigate={onClose} />
                </Collapsible.Content>
            </Collapsible.Root>

        </Box>
    )
}

export interface NavItem {
    label: string
    id: string
    ref?: { current: HTMLElement | null }
}


