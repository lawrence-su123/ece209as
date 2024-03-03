import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DifficultyFrame from "../components/DifficultyFrame";
import styles from "./Recommendation.module.css";

const Recommendation = () => {
  const navigate = useNavigate();

  const onBookFrameIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.recommendation}>
      <main className={styles.authorFrame}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.bookFrameIcon}
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
            onClick={onBookFrameIconClick}
          />
        </div>
        <DifficultyFrame />
      </main>
      <div className={styles.authorFrames}>
        <div className={styles.jKRowling}>J. K. Rowling</div>
        <div className={styles.fyodorDostoevsky}>Fyodor Dostoevsky</div>
        <div className={styles.tolstoy}>Tolstoy</div>
        <div className={styles.karlMarx}>Karl Marx</div>
        <div className={styles.julesVerne}>Jules Verne</div>
        <div className={styles.karlMarx1}>Karl Marx</div>
        <div className={styles.julesVerne1}>Jules Verne</div>
      </div>
    </div>
  );
};

export default Recommendation;
