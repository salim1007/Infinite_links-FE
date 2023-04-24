import React from "react";
import Navis from "./Navis";
import classes from "../components/Homepage.module.css";
const Progress = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.navis}>
        <Navis />
      </div>
      <div className={classes.nav}>
        <div className={classes.navbar}>
          <p>Progress</p>
        </div>
        <div style={{padding: '20px'}}>
        <table border='3px' >
          <th>Firstname</th>
          <th>Middlename</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Year</th>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        </div>
      
      </div>
    </div>
  );
};
export default Progress;
