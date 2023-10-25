import { useQuery } from 'react-query'
import { baseApi } from '@/libs/api'

export interface Product {
  id: number
  title: string
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

export default function useProducts() {
  return useQuery<Product[]>('products', async () => {
    const getProductsResponse = await baseApi.get<Product[]>('/produtos')

    const productsData = getProductsResponse.data;

    return productsData;
  })
}
