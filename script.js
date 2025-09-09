import { appTitle } from "./app.js";
const ChaptersList = [
  "Introduction to JavaScript",
  "Variables and Data Types",
  "Operators",
  "Conditional Statements (if/else, switch)",
  "Loops (for, while, do-while)",
  "Functions",
  "Introduction to Arrays", // Start focusing on arrays here
  "Array Declaration and Initialization",
  "Accessing Array Elements (Indexing)",
  "Array Properties (length)",
  "Common Array Methods (push, pop, shift, unshift)",
  "Iterating through Arrays (forEach, map, filter, reduce)",
  "Array Destructuring",
  "Multidimensional Arrays",
  "Introduction to Objects",
  "DOM Manipulation",
  "Events",
  "Asynchronous JavaScript (Callbacks, Promises, Async/Await)",
  "Error Handling",
  "ES6+ Features",
  "Modules",
  "Advanced Array Concepts (e.g., Array.from, Array.of)",
  "Project-Based Learning with Arrays",
];
const ChaptersContainer = document.getElementById("ChaptersContainer");
ChaptersList.forEach((chapter) => {
  const listItem = document.createElement(`li`);
  listItem.textContent = chapter;
  ChaptersContainer.appendChild(listItem);
  listItem.classList.add("font20px");
  listItem.classList.add("whiteText");
  listItem.classList.add("margin10px");
});
