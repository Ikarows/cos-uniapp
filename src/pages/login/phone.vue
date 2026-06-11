<template>
  <view class="login-page">
    <view class="login-bg">
      <view class="bg-gradient" />
      <view class="bg-circle bg-circle-1" />
      <view class="bg-circle bg-circle-2" />
      <view class="bg-circle bg-circle-3" />
    </view>

    <view class="login-content">
      <view class="logo-section">
        <view class="logo-wrap">
          <image class="logo-img" src="/static/img/logo/logo.png" mode="aspectFit" />
        </view>
        <text class="app-name">智能手环</text>
        <text class="app-desc">守护健康，智享生活</text>
      </view>

      <view class="form-card">
        <view class="card-header">
          <text class="card-title">欢迎登录</text>
          <text class="card-subtitle">使用手机号验证码登录</text>
        </view>

        <view class="form-group">
          <view class="input-wrap">
            <view class="input-icon">
              <u-icon name="phone" size="36rpx" color="#94A3B8" />
            </view>
            <input
              v-model="form.phone"
              class="form-input"
              type="number"
              placeholder="请输入手机号"
              placeholder-style="color: #94A3B8"
              maxlength="11"
            />
          </view>

          <view class="input-wrap">
            <view class="input-icon">
              <u-icon name="email" size="36rpx" color="#94A3B8" />
            </view>
            <input
              v-model="form.code"
              class="form-input"
              type="number"
              placeholder="请输入验证码"
              placeholder-style="color: #94A3B8"
              maxlength="6"
            />
            <button class="code-btn" :disabled="countdown > 0" @click="getCode">
              <text>{{ countdown > 0 ? `${countdown}s` : '获取验证码' }}</text>
            </button>
          </view>
        </view>

        <button class="btn-login" @click="handleLogin">
          <text class="btn-text">登 录</text>
        </button>
      </view>

      <view class="other-login">
        <view class="divider">
          <view class="divider-line" />
          <text class="divider-text">其他登录方式</text>
          <view class="divider-line" />
        </view>

        <view class="switch-login">
          <view class="switch-item" @click="goWechatLogin">
            <u-icon name="weixin-circle-fill" size="24rpx" color="#07C160" />
            <text class="switch-link">微信登录</text>
          </view>
          <text class="switch-separator">|</text>
          <view class="switch-item" @click="goPasswordLogin">
            <u-icon name="lock" size="24rpx" color="#14b8a6" />
            <text class="switch-link">密码登录</text>
          </view>
        </view>
      </view>

      <view class="footer">
        <text class="footer-text">登录即表示同意</text>
        <text class="footer-link" @click="goAgreement">《用户协议》</text>
        <text class="footer-text">和</text>
        <text class="footer-link" @click="goPrivacy">《隐私政策》</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  phone: '',
  code: ''
})

const countdown = ref(0)

