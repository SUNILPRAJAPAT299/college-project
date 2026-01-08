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


/* BOOKING SYSTEM */
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const booking = {
      service: document.getElementById("service").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      address: document.getElementById("address").value
    };

    localStorage.setItem("booking", JSON.stringify(booking));

    document.getElementById("bookingMsg").innerText =
      "✅ Booking Confirmed Successfully!";
  });
}

/* DASHBOARD NAV */
function goDashboard() {
  window.location.href = "dashboard.html";
}

const bookingDetails = document.getElementById("bookingDetails");

if (bookingDetails) {
  const booking = JSON.parse(localStorage.getItem("booking"));

  if (booking) {
    bookingDetails.innerHTML = `
      <h3>Your Booking</h3>
      <p><b>Service:</b> ${booking.service}</p>
      <p><b>Date:</b> ${booking.date}</p>
      <p><b>Time:</b> ${booking.time}</p>
      <p><b>Address:</b> ${booking.address}</p>
    `;
  }
}
