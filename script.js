const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttonsContainer = document.getElementById('buttons');

// Create an <audio> tag for each sound and a button to play it
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);

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
    const audioEl = document.getElementById(sound);
    audioEl.pause();
    audioEl.currentTime = 0;
  });
}
