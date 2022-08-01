//静态 import
/*import * as m1 from './19Hello.js'*/

const btn = document.getElementById('btn')
/*btn.onclick = function () {
    m1.hello()
}*/

//动态import
btn.onclick = function () {
    import('./19Hello.js').then(module => module.hello())
}

