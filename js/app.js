function randomCharacter() {
    const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const randomNumber = Math.floor(Math.random() * 16);
    return characters[randomNumber];
}

function generateHexCode() {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        let character = randomCharacter();
        hexCode += character;
    }
    return hexCode;
}

const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
    const newBackgroundColor = generateHexCode();
    h1.innerText = newBackgroundColor;
    document.body.style.backgroundColor = newBackgroundColor;
})
