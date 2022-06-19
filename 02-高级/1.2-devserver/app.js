/*
 * @Author: niumengfei
 * @Date: 2022-06-16 15:28:40
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-17 16:05:45
 */
console.log('Hello-webpack12355');
// fetch('/api/hello')
// .then(res =>{
//     console.log(res);
// }).catch(err =>{ console.log(err); })

const block = document.createElement('div')
block.style.cssText = `width: 200px; height: 200px; background: aliceblue` 
block.textContent = '牛梦菲真帅24444232~' 
document.body.appendChild(block)

console.log('module.hot:::', module.hot);