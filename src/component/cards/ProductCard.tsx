import { Card, Row, Col, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { BASE_URL } from "../../constants/api";
import { increaseQuantity } from "../../redux/shoppingCart";
import Product from "../../models/Product";
import { useDispatch } from "react-redux";
import Basket from "../../assets/images/shopping-cart.png";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  return (
    <Card
      key={product.id}
      hoverable
      style={{ borderRadius: 10 }}
      cover={<img alt="example" src={BASE_URL + product.medium_pic} />}>
      <Meta title={product.title} />
      <Row align={"bottom"}>
        <Col span={20}>
          <p className="price-text">{product.price.final_price.toLocaleString()} تومان</p>
        </Col>
        <Col span={4}>
          <p className="basket-btn">
            <span className="centered-content">
              <Image
                onClick={() => dispatch(increaseQuantity(product))}
                src={Basket}
                preview={false}
                width={24}
                height={24}
              />
            </span>
          </p>
        </Col>
      </Row>
    </Card>
  );
}
