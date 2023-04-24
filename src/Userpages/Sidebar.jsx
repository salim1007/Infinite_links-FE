import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from "../components/Homepage.module.css";
// import "./Link.css";
import { useState } from "react";
import {
  AssignmentIndSharp,
  PeopleAlt,
  FormatListNumbered,
  HourglassBottom,
  HowToVote,
  Ballot,
  Info,
  Comment,
  Menu,
  Search,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/user-dash",
    name: "Dashboard",
    icon: <AssignmentIndSharp  style={{padding: "7"}}  />,
  
  },
  {
    
    path: "/candidates",
    name: "Candidates",
    icon: <PeopleAlt  style={{padding: "7"}} />,
  },
  {
    path: "/procedures",
    name: "Procedures",
    icon: <FormatListNumbered   style={{padding: "7"}} />,
    
  },
  {
    path: "/progress",
    name: "Progress",
    icon: <HourglassBottom  style={{padding: "7"}}  />,
  },
  {
    path: "/vote",
    name: "Vote",
    icon: <HowToVote   style={{padding: "7"}} />,
  },
  {
    path: "/v-results",
    name: "Results",
    icon: <Ballot  style={{padding: "7"}}  />,
  },
  {
    path: "/about",
    name: "About",
    icon: <Info   style={{padding: "7"}} />,
  },
  {
    path: "/remarks",
    name: "Remarks",
    icon: <Comment  style={{padding: "7"}}  />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
    setIsOpen(!isOpen);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className={classes.maincontainer}>
      <motion.div
        animate={{
          width: isOpen ? "230px" : "50px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          },
        }}
        className={classes.sidebar}
      >
        <div className={classes.topSection}>
          {isOpen && (
            <motion.h1
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={showAnimation}
              className={classes.menu}
            >
              Welcome{" "}
            </motion.h1>
          )}
          <div>
            <Menu onClick={Toggle}  style={{padding: "7", cursor: "pointer"}} />
          </div>
        </div>
        <div className={classes.search}>
          <div>
            <Search onClick={Toggle}  style={{padding: "7"}}  />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search......"
              />
            )}
          </AnimatePresence>
        </div>

        <section>
          {routes.map((route) => (
            <NavLink
              to={route.path}
              className={classes.link}
              activeclassname={classes.active}
              key={route.name}
            >
              <AnimatePresence>
                <div>{route.icon}</div>
                {isOpen && (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={showAnimation}
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
