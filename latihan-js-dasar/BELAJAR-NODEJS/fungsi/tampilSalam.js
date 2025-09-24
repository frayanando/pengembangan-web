/**
 * Fungsi untuk menamilkan salam ke terminal
 * Author : Instruktur TIK
 * version: 1.0
 * Date : 8 Juli 2025
 */

function tampikanSalam() {
    //Menyimpan pesan salam
    const pesan = " Halo! selamat datang di dunia Node.js";

    //Menampilkan pesan ke  terminal 
    console.log(pesan);
}

// Mengekspor fungsi agar bisa digunakan di file lain
module.exports = tampikanSalam;