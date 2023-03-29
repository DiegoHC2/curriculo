let a = localStorage.getItem('users')
let User = document.querySelector('#Counter')
let b = JSON.parse(a)
let FormU = document.querySelector('#FormUsers')

if(b == null){

} else {
    let c = b.length
    for(i = 0; i<c; i++){
        let u = document.createElement("tr") 
        let UC = i+1
        u.innerHTML = '<td>'+b[i].Cpf + '</td>' + 
        '<td>' + b[i].tel + '</td>' + 
        '<td>' + b[i].Email + '</td>'
        FormU.appendChild(u)    
    }   
}









function reload(){
let a = localStorage.getItem('users')
let User = document.querySelector('#Counter')
let b = JSON.parse(a)
if(b != null){
    let c = b.length
}
let FormU = document.querySelector('#FormUsers')



if (a == null){
    User.textContent = 'USERS' + ' ' + '0'

} else {  
let UserControl = b.length 
User.textContent = 'USERS' + ' ' + UserControl
}
}



setInterval('reload()', 2000);