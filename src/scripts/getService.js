
let services = new Map();
services.set("Solicitar servicio","../ui/map.html");
services.set("Viajes","../ui/travels.html");
services.set("Modificar perfil","../ui/modifyProfile.html");
services.set("Viaje actual","../ui/driverMap.html");





document.getElementById("options").childNodes.forEach(element => element.childNodes.forEach(node => node.addEventListener("click", (e) => 
{   
    document.querySelectorAll("#options ul li a").forEach(option => option.classList.remove("selected"));
    e.target.classList.add("selected");
    document.getElementById("principal-container").setAttribute("src", services.get(e.target.textContent));
})));




