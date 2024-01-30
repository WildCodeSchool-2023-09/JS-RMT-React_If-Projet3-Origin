import React from "react";
import PropTypes from "prop-types";

import "./Signform.css";

function Signform({ type }) {
  return (
    <form className="signform" onSubmit="">
      <h2 className="sign-connexion">
        {type === "signup" ? "inscription" : "Connexion"}
      </h2>
      <label className="sign-input" htmlFor="">
        Email
        <input type="email" required />
      </label>
      <label className="sign-input" htmlFor="">
        Password
        <input type="password" name="password" required />
      </label>
      {type === "signup" && (
        <label className="sign-input" htmlFor="">
          Password
          <input type="password" name="confirmPassword" required />
        </label>
      )}
      <button className="sign-input" type="submit">
        {type === "signup" ? "Inscription" : "Se connecter"}
      </button>
    </form>
  );
}

Signform.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Signform;
