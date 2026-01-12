// ================== AUTH ==================
// ================== AUTH ==================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", email);
      window.location.href = "index.html";   // ← HOME PAGE
    } else {
      error.innerText = "Invalid email or password";
    }
  });
}


// ================== PROTECT PAGES ==================
const protectedPages = ["dashboard.html", "booking.html"];
const currentPage = window.location.pathname.split("/").pop();

if (protectedPages.includes(currentPage)) {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}

// ================== BOOKING ==================
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
    alert("Booking Successful!");
    window.location.href = "dashboard.html";
  });
}

// ================== DASHBOARD ==================
const bookingBox = document.getElementById("bookingDetails");

if (bookingBox) {
  const booking = JSON.parse(localStorage.getItem("booking"));

  if (booking) {
    bookingBox.innerHTML = `
      <h3>Your Booking</h3>
      <p><b>Service:</b> ${booking.service}</p>
      <p><b>Date:</b> ${booking.date}</p>
      <p><b>Time:</b> ${booking.time}</p>
      <p><b>Address:</b> ${booking.address}</p>
    `;
  } else {
    bookingBox.innerHTML = "<p>No booking yet.</p>";
  }
}

// ================== LOGOUT ==================
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
