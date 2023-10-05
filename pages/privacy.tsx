import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Icon,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import { BsCheckLg } from "react-icons/bs"
import Image from "next/image"
import MotionLayout from "@/components/MotionLayout"

export default function Privacy() {
  return (
    <MotionLayout title="Privacy">
      <Container maxW={"container.xl"}>
        <Box
          as="h1"
          display={"flex"}
          justifyContent={"center"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          p={4}
          my={4}
        >
          Política de privacidade
        </Box>

        <Flex gap={2} justifyContent={"space-between"} fontSize={"sm"}>
          <Box
            w={{ base: "100%", lg: "50%" }}
            display={"flex"}
            gap={2}
            flexDirection={"column"}
            padding={2}
            textAlign={"justify"}
          >
            <Text as="p">
              O <strong>G&S Home Solutions</strong> tem o compromisso com a
              transparência, a privacidade e a segurança dos dados de seus
              clientes durante todo o processo de interação com nosso site ou
              plataforma EAD. Para que entendam melhor quais informações
              coletamos e como as utilizamos, armazenamos ou excluímos,
              detalhamos a seguir nossa Política de Privacidade.
            </Text>
            <Text as="p">
              Os dados cadastrais dos clientes não são divulgados para
              terceiros, exceto quando necessários para o processo de entrega,
              para cobrança ou participação em promoções solicitadas pelos
              clientes. Seus dados pessoais são peça fundamental para que o
              pedido chegue em segurança na sua casa, de acordo com o prazo de
              entrega estipulado.
            </Text>
            <Text as="p">
              A fim de facilitar o entendimento da nossa Política de
              Privacidade, apresentamos um resumo:
            </Text>
            <Text as="p">
              Agente de tratamento dos dados:{" "}
              <strong>G&S Home Solutions</strong>
            </Text>
            <Text as="p">
              Papel da <strong>G&S Home Solutions</strong> no tratamento dos
              dados: Predominantemente controlador
            </Text>
            <Text as="p">
              Tipo de informações pessoais coletadas: A{" "}
              <strong>G&S Home Solutions</strong> coleta as informações que o
              Cliente fornece quando se cadastra em nosso site ou plataforma
              EAD.
            </Text>
            <Text as="p">
              Com que finalidade utilizamos seus dados pessoais?
            </Text>
            <Text as="p">
              <Icon as={BsCheckLg} marginRight={2} />
              Para entregar os produtos ou serviços adquiridos; <br />
              <Icon as={BsCheckLg} marginRight={2} />
              Para mantê-lo informado sobre o status do seu pedido; <br />
              <Icon as={BsCheckLg} marginRight={2} />
              Para coordenar com parceiros a entrega ou disponibilização dos
              produtos; <br />
              <Icon as={BsCheckLg} marginRight={2} />
              Para enviar comunicações sobre serviços e proporcionar uma melhor
              experiência ao Cliente.
            </Text>
          </Box>
          <Box maxW={"50%"} display={{ base: "none", lg: "flex" }}>
            <Image
              src="/privacy.svg"
              alt="Imagem representando segurança cibernetica"
              width={848}
              height={598}
            />
          </Box>
        </Flex>
        <Text
          as="h2"
          display={"flex"}
          justifyContent={"center"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          p={4}
          my={4}
        >
          Seus direitos:
        </Text>
        <Flex
          flexDirection={"column"}
          fontSize={"sm"}
          mb={4}
          textAlign={"justify"}
        >
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    1 - A quem essa Política de Privacidade se aplica?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Aplica-se a todos os clientes da G&S Home Solutions, incluindo
                site e plataforma EAD, que de alguma forma tenham os dados
                pessoais tratados por nós.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    2- Que tipo de informações pessoais coletamos e utilizamos?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text as="p" mb={2}>
                  A G&S Home Solutions coleta e armazena os seguintes tipos de
                  informações:
                </Text>
                <Text as="p" mb={2}>
                  Informações que você nos fornece: A G&S Home Solutions coleta
                  informações do Cliente de diversas formas, quando faz um
                  pedido ou adquire um dos serviços oferecidos pelo site ou
                  plataforma EAD; quando interage com o Serviço de Atendimento
                  ao Consumidor; quando participa de pesquisas ou promoções de
                  marketing etc. Dentre as informações que podem ser solicitadas
                  estão: nome completo, e-mail, CPF, CNPJ, data de nascimento,
                  gênero, endereço, números de telefone.
                </Text>
                <Text as="p" mb={2}>
                  Informações coletadas automaticamente pelo G&S Home Solutions:
                  coletamos e armazenamos determinadas informações sempre que o
                  Cliente interage conosco. Por exemplo, utilizamos cookies e
                  obtemos informações quando seu navegador acessa o nosso site;
                  quando você clica em anúncios, e-mails de parceiros e outros
                  conteúdos fornecidos por nós em outros sites.
                </Text>
                <Text as="p" mb={2}>
                  Informações coletadas de outras fontes:
                  <br /> o provedores de dados (por exemplo, dados demográficos
                  relacionados a anúncios publicitários on-line e com base nos
                  interesses do Cliente).
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    3- Por que solicitamos seus dados pessoais?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text as="p" mb={2}>
                  Entregar os produtos adquiridos ou o serviço contratado;
                  otimizar sua interação conosco; garantir a segurança do site e
                  dos dados que processa; informar o Cliente sobre as ofertas e
                  divulgar os nossos serviços; cumprir obrigações legais; fins
                  administrativos e de gestão; fornecimento dos dados permite
                  entregar os produtos ou serviços adquiridos; enviar
                  atualizações sobre o status do pedido e comunicações de
                  serviços; coordenar com parceiros a entrega ou
                  disponibilização de serviços; prestar serviços adequados às
                  necessidades do Cliente; melhorar a experiência de compra dos
                  clientes na G&S Home Solutions; fazer análises e pesquisas de
                  mercado; manter o Cliente informado sobre os produtos e
                  serviços que oferecemos; executar publicidade online
                  direcionada; prevenir, detectar e investigar atividades que
                  estejam em desacordo com o nosso Código de Conduta ou que
                  sejam proibidas ou ilegais; melhorar nosso website, produtos e
                  serviços.
                </Text>
                <Text as="p" mb={2}>
                  A G&S Home Solutions utiliza bases legais, que podem variar de
                  acordo com a finalidade da coleta, para tratar os dados
                  pessoais dos clientes. O prazo de armazenamento pode mudar
                  conforme a base legal aplicável a cada situação e a
                  finalidade.
                </Text>
                <Text as="p" mb={2}>
                  Os serviços de marketing são oferecidos por meio de
                  comunicações gratuitas sobre ofertas, serviços e produtos
                  dirigidas ao Cliente, relacionadas ao seu perfil no site e a
                  compras que fez. Esse serviço abrange e-mails, SMS e WhatsApp.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    4 - Com quem compartilhamos seus dados?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text as="p" mb={2}>
                  As informações coletadas somente serão compartilhadas quando
                  forem necessárias:
                </Text>
                <UnorderedList>
                  <ListItem>
                    (i) para prestação adequada dos serviços objeto de suas
                    atividades com empresas parceiras;
                  </ListItem>
                  <ListItem>(ii) proteção em caso de conflito;</ListItem>
                  <ListItem>
                    (iii) mediante decisão judicial ou requisição de autoridade
                    competente;
                  </ListItem>
                  <ListItem>
                    (iv) com empresas provedoras de infraestrutura tecnológica e
                    operacional, como empresas intermediadoras de pagamento e
                    provedoras de serviço de armazenamento de informações.
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    5 - Transferência Internacional de dados
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text as="p" mb={2}>
                  Nesses casos, os dados são tratados de acordo com a LGPD (Lei
                  Geral de Proteção de Dados) e demais legislações de proteção.
                  Tomamos medidas de segurança de acordo com nossas políticas e
                  adotamos cláusulas padrão nos contratos com fornecedores e
                  prestadores de serviço.
                </Text>
                <Text as="p" mb={2}>
                  Ao navegar em nosso site, ou se comunicar conosco, você
                  concorda com o tratamento de suas informações, inclusive a
                  transferência internacional de dados, quando necessário.
                  Adotamos medidas para garantir que quaisquer informações
                  coletadas sejam tratadas com segurança, conforme os padrões de
                  proteção de dados e de acordo com esta Política de
                  Privacidade.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    6 - Por quanto tempo armazenamos informações pessoais?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Armazenamos as informações dos Clientes de acordo com as normas
                de prescrição do Direito brasileiro.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    7 - Quais são os direitos do titular de dados?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text as="p" mb={2}>
                  A partir do início da vigência da LGPD, o titular dos dados
                  pessoais terá o direito de obter da G&S Home Solutions, a
                  qualquer momento, mediante requisição formal, informações
                  referentes aos seus dados. A G&S Home Solutions terá 30 dias
                  para responder às solicitações dos titulares. Os pedidos serão
                  analisados conforme previsto em legislação vigente e, por
                  questões legais, algumas solicitações podem não ser atendidas.
                </Text>
                <Text as="p" mb={2}>
                  Os titulares dos dados, segundo o texto da LGPD, podem exercer
                  os seus direitos por meio de:
                </Text>
                <OrderedList>
                  <ListItem>Confirmação da existência de tratamento;</ListItem>
                  <ListItem>Acesso aos dados;</ListItem>
                  <ListItem>
                    Correção de dados incompletos, inexatos ou desatualizados;
                  </ListItem>
                  <ListItem>
                    Anonimização, bloqueio ou eliminação de dados
                    desnecessários, excessivos ou tratados em desconformidade
                    com o disposto nesta Lei;
                  </ListItem>
                  <ListItem>
                    Portabilidade dos dados a outro fornecedor de serviço ou
                    produto, mediante requisição expressa, de acordo com a
                    regulamentação da autoridade nacional, observados os
                    segredos comercial e industrial;
                  </ListItem>
                  <ListItem>
                    Eliminação dos dados pessoais tratados com o consentimento
                    do titular;
                  </ListItem>
                  <ListItem>
                    Informação das entidades públicas e privadas com as quais o
                    controlador realizou uso compartilhado de dados;
                  </ListItem>
                  <ListItem>
                    Informação sobre a possibilidade de não fornecer
                    consentimento e sobre as consequências da negativa;
                  </ListItem>
                  <ListItem>Revogação do consentimento.</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    8 - Como exercer os seus direitos?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Você pode exercer seus direitos acessando a seção “Privacidade”,
                disponível no site
                https://www.gshomesolutions.com.br/politicadeprivacidade/. Além
                disso, pode entrar em contato pelo e-mail
                seguranca@gshomesolutions.com.br. Para mudar suas preferências
                em relação às notificações (incluindo as comunicações de
                marketing), a qualquer momento, você pode acessar o formulário
                de contato no site/ página Política de Privacidade. Se não
                quiser receber nossas comunicações de marketing, também pode
                cancelar a assinatura clicando no link enviado junto com o
                e-mail do marketing.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    9 - Crianças podem comprar na G&S Home Solutions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A G&S Home Solutions vende produtos com classificação de riscos,
                e suas compras devem ser comprados por adultos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    10 - Cookies e tecnologias semelhantes
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text as="p" mb={2}>
                  Cookies são pequenos arquivos de dados que são colocados no
                  seu computador ou em outros dispositivos (como ‘smartphones’
                  ou ‘tablets’) enquanto você navega no site. Utilizamos
                  cookies, pixels e outras tecnologias (coletivamente,
                  “cookies”) para reconhecer seu navegador ou dispositivo,
                  aprender mais sobre seus interesses, fornecer recursos e
                  serviços essenciais e também para:
                </Text>
                <UnorderedList>
                  <ListItem>
                    acompanhar suas preferências para enviar somente anúncios de
                    seu interesse.
                  </ListItem>
                  <ListItem>
                    realização de pesquisas e diagnósticos para melhorar o
                    conteúdo, produtos e serviços;
                  </ListItem>
                  <ListItem>impedir atividades fraudulentas;</ListItem>
                  <ListItem>melhorar a segurança</ListItem>
                </UnorderedList>
                <Text as="p" mb={2}>
                  Clique em ‘Ajuda’, nas configurações do seu navegador, para
                  saber como impedi-lo de aceitar cookies e para ser notificado
                  quando receber novos; para ver quando eles expiram e para
                  desativá-los. Nos links abaixo você encontra mais detalhes
                  sobre como desativar os cookies dos navegadores mais
                  populares:
                </Text>
                <UnorderedList>
                  <ListItem>Google Chrome</ListItem>
                  <ListItem>Mozilla Firefox</ListItem>
                  <ListItem>Safari</ListItem>
                  <ListItem>Internet Explorer</ListItem>
                  <ListItem>Microsoft Edge</ListItem>
                  <ListItem>Opera</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    11 - Como você pode manter suas informações pessoais
                    seguras?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A G&S Home Solutions utiliza os melhores protocolos de segurança
                para preservar a privacidade dos dados dos Clientes, mas também
                recomenda medidas de proteção individual. Para mais informações,
                você pode consultar nosso Guia de segurança.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    12 - Outras informações importantes sobre proteção de dados
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Se alguma mudança for feita em nossa Política de Privacidade,
                você receberá um e-mail.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    13 - Como entrar em contato com o encarregado da proteção de
                    dados da G&S Home Solutions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                O encarregado da proteção de dados é o responsável escolhido
                pelo G&S Home Solutions para atuar como canal de comunicação
                entre o controlador, os titulares dos dados e a Autoridade
                Nacional de Proteção de Dados (ANPD), quando ela for
                formalizada. Qualquer dúvida poderá ser encaminhada para o
                e-mail seguranca@gshomesolutions.com.br.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    14 - Legislação e foro
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Esta política será regida, interpretada e executada de acordo
                com as Leis da República Federativa do Brasil, especialmente a
                Lei nº 13.709/2018, independentemente das Leis de outros estados
                ou países, sendo competente o foro de domicílio do Cliente para
                dirimir qualquer dúvida decorrente deste documento.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Text as="p" py={2}>
            Estamos sempre à disposição para esclarecer suas dúvidas e colocar
            você no controle dos seus dados pessoais. Contem conosco para
            mantê-los informados!
          </Text>
          <Text as="footer" p={2}>
            Última atualização: 16 de outubro de 2020
          </Text>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