const getCode = () => {
  if (!form.phone) {
    uni.showToast({ title: '请输入手机号', icon: 'none' })
    return
  }
  if (form.phone.length !== 11) {
    uni.showToast({ title: '请输入正确的手机号', icon: 'none' })
    return
  }

  countdown.value = 60
  uni.showToast({ title: '验证码已发送', icon: 'success' })

  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

const handleLogin = () => {
  if (!form.phone) {
    uni.showToast({ title: '请输入手机号', icon: 'none' })
    return
  }
  if (form.phone.length !== 11) {
    uni.showToast({ title: '请输入正确的手机号', icon: 'none' })
    return
  }
  if (!form.code) {
    uni.showToast({ title: '请输入验证码', icon: 'none' })
    return
  }
  if (form.code.length !== 6) {
    uni.showToast({ title: '请输入6位验证码', icon: 'none' })
    return
  }

  uni.showToast({ title: '登录成功', icon: 'success' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/index/index' })
  }, 1500)
}

const goAgreement = () => {
  uni.navigateTo({ url: '/pages/users/agreement/index' })
}
const goPrivacy = () => {
  uni.navigateTo({ url: '/pages/users/privacy/index' })
}
const goWechatLogin = () => {
  uni.redirectTo({ url: '/pages/login/login' })
}
const goPasswordLogin = () => {
  uni.redirectTo({ url: '/pages/login/password' })
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  background: #0f172a;
  position: relative;
  overflow: hidden;
}

.login-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%);
    opacity: 0.3;
  }

  .bg-circle {
    position: absolute;
    border-radius: 50%;
  }

  .bg-circle-1 {
    width: 600rpx;
    height: 600rpx;
    background: rgba(13, 148, 136, 0.2);
    top: -200rpx;
    right: -100rpx;
  }

  .bg-circle-2 {
    width: 400rpx;
    height: 400rpx;
    background: rgba(20, 184, 166, 0.15);
    bottom: -100rpx;
    left: -100rpx;
  }

  .bg-circle-3 {
    width: 200rpx;
    height: 200rpx;
    background: rgba(45, 212, 191, 0.1);
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.login-content {
  position: relative;
  z-index: 1;
  padding: 180rpx 48rpx 40rpx;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60rpx;
}

.logo-wrap {
  position: relative;
  width: 160rpx;
  height: 160rpx;
  margin-bottom: 24rpx;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
}

.logo-img {
  width: 100%;
  height: 100%;
}

.app-name {
  font-size: 48rpx;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8rpx;
}

.app-desc {
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.6);
}

.form-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 32rpx;
  padding: 48rpx 36rpx;
  backdrop-filter: blur(20px);
  border: 1rpx solid rgba(255, 255, 255, 0.15);
  margin-bottom: 40rpx;
}

.card-header {
  margin-bottom: 36rpx;

  .card-title {
    font-size: 36rpx;
    font-weight: 700;
    color: #fff;
    display: block;
  }

  .card-subtitle {
    font-size: 26rpx;
    color: rgba(255, 255, 255, 0.6);
    display: block;
    margin-top: 8rpx;
  }
}

.form-group {
  margin-bottom: 24rpx;
}

.input-wrap {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16rpx;
  padding: 16rpx 20rpx;
  margin-bottom: 16rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.1);

  .input-icon {
    margin-right: 12rpx;
  }

  .form-input {
    flex: 1;
    font-size: 26rpx;
    color: #fff;
    height: 40rpx;
    line-height: 40rpx;
  }
}

.code-btn {
  padding: 8rpx 20rpx;
  background: rgba(13, 148, 136, 0.3);
  border-radius: 10rpx;
  border: none;
  height: 52rpx;
  display: flex;
  align-items: center;
  justify-content: center;

  text {
    font-size: 22rpx;
    color: #14b8a6;
  }

  &[disabled] {
    opacity: 0.5;

    text {
      color: #94a3b8;
    }
  }

  &::after {
    border: none;
  }
}

.btn-login {
  width: 100%;
  height: 84rpx;
  background: linear-gradient(135deg, #0d9488, #14b8a6);
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 8rpx 24rpx rgba(13, 148, 136, 0.3);

  .btn-text {
    font-size: 28rpx;
    font-weight: 600;
    color: #fff;
  }

  &:active {
    opacity: 0.85;
    transform: scale(0.98);
  }
}

.other-login {
  margin-bottom: 40rpx;
}

.divider {
  display: flex;
  align-items: center;
  margin-bottom: 32rpx;

  .divider-line {
    flex: 1;
    height: 1rpx;
    background: rgba(255, 255, 255, 0.15);
  }

  .divider-text {
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 24rpx;
  }
}

.switch-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;

  .switch-item {
    display: flex;
    align-items: center;
    gap: 6rpx;
  }

  .switch-icon {
    font-size: 24rpx;
  }

  .switch-link {
    font-size: 26rpx;
    color: #14b8a6;
  }

  .switch-separator {
    font-size: 26rpx;
    color: rgba(255, 255, 255, 0.3);
    padding: 0 8rpx;
  }
}

.footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rpx;

  .footer-text {
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.4);
  }

  .footer-link {
    font-size: 24rpx;
    color: #14b8a6;
  }
}
</style>
