import dynamic from "next/dynamic";
import { AspectRatio } from "@chakra-ui/react";
const ReactPlayerNoSSR = dynamic(() => import("react-player"), { ssr: false });

interface VideoFrameProps {
  embedID: string;
  title: string;
  ariaDescription: string;
}

export default function VideoFrame({
  embedID,
  title,
  ariaDescription,
}: VideoFrameProps) {
  return (
    <AspectRatio ratio={16 / 9}>
      <ReactPlayerNoSSR
        url={`https://www.youtube.com/watch?v=${embedID}`}
        title={title}
        ariaDescription={ariaDescription}
      />
    </AspectRatio>
  );
}
