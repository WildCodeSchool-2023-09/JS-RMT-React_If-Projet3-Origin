import { useState } from "react";
import connexion from "../../services/connexion";

const user = { email: "", password: "" };

function LoginAdm() {
  const [credentials, setCredential] = useState(user);

  const handleCredentials = (event) => {
    setCredential((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  // eslint-disable-next-line no-unused-vars
  const handleRequest = async (event) => {
    event.preventDefault();
    try {
      const valid = await connexion.post("/login", credentials);
      // eslint-disable-next-line no-restricted-syntax
      console.log(valid);
    } catch (error) {
      console.error(error);
    }
    //   const handleRequest = async (e) => {
    //     e.preventDefaut();
    //     try {
    //       const valid = await connexion.post("/login", credentials);
    //       console.log(valid);
    //     } catch (error) {
    //       console.log(error);

    //     }
  };
  return (
    <div>
      <h1>Accés à l'espace administration du site</h1>
      <main className="Admincontainer">
        <dir className="formcontainer">
          <form onSubmit="handleRequest">
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                onChange={handleCredentials}
                value={credentials.email}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                required
                onChange={handleCredentials}
                value={credentials.password}
              />
            </label>
            <button className="Login-button" type="submit">
              Se connecter
            </button>
          </form>
        </dir>
      </main>
    </div>
  );
}

export default LoginAdm;
