import classes from "./TextInput.module.css";
import useInputValidation from "../../custom-hook/useInputValidation";
import Image from "next/image";
import { useState } from "react";

const TextInput = (props) => {
  const [value, setValue] = useState("");

  //destructuring props
  const { icon, design, type, placeholder, id, minLength, maxLength } = props;

  console.log(icon);

  //validation result
  const [isValid, message] = useInputValidation(type, value);

  //styling the input based on validity
  const validStyling = isValid ? "validInput" : "invalidInput";

  //handling the input when it's value was changed
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  if (type === "password") {
    console.log(value);
  }

  return (
    <div
      className={`${classes.inputWrapper} ${classes.focus} ${classes[design]}`}
    >
      <div className={classes.icon}>{icon}</div>
      <input
        onChange={onChangeHandler}
        className={`${classes[validStyling]} ${classes.input}`}
        placeholder={placeholder}
        type={type}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
      />
      {/* {!isValid && <p>{message}</p>} */}
    </div>
  );
};

export default TextInput;
