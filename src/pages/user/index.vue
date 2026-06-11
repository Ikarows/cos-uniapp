<template>
  <view class="user-page">
    <view class="user-header" :style="{ paddingTop: headerPaddingTop }">
      <view class="header-bg">
        <view class="bg-circle bg-circle-1" />
        <view class="bg-circle bg-circle-2" />
      </view>
      <view class="header-content">
        <view class="user-info" @click="goUserInfo">
          <view class="avatar-wrap">
            <view class="avatar-ring" />
            <image class="avatar-img" :src="userInfo.avatar_url || '/static/img/logo/logo.png'" mode="aspectFill" />
          </view>
          <view class="info-wrap">
            <text class="user-name">{{ userInfo.name }}</text>
            <text class="user-phone">{{ userInfo.phone }}</text>
            <view class="org-tag">
              <u-icon name="home" size="20rpx" color="#fff" />
              <text class="org-text">{{ userInfo.org }}</text>
            </view>
          </view>
          <u-icon name="arrow-right" size="32rpx" color="rgba(255,255,255,0.6)" />
        </view>
      </view>
    </view>

    <view class="stats-row">
      <view class="stat-item">
        <view class="stat-icon stat-icon-green">
          <u-icon name="star-fill" size="32rpx" color="#fff" />
        </view>
        <text class="stat-value">{{ userStats.score }}</text>
        <text class="stat-label">健康积分</text>
      </view>
      <view class="stat-divider" />
      <view class="stat-item">
        <view class="stat-icon stat-icon-orange">
          <u-icon name="calendar-fill" size="32rpx" color="#fff" />
        </view>
        <text class="stat-value">{{ userStats.workDays }}</text>
        <text class="stat-label">连续在岗(天)</text>
      </view>
      <view class="stat-divider" />
      <view class="stat-item">
        <view class="stat-icon stat-icon-red">
          <u-icon name="info-circle-fill" size="32rpx" color="#fff" />
        </view>
        <text class="stat-value">{{ userStats.alertCount }}</text>
        <text class="stat-label">预警次数</text>
      </view>
    </view>

    <view class="menu-section">
      <view class="menu-card">
        <view class="menu-group-title">
          <text>个人服务</text>
        </view>
        <view class="menu-item" @click="goPage('/pages/users/user_info/index')">
          <view class="menu-icon" style="background: linear-gradient(135deg, #ecfdf5, #d1fae5)">
            <u-icon name="account" size="40rpx" color="#0D9488" />
          </view>
          <text class="menu-label">个人资料</text>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>

        <view class="menu-item" @click="goPage('/pages/users/history_alerts/index')">
          <view class="menu-icon" style="background: linear-gradient(135deg, #fef2f2, #fee2e2)">
            <u-icon name="bell" size="40rpx" color="#EF4444" />
          </view>
          <text class="menu-label">历史预警</text>
          <view v-if="alertCount > 0" class="badge">
            <text class="badge-text">{{ alertCount }}</text>
          </view>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>

        <view class="menu-item" @click="goPage('/pages/users/location_track/index')">
          <view class="menu-icon" style="background: linear-gradient(135deg, #fff7ed, #ffedd5)">
            <u-icon name="map" size="40rpx" color="#F97316" />
          </view>
          <text class="menu-label">位置轨迹</text>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>
      </view>

      <view class="menu-card">
        <view class="menu-group-title">
          <text>更多功能</text>
        </view>
        <view class="menu-item" @click="goPage('/pages/users/referral_center/index')">
          <view class="menu-icon" style="background: linear-gradient(135deg, #fef3c7, #fde68a)">
            <u-icon name="share" size="40rpx" color="#F59E0B" />
          </view>
          <text class="menu-label">内推中心</text>
          <view class="referral-tag">
            <text class="referral-tag-text">3人</text>
          </view>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>

        <view class="menu-item" @click="goPage('/pages/users/settings/index')">
          <view class="menu-icon" style="background: linear-gradient(135deg, #f1f5f9, #e2e8f0)">
            <u-icon name="setting" size="40rpx" color="#64748B" />
          </view>
          <text class="menu-label">系统设置</text>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>

        <view class="menu-item" @click="goPage('/pages/users/about_us/index')">
          <view class="menu-icon" style="background: linear-gradient(135deg, #ede9fe, #ddd6fe)">
            <u-icon name="info-circle" size="40rpx" color="#8B5CF6" />
          </view>
          <text class="menu-label">关于我们</text>
          <text class="version-text">v1.0.0</text>
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>
      </view>
    </view>

    <!-- <view class="logout-wrap">
      <button class="btn-logout" @click="handleLogout">
        <u-icon name="close-circle-fill" size="32rpx" color="#EF4444" />
        <text class="logout-text">退出登录</text>
      </button>
    </view> -->

    <CopyrightInfo />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CopyrightInfo from '@/components/CopyrightInfo.vue'
import { useNavBarPadding } from '@/utils/useNavBarPadding'

const { paddingTop: headerPaddingTop } = useNavBarPadding(2)

const userInfo = ref({
  name: '张三',
  phone: '138****8888',
  org: '技术部',
  avatar: ''
})

const userStats = ref({
  score: 95,
  workDays: 28,
  alertCount: 2
})

const alertCount = ref(2)

const goUserInfo = () => {
  uni.navigateTo({ url: '/pages/users/user_info/index' })
}

const goPage = (url: string) => {
  uni.navigateTo({ url })
}

