import React from "react";

import "./InscriptOrigins.css";

function InscriptOrigins() {
  return (
    <div>
      <h1> InscriptOrigins </h1>
      <main>
        <form className="nom">
          <label htmlFor="nom">Nom</label>
          <input type="nom" className="" />
          <form className="prenom">
            <label htmlFor="prenom">Prenom</label>
            <input type="prenom" className="" />
            <form className="pseudo">
              <label htmlFor="Pseudo"> Pseudo</label>
              <input type="pseudo" className="" />
              <form className="adresse mail">
                <label htmlFor="adresse mail"> Adresse mail</label>
                <input type="adresse mail" className="" />
                <form className=" confirmation mail">
                  <label htmlFor="confirmation mail"> Confirmation mail</label>
                  <input type="confirmation mail" className="" />
                  <button type="button">Save</button>
                </form>
              </form>
            </form>
          </form>
        </form>
      </main>
    </div>
  );
}

export default InscriptOrigins;
