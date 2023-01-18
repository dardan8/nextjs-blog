import React from "react";
import styles from "../styles/SubscribeElement.module.css";

const SubscribeElement = () => {
  return (
    <div className={styles.subscribe_element}>
      <form>
        <input
          className={styles.inputprimary}
          type='email'
          placeholder='Subcribe via email'
        ></input>
        <button className='button-primary' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default SubscribeElement;
