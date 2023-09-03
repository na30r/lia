export default interface Category {
  name: string;
  description: string;
  id: string;
  image: string;
  children: Category[];
}
