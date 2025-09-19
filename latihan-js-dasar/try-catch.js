try{
    let hasil = x + 10; // x belum didefinidkan 
    console.log("Hasil:" , hasil);
} 
catch(error){
    console.error(error.message);
}