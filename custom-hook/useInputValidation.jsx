import { useEffect, useState } from "react";

const useInputValidation = (type, value) => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  //using useEffect to produce some state changes
  useEffect(() => {
    //email validation
    if (type === "email") {
      if (value.length >= 1 && value.includes("@")) {
        setIsValid(true);
        setMessage("Email kamu valid");
      } else {
        setIsValid(false);
        setMessage("Email kamu tidak valid");
      }
    }

    //password validation
    if (type === "password") {
      if (value.length >= 8) {
        setIsValid(true);
        setMessage("password valid");
      } else {
        setIsValid(false);
        setMessage("password harus lebih dari 8 karakter");
      }
    }

    return () => {
      setIsValid(true);
    };
  }, [type, value, isValid, message]);

  return [isValid, message];
};

export default useInputValidation;
