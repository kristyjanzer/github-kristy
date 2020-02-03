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
<<<<<<< HEAD
//   console.log(numb.name);
=======
//   console.log(numb);
>>>>>>> 2267b1666dfc0bc3f655afa5a3488c3f2523b87f
// }

var numb = wizard.map(function(wizard) {
  return wizard.name;
});

console.log(numb);
