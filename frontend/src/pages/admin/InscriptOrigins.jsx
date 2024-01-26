import React from "react";

import "./InscriptOrigins.css";

function InscriptOrigins() {
  return (
    <div className="inscript">
      <h1>InscriptOrigins</h1>
      <section>
        <main>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="lastname" type="text" name="text">
              Nom
              <input className="nom" type="text" name="text" required />
            </label>
            <label className="lastname" type="text" name="text">
              Prénom
              <input className="nom" type="text" name="text" required />
            </label>
            <label className="lastname" type="text" name="text">
              Mail
              <input className="nom" type="mail" name="mail" required />
            </label>
            <label className="lastname" type="text" name="text">
              Pseudo
              <input className="nom" type="text" name="text" required />
            </label>
            <label className="lastname" type="text" name="text" required>
              Mot de passe
              <input className="nom" type="password" name="password" required />
            </label>
            <label
              className="lastname"
              type="password"
              name="password"
              required
            >
              Confirmation du passe
              <input
                className="nom"
                type="password"
                name="comfirmedPassword"
                required
              />
            </label>

            <button className="Inscription" type="submit">
              Inscription
            </button>
          </form>
        </main>
      </section>
    </div>
  );
}

export default InscriptOrigins;
