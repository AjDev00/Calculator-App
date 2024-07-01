import { useState } from "react";
import Butttons from "./Buttons";
import styles from "./css/input.module.css";

export default function Form() {
  //state variable to hold the button variable.
  const [btnValue, setBtnValue] = useState("");

  return (
    <div className="container">
      <form>
        <input
          className={styles.inputCalc}
          type="text"
          readOnly
          value={btnValue}
        />
      </form>
      <Butttons btnValue={btnValue} setBtnValue={setBtnValue} />
    </div>
  );
}
