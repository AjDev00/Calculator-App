import styles from "./css/DisplayInput.module.css";

export default function Button({
  evaluateCalculations,
  removeAll,
  delNumber,
  handleClick,
}) {
  return (
    <div>
      <form>
        <div className={styles.buttonContainer}>
          <button onClick={removeAll} value="AC" className={styles.operator}>
            AC
          </button>
          <button onClick={delNumber} value="DE" className={styles.operator}>
            DE
          </button>
          <button onClick={handleClick} value="%" className={styles.operator}>
            %
          </button>
          <button onClick={handleClick} value="/" className={styles.operator}>
            /
          </button>
          <br />
          <button onClick={handleClick} value="7" className={styles.eachButton}>
            7
          </button>
          <button onClick={handleClick} value="8" className={styles.eachButton}>
            8
          </button>
          <button onClick={handleClick} value="9" className={styles.eachButton}>
            9
          </button>
          <button onClick={handleClick} value="*" className={styles.operator}>
            *
          </button>
          <br />
          <button onClick={handleClick} value="4" className={styles.eachButton}>
            4
          </button>
          <button onClick={handleClick} value="5" className={styles.eachButton}>
            5
          </button>
          <button onClick={handleClick} value="6" className={styles.eachButton}>
            6
          </button>
          <button onClick={handleClick} value="-" className={styles.operator}>
            -
          </button>
          <br />
          <button onClick={handleClick} value="1" className={styles.eachButton}>
            1
          </button>
          <button onClick={handleClick} value="2" className={styles.eachButton}>
            2
          </button>
          <button onClick={handleClick} value="3" className={styles.eachButton}>
            3
          </button>
          <button onClick={handleClick} value="+" className={styles.operator}>
            +
          </button>
          <br />
          <button onClick={handleClick} value="0" className={styles.eachButton}>
            0
          </button>
          <button onClick={handleClick} value="." className={styles.operator}>
            .
          </button>
          <button
            onClick={evaluateCalculations}
            value="="
            className={styles.calcButton}
          >
            =
          </button>
        </div>
      </form>
    </div>
  );
}
