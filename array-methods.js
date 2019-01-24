var dataset = require('./dataset.json');

const bankBalanceData = dataset.bankBalances;


/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/


//var hundredThousandairs = null;

const hundredThousandairs = bankBalanceData.filter((item,index,array) => {
  //console.log('item:',item);
  //console.log('index:',index);
  return item.amount > 100000;
});


 


// set sumOfBankBalances to be the sum of all value held at `amount` for each bank object



//const sumOfBankBalances = null;

var newArr = bankBalanceData.map((item) => {
  return parseInt(item.amount);
});

const sumOfBankBalances = newArr.reduce((prev, curr) => {
  return prev + curr;
});


/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest dollar 
  and then sum it all up into one value saved to `sumOfInterests`
 */


//var sumOfInterests = null;

const subSetStates = bankBalanceData.filter(function(item) {
  if(
  item.state === 'WI' ||
  item.state === 'IL' ||
  item.state === 'WY' ||
  item.state === 'OH' ||
  item.state === 'GA' ||
  item.state === 'DE'){

  return true;

  }
});

const isolateAmountInt = subSetStates.map(function(item){
  return Math.round(item.amount * .189);
});

const sumOfInterests = isolateAmountInt.reduce(function(total, int){
  return total + int;
}, 0);


// console.log('subSetStates:',subSetStates);
// console.log('isolateAmount:', isolateAmountInt);
// console.log('sumOfInterests:', sumOfInterests);


/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest dollar

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest dollar before moving on.
  )
 */

var stateSums = {};

const stateKeys = bankBalanceData.map(function(obj){
  stateSums[obj.state] = 0;
});

const stateAmounts = bankBalanceData.map(function(obj){
  stateSums[obj.state] += parseInt(obj.amount);
})

// console.log(stateSums);


/*
  for all states *NOT* in the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  sum the amount for each state (stateSum)
  take each `stateSum` and calculate 18.9% interest for that state
  sum the interest values that are greater than 50,000 and save it to `sumOfHighInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest dollar before moving on.
  )
 */

//var sumOfHighInterests = 0;

//GET RID OF ACCOUNTS WITH NOT STATES

const limitedStates = bankBalanceData.filter(function(obj){
  if(
    obj.state !== 'WI' &&
    obj.state !== 'IL' &&
    obj.state !== 'WY' &&
    obj.state !== 'OH' &&
    obj.state !== 'GA' &&
    obj.state !== 'DE' ){

      return true;
    }
});

//GET STATE SUM FOR ACCOUNTS THEN INT RATES (18.9%)

const limitedStateSum = {};

const limitedStateKeys = limitedStates.map(function(obj){
  limitedStateSum[obj.state] = 0;
});

const limitedStateAmounts = limitedStates.map(function(obj){
  limitedStateSum[obj.state] += Math.round(parseInt(obj.amount*.189));
})

console.log('limitedStateSum:', limitedStateSum);

const intAmountsOnly = (obj) => {
  return Object.values(obj);
};

const arrOfIntAmountsOnly = (intAmountsOnly(limitedStateSum));

console.log('arrOfIntAmountsOnly:', arrOfIntAmountsOnly);

const moreThan50k = arrOfIntAmountsOnly.filter(function(int){
  if(int > 50000){
    return true;
  }
})

console.log('moreThan50k:', moreThan50k);

const sumOfHighInterests = moreThan50k.reduce(function(total,int){
  return total + int;
}, 0);

console.log(sumOfHighInterests);






/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */
var lowerSumStates = null;

/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
var higherStateSums = null;

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
