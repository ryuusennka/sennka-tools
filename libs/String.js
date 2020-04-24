"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatTime=exports.formatRemainTime=exports.formatPassTime=exports.randomNum=exports.randomColor=void 0;/*
 * @Author: ryuusennka
 * @Date: 2020-04-22 16:38:38
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-04-25 04:34:07
 * @FilePath: /sennka-libs/src/String.js
 * @Description:
 */ /**
 * 获取 hex 随机颜色
 */var randomColor=function(){var c=Math.round;function a(a){return a=1===a.toString().length?"0"+a:a}var d=c(255*Math.random()),e=c(255*Math.random()),f=c(255*Math.random());// 0~254 四舍五入得到 0~255
return d=a(d.toString(16)),e=a(e.toString(16)),f=a(f.toString(16)),d+""+e+""+f};/**
 * 生成一个指定范围内的随机数
 * @param {Number} min
 * @param {Number} max
 */exports.randomColor=randomColor;var randomNum=function(a,b){return Math.round(a+Math.random()*(b-a))};/**
 * 返回已经经过的大致时间
 * @param {Number} startTime 传入时间戳
 */exports.randomNum=randomNum;var formatPassTime=function(a){var b=1*new Date,c=b-a,d=parseInt(c/86400000),e=parseInt(c/3600000),f=parseInt(c/60000),g=parseInt(d/30),h=parseInt(g/12);return h?"".concat(h," \u5E74\u524D"):g?"".concat(g," \u6708\u524D"):d?"".concat(d," \u5929\u524D"):e?"".concat(e," \u5C0F\u65F6\u524D"):f?"".concat(f," \u5206\u949F\u524D"):"\u521A\u521A"};/**
 * 返回倒计时时间
 * @param {Number} endTime 传入时间戳
 */exports.formatPassTime=formatPassTime;var formatRemainTime=function(a){var b=Math.floor,c=1*new Date,e=1*new Date(a),f=e-c,g=0,i=0,j=0,k=0;return 0<=f&&(g=b(f/1e3/3600/24),i=b(f/1e3/60/60%24),j=b(f/1e3/60%60),k=b(f/1e3%60)),g+"\u5929 "+i+"\u5C0F\u65F6 "+j+"\u5206\u949F "+k+"\u79D2"};/**
 * 格式化时间戳
 * @param {Number} timestamp 传入时间戳
 * @param {String} format 可选,传入自定义格式化 如Y-m-d H:i:s
 */exports.formatRemainTime=formatRemainTime;var formatTime=function(a,b){if(!a)return null;var c=am="-",e=_as=" ",f=ai=":";b&&(c=b.match(/Y(.*)m/)[1],am=b.match(/m(.*)d/)[1],e=b.match(/d(.*)H/)[1],f=b.match(/H(.*)i/)[1],ai=b.match(/i(.*)s/)[1],_as=b.substr(b.indexOf("s")+1));var g=new Date(a),j=g.getFullYear(),k=g.getMonth()+1,l=g.getDate(),n=g.getHours(),o=g.getMinutes(),p=g.getSeconds();return l=10>l?"0"+l:l,k=10>k?"0"+k:k,n=10>n?"0"+n:n,o=10>o?"0"+o:o,p=10>p?"0"+p:p,j+c+k+am+l+e+n+f+o+ai+p+_as};exports.formatTime=formatTime;
//# sourceMappingURL=String.js.map