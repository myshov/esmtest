const el = document.getElementById('h2file100');
el.innerText = ' ...';

const currentTime = new Date();
const elapsed = currentTime - window.h2startTime;
const h2time = document.getElementById('h2time');
h2time.innerText = elapsed + ' ms';
