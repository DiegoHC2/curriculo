
function Button(){
    
}

// Mascara Telefone
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  };
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  };

  // ---                                   ---//

function CadastrarUsuario(){
  let Cpf = document.querySelector('#NameBox').value;
  let Tel = document.querySelector('#PhoneBox').value;
  let Email = document.querySelector('#EmailBox').value;
  let NameL = Cpf.length ;
  let TelL = Tel.length;
  let EmailL = Email.length;
 
  let GetUsers = localStorage.getItem('users')
  var arr = []



    if(GetUsers != null){
        var arr = JSON.parse(GetUsers)
                        } 
                        
    if(NameL && TelL && EmailL > 0 ) {
        
      let user = {
        Cpf: Cpf,
        Email: Email,
        tel: Tel
        }
        arr.push(user)
        localStorage.setItem('users', JSON.stringify(arr))
        window.alert('Usuario cadastrado !')
        
        var limparN = document.querySelector('#NameBox').value = ""
        var limparT = document.querySelector('#PhoneBox').value = ""
        var limparE = document.querySelector('#EmailBox').value = ""

    } else {
      console.log('digite algo');
        var limparN = document.querySelector('#NameBox').value = "";
        var limparT = document.querySelector('#PhoneBox').value = "";
        var limparE = document.querySelector('#EmailBox').value = "";

    }
  

}