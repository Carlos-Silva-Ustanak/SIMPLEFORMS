if (sessionStorage.getItem('log') == null) {

    window.location.href = '../html/index.html'

}

/* FUNÇÃO PARA DESLOGAR E REMOVER O TOKEN DE SEGURANÇA DO LOCALSTORAGE */
function logOut() {

    sessionStorage.removeItem('log')
    window.location.href = '../html/index.html'

}

const forms = document.querySelector("#forms");
const tabela = document.querySelector("#tabela");
const btn = document.querySelector("#savebutton");
let idx = forms.idx.value;

let userId = Number(sessionStorage.getItem('logado'));

const session = localStorage.getItem('session')

logadoOuNao();

function logadoOuNao(){

if(session){

    sessionStorage.setItem('log', session)
    userId = session;
}

if(!userId){

window.location.href = "../html/index.html"
return;

}


}


const attLocalStorage = (funcionarios)=>{localStorage.setItem('funcionarios', JSON.stringify(funcionarios))}

const recuperarLocalStorage =()=> JSON.parse(localStorage.getItem('funcionarios') || '[]') 

const salvarFuncionario = (e)=>{
e.preventDefault()

const funcionarioNome = forms.funcio.value;
const cargo = forms.cargo.value;
const proativ = forms.proativ.checked;

if(idx == "novo"){

    const funcionarios = recuperarLocalStorage();
   /*  funcionarios.push({id: funcionarios.length + 1, funcionarioNome, cargo, proativ}) */
   let idp = 0;
   for(const f of funcionarios){

if(f.userId == userId){

    idp =  Number(f.id);

}

   }
    funcionarios.push({id: idp +=1, funcionarioNome, cargo, proativ, userId})
    attLocalStorage(funcionarios);
    preencherTabela();
    forms.reset();    

}else{

let funcionario = {id: idx, funcionarioNome, cargo, proativ ,userId}
editar(id = idx,  funcionario);
preencherTabela();
forms.reset();
idx = "novo";

}




}

const preencherTabela = ()=>{

const funcionarios = recuperarLocalStorage();
tabela.innerHTML = '';

for(const fun of funcionarios){

    if(fun.userId == userId){

tabela.innerHTML += `

<tr>

<th scope="row">${fun.id}</th>
<td style = "text-align:center">${fun.funcionarioNome}</td>
<td style = "text-align:center">${fun.cargo}</td>
<td scope="row" style = "text-align:center">${fun.proativ ? "SIM" : "NÃO"} </td>
<td>

<img type = "button" width = "40" src = "../img/editar-arquivo.png" onclick = "attFuncionarios(${fun.id})">
<img type = "button" width = "40" src = "../img/bin.png" onclick ="removerFuncionario(${fun.id}) ">


</td>

</tr>


` ;}

    
}


}

const removerFuncionario = (id)=> {

const data = recuperarLocalStorage();
const indexFuncionario = data.findIndex((funcionarios) => funcionarios.id === id);
if(indexFuncionario < 0 )return;
data.splice(indexFuncionario, 1);
attLocalStorage(data);
preencherTabela();
}

const attFuncionarios = (id)=>{

     const data = recuperarLocalStorage();
     const indexFuncionario = data.findIndex((funcionarios) => funcionarios.id === id);
     forms.funcio.value = data[indexFuncionario].funcionarioNome;
     forms.cargo.value = data[indexFuncionario].cargo;
     forms.proativ.checked = data[indexFuncionario].proativ;
     idx = id;
}

const editar = (id, funcionario)=>{

    const data = recuperarLocalStorage();
    const indexFuncionario = data.findIndex((funcionario) => funcionario.id === id);
    data[indexFuncionario] = funcionario;
    attLocalStorage(data);


}

forms.addEventListener('submit', salvarFuncionario)
document.addEventListener('DOMContentLoaded', preencherTabela)