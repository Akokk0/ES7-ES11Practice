const p = new Promise((resolve, reject) => {
    // resolve('成功的值')
    reject('失败啦！')
})

async function main() {

    try {
        let result = await p
        console.log(result)
    } catch (e) {
        console.log(e)
    }

}

main()