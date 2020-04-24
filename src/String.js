/*
 * @Author: ryuusennka
 * @Date: 2020-04-22 16:38:38
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-04-25 04:34:07
 * @FilePath: /sennka-libs/src/String.js
 * @Description:
 */

/**
 * 获取 hex 随机颜色
 */
export const randomColor = () => {
  function _format(num) {
    return (num = num.toString().length === 1 ? '0' + num : num);
  }

  let r = Math.round(Math.random() * 255); // 0~254 四舍五入得到 0~255
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  r = _format(r.toString(16));
  g = _format(g.toString(16));
  b = _format(b.toString(16));

  return r + '' + g + '' + b;
};

/**
 * 生成一个指定范围内的随机数
 * @param {Number} min
 * @param {Number} max
 */
export const randomNum = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
};

/**
 * 返回已经经过的大致时间
 * @param {Number} startTime 传入时间戳
 */
export const formatPassTime = startTime => {
  let currentTime = new Date() * 1,
    diff = currentTime - startTime,
    day = parseInt(diff / (1000 * 24 * 3600)),
    hour = parseInt(diff / (1000 * 3600)),
    min = parseInt(diff / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return `${year} 年前`;
  if (month) return `${month} 月前`;
  if (day) return `${day} 天前`;
  if (hour) return `${hour} 小时前`;
  if (min) return `${min} 分钟前`;
  return '刚刚';
};

/**
 * 返回倒计时时间
 * @param {Number} endTime 传入时间戳
 */
export const formatRemainTime = endTime => {
  let startDate = new Date() * 1; //开始时间
  let endDate = new Date(endTime) * 1; //结束时间
  let t = endDate - startDate; //时间差
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒';
};

/**
 * 格式化时间戳
 * @param {Number} timestamp 传入时间戳
 * @param {String} format 可选,传入自定义格式化 如Y-m-d H:i:s
 */
export const formatTime = (timestamp, format) => {
  if (!timestamp) return null;
  let aY = (am = '-'),
    ad = (_as = ' '),
    aH = (ai = ':');
  if (format) {
    // eg: 从Y不包含Y取到m不包含m
    aY = format.match(/Y(.*)m/)[1];
    am = format.match(/m(.*)d/)[1];
    ad = format.match(/d(.*)H/)[1];
    aH = format.match(/H(.*)i/)[1];
    ai = format.match(/i(.*)s/)[1];
    _as = format.substr(format.indexOf('s') + 1);
  }
  let date = new Date(timestamp),
    y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    h = date.getHours(),
    i = date.getMinutes(),
    s = date.getSeconds();

  d = d < 10 ? '0' + d : d;
  m = m < 10 ? '0' + m : m;
  h = h < 10 ? '0' + h : h;
  i = i < 10 ? '0' + i : i;
  s = s < 10 ? '0' + s : s;
  return y + aY + m + am + d + ad + h + aH + i + ai + s + _as;
};
