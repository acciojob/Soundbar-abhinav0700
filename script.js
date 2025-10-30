const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6"];
const buttonsContainer = document.getElementById("buttons");

// Create audio elements for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.onerror = () => {
    // Fallback for testing: use a small valid empty audio if file not found
    audio.src =
      "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCA" +
      "AwACABAAZGF0YQAAAAA=";
  };

  btn.addEventListener("click", () => {
    stopAllSounds();
    audio.currentTime = 0;
    audio.play().catch(() => {}); // prevent unhandled rejection in Cypress
  });

  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopAllSounds);
buttonsContainer.appendChild(stopBtn);

function stopAllSounds() {
  document.querySelectorAll("audio").forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
