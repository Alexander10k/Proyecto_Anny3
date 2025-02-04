// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'm no superman", time: 10 },
  { text: "I can't take your hand", time: 10.1 },
  { text: "And fly you anywhere", time: 14 },
  { text: "You wanna go, yeah", time: 15 },
  { text: "I can't read your mind", time: 18 },
  { text: "Like a billboard sign", time: 20 },
  { text: "And tell you everything", time: 22 },
  { text: "You wanna hear, but", time: 24 },
  { text: "I'll be your hero", time: 27 },
  { text: "Cause I, I can be everything you need", time: 34 },
  { text: "If you're the one for me", time: 38 },
  { text: "Like gravity I'll be unstoppable", time: 40 },
  { text: "I, yeah, I believe in destiny", time: 44 },
  { text: "I may be an ordinary guy", time: 48 },
  { text: "With heart and soul", time: 54 },
  { text: "But if you're the one for me", time: 58 },
  { text: "Then I'll be your hero", time: 60 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);