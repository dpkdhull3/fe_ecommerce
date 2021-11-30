export interface IProduct {
  productId?: string;
  productName: string;
  price: number;
  productImage?: Array<string>;
  productDescription?: string;
  stocksQuantity?: number;
  discountPercentage?: number;
}

export interface IProductSlide {
  image: string;
  thumbImage?: string;
  alt?: string;
  title?: string;
}
