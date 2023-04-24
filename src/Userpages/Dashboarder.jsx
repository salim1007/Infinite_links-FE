import React from "react";
import { Logout, DarkMode } from "@mui/icons-material";
import Navis from "./Navis";
// import salim from "../assets/salim.jpg";
import classes from "../components/Homepage.module.css";

const Dashboard = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.navis}>
        <Navis />
      </div>
      <div className={classes.nav}>
        <div className={classes.navbar}>
          <div className={classes.subnav1}>
            <p>Dashboard</p>
          </div>
          <div className={classes.subnav2}>
            <DarkMode style={{ padding: "13", cursor: "pointer" }} />
            <Logout
              className={classes.logout}
              style={{ padding: "14", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={classes.contWrapper}>
          <div className={classes.extOverall}>
            <div className={classes.extension}>
              <h2>Welcome, Salim I Mchomvu</h2>
              <img src={salim} className={classes.profilepic} />
            </div>
          </div>
        </div>
        <div style={{ padding: "30px" }}>
          <p>
            <b>Reg.No : </b>2021-04-06692
          </p>
          <p>
            <b>Email :</b> salimmchomvu7@gmail.com
          </p>
          <p >
            <b>Action :</b> <i style={{color:"green"}}>Online  </i>
          </p>
          <p>
            <b>Status :</b> Not Voted
          </p>
          <p>
            <b>Time left :</b> Countdown
          </p>
          <br />
        
          

          <p style={{ color: "red" }}>
            You have not voted yet, there's still time, please <i>vote now</i>
          </p><br/>
          <p style={{fontSize:"8px" , opacity:"0.2"}}>
            <i>Students E-Voting System</i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
