const authBtns = document.getElementsByClassName("sig-but")
const form = document.getElementById("authForm");
const body = document.getElementById("body");

const closeAuthModal = () => {
    form.classList.remove("form-open");
    body.classList.remove("form-opened");
}
const openAuthModal = () => {
    form.classList.add("form-open");
    body.classList.add("form-opened");
}
for (let i = 0; i < authBtns.length ; i++) {
    authBtns[i].addEventListener("click", () => {
        openAuthModal();
    })
}

form.getElementsByClassName("form__inner")[0].addEventListener("click", (e) => {
    e.stopPropagation();
})



form.addEventListener("click", () => {
    closeAuthModal();
})

form.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
        return;
    }
    console.log({email, password});
    closeAuthModal();
})