import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

import "./AdminVideo.css";

const videoType = {
  title: "",
  description: "",
  year: "",
  url: "",
  category: "",
  sport: "",
};
function AdminVideo() {
  const [video, setVideo] = useState(videoType);
  const [message, setMessage] = useState();
  const [sports, setSports] = useState([]);
  const [category, setCategory] = useState([]);
  const getSports = async () => {
    try {
      const mySports = await connexion.get("/sports").then((res) => res.data);
      setSports(mySports);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSports();
  }, []);
  const getCategory = async () => {
    try {
      const myCategory = await connexion
        .get("/categorys")
        .then((res) => res.data);
      setCategory(myCategory);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  const handleVideo = (event) => {
    setVideo((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };
  const postVideo = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/videos", video);
      setMessage("La vidéo a été ajoutée avec succès");
    } catch (error) {
      console.error(error);
      setMessage("Une erreur s'est produite lors de l'envoi de la vidéo");
    }
  };
  return (
    <div className="admin-div">
      <h1 className="admin-h1">
        Interface d'administration d'un dépôt pour une Video
      </h1>
      <main>
        <form className="admin-main" onSubmit={postVideo}>
          <label className="admin-label">
            title
            <input
              className="inputadm"
              type="text"
              name="title"
              required
              value={video.title}
              onChange={handleVideo}
            />
          </label>
          <label className="admin-label">
            description
            <input
              className="inputadm"
              type="texterea"
              name="description"
              required
              value={video.description}
              onChange={handleVideo}
            />
          </label>
          <label className="admin-label">
            year
            <input
              className="inputadm"
              type="number"
              name="year"
              required
              value={video.year}
              onChange={handleVideo}
            />
          </label>
          <label className="admin-label">
            url
            <input
              className="inputadm"
              type="url"
              name="url"
              required
              value={video.url}
              onChange={handleVideo}
            />
          </label>
          <label className="admin-label">
            category
            <select
              className="admin-select-inputadm"
              name="category"
              onChange={handleVideo}
              required
            >
              <option value={null}>votre choix</option>
              {category.map((cat) => (
                <option value={cat.id}>
                  {cat.id} {cat.name}
                </option>
              ))}
            </select>
          </label>
          <label className="admin-label">
            sport
            <select
              className="admin-select-inputadm"
              name="sport"
              onChange={handleVideo}
              required
            >
              <option value={null}>votre choix</option>
              {sports.map((sport) => (
                <option value={sport.id}>
                  {sport.id} {sport.name}
                </option>
              ))}
            </select>
          </label>
          <button className="admin-boutton" type="submit">
            Valider
          </button>
          {message && <p className="admin-message">{message}</p>}
        </form>
      </main>
    </div>
  );
}
export default AdminVideo;
