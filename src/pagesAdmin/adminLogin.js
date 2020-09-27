import React from 'react';
import { connect } from 'react-redux'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, Spinner, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import { LoginAction } from '../actions'


class AdminLoginpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : "",

        }
    }

    handleLogin = () => {
        const body = {
            username : this.username.value,
            password : this.password.value
        }
        this.props.LoginAction(body)
        console.log(this.props.username)

   }

    render() {
        if (this.props.username) {
            return<Redirect to='/admin/login'/>
        }

        return (
            
            <Card style={{marginleft:'1vw', marginTop:'5vh', marginBottom:'0vh'}} >
                <CardText style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems:'center', justifyItems:'center', justifySelf:'center', fontSize: 40, marginTop: '5vh', marginBottom: '5vh', color:'#e85661' }}>Masuk</CardText>

                <Form style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems:'center', justifyItems:'center', justifySelf:'center', }}>
                    
                        <Col md={7} style={{marginLeft:'8vw'}} >
                            <FormGroup >
                                {/* <Label for="exampleEmail"></Label> */}
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email address" innerRef={(username) => this.username = username}  />
                            </FormGroup>
                        </Col>
                    
                        <Col md={7} style={{marginLeft:'8vw'}}>
                            <FormGroup >
                                {/* <Label for="examplePassword"></Label> */}
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" 
                                innerRef={(password) => this.password = password}/>
                            </FormGroup>
                        </Col>

                    <FormGroup check style={{marginLeft:'9vw'}}>
                        <Input type="checkbox" name="check" id="exampleCheck" />
                        <Label for="exampleCheck" style={{ marginBottom: 20 }}>Keep me signed in
                        </Label>
                    </FormGroup>
                    <Button style={{ backgroundColor: '#e85661', width: '40vw', marginBottom:'20vh' }}onClick={this.handleLogin}>Sign in</Button>
                </Form>
                {/* <CardText style={{ marginBottom: 20, marginTop: 20, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                <h9 >Not a member?</h9>
                <Link to='/register' style={{ color: 'black' }}>
                <h9> Sign up.</h9>
                </Link >
                </CardText> */}
            </Card>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.userReducer.username
    }
}


export default connect(mapStateToProps, { LoginAction })(AdminLoginpage);