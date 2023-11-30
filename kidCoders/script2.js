let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (btn.innerText == "NOT") {
    document.documentElement.style.cssText = "--light-color: #94b0ff";
    btn.innerText = "Ligar";
  } else {
    document.documentElement.style.cssText = "--light-color: #f8d11d";
    btn.innerText = "NOT";
  }
});


