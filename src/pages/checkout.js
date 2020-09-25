import React from 'react';
import { Link } from 'react-router-dom'
import { Toast, ToastHeader, ToastBody, Button, CardImg, CardText, FormGroup,Form, Label, Input, Spinner } from 'reactstrap'
import BCA from '../assets/BCA.png'
import Mandiri from '../assets/mandiri.png'
import OVO from '../assets/ovo.png'
import DANA from '../assets/dana.png'
import Paypal from '../assets/paypal.png'

class Checkoutpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{marginBottom:'20vh'}}>
                <CardText style={{ marginLeft: '44vw' }}>
                <h1 style={{color:'#e85661'}}>Checkout</h1>
                </CardText>
                <div className="p-3 bg-danger rounded" style={{marginTop:'10vh', height: '20vh', display:'flex'}}>
                    <Toast style={{ marginTop: '4vh', marginRight:'5vw'  }}>
                        <ToastBody style={{fontSize:'25px', alignItems:'center'}}>
                            
                                Pilih metode pembayaran
                          
                        </ToastBody>
                    </Toast>
                    <Link to='./#'>
                        <Button style={{backgroundColor: 'white', height:'10vh', marginLeft: '0vw',marginTop:'3.5vh'}}>
                        <CardImg src={BCA} style={{ width: '8vw', height: '5vh' }} />  
                        </Button>
                        </Link>  
                        <Link>
                        <Button style={{backgroundColor: 'white', height:'10vh', marginLeft: '2vw',marginTop:'3.5vh'}}>
                        <CardImg src={Mandiri} style={{ width: '8vw', height: '8.5vh'}} />  
                        </Button>
                        </Link>
                        <Button style={{backgroundColor: 'white', height:'10vh', marginLeft: '2vw',marginTop:'3.5vh'}}>
                        <Link>  
                        <CardImg src={OVO} style={{ width: '7vw', height: '7vh',  }} />
                        </Link>                     
                        </Button>
                        <Button style={{backgroundColor: 'white', height:'10vh', marginLeft: '2vw',marginTop:'3.5vh'}}>
                        <Link>    
                        <CardImg src={DANA} style={{ width: '9vw', height: '6vh',  }} /> 
                        </Link>
                        </Button>
                        <Button style={{backgroundColor: 'white', height:'10vh', marginLeft: '2vw',marginTop:'3.5vh'}}>
                        <Link>   
                        <CardImg src={Paypal} style={{ width: '9vw', height: '6vh' }} /> 
                        </Link>   
                        </Button>
                </div>
                <div className="p-3  my-2 rounded"  style={{marginTop:'10vh', height: '15vh', display:'flex', backgroundColor:'#39b4ea'}}>
                    <Toast>
                       
                        <ToastBody style={{fontSize:'25px'}}>
                           Alamat
          </ToastBody>
                    </Toast>
                    <Form style={{marginLeft:'5vw'}}>
      <FormGroup >
        <Input type="email" name="email" id="exampleEmail" placeholder="Alamat" style={{height:'6vh', width:'30vw', marginTop:'1.5vh'}} />
      </FormGroup>
      </Form>
                </div>
                <Link to='./resi'>
                <Button style={{ marginLeft: '70vw', width:'20vw', backgroundColor:'#e85661', marginTop:'2vh', borderColor:'#e85661' }}>Bayar</Button>
                </Link>
            </div>
        );
    }
}

export default Checkoutpage;