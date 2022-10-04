import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle, CardText, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Spinner } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { RegisterAction } from '../actions'

class Registerpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      dropdownOpen: false,
    }
  }

  dropdownOpen = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  handleRegister = () => {
    const body = {
      username: this.username.value,
      email: this.email.value,
      address : this.address.value,
      phone : this.phone.value,
      password: this.password.value,
      confpassword: this.confpassword.value
    }
    console.log(body)
    this.props.RegisterAction(body)
  }


  render() {
    if (this.props.status) {
      return <Redirect to="/verifikasi" />
    }
    return (
      <Card>
        <CardText style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', fontSize: 40, marginTop: '5vh', marginBottom: '5vh', color:'#e85661' }}>Daftar</CardText>

        <Form style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
          <Row form>
            <Col md={5} style={{ marginLeft: '13.5vw' }}>
              <FormGroup>
                {/* <Label for="exampleEmail"></Label> */}
                <Input type="email" name="email" id="exampleEmail" placeholder="Nama" innerRef={(username) => this.username = username} />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={5} style={{ marginLeft: '13.5vw' }}>
              <FormGroup>
                {/* <Label for="exampleEmail"></Label> */}
                <Input type="email" name="email" id="exampleEmail" placeholder="Alamat Email" innerRef={(email) => this.email = email} />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={5} style={{ marginLeft: '13.5vw' }}>
              <FormGroup>
                {/* <Label for="examplePassword"></Label> */}
                <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={(password) => this.password = password} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={5} style={{ marginLeft: '13.5vw' }}>
              <FormGroup>
                {/* <Label for="examplePassword"></Label> */}
                <Input type="password" name="password" id="examplePassword" placeholder="Konfirmasi Password" innerRef={(confpassword) => this.confpassword = confpassword} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={5} style={{ marginLeft: '13.5vw' }}>
              <FormGroup>
                {/* <Label for="examplePassword"></Label> */}
                <Input type="Alamat" name="Alamat" id="Alamat" placeholder="Alamat" innerRef={(address) => this.address = address} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={5} style={{ marginLeft: '13.5vw' }}>
              <FormGroup>
                {/* <Label for="examplePassword"></Label> */}
                <Input type="Nomor" name="Nomor" id="Nomor" placeholder="No. Handphone" innerRef={(phone) => this.phone = phone} />
              </FormGroup>
            </Col>
          </Row>
          {/* <Row form>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownOpen} style={{ marginLeft: '13.7vw', marginTop: '1vh', marginBottom:'2vh' }}>
            <DropdownToggle caret style={{ backgroundColor: '#e85661', borderColor: '#e85661', width: '10vw' }}>
              Jenis Kelamin
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header innerRef={(gender) => this.gender = gender}>Laki - Laki</DropdownItem>
              <DropdownItem header>Perempuan</DropdownItem>
            </DropdownMenu>
            
       
          </Dropdown>
          </Row> */}
          <FormGroup check style={{ marginLeft: '1vw' }}>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" style={{ marginBottom: 20 }}>Dengan membuat akun, Anda menyetujui Kebijakan Privasi HM dan Persyaratan Penggunaan.
          </Label>
          </FormGroup>
          <Button style={{ backgroundColor: '#e85661', width: '40vw', marginLeft: '3vw' }} onClick={this.handleRegister}>Sign up</Button>
        </Form>
        <CardText style={{ marginBottom: '20vh', marginTop: 20, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
          <h9 >Sudah menjadi anggota?</h9>
          <Link to='/masuk' style={{ color: 'black' }}>
            <h9> Masuk.</h9>
          </Link >
        </CardText>
        {/* <Button>ef</Button> */}
      </Card>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    status: state.userReducer.register_status
  }
}


export default connect(mapStateToProps, { RegisterAction })(Registerpage);