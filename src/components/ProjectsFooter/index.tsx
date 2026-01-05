import style from "./styles.module.scss";

interface Project {
  name: string;
  url: string;
  stars: number;
  tech: string;
}

const ProjectsFooter = () => {
  const topProjects: Project[] = [
    {
      name: "Projeto",
      url: "https://github.com/PedroHRFerreira/Projeto",
      stars: 6,
      tech: "Vue",
    },
    {
      name: "Portfolio",
      url: "https://github.com/PedroHRFerreira/portfolio",
      stars: 6,
      tech: "Vue",
    },
    {
      name: "Projeto Bytebank",
      url: "https://github.com/PedroHRFerreira/Projeto-do-Bytebank",
      stars: 5,
      tech: "JavaScript",
    },
    {
      name: "Sistema de Login",
      url: "https://github.com/PedroHRFerreira/Sistema-de-Login",
      stars: 4,
      tech: "PHP",
    },
    {
      name: "Sistema Marketplace",
      url: "https://github.com/PedroHRFerreira/Sistema-Marketplace",
      stars: 4,
      tech: "JavaScript",
    },
    {
      name: "API Laravel",
      url: "https://github.com/PedroHRFerreira/api-laravel",
      stars: 3,
      tech: "Laravel",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/PedroHRFerreira",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pedro-henrique-2ab9b6302",
    },
    {
      name: "Portfolio",
      url: "https://portfolio20-kappa.vercel.app/",
    },
  ];

  return (
    <div className={style.projects_footer}>
      <div className={style.projects_footer__section}>
        <h3 className={style.projects_footer__title}>Projetos em Destaque</h3>
        <ul className={style.projects_footer__list}>
          {topProjects.slice(0, 3).map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.projects_footer__link}
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.projects_footer__section}>
        <h3 className={style.projects_footer__title}>Mais Projetos</h3>
        <ul className={style.projects_footer__list}>
          {topProjects.slice(3, 6).map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.projects_footer__link}
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.projects_footer__section}>
        <h3 className={style.projects_footer__title}>Links</h3>
        <ul className={style.projects_footer__list}>
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.projects_footer__link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsFooter;
