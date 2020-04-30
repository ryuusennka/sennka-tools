/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 11:12:40
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-04-30 11:16:21
 * @FilePath: /sennka-tools/src/Array.js
 * @Description:
 */
/**
 * 生成连续的自然数数组
 * @param {Number} min
 * @param {Number} max
 */
export const generateContinuousNumber = (min, max) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};

/**
 * 把一个数组按几个分成一组,[1,2,3,4] separateArr(arr, 3) [[1,2,3], [4]]
 * @param {Array} arr 数组
 * @param {Number} n 分为几组
 */
export const separateArr = (arr, n) => {
  const N = Math.ceil(arr.length / n);
  const newArr = new Array(N).fill([]); // 空填充->空数组
  for (let i = 0; i < N; i++) {
    newArr[i] = arr.slice(i * n, n * (i + 1));
  }
  return newArr;
};

/**
 * 从数组中获取随机元素
 * @param {Array} arr
 */
export const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
