var buttons = document.querySelectorAll('button');

var reClick = function(butt) {
  butt.addEventListener('click', function(evt) {
    (function() {
      var retext = document.createElement('div');
      retext.classList.add('retext'); 
      butt.append(retext);
      retext.textContent = butt.value;
    })();
  });
};

var teClick = function(butt) {
  butt.removeEventListener('click', function(evt) {
    if(evt.type === click) {
      retext.classList.remove('retext'); 
    }
  });
};

for (var i = 0; i < buttons.length; i++) {
  var butt = buttons[i];
  reClick(butt);
}