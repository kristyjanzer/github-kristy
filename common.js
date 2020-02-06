var wizard = [{
  name: 'Luna',
  year: 12,
  color: 'red'
},
{
  name: 'Barsik',
  year: 10,
  color: 'blue'
},
{
  name: 'Musya',
  year: 8,
  color: 'yellow'
}];


wizard.forEach(function (wizards) {
  var button = document.createElement('button');
  button.textContent = wizards.name;
  button.addEventListener('click', function(e) {
    button.style.backgroundColor = wizard.color;
  });
  document.body.appendChild(button);
});
