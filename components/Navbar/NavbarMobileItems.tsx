import {
  Box,
  Stack,
  Text,
  Icon,
  Collapse,
  useDisclosure
} from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface MobileNavItemProps {
  label: string;
  href?: string;
  children?: Array<MobileNavItemProps>;
}

export default function NavbarMobileItems({ label, href, children }: MobileNavItemProps) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        onClick={children && ((e) => e.preventDefault())}
        py={2}
        as={Link}
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        display={'flex'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={'gray.600'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as={Link} key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}