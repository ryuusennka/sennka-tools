/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-15 10:50:45
 * @FilePath: /sennka-tools/src/Number.js
 * @Description:
 */

/**
 * 生成一个指定范围内的随机数
 * @param {Number}} min
 * @param {Number} max
 * @returns {Number} result
 */
export const generateSpecifiedRangeRandomNumbers = (min, max) => {
  return Math.random() * (max - min) + min;
  // eg: generateSpecifiedRangeRandomNumbers(3,5)
  // output: 4.257538027114805
  // 如果想要得到整数，可以用 Math.round(result) 处理下结果
  // 即 Math.round(generateSpecifiedRangeRandomNumbers(3,5))
};
