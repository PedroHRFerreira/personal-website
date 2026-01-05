import { useState } from "react";
import Card from "@/components/Card/Index";
import AtomsText from "@/components/Text/Index";
import style from "./styles.module.scss";

const ServicesSection = () => {
  const whatsappNumber = "5533988490880";

  const [webDesignMsg, setWebDesignMsg] = useState(
    "Gostaria de desenvolver um site moderno e responsivo para minha empresa."
  );
  const [frontendMsg, setFrontendMsg] = useState(
    "Preciso de um desenvolvedor frontend para criar uma interface moderna."
  );
  const [appMsg, setAppMsg] = useState(
    "Tenho uma ideia de aplicativo mobile que gostaria de desenvolver."
  );
  const [consultingMsg, setConsultingMsg] = useState(
    "Preciso de consultoria para melhorar a performance do meu projeto."
  );

  const encodeWhatsAppMessage = (message: string) => {
    return encodeURIComponent(message);
  };

  const sendWhatsApp = (message: string) => {
    if (!message.trim()) return;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeWhatsAppMessage(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className={style.services_section}>
      <Card className={style.services_section__hero_card}>
        <h1>Transforme sua ideia em realidade com um clique</h1>
        <AtomsText fontSize="1.125rem" color="#fff" lineHeight="1.6">
          Escolha um serviço abaixo e personalize sua mensagem de contato
        </AtomsText>
      </Card>

      <div className={style.services_section__grid}>
        <Card>
          <div className={style.services_section__card}>
            <div className={style.services_section__icon_wrapper}>
              <span className={style.services_section__icon}>🚀</span>
            </div>
            <h2 className={style.services_section__title}>Orçamento Rápido</h2>
            <AtomsText fontSize="1rem" color="#fff" lineHeight="1.6">
              Olá! Gostaria de saber mais sobre valores para o serviço de{" "}
              <span className={style.services_section__highlight}>
                Web Design
              </span>
              .
            </AtomsText>
            <textarea
              className={style.services_section__input}
              value={webDesignMsg}
              onChange={(e) => setWebDesignMsg(e.target.value)}
              rows={3}
            />
            <button
              className={style.services_section__button}
              onClick={() =>
                sendWhatsApp(
                  `Olá! Gostaria de saber mais sobre valores para o serviço de Web Design.\n\n${webDesignMsg}`
                )
              }
              disabled={!webDesignMsg.trim()}
            >
              ENVIAR PARA WHATSAPP
              <span className={style.services_section__arrow_icon}>→</span>
            </button>
          </div>
        </Card>

        <Card>
          <div className={style.services_section__card}>
            <div className={style.services_section__icon_wrapper}>
              <span className={style.services_section__icon}>💻</span>
            </div>
            <h2 className={style.services_section__title}>
              Desenvolvimento Frontend
            </h2>
            <AtomsText fontSize="1rem" color="#fff" lineHeight="1.6">
              Olá! Preciso de um desenvolvedor frontend para criar uma{" "}
              <span className={style.services_section__highlight}>
                interface moderna e responsiva
              </span>
              .
            </AtomsText>
            <textarea
              className={style.services_section__input}
              value={frontendMsg}
              onChange={(e) => setFrontendMsg(e.target.value)}
              rows={3}
            />
            <button
              className={style.services_section__button}
              onClick={() =>
                sendWhatsApp(
                  `Olá! Preciso de um desenvolvedor frontend para criar uma interface moderna e responsiva.\n\n${frontendMsg}`
                )
              }
              disabled={!frontendMsg.trim()}
            >
              ENVIAR PARA WHATSAPP
              <span className={style.services_section__arrow_icon}>→</span>
            </button>
          </div>
        </Card>

        <Card>
          <div className={style.services_section__card}>
            <div className={style.services_section__icon_wrapper}>
              <span className={style.services_section__icon}>📱</span>
            </div>
            <h2 className={style.services_section__title}>Criação de Apps</h2>
            <AtomsText fontSize="1rem" color="#fff" lineHeight="1.6">
              Olá! Gostaria de um orçamento para desenvolvimento de um{" "}
              <span className={style.services_section__highlight}>
                aplicativo mobile
              </span>
              .
            </AtomsText>
            <textarea
              className={style.services_section__input}
              value={appMsg}
              onChange={(e) => setAppMsg(e.target.value)}
              rows={3}
            />
            <button
              className={style.services_section__button}
              onClick={() =>
                sendWhatsApp(
                  `Olá! Gostaria de um orçamento para desenvolvimento de um aplicativo mobile.\n\n${appMsg}`
                )
              }
              disabled={!appMsg.trim()}
            >
              ENVIAR PARA WHATSAPP
              <span className={style.services_section__arrow_icon}>→</span>
            </button>
          </div>
        </Card>

        <Card>
          <div className={style.services_section__card}>
            <div className={style.services_section__icon_wrapper}>
              <span className={style.services_section__icon}>⚡</span>
            </div>
            <h2 className={style.services_section__title}>
              Consultoria Técnica
            </h2>
            <AtomsText fontSize="1rem" color="#fff" lineHeight="1.6">
              Olá! Preciso de{" "}
              <span className={style.services_section__highlight}>
                consultoria técnica
              </span>{" "}
              para otimizar meu projeto frontend.
            </AtomsText>
            <textarea
              className={style.services_section__input}
              value={consultingMsg}
              onChange={(e) => setConsultingMsg(e.target.value)}
              rows={3}
            />
            <button
              className={style.services_section__button}
              onClick={() =>
                sendWhatsApp(
                  `Olá! Preciso de consultoria técnica para otimizar meu projeto frontend.\n\n${consultingMsg}`
                )
              }
              disabled={!consultingMsg.trim()}
            >
              ENVIAR PARA WHATSAPP
              <span className={style.services_section__arrow_icon}>→</span>
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;
