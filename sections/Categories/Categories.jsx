import styles from "./Categories.module.css";
import abstract1 from "../../public/images/Rectangle 37.png";
import abstract2 from "../../public/images/Rectangle 38.png";
import abstract3 from "../../public/images/Rectangle 39.png";
import Button from "../../components/button/Button";
import arrowIcon from "../../public/images/right-arrow.svg";
import Image from "next/image";

const Categories = () => {
  return (
    <section className={styles.categories}>
      <h1>Explore by Categories</h1>
      <main className={styles["main-content"]}>
        <div className={styles.details}>
          <div className={styles.name}>
            <h4>Abstract</h4>
            <Button icon={arrowIcon} />
          </div>
          <Image src={abstract1} alt="abstract art" />
        </div>

        <div className={styles.details}>
          <div className={styles.name}>
            <h4>Portrait</h4>
            <Button icon={arrowIcon} />
          </div>
          <Image src={abstract2} alt="portrait art" />
        </div>

        <div className={styles.details}>
          <div className={styles.name}>
            <h4>Typography</h4>
            <Button icon={arrowIcon} />
          </div>
          <Image src={abstract3} alt="typography art" />
        </div>
      </main>
    </section>
  );
};

export default Categories;
