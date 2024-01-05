import { useLoaderData } from "react-router-dom";
import VideoAcceuil from "./components/VideoAcceuil";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const videos = useLoaderData();
  return (
    <div className="App">
      <Navbar />
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
