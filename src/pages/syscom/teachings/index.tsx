import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect } from "react";

const Teachings: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/syscom/teaching");
  });
  return <div>wait a minute</div>;
};

export default Teachings;
