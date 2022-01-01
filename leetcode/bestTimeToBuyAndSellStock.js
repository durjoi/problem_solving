// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let currentBuy = Infinity;
    let profit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < currentBuy) {
            currentBuy = prices[i];
        }

        if(prices[i] - currentBuy > profit) {
            profit = prices[i] - currentBuy;
        }
    }

    return profit;
};

console.log(maxProfit([7,6,4,3,1]));