/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    const res = [];
    for(let i = 0; i < transactions.length; i++){
      let found = false;
      const category = transactions[i].category;
      for(let j = 0; j < res.length; j++){
        if(res[j].category === category){
          found = true;
          res[j].totalSpent += transactions[i].price;
          break;
        }
      }
      if(!found){
        res.push({
          "category": category,
          "totalSpent": transactions[i].price,
        })
      }
    }
    return res;
}

module.exports = calculateTotalSpentByCategory;