<template>
  <view class="agreement-page">
    <scroll-view scroll-y class="content-scroll">
      <view class="doc-body">
        <view class="doc-title">{{ companyInfo.shortName }}用户服务协议</view>
        <view class="doc-subtitle">更新日期：2026年5月20日</view>
        <view class="doc-subtitle">生效日期：2026年5月20日</view>

        <view class="section">
          <view class="section-title">一、协议的接受与生效</view>
          <view class="section-text">
            <text>欢迎使用「{{ companyInfo.shortName }}」（以下简称"本产品"或"我们"）提供的服务。本协议是您（以下简称"用户"）与{{ companyInfo.name }}（以下简称"公司"）之间关于使用本产品及相关服务所订立的协议。请您在使用本产品前仔细阅读本协议的全部内容。</text>
            <text>如果您不同意本协议的任何内容，您应当立即停止使用本产品。您的注册、登录、使用等行为将视为对本协议的接受，并同意受本协议约束。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">二、服务说明</view>
          <view class="section-text">
            <text>本产品是一款智能健康监测应用，主要功能包括但不限于：</text>
            <text class="indent">1. 心率监测：通过智能手环设备实时采集并展示心率数据；</text>
            <text class="indent">2. 血氧检测：采集血氧饱和度数据并提供趋势分析；</text>
            <text class="indent">3. 体温监测：记录腕温及体温变化趋势；</text>
            <text class="indent">4. 运动追踪：记录步数、运动时长及消耗热量；</text>
            <text class="indent">5. 健康评估：基于采集数据生成健康评分及周报分析；</text>
            <text class="indent">6. 设备管理：连接和管理智能手环设备，查看电量、信号状态等信息。</text>
            <text>本公司保留随时修改或中断服务的权利，无需事先通知用户。对于免费服务，公司有权随时调整服务内容。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">三、账号注册与使用</view>
          <view class="section-text">
            <text>用户在使用本产品的部分功能时需要注册账号。注册时应提供真实、准确、完整的个人信息。如信息发生变更，应及时更新。</text>
            <text>用户应妥善保管账号和密码，对账号下所有活动承担责任。如发现账号被盗用或存在安全漏洞，应立即通知公司。</text>
            <text>公司有权根据法律法规要求对用户进行实名认证。未完成认证的用户可能无法使用部分功能。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">四、用户行为规范</view>
          <view class="section-text">
            <text>用户承诺在使用本产品过程中遵守以下规定：</text>
            <text class="indent">1. 遵守中华人民共和国相关法律法规；</text>
            <text class="indent">2. 不得利用本产品从事任何违法或不正当活动；</text>
            <text class="indent">3. 不得干扰、破坏本产品的正常运行；</text>
            <text class="indent">4. 不得传播任何违法、侵权、虚假或不当信息；</text>
            <text class="indent">5. 不得将账号转让、出借或授权给第三方使用；</text>
            <text class="indent">6. 尊重他人隐私和知识产权。</text>
            <text>如违反上述规定，公司有权采取包括但不限于警告、限制功能、暂停或终止服务等措施。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">五、知识产权</view>
          <view class="section-text">
            <text>本产品中所有内容，包括但不限于文字、图片、音频、视频、软件、程序、界面设计、版面框架、数据资料等，其知识产权均归公司所有。</text>
            <text>未经公司书面许可，任何人不得以任何形式复制、传播、展示、修改本产品的任何部分，或用于商业目的。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">六、免责声明</view>
          <view class="section-text">
            <text>本产品提供的健康数据仅供参考，不构成医疗诊断建议。如有身体不适，请及时就医。</text>
            <text>因以下原因导致的服务中断或损失，公司不承担法律责任：</text>
            <text class="indent">1. 不可抗力因素（如自然灾害、政府行为等）；</text>
            <text class="indent">2. 用户自身操作不当或设备故障；</text>
            <text class="indent">3. 第三方服务原因导致的数据传输异常；</text>
            <text class="indent">4. 因网络问题导致的服务延迟或中断。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">七、协议变更与终止</view>
          <view class="section-text">
            <text>公司有权在必要时修改本协议条款。修改后的协议将在产品内公布，继续使用即表示接受修订后的条款。</text>
            <text>用户有权随时停止使用本产品并注销账号。公司有权在用户违反协议的情况下终止提供服务。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">八、争议解决</view>
          <view class="section-text">
            <text>因本协议引起的任何争议，双方应友好协商解决。协商不成的，任何一方可向公司所在地有管辖权的人民法院提起诉讼。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">九、联系我们</view>
          <view class="section-text">
            <text>如您对本协议有任何疑问，可通过以下方式联系我们：</text>
            <text class="indent">客服电话：{{ companyInfo.phone }}</text>
            <text class="indent">客服邮箱：{{ companyInfo.email }}</text>
            <text class="indent">公司地址：{{ companyInfo.address }}</text>
          </view>
        </view>

        <view class="doc-footer">
          <text>{{ companyInfo.name }}</text>
          <text>版权所有 © 2026</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { companyInfo } from '@/store'
</script>

<style lang="scss" scoped>
.agreement-page {
  min-height: 100vh;
  background: #f8fafc;
}

.content-scroll {
  height: 100vh;
}

.doc-body {
  padding: 32rpx;
  background: #fff;
  min-height: calc(100% - 64rpx);
}

.doc-title {
  font-size: 38rpx;
  font-weight: 800;
  color: #1e293b;
  text-align: center;
  margin-bottom: 16rpx;
}

.doc-subtitle {
  font-size: 24rpx;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 8rpx;
}

.section {
  margin-top: 40rpx;
}

.section-title {
  font-size: 30rpx;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16rpx;
  padding-left: 16rpx;
  border-left: 6rpx solid #0d9488;
}

.section-text {
  font-size: 26rpx;
  color: #475569;
  line-height: 1.8;

  text {
    display: block;
    margin-bottom: 12rpx;
  }

  .indent {
    display: block;
    padding-left: 24rpx;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 8rpx;
      top: 22rpx;
      width: 8rpx;
      height: 8rpx;
      border-radius: 50%;
      background: #cbd5e1;
    }
  }
}

.doc-footer {
  margin-top: 60rpx;
  padding-top: 32rpx;
  border-top: 2rpx solid #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rpx;

  text {
    font-size: 24rpx;
    color: #94a3b8;
  }
}
</style>
