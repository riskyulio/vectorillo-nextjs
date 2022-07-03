import Product from "../../components/cards/product/Product";
import styles from "./Products.module.css";
import product_1 from "../../../images/Rectangle 37.png";
import product_2 from "../../../images/Rectangle 38.png";
import product_3 from "../../../images/Rectangle 39.png";
import product_4 from "../../../images/Rectangle 40.png";
import product_5 from "../../../images/Rectangle 41.png";
import product_6 from "../../../images/Rectangle 42.png";
import product_7 from "../../../images/Rectangle 43.png";
import product_8 from "../../../images/Rectangle 44.png";
import product_9 from "../../../images/Rectangle 45.png";
import Button from "../../../components/button/Button";

const DUMMY_PRODUCTS = [
  {
    src: product_1,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_2,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_3,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_4,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_5,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_6,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_7,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_8,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_9,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_9,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_9,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
  {
    src: product_9,
    alt: "abstract art",
    title: "Abstract art",
    price: 135,
  },
];

const Products = () => {
  const rightArrow = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z"
        fill="white"
      />
    </svg>
  );

  return (
    <section className={styles.products}>
      <main className={styles.productMainSection}>
        {DUMMY_PRODUCTS.map((product) => (
          <Product details={product} />
        ))}
      </main>
      <Button design="primary" text="More products" icon={rightArrow} />
    </section>
  );
};

export default Products;