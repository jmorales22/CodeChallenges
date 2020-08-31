function countingValleys(n, s) {
    let valleys = 0;
    let seaLevel = 0;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === "D" && seaLevel === 0) {
        valleys += 1;
        seaLevel -= 1;
      } else if (s[i] === "D") {
        seaLevel -= 1;
      } else {
        seaLevel += 1;
      }
    }
    return valleys;
  }
  
  console.log(countingValleys(18, "UUUDDDDDDDUUDDUUUU"));