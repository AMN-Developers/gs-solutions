/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from 'next';
import { wpApi } from '@/libs/api';

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
    const getProductsResponse = await wpApi.get<Product[]>('/products?acf_format=standard&_fields=id,title,acf')

    const productsData = getProductsResponse.data;

    const products = productsData.map(product => {
      const { id, title, acf } = product;
      const { thumbnail, large_image, slogan, hover_color, description, category } = acf;
      return {
        id,
        title: title.rendered,
        thumbnail,
        large_image,
        slogan,
        hover_color,
        description,
        category,
      }
    })

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}