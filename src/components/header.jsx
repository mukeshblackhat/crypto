import styles from "../styles/header.module.css";
import {HiMenu} from "react-icons/hi";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>logo</div>
        <div className={styles.links}>
          <div className={styles.routes}>
            <a href="">Token Bridge</a>
            <a href="">USDC Bridge</a>
            <a href="">Sui Bridge</a>
            <a href="">FAQ</a>
          </div>
          <div className={styles.menu}>
            <HiMenu size='2em'/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
