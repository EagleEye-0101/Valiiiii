// DOM Elements
const surpriseBox = document.getElementById('surpriseBox');
const catAnimation = document.getElementById('catAnimation');
const openBoxBtn = document.getElementById('openBoxBtn');
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');
const layer4 = document.getElementById('layer4');
const layer5 = document.getElementById('layer5');
const layer6 = document.getElementById('layer6');
const layer7 = document.getElementById('layer7');
const layer8 = document.getElementById('layer8');
const nextLayerBtn1 = document.getElementById('nextLayerBtn1');
const nextLayerBtn2 = document.getElementById('nextLayerBtn2');
const nextLayerBtn3 = document.getElementById('nextLayerBtn3');
const nextLayerBtn4 = document.getElementById('nextLayerBtn4');
const nextLayerBtn5 = document.getElementById('nextLayerBtn5');
const nextLayerBtn6 = document.getElementById('nextLayerBtn6');
const nextLayerBtn7 = document.getElementById('nextLayerBtn7');
const meterBar = document.getElementById('meterBar');
const roseBud = document.getElementById('roseBud');
const roseBloom = document.getElementById('roseBloom');
const reasonsList = document.getElementById('reasonsList');
const kissBtn = document.getElementById('kissBtn');
const kissMarks = document.getElementById('kissMarks');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');
const finalMessage = document.getElementById('finalMessage');
const heartsContainer = document.getElementById('hearts');
const holdLoveMeterBtn = document.getElementById('holdLoveMeterBtn');
const holdRoseBtn = document.getElementById('holdRoseBtn');

// Variables
let loveMeterProgress = 0;
let roseTapCount = 0;
let noCount = 0; // Track how many times "No" is clicked
const reasons = [
    "1. Your smile lights up my world. 🌟",
    "2. You make me laugh like no one else. 😂",
    "3. Your kindness inspires me every day. 🌸",
    "4. You’re my favorite person to talk to. 💬",
    "5. Your hugs are the best. 🤗",
    "6. You’re my sunshine on cloudy days. ☀️",
    "7. You make every day better. 🌈",
    "8. You’re my best friend and my soulmate. 💕",
    "9. You’re the most beautiful person I know. 🌹",
    "10. I love how you always support me. 💪",
];
const voiceRecordings = [
    "audio/recording1.mp3", // Add your voice recording files here
    "audio/recording2.mp3",
    "audio/recording3.mp3"
];
const backgroundMusic = new Audio('audio/background-music.mp3'); // Add her favorite love song

// Functions
function openBox() {
    catAnimation.style.display = 'none'; // Hide the cat
    layer1.classList.add('hidden'); // Hide the first layer
    layer2.classList.remove('hidden'); // Show the second layer
}

function nextLayer(currentLayer, nextLayer) {
    currentLayer.classList.add('hidden');
    nextLayer.classList.remove('hidden');
}

