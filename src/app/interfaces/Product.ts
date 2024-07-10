import { Category } from "./Category";

export interface Product {
  id : number;
  description : string;
  price : number;
  category : Category;
  promotion : boolean;
  newProduct : boolean;
}