import { useLoaderData } from "react-router-dom";
import VideoAcceuil from "./components/VideoAcceuil";

import "./App.css";

function App() {
  const videos = useLoaderData();
  return (
    <div className="App">
      <h1>ORIGINS</h1>
      <h2>DIGITAL</h2>
      <main>
        {videos.map((video) => (
          <VideoAcceuil video={video} />
        ))}
      </main>
    </div>
  );
}

export default App;
