import { Row, Col, Image } from "antd";
import React, { Dispatch } from "react";
import Plus from "../../assets/images/plus.png";
import Minus from "../../assets/images/minus.png";
import { BASE_URL } from "../../constants/api";
import { shoppingListItem, increaseQuantity, decreaseQuantity } from "../../redux/shoppingCart";
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingList() {
  const shoppingList = useSelector<any, shoppingListItem[]>((a) => a.shoppingCart);
  const dispatch = useDispatch();
  return (
    <>
      {shoppingList.map((a) => (
        <Row key={a.product.id} style={{ width: 500, marginBottom: 16 }}>
          <Col span={6}>
            <Image preview={false} width={80} src={BASE_URL + a.product.small_pic} />
          </Col>
          <Col span={18}>
            <Row>
              <Col span={24}>{a.product.title}</Col>
            </Row>
            <Row align="middle">
              <Col span={1}>
                <Image preview={false} src={Plus} onClick={() => dispatch(increaseQuantity(a.product))} />
              </Col>
              <Col span={1}>{a.quantity}</Col>
              <Col span={1}>
                <Image preview={false} src={Minus} onClick={() => dispatch(decreaseQuantity(a.product.id))} />
              </Col>
            </Row>
            <Row>
              <Col className="price-text" span={12}>
                {(a.quantity * a.product.price.final_price).toLocaleString()}
              </Col>
            </Row>
          </Col>
        </Row>
      ))}

      <Row>
        <Col span={6}>جمع کل:</Col>
        <Col span={18} className="price-text">
          {shoppingList.reduce((sum, item) => sum + item.quantity * item.product.price.final_price, 0).toLocaleString()}
        </Col>
      </Row>
    </>
  );
}
