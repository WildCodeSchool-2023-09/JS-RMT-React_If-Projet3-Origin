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
            @mail
            <input type="phone" name="phone" required />
          </label>
          <label>
            Sujet
            <input type="text" name="textarea" required />
          </label>
          <label>
            message
            <input type="text" name="textarea" required />
          </label>
          <button className="clickbutton" type="submit">
            Envoyé le formulaire
          </button>
        </form>
      </main>
    </div>
  );
}

export default AdminContact;
