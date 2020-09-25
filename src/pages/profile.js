import React from 'react';
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
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
    Input,
    Spinner
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
            modal: false
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
        console.log(this.refs)
        const body = {
            address: this.refs.address.value,
            phone: this.refs.phone.value,
            gender: this.refs.gender.value
        }
        this.props.editProfile(body)
        this.setState({ edit: false })
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
        const { image, address, phone, gender, nama, email } = this.props
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

                                <CardImg src={image ? URL_IMG + image : avatar} alt="Card image cap" style={{ width: '20vw', height: '40vh', borderRadius: '1000px', marginTop: '8vh' }} >
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
                        <FormGroup
                            defaultValue={nama ? nama : ''}
                            disabled={!edit}
                            ref="gender"
                        ></FormGroup>
                        <FormGroup
                            defaultValue={email ? email : ''}
                            disabled={!edit}
                            ref="phone"
                        />
                        <FormGroup
                            aria-describedby="basic-addon1"
                            defaultValue={address ? address : ''}
                            disabled={!edit}
                            ref="address"
                        />

                        <h1 style={{ alignSelf: 'center', color: 'white' }}>Info Kamu</h1>
                        <CardBody style={{ color: 'white', alignSelf: 'center', marginTop: '10vh' }}>
                            <CardTitle><h3>Nama : {this.props.username}</h3></CardTitle>
                            <CardText><h3>Email : {this.props.email}</h3></CardText>
                            <CardText><h3>Jenis Kelamin : {this.props.gender}</h3></CardText>
                            <CardText><h3>Alamat : {this.props.address}</h3></CardText>
                            <CardText><h3>No. Handphone: {this.props.phone}</h3></CardText>
                        </CardBody>
                        <Button onClick={this.modal} style={{ backgroundColor: '#39b4ea', borderColor: '#39b4ea', marginBottom:'20vh', width:'10vw', marginLeft:'15vw' }}>Edit Profil</Button>
                        <Modal isOpen={this.state.modal} toggle={this.modal} style={{ marginTop: '10vh' }}>
                            <ModalHeader toggle={this.modal} style={{ color: '#39b4ea', marginLeft: '13vw' }}>Edit Profil</ModalHeader>
                            <ModalBody>
                                <Label for="exampleEmail">Nama</Label>
                                <Input type="Nama" name="Nama" id="exampleEmail" placeholder="nama baru" />
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="email baru" />
                                <Label for="exampleEmail">Alamat</Label>
                                <Input type="Alamat" name="Alamat" id="exampleEmail" placeholder="alamat baru" />
                                <Label for="exampleEmail">No. Handphone</Label>
                                <Input type="Phone" name="Phone" id="exampleEmail" placeholder="nomor baru" />
                                

                                <div style={{ marginLeft: '10vw', marginTop: '3vh' }}>
                                    <Button className="button" style={{ backgroundColor: '#39b4ea', borderColor: '#39b4ea', width: '10vw' }} onClick={() => this.setState({ edit: true })}>Konfirmasi</Button>
                                </div>
                            </ModalBody>
                        </Modal>


                    </Card>

                </div>
            </div>
        );
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