import LoginForm from "../../../form/login-form/LoginForm";
import classes from "./LoginTab.module.css";

const LoginTab = () => {
  return (
    <div className={classes.loginTab}>
      <h4 className={classes.title}>Login</h4>
      <LoginForm />
    </div>
  );
};

export default LoginTab;
