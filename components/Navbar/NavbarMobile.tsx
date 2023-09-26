import {
  Stack,
  Collapse
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface MobileNavItemProps {
  children: ReactNode;
  isOpen: boolean;
}

export default function NavbarMobile({ children, isOpen }: MobileNavItemProps) {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Stack bg={'white'} p={4} display={{ md: 'none' }}>
        {children}
      </Stack>
    </Collapse>
  )
}