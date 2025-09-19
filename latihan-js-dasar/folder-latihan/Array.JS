//Array satu  dimensi
console.log("===Array==");
console.log(" ")

let BilangPrima = [1,2,3,7,11,13,17,23];
console.log(BilangPrima [3]);

//Array Dua Dimensi
console.log("==ArayDua==");
console.log(" ")

let campuran = [
    [10,20,35,43,2],
    [11,12,13,14,15],
    [1,2,3,4,5],
    [1,2,5,4,5],
    [1,2,3,1,5],
    [1,2,3,5,5],

];
console.log(campuran[1][0]);
console.log(campuran[1][4]);
console.log(campuran[2][3]);
console.log(campuran[1][5]);

let buah = [["naga","Nangka","Semangka"],
             ["melon","jeruk","anggur"]];
console.log(buah [1][1])
 
// Array Object
console.log("=arrayObject=");
console.log (" ");

let siswa = [
    {nama: "Ali",nilai : 90},
    {nama: "Budi",nilai : 85},
    {nama: "Cici",nilai : 88},
];
console.log(siswa[0].nama);
console.log(siswa[1].nilai);
console.log(siswa.length);
console.log(" ");

// array for earh
console.log ("array forEach");
console.log(" ")

let angka = [10,20,30];

angka.forEach(function(nilai,index) {
    console.log("index ke-" + index + " : " + nilai);
});

// array map
console.log("=====ArayMap====")
console.log (" ");

let nilai2 = [10,20,30,67];
let nilai3 = nilai2.map(function(elemen,index,array){
    return elemen*elemen;
});
console.log(nilai3);
console.log(" ");
 
// array filter 
console.log("===arryafilter==");
console.log(" ");

let nilai4 =[10,20,30];
let nilai5 = nilai4.filter(function(elemen,index,array){
    return elemen >= 20;
});
console.log(nilai5);
console.log(" ");


console.log("===MengapusDanMenambahkanElemen===");
console.log(" ");

let kelas =[1,2,3,4,5];
kelas.splice(2,0,3);
console.log(kelas);

let kelas1=[1,2,3,4,5];
kelas1.splice(2,2);
console.log(kelas1);

let kelas3 =[1,2,3,4,5,];
let potong = kelas3.splice(1,40);
console.log(potong);
console.log(kelas);




let  urutan = ["a","c","d","e","g","h","f"];

urutan.sort();
urutan.reverse();
console.log(urutan);