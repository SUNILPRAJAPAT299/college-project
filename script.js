/* LOGIN */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = email.value;
    const password = password.value;

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("user", email);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").innerText = "Invalid credentials";
    }
  });
}

/* BOOKING */
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    const booking = {
      service: service.value,
      date: date.value,
      time: time.value,
      address: address.value
    };
    localStorage.setItem("booking", JSON.stringify(booking));
    alert("Booking Confirmed!");
    window.location.href = "dashboard.html";
  });
}

/* DASHBOARD */
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
  }
}

/* LOGOUT */
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
