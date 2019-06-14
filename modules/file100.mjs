const el = document.getElementById('file100');
el.innerText = ' ...';

const currentTime = new Date();
const elapsed = currentTime - window.h1startTime;
const h1time = document.getElementById('h1time');
h1time.innerText = `Loaded in ${elapsed} ms`;
