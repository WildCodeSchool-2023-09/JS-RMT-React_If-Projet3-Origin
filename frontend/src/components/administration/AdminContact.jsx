import React, { useState } from "react";
import connexion from "../../services/connexion";

import "./AdminContact.css";

function AdminContact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contacts`,
        formData
      );

      if (response.data) {
        const validation = document.querySelector(".validation");
        validation.style.display = "block";
      }
    } catch (error) {
      const errorconnexion = document.querySelector(".errorconnexion");
      errorconnexion.style.display = "block";
      setFormData(formData);
    }
  };

  return (
    <div className="demarquation">
      <div className="contain-validation-errorconnexion">
        <p style={{ display: "none" }} className="validation">
          Votre inscription a été prises en compte.
        </p>
        <p style={{ display: "none" }} className="errorconnexion">
          Votre inscription pas pu être enregistré.
        </p>
      </div>
      <main className="containercontact">
        <form className="adm-form" onSubmit={handleUpload}>
          <label className="lab">
            Nom
            <input
              className="adm-in"
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="lab">
            prénom
            <input
              className="adm-in"
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="lab">
            @mail
            <input
              className="adm-in"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="lab">
            Sujet
            <input
              className="adm-in"
              type="text"
              name="sujet"
              value={formData.sujet}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="lab">
            message
            <input
              className="adm-in"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <button className="labt" type="submit">
            <t className="adm-in">Envoyé le formulaire</t>
          </button>
        </form>
      </main>
    </div>
  );
}

export default AdminContact;
