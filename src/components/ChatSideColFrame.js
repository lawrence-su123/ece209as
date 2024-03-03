import { useCallback } from "react";
import styles from "./ChatSideColFrame.module.css";

const ChatSideColFrame = () => {
  const onSureBasedOn1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mainMessageBox']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.chatSideColFrame}>
      <div className={styles.mainMessageBoxParent}>
        <div className={styles.mainMessageBox}>
          <div className={styles.messageTextNode}>
            <div className={styles.ratingInstance}>
              <div
                className={styles.sureBasedOnContainer}
                onClick={onSureBasedOn1Click}
              >
                <p
                  className={styles.sureBasedOn}
                >{`Sure! Based on your age, past and current reading `}</p>
                <p className={styles.preferencesIdThinkYoudL}>
                  <span>{`preferences, I’d think you’d like: `}</span>
                  <b className={styles.lordOfThe}>
                    Lord of the Rings, The Hitchhiker’s Guide to the Galaxy, and
                    The Alchemyst
                  </b>
                </p>
              </div>
            </div>
            <img
              className={styles.starRatingIcon}
              alt=""
              src="/star-rating.svg"
            />
          </div>
          <div className={styles.borderBottom} />
        </div>
        <div className={styles.outerFrame}>
          <img
            className={styles.emptyFrameIcon}
            alt=""
            src="/frame-438@2x.png"
          />
          <img
            className={styles.emptyFrameIcon1}
            loading="lazy"
            alt=""
            src="/frame-438@2x.png"
          />
        </div>
        <div className={styles.outlineMessagesCoversatioParent}>
          <img
            className={styles.outlineMessagesCoversatio}
            alt=""
            src="/outline--messages-coversation--square-forward.svg"
          />
          <img
            className={styles.outlineMessagesCoversatio1}
            alt=""
            src="/outline--messages-coversation--square-forward.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatSideColFrame;
