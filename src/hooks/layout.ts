import { InstituteConfig, Institutes } from "@/config/institutes";
import { usePathname } from "next/navigation";

export const useActiveInstitute = (): Institutes => {
  const pathname = usePathname();

  if (!pathname) {
    return "htwr";
  }

  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) {
    return "htwr";
  }

  const firstSegment = pathSegments[0];

  if (firstSegment in InstituteConfig) {
    return firstSegment as Institutes;
  }

  return "htwr";
};
