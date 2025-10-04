// -----------------------------
// Popup message handling & form validation
// -----------------------------
const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop default submission first

  const firstName = contactForm.firstName.value.trim();
  const lastName = contactForm.lastName.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!firstName || !lastName || !email || !message) {
    showPopup("Hold up! Make sure you fill in every field before sending.");
    return;
  }

  // All fields filled → show success popup
  showPopup("Message sent successfully! 🎉", true);

  // Actually submit the form to Formspree
  contactForm.submit();
});

// Function to show popup
function showPopup(msg, success = false) {
  popup.textContent = msg;
  popup.style.display = "block";
  popup.style.borderColor = success ? "#00FF00" : "#FF0000"; // green if success
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

// -----------------------------
// Twinkling stars background
// -----------------------------
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const stars = [];

// Create 100 stars
for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2,
    alpha: Math.random(),
    delta: 0.02 + Math.random() * 0.02,
  });
}

// Animate stars
function animateStars() {
  ctx.clearRect(0, 0, width, height);
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,0,0,${star.alpha})`;
    ctx.fill();

    star.alpha += star.delta;
    if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
  });
  requestAnimationFrame(animateStars);
}

animateStars();

// Handle window resize
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
