/*
 * @Author: niumengfei
 * @Date: 2022-04-30 16:34:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-05-04 18:13:07
 */
import hello from './hello.js'
import imgsrc from './assets/test.png'
import svgSrc from './assets/webpack-logo.svg'
import exampleText from './assets/example.txt' 
import jpgsrc from './assets/qianfeng-sem.jpg'
import '../style.css'
import '../style.less'
hello()

console.log('index.js loadingx...', imgsrc, svgSrc, exampleText);

const img = document.createElement('img'); 
img.src = imgsrc; 
document.body.appendChild(img)

const svg = document.createElement('img'); 
svg.src = svgSrc; 
document.body.appendChild(svg)

const block = document.createElement('div')
block.style.cssText = `width: 200px; height: 200px; background: aliceblue` 
block.classList.add('block-bg')
block.textContent = exampleText 
document.body.appendChild(block)

const jpg = document.createElement('img'); 
jpg.src = jpgsrc; 
document.body.appendChild(jpg)

document.body.classList.add('myColor')
document.body.classList.add('world')