import { AspectRatio, Box } from "@chakra-ui/react"
import { useState } from "react"
import Image from "next/image"

interface VideoFrameProps {
  embedID: string
  title: string
  ariaDescription: string
}

export default function VideoFrame({
  embedID,
  title,
  ariaDescription,
}: VideoFrameProps) {
  const [isImageClicked, setIsImageClicked] = useState(false)

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
              src="http://addplaybuttontoimage.way4info.net/Images/Icons/7.png"
              alt="play button"
              width={50}
              height={50}
            />
          </Box>
        </Box>
      ) : (
        <Box
          as="iframe"
          title={title}
          aria-description={ariaDescription}
          src={`https://www.youtube.com/embed/${embedID}?controls=2&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&fs=0&disablekb=1&autoplay=1`}
          allowFullScreen
          loading="lazy"
          rounded={"md"}
        />
      )}
    </AspectRatio>
  )
}
