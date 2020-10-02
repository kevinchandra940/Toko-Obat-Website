import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Form, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'
import { getProductAntibiotik } from '../actions'
import { Link } from 'react-router-dom'
import { FormControl } from 'react-bootstrap';
import Axios from 'axios'

class Antibiotikpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            antibiotik: [],
            toggle: false
        }
    }

    toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    
    componentDidMount() {
        this.props.getProductAntibiotik()
        console.log(this.props.getProductAntibiotik())
    }

    search = () => {
        const search = this.search.value;
        this.getProductAntibiotik(search);
    }

    renderCard = () => {
        return this.props.products.map((item, index) => {
            return (
                <Card key={index} style={styles.card} >
                    <CardBody>
                        <img width="60%" src={item.image} alt="card images" style={styles.image} />
                        <CardTitle style={{ color: '#e85661' }}>{item.nama}</CardTitle>
                        <CardSubtitle style={{ marginBottom: '1vh', color: '#e85661', fontSize: '30px', marginBottom: '10vh' }}>IDR : {item.harga}</CardSubtitle>
                        {/* <CardSubtitle> Deskripsi : {item.deskripsi}</CardSubtitle> */}
                    </CardBody>
                    <Link to={`/productdetail?id=${item.id} `}>
                        <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661', width: '10.35vw', marginLeft: '4.5vw', marginBottom: '4vh', borderRadius: '30px' }}>Beli</Button>
                    </Link>
                </Card>
            )
        })
    }
    render() {

        return (
            <div style={styles.root}>
                <div style={{ display: 'flex' }}>
                    <h1 style={styles.title}>ANTIBIOTIK</h1>
                    <Form inline style={{ marginLeft: '35vw' }}>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button onClick={this.search} style={{ backgroundColor: '#e85661', textDecoration: 'none', borderColor: '#e85661' }}>Cari</Button>
                    </Form>
                    <Dropdown isOpen={this.state.toggle} toggle={this.toggle} style={{marginLeft:'2vw', marginTop:'5vh'}}>
                        <DropdownToggle caret style={{ backgroundColor: '#e85661', borderColor:'#e85661'}}>
                            Filter
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>A-Z</DropdownItem>
                            <DropdownItem header>Z-A</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div style={styles.cardContainer}>
                    {this.renderCard()}
                </div>
            </div>
        );

    }
}

const styles = {
    root: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#f2f2f2',
        padding: '2% 7%'
    },
    title: {
        fontSize: 50,
        fontWight: 600,
        margin: '2% 0px',
        color: '#e85661'
    },
    cardContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    card: {
        flexBasis: '19%',
        minWidth: '300px',
        marginBottom: '1%',
        marginRight: '1%'
    },
    image: {
        marginLeft: 75

    }

}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.productAntibiotik
    }
}

export default connect(mapStateToProps, { getProductAntibiotik })(Antibiotikpage);