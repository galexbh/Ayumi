window.addEventListener("load", ()=>{
    axios({
        method: 'GET',
        url: 'http://localhost:3000/user/v1',
     }).then(response =>  {
response.data.recordsets[0].forEach(user => {
    let table = document.createElement("tr");

 document.querySelectorAll(".table thead tr th").forEach((element) => {
let field = document.createElement("th");

  switch (element.id) {
    case "id":
      field.textContent = user.UserID;
      break;
    case "rolName":
      field.textContent = user.NameRoles;

      break;
    case "phone":
      field.textContent = user.PhoneNumber;
      console.log("asd" + user.PhoneNumber);

      break;
    case "Email":
      field.textContent = user.Email;
      break;
      case "FirsName":
        field.textContent = user.FirsName;

        break;
        case "MiddleName":
            field.textContent = user.MiddleName;

        break;
        case "LastNamePaternal":
            field.textContent = user.LastNamePaternal;

        break;
        case "LastNameMaternal":
            field.textContent = user.LastNameMaternal;

        break;
        case "age":
            field.textContent = user.Age;

        break;
        case "Sex":
            field.textContent = user.Sex;

        break;
        case "RTN":
            field.textContent = user.RTN;

        break;
        case "date":
            let date = new Date(user.DateBirth);
            field.textContent = date.toISOString().split('T')[0];

        break;
        case "dateUser":
            let dateUser = new Date(user.DateCreated);
            field.textContent = dateUser.toISOString().split('T')[0];

        break;
        default:           break;

    }

    table.appendChild(field);
  });
  document.querySelector(".table tbody").appendChild(table);

        });

     }).catch(() => {
        
     });
});