const students = [
  {
    name: "Alice",
    marks: 85,
    class: "10th",
    address: "123 Main St",
  },
  {
    name: "Bob",
    marks: 90,
    class: "11th",
    address: "456 Oak Ave",
  },
  {
    name: "Charlie",
    marks: 78,
    class: "9th",
    address: "789 Pine Rd",
  },
  {
    name: "David",
    marks: 92,
    class: "12th",
    address: "321 Maple St",
  },
  {
    name: "Eve",
    marks: 88,
    class: "10th",
    address: "654 Elm St",
  },
  {
    name: "Frank",
    marks: 80,
    class: "11th",
    address: "987 Cedar Ave",
  },
  {
    name: "Grace",
    marks: 95,
    class: "12th",
    address: "246 Birch Rd",
  },
  {
    name: "Henry",
    marks: 82,
    class: "9th",
    address: "159 Willow St",
  },
  {
    name: "Ivy",
    marks: 91,
    class: "10th",
    address: "753 Spruce Ave",
  },
  {
    name: "Jack",
    marks: 76,
    class: "8th",
    address: "852 Aspen Rd",
  },
  {
    name: "Kira",
    marks: 87,
    class: "11th",
    address: "951 Walnut St",
  },
  {
    name: "Liam",
    marks: 93,
    class: "12th",
    address: "357 Cherry Ave",
  },
  {
    name: "Mia",
    marks: 84,
    class: "9th",
    address: "258 Poplar Rd",
  },
  {
    name: "Noah",
    marks: 89,
    class: "10th",
    address: "654 Cypress St",
  },
  {
    name: "Olivia",
    marks: 97,
    class: "12th",
    address: "741 Redwood Ave",
  },
];

//Display cards
const studentSection = document.getElementsByClassName("student-section")[0];
const studentList = document.getElementsByClassName("student-list")[0];
const heading = document.getElementsByClassName("search-heading")[0];
students.map((student) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <p>Student Name: <b>${student.name}</b></p>
        <p>Marks: <b>${student.marks}%</b></p>
        <p>Class: <b>${student.class}</b></p>
        <p>Address: <b>${student.address}</b></p>
    `;
  studentList.appendChild(card);
});

//Search functionality
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {
  studentList.innerHTML = "";
  heading.textContent = "Search Results for " + searchInput.value + "...";

  students
    .filter((student) => {
      return student.name
        .toLowerCase()
        .startsWith(searchInput.value.toLowerCase());
    })
    .map((student) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <p>Student Name: <b>${student.name}</b></p>
        <p>Marks: <b>${student.marks}%</b></p>
        <p>Class: <b>${student.class}</b></p>
        <p>Address: <b>${student.address}</b></p>
    `;

      studentList.appendChild(card);
    });
});
