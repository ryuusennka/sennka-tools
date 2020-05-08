/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-08 23:50:24
 * @FilePath: /sennka-tools/src/Pager.js
 * @Description:
 */

function Pager(selector, options = { totalElements: 1000 }, cb) {
  if (!(this instanceof Pager)) return new Pager(selector, options, cb);
  this.el = document.querySelector(selector);
  if (cb) this.cb = cb;
  this.pageParamName = options.pageParamName || 'page';
  // this.urlHash = window.location.hash.substr(1) || '';
  if (!options.url) options.url = window.location.href;
  this.queryStr = window.location.search.substr(1) || '';
  this.queryObj = this.paramStrToObj(this.queryStr);
  this.currentPage = options.currentPage || 1;
  this.totalElements = options.totalElements * 1;
  this.size = options.size * 1 || 10;
  this.totalPages = Math.ceil(this.totalElements / this.size);
  this.links = options.links * 1 || 5;
  const leftNum = Math.floor(this.links / 2);
  let left = Math.max(1, this.currentPage - leftNum);
  const right = Math.min(this.totalPages, left + this.links - 1);
  left = Math.max(1, right - this.links + 1);
  this.pageLinks = [];
  for (let i = left; i <= right; i++) {
    // this.queryObj[this.pageParamName] = i;
    // this.pageLinks.push(this.objToParamStr(this.queryObj));
    this.pageLinks.push(this.queryObj.replace());
  }
  console.log(this.pageLinks);
}

Pager.prototype = {
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
