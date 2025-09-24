function cekGenapGanjil(angka) {
    //Validasi input harus berupa angka
    if(typeof angka === 'number'){
        console.error("input harus berupa angka");
        return;
    }
    // cek apakah angka genap atau ganjil
    if(angka % 2 === 0) {
        console.log("Bilanga Genap");
    } else{
        console.log("Bilangan Ganjil");
    }
}