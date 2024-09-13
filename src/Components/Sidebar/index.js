import React from "react";
import styles from "./styles.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.dashboard}>
        <HomeOutlinedIcon />
        <h3>Dahboard</h3>
      </div>
    </div>
  );
};

export default Sidebar;
