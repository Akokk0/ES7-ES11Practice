//数组方法扩展

// flat 平，讲多维数组转化为低维数组
//const arr = [1, 2, 3, 4, [5, 6]]
//const arr = [1, 2, 3, 4, [5, 6, [7, 8, 9]]]

//参数为深度 是一个数字
/*console.log(arr.flat())  // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
console.log(arr.flat(2))  // [1, 2, 3, 4, 5, 6, 7, 8, 9]*/

//flatMap
const arr = [1, 2, 3, 4]
//将多维数组转化为低维数组
const result = arr.flatMap(item => [item * 10])
console.log(result)