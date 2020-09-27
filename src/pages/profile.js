import React from 'react';
import {
    Card,
    Button,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Spinner,
    Collapse
} from 'reactstrap';
import { LoginAction } from '../actions'
import { connect } from 'react-redux'
import { RegisterAction } from '../actions'
import { getProfile, URL_IMG, editProfile, upload } from '../actions'

import avatar from '../assets/no-profile.jpg'

class Profilepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: null,
            collapse: false,
            modal: false,
            username : "",
            email : "",
            address : "",
            phone : "",
        }
    }

    componentDidMount() {
        this.props.getProfile()
    }

    collapse = () => {
        this.setState({ collapse: !this.state.collapse })
    }
    modal = () => {
        this.setState({ modal: !this.state.modal })
    }

    handleSave = () => {
        
        const body = {
            username: this.username.value,
            email: this.email.value,
            address: this.address.value,
            phone: this.phone.value,
        }
        this.props.editProfile(body)
        this.setState({ edit: false })
        console.log(this.username.value, this.email.value, this.address.value, this.phone.value)
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
    
    render() {
        setTimeout(() => this.setState({ready:true}), 1500)
        if (this.state.ready) {
            
        const { image, address, phone, username, email } = this.props
        const { edit } = this.state
        return (
            <div style={{ marginBottom: '10vh', display: 'flex' }}>
                <CardText>
                    <h1 style={{ marginTop: '5vh', marginLeft: '5vw', color: '#39b4ea' }}>Hi, </h1>
                    <h1 style={{ marginTop: '0vh', marginLeft: '5vw', color: '#e85661' }}>{this.props.username}</h1>
                </CardText>
                <div style={{ display: 'flex' }}>

                    <Card style={{ alignItems: 'center', marginLeft: '4vw', marginBottom: '10vh', marginTop: '10vh', height: '70vh', width: '40vw', backgroundColor: '#39b4ea' }}>
                        <div className="button-profile">
                            <form encType="multipart/form-data">

                                <CardImg src={image ? URL_IMG + image : avatar} alt="Card image cap" style={{ width: '20vw', height: '45vh', borderRadius: '1000px', marginTop: '7vh' }} >
                                </CardImg>
                                <div>


                                    <Button onClick={this.collapse} style={{ marginTop: '5vh', marginLeft: '5vw', backgroundColor: '#e85661', borderColor: '#e85661' }}>Ubah Foto Profil</Button>
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
                    </Card>
                    <Card style={{ width: '40vw', backgroundColor: '#e85661' }}>

                        <h1 style={{ alignSelf: 'center', color: 'white', marginTop:'10vh' }}>Info Kamu</h1>
                        <CardBody style={{ color: 'white', alignSelf: 'center', marginTop: '10vh' }}>
                            <CardTitle><h3>Nama : {this.props.username}</h3></CardTitle>
                            <CardText><h3>Email : {this.props.email}</h3></CardText>
                            <CardText><h3>Alamat : {this.props.address}</h3></CardText>
                            <CardText><h3>No. Handphone : {this.props.phone}</h3></CardText>
                        </CardBody>
                        <Button onClick={this.modal} style={{ backgroundColor: '#39b4ea', borderColor: '#39b4ea', marginBottom:'20vh', width:'10vw', marginLeft:'15vw' }}>Perbarui Profil</Button>
                        <Modal isOpen={this.state.modal} toggle={this.modal} style={{ marginTop: '10vh' }}>
                            <ModalHeader toggle={this.modal} style={{ color: '#39b4ea', marginLeft: '9vw' }}>Perbarui Profil Kamu</ModalHeader>
                            <ModalBody>
                                <Label  for="exampleEmail">Nama</Label>
                                    <Input innerRef={(username) => this.username = username} type="Nama" name="Nama" id="exampleEmail" placeholder="nama baru" style={{marginBottom:'1vh'}} />
                                <Label for="exampleEmail">Email</Label>
                                    <Input innerRef={(email) => this.email = email} type="email" name="email" id="exampleEmail" placeholder="email baru" style={{marginBottom:'1vh'}}/>
                                <Label for="exampleEmail">Alamat</Label>
                                    <Input innerRef={(address) => this.address = address} type="Alamat" name="Alamat" id="exampleEmail" placeholder="alamat baru" style={{marginBottom:'1vh'}} />
                                <Label for="exampleEmail">No. Handphone</Label>
                                    <Input innerRef={(phone) => this.phone = phone} type="Phone" name="Phone" id="exampleEmail" placeholder="nomor baru" />
                                

                                <div style={{ marginLeft: '10vw', marginTop: '3vh', color:'#e85661', width:'10vw' }}>
                                { !edit ? <Button style={{backgroundColor:'#e85661',borderColor:'#e85661', width:'10vw'}} className="button" onClick={() => this.setState({ edit : true })}>Perbarui</Button> : null}
                                { edit ? <Button style={{backgroundColor:'#e85661', width:'10vw',borderColor:'#e85661'}}  className="button" variant="success" onClick={this.handleSave}>Simpan</Button> : null}
                                
                                </div>
                            </ModalBody>
                        </Modal>


                    </Card>

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
        username: state.userReducer.username,
        password: state.userReducer.password,
        email: state.userReducer.email,
        role: state.userReducer.role,
        status: state.userReducer.register_status,
        image: state.profileReducer.image,
        address: state.profileReducer.address,
        gender: state.profileReducer.gender,
        phone: state.profileReducer.phone
    }
}

export default connect(mapStateToProps, { LoginAction, RegisterAction, getProfile, editProfile, upload })(Profilepage);