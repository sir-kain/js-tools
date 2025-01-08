import { $, $$, createNode, append } from "./utils/index.js";
// import { hello, hello2 } from "./utils/hello.js";

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
  $item.style.background =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  initials.forEach((initial) => {
    const $span = createNode("span");
    $span.textContent = initial;
    append($item, $span);
  });

  return $item;
}

function render(initialList) {
  const $items = $(".items");
  console.log('$items ==>', $items);
  initialList.forEach((initials) => {
    const $item = generateAvatar(initials);
    append($items, $item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const initialList = limit(onlyInitial(names), 3);
  render(initialList);

  $("h1").addEventListener("click", async () => {
    const { hello } = await import("./utils/hello.js");
    console.log(hello("waly"));
  });
});
