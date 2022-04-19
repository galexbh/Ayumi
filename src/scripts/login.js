var bodyFormData = new FormData();
 let loginForm = document.getElementById("form-login");
 loginForm.addEventListener("submit", (e) =>{
 e.preventDefault();
 });

 document.getElementById("login").addEventListener("click", (e) =>{
let validationCredentials = {"Email": document.getElementById("Email").value, "Password": document.getElementById("Password").value};   
 
axios({
      method: 'POST',
      url: 'https://ayumi-api.herokuapp.com/login/v1',
      data: validationCredentials
   }).then(response =>  {
      sessionStorage.setItem("userData" ,JSON.stringify(response.data[0]));
      location.href='../ui/finalUser.html';
      

   }).catch(() => {
      document.querySelector("div.notification").classList.remove("alert");
      setTimeout(()=>{document.querySelector("div.notification").classList.add("alert"); }, 6000);
   });
 
 });
 
 document.querySelector("div.notification button").addEventListener("click", (e) => {
e.target.parentNode.classList.add("alert");
 });






