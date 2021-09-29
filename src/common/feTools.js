/**
 * 工具类
 */

const Regex = {
  StudentName: /^(?![.·])[\u4E00-\u9FA5A-Za-z.·]+$/, // 不允许输入空格、阿拉伯数字以及除“·”以外的其它标点符号,()
  IdCardSimple: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/, // 身份证：15或18位，18位时最后一位可以为“X”
  ArmyIdCard: /^[\u4E00-\u9FA5]{1,}\d{8}$/, // 军官证：开头至少一位汉字+后续8位数字
  PasswordSimple: /^\d{6}$/, // 密码：6位数字
  Passport: /^[a-zA-Z0-9..·`~｀～]{1,9}$/, // 护照：不超过九位，允许英文、阿拉伯数字及相关标点符号“.·`~｀～”
  StudentCode: /^[GgJjLl]{1}\d{17}([Xx]|\d){1}$/, // 全国统一学籍号(中小学)：首位以“GgJjLl”开头+17位数字+X、x或数字结尾
  TelAreaCoe: /^(0|０)\d{2,4}/, // 固话-区号: 以0开头，2~4位纯数字
  Telephone: /^\d{4,9}$/, // 固话-电话: 4~9位纯数字
  ExtensionNumber: /^\d{1,4}$/, // 固话-分机号: 1~4位纯数字
  Email2: /^\w+@\w+(\.\w+)+(,\w+@\w+(\.\w+)+)*$/, // 标准邮箱格式XXX.XXX@XXX.XXX
  ZipCode: /^\d{6}$/, // 6位纯数字

  Name: /^[\u4E00-\u9FA5A-Za-z]+$/, // 姓名格式 汉字、英文大小写
  Number: /^[0-9]+(.[0-9]+)?$/, // 数字
  PositiveInteger0: /^([1-9]\d*|[0]{1,1})$/, // 正整数、0
  PositiveInteger: /^([1-9]\d*)$/, // 正整数
  Age: /^([1-9]\d*|0)$/,
  Money: /^[0-9]{1,9}(\.[0-9]{1})?$/, // 金额 保留 1 位小数
  NegativeMoney: /^(-|\+)?[0-9]{1,9}(\.[0-9]{1})?$/, // 金额 保留 1 位小数 可输入负数
  Money2: /^[0-9]{1,9}(\.[0-9]{1,2})?$/, // 金额 保留 2 位小数
  NegativeMoney2: /^(-|\+)?[0-9]{1,9}(\.[0-9]{1,2})?$/, // 金额 保留 2 位小数 可输入负数
  // 密码:密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
  Password: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  Chinese: /^[_\\W\\u4e00-\\u9fa5]{2,20}$/, // 中文
  // 邮箱地址
  Email: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  // 身份证
  IdCard:
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
  // 日期“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。
  Date: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
  // 手机号
  Phone: /^[1][3,4,5,6,7,8,9]\d{9}$/, // 1开头，第二位不允许为0、1、2，共11位纯数字
  MaskPhone: /^1\d{2}[*]{4}\d{4}$/,
  HKMobile: /^\d{8}$/, // 香港手机号或固话
  MaskHKMobile: /^\d{2}[*]{4}\d{2}$/, // 香港手机号或固话
  Integer: /^\d+$/, //整数

  //https://blog.csdn.net/lsj19830812/article/details/4137003/
  WindowsFileName:
    /^(?!((^(con)$)|^(con)\/..*|(^(prn)$)|^(prn)\/..*|(^(aux)$)|^(aux)\/..*|(^(nul)$)|^(nul)\/..*|(^(com)[1-9]$)|^(com)[1-9]\/..*|(^(lpt)[1-9]$)|^(lpt)[1-9]\/..*)|^\/s+|.*\/s$)(^[^/:/*/?/"/</>/|]{1,255}$)$/,
}
const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
let feTools = {
  add: function (a, b) {
    let c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return (e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) + this.mul(b, e)) / e
  },
  sub: function (a, b) {
    let c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return (e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) - this.mul(b, e)) / e
  },
  mul: function (a, b) {
    let c = 0,
      d = a.toString(),
      e = b.toString()
    try {
      c += d.split('.')[1].length
    } catch (f) {
      console.error(f)
    }
    try {
      c += e.split('.')[1].length
    } catch (f) {
      console.error(f)
    }
    return (Number(d.replace('.', '')) * Number(e.replace('.', ''))) / Math.pow(10, c)
  },
  div: function (a, b) {
    let c,
      d,
      e = 0,
      f = 0
    try {
      e = a.toString().split('.')[1].length
    } catch (g) {
      console.log(g)
    }
    try {
      f = b.toString().split('.')[1].length
    } catch (g) {
      console.log(g)
    }
    return (
      (c = Number(a.toString().replace('.', ''))),
      (d = Number(b.toString().replace('.', ''))),
      this.mul(c / d, Math.pow(10, f - e))
    )
  },
  formatDate: function (val, type) {
    if (!!val && val !== 'null' && val !== 'undefined') {
      val = val + ''
      let date = new Date(val.replace(/-/g, '/'))
      let Y = date.getFullYear() // 获取完整的年份(4位)
      let M = date.getMonth() + 1 // 获取月份(0-11,0代表1月,用的时候记得加上1)
      let D = date.getDate() // 获取日(1-31)
      let h = date.getHours() // 获取小时数(0-23)
      let m = date.getMinutes() // 获取分钟数(0-59)
      let s = date.getSeconds() // 获取秒数(0-59)
      switch (type) {
        case 'YYYY-MM-DD':
          return Y + '-' + (M < 10 ? '0' + M : M) + '-' + (D < 10 ? '0' + D : D)

        case 'YYYY-MM-DD hh:mm:ss':
          return (
            Y +
            '-' +
            (M < 10 ? '0' + M : M) +
            '-' +
            (D < 10 ? '0' + D : D) +
            ' ' +
            (h < 10 ? '0' + h : h) +
            ':' +
            (m < 10 ? '0' + m : m) +
            ':' +
            (s < 10 ? '0' + s : s)
          )
        default:
          break
      }
    } else {
      return '--'
    }
  },
  /**
   * @param obj Array
   * @return {}
   */
  clone(obj) {
    return this.checkType(obj, 'Object') || this.checkType(obj, 'Array')
      ? this.strToJson(this.jsonToStr(obj))
      : {}
  },
  Validate: {
    // 正则判断
    is(regex, str) {
      let boolean = false
      if (regex instanceof RegExp) {
        boolean = regex.test(str)
      } else if (typeof regex === 'string') {
        boolean = Regex[regex] && Regex[regex].test(str)
      }
      return boolean
    },
    reg(regKey) {
      return Regex[regKey]
    },
  },
  /**
   * 通过身份证号码获取出生年月日
   * @param idCard
   * @returns {string}
   */
  getBirthdayFromIdCard: function (idCard) {
    let birthday = ''
    if (idCard !== null && idCard !== '') {
      if (idCard.length === 15) {
        birthday = '19' + idCard.substr(6, 6)
      } else if (idCard.length === 18) {
        birthday = idCard.substr(6, 8)
      }
      birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')
    }
    return birthday
  },
  /**
   * 根据出生日期获取年龄
   * @param strBirthday
   * @returns {*}
   */
  getAgeByBirthday: function (strBirthday) {
    let returnAge
    let strBirthdayArr = strBirthday.split('-')
    let birthYear = parseInt(strBirthdayArr[0])
    let birthMonth = parseInt(strBirthdayArr[1])
    let birthDay = parseInt(strBirthdayArr[2])

    let d = new Date()
    let nowYear = d.getFullYear()
    let nowMonth = d.getMonth() + 1
    let nowDay = d.getDate()

    if (nowYear === birthYear) {
      returnAge = 0 // 同年 则为0岁
    } else {
      let ageDiff = nowYear - birthYear // 年之差
      if (ageDiff > 0) {
        if (nowMonth === birthMonth) {
          let dayDiff = nowDay - birthDay // 日之差
          if (dayDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        } else {
          let monthDiff = nowMonth - birthMonth // 月之差
          if (monthDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        }
      } else {
        returnAge = -1 // 返回-1 表示出生日期输入错误 晚于今天
      }
    }
    return returnAge // 返回周岁年龄
  },
  /**
   * 根据出生年份获取年龄
   * @param strBirthday
   * @returns {*}
   */
  getAgeByBirthdayYear: function (strBirthday) {
    let strBirthdayArr = strBirthday.split('-')
    let birthYear = parseInt(strBirthdayArr[0])
    let d = new Date()
    let nowYear = d.getFullYear()
    return nowYear - birthYear
  },
  /**
   * 遮盖字符串
   * @param str 待遮盖字符串
   * @param beginIndex
   * @param endIndex
   * @param maskStr
   * @returns {string}
   */
  maskStr: function (str, beginIndex, endIndex, maskStr) {
    let mask = maskStr || '*'
    let strAry = (str + '').split('')
    for (; beginIndex < endIndex; beginIndex++) {
      strAry[beginIndex] = mask
    }
    return strAry.join('')
  },
  async threadSleep(ms) {
    const SLEEP = timeout => new Promise(resolve => setTimeout(resolve, timeout))
    await SLEEP(ms)
    return true
  },
  delPx(value) {
    return Number(value.replace('px', ''))
  },
  getNavtiveStyle(el, attr) {
    return this.getComputedStyle(el, null).getPropertyValue(attr)
  },
  $jQuery(el) {
    return document.querySelector(el)
  },
  fix(num, length) {
    return ('' + num).length < length
      ? (new Array(length + 1).join('0') + num).slice(-length)
      : '' + num
  },
  /**
   * 获取当前日期时间 如2019-02-26 16:17:15
   * @returns {string}
   */
  getCurrentDateTime() {
    let date = new Date()
    let seperator1 = '-'
    let seperator2 = ':'
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    let currentDateTime =
      date.getFullYear() +
      seperator1 +
      month +
      seperator1 +
      strDate +
      ' ' +
      date.getHours() +
      seperator2 +
      date.getMinutes() +
      seperator2 +
      date.getSeconds()
    return currentDateTime
  },
  /**
   * 获取当前日期 2019-02-26
   * @returns {string}
   */
  getCurrentDate() {
    let date = new Date()
    let seperator1 = '-'
    let month = date.getMonth() + 1
    let strDate = date.getDate()
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    return date.getFullYear() + seperator1 + month + seperator1 + strDate
  },
  /**
   * 获取指定日期或当前日期，前后指定日间隔的日期
   * @param day
   * @param date
   * @returns {string} 2019-02-26
   */
  getAppointedDay(day, date) {
    let now = date || new Date()
    now.setDate(now.getDate() + day)
    return this.formatDate(now, 'YYYY-MM-DD')
  },
  toDate(dateStr) {
    return new Date(Date.parse(dateStr.replace(/-/g, '/')))
  },
  /**
   * 将日期时间字符串转成毫秒数
   * @param dateTimeStr 2019-02-26 20:10:34.0 或2019-02-26 20:10:45 注意月日补零
   * @returns {number}
   */
  getTime(dateTimeStr) {
    dateTimeStr = dateTimeStr.substring(0, 19)
    dateTimeStr = dateTimeStr.replace(/-/g, '/')
    return new Date(dateTimeStr).getTime()
  },
  /**
   * 根据开始和结束时分秒获取期间的时间轴
   * @param startTime {String} 开始时分秒（格式：HH:mm:ss）
   * @param endTime {String} 结束时分秒（格式：HH:mm:ss）
   * @param interval {Number} 时间间隔 ms
   * @param format {String} HH:mm
   */
  getTimeAxis(startTime, endTime, interval = 60 * 60 * 1000, format = 'HH:mm') {
    let startDate = new Date('2020/11/24 ' + startTime)
    let startDateTime = startDate.getTime()
    let endDate = new Date('2020/11/24 ' + endTime)
    let endDateTime = endDate.getTime()
    let result = []
    result.push(feTools.format(startDate, format))
    while (startDateTime < endDateTime) {
      startDateTime += interval
      let nextDate = new Date(startDateTime)
      result.push(feTools.format(nextDate, format))
    }
    return result
  },
  /**
   * 获取指定格式的日期时间
   * @param date {Date}new Date()
   * @param format {String}
   * @returns {*}
   * @example
   * dateUtils.format(new Date('2020-11-24 15:24:49'.replace(/-/g, '/')), 'yyyy/MM/dd HH:mm')
   *
   * 2020/11/24 15:24
   */
  format(date, format) {
    let d = date || new Date()
    const o = {
      'M+': d.getMonth() + 1,
      'd+': d.getDate(),
      'h+': d.getHours(),
      'H+': d.getHours(),
      'm+': d.getMinutes(),
      's+': d.getSeconds(),
      'q+': Math.floor((d.getMonth() + 3) / 3),
      S: d.getMilliseconds(),
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return format
  },
  addEvent(element, eType, handle, bol = false) {
    if (element.addEventListener) {
      // 如果支持addEventListener
      element.addEventListener(eType, handle, bol)
    } else if (element.attachEvent) {
      // 如果支持attachEvent
      element.attachEvent('on' + eType, handle)
    } else {
      // 否则使用兼容的onclick绑定
      element['on' + eType] = handle
    }
  },
  getComputedStyle(el) {
    let computedStyle = null
    if (window.getComputedStyle) {
      computedStyle = getComputedStyle(el, null)
    } else {
      computedStyle = el.currentStyle
    }
    return computedStyle
  },
  /**
   * 添加class
   * @param el
   * @param cls
   */
  addClass(el, cls) {
    if (!el) return
    let curClass = el.className
    let classes = (cls || '').split(' ')

    for (let i = 0, j = classes.length; i < j; i++) {
      let clsName = classes[i]
      if (!clsName) continue

      if (el.classList) {
        el.classList.add(clsName)
      } else if (!this.hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
    if (!el.classList) {
      el.className = curClass
    }
  },
  /**
   * 判断元素是否包含class
   * @param el
   * @param cls
   * @returns {boolean}
   */
  hasClass(el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
      return el.classList.contains(cls)
    } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
  },
  /**
   * 删除元素clsss
   * @param el
   * @param cls
   */
  removeClass(el, cls) {
    if (!el || !cls) return
    let classes = cls.split(' ')
    let curClass = ' ' + el.className + ' '

    for (let i = 0, j = classes.length; i < j; i++) {
      let clsName = classes[i]
      if (!clsName) continue

      if (el.classList) {
        el.classList.remove(clsName)
      } else if (this.hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
    if (!el.classList) {
      el.className = trim(curClass)
    }
  },
  /**
   * @param element
   * @param styleName
   * @param value
   */
  // 未使用代码，若无特殊用途，考虑删除
  // setStyle(element, styleName, value) {
  //   if (!element || !styleName) return

  //   if (typeof styleName === 'object') {
  //     for (let prop in styleName) {
  //       if (styleName.hasOwnProperty(prop)) {
  //         this.setStyle(element, prop, styleName[prop])
  //       }
  //     }
  //   } else {
  //     styleName = camelCase(styleName)
  //     if (styleName === 'opacity' /* && ieVersion < 9 */) {
  //       element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
  //     } else {
  //       element.style[styleName] = value
  //     }
  //   }
  // },
  /**
   *
   * @param data
   * @param type String Boolean Array Object Number
   * @returns {boolean}
   */
  checkType(data, type) {
    return Object.prototype.toString.call(data).slice(8, -1) === type
  },
  /**
   * s数组扁平化处理
   * @param arr
   */
  flatten(arr) {
    return arr.reduce((result, item) => {
      return result.concat(this.checkType(item, 'Array') ? this.flatten(item) : item)
    }, [])
  },
  /**
   * @returns {width: 0, height:0}
   */
  getClientSize() {
    if (window.innerHeight !== undefined) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    } else if (document.compatMode === 'CSS1Compat') {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      }
    } else {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }
    }
  },
  /**
   * @param str
   * @returns {{}}
   */
  strToJson(str) {
    return str ? JSON.parse(str) : {}
  },
  /**
   * @param obj
   * @returns {string}
   */
  jsonToStr(obj) {
    return obj ? JSON.stringify(obj) : ''
  },
  downFile(res, fileName) {
    const blob = new Blob([res])
    if ('download' in document.createElement('a')) {
      // 非IE下载
      const elink = document.createElement('a')
      elink.download = fileName
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href) // 释放URL 对象
      document.body.removeChild(elink)
    } else {
      // IE10+下载
      navigator.msSaveBlob(blob, fileName)
    }
  },
  /**
   * 处理responseType为Blob 响应结果为application/json格式的数据
   * @param res
   */
  exportErrorHandler: function (res) {
    const reader = new FileReader()
    const blob = new Blob([res])
    reader.onload = e => {
      try {
        let res = JSON.parse(e.target.result)
        if (res.Status * 1 !== 1 && res.Msg) {
          feTools.$confirm(res.Msg, 'warning')
        } else {
          feTools.$confirm(res, 'warning')
        }
      } catch (e) {
        feTools.$confirm('解析数据有误', 'warning')
      }
    }
    reader.readAsText(blob)
  },
  /**
   * 获取日期间隔天数  strDateEnd - strDateStart
   * @example "2019-12-19" - "2019-12-18" = 1
   * @param strDateStart
   * @param strDateEnd
   * @returns {Number|*}
   */
  getDays(strDateStart, strDateEnd) {
    //fix: Unexpected var, use let or const instead (no-var)
    let strSeparator = '-' // 日期分隔符
    let oDate1
    let oDate2
    let iDays
    oDate1 = strDateStart.split(strSeparator)
    oDate2 = strDateEnd.split(strSeparator)
    let strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2])
    let strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2])
    iDays = parseInt(Math.abs(strDateE.getTime() - strDateS.getTime()) / 1000 / 60 / 60 / 24) // 把相差的毫秒数转换为天数
    return iDays
  },
  /**
   * 判断是否属于windows操作系统
   * @returns {boolean}
   */
  isWindowSys() {
    /*let agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0) {
      return true;
    } else if (agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0) {
      return true;
    }
    return false;*/
    return navigator.platform === 'Win32' || navigator.platform === 'Windows'
  },
  /**
   * 遮盖手机号
   * @param val
   * @returns {string|*}
   */
  maskMobile(val) {
    // 判断是否为11位的纯数字
    if (Number(val) && String(val).length === 11) {
      let mobile = String(val)
      let reg = /^(\d{3})\d{4}(\d{4})$/
      return mobile.replace(reg, '$1****$2')
    } else {
      return val
    }
  },
  /**
   * 根据父级dom查找子节点样式类
   * @param parent {dom} 注意：parent是dom对象，不能为空，可以为document
   * @param cls
   * @returns {*}
   * @reference https://www.jb51.net/article/84995.htm
   */
  getByClass: function (parent, cls) {
    if (parent.getElementsByClassName) {
      return parent.getElementsByClassName(cls)
    } else {
      let res = []
      let reg = new RegExp(' ' + cls + ' ', 'i')
      let ele = parent.getElementsByTagName('*')
      for (let i = 0; i < ele.length; i++) {
        if (reg.test(' ' + ele[i].className + ' ')) {
          res.push(ele[i])
        }
      }
      return res
    }
  },
  /**
   * 数组去重
   * @param arr
   * @returns {Array}
   * @reference https://segmentfault.com/a/1190000016418021
   */
  unique(arr) {
    return Array.from(new Set(arr))
  },
  /**
   * 根据数组对象的某一key去重
   * @param arr
   * @param key
   * @returns {Array}
   */
  uniqueAryObject(arr, key) {
    let newObj = {},
      newArr = []
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (!newObj[item[key]]) {
        newObj[item[key]] = newArr.push(item)
      }
    }
    return newArr
  },
  /**
   *
   * @param sKey
   * @returns {string|null}
   */
  getCookie(sKey) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') +
              '\\s*\\=\\s*([^;]*).*$)|^.*$'
          ),
          '$1'
        )
      ) || null
    )
  },
}
export default feTools
