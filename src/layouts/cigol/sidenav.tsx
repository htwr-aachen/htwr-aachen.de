import Link from "next/link";

export default function CigolSideNav() {
  return (
    <aside className="mx-6 mb-4 lg:mb-0 lg:w-[200px]">
      <div className="rounded-3xl bg-[#f5eedd]">
        <ul className="py-6 pl-4">
          <li className="py-1 first:pt-0">
            <Link
              href={"/nichts"}
              className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
            >
              Forschung
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/cigol/studium/teachings"}
              className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
            >
              ⚠Lehre
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/cigol/studium/klausuren"}
              className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
            >
              ⚠Klausuren
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/cigol/studium/aufgaben"}
              className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
            >
              ⚠Aufgaben
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/nichts"}
              className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
            >
              Bücher
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/contact"}
              className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
