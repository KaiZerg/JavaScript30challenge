// selecting all inputs
const inputs = document.querySelectorAll('.controls input');

// creating function
function handleUpdate() {
  // data-sizing="px" in HTML .controls input attributes to assing px to suffix
  // leaving '' - nothing for color, hex value doesn't have px
  const suffix = this.dataset.sizing || '';
  // select entire document and setting property of our variables using name="spacing" ect
  // using ${} because we are using variables, values can vary
  // setting ${} to this.value
  // adding suffix to the end, to append px to the range value
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
// listen to change and mousemove over range controlers
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
