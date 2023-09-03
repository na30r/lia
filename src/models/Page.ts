export default interface Page<T> {
  list: T[];
  page: number;
  pagecount: number;
  totalcount: number;
}
