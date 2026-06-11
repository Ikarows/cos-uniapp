<template>
  <view class="intro-page">
    <scroll-view scroll-y class="content-scroll">
      <view class="doc-body">
        <view class="intro-header">
          <image class="intro-logo" src="/static/img/logo/logo.png" mode="aspectFit" />
          <text class="company-name">{{ companyInfo.shortName }}</text>
        </view>

        <view class="hero-section">
          <view class="hero-tag">企业级智能健康管理解决方案</view>
          <text class="hero-slogan">全方位员工健康监测 · 智能化数据平台</text>
          <text class="hero-desc"
            >融合物联网智能手环、移动端应用与后台管理系统，为企业提供从健康数据采集、智能分析到异常预警的全链路解决方案，助力企业构建安全、高效、健康的办公环境。</text
          >

          <view class="feature-list">
            <view class="feature-item">
              <view class="feature-icon">
                <u-icon name="heart-fill" size="32rpx" color="#0D9488" />
              </view>
              <view class="feature-info">
                <text class="feature-title">实时监测</text>
                <text class="feature-desc">7×24小时心率、血氧、体温、血压等多维健康数据自动采集</text>
              </view>
            </view>
            <view class="feature-item">
              <view class="feature-icon">
                <u-icon name="bell-fill" size="32rpx" color="#F59E0B" />
              </view>
              <view class="feature-info">
                <text class="feature-title">智能预警</text>
                <text class="feature-desc">AI驱动的健康风险识别，异常指标秒级推送，防患于未然</text>
              </view>
            </view>
            <view class="feature-item">
              <view class="feature-icon">
                <u-icon name="grid-fill" size="32rpx" color="#6366F1" />
              </view>
              <view class="feature-info">
                <text class="feature-title">数据看板</text>
                <text class="feature-desc">企业级管理后台，团队健康态势一目了然，决策有据可依</text>
              </view>
            </view>
            <view class="feature-item">
              <view class="feature-icon">
                <u-icon name="checkmark-circle-fill" size="32rpx" color="#10B981" />
              </view>
              <view class="feature-info">
                <text class="feature-title">合规保障</text>
                <text class="feature-desc">符合国家职业健康安全标准，助力企业履行员工关怀义务</text>
              </view>
            </view>
          </view>
        </view>

        <view class="section">
          <view class="section-title">关于我们</view>
          <view class="section-text">
            <text
              >{{ companyInfo.name }}（旗下产品"{{
                companyInfo.shortName
              }}"）是一家专注于智能穿戴设备与健康管理领域的创新型科技企业。公司成立于2018年，总部位于中国深圳，致力于通过物联网、大数据和人工智能技术，为用户提供全方位的健康监测与管理解决方案。</text
            >
          </view>
        </view>

        <view class="section">
          <view class="section-title">核心产品</view>
          <view class="section-text">
            <text
              >我们的旗舰产品「{{
                companyInfo.shortName
              }}」是一款面向企业员工健康管理场景的智能手环系统。产品具备以下核心能力：</text
            >
            <text class="indent">• 实时健康数据采集（心率、血氧、体温、血压等）；</text>
            <text class="indent">• 智能健康预警与异常提醒；</text>
            <text class="indent">• 运动数据追踪与健身指导；</text>
            <text class="indent">• 睡眠质量分析与改善建议；</text>
            <text class="indent">• 企业级数据看板与团队健康管理；</text>
            <text class="indent">• 多端协同（手机App + 小程序 + 管理后台）。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">技术实力</view>
          <view class="section-text">
            <text>公司拥有超过200人的研发团队，核心成员来自华为、小米、OPPO等知名企业。我们已获得以下资质与认证：</text>
            <text class="indent">• 国家高新技术企业认证；</text>
            <text class="indent">• ISO 9001 质量管理体系认证；</text>
            <text class="indent">• ISO 27001 信息安全管理体系认证；</text>
            <text class="indent">• 医疗器械生产许可证（II类）；</text>
            <text class="indent">• 50余项国家发明专利及软件著作权。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">服务覆盖</view>
          <view class="section-text">
            <text>截至目前，{{ companyInfo.shortName }} 已服务于：</text>
            <text class="indent">• 超过 1,000 家企业客户；</text>
            <text class="indent">• 覆盖制造、能源、物流、医疗、教育等多个行业；</text>
            <text class="indent">• 累计接入设备数超 500,000 台；</text>
            <text class="indent">• 日均处理健康数据超 2 亿条。</text>
          </view>
        </view>

        <view class="section">
          <view class="section-title">企业愿景</view>
          <view class="section-text">
            <text>我们的使命是"让每一次心跳都被看见"，愿景是成为全球领先的职场健康管理解决方案提供商。</text>
            <text
              >我们相信，科技应当服务于人的健康与幸福。通过持续的技术创新与服务优化，我们致力于帮助每一家企业构建更健康、更高效的工作环境。</text
            >
          </view>
        </view>

        <view class="contact-card">
          <view class="contact-title">联系我们</view>
          <view class="contact-item">
            <u-icon name="phone" size="28rpx" color="#0d9488" />
            <text>{{ companyInfo.phone }}</text>
          </view>
          <view class="contact-item">
            <u-icon name="email" size="28rpx" color="#0d9488" />
            <text>{{ companyInfo.email }}</text>
          </view>
          <view class="contact-item">
            <u-icon name="map" size="28rpx" color="#0d9488" />
            <text>{{ companyInfo.address }}</text>
          </view>
        </view>

        <CopyrightInfo />
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { companyInfo } from '@/store'
import CopyrightInfo from '@/components/CopyrightInfo.vue'
</script>

