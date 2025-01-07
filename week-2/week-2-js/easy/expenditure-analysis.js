/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategoryy(transactions) {
  const spent = [];
  for(let i=0;i<transactions.length;i++) {
    if(spent.length==0) {
      const obj = {
        category:transactions[i].category,
        totalSpent:transactions[i].price
      }
      spent.push(obj);
      console.log(spent);
    }
    else {
      let bool=false;
      for(let j=0;j<spent.length;j++) {
        if(spent[j].category == transactions[i].category) {
          spent[j].totalSpent = spent[j].totalSpent + transactions[i].price;
          bool=true;
        }
      }
      if(!bool) {
        const obj = {
          category:transactions[i].category,
          totalSpent:transactions[i].price
        }
        spent.push(obj);

      }
    }
  }
  return spent;
}


//Another efficient way to write this can be using a map!
function calculateTotalSpentByCategory(transactions) {
  const map = new Map();
  //Used map as it stores as key-value pairs, so searching is easier!
  for(let i=0;i<transactions.length;i++) {
    if(map.has(transactions[i].category)) {
      const newPrice = map.get(transactions[i].category) + transactions[i].price
      map.set(transactions[i].category, newPrice)
    } else {
      map.set(transactions[i].category, transactions[i].price)
    }
  }

  const arr = Array.from (map, ([category, totalSpent])=> ({category, totalSpent}));
  return arr;
}

//for better understanding
const arr = Array.from(map, function(entry) {
  const category = entry[0]; // The key of the map entry
  const totalSpent = entry[1]; // The value of the map entry
  return { category, totalSpent }; // Return the transformed object
});

module.exports = calculateTotalSpentByCategory;