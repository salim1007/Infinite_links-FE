import React from "react";
import Navis from "./Navis";
import classes from "../components/Homepage.module.css";
const Remarks = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.navis}>
        <Navis />
      </div>
      <div className={classes.nav}>
      <div className={classes.navbar}>
          <p>Remarks</p>
        </div>
      </div>
    </div>
  );
};
export default Remarks;
