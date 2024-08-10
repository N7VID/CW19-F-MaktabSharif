export default function ProductCard({ data }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center gap-2 border border-gray-500 rounded-lg  w-72">
        <img
          src={data.imgage}
          alt={data.name}
          className="w-40 h-40 rounded-md my-2"
        />
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold w-60 text-center my-1">
          {data.name}
        </h2>
        <div>
          <p>{data.price}</p>
          <button className="py-2 px-4 bg-green-300 rounded-lg my-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
