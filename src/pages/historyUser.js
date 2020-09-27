import React from 'react';
import { Link } from 'react-router-dom'
import {Table, Spinner} from 'reactstrap'

class RiwayatTransaksipage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        setTimeout(() => this.setState({ready:true}), 1500)
        if (this.state.ready) {
            
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '38vw', marginBottom:'10vh', color:'#e85661' }}>Riwayat Transaksi</h1>
                <div>
                    <Table style={{color:'#e85661', width:'90vw', marginLeft:'4.5vw'}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
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

export default RiwayatTransaksipage;