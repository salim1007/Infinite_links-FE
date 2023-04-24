import classes from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return(
        <div >
            <button onClick={()=>navigate("/login")} className={classes.button} >User Login</button>
            <button onClick={()=>navigate("/admin-login")}  className={classes.button}>Admin Login</button>
        </div>
    )
}