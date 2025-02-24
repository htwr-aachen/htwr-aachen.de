import Link from "next/link";

export default function CigolSideNav() {
  return (
    <aside className="mx-6 mb-4 lg:mb-0 lg:w-[200px]">
      <div className="rounded-3xl bg-[#f5eedd]">
        <ul className="py-6 pl-4">
          <li className="py-1 first:pt-0">
            <Link
              href={"/nichts"}
              className="text-opacity-60 hover:text-opacity-100 text-xl font-bold text-black hover:border-b-0"
            >
              Forschung
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/cigol/studium/teachings"}
              className="text-opacity-60 hover:text-opacity-100 text-xl font-bold text-black hover:border-b-0"
            >
              ⚠Lehre
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/cigol/studium/klausuren"}
              className="text-opacity-60 hover:text-opacity-100 text-xl font-bold text-black hover:border-b-0"
            >
              ⚠Klausuren
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/cigol/studium/aufgaben"}
              className="text-opacity-60 hover:text-opacity-100 text-xl font-bold text-black hover:border-b-0"
            >
              ⚠Aufgaben
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/nichts"}
              className="text-opacity-60 hover:text-opacity-100 text-xl font-bold text-black hover:border-b-0"
            >
              Bücher
            </Link>
          </li>
          <li className="py-1 first:pt-0">
            <Link
              href={"/contact"}
              className="text-opacity-60 hover:text-opacity-100 text-xl font-bold text-black hover:border-b-0"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
