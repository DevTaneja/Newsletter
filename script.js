const events = {
  "2024-07-13": {
    name: "BE-Orientation Session",
    description:
      "The Objective of the session was to understand Project activities, Research Paper writing , tools techniques for project management",
    color: "rgba(71, 215, 255, 0.6)", // Tomato Red with transparency
  },

  "2024-07-27": {
    name: "Expert session on tools and techniques on Project Development and Management",
    description:
      "The Objective of the session was to get familiar with Project development and management,and get familiar with tools like Jira, Agile etc.",
    color: "rgba(255, 71, 212, 0.6)", // Tomato Red with transparency
  },

  "2024-07-31": {
    name: "Training Session on 'Get ready for placements'",
    description:
      "The Objective was to create awareness about the placement and internship process , to provide guidance for Interview prepration, amcat and aptitude tests , and inspire students to take proactive steps to achieve thier future goals",
    color: "rgba(71, 255, 77, 0.6)", // Tomato Red with transparency
  },

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

  "2024-09-20": {
    name: "OOP Challenge quest : An OOP coding Competition ",
    description:
      "The session focuses on familiarizing students with HackerRank, improving their coding challenge skills, and preparing them for competitive programming and future career opportunities. ",
    color: "rgba(253, 72, 72, 0.6)", // Tomato Red with transparency
  },


  "2024-09-21": {
    name: "Session on Cracking Internships and  Placements : A strategic Guide ",
    description:
      "The Objective was to inspire and motive students through various success stories and provide insights into how to fetch into the job opportunities",
    color: "rgba(71, 255, 77, 0.6)", // Tomato Red with transparency
  },

  "2024-09-24": {
    name: "Expert session on Quality Research Publication techniques",
    description:
      "The Objective of the session was to understand  Research Paper writing, tools and techniques for project management",
    color: "rgba(255, 71, 212, 0.6)", // Tomato Red with transparency
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
  prevMonthBtn.disabled = currentYear === 2024 && currentMonth === 6;
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

let div = document.querySelector("#bt1");

// Add an onclick event listener
bt1.onclick = () => {
  alert(
    "Please don't waste your time in doing useless things.\nInstead, do something useful and productive."
  );
};


let hide = document.querySelector(".hide");
