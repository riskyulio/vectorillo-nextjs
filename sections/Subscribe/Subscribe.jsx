import Card from "../../components/Card";
import Form from "../../components/form/Form";
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import classes from "./Subscribe.module.css";
import Backdrop from "../../components/popup/Backdrop";
import Modal from "../../components/popup/Modal";
import { useState } from "react";

const Subscribe = () => {
  const [inputValue, setInputValue] = useState("");
  const [backdropDisplay, setBackdropDisplay] = useState("close");
  const onSubscribeHandler = (e) => {
    e.preventDefault();
    setBackdropDisplay("open");
    setInputValue("");
  };

  const backdropHandler = () => {
    setBackdropDisplay("close");
  };

  //handling the input when it's value was changed
  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className={classes.subscribe}>
      <Modal display={backdropDisplay} />
      <Backdrop onClick={backdropHandler} display={backdropDisplay} />
      <p className={classes.caption}>Receive deals every week, no spam</p>
      <h4 className={classes.heading}>Subscribe the newsletter!</h4>
      <Card>
        <Form onSubmit={onSubscribeHandler} flexDir="row">
          <TextInput
            design="outlined"
            type="email"
            id="email"
            minLength="4"
            placeholder="Enter email"
            value={inputValue}
            onChange={onInputChangeHandler}
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
