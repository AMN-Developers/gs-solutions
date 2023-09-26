import { Flex, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface NavbarHamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function NavbarHamburger({ isOpen, onToggle }: NavbarHamburgerProps) {
  return (
    <Flex
      flex={{ base: 1, md: 'auto' }}
      ml={{ base: -2 }}
      display={{ base: 'flex', md: 'none' }}>
      <IconButton
        onClick={onToggle}
        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
        variant={'ghost'}
        aria-label={'Toggle Navigation'}
      />
    </Flex>
  )
}