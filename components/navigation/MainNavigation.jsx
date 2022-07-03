import Logo from "../logo/Logo";
import classes from "./MainNavigation.module.css";
import NavMenu from "./nav-menu/NavMenu";


const MainNavigation = () => {
  return (
    <header className={classes.mainNavigation}>
      <Logo />
      <NavMenu />
    </header>
  );
};

export default MainNavigation;
