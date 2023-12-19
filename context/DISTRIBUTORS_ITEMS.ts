export interface Distributor {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  state: string;
  latitude: number;
  longitude: number;
  zoom: number;
  distance?: number;
}

export const DISTRIBUTORS_ITEMS: Array<Distributor> = [
  {
    id: 1,
    name: "QUICK CLEAN",
    address: "Rua Tabajara, 124 - Vila São Jorge - Guarulhos / SP",
    phone: "(11) 2414-4145",
    website: "https://www.quickclean.com.br/",
    state: "SP",
    latitude: -23.46517,
    longitude: -46.52364,
    zoom: 14,
  },
  {
    id: 2,
    name: "LOJA DO PROFISSIONAL",
    address: "Rua Guaicurus, 101 - Água Branca - São Paulo / SP",
    phone: "(11) 3863-7200",
    website: "https://www.lojadoprofissional.com.br/",
    state: "SP",
    latitude: -23.52348,
    longitude: -46.68671,
    zoom: 14,
  },
  {
    id: 3,
    name: "JATO SUPER",
    address:
      "Av. Feira De Santana, 71 – Jd. Vale do Sol - São José dos Campos / SP",
    phone: "(12) 3931-0594",
    website: "https://www.jatosuper.com.br/",
    state: "SP",
    latitude: -23.25721,
    longitude: -45.91123,
    zoom: 14,
  },
  {
    id: 4,
    name: "ARTWAX",
    address: "LOJA VIRTUAL",
    phone: "(11) 2339-3524 / (11) 98492-5351",
    website: "https://www.artwax.com.br/",
    state: "SP",
    latitude: 0,
    longitude: 0,
    zoom: 7,
  },
  {
    id: 5,
    name: "PRISMA TECIDOS",
    phone: "(11) 4391-4800 / (11) 99191-9433",
    address:
      "Rua 24 de Fevereiro, 73 – Jardim Olavo Bilac, São Bernardo do Campo / SP",
    state: "SP",
    latitude: -23.70128,
    longitude: -46.556,
    zoom: 14,
    website: "https://www.prismatecidos.com.br/",
  },
  {
    id: 6,
    name: "BURNOUT CA LTDA",
    phone: "(11) 94233-3524",
    address: "Alameda São Caetano, 960 - Jardim Santa Maria, Santo André / SP",
    state: "SP",
    latitude: -23.64728,
    longitude: -46.54712,
    zoom: 14,
    website: "https://www.burnout.com.br/",
  },
];
