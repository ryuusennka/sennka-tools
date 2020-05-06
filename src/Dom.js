/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-06 09:51:56
 * @FilePath: /sennka-libs/src/Dom.js
 * @Description:
 */

/**
 * 获取数组形式的 dom nodelist,以便使用数组方法
 * @param {*} selector
 * @param {*} context
 */
export const $$ = (selector, context = document) => {
  const elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
};

/**
 * https://davidwalsh.name/query-string-javascript?a=b&foo=bar#bigfoot
 * 获取 query string
 * @param {*} name
 */
export const getQueryString = name => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

/**
 * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 * @param {*} name
 * @param {*} url
 */
export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
