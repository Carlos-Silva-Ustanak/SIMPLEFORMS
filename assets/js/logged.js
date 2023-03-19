/* VERIFICAR SE HÁ UM TOKEN NO LOCALSTORAGE E ENTÃO EFETUAR O LOGIN */
if (localStorage.getItem('token') == null) {

    window.location.href = '../html/index.html'

}

/* FUNÇÃO PARA DESLOGAR E REMOVER O TOKEN DE SEGURANÇA DO LOCALSTORAGE */
function logOut() {

    localStorage.removeItem('token')
    window.location.href = '../html/index.html'

}

/* VARIAVEIS DOS INPUTS */
let forms = document.getElementById('forms');
let tabela = document.getElementById('tabela');
let saveButton = document.getElementById('savebutton');
let produtos = document.getElementById('produtos')
let preco = document.getElementById('preco')
let prime = document.getElementById('prime')

/*EVENTO PARA GARANTIR QUE NÃO SEJAM ENVIADOS INPUTS VAZIOS PARA O LOCALSTORAGE */
saveButton.disabled = true;

produtos.addEventListener('keyup', () => {

    if (produtos.value == '' || preco.value == '') {

        saveButton.disabled = true;

    }

    else {

        saveButton.disabled = false;

    }

}

)

/*EVENTO PARA GARANTIR QUE NÃO SEJAM ENVIADOS INPUTS VAZIOS PARA O LOCALSTORAGE */
preco.addEventListener('keyup', () => {

    if (produtos.value == '' || preco.value == '') {

        saveButton.disabled = true;

    }

    else {

        saveButton.disabled = false;

    }

}

)


/* SALVAMENTO DOS VALORES DOS INPUTS NO LOCALSTORAGE */
saveButton.addEventListener('click', (e) => {

e.preventDefault();

    let products = JSON.parse(localStorage.getItem('produtos') || '[]')

    let produ = {

        id: products.length + 1,
        pro: produtos.value,
        price: preco.value,
        pri: prime.checked

    }

    products.push(produ);
    localStorage.setItem('produtos', JSON.stringify(products))
    forms.reset();
    attTable();

})


/* ATUALIZAÇÃO DA TABELA */
let attTable = () => {

    let products = JSON.parse(localStorage.getItem('produtos') || '[]')

    tabela.innerHTML = '';

    for (let produtos of products) {

        tabela.innerHTML += `

            <tr>
            
                <th scope = "row">${produtos.id}</th>
                <td style = "text-align: center">${produtos.pro}</td>
                <td style = "text-align: center">R$${produtos.price}</td>
                <td style = "text-align: center">${produtos.pri ? "sim" : "não"}</td>
            
            </tr>

`;

    }

}

/* SALVAR CONTEÚDO ATUALIZADO NA TABELA */
document.addEventListener("DOMContentLoaded", attTable);