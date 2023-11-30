let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
  toggleLight(btn1);
});

btn2.addEventListener("click", () => {
  toggleLight(btn2);
});

function toggleLight(button) {
  if (button.innerText === "Botão" || button.innerText === "Botão2") {
    document.documentElement.style.cssText = "--light-color: #94b0ff";
    button.innerText = "Clique";
  } else {
    document.documentElement.style.cssText = "--light-color: #f8d11d";
    button.innerText = "Botão";
  }
}
