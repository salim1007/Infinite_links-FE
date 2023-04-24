import React from "react";
import classes from "../components/Homepage.module.css";
import Navis from "./Navis";
const Candidates = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.navis}>
        <Navis />
      </div>
      <div className={classes.nav}>
      <div className={classes.navbar}>
          <p>Candidates</p>
        </div>
      </div>
    </div>
  );
};
export default Candidates;
