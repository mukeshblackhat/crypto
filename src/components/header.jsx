import styles from "../styles/header.module.css";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>logo</div>
        <div className={styles.links}>
          <div className={styles.routes}>
            <a href="">About</a>
            <a href="">Whitepaper</a>
            <a href="">
              Transaction 
              {/* <span>coming soon ...</span>{" "} */}
            </a>
            <a href="">
              Brdge 
              {/* <span>coming soon ...</span>{" "} */}
            </a>
          </div>
         
        </div>
        <div className={styles.menu}>
            <div className={styles.connectBtn}>Connect wallet</div>
            <HiMenu size="2em" />
          </div>
      </div>
    </div>
  );
};
export default Header;
