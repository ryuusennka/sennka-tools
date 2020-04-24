"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.separateArr=exports.generateContinuousNumber=void 0;/**
 * 生成连续的自然数数组
 * @param {Number} min
 * @param {Number} max
 */var generateContinuousNumber=function(a,b){for(var c=[],d=a;d<=b;d++)c.push(d);return c};/**
 * 把一个数组按几个分成一组,[1,2,3,4] separateArr(arr, 3) [[1,2,3], [4]]
 * @param {Array} arr 数组
 * @param {Number} n 分为几组
 */exports.generateContinuousNumber=generateContinuousNumber;var separateArr=function(a,b){// 空填充->空数组
for(var c=Math.ceil(a.length/b),d=Array(c).fill([]),e=0;e<c;e++)d[e]=a.slice(e*b,b*(e+1));return d};exports.separateArr=separateArr;
//# sourceMappingURL=Array.js.map