// ===== SET TARGET DATE HERE =====
// Format: new Date(year, monthIndex, day, hour, minute, second)
// NOTE: monthIndex is 0-based (April = 3)

const targetDate = new Date(2026, 3, 11, 0, 0, 0).getTime();
// =================================

function updateTimer() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.querySelector(".timer").innerHTML =
      "00<small>D</small> 00<small>H</small> 00<small>M</small> 00<small>S</small>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();
