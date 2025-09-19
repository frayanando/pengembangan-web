const fs = require("fs");

//Membuat & membaca file JSON
// otomatis membuka
const teks = fs.readfilesync("data.json","utf-8");
const data = JSON.parse(teks);

console.log("isi Awal : ",  data);

//Menulis data baru ke array
data.push({ id: 4,nama : "jeremy",usia:28});

//Menyimpan (menulis ulang)
//otomatis menutup 
fs.writeFileSync("data.json",JSON.stringify(data,null,2));

console.log("Data berhasil ditambahkan dan disimpan ulang");
console.log("Isi Akhir :" ,data);