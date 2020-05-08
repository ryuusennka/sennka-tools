/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-06 17:59:04
 * @FilePath: /sennka-tools/src/Pager.js
 * @Description:
 */
function Pager(selector, options = {}) {
  // eg url: http://127.0.0.1:9001/test.html?name=foo&age=25&page=1#bar
  if (!(this instanceof Pager)) return new Pager(selector, options);
  const el = document.querySelector(selector);
  const hash = window.location.hash.substr || ''; // bar
  const pageParamKeyname = options.pageParamKeyname || 'page'; // 分页传参 keyname 默认 page
  const currentPage = options.currentPage || '1'; // 1: page=1
  const param = window.location.search.substr(1) || ''; // 获取 url 传参
  // 以下参数用于计算分页样式
  const totalElements = options.count * 1; // 总记录条数
  const currentPageElements = options.currentPageElements * 1 || 5; // 每页展示多少条
  const linkList = options.linkList * 1 || 5; // 每页显示几条链接数建议奇数，如 [1,2,3,4,5], 当前页是第三页 [10,11,12,13,14] 当前页是12页
  // 计算总页数
  const totalPages = Math.ceil(totalElements / currentPageElements); // 总页数 398/10->40 总共40页
  // 计算当前页左边有几个链接
  const leftLinkNums = Math.floor(linkList / 2);
  const left = Math.max(1, currentPage - leftLinkNums);
}

Pager.prototype = {
  /**
   * 获取 url 传参
   * @param {*} name
   * @param {*} url
   */
  getParameterByName: function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  },
  /**
   * 将字符串的传参转为对象形式
   * 如："name=foo&age=24" 得到 {name:"foo",age: 24}
   * @param {*} queryStr window.location.search.substr(1)
   * @returns {Object}
   */
  paramStrToObj: function (queryStr) {
    var param = queryStr.split('&');
    var obj = {};
    for (var i = 0; i < param.length; i++) {
      obj[param[i].split('=')[0]] = param[i].split('=')[1];
    }
    return obj;
  },
  /**
   * 将对象转为字符串形式的传参
   * 如 {name:"foo",age: 24} 得到 "name=foo&age=24"
   * @param {Object} obj
   * @returns {String}
   */
  objToParamStr: function (obj) {
    var str = '';
    for (let k in obj) {
      str += `${k}=${obj[k]}&`;
    }
    str = str.substr(0, str.length - 1);
    return str;
  },
};
