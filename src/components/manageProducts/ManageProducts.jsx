import Categories from "../categories/Categories";

export default function ManageProducts({ setSearchParams, data }) {
  const categories = data?.map((item) => item.category);
  const newArray = [...new Set(categories)];

  return (
    <div className="flex justify-between px-20 items-center">
      <div className="flex justify-center">
        <input
          type="text"
          className="py-1 pl-2 border w-64 rounded-md"
          placeholder="Search Here..."
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set("name", e.target.value);
              return prev;
            })
          }
        />
      </div>
      <Categories categories={newArray} />
    </div>
  );
}
