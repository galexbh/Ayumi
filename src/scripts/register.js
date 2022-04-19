let requiredElements = document.querySelectorAll(".required");

let password = document.getElementById("password");
let passwordRepeat = document.getElementById("passwordRepeat");
let alert = document.querySelector("div.notification");
document.getElementById("form-register").addEventListener("submit", (e) =>{
        
        e.preventDefault();
        let valueNulls = false;
        if (password.value != passwordRepeat.value){
                document.querySelector("div.notification p").textContent  = "Las contraseñas deben ser iguales";
        alert.classList.remove("alert");
                return;
        }
        document.querySelector("div.notification p").textContent  = "Los siguientes campos no pueden estar vacíos";

        if (document.getElementById("sex").options[document.getElementById("sex").selectedIndex].text == "Seleccione una opción"){
                document.getElementById("sex").style.border = "1px solid red";
                valueNulls= true;

           }
        requiredElements.forEach(element => 
                {
                        if (element.value.length == 0){
                                valueNulls = true;
                                element.classList.add("nullValue");
                                alert.classList.remove("alert");
                                setTimeout(()=>{alert.classList.add("alert"); }, 7000);
                        }
                });
               if (valueNulls){ return;}
        let userDates = {"FirsName": document.getElementById("firstName").value, 
"MiddleName": document.getElementById("middleName").value
, "LastNamePaternal": document.getElementById("LastNamePaternal").value, 
"LastNameMaternal": document.getElementById("lastNameMaternal").value, 
"Email": document.getElementById("email").value, "PhoneNumber": document.getElementById("phoneNumber").value, 
"Sex": document.getElementById("sex").options[document.getElementById("sex").selectedIndex].text, "RTN": document.getElementById("rtn").value,
"DateBirth": document.getElementById("date").value, "Password": document.getElementById("password").value};
console.log(userDates);

axios({
        method: 'POST',
        url: 'https://ayumi-api.herokuapp.com/user/register/v1',
        data: userDates
     }).then(response =>  {
       
  
        location.href='../ui/login.html';
        
  
     }).catch(() => {

     });

        
});

requiredElements.forEach(element => element.addEventListener("click", (e)=>
{
e.target.classList.remove("nullValue");
}));
document.querySelector("div.notification button").addEventListener("click", (e) => {
        e.target.parentNode.classList.add("alert");
});
document.getElementById("sex").addEventListener("click", (e)=>{
e.target.style.border = "1px solid lightgray";
});

password.addEventListener("input",()=>{
        if (password.value != passwordRepeat.value){
                passwordRepeat.classList.add("nullValue");
        }

});

passwordRepeat.addEventListener("input",()=>{
        if (passwordRepeat.value != password.value){
                passwordRepeat.classList.remove("nullValue");
        }

});