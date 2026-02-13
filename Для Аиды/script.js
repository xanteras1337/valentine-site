// script.js
function openEnvelope() {
  document.querySelector('.screen').classList.remove('active');
  document.querySelector('.screen').classList.add('hidden');
  
  const love = document.getElementById('loveBlock');
  love.classList.remove('hidden');
  love.classList.add('active');

  const audio = document.getElementById('music');
  audio.volume = 0.28;
  audio.play().catch(err => {
    console.log("Автозапуск заблокирован — браузер требует взаимодействия");
  });

  createHearts(35); // запускаем сердечки
}

// Падающие сердечки
function createHearts(count) {
  const container = document.querySelector('.hearts');
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💗';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    heart.style.animation = `fall ${Math.random() * 10 + 8}s linear infinite`;
    heart.style.animationDelay = Math.random() * 4 + 's';
    heart.style.opacity = Math.random() * 0.4 + 0.6;
    container.appendChild(heart);
    
    setTimeout(() => heart.remove(), 18000);
  }
}

// Кнопка mute/unmute
const audio = document.getElementById('music');
const muteBtn = document.getElementById('muteBtn');

muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteBtn.innerHTML = audio.muted 
    ? '<i class="fas fa-volume-mute"></i>' 
    : '<i class="fas fa-volume-up"></i>';
});