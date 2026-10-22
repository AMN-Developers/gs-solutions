import { Fragment } from "react";
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem,
  AccordionPanel, Box, Heading, Stack, Text,
} from "@chakra-ui/react";
import { impermeabilizantesFaq } from "@/libs/impermeabilizantesFaq";

function InlineText({ text }: { text: string }) {
  return <>{text.split(/(\*\*.*?\*\*)/g).map((part, index) => (
    <Fragment key={index}>
      {part.startsWith("**") && part.endsWith("**")
        ? <strong>{part.slice(2, -2)}</strong> : part}
    </Fragment>
  ))}</>;
}

export default function ImpermeabilizantesFaq() {
  return (
    <Box as="section" aria-labelledby="impermeabilizantes-faq-title"
      mt={{ base: 10, md: 16 }} mb={{ base: 16, md: 24 }} p={{ base: 4, md: 8 }}
      bg="#f8f8f8" borderRadius="md">
      <Heading as="h2" id="impermeabilizantes-faq-title"
        fontSize={{ base: "xl", md: "2xl" }} color="#183665" mb={6}>
        Perguntas frequentes sobre impermeabilizantes
      </Heading>
      <Accordion allowMultiple>
        {impermeabilizantesFaq.map((item) => (
          <AccordionItem key={item.question} borderColor="gray.200">
            <Heading as="h3" fontSize="md">
              <AccordionButton py={5} px={{ base: 2, md: 4 }}
                _expanded={{ bg: "blue.50", color: "blue.800" }}
                _hover={{ bg: "blue.50" }}
                _focusVisible={{ boxShadow: "outline" }}>
                <Box as="span" flex="1" textAlign="left" fontWeight="bold"
                  lineHeight="1.5" pr={4}>{item.question}</Box>
                <AccordionIcon flexShrink={0} />
              </AccordionButton>
            </Heading>
            <AccordionPanel px={{ base: 2, md: 4 }} pb={6} pt={4}>
              <Stack spacing={3} color="gray.700" fontSize="md" lineHeight="1.75">
                {item.paragraphs.map((paragraph, index) => (
                  <Text key={index}><InlineText text={paragraph} /></Text>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
