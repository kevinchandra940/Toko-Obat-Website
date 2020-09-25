import React from 'react';
import Homepage from './pages/home';
import './App.css'
import { Route } from 'react-router-dom';
import Navbarcomponent from './components/navbar';
import Registerpage from './pages/register';
import Loginpage from './pages/login';
import Footercomponent from './components/footer';
import Categorypage from './pages/category';
import Newspage from './pages/news'
import Drugspage from './pages/drugs'
import Profilepage from './pages/profile'
import Verificationpage from './pages/verification'
import Cartpage from './pages/cart'
import Productdetailpage from './pages/productDetail';
import Adminrouterpage from './pagesAdmin/adminRouter';
import Checkoutpage from './pages/checkout';
import Receiptpage from './pages/receipt';
import RiwayatTransaksipage from './pages/historyUser';
import Testpage from './pages/test';
import { connect } from 'react-redux'

import { KeepLogin } from './actions'
import CategoryRouter from './pages/categoryRouter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.KeepLogin()
  }
  render() {
    console.log('INI BACA URL :', window.location.href)
    let lokasi = window.location.href
    return (
      <div>
        {lokasi.includes('/admin/login') ?
          <Route path='/admin' component={Adminrouterpage} />
          :
          <div>
            <Navbarcomponent></Navbarcomponent>
            <Route path='/' component={Homepage} exact />
            <Route path='/beliobat' component={CategoryRouter} />
            <Route path='/daftar' component={Registerpage} />
            <Route path='/masuk' component={Loginpage} />
            <Route path='/berita' component={Newspage} />
            <Route path='/obatracik' component={Drugspage} />
            <Route path='/profil' component={Profilepage} />
            <Route path='/verifikasi' component={Verificationpage} />
            <Route path='/productdetail' component={Productdetailpage} />
            <Route path='/keranjang' component={Cartpage} />
            <Route path='/checkout' component={Checkoutpage} />
            <Route path='/resi' component={Receiptpage} />
            <Route path='/test' component={Testpage} />
            <Route path='/riwayattransaksi' component={RiwayatTransaksipage} />
            <Footercomponent></Footercomponent>
          </div>
        }
      </div>
    );
  }
}

export default connect(null, { KeepLogin })(App)