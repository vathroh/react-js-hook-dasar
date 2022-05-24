import React, { useState } from 'react'

const Hitung = () => {

    const [jumlah, setJumlah] = useState(0);

  return (
    <div>
        <h3>Jumlah Pengunjung: {jumlah} Pengunjung</h3>
        <button onClick={ () => setJumlah(jumlah+1) }>Tambah</button>
    </div>
  )
}

export default Hitung




// import React, { Component } from 'react'

// export default class Hitung extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          jumlah: 0
//       }
//     }
//   render() {
//       const {jumlah} = this.state
//     return (
//       <div>
//           <h3>Jumlah Pengunjung: {jumlah} Pengunjung</h3>
//           <button onClick={ () => this.setState({jumlah: jumlah+1 }) }>Tambah</button>
//       </div>
//     )
//   }
// }
