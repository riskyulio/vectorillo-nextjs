import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={`${classes.form} ${classes[props.flexDir]}`}>
      {props.children}
    </form>
  );
};

export default Form;
