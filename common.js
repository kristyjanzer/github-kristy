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
//   console.log(numb.name);
// }

var numb = wizard.filter(function(wizard) {
  return wizard.color === 'yellow';
}).map(function(wizard) {
  return wizard.name;
});
console.log(numb);
