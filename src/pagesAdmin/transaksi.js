import React from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, CardImg, Spinner } from 'reactstrap'

class Transaksipage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modal: false
        }
    }

    modal = () => {
        this.setState({ modal: !this.state.modal })
    }
    render() {
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '39vw', color: '#e85661', marginBottom: '5vh' }}>Riwayat Transaksi</h1>
                <div>
                    <Table style={{ color: '#e85661', width: '90vw', marginLeft: '5vw' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>
                                    <h4>Nama User</h4>
                                </th>
                                <th>
                                    <h4>Pembelian</h4>
                                    <h6>Obat Jadi</h6>
                                </th>
                                <th>
                                    <h4>Pembelian</h4>
                                    <h6>Obat Racik</h6>
                                </th>
                                <th>
                                    <h4>Total</h4>
                                </th>
                                <th>
                                    <h4>Status</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>   
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

export default Transaksipage;