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
