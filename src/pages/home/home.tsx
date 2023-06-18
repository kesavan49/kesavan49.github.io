import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { section2Bg, section3Bg, section4Bg } from "../../assets/images";
import { Button, Header } from "../../components";
import Footer from "../../components/footer";
import SplitLayout from "../../components/split-layout";
import HomeNav from "./components/home-nav/home-nav";
import HomePlay from "./components/home-play/home-pay";
import Carousel from "./components/home-slider/homsSlider";
import "./home.scss";

const homeSection = [
  {
    title: "Selective Entry, OC, Scholarship test preparations",
    description:
      "Ansterra testroom is an all-in-one test practice ground that takes your test preparations to next level",
    isHome: true,
  },
  {
    title: "Customized practice ground",
    description:
      "A customized practice ground for Australian school kids refers to a specially designed and tailored environment that facilitates hands-on learning experiences and skill development. ",
    image: section2Bg,
  },
  {
    title: "Question Bank",
    description:
      "A customized practice ground for Australian school kids refers to a specially designed and tailored environment that facilitates hands-on learning experiences and skill development. ",
    image: section3Bg,
  },
  {
    title: "Applying data Analytics",
    description:
      "A customized practice ground for Australian school kids refers to a specially designed and tailored environment that facilitates hands-on learning experiences and skill development. ",
    image: section4Bg,
  },
];

const Home = () => {
  const navigate = useNavigate();

  const onClickNav = useCallback((e: any) => {
      const url = e?.target?.dataset?.url;
      navigate(url);
  }, [navigate]);

  return (
    <div className="home-container">
      <Header
        className={'fixed'}
        rightAction={<HomeNav onClick={onClickNav} />}
      ></Header>

      {homeSection.map((section, i) => (
        <SplitLayout
          key={i}
          className={`section${i}`}
          id={`section${i}`}
          left={
            <>
              <div className="sec-title">{section?.title}</div>
              <div className="sec-desc">{section?.description}</div>
            </>
          }
          right={
            section.isHome ? <Carousel /> : <HomePlay image={section?.image} title={section?.title} />
          }
        ></SplitLayout>
      ))}

      <Footer></Footer>
    </div>
  );
};

export default Home;
