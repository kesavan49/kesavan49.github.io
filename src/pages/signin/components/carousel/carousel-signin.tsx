import React, {
  useEffect,
  useState,
  useCallback,
  cloneElement,
  Children,
} from "react";

import style from "./carousel.sign.module.scss";

type CarouselItemProps = {
  children: React.ReactNode | string;
  width?: string;
};

export const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  width,
}) => (
  <div className={style.carouselItem} style={{ width }}>
    {children}
  </div>
);

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const itemCount = React.Children.count(children);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const updateIndex = useCallback(
    (newIndex: number) => {
      newIndex =
        newIndex < 0 ? itemCount - 1 : newIndex >= itemCount ? 0 : newIndex;
      setActiveIndex(newIndex);
    },
    [itemCount]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [paused, activeIndex, updateIndex]);

  return (
    <div
      className={style.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={style.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child: any, index) =>
          cloneElement(child, { width: "100%" })
        )}
      </div>
      <div className={style.indicators}>
        {Children.map(children, (child, index) => (
          <span
            className={`${style.dot} ${index === activeIndex ? style.active : ""}`}
            onClick={() => updateIndex(index)}
          >
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
