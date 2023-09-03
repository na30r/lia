import { Row, Col, Image, Space, Button, Popover } from "antd";
import Logo from "../../assets/images/Logo.png";
import Basket from "../../assets/images/shopping-cart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { shoppingListItem } from "../../redux/shoppingCart";
import ShoppingList from "./ShoppingList";

export default function Header() {
  const shoppingList = useSelector<any, shoppingListItem[]>((a) => a.shoppingCart);
  return (
    <>
      <Row gutter={200} className="header">
        <Col span={24}>
          <Row gutter={[20, 20]}>
            <Col span={20}>
              <Image src={Logo} preview={false} width={45.73} height={60} />
            </Col>
            <Col span={23}>
              <Row gutter={[30, 30]}>
                <Col>
                  <Link to={"products/11"}> مراقبت پوست</Link>
                </Col>
                <Col>مراقبت مو </Col>
                <Col>مراقبت بدن</Col>
                <Col>آرایشی</Col>
              </Row>
            </Col>
            <Col style={{ alignContent: "left" }}>
              <Popover
                placement="bottomLeft"
                title={shoppingList.reduce((sum, item) => sum + item.quantity, 0).toString() + " قلم کالا"}
                content={ShoppingList}
                trigger="click">
                <Image src={Basket} preview={false} width={24} height={24} />
              </Popover>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
