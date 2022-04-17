
let table = document.createElement("tr");
document.querySelectorAll(".table thead tr th").forEach((element) => {
  let field = document.createElement("th");
let button = document.createElement("button");
button.classList.add("button");
  switch (element.id) {
    case "id":
      field.textContent = "1";
      break;
    case "driverName":
      field.textContent = "Andy";
      break;
    case "date":
      field.textContent = "222:22";
      break;
    case "price":
      field.textContent = 132;
      break;
      case "route":
          button.textContent = "Ver ruta";
        button.classList.add("open-route");
        field.appendChild(button);
        break;
        case "invoice":
            button.textContent = "Obtener factura";
            button.classList.add("open-invoice");
            field.appendChild(button);            
            break;
  }

  table.appendChild(field);
});

document.querySelector(".table tbody").appendChild(table);

document.querySelectorAll("button.delete").forEach((element) => element.addEventListener("click", closeParent));

function closeParent(e) {
  e.target.parentNode.parentNode.parentNode.classList.remove("is-active");
  sessionStorage.removeItem("origin");
  sessionStorage.removeItem("destination");
  document.getElementById("simple-map").removeAttribute("src");
}

document.querySelectorAll("button.open-route").forEach((element) =>
  element.addEventListener("click", () => {
    document.getElementById("route").classList.add("is-active");
    sessionStorage.setItem("origin", [-87.20191132492509, 14.084703437518472]);
    sessionStorage.setItem(
      "destination",
      [-87.63976730904113, 14.44775885131186]
    );
    document
      .getElementById("simple-map")
      .setAttribute("src", "../ui/simpleMap.html");
  })
);

document.querySelectorAll("button.open-invoice").forEach((element) =>
  element.addEventListener("click", () => {
    document.getElementById("invoice").classList.add("is-active");
  })
);


document.getElementById("get-invoice").addEventListener("click", () => {
  const invoice = document.getElementById("final-invoice");
  html2pdf().from(invoice).set({margin: 10, filename: "facturaDeViaje.pdf",jsPDF: {format: "letter"}}).save();
});

document.getElementById("close-invoice").addEventListener("click", () =>{
  document.getElementById("invoice").classList.remove("is-active");
});