const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];

  let lineTotal = lineItems.reduce((acumulator, currentValue) => {
      return acumulator + currentValue.total;
  }, 0);

  console.log("Total: ", lineTotal);