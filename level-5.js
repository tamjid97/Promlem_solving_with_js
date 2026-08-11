// Level 5: Advanced Core
// Focus: Closures, asynchronous JavaScript / Promise simulation, and recursion
// ======================================================================================
// 81. Closure Counter
// Create a function that returns another function which increments a private counter each time it is called.
// Input: const c=createCounter(); c(); c();
// Output: 1, 2
// ======================================================================================
// 82. Private Balance
// Use a closure to create deposit, withdraw, and getBalance functions around private balance data.
// Input: deposit(100); withdraw(30); getBalance()
// Output: 70
// ======================================================================================
// 83. Once Function
// Create a closure that allows a function to execute only once and returns the first result afterward.
// Input: once(fn); call twice with 5
// Output: first result returned both times
// ======================================================================================
// 84. Memoized Square
// Create a closure-based memoization function that caches square results.
// Input: square(8); square(8)
// Output: 64, 64 (second call uses cache)
// ======================================================================================
// 85. Custom Multiplier
// Create a function factory that returns functions multiplying numbers by a fixed value.
// Input: const double=multiplier(2); double(7)
// Output: 14
// ======================================================================================
// 86. Recursive Countdown
// Use recursion to return numbers from N down to 1.
// Input: 5
// Output: [5,4,3,2,1]
// ======================================================================================
// 87. Recursive Sum
// Use recursion to calculate the sum from 1 through N.
// Input: 5
// Output: 15
// ======================================================================================
// 88. Recursive Factorial
// Calculate N! using recursion.
// Input: 5
// Output: 120
// ======================================================================================
// 89. Recursive Fibonacci
// Return the Nth Fibonacci number using recursion.
// Input: 7
// Output: 13
// ======================================================================================
// 90. Recursive Array Sum
// Calculate an array's sum using recursion instead of loops.
// Input: [2,4,6,8]
// Output: 20
// ======================================================================================
// 91. Recursive Reverse String
// Reverse a string using recursion.
// Input: "hello"
// Output: "olleh"
// ======================================================================================
// 92. Recursive Palindrome
// Check whether a string is a palindrome using recursion.
// Input: "racecar"
// Output: true
// ======================================================================================
// 93. Flatten Nested Array Recursively
// Flatten an arbitrarily nested array using recursion.
// Input: [1,[2,[3,4]],5]
// Output: [1,2,3,4,5]
// ======================================================================================
// 94. Recursive Binary Search
// Search a sorted array recursively and return the target index.
// Input: [1,3,5,7,9], target=7
// Output: 3
// ======================================================================================
// 95. Promise Delay Simulation
// Create a Promise that resolves with "Done" after 1 second using setTimeout.
// Input: await delay(1000)
// Output: "Done"
// ======================================================================================
// 96. Promise Resolve/Reject
// Create a Promise that resolves for a positive number and rejects for zero or negative input.
// Input: checkNumber(5)
// Output: resolved: 5
// ======================================================================================
// 97. Promise Chain
// Simulate a three-step async workflow where each Promise passes its result to the next.
// Input: start() → addOne() → double()
// Output: final transformed value
// ======================================================================================
// 98. Async/Await Retry
// Write an async function that retries an asynchronous operation up to 3 times before failing.
// Input: flakyOperation()
// Output: success after retry or final error
// ======================================================================================
// 99. Parallel Promise Simulation
// Run three asynchronous tasks concurrently with Promise.all() and return their results in order.
// Input: taskA=1s, taskB=0.5s, taskC=0.2s
// Output: ["A","B","C"]
// ======================================================================================
// 100. Async Task Queue
// Build a small async queue that processes tasks sequentially, even when each task has a different delay.
// Input: tasks A(300ms), B(100ms), C(200ms)
// Output: ["A","B","C"]// Level 5: Advanced Core
// Focus: Closures, asynchronous JavaScript / Promise simulation, and recursion
// ======================================================================================
// 81. Closure Counter
// Create a function that returns another function which increments a private counter each time it is called.
// Input: const c=createCounter(); c(); c();
// Output: 1, 2
// ======================================================================================
// 82. Private Balance
// Use a closure to create deposit, withdraw, and getBalance functions around private balance data.
// Input: deposit(100); withdraw(30); getBalance()
// Output: 70
// ======================================================================================
// 83. Once Function
// Create a closure that allows a function to execute only once and returns the first result afterward.
// Input: once(fn); call twice with 5
// Output: first result returned both times
// ======================================================================================
// 84. Memoized Square
// Create a closure-based memoization function that caches square results.
// Input: square(8); square(8)
// Output: 64, 64 (second call uses cache)
// ======================================================================================
// 85. Custom Multiplier
// Create a function factory that returns functions multiplying numbers by a fixed value.
// Input: const double=multiplier(2); double(7)
// Output: 14
// ======================================================================================
// 86. Recursive Countdown
// Use recursion to return numbers from N down to 1.
// Input: 5
// Output: [5,4,3,2,1]
// ======================================================================================
// 87. Recursive Sum
// Use recursion to calculate the sum from 1 through N.
// Input: 5
// Output: 15
// ======================================================================================
// 88. Recursive Factorial
// Calculate N! using recursion.
// Input: 5
// Output: 120
// ======================================================================================
// 89. Recursive Fibonacci
// Return the Nth Fibonacci number using recursion.
// Input: 7
// Output: 13
// ======================================================================================
// 90. Recursive Array Sum
// Calculate an array's sum using recursion instead of loops.
// Input: [2,4,6,8]
// Output: 20
// ======================================================================================
// 91. Recursive Reverse String
// Reverse a string using recursion.
// Input: "hello"
// Output: "olleh"
// ======================================================================================
// 92. Recursive Palindrome
// Check whether a string is a palindrome using recursion.
// Input: "racecar"
// Output: true
// ======================================================================================
// 93. Flatten Nested Array Recursively
// Flatten an arbitrarily nested array using recursion.
// Input: [1,[2,[3,4]],5]
// Output: [1,2,3,4,5]
// ======================================================================================
// 94. Recursive Binary Search
// Search a sorted array recursively and return the target index.
// Input: [1,3,5,7,9], target=7
// Output: 3
// ======================================================================================
// 95. Promise Delay Simulation
// Create a Promise that resolves with "Done" after 1 second using setTimeout.
// Input: await delay(1000)
// Output: "Done"
// ======================================================================================
// 96. Promise Resolve/Reject
// Create a Promise that resolves for a positive number and rejects for zero or negative input.
// Input: checkNumber(5)
// Output: resolved: 5
// ======================================================================================
// 97. Promise Chain
// Simulate a three-step async workflow where each Promise passes its result to the next.
// Input: start() → addOne() → double()
// Output: final transformed value
// ======================================================================================
// 98. Async/Await Retry
// Write an async function that retries an asynchronous operation up to 3 times before failing.
// Input: flakyOperation()
// Output: success after retry or final error
// ======================================================================================
// 99. Parallel Promise Simulation
// Run three asynchronous tasks concurrently with Promise.all() and return their results in order.
// Input: taskA=1s, taskB=0.5s, taskC=0.2s
// Output: ["A","B","C"]
// ======================================================================================
// 100. Async Task Queue
// Build a small async queue that processes tasks sequentially, even when each task has a different delay.
// Input: tasks A(300ms), B(100ms), C(200ms)
// Output: ["A","B","C"]