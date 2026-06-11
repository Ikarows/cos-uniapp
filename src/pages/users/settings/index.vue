<template>
  <view class="settings-page">
    <view class="settings-card">
      <view class="setting-item">
        <text class="setting-label">健康预警推送</text>
        <u-switch v-model="settings.healthAlert" active-color="#0D9488" @change="saveSettings" />
      </view>

      <view class="setting-item">
        <text class="setting-label">每日健康报告</text>
        <u-switch v-model="settings.dailyReport" active-color="#0D9488" @change="saveSettings" />
      </view>
    </view>

    <view class="settings-card">
      <view class="setting-item" @click="goPage('/pages/users/change_password/index')">
        <text class="setting-label">修改密码</text>
        <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
      </view>
      <view class="setting-item danger" @click="handleDeactivate">
        <text class="setting-label">注销账号</text>
      </view>
    </view>

    <view class="settings-card">
      <view class="setting-item danger" @click="handleLogout">
        <text class="setting-label">退出登录</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '@/store'

const authStore = useAuthStore()

const settings = reactive({
  healthAlert: true,
  dailyReport: true,
  sedentaryReminder: true
})

const loadSettings = () => {
  const saved = uni.getStorageSync('userSettings')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      Object.assign(settings, parsed)
    } catch (e) {
      // ignore
    }
  }
}

const saveSettings = () => {
  uni.setStorageSync('userSettings', JSON.stringify(settings))
}

const goPage = (url: string) => {
  uni.navigateTo({ url })
}

const showPrivacy = () => {
  uni.showModal({
    title: '隐私政策',
    content: '隐私政策内容加载中...',
    showCancel: false
  })
}

const showAgreement = () => {
  uni.showModal({
    title: '用户协议',
    content: '用户协议内容加载中...',
    showCancel: false
  })
}

const handleLogout = () => {
  uni.showModal({
    title: '确认退出',
    content: '确定要退出登录吗？',
    confirmColor: '#0D9488',
    success: res => {
      if (res.confirm) {
        authStore.logout()
      }
    }
  })
}

const handleDeactivate = () => {
  uni.showModal({
    title: '注销账号',
    content: '注销后账号将被永久删除，且无法恢复。确定要注销吗？',
    confirmColor: '#EF4444',
    success: res => {
      if (res.confirm) {
        uni.showToast({ title: '请联系管理员注销', icon: 'none' })
      }
    }
  })
}

onMounted(() => {
  loadSettings()
})
</script>

<style lang="scss" scoped>
.settings-page {
  min-height: 100vh;
  background: #f1f5f9;
  padding: 24rpx 32rpx;
}

.settings-card {
  background: #fff;
  border-radius: 20rpx;
  margin-bottom: 24rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32rpx;
  border-bottom: 2rpx solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  &:active {
    background: #f8fafc;
  }

  .setting-label {
    font-size: 30rpx;
    color: #1e293b;
  }

  &.danger .setting-label {
    color: #ef4444;
  }
}
</style>
