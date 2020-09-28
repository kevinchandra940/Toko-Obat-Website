import React from 'react';
import { Table } from 'reactstrap'
import { connect } from 'react-redux'

import { getHistoryRacik, getHistoryJadi } from '../actions'

class Testpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getHistoryRacik()
        this.props.getHistoryJadi()
    }

    renderHeadKimia = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>
                        <h4>Order Number</h4>
                    </th>
                    <th>
                        <h4>Pembelian</h4>
                        <h6>Obat Racik</h6>
                    </th>
                    <th>
                        <h4>Quantity</h4>
                    </th>
                    <th>
                        <h4>Total</h4>
                    </th>
                    <th>
                        <h4>Status</h4>
                    </th>
                </tr>
            </thead>
        )
    }

    renderBodyKimia = () => {
        return this.props.data.map((item, index) => {
            return (
                <tbody>
                    <tr>
                        <th scope="row" key={item.id}>{index + 1}</th>
                        <td>{item.order_number}</td>
                        <td>{item.nama_kimia}</td>
                        <td>{item.qty}</td>
                        <td>{item.total}</td>
                        <td>{item.status_order}</td>
                    </tr>
                </tbody>
            )
        })
    }


    renderHeadJadi = () => {
        return (
            <thead>
                <tr>
                    <th>No</th>
                    <th>
                        <h4>Order Number</h4>
                    </th>
                    <th>
                        <h4>Pembelian</h4>
                        <h6>Obat Jadi</h6>
                    </th>
                    <th>
                        <h4>Quantity</h4>
                    </th>
                    <th>
                        <h4>Total</h4>
                    </th>
                    <th>
                        <h4>Status</h4>
                    </th>
                </tr>
            </thead>
        )
    }

    renderBodyJadi = () => {
        return this.props.dataJadi.map((item, index) => {
            return (
                <tbody>
                    <tr>
                        <th scope="row" key={item.id}>{index + 1}</th>
                        <td>{item.order_number}</td>
                        <td>{item.nama}</td>
                        <td>{item.qty}</td>
                        <td>{item.total}</td>
                        <td>{item.status_order}</td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        console.log(this.props.dataJadi)
        return (
            <div>
                <h1 style={{ marginLeft: '10px', color: '#e85661', marginBottom: '10vh', textAlign:"center" }}>Riwayat Transaksi</h1>
                <div style={{ marginBottom: '20vh', display: "flex"}} >
                    <Table style={{ color: '#39b4ea', width:'20vw', marginLeft:'1vw', marginRight:'1vw' }}>
                        {this.renderHeadKimia()}
                        {this.renderBodyKimia()}
                    </Table>
                    <Table style={{ color: '#e85661', width:'20vw', marginRight:'10vw'}}>
                        {this.renderHeadJadi()}
                        {this.renderBodyJadi()}
                    </Table>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.adminReducer.historyRacik,
        dataJadi: state.adminReducer.historyJadi
    }
}

export default connect(mapStateToProps, { getHistoryRacik, getHistoryJadi })(Testpage);