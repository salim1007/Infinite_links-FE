import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import Candidates from '../Userpages/Candidates';
import Procedures from '../Userpages/Procedures';
import Vote from '../Userpages/Vote';
import Results from '../Userpages/Results';
import About from '../Userpages/About';
function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/candidates">Candidates</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/procedure">Procedure</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vote">Vote</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/results">Results</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/candidates" element={<Candidates/>} />
                    <Route  path="/procedure"  element={<Procedures/>}/>
                    <Route path="/vote"  element={<Vote/>} />
                    <Route path="/results"  element={<Results/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;