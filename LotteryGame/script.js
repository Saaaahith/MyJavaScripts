const PickaNun = document.getElementById("PickaNumBtn");
let resultele = document.getElementById("result");
let gift = document.getElementById("Gift");
const LotterySheetConatiner1 = document.getElementById("LotterySheetContainer");
const tick = new Audio(`ball.wav`);
const winning = new Audio(`winning.wav`);

const giftItems = [
  // Personalized
  "Custom-printed photo frame",
  "Personalized mug or tumbler",
  "Name-engraved leather wallet",
  "Custom star map of a special date",
  "Custom photo book or memory album",
  "Personalized phone case with a favorite photo",
  "Engraved jewelry, like a necklace or bracelet",
  "Custom bobblehead or caricature figurine",
  "Personalized wooden plaque or sign",
  "Family portrait illustration",

  // Technology and gadgets
  "Bluetooth speaker",
  "Smart mug or coffee warmer",
  "Digital photo frame",
  "Wireless charger",
  "Portable power bank",
  "Noise-canceling headphones",
  "Smart home assistant (e.g., Google Home, Alexa)",
  "Projector for home movie nights",
  "Fitness tracker or smartwatch",
  "AirTag or other smart tracker",

  // Home and kitchen
  "High-quality coffee or tea maker",
  "Pizza oven",
  "Scented candle set",
  "Automatic self-stirring mug",
  "Indoor plant set",
  "Cozy weighted blanket",
  "Mini-fridge for drinks or skincare",
  "Cocktail shaker set",
  "A board game collection",
  "High-end olive oil",

  // Wellness and self-care
  "Bath bomb gift set",
  "Skincare gift basket",
  "Electric massager",
  "Essential oil diffuser",
  "Luxury silk pillowcase",
  "High-end body care kit",
  "Sleep mask",
  "Yoga mat and accessories",
  "At-home manicure or pedicure kit",
  "A selection of gourmet teas",

  // Experiences and hobbies
  "A subscription box tailored to a hobby",
  "A book subscription or gift certificate to a local bookstore",
  "Cooking classes",
  "Concert or sporting event tickets",
  "A gift certificate for a spa day",
  "A donation to their favorite charity in their name",
  "A craft kit (e.g., for pottery or knitting)",
  "A day trip or weekend getaway",
  "A customized puzzle using a personal photo",
  "A wine or spirit tasting kit",
];
PickaNun.addEventListener("click", function () {
  for (i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("winningbox");
    gift.textContent = "";
  }
  resultele.textContent = "Please Wait";
  // setTimeout(() => {
  //   result = Math.ceil(Math.random() * 50);
  //   resultele.textContent = `Your Number is ${result}`;
  //   gift.textContent = `Congartulations You Won ${giftItems[result - 1]}`;
  //   document.getElementById(result).classList.add("winningbox");
  // }, 5000);

  let secondsCount = 0;
  const intervalId = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secondsCount = secondsCount + 1;
    const randombox = Math.ceil(Math.random() * 50);
    for (let i = 1; i <= 50; i++) {
      if (i == randombox) {
        document.getElementById(i).classList.add("highlightbox");
      } else {
        document.getElementById(i).classList.remove("highlightbox");
      }
    }
    if (secondsCount == 20) {
      result = Math.ceil(Math.random() * 50);
      resultele.textContent = `Your Number is ${result}`;
      gift.textContent = `Congartulations You Won ${giftItems[result - 1]}`;
      document.getElementById(randombox).classList.remove("highlightbox");
      document.getElementById(result).classList.add("winningbox");
      winning.pause();
      winning.currentTime = 0;
      winning.play();
      clearInterval(intervalId);
    }
  }, 200);
});
giftItems.forEach(function (value, i) {
  const BoxEle = `<div class="box" id="${i + 1}">${i + 1}.${value}</div>`;
  LotterySheetConatiner1.insertAdjacentHTML("beforeend", BoxEle);
});
