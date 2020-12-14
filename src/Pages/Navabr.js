import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/alinea.jpeg';
import User from './images/user.png';
import Loginpopup from './Login';

function Navabr() {
    const [activeTab, setActiveTab] = useState(1);
    const [loginpopup, setloginpopup] = useState(false);
    const [local, setlocal] =useState(false);

    const TabActiveFunction = (e) => {
        setActiveTab(e)
    }
    const handleQuestions = () => {
        setloginpopup(true);
    }
    useEffect(() => {
        if ("Google_image" in localStorage) {
            setlocal(true)
        } 
        if(localStorage.getItem("Google_image") !== null ){
            setlocal(true)
        }
    }, [])
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                {/* <div className="container"> */}
                <a href="/home" className="p-3 FontColor"><img className="navbar-brand" src={Logo} alt="logo" width="35px" />A L I N E A  I N V E S T</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto orders-menu">
                        <li className="nav-item orders-menu col-md-4">
                            <Link className={activeTab === 1 ? "nav-link btn-active p-4 FontColor" : "nav-link p-4"} to="/Home" onClick={() => TabActiveFunction(1)}>Home <span class="sr-only">(Home)</span></Link>
                        </li>
                        <li className="nav-item orders-menu">
                            <Link className={activeTab === 2 ? "nav-link btn-active p-4 FontColor" : "nav-link p-4"} to="/watch_list" onClick={() => TabActiveFunction(2)}>Watchlist</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav float-right">
                        {console.log(localStorage.getItem('Google_name'))}
                        {local  ?   <li className="pr-4">
                            
                            <img src={localStorage.getItem('Google_image')} className="rounded-circle" alt="user" width="35px" />
                        </li> :
                        <li className="pr-4">
                            <button  className = "google-button"onClick={handleQuestions}> Contious with google</button>
    </li> }
                        
                        
                       
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
                </div>
                {/* </div> */}
            </nav>
            { loginpopup ?
                <Loginpopup
                    show={true}
                ></Loginpopup>
                : null
            }
        </div>
    );
}

export default Navabr;
