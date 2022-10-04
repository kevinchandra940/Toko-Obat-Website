import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogoutAction } from '../actions'
import Logo from '../assets/logo.jpg'

class Navbarcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    handleLogout = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        this.props.LogoutAction()
    }

    onBtOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        return (
            <div style={{borderBottomColor:'#e85661', borderBottomStyle:'solid',borderBottomWidth:'1px'}}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ width: '20%', textAlign: 'center' }}>
                        <div>
                            <Link to='/'>
                                <img src={Logo} style={{ width: '50%' }} />
                            </Link>
                        </div>
                    </div>
                    <div style={{ width: '60%', display: 'flex', margin: 'auto', justifyContent: 'space-evenly' }}>
                        <div>
                            <Link to='/beliobat' style={{ color: '#e85661', textDecoration: 'none', fontSize: '20px' }} >
                                <p>
                                    Obat Obatan
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/obatracik' style={{ color: '#e85661', textDecoration: 'none', fontSize: '20px' }} >
                                <p>
                                    Obat Racik
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/news' style={{ color: '#e85661', textDecoration: 'none', fontSize: '20px' }} >
                                <p>
                                    Berita
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div style={{ width: '20%', margin: 'auto' }}>
                        <Navbar light expand="md">
                            <NavbarToggler onClick={this.onBtOpen} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    {
                                        this.props.username ?

                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret>
                                                    <p style={{ backgroundColor: 'none', color: '#e85661', fontSize: '20px' }}>{this.props.username.charAt(0).toUpperCase()}</p>
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        <Link to='/profil' style={{ textDecoration: 'none', color: '#39b4ea' }}>
                                                            <NavItem>
                                                                Profil
                                                            </NavItem>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <Link to='/keranjang' style={{ textDecoration: 'none', color: '#e85661' }}>
                                                            <NavItem>
                                                                Keranjang
                                                            </NavItem>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <Link to='/riwayattransaksi' style={{ textDecoration: 'none', color: '#39b4ea' }}>
                                                            <NavItem>
                                                                Transaksi
                                                            </NavItem>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <Link to='/' onClick={this.handleLogout} style={{ textDecoration: 'none', color: '#e85661' }}>
                                                            <NavItem>
                                                                Keluar
                                                            </NavItem>
                                                        </Link>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                            :
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret style={{ borderColor: 'black', borderRadius: '20px' }}>
                                                    <p style={{ color: '#e85661', fontSize: '20px' }}>Login</p>
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        <Link to='/masuk' style={{ textDecoration: 'none', color: '#e85661' }}>
                                                            <NavItem>
                                                                Login
                                                            </NavItem>
                                                        </Link>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <Link to='/daftar' style={{ textDecoration: 'none', color: '#e85661' }}>
                                                            <NavItem style={{}}>
                                                                Register
                                                            </NavItem>
                                                        </Link>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                    }
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    }
}

export default connect(mapStateToProps, { LogoutAction })(Navbarcomponent);