
let services = new Map();
services.set("Solicitar servicio","../ui/map.html");
services.set("Viajes","../ui/travels.html");



document.getElementById("options").childNodes.forEach(element => element.childNodes.forEach(node => node.addEventListener("click", (e) => 
{
    document.getElementById("principal-container").setAttribute("src", services.get(e.target.textContent));
})));


