function getUserValue() {
  const input = document.querySelector(".bar_search");
  input.addEventListener("keydown", e => {
    if (e.keyCode === 13) {
      console.log(input.value);
      return input.value;
    }
  })
};

export default getUserValue;