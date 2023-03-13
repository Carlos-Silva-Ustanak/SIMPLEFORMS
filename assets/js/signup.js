let pass = document.getElementById("pass");
let Cpass = document.getElementById("Cpass");
let btn = document.getElementById("BOTAO");
let emaillabel= document.getElementById("emaillabel");
let Cpasslabel = document.getElementById("CpassLabel");


Cpass.addEventListener('keyup', () =>{

if(pass.value != Cpass.value ){

Cpasslabel.innerHTML = "senhas não compativeis"
btn.disabled = true;

}else{

    btn.disabled = false;
    Cpasslabel.innerHTML = "SENHA";

}

})