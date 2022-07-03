import Card from "../../components/Card";
import Form from "../../components/form/Form";
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  const subscribeHandler = (e) => {
    e.preventDefault();
    console.log("subscribed!");
  };

  return (
    <section className={classes.subscribe}>
      <p className={classes.caption}>Receive deals every week, no spam</p>
      <h4 className={classes.heading}>Subscribe the newsletter!</h4>
      <Card>
        <Form onSubmit={subscribeHandler} flexDir="row">
          <TextInput
            design="outlined"
            type="email"
            id="email"
            minLength="4"
            placeholder="Enter email"
            required
          />
          <Button
            type="submit"
            design="primary"
            className={classes["submit-subscribtion"]}
            text="Subscribe"
          />
        </Form>
      </Card>
    </section>
  );
};

export default Subscribe;
