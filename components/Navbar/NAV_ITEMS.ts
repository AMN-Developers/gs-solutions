export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Linha de Produtos",
    children: [
      {
        label: "Lotus",
        href: "/lotus",
        children: [
          {
            label: "Power Trio",
            href: "/power-trio",
          },
          {
            label: "Fix Flot",
            href: "/fixflot",
          },
          {
            label: "Linha de higienização",
            href: "/higienizacao",
          },
          {
            label: "Linha de impermeabilizantes",
            href: "/impermeabilizantes",
          },
          {
            label: "Linha Max",
            href: "/max",
          },
          {
            label: "Linha Auto",
            href: "/auto",
          },
          {
            label: "Linha Tecnica",
            href: "/tecnica",
          },
        ],
      },
      {
        label: "Limpoo",
        href: "/limpoo",
        children: [
          {
            label: "Teste",
            href: "#",
          },
        ],
      },
    ],
  },

  {
    label: "Calculadora de Diluição",
    href: "/calculadora",
  },
  {
    label: "Empresa",
    children: [
      {
        label: "Certificados e Homologações",
        href: "/certificado",
      },
      {
        label: "Programa de Fidelidade",
        href: "/fidelidade",
      },
      {
        label: "Sustentabilidade",
        href: "/sustentabilidade",
      },
      {
        label: "Manual",
        href: "/#manual",
      },
    ],
  },
  {
    label: "Rastreio",
    href: "/rastreio",
  },
  {
    label: "Distribuidores G&S",
    href: "/distribuidores",
  },
]
