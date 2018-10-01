const el = document.getElementById('file200');
el.innerText = 'w...';

const currentTime = new Date();
const elapsed = currentTime - window.h1startTime;
const h1time = document.getElementById('h1time');
h1time.innerText = elapsed + ' ms';
