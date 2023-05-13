import { useState } from "react";
import styles from "../styles/dropdown.module.css";
import {BsFillCaretDownFill} from 'react-icons/bs';
const Dropdown=({label,options})=>{
    const [selected,setSelected]=useState("Bitcoin");
    const [display,setDisplay]=useState(false);
    const onSelection=(e)=>{
        setSelected(e.target.textContent);
        setDisplay(!display);
        console.log(e.target.textContent);
    }
    return <div className={styles.container}>
       {label && <p className={styles.label}>{label}</p>}
       <div onClick={()=>setDisplay(!display)}className={styles.dropdown}>
        <div> <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gobankingrates.com%2Finvesting%2Fcrypto%2Fhow-to-minimize-crypto-fees%2F&psig=AOvVaw2y7LFmcvkrzZGZalGftfNl&ust=1683958210521000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDI0amP7_4CFQAAAAAdAAAAABAE" alt="" /> {selected}</div>
       
        <BsFillCaretDownFill  />
        </div>
        <div className={styles.optionCard} style={{ display: display ? "block" : "none" }}>
            {options.map((option)=>{
              return   <div onClick={onSelection} className={styles.option}>{option}</div>
            })}
            
        </div>
    </div>

}
export default Dropdown;