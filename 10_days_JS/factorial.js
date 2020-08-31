function factorial(n) {
    let amount = 1;
  
    for (let i = 1; i <= n; i++) {
      amount = i * amount;
    }
    return amount;
  }