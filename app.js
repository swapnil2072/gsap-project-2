let allH1 = document.querySelectorAll("page2 h1");

allH1.forEach((element) => {
  var h1Text = element.textContent;
  let splittedText = h1Text.split("");
  let clutter = "";
  splittedText.forEach(function (element) {
    clutter += `<span>${element}</span>`;
  });
  element.innerHTML = clutter;
});

gsap.to("#page2 h1 span", {
  color: "#e3e3c4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    marker: true,
    start: "top 50%",
    end: "top -10%",
    scrub: 2,
  },
});
