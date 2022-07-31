//声明字符串
let str = 'JS5211314你知道么555啦啦啦'

//正向断言
/*const reg = /\d+(?=啦)/
const result = reg.exec(str)*/

//反向断言
const reg = /(?<=么)\d+/
const result = reg.exec(str)

console.log(result)