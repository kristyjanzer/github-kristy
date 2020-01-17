var buttons = document.querySelectorAll('button');
var retext = document.createElement('div');
    retext.classList.add('retext'); 

var reClick = function(butt) {
  butt.addEventListener('click', function(evt) {
        butt.append(retext);
        retext.textContent = butt.value;
  });
};

var teClick = function(butt) {
  butt.addEventListener('click', function(evt) {
      retext.classList.remove('retext'); 
  });
};


for (var i = 0; i < buttons.length; i++) {
  var butt = buttons[i];
  reClick(butt);
}
