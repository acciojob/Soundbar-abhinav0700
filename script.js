const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  const audio = new Audio(`sounds/${sound}.mp3`);

  btn.addEventListener('click', () => {
    stopSounds();
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}
