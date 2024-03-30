let h1Text = document.querySelector("#firstH1").textContent;

let splittedText = h1Text.split("");

let clutter = "";
splittedText.forEach(function (element) {
  clutter += `<span>${element}</span>`;
});

document.querySelector("#firstH1").innerHTML = clutter;
