//your JS code here. If required.
// List of sound names (without extension)
const sounds = ["sound1", "sound2", "sound3", "sound4"];

// Get the buttons container
const buttonsContainer = document.getElementById("buttons");

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  const audio = new Audio(`sounds/${sound}.mp3`);

  btn.addEventListener("click", () => {
    stopAllSounds();
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create the stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopAllSounds);
buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopAllSounds() {
  document.querySelectorAll("audio").forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
