import React, { Component } from 'react'

export default class Jumlah extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             jumlah: 0
        }
    }
    
    render() {
        const {jumlah} = this.state
        return (
            <div>
                <h3>Jumlah Pengunjung : {jumlah}</h3>
                <button onClick={() => this.setState({jumlah: jumlah + 1})}>Tambah Pengunjung</button>
            </div>
        )
    }
}
