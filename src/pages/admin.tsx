import type { GetServerSideProps } from "next";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { SubStyling } from "@/lib/style";
import Main from "@/templates/CombinedMain";

type AdminProps = {
  styling: SubStyling;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      styling: (query.institute as SubStyling) || SubStyling.None,
    },
  };
};

const Admin: FC<AdminProps> = ({ styling }) => {
  return (
    <Main styling={styling} meta={<Meta title="404 Dirk sucht weiter"></Meta>}>
      <div>
        <h1 className="text-[5rem] font-semibold">WAS SUCHST DU HIER???</h1>

        <div className="grid items-center justify-center">
          <video id="rick" controls loop autoPlay muted>
            <source src="/rick.mp4" type="video/mp4" />
            Your Browser does not support the video tag.
          </video>
        </div>
      </div>
    </Main>
  );
};

export default Admin;
