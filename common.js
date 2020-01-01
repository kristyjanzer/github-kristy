var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
    setupOpen.classList.remove('hidden');
});

setupClose.addEventListener('click', function() {
    setupOpen.classList.add('hidden');
});
