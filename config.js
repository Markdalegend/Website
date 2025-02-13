// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "MY SUPER SEXY WOMAN AND ONE TRUE LOVE SARGAM",

    // The title that appears in the browser tab
    pageTitle: "For My Sargam Only! 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻'],                     // Cute bear emojis
        flowers: ['🌸', '👩🏽‍❤️‍💋‍👨🏽']         // Flower couple
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Maybe Yes",
            noBtn: "FUCK NO",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "Are you excited for our date?",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine tomorrow? 🌹",
            yesBtn: "Yes!",
            noBtn: "Ewwwwww No"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "No way! You love me that much?? 🥰🚀💝",
        high: "I LOVE YOU MOREEEEE 🚀💝",
        normal: "Really!!?? 🥰"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "I'm so sorry for being a little shit. I love you so much. Now, let me give you a big warm hug and shower you with love!",
        emojis: "🎁💖🤗💝💋❤️💕🌸"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 2.0
    },

    // Background Music
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dzxxb286e/video/upload/v1739439355/Backstreet_Boys_-_As_Long_as_You_Love_Me_Audio__9Hgv1eAklI_d0le5t.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
