function jumpingOnClouds(c) {
    let jumps = 0;
    let n = c.length;
  
    for (let i = 0; i < n; i++) {
      if (c[i] === 0 && c[i + 2] === 0) {
        jumps = jumps + 1;
        i = i + 1;
        continue;
      }
      if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 1) {
        jumps = jumps + 1;
        continue;
      }
      if (c[i] === 0 && c[i + 1] === 0 && !c[i + 2]) {
        jumps = jumps + 1;
        continue;
      }
    }
  
    return jumps;
  }