const handleLogout = () => {
  uni.showModal({
    title: '确认退出',
    content: '确定要退出登录吗？',
    confirmColor: '#0D9488',
    success: res => {
      if (res.confirm) {
        uni.showToast({ title: '已退出登录', icon: 'success' })
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.user-page {
  min-height: 100vh;
  background: #f8fafc;
}

.user-header {
  position: relative;
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%);
  padding-left: 32rpx;
  padding-right: 32rpx;
  padding-bottom: 60rpx;
  overflow: hidden;

  .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .bg-circle {
    position: absolute;
    border-radius: 50%;
  }

  .bg-circle-1 {
    width: 400rpx;
    height: 400rpx;
    background: rgba(255, 255, 255, 0.08);
    top: -100rpx;
    right: -100rpx;
  }

  .bg-circle-2 {
    width: 300rpx;
    height: 300rpx;
    background: rgba(255, 255, 255, 0.05);
    bottom: -80rpx;
    left: -50rpx;
  }

  .header-content {
    position: relative;
    z-index: 1;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 24rpx;
  }

  .avatar-wrap {
    position: relative;
    width: 120rpx;
    height: 120rpx;
  }

  .avatar-ring {
    position: absolute;
    top: -6rpx;
    left: -6rpx;
    right: -6rpx;
    bottom: -6rpx;
    border-radius: 50%;
    border: 3rpx solid rgba(255, 255, 255, 0.3);
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }

  .info-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8rpx;

    .user-name {
      font-size: 38rpx;
      font-weight: 800;
      color: #fff;
    }

    .user-phone {
      font-size: 26rpx;
      color: rgba(255, 255, 255, 0.7);
    }

    .org-tag {
      display: inline-flex;
      align-items: center;
      gap: 6rpx;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 20rpx;
      padding: 6rpx 16rpx;
      align-self: flex-start;
      border: 1rpx solid rgba(255, 255, 255, 0.2);

      .org-text {
        font-size: 22rpx;
        color: #fff;
      }
    }
  }
}

.stats-row {
  display: flex;
  align-items: stretch;
  margin: 28rpx 32rpx 24rpx;
  background: #fff;
  border-radius: 24rpx;
  padding: 28rpx 16rpx;
  box-shadow: 0 8rpx 32rpx rgba(13, 148, 136, 0.1);

  .stat-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .stat-icon {
      width: 72rpx;
      height: 72rpx;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12rpx;
    }

    .stat-icon-green {
      background: linear-gradient(135deg, #0d9488, #14b8a6);
      box-shadow: 0 4rpx 12rpx rgba(13, 148, 136, 0.3);
    }

    .stat-icon-orange {
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
      box-shadow: 0 4rpx 12rpx rgba(245, 158, 11, 0.3);
    }

    .stat-icon-red {
      background: linear-gradient(135deg, #ef4444, #f87171);
      box-shadow: 0 4rpx 12rpx rgba(239, 68, 68, 0.3);
    }

    .stat-value {
      font-size: 38rpx;
      font-weight: 800;
      color: #1e293b;
      line-height: 1.2;
    }

    .stat-label {
      font-size: 22rpx;
      color: #94a3b8;
      margin-top: 4rpx;
    }
  }

  .stat-divider {
    width: 1rpx;
    background: linear-gradient(180deg, transparent, #e2e8f0, transparent);
    margin: 8rpx 0;
  }
}

.menu-section {
  padding: 0 32rpx;
}

.menu-card {
  background: #fff;
  border-radius: 24rpx;
  margin-bottom: 24rpx;
  overflow: hidden;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.06);
}

.menu-group-title {
  display: flex;
  align-items: center;
  gap: 12rpx;
  padding: 24rpx 32rpx 8rpx;
  font-size: 26rpx;
  color: #94a3b8;
  font-weight: 500;

  .group-dot {
    width: 8rpx;
    height: 8rpx;
    border-radius: 50%;
    background: #0d9488;

    &.accent-dot {
      background: #f97316;
    }
  }
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 24rpx;
  padding: 28rpx 32rpx;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 104rpx;
    right: 32rpx;
    bottom: 0;
    height: 1rpx;
    background: #f1f5f9;
  }

  &:active {
    background: #f8fafc;
  }

  .menu-icon {
    width: 72rpx;
    height: 72rpx;
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-label {
    flex: 1;
    font-size: 30rpx;
    color: #0f172a;
    font-weight: 500;
  }

  .badge {
    min-width: 36rpx;
    height: 36rpx;
    background: linear-gradient(135deg, #ef4444, #f87171);
    border-radius: 18rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10rpx;

    .badge-text {
      font-size: 22rpx;
      color: #fff;
      font-weight: 600;
    }
  }

  .device-tag,
  .referral-tag {
    background: #ecfdf5;
    border-radius: 12rpx;
    padding: 4rpx 12rpx;

    .device-tag-text,
    .referral-tag-text {
      font-size: 22rpx;
      color: #059669;
      font-weight: 600;
    }
  }

  .referral-tag {
    background: #fef3c7;

    .referral-tag-text {
      color: #d97706;
    }
  }

  .version-text {
    font-size: 24rpx;
    color: #94a3b8;
    margin-right: 8rpx;
  }
}

.logout-wrap {
  padding: 40rpx 32rpx;

  .btn-logout {
    width: 100%;
    height: 96rpx;
    line-height: 96rpx;
    background: #fff;
    color: #ef4444;
    font-size: 30rpx;
    font-weight: 600;
    border-radius: 24rpx;
    border: none;
    box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rpx;

    &::after {
      border: none;
    }

    &:active {
      background: #fef2f2;
    }

    .logout-text {
      margin-left: 8rpx;
    }
  }
}
</style>
