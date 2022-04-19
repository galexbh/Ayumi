let principalContainer =  document.getElementById("principal-container");
let services = new Map();
services.set("Solicitar servicio","../ui/map.html");
services.set("Viajes","../ui/travels.html");
services.set("Modificar perfil","../ui/modifyProfile.html");
services.set("Viaje actual","../ui/driverMap.html");
services.set("Ver usuarios","../ui/allUsers.html");



document.getElementById("logout").addEventListener("click",  ()=>
{
    sessionStorage.clear();
    location.href = "../ui/login.html";
});


document.getElementById("options").childNodes.forEach(element => element.childNodes.forEach(node => node.addEventListener("click", (e) => 
{   
    if (e.target.id == "logout"){return;}
    document.querySelectorAll("#options ul li a").forEach(option => option.classList.remove("selected"));
    e.target.classList.add("selected");
    principalContainer.setAttribute("src", services.get(e.target.textContent));
})));




