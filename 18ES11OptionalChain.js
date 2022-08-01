const config = {
    db: {
        host: '192.168.1.100',
        username: 'root'
    },
    cache: {
        host: '192.168.1.200',
        username: 'admin'
    }
}

function main(config) {
    //const dbHost = config && config.db && config.db.host  //如果不传递参数就会报错

    const dbHost = config ?. db ?. host  //如果不传递参数结果为undefined

    console.log(dbHost)
}

main(config)