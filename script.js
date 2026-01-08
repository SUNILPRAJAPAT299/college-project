/* NAVBAR TOGGLE */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* LOGIN LOGIC */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("user", email);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("errorMsg").innerText =
        "Invalid Email or Password";
    }
  });
}

/* DASHBOARD */
const userEmail = document.getElementById("userEmail");
if (userEmail) {
  const user = localStorage.getItem("user");
  if (!user) {
    window.location.href = "login.html";
  } else {
    userEmail.innerText = "Logged in as: " + user;
  }
}

/* LOGOUT */
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
