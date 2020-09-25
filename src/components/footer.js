import React from 'react';
import { CardText, CardImg } from 'reactstrap'
import Logo from '../assets/logo.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

class Footercomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ marginTop: 20, marginBottom: 20, display: 'flex' }}>

                <CardImg src={Logo} style={{ width: '15vw', height: '30vh', marginLeft: '2vw' }} />
                <CardText style={{ width: '10vw', marginLeft: '10vw' }}>
                    <h7 style={{ marginLeft: '0vw', color:'#e85661' }}>Purwadhika Campus BSD
                    BSD Green Office Park, GOP 9 - G
Floor, BSD City, Tangerang Banten</h7>
                </CardText>
                <CardText style={{marginLeft:'15vw'}}>
                    <div class="social-container">
                        <h3 style={{color:'#e85661'}}>Social Follow</h3>
                        <a href="#"
                            className="youtube social" style={{marginRight:'1vw', color:'#eb3223'}} >
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="#"
                            className="facebook social" style={{marginRight:'1vw', color:'#4968ad'}}>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="#" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" style={{marginRight:'1vw', color:'#49a1eb'}} />
                        </a>
                        <a href="#"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color:'#e95950'}} />
                        </a>
                    </div>
                </CardText>
                <CardText>
                    <h8 style={{ marginLeft: '15vw', color:'#e85661' }}>© 2020 HM, Inc. All Rights Reserved</h8>
                </CardText>
            </div>
        );
    }
}


export default Footercomponent;