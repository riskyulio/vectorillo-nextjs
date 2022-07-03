import styles from "./Promo.module.css";

const Promo = (props) => {
  let color, logo;

  if (props.color === "light") {
    color = "light";
    logo = (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16.9268V19.0701H4.78638C11.493 19.0701 16.9299 24.507 16.9299 31.2136V36H19.0732V31.2136C19.0732 24.507 24.5102 19.0701 31.2168 19.0701H36V16.9268H31.2136C24.507 16.9268 19.0701 11.4898 19.0701 4.78324V0H16.9268V4.78638C16.9268 11.493 11.4898 16.9299 4.78324 16.9299H0V16.9268Z"
          fill="#3d40cc"
        />
      </svg>
    );
  } else if (props.color === "dark") {
    color = "dark";
    logo = (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16.9268V19.0701H4.78638C11.493 19.0701 16.9299 24.507 16.9299 31.2136V36H19.0732V31.2136C19.0732 24.507 24.5102 19.0701 31.2168 19.0701H36V16.9268H31.2136C24.507 16.9268 19.0701 11.4898 19.0701 4.78324V0H16.9268V4.78638C16.9268 11.493 11.4898 16.9299 4.78324 16.9299H0V16.9268Z"
          fill="white"
        />
      </svg>
    );
  }

  const content = [];

  for (let i = 0; i < 20; i++) {
    content.push(
      <>
        <span>Artpress Black Friday</span>
        <span>{logo}</span>
        <span>Discount 40%</span>
        <span>{logo}</span>
      </>
    );
  }

  return (
    <section className={`${styles.promo} ${styles[color]}`}>
      <div className={styles.content}>{content}</div>
    </section>
  );
};

export default Promo;
