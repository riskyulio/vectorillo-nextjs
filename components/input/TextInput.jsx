import classes from "./TextInput.module.css";
import useInputValidation from "../../custom-hook/useInputValidation";
import { useState } from "react";

const TextInput = (props) => {
  //destructuring props
  const { value, design, type, placeholder, id, minLength, maxLength } = props;

  //validation result
  const [isValid, message] = useInputValidation(type, value);

  //styling the input based on validity
  const validStyling = isValid ? "validInput" : "invalidInput";

  return (
    <div>
      <input
        onChange={props.onChange}
        className={`${classes[validStyling]} ${classes[design]} ${classes.input}`}
        placeholder={placeholder}
        type={type}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
      />
      {/* {!isValid && <p>{message}</p>} */}
    </div>
  );
};

export default TextInput;
