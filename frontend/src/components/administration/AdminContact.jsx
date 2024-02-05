import React from "react";

import "./AdminContact.css";

function AdminContact() {
  return (
    <div className="demarquation">
      <main className="containercontact">
        <form className="adm-form">
          <label className="lab">
            Nom
            <input className="adm-in" type="text" name="text" required />
          </label>
          <label className="lab">
            prénom
            <input className="adm-in" type="text" name="text" required />
          </label>
          <label className="lab">
            @mail
            <input className="adm-in" type="email" name="email" required />
          </label>
          <label className="lab">
            Sujet
            <input className="adm-in" type="text" name="textarea" required />
          </label>
          <label className="lab">
            message
            <input className="adm-in" type="text" name="textarea" required />
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
