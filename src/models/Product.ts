import Category from "./Category";
import Inventory from "./Inventory";
import Price from "./Price";

export default interface Product {
  arch_list: any;
  arch_summary: string;
  arranged_categories: any;
  categories: Category[];
  id: number;
  inventories: Inventory[];
  isNew: boolean;
  is_available: boolean;
  is_package: boolean;
  is_voteable: boolean;
  large_pic: string;
  maxcount: number;
  medium_pic: string;
  price: Price;
  size: any;
  small_pic: string;
  title: string;
  volume: string;
  voteable_order_id: string;
  weight: string;
}
