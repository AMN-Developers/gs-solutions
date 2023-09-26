import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface HeaderRootProps {
  children: ReactNode;
}

export default function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <Box
      as='header'
      bgColor='#20274D'
    >
      {children}
    </Box>
  )
}