// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
  number = 0;
  length = Math.min(str1.length, str2.length);
  for (i = 0; i < length; i++) {
    if (str1.charAt(i).toLowerCase() == str2.charAt(i).toLowerCase()) {
      number++;
    }
  }
  return number;
}

module.exports = equalLetterPositions;
