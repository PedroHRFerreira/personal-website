import AtomsIconSvg from "../IconSvg";
import style from "./styles.module.scss";

const Header = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
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
