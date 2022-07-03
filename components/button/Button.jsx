import classes from "./Button.module.css";

const Button = (props) => {
  //type props should recieve either primary, secondary button
  const { onClick, text, icon, type, design } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${classes.button} ${classes[design]}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
