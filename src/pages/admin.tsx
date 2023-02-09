import type { YouTubeProps } from "react-youtube";
import Youtube from "react-youtube";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const Admin = () => {
  const play: YouTubeProps["onReady"] = ({ target }) => {
    target.playVideo();
  };

  return (
    <Main meta={<Meta title="404 Dirk sucht weiter"></Meta>}>
      <div>
        <h1 className="text-[5rem] font-semibold">WAS SUCHST DU HIER???</h1>

        <Youtube
          onReady={play}
          videoId="dQw4w9WgXcQ"
          iframeClassName="w-full h-full aspect-video"
        />
      </div>
    </Main>
  );
};

export default Admin;
