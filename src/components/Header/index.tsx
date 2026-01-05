import AtomsIconSvg from "../IconSvg";
import style from "./styles.module.scss";

const Header = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/PedroHRFerreira",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pedro-henrique-2ab9b6302/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pedrohr_dev/",
    },
  ];
  return (
    <nav className={style.nav}>
      <AtomsIconSvg name="circleci" />
      <div className={style.links}>
        {links.map((link) => (
          <ul key={link.name}>
            <li>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Header;
