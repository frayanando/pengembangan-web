let input = "lima" // ubah menjadi 5 agar berhasil

try {
    let angka = perseint( input);
    if (isNaN(angka)) {
        throw new Error("input harus berupa angka!");
     }
    
     console.log("kuadrat:",angka * angka);
} catch (e){
    console.error(" Terjadi kesalahan:",e.message);
}