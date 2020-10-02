import React from 'react'
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardBody, ButtonGroup, Spinner, Form
} from 'reactstrap';
import {FormControl} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { URL } from '../actions'
import { addCart } from '../actions'
import { connect } from 'react-redux'

class Productdetailpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            qty: 0,
            status: false
        }
    }

    componentDidMount() {
        Axios.get(URL + `/productId${this.props.location.search}`)
            .then(res => {
                console.log("data", res.data)
                this.setState({ product: res.data[0] })
            })
            .catch(err => console.log(err))
    }

    buttonPlus = () => {
        console.log('plus')
        this.state.qty += 1
        this.setState({ qty: this.state.qty })
    }
    buttonMinus = () => {
        console.log('plus')
        if (this.state.qty === 0) {
            return
        } else {
            this.state.qty -= 1
            this.setState({ qty: this.state.qty })

        }
    }
    buttonCart = () => {
        const body = {
            qty: this.state.qty,
            total: this.state.product.harga * this.state.qty,
            user_id: this.props.id,
            product_id: this.state.product.id
        }
        console.log(body)
        this.props.addCart(body)
        this.setState({ status: true })
    }

    renderCardDetail = () => {
        const { nama, image, deskripsi, komposisi, aturan_pakai, dosis, harga, category } = this.state.product
        // return this.state.product.map((item, index) => {
        return (
            <div style={{ marginBottom: '10vh' }}>

                <CardText style={{ marginLeft: '40vw' }}>
                    <h1 style={{ color: '#e85661' }}>Product Detail</h1>
                    <h4 style={{ marginLeft: '5vw', color: '#e85661' }}>{category}</h4>
                </CardText>

                {/* <div>
                    <Form inline style={{ marginLeft: '5vw' }}>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button style={{ backgroundColor: '#e85661', textDecoration: 'none', borderColor: '#e85661' }}>Cari</Button>
                    </Form>
                </div> */}

                <div className="row" style={{ width: "80vw", margin: "auto" }}>
                    <CardGroup style={{}}>
                        <Card style={{ display: 'flex', height: '120vh' }}>
                            <CardBody>
                                <CardImg top style={{ height: '50vh', width: '30vw', marginLeft: '3vw', marginTop: '1vh' }} src={image} />
                                <ButtonGroup style={{ marginLeft: '7vw', marginTop: '3vh' }}>
                                    <Button onClick={this.buttonMinus} style={{ marginRight: '1vw', width: '10vw', backgroundColor: '#e85661', borderColor: '#e85661' }}>-</Button>
                                    <p style={{ marginRight: '1vw', color: '#e85661', fontSize: '20px', fontWeight: 'bold' }}>{this.state.qty}</p>
                                    <Button onClick={this.buttonPlus} style={{ marginRight: '1vw', width: '10vw', backgroundColor: '#e85661', borderColor: '#e85661' }}>+</Button>
                                </ButtonGroup>
                            </CardBody>
                            <Link to="/keranjang">
                                <Button onClick={this.buttonCart} style={{ marginBottom: '45vh', width: '20vw', marginLeft: '9.5vw', borderColor: '#e85661', backgroundColor: '#e85661' }}>Masukan Keranjang</Button>
                            </Link>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle style={{ marginLeft: '4vw', marginTop: '5vh', fontSize: '30px', width: '30vw', fontWeight: "bold", color: '#e85661' }}>{nama}
                                </CardTitle>
                                <CardTitle style={{ marginLeft: '4vw', marginTop: '1vh', fontSize: '30px', width: '30vw', fontWeight: "bold", color: '#e85661' }}>IDR : {harga}
                                </CardTitle>
                                <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color: '#e85661' }}><h5>Deskripsi : </h5>{deskripsi}</CardTitle>
                                <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color: '#e85661' }}><h5>Komposisi : </h5>{komposisi}</CardTitle>
                                <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color: '#e85661' }}><h5>Aturan pakai   : </h5> {aturan_pakai}</CardTitle>
                                <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color: '#e85661' }}><h5>Dosis   : </h5> {dosis}</CardTitle>

                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>

        )
        // })
    }

    render() {
        console.log('URL PRODUCT DETAIL : ', this.props.location)
        console.log('product', this.state.product)
        const { match } = this.props
        setTimeout(() => this.setState({ ready: true }), 1500)
        if (this.state.ready) {

            return (
                <div>
                    {this.renderCardDetail()}
                </div>

            );
        } else {
            return (
                <div style={{ marginLeft: '32vw', marginTop: '20vh', marginBottom: '40vh' }}>

                    <Spinner type="grow" color="primary" style={{ width: '10vh', height: '5vw' }} />
                    <Spinner type="grow" color="secondary" style={{ width: '10vh', height: '5vw' }} />
                    <Spinner type="grow" color="success" style={{ width: '10vh', height: '5vw' }} />
                    <Spinner type="grow" color="danger" style={{ width: '10vh', height: '5vw' }} />
                    <Spinner type="grow" color="warning" style={{ width: '10vh', height: '5vw' }} />
                    <Spinner type="grow" color="info" style={{ width: '10vh', height: '5vw' }} />
                    <Spinner type="grow" color="dark" style={{ width: '10vh', height: '5vw' }} />
                </div>
            )
        }
    }


}

const mapStateToProps = (state) => {
    return {
        id: state.userReducer.id,
        loading: state.orderReducer.loading,
        redirect: state.orderReducer.redirect
    }
}


export default connect(mapStateToProps, { addCart })(Productdetailpage);








