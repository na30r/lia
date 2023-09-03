import React, { useEffect } from "react";
import { liaApi } from "./apiConfig";
import { PRODUCT_URL } from "../constants/api";

export default function getCategories() {
  return liaApi.get(PRODUCT_URL).then((a) => a.data);
}
