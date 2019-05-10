// 5种方式实现值交换
// 下面几种方式都行
// 1. var temp = a; a = b; b = temp; (传统，但需要借助临时变量)
// 2. a ^= b; b ^= a; a ^= b; (需要两个整数)
// 3. b = [a, a = b][0] (借助数组)
// 4. [a, b] = [b, a]; (ES6，解构赋值)
// 5. a = a + b; b = a - b; a = a - b; (小学奥赛题)
// 去掉小数部分

// parseInt(num)
// ~~num
// num >> 0
// num | 0
// 克隆数组
// 数组去重
// // ES6
// Array.from(new Set(arr))

// // ES5
// arr.filter(export  function(ele, index, array){
//     return index===array.indexOf(ele)
// })
// arr.slice(0)
import React from 'react';
export function isInt(x) {
    return (x ^ 0) === x
}
// return Math.round(x) === x
// return (typeof x === 'number') && (x % 1 === 0)
// ES6 -> Number.isInteger()
/**
 * 随机颜色
 */
export function getRandomColor() {
    return '#'+ Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
}
/**
 * 递归求阶乘
 * @param {*} n 
 */
export function factorial(n) {
    return (n > 1) ? n * f(n - 1) : n
}
/**
 * 判断符号是否相同
 * @param {*} a 
 * @param {*} b 
 */
export function sameSign(a, b) {
    return (a ^ b) >= 0
}
//   数组最大值
export function maxArr(arr) {
    return Math.max.apply(null, arr)
}
// 数组最小值
export function minArr(arr) {
    return Math.min.apply(null, arr)
}
// 随机获取数组的一个成员
export function randomOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
// // 产生随机颜色
// export function getRandomColor() {
//     return `#${Math.random().toString(16).substr(2, 6)}`
// }
// 随机生成指定长度的字符串
export function randomStr(n) {
    let standard = 'abcdefghijklmnopqrstuvwxyz9876543210'
    let len = standard.length
    let result = ''

    for (let i = 0; i < n; i++) {
        result += standard.charAt(Math.floor(Math.random() * len))
    }

    return result
}
// 深拷贝
// JSON.parse(JSON.stringify(obj))
// // 打印出来看看
// console.log(([][[]] + [])[+!![]] + ([] + {})[!+[] + !![]])

// console.log((!(~+[]) + {})[--[~+''][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]])
// // 美化console
// console.info("%c哈哈", "color: #3190e8; font-size: 30px; font-family: sans-serif");

