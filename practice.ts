// input prices = [7, 1, 5, 3, 6, 4]
// output 5 --> buy on day 2(1), and sellon day 5(6) 6 - 1 = 5
// remember you cant sell on day one before you even buy it

//@ts-ignore: Duplicate function name

function maxProfit(prices: number[]): number {
    let minPrice: number = Infinity;
    let maxProfit: number = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

// Initialize a variable minPrice to Infinity to keep track of the lowest price seen so far.

// Initialize maxProfit to 0 — this will track the largest profit possible.

// Loop through each price in the array:

// If price < minPrice, update minPrice to this price.

// Otherwise:

// Calculate potential profit: price - minPrice.

// If this profit is greater than maxProfit, update maxProfit.

// Return maxProfit at the end.
