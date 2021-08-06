import React from "react";
import { Icon } from "../../components";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare
} from "react-icons/fa";
import { strings } from "../../data";
import { DivProps } from "react-html-props";
import styles from "./ContactSession.module.scss";

interface Props extends DivProps {}

const ContactSession = (props: Props) => {
  const contents = strings.footer.contact;

  return (
    <div className={`${styles.contact} ${props.className}`}>
      <div className={styles.contact__container}>
        <div className={styles.contact__hotline}>
          <p className={styles.contact__label}>{contents.hotline.label}</p>
          <div className={styles.hotline__container}>
            <Icon icon={FaPhoneAlt} className={styles.hotline__icon} />
            <span className={styles.hotline__number}>
              {contents.hotline.number}
            </span>
          </div>
        </div>
        <div className={styles.contact__social}>
          <p className={styles.contact__label}>{contents.social.label}</p>
          <div className={styles.social__container}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social__link}
            >
              <Icon
                icon={FaFacebookSquare}
                className={`${styles.social__icon} ${styles.facebook}`}
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social__link}
            >
              <Icon
                icon={FaLinkedin}
                className={`${styles.social__icon} ${styles.linkin}`}
              />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social__link}
            >
              <Icon
                icon={FaTwitterSquare}
                className={`${styles.social__icon} ${styles.twitter}`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSession;
