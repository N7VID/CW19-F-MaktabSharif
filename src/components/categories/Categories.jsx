import Category from "../category/Category";

export default function Categories({ categories }) {
  return (
    <div className="flex justify-center items-center gap-2">
      {categories?.map((category) => (
        <Category key={category} data={category} />
      ))}
    </div>
  );
}
