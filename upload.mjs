'use strict'
// 引入scp2
import client from 'scp2'
// 下面三个插件是部署的时候控制台美化所用 可有可无
import ora from 'ora'
import chalk from 'chalk'
const spinner = ora(chalk.green('正在发布到服务器...'))
spinner.start()

const ENV = process.argv.splice(2)[0] // 获取对应环境参数

const serve = {
  dev: {
    // 测试服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  },
  pro: {
    // 正式服务器
    host: '', // 服务器的IP地址
    port: '22', // 服务器端口， 一般为 22
    username: '', // 用户名
    password: '', // 密码
    // privateKey: require('fs').readFileSync('D:\\key.ppk'),
    passphrase: 'private_key_password',
    path: '' // 项目部署的服务器目标位置
  }
}

client.scp('./dist/build/h5', serve[ENV], err => {
  spinner.stop()
  if (!err) {
    console.log(chalk.green(`项目发布${ENV}环境完毕!`))
  } else {
    console.log('err', err)
    console.log(chalk.green('发布失败!'))
  }
})
