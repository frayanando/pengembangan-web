const fs = require("fs");

const filePath = "siswa.json";
let daftar = [];

// cek apakah file sudah ada 
if (fs.existsSync(filePath)){
    const content = fs.readFileSync(filePath,"utf8");
    daftar = JSON.parse(content);
}

// Data siswa baru
let siswaBaru1 = {
    nama:"sunflower",
    kelas:"web",
    nilai:[93,97,85],
};
let siswaBaru2 = {
    nama:"Magnolia",
    kelas:"web",
    nilai:[98,77,68],
};

// tambahkan ke array
daftar.push(siswaBaru1);
daftar.push(siswaBaru2);

// simpan kembali ke file
fs.writeFileSync(filePath,JSON.stringifly(daftar,null,2));
console.log("Data siswa berhasil ditambahkan ditambahkan ke siswa.json");