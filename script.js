// ================== AUTH GUARD ==================
const protectedPages = ["booking.html", "dashboard.html"];
const page = location.pathname.split("/").pop();

if (protectedPages.includes(page)) {
  if (!localStorage.getItem("loggedIn")) {
    localStorage.setItem("redirectAfterLogin", page);
    window.location.href = "login.html";
  }
}

// ================== LOGIN ==================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", email);

      const redirect = localStorage.getItem("redirectAfterLogin");
      localStorage.removeItem("redirectAfterLogin");

      window.location.href = redirect ? redirect : "index.html";
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
// ================== BOOKING ==================
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = localStorage.getItem("currentUser");

    const newBooking = {
      user: email,
      service: service.value,
      date: date.value,
      time: time.value,
      address: address.value,
      status: "Pending"
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking confirmed!");
    window.location.href = "dashboard.html";
  });
}


// ================== DASHBOARD ==================
const bookingBox = document.getElementById("bookingDetails");

if (bookingBox) {
  const email = localStorage.getItem("currentUser");
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const userBookings = bookings.filter(b => b.user === email);

  if (userBookings.length === 0) {
    bookingBox.innerHTML = "<p>No bookings yet.</p>";
  } else {
    bookingBox.innerHTML = userBookings.map((b, i) => `
      <div class="card" style="margin-bottom:15px;">
        <h3>Order #${i + 1}</h3>
        <p><b>Service:</b> ${b.service}</p>
        <p><b>Date:</b> ${b.date}</p>
        <p><b>Time:</b> ${b.time}</p>
        <p><b>Status:</b> ${b.status}</p>
      </div>
    `).join("");
  }
}

// ================== LOGOUT ==================
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}


// ================== HEADER LOGIN STATE ==================
const nav = document.getElementById("navLinks");

if (nav) {
  if (localStorage.getItem("loggedIn")) {
    const email = localStorage.getItem("userEmail");
    nav.innerHTML = `
      <span style="color:white;margin-right:15px;">Hi, ${email}</span>
      <a href="dashboard.html">My Bookings</a>
      <a href="booking.html">Book Service</a>
      <a href="#" onclick="logout()">Logout</a>
    `;
  } else {
    nav.innerHTML = `
      <a href="login.html">Login</a>
      <a href="booking.html">Book Now</a>
    `;
  }
}

// ================== INIT USERS ==================
if (!localStorage.getItem("users")) {
  localStorage.setItem(
    "users",
    JSON.stringify([
      { email: "admin@gmail.com", password: "12345", avatar: "🧑‍🔧" },
      { email: "user@gmail.com", password: "12345", avatar: "👩" }
    ])
  );
}

