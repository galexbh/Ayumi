window.addEventListener("load", ()=>{
    let userData  = JSON.parse(sessionStorage.getItem("userData"));

    document.getElementById("email").value = userData.Email;
    document.getElementById("rtn").value = userData.RTN;
    document.getElementById("rtn").value = userData.RTN;

    document.getElementById("phoneNumber").value = userData.PhoneNumber;


});