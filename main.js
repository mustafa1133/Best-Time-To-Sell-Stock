/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

*/ 


var maxProfit = function(prices) {

    let minBuyPrice= Infinity;
    let maxProfit=0;

    for(let i=0; i< prices.length; i++)
    {
        if(prices[i] < minBuyPrice)
        {
            minBuyPrice= prices[i];
        }
        else if(prices[i] - minBuyPrice > maxProfit)
        {
            maxProfit= prices[i] - minBuyPrice;
        }
    }
    return maxProfit;
    
};

let arr= [7,6,4,3,1];
console.log(maxProfit(arr));

