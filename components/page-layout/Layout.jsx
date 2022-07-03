import MainNavigation from "../navigation/MainNavigation";
import Footer from "../footer/Footer";
import classes from "./Layout.module.css";
// import Modal from "../../components/popup/Modal";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      {/* <Modal /> */}
      <MainNavigation />
      <main className={classes.mainContent}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
