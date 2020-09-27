import React from 'react';
import { Table, Button} from 'reactstrap'
import { TransactionHistory, approvePayment, rejectPayment } from '../actions'
import { connect } from 'react-redux'

class Pesananpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          modal: false,
          collapse: false,
          selectedId: null
        }
    }

    componentDidMount() {
        this.props.TransactionHistory()
    }

    buttonAction = (id) => {
        this.setState({ selectedId: id })
    }

    buttonAprrove = async(id) => {
        await this.props.approvePayment(id, this.props.history)
        await this.props.TransactionHistory()
        await this.setState({selectedId : null})
    }
    buttonReject = async(id) => {
        await this.props.rejectPayment(id)
        await this.props.TransactionHistory()
        await this.setState({selectedId : null})
    }

    modal = () => {
        this.setState({ modal: !this.state.modal })
    }
    collapse = () => {
        this.setState({ collapse: !this.state.collapse })
    }
    renderTableHead = () => {
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Order Number</th>
                        <th>Payment Type</th>
                        <th>Total</th>
                        <th>Status Payment</th>
                        <th>Bukti Transfer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </Table>
        )
    }

    renderTableBody = () => {
        return this.props.history.map((item, index) => {
            if (item.id === this.state.selectedId) {
                return (
                    <Table dark key={index}>
                        <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.order_number}</td>
                                <td>{item.type_payment}</td>
                                <td>{item.total}</td>
                                <td>{item.status_payment}</td>
                                {
                                    !item.bukti_transfer ? <td>BELUM BAYAR</td> : <td>{item.bukti_transfer}</td>
                                }
                                <Button onClick={() => this.buttonAprrove(item.id)}>Approve</Button>
                                <Button onClick={() => this.buttonReject(item.id)}>Reject</Button>
                            </tr>
                        </tbody>
                    </Table>
                )
            } else {
                return (
                    <Table dark key={index}>
                        <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.order_number}</td>
                                <td>{item.type_payment}</td>
                                <td>{item.total}</td>
                                <td>{item.status_payment}</td>
                                {
                                    !item.bukti_transfer ? <td>BELUM BAYAR</td> : <td>{item.bukti_transfer}</td>
                                }
                                <Button onClick={() => this.buttonAction(item.id)}>Action</Button>
                            </tr>
                        </tbody>
                    </Table>
                )
            }  
    })
}

render() {
    console.log('history', this.props.history)
    return (
        <div>
            <h1>INI HALAMAN TRANSAKSI</h1>
            {this.renderTableHead()}
            {this.renderTableBody()}
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return {
        history: state.adminReducer.trans_history,
        qty:state.adminReducer.trans_history
    }
}

export default connect(mapStateToProps, { TransactionHistory, approvePayment, rejectPayment })(Pesananpage);