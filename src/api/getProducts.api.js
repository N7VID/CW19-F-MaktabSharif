import { BASE_URL, PRODUCTS_URL } from "../constant";
import httpRequest from "../services/http-request";

export const getProducts = async (myParam, myCategory) => {
  console.log(myParam);
  const categoryParam = myParam.queryKey[2]
    ? `&category=${myParam.queryKey[2]}`
    : "";

  const url = `${BASE_URL}${PRODUCTS_URL}?q=${
    myParam.queryKey[1] || ""
  }${categoryParam}`;
  const response = await httpRequest.get(url);
  return response.data;
};
