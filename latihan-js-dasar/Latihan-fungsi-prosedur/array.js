//Array awal berisi nilai siswa
let nilai = [75,88,92];

console.log ("1.Nilai awal:");
nilai.forEach((n,i) => {
    console.log('Siswa ${i +1} : ${n}');
});
console.log(" ");

//Menambahkan nilai baru  mennggunakan push
nilai.push(60);
console.log("2.Setelah menghapus nilai 60 terakhir (pop):",nilaiTerakhir);
console.log("Nilai sekarang:", nilai);
console.log("");

//Menggunakan map untuk menambahkan Bonus 5 poin ke semua nilai
let nilaiBonus=nilai.map ((n) => n + 5);
console.log("4.Nilai setelah ditambahkan bonus 5 poin (map):");
console.log(NilaiBonus);
console("");

// Menampilkan nilai bonus dengan forEarch
console.log("5.cetak nilai akhir siswa:");
nilaiBonus.forEach((n,i) => {
    console.log('Siswaa $ {i + 1} : ${n}');
});