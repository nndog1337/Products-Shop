export interface IProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  images: string[]
  thumbnail: string
}


export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface ICard{
  className?:string
  id: number,
  thumbnail: string,
  title: string,
  rating: number,
  price: number
}

export interface ICardWithQuantity extends ICard{
  quantity: number
}
