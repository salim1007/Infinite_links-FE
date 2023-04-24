import React from "react";
import Navis from "./Navis";
import classes from "../components/Homepage.module.css";
const Results = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.navis}>
        <Navis />
      </div>
      <div className={classes.nav}>
      <div className={classes.navbar}>
          <p>Results</p>
        </div>
      </div>
    </div>
  );
};
export default Results;
