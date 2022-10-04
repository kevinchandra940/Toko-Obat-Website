import React from 'react';
import {
    JCarousel, CardImg, Row, Spinner
} from 'reactstrap';
import Axios from 'axios'
import CEWE from '../assets/CEWE.jpeg'
import HAPE from '../assets/HAPE.jpeg'
import MOHON from '../assets/MOHON.jpeg'

const KEY = '&apikey=18575583df444e089170f7702efaa7c1';
const URL = 'http://newsapi.org/v2/top-headlines?';
const OPTIONS = 'country=id&category=technology';
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Axios.get(URL + OPTIONS + KEY)
            .then((res) => {
                console.log('news : ', res.data);
                this.setState({ data: res.data })
            })
            .catch((err) => console.log(err));
    }

    render() {
        setTimeout(() => this.setState({ ready: true }), 1500)
        if (this.state.ready) {

            return (
                <div>
                    <div style={{ backgroundColor: '#e85661' }}>
                        <div>
                            <div>
                                <p style={{color:'white', fontSize:'70px', fontWeight:'100'}}>Selamat datang di Harapan Mulya</p>
                            </div>
                            <div>
                                <p style={{color:'white', fontSize:'30px', fontWeight:'100'}}>A Cure For Your Wellness</p>
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div style={{ width: '100%', display: 'flex' }}>
                                <div>
                                    <CardImg src={CEWE} style={{ width: '31vw', height: '83vh', marginRight: '1vw', marginLeft: '1vw' }} />
                                </div>
                                <div>
                                    <CardImg top style={{ width: '31vw', height: '83vh', marginRight: '1vw' }} src={HAPE} />
                                </div>
                                <div>
                                    <CardImg top style={{ width: '30vw', height: '83vh' }} src={MOHON}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>);
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

export default Homepage;