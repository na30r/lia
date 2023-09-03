import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { BASE_URL } from "../../constants/api";
import Category from "../../models/Category";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }: { category: Category }) {
  const nav = useNavigate();
  return (
    <Card
      onClick={() => nav(`/Products/${category.id}`)}
      key={category.id}
      hoverable
      className="category-card"
      cover={<img alt="example" src={BASE_URL + category.image} />}>
      <Meta title={category.name} />
    </Card>
  );
}
