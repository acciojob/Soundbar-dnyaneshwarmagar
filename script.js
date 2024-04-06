//your JS code here. If required.
let currentAudio = null;

function playSound(soundUrl) {
    // If there's an audio playing, stop it first
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Use the provided URL for the sound
    currentAudio = new Audio(soundUrl);
    currentAudio.play();
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
