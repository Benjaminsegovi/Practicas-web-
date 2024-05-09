var Boton1 = document.getElementById("bt1");

Boton1.addEventListener("click", function() {
this.remove();

})

console.log(Boton1)


document.getElementById("sec").addEventListener("change", function(){

    eligirMascota(this.value);

});

function eligirMascota(mascota){
alert("¡has elegio " + mascota + "!")

}

const Btn1 = document.getElementById("Boton1")
const Contador1 = document.querySelector("#contador")

console.log(Btn1)
console.log(Contador1)

let likes1 = 0;

Btn1.addEventListener("click", function(){

    likes1++;
    Contador1.textContent = likes1;
})

const Btn2 = document.getElementById("Boton2")
const Contador2 = document.querySelector("#contador2")

console.log(Btn2)
console.log(Contador2)

let likes2 = 0;

Btn2.addEventListener("click", function(){

    likes2++;
    Contador2.textContent = likes2;
})

const Btn3 = document.getElementById("Boton3")
const Contador3 = document.querySelector("#contador3")

console.log(Btn3)
console.log(Contador3)

let likes3 = 0;

Btn3.addEventListener("click", function(){

    likes3++;
    Contador3.textContent = likes3;
})