"use strict";
import { appTitle } from "./app.js";
const title = document.getElementById("title");
title.textContent = "im learning JAVASCRIPT".toUpperCase();
// title.textContent = "నేను జావాస్క్రిప్ట్ నేర్చుకుంటున్నాను".toUpperCase();
// title.textContent = "मैं जावास्क्रिप्ट सीख रहा हूँ".toUpperCase();
const titles = [
  "నేను జావాస్క్రిప్ట్ నేర్చుకుంటున్నాను",
  "मैं जावास्क्रिप्ट सीख रहा हूँ",
];
let count = 0;
const intervalId = setInterval(function () {
  if (count < titles.length) {
    title.textContent = titles[count];
    count++;
  } else {
    clearInterval(intervalId);
    window.location.href = "home.html";
  }
}, 1000);
