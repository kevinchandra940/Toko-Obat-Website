import React from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, CardImg, Spinner } from 'reactstrap'
import { URL } from '../actions'
import Axios from 'axios'

class Penggunapage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal:false,
            collapse:false,
            data:[]
        }
    }
  

    
    componentDidMount(){
        this.getData()
    }

    
    getData = () => {
        Axios.get(URL + '/users')
        
        .then(response => {this.setState({data: response.data})
        console.log(response.data)
    })
    .catch(error => console.log(error))
}

handleDelete = (id) => {
    Axios.delete(URL + `/users/${id}`)
        .then(response => {
            this.getData()
            console.log(response.data)
        })
        .catch(error => {console.log(error)})
}

    TableHead = () => {
        return (           
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Aksi</th>
                </tr>
            </thead>
        )
    }


    TableBody = () => {
        const { data, username, email, role } = this.state
        return data.map((item, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td><Button onClick = {() => this.handleDelete(item.id)} style={{backgroundColor: '#e85661', borderColor:'#e85661'}}>Hapus</Button></td>
                </tr>            
            )
        })
        
    }

    render() {
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '41vw', color: '#e85661', marginBottom: '5vh' }}>Data Pengguna</h1>
                <div>
                    <Table style={{ color: '#e85661', width: '90vw', marginLeft: '5vw' }}>
                           {this.TableHead()}
                        <tbody>
                           {this.TableBody()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Penggunapage;