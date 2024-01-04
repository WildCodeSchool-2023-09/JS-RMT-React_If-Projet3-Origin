import { useLoaderData } from "react-router-dom";
import VideoAcceuil from "./components/VideoAcceuil";
import Slider from "./components/Slider";

import "./App.css";

function App() {
  const videos = useLoaderData();
  return (
    <div className="App">
      <h1>ORIGIN'S DIGITAL</h1>
      <Slider />
      <main>
        {videos.map((video) => (
          <VideoAcceuil video={video} />
        ))}
      </main>
    </div>
  );
}

export default App;
