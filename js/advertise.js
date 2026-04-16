function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}.${day}`;
}

function formatHungarianDate(date) {
  const months = [
    "Január", "Február", "Március", "Április", "Május", "Június",
    "Július", "Augusztus", "Szeptember", "Október", "November", "December"
  ];

  const days = [
    "Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"
  ];

  return `${months[date.getMonth()]} ${date.getDate()}. ${days[date.getDay()]}`;
}

const today = new Date();

// Következő hét hétfő
const nextMonday = new Date(today);
const day = today.getDay(); // 0 = vasárnap

const diffToMonday = (8 - day) % 7 || 7;
nextMonday.setDate(today.getDate() + diffToMonday);

// Következő hét vasárnap
const nextSunday = new Date(nextMonday);
nextSunday.setDate(nextMonday.getDate() + 6);

// Következő péntek
const nextFriday = new Date(nextMonday);
nextFriday.setDate(nextMonday.getDate() + 4);

// Kiírás
document.getElementById("week-range").textContent =
  `${formatDate(nextMonday)} - ${formatDate(nextSunday)}`;

document.getElementById("friday-date").textContent =
  formatHungarianDate(nextFriday);

// 35% csak pénteken
const isFriday = today.getDay() === 5;
const saleEl = document.getElementById("friday-sale");

if (!isFriday) {
  saleEl.innerHTML = "Hamarosan";
}