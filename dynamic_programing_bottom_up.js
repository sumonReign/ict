function fibonacciSeries(n) {
    // Initialize an array to store Fibonacci numbers
    let dp = new Array(n + 1).fill(0);

    // Set the first two Fibonacci numbers
    if (n >= 1) dp[1] = 1;

    // Fill the array with Fibonacci numbers up to the n-th number
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Return the entire series
    return dp;
}

console.log(fibonacciSeries(10));