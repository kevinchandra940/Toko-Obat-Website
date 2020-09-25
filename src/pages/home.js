import React from 'react';
import {
    Jumbotron, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios'

const KEY = '&apikey=18575583df444e089170f7702efaa7c1';
const URL = 'http://newsapi.org/v2/top-headlines?';
const OPTIONS = 'country=id&category=technology';
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
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
        return (
            <div>
                <Jumbotron style={{backgroundColor:'#e85661', color:'white'}}>
                    <h1 className="display-3">Selamat datang di Harapan Mulya</h1>
                    <p className="lead">A Cure For Your Wellness</p>
                    <hr className="my-2" />
                    {/* <p>How can we help you</p>
                    <p className="lead">
                        <Link to="/product">
                            <Button style={{ backgroundColor: 'black' }}>Go To Product</Button>
                        </Link>
                    </p> */}
                    <Row style={{ alignSelf: 'center', justifyContent: 'center' }}>
                        <Card style={{ width: '30vw', marginRight:'1vw' }}>
                            <CardImg top style={{ width: '30vw', height: '50vh' }} src="https://www.who.int/images/default-source/health-topics/coronavirus/feature-stories/whocovid19-20200720-bgd-009.jpg?sfvrsn=7d7eb369_2" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button style={{ backgroundColor: '#e85661', borderColor:'#e85661'}}>Read More</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '30vw', marginRight:'1vw'  }}>
                            <CardImg top style={{ width: '30vw', height: '50vh' }} src="https://www.who.int/images/default-source/health-topics/coronavirus/feature-stories/whocovid19-20200720-bgd-207.jpg?sfvrsn=d5aa2e35_2" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button style={{ backgroundColor: '#e85661', borderColor:'#e85661' }}>Read More</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '30vw' }}>
                            <CardImg top style={{ width: '30vw', height: '50vh' }} src="https://www.who.int/images/default-source/health-topics/coronavirus/feature-stories/whocovid19-20200625-mru-204.jpg?sfvrsn=f4346a09_2" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button style={{ backgroundColor: '#e85661', borderColor:'#e85661' }}>Read More</Button>
                            </CardBody>
                        </Card>
                    </Row>
                </Jumbotron>
            </div>);
    }
}

export default Homepage;