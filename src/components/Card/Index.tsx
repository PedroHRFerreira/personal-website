import { ReactNode } from "react";
import style from "./styles.module.scss";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`${style.card} ${className || ""}`}>
      <div className={style.cardContent}>{children}</div>
    </div>
  );
};

export default Card;
