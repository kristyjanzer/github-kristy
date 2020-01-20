(function() {
  var buttons = document.querySelectorAll('button');
var retext = document.createElement('div');
    retext.classList.add('retext');

var creates = function(butt){
  butt.addEventListener('click', function() {
    butt.append(retext);
    retext.textContent = butt.value;
  });
};

for (var i = 0; i < buttons.length; i++) {
  var butt = buttons[i];
  creates(butt);
}
})();
