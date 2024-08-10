import { useSearchParams } from "react-router-dom";

export default function Category({ data }) {
  const [categoryParams, setCategoryParams] = useSearchParams();
  return (
    <div
      className="bg-red-300 py-1 px-3 rounded-md cursor-pointer"
      onClick={() =>
        setCategoryParams((prev) => {
          prev.set("category", data);
          return prev;
        })
      }
    >
      {data}
    </div>
  );
}
