
if(localStorage.getItem('token') == null){


window.location.href = '../html/index.html'


}

function logOut(){

localStorage.removeItem('token')
window.location.href = '../html/index.html'

}
