const textInputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
textInputRef.addEventListener("input", (event) => {
  if (textInputRef.value !== "") {
    outputRef.textContent = event.currentTarget.value;
  } else {
    outputRef.textContent = "Anonimous";
  }
});
