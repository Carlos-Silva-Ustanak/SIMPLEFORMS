let pass = document.getElementById("pass");
let Cpass = document.getElementById("Cpass");
let btn = document.getElementById("BOTAO");
let emaillabel= document.getElementById("emaillabel");
let Cpasslabel = document.getElementById("CpassLabel");
let senhalabel = document.getElementById("senhaLabel")
let email = document.getElementById("email");
btn.disabled = true;

Cpass.addEventListener('keyup', () =>{

if(pass.value != Cpass.value){

Cpasslabel.innerHTML = "SENHAS NÃO COMPATIVEIS"
btn.disabled = true;
Cpasslabel.setAttribute('style', 'color: red')

}

else if(Cpass.value == pass.value){

    btn.disabled = false;
    Cpasslabel.innerHTML = "SENHA";
    Cpasslabel.setAttribute('style', 'color: black')

}

})

pass.addEventListener('keyup', () =>{

    if(Cpass.value == '' || pass.value == '' || email.value == ''){

        btn.disabled = true;
        Cpasslabel.innerHTML = "SENHA"
        Cpasslabel.setAttribute('style', 'color: black')
        
    }
    
    else{
    
        btn.disabled = false;
        Cpasslabel.innerHTML = "SENHA";
        Cpasslabel.setAttribute('style', 'color: black')
    
    }
    
    })

    btn.addEventListener('click', ()=>{

        location.href = '//youtube.com'
     

        let users = JSON.parse(localStorage.getItem('users') || '[]')

        users.push({
            email : email.value,
            senha : pass.value
        })

        localStorage.setItem('users', JSON.stringify(users))
     
        
          
    })

   