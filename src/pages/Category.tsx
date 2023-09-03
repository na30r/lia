import React, { useEffect, useState } from "react";
import { liaApi } from "../api/apiConfig";
import { CATEGORIES_URL } from "../constants/api";
import { Col, Row } from "antd";
import Cat from "../models/Category";
import CategoryCard from "../component/cards/CategoryCard";

export default function Category() {
  const [cat, setcat] = useState<Cat[]>([]);
  useEffect(() => {
    liaApi.get<Cat[]>(CATEGORIES_URL).then((a) => setcat(a.data));
  }, []);

  return (
    <Row gutter={[100, 100]} style={{ marginBottom: 100 }}>
      {cat.map((a) => (
        <Col lg={12} md={24}>
          <CategoryCard category={a} />
        </Col>
      ))}
    </Row>
  );
}
