function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function(event) {
    event.preventDefault();

   let nombre = document.getElementById("nombre").value.trim();
   let apellido = document.getElementById("apellido").value.trim();
   let email = document.getElementById("email").value.trim();
   let password1 = document.getElementById("password1").value;
   let password2 = document.getElementById("password2").value;
   let terminos = document.getElementById("terminos").checked;


if (!nombre || !apellido || !email || !password1 || !password2) {
   showAlertError();
   return;
}

if (password1.length < 6) {
    showAlertError();
    return;
}

if (password1 !== password2){
    showAlertError();
    return;
}

 if (!terminos) {
    showAlertError();
    return;
}

showAlertSuccess();
});

