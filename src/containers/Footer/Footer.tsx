import React from "react";
import styles from "./Footer.module.scss";
import { DivProps } from "react-html-props";
import ContactSession from "./ContactSession";
import { footerNavItems } from "./render";
import { Link } from "react-router-dom";
import Certificate from "../../assets/images/certificate.png";
import { strings } from "../../data";

interface Props extends DivProps {}

const Footer = (props: Props) => {
  const FooterNavs = footerNavItems.map(
    (item: { label: string; to: string }) => {
      return (
        <Link
          to={item.to}
          className={styles.footer__nav__item}
          key={item.label}
        >
          {item.label}
        </Link>
      );
    }
  );

  return (
    <div className={`${styles.footer} ${props.className}`}>
      <div className={styles.footer__container}>
        <ContactSession className={styles.footer__contact} />
        <div className={styles.footer__nav}>{FooterNavs}</div>
        <img src={Certificate} className={styles.footer__certificate} alt="" />
        <div className={styles.footer__infor__container}>
          <p className={styles.footer__infor__label}>
            {strings.footerInforLabel}
          </p>
          <p
            className={styles.footer__infor}
            dangerouslySetInnerHTML={{ __html: strings.footerBussinessInfor }}
          ></p>
          <p
            className={styles.footer__infor}
            dangerouslySetInnerHTML={{ __html: strings.footerAddress_1 }}
          ></p>
          <p
            className={styles.footer__infor}
            dangerouslySetInnerHTML={{ __html: strings.footerAddress_2 }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
