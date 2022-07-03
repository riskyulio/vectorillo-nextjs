import SignUpForm from "../../form/signup-form/SignUpForm";
import classes from "./SignupTab.module.css";

const SignUpTab = () => {
  return (
    <div>
      <h4 className={classes.title}>Signup</h4>
      <SignUpForm />
    </div>
  );
};

export default SignUpTab;
