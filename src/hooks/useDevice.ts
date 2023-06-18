import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setMobile(width <= 768 ? true : false);
    setTablet(width >= 768 && width <= 1024 ? true : false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet };
};
