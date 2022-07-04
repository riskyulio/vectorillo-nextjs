import classes from "./Modal.module.css";
import Card from "../Card";

const Modal = (props) => {
  return (
    <div className={`${classes.modal} ${classes[props.display]}`}>
      <Card>Subscribe succesfully!</Card>
    </div>
  );
};

export default Modal;
