// Get the button element
const button = document.getElementById('gumb1');
console.log(button);
// Add a click event listener to the button
button.addEventListener('click', () => {
    console.log('gumb je bil kliknjen');
    // Generate a random color
    const randomColor = generateRandomColor();

    // Change the background color of the button
    button.style.backgroundColor = randomColor;
});

// Function to generate a random color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}