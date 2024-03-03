import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DifficultyFrame.module.css";

const DifficultyFrame = () => {
  const navigate = useNavigate();

  const onBookifyTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={styles.difficultyFrame}>
      <div className={styles.recommendationFrame}>
        <div className={styles.textFrame}>
          <h1 className={styles.bookify} onClick={onBookifyTextClick}>
            Bookify
          </h1>
        </div>
        <div className={styles.yellowBook499530Wrapper}>
          <img
            className={styles.yellowBook499530Icon}
            loading="lazy"
            alt=""
            src="/yellowbook4995-30.svg"
          />
        </div>
        <div className={styles.titleFrame}>
          <div className={styles.fRAMEA}>
            <div className={styles.fRAMEB}>
              <h1 className={styles.titleTheHitchhikersContainer}>
                <b>{`Title: `}</b>
                <span>The Hitchhiker’s Guide to the Galaxy</span>
              </h1>
              <h1 className={styles.authorDouglasAdamsContainer}>
                <b>{`Author: `}</b>
                <span>Douglas Adams</span>
              </h1>
              <h1 className={styles.introYourGuideContainer}>
                <b>{`Intro: `}</b>
                <span>{`Your guide to traveling the Galaxy `}</span>
              </h1>
            </div>
            <div className={styles.easyDifficultyFrame}>
              <div className={styles.difficultyEasyBasedContainer}>
                <p className={styles.difficultyEasy}>
                  <span className={styles.difficulty}>
                    <b className={styles.difficulty1}>{`Difficulty: `}</b>
                  </span>
                  <span className={styles.easy}>
                    <span className={styles.easy1}>Easy</span>
                  </span>
                </p>
                <p className={styles.basedOnYourPastReadingsW}>
                  <span className={styles.basedOnYourPastReadingsW1}>
                    <span
                      className={styles.basedOnYour}
                    >{`Based on your past readings, we think that this book will be an easier read than normal.  `}</span>
                  </span>
                </p>
                <p className={styles.p}>
                  <span className={styles.span}>
                    <span className={styles.span1}>{` `}</span>
                  </span>
                </p>
              </div>
              <div className={styles.whyDidWeContainer}>
                <p className={styles.whyDidWeRecommendThisBook}>
                  <b>Why did we recommend this book to you?</b>
                </p>
                <p className={styles.wereRecommendingThisBookT}>
                  <span>
                    <span>{`We’re recommending this book to you based on previous books you have enjoyed, including `}</span>
                    <i className={styles.theMartian}>The Martian</i>
                    <span className={styles.span2}>{`, `}</span>
                    <i className={styles.endersGame}>Ender’s Game</i>
                    <span className={styles.and}>{`, and `}</span>
                    <i className={styles.theHobbit}>The Hobbit</i>
                    <span
                      className={styles.weThinkThat}
                    >{`. We think that `}</span>
                    <i
                      className={styles.theHitchhikersGuide}
                    >{`The Hitchhiker’s Guide to the Galaxy `}</i>
                    <span
                      className={styles.hasSimilarHumor}
                    >{`has similar humor and setting to that of your previous reads. `}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifficultyFrame;
