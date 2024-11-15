const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled
        className=" py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:oppacity-50 disabled:cursor-not-allowed "
      >
        Prev
      </button>
      <div className="flex gap-2 items-center text-sm">
        <button className="px-2 rounded-sm bg-teddySky">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        ...
        <button className="px-2 rounded-sm">10</button>
      </div>
      <button className=" py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:oppacity-50 disabled:cursor-not-allowed ">
        Prev
      </button>
    </div>
  );
};

export default Pagination;
