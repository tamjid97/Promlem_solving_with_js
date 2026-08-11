// Level 3: Advanced Array & Object Methods
// Focus: map, filter, reduce, find, and object manipulation
// ======================================================================================
// 41. Square with map
// Use map() to return the square of every number.
// Input: [2, 3, 4]
// Output: [4, 9, 16]
// ======================================================================================
// 42. Uppercase Names
// Use map() to convert every name to uppercase.
// Input: ["ali", "sara", "john"]
// Output: ["ALI", "SARA", "JOHN"]
// ======================================================================================
// 43. Filter Even Numbers
// Use filter() to keep only even numbers.
// Input: [1, 2, 3, 4, 6]
// Output: [2, 4, 6]
// ======================================================================================
// 44. Filter Adults
// Use filter() to keep people aged 18 or older.
// Input: [{name:"A",age:17},{name:"B",age:22}]
// Output: [{name:"B",age:22}]
// ======================================================================================
// 45. Find First User
// Use find() to return the first user whose id matches a target.
// Input: users=[{id:1},{id:3}], id=3
// Output: {id:3}
// ======================================================================================
// 46. Find Product by Name
// Use find() to locate a product with a given name.
// Input: products=[{name:"Pen",price:10},{name:"Book",price:50}], name="Book"
// Output: {name:"Book",price:50}
// ======================================================================================
// 47. Total with reduce
// Use reduce() to calculate the sum of an array.
// Input: [5, 10, 15]
// Output: 30
// ======================================================================================
// 48. Product with reduce
// Use reduce() to multiply all numbers together.
// Input: [2, 3, 4]
// Output: 24
// ======================================================================================
// 49. Total Cart Price
// Use reduce() to total the price × quantity of cart items.
// Input: [{price:10,qty:2},{price:25,qty:3}]
// Output: 95
// ======================================================================================
// 50. Group Passing Students
// Filter students scoring 50 or above.
// Input: [{name:"A",score:45},{name:"B",score:80}]
// Output: [{name:"B",score:80}]
// ======================================================================================
// 51. Extract Object Property
// Use map() to extract one property from an object array.
// Input: [{name:"A"},{name:"B"},{name:"C"}]
// Output: ["A","B","C"]
// ======================================================================================
// 52. Add Computed Property
// Use map() to add an isAdult property to each user.
// Input: [{name:"A",age:20},{name:"B",age:15}]
// Output: [{name:"A",age:20,isAdult:true},{name:"B",age:15,isAdult:false}]
// ======================================================================================
// 53. Count by Category
// Use reduce() to count how many products belong to each category.
// Input: [{cat:"book"},{cat:"pen"},{cat:"book"}]
// Output: {book:2, pen:1}
// ======================================================================================
// 54. Highest-Priced Product
// Use reduce() to return the product with the highest price.
// Input: [{name:"A",price:30},{name:"B",price:50}]
// Output: {name:"B",price:50}
// ======================================================================================
// 55. Average Score
// Use reduce() to calculate the average student score.
// Input: [{score:70},{score:90},{score:80}]
// Output: 80
// ======================================================================================
// 56. Object Keys to Array
// Convert an object's keys into an array using Object.keys().
// Input: {name:"Epick",age:17}
// Output: ["name","age"]
// ======================================================================================
// 57. Object Values to Array
// Convert an object's values into an array using Object.values().
// Input: {a:10,b:20,c:30}
// Output: [10,20,30]
// ======================================================================================
// 58. Merge Objects
// Combine two objects into a new object using spread syntax.
// Input: {name:"Epick"}, {age:17}
// Output: {name:"Epick",age:17}
// ======================================================================================
// 59. Update Object Immutably
// Create a new object with one property changed while keeping the original unchanged.
// Input: {name:"A",score:70}, score=90
// Output: {name:"A",score:90}
// ======================================================================================
// 60. Pipeline Challenge
// Filter numbers above 5, double them, then find their total.
// Input: [2,6,8,3,10]
// Output: 48// Level 3: Advanced Array & Object Methods
// Focus: map, filter, reduce, find, and object manipulation
// ======================================================================================
// 41. Square with map
// Use map() to return the square of every number.
// Input: [2, 3, 4]
// Output: [4, 9, 16]
// ======================================================================================
// 42. Uppercase Names
// Use map() to convert every name to uppercase.
// Input: ["ali", "sara", "john"]
// Output: ["ALI", "SARA", "JOHN"]
// ======================================================================================
// 43. Filter Even Numbers
// Use filter() to keep only even numbers.
// Input: [1, 2, 3, 4, 6]
// Output: [2, 4, 6]
// ======================================================================================
// 44. Filter Adults
// Use filter() to keep people aged 18 or older.
// Input: [{name:"A",age:17},{name:"B",age:22}]
// Output: [{name:"B",age:22}]
// ======================================================================================
// 45. Find First User
// Use find() to return the first user whose id matches a target.
// Input: users=[{id:1},{id:3}], id=3
// Output: {id:3}
// ======================================================================================
// 46. Find Product by Name
// Use find() to locate a product with a given name.
// Input: products=[{name:"Pen",price:10},{name:"Book",price:50}], name="Book"
// Output: {name:"Book",price:50}
// ======================================================================================
// 47. Total with reduce
// Use reduce() to calculate the sum of an array.
// Input: [5, 10, 15]
// Output: 30
// ======================================================================================
// 48. Product with reduce
// Use reduce() to multiply all numbers together.
// Input: [2, 3, 4]
// Output: 24
// ======================================================================================
// 49. Total Cart Price
// Use reduce() to total the price × quantity of cart items.
// Input: [{price:10,qty:2},{price:25,qty:3}]
// Output: 95
// ======================================================================================
// 50. Group Passing Students
// Filter students scoring 50 or above.
// Input: [{name:"A",score:45},{name:"B",score:80}]
// Output: [{name:"B",score:80}]
// ======================================================================================
// 51. Extract Object Property
// Use map() to extract one property from an object array.
// Input: [{name:"A"},{name:"B"},{name:"C"}]
// Output: ["A","B","C"]
// ======================================================================================
// 52. Add Computed Property
// Use map() to add an isAdult property to each user.
// Input: [{name:"A",age:20},{name:"B",age:15}]
// Output: [{name:"A",age:20,isAdult:true},{name:"B",age:15,isAdult:false}]
// ======================================================================================
// 53. Count by Category
// Use reduce() to count how many products belong to each category.
// Input: [{cat:"book"},{cat:"pen"},{cat:"book"}]
// Output: {book:2, pen:1}
// ======================================================================================
// 54. Highest-Priced Product
// Use reduce() to return the product with the highest price.
// Input: [{name:"A",price:30},{name:"B",price:50}]
// Output: {name:"B",price:50}
// ======================================================================================
// 55. Average Score
// Use reduce() to calculate the average student score.
// Input: [{score:70},{score:90},{score:80}]
// Output: 80
// ======================================================================================
// 56. Object Keys to Array
// Convert an object's keys into an array using Object.keys().
// Input: {name:"Epick",age:17}
// Output: ["name","age"]
// ======================================================================================
// 57. Object Values to Array
// Convert an object's values into an array using Object.values().
// Input: {a:10,b:20,c:30}
// Output: [10,20,30]
// ======================================================================================
// 58. Merge Objects
// Combine two objects into a new object using spread syntax.
// Input: {name:"Epick"}, {age:17}
// Output: {name:"Epick",age:17}
// ======================================================================================
// 59. Update Object Immutably
// Create a new object with one property changed while keeping the original unchanged.
// Input: {name:"A",score:70}, score=90
// Output: {name:"A",score:90}
// ======================================================================================
// 60. Pipeline Challenge
// Filter numbers above 5, double them, then find their total.
// Input: [2,6,8,3,10]
// Output: 48