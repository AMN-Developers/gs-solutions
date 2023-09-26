import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { NAV_ITEMS } from './Navbar/NAV_ITEMS';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const { isOpen, onToggle } = useDisclosure()


  return (
    <>
      <NextSeo
        title={title + ' | G&S Home Solutions'}
        description={description}
        openGraph={{
          title: title + ' | G&S Home Solutions',
          description,
          locale: 'pt_BR',
          site_name: 'G&S Home Solutions',
          type: 'website',
          url: 'https://gshomesolutions.com.br',
        }}
      />
      <Header.Root>
        <Header.TopBar />
        <Navbar.Root>
          <Navbar.Hamburger isOpen={isOpen} onToggle={onToggle} />
          <Navbar.Desktop>
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                    <Box
                      as="a"
                      p={2}
                      href={navItem.href ?? '#'}
                      fontSize={'sm'}
                      fontWeight={500}
                      color='black'
                      __css={{
                        textTransform: 'uppercase',
                      }}
                      _hover={{
                        textDecoration: 'none',
                        color: '#20274D',
                      }}>
                      {navItem.label}
                    </Box>
                  </PopoverTrigger>

                  {navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={'xl'}
                      bg='white'
                      p={4}
                      rounded={'xl'}
                      minW={'sm'}>
                      <Stack>
                        {navItem.children.map((child) => (
                          <Navbar.Sub key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            ))}
          </Navbar.Desktop>
          <Navbar.Mobile isOpen={isOpen}>
            {NAV_ITEMS.map((navItem) => (
              <Navbar.MobileItems key={navItem.label} {...navItem} />
            ))}
          </Navbar.Mobile>
        </Navbar.Root>
        <Header.Banner />
      </Header.Root>
      <main>
        {children}
      </main>
    </>
  )
}