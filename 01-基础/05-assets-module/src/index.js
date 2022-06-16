/*
 * @Author: niumengfei
 * @Date: 2022-04-30 16:34:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-05-04 15:46:09
 */
import hello from './hello.js'
import imgsrc from './assets/test.png'
import svgSrc from './assets/webpack-logo.svg'
import exampleText from './assets/example.txt' 
import jpgsrc from './assets/qianfeng-sem.jpg'

hello()

console.log('index.js loading...', imgsrc, svgSrc, exampleText);

const img = document.createElement('img'); 
img.src = imgsrc; 
document.body.appendChild(img)

const svg = document.createElement('img'); 
svg.src = svgSrc; 
document.body.appendChild(svg)

const block = document.createElement('div')
block.style.cssText = `width: 200px; height: 200px; background: aliceblue` 
block.textContent = exampleText 
document.body.appendChild(block)

const jpg = document.createElement('img'); 
jpg.src = jpgsrc; 
document.body.appendChild(jpg)