import React, { useEffect, useRef } from "react";
import { words } from "./data";

import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress}></div>
        <span className={styles.loader__progressNumber}>0</span>
      </div>
      <div className={styles.loader}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
