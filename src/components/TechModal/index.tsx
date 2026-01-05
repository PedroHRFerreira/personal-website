import AtomsText from "@/components/Text/Index";
import style from "./styles.module.scss";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TechModal = ({ isOpen, onClose }: TechModalProps) => {
  const technologies = {
    code: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "Sass",
      "Go",
      "Python",
    ],
    frameworks: ["Vue.js", "Nuxt.js", "Next.js", "React", "Laravel"],
    expertise: ["Web Development", "Full Stack", "Micro-serviços", "LLM"],
  };

  const githubStats = {
    profile: "PedroHRFerreira",
    age: 18,
    role: "Desenvolvedor Full Stack",
    experience:
      "Atuo profissionalmente em vários micro-serviços back-end e desenvolvimento front-end",
  };

  if (!isOpen) return null;

  return (
    <div className={style.modal} onClick={onClose}>
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.modal__close} onClick={onClose}>
          ✕
        </button>

        <div className={style.modal__header}>
          <h2 className={style.modal__title}>👋 Olá! Eu sou Pedro</h2>
          <AtomsText fontSize="1.125rem" color="#00ff88">
            {githubStats.role}
          </AtomsText>
          <AtomsText fontSize="0.95rem" color="rgba(255, 255, 255, 0.8)">
            {githubStats.age} anos • {githubStats.experience}
          </AtomsText>
        </div>

        <div className={style.modal__section}>
          <h3 className={style.modal__subtitle}>
            <span className={style.modal__icon}>💻</span>
            Linguagens
          </h3>
          <div className={style.modal__tags}>
            {technologies.code.map((tech) => (
              <span key={tech} className={style.modal__tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={style.modal__section}>
          <h3 className={style.modal__subtitle}>
            <span className={style.modal__icon}>🚀</span>
            Frameworks & Ferramentas
          </h3>
          <div className={style.modal__tags}>
            {technologies.frameworks.map((framework) => (
              <span key={framework} className={style.modal__tag}>
                {framework}
              </span>
            ))}
          </div>
        </div>

        <div className={style.modal__section}>
          <h3 className={style.modal__subtitle}>
            <span className={style.modal__icon}>🎯</span>
            Especialidades
          </h3>
          <div className={style.modal__tags}>
            {technologies.expertise.map((exp) => (
              <span
                key={exp}
                className={`${style.modal__tag} ${style.modal__tag_highlight}`}
              >
                {exp}
              </span>
            ))}
          </div>
        </div>

        <a
          href={`https://github.com/${githubStats.profile}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.modal__github_link}
        >
          Ver perfil no GitHub →
        </a>
      </div>
    </div>
  );
};

export default TechModal;
