import { useMemo } from "react";
import styles from "./FirstNameFrame.module.css";

const FirstNameFrame = ({ firstName, jamie, propHeight }) => {
  const firstNameStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.firstNameFrame}>
      <h1 className={styles.firstName} style={firstNameStyle}>
        {firstName}
      </h1>
      <div className={styles.jamieFrame}>
        <div className={styles.jamieFrameChild} />
        <h1 className={styles.jamie}>{jamie}</h1>
      </div>
    </div>
  );
};

export default FirstNameFrame;
