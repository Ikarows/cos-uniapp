// 手机号验证
export const validatePhone = (tel: string) => {
  return /^(1[0-9][0-9])\d{8}$/.test(tel)
}

// 密码验证
export const validatePassword = (pass: any) => {
  return /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(pass)
}

// 节流处理
let spareTime: boolean = true
let clearTime: any = null
export const spare = (fun: any) => {
  if (spareTime === true) {
    clearTimeout(clearTime)
    fun()
    spareTime = false
    clearTime = setTimeout(() => {
      spareTime = true
    }, 3000)
  }
}

// 格式化时间
export const formatDateTime = (times: string, pattern: string) => {
  var date = new Date(times)
  let fmt = 'yyyy-MM-dd hh:mm:ss'
  if (pattern) {
    fmt = pattern
  }

  var o: any = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}
