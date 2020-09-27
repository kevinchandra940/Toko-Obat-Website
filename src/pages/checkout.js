import React from 'react';
import { Link } from 'react-router-dom'
import { Toast, ToastBody, Button, CardImg, CardText, Spinner } from 'reactstrap'
import BCA from '../assets/BCA.png'
import Mandiri from '../assets/mandiri.png'
import OVO from '../assets/ovo.png'
import DANA from '../assets/dana.png'
import { connect } from 'react-redux'

import {AddPayment} from '../actions'

class Checkoutpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: 0
        }
    }

    buttonBca = () => {
        console.log('okBca')
        this.setState({ payment: 1})
    }

    buttonMandiri = () => {
        console.log('okMandiri')
        this.setState({payment : 2})
    }
    
    buttonOvo = () => {
        console.log('okOvo')
        this.setState({ payment: 3 })
    }
    
    buttonDana = () => {
        console.log('okDana')
        this.setState({ payment: 4 })
    }

    buttonPayment = () => {
        console.log('ajib')
        const body = {
            type : this.state.payment,
            total : this.props.total,
            order_number : this.props.order_number,
            user_id : this.props.user_id
        }
        console.log(body)
        this.props.AddPayment(body)
    }
    render() {
        setTimeout(() => this.setState({ready:true}), 1500)
        if (this.state.ready) {
        return (
            <div style={{ marginBottom: '20vh' }}>
            <CardText style={{ marginLeft: '44vw',color: '#e85661' }}>
                <h1>Checkout</h1>
            </CardText>
            <div className="p-3 bg-danger rounded" style={{ marginTop: '10vh', height: '20vh', display: 'flex' }}>
                <Toast style={{ marginTop: '4vh', marginRight: '5vw' }}>
                    <ToastBody style={{ fontSize: '25px', alignItems: 'center' }}>
                        <h4 style={{color:'black', marginTop:'1vh'}}>Pilih metode pembayaran</h4>
                    </ToastBody>
                </Toast>
                <Button style={{ backgroundColor: 'white', height: '10vh', marginLeft: '0vw', marginTop: '3.5vh' }} onClick={this.buttonBca}>
                    <CardImg src={BCA} style={{ width: '8vw', height: '5vh' }} />
                </Button>
                <Button style={{ backgroundColor: 'white', height: '10vh', marginLeft: '2vw', marginTop: '3.5vh' }} onClick={this.buttonMandiri}>
                    <CardImg src={Mandiri} style={{ width: '8vw', height: '8.5vh' }} />
                </Button>
                <Button style={{ backgroundColor: 'white', height: '10vh', marginLeft: '2vw', marginTop: '3.5vh' }} onClick={this.buttonOvo}>
                    <CardImg src={OVO} style={{ width: '6vw', height: '7vh', }} />
                </Button>
                <Button style={{ backgroundColor: 'white', height: '10vh', marginLeft: '2vw', marginTop: '3.5vh' }} onClick={this.buttonDana}>
                    <CardImg src={DANA} style={{ width: '9vw', height: '6vh', }} />
                </Button>
            </div>
            <div className="p-3 bg-info my-2 rounded" style={{ marginTop: '10vh', height: '15vh', display: 'flex',color: 'white' }}>
                <h1 style={{ marginTop: '2vh'}}>Total : {this.props.total} </h1>
            </div>
            <Link to='/resi'>
            <Button
                style={{ marginLeft: '70vw', width: 300, backgroundColor:'#e85661', borderColor:'#e85661', marginTop: '2vh' }}
                onClick={this.buttonPayment}
            >Bayar</Button>
            </Link>
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
        total: state.orderReducer.total,
        order_number : state.orderReducer.order_number,
        user_id : state.userReducer.id
    }
}

export default connect(mapStateToProps, {AddPayment})(Checkoutpage);