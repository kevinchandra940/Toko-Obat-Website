import React from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, CardImg, Collapse, Card, CardBody,  Spinner } from 'reactstrap'

class Pesananpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          modal: false,
          collapse: false
        }
    }

    modal = () => {
        this.setState({ modal: !this.state.modal })
    }
    collapse = () => {
        this.setState({ collapse: !this.state.collapse })
    }
    render() {
        return (
            <div style={{ marginBottom: '20vh' }}>
            <h1 style={{ marginLeft: '45vw', color: '#e85661', marginBottom: '5vh' }}>Pesanan</h1>
            <div>
                <Table style={{ color: '#e85661', width: '90vw', marginLeft: '5vw' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>
                                <h4>ID Pesanan</h4>
                            </th>
                            <th>
                                <h4>Tipe Pembayaran</h4>
                            </th>
                            <th>
                                <h4>Total</h4>
                            </th>
                            <th>
                                <h4>Bukti Pembayaran</h4>
                            </th>
                            <th>
                                <h4>Status Pembayaran</h4>
                            </th>
                            <th>
                                <h4>Aksi</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td onClick={this.collapse} ><a className="bt-invoice" style={{color:'#e85661', cursor:'pointer'}}>165875225</a>
                        {/* <Button>Rincian</Button> */}
                                <Collapse isOpen={this.state.collapse}>
                                    <Card>
                                        <CardBody  style={{display:'flex'}}>
                                           <h6>Obat Jadi :</h6>
                                           <h6 style={{marginLeft:'5vw'}}>Obat Racik :</h6>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Button onClick={this.modal} style={{ backgroundColor: '#e85661', borderColor: '#e85661' }}>Tampilkan</Button>
                                <Modal isOpen={this.state.modal} toggle={this.modal} style={{marginTop:'30vh'}}>
                                    <ModalHeader toggle={this.modal} style={{ color: '#e85661', marginLeft: '10vw' }}>Bukti Pembayaran</ModalHeader>
                                    <ModalBody>
                                        <CardImg></CardImg>
                                    </ModalBody>
                                </Modal>
                            </td>

                            <td>@mdo</td>
                            <td>
                                <Button style={{ marginRight: '1vw', backgroundColor: '#39b4ea', borderColor: '#39b4ea' }}>Setuju</Button>
                                <Button style={{ marginRight: '1vw', backgroundColor: '#e85661', borderColor: '#e85661' }}>Tolak</Button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
         );
    }
}
 
export default Pesananpage;