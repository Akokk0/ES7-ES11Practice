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

const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg

const result = str.matchAll(reg)

/*console.log(result)*/

/*for (let v of result) {
    console.log(v)
}*/

/*
const arr = [...result]

console.log(arr)*/

//以前的方法
while (data = reg.exec(str)) {
    console.log(data)
}
