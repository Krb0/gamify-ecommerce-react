import productsJSON from "./products.json";

export interface ProductType {
  img: string;
  name: string;
  category: string;
  price: number;
}

const products: ProductType[] = productsJSON;

export default products;
