import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainMessageBoxUser from "../components/MainMessageBoxUser";
import ChatSideColFrame from "../components/ChatSideColFrame";
import Outer from "../components/Outer";
import styles from "./ChatbotSideCol.module.css";

const ChatbotSideCol = () => {
  const navigate = useNavigate();

  const onSureBasedOnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mainMessageBox1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEllipseIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/chatbot-sidecol");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/chatbot-fresh");
  }, [navigate]);

  return (
    <div className={styles.chatbotSidecol}>
      <footer className={styles.outer}>
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
      </footer>
      <div className={styles.mainMessageBox1}>
        <div className={styles.borderBottom1} />
        <div className={styles.thanksImCurrentlyContainer}>
          <p
            className={styles.thanksImCurrently}
          >{`Thanks! I’m currently reading Harry Potter. I would like a `}</p>
          <p className={styles.harderBookTo}>
            harder book to read that I would like. Can you help me?
          </p>
        </div>
      </div>
      <img
        className={styles.mainMessageBox2}
        alt=""
        src="/main-message-box@2x.png"
        data-scroll-to="mainMessageBox1"
      />
      <div className={styles.mainMessageBox3}>
        <div className={styles.borderBottom2} />
        <div className={styles.thankYou}>{`Thank You :) `}</div>
      </div>
      <div className={styles.mainMessageBox4}>
        <div className={styles.borderBottom3} />
        <div
          className={styles.sureBasedOnContainer}
          onClick={onSureBasedOnClick}
        >
          <p
            className={styles.sureBasedOn}
          >{`Sure! Based on your age, past and current reading `}</p>
          <p className={styles.preferencesIdThinkYoudL}>
            <span>{`preferences, I’d think you’d like: `}</span>
            <b className={styles.lordOfThe}>
              Lord of the Rings, The Hitchhiker’s Guide to the Galaxy, ant
            </b>
          </p>
        </div>
        <img className={styles.starRatingIcon} alt="" src="/star-rating.svg" />
      </div>
      <img
        className={styles.chatbotSidecolChild}
        alt=""
        src="/frame-438@2x.png"
      />
      <img
        className={styles.mainMessageBox5}
        alt=""
        src="/main-message-box@2x.png"
      />
      <img
        className={styles.chatbotSidecolItem}
        alt=""
        src="/rectangle-18.svg"
        data-scroll-to="rectangle"
      />
      <img
        className={styles.mainMessageBox6}
        alt=""
        src="/main-message-box@2x.png"
        data-scroll-to="mainMessageBox"
      />
      <img
        className={styles.chatbotSidecolInner}
        alt=""
        src="/frame-438@2x.png"
      />
      <div className={styles.frameRoot}>
        <img
          className={styles.frameRootChild}
          alt=""
          src="/ellipse-1@2x.png"
          onClick={onEllipseIconClick}
        />
        <div className={styles.ellipseChatbot}>
          <img
            className={styles.ellipseChatbotChild}
            alt=""
            src="/rectangle-18.svg"
          />
          <img
            className={styles.ellipseChatbotItem}
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
            onClick={onEllipseIcon2Click}
          />
        </div>
      </div>
      <main className={styles.mainMessageBox7}>
        <section className={styles.outlineMessagesConversation}>
          <div className={styles.groupMessageBoxes}>
            <div className={styles.getRecommendationsLabel}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div
                  className={styles.getRecommendationsParent}
                  onClick={onGroupContainerClick}
                >
                  <b className={styles.getRecommendations}>
                    Get Recommendations
                  </b>
                  <div className={styles.frameItem} />
                  <b className={styles.getRecommendations1}>
                    Get Recommendations
                  </b>
                </div>
              </button>
              <button
                className={styles.rectangleGroup}
                onClick={onGroupButton1Click}
              >
                <div className={styles.frameInner} />
                <div
                  className={styles.startANewChatParent}
                  onClick={onGroupContainer2Click}
                >
                  <b className={styles.startANew}>Start a new chat</b>
                  <div className={styles.rectangleDiv} />
                  <b className={styles.startANew1}>Start a new chat</b>
                </div>
              </button>
            </div>
          </div>
          <MainMessageBoxUser />
          <div className={styles.messageBoxFrame}>
            <div className={styles.messageFrame}>
              <div className={styles.userMessageFrame}>
                <img
                  className={styles.outlineMessagesCoversatio1}
                  alt=""
                  src="/outline--messages-coversation--square-forward.svg"
                />
                <img
                  className={styles.outlineMessagesCoversatio2}
                  alt=""
                  src="/outline--messages-coversation--square-forward.svg"
                />
              </div>
              <div className={styles.mainMessageBox8}>
                <div className={styles.thanksImCurrentlyContainer1}>
                  <p
                    className={styles.thanksImCurrently1}
                  >{`Thanks! I’m currently reading Harry Potter. I would like a `}</p>
                  <p className={styles.harderBookTo1}>
                    harder book to read that I would like. Can you help me?
                  </p>
                </div>
                <div className={styles.borderBottom4} />
              </div>
            </div>
          </div>
          <ChatSideColFrame />
          <div className={styles.backgroundPaperclipFrame}>
            <div className={styles.sendButtonFrame}>
              <div className={styles.chatbotMessageBox}>
                <img
                  className={styles.outlineMessagesCoversatio3}
                  alt=""
                  src="/outline--messages-coversation--square-forward.svg"
                />
                <img
                  className={styles.outlineMessagesCoversatio4}
                  alt=""
                  src="/outline--messages-coversation--square-forward.svg"
                />
              </div>
              <button className={styles.mainMessageBox9}>
                <div className={styles.thankYou1}>{`Thank You :) `}</div>
                <div className={styles.borderBottom5} />
              </button>
            </div>
          </div>
          <Outer />
        </section>
      </main>
    </div>
  );
};

export default ChatbotSideCol;
