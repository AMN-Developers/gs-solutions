/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from "next"
import { wpApi } from "@/libs/api"

export interface Product {
  id: number
  title: Title
  acf: Acf
}

export interface Title {
  rendered: string
}

export interface Acf {
  thumbnail: string
  large_image: string
  slogan: string
  hover_color: string
  description: string
  fiqasp: string
  category: Category[]
  
}

export interface Category {
  term_id: number
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: string
  description: string
  parent: number
  count: number
  filter: string
  
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    // const getProductsResponse = await wpApi.get<Product[]>('/products?acf_format=standard&_fields=id,title,acf')

    // const productsData = getProductsResponse.data;

    // const products = productsData.map(product => {
    //   const { id, title, acf } = product;
    //   const { thumbnail, large_image, slogan, hover_color, description, category, fiqasp } = acf;
    //   return {
    //     id,
    //     title: title.rendered,
    //     thumbnail,
    //     large_image,
    //     slogan,
    //     hover_color,
    //     description,
    //     category,
    //     fiqasp,
    //   }
    // })

    return res.status(200).json([
      {
        id: 86,
        title: "HIDRA LEDER",
        thumbnail:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/hidraleder.png",
        large_image:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/hidraleder.png",
        slogan:
          "MAX FRESH um composto sinergético, e um poderoso eliminador de odores",
        hover_color: "41,48,49,1",
        description:
          "LÓTUS HYDRA LEDER é um hidratante impermeabilizante de couro que tem função 4x1, hidrata, revitaliza, limpa e realiza a proteção com efeito hidrorrepelente (repelem líquidos), além de causar sensível melhora ao toque e elasticidade dos materiais que possuem essa característica.",
        category: [
          {
            term_id: 3,
            name: "Lótus",
            slug: "lotus",
            term_group: 0,
            term_taxonomy_id: 3,
            taxonomy: "product-category",
            description: "",
            parent: 0,
            count: 6,
            filter: "raw",
          },
        ],
        fiqasp: false,
      },
      {
        id: 85,
        title: "CLEAN PROTECT",
        thumbnail:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/cleanprot.png",
        large_image:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/cleanprot.png",
        slogan:
          "MAX FRESH um composto sinergético, e um poderoso eliminador de odores",
        hover_color: "160,211,204,1",
        description:
          "Foi desenvolvido para a realização de limpezas de estofados e tecidos que já passaram pelo processo de impermeabilização, e que por qualquer motivo ainda apresentam sombreamentos ou sujidades superficiais após a remoção do excesso da sujidade derramado.",
        category: [
          {
            term_id: 3,
            name: "Lótus",
            slug: "lotus",
            term_group: 0,
            term_taxonomy_id: 3,
            taxonomy: "product-category",
            description: "",
            parent: 0,
            count: 6,
            filter: "raw",
          },
        ],
        fiqasp: false,
      },
      {
        id: 84,
        title: "CITRUSOLV",
        thumbnail:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/citrusolv.png",
        large_image:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/citrusolv.png",
        slogan:
          "MAX FRESH um composto sinergético, e um poderoso eliminador de odores",
        hover_color: "0,124,54,1",
        description:
          "Detergente solvente natural e ecologicamente correto extremamente concentrado a base de D’limoneno, tensoativos biodegradáveis e auxiliares antiredepositantes que não agridem o meio ambiente. Com alto poder de limpeza, remove rapidamente a sujidade sem alterar as características do substrato e de fácil remoção por enxague",
        category: [
          {
            term_id: 3,
            name: "Lótus",
            slug: "lotus",
            term_group: 0,
            term_taxonomy_id: 3,
            taxonomy: "product-category",
            description: "",
            parent: 0,
            count: 6,
            filter: "raw",
          },
        ],
        fiqasp: false,
      },
      {
        id: 70,
        title: "DESINFEKT",
        thumbnail:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/desinfekt.png",
        large_image:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/desinfekt.png",
        slogan: "Poderoso removedor e limpador de manchas e sujeiras.",
        hover_color: "32,188,211,1",
        description:
          "Desinfetante e sanitizante concentrado para alta diluição, com efeito bactericida, bacteriostático e virucida concentrado e de baixa toxidade, a base de quaternário de amônia de 5° geração, em sinergia com agentes bacteriostáticos. Extremamente eficaz na eliminação de microrganismos tais como: bactérias, vírus, fungos, algas e leveduras. \r\nProduto de nível hospitalar e registrado na Anvisa. \r\n",
        category: [
          {
            term_id: 3,
            name: "Lótus",
            slug: "lotus",
            term_group: 0,
            term_taxonomy_id: 3,
            taxonomy: "product-category",
            description: "",
            parent: 0,
            count: 6,
            filter: "raw",
          },
        ],
        fiqasp:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/FISPQ-LOTUS-DESINFEKT-formato-ABNT-rev.-01.pdf",
      },
      {
        id: 68,
        title: "MULTI-C",
        thumbnail:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/multic.png",
        large_image:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/multic.png",
        slogan: "Ideal para aplicação de impermeabilizantes a base de água.",
        hover_color: "0,92,142,1",
        description:
          "Limpador multifuncional especialmente desenvolvido para aplicações têxteis, indicado também para limpeza pesada de superfícies em geral. Com alta capacidade de remoção de gorduras, óleos, graxas e outras sujeiras de difícil remoção Devido ao seu pH alcalino o produto não é indicado para limpeza de superfícies que serão impermeabilizadas.",
        category: [
          {
            term_id: 3,
            name: "Lótus",
            slug: "lotus",
            term_group: 0,
            term_taxonomy_id: 3,
            taxonomy: "product-category",
            description: "",
            parent: 0,
            count: 6,
            filter: "raw",
          },
          {
            term_id: 4,
            name: "Automotiva",
            slug: "automotiva",
            term_group: 0,
            term_taxonomy_id: 4,
            taxonomy: "product-category",
            description: "",
            parent: 0,
            count: 1,
            filter: "raw",
          },
        ],
        fiqasp: false,
      },
      {
        id: 64,
        title: "FIX FLOT",
        thumbnail:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/fixflot.png",
        large_image:
          "http://gshomesolutions.test/wp-content/uploads/2023/10/fixflot.png",
        slogan:
          "FLOTADOR EXTREMAMENTE CONCENTRADO COM ESPUMAÇÃO CONTROLADA E COM ATIVOS ANTI-MIGRANTES",
        hover_color: "168,1,64,1",
        description:
          "LÓTUS FIX-FLOT é um flotador extremamente concentrado com espumação controlada e com ativos anti-migrantes, através da tecnologia “Lótus Omni FIX”, especialmente desenvolvido para limpeza de todos os tipos de tapetes e carpetes. Com alta capacidade na remoção das mais variadas sujidades, além de revitalizar a coloração e o toque natural da fibra. É extremamente seguro para realizar a higienização de tapetes persas, orientais, kilim, fibras naturais, fibras sintéticas e carpetes, sem risco de migração/transferência de cor.",
        category: [
          {
            term_id: 3,
            name: "Lótus",
            slug: "lotus",
            term_group: 0,
            term_taxonomy_id: 3,
            taxonomy: "product-category",
            description: "",
            parent: 0,
            count: 6,
            filter: "raw",
          },
        ],
        fiqasp: false,
      },
    ])
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" })
  }
}
