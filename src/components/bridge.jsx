import styles from "../styles/bridge.module.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {FiAlertCircle} from 'react-icons/fi';
import Dropdown from "./dropdown";

const Bridge = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.bridgeContainer}>
          <center className={styles.heading}>Token Bridge</center>
          <p>Select tokens to send through the portal </p>
          <div className={styles.bridge}>
            <div className={styles.dropDown}>
              <Dropdown label="From" />
            </div>
            <AiOutlineDoubleRight size="1.5em" />
            <div className={styles.dropDown}>
              <Dropdown label="To" />
            </div>
          </div>
          <br/>
          <p><FiAlertCircle color="rgb(96, 58, 58)"/>Reminder</p>
          <li>Crosschain Fee is 0.01 %, Minimum Crosschain Fee is 0.19 USDC, Maximum Crosschain Fee is 1,000 USDC</li>
          <li>Minimum Crosschain Amount is 12 USDC</li>
          <li>Maximum Crosschain Amount is 20,000,000 USDC</li>
          <li>Estimated Time of Crosschain Arrival is 10-30 min</li>
          <li>Crosschain amount larger than 5,000,000 USDC could take up to 12 hours</li>

         
        </div>
        <button className={styles.connect}>Connect Wallet</button>
      </div>
    </div>
  );
};
export default Bridge;
