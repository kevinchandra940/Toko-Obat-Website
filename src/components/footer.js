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
            <div style={{borderTopColor:'#e85661', borderTopStyle:'solid',borderTopWidth:'1px'}}>
                <div style={{ width: '100%', display: 'flex', marginTop:'2%'}}>
                    <div style={{ width: '25%', textAlign: 'center' }}>
                        <div>
                            <img src={Logo} style={{ width: '50%' }} />
                        </div>
                    </div>
                    <div style={{ width: '25%', color: '#e85661' }}>
                        <div style={{ width: '100%', }}>
                            <p style={{ fontSize: '20px', fontWeight: '600' }}>Others</p>
                        </div>
                        <div style={{ fontSize: '15px', lineHeight: '1' }}>
                            <p>FAQ</p>
                            <p>Blog</p>
                            <p>Syarat & Ketentuan</p>
                            <p>Kebijakan Privasi</p>
                            <p>Promo</p>
                            <p>Karir</p>
                            <p>Security</p>
                            <p>Media</p>
                            <p>Corporate Partnership</p>
                            <p>Mitra</p>
                        </div>
                    </div>
                    <div style={{ width: '25%', color: '#e85661' }}>
                        <div style={{ width: '40%', margin: 'auto' }}>
                            <p style={{ fontSize: '20px', fontWeight: '600' }}>Hubungi Kami</p>
                            <p style={{ fontSize: '15px' }}>Purwadhika Campus BSD
                                BSD Green Office Park, GOP 9 - G
                                Floor, BSD City, Tangerang Banten</p>
                            <p>Phone : 021 7416286</p>
                            <p>Email : info@harapanmulya.com</p>
                        </div>
                    </div>
                    <div style={{ width: '25%' }}>
                        <p style={{ color: '#e85661', fontSize: '20px', fontWeight: '600' }}>Follow Us</p>
                        <div style={{display:'flex'}}>
                            <div>
                                <a href="#"
                                    className="youtube social" style={{ color: '#eb3223' }} >
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                            </div>
                            <div>
                                <a href="#"
                                    className="facebook social" style={{ color: '#4968ad' }}>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </div>
                            <div>
                                <a href="#" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#49a1eb' }} />
                                </a>
                            </div>
                            <div>
                                <a href="#"
                                    className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#e95950' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', marginTop:'2%' }}>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <p style={{ color: '#e85661' }}>© 2022 Harapan Mulya. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Footercomponent;