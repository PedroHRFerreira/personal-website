import { useState, useEffect } from "react";
import AtomsText from "@/components/Text/Index";
import TechModal from "@/components/TechModal";
import ProjectsFooter from "@/components/ProjectsFooter";
import style from "./styles.module.scss";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer__container}>
          <ProjectsFooter />

          <button
            className={style.footer__tech_button}
            onClick={() => setIsModalOpen(true)}
          >
            <span className={style.footer__tech_icon}>💻</span>
            Ver tecnologias
          </button>
        </div>

        <div className={style.footer__bottom}>
          <div className={style.footer__logo}>
            <span className={style.footer__logo_icon}>📦</span>
          </div>
          <AtomsText fontSize="0.875rem" color="rgba(255, 255, 255, 0.7)">
            © 2026 Pedro H. Rodrigues. Desenvolvedor Full Stack.
          </AtomsText>
        </div>
      </footer>

      <TechModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
