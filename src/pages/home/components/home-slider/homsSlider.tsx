import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { star } from "../../../../assets/images";
import PencilButton from "../../../../components/pencil-button";
import style from "./home.slider.module.scss";

const data = [
  {
    x: "0",
    z: "0",
    scale: "2, 1.8",
    id: 1,
  },
  {
    x: "-120%",
    z: "-150px",
    scale: "1",
    id: 2,
  },
  {
    x: "120%",
    z: "-150px",
    scale: "1",
    id: 3,
  },
];

const mData = [
  {
    x: "0",
    z: "0",
    scale: "1.3",
    id: 1,
  },
  {
    x: "-60%",
    z: "-50px",
    scale: "1",
    id: 2,
  },
  {
    x: "60%",
    z: "-50px",
    scale: "1",
    id: 3,
  },
];

const contentMap: any = {
  1: {
    title: "Customized Practice Ground",
    content: [
      "5000+ questions to practice",
      "Reliable study material",
      "Progressive Learning",
    ],
  },
  2: {
    title: "Question Bank",
    content: [
      "Question Bank",
      "Reliable study material",
      "Progressive Learning",
    ],
  },
  0: {
    title: "Applying Data Analytics",
    content: [
      "Applying Data Analytic",
      "Reliable study material",
      "Progressive Learning",
    ],
  },
};

const breakpoint = 620;

const Carousel = () => {
  const [item, setItems] = useState([]);
  const cache = useRef({});
  const [width, setWidth] = useState(window.innerWidth);
  const [transform, setTransform] = useState(width < breakpoint ? mData : data);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickSlider = useCallback((i: any) => {
    const section = `section${i + 1}`;
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const slider = useCallback(
    (data: any, i: number) => {
      const isActive = data.x === "0";

      return (
        <Fragment key={i}>
          {/* {isActive ? (
            <div className={style.title}>{contentMap[i]?.title}</div>
          ) : null} */}
          <div
            onClick={() => onClickSlider(i - 1)}
            className={`${style.card} ${isActive ? style.active : ""}`}
            style={{
              transform: `translateX(${data.x}) translateZ(${data.z}) scale(${data.scale})`,
              backgroundColor: isActive ? "#5858C6" : "white",
              zIndex: isActive ? 99 : 0,
            }}
          >
            <div className={style.dotContainer}>
              {Array(isActive ? 9 : 6)
                .fill(0)
                .map((_v, i) => (
                  <span className={style.dot} key={i}></span>
                ))}
            </div>
            <ul className={style.sliderContent}>
              {isActive
                ? contentMap[i]?.content?.map((val: any, i: any) => (
                    <li key={i}>
                      <img src={star} alt={val} className={style.star} />
                      <div>{val}</div>
                    </li>
                  ))
                : [1, 2, 3, 4].map((_v, i) => <li key={i}></li>)}
            </ul>
          </div>
          {/* {isActive ? (
            <PencilButton
              label="Explore more"
              onClick={() => onClickSlider(i)}
              className={style.explore}
            />
          ) : null} */}
        </Fragment>
      );
    },
    [width]
  );

  const next = useCallback(() => {
    const transforms = [...transform];
    transforms.push((transforms as any).shift());
    const index = transform.findIndex((item) => item.id === 1);
    setActiveIndex(index);
    setTransform(transforms);
  }, [transform]); 

  useEffect(() => {
    const ids: string = transform.map((item) => item?.id).join("");
    let rendered: any = (cache.current as any)[ids];
    if (!rendered) {
      const data: any = transform.map(slider);
      cache.current = {
        ...cache.current,
        [ids]: data,
      };
      setItems(data);
    } else {
      setItems(rendered);
    }

    const timer = setInterval(() => {
      next();
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, [next, slider, transform]);

  return (
    <div className={style.carouselContainer}>
      <div className={style.title}>{contentMap[activeIndex]?.title}</div>
      <div className={style.carousel}>{item}</div>
      <div className={style.exBtn}>
        <PencilButton
          label="Explore more"
          onClick={() => onClickSlider(activeIndex -1)}
          className={style.explore}
        />
      </div>
      <div className={style.indicators}>
        {transform.map((val, i) => (
          <div
            key={i}
            className={`${style.dot} ${val.x === "0" ? style.active : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
