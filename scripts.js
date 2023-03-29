let a = localStorage.getItem('users')
let b = JSON.parse(a)

let c = b.length

for(i = 0; i<c; i++){

    console.log(b[i])

    

}