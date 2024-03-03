import { useMemo } from "react";
import styles from "./Outer.module.css";

const Outer = ({ propAlignSelf, propFlex, propMargin }) => {
  const outerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const bodyStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={styles.outer} style={outerStyle}>
      <div className={styles.mainMessageBox}>
        <div className={styles.body} style={bodyStyle}>
          Type a new message here
        </div>
        <div className={styles.sendButton}>
          <img
            className={styles.outlineMessagesCoversatio}
            alt=""
            src="/outline--messages-coversation--paperclip.svg"
          />
          <img className={styles.emojisIcon} alt="" src="/emojis.svg" />
          <img className={styles.sendIcon} alt="" src="/send.svg" />
        </div>
        <div className={styles.borderBottom} />
      </div>
    </div>
  );
};

export default Outer;
