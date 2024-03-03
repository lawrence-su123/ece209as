import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OuterMessageBox from "../components/OuterMessageBox";
import styles from "./ChatBotFresh.module.css";

const ChatBotFresh = () => {
  const navigate = useNavigate();

  const onEllipseIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/chatbot-fresh");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/chatbot-fresh");
  }, [navigate]);

  return (
    <div className={styles.chatbotFresh}>
      <div className={styles.outer}>
        <div className={styles.mainMessageBox}>
          <div className={styles.body}>Type a new message here</div>
          <div className={styles.borderBottom} />
          <img className={styles.sendIcon} alt="" src="/send.svg" />
          <img className={styles.emojisIcon} alt="" src="/emojis.svg" />
          <img
            className={styles.outlineMessagesCoversatio}
            alt=""
            src="/outline--messages-coversation--paperclip.svg"
          />
        </div>
      </div>
      <img
        className={styles.mainMessageBox1}
        alt=""
        src="/main-message-box@2x.png"
      />
      <img
        className={styles.chatbotFreshChild}
        alt=""
        src="/rectangle-18.svg"
        data-scroll-to="rectangle"
      />
      <div className={styles.frameFresh}>
        <img
          className={styles.frameFreshChild}
          alt=""
          src="/ellipse-1@2x.png"
          onClick={onEllipseIconClick}
        />
        <div className={styles.innerCircle}>
          <img
            className={styles.innerCircleChild}
            alt=""
            src="/rectangle-18.svg"
          />
          <img
            className={styles.innerCircleItem}
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
            onClick={onEllipseIcon2Click}
          />
        </div>
      </div>
      <main className={styles.headerFrame}>
        <section className={styles.subFrame}>
          <header className={styles.nestedFrame}>
            <div className={styles.groupChat}>
              <button
                className={styles.rectangleParent}
                onClick={onGroupButtonClick}
              >
                <div className={styles.frameChild} />
                <b className={styles.getRecommendations}>Get Recommendations</b>
              </button>
              <button
                className={styles.rectangleGroup}
                onClick={onGroupButton1Click}
              >
                <div className={styles.frameItem} />
                <div
                  className={styles.startANewChatParent}
                  onClick={onGroupContainerClick}
                >
                  <b className={styles.startANew}>Start a new chat</b>
                  <div className={styles.frameInner} />
                  <b className={styles.startANew1}>Start a new chat</b>
                </div>
              </button>
            </div>
          </header>
          <OuterMessageBox />
        </section>
      </main>
    </div>
  );
};

export default ChatBotFresh;
