// ================== LOGIN ==================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", email);
      window.location.href = "index.html";
    } else {
      error.innerText = "Invalid email or password";
    }
  });
}

// ================== PAGE PROTECTION ==================
const page = location.pathname.split("/").pop();

if ((page === "booking.html" || page === "dashboard.html") && !localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

// ================== BOOKING ==================
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const booking = {
      service: service.value,
      date: date.value,
      time: time.value,
      address: address.value
    };

    localStorage.setItem("booking", JSON.stringify(booking));
    alert("Booking confirmed!");
    window.location.href = "dashboard.html";
  });
}

// ================== DASHBOARD ==================
const bookingBox = document.getElementById("bookingDetails");

if (bookingBox) {
  const booking = JSON.parse(localStorage.getItem("booking"));

  if (booking) {
    bookingBox.innerHTML = `
      <div class="card">
        <h3>Your Booking</h3>
        <p><b>Service:</b> ${booking.service}</p>
        <p><b>Date:</b> ${booking.date}</p>
        <p><b>Time:</b> ${booking.time}</p>
        <p><b>Address:</b> ${booking.address}</p>
      </div>
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
