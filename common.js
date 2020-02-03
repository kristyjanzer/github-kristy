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

// for (var i = 0; i < wizard.length; i++) {
//   var numb = wizard[i];
//   console.log(numb);
// }

var numb = wizard.map(function(wizard) {
  return wizard.name;
});

console.log(numb);
