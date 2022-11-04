const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    //req merupakan variabel yg berisi data request
        //req merupakan variabel yang berisi data response dari end-point

        // membuat objek yang berisi data yang akan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    //memberikan response dengan format json yang berisi objek diatas
    res.json(response)
})
    //menjalankan server pada port 8000
    app.listen(8000,() => {
        console.log("Server run on port 8000");
    }
)
//endpoint "/profil/nama/umur" dengan methode get
app.get("/profil/:name/:age",(req, res) => {

    //:name dan : age -> diberikan titik dua didepan menunjukkan "name" dan "age"
    //bersifat dinamis yang dapat diganti nilainya saat melakukan request
    //menampung data yang dikirimkan
    let name = req.params.name  //mengambil nilaai parameter name //value nya di masukkan di sebelah nama end point
    let age = req.params.age   // mengambil nilai pada parameter age

    //membuat objek yang berisi data yang akan dijadikan response
    //response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }
    //memberikan response dengan format json yang berisi objek di atas
    res.json(response)
})
app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})