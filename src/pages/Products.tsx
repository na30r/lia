import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { liaApi } from "../api/apiConfig";
import { BASE_URL, CATEGORIES_URL, PRODUCT_URL } from "../constants/api";
import { Col, Card, Row, Image } from "antd";
import Meta from "antd/es/card/Meta";
import Page from "../models/Page";
import Product from "../models/Product";
import getProduct from "../api/product";
import ProductCard from "../component/cards/ProductCard";

export default function Products() {
  const { categoryId } = useParams();
  const [productsList, setproductsList] = useState<Page<Product>>();

  useEffect(() => {
    getProduct(Number(categoryId)).then((a) => setproductsList(a));
  }, []);

  return (
    <>
      <Row>
        <Col span={24} style={{ margin: 70, fontSize: 18 }}>
          مراقبت پوست
        </Col>
      </Row>
      <Row justify="center" align="middle" gutter={[30, 30]} style={{ padding: 30 }}>
        {productsList?.list.map((product) => (
          <Col lg={5} md={10} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
