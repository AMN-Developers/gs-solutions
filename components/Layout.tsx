import { Box, Stack, useDisclosure } from "@chakra-ui/react"
import { Header } from "./Header"
import { Navbar } from "./Navbar"
import DrawerRoot from "./Drawer/DrawerRoot"
import React from "react"
import { Footer } from "./Footer"
import CookieBanner from "@/components/CookieBanner"
import { AnimatePresence, motion } from "framer-motion"
import { bg } from "@/components/Header/HeaderBG"
import MobileItems from "./Navbar/MobileItems"
import MobileItemsCollapse from "./Navbar/MobileItemsCollapse"
import NavItem from "./Navbar/NavItem"
import NavPopover from "./Navbar/NavPopover"

interface LayoutProps {
  children: React.ReactNode
  route: string
}

export default function Layout({ children, route }: LayoutProps) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false })

  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)
  const openPDF = () => {
    window.open("/manual/manualdeuso.pdf", "_blank")
  }

  return (
    <>
      <Header.Root>
        <AnimatePresence>
          <Box
            as={motion.div}
            key={route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: "0.5", ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            bgImage={route in bg ? bg[route] : bg["/"]}
            bgPosition={{ base: "right", md: "center" }}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={-1}
          />
        </AnimatePresence>

        <Header.TopBar />
        <Navbar.Root>
          <Navbar.Hamburger isOpen={isOpen} onToggle={onToggle} />
          <Navbar.Desktop>
            <NavItem href="/" route={route} label="home" />
            <NavPopover label="linha de produtos">
              <Navbar.Sub label="LÓTUS" href="/lotus">
                <NavItem href="/powertrio" route={route} label="power trio" />
                <NavItem href="/fixflot" route={route} label="fix flot" />
                <NavItem href="/fireguard" route={route} label="fireguard" />
                <NavItem
                  href="/higienizacao"
                  route={route}
                  label="Linha de Higienização"
                />
                <NavItem
                  href="/impermeabilizantes"
                  route={route}
                  label="Linha de Impermeabilizantes"
                />
                <NavItem href="/auto" route={route} label="Linha Auto" />
              </Navbar.Sub>
              <Navbar.Sub label="LIMPOO" href="/limpoo">
                <NavItem href="/hidro" route={route} label="Hidro e óleo" />
              </Navbar.Sub>
            </NavPopover>
            <NavItem
              href="/calculadora"
              route={route}
              label="calculadora de diluição"
            />
            <NavPopover label="empresa">
              <NavItem
                href="/certificado"
                route={route}
                label="Certificados e Homologações"
              />
              <NavItem
                href="/fidelidade"
                route={route}
                label="Programa de Fidelidade"
              />
              <NavItem
                href="/sustentabilidade"
                route={route}
                label="Sustentabilidade"
              />
              <Box
                as="button"
                ref={btnRef}
                aria-label="Open menu"
                onClick={openPDF}
                px={2}
                bgColor={"none"}
                textTransform={"uppercase"}
                fontSize={"sm"}
                _hover={{
                  textDecoration: "none",
                  color: "#232c54",
                  fontWeight: "semibold",
                  transition: "all 0.3s ease-in-out",
                }}
                textAlign={"left"}
              >
                Manual de Uso
              </Box>
            </NavPopover>
            <NavItem href="/rastreio" route={route} label="Rastreio" />
            <NavItem
              href="/distribuidores"
              route={route}
              label="Distribuidores G&S"
            />
            <Box
              as="button"
              ref={btnRef}
              aria-label="Open menu"
              onClick={onOpenDrawer}
              padding={0}
              bgColor={"none"}
              textTransform={"uppercase"}
              fontSize={"sm"}
              _hover={{
                textDecoration: "none",
                color: "#232c54",
                fontWeight: "semibold",
                transition: "all 0.3s ease-in-out",
              }}
            >
              Contato
            </Box>
          </Navbar.Desktop>

          <Navbar.Mobile isOpen={isOpen}>
            <Stack spacing={4} w={"100%"}>
              <MobileItems label="Home" href="/" toggleMainDrawer={onToggle} />
              <MobileItemsCollapse label="Linha de Produtos">
                <MobileItemsCollapse label="Lótus">
                  <MobileItems
                    label="Power Trio"
                    href="/powertrio"
                    toggleMainDrawer={onToggle}
                  />
                  <MobileItems
                    label="Fix Flot"
                    href="/fixflot"
                    toggleMainDrawer={onToggle}
                  />
                  <MobileItems
                    label="Fireguard"
                    href="/fireguard"
                    toggleMainDrawer={onToggle}
                  />
                  <MobileItems
                    label="Linha de Higienização"
                    href="/higienizacao"
                    toggleMainDrawer={onToggle}
                  />
                  <MobileItems
                    label="Linha de Impermeabilizantes"
                    href="/impermeabilizantes"
                    toggleMainDrawer={onToggle}
                  />
                  <MobileItems
                    label="Linha Auto"
                    href="/auto"
                    toggleMainDrawer={onToggle}
                  />
                </MobileItemsCollapse>
              </MobileItemsCollapse>
              <MobileItems
                label="Calculadora de Diluição"
                href="/calculadora"
                toggleMainDrawer={onToggle}
              />
              <MobileItemsCollapse label="Empresa">
                <MobileItems
                  label="Certificados e Homologações"
                  href="/certificado"
                  toggleMainDrawer={onToggle}
                />
                <MobileItems
                  label="Programa de Fidelidade"
                  href="/fidelidade"
                  toggleMainDrawer={onToggle}
                />
                <MobileItems
                  label="Sustentabilidade"
                  href="/sustentabilidade"
                  toggleMainDrawer={onToggle}
                />
                <MobileItems
                  label="Manual de Uso"
                  href="/manual/manualdeuso.pdf"
                  toggleMainDrawer={onToggle}
                />
              </MobileItemsCollapse>
              <MobileItems
                label="Rastreio"
                href="/rastreio"
                toggleMainDrawer={onToggle}
              />
              <MobileItems
                label="Distribuidores G&S"
                href="/distribuidores"
                toggleMainDrawer={onToggle}
              />
            </Stack>
            <Box
              as="button"
              ref={btnRef}
              aria-label="Open menu"
              onClick={onOpenDrawer}
              padding={0}
              bgColor={"none"}
              fontSize={"md"}
              fontWeight={600}
              color={"gray.600"}
              py={2}
            >
              Contato
            </Box>
          </Navbar.Mobile>
        </Navbar.Root>
        <Header.Banner route={route} />
      </Header.Root>
      <DrawerRoot
        btnRef={btnRef}
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
      />
      <main>{children}</main>
      <Footer.Root>
        <Footer.FooterNav openDrawer={onOpenDrawer} />
        <Footer.LowBar />
      </Footer.Root>
      <CookieBanner />
    </>
  )
}
