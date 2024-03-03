import styles from "./MainMessageBoxUser.module.css";

const MainMessageBoxUser = () => {
  return (
    <div className={styles.mainMessageBoxUser}>
      <div className={styles.frameMessagesContainer}>
        <div className={styles.frameReadingProgressImage}>
          <div className={styles.rectangleBackground}>
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
          className={styles.mainMessageBox}
          loading="lazy"
          alt=""
          src="/main-message-box@2x.png"
        />
      </div>
    </div>
  );
};

export default MainMessageBoxUser;
