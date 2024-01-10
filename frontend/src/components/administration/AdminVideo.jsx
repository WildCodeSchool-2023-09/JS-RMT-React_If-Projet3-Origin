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
    <div className="imagevideo">
      <h1>Interface d'administration d'un dépôt pour une Video</h1>
      <main className="pagevideo">
        <form className="pageadm" onSubmit={postVideo}>
          <label>
            title
            <input
              className="imputadm"
              type="text"
              name="title"
              required
              value={video.title}
              onChange={handleVideo}
            />
          </label>
          <label>
            description
            <input
              className="imputadm"
              type="texterea"
              name="description"
              required
              value={video.description}
              onChange={handleVideo}
            />
          </label>
          <label>
            year
            <input
              className="imputadm"
              type="number"
              name="year"
              required
              value={video.year}
              onChange={handleVideo}
            />
          </label>
          <label>
            url
            <input
              className="imputadm"
              type="url"
              name="url"
              required
              value={video.url}
              onChange={handleVideo}
            />
          </label>
          <label>
            category
            <select
              className="imputadm"
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
          <label>
            sport
            <select
              className="imputadm"
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
          <button className="ajoutvideo" type="submit">
            Ajouter une video
          </button>
          {message && <p className="message">{message}</p>}
        </form>
        <section className="admincontainer">
          <h2>Liste des videos dans la base vidéo</h2>
          <table>
            <thead>
              <tr>
                <th>id bonjour alain</th>
                <th>title</th>
                <th>url</th>
              </tr>
            </thead>
            {/* <tbody>
              {video.map((vid) => {
                return (
                  <tr>
                    <td>{vid.id}</td>
                    <td>{vid.title}</td>
                    <td>{vid.url}</td>
                    <td>
                      <img src={vid.image_url} alt={`video ${vid.title}`} />
                    </td>
                  </tr>
                );
              })}
            </tbody> */}
          </table>
        </section>
      </main>
    </div>
  );
}
export default AdminVideo;
