import React from "react";
import classes from "../components/Homepage.module.css";
import Navis from "./Navis";
const Procedures = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.navis}>
        <Navis />
      </div>
      <div className={classes.nav}>
      <div className={classes.navbar}>
          <p>Procedures</p>
        </div>
      </div>
    </div>
  );
};
export default Procedures;
