<template>
  <view class="copyright">
    <view class="copyright-text">
      Copyright © {{ companyInfo.copyrightYear }} {{ companyInfo.shortName }} {{ companyInfo.copyrightText }}</view
    >
    <view class="copyright-company">{{ companyInfo.name }} 版权所有</view>
  </view>
</template>

<script setup lang="ts">
import { companyInfo } from '@/store'
</script>

<style lang="scss" scoped>
.copyright {
  padding: 40rpx 32rpx;
  text-align: center;
  background: transparent;
}

.copyright-text {
  font-size: 24rpx;
  color: #94a3b8;
  margin-bottom: 8rpx;
  font-weight: 500;
}

.copyright-company {
  font-size: 22rpx;
  color: #cbd5e1;
  font-weight: 400;
}
</style>
