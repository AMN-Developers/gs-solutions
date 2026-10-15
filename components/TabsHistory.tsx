import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";

const milestones = [
  ["2015", ["Nasce na junção de dois sócios (Geraldo e Sidney) o sonho de ter o próprio negócio de empreender e atuar no mercado de produção e aplicação de impermeabilizantes têxteis.", "Pesquisas de oportunidades de mercado e a criação da G&S Home Solutions. Junto com a sua criação vem o primeiro lançamento, o Lótus HS 1000 IMPERTUDO em formato Aerossol, com intuito de vender impermeabilizantes para lojistas."]],
  ["2016", ["A G&S começa a observar as necessidades do mercado de higienização profissional e seu desenvolvimento como nicho de mercado, e decide dividir o seu conhecimento de anos na indústria química têxtil com os profissionais de higienização e impermeabilização.", "Vendo a necessidade de um produto ecológico e não inflamável lança neste ano o Lótus HS 1000 ECO, e inicia a venda de produtos a granel em embalagens de 20 litros, diretamente voltado para o uso profissional."]],
  ["2017", ["Com o crescente aumento da demanda por novas tecnologias, a G&S completa a sua linha de impermeabilização com o lançamento do Lótus HS 1000 SAFE, seu impermeabilizante a base de solvente não inflamável.", "Neste mesmo ano lança o seu exclusivo Lótus PRE-IMPER, o primeiro produto do mercado brasileiro exclusivamente pensado para a preparação do substrato têxtil, antes do processo de impermeabilização. Revolucionando o mercado de impermeabilização e levando novos conceitos técnicos na resolução de muitos problemas antes existentes."]],
  ["2018", ["Com a necessidade de expandir suas tecnologias, desenvolvimento de novos produtos e crescimento na demanda de produção, a G&S se muda para um novo local de operações, maior e mais preparado para o atendimento das necessidades do mercado.", "Começa as pesquisas em produtos de higienização têxtil, e no mesmo ano é lançado o Lótus ALL-01 e o Lótus Tira-manchas, produtos especialmente desenvolvidos para o mercado de higienização de tecidos, com baixo índice de tensoativos e que pode ser utilizado em todos os tipos de substratos têxteis, ideal para substratos que passaram pelo processo de impermeabilização."]],
  ["2019", ["Sempre em busca da melhor qualidade para os seus clientes, começa o processo de certificação ISO 9001, e consegue sua certificação no final do ano.", "Entendendo seu papel e responsabilidade social para com o meio-ambiente, se afilia ao projeto Eu-reciclo, levando a logística reserva e correto descarte de suas embalagens para o mercado, se colocando em um importante papel ambiental.", "O lançamento do ano é o Lótus MAX-FRESH, o finalizador de odores que não interfere em superfícies que irão ser impermeabilizadas."]],
  ["2020", ["Mesmo em um ano muito desafiador para todos, a G&S continuo o seu processo de certificação e se tornou uma empresa certificada ANVISA, além da notificação/registro de sua linha completa de produtos. Trazendo ainda mais segurança ao seu consumidor.", "O Lótus Fireguard foi o lançamento do ano! O protetor retardante de chamas de tecidos a base de água com eficiência comprovada pelo IPT em aplicações têxteis."]],
  ["2021", ["Com a crescente procura por produtos bactericidas e ambientes Bioseguros a G&S trouxe 2 novos produtos neste ano, o Lótus Desinfekt, poderoso desinfetante com ação comprovada na remoção de bactérias gran positivas e gran negativas e o inovador Lótus Tech Block, o impermeabilizante com efeito bacteriostático e virucida."]],
  ["2022", ["Analisando e ouvindo as necessidades do mercado de higienização e impermeabilização, a G&S traz o lançamento do complemento de sua linha de higienização.", "Com o Lótus Multi-C, detergente alcalino multisuperfície e o Lótus CitruSolv, um detergente solvente a base de D’limoneno eficiente removedor de sujidades.", "Neste mesmo ano completa a sua linha de impermeabilizantes com o Lótus Acqua-Pro, o protetor a base de água eficiente na proteção contra líquidos aquosos.", "Se tornando a primeira empresa brasileira com a linha completa de produtos profissionais voltada para o mercado têxtil de higienização e impermeabilização."]],
  ["2023", ["No início de 2020 a empresa G&S inicia seu projeto de construção de sua unidade fabril com mais de 2000 m2 e previsão de finalização no final do 1°semestre de 2023, esta nova unidade trará maior eficiência produtiva além de rapidez logística e possibilidades de ampliação de novos negócios!"]],
] as const;

export default function TabsHistory() {
  return (
    <Accordion allowMultiple defaultIndex={[0]} bg="white" borderRadius="xl" overflow="hidden" boxShadow="sm">
      {milestones.map(([year, paragraphs]) => (
        <AccordionItem key={year} borderColor="gray.100">
          <AccordionButton py={4} px={5} _hover={{ bg: "gray.50" }}>
            <Box flex="1" textAlign="left"><Text as="span" color="#31558e" fontWeight="bold">{year}</Text><Text as="span" color="gray.700" fontWeight="semibold" ml={3}>Marcos da G&S Home Solutions</Text></Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel px={5} pb={5} color="gray.600">
            {paragraphs.map((paragraph, index) => <Text key={index} mb={index === paragraphs.length - 1 ? 0 : 3}>{paragraph}</Text>)}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
