import React, {useState} from 'react'

const JumlahPeng = () => {
    const [d, x] = useState(0)
    const h = () => {
        x((j) => j + 1)
    }

    const s = () => {
        if(d > 1) {
            
            x((w) => w -1)
        }
    }

    const [u, sp] = useState(1)
    const hp = () => {
        sp((p) => p + 1)
    }

    const hkp = () => {
        if(u > 1) {
            sp((pa) => pa - 1)
        }
    }

    const [person, setPerson] = useState({
        nama: "Fahmi",
        alamat: "Madiun",
        umur: 26
    })

    const gantiPerson = () => {
        setPerson({
            ...person,
            umur: 22
        })
    }

    const [q, l] = useState(0)
    const g = () => {
        l(q + 1)
    }

    const k = () => {
        if(q > 1) {
            l((m) => m - 1)
        }
    }

    const [rx, srx] = useState({
        na: "Khaliz",
        tp: "36",
        hg: "2.3M"
    })

    const UdRu = () => {
        srx({
            ...rx,
            hg: "3.4M"
        })
    }
    return (
        <div>
            <h1>Functional Component</h1>
            <h3>Jumlah Pengunjung: {d}</h3>
            <h3>Jumlah Penumpang: {u}</h3>
            <button onClick={h}>Tambah Pengunjung</button>
            <button onClick={s}>Kurang Pengunjung</button>
            <br />
            <button onClick={hp}>Tambah Penumpang</button>
            <button onClick={hkp}>Kurangi Penumpang</button>
            <hr />

            <hr />
            <h3>Nama: {person.nama}</h3>
            <h3>Alamat: {person.alamat}</h3>
            <h3>Umur: {person.umur}</h3>
            <button onClick={gantiPerson}>Update</button>
            <h1>Judul Baru</h1>
            <h3>Jumlah Uang: {q}</h3>
            <button onClick={g}>Tambah Uang</button>
            <button onClick={k}>Kurang Uang</button>
            <hr />
            <hr />
            <br />
            <h4>Nama Cluster : {rx.na}</h4>
            <h4>Type Cluster : {rx.tp}</h4>
            <h4>Harga Cluster : {rx.hg}</h4>
            <button onClick={UdRu}>Update Harga</button>
        </div>
    )
}

export default JumlahPeng
