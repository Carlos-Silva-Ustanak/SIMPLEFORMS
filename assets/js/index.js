let emailin = document.getElementById("email");
let passin = document.getElementById("pass");
let btn = document.getElementById("BOTAO");
let emaillabel= document.getElementById("emaillabel");
let senhalabel = document.getElementById("senhaLabel");

if(emailin.value && passin.value == ''){

btn.disabled = true;


}

function entrar(e){



let users = []

let usuariosValidos = {


email : '#',
senha : '#'

}

users = JSON.parse(localStorage.getItem('users'))


users.forEach((item) => {
    if(email.value == item.email && pass.value == item.senha){

        usuariosValidos = {

            email: item.email,
            senha: item.senha
           
        }
 
    }
});

if(emailin.value == usuariosValidos.email && passin.value == usuariosValidos.senha){

window.open('../html/logged.html')
let token = Math.random().toString(16).substr(2)
localStorage.setItem('token', token)
}


else{

    Swal.fire({
        title: 'PRENCHA CORRETAMENTE',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })

}

}