// Love Meter (Tap-Based Interaction)
holdLoveMeterBtn.addEventListener('click', () => {
    console.log("Love Meter Button Tapped!");
    if (loveMeterProgress < 100) {
        loveMeterProgress += 10; // Increase progress by 10% per tap
        meterBar.style.width = `${loveMeterProgress}%`;
    }
    if (loveMeterProgress === 100) {
        nextLayerBtn3.disabled = false; // Enable the next button
    // Show a cute message
    const message = document.createElement('div');
    message.className = 'celebration-message';
    message.innerHTML = 'Yay! Our love is full! 💖';
    layer4.appendChild(message);
    setTimeout(() => message.remove(), 3000); // Remove after 3 seconds

    // Confetti explosion
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
});

// Virtual Rose (Tap-Based Interaction)
holdRoseBtn.addEventListener('click', () => {
    console.log("Rose Button Tapped!");
    roseTapCount += 1;
    if (roseTapCount >= 5) { // Require 5 taps to bloom the rose
        roseBud.classList.add('hidden');
        roseBloom.classList.remove('hidden');
        nextLayerBtn4.disabled = false; // Enable the next button
    }
});

function addReason() {
    const newReason = document.createElement('p');
    newReason.textContent = reasons[Math.floor(Math.random() * reasons.length)];
    reasonsList.appendChild(newReason);
}

function createKissMark() {
    const kissMark = document.createElement('div');
    kissMark.className = 'kiss-mark';
    kissMark.textContent = '💋';
    kissMark.style.left = `${Math.random() * 80 + 10}%`;
    kissMark.style.top = `${Math.random() * 80 + 10}%`;
    kissMarks.appendChild(kissMark);
    setTimeout(() => kissMark.remove(), 2000); // Remove after 2 seconds
}

function celebrate() {
    layer8.classList.add('hidden');
    celebration.classList.remove('hidden');

    // Confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff69b4', '#ff1493', '#c71585']
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff69b4', '#ff1493', '#c71585']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Play celebration sound
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2579/2579-preview.mp3');
    audio.play();
}

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth) - 85;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight) - 45;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    noBtn.style.transition = 'all 0.5s ease';

    noCount++;
    if (noCount > 2) {
        noBtn.innerHTML = "Nice Try! 😜 You Can't Resist Me!";
    }
    if (noCount > 4) {
        noBtn.innerHTML = "I'm Sticky Like Glitter! ✨";
    }
    if (noCount > 6) {
        noBtn.innerHTML = "Just Say Yes Already! 🥺";
    }
}

function playVoiceRecording() {
    const randomRecording = voiceRecordings[Math.floor(Math.random() * voiceRecordings.length)];
    const audio = new Audio(randomRecording);
    audio.play();
}

function startBackgroundMusic() {
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.5; // Adjust volume as needed
    backgroundMusic.play();
}




// Event Listeners
openBoxBtn.addEventListener('click', openBox);
nextLayerBtn1.addEventListener('click', () => nextLayer(layer2, layer3));
nextLayerBtn2.addEventListener('click', () => nextLayer(layer3, layer4));
nextLayerBtn3.addEventListener('click', () => nextLayer(layer4, layer5));
nextLayerBtn4.addEventListener('click', () => nextLayer(layer5, layer6));
nextLayerBtn5.addEventListener('click', () => nextLayer(layer6, layer7));
nextLayerBtn6.addEventListener('click', () => nextLayer(layer7, layer8));

reasonsList.addEventListener('scroll', addReason);
kissBtn.addEventListener('click', createKissMark);
yesBtn.addEventListener('click', celebrate);

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);
noBtn.addEventListener('click', moveButton);

// Play a random voice recording every 30 seconds
setInterval(playVoiceRecording, 30000);

// Start background music when the page loads
window.addEventListener('load', startBackgroundMusic);


// Mobile-friendly touch events
document.addEventListener('touchstart', (e) => {
    if (e.target === noBtn) {
        moveButton();
    }
});

function createFloatingEmojis() {
    const container = document.querySelector('.floating-emojis');
    const emojis = ['💖', '💕', '🌸', '💌', '🎀', '💞', '💝', '💘'];
    
    for(let i = 0; i < 50; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDelay = Math.random() * 5 + 's';
        emoji.style.fontSize = Math.random() * 20 + 20 + 'px';
        container.appendChild(emoji);
    }
}

window.onload = createFloatingEmojis;

// Play music after first user interaction
document.body.addEventListener('click', () => {
    const audio = document.getElementById('backgroundMusic');
    audio.play();
}, { once: true }); // Only trigger once

        




// Ensure the scroll animation restarts smoothly
const reasonsScroll = document.querySelector('.reasons-scroll');
reasonsScroll.addEventListener('animationiteration', () => {
    reasonsScroll.style.transform = 'translateY(100%)';
    setTimeout(() => {
        reasonsScroll.style.animation = 'scrollReasons 3s linear infinite';
    }, 10);
});