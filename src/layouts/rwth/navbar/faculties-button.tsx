import { FacultiesButton as OGFacultiesButton } from "@/components/faculties-nav/button";
import { CircleChevronDown } from "lucide-react";

export function FacultiesButton() {
  return (
    <OGFacultiesButton
      className={`flex h-[40px] w-full flex-row items-center px-4 text-left text-sm text-black hover:bg-stone-500/75 lg:text-white`}
    >
      FAKULTÄTEN UND EINRICHTUNGEN <CircleChevronDown className="ml-2 size-4" />
    </OGFacultiesButton>
  );
}
