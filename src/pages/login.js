import React from 'react';
import { connect } from 'react-redux'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import { LoginAction } from '../actions'


class Loginpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",

        }
    }

    handleLogin = () => {
        const body = {
            email: this.email.value,
            password: this.password.value
        }
        this.props.LoginAction(body)
        console.log(this.props.email)

    }

    render() {
        if (this.props.email) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <div style={{ width: '100%' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '50px', fontWeight: '100', color: '#e85661' }}>Login</p>
                    </div>
                    <div style={{ width: '100%' }}>
                        <div style={{ width: '50%', margin: 'auto' }}>
                            <div style={{ width: '50%', margin: 'auto' }}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Alamat Email" innerRef={(email) => this.email = email} />
                            </div>
                            <div style={{ width: '50%', margin: 'auto' }}>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={(password) => this.password = password}/>
                            </div>
                            <div style={{ width: '50%', margin: 'auto' }}>
                                <FormGroup check>
                                    <Input type="checkbox" name="check" id="exampleCheck" />
                                    <Label for="exampleCheck" style={{ marginBottom: '2vh' }}>Tetapkan saya masuk
                                    </Label>
                                </FormGroup>
                            </div>
                            <div style={{ width: '50%', margin: 'auto' }}>
                                <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661', width: '100%' }} onClick={this.handleLogin}>Masuk</Button>
                            </div>
                            <div style={{ width: '50%', margin: 'auto', textAlign: 'center' }}>
                                <h9 >Bukan member?</h9>
                                <Link to='/daftar' style={{ color: 'black' }}>
                                    <h9> Daftar.</h9>
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email
    }
}


export default connect(mapStateToProps, { LoginAction })(Loginpage);