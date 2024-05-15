export interface Distributor {
  id: number;
  name: string;
  address: string;
  phone: string;
  website?: string;
  state: string;
  latitude: number;
  longitude: number;
  zoom: number;
  distance?: number;
  country: string;
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
    country: "br",
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
    country: "br",
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
    country: "br",
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
    country: "br",
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
    country: "br",
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
    country: "br",
  },
  {
    id: 7,
    name: "HIGIENIZA SUL",
    phone: "(51) 3276-6071",
    address: "Av. Salvador Leão, 137 - Sarandi, Porto Alegre / RS",
    state: "RS",
    latitude: -29.99606,
    longitude: -51.12897,
    zoom: 14,
    website: "https://higienizasul.com.br/",
    country: "br",
  },
  {
    id: 8,
    name: "HIG SERVICE",
    phone: "(48) 3050-5757",
    address:
      "Rod. João Gualberto Soares, 56 - Sala 06 - Ingleses Norte, Florianópolis / SC",
    state: "SC",
    latitude: -27.43983,
    longitude: -48.40251,
    zoom: 14,
    website: "https://www.higservicestore.com/",
    country: "br",
  },
  {
    id: 9,
    name: "SHOWCAR",
    phone: "(48) 99147-9468",
    address: "R. Acre, 525 - Nossa Sra. da Salete, Criciúma / SC",
    state: "SC",
    latitude: -28.6845,
    longitude: -49.33872,
    zoom: 14,
    website: "https://showcar.net.br/",
    country: "br",
  },
  {
    id: 10,
    name: "LOJA VERDE CAR",
    phone: "(48) 99166-1521",
    address: "Av. Brg. da Silva Paes, 02 - Campinas, São José / SC",
    state: "SC",
    latitude: -28.6845,
    longitude: -49.33872,
    zoom: 14,
    website: "https://verdecar.com.br/",
    country: "br",
  },
  {
    id: 11,
    name: "SEMPRE LIMPO",
    phone: "(47) 99775-0527",
    address: "Av. Brg. Da Silva Paes, 02 - Campinas, São José / SC",
    state: "SC",
    latitude: -27.59783,
    longitude: -48.60749,
    zoom: 14,
    website: "https://www.instagram.com/smplimpo/",
    country: "br",
  },
  {
    id: 12,
    name: "CAR X PART’S",
    phone: "(41) 3779-7979",
    address: "Rua 24 de Maio, 1975 - Rebouças, Curitiba / PR",
    state: "PR",
    latitude: -25.45342,
    longitude: -49.26613,
    zoom: 14,
    website: "https://www.instagram.com/smplimpo/",
    country: "br",
  },
  {
    id: 13,
    name: "ASPIRADOR PROFISSIONAL",
    phone: "(21) 98087-0131",
    address: "JACAREPAGUÁ/RJ",
    state: "RJ",
    latitude: 0,
    longitude: 0,
    zoom: 14,
    website: "https://www.limpshop.com/",
    country: "br",
  },
  {
    id: 14,
    name: "EMPORIO CLEAN",
    phone: "(21) 98958-8258",
    address: "Alameda São Boaventura, 1190 - Fonseca, Niterói / RJ",
    state: "RJ",
    latitude: -22.88126,
    longitude: -43.0904,
    zoom: 14,
    website: "https://www.emporioclean.com.br/",
    country: "br",
  },
  {
    id: 15,
    name: "SB RIO",
    phone: "(21) 2424-5696",
    address:
      "Estr. do Gabinal, 1521 - Freguesia de Jacarepaguá, Rio de Janeiro / RJ",
    state: "RJ",
    latitude: -22.95203,
    longitude: -43.35057,
    zoom: 14,
    website: "https://www.sbrio.com/",
    country: "br",
  },
  {
    id: 16,
    name: "LOJA HIDRORIO Unidade I",
    phone: "(21) 2415-0666",
    address: "Estrada da Caroba, 1055 - Campo Grande, Rio de Janeiro / RJ",
    state: "RJ",
    latitude: -22.89725,
    longitude: -43.55782,
    zoom: 14,
    website: "loja.hidrorio.com.br",
    country: "br",
  },
  {
    id: 17,
    name: "LOJA HIDRORIO Unidade II",
    phone: "(21) 98346-5145",
    address:
      "Rua Professora Luiza Nogueira Gonçalves, 350 - Lj 109 - Recreio Dos Bandeirantes, Rio De Janeiro / RJ",
    state: "RJ",
    latitude: -23.00587,
    longitude: -43.44075,
    zoom: 14,
    website: "loja.hidrorio.com.br",
    country: "br",
  },
  {
    id: 18,
    name: "POLIBOX",
    phone: "(21) 2580-7544 / (21) 99632-7544",
    address:
      "CADEG Mercado Municipal do, R. Cap. Félix, 110 - 7 e 9 - Benfica, Rio de Janeiro / RJ",
    state: "RJ",
    latitude: -22.89459,
    longitude: -43.23656,
    zoom: 14,
    website: "https://www.polibox.com.br/",
    country: "br",
  },
  {
    id: 19,
    name: "CENTER CLEAN",
    phone: "(21) 3888-4139",
    address: "R. Braga, 18 - Penha Circular, Rio de Janeiro / RJ",
    state: "RJ",
    latitude: -22.8315,
    longitude: -43.27932,
    zoom: 14,
    website: "https://www.centercleanbrasil.com.br/",
    country: "br",
  },
  {
    id: 20,
    name: "CENTER POA",
    phone: "(22) 99268-8678",
    address: "Av. Joaquim Nogueira, 430 - São Cristóvão, Cabo Frio / RJ",
    state: "RJ",
    latitude: -22.89134,
    longitude: -42.03588,
    zoom: 14,
    website: "https://www.facebook.com/centerpoahigienizacao/",
    country: "br",
  },
  {
    id: 21,
    name: "RETOQUE TINTAS",
    phone: "(22) 2653-5374",
    address: "Rod. Amaral Peixoto, n° 144 - KM 71 - Bacaxá, Saquarema / RJ",
    state: "RJ",
    latitude: -22.88851,
    longitude: -42.46728,
    zoom: 14,
    website: "https://instagram.com/retoquetintas",
    country: "br",
  },
  {
    id: 22,
    name: "GBCLEAN PRODUTOS",
    phone: "(24) 993243810",
    address: "R. Luís Ferreira Pinto, 99 - Loja 22 - Manejo, Resende / RJ",
    state: "RJ",
    latitude: -22.46878,
    longitude: -44.45508,
    zoom: 14,
    website: "http://instagram.com/gbclean_produtos",
    country: "br",
  },
  {
    id: 23,
    name: "MAQ CLEAN",
    phone: "(27) 2141-8041",
    address: "Av. América, 487 - Jardim América, Cariacica / ES",
    state: "ES",
    latitude: -20.35225,
    longitude: -40.3657,
    zoom: 14,
    website: "https://www.maqclean.com.br/",
    country: "br",
  },
  {
    id: 24,
    name: "SPECIALE CLEAN",
    phone: "(31) 97309-2373",
    address: "Av. Jair Rodrigues Vale, 230a - Inconfidentes, Contagem / MG",
    state: "MG",
    latitude: -19.95318,
    longitude: -44.03852,
    zoom: 14,
    country: "br",
  },
  {
    id: 25,
    name: "DISTRIBUIDORA GATTI",
    phone: "(34) 99979-7859",
    address: "Av. Amazonas, 643 - Brasil, Uberlândia / MG",
    state: "MG",
    latitude: -18.89276,
    longitude: -48.26569,
    zoom: 14,
    country: "br",
  },
  {
    id: 26,
    name: "UNIÃO W1 W2",
    phone: "(31) 99422-8985",
    address: "Av. Geraldo Inácio, 482 - Melo Viana, Cel. Fabriciano / MG",
    state: "MG",
    latitude: -19.50239,
    longitude: -42.63044,
    zoom: 14,
    country: "br",
  },
  {
    id: 27,
    name: "HIGIENICAR",
    phone: "(31) 98817-0384",
    address: "R. Wenceslau Braz, 32 - Centro, Mariana / MG",
    state: "MG",
    latitude: -20.37541,
    longitude: -43.41756,
    zoom: 14,
    website: "https://instagram.com/higienecars",
    country: "br",
  },
  {
    id: 28,
    name: "EVOLUÇÃO CLEANING",
    phone: "(71) 99294-3418",
    address: "R. Buritirama - Recreio Ipitanga, Lauro de Freitas / BA",
    state: "BA",
    latitude: -12.88879,
    longitude: -38.3351,
    zoom: 14,
    website: "https://www.instagram.com/evolucao_cleaning/",
    country: "br",
  },
  {
    id: 29,
    name: "3S HIGIENIZAÇÕES",
    phone: "(75) 99946-5661",
    address: "Ribeira do Pombal / BA",
    state: "BA",
    latitude: -10.83619,
    longitude: -38.54356,
    zoom: 14,
    country: "br",
  },
  {
    id: 30,
    name: "HIGED PRODUTOS",
    phone: "(‪71) 98302‑2048‬",
    address: "Tv. Domingos Silva, 9 - Itapuã, Salvador / BA",
    state: "BA",
    latitude: -12.93471,
    longitude: -38.3628,
    zoom: 14,
    website: "https://www.instagram.com/higedprodutos/",
    country: "br",
  },
  {
    id: 31,
    name: "Paulista Lava rápido e Estacionamento",
    phone: "(79) 99660-0582‬",
    address: "Rua Acre, 2076 - América, Aracaju / SE",
    state: "SE",
    latitude: -10.923637,
    longitude: -37.076237,
    zoom: 14,
    country: "br",
  },
  {
    id: 32,
    name: "PRISMA ECO CLEAN",
    phone: "(81) 98322-9301‬",
    address: "Av. São Paulo, 797 - Jardim São Paulo, Recife / PE",
    state: "PE",
    latitude: -8.07895,
    longitude: -34.9414,
    zoom: 14,
    country: "br",
  },
  {
    id: 33,
    name: "JM IMPER",
    phone: "(87) 99189-6027‬",
    address: "R. 44 - São Goncalo, Petrolina / PE",
    state: "PE",
    latitude: -9.38528,
    longitude: -40.54943,
    zoom: 14,
    website: "https://www.jmimper.com.br",
    country: "br",
  },
  {
    id: 34,
    name: "LOJA AUTOCARE",
    phone: "(81) 99414-3313‬",
    address: "Av. Eng. Domingos Ferreira, 2784 - Boa Viagem, Recife / PE",
    state: "PE",
    latitude: -8.11373,
    longitude: -34.8946,
    zoom: 14,
    website: "https://www.lojaautocare.com.br",
    country: "br",
  },
  {
    id: 35,
    name: "LOJA ITP",
    phone: "(81) 97339-5358‬",
    address: "Estr. dos Remédios, 2226 - Loja 04 - Madalena, Recife / PE",
    state: "PE",
    latitude: -8.06018,
    longitude: -34.90713,
    zoom: 14,
    country: "br",
  },
  {
    id: 36,
    name: "CLEAN PREMIERE",
    phone: "(61) 99560-9796‬",
    address: "St. A Norte QNA 14 Lote 04 - Taguatinga, Brasília / DF",
    state: "DF",
    latitude: -15.828332,
    longitude: -48.05425,
    zoom: 14,
    website: "https://www.cleanpremiere.com.br",
    country: "br",
  },
  {
    id: 37,
    name: "LOJA DOURADO",
    phone: "(61) 99167-3675‬",
    address: "St. H Norte QNH 11 lote 63 loja 4 - Taguatinga, Brasília / DF",
    state: "DF",
    latitude: -15.804988,
    longitude: -48.084135,
    zoom: 14,
    website: "https://www.lojadourado.com.br",
    country: "br",
  },
  {
    id: 38,
    name: "PROGIMAQ",
    phone: "(86) 99984-5560‬",
    address: "R. Alberto Leal Nunes, 2087 - Lourival Parente, Teresina / PI",
    state: "PI",
    latitude: -5.132925,
    longitude: -42.784933,
    zoom: 14,
    country: "br",
  },
  {
    id: 39,
    name: "AUTHICA STILO",
    phone: "(86) 3235-8276‬",
    address: "Av. João XXIII, 2640 - Noivos, Teresina / PI",
    state: "PI",
    latitude: -5.081663,
    longitude: -42.774912,
    zoom: 14,
    website: "https://www.authica.com.br",
    country: "br",
  },
  {
    id: 40,
    name: "BC AUTOS",
    phone: "(86) 99418-4635‬",
    address: "Av. Miguel Rosa, 1430 - Centro (Norte), Teresina / PI",
    state: "PI",
    latitude: -5.08086,
    longitude: -42.81705,
    zoom: 14,
    country: "br",
  },
  {
    id: 41,
    name: "ZR PRO",
    phone: "(86) 99912-2360‬",
    address: "R. Antônio Neves de Melo, 4985 - 4 - Parque Ideal, Teresina / PI",
    state: "PI",
    latitude: -5.0971,
    longitude: -42.7488,
    zoom: 14,
    website: "https://www.lojadourado.com.br",
    country: "br",
  },
  {
    id: 42,
    name: "LOJA DO HIGIENIZAR",
    phone: "(98) 98570-0926‬",
    address: "R. Inácio Xavier de Carvalho, 586 - São Francisco, São Luís - MA",
    state: "MA",
    latitude: -2.53468,
    longitude: -44.26947,
    zoom: 14,
    country: "br",
  },
  {
    id: 43,
    name: "ACQUA LIMP",
    phone: "(99) 3524-6983",
    address: "R. Pernambuco, 1278 - Mercadinho, Imperatriz - MA",
    state: "MA",
    latitude: -5.52842,
    longitude: -47.47378,
    zoom: 14,
    country: "br",
  },
  {
    id: 44,
    name: "FULL POLISH/NORTFIX",
    phone: "(91) 3227-4869",
    address: "Tv. de Breves, 486 - Cidade Velha, Belém / PA",
    state: "PA",
    latitude: -1.46568,
    longitude: -48.50087,
    zoom: 14,
    website: "https://www.nortfix.com.br",
    country: "br",
  },
  {
    id: 45,
    name: "ESPAÇO CLEAN",
    phone: "(96) 98131-4456",
    address:
      "D ao Lado do MPF - Av. Ernestino Borges, 525 - Julião Ramos, Macapá / AP",
    state: "AP",
    latitude: 0.04382,
    longitude: -51.06833,
    zoom: 14,
    website: "https://linktr.ee/espacocleanap",
    country: "br",
  },
  {
    id: 46,
    name: "BORA HIGIENIZAR O MUNDO",
    phone: "+351 934677486",
    address: "LOJA VIRTUAL",
    state: "AP",
    latitude: 38.70701,
    longitude: -9.13564,
    zoom: 14,
    website: "https://loja.borahigienizaromundo.com/",
    country: "pt",
  },
  {
    id: 47,
    name: "NEW CLEAN",
    phone: "(11) 94085-7408",
    address:
      "Rua Aparecida - R. Aparecido Eusébio De Souza, 6 - Parque Jandaia, Carapicuíba - SP",
    state: "SP",
    latitude: -23.55428,
    longitude: -46.82407,
    zoom: 14,
    website: "https://newclean.jareservei.com/",
    country: "br",
  },
  {
    id: 48,
    name: "SHOP RG CAR",
    phone: "(43) 3029-0300",
    address:
      "Av. Arcebispo Dom Geraldo Fernandes, 2777 - Loja 01 - Centro, Londrina - PR",
    state: "PR",
    latitude: -23.30136,
    longitude: -51.16966,
    zoom: 14,
    website: "https://www.shoprgcar.com.br/",
    country: "br",
  },
  {
    id: 49,
    name: "CS DISTRIBUIDORA",
    phone: "(84) 98153-6899",
    address:
      "Rua Lídia Ferreira De Souza, 09CS-C - Nova Esperança - Parnamirim - RN",
    state: "RN",
    latitude: -5.93614,
    longitude: -35.27701,
    zoom: 14,
    country: "br",
  },
  {
    id: 50,
    name: "KUCHAR",
    phone: "(11) 5523-6364",
    address: "Av. Washington Luís, 714 - Santo Amaro, São Paulo - SP",
    state: "SP",
    latitude: -23.66035,
    longitude: -46.70345,
    zoom: 14,
    country: "br",
    website: "https://www.kuchar.com.br/",
  },
  {
    id: 51,
    name: "NEW CLEAN",
    phone: "(11) 94085-7408",
    address:
      "R. José Soares de Andrade, 144 - Parque Jandaia, Carapicuíba - SP",
    state: "SP",
    latitude: -23.5545,
    longitude: -46.82269,
    zoom: 14,
    country: "br",
    website: "https://newclean.jareservei.com/",
  },
  {
    id: 52,
    name: "NEW CLEAN",
    phone: "(47) 3271-1716",
    address:
      "Rua Anita Garibaldi, 1381, sala 04 - Anita Garibaldi, Joinville - SC",
    state: "SC",
    latitude: -26.32414,
    longitude: -48.85523,
    zoom: 14,
    country: "br",
    website: "https://italianidistribuidora.com.br/",
  },
]
