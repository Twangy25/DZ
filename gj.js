function calculateDeliveryCost(weight, distance) {
    let cost = 100;
  
    if (weight > 5) {
      cost += 50;
    }
    if (weight > 10) {
      cost += 100;
    }
  
    const distanceSurcharge = Math.ceil(distance / 100) * 200;
    cost += distanceSurcharge;
  
    return cost;
  }
  
  console.log(calculateDeliveryCost(3, 50));
  console.log(calculateDeliveryCost(7, 120));
  console.log(calculateDeliveryCost(12, 350));
  console.log(calculateDeliveryCost(1, 850));
  