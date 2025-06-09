import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./carouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../Assets/rightArrow.svg"; // ✅ Correct import

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  // ✅ Listen for slide change safely
  useEffect(() => {
    const handleSlideChange = () => setIsEnd(swiper.isEnd);
    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <RightArrow
          onClick={() => swiper.slideNext()}
          className={styles.arrowIcon}
        />
      )}
    </div>
  );
}