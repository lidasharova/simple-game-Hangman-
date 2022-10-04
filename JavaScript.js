

// Возвращает случайно выбранное слово
function pickWord () {
	//массив всех возможных слов

	let words = [ 
	"программа",
    "макака",
    "прекрасный",
    "оладушек",
	"красота",
	"бабочка",
	"радуга",
	"меч",
	"слон"
	];

	return words[Math.floor( Math.random() * words.length)];
  };



// Возвращает пустой массив для рандомного слова word
function setupAnswerArray (word) {
	let answerArray = [];
	for(let i = 0; i < word.length; i++){
		answerArray[i] = '__';
	}
	return answerArray;
};


//ф-ция которая показывает состояние слова из массива:
let showPlayerProgress = function (answerArray) {
    alert (answerArray.join('  '));
  };


// Запрашивает ответ игрока с помощью prompt и отправляет результат ввода в переменную guess
let getGuess = function () {
	return prompt ('Угадай букву или нажми "Отмена" для выхода из игры!')
  };

//ф-ция обновления состояния игры 
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
   
function updateGameState (guess, word, answerArray) {
	let appearances = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          appearances++;
        }
      }
      return appearances;
    };


// ф-ция которая с  помощью alert показывает игроку отгаданное слово
    // и поздравляет его с победой
function showAnswerAndCongratulatePlayer (answerArray) {
	showPlayerProgress(answerArray);
    alert(`Хорошая работа! Загаданное слово было - ${answerArray.join("")}!`)
}
    

	//функция при завершении попыток
function endLives(answerArray){
	alert(`Попытки закончились! Загаданное слово было - ${word}!`);
    };


//выбрать рандомное слово:
let word = pickWord();
//задать пустой массив  
let answerArray = setupAnswerArray(word);

//переменная содержащая количество букв заданного слова word:
let remainingLetters = word.length;
let lives = 10;


while (remainingLetters > 0 && lives > 0){
	showPlayerProgress(answerArray);
	let guess = getGuess();
	if (guess === null){
		break;
	}else if (guess.length !== 1) {
		alert('Пожалуйста введите одну букву');
	} else {
		//учитываем верхний регистр и преобразуем в нижний:
			guess = guess.toLowerCase();
			let correctGuesses = updateGameState(guess, word, answerArray);
			remainingLetters -= correctGuesses;
			lives--;	
	}
}

if (lives > 0){
		showAnswerAndCongratulatePlayer(answerArray);
	}else {
		endLives(answerArray)
	};
