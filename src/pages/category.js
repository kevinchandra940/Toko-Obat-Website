import React from 'react'
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardBody,
    Spinner, Modal, ModalBody
} from 'reactstrap';
import { Link } from 'react-router-dom'



class Categorypage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        const { match } = this.props
        setTimeout(() => this.setState({ready:true}), 1500)
        if (this.state.ready) {
            return (
    
                <div style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '20vh' }}>
    
                    <CardText style={{ marginLeft: '37vw', marginTop: '5vh', marginBottom: '5vh' }}>
                        <h1 style={{ marginLeft: '1.5vw' , color:'#e85661'}}>Selamat Datang</h1>
                        <h3 style={{color:'#e85661'}}>Ada yang bisa kami bantu ?</h3>
                    </CardText>
                    <CardGroup style={{ justifyItems: "center", justifyContent: 'space-between' }}>
                        <Link to='/beliobat/batukdanflu' style={{ textDecoration: 'none', color: 'black', width: '30vw', marginBottom: '3vh' }}>
                            <Card style={{color:'#e85661'}}>
                                <CardImg top style={{ width: '29.84vw', height: '50vh' }} src="https://d1bpj0tv6vfxyp.cloudfront.net/pilekberkepanjanganmungkinalamisinusitishalodoc.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>BATUK & FLU</CardTitle>
                                    <CardText>Flu atau influenza adalah infeksi virus yang menyerang hidung, tenggorokan, dan paru-paru.
                Penderita flu akan mengalami demam, sakit kepala, pilek, hidung tersumbat, serta batuk.</CardText>
                                </CardBody>
                            </Card>
                        </Link>
                        <Link to='/beliobat/demam' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                            <Card  style={{color:'#e85661', height:'74vh'}}>
                                <CardImg top style={{ width: '29.89vw', height: '50vh' }} src="https://img.freepik.com/free-vector/young-man-with-fever-covid19-symptoms-set-icons_18591-65536.jpg?size=626&ext=jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>DEMAM</CardTitle>
                                    <CardText>Demam adalah kondisi meningkatnya suhu tubuh hingga lebih dari 380C.
                Demam menandakan adanya penyakit atau kondisi lain di dalam tubuh.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '}- */}
                                </CardBody>
                            </Card>
                        </Link>
                        <Link to='/beliobat/vitamin' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                            <Card  style={{color:'#e85661'}}>
                                <CardImg top style={{ width: '29.89vw', height: '50vh' }} src="https://d1bpj0tv6vfxyp.cloudfront.net/imun-rendah-perlukah-lakukan-suntik-vitamin-c.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>VITAMIN</CardTitle>
                                    <CardText>
                                        Vitamin adalah nutrisi tambahan yang diperlukan bagi tubuh untuk bisa menunjang kinerja tubuh.
                Umumnya, vitamin berasal dari makanan dan buah-buahan yang bersifat organik.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '} */}
                                </CardBody>
                            </Card>
                        </Link>
    
                        <Link to='/beliobat/penyakitkulit' style={{ textDecoration: 'none', color: 'black', width: '30vw', marginBottom: '3vh' }}>
                            <Card  style={{color:'#e85661'}}>
                                <CardImg top style={{ width: '29.89vw', height: '50vh' }} src="https://d1bpj0tv6vfxyp.cloudfront.net/harustahucaraampuhuntukmengobatitineacorporishalodoc.jpg
    
    " alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>PENYAKIT KULIT</CardTitle>
                                    <CardText>
                                        Penyakit kulit adalah kondisi saat lapisan luar tubuh mengalami masalah baik iritasi atau meradang. Kondisi ini bisa menyebabkan kulit gatal, bersisik, perih, hingga memerah.
    
    Biasanya infeksi virus, bakteri, jamur, dan parasit menjadi penyebab penyakit kulit yang paling umum. Panu, kurap, dan kudis termasuk penyakit kulit yang banyak menyerang masyarakat Indonesia.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '} */}
                                </CardBody>
                            </Card>
                        </Link>
                        <Link to='/beliobat/penyakitmata' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                            <Card  style={{color:'#e85661', height:'84vh'}}>
                                <CardImg top style={{ width: '29.90vw', height: '50vh' }} src="https://d1bpj0tv6vfxyp.cloudfront.net/perbedaan-penyakit-kuning-dengan-hepatitis-a-halodoc.png
    " alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>SAKIT MATA</CardTitle>
                                    <CardText>
                                        Penyakit mata adalah gangguan kesehatan yang cukup sering terjadi pada masyarakat. Keluhannya bisa berupa mata merah, gatal, perih, gangguan penglihatan, hingga kebutaan. Dari sekian banyak penyakit mata, ada beberapa penyakit mata yang umum terjadi di Indonesia.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '} */}
                                </CardBody>
                            </Card>
                        </Link>
                        <Link to='/beliobat/asma' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                            <Card  style={{color:'#e85661'}}>
                                <CardImg top style={{ width: '30vw', height: '50vh' }} src="https://klikpdpi.com/images/artikel/645-10-Penyakit-Kronis-yang-Bahayakan-Pasien-Covid-19-Asma-Tak-Termasuk.jpg
    " alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>ASMA</CardTitle>
                                    <CardText>
                                        Asma adalah jenis penyakit jangka panjang atau kronis pada saluran pernapasan yang ditandai dengan peradangan dan penyempitan saluran napas yang menimbulkan sesak atau sulit bernapas. Selain sulit bernapas, penderita asma juga bisa mengalami gejala lain seperti nyeri dada, batuk-batuk, dan mengi. Asma bisa diderita oleh semua golongan usia, baik muda atau tua.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '} */}
                                </CardBody>
                            </Card>
                        </Link>
                        <Link to='/beliobat/antiseptik' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                            <Card  style={{color:'#e85661'}}>
                                <CardImg top style={{ width: '29.85vw', height: '50vh' }} src="https://image.freepik.com/free-vector/flat-design-person-using-hand-sanitizer_23-2148476372.jpg
    
    " alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>ANTISEPTIK</CardTitle>
                                    <CardText>
                                        Antiseptik adalah zat untuk membasmi atau menghambat pertumbuhan kuman seperti virus, bakteri, atau jamur. Menurut Organisasi Kesehatan Dunia (WHO), antiseptik bisa digunakan di jaringan tubuh, tanpa merusak jaringan sehat di sekitarnya. Kegunaan ini membedakan antiseptik dari disinfektan. Jika antiseptik digunakan untuk jaringan tubuh, disinfektan dimanfaatkan untuk membasmi kuman di benda mati.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '} */}
                                </CardBody>
                            </Card>
                        </Link>
                        <Link to='/beliobat/antibiotik' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                            <Card  style={{color:'#e85661', height:'87.5vh'}}>
                                <CardImg top style={{ width: '29.85vw', height: '50vh' }} src="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-medicine-png-image_1699764.jpg
    
    " alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>ANTIBIOTIK</CardTitle>
                                    <CardText>
                                        Antibiotik adalah kelompok obat yang digunakan untuk mengatasi dan mencegah infeksi bakteri. Obat ini bekerja dengan cara membunuh dan menghentikan bakteri berkembang biak di dalam tubuh. Antibiotik tidak dapat digunakan untuk mengatasi infeksi akibat virus, seperti flu.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '} */}
                                </CardBody>
                            </Card>
                        </Link>
                        <Link to='/beliobat/P3K' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>
                            <Card  style={{color:'#e85661', height:'87.5vh'}}>
                                <CardImg top style={{ width: '29.90vw', height: '50vh' }} src="https://www.hcbrands.com/media/catalog/product/cache/4/image/600x600/9df78eab33525d08d6e5fb8d27136e95/f/i/first-aid-kit-with-medical-symbol-engraved-sign-6-x-6.png
    
    " alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>P3K</CardTitle>
                                    <CardText>
                                        Kotak P3K (Pertolongan Pertama Pada Kecelakaan) adalah sarana yang harus disediakan di tiap rumah dan mobil. Sesuai namanya, tujuan dari pengadaan kotak P3K adalah sebagai langkah mengantisipasi dan penanganan dini cedera atau luka.</CardText>
                                    {/* <Button style={{ backgroundColor: 'black' }}>Cek</Button>{' '} */}
                                </CardBody>
                            </Card>
                        </Link>
                    </CardGroup>
                    {/* <Route path={this.props.match.path + '/demam'} component = {Demampage}/> */}
                </div>
    
            );
        }
        else {
            return (
                <div style={{marginLeft:'32vw', marginTop:'20vh', marginBottom:'40vh'}}>
                <Spinner type="grow" color="primary"style={{width:'10vh', height:'5vw'}} />
                <Spinner type="grow" color="secondary" style={{width:'10vh', height:'5vw'}} />
                <Spinner type="grow" color="success"style={{width:'10vh', height:'5vw'}}/>
                <Spinner type="grow" color="danger" style={{width:'10vh', height:'5vw'}}/>
                <Spinner type="grow" color="warning" style={{width:'10vh', height:'5vw'}}/>
                <Spinner type="grow" color="info" style={{width:'10vh', height:'5vw'}}/>
                <Spinner type="grow" color="dark" style={{width:'10vh', height:'5vw'}}/>
                </div>
            )

        }

    }
}

export default Categorypage;





