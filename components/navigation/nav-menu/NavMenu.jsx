import classes from "./NavMenu.module.css";
import Link from "next/link";
import Button from "../../button/Button";

const NavMenu = () => {
  return (
    <ul className={classes.navMenu}>
      <li className={classes.navLink}>
        <Link href="/store">Store</Link>
      </li>
      <li className={classes.navLink}>
        <Link href="/hire-artist">Hire Artist</Link>
      </li>
      <li className={classes.navLink}>
        <Link href="/login">
          <Button text="Login/signup" design="secondary" />
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
