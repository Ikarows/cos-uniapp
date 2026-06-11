<template>
  <view class="user-info-page">
    <view class="info-section">
      <view class="avatar-section" @click="changeAvatar">
        <text class="section-label">头像</text>
        <view class="avatar-right">
          <image class="avatar" :src="form.avatar || '/static/img/logo/logo.png'" mode="aspectFill" />
          <u-icon name="arrow-right" size="28rpx" color="#CBD5E1" />
        </view>
      </view>

      <view class="info-item">
        <text class="item-label">姓名</text>
        <u-input v-model="form.name" placeholder="请输入姓名" :border="false" input-align="right" />
      </view>

      <view class="info-item">
        <text class="item-label">手机号</text>
        <text class="item-value">{{ form.phone || '未绑定' }}</text>
      </view>

      <view class="info-item">
        <text class="item-label">所属组织</text>
        <text class="item-value readonly">{{ form.orgName || '--' }}</text>
      </view>

      <view class="info-item">
        <text class="item-label">所属部门</text>
        <text class="item-value readonly">{{ form.deptName || '--' }}</text>
      </view>
    </view>

    <view class="submit-wrap">
      <button class="btn-submit" :loading="loading" @click="handleSave">保存修改</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '@/store'
//import { apiGetUserInfo, apiUpdateUserInfo } from '@/api'

const authStore = useAuthStore()
const loading = ref(false)

const form = reactive({
  avatar: '',
  name: '',
  phone: '',
  orgName: '',
  deptName: ''
})

const loadUserInfo = async () => {
  try {
    const res: any = await apiGetUserInfo()
    if (res.data) {
      form.avatar = res.data.avatar || ''
      form.name = res.data.name || ''
      form.phone = res.data.phone || ''
      form.orgName = res.data.org_name || ''
      form.deptName = res.data.dept_name || ''
    }
  } catch (e) {
    // handled by interceptor
  }
}

const changeAvatar = () => {
  uni.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: res => {
      form.avatar = res.tempFilePaths[0]
    }
  })
}

const handleSave = async () => {
  if (!form.name.trim()) {
    uni.showToast({ title: '请输入姓名', icon: 'none' })
    return
  }

  loading.value = true
  try {
    await apiUpdateUserInfo({
      name: form.name,
      avatar: form.avatar
    })
    uni.showToast({ title: '保存成功', icon: 'success' })
    authStore.setUserInfo({
      ...authStore.userInfo!,
      name: form.name,
      avatar: form.avatar
    })
  } catch (e) {
    // handled by interceptor
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  //loadUserInfo()
})
</script>

<style lang="scss" scoped>
.user-info-page {
  min-height: 100vh;
  background: #f1f5f9;
  padding: 24rpx 32rpx;
}

.info-section {
  background: #fff;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
}

.avatar-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32rpx;
  border-bottom: 2rpx solid #f1f5f9;

  .section-label {
    font-size: 30rpx;
    color: #1e293b;
  }

  .avatar-right {
    display: flex;
    align-items: center;
    gap: 16rpx;
  }

  .avatar {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    background: #f1f5f9;
  }
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28rpx 32rpx;
  border-bottom: 2rpx solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  .item-label {
    font-size: 30rpx;
    color: #1e293b;
    flex-shrink: 0;
  }

  .item-value {
    font-size: 30rpx;
    color: #64748b;
    text-align: right;

    &.readonly {
      color: #94a3b8;
    }
  }
}

.submit-wrap {
  margin-top: 48rpx;

  .btn-submit {
    width: 100%;
    height: 96rpx;
    line-height: 96rpx;
    background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
    color: #fff;
    font-size: 32rpx;
    font-weight: 600;
    border-radius: 48rpx;
    border: none;
    box-shadow: 0 8rpx 24rpx rgba(13, 148, 136, 0.35);

    &::after {
      border: none;
    }
  }
}
</style>
