const speak = (message) => {
  const sp = new SpeechSynthesisUtterance(message);
  [sp.voice] = speechSynthesis.getVoices();
  speechSynthesis.speak(sp);
};

const message = "Je m'appelle eric et je suis un developpeur  javascript";
speak(message);
