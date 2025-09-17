//tipe data primitif
console.log("==="+"tipe data primitif"+"===");
let nama = "ali"
console.log(nama);

let umur =20;
console.log(umur);
console.log(nama+": "+umur);

let lulus = true;
let nilaiUjian =null;
let jurusan;
console.log(jurusan);
jurusan ;
console.log(jurusan);
console.log(typeof jurusan);
let kode = Symbol("kode");
let populasi = 3545454545454n;
console.log(typeof populasi);

//tipe data non primitif
console.log("==="+"tipe data non primitif ===");

let buah = ["apel","jeruk","mangga"];
console.log(buah);

let siswa = {
    nama: "ani",
    umur : 17,
    lulus: true
};
console.log(siswa);

function sapa(){
    return "Hallo Dunia";
}
console.log( sapa());