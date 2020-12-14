import React, { useState } from 'react';
import Logo from './images/alinea.jpeg';
import { Modal } from "react-bootstrap";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import CloseIcon from '@material-ui/icons/Close';
import GoogleLogin from 'react-google-login';


export default function Login(show) {
    const [close, setclose] = useState(show);

    const Redirectgoogleaccout =() =>{

    }
    const closePopup =() =>{
        setclose(false)
    }
    const responseGoogle = (response) => {
        console.log(response.wt.SJ);
        localStorage.setItem("Google_image", response.wt.SJ);
        localStorage.setItem("Google_name", response.wt.Ad);
        setclose(false)
      }

    return (
        <div>
            <Modal dialogClassName="modal-dialog-centered" show={close} >
                <Modal.Body >
                        <div className="row model-height">
                            <div className="col-6 col-lg-6 left-div ">
                                <div className="post-img ">
                                   <p className = "tiitle-div">Keep Track of Your stcoks</p>
                                </div>
                            </div>
                            <div className=" newsWrap">
                                <div className="card-body">
                                    <p className = "closeicons"onClick={closePopup}><CloseIcon/></p>
                                    <p className = "image-icon"><img className="navbar-brand" src={Logo} alt="logo" width="35px" /> ALINEA INVEST</p>
                                    <div className = "google-account">
                                    <GoogleLogin
                                        clientId="117747797044-gvq5kra46v3femse3ajq2a1fpm7rlgeh.apps.googleusercontent.com"
                                        buttonText="Continous with Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />,
                                    </div>
                                </div>
                            </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    )
}


