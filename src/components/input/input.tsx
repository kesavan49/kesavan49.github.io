import React, { useEffect, useState } from "react";
import { hidePassword, viewPassword } from "../../assets/images";

import style from "./input.module.scss";

const Input = (props: any) => {
  const { type = "text", disabled = false } = props;
  const [password, togglePassword] = useState(false);
  const [ctype, setType] = useState(type);

  useEffect(() => {
    if(type === 'password'){
      setType(password ? 'text' : 'password');
    }
  }, [password, type]);

  return (
    <div className={style.inputContainer}>
      <input type={ctype} className={style.input} disabled={disabled} />
      {type === "password" ? (
        <img className={style.passImg} src={password ? hidePassword : viewPassword} alt="password" onClick={() => togglePassword(!password)} />
      ) : null}
    </div>
  );
};

export default Input;
