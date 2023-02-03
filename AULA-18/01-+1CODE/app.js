function calculateTip(purchaseAmount, tipPercentage) {
    return purchaseAmount + (purchaseAmount * (tipPercentage / 100));
  }
  
  const purchaseAmount = 100;
  const tipPercentage = 13;
  const totalAmount = calculateTip(purchaseAmount, tipPercentage);
  console.log(totalAmount);