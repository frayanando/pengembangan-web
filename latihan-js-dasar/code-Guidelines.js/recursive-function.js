
// program untuk menghitung mindur hinnga angka 1
function countDown(number) {
    console.log(number);

// mengurangi nilai sumber
var newNumber = number - 1;

// kondisi jika nomor masih diatas 0
if (newNumber > 0) {
    countDown(newNumber);
 }
}

countDown(4);


function tambah(a,b){
    return a + b
}

console.log(tambah(2,5));

// currying function 
function tambah(a){
    return function(b){
        return a + b
    }
}

console.log(tambah(2)(5));

// simulasi untuk komputasi berat
function getGreeting(){
    var x = 0 
    for(i=0; 1 < 1000000000; i ++){
        x +=i
    }
    return "Selamat pagi"
}
function say (callback,name) {
    var greeting = callback()
    console.log(greeting,name)
}
var users=[' Fuad','Hasan','Ismi','Budi','Azhar']
users.map(function(user){
    return say(getGreeting, user)
});