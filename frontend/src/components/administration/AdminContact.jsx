import React from "react";

import "./AdminContact.css";

function AdminContact() {
  return (
    <div className="corp">
      <main className="containercontact">
        <form className="formContact">
          <label>
            Nom
            <input type="text" name="text" required />
          </label>
          <label>
            prénom
            <input type="text" name="text" required />
          </label>
          <label>
            email
            <input type="email" name="text" required />
          </label>
          <label>
            Sujet
            <input type="text" name="textarea" required />
          </label>
          <label>
            message
            <input type="text" name="textarea" required />
          </label>
          <button className="formulaire" type="submit">
            Envoyé le formulaire
          </button>
        </form>
      </main>
    </div>
  );
}

export default AdminContact;
