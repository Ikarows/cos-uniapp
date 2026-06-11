<template>
  <view class="privacy-page">
    <scroll-view scroll-y class="content-scroll">
      <view class="doc-body">
        <view class="doc-title">{{ companyInfo.shortName }}隐私政策</view>
        <view class="doc-subtitle">更新日期：2026年5月20日</view>
        <view class="doc-subtitle">生效日期：2026年5月20日</view>

        <view class="section">
          <view class="section-title">引言</view>
          <view class="section-text">
            <text>{{ companyInfo.name }}（以下简称"我们"）深知个人信息对您的重要性，我们将按照法律法规要求，采取相应安全保护措施，尽力保护您的个人信息安全可控。请您在使用我们的产品和服务前，仔细阅读并充分理解本隐私政策的全部内容。</text>
            <text>本政策将帮助您了解以下内容：</text>
            <text class="indent">1. 我们如何收集和使用您的个人信息；</text>
            <text class="indent">2. 我们如何使用 Cookie 和同类技术；</text>
            <text class="indent">3. 我们如何共享、转让、公开披露您的信息；</text>
            <text class="indent">4. 我们如何存储和保护您的信息；</text>
            <text class="indent">5. 您的权利；</text>
            <text class="indent">6. 本政策如何更新；</text>
            <text class="indent">7. 如何联系我们。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">一、我们收集的信息</view>
          <view class="section-text">
            <view class="sub-title">1.1 设备与日志信息</view>
            <text>当您使用本产品时，我们会自动收集部分设备和技术信息，包括：设备型号、操作系统版本、唯一设备标识符、移动网络信息、IP地址、软件版本号、操作日志等。</text>

            <view class="sub-title">1.2 账号信息</view>
            <text>当您注册账号时，我们需要收集您的手机号码、微信授权信息（如使用微信登录）、昵称、头像等基本信息。</text>

            <view class="sub-title">1.3 健康数据</view>
            <text>通过连接的智能手环设备，我们会采集以下健康相关数据：</text>
            <text class="indent">• 心率数据（实时心率、静息心率）；</text>
            <text class="indent">• 血氧饱和度数据；</text>
            <text class="indent">• 体温及腕温数据；</text>
            <text class="indent">• 血压数据（收缩压/舒张压）；</text>
            <text class="indent">• 运动数据（步数、距离、消耗热量）；</text>
            <text class="indent">• 睡眠数据（入睡时间、睡眠时长、深浅睡分布）；</text>
            <text>以上数据均来源于您的智能手环设备，仅在您主动同步或自动同步时上传。</text>

            <view class="sub-title">1.4 位置信息</view>
            <text>在您明确授权的情况下，我们可能获取您的位置信息用于记录运动轨迹。您可以随时在设置中关闭位置权限。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">二、我们如何使用信息</view>
          <view class="section-text">
            <text>我们收集的信息将用于以下目的：</text>
            <text class="indent">1. 提供、维护和改进本产品的核心功能与服务；</text>
            <text class="indent">2. 生成个人健康报告和趋势分析图表；</text>
            <text class="indent">3. 进行身份验证和安全保障；</text>
            <text class="indent">4. 向您发送服务通知和重要更新提醒；</text>
            <text class="indent">5. 分析产品使用情况以优化用户体验；</text>
            <text class="indent">6. 遵守法律法规要求的合规义务。</text>
            <text>除上述用途外，未经您事先同意，我们不会将您的个人信息用于其他目的。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">三、信息的共享与披露</view>
          <view class="section-text">
            <text>除以下情形外，我们不会与任何第三方共享您的个人信息：</text>
            <text class="indent">1. 事先获得您的明确同意；</text>
            <text class="indent">2. 根据法律法规或政府主管部门的强制性要求；</text>
            <text class="indent">3. 与我们的关联公司共享（仅限于提供服务所必需的范围）；</text>
            <text class="indent">4. 与可信赖的服务提供商共享（如云存储服务商、数据分析服务商），且该等服务提供商需遵守同等保密义务。</text>
            <text>我们绝不会向第三方出售您的个人信息。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">四、信息的存储与保护</view>
          <view class="section-text">
            <view class="sub-title">4.1 存储地点</view>
            <text>您的个人信息将存储于中华人民共和国境内的服务器上。如需跨境传输，我们将单独征得您的同意并确保符合法律法规要求。</text>

            <view class="sub-title">4.2 存储期限</view>
            <text>我们将在实现本政策所述目的所需的期限内保留您的个人信息，除非法律有强制的留存要求。在超出保留期限后，我们将对您的信息进行删除或匿名化处理。</text>

            <view class="sub-title">4.3 安全措施</view>
            <text>我们采用业界标准的安全防护措施保护您的个人信息，包括但不限于：</text>
            <text class="indent">• 数据传输加密（HTTPS/TLS）；</text>
            <text class="indent">• 敏感数据加密存储；</text>
            <text class="indent">• 访问控制和权限管理；</text>
            <text class="indent">• 安全审计和漏洞监测。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">五、您的权利</view>
          <view class="section-text">
            <text>根据相关法律法规，您享有以下权利：</text>
            <text class="indent">1. 访问权：您有权查阅我们持有的您的个人信息副本；</text>
            <text class="indent">2. 更正权：您有权更正不准确或不完整的个人信息；</text>
            <text class="indent">3. 删除权：在符合法律规定的前提下，您有权请求删除您的个人信息；</text>
            <text class="indent">4. 撤回同意：您可以随时撤回之前给予我们的授权同意；</text>
            <text class="indent">5. 注销账号：您可以申请注销账号，我们将删除您的个人信息或进行匿名化处理；</text>
            <text class="indent">6. 投诉举报：您有权向监管部门投诉或向我们反馈问题。</text>
            <text>如您需要行使上述权利，请通过本政策文末提供的联系方式与我们联系。我们将在15个工作日内予以答复。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">六、未成年人保护</view>
          <view class="section-text">
            <text>我们非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，请在法定监护人的陪同下阅读和判断是否同意本政策。</text>
            <text>如果我们发现自己在未事先获得监护人同意的情况下收集了未成年人的个人信息，我们将尽快删除相关数据。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">七、本政策的更新</view>
          <view class="section-text">
            <text>我们可能会适时对本政策进行修订。重大变更时，我们会在产品内通过弹窗等方式通知您。继续使用即表示您接受更新后的政策。建议您定期查看本政策以了解最新内容。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">八、联系我们</view>
          <view class="section-text">
            <text>如果您对本隐私政策有任何疑问、意见或建议，可通过以下方式联系我们：</text>
            <text class="indent">隐私专线：{{ companyInfo.phone }}（工作日 9:00-18:00）</text>
            <text class="indent">邮箱：{{ companyInfo.privacyEmail }}</text>
            <text class="indent">邮寄地址：{{ companyInfo.address }} 法务部收</text>
            <text class="indent">邮编：{{ companyInfo.postcode }}</text>
            <text>我们将在收到您的请求后15个工作日内予以回复。</text>
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
.privacy-page {
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

  .sub-title {
    display: block;
    font-weight: 600;
    color: #334155;
    margin-top: 20rpx;
    margin-bottom: 8rpx;
  }

  .indent {
    display: block;
    padding-left: 24rpx;
    position: relative;
    margin-bottom: 8rpx;

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
