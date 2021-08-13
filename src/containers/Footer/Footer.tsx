import React from "react";
import styles from "./Footer.module.scss";
import { DivProps } from "react-html-props";
import ContactSession from "./ContactSession";
import { Link } from "react-router-dom";
import Certificate from "../../assets/images/certificate.png";
import { strings } from "../../data";
import { Routes } from "../../routings";

interface Props extends DivProps {}

const Footer = ({ className, ...props }: Props) => {
  const contents = strings.footer;

  const navigations = [
    { label: contents.navigations.about, to: Routes.ABOUT },
    { label: contents.navigations.recruitment, to: Routes.RECRUITMENT },
    { label: contents.navigations.policy, to: Routes.POLICY },
    { label: contents.navigations.refund, to: Routes.REFUND },
    { label: contents.navigations.help, to: Routes.HELP }
  ];

  return (
    <div className={`${styles.footer} ${className}`} {...props}>
      <div className={styles.footer__container}>
        <ContactSession className={styles.footer__contact} />
        <div className={styles.footer__nav}>
          {navigations.map((item: { label: string; to: string }) => (
            <Link
              to={item.to}
              className={styles.footer__nav__item}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <img src={Certificate} className={styles.footer__certificate} alt="" />
        <div className={styles.footer__infor__container}>
          <p className={styles.footer__infor__label}>{contents.infor.label}</p>
          <p
            className={styles.footer__infor}
            dangerouslySetInnerHTML={{ __html: contents.infor.bussiness }}
          ></p>
          <p
            className={styles.footer__infor}
            dangerouslySetInnerHTML={{ __html: contents.infor.address_1 }}
          ></p>
          <p
            className={styles.footer__infor}
            dangerouslySetInnerHTML={{ __html: contents.infor.address_2 }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
