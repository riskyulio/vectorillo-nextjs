import styles from "./Artist.module.css";
import artist1 from "../../../images/unsplash_IF9TK5Uy-KI.png";
import artist2 from "../../../images/unsplash_OhKElOkQ3RE.png";
import artist3 from "../../../images/unsplash_Zz5LQe-VSMY.png";

const Artist = () => {
  return (
    <section className={styles.artist}>
      <h1>Explore by Artist</h1>
      <main className={styles["main-content"]}>
        <div className={styles.details}>
          <div className={styles.name}>
            <h4>Becai</h4>
          </div>
          <img src={artist1} alt="artist" />
        </div>

        <div className={styles.details}>
          <div className={styles.name}>
            <h4>Barira Khan</h4>
          </div>
          <img src={artist2} alt="artist" />
        </div>

        <div className={styles.details}>
          <div className={styles.name}>
            <h4>Kimberley Cruz</h4>
          </div>
          <img src={artist3} alt="artist" />
        </div>
      </main>
    </section>
  );
};

export default Artist;
