// 节流
throttle(func, wait) {
  let start = 0
  return function() {
    let now = Date.now()
    if (now - start >= wait) {
      func.apply(this, arguments)
      start = now
    }
  }
}


// 防抖
debounce(func, delay) {
    let timer = null
    return function() {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, arguments)
      }, delay)
    }
 },



// js获取地址的参数
getUrlParam(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = location.search.slice(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  } else {
    return null
  }
},


// 方法2
// @return: Object
getUrlParams() {
  let q = {}
  location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v)
  return q
},

// 方法3
let params = new URLSearchParams(location.search)
params.get('age')      // 获取
params.append('xyz')   // 添加
params.set('age', 20)  // 设置
params.toString()      // 转换为字符串




//rgb转16进制颜色
rgb2Hex(color) {
  let rgb = color.split(',')
  let r = parseInt(rgb[0].split('(')[1], 10)
  let g = parseInt(rgb[1], 10)
  let b = parseInt(rgb[2].split(')')[0], 10)
  let hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  return hex
},


// 格式化时间 (formatStr参数可选, 默认Y-M-D h:m:s) 时间格式化
fmtTime(formatStr, timestamp = 0) {
  if (arguments.length === 1) {
    formatStr = 'Y-M-D h:m:s'
    timestamp = arguments[0]
  }
  let tp = new Date(timestamp)
  let Y = tp.getYear()
  Y = Y < 1900 ? Y + 1900 : Y
  let o = {
    M: tp.getMonth() + 1,
    D: tp.getDate(),
    h: tp.getHours(),
    m: tp.getMinutes(),
    s: tp.getSeconds(),
  }
  for (let k in o) {
    o[k] = (o[k]+'').replace(/^(\d)$/, '0$1')
  }
  return formatStr.replace('Y', Y).replace('M', o.M).replace('D', o.D).replace('h', o.h).replace('m', o.m).replace('s', o.s)
},



// 设置概率, 根据传入的概率返回true或false
getProbability(prob = 0.5) {
  return prob > Math.random()
},



---html5桌面通知, 网站必须启用https----------------------------
const askNotification = () => {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('用户允许通知啦')
    } else if (permission === 'denied') {
      console.log('用户拒绝通知啦')
    }
  })
}
const showH5Notice = (tit = '', content = '') => {
  new Notification(tit, {
    body: content,
    tag: 'test',
    requireInteraction: true
  })
}

---------------------------------------------------


// js复制 - 推荐
copyText(text) {
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', text)
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
},


// js复制2
oCopy(ele) {
  var range = document.createRange();
  range.selectNode(ele);

  var selection = window.getSelection();
  selection.rangeCount > 0 && selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');
},



// 随机颜色
randColor() {
  return '#' + ('00000' + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6)
},


// 金额千分位逗号隔开
toThousands(num) {
  return (num+'').replace(/\B(?=(\d{3})+\b)/g, ',')
},


// 获取数组的随机项
randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
},


// 获取随机字符串 rand字符
randStr(len) {
  let str = ''
  while (str.length < len) {
    str += Math.random().toString(36).substr(2)
  }
  return str.substr(0, len)
},


// 获取随机数字
randNum(min, max) {
  if (arguments.length === 1) {
    min = 0
    max = arguments[0]
  }
  return Math.floor((Math.random() * (max - min + 1)) + min)
},


// js随机数组 (洗牌算法, 会改变原数组)
shuffle(arr) {
  arr = arr.slice()  
  let i = arr.length
  while (i) {
    let j = Math.floor(Math.random() * i--)
    ;[arr[j], arr[i]] = [arr[i], arr[j]]
  }
  return arr
},



本地存储封装(可设置过期时间) 封装本地存储 封装localStorage
setStore(key, value, expires) {
  if (typeof expires === 'number') {
    expires = expires + ~~(Date.now() / 1e3)
    value = value + '|' + expires
  }
  localStorage.setItem(key, value)
},
getStore(key) {
  let item = localStorage.getItem(key)
  if (item) {
    let now = ~~(Date.now() / 1e3)
    let mth = item.match(/\|\d{10}$/)
    let time = mth ? mth[0].slice(1) : Infinity
    if (time - now > 0) {
      return item.replace(/\|\d+$/, '')
    } else {
      localStorage.removeItem(key)
      return null
    }
  }
},



timeout替换setTimeout (sleep)
timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
},



保留小数后n位
// 四舍五入保留小数后n位
round(val, n = 2) {
  return Number(`${Math.round(`${val}e${n}`)}e-${n}`)
},

// 四舍五入保留小数后n位, 位数不足尾部填充零
roundStr(val, n = 2) {
  let rNum = Number(`${Math.round(`${val}e${n}`)}e-${n}`)
  return (rNum + '').replace(/^(-?[0-9]+\.?)([0-9]*)$/, ($m, $1, $2) => {
    return $2 ? `${$1}${$2.padEnd(n, 0)}` : `${$1}.${'0'.repeat(n)}`
  })
},



// 向下取整保留小数后n位
floor(val, n = 2) {
  return Number(`${Math.floor(`${val}e${n}`)}e-${n}`)
},

// 向下取整保留小数后n位, 位数不足尾部填充零
floorStr(val, n = 2) {
  let rNum = Number(`${Math.floor(`${val}e${n}`)}e-${n}`)
  return (rNum + '').replace(/^(-?[0-9]+\.?)([0-9]*)$/, ($m, $1, $2) => {
    return $2 ? `${$1}${$2.padEnd(n, 0)}` : `${$1}.${'0'.repeat(n)}`
  })
},


// 判断是否为数字,数值
isNumber(val) {
  return val === +val
  // toString.call(val) === '[object Number]' && !isNaN(val)
  // typeof val === number && !isNaN(val)
}


// js文件下载
downloadText(content, filename) {
  // 创建隐藏的可下载链接
  let el = document.createElement('a')
  el.download = filename
  el.style.display = 'none'
  // 字符内容转变成blob地址
  let blob = new Blob([content])
  el.href = URL.createObjectURL(blob)
  // 触发点击
  document.body.appendChild(el)
  el.click()
  // 然后移除
  document.body.removeChild(el)
},

// 或(下载指定url文件)
downloadUrl(url, name) {
  let obj = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
  obj.href = url
  obj.download = name
  let ev = document.createEvent('MouseEvents')
  ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  obj.dispatchEvent(ev)
},



// 移动端, 微信端, qq端, pc端浏览器检测, 判断客户端

isMobile() {
  return (/(iPhone|iPod|Android|ios)/i.test(navigator.userAgent))
}
isAndroid() {
  return (/(Android|Adr)/i.test(navigator.userAgent))
}
isIOS() {
  return (/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(navigator.userAgent))
}
isWx() {
  return (/micromessenger/i.test(navigator.userAgent))
}
isQQ() {
  return (/MQQBrowser/i.test(navigator.userAgent))
}



// 简单的深拷贝, 深复制, 克隆
simpleDeepClone(object) {
  return JSON.parse(JSON.stringify(object))
},


// 回到顶部过渡功能
backTopSlow() {
  const sTop = document.documentElement.scrollTop
  const innerFunc = () => {
    if (!document.documentElement.scrollTop) {
      return
    }
    document.documentElement.scrollTop -= sTop / 20
    requestAnimationFrame(innerFunc)
  }
  innerFunc()
},








