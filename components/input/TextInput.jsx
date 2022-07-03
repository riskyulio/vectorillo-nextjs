import classes from "./TextInput.module.css";
import useInputValidation from "../../custom-hook/useInputValidation";
import { useState } from "react";

const TextInput = (props) => {
  const [value, setValue] = useState("");

  //destructuring props
  const { design, type, placeholder, id, minLength, maxLength } = props;

  //validation result
  const [isValid, message] = useInputValidation(type, value);

  //styling the input based on validity
  const validStyling = isValid ? "validInput" : "invalidInput";

  //handling the input when it's value was changed
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        onChange={onChangeHandler}
        className={`${classes[validStyling]} ${classes[design]} ${classes.input}`}
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
