import { AspectRatio, Box } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

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
  const [isImageClicked, setIsImageClicked] = useState(false);

  return (
    <AspectRatio ratio={16 / 9}>
      {!isImageClicked ? (
        <Box
          as="button"
          onClick={() => setIsImageClicked(true)}
          position="relative"
          width="100%"
          height="100%"
        >
          <Box
            as={Image}
            src={`https://img.youtube.com/vi/${embedID}/sddefault.jpg`}
            layout="fill"
            objectFit="cover"
            alt="yt thumbnail"
            priority
            rounded={"md"}
          />
          <Box position={"absolute"}>
            <Image
              src={"/yt-playbutton.svg"}
              alt="play button"
              width={50}
              height={50}
            />
          </Box>
        </Box>
      ) : (
        <Box
          as={"iframe"}
          title={title}
          src={`https://www.youtube.com/embed/${embedID}?controls=1&modestbranding=1&rel=0&showinfo=1&color=white&iv_load_policy=3&fs=1&disablekb=1&autoplay=1`}
          loading="lazy"
          // eslint-disable-next-line jsx-a11y/aria-props
          aria-description={ariaDescription}
          rounded={"md"}
          allowFullScreen
        />
      )}
    </AspectRatio>
  );
}
