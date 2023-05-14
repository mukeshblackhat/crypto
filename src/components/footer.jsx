import styles from "../styles/footer.module.css"
// import {BsTwitter} from  ;
import {BsTwitter,BsDiscord } from "react-icons/bs";
import {SiGitbook} from "react-icons/si";
const Footer=()=>{
    return <div className={styles.container}>
        <BsTwitter className={styles.socialIcon} size={"2rem"}/>
        <SiGitbook  className={styles.socialIcon} size={"2rem"}/>
        <BsDiscord  className={styles.socialIcon} size={"2rem"}/>
    </div>
}
export default Footer;