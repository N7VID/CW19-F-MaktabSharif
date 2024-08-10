import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts.api";

export const useGetProducts = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("name");
  const myCategory = urlParams.get("category");
  console.log(myParam);

  return useQuery({
    queryKey: ["products", myParam, myCategory],
    queryFn: (myParam, myCategory) => getProducts(myParam, myCategory),
  });
};
