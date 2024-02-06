import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Signform.css";

function Signform({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <form className="signformform" onSubmit={handleSubmit}>
      <h2 className="signtext">
        {type === "signup" ? "Inscription" : "Connexion"}
      </h2>
      <label className="signtext" htmlFor="email">
        Email
        <input
          className="signtext"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="signtext" htmlFor="password">
        Password
        <input
          className="signtext"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="signsubmit" type="submit">
        {type === "signup" ? "Inscription" : "Se connecter"}
      </button>
    </form>
  );
}

Signform.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Signform;
