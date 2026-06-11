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

      <view class="login-card">
        <view class="card-header">
          <text class="card-title">欢迎回来</text>
          <text class="card-subtitle">使用微信账号快速登录</text>
        </view>

        <button class="btn-wechat" :disabled="loading" @click="handleWechatLogin">
          <u-icon name="weixin-circle-fill" size="48rpx" color="#fff" />
          <text class="btn-text">{{ loading ? '登录中...' : '微信登录' }}</text>
        </button>

        <view class="login-tip">
          🛡️
          <text class="tip-text">微信登录安全可靠</text>
        </view>

        <view class="switch-login">
          <view class="switch-item" @click="goPasswordLogin">
            <u-icon name="lock" size="24rpx" color="#14b8a6" />
            <text class="switch-link">密码登录</text>
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

    <!-- 用户信息弹窗 -->
    <view v-if="showProfileModal" class="modal-mask" @tap.stop>
      <view class="modal-content">
        <view class="modal-header">
          <text class="modal-title">完善个人信息</text>
        </view>

        <view class="avatar-section">
          <button class="avatar-btn" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
            <image v-if="avatarUrl" class="avatar-preview" :src="avatarUrl" mode="aspectFill" />
            <view v-else class="avatar-placeholder">
              <text class="avatar-icon">📷</text>
              <text class="avatar-text">选择头像</text>
            </view>
          </button>
        </view>

        <view class="nickname-section">
          <text class="nickname-label">昵称</text>
          <input
            class="nickname-input"
            type="nickname"
            placeholder="点击获取或输入昵称"
            @input="onNicknameInput"
            @nicknamereview="onNicknameReview"
          />
        </view>

        <view class="phone-section">
          <text class="phone-label">手机号</text>
          <button class="phone-btn" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
            <text v-if="phone">{{ phone }}</text>
            <text v-else class="phone-placeholder">点击获取手机号</text>
          </button>
        </view>

        <view class="modal-footer">
          <button class="btn-skip" style="display: none" @click="skipProfile">跳过</button>
          <button class="btn-confirm" :disabled="!nickname" @click="confirmProfile">确定</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { apiWxLogin } from '@/api/index'
import { apiGetProfile, apiUpdateProfile, apiGetPhoneNumber } from '@/api/user'
import { useAuthStore } from '@/store/index'

const authStore = useAuthStore()
const loading = ref(false)
const showProfileModal = ref(false)
const avatarUrl = ref('')
const nickname = ref('')
const phone = ref('')

const handleWechatLogin = async () => {
  if (loading.value) return
  loading.value = true

  try {
    // 1. 调用微信登录接口获取 code
    const loginRes = await new Promise<UniApp.LoginRes>((resolve, reject) => {
      uni.login({
        provider: 'weixin',
        success: resolve,
        fail: reject
      })
    })

    // 2. 将 code 发送到后端换取 token
    const res = await apiWxLogin({ code: loginRes.code })

    // 3. 保存登录态
    if (res.code === 200) {
      authStore.setToken(res.data.token)

      // 4. 获取用户信息
      const profileRes = await apiGetProfile()
      if (profileRes.code === 200) {
        // 5. 首次登录，显示弹窗

        if (!profileRes.data.name) {
          showProfileModal.value = true
          return
        }

        // 6. 保存用户信息到 store
        authStore.setUserInfo({
          ...profileRes.data,
          role: ''
        })
      }

      uni.showToast({ title: '登录成功', icon: 'success' })

      // 7. 跳转首页
      setTimeout(() => {
        uni.switchTab({ url: '/pages/index/index' })
      }, 1000)
    } else {
      uni.showToast({ title: res.data.msg || '登录失败', icon: 'none' })
    }
  } catch (error: any) {
    console.error('微信登录失败:', error)
    const errMsg = error?.message || error?.errMsg || ''
    if (errMsg.includes('webapi_getwxaasyncsecinfo')) {
      uni.showToast({
        title: '登录环境异常，请检查微信配置',
        icon: 'none',
        duration: 2000
      })
    } else {
      uni.showToast({
        title: '登录失败，请稍后重试',
        icon: 'none'
      })
    }
  } finally {
    loading.value = false
  }
}

const onChooseAvatar = (e: any) => {
  const tempPath = e.detail.avatarUrl
  // 将临时文件复制到本地持久化存储
  uni.saveFile({
    tempFilePath: tempPath,
    success: res => {
      avatarUrl.value = res.savedFilePath
    },
    fail: () => {
      // 直接使用临时路径
      avatarUrl.value = tempPath
    }
  })
}

const onNicknameInput = (e: any) => {
  nickname.value = e.detail.value
}

