import Form from "../Form";
import classes from "./SignUpForm.module.css";
import Button from "../../button/Button";
import TextInput from "../../input/TextInput";

const SignUpForm = () => {

  const signupHandler = (e) => {
    e.preventDefault();
    console.log("signed up");
  };
  return (
    <Form onSubmit={signupHandler} flexDir="column">
      <TextInput
        placeholder="What's your name?"
        type="email"
        id="name"
        minLength="2"
        design="outlined"
      />
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
      <Button text="Sign up" design="primary" />
    </Form>
  );
};

export default SignUpForm;
