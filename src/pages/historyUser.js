import React from 'react';
import { connect } from 'react-redux'
import { Table, Spinner } from 'reactstrap'

// import actions
import { UserHistory } from '../actions'

class RiwayatTransaksipage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.UserHistory()
    }
    renderTableHead = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>Order Number</th>
                    <th>Payment Type</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>
        )
    }

    renderTableBody = () => {
        return this.props.data.map((item, index) => {
            return (
                <tbody>
                    <tr>
                        <th scope="row" key={item.id}>{item.id}</th>
                        <td>{item.order_number}</td>
                        <td>{item.type_payment}</td>
                        <td>Rp.{item.total}</td>
                        <td>{item.status_payment}</td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        setTimeout(() => this.setState({ ready: true }), 1500)
        if (this.state.ready) {
            return (
                <div style={{ marginBottom: '20vh' }}>
                    <h1 style={{ marginLeft: '38vw', marginBottom: '10vh', color: '#e85661' }}>Riwayat Transaksi</h1>
                    <Table style={{ color: '#e85661', width: '90vw', marginLeft: '4.5vw' }}>
                        {this.renderTableHead()}
                        {this.renderTableBody()}
                    </Table>
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

}


const mapStateToProps = (state) => {
    return {
        data: state.userReducer.userHistory
    }
}

export default connect(mapStateToProps, { UserHistory })(RiwayatTransaksipage);