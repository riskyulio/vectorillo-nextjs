import classes from "./Footer.module.css";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <h4 className={classes.heading}>About Us</h4>
        <ul>
          <li className={classes.listItem}>Refund and Returns Policy</li>
          <li className={classes.listItem}>Terms and Conditions</li>
          <li className={classes.listItem}>Privacy Policy</li>
        </ul>
      </div>
      <div className={classes.links}>
        <h4 className={classes.heading}>Quick Links</h4>
        <ul>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>My account</li>
          <li className={classes.listItem}>Checkout</li>
          <li className={classes.listItem}>Wishlist</li>
        </ul>
      </div>
      <div className={classes.contact}>
        <h4 className={classes.heading}>Contact Us</h4>
        <ul>
          <li>artpress@bordereast.ca</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className={classes.policy}>
        <ul>
          <li className={classes.listItem}>
            <a href="#refund">Refund and Returns Policy</a>
          </li>
          <li className={classes.listItem}>
            <a href="#terms">Terms and Conditions</a>
          </li>
          <li className={classes.listItem}>
            <a href="#policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className={classes.logo}>
        <Logo color="#000" />
      </div>
      <div className={classes.copyright}>
        <p>© 2022 ArtPress. Made with ♥ and ☕ by Rizfirsy</p>
      </div>
    </footer>
  );
};

export default Footer;
