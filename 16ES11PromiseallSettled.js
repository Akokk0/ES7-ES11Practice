//声明两个promise对象
const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('商品数据 - 1')
    }, 1000)

})

const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('商品数据 - 2')
    }, 1000)

})

//调用allSettled方法
const result = Promise.allSettled([p1, p2])
const res = Promise.all([p1, p2])

console.log(result)
console.log(res)

console.log(111)