//声明对象
const school = {
    name: '尚硅谷',
    cities: ['北京', '上海', '深圳'],
    xueke: ['前端', 'JAVA', '大数据', '运维']
}

/*console.log(Object.keys(school))
console.log(Object.values(school))
console.log(Object.entries(school))

//创建map
const m = new Map(Object.entries(school))
console.log(m)*/

//对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(school))

const obj = Object.create(null, {
    name: {
        //设置值
        value: '尚硅谷',
        //属性特征
        writable: true,
        configurable: true,
        enumerable: true
    }
})