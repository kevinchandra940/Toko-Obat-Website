import React from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, CardImg, CardText, ButtonGroup, Spinner } from 'reactstrap'

class Stockpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <div style={{ marginBottom: '20vh' }}>
          <h1 style={{ marginLeft: '44vw', color: '#e85661', marginBottom: '5vh' }}>Stok Barang</h1>
          <CardText style={{display:'flex'}}>
              <h2 style={{ marginLeft: '18vw', color: '#e85661' }}>Obat Jadi</h2>
              <h2 style={{ marginLeft: '42vw', color: '#e85661' }}>Obat Racik</h2>
          </CardText>
          <div style={{ display: 'flex' }}>
              <Table style={{ color: '#e85661', width: '45vw', marginLeft: '3vw', marginTop: '1vh' }}>
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>
                              <h4>Nama Obat</h4>
                          </th>
                          <th>
                              <h4>Kategori</h4>
                          </th>
                          <th>
                              <h4>Tanggal</h4>
                          </th>
                          <th>
                              <h4>Status</h4>
                          </th>
                          <th>
                              <h4>Aksi</h4>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>
                              <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661' }}>Tambah</Button>
                              <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661' }}>Hapus</Button>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          <td>@fat</td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                      </tr>
                  </tbody>
              </Table>
              <Table style={{ color: '#e85661', width: '45vw', marginLeft: '3vw', marginTop: '1vh' }}>
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>
                              <h4>Nama Obat</h4>
                          </th>
                          <th>
                              <h4>Kategori</h4>
                          </th>
                          <th>
                              <h4>Tanggal</h4>
                          </th>
                          <th>
                              <h4>Status</h4>
                          </th>
                          <th>
                              <h4>Aksi</h4>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>
                              <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661' }}>Tambah</Button>
                              <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661' }}>Hapus</Button>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          <td>@fat</td>
                      </tr>
                      <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                      </tr>
                  </tbody>
              </Table>
          </div>
          <ButtonGroup style={{}}>
          <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661', marginLeft: '37vw', width:'10vw' }}>Tambah Stock</Button>
          <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661', marginLeft: '38vw', width:'10vw' }}>Tambah Stock</Button>
          </ButtonGroup>
      </div>
         );
    }
}
 
export default Stockpage;