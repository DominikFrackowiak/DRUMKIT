const keys = document.querySelectorAll("div.key");

// const removeTransition = (e) => {
//   if(e.propertyName!=='transform') return;
//   this.classList.remove('playing');
// }

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //rewind to the start in order to be able to be played few times in a row
  
  keys.forEach((singleKey) => singleKey.classList.remove("playing"));
  key.classList.add("playing");
  // keys.forEach(singleKey => singleKey.classList.remove('playing'));
  audio.play();
};

window.addEventListener("keydown", playSound);

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
