const fs = require('fs')

function readCongJunXing() {
    return new Promise((resolve, reject) => {
        fs.readFile('./res/从军行.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function readChuSai() {
    return new Promise((resolve, reject) => {
        fs.readFile('./res/出塞.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function readChangGeXing() {
    return new Promise((resolve, reject) => {
        fs.readFile('./res/长歌行.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

async function main() {
    let congJunXing = await readCongJunXing()
    let chuSai = await readChuSai()
    let changGeXing = await readChangGeXing()

    console.log(congJunXing.toString())
    console.log(chuSai.toString())
    console.log(changGeXing.toString())
}

main()