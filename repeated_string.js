function repeatedString(s, n) {
    let aCount = 0;
    let otherCount = 0;
    let remaining = n % s.length;
    let newString = s.slice(0, remaining);
    let check = Math.floor(n / s.length);
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
        aCount++;
      }
    }
    for (let j = 0; j < newString.length; j++) {
      if (newString[j] === "a") {
        otherCount++;
      }
    }
    return check * aCount + otherCount;
  }

  //Better answer from HackerRank discussion
  function repeatedString(s, n) {
    let c = 0,
        ca = 0,
        r = n % s.length
  
    for (let i = s.length; i-- > 0;) {
      if (s.charAt(i) == 'a') {
        ++c
  
        if (i < r)
          ++ca
      }
    }
  
    return ((n - r) / s.length * c) + ca
  }