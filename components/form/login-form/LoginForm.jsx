import Form from "../Form";
import Button from "../../button/Button";
import TextInput from "../../input/TextInput";
import EmailIcon from "../../icons/Email";
import Link from "next/link";

const LoginForm = (props) => {
  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={loginHandler} flexDir="column">
      <TextInput
        icon={EmailIcon}
        placeholder="Enter email"
        type="email"
        id="email"
        minLength="3"
        design="outlined"
        required
      />
      <TextInput
        // icon={passwordIcon}
        placeholder="Enter password"
        type="password"
        id="password"
        minLength="3"
        design="outlined"
        required
      />
      <Link href="/profile">
        <Button text="Login" design="primary" />
      </Link>
    </Form>
  );
};

export default LoginForm;
