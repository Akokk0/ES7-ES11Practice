//发送AJAX请求，返回的结果是Promise对象
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function sendAJAX(url) {
    return new Promise((resolve, reject) => {

        const xml = new XMLHttpRequest()
        xml.open('GET', url)
        xml.send()
        xml.onreadystatechange = () => {

            if (xml.readyState === 4) {
                if (xml.status >= 200 && xml.status < 300) {
                    resolve(xml.responseText)
                } else {
                    reject(xml.status)
                }
            }

        }

    })
}

//Promise then 方法测试
/*sendAJAX('http://www.baidu.com').then(value => {
    console.log(value)
}).catch(reason => {
    console.log(reason)
})*/

//async 与 await 测试
async function main() {
    try {
        let result = await sendAJAX('http://akokko.com')
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}

main()