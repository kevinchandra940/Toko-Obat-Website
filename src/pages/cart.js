import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap';

//import actions
import {
  getCart,
  actionPlus,
  actionMinus,
  editCart,
  checkOutAction,
  deleteAction,
  getCartKimia,
  deleteActionKimia
} from '../actions'

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      quantity: 0,
      total: null,
    }
  }

  componentDidMount() {
    this.props.getCart()
    this.props.getCartKimia()
  }

  buttonEdit = (id) => {
    this.setState({ selectedId: id })
  }

  buttonDelete = (id) => {
    this.props.deleteAction(id, this.props.user_id)
  };

  buttonCancel = () => {
    this.props.getCart()
    this.setState({ selectedId: null })
  }

  buttonPlus = (index, id) => {
    this.props.actionPlus(id)
    this.setState({ selectedId: id })
  }


  buttonMinus = (index, id) => {
    this.props.actionMinus(index)
    this.setState({ selectedId: id })
  }

  buttonSave = (index) => {
    console.log('ok')
    const body = {
      id: this.state.selectedId,
      newQty: this.props.cart[index].qty,
      total: this.props.cart[index].harga * this.props.cart[index].qty,
    }
    this.props.editCart(body)
    this.props.getCart()
    this.setState({ selectedId: null })
  }

  buttonCheckout = () => {
    console.log('checkout')
    this.props.checkOutAction(this.props.orderNumb)
  }

  deleteKimia = (id) => {
    this.props.deleteActionKimia(id)
  }

  renderTableHead = () => {
    return (

      <thead style={{ width: "45vw", color: '#e85661' }} >
        <tr>
          <th>No</th>
          <th>Nama Barang</th>
          <th>Quantity</th>
          <th>Harga</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>

    )
  }

  renderTableKimia = () => {
    return (
      <thead style={{ width: "45vw" }} >
        <tr>
          <th>No</th>
          <th>Nama Barang</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>

    )
  }

  renderBodyKimia = () => {
    return this.props.cart_kimia.map((item, index) => {
      return (
        <thead style={{ width: "40vw" }} >
          <tr>
            <th>{index + 1}</th>
            <th>Obat Racik {index + 1} </th>
            <th>{item.total}</th>
            <th><Button onClick={() => this.deleteKimia(item.id)}>Delete</Button></th>
          </tr>
        </thead>
      )
    })
  }

  renderTableBody = () => {
    return this.props.cart.map((item, index) => {
      if (item.id === this.state.selectedId) {
        return (
          <tbody >
            <tr>
              <th scope="row" key={item.id}>{item.id}</th>
              <td>{item.nama}</td>
              <td><Button onClick={() => this.buttonMinus(index, item.id)}>-</Button>
                {item.qty}
                <Button onClick={() => this.buttonPlus(index, item.id)}>+</Button></td>
              <td>{item.harga}</td>
              <td>{item.qty * item.harga}</td>
              <td><Button onClick={() => this.buttonSave(index, item.id)}>OK</Button>
                <Button onClick={this.buttonCancel}>CANCEL</Button></td>
            </tr>
          </tbody>
        )
      } else {
        return (
          <tbody style={{ color: '#e85661' }}>
            <tr>
              <th scope="row" key={item.id}>{index + 1}</th>
              <td>{item.nama}</td>
              <td>{item.qty}</td>
              <td>{item.harga}</td>
              <td>{item.qty * item.harga}</td>
              <td><Button onClick={() => this.buttonEdit(item.id)}>Edit</Button>
                <Button onClick={() => this.buttonDelete(item.id)}>Delete</Button></td>
            </tr>
          </tbody>
        )
      }
    })
  }


  render() {
    console.log(this.props.cart_kimia)
    return (
      <div style={{ marginBottom: '20vh' }}>
        <h1 style={{ color: '#e85661', marginLeft: '44.5vw', marginBottom: '10vh' }}>Keranjang</h1>
        <div style={{display:'flex'}}>
          <h1 style={{marginLeft:'20vw', color: '#e85661', marginBottom:'3vh'}}>Obat Jadi</h1>
          <h1 style={{marginLeft:'35vw', color: '#39b4ea'}}>Obat Racik</h1>
        </div>
        <div style={{ display: "flex", width: '90vw' }}>
          <Table className="col-6" style={{ color: '#e85661', width: '45vw', marginLeft: '4vw' }}>
            {this.renderTableHead()}
            {this.renderTableBody()}
          </Table>
          <Table className="col-6" style={{ color: '#39b4ea', width: '45vw', marginLeft: '1vw' }}>
            {this.renderTableKimia()}
            {this.renderBodyKimia()}
          </Table>
        </div>
        <h2 style={{ color: '#e85661', marginLeft: '20vw' }}>Total : {this.props.total}</h2>
        <Link to="/checkout">
          <Button onClick={this.buttonCheckout} style={{ backgroundColor: '#e85661', width: '20vw', marginLeft: '40vw', borderColor: '#e85661' }}>Proses</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.orderReducer.cart,
    total: state.orderReducer.total,
    orderNumb: state.orderReducer.order_number,
    user_id: state.userReducer.id,
    cart_kimia: state.orderReducer.cart_kimia
  }
}

export default connect(mapStateToProps,
  {
    getCart,
    actionPlus,
    actionMinus,
    editCart,
    checkOutAction,
    deleteAction,
    getCartKimia,
    deleteActionKimia
  })(CartPage);