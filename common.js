// Создаем массив со словами
var words = [
    "яблоко",
    "арбуз",
    "программа",
    "оладушек"
  ];
  
  // Выбираем случайное слово
  var word = words[Math.floor(Math.random() * words.length)];
  
  // Создаем итоговый массив
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  
  var remainingLetters = word.length;
  var guesses = 20;
  
  // Игровой цикл
  while (remainingLetters > 0 && guesses > 0) {
    // Показываем состояние игры
    alert(answerArray.join(" "));
    
    // Запрашиваем вариант ответа
    var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    if (guess === null) {
      // Выходим из игрового цикла
      break;
    } else if (guess.length !== 1) {
      alert("Пожалуйста, введите одиночную букву.");
    } else {
      guesses--;
      guess = guess.toLowerCase();
      // Обновляем состояние игры
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
  // Конец игрового цикла
  }
  
  // Отображаем ответ и поздравляем игрока
  alert(answerArray.join(" "));
  if (guesses > 0) {
    alert("Отлично! Было загадано слово " + word);
  } else {
    alert("Очень плохо! Было загадано слово " + word);
  }
