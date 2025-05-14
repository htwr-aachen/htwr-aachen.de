import { FacultiesButton as OGFacultiesButton } from "@/components/faculties-nav/button";
import { CircleChevronDown } from "lucide-react";

export function FacultiesButton() {
  return (
    <OGFacultiesButton
      className={`flex h-[40px] w-full cursor-pointer flex-row items-center px-4 text-left text-sm text-inherit hover:bg-stone-500/75 lg:text-inherit`}
    >
      Menü <CircleChevronDown className="ml-2 size-4" />
    </OGFacultiesButton>
  );
}
