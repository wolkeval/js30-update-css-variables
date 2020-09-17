// Returns a NodeList of the inputs
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // dataset is an object containing all elements with data- attribute
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Loops through the NodeList
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
