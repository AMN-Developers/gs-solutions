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
    label: "Lotus",
    href: "/lotus",
    children: [
      {
        label: "Power Trio",
        href: "/power-trio",
      },
      {
        label: "Fix Flot",
        href: "/fix-flot",
      },
      {
        label: "Linha de Hieginização",
        href: "/hieginizacao",
      },
      {
        label: "Linha de Hipermiabilizantes",
        href: "/hipermiabilizantes",
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
  {
    label: "Calculadora de Diluição",
    href: "/calculadora",
  },
  {
    label: "Empresa",
    children: [
      {
        label: "Contatos e Homologações",
        href: "/contatos",
      },
      {
        label: "Programa de Fidelidade",
        href: "/fidelidade",
      },
      {
        label: "Sustentabilidade",
        href: "/sustentabilidade",
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
