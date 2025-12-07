import { $, $$, createNode, append } from "./utils/index.js";
import { hello } from "./utils/hello.js";

const names = [
  "Ahmadou Waly Ndiaye",
  "Adji Fatma Mbacke Thioune",
  "23 a33",
  "Moustapha Gueye",
  "Ndeye Binta",
  " ko",
  "Inno",
];

const onlyInitial = (names) => {
  return names.map((fullname) => {
    return fullname.split(" ").map((name) => name.charAt(0));
  });
};

const limit = (arr, n) => {
  return arr.map((inital) => inital.slice(0, n));
};

function generateAvatar(initials) {
  const $item = createNode("article");
  $item.classList.add("item");
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  $item.style.background = color;
  initials.forEach((initial) => {
    const $span = createNode("span");
    $span.textContent = initial;
    append($item, $span);
  });

  $item.addEventListener("click", async () => {
    // const { hello } = await import("./utils/hello.js");
    console.log(hello(color));
    $('body').style.background = color;
  });
  return $item;
}

function render(initialList) {
  const $items = $(".items");
  initialList.forEach((initials) => {
    const $item = generateAvatar(initials);
    append($items, $item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const initialList = limit(onlyInitial(names), 3);
  render(initialList);
});

export function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// Recursivitiy
export function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}
