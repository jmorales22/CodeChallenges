function vowelsAndConsonants(s) {
    let vowelArray = [];
    let consonantArray = [];
  
    for (let i = 0; i < s.length; i++) {
      if (
        s[i] === "a" ||
        s[i] === "e" ||
        s[i] === "i" ||
        s[i] === "o" ||
        s[i] === "u"
      ) {
        vowelArray.push(s[i]);
      } else {
        consonantArray.push(s[i]);
      }
    }
    console.log(vowelArray.concat(consonantArray).join("\n"));
  }

  //Here's a good solution that I found on HackerRank
  function vowelsAndConsonants(s){
      const vowels = "aeiou";
      let consonants = "";

      for(let i = 0; i < s.length; i++) {
          if(vowels.includes(s[i])){
              console.log(s[i])
          } else{
              consonants += s[i] + "\n"
          }
      }
    console.log(consonants.trim())
  }

  //Another cool solution from HackerRank
  function vowelsAndConsonants(s) {
    [...s].forEach(c => 'aeiou'.includes(c) ?
        console.log(c) : null);
    [...s].forEach(c => 'aeiou'.includes(c) ?
        null : console.log(c));
  }
  vowelsAndConsonants("javascriptloops");