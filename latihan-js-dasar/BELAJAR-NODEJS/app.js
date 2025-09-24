/**
 * Aplikasi Node.js paling sederhana
 * Memanggil fungsi dan menampilkan nama aplikasi 
 */

const namaApp = require('./config/namaApp');
const tampikanSalam = require('./fungsi/tampilSalam');

//Menampilkan nama aplikasi ke terminal
console.log("Aplikasi:",namaApp);

// Menampilkan salam Ke pengguna
tampikanSalam();