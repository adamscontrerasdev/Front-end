const ingresar = document.querySelector(".modal-btn-i");
const mail = document.getElementById('inputEmail');
const pass = document.getElementById('inputPassword6');

function ir() {
    ingresar.addEventListener('click', () => {
        if (mail.value == "a" && pass.value == "2") {

            location.assign("/dashboard");
        } else {
            alert("te jodiste loco")
        }
    })
};
