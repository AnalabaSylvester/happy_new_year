document.addEventListener("DOMContentLoaded", function () {
    const greetingH1 = document.querySelector("#greeting h1");
    const greetingH4 = document.querySelector("#greeting h4");

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeColorRandomly(element) {
        const newColor = getRandomColor();
        element.style.color = newColor;
    }

    setInterval(() => {
        changeColorRandomly(greetingH1);
        changeColorRandomly(greetingH4);
    }, 3000); // Change colors every 3 seconds
});
