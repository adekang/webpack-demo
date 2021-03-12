import xxx from './x.js'
import png from './1.png'
const div = document.querySelector('#app')
div.innerHTML = `
<img src="${png}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('失败了');
    })
}
div.appendChild(button)