import React from 'react'
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardBody, ButtonGroup, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { URL } from '../actions'

class Productdetailpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            qty: 0
        }
    }

    componentDidMount() {
        Axios.get(URL + `/productId${this.props.location.search}`)
            .then(res => {
                console.log("data", res.data)
                this.setState({ product: res.data })
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


    renderCardDetail = () => {
        return this.state.product.map((item, index) => {
            return (
                <div style={{ marginBottom: '10vh' }}>
                    
                    <CardText style={{ marginLeft:'40vw' }}>
                        <h1 style={{color:'#e85661'}}>Product Detail</h1>
                        <h4 style={{marginLeft:'5vw',color:'#e85661'}}>{item.category}</h4>
                    </CardText>
                    
                    <div className="row" style={{ width: "80vw", margin: "auto" }}>
                        {/* <CardTitle style={{ marginLeft: '25vw', marginTop: '5vh', fontSize: '30px', width: '30vw', fontWeight: "bold" }}>{item.nama}
                        </CardTitle> */}
                        <CardGroup style={{}}>
                            <Card style={{ display: 'flex', height: '120vh' }}>
                                <CardBody>
                                    <CardImg top style={{ height: '50vh', width: '30vw', marginLeft: '3vw', marginTop: '1vh' }} src={item.image} />
                                    <ButtonGroup style={{ marginLeft: '7vw', marginTop: '3vh' }}>
                                        <Button onClick={this.buttonMinus} style={{ marginRight: '1vw', width: '10vw', backgroundColor: '#e85661', borderColor:'#e85661' }}>-</Button>
                                        <p style={{marginRight:'1vw', color:'#e85661', fontSize:'20px', fontWeight: 'bold'}}>{this.state.qty}</p>
                                        <Button onClick={this.buttonPlus} style={{ marginRight: '1vw', width: '10vw', backgroundColor: '#e85661', borderColor:'#e85661' }}>+</Button>
                                    </ButtonGroup>
                                </CardBody>
                                    <Button style={{marginBottom:'45vh', width:'20vw', marginLeft:'9.5vw', borderColor:'#e85661', backgroundColor:'#e85661'}}>Masukan Keranjang</Button>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle style={{ marginLeft: '4vw', marginTop: '5vh', fontSize: '30px', width: '30vw', fontWeight: "bold", color:'#e85661' }}>{item.nama}
                                    </CardTitle>
                                    <CardTitle style={{ marginLeft: '4vw', marginTop: '1vh', fontSize: '30px', width: '30vw', fontWeight: "bold", color:'#e85661' }}>IDR : {item.harga}
                                    </CardTitle>
                                    <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color:'#e85661' }}><h5>Deskripsi : </h5>{item.deskripsi}</CardTitle>
                                    <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color:'#e85661' }}><h5>Komposisi : </h5>{item.komposisi}</CardTitle>
                                    <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color:'#e85661' }}><h5>Aturan pakai   : </h5> {item.aturan_pakai}</CardTitle>
                                    <CardTitle style={{ marginTop: '5vh', fontSize: '20px', color:'#e85661' }}><h5>Dosis   : </h5> {item.dosis}</CardTitle>

                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                    {/* <Route path={this.props.match.path + '/demam'} component = {Demampage}/> */}
                    {/* <Link to='/category/demam' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                        <Button style={{ marginLeft: '55vw', backgroundColor: 'black', borderRadius: '50px', width: '30vw' }} onClick={this.changeButton}>Tambah</Button>
                    </Link> */}
                </div>

            )
        })
    }

    render() {
        console.log('URL PRODUCT DETAIL : ', this.props.location)
        console.log('product', this.state.product)
        const { match } = this.props
        return (
            <div>
                {this.renderCardDetail()}
            </div>

        );
    }
}

export default Productdetailpage;





