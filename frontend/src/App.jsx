import { useLoaderData } from "react-router-dom";
import VideoAcceuil from "./components/VideoAcceuil";

import "./App.css";

function App() {
  const videos = useLoaderData();
  return (
    <div className="App">
      <h1>liste des vidéos</h1>
      <main>
        {videos.map((video) => (
          <VideoAcceuil video={video} />
        ))}
      </main>
    </div>
  );
}

export default App;
