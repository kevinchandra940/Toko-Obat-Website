import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardText, Card, Table, Button, Input, FormGroup, Label, CardBody, Spinner } from 'reactstrap';
import {Link} from 'react-router-dom'



class Drugspage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2: false,
      Edit: false,
      toggle: true
    }
  }

  dropdownOpen = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }
  dropdownOpen1 = () => {
    this.setState({ dropdownOpen1: !this.state.dropdownOpen1 })
  }
  dropdownOpen2 = () => {
    this.setState({ dropdownOpen2: !this.state.dropdownOpen2 })
  }
  Edit = () => {
    this.setState({ Edit: !this.state.Edit })
  }

  render() {
    return (
      <div style={{marginBottom:'40vh'}}>
        <CardText style={{ marginBottom: '5vh', marginTop: '5vh' }}>
          <h1 style={{ marginLeft: '40.5vw', color:'#e85661' }}>Selamat Datang</h1>
          <h3 style={{ marginLeft: '39vw', color:'#e85661' }}>Apa yang kamu butuhkan?</h3>
        </CardText>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20vh' }}>

          <Card style={{ width: '45vw' }}>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownOpen} style={{ marginLeft: '1vw', height: '0vh', width: '20vw', marginTop: '5vh' }}>
              <h3 style={{color:'#e85661'}}>Jenis Obat</h3>
              <DropdownToggle caret style={{ backgroundColor: '#e85661 ', width: '10vw', borderColor:'#e85661' }}>
                antibiotik ?
        </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Antibiotik</DropdownItem>
                <DropdownItem header>Vitamin</DropdownItem>
                <DropdownItem header>Paracetamol</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.dropdownOpen1} style={{ marginLeft: '15vw', marginBottom: '0vh', marginTop: '0vh', height: '0vh', width: '20vw' }}>
              <h3 style={{color:'#e85661'}}>Nama Obat</h3>
              <DropdownToggle caret style={{ backgroundColor: '#e85661', width: '10vw', borderColor:'#e85661' }}>
                amoxcilin ?
            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Amoxcilin</DropdownItem>
                <DropdownItem header>IMBOOST</DropdownItem>
                <DropdownItem header>Coparcetin</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div style={{ display: 'flex' }}>
              <FormGroup style={{ width: '10vw', marginTop: '15vh', marginLeft: '1vw' }}>
                <h3 style={{color:'#e85661'}}>Takaran</h3>
                {/* <Label for="exampleEmail">Takaran Obat</Label> */}
                <Input type="" name="" id="exampleEmail" placeholder="..." />
              </FormGroup>
              <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.dropdownOpen2} style={{ marginLeft: '4vw', marginTop: '20.6vh' }}>
                <DropdownToggle caret style={{ backgroundColor: '#e85661',borderColor:'#e85661', width: '10vw' }}>
                  ml / gr
            </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>ml</DropdownItem>
                  <DropdownItem header>gr</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <FormGroup style={{ width: '10vw', marginTop: '5vh', marginLeft: '1vw' }}>
              <Label style={{color:'#e85661'}}>Total : ex. 12x minum</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="dosis" />
            </FormGroup>


            <Button style={{ marginTop: '5vh', marginBottom: '5vh', backgroundColor: '#e85661', width: '30vw', marginLeft: '5vw', borderRadius: '60px', borderColor:'#e85661' }}>Tambah</Button>
          </Card >

          <Card style={{ width: '45vw' }}>
            <Table style={{ width: '40vw', color: '#e85661', marginTop: '10vh', marginLeft: '2.5vw' }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Jenis Obat</th>
                  <th>Nama Obat</th>
                  <th>Takaran</th>
                  <th>Dosis</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>

                    {/* {!Edit ? <Button className="button" onClick={() => this.setState({ Edit: true })} style={{ backgroundColor: 'black', width: '5vw' }} >Edit</Button> : null}
                  {Edit ? <Button className="button" variant="success" style={{ backgroundColor: 'black' }} >S+</Button> : null}
                  {Edit ? <Button className="button" variant="warning" style={{ backgroundColor: 'red', borderColor: 'none' }} >-</Button> : null}  */}

                    <Button style={{ width: '3vw', height: '5vh', backgroundColor:'#e85661', borderColor:'#e85661' }}>-</Button>
                    <Button style={{ width: '3vw', height: '5vh', marginLeft: '0.5vw', backgroundColor:'#e85661', borderColor:'#e85661' }}>+</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            <Link to='/keranjang'>
              <Button style={{ marginLeft: '8vw', width: '30vw', backgroundColor: '#e85661', borderColor:'#e85661', borderRadius: '60px', marginTop: '14vh' }}>Proses</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }
}



export default Drugspage;
