import { useRouter } from "next/router";

export const useIsActive = (instituteName: string = "") => {
  const router = useRouter();

  return (path: string = "/") => {
    if (instituteName === "") {
      return router.pathname.startsWith(`/${path}`);
    }
    return router.pathname.startsWith(`/${instituteName}/${path}`);
  };
};
