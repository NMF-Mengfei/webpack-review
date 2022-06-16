/*
 * @Author: niumengfei
 * @Date: 2022-06-10 12:56:39
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-10 13:06:27
 */
function getComponent() {
    return import('lodash')
    .then(({ default: _ })=>{
        console.log('xxxxs', _);
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hellow', 'Webpack'], '嘿嘿嘿')
        return element;
    })
}
getComponent().then(component =>{
    document.body.appendChild(component)
})