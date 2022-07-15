const pass = document.querySelector("#password");
const cpass = document.querySelector("#cpassword");

let passError = document.createElement("div");
passError.classList.add("redtext");
passError.innerText = "* Passwords do not match";

function checkPass() {
    if (pass.value == "" && cpass.value == "") {
        pass.classList.remove("passwordred");
        pass.classList.remove("passwordgreen");

        cpass.classList.remove("passwordred");
        cpass.classList.remove("passwordgreen");

        document.querySelector(".errors").removeChild(passError);
        document.querySelector("#submitButton").disabled = false;
    } else if (pass.value === cpass.value) {
        pass.classList.add("passwordgreen");
        cpass.classList.add("passwordgreen");

        pass.classList.remove("passwordred");
        cpass.classList.remove("passwordred");

        document.querySelector(".errors").removeChild(passError);
        document.querySelector("#submitButton").disabled = false;
    } else {
        pass.classList.add("passwordred");
        cpass.classList.add("passwordred");

        pass.classList.remove("passwordgreen");
        cpass.classList.remove("passwordgreen");

        document.querySelector(".errors").appendChild(passError);
        document.querySelector("#submitButton").disabled = true;
    }
}

pass.addEventListener("input", () => {
    checkPass();
})

cpass.addEventListener("input", () => {
    checkPass();
})