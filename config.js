// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    const questionEl = document.getElementById("question");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const musicBtn = document.getElementById("music-btn");

    const audio = new Audio("https://res.cloudinary.com/dzxxb286e/video/upload/v1739439355/Backstreet_Boys_-_As_Long_as_You_Love_Me_Audio__9Hgv1eAklI_d0le5t.mp3");
    audio.volume = 0.5;
    let isPlaying = false;

    musicBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play();
            musicBtn.textContent = "🔇 Stop Music";
        } else {
            audio.pause();
            musicBtn.textContent = "🎵 Play Music";
        }
        isPlaying = !isPlaying;
    });

    yesBtn.addEventListener("click", () => {
        questionEl.textContent = "I don't like you, I LOVE YOU! ❤️";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    noBtn.addEventListener("click", () => {
        questionEl.textContent = "WRONG ANSWER. TRY AGAIN 😡";
    });
});

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
