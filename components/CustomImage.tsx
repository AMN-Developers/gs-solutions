import Image from 'next/image';
import { chakra } from '@chakra-ui/react';

export const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});