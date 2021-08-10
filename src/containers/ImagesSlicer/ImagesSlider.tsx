import React, { useState } from "react";
import { DivProps } from "react-html-props";
import styles from "./ImagesSlicer.module.scss";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";
import { Icon } from "../../components";

interface Props extends DivProps {
  items: string[];
}

const ImagesSlider = ({ items, className, ...props }: Props) => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={`${styles.slider} ${className}`} {...props}>
      <div className={styles.slider__container}>
        <button className={styles.left__arrow} onClick={prevSlide}>
          <Icon
            icon={IoIosArrowDropleftCircle}
            className={styles.left__arrow__icon}
          />
        </button>
        <button className={styles.right__arrow} onClick={nextSlide}>
          <Icon
            icon={IoIosArrowDroprightCircle}
            className={styles.right__arrow__icon}
          />
        </button>
        {items.map((slide, index) => (
          <div
            className={index === current ? styles.slide__active : styles.slide}
            key={index}
          >
            {index === current && (
              <img src={slide} alt=" " className={styles.image} />
            )}
          </div>
        ))}
      </div>

      <div className={styles.slider__smalll__container}>
        {items.map((slide, index) => (
          <button
            className={
              index === current
                ? styles.slide__small__active
                : styles.slide__small
            }
            key={index}
            onClick={() => setCurrent(index)}
          >
            <img src={slide} alt=" " className={styles.image__small} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImagesSlider;
