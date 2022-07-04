import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes[props.display]} ${classes.backdrop}`}
    ></div>
  );
};

export default Backdrop;
