import Form from "../Form";
import classes from "./LoginForm.module.css";
import Button from "../../button/Button";
import TextInput from "../../input/TextInput";

const LoginForm = (props) => {
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("logged in");
  };

  return (
    <Form onSubmit={loginHandler} flexDir="column">
      <TextInput
        placeholder="Enter email"
        type="email"
        id="email"
        minLength="3"
        design="outlined"
      />
      <TextInput
        placeholder="Enter password"
        type="password"
        id="password"
        minLength="3"
        design="outlined"
      />
      <Button text="Login" design="primary" />
    </Form>
  );
};

export default LoginForm;
