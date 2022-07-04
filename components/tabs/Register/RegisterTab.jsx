import classes from "./RegisterTab.module.css";
import LoginTab from "./all-tabs/LoginTab";
import SignUpTab from "./all-tabs/SignupTab";
import { useState } from "react";

const Tab = () => {
  const [tabActive, setTabActive] = useState("login");
  //in above tab state, we can use login-signup value, but here I use boolean for fast code reading & execution
  // if true then login, if false then signup

  const loginTabHandler = () => {
    setTabActive("login");
  };

  const signUpTabHandler = () => {
    setTabActive("signup");
  };

  return (
    <div className={classes.tab}>
      {/* list of tabs */}
      <ul className={classes.nav}>
        <li
          className={tabActive === "login" ? classes.active : "login"}
          onClick={loginTabHandler}
        >
          Login
        </li>
        <li
          className={tabActive === "signup" ? classes.active : "signup"}
          onClick={signUpTabHandler}
        >
          Signup
        </li>
      </ul>
      {/* content of active tab */}
      <div className={classes.tabContent}>
        {tabActive === "login" ? <LoginTab /> : <SignUpTab />}
      </div>
    </div>
  );
};
export default Tab;
