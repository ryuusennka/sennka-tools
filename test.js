/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 18:23:24
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-01 02:01:32
 * @FilePath: /sennka-libs/test.js
 * @Description:
 */

// const isHappy = num => {
//   if (num === 1) return true; // 如果传入的 1 就是快乐数
//   const tmp = num; // 临时变量保存传入的值
//   num = ('' + num).split('').map(v => v * 1); // 把传入的数字转成数组
//   const result = num.reduce(
//     (pre, next) => Math.pow(pre, 2) + Math.pow(next, 2)
//   ); // 计算一次
//   if (result === tmp) return false; // 结果如果跟传入的一样，说明不是开始无限循坏了，不是快乐数
//   if (result === 1) return true;
//   return isHappy(result);
// };

// const tmpArr = [];
// const isHappy = n => {
//   if (n === 1) return true;
//   const tmp = n;
//   n = String(n)
//     .split('')
//     .map(v => Number(v));
//   if (tmp < 10) n.unshift(0);
//   const result = n.reduce((pre, next) => Math.pow(pre, 2) + Math.pow(next, 2));
//   if (tmpArr.includes(result)) return false;
//   tmpArr.push(result);
//   if (tmp === result) return false;
//   return isHappy(result);
// };

// const isHappy = n => {
//   if (n === 1) return true;
//   const tmpArr = [];
//   const fn = num => {
//     const num2Arr = String(num)
//       .split('')
//       .map(v => Number(v));
//     console.log(num2Arr);
//     if (num < 10) num2Arr.unshift(0);
//     const result = num2Arr.reduce(
//       (pre, next) => Math.pow(pre, 2) + Math.pow(next, 2)
//     );
//     if (n === result) return false;
//     if (tmpArr.includes(result)) return false;
//     if (result === 1) return true;
//     tmpArr.push(result);
//     return fn(result);
//   };
//   return fn(n);
// };

const isHappy = n => {
  if (n === 1) return true;
  const arr = [];
  const result = sum(n);
  if (n === result) return false;
  if (arr.includes(result)) return false;
  arr.push(result);

};

function sum(n) {
  n = String(n);
  let _sum = 0;
  for (let s of n) {
    _sum += Math.pow(Number(s), 2);
  }
  return _sum;
}

function check(result,arr) {
  if (result === 1) return true;
  if (arr.includes(result)) return false;
}

// var isHappy = function (n) {
//   let res = sum(n);
//   let obj = {};
//   while (res != 1) {
//     if (res in obj) return false;
//     obj[res] = 1;
//     res = sum(res);
//   }
//   return true;
// };
// function sum(n) {
//   n = n + '';
//   let sum = 0;
//   for (let num of n) {
//     sum += num * num;
//   }
//   return sum;
// }

console.log(isHappy(78));