const onNicknameReview = (e: any) => {
  if (e.detail.passNickname) {
    nickname.value = e.detail.passNickname
  }
}

const onGetPhoneNumber = async (e: any) => {
  if (e.detail.errMsg !== 'getPhoneNumber:ok') return
  try {
    const res = await apiGetPhoneNumber(e.detail.code)
    if (res.code === 200) {
      phone.value = res.data.phone
    }
  } catch (err) {
    uni.showToast({ title: '获取手机号失败', icon: 'none' })
  }
}

const skipProfile = async () => {
  showProfileModal.value = false
  uni.showToast({ title: '登录成功', icon: 'success' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/index/index' })
  }, 1000)
}

const confirmProfile = async () => {
  if (!nickname.value) return

  try {
    await apiUpdateProfile({
      name: nickname.value,
      avatar_url: avatarUrl.value
    })

    const profileRes = await apiGetProfile()
    if (profileRes.code === 200) {
      authStore.setUserInfo({
        ...profileRes.data,
        role: ''
      })
    }

    showProfileModal.value = false
    uni.showToast({ title: '登录成功', icon: 'success' })
    setTimeout(() => {
      uni.switchTab({ url: '/pages/index/index' })
    }, 1000)
  } catch (error) {
    uni.showToast({ title: '保存失败，请重试', icon: 'none' })
  }
}

const goAgreement = () => {
  uni.navigateTo({ url: '/pages/users/agreement/index' })
}
const goPrivacy = () => {
  uni.navigateTo({ url: '/pages/users/privacy/index' })
}
const goPasswordLogin = () => {
  uni.redirectTo({ url: '/pages/login/password' })
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
  padding: 0 48rpx;
  padding-top: 200rpx;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80rpx;
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

.login-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 32rpx;
  padding: 48rpx 36rpx;
  backdrop-filter: blur(20px);
  border: 1rpx solid rgba(255, 255, 255, 0.15);
  margin-bottom: 40rpx;
}

.card-header {
  text-align: center;
  margin-bottom: 48rpx;

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

.btn-wechat {
  width: 100%;
  height: 84rpx;
  background: linear-gradient(135deg, #07c160, #10b981);
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12rpx;
  border: none;
  box-shadow: 0 8rpx 24rpx rgba(7, 193, 96, 0.3);

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

.login-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  margin-top: 24rpx;

  .tip-text {
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.5);
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

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  width: 600rpx;
  background: #fff;
  border-radius: 32rpx;
  padding: 48rpx 40rpx;
}

.modal-header {
  text-align: center;
  margin-bottom: 40rpx;

  .modal-title {
    font-size: 36rpx;
    font-weight: 700;
    color: #1e293b;
  }
}

.avatar-section {
  display: flex;
  justify-content: center;
  margin-bottom: 40rpx;
}

.avatar-btn {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  background: #f1f5f9;
  border: 2rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &::after {
    border: none;
  }
}

.avatar-preview {
  width: 100%;
  height: 100%;
}

.avatar-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .avatar-icon {
    font-size: 48rpx;
  }

  .avatar-text {
    font-size: 22rpx;
    color: #64748b;
    margin-top: 20rpx;
  }
}

.nickname-section {
  margin-bottom: 40rpx;

  .nickname-label {
    font-size: 28rpx;
    color: #475569;
    margin-bottom: 16rpx;
    display: block;
  }

  .nickname-input {
    height: 88rpx;
    background: #f8fafc;
    border-radius: 16rpx;
    padding: 0 24rpx;
    font-size: 28rpx;
    border: 1rpx solid #e2e8f0;
  }
}

.phone-section {
  margin-bottom: 40rpx;

  .phone-label {
    font-size: 28rpx;
    color: #475569;
    margin-bottom: 16rpx;
    display: block;
  }

  .phone-btn {
    height: 88rpx;
    background: #f8fafc;
    border-radius: 16rpx;
    padding: 0 24rpx;
    font-size: 28rpx;
    border: 1rpx solid #e2e8f0;
    display: flex;
    align-items: center;

    &::after {
      border: none;
    }
  }

  .phone-placeholder {
    color: #94a3b8;
  }
}

.modal-footer {
  display: flex;
  gap: 24rpx;
}

.btn-skip {
  flex: 1;
  height: 88rpx;
  background: #f1f5f9;
  color: #64748b;
  font-size: 30rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    border: none;
  }
}

.btn-confirm {
  flex: 1;
  height: 88rpx;
  background: linear-gradient(135deg, #0d9488, #14b8a6);
  color: #fff;
  font-size: 30rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    border: none;
  }

  &[disabled] {
    opacity: 0.5;
  }
}
</style>
