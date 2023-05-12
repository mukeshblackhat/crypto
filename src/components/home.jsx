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
            style={{ alignItem:'center',width: "95%" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
        <div className={styles.heroDiscription}>
            <p className={styles.note}>0% trading commission</p>
            <p className={styles.heading}>Join the besta Cryptocurrency exchange </p>
            <p className={styles.subheading}>Trade with over 740 diffenrent Cryptocurrency and fiat currency pairs , including bitcoin , Ethereum and BNB pairs . </p>
            <button className={styles.tradingBtn}>START TRADING</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
