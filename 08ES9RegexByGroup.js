/*
let str = '<a href="http://www.akokko.com">Akokko</a>'

const reg = /<a href="(.*)">(.*)<\/a>/

const result = reg.exec(str)

console.log(result)*/

//输出结果
/*[
    '<a href="http://www.akokko.com">Akokko</a>',
    'http://www.akokko.com',
    'Akokko',
    index: 0,
    input: '<a href="http://www.akokko.com">Akokko</a>',
    groups: undefined
]*/

let str = '<a href="http://www.akokko.com">Akokko</a>'

const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/

const result = reg.exec(str)

console.log(result.groups.url)

//输出结果
/*[
    '<a href="http://www.akokko.com">Akokko</a>',
        'http://www.akokko.com',
        'Akokko',
        index: 0,
    input: '<a href="http://www.akokko.com">Akokko</a>',
    groups: [Object: null prototype] {
    url: 'http://www.akokko.com',
        text: 'Akokko'
    }
]*/
