/*Rest参数与spread拓展运算符在ES6中已经引入，不过ES6中只针对于数组，
在ES9中为对象提供了像数组一样的rest参数和拓展运算符*/

function connect({host, port, ...user}) {
    console.log(host)
    console.log(port)
    console.log(user)
}

connect({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    type: 'master'
})

const skillOne = {
    q: '天音波'
}

const skillTwo = {
    w: '金钟罩'
}

const skillThree = {
    e: '天雷破'
}

const skillFour = {
    r: '神龙摆尾'
}

const mangsen = {...skillOne, ...skillTwo, ...skillThree, ...skillFour}

console.log(mangsen)