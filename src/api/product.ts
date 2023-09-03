import React, { useEffect } from "react";
import { liaApi } from "./apiConfig";
import { PRODUCT_URL } from "../constants/api";

export default function getProduct(categoryId: number) {
  return liaApi.get(PRODUCT_URL).then((a) => a.data);
}
