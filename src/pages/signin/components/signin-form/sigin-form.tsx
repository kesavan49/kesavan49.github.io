import { Fragment } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/input/input";
import PencilButton from "../../../../components/pencil-button";
import FromControl from "../../../../container/form-control/form-control";
import style from "./signin-form.module.scss";

const SignInForm = () => {
  const navigate = useNavigate();
  return (
    <div className={style.signinForm}>
      <h2>Welcome back</h2>
      <div className={style.form}>
        <FromControl label="First name" input={<Input />} />
        <FromControl
          label="Password"
          input={
            <Fragment>
              <Input type="password" />
              <div className={style.tooltext}>Forgot Password?</div>
            </Fragment>
          }
        />
        <div className="form-control d-center">
          <ReCAPTCHA sitekey="6LcjZfYlAAAAAECFC3eKbH6n7FcYqn8uabhWf_Hr" />
        </div>
        <div className="form-control d-center">
          <PencilButton label="Sign in" className={style.signinBtn} />
        </div>
        <div className={`form-control ${style.text}` }>
          By signing in, I accept the{" "}
          <span className="link">Terms of Service</span> as well as{" "}
          <span className="link">Privacy policy</span>
        </div>
        <div className={`form-control ${style.text}` }>
          Don’t have an account?{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
