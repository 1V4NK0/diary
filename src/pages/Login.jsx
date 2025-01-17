import { useState } from "react";
import PageNavigation from "../components/PageNavigation";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("ivanko@ukr.com");
  const [password, setPassword] = useState("zsutop");
  return (
    <main className={styles.login}>
      <PageNavigation />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
