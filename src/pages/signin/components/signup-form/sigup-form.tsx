import { Fragment, useCallback, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { Spark } from "../../../../assets/images";
import { Button } from "../../../../components";
import Input from "../../../../components/input/input";
import PencilButton from "../../../../components/pencil-button";
import FromControl from "../../../../container/form-control/form-control";
import Stepper from "../stepper/stepper";
import style from "./signup-form.module.scss";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const getForm = useCallback(() => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <FromControl label="First name" input={<Input />} />
            <FromControl
              label={
                <div className="form-label">
                  Middle name{" "}
                  <span className={style.helperTxt}>(optional)</span>
                </div>
              }
              input={<Input />}
            />
            <FromControl label="Last name" input={<Input />} />
            <FromControl
              label=""
              input={<Input />}
              renderLabel={() => (
                <div className="d-flex">
                  <label className="form-label">Profile name</label>
                  <span className={style.info}>
                    {" "}
                    <img src={Spark} alt="spark" /> Unique across Testroom
                  </span>
                </div>
              )}
            />
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <FromControl label="Country" input={<Input />} />
            <FromControl label="State" input={<Input disabled />} />
            <FromControl label="Current School Year" input={<Input />} />
          </Fragment>
        );

      case 2:
        return (
          <Fragment>
            <FromControl label="Mobile" input={<Input />} />
            <FromControl label="Email ID" input={<Input disabled />} />
            <FromControl
              label="Set Passowrd"
              input={<Input type="password" />}
            />
            <FromControl
              label={""}
              input={
                <div className="d-center">
                  <ReCAPTCHA sitekey="6LcjZfYlAAAAAECFC3eKbH6n7FcYqn8uabhWf_Hr" />
                </div>
              }
            />
            <div className="form-control d-center">
              <PencilButton className={style.signinBtn} label={"Signup"} />
            </div>
          </Fragment>
        );
    }
  }, [step]);

  const updateStep = useCallback(() => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate("/signin");
    }
  }, [navigate, step]);

  return (
    <div className={style.signupForm}>
      <h2>Welcome to testroom registration</h2>
      <div className={style.form}>
      <Stepper step={step} />
        {getForm()}
        { step === 2 ? null : <div className="form-control txt-right mt-10">
          <Button onClick={updateStep}>Next</Button>
        </div> }
      </div>
    </div>
  );
};

export default SignUpForm;
