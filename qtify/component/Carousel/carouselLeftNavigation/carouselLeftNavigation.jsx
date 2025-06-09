import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./carouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../Assets/leftArrow.svg"; // ✅ correct import

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  // ✅ Safe setup of slideChange listener
  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange); // ✅ cleanup
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <LeftArrow
          onClick={() => swiper.slidePrev()}
          className={styles.arrowIcon}
        />
      )}
    </div>
  );
}