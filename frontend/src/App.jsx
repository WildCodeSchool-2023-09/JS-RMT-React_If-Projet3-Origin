import { useLoaderData } from "react-router-dom";
import PageVideo from "./pages/admin/VideoAcceuil";

import Navbar from "./components/Navbar";

function App() {
  const videos = useLoaderData();
  return (
    <div className="App">
      <Navbar />
      <main className="containerV">
        {videos.map((video) => (
          <PageVideo video={video} />
        ))}
      </main>
    </div>
  );
}

export default App;
