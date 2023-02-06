import Link from "next/link";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const index: FC = () => {
  return (
    <Main meta={<Meta title="engeniering software"></Meta>}>
      <div>Hier kommt bald die software engineering seite hin :)</div>

      <p>Rumpe wartet schon</p>

      <div className="mt-24 grid grid-cols-2">
        <div className="grid justify-center">
          <img
            src="https://www.se-rwth.de/assets/img/staff/rumpe.jpeg"
            alt="Bernhard Rumpe"
          ></img>
          <span className="block w-[200px] text-center">
            &copy;{" "}
            <a href="https://www.se-rwth.de/staff/Bernhard.Rumpe/">
              https://www.se-rwth.de/staff/Bernhard.Rumpe/
            </a>
          </span>
        </div>
        <div className="grid items-center justify-center">
          <p className="h-min text-center align-middle">
            "Habe ich euch eigentlich schonmal von{" "}
            <Link href="/es/klausuren">Klausuren</Link>,{" "}
            <Link href={"/es/teachings"}>dummen Zusammenfassungen</Link> und{" "}
            <Link href="/es/aufgaben">Aufgaben</Link> erzählt..."
          </p>
        </div>
      </div>
    </Main>
  );
};

export default index;
