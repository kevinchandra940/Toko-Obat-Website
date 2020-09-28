import React from 'react';
import { Link } from 'react-router-dom'
import {
    Card,
    Button,
    CardBody,
    CardImg,
    CardSubtitle,
    FormGroup,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Collapse,
    ButtonLabel,
    Spinner
} from 'reactstrap';
import { LoginAction } from '../actions'
import { connect } from 'react-redux'
import { RegisterAction } from '../actions'
import { getProfile, URL_IMG, editProfile, upload } from '../actions'

import { getCart } from '../actions'
import avatar from '../assets/resiiii.jpg'

class Receiptpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            collapse: false,
        }
    }

    componentDidMount() {
        this.props.getCart()
    }
    handleChoose = (e) => {
        console.log('event : ', e.target.files)
        this.setState({ image: e.target.files[0] })
    }

    handleUpload = async () => {
        console.log('image : ', this.state.image)
        
        const data = new FormData()
        data.append('IMG', this.state.image)
        console.log('form data : ', data.get('IMG'))
        
        this.props.upload(data)
        this.setState({ image: null })
    }

    collapse = () => {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        setTimeout(() => this.setState({ready:true}), 100)
        if (this.state.ready) {
            const { image } = this.props
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '47vw', color:'#e85661' }}>RESI</h1>
                <div>
                <div className="button-profile" style={{marginLeft:'40vw'}}>
                            <form encType="multipart/form-data">

                                <CardImg src={image ? URL_IMG + image : avatar} alt="Card image cap" style={{ width: '20vw', height: '40vh', borderRadius: '10px', marginTop: '8vh', color:'#e85661' }} >
                                </CardImg>
                                <div>


                                    <Button onClick={this.collapse} style={{ marginTop: '5vh', marginLeft: '7.5vw', backgroundColor: '#e85661', borderColor: '#e85661' }}>Upload</Button>
                                    <Collapse isOpen={this.state.collapse} style={{ width: '20vw' }}>
                                        <Card>
                                            <CardBody>

                                                <input
                                                    style={{ marginLeft: '2vw', width: '14vw', marginTop: '2vh', marginBottom: '2vh' }}
                                                    type="file"
                                                    accept="image/*"
                                                    name="IMG"
                                                    onChange={(e) => this.handleChoose(e)}
                                                />
                                                <Button
                                                    className="button"
                                                    variant="success"
                                                    onClick={this.handleUpload}
                                                    style={{ marginTop: '0vh', marginLeft: '2vw', backgroundColor: '#e85661', borderColor: '#e85661' }}
                                                >
                                                    Upload
                                 </Button>
                                            </CardBody>
                                        </Card>
                                    </Collapse>

                                </div>



                            </form>
                        </div>
                    <Link to='/riwayattransaksi'>
                        <Button style={{ width: '30vw', borderColor:'#e85661',marginLeft: '35vw', marginTop: '20vh', backgroundColor: '#e85661' }}>Selesai</Button>
                    </Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{marginLeft:'32vw', marginTop:'20vh', marginBottom:'40vh'}}>
            <Spinner type="grow" color="primary"style={{width:'10vh', height:'5vw'}} />
            <Spinner type="grow" color="secondary" style={{width:'10vh', height:'5vw'}} />
            <Spinner type="grow" color="success"style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="danger" style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="warning" style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="info" style={{width:'10vh', height:'5vw'}}/>
            <Spinner type="grow" color="dark" style={{width:'10vh', height:'5vw'}}/>
            </div>
        )
    
    }
}

}


const mapStateToProps = (state) => {
    return {
        payment_id : state.paymentReducer.payment_id,
        order_number : state.orderReducer.order_number
    }
}

export default connect(mapStateToProps, {getCart})(Receiptpage);