<style lang="scss" scoped>
.intro-page {
  min-height: 100vh;
  background: #f8fafc;
}

.content-scroll {
  height: 100vh;
}

.doc-body {
  padding: 32rpx;
  background: #fff;
}

.doc-title {
  font-size: 38rpx;
  font-weight: 800;
  color: #1e293b;
  text-align: center;
  margin-bottom: 32rpx;
}

.intro-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32rpx 0;
  margin-bottom: 24rpx;

  .intro-logo {
    width: 140rpx;
    height: 140rpx;
    border-radius: 36rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 6rpx 24rpx rgba(13, 148, 136, 0.18);
  }

  .company-name {
    font-size: 32rpx;
    font-weight: 700;
    color: #1e293b;
  }
}

.hero-section {
  margin: 0 -32rpx 16rpx;
  padding: 36rpx 32rpx;
  background: linear-gradient(160deg, #f0fdfa 0%, #ecfeff 40%, #faf5ff 100%);
  border-top: 2rpx solid rgba(13, 148, 136, 0.1);
  border-bottom: 2rpx solid rgba(13, 148, 136, 0.08);

  .hero-tag {
    display: block;
    width: fit-content;
    margin: 0 auto 16rpx;
    padding: 8rpx 24rpx;
    background: linear-gradient(135deg, #0d9488, #14b8a6);
    color: #fff;
    font-size: 24rpx;
    font-weight: 700;
    border-radius: 24rpx;
  }

  .hero-slogan {
    display: block;
    font-size: 30rpx;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 12rpx;
    text-align: center;
  }

  .hero-desc {
    display: block;
    font-size: 25rpx;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 28rpx;
  }
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 20rpx;
  padding: 20rpx;
  background: rgba(255, 255, 255, 0.72);
  border-radius: 16rpx;

  .feature-icon {
    width: 64rpx;
    height: 64rpx;
    min-width: 64rpx;
    border-radius: 18rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
  }

  .feature-info {
    display: flex;
    flex-direction: column;
    gap: 6rpx;
    flex: 1;
  }

  .feature-title {
    font-size: 27rpx;
    font-weight: 700;
    color: #1e293b;
  }

  .feature-desc {
    font-size: 23rpx;
    color: #64748b;
    line-height: 1.55;
  }
}

.section {
  margin-top: 36rpx;
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
  line-height: 1.85;

  text {
    display: block;
    margin-bottom: 12rpx;
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

.contact-card {
  margin-top: 48rpx;
  padding: 28rpx;
  border-radius: 16rpx;
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.06), rgba(20, 184, 166, 0.03));
  border: 2rpx solid rgba(13, 148, 136, 0.12);

  .contact-title {
    font-size: 28rpx;
    font-weight: 700;
    color: #0d9488;
    margin-bottom: 20rpx;
    text-align: center;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16rpx;
  padding: 14rpx 0;

  text {
    font-size: 26rpx;
    color: #475569;
  }
}
</style>
