import React from "react";
import PropTypes from "prop-types";

import "./Signform.css";

function Signform({ type }) {
  return (
    <form className="signform" onSubmit="">
      <h2>{type === "signup" ? "inscription" : "Connexion"}</h2>
      <label htmlFor="">
        Email
        <input type="email" required />
      </label>
      <label htmlFor="">
        Password
        <input type="password" name="password" required />
      </label>
      {type === "signup" && (
        <label htmlFor="">
          Password
          <input type="password" name="confirmPassword" required />
        </label>
      )}
      <button type="submit">
        {type === "signup" ? "Inscription" : "Se connecter"}
      </button>
    </form>
  );
}

Signform.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Signform;
