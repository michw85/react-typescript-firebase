import React, { useState } from "react";
import { Search } from "@mui/icons-material";

import styles from "./Header.module.css";
import logoMW from "../../img/MyWay.png";

const Header: React.FC = () => {
  const [isSearcActive, setIsSerchActive] = useState(false);
//   const onChangeField(e)=>{
//       if(e.target) {
//           setIsSerchActive(true)
//       }
//       setIsSerchActive(false)
//   }
  return (
    <header className={styles.header}>
      <div className={styles["image-wrapper"]}>
        <img className={styles.logoMW} src={logoMW} alt="logoMW" />
      </div>
      <div className={styles.wrapper}>
        {!isSearcActive && <Search />}

        <input 
            type="text" 
            placeholder="Find" 
            onClick={() => setIsSerchActive(true)}
        />
      </div>
    </header>
  );
};

export default Header;
