import React from 'react';
import { Table, Modal, ModalBody, ModalHeader, CardImg, CardText, ButtonGroup, Collapse, Button, CardBody, Card, Spinner } from 'reactstrap'
import { URL } from '../actions'
import Axios from 'axios'

class Testpage extends React.Component {
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
        setTimeout(() => this.setState({ready:true}), 1500)
        if (this.state.ready) {
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

export default Testpage;