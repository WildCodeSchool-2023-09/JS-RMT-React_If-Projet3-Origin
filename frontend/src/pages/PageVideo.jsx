import React from "react";
import { useLoaderData } from "react-router-dom";
import CardVideo from "./admin/CardVideo";

function PageVideo() {
  const videos = useLoaderData();
  return (
    <div>
      <main className="containerV">
        {videos && videos.map((video) => <CardVideo video={video} />)}
      </main>
    </div>
  );
}

export default PageVideo;
