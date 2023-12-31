document.addEventListener("DOMContentLoaded", function () {
    const prayers = [
        "May each day of the new year be filled with love, laughter, and unforgettable moments. ❤️🎉",
        "Wishing you the courage to chase your dreams and the strength to overcome any obstacles. 🌟💪",
        "May your journey in the new year be guided by hope, faith, and endless possibilities. 🌈✨",
        "Sending warm wishes for a year ahead filled with opportunities, growth, and positive surprises. 🌟🎁",
        "May the coming year be a blank canvas for you to paint a beautiful and meaningful life. 🎨😊",
        "Wishing you moments of peace, reflection, and gratitude in the upcoming year. 🙏❤️",
        "May your path be illuminated with the light of kindness, compassion, and understanding. ✨😇",
        "Sending you warm hugs and heartfelt prayers for a year filled with warmth and connection. 🤗❤️",
        "May your heart be open to new adventures and your spirit be filled with curiosity and wonder. 🚀🌌",
        "Wishing you a year that unfolds like a captivating story, filled with joy, love, and triumphs. 📖🌟"
    ];

    const prayerContainer = document.getElementById("prayerContainer");
    const prayerText = document.getElementById("prayerText");

    function getRandomPrayer() {
        return prayers[Math.floor(Math.random() * prayers.length)];
    }

    function updatePrayer() {
        const randomPrayer = getRandomPrayer();
        prayerText.textContent = randomPrayer;
    }

    // Initial prayer update
    updatePrayer();

    // Update prayer every 10 seconds (adjust as needed)
    setInterval(updatePrayer, 8000);
});
