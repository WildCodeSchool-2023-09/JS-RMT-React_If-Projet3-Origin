import { useLoaderData } from "react-router-dom";
import Video from "./pages/Video";

import "./App.css";

function App() {
  const videos = useLoaderData();
  return (
    <div className="App">
      <h1>liste des vidéos</h1>
      <main>
        {videos.map((video) => (
          <Video video={video} />
        ))}
      </main>
    </div>
  );
}

export default App;
