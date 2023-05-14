import styles from "../styles/home.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heroImage}>
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_8lcyef9f.json"
            style={{ alignItem: "center", width: "95%" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
        <div className={styles.heroDiscription}>
          <p className={styles.note}>0% trading commission</p>
          <p className={styles.heading}>The Bridge We Need </p>
          <p className={styles.subheading}>
            OrdBridge is a Cross-chain two-way bridge between Bitcoin & Etherium
            Network{" "}
          </p>
          <button className={styles.tradingBtn}>Read Docs</button>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.topic}>Safe & Reliable</p>
            <p>
              OrdBridge is non-custodial & decentralised , processes multi-chain
              bidge and smart contracts methods on ther chains .
            </p>{" "}
          </div>
          <div className={styles.card}>
            <p className={styles.topic}>Fast & two way</p>
            <p>
              OrdBridge is able to offer extremly fast bridge with zero slippage
              . Also its tow ways , so assets can be moved from BRC20 to EKC20 &
              vice versa .
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.topic}>Low Fees</p>
            <p>
              OrdBridge charges a fees of 1% which is distributed among the
              token holders of ordBridge{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
