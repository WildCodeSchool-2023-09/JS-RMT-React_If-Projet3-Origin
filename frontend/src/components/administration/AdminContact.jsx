import React from "react";

import "./AdminContact.css";

function AdminContact() {
  return (
    <div className="demarquation">
      <main className="containercontact">
        <form>
          <label className="lab">
            Nom
            <input type="text" name="text" required />
          </label>
          <label className="lab">
            prénom
            <input type="text" name="text" required />
          </label>
          <label className="lab">
            @mail
            <input type="email" name="email" required />
          </label>
          <label className="lab">
            Sujet
            <input type="text" name="textarea" required />
          </label>
          <label className="lab">
            message
            <input type="text" name="textarea" required />
          </label>
          <button className="lab" type="submit">
            <t className="Env">Envoyé le formulaire</t>
          </button>
        </form>
      </main>
    </div>
  );
}

export default AdminContact;
