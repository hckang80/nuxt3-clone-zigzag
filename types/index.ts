export type Categories =
  'electronics' |
  'jewelery' |
  'men\'s clothing' |
  'women\'s clothing'

export interface Product {
  category: Categories
  description: string
  id: number
  image: string
  price: number
  rating: {
    count: number
    rate: number
  }
  title: string
}
