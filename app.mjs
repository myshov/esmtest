const HTTP1HOST = 'https://esmtest.myshov.com:443';
const HTTP2HOST = 'https://esmtest.myshov.com:444';

function loadScript(uri) {
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'module');
    scriptElement.setAttribute('src', uri);
    document.body.appendChild(scriptElement);
}

const el = document.getElementById('loadHttp1');
el.addEventListener('click', function () {
    window.h1startTime = new Date();
    loadScript(`${HTTP1HOST}/bootstrapH1.mjs`);
})

const elH2 = document.getElementById('loadHttp2');
elH2.addEventListener('click', function () {
    window.h2startTime = new Date();
    loadScript(`${HTTP2HOST}/bootstrapH2.mjs`);
});
