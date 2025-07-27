function rollDice() {
  const diceCount = document.getElementById("diceCount").value;
  const diceResult = document.getElementById("diceResult");
  const dice_images = document.getElementById("dice_images");
  const values = [];
  const images = [];
  for (let i = 0; i < diceCount; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}" >`);
  }
  diceResult.textContent = `You rolled: ${values.join(", ")}`;
  dice_images.innerHTML = images.join("");
}
