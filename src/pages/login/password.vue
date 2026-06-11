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
          <text class="card-subtitle">使用您的账号登录系统</text>
        </view>

        <view class="form-group">
          <view class="input-wrap">
            <view class="input-icon">
              <u-icon name="account" size="36rpx" color="#94A3B8" />
            </view>
            <input
              v-model="form.username"
              class="form-input"
              placeholder="请输入用户名"
              placeholder-style="color: #94A3B8"
            />
          </view>

          <view class="input-wrap">
            <view class="input-icon">
              <u-icon name="lock" size="36rpx" color="#94A3B8" />
            </view>
            <input
              v-model="form.password"
              class="form-input"
              :password="!showPassword"
              placeholder="请输入密码"
              placeholder-style="color: #94A3B8"
            />
            <view class="eye-btn" @click="showPassword = !showPassword">
              <u-icon :name="showPassword ? 'eye' : 'eye-off'" size="36rpx" color="#94A3B8" />
            </view>
          </view>
        </view>

        <view class="form-options">
          <view class="remember-wrap" @click="rememberMe = !rememberMe">
            <view class="checkbox" :class="{ checked: rememberMe }">
              <text v-if="rememberMe" class="check-icon">✓</text>
            </view>
            <text class="remember-text">记住密码</text>
          </view>
          <text class="forgot-text">忘记密码？</text>
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
          <view class="switch-item" @click="goPhoneLogin">
            <u-icon name="phone-fill" size="24rpx" color="#14b8a6" />
            <text class="switch-link">手机号登录</text>
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
import { ref } from 'vue'

const form = ref({
  username: '',
  password: ''
})

const showPassword = ref(false)
const rememberMe = ref(true)

const handleLogin = () => {
  if (!form.value.username) {
    uni.showToast({ title: '请输入用户名', icon: 'none' })
    return
  }
  if (!form.value.password) {
    uni.showToast({ title: '请输入密码', icon: 'none' })
    return
  }
  uni.showToast({ title: '登录成功', icon: 'success' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/index/index' })
  }, 1500)
}

const handleWechatLogin = () => {
  uni.showToast({ title: '微信登录中...', icon: 'loading' })
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
const goPhoneLogin = () => {
  uni.redirectTo({ url: '/pages/login/phone' })
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
  border-radius: 20rpx;
  padding: 24rpx;
  margin-bottom: 20rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.1);

  .input-icon {
    margin-right: 16rpx;
  }

  .form-input {
    flex: 1;
    font-size: 28rpx;
    color: #fff;
  }

  .eye-btn {
    padding: 8rpx;
  }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36rpx;
}

.remember-wrap {
  display: flex;
  align-items: center;
  gap: 12rpx;
}

.checkbox {
  width: 36rpx;
  height: 36rpx;
  border-radius: 8rpx;
  border: 2rpx solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &.checked {
    background: #0d9488;
    border-color: #0d9488;
  }
}

.remember-text {
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.7);
}

.forgot-text {
  font-size: 26rpx;
  color: #14b8a6;
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

.social-btns {
  display: flex;
  justify-content: center;
}

.social-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
  padding: 24rpx 48rpx;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.1);

  .social-text {
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.7);
  }
}

.switch-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
  margin-top: 24rpx;

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
