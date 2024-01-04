import React, { useState } from "react";
import connexion from "../../services/connexion";

const videoType = {
  title: "",
  description: "",
  year: "",
  url: "",
  category_id: "",
  sport_id: "null",
};

function AdminVideo() {
  const [video, setVideo] = useState(videoType);
  const [message, setMessage] = useState("");

  const handleVideo = (event) => {
    setVideo((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postVideo = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/video", video);
      setMessage("La vidéo a été ajoutée avec succès");
    } catch (error) {
      console.error(error);
      setMessage("Une erreur s'est produite lors de l'envoi de la vidéo");
    }
  };

  return (
    <div>
      <h1>Interface d'administration d'un dépôt pour une Video</h1>
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
          <select name="category_id" onChange={handleVideo} required>
            <option value={null}>veuillez choisir</option>
          </select>
        </label>
        <label>
          sport
          <select name="sport_id" onChange={handleVideo} required>
            <option value={null}>veuillez choisir</option>
          </select>
        </label>
        <button type="submit">Ajouter une video</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default AdminVideo;
