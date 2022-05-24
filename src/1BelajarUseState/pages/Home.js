import React, { Component } from 'react'
import Hitung from '../components/Hitung'

export default class Home extends Component {
  render() {
    return (
      <div style={{ padding: "40px"}}>
          <header style={{ marginBottom : "50px" }}>
              <h1>Aplikasi Pengunjung Mall Matahari</h1>
              <hr/>
          </header>

          <Hitung />

          <footer style={{ marginTop : "50px" }} >
              <hr/>
              <p>Created By Fathur Rohmna</p>
          </footer>
      </div>
    )
  }
}
