// Fungsi untuk menghitung luas persegi
function hitungLuas(sisi){
    return sisi * sisi;
}

// fungsi untuk menghitung keliling persegi
function hitungkeliling(sisi){
    return 4 * sisi;
}

// fungsi utama untuk menampilkan hasil
function tampilkanPersegi(sisi){
    console.log("=====Persegi=====");
    console.log(" sisi    :", sisi);
    console.log(" Luas Persegi :",hitungLuas(sisi));
    console.log("keliling Persegi :", hitungkeliling(sisi));
    console.log("========================================\n");
}

//Penamggilan fungsi
tampilkanPersegi(7);
tampilkanPersegi(23)