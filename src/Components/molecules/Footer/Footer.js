import React from 'react';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import './Footer.css';
import { footerData } from '../../data';

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <ul className="footer__sections__wrapper">
        {footerData.map((item) => {
          const { title, content } = item;
          return (
            <li key={title} className="footer__section__item">
              <p className="footer__section__item__title"> {title}</p>
              <div>
                {content.map((contentItem) => {
                  return (
                    <p
                      key={contentItem}
                      className="footer__section__item__content"
                    >
                      {contentItem}
                    </p>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="socialIcons__wrapper">
        <FaInstagram className="socialIcon" />
        <FaTwitter className="socialIcon" />
        <FaFacebookF className="socialIcon" />
      </div>
    </footer>
  );
};

export default Footer;
