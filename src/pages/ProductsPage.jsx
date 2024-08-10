import { useSearchParams } from "react-router-dom";
import ManageProducts from "../components/manageProducts/ManageProducts";
import ProductCard from "../components/product-card/ProductCard";
import { useGetProducts } from "../hooks/useGetProducts";

export default function ProductsPage() {
  const { data, error, isError, isLoading } = useGetProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="mx-auto my-0 w-2/3">
      <ManageProducts
        data={data}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="grid grid-cols-3 gap-4 px-20 py-10">
        {data?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}{" "}
      </div>
    </div>
  );
}
