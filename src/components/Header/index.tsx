import { useState } from "react";
import AtomsIconSvg from "../IconSvg";
import style from "./styles.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/PedroHRFerreira",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pedro-henrique-2ab9b6302/",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pedrohr_dev/",
      icon: "instagram",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <nav className={style.header__container}>
        <div className={style.header__logo}>
          <AtomsIconSvg name="circleci" />
          <span className={style.header__brand}>Pedro H. Rodrigues</span>
        </div>

        <ul className={style.header__links}>
          {links.map((link) => (
            <li key={link.name} className={style.header__link_item}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.header__link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${style.header__hamburger} ${
            isMenuOpen ? style.header__hamburger_active : ""
          }`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`${style.header__mobile_menu} ${
          isMenuOpen ? style.header__mobile_menu_active : ""
        }`}
      >
        <ul className={style.header__mobile_links}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div className={style.header__overlay} onClick={closeMenu} />
      )}
    </header>
  );
};

export default Header;
