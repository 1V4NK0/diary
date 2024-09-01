import PageNavigation from "../components/PageNavigation";
import thinkingWoman from "../content/thinkingwoman.jpg";
import styles from "./About.module.css";
import "../index.css";
function About() {
  return (
    <main className={styles.main}>
      <PageNavigation />
      <section>
        <img src={thinkingWoman} alt="thinking woman" />
        <div className="about-container">
          <h2>
            About <i>Reflect</i>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            reiciendis fugiat cumque excepturi, fuga consequuntur veniam
            repellendus atque, at, in nostrum eveniet voluptate aperiam ea.
            Officia dolores perferendis porro ratione incidunt qui iste sit
            excepturi eveniet? Ipsa architecto fugit qui.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            reiciendis fugiat cumque excepturi, fuga consequuntur veniam
            repellendus atque, at, in nostrum eveniet voluptate aperiam ea.
            Officia dolores perferendis porro ratione incidunt qui iste sit
            excepturi eveniet? Ipsa architecto fugit qui.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
