// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { HashRouter as Router, Redirect } from "react-router-dom";
import BaseRouter from "./Config/routes";
import "./App.css";
import { AppContext } from "./Config/contextLib";
import NavBar from './Pages/Navabr';
// import { Navbar } from "react-bootstrap";

function App() {

  return ( 
    // storing the user login details in app context so we can use these details anywhere in the application
    <AppContext.Provider >
      <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
        {/* while calling content must send the menu status */}
        <>
        <Redirect
              to={{
                pathname: "/Home",
              }}
              />
          {/* <div className={(localStorage.getItem("DeviceMode")==="Mobile")?toggleClass ? "animated content" : "content":"content"}> */}
          <div >
          <NavBar/>
            {/* Content of the url loading here if user is not login then it will redirect to user login page */}
            <BaseRouter></BaseRouter>
          </div>
        </>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
