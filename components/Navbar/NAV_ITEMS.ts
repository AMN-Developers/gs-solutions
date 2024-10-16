export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
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
        label: "Lótus",
        href: "/lotus",
        children: [
          {
            label: "Power Trio",
            href: "/powertrio",
          },
          {
            label: "Fix Flot",
            href: "/fixflot",
          },
          {
            label: "Fireguard",
            href: "/fireguard",
          },
          {
            label: "Linha de Higienização",
            href: "/higienizacao",
          },
          {
            label: "Linha de Impermeabilizantes",
            href: "/impermeabilizantes",
          },
          {
            label: "Linha Auto",
            href: "/auto",
          },
        ],
      },
      {
        label: "Limpoo",
        href: "/limpoo",
        children: [
          {
            label: "Produtos limpoo",
            href: "/produtoslimpoo",
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
        label: "Manual de Uso",
        href: "https://drive.google.com/file/d/1YxrvPivrUA4rsBp1OQDyy4gdvewZ3itS/view?usp=sharing",
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
];
