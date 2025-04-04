const authBtns = document.getElementsByClassName("sig-but")
const form = document.getElementById("authForm");
const body = document.getElementById("body");
for (let i = 0; i < authBtns.length ; i++) {
    authBtns[i].addEventListener("click", () => {
        form.classList.add("form-open");
        body.classList.add("form-opened");
    })
}

form.getElementsByClassName("form__inner")[0].addEventListener("click", (e) => {
    e.stopPropagation();
})

form.addEventListener("click", (e) => {
    form.classList.remove("form-open");
    body.classList.remove("form-opened");
})