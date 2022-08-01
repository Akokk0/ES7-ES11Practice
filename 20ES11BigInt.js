//大整形
let n = 521n
console.log(n, typeof n)

//函数
 let n2 = 521
console.log(BigInt(n2))
//console.log(BigInt(1.2)) // 不能转化浮点型

//大数值运算
let max = Number.MAX_SAFE_INTEGER  //最大安全整数
console.log(max)
console.log(max + 1)
console.log(max + 2)  //不能再相加

console.log(BigInt(max))
//console.log(BigInt(max) + 1)  //BigInt不能直接和普通整型相加
//console.log(BigInt(max) + 2)

console.log(BigInt(max))
console.log(BigInt(max) + BigInt(1))
console.log(BigInt(max) + BigInt(2))