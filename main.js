const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.value = "";
        break;
      case "DEL":
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch (err) {
          display.value = "Error";
        }
        break;
      default:
        display.value += e.target.innerText;
    }
  });
});
