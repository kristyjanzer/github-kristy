var players = [
  {
    name: 'Kate',
    time: 125
  },
  {
    name: 'Sasha',
    time: 105
  },
  {
    name: 'Rita',
    time: 93
  }
];

for (var i=0; i < players.lenght; i++) {
  if (players.time > 100) {
    console.log(players[i]);
  } else {
    console.log("Не найдено");
  }
}