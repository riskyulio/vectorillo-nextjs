import classes from "./Modal.module.css";
import Card from "../Card";

const Modal = () => {
  let modalClass = "";

  const modalHandler = () => {
    modalClass = "hidden";
    console.log(modalClass);
  };

  return (
    <div
      onClick={modalHandler}
      className={`${classes[modalClass]} ${classes.modal}`}
    >
      <Card>Subscribe succesfully!</Card>
    </div>
  );
};

export default Modal;
