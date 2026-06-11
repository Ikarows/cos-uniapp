<template>
  <view class="about-page">
    <scroll-view scroll-y class="content-scroll">
      <view class="about-header">
        <image class="logo" src="/static/img/logo/logo.png" mode="aspectFit" />
        <text class="app-name">{{ companyInfo.shortName }}</text>
        <text class="app-version">v1.0.0</text>
      </view>

      <view class="about-card">
        <view class="about-item" @click="goPage('/pages/users/company_intro/index')">
          <text class="item-label">公司介绍</text>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>

        <view class="about-item" @click="goPage('/pages/users/agreement/index')">
          <text class="item-label">用户协议</text>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>

        <view class="about-item" @click="goPage('/pages/users/privacy/index')">
          <text class="item-label">隐私政策</text>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>

        <view class="about-item">
          <text class="item-label">客服电话</text>
          <text class="item-value" @click="callPhone">{{ companyInfo.phone }}</text>
        </view>

        <view class="about-item">
          <text class="item-label">客服邮箱</text>
          <text class="item-value" @click="copyEmail">{{ companyInfo.email }}</text>
        </view>
      </view>

      <CopyrightInfo />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { companyInfo } from '@/store'
import CopyrightInfo from '@/components/CopyrightInfo.vue'

const goPage = (url: string) => {
  uni.navigateTo({ url })
}

const callPhone = () => {
  uni.makePhoneCall({
    phoneNumber: companyInfo.phone,
    fail: () => {}
  })
}

const copyEmail = () => {
  uni.setClipboardData({
    data: companyInfo.email,
    success: () => {
      uni.showToast({ title: '已复制', icon: 'success' })
    }
  })
}
</script>

<style lang="scss" scoped>
.about-page {
  min-height: 100vh;
  background: #f1f5f9;
}

.content-scroll {
  height: 100vh;
}

.about-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60rpx 32rpx 40rpx;
  background: #fff;

  .logo {
    width: 160rpx;
    height: 160rpx;
    border-radius: 40rpx;
    margin-bottom: 24rpx;
    box-shadow: 0 8rpx 32rpx rgba(13, 148, 136, 0.2);
  }

  .app-name {
    font-size: 36rpx;
    font-weight: 700;
    color: #1e293b;
  }

  .app-version {
    font-size: 26rpx;
    color: #94a3b8;
    margin-top: 8rpx;
  }
}

.about-card {
  margin: 24rpx 32rpx;
  background: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
}

.about-item {
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

  .item-label {
    font-size: 30rpx;
    color: #1e293b;
  }

  .item-value {
    font-size: 28rpx;
    color: #0d9488;
  }
}
</style>
