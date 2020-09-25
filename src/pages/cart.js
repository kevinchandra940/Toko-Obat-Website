import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardText, Card, Table, Button, Spinner } from 'reactstrap';



const Cartpage = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [ready, setReady] = useState(false);


    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);

    setTimeout(() => setReady(true), 1500)
    if (ready) {
        return (
            <div style={{ marginBottom: '20vh' }}>
                <CardText style={{ marginLeft: '38.5vw', marginTop: '0vh', marginBottom: '8vh' }}>
                    <h1 style={{ marginLeft: '4.5vw', color: '#e85661' }}>Keranjang</h1>
                </CardText>
                <div style={{ display: 'flex' }}>
                    <h2 style={{ marginLeft: '20VW', color: '#39b4ea' }}>Obat</h2>
                    <h2 style={{ marginLeft: '45VW', color: '#e85661' }}>Obat Rujukan</h2>
                </div>
                <div className="row" style={{ width: "100vw", }}>
                    <Table style={{ color: '#39b4ea', marginRight: '2vw', width: '47vw', marginLeft: '2vw' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama Barang</th>
                                <th>Kategori</th>
                                <th>Harga</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table style={{ color: '#e85661', marginRight: '0vw', width: '48vw' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Link to='/checkout' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                    <Button className="shadow  mb-5 " style={{ marginTop: '5vh', marginLeft: '30vw', width: '40vw', backgroundColor: '#e85661' }}>Checkout</Button>
                </Link>
            </div>
        ); 
    }
    else {
        return (
            <div style={{ marginLeft: '32vw', marginTop: '20vh', marginBottom: '40vh' }}>
                <Spinner type="grow" color="primary" style={{ width: '10vh', height: '5vw' }} />
                <Spinner type="grow" color="secondary" style={{ width: '10vh', height: '5vw' }} />
                <Spinner type="grow" color="success" style={{ width: '10vh', height: '5vw' }} />
                <Spinner type="grow" color="danger" style={{ width: '10vh', height: '5vw' }} />
                <Spinner type="grow" color="warning" style={{ width: '10vh', height: '5vw' }} />
                <Spinner type="grow" color="info" style={{ width: '10vh', height: '5vw' }} />
                <Spinner type="grow" color="dark" style={{ width: '10vh', height: '5vw' }} />
            </div>
        )

    }
}

// background: 'linear-gradient(90deg, rgba(57,180,234,1) 35%, rgba(232,86,97,1) 82%)'

export default Cartpage;
