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
    //menjalankan server pada port 8000
  
//nomor 1
app.post("/kerucut", (req,res) => {
    let jari = Number(req.body.jari) //body -> kita perlu memasukkan value di body berupa key dan juga value
    let tinggi = Number(req.body.tinggi)
    let sisi = Number(req.body.sisi)
    let volume = 1/3 * 22/7 * jari * jari * tinggi
    let luas = 22/7 * jari * (jari + sisi)

    let response = {
        alas: alas,
        tinggi: tinggi,
        sisi: sisi,
        volume: volume,
        luas: luas
    }
    res.json(response)
})
app.post("/bola", (req,res) => {
    let jari = Number(req.body.jari) //body -> kita perlu memasukkan value di body berupa key dan juga value
    let volume = 4/3 * 22/7 * jari * jari * jari
    let luas = 4 * 22/7 * jari * jari

    let response = {
        jari: jari,
        volume: volume,
        luas: luas
    }
    res.json(response)
})
app.post("/tabung", (req,res) => {
    let jari = Number(req.body.jari) //body -> kita perlu memasukkan value di body berupa key dan juga value
    let tinggi = Number(req.body.tinggi)
    let volume = 22/7 * jari * jari * tinggi
    let luas = 2 * 22/7 * jari * (jari+tinggi)

    let response = {
        jari: jari,
        tinggi: tinggi,
        volume: volume, 
        luas: luas
    }
    res.json(response)
})
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi) //body -> kita perlu memasukkan value di body berupa key dan juga value
    let volume = sisi * sisi * sisi
    let luas = 6 * sisi * sisi

    let response = {
        sisi: sisi,
        volume: volume, 
        luas: luas
    }
    res.json(response)
})

//nomor 2
//celcius
app.get("/celcius/:angka",(req, res) => {
    let angka = Number (req.params.angka)  
    let reamur = 4/5 * angka
    let kelvin = angka + 273
    let fahrenheit = (9/5) * angka + 32 

    let response = {
        celcius: angka,
        result: {
        reamur: reamur,
        kelvin: kelvin,
        fahrenheit: fahrenheit
    }
}
    //memberikan response dengan format json yang berisi objek di atas
    res.json(response)
})
//reamur
app.get("/reamur/:angka",(req, res) => {
    let angka = Number (req.params.angka)  
    let celcius = 5/4 * angka
    let kelvin = 5/4 * angka + 273
    let fahrenheit = (9/4 * angka) + 32

    let response = {
        result: {
        reamur: angka,
        celcius: celcius,
        kelvin: kelvin,
        fahrenheit: fahrenheit
    }
}
    //memberikan response dengan format json yang berisi objek di atas
    res.json(response)
})
//fahrenheit 
app.get("/fahrenheit/:angka",(req, res) => {
    let angka = Number (req.params.angka)  
    let celcius = 5/9 * (angka - 32)
    let reamur = 4/9 * (angka - 32)
    let kelvin = 5/9 * (angka - 32) + 273

    let response = {
        fahrenheit: angka,
        result: {
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
    }
}
    //memberikan response dengan format json yang berisi objek di atas
    res.json(response)
})
//kelvin
app.get("/kelvin/:angka",(req, res) => {
    let angka = Number (req.params.angka)  
    let celcius = angka - 273
    let reamur = 4/5 * (angka - 273)
    let fahrenheit = 9/5 * (angka - 273) + 32

    let response = {
        kelvin: angka,
        result: {
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit
    }
}
    //memberikan response dengan format json yang berisi objek di atas
    res.json(response)
})
//nomor 3
//desimal
app.post("/desimal",(req, res)=>{
    let desimal = Number(req.body.desimal)
    let biner = desimal.toString(2)
    let oktal = desimal.toString(8)
    let hexadesimal = desimal.toString(16).toUpperCase()
    let response = {
        oktal: oktal,
        result: {
            desimal: desimal,
            biner: biner,
            hexadesimal: hexadesimal
        }
    }
    res.json(response)
})
//biner
app.post("/biner",(req, res)=>{
        let biner = Number(req.body.biner)
        let desimal = parseInt(biner, 2)
        let oktal = parseInt(biner, 2).toString(8)
        let hexadesimal = parseInt(biner, 2).toString(16).toUpperCase()
        let response = {
            biner: biner,
            result: {
                desimal: desimal,
                oktal: oktal,
                hexadesimal: hexadesimal
            }
        }
        res.json(response)
})
//oktal 
app.post("/oktal", (req,res) => {
    let octal = Number(req.body.octal)
    let desimal = parseInt(octal, 8).toString(10)
    let biner = parseInt(octal, 8).toString(2)
    let hexadesimal = parseInt(octal, 8).toString(16).toUpperCase()
    let response = {
        oktal: octal,
        result: {
            desimal: desimal,
            biner: biner,
            hexadesimal: hexadesimal
        }
    }
    res.json(response)
})
//hexadesimal
app.post("/hexadesimal", (req,res) => {
    let hexadecimal = Number(req.body.hexadecimal)
    let desimal = parseInt(hexadecimal, 16).toString(10)
    let biner = parseInt(hexadecimal, 16).toString(2)
    let oktal = parseInt(hexadecimal, 16).toString(8)
    let response = {
        hexadesimal: hexadecimal,
        result: {
            desimal: desimal,
            biner: biner,
            oktal: oktal
        }
    }
    res.json(response)
})
app.listen(8080,() => {
    console.log("Server run on port 8080");
})
app.post("/bmi", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / (tinggi * tinggi)
    let status = ''

    //objek yang berisi data yang akan diresponse
    if (bmi < 18.5){
        status = "Kekurangan berat badan"
    }
    else if (bmi >= 18.5 && bmi < 25){
        status = 'Normal'
    }
    else if (bmi >= 25 && bmi < 30){
        status = 'Berat badan berlebih'
    }
    else if (bmi >= 30){
        status = "Kegemukan (obesitas)"
    }
    let response = {
        berat: berat,
        tinggi: tinggi,
        bmi: bmi,
        status: status
    }
    res.json(response)
})