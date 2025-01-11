const events = {
  "2024-08-12": {
    name: "Resume Writing",
    description:
      "Learn how to write an effective resume. Click for more details.",
    color: "rgba(255, 99, 71, 0.6)", // Tomato Red with transparency
  },
  "2024-09-19": {
    name: "Art of Smart Work",
    description: "A workshop on productivity and smart work techniques.",
    color: "rgba(255, 165, 0, 0.6)", // Orange with transparency
  },
  "2024-09-30": {
    name: "Zonal BB",
    description: "A sports event at the zonal level.",
    color: "rgba(34, 193, 195, 0.6)", // Turquoise with transparency
  },
  "2024-10-03": {
    name: "Career in VLSI",
    description: "A session on career opportunities in VLSI.",
    color: "rgba(253, 108, 158, 0.6)", // Pink with transparency
  },
  "2024-11-25": {
    name: "AI Bootcamp",
    description: "An intensive AI workshop for beginners and professionals.",
    color: "rgba(75, 0, 130, 0.6)", // Indigo with transparency
  },
  "2024-12-15": {
    name: "Hackathon Finale",
    description: "The grand finale of the annual hackathon.",
    color: "rgba(0, 255, 255, 0.6)", // Cyan with transparency
  },
};

let currentMonth = 6; // Start from August (0-indexed)
let currentYear = 2024;

const calendarGrid = document.getElementById("calendar-grid");
const monthYearHeader = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const eventModal = document.getElementById("event-modal");
const closeModalButton = document.getElementById("close-modal");
const eventTitle = document.getElementById("event-title");
const eventDescription = document.getElementById("event-description");

// Disable navigation before August or after December 2024
const updateNavButtons = () => {
  prevMonthBtn.disabled = currentYear === 2024 && currentMonth === 7;
  nextMonthBtn.disabled = currentYear === 2024 && currentMonth === 11;
};

const renderCalendar = () => {
  calendarGrid.innerHTML = "";
  monthYearHeader.textContent = new Date(
    currentYear,
    currentMonth
  ).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Fill empty days before start of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("day");
    calendarGrid.appendChild(emptyDay);
  }

  // Fill days with numbers
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    const eventKey = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    if (events[eventKey]) {
      dayDiv.classList.add("event");
      dayDiv.style.backgroundColor = events[eventKey].color;
      dayDiv.addEventListener("click", () => showEventDetails(eventKey));
    }

    dayDiv.textContent = day;
    calendarGrid.appendChild(dayDiv);
  }

  updateNavButtons();
};

const showEventDetails = (eventKey) => {
  const event = events[eventKey];
  if (event) {
    eventTitle.textContent = event.name;
    eventDescription.textContent = event.description;
    eventModal.style.display = "block"; // Show the modal
  }
};

closeModalButton.addEventListener("click", () => {
  eventModal.style.display = "none"; // Close the modal
});

window.addEventListener("click", (e) => {
  if (e.target === eventModal) {
    eventModal.style.display = "none"; // Close modal when clicking outside
  }
});

prevMonthBtn.addEventListener("click", () => {
  if (currentMonth > 0) {
    currentMonth--;
  } else {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  if (currentMonth < 11) {
    currentMonth++;
  } else {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

renderCalendar();
