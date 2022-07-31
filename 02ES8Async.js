async function fn() {

    return new Promise((resolve, reject) => {
        reject('失败的错误')
    })

}

const result = fn()

result.then(value => {
    console.log(value)
}).catch(reason => {
    console.error(reason)
})