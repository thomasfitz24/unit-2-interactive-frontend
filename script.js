document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("testButton");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    output.textContent = "Button clicked. JavaScript is working.";
  });
});
