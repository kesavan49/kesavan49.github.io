import React, { Fragment, useCallback } from "react";
import { loginInfo, Megaphone, SignupBG } from "../../assets/images";
import { Header } from "../../components";
import Carousel, { CarouselItem } from "./components/carousel/carousel-signin";

import style from "./signin.module.scss";
import SplitLayout from "../../components/split-layout";
import SignInForm from "./components/signin-form/sigin-form";
import { useDevice } from "../../hooks/useDevice";
import SignUpForm from "./components/signup-form/sigup-form";
import { useNavigate } from "react-router-dom";

const sliderData = [
  {
    author: "-Steve R (Year 7)",
    descrption:
      "The Testroom platform enabled me to improve my performance significantly and gain a deeper understanding of the curriculum",
  },
  {
    author: "-Steve R (Year 7)",
    descrption:
      "The Testroom platform enabled me to improve my performance significantly and gain a deeper understanding of the curriculum",
  },
  {
    author: "-Steve R (Year 7)",
    descrption:
      "The Testroom platform enabled me to improve my performance significantly and gain a deeper understanding of the curriculum",
  },
  {
    author: "-Steve R (Year 7)",
    descrption:
      "The Testroom platform enabled me to improve my performance significantly and gain a deeper understanding of the curriculum",
  },
];

const SignIn = (props: any) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();
  const { isSignUp = false } = props;

  const renderRight = useCallback(() => {
    if (isSignUp) {
      return (
        !isMobile ? <Fragment>
          <div className={`d-flex ${style.navSign}`} onClick={() => navigate("/signin")}>
            Sign in
          </div>
          <div className={style.offer}>
            <div>
              <img className={style.icon} src={Megaphone} alt="Mega phone" />
            </div>
            <div>
              <ul>
                <li>
                  Receive 40% off when you sign up now and pay for a package{" "}
                </li>
                <li>Choose more, pay less!</li>
              </ul>
            </div>
          </div>
          <div className={style.image}>
            <img src={SignupBG} alt="Signup" />
          </div>
        </Fragment> : <Fragment />
      );
    }

    return !isMobile ? (
      <Fragment>
        {" "}
        <div className={style.slider}>
          <Carousel>
            {sliderData.map((item, i) => (
              <CarouselItem key={i}>
                <div className={style.slide}>
                  <h1 className={style.description}>“{item.descrption}”</h1>
                  <div className={style.author}>{item.author}</div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
        <div className={style.image}>
          <img src={loginInfo} alt="login info" />
        </div>
      </Fragment>
    ) : (
      <Fragment></Fragment>
    );
  }, [isSignUp, isMobile, navigate]);

  return (
    <SplitLayout
      className={`${style.signIn} ${isSignUp ? style.signUp : ''}`}
      left={
        <div className={style.signinContainer}>
          <Header className={style.header}></Header>
          {isSignUp ? <SignUpForm /> : <SignInForm />}
        </div>
      }
      right={renderRight()}
    ></SplitLayout>
  );
};

export default SignIn;
