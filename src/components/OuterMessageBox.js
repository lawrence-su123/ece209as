import Outer from "./Outer";
import styles from "./OuterMessageBox.module.css";

const OuterMessageBox = () => {
  return (
    <div className={styles.outerMessageBox}>
      <div className={styles.mainMessageBox}>
        <div className={styles.imageFrame}>
          <div className={styles.shapeContainer}>
            <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
            <img
              className={styles.image12Icon}
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.mainMessageBox1}
          loading="lazy"
          alt=""
          src="/main-message-box@2x.png"
        />
      </div>
      <div className={styles.mainMessageBoxWrapper}>
        <Outer propAlignSelf="unset" propFlex="1" propMargin="0" />
      </div>
    </div>
  );
};

export default OuterMessageBox;
