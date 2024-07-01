import { useState } from "react";
import Buttons from "./Buttons";
import styles from "./css/DisplayInput.module.css";

export default function DisplayInput() {
  //state variable to store button value.
  const [btnValue, setBtnValue] = useState("");

  //functions to handle specific click events.
  function handleClick(e) {
    e.preventDefault();
    setBtnValue(btnValue + e.target.value);
  }

  function delNumber(e) {
    e.preventDefault();
    setBtnValue(btnValue.slice(0, -1));
  }

  function removeAll(e) {
    e.preventDefault();
    setBtnValue("");
  }

  function evaluateCalculations(e) {
    e.preventDefault();
    setBtnValue(eval(btnValue));
  }

  return (
    <div className={styles.formContainer}>
      <input value={btnValue} className={styles.inputT} type="text" />
      <Buttons
        evaluateCalculations={evaluateCalculations}
        removeAll={removeAll}
        delNumber={delNumber}
        handleClick={handleClick}
      />
    </div>
  );
}
