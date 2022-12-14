let str = `
<ul>
    <li>
        <a>肖生克的救赎</a>
        <p>上映时间：1994-09-10</p>
    </li>
    <li>
        <a>阿甘正传</a>
        <p>上映时间：1994-07-06</p>
    </li>
</ul>`

//声明正则
/*const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/
const result = reg.exec(str)*/

const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs

let result
let data = []
while (result = reg.exec(str)) {
    data.push({title: result[1], time: result[2]})
}

console.log(data)