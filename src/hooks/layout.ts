import { usePathname } from "next/navigation";

export const useIsActive = (instituteName: string = "") => {
  const pathname = usePathname();

  return (path: string = "/") => {
    if (pathname == null) {
      return instituteName === "";
    }

    if (instituteName === "") {
      return pathname.startsWith(`/${path}`);
    }
    return pathname.startsWith(`/${instituteName}/${path}`);
  };
};
