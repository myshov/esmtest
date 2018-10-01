const el = document.getElementById('h2file200');
el.innerText = 'w...';

const currentTime = new Date();
const elapsed = currentTime - window.h2startTime;
const h2time = document.getElementById('h2time');
h2time.innerText = elapsed + ' ms';
