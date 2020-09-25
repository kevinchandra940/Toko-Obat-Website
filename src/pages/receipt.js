import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Spinner } from 'reactstrap';
import { LoginAction } from '../actions'
import { connect } from 'react-redux'
import { RegisterAction } from '../actions'
import { getProfile, URL_IMG, editProfile, upload } from '../actions'
import avatar from '../assets/no-profile.jpg'



class Receiptpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '47vw', color:'#e85661' }}>RESI</h1>
                <div>
                    <Link to='/riwayattransaksi'>
                        <Button style={{ width: '30vw', borderColor:'#e85661',marginLeft: '35vw', marginTop: '20vh', backgroundColor: '#e85661' }}>Selesai</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Receiptpage;