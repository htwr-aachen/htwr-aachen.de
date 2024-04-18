export function Search() {
  return (
    <div className="flex h-[40px] items-center justify-center text-white">
      <input
        type={"search"}
        className="bg-[#666] px-2 py-1 text-sm"
        placeholder="Search... bzw. nicht"
      />
    </div>
  );
}
