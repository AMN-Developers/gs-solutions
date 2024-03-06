import MotionLayout from "@/components/MotionLayout";
import { Container } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <MotionLayout title="404: This page could not be found">
      <Container
        as="section"
        maxW={"container.xl"}
        py={4}
        position={"relative"}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-lg">This page could not be found</p>
        </div>
      </Container>
    </MotionLayout>
  );
